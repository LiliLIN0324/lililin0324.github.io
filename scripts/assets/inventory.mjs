#!/usr/bin/env node
/**
 * Report how the site references images: R2 URLs vs files on disk.
 * Read-only. Does not contact the network. See scripts/ASSETS.md.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { parseArgs } from './args.mjs';
import { REPO_ROOT } from './config.mjs';

const SKIP_DIRS = new Set([
  'node_modules',
  '.git',
  'docs',
  'dist',
  '.vite',
  'assets-out',
  '_quarantine',
]);

const TEXT_EXT = new Set(['.tsx', '.ts', '.jsx', '.js', '.mjs', '.cjs', '.md', '.html', '.css', '.json']);
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.pdf', '.svg']);

const LILI_HOST = 'pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev';

function walk(dir, predicate, acc = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    const info = statSync(full);
    if (info.isDirectory()) walk(full, predicate, acc);
    else if (predicate(name)) acc.push(full);
  }
  return acc;
}

function rel(file) {
  return relative(REPO_ROOT, file).split('\\').join('/');
}

function collect() {
  const textFiles = walk(REPO_ROOT, (name) => TEXT_EXT.has(extname(name).toLowerCase()));
  const urlRe = /https:\/\/pub-[a-z0-9]+\.r2\.dev\/[^\s"'`)<>\\]+/g;
  const byHost = new Map();
  const figDirs = new Map();
  const figRootFiles = new Map();
  const figPrefixes = new Map();
  const otherKeys = new Map();
  let urlCount = 0;

  const hasExt = (name) => /\.[a-z0-9]{2,5}$/i.test(name);

  for (const file of textFiles) {
    const text = readFileSync(file, 'utf8');
    const seen = new Set();
    for (const match of text.matchAll(urlRe)) {
      const raw = match[0].replace(/\\+$/, '').replace(/[.,;]+$/, '').split('#')[0];
      if (seen.has(raw)) continue;
      seen.add(raw);
      let url;
      try {
        url = new URL(raw);
      } catch {
        continue;
      }
      urlCount += 1;
      byHost.set(url.host, (byHost.get(url.host) || 0) + 1);
      const parts = url.pathname.split('/').filter(Boolean).map((part) => {
        try {
          return decodeURIComponent(part);
        } catch {
          return part;
        }
      });
      const source = rel(file);
      if (url.host === LILI_HOST && parts[0] === 'fig' && parts.length >= 3 && hasExt(parts.at(-1))) {
        const slug = parts[1];
        if (!figDirs.has(slug)) figDirs.set(slug, new Set());
        figDirs.get(slug).add(source);
      } else if (url.host === LILI_HOST && parts[0] === 'fig' && parts.length === 2 && hasExt(parts[1])) {
        const name = parts[1];
        if (!figRootFiles.has(name)) figRootFiles.set(name, new Set());
        figRootFiles.get(name).add(source);
      } else if (url.host === LILI_HOST && parts[0] === 'fig') {
        const prefix = parts.slice(1).join('/');
        if (!figPrefixes.has(prefix)) figPrefixes.set(prefix, new Set());
        figPrefixes.get(prefix).add(source);
      } else {
        const key = parts.join('/') || '(bucket root)';
        if (!otherKeys.has(url.host)) otherKeys.set(url.host, new Map());
        const hostMap = otherKeys.get(url.host);
        if (!hostMap.has(key)) hostMap.set(key, new Set());
        hostMap.get(key).add(source);
      }
    }
  }

  const localImages = walk(REPO_ROOT, (name) => IMAGE_EXT.has(extname(name).toLowerCase())).map(rel);

  return { textFiles: textFiles.length, urlCount, byHost, figDirs, figRootFiles, figPrefixes, otherKeys, localImages };
}

function printReport(data) {
  console.log(`Scanned ${data.textFiles} source files (docs/, dist/, and _quarantine/ excluded).`);
  console.log(`Unique R2 URLs: ${data.urlCount}`);
  console.log('');
  console.log('Hosts');
  for (const [host, count] of [...data.byHost.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${count}\t${host}`);
  }
  console.log('');
  console.log(`fig/<slug>/ folders referenced (${data.figDirs.size})`);
  for (const slug of [...data.figDirs.keys()].sort()) {
    const sources = [...data.figDirs.get(slug)].sort();
    console.log(`  ${slug}\t${sources.join(', ')}`);
  }
  console.log('');
  console.log(`Loose files at fig/<file> (${data.figRootFiles.size})`);
  for (const name of [...data.figRootFiles.keys()].sort()) {
    console.log(`  ${name}`);
  }
  console.log('');
  console.log(`fig/ prefix constants, no filename (${data.figPrefixes.size})`);
  for (const prefix of [...data.figPrefixes.keys()].sort()) {
    const sources = [...data.figPrefixes.get(prefix)].sort();
    console.log(`  ${prefix ? `fig/${prefix}` : 'fig/'}\t${sources.join(', ')}`);
  }
  console.log('');
  console.log('Other R2 keys (videos, PDFs, certificates, the second data bucket)');
  for (const [host, keys] of data.otherKeys.entries()) {
    const grouped = new Map();
    for (const key of keys.keys()) {
      const top = key.split('/')[0];
      grouped.set(top, (grouped.get(top) || 0) + 1);
    }
    console.log(`  ${host}`);
    for (const [top, count] of [...grouped.entries()].sort((a, b) => b[1] - a[1])) {
      console.log(`    ${count}\t${top}`);
    }
  }
  console.log('');
  console.log(`Image/PDF files committed outside docs/ (${data.localImages.length})`);
  for (const file of data.localImages) console.log(`  ${file}`);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log('Usage: node scripts/assets/inventory.mjs [--json]');
    return;
  }
  const data = collect();
  if (args.json) {
    const plain = {
      textFiles: data.textFiles,
      urlCount: data.urlCount,
      hosts: Object.fromEntries(data.byHost),
      figFolders: [...data.figDirs.keys()].sort(),
      figRootFiles: [...data.figRootFiles.keys()].sort(),
      figPrefixes: [...data.figPrefixes.keys()].sort(),
      localImages: data.localImages,
    };
    console.log(JSON.stringify(plain, null, 2));
    return;
  }
  printReport(data);
}

main();
