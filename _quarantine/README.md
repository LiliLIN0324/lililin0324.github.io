# Quarantine

Scratch files that used to sit at the repo root. They are not imported by the site and are not part of the GitHub Pages build. They are kept here so nothing is thrown away.

| File | What it was |
|---|---|
| `pip-install-pdf2image.py` | Local PDF-to-JPEG experiment (`!pip install pdf2image.py`). Hard-coded `D:\` paths. Replaced by `scripts/assets/export-pages.mjs`. |
| `accidental-git-log.txt` | A pasted `git log` saved under the filename `.cjs'`. Not a module. |
| `temp-parse.js` | Corrupted dump of an older `projects` array. Image paths in it (`/data/fig/…`) are stale; the live site uses R2 URLs in the markdown projects. |
| `gen_project_05.js` | One-off generator for the campus-vitality project page. The page already lives at `src/data/projects/AI/05_campus-public-space-vitality-modeling.md`. |
| `setup-ollama.ps1` | Sets `OLLAMA_MODELS` on a local Windows machine. Unrelated to the site. |
| `crs-index.css` | Unused Tailwind snippet (the old `crs/index.css`). Nothing imports it. `index.css` at the repo root is the real stylesheet. |

`evolo.txt` stayed at the repo root. It is the eVolo skyscraper competition text, not a scratch script.

`scripts/extend-images.mjs` stayed in `scripts/` with a "do not re-run" note. It is the tool that padded galleries to 99 frames. New exports go through `scripts/ASSETS.md`.
