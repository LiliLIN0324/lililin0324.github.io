#!/usr/bin/env node
/**
 * PDF or local image folder → numbered fig/<slug>/ files → optional R2 upload.
 * Upload is dry-run unless --upload is passed. See scripts/ASSETS.md.
 */
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from './args.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));

const HELP = `Stage fig/<slug>/ images and print (or perform) the R2 upload.

Usage (from the repo root):
  node scripts/assets/pipeline.mjs --slug <slug> --pdf <file.pdf>
  node scripts/assets/pipeline.mjs --slug <slug> --images "E:\\fig\\<slug>"
  node scripts/assets/pipeline.mjs --slug <slug> --images "E:\\fig\\<slug>" --upload

Everything except --upload is forwarded to export-pages.mjs.
--upload is forwarded to upload-fig.mjs. Omit it for a dry run.

Shared options: --slug --out --format jpg|webp --dpi --quality --logo --start --bucket
`;

function die(message) {
  console.error(message);
  process.exit(1);
}

function forward(script, args) {
  const result = spawnSync(process.execPath, [join(HERE, script), ...args], { stdio: 'inherit' });
  if (result.error) die(result.error.message);
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || args.h || process.argv.length <= 2) {
    console.log(HELP);
    return;
  }

  const exportArgs = [];
  const pass = ['slug', 'pdf', 'images', 'out', 'format', 'dpi', 'quality', 'logo', 'start'];
  for (const key of pass) {
    if (typeof args[key] === 'string') exportArgs.push(`--${key}`, args[key]);
  }
  forward('export-pages.mjs', exportArgs);

  const uploadArgs = [];
  if (typeof args.slug === 'string') uploadArgs.push('--slug', args.slug);
  if (typeof args.bucket === 'string') uploadArgs.push('--bucket', args.bucket);
  if (typeof args.out === 'string' && typeof args.slug === 'string') {
    uploadArgs.push('--dir', join(args.out, 'fig', args.slug));
  }
  if (args.upload === true) uploadArgs.push('--upload');
  forward('upload-fig.mjs', uploadArgs);
}

main();
