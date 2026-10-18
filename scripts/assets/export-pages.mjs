#!/usr/bin/env node
/**
 * Turn a portfolio PDF, or a folder of already-exported images, into the
 * R2 key layout on disk:
 *
 *   assets-out/fig/<slug>/01.jpg
 *   assets-out/fig/<slug>/02.jpg
 *   assets-out/fig/<slug>/logo.jpg
 *   assets-out/fig/<slug>/URLS.md
 *
 * Nothing is uploaded and nothing is written into src/, public/, or docs/.
 * See scripts/ASSETS.md.
 */
import { spawnSync } from 'node:child_process';
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, extname, join, resolve, sep } from 'node:path';
import { assertSlug, parseArgs } from './args.mjs';
import { IMAGE_EXTS, REPO_ROOT, pad, renderSnippet } from './config.mjs';

const HELP = `Export pages into assets-out/fig/<slug>/ (no upload).

Usage (from the repo root):
  node scripts/assets/export-pages.mjs --slug <slug> --pdf <file.pdf>
  node scripts/assets/export-pages.mjs --slug <slug> --images <folder>

Windows examples:
  node scripts/assets/export-pages.mjs --slug scendance --pdf "E:\\lili_planning_portfolio.pdf"
  node scripts/assets/export-pages.mjs --slug heatmapper --images "E:\\fig\\heatmapper"

Options:
  --slug       R2 folder under fig/. Lowercase kebab-case. Required.
  --pdf        Portfolio PDF. Requires poppler (pdftoppm) on PATH.
  --images     Folder of source images (E:\\fig\\<slug>). logo.* is kept as the icon.
  --out        Staging root. Default: assets-out (gitignored).
  --format     jpg (default) or webp.
  --dpi        PDF raster DPI. Default: 150.
  --quality    JPEG/WebP quality 1-100. Default: 85. Existing JPEGs are copied as-is.
  --logo       Explicit logo image. Copied to logo.<ext> and omitted from the page list.
  --start      First page number. Default: 1.
`;

function die(message) {
  const error = new Error(message);
  error.userError = true;
  throw error;
}

function commandExists(cmd) {
  const result = spawnSync(cmd, ['-h'], { stdio: 'ignore' });
  return !result.error;
}

function run(cmd, args) {
  const result = spawnSync(cmd, args, { stdio: 'inherit' });
  if (result.error) {
    if (result.error.code === 'ENOENT') {
      die(`Command not found: ${cmd}`);
    }
    die(result.error.message);
  }
  if (result.status !== 0) {
    die(`${cmd} exited with status ${result.status}`);
  }
}

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

function assertOutsideSite(dir) {
  const resolved = resolve(dir);
  const blocked = ['src', 'docs', 'public', 'dist'].map((name) => join(REPO_ROOT, name));
  for (const root of blocked) {
    if (resolved === root || resolved.startsWith(root + sep)) {
      die(`Refusing to write images into ${resolved}. Stage them under assets-out/ and upload to R2.`);
    }
  }
}

function outputExt(format) {
  if (format === 'webp') return '.webp';
  if (format === 'jpg') return '.jpg';
  die(`Unsupported --format ${format}. Use jpg or webp.`);
}

function clearStaged(dir) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    if (/^(?:\d{2,}|logo)\.(?:jpe?g|png|webp|gif)$/i.test(name) || name === 'URLS.md') {
      rmSync(join(dir, name));
    }
  }
}

/**
 * Place one image at destPath.
 * JPEG sources requested as jpg are copied so we do not recompress them.
 * WebP always goes through cwebp or ImageMagick.
 * Other sources requested as jpg are transcoded when ImageMagick is present,
 * otherwise kept with their original extension.
 * Returns the filename actually written.
 */
function placeImage(src, destPath, format, quality) {
  const srcExt = extname(src).toLowerCase();
  if (format === 'jpg' && (srcExt === '.jpg' || srcExt === '.jpeg')) {
    copyFileSync(src, destPath);
    return basename(destPath);
  }

  if (format === 'webp') {
    if (commandExists('cwebp')) {
      run('cwebp', ['-quiet', '-q', String(quality), src, '-o', destPath]);
      return basename(destPath);
    }
    if (commandExists('magick')) {
      run('magick', [src, '-quality', String(quality), destPath]);
      return basename(destPath);
    }
    die('WebP export needs cwebp (libwebp) or ImageMagick (`magick`) on PATH.');
  }

  if (commandExists('magick')) {
    run('magick', [src, '-quality', String(quality), destPath]);
    return basename(destPath);
  }

  const keptExt = srcExt === '.jpeg' ? '.jpg' : srcExt;
  const kept = destPath.replace(/\.jpe?g$/i, keptExt);
  copyFileSync(src, kept);
  console.warn(
    `Kept ${basename(kept)} as ${keptExt}. Install ImageMagick to transcode ${srcExt} to JPEG.`,
  );
  return basename(kept);
}

function listImageSources(folder) {
  if (!existsSync(folder) || !statSync(folder).isDirectory()) {
    die(`Image folder not found: ${folder}`);
  }
  const names = readdirSync(folder).filter((name) => IMAGE_EXTS.has(extname(name).toLowerCase()));
  const logos = names.filter((name) => /^logo\./i.test(name)).sort(naturalSort);
  const pages = names.filter((name) => !/^logo\./i.test(name)).sort(naturalSort);
  if (logos.length > 1) {
    console.warn(`Multiple logo.* files in ${folder}; using ${logos[0]}.`);
  }
  return {
    pages: pages.map((name) => join(folder, name)),
    logo: logos[0] ? join(folder, logos[0]) : null,
  };
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

  const hasPdf = typeof args.pdf === 'string';
  const hasImages = typeof args.images === 'string';
  if (hasPdf === hasImages) {
    die('Pass exactly one of --pdf or --images.\n\n' + HELP);
  }

  const format = typeof args.format === 'string' ? args.format.toLowerCase() : 'jpg';
  const ext = outputExt(format);
  const dpi = Number(args.dpi ?? 150);
  const quality = Number(args.quality ?? 85);
  const start = Number(args.start ?? 1);
  if (!Number.isInteger(dpi) || dpi < 36 || dpi > 600) die('--dpi must be an integer from 36 to 600.');
  if (!Number.isInteger(quality) || quality < 1 || quality > 100) die('--quality must be an integer from 1 to 100.');
  if (!Number.isInteger(start) || start < 0 || start > 999) die('--start must be an integer from 0 to 999.');

  const outRoot = resolve(typeof args.out === 'string' ? args.out : join(REPO_ROOT, 'assets-out'));
  const dest = join(outRoot, 'fig', slug);
  assertOutsideSite(dest);
  mkdirSync(dest, { recursive: true });
  clearStaged(dest);

  let pageSources = [];
  let logoSource = typeof args.logo === 'string' ? resolve(args.logo) : null;
  let pdfWork = null;

  try {
    if (hasPdf) {
      if (!commandExists('pdftoppm')) {
        die(
          'pdftoppm was not found. Install poppler and put it on PATH.\n' +
            '  Windows:  winget install oschwartz10612.Poppler   (or)  choco install poppler\n' +
            '  macOS:    brew install poppler\n' +
            '  Debian:   sudo apt-get install poppler-utils',
        );
      }
      const pdfPath = resolve(args.pdf);
      if (!existsSync(pdfPath)) die(`PDF not found: ${pdfPath}`);
      pdfWork = mkdtempSync(join(tmpdir(), 'r2-pdf-'));
      run('pdftoppm', [
        '-jpeg',
        '-jpegopt',
        `quality=${quality}`,
        '-r',
        String(dpi),
        pdfPath,
        join(pdfWork, 'page'),
      ]);
      pageSources = readdirSync(pdfWork)
        .filter((name) => /^page-\d+\.jpe?g$/i.test(name))
        .sort(naturalSort)
        .map((name) => join(pdfWork, name));
      if (pageSources.length === 0) die(`pdftoppm produced no pages from ${args.pdf}`);
    } else {
      const listed = listImageSources(resolve(args.images));
      pageSources = listed.pages;
      if (!logoSource) logoSource = listed.logo;
      if (pageSources.length === 0 && !logoSource) {
        die(`No images found in ${args.images}`);
      }
    }

    const pageNames = [];
    pageSources.forEach((src, index) => {
      const filename = `${pad(start + index)}${ext}`;
      pageNames.push(placeImage(src, join(dest, filename), format, quality));
    });

    let logoName = null;
    if (logoSource) {
      if (!existsSync(logoSource)) die(`Logo not found: ${logoSource}`);
      logoName = placeImage(logoSource, join(dest, `logo${ext}`), format, quality);
    }

    const snippet = renderSnippet(slug, pageNames, logoName);
    writeFileSync(join(dest, 'URLS.md'), snippet, 'utf8');
    console.log(snippet);
    console.log(`Staged ${pageNames.length} page(s)${logoName ? ' + logo' : ''} at ${dest}`);
    console.log('Review URLS.md, then upload with:');
    console.log(`  node scripts/assets/upload-fig.mjs --slug ${slug} --dir ${dest}`);
  } finally {
    if (pdfWork) rmSync(pdfWork, { recursive: true, force: true });
  }
}

try {
  main();
} catch (error) {
  if (error && error.userError) {
    console.error(error.message);
    process.exit(1);
  }
  throw error;
}
