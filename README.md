# Design System (Starlight + Style Dictionary)

Multiple style guides, one docs site. Each guide is a JSON token file; everything else is generated.

## Run it
```
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Add a style guide
1. Copy `tokens/brands/aurora.json` to `tokens/brands/<name>.json` and edit the values, meta and rules.
2. Copy `src/content/docs/guides/aurora/` to `src/content/docs/guides/<name>/` and replace `aurora` with `<name>` inside the files.
3. Add the new stylesheet to `customCss` and a sidebar group in `astro.config.mjs`.

## What gets generated (`npm run tokens`)
- `public/tokens/<name>.css` drop-in CSS variables
- `public/guides/<name>.md` AI brief (paste into an AI assistant)
- `public/llms.txt` index for AI tools
- `src/styles/generated/` and `src/data/` used by the docs site

Never edit the generated files by hand.
