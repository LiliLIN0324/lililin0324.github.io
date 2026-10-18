import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classifyUrl, collectUrls, scanHttpUrls, trimUrlToken } from './inventory-images.mjs';

test('trim keeps parentheses that belong to the filename', () => {
  const raw = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/居住区_(1).jpg)';
  assert.equal(
    trimUrlToken(raw),
    'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/居住区_(1).jpg',
  );
});

test('comma-separated carousel URLs stay separate objects', () => {
  const text = '<imagecarousel images="https://cdn.example/fig/kitty/03.png,https://cdn.example/fig/kitty/04.png"></imagecarousel>';
  assert.deepEqual(scanHttpUrls(text), [
    'https://cdn.example/fig/kitty/03.png',
    'https://cdn.example/fig/kitty/04.png',
  ]);
});

test('template bases and certificate filenames become object URLs', () => {
  const text = `
    const BASE = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work';
    const images = [\`\${BASE}/居住区_(1).jpg\`];
    const FIG = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig';
    const logo = (dir) => \`\${FIG}/\${dir}/logo.jpg\`;
    logo('scendance');
    const CERT_BASE = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/certificate/';
    const item = { file: '三好学生2021.jpg' };
  `;
  const urls = collectUrls(text);
  assert.ok(urls.includes('https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/居住区_(1).jpg'));
  assert.ok(urls.includes('https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/logo.jpg'));
  assert.ok(urls.includes('https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/certificate/三好学生2021.jpg'));

  const fig = classifyUrl(urls.find((url) => url.includes('居住区')));
  assert.equal(fig.kind, 'r2-fig');
  assert.equal(fig.slug, 'previous-archi-work');
  assert.equal(fig.file, '居住区_(1).jpg');
});
