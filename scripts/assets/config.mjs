import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Repo root, so npm scripts work even if the shell is not sitting in it. */
export const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

/** Cloudflare R2 bucket that serves the public portfolio media. */
export const R2_BUCKET = process.env.R2_BUCKET || 'lili-assets';

/**
 * r2.dev public base for `lili-assets`.
 * Override with R2_PUBLIC_BASE if the bucket moves to a custom domain.
 */
export const R2_PUBLIC_BASE = (
  process.env.R2_PUBLIC_BASE || 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev'
).replace(/\/$/, '');

export const FIG_PREFIX = 'fig';

export const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

export function pad(n) {
  return String(n).padStart(2, '0');
}

/** Object key inside the bucket, always forward-slash, never URL-encoded. */
export function figKey(slug, filename) {
  if (filename.includes('/') || filename.includes('\\') || filename.includes('..')) {
    throw new Error(`Unsafe object filename: ${filename}`);
  }
  return `${FIG_PREFIX}/${slug}/${filename}`;
}

/** Public URL. Each path segment is encoded so spaces and non-ASCII keys survive markdown. */
export function publicUrl(key) {
  const encoded = key.split('/').map((part) => encodeURIComponent(part)).join('/');
  return `${R2_PUBLIC_BASE}/${encoded}`;
}

export function contentTypeFor(filename) {
  const ext = filename.slice(filename.lastIndexOf('.')).toLowerCase();
  switch (ext) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.webp':
      return 'image/webp';
    case '.gif':
      return 'image/gif';
    case '.pdf':
      return 'application/pdf';
    default:
      return 'application/octet-stream';
  }
}

/**
 * Frontmatter + markdown snippet for a staged `fig/<slug>/` folder.
 * Only lists files that actually exist — unlike scripts/extend-images.mjs,
 * this does not invent 01..99 placeholders.
 */
export function renderSnippet(slug, pageNames, logoName) {
  const pageUrls = pageNames.map((name) => publicUrl(figKey(slug, name)));
  const lines = [
    `# fig/${slug}`,
    '',
    `Bucket \`${R2_BUCKET}\`, key prefix \`${FIG_PREFIX}/${slug}/\`.`,
    `Public base \`${R2_PUBLIC_BASE}/\`.`,
    '',
  ];

  if (logoName) {
    lines.push(
      '## icon',
      '',
      '```yaml',
      `icon: "${publicUrl(figKey(slug, logoName))}"`,
      '```',
      '',
    );
  }

  lines.push('## frontmatter image array', '', '```yaml');
  if (pageUrls.length === 0) {
    lines.push('image:[]');
  } else {
    lines.push(`image:[${pageUrls.map((url) => `"${url}"`).join(',')}]`);
  }
  lines.push('```', '', '## markdown body', '');
  if (pageUrls.length === 0) {
    lines.push('_No page images in this folder._');
  } else {
    for (const url of pageUrls) lines.push(`![效果展示](${url})`);
  }
  lines.push('');
  return lines.join('\n');
}
