# Design System

Brand guides as plain files that AI agents (and people) can read and edit directly. The Starlight site is a viewer on top of them.

**Agents: read [`llms.txt`](llms.txt) first.** It explains the layout, the override rules and how to edit.

## Run it
```
npm install      # also installs the pre-commit hook
npm run dev      # http://localhost:4321 — regenerates and reloads as you edit brands/ or system/
npm run check    # validate brands, fail if generated files are stale
npm run build    # static site in dist/
```

## Layout
```
llms.txt                  entry point for agents (brand list is generated)
system/                   shared: composition/, components/, patterns/, base.css
brands/<id>/              one folder per brand
  guidelines.md           name, summary, fonts, icons, exclude + voice and rules
  tokens.json             DTCG tokens; tokens.<mode>.json for modes like dark
  composition/ components/ patterns/   overrides (same name as shared) and brand-only items
  assets/                 logos and images, described in assets.md
  brief.md, tokens.css    GENERATED (committed): never edit by hand
scripts/                  generate.mjs, check.mjs, lib/brands.mjs
src/                      the Starlight viewer
```

Adding a brand means adding a folder: the sidebar, pages, brief and `llms.txt` entry are generated.
