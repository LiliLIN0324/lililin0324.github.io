import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  R2_BUCKET,
  R2_PUBLIC_BASE,
  buildWranglerPutArgs,
  contentTypeFor,
  figObjectKey,
  isKebabSlug,
  pageFileName,
  planUploads,
  publicObjectUrl,
  sortPdftoppmOutputs,
} from './fig-layout.mjs';

test('page files are zero-padded jpg or webp', () => {
  assert.equal(pageFileName(1, 'jpg'), '01.jpg');
  assert.equal(pageFileName(12, '.webp'), '12.webp');
  assert.throws(() => pageFileName(0, 'jpg'));
  assert.throws(() => pageFileName(1, 'pdf'));
});

test('pdftoppm names sort by page, ignoring the prefix', () => {
  const sorted = sortPdftoppmOutputs([
    'pages-10.jpg',
    'pages-2.jpg',
    'notes.txt',
    'pages-1.jpg',
  ]);
  assert.deepEqual(
    sorted.map((item) => item.page),
    [1, 2, 10],
  );
});

test('fig keys stay under fig/<slug>/ and reject path tricks', () => {
  assert.equal(figObjectKey('chicken-utopia', '01.jpg'), 'fig/chicken-utopia/01.jpg');
  assert.equal(figObjectKey('previous-archi-work', '海底避难所.jpg'), 'fig/previous-archi-work/海底避难所.jpg');
  assert.equal(isKebabSlug('local-climate-zones'), true);
  assert.equal(isKebabSlug('E:\\fig'), false);
  assert.throws(() => figObjectKey('../secrets', '01.jpg'));
  assert.throws(() => figObjectKey('ok', '../01.jpg'));
  assert.throws(() => figObjectKey('ok', 'nested/01.jpg'));
});

test('public URLs encode each key segment', () => {
  const key = figObjectKey('previous-archi-work', '海底避难所.jpg');
  const url = publicObjectUrl(key);
  assert.equal(
    url,
    `${R2_PUBLIC_BASE}/fig/previous-archi-work/${encodeURIComponent('海底避难所.jpg')}`,
  );
});

test('upload plan targets lili-assets and sets image content types', () => {
  const [jpg, webp] = planUploads({
    slug: 'scendance',
    files: ['01.jpg', '01.webp'],
    cacheControl: 'public, max-age=86400',
  });
  assert.equal(jpg.bucket, R2_BUCKET);
  assert.equal(jpg.objectPath, 'lili-assets/fig/scendance/01.jpg');
  assert.equal(jpg.contentType, 'image/jpeg');
  assert.equal(webp.contentType, 'image/webp');
  assert.equal(contentTypeFor('logo.png'), 'image/png');
  assert.equal(
    jpg.publicUrl,
    `${R2_PUBLIC_BASE}/fig/scendance/01.jpg`,
  );
});

test('wrangler put args include --file, content-type, and --remote', () => {
  const args = buildWranglerPutArgs({
    bucket: R2_BUCKET,
    key: 'fig/scendance/01.webp',
    file: 'E:\\fig\\scendance\\01.webp',
    contentType: 'image/webp',
    cacheControl: 'public, max-age=86400',
  });
  assert.deepEqual(args, [
    'r2',
    'object',
    'put',
    'lili-assets/fig/scendance/01.webp',
    '--file',
    'E:\\fig\\scendance\\01.webp',
    '--content-type',
    'image/webp',
    '--remote',
    '--cache-control',
    'public, max-age=86400',
  ]);
});
