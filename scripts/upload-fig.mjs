#!/usr/bin/env node
/**
 * Upload a local fig/<slug>/ folder to R2 bucket lili-assets.
 *
 * Dry-run unless --upload is passed. Nothing in this script embeds credentials.
 * Authenticate with `npx wrangler login` or CLOUDFLARE_API_TOKEN before --upload.
 *
 *   node scripts/upload-fig.mjs --dir "E:\\fig\\scendance" --slug scendance
 *   node scripts/upload-fig.mjs --dir asset-out/fig/scendance --slug scendance --upload
 */

import { spawnSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  R2_BUCKET,
  buildWranglerPutArgs,
  contentTypeFor,
  isKebabSlug,
  planUploads,
} from './lib/fig-layout.mjs';

const CACHE_CONTROL = 'public, max-age=86400';
const WRANGLER_MAX_BYTES = 300 * 1024 * 1024;

function usage() {
  return `Usage: node scripts/upload-fig.mjs --dir <folder> --slug <slug> [--upload]

--dir is the folder of images for one project (E:\\fig\\<slug> or asset-out/fig/<slug>).
Files are uploaded as fig/<slug>/<filename> in bucket ${R2_BUCKET}.
Subfolders are skipped. Without --upload, this only prints the plan.

Wrangler docs: https://developers.cloudflare.com/workers/wrangler/commands/r2/#r2-object-put
Each object is one \`wrangler r2 object put\` call with --remote.`;
}

export function parseArgs(argv) {
  const opts = { dir: '', slug: '', upload: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') opts.help = true;
    else if (arg === '--upload') opts.upload = true;
    else if (arg === '--dir') {
      opts.dir = argv[i + 1];
      i += 1;
    } else if (arg === '--slug') {
      opts.slug = argv[i + 1];
      i += 1;
    } else throw new Error(`unknown argument: ${arg}`);
  }
  return opts;
}

export function listImageFiles(dir) {
  return readdirSync(dir)
    .filter((name) => {
      const full = path.join(dir, name);
      if (!statSync(full).isFile()) return false;
      try {
        contentTypeFor(name);
        return true;
      } catch {
        return false;
      }
    })
    .sort((a, b) => a.localeCompare(b));
}

function resolveWrangler() {
  if (process.env.WRANGLER) return { cmd: process.env.WRANGLER, prefix: [] };
  const local = path.resolve('node_modules', '.bin', 'wrangler');
  try {
    if (statSync(local).isFile()) return { cmd: local, prefix: [] };
  } catch {
    /* not installed in this repo */
  }
  const onPath = spawnSync('wrangler', ['--version'], { stdio: 'ignore' });
  if (!onPath.error && onPath.status === 0) return { cmd: 'wrangler', prefix: [] };
  const npx = spawnSync('npx', ['--no-install', 'wrangler', '--version'], { stdio: 'ignore' });
  if (!npx.error && npx.status === 0) return { cmd: 'npx', prefix: ['--no-install', 'wrangler'] };
  return null;
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help || !opts.dir || !opts.slug) {
    console.log(usage());
    if (!opts.help) process.exit(1);
    return;
  }
  if (!isKebabSlug(opts.slug)) {
    console.warn(
      `warning: slug ${JSON.stringify(opts.slug)} is not kebab-case. The site's fig folders use kebab-case.`,
    );
  }
  const dir = path.resolve(opts.dir);
  const names = listImageFiles(dir);
  if (names.length === 0) {
    throw new Error(`no jpg, png, webp, or gif files in ${dir}`);
  }
  const plan = planUploads({
    slug: opts.slug,
    files: names,
    cacheControl: CACHE_CONTROL,
  });

  console.log(`${opts.upload ? 'upload' : 'dry-run'}: ${plan.length} object(s) -> ${R2_BUCKET}`);
  for (const item of plan) {
    const bytes = statSync(path.join(dir, path.basename(item.key))).size;
    const flag = bytes > WRANGLER_MAX_BYTES ? ' TOO_LARGE' : '';
    console.log(`${item.objectPath}\t${item.contentType}\t${bytes}${flag}`);
    console.log(`  ${item.publicUrl}`);
  }
  const oversized = plan.filter((item) => statSync(path.join(dir, path.basename(item.key))).size > WRANGLER_MAX_BYTES);
  if (oversized.length > 0) {
    throw new Error(
      `${oversized.length} file(s) exceed Wrangler's per-object upload limit (~315 MB). Use rclone for those: https://developers.cloudflare.com/r2/objects/upload-objects/`,
    );
  }
  if (!opts.upload) {
    console.log('Dry run only. Re-run with --upload after wrangler login.');
    return;
  }

  const wrangler = resolveWrangler();
  if (!wrangler) {
    throw new Error(
      'wrangler is not available. Install it (`npm install --save-dev wrangler`) or set WRANGLER to the executable. Log in with `npx wrangler login` or CLOUDFLARE_API_TOKEN. This script does not store tokens.',
    );
  }
  for (const item of plan) {
    const file = path.join(dir, path.basename(item.key));
    const args = [
      ...wrangler.prefix,
      ...buildWranglerPutArgs({
        bucket: item.bucket,
        key: item.key,
        file,
        contentType: item.contentType,
        cacheControl: item.cacheControl,
      }),
    ];
    console.log(`+ ${wrangler.cmd} ${args.join(' ')}`);
    const result = spawnSync(wrangler.cmd, args, { stdio: 'inherit' });
    if (result.error) throw result.error;
    if (result.status !== 0) {
      throw new Error(`wrangler exited ${result.status} while uploading ${item.key}`);
    }
  }
  console.log('Upload finished.');
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
