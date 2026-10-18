# Portfolio assets on Cloudflare R2

Portfolio images are not committed. The site stores public URLs. Binaries stay on the machine that uploads them (`E:\fig\` and portfolio PDFs on `E:\`) and in the bucket `lili-assets`.

Canonical clone: `E:\lililin0324.github.io`.

Refresh the reference inventory any time with:

```bash
node scripts/assets/inventory.mjs
```

## Where images live today

Scanned from source (not the built `docs/` bundle):

| Location | What it is |
|---|---|
| `https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/` | Public base for bucket `lili-assets`. About 3,800 unique URLs in source. |
| `fig/<slug>/NN.jpg` (or `.png`) | Project galleries. 44 slug folders, mostly from `src/data/projects/**/*.md` frontmatter `image:` / `icon:` plus the same URLs repeated in the markdown body. |
| `fig/<slug>/logo.jpg` | Timeline and card icons (`src/data/content.ts` builds `…/fig/<dir>/logo.jpg`). |
| `fig/<file>` | A few posters that are not inside a slug folder: `AAAI2026.jpg`, `BMW&TJ.png`, `GameforPeace&HUST.png`, `Gamejam.png`, `LST_heatmap.png`, `global-5.jpg`, `heatmapper-1.png`, `heatmapper-2.png`, `kg_figure.jpg`, `photogeo.png`, `photogeomap.png`. Used by About and a few demos. |
| `fig/lili/lili_XX.png` | Header portraits. `MainPage.tsx` prefixes `fig/lili`; `HomePage.tsx` uses the full URLs. |
| `fig/previous-archi-work/` and `fig/hongqiqu/` | Named files (often Chinese filenames), not only `01.jpg`. The components keep a prefix constant and append the filename. |
| `certificate/<filename>.jpg` | Award scans. `AboutSection.tsx` joins filenames onto `…/certificate/`. |
| Bucket root `*.mp4` and two PDFs | Demo videos, plus `lili_ui_portfolio.pdf` and `lili_planning_portfolio.pdf`. Those PDFs stay at the bucket root. Page exports for a project still use `fig/<slug>/`. |
| `https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/` | Separate bucket for the clustering map (five GeoJSON files and `223_cities_cluster_with_index.zip`). Not part of this image pipeline. |

There is no `public/data/fig/` tree. `public/data/K_5`, `K_12`, `K_20`, and `K_26` are tracked CSV inputs for the 3D cluster demo. `.gitignore` ignores new files under `public/`, so a dropped image there will not be committed. The three PNGs in `src/data/projects/games/` (`image.png`, `image-1.png`, `image-2.png`) are real game-jam screenshots. Nothing imports them; the pages use R2. They were left in place.

`scripts/extend-images.mjs` is a one-off that rewrote galleries so every detected sequence lists frames `01` through `99`. That is why so many markdown files contain ~100 URLs. A spot check on 2026-10-18: `fig/heatmapper/01.png` and `logo.jpg` return 200, `fig/heatmapper/99.png` returns 404, and `fig/scendance/01.jpg` returns 404 (the project markdown points at objects that are not in the bucket yet). Do not re-run `extend-images.mjs`. This pipeline only emits URLs for files it actually staged.

Map tiles (OpenStreetMap, CARTO, Stadia) and Leaflet’s marker PNGs are third-party URLs, not R2.

## Key layout

```
lili-assets
└── fig/<slug>/
    ├── logo.jpg          # or logo.webp — card / timeline icon
    ├── 01.jpg            # page 1
    ├── 02.jpg
    └── …
```

`<slug>` is lowercase kebab-case, the same string as the project’s `slug` and the folder name under `E:\fig\`. Examples: `heatmapper`, `scendance`, `previous-archi-work`.

Local side, before upload:

```
E:\fig\<slug>\            # already-exported jpg/png/webp, optional logo.*
E:\<some-portfolio>.pdf   # rasterized by this pipeline into the numbered files
```

Staging (gitignored, never commit):

```
assets-out/fig/<slug>/01.jpg
assets-out/fig/<slug>/URLS.md
```

## Workflow

From the repo root on the Windows clone.

1. Install the rasterizer once if you start from a PDF.

   - Windows: `winget install oschwartz10612.Poppler` (or `choco install poppler`)
   - macOS: `brew install poppler`
   - Debian/Ubuntu: `sudo apt-get install poppler-utils`

   WebP also needs `cwebp` (`choco install webp` / `brew install webp` / `apt-get install webp`) or ImageMagick (`magick`). JPEG sources are copied as-is. PNG sources become JPEG only when ImageMagick is installed; otherwise the original extension is kept.

2. Export pages. This writes `assets-out/` and prints a markdown snippet. It does not upload.

   ```bash
   npm run assets:export -- --slug scendance --pdf "E:\lili_planning_portfolio.pdf"
   npm run assets:export -- --slug heatmapper --images "E:\fig\heatmapper"
   npm run assets:export -- --slug scendance --pdf "E:\deck.pdf" --format webp --dpi 150
   ```

   A `logo.png` (or `logo.jpg`) inside the image folder is copied to `logo.*` and left out of the numbered list. `--logo path` overrides that. `--start 1` is the first page index.

3. Read `assets-out/fig/<slug>/URLS.md`. Paste the `icon:` line and the `image:[…]` array into the project markdown. Prefer that over committing the binaries.

4. Dry-run the upload (default), then upload.

   ```bash
   npm run assets:upload -- --slug scendance
   npm run assets:upload -- --slug scendance --upload
   ```

   Or do both steps together:

   ```bash
   npm run assets:pipeline -- --slug scendance --images "E:\fig\scendance"
   npm run assets:pipeline -- --slug scendance --pdf "E:\deck.pdf" --upload
   ```

   `--upload` runs `wrangler r2 object put lili-assets/fig/<slug>/<file> --remote`. Authenticate once with `npx wrangler login` (or set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`). The script does not store credentials.

   Override the bucket or the public base only if the bucket changes:

   ```bash
   set R2_BUCKET=lili-assets
   set R2_PUBLIC_BASE=https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev
   ```

5. Commit the markdown URL change only. Leave `assets-out/` untracked. GitHub Pages publishes `docs/` from `npm run build`; this pipeline does not touch that build.

## Scripts

| File | Role |
|---|---|
| `scripts/assets/export-pages.mjs` | PDF (`pdftoppm`) or an image folder → `fig/<slug>/NN.jpg` or `.webp` |
| `scripts/assets/upload-fig.mjs` | Dry-run or `wrangler r2 object put` |
| `scripts/assets/pipeline.mjs` | Export, then upload |
| `scripts/assets/inventory.mjs` | Recount R2 URLs vs files in the repo |
| `scripts/assets/config.mjs` | Bucket name, public base, key helper |
| `scripts/extend-images.mjs` | Historical pad-to-99 rewriter. Do not re-run. |
