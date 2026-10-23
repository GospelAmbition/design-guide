---
title: Swoosh
summary: "The soft section edge. A light grey crescent that curves across the full width where one section meets the next."
---

Between most sections the design doesn't use a straight edge. A `--color-grey-light` crescent sweeps across the page: its top edge falls from the top left corner to two thirds of the way down on the right, and its bottom edge arches up in the middle. The section above fills the area over the crescent, and the section below shows through under the arch. The curve is the design's own, 1946×342 at 1920px, drawn as an inline SVG.

Place the swoosh as the first child of the lower section. It sits over that section's top, so give the section enough top padding to clear it (about 18cqi).

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--swoosh-above` | `var(--color-white)` | The colour of the section above. Charcoal after the ministries section. |
| `--swoosh-color` | `var(--color-grey-light)` | The crescent. |

Add `.swoosh--end` to turn it upside down and place it as the last child of the upper section instead. The design does this once, between the story and the testimonials; `--swoosh-above` is then the colour of the section below.

## Do

- Use a swoosh wherever the background changes between two sections (white to wash, charcoal to white, white to photo).

## Don't

- Don't stack a swoosh directly under a ribbon. The ribbon already makes the edge.

## Code

```html
<div style="background: var(--color-charcoal); height: 3rem"></div>
<section class="swoosh-demo" style="position: relative; padding-top: 18cqi; padding-bottom: 2rem">
  <svg class="swoosh" style="--swoosh-above: var(--color-charcoal)" viewBox="0 0 1946 342" preserveAspectRatio="none" aria-hidden="true">
    <path class="swoosh__above" d="M0 0C826.8 35.9 1165.7 75.5 1165.7 75.5 1463.1 110.2 1946 214.4 1946 214.4V0Z"/>
    <path class="swoosh__crescent" d="M0 285.7C0 285.7 1008.6 165.7 1946 342.3V214.4C1946 214.4 1463.1 110.2 1165.7 75.5 826.8 35.9 0 0 0 0Z"/>
  </svg>
  <p class="container">The section below shows through under the arch.</p>
</section>
```

```css
.swoosh {
  position: absolute;
  inset-block-start: -1px; /* overlaps the seam so no hairline shows between sections */
  inset-inline: 0;
  display: block;
  inline-size: 100%;
  block-size: auto;
  aspect-ratio: 1946 / 342;
  pointer-events: none;
}
.swoosh__above { fill: var(--swoosh-above, var(--color-white)); }
.swoosh__crescent { fill: var(--swoosh-color, var(--color-grey-light)); }
.swoosh--end { inset-block: auto -1px; transform: rotate(180deg); }
```
