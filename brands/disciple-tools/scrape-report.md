# Disciple.Tools scrape report

October 2026. Branch `brand/disciple-tools`, not yet committed.

The Disciple.Tools brand is built in `brands/disciple-tools/` and `npm run check` passes. It covers the marketing site (disciple.tools), not the app.

Sources:

- the live pages
- the theme the site actually runs on, [ChrisChasm/disciple-tools-public-site](https://github.com/ChrisChasm/disciple-tools-public-site) (Foundation + Elementor)
- the app repo [DiscipleTools/disciple-tools-theme](https://github.com/DiscipleTools/disciple-tools-theme), used only for logo masters

In the guide's previews, the buttons, page title and title band measure the same as the live site to the pixel; the other previews match on colour, type and spacing. Chrome screenshots kept timing out during the scrape, so the previews were checked by measuring them in the DOM rather than by eye. They are worth a visual pass.

## What's in it

- **Tokens:** blue `#3F729B`, green `#8BC34A`, near-black text `#0A0A0A`, four greys, the nav-hover sky blue `#00AEFF`, and a note tint.
- **Spacing scale:** 5, 10, 20, 30, 40, 60 and 80px, mapped onto `xxxs` to `xl`. The site's real gaps are 10px column padding, 20px between blocks and 30px card padding.
- **Fonts:** Roboto (400, 700, 800, 700 italic) and Open Sans (400, 600, 700, 800) from Google Fonts. Font Awesome 5.15.4 is self-hosted in `assets/fonts/`.
- **Composition:** two shared primitives are overridden. The container is 1140px wide with a 10px gutter, and flow defaults to 20px, which is the gap between blocks everywhere on the site.
- **Components:** button, card (the testimonial card), input, icon, icon list, table, note, nav bar and utilities. The shared Tag is excluded because the site has no tags.
- **Patterns:** page title, statement band, feature row, title band, icon grid, testimonials, steps band, link band ("Dig in!"), feature list and footer.
- **Guidelines:** voice, principles and do/don't are marked as a draft, written from the site's own copy.

## Different from what was agreed

- **Font Awesome is self-hosted, not loaded from cdnjs.** Previews render in shadow DOM, which a URL stylesheet's `.fas` classes can't reach. Only self-hosted stylesheets get embedded.
- **The Foundation icon set is left out.** The only Foundation icon the site uses is the search icon, and that only appears in the mobile menu. Font Awesome is the only icon set.

## Approximate

- The padding between feature-list rows is estimated from screenshots.
- The title band's 25px padding is worked out from its measured 82px height.
- Some example copy is placeholder text; the icon-grid page says so.

## Known issues on the live site

These are also recorded in the guidelines.

| Pair | Ratio | Where |
| --- | --- | --- |
| White on green | 2.1:1 | Get Started and Demo buttons, green bands. Fails accessibility contrast even for large text. |
| Blue on green | 2.4:1 | Link-band column headings. Fails. |
| Green on white | 2.1:1 | Link hover. Fails. |
| White on sky blue | 2.5:1 | Nav hover. Fails. |
| Blue on the note tint | 3.5:1 | Note callout. Fails for body text. |
| Blue on light grey | 4.3:1 | Icon-grid headings. Fine at 32px, not for body text. |

- Most buttons only underline on hover, with no colour change.
- The contact form's text area is Arial at 19.2px, while the other fields are Roboto at 16px.
- The Elementor kit defines Roboto Slab and Elementor's default palette, but no page uses them.

## To obtain

- Vector masters of the logo in every colourway. The only vector is a single-colour trace of the mark (`logo-mark.svg`).
- A high-resolution version of the green-and-charcoal nav logo; only 300×88 exists.
- The name of the wordmark typeface, and logo usage rules (clear space, minimum size).
- Sign-off on the draft voice from the Disciple.Tools team.

## Not covered yet

- The mobile off-canvas menu and nav dropdown panels.
- The partner-logo strip.
- The home page video hero.
- The docs, news and plugin pages.
- The app's own UI.

## Framework notes

- **A `css` block without its closing fence is silently dropped.** `npm run check` doesn't catch it.
- **`uses:` isn't transitive.** Testimonials had to list `icon` itself even though the card already uses it.
- **Running `npm run generate` rewrote uncommitted edits to other brands' generated files.** At the start of the session there were local changes to three `brief.md` files and to `llms.txt`.

## Follow-up changes (same session)

- **`s-m` removed from the spacing scale, in both brands.**
  - `m`, `l` and `xl` keep their names; the steps below `m` shift down one: `s-m`→`s`, `s`→`xs`, `xs`→`xxs`, `xxs`→`xxxs`. Utility classes follow (`.px-s-m`→`.px-s`).
  - Disciple.Tools is now xxxs 5, xxs 10, xs 20, s 30, m 40, l 60, xl 80 (px). Prayer.Global is xxxs 0.25, xxs 0.5, xs 1, s 1.5, m 2, l 3, xl 4 (rem).
  - Classes named after a size now use the token of that name. In Prayer.Global, `.flow-small`→`.flow-xsmall`, `.flow-xmedium`→`.flow-large`, `.stack-sm`→`.stack-xs` and `.stack-xsm`→`.stack-xxs`. The flow and stack docs note the site's original names.
  - The shared primitives' default gap, `--space-s`, is now larger in both brands. The places that relied on it are pinned to `--space-xs` to keep their size: Prayer.Global's nav-bar clusters, donate-band actions and movement-band buttons, and the Disciple.Tools nav bar.
  - `llms.txt` and the scrape-brand skill now say: add steps only at the ends; for an in-between size, keep `m` fixed and shift outwards.
- **Shared composition previews now render.**
  - Cause: Astro's content cache still held the rendered HTML from before composition previews existed, for the shared composition files nobody had edited since. A change to the preview plugin doesn't invalidate that cache.
  - Fix: `npm run dev` now deletes `.astro/data-store.json` before starting.
  - `astro dev --force` was considered but not used: it also kills any dev server already running.
  - An already-running dev server needs a restart to pick this up.
