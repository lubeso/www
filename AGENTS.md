# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Overview

Static website (`www`) built with the **astro** framework, hosted under
`https://www.lubeso.dev/` via Google Cloud CDN and Cloud Storage.

## Commands

```bash
npm ci              # install exact locked dependencies
npm run dev         # start local dev server (default port 4321)
npm run build       # build production bundle into dist/
npm run preview     # preview production build locally
```

## Conventions

- 2-space indentation, LF endings, final newline required (`.editorconfig`).
- Assets in `public/` are served at the site root.
- Favicons and OpenGraph metadata are defined in `src/layouts/Layout.astro`.
- Deployments trigger on published GitHub releases via `.github/workflows/cd.yaml`.
