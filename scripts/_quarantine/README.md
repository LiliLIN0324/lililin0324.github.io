# Quarantine

These files used to sit at the repository root. The site does not import them, and Vite does not copy them into `docs/` (the GitHub Pages output). They are kept here so the root stays limited to the app, and so the notes are not thrown away.

| File | Original path | Why it was moved |
| --- | --- | --- |
| `cjs-quote-paste.txt` | `.cjs'` | Accidental paste of `git log` output. The filename itself was a stray quote. |
| `pip-install-pdf2image.py` | `!pip install pdf2image.py` | Commented notebook snippet that rasterized one local PDF. The replacement is `scripts/pdf-to-fig.mjs`. |
| `temp-parse.js` | `temp-parse.js` | Older project export. It still mentions `/data/fig/...` paths. Nothing imports it. |
| `gen_project_05.js` | `gen_project_05.js` | One-off generator for the campus-vitality project. The live page is `src/data/projects/AI/05_campus-public-space-vitality-modeling.md`. |
| `setup-ollama.ps1` | `setup-ollama.ps1` | Sets `OLLAMA_MODELS` to `E:\ollama_models` on one Windows machine. |
| `crs/index.css` | `crs/index.css` | Duplicate of the Plotly modebar rule already in root `index.css`. |

`evolo.txt` stays at the root. It is project writing, not a scratch script.
