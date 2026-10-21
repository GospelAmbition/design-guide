---
title: Prayer.Global assets
---

Copied from prayer.global and its repository, [prayer-global-porch](https://github.com/PrayerTools/prayer-global-porch), in October 2026.

> **To obtain:** the master logo files. The site only serves the logo mark in white (PNG) and as an icon-font glyph. We still need the full-colour logo, the navy one-colour logo, any wordmark lockup ("PRAYER.GLOBAL" + mark) and vector (SVG/AI/EPS) masters with usage rules from the Prayer.Global team. Until then, set the wordmark as text in Bebas Kai.

## Logo mark

<div class="ds-on-dark">

![Prayer.Global logo mark, white](./logo-mark-white.png)

</div>

- **File:** `logo-mark-white.png` — 500×500 white mark (a person kneeling in prayer in front of a globe, circled by arrows), transparent background.
- **Use on:** navy only (`--color-brand`, `--color-dark`) or dark photos. The hero shows it at 24vh.
- **Minimum size:** 48px.
- **Clear space:** at least a quarter of its width on every side.
- **Don't:** place it on white or light backgrounds, recolour it, or add effects.

![Prayer.Global logo mark, vector](./logo-mark.svg)

- **File:** `logo-mark.svg` — the same mark as a single-colour vector (from the icon set, `pg-logo-prayer`). Inline it, or use `<i class="icon pg-logo-prayer">`, so it takes the text colour: navy on light backgrounds, white on dark.
- **Note:** this comes from the icon set, not from official logo masters. Confirm with the team before using it as the logo in print.

## Wordmark

There is no wordmark file. The site sets "PRAYER.GLOBAL" as live text in Bebas Kai (the hero `h1`), and as "Prayer.Global" in Europa inside an outlined box in the nav bar.

## Partner logo

<div class="ds-on-dark">

![Gospel Ambition logo, white](./gospel-ambition-white.png)

</div>

- **File:** `gospel-ambition-white.png` — Gospel Ambition, the organisation behind Prayer.Global. 1201×352, white.
- **Use on:** the light-blue donate band (`--color-brand-lightest`) or navy, at 135px wide.

## Fonts

- **Folder:** `fonts/` — `fonts.css` loads Europa (Regular 400, Bold 700) and Bebas Kai (one weight) from the woff2/woff files beside it. `prayer-global-icons.css` loads the PrayerGlobal icon font (`PrayerGlobal.woff`, `PrayerGlobal.ttf`) and its `.icon.pg-*` classes. Both are loaded in Setup.
- **Licence:** Europa and Bebas Kai are commercial typefaces, self-hosted on prayer.global. Check the licence covers your project before using them elsewhere.

## Icons

- **Folder:** `icons/` — SVG copies of the icon font (`pg-*.svg`) and the six Ionicons the site uses (`ion-*.svg`). They are single-colour with no fill set; inline them and set `fill: currentColor`. On web pages, prefer the icon font (see the Icon component).

## Backgrounds

![Dark world map](./world-map-dark.png)

- **File:** `world-map-dark.png` — 1899×1198, blue continents on `--color-dark`. The hero background (`background-size: contain`, top).

![Blue world map](./world-map-blue.png)

- **File:** `world-map-blue.png` — 764×401, blue continents on transparent. Beside the stats band heading.

![Light world map](./world-map-light.png)

- **File:** `world-map-light.png` — 1869×982, very faint light-blue map on transparent. Background of the intro section and other light sections.

## Photos

- **Folder:** `photos/` — the home page's feature images, for previews and reference: `panel-how-it-works.jpg`, `panel-prayer-fuel.jpg`, `panel-prayer-relays.jpg`, `panel-prayer-activity.jpg` (all about 4:3, for `.clip-rounded-*`), `panel-donate.jpg` (donate band) and `app-phones.png` (two-phone app mockup, resized to 900px wide).

## App store badges

- **Files:** `app-store-badge.svg`, `google-play-badge.png` — the official English badges as used on the site. Use them unchanged and at equal height.
