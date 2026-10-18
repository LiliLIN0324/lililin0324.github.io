#!/usr/bin/env node
/**
 * Upload a staged fig/<slug>/ folder to the lili-assets R2 bucket.
 * Dry-run by default: prints wrangler commands and public URLs.
 * Pass --upload to actually put objects. Requires wrangler auth.
 * See scripts/ASSETS.md.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { assertSlug, parseArgs } from './args.mjs';
import {
  IMAGE_EXTS,
  R2_BUCKET,
  REPO_ROOT,
  contentTypeFor,
  figKey,
  publicUrl,
} from './config.mjs';

const HELP = `Upload assets-out/fig/<slug>/ to R2. Dry-run unless --upload is set.

Usage (from the repo root):
  node scripts/assets/upload-fig.mjs --slug heatmapper
  node scripts/assets/upload-fig.mjs --slug heatmapper --upload

Options:
  --slug     R2 folder under fig/. Required.
  --dir      Folder of images to upload. Default: assets-out/fig/<slug>
  --bucket   Override R2_BUCKET (default lili-assets).
  --upload   Put objects with wrangler. Without this flag nothing is sent.
`;

function die(message) {
  console.error(message);
  process.exit(1);
}

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

function wranglerInvocation() {
  const which = spawnSync(process.platform === 'win32' ? 'where' : 'which', ['wrangler'], {
    encoding: 'utf8',
  });
  if (which.status === 0) return { cmd: 'wrangler', prefix: [] };
  return { cmd: 'npx', prefix: ['--yes', 'wrangler'] };
}

function listUploadFiles(dir) {
  return readdirSync(dir)
    .filter((name) => IMAGE_EXTS.has(extname(name).toLowerCase()))
    .sort(naturalSort);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || args.h) {
    console.log(HELP);
    return;
  }

  let slug;
  try {
    slug = assertSlug(args.slug);
  } catch (error) {
    die(error.message);
  }

  const bucket = typeof args.bucket === 'string' ? args.bucket : R2_BUCKET;
  if (!/^[a-z0-9][a-z0-9-]{1,62}$/.test(bucket)) {
    die(`Refusing bucket name "${bucket}".`);
  }

  const dir = resolve(
    typeof args.dir === 'string' ? args.dir : join(REPO_ROOT, 'assets-out', 'fig', slug),
  );
  if (!existsSync(dir) || !statSync(dir).isDirectory()) {
    die(`Nothing to upload at ${dir}. Export pages first.`);
  }

  const files = listUploadFiles(dir);
  if (files.length === 0) die(`No images in ${dir}.`);

  const wrangler = wranglerInvocation();
  const upload = args.upload === true;
  console.log(upload ? `Uploading ${files.length} object(s) to ${bucket}.` : `Dry run. ${files.length} object(s) would be uploaded to ${bucket}.`);
  console.log('');

  for (const name of files) {
    const key = figKey(slug, name);
    const file = join(dir, name);
    const type = contentTypeFor(name);
    const cmdArgs = [
      ...wrangler.prefix,
      'r2',
      'object',
      'put',
      `${bucket}/${key}`,
      `--file=${file}`,
      `--content-type=${type}`,
      '--remote',
    ];
    const printable = [wrangler.cmd, ...cmdArgs]
      .map((arg) => (/[\s"]/.test(arg) ? `"${arg.replaceAll('"', '\\"')}"` : arg))
      .join(' ');
    console.log(publicUrl(key));
    console.log(printable);
    if (upload) {
      const result = spawnSync(wrangler.cmd, cmdArgs, { stdio: 'inherit' });
      if (result.error) die(result.error.message);
      if (result.status !== 0) die(`Upload failed for ${key} (wrangler status ${result.status}).`);
    }
    console.log('');
  }

  if (!upload) {
    console.log('No objects were uploaded. Re-run with --upload after `npx wrangler login`.');
  } else {
    console.log(`Uploaded ${files.length} object(s). Paste the URLs above into the project markdown.`);
    console.log(`A copy of the snippet is in ${join(dir, 'URLS.md')} if you exported with export-pages.mjs.`);
  }
}

main();
