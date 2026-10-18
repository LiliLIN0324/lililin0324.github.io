# Figure assets

Portfolio images are not committed as binaries. They live in the Cloudflare R2 bucket `lili-assets` and the site points at the public base:

`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/`

Object keys for a project are `fig/<slug>/<file>`, for example `fig/chicken-utopia/01.jpg`. The same `<slug>` is the folder name under the local source of truth, Windows `E:\fig\<slug>\`. Portfolio PDFs that were exported to images use that same layout (`01.jpg`, `02.jpg`, …, plus `logo.jpg` when there is a cover).

A fresh count of every reference is in [image-inventory.md](image-inventory.md). Regenerate it with:

```bash
node scripts/inventory-images.mjs --out scripts/image-inventory.md
```

## What the site uses today

Scanned from `src/` and the root entry files. `docs/` is the built GitHub Pages tree and is not counted twice.

| Kind | Unique objects | References |
| --- | ---: | ---: |
| `fig/<slug>/<file>` on R2 | 3807 | 7013 |
| `fig/<file>` with no project folder | 11 | 13 |
| `certificate/<file>` (about-page awards) | 20 | 20 |
| Other keys on this bucket (mp4, pdf) | 38 | 43 |
| A second R2 host used for geojson/zip | 6 | 6 |
| Local `/data/fig` or relative image paths | 0 | 0 |
| Raster files committed in the repo | 3 | — |

`public/data/` is CSV for the cluster demos. There is no `public/data/fig/` directory. The three committed PNGs under `src/data/projects/games/` are not referenced by the app.

Most project markdown lists frames `01`–`99` because `scripts/extend-images.mjs` extends a detected sequence to 99. That script rewrites links. It does not check that the objects exist in the bucket. Prefer this pipeline when adding real pages, and only extend the markdown across frames you uploaded.

Loose covers (not inside a slug folder) include `fig/AAAI2026.jpg`, `fig/Gamejam.png`, `fig/LST_heatmap.png`, and the other names in the inventory. Award scans use `certificate/<filename>` from `src/components/AboutSection.tsx`. Videos and the two portfolio PDFs (`lili_planning_portfolio.pdf`, `lili_ui_portfolio.pdf`) sit at the bucket root. Map demo data uses a different host, `pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev`, and is outside this pipeline.

## Workflow

Install Poppler so `pdftoppm` is on `PATH` (Windows: the Poppler build pdf2image expects, or `choco install poppler`). WebP also needs `cwebp`, ImageMagick, or `ffmpeg`. Upload uses Wrangler, authenticated with `npx wrangler login` or `CLOUDFLARE_API_TOKEN`. Do not put the token in the repo.

Wrangler writes one object per call and is aimed at the real bucket with `--remote`. See [R2 object put](https://developers.cloudflare.com/workers/wrangler/commands/r2/#r2-object-put). Objects larger than about 300 MB need another client such as [rclone](https://developers.cloudflare.com/r2/objects/upload-objects/).

### 1. PDF to `fig/<slug>/`

```bash
node scripts/pdf-to-fig.mjs --pdf "E:\some-portfolio.pdf" --slug scendance --logo "E:\fig\scendance\logo.jpg"
```

This writes `asset-out/fig/scendance/01.jpg` and `01.webp` (and `logo.jpg` when `--logo` is set). `asset-out/` is gitignored. Flags: `--dpi` (default 144), `--quality` (default 82), `--format jpg|webp|both` (default both), `--out`.

If `E:\fig\<slug>\` already has the exported frames, skip this step.

### 2. Upload

Dry-run (no network write):

```bash
node scripts/upload-fig.mjs --dir "E:\fig\scendance" --slug scendance
```

Upload after the printed keys look right:

```bash
node scripts/upload-fig.mjs --dir "E:\fig\scendance" --slug scendance --upload
```

Each file keeps its name. `01.jpg` becomes `lili-assets/fig/scendance/01.jpg`, which is

`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/01.jpg`.

The public URL is what belongs in frontmatter `icon` / `image` and in markdown images. Slugs already on the site are kebab-case (`chicken-utopia`, `previous-archi-work`). The script warns on anything else. Filenames may be Chinese; path separators are rejected.

### 3. Point the page at the URL

In the project markdown under `src/data/projects/`, set `icon` and `image` to those public URLs. A numbered gallery matches `01.jpg`, `02.jpg`, and so on. Then `npm run build` refreshes `docs/` for GitHub Pages. This branch does not rebuild `docs/`.

## Checks

```bash
npm run assets:test
npm run assets:inventory
```

`npm run assets:pdf` and `npm run assets:upload` are the same commands as above.
