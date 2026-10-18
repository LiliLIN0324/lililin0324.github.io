/**
 * Shared R2 key layout for portfolio figures.
 *
 * Public objects are served from the lili-assets bucket:
 *   https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/<slug>/<file>
 *
 * Local source of truth (not in this repo) is the Windows folder E:\fig\<slug>\
 * with the same folder name as <slug>, plus portfolio PDFs on E:\ that are
 * rasterized into that layout before upload.
 */

export const R2_BUCKET = 'lili-assets';
export const R2_PUBLIC_BASE = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev';
export const FIG_PREFIX = 'fig';

export const IMAGE_CONTENT_TYPES = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
};

const IMAGE_EXTS = new Set(Object.keys(IMAGE_CONTENT_TYPES));

export function padPage(pageNumber, width = 2) {
  const n = Number(pageNumber);
  if (!Number.isInteger(n) || n < 1) {
    throw new Error(`page number must be a positive integer (got ${pageNumber})`);
  }
  return String(n).padStart(width, '0');
}

export function pageFileName(pageNumber, ext, width = 2) {
  const normalized = ext.startsWith('.') ? ext.toLowerCase() : `.${ext.toLowerCase()}`;
  if (!IMAGE_EXTS.has(normalized)) {
    throw new Error(`unsupported image extension: ${ext}`);
  }
  return `${padPage(pageNumber, width)}${normalized}`;
}

/**
 * pdftoppm writes prefix-1.jpg, prefix-2.jpg, ... (not zero-padded).
 * Return those names sorted by page number.
 */
export function sortPdftoppmOutputs(names) {
  return names
    .map((name) => {
      const match = String(name).match(/-(\d+)\.(jpe?g|png|webp)$/i);
      return match ? { name: String(name), page: Number(match[1]) } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.page - b.page || a.name.localeCompare(b.name));
}

export function assertSlug(slug) {
  if (typeof slug !== 'string' || slug.trim() === '') {
    throw new Error('slug is required');
  }
  if (
    slug !== slug.trim() ||
    slug.includes('/') ||
    slug.includes('\\') ||
    slug.includes('..') ||
    slug.startsWith('.')
  ) {
    throw new Error(`unsafe slug: ${JSON.stringify(slug)}`);
  }
  return slug;
}

export function isKebabSlug(slug) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export function assertImageFileName(filename) {
  if (typeof filename !== 'string' || filename.trim() === '') {
    throw new Error('filename is required');
  }
  if (
    filename !== filename.trim() ||
    filename.includes('/') ||
    filename.includes('\\') ||
    filename === '.' ||
    filename === '..' ||
    filename.includes('\0')
  ) {
    throw new Error(`unsafe filename: ${JSON.stringify(filename)}`);
  }
  return filename;
}

export function contentTypeFor(filename) {
  const ext = filename.slice(filename.lastIndexOf('.')).toLowerCase();
  const type = IMAGE_CONTENT_TYPES[ext];
  if (!type) {
    throw new Error(`unsupported image type: ${filename}`);
  }
  return type;
}

/** Object key inside the bucket, e.g. fig/chicken-utopia/01.jpg */
export function figObjectKey(slug, filename) {
  return `${FIG_PREFIX}/${assertSlug(slug)}/${assertImageFileName(filename)}`;
}

export function publicObjectUrl(key) {
  const encoded = String(key)
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `${R2_PUBLIC_BASE}/${encoded}`;
}

export function planUploads({ bucket = R2_BUCKET, slug, files, cacheControl }) {
  return files.map((file) => {
    const key = figObjectKey(slug, file);
    return {
      bucket,
      key,
      objectPath: `${bucket}/${key}`,
      contentType: contentTypeFor(file),
      cacheControl,
      publicUrl: publicObjectUrl(key),
    };
  });
}

/**
 * Wrangler uploads one object per invocation.
 * https://developers.cloudflare.com/workers/wrangler/commands/r2/#r2-object-put
 * --remote writes to the real bucket rather than Wrangler's local simulation.
 */
export function buildWranglerPutArgs({ bucket, key, file, contentType, cacheControl }) {
  if (!bucket || !key || !file || !contentType) {
    throw new Error('bucket, key, file, and contentType are required');
  }
  const args = [
    'r2',
    'object',
    'put',
    `${bucket}/${key}`,
    '--file',
    file,
    '--content-type',
    contentType,
    '--remote',
  ];
  if (cacheControl) {
    args.push('--cache-control', cacheControl);
  }
  return args;
}
