/** Minimal argv parser. Supports `--key value`, `--key=value`, and boolean `--flag`. */
export function parseArgs(argv) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--') {
      out._.push(...argv.slice(i + 1));
      break;
    }
    if (!token.startsWith('--')) {
      out._.push(token);
      continue;
    }
    const body = token.slice(2);
    if (!body) {
      out._.push(token);
      continue;
    }
    const eq = body.indexOf('=');
    if (eq !== -1) {
      out[body.slice(0, eq)] = body.slice(eq + 1);
      continue;
    }
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) {
      out[body] = true;
    } else {
      out[body] = next;
      i += 1;
    }
  }
  return out;
}

/** R2 folder name under `fig/`. Matches the slugs already used by project markdown. */
export function assertSlug(slug) {
  if (typeof slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    const shown = slug === undefined ? '' : String(slug);
    throw new Error(
      `Invalid --slug "${shown}". Use lowercase kebab-case matching the R2 folder, for example heatmapper.`,
    );
  }
  return slug;
}
