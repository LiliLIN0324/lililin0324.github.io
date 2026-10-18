#!/usr/bin/env node
/**
 * Rasterize a portfolio PDF into fig/<slug>/01.jpg (and optional WebP).
 *
 * Does not upload. Review the files, then run scripts/upload-fig.mjs.
 *
 *   node scripts/pdf-to-fig.mjs --pdf "E:\\portfolio.pdf" --slug scendance
 *   node scripts/pdf-to-fig.mjs --pdf ./deck.pdf --slug scendance --format both --logo "E:\\fig\\scendance\\logo.jpg"
 */

import { spawnSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  isKebabSlug,
  pageFileName,
  publicObjectUrl,
  sortPdftoppmOutputs,
  figObjectKey,
} from './lib/fig-layout.mjs';

const DEFAULT_DPI = 144;
const DEFAULT_QUALITY = 82;

function usage() {
  return `Usage: node scripts/pdf-to-fig.mjs --pdf <file.pdf> --slug <slug> [options]

Options:
  --out <dir>         Staging root (default: asset-out). Writes <out>/fig/<slug>/
  --dpi <n>           Raster DPI passed to pdftoppm (default: ${DEFAULT_DPI})
  --quality <1-100>   JPEG and WebP quality (default: ${DEFAULT_QUALITY})
  --format <name>     jpg, webp, or both (default: both)
  --logo <image>      Also copy this file to logo.<ext> in the slug folder
  --help

Requires poppler (pdftoppm). WebP also needs cwebp, ImageMagick, or ffmpeg.
Output stays on disk. This command never talks to R2.`;
}

export function parseArgs(argv) {
  const opts = {
    pdf: '',
    slug: '',
    out: 'asset-out',
    dpi: DEFAULT_DPI,
    quality: DEFAULT_QUALITY,
    format: 'both',
    logo: '',
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = () => {
      const value = argv[i + 1];
      if (!value || value.startsWith('--')) {
        throw new Error(`missing value for ${arg}`);
      }
      i += 1;
      return value;
    };
    if (arg === '--help' || arg === '-h') opts.help = true;
    else if (arg === '--pdf') opts.pdf = next();
    else if (arg === '--slug') opts.slug = next();
    else if (arg === '--out') opts.out = next();
    else if (arg === '--dpi') opts.dpi = Number(next());
    else if (arg === '--quality') opts.quality = Number(next());
    else if (arg === '--format') opts.format = next();
    else if (arg === '--logo') opts.logo = next();
    else throw new Error(`unknown argument: ${arg}`);
  }
  return opts;
}

function toolExists(cmd) {
  const probe = cmd === 'pdftoppm' ? ['-v'] : ['-version'];
  const result = spawnSync(cmd, probe, { stdio: 'ignore' });
  if (result.error && result.error.code === 'ENOENT') return false;
  return result.status === 0 || result.status === 99;
}

function run(cmd, args) {
  const result = spawnSync(cmd, args, { stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${cmd} exited with status ${result.status}`);
  }
}

function findWebpEncoder() {
  if (toolExists('cwebp')) return 'cwebp';
  if (toolExists('magick')) return 'magick';
  if (toolExists('ffmpeg')) return 'ffmpeg';
  return null;
}

function encodeWebp(encoder, jpgPath, webpPath, quality) {
  if (encoder === 'cwebp') {
    run('cwebp', ['-quiet', '-q', String(quality), jpgPath, '-o', webpPath]);
    return;
  }
  if (encoder === 'magick') {
    run('magick', [jpgPath, '-quality', String(quality), webpPath]);
    return;
  }
  run('ffmpeg', [
    '-y',
    '-loglevel',
    'error',
    '-i',
    jpgPath,
    '-c:v',
    'libwebp',
    '-quality',
    String(quality),
    webpPath,
  ]);
}

export function rasterizePdf(opts) {
  if (!opts.pdf) throw new Error('--pdf is required');
  if (!opts.slug) throw new Error('--slug is required');
  if (!['jpg', 'webp', 'both'].includes(opts.format)) {
    throw new Error('--format must be jpg, webp, or both');
  }
  if (!Number.isInteger(opts.dpi) || opts.dpi < 36 || opts.dpi > 600) {
    throw new Error('--dpi must be an integer from 36 to 600');
  }
  if (!Number.isInteger(opts.quality) || opts.quality < 1 || opts.quality > 100) {
    throw new Error('--quality must be an integer from 1 to 100');
  }
  if (!statSync(opts.pdf).isFile()) {
    throw new Error(`PDF not found: ${opts.pdf}`);
  }
  if (!toolExists('pdftoppm')) {
    throw new Error(
      'pdftoppm is not installed. Install poppler (Windows: choco install poppler, or the poppler build used by pdf2image; macOS: brew install poppler; Debian/Ubuntu: apt install poppler-utils).',
    );
  }

  const wantWebp = opts.format === 'webp' || opts.format === 'both';
  const keepJpg = opts.format === 'jpg' || opts.format === 'both';
  const encoder = wantWebp ? findWebpEncoder() : null;
  if (wantWebp && !encoder) {
    throw new Error(
      'No WebP encoder found. Install webp (cwebp), ImageMagick, or ffmpeg, or pass --format jpg.',
    );
  }

  const destDir = path.resolve(opts.out, 'fig', opts.slug);
  const tmpDir = path.resolve(opts.out, '.tmp', opts.slug);
  mkdirSync(destDir, { recursive: true });
  rmSync(tmpDir, { recursive: true, force: true });
  mkdirSync(tmpDir, { recursive: true });

  const prefix = path.join(tmpDir, 'page');
  try {
    run('pdftoppm', [
      '-jpeg',
      '-r',
      String(opts.dpi),
      '-jpegopt',
      `quality=${opts.quality}`,
      path.resolve(opts.pdf),
      prefix,
    ]);
  } catch (error) {
    run('pdftoppm', ['-jpeg', '-r', String(opts.dpi), path.resolve(opts.pdf), prefix]);
  }

  const pages = sortPdftoppmOutputs(readdirSync(tmpDir));
  if (pages.length === 0) {
    throw new Error(`pdftoppm produced no JPEG pages for ${opts.pdf}`);
  }

  const written = [];
  for (const page of pages) {
    const jpgName = pageFileName(page.page, 'jpg');
    const jpgPath = path.join(destDir, jpgName);
    if (keepJpg) {
      copyFileSync(path.join(tmpDir, page.name), jpgPath);
      written.push(jpgName);
    }
    if (wantWebp) {
      const webpName = pageFileName(page.page, 'webp');
      encodeWebp(encoder, path.join(tmpDir, page.name), path.join(destDir, webpName), opts.quality);
      written.push(webpName);
    }
  }

  if (opts.logo) {
    const ext = path.extname(opts.logo).toLowerCase();
    if (!ext) throw new Error('--logo needs an image extension');
    const logoName = `logo${ext}`;
    copyFileSync(opts.logo, path.join(destDir, logoName));
    written.push(logoName);
  }

  rmSync(tmpDir, { recursive: true, force: true });
  return { destDir, files: written, encoder };
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help || process.argv.length <= 2) {
    console.log(usage());
    process.exit(opts.help ? 0 : 1);
  }
  if (!isKebabSlug(opts.slug)) {
    console.warn(
      `warning: slug ${JSON.stringify(opts.slug)} is not kebab-case. Existing site keys use names like chicken-utopia.`,
    );
  }
  const { destDir, files, encoder } = rasterizePdf(opts);
  console.log(`wrote ${files.length} file(s) to ${destDir}`);
  if (encoder) console.log(`webp encoder: ${encoder}`);
  for (const file of files) {
    console.log(publicObjectUrl(figObjectKey(opts.slug, file)));
  }
  console.log('Not uploaded. Run: node scripts/upload-fig.mjs --dir ' + destDir + ' --slug ' + opts.slug);
}

const isDirectRun = process.argv[1]
  && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  try {
    main();
  } catch (error) {
    console.error(error.message || error);
    process.exit(1);
  }
}
