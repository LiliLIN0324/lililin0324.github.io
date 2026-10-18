import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { rasterizePdf } from './pdf-to-fig.mjs';
import { listImageFiles } from './upload-fig.mjs';
import { planUploads } from './lib/fig-layout.mjs';

function popplerAvailable() {
  const result = spawnSync('pdftoppm', ['-v'], { stdio: 'ignore' });
  return !result.error && (result.status === 0 || result.status === 99);
}

function minimalPdf() {
  const stream = 'BT /F1 18 Tf 20 100 Td (Hello) Tj ET\n';
  const objects = [
    '1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n',
    '2 0 obj<</Type/Pages/Count 1/Kids[3 0 R]>>endobj\n',
    '3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 200 200]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj\n',
    `4 0 obj<</Length ${Buffer.byteLength(stream)}>>stream\n${stream}endstream\nendobj\n`,
    '5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj\n',
  ];
  let body = '%PDF-1.4\n';
  const offsets = [0];
  for (const object of objects) {
    offsets.push(Buffer.byteLength(body));
    body += object;
  }
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i < offsets.length; i += 1) {
    xref += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  const start = Buffer.byteLength(body);
  return `${body}${xref}trailer<</Size ${objects.length + 1}/Root 1 0 R>>\nstartxref\n${start}\n%%EOF\n`;
}

test('pdf pages land on fig/<slug>/01.jpg and 01.webp', { skip: !popplerAvailable() }, () => {
  const root = mkdtempSync(path.join(tmpdir(), 'fig-pdf-'));
  const pdf = path.join(root, 'deck.pdf');
  writeFileSync(pdf, minimalPdf());
  try {
    const { files } = rasterizePdf({
      pdf,
      slug: 'smoke-slug',
      out: root,
      dpi: 72,
      quality: 60,
      format: 'both',
      logo: '',
    });
    assert.deepEqual(files.sort(), ['01.jpg', '01.webp']);
    const dir = path.join(root, 'fig', 'smoke-slug');
    assert.ok(statSync(path.join(dir, '01.jpg')).size > 100);
    assert.ok(statSync(path.join(dir, '01.webp')).size > 50);
    const names = listImageFiles(dir);
    const plan = planUploads({ slug: 'smoke-slug', files: names, cacheControl: 'public, max-age=86400' });
    assert.deepEqual(
      plan.map((item) => item.objectPath),
      ['lili-assets/fig/smoke-slug/01.jpg', 'lili-assets/fig/smoke-slug/01.webp'],
    );
    assert.equal(readFileSync(path.join(dir, '01.jpg'))[0], 0xff);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
