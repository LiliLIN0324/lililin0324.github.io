import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'src', 'data', 'projects');
const CDN_BASE = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev';
const MAX = 99;

// Files to skip entirely
const SKIP = new Set([
  '02_pervious_archi_work.md',  // arch page
  '05_riffle-ai-game-generation-tool.md',  // already done
]);

function pad(n) { return String(n).padStart(2, '0'); }

function walkDir(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walkDir(full));
    } else if (entry.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

/**
 * Detect the image base pattern from existing frontmatter `image:` array.
 * Returns { prefix, suffix, highest, ext } or null.
 */
function detectFmPattern(fmImageArr) {
  if (!fmImageArr || fmImageArr.length === 0) return null;
  // Take the first URL and find the numbered pattern
  const url = fmImageArr[0];
  // Match: ".../something/01.jpg" or ".../something/01.png"
  const m = url.match(/^(.+\/)(\d{2,})(\.\w+)$/);
  if (!m) return null;
  const prefix = m[1];
  const ext = m[3];
  // Find highest existing number
  let highest = 0;
  for (const u of fmImageArr) {
    const um = u.match(/\/(\d{2,})(\.\w+)$/);
    if (um) {
      const n = parseInt(um[1], 10);
      if (n > highest) highest = n;
    }
  }
  return { prefix, ext, highest };
}

/**
 * Detect image patterns from body `![...](url)` references.
 * Returns array of { prefix, suffix, highest, ext } for each unique pattern found.
 */
function detectBodyPatterns(body) {
  const re = /!\[.*?\]\(([^)\s]+)\)/g;
  const patterns = new Map();
  let m;
  while ((m = re.exec(body)) !== null) {
    const url = m[1];
    const um = url.match(/^(.+\/)(\d{2,})(\.\w+)$/);
    if (!um) continue;
    const prefix = um[1];
    const ext = um[3];
    const num = parseInt(um[2], 10);
    if (!patterns.has(prefix)) {
      patterns.set(prefix, { prefix, ext, highest: num });
    } else {
      const p = patterns.get(prefix);
      if (num > p.highest) p.highest = num;
    }
  }
  return [...patterns.values()];
}

function generateFmArray(prefix, ext, highest) {
  if (highest >= MAX) return null; // already at or above MAX
  const urls = [];
  for (let i = 1; i <= MAX; i++) {
    urls.push(`${prefix}${pad(i)}${ext}`);
  }
  return urls;
}

function generateBodyImages(prefix, ext, highest) {
  if (highest >= MAX) return null;
  const lines = [];
  for (let i = highest + 1; i <= MAX; i++) {
    lines.push(`![效果展示](${prefix}${pad(i)}${ext})`);
  }
  return lines;
}

function processFile(filePath) {
  const relativePath = filePath.replace(__dirname.replace('\\scripts', ''), '').replace(/^[\\/]/, '');
  const fileName = filePath.split(/[\\/]/).pop();

  if (SKIP.has(fileName)) {
    console.log(`  SKIP: ${fileName}`);
    return;
  }

  let content = readFileSync(filePath, 'utf8');
  let modified = false;

  // --- Parse frontmatter ---
  // Find the frontmatter block between first --- and second ---
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) {
    console.log(`  SKIP (no frontmatter): ${fileName}`);
    return;
  }

  let fm = fmMatch[1];
  const bodyStart = fmMatch[0].length;
  let body = content.slice(bodyStart);

  // Try to parse existing image: field
  const imageMatch = fm.match(/^image:\s*\[([\s\S]*?)\]\s*$/m);
  let fmImages = [];
  let hasImageField = false;
  let imageFieldFull = '';

  if (imageMatch) {
    hasImageField = true;
    imageFieldFull = imageMatch[0];
    // Parse URLs from the array
    const urlRe = /"([^"]+)"/g;
    let um;
    while ((um = urlRe.exec(imageMatch[1])) !== null) {
      fmImages.push(um[1]);
    }
  }

  // Detect patterns from frontmatter
  const fmPattern = detectFmPattern(fmImages);

  // Detect patterns from body
  const bodyPatterns = detectBodyPatterns(body);

  // --- Extend Frontmatter ---
  if (fmPattern && fmPattern.highest < MAX) {
    const newUrls = generateFmArray(fmPattern.prefix, fmPattern.ext, fmPattern.highest);
    if (newUrls) {
      const newFmImageLine = 'image:[' + newUrls.map(u => `"${u}"`).join(',') + ']';
      if (hasImageField) {
        content = content.replace(imageFieldFull, newFmImageLine);
      } else {
        // Insert image: field before the closing --- of frontmatter
        // Find a good insertion point - after icon or after year
        content = content.replace(/(icon:.*\n)/, `$1${newFmImageLine}\n`);
      }
      modified = true;
      console.log(`  FM: ${relativePath} — ${fmPattern.prefix}*${fmPattern.ext} ${fmPattern.highest}→${MAX}`);
    }
  } else if (!hasImageField && bodyPatterns.length > 0) {
    // No frontmatter image field, but body has images — add an image field
    const bp = bodyPatterns[0];
    if (bp.highest < MAX) {
      const newUrls = generateFmArray(bp.prefix, bp.ext, bp.highest);
      if (newUrls) {
        const newFmImageLine = 'image:[' + newUrls.map(u => `"${u}"`).join(',') + ']';
        content = content.replace(/(icon:.*\n)/, `$1${newFmImageLine}\n`);
        modified = true;
        console.log(`  FM+ (added): ${relativePath} — ${bp.prefix}*${bp.ext} ${bp.highest}→${MAX}`);
      }
    }
  } else if (fmPattern && fmPattern.highest >= MAX) {
    console.log(`  FM: ${relativePath} — already at ${fmPattern.highest}, skip`);
  } else {
    console.log(`  FM: ${relativePath} — no pattern detected, skip`);
  }

  // --- Extend Body ---
  // Re-parse body after FM changes
  const fmMatch2 = content.match(/^---\n([\s\S]*?)\n---/);
  body = content.slice(fmMatch2[0].length);

  const bp2 = detectBodyPatterns(body);

  for (const bp of bp2) {
    if (bp.highest >= MAX) {
      console.log(`  BD: ${relativePath} — ${bp.prefix}*${bp.ext} already at ${bp.highest}`);
      continue;
    }

    const newLines = generateBodyImages(bp.prefix, bp.ext, bp.highest);
    if (!newLines) continue;

    // Find the last occurrence of this pattern in the body and append after it
    const lastUrl = `${bp.prefix}${pad(bp.highest)}${bp.ext}`;
    const lastIdx = body.lastIndexOf(lastUrl);
    if (lastIdx !== -1) {
      // Find end of that line
      const lineEnd = body.indexOf('\n', lastIdx);
      if (lineEnd !== -1) {
        const before = body.slice(0, lineEnd + 1);
        const after = body.slice(lineEnd + 1);
        body = before + newLines.join('\n') + '\n' + after;
        content = content.slice(0, fmMatch2[0].length) + body;
        modified = true;
        console.log(`  BD: ${relativePath} — ${bp.prefix}*${bp.ext} ${bp.highest}→${MAX}`);
      }
    }
  }

  if (modified) {
    writeFileSync(filePath, content, 'utf8');
  }
}

// Main
console.log('Extending image references to 99...\n');
const files = walkDir(DATA_DIR).sort();
for (const f of files) {
  processFile(f);
}
console.log('\nDone.');
