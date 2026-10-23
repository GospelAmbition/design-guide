# Design System

Brand guides as plain files that AI agents (and people) can read and edit directly. The Starlight site is a viewer on top of them.

**Agents: read [`llms.txt`](llms.txt) first.** It explains the layout, the override rules and how to edit.

## Run it
```
npm install      # also installs the pre-commit hook
npm run dev      # http://localhost:4321/design-guide/ — regenerates and reloads as you edit brands/ or system/
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

## Plan

want to create a landing page that looks like Prayer.Global.
Can we point an agent and create something on brand from that.
Wherever
- on the original site
- on another site
- in slides
- a printable design

Better to point it to the future and allow it to diverge from site class naming and design conventions.

Better to iteratively improve and not get it fully right first time as we don't know what direction we are going in yet.

Naming of class colours needs to be more what they are for if they have a function. and shades of colour can use the number system if they are not functional.

Get minimum thing going.
- [x] Prayer.Global
- [x] Gospel Ambition from prospectus.
- [x] Disciple.Tools
- [ ] Empty Prayer.Tools and see if Chad can suck his brand from a design file into the design guide.

and then see if Chad can do a second pass before doing some more.

Try out creating a landing page with Prayer.Global.
