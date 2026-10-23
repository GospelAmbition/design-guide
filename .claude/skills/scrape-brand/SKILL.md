---
name: scrape-brand
description: Turn a live website and its source repo into a brand in this design system (brands/<id>/). Use when asked to "scrape", "import" or "add a brand from" a site URL and/or GitHub repo. Runs discovery questions first, then extracts real rendered values and real CSS, and writes tokens, guidelines, composition, components, patterns and assets that follow llms.txt.
---

# Scrape a site into a brand

Input: the site URL and, ideally, its source repo. Output: `brands/<id>/` that passes `npm run check` and looks right in the viewer.

Read `llms.txt` first. It defines the file formats, resolution rules and CSS rules this skill writes to.

## 0. Discovery first (no edits yet)

If the `discover` skill is available, run it. Either way, ask in the text of your message, never with the `AskUserQuestion` tool: the user wants to answer in their own words.

- Short rounds of at most 3 numbered questions. A round contains only its questions: no recap, no trailing notes.
- One question per item, each with lettered options (`a)`, `b)`…), the reason you're asking, any gotcha, and your recommendation.
- Things you'd otherwise assume go in a separate assumption round: numbered "I'm assuming X." statements the user confirms or corrects by number.

Settle these before touching files:

1. **Source of truth.** Recommend the hybrid: exact values from the site's CSS variables and computed styles, with screenshots to decide what's actually used. Screenshots alone only give approximate hexes.
2. **Fonts.** Self-hosted commercial fonts: copy the files into the brand (check the licence), point at the site's URLs, or use free stand-ins.
3. **Scope.** Which pages count as "the brand" (usually landing and marketing pages, not app or login screens).
4. **Screenshots.** Take them yourself with Claude in Chrome (recommended), or the user supplies them for pages behind a login.
5. **Voice.** Draft it from the site's copy and mark it as a draft (recommended), or the user supplies it.

Don't ask about component scope: the brand always overrides the shared components to match the site, and adds the site's distinctive pieces as brand components and patterns (see section 4).

Then run one assumption round (brand id, branch, what to do with logos and icon sets) and wait for "implement".

## 1. Set up

- Work on a new branch, never the default branch.
- Clone the repo into the scratchpad with a sparse, blob-less clone. Never clone into the project:
  `git clone --depth 1 --filter=blob:none --sparse <repo> <scratchpad>/repo && git sparse-checkout set --no-cone '/**/*.css' '/**/*.php' '/**/*.html' '/**/*.js' '<fonts dir>' '<images dir>'`
- Browser: Claude in Chrome. Call `tabs_context_mcp` first. If it says it isn't connected, ask the user to check the extension; don't fall back to a headless browser without asking. If the user wants fewer prompts, they add `mcp__claude-in-chrome` to their permissions with `/permissions`. Never write permission rules yourself.

## 2. Extract what renders (browser)

- Screenshot each in-scope page, scrolling through it, at `scale` 0.5–0.6 to save tokens.
- Read computed styles with `javascript_tool`. Use `scripts/computed-styles.js`: run it once to tally colours, fonts, borders and shadows into `window.__pg`, then read one key per call.
  - **Output is truncated at about 1.5k characters.** Store results on `window` and read them in slices.
  - **Output containing URLs or query strings is blocked.** Strip `url(...)` and links before returning, and convert `rgb()` to hex to keep it short.
- Check `document.fonts` (`family`, `weight`, `status`) to see which fonts actually load. Requested-but-unloaded fonts are not part of the brand. **Don't mention them anywhere in the guide**: an agent reading only the guide would never meet them.
- Measure each distinct button, heading level, nav, footer, section background and form field (font, weight, size, line height, colour, background, border, radius, padding, shadow).
- `resize_window` may not change the viewport. Check `innerWidth`. If it doesn't change, take mobile behaviour from the CSS media queries instead of screenshots.

## 3. Extract the real CSS (repo)

- Use `scripts/rules.mjs <css file> '<selector regex>'` to print matching rules **with their @media context** (it uses postcss from this repo's node_modules). Pull the rules for every class the templates use.
- Read the page templates for real markup structure (sections, class combinations, inline styles, clip paths).
- Note framework CSS (Bootstrap, Tailwind…) only so you can translate it. The brand must not depend on it (see the rules below).

## 4. Rules for writing the brand

**Fidelity**
- **Rendered values win.** When the CSS says one thing and the browser renders another (e.g. weight 300 with only a 400 file, so 400 renders), record what renders and add a one-line note.
- **Never invent CSS when real CSS exists.** Translate the site's own rules into tokens. If you can't find the rule, measure the computed style. Mark anything only estimated from screenshots as approximate.
- **Override every shared component the site has.** Restyle each one with the site's real CSS so it looks like the site's version, not the shared default.
- **Add the site's distinctive pieces.** Anything the site uses that the shared set lacks (its hero, section bands, feature rows, special buttons…) becomes a brand component or pattern.
- **Don't invent components the site doesn't have.** If it has no cards or tags, `exclude` the shared ones and say why in the guidelines.
- Express exact shapes in CSS when you can. For example, an SVG `clipPath` half-ellipse becomes elliptical `border-radius` with the same radii.

**Independence from the site's implementation.** The guide is mainly for building new things in the brand, so it must be consistent with itself:
- No Bootstrap (or other framework) naming, numbering or colours: no `.px-4` / `.py-5`, no `#f8f9fa` "light", no black hover text. Fold framework-only colours into the nearest brand colours.
- Use the shared `system/composition/` primitives (flow, cluster, repel, switcher, center, container). Override one only when the site's own composition CSS genuinely behaves differently, and add brand-only primitives for extras. Never override with framework versions (e.g. a Bootstrap breakpoint `.container`).
- Utility classes are named after the space tokens (`.py-xl`, `.px-m`). Patterns `uses:` every primitive, component and utilities file whose CSS they need.
- Guidelines tell agents to build from the guide and adapt to a target site's own classes, never to paste the guide's markup in.

**Tokens**
- Every brand must define `space.xs`, `s`, `m`, `l` and `xl` (named, never numbered), and may add steps at either end (`xxs`, `xxl`…), never in between (no `s-m`). Map the site's real gaps onto one continuous sequence. If a gap falls between two steps, keep `m` fixed and shift the names on that side outwards (`s`→`xs`, `xs`→`xxs`…). Size-named classes (`.switcher-md`) use the token of the same name.
- Gradients and shadows are tokens and may reference colours: `linear-gradient({color.a}, {color.b})`.
- Self-hosted fonts: copy only woff2 and woff, write `assets/fonts/fonts.css`, and list it in the `fonts` frontmatter as a path. Icon fonts ship with their class stylesheet, also listed in `fonts`, and get a font token for any `content:` glyphs.
- Leave colour naming close to the site's for a first scrape (renaming to roles or a 100–900 scale is a later clean-up), but keep descriptions free of framework references.

**Guidelines, assets, icons**
- Voice, principles and do/don't: drafted from the site's copy, quoting real phrases, with a "draft" banner.
- Compute contrast for key text and background pairs (WCAG formula). Record failures under "Known issues on the live site". Don't silently change brand colours.
- `icons` frontmatter: a list of sets with `name`, `use`, `source` and `files`. Name the primary set first, and the fallback set with the exact symbols the site uses from it.
- Logos: show white or reversed logos inside `<div class="ds-on-dark">` in `assets.md`. Missing masters (full-colour, one-colour, wordmark lockup, vectors) go in a **To obtain** note at the top of `assets.md` and in your final report.
- Describe every asset in `assets.md` (what it is, where to use it, minimum size, clear space). Copy only what patterns and brand use need: resize big mockups, skip the site's content images unless a pattern previews them.

**Frontmatter gotcha:** quote any YAML value containing `: ` or starting with a quote, otherwise `npm run generate` crashes.

## 5. Verify

1. `npm run generate && npm run check`. Fix every error; the checker's messages say what's wrong.
2. The user may already have `npm run dev` running on :4321 (your own run exits saying so). Use theirs. It regenerates on save and restarts when files are added.
3. In Chrome, open `/guide/<id>/`, the tokens and assets pages, and each composition, component and pattern page. Compare against the live site's screenshots. Previews sit in a narrow column, so switchers stacking there is expected.
4. Don't commit unless the user asks.

## 6. Report

Lead with the result, then:
- What differs from what was agreed, and why.
- What's approximate.
- Known issues found on the live site.
- Framework changes, if any (they affect every brand).
- The **To obtain** list (logo masters, font licences, sign-off on the draft voice).
- Pages and pieces not yet covered.
