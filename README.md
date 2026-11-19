# Design System

Brand guides as plain files that AI agents (and people) can read and edit directly. The Starlight site is a viewer on top of them.

**Agents: read [`llms.txt`](llms.txt) first.** It explains the layout, the override rules and how to edit.

**Building a page for a brand:** follow [`build-a-page.md`](build-a-page.md). Pages are built outside this repo, from the generated `brands/<id>/brand.css`, and checked with `node scripts/check-page.mjs <folder>`. Fixed test briefs for the process are in [`test-briefs/`](test-briefs/).

## Run it
```
npm install      # also installs the pre-commit hook
npm run dev      # http://localhost:4321/design-guide/ — regenerates and reloads as you edit brands/ or system/
npm run check    # validate brands, fail if generated files are stale
npm run build    # static site in dist/

# Pages (no npm install needed)
node scripts/new-page.mjs <brand-id> ../my-page     # start a page folder
node scripts/check-page.mjs ../my-page              # check it against the brand
node scripts/screenshot-page.mjs ../my-page         # 375/768/1280px screenshots (needs Playwright)
```

## Layout
```
llms.txt                  entry point for agents (brand list is generated)
build-a-page.md           the process every agent follows to build a page from a brand
system/                   shared: composition/, components/, patterns/, base.css, reset.css, utilities.json
brands/<id>/              one folder per brand
  guidelines.md           name, summary, fonts, icons, exclude + voice and rules
  tokens.json             DTCG tokens (incl. threshold.* and surface.*); tokens.<mode>.json for modes like dark
  utilities.json          optional: brand additions to the generated utilities
  composition/ components/ patterns/   overrides (same name as shared) and brand-only items
  assets/                 logos and images, described in assets.md
  brief.md, tokens.css,   GENERATED (committed): never edit by hand
  brand.css, kit.json
scripts/                  generate.mjs, check.mjs, check-page.mjs, new-page.mjs, screenshot-page.mjs, lib/
test-briefs/              fixed briefs and a results log for testing build-a-page.md
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
