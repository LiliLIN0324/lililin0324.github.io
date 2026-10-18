#!/usr/bin/env node
/**
 * Inventory how site source refers to images.
 * Scans src/ and the root entry files. Skips docs/ (Vite's GitHub Pages output)
 * so built bundles are not double-counted.
 *
 *   node scripts/inventory-images.mjs
 *   node scripts/inventory-images.mjs --out scripts/image-inventory.md
 */

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { R2_BUCKET, R2_PUBLIC_BASE } from './lib/fig-layout.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TEXT_EXTS = new Set(['.md', '.tsx', '.ts', '.js', '.mjs', '.css', '.html']);
const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg']);
const SKIP_DIRS = new Set(['node_modules', '.git', 'docs', 'dist', '.vite', 'asset-out', 'scripts']);
const R2_ORIGIN = new URL(R2_PUBLIC_BASE).origin;

const LOCAL_RE = /(?:^|[\s"'`(])((?:\/data\/|\.\/|\.\.\/)[^\s"'`()<>]+\.(?:png|jpe?g|webp|gif|svg))/gi;

/**
 * Read absolute URLs out of source text.
 * Parentheses stay when they belong to a filename (`居住区_(1).jpg`).
 * Comma-separated carousel attributes are split into separate URLs.
 */
export function scanHttpUrls(text) {
  const urls = [];
  const start = /https?:\/\//g;
  let match;
  while ((match = start.exec(text))) {
    let i = match.index;
    let value = '';
    while (i < text.length) {
      const ch = text[i];
      if (/[\s"'`<>]/.test(ch)) break;
      if (ch === ',') {
        const rest = text.slice(i + 1);
        if (rest.startsWith('http://') || rest.startsWith('https://')) break;
      }
      if (ch === ')') {
        const next = text[i + 1] || '';
        if (next !== '.' && next !== ')') break;
      }
      if (i > match.index && (text.startsWith('http://', i) || text.startsWith('https://', i))) break;
      value += ch;
      i += 1;
    }
    if (value) urls.push(trimUrlToken(value));
    start.lastIndex = Math.max(i, match.index + 1);
  }
  return urls;
}

/** Drop a markdown closer or sentence punctuation that the URL scan swallowed. */
export function trimUrlToken(raw) {
  let value = raw;
  while (/[.,;:]+$/.test(value)) value = value.replace(/[.,;:]+$/, '');
  for (;;) {
    const open = (value.match(/\(/g) || []).length;
    const close = (value.match(/\)/g) || []).length;
    if (close > open && value.endsWith(')')) value = value.slice(0, -1);
    else break;
  }
  return value;
}

export function collectUrls(text) {
  const urls = scanHttpUrls(text);

  const consts = new Map();
  for (const match of text.matchAll(/const\s+([A-Za-z_][\w]*)\s*=\s*['"](https?:\/\/[^'"]+)['"]/g)) {
    consts.set(match[1], match[2].replace(/\/$/, ''));
  }

  for (const match of text.matchAll(/`([^`]+)`/g)) {
    if (!match[1].includes('${')) continue;
    let unresolved = false;
    const resolved = match[1].replace(/\$\{([A-Za-z_][\w]*)\}/g, (_, name) => {
      if (!consts.has(name)) {
        unresolved = true;
        return '';
      }
      return consts.get(name);
    });
    if (!unresolved && /^https?:\/\//.test(resolved)) urls.push(trimUrlToken(resolved));
  }

  const figBase = [...consts.values()].find((value) => value.endsWith('/fig'));
  if (figBase) {
    for (const match of text.matchAll(/logo\(\s*['"]([^'"]+)['"]\s*\)/g)) {
      urls.push(`${figBase}/${match[1]}/logo.jpg`);
    }
  }

  const certBase = [...consts.values()].find((value) => value.includes('/certificate'));
  if (certBase) {
    const prefix = certBase.endsWith('/') ? certBase : `${certBase}/`;
    for (const match of text.matchAll(/file:\s*['"]([^'"]+\.(?:jpe?g|png|webp|gif))['"]/gi)) {
      urls.push(`${prefix}${match[1]}`);
    }
  }

  return urls;
}

function walk(dir, files) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = path.join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full, files);
    } else if (TEXT_EXTS.has(path.extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

function sourceFiles() {
  const files = walk(path.join(ROOT, 'src'), []);
  for (const entry of readdirSync(ROOT)) {
    const full = path.join(ROOT, entry);
    if (!statSync(full).isFile()) continue;
    if (TEXT_EXTS.has(path.extname(entry)) && entry !== 'package-lock.json') {
      files.push(full);
    }
  }
  return files.sort();
}

export function classifyUrl(raw) {
  const cleaned = raw.replace(/[.,;:]+$/, '');
  let url;
  try {
    url = new URL(cleaned);
  } catch {
    return null;
  }
  const ext = path.extname(url.pathname).toLowerCase();
  if (!ext) return null;
  const key = decodeURIComponent(url.pathname.replace(/^\//, ''));
  if (url.host.endsWith('.r2.dev') && url.origin !== R2_ORIGIN) {
    return { kind: 'r2-foreign', key: `${url.host}/${key}`, ext };
  }
  if (url.origin === R2_ORIGIN) {
    if (key.startsWith('fig/')) {
      const rest = key.slice('fig/'.length);
      const slash = rest.indexOf('/');
      if (slash === -1) {
        return { kind: 'r2-fig-loose', key, ext, file: rest };
      }
      return {
        kind: 'r2-fig',
        key,
        ext,
        slug: rest.slice(0, slash),
        file: rest.slice(slash + 1),
      };
    }
    if (key.startsWith('certificate/')) {
      return { kind: 'r2-certificate', key, ext, file: key.slice('certificate/'.length) };
    }
    return { kind: 'r2-other', key, ext };
  }
  if (IMAGE_EXTS.has(ext)) {
    return { kind: 'third-party', host: url.host, key: url.pathname };
  }
  return null;
}

function rel(file) {
  return path.relative(ROOT, file).split(path.sep).join('/');
}

function committedBinaries() {
  const found = [];
  function visit(dir) {
    for (const entry of readdirSync(dir)) {
      if (SKIP_DIRS.has(entry) || entry === '.git') continue;
      const full = path.join(dir, entry);
      let stat;
      try {
        stat = statSync(full);
      } catch {
        continue;
      }
      if (stat.isDirectory()) visit(full);
      else if (IMAGE_EXTS.has(path.extname(entry).toLowerCase())) {
        found.push({ file: rel(full), bytes: stat.size });
      }
    }
  }
  visit(ROOT);
  return found.sort((a, b) => a.file.localeCompare(b.file));
}

export function inventory() {
  const files = sourceFiles();
  const buckets = {
    'r2-fig': new Map(),
    'r2-fig-loose': new Map(),
    'r2-certificate': new Map(),
    'r2-other': new Map(),
    'r2-foreign': new Map(),
    'third-party': new Map(),
    local: new Map(),
  };
  const bump = (map, key, file) => {
    if (!map.has(key)) map.set(key, { files: new Set(), count: 0 });
    const row = map.get(key);
    row.files.add(file);
    row.count += 1;
  };

  for (const file of files) {
    const text = readFileSync(file, 'utf8');
    const where = rel(file);
    for (const url of collectUrls(text)) {
      const item = classifyUrl(url);
      if (!item) continue;
      const id = item.kind === 'third-party' ? `${item.host}${item.key}` : item.key;
      bump(buckets[item.kind], id, where);
    }
    for (const match of text.matchAll(LOCAL_RE)) {
      bump(buckets.local, match[1], where);
    }
  }

  return { files: files.map(rel), buckets, binaries: committedBinaries() };
}

function countRefs(map) {
  let refs = 0;
  for (const row of map.values()) refs += row.count;
  return refs;
}

function slugSummary(figMap) {
  const slugs = new Map();
  for (const key of figMap.keys()) {
    const rest = key.slice('fig/'.length);
    const slash = rest.indexOf('/');
    const slug = rest.slice(0, slash);
    const file = rest.slice(slash + 1);
    if (!slugs.has(slug)) slugs.set(slug, []);
    slugs.get(slug).push(file);
  }
  return [...slugs.entries()]
    .map(([slug, files]) => {
      const numbered = files
        .map((file) => {
          const match = file.match(/^(\d+)\.(jpe?g|png|webp)$/i);
          return match ? Number(match[1]) : null;
        })
        .filter((n) => n != null)
        .sort((a, b) => a - b);
      const named = files.filter((file) => !/^\d+\.(jpe?g|png|webp)$/i.test(file)).sort();
      const uniqueNumbers = [...new Set(numbered)];
      return {
        slug,
        objects: files.length,
        numbered: uniqueNumbers.length,
        min: uniqueNumbers[0] ?? null,
        max: uniqueNumbers[uniqueNumbers.length - 1] ?? null,
        named,
      };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function renderMarkdown(report) {
  const fig = slugSummary(report.buckets['r2-fig']);
  const loose = [...report.buckets['r2-fig-loose'].keys()].sort();
  const certs = [...report.buckets['r2-certificate'].keys()].sort();
  const other = [...report.buckets['r2-other'].keys()].sort();
  const third = [...report.buckets['third-party'].keys()].sort();
  const foreign = [...report.buckets['r2-foreign'].keys()].sort();
  const local = [...report.buckets.local.keys()].sort();
  const lines = [];
  lines.push('# Image reference inventory');
  lines.push('');
  lines.push('Generated by `node scripts/inventory-images.mjs`. Source files only: `src/` and root entry files. `docs/` is the Vite build published by GitHub Pages and is not counted.');
  lines.push('');
  lines.push(`- R2 bucket: \`${R2_BUCKET}\``);
  lines.push(`- Public base: \`${R2_PUBLIC_BASE}/\``);
  lines.push(`- Source files scanned: ${report.files.length}`);
  lines.push('');
  lines.push('## Where images live');
  lines.push('');
  lines.push('| Kind | Unique objects | References in source |');
  lines.push('| --- | ---: | ---: |');
  lines.push(`| R2 \`fig/<slug>/<file>\` | ${report.buckets['r2-fig'].size} | ${countRefs(report.buckets['r2-fig'])} |`);
  lines.push(`| R2 \`fig/<file>\` (no project folder) | ${loose.length} | ${countRefs(report.buckets['r2-fig-loose'])} |`);
  lines.push(`| R2 \`certificate/<file>\` | ${certs.length} | ${countRefs(report.buckets['r2-certificate'])} |`);
  lines.push(`| R2 other keys on this bucket (pdf, mp4, and the rest) | ${other.length} | ${countRefs(report.buckets['r2-other'])} |`);
  lines.push(`| Other \`*.r2.dev\` hosts | ${foreign.length} | ${countRefs(report.buckets['r2-foreign'])} |`);
  lines.push(`| Local \`/data/\` or relative image paths | ${local.length} | ${countRefs(report.buckets.local)} |`);
  lines.push(`| Third-party image URLs (map tiles, Leaflet markers) | ${third.length} | ${countRefs(report.buckets['third-party'])} |`);
  lines.push(`| Raster files committed in the repo | ${report.binaries.length} | — |`);
  lines.push('');
  lines.push('Portfolio figures are referenced by R2 URL. `public/data/` still holds CSV cluster data for demos. There is no `public/data/fig/` tree in the repo; the README note about local figures is historical.');
  lines.push('');
  lines.push('## fig/<slug> folders');
  lines.push('');
  lines.push('| Slug | Unique objects | Numbered frames | Range | Other names |');
  lines.push('| --- | ---: | ---: | --- | --- |');
  for (const row of fig) {
    const range = row.numbered ? `${String(row.min).padStart(2, '0')}–${String(row.max).padStart(2, '0')}` : '—';
    const named = row.named.length ? row.named.join(', ') : '—';
    lines.push(`| \`${row.slug}\` | ${row.objects} | ${row.numbered} | ${range} | ${named} |`);
  }
  lines.push('');
  lines.push('`Numbered frames` is the count of distinct `01`, `02`, … indexes. `Unique objects` is higher when the same index is referenced as more than one extension (jpg and png).');
  lines.push('');
  lines.push('Many project markdown files list frames `01` through `99` because `scripts/extend-images.mjs` rewrites a detected sequence up to 99. Those URLs are references, not proof that every object exists in the bucket.');
  lines.push('');
  lines.push('## Loose fig/ files');
  lines.push('');
  if (loose.length === 0) lines.push('None.');
  else for (const key of loose) lines.push(`- \`${key}\``);
  lines.push('');
  lines.push('## Certificate keys');
  lines.push('');
  lines.push('Built in `src/components/AboutSection.tsx` as `certificate/<filename>`.');
  lines.push('');
  if (certs.length === 0) lines.push('None.');
  else for (const key of certs) lines.push(`- \`${key}\``);
  lines.push('');
  lines.push('## Other R2 keys');
  lines.push('');
  if (other.length === 0) lines.push('None.');
  else for (const key of other) lines.push(`- \`${key}\``);
  lines.push('');
  lines.push('## Local and committed files');
  lines.push('');
  if (local.length === 0) {
    lines.push('No live source file points at a `/data/fig/` or relative image path.');
  } else {
    for (const key of local) lines.push(`- \`${key}\``);
  }
  lines.push('');
  if (report.binaries.length === 0) {
    lines.push('No raster binaries are committed outside ignored build folders.');
  } else {
    lines.push('Committed rasters (prefer R2 URLs over adding more of these):');
    lines.push('');
    for (const item of report.binaries) {
      lines.push(`- \`${item.file}\` (${item.bytes} bytes)`);
    }
  }
  lines.push('');
  lines.push('## Other R2 hosts');
  lines.push('');
  lines.push('These are not the `lili-assets` figure bucket. They show up as data fetches (geojson, zip) and are left alone by the figure pipeline.');
  lines.push('');
  if (foreign.length === 0) lines.push('None.');
  else for (const key of foreign) lines.push(`- \`${key}\``);
  lines.push('');
  lines.push('## Third-party images');
  lines.push('');
  lines.push('Map tiles and Leaflet marker icons. They are not portfolio assets.');
  lines.push('');
  for (const key of third) lines.push(`- \`${key}\``);
  lines.push('');
  return `${lines.join('\n')}\n`;
}

function main() {
  const outFlag = process.argv.indexOf('--out');
  const markdown = renderMarkdown(inventory());
  if (outFlag !== -1) {
    const dest = path.resolve(process.argv[outFlag + 1]);
    writeFileSync(dest, markdown);
    console.log(`wrote ${dest}`);
  } else {
    process.stdout.write(markdown);
  }
}

const isDirectRun = process.argv[1]
  && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) main();
