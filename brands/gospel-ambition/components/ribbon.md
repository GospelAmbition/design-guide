---
title: Ribbon
summary: The red swoosh band. A full-width red ribbon, tall on the left and thin on the right, that carries a white title and subtitle and overlaps the photo above it.
uses: [container]
---

The design's signature shape, used twice on the home page: once under the hero ("Understand the calling.") and once under the photo band ("See what is free."). It is one exact curve from the XD file, 1924×664 at 1920px: the top edge dips and rises to the top right corner, the bottom edge falls from a third of the height on the right to the full height on the left. White ExtraBold title, white SemiBold subtitle, both on the tall left side.

The shape is an inline SVG stretched to the band (`preserveAspectRatio="none"`), so it keeps the curve at any width. The content's padding scales with the viewport so the text stays inside the tall part.

The live site, gospelambition.org, draws the band differently, and `data-variant="wave"` matches it. The band always follows a photo. The photo runs the full width and fades in at its top edge (over its top 9%), so it rises out of whatever section is above. The band's top edge is a shallow curve that dips in the middle and cuts into the bottom of the photo. Its bottom edge sweeps up from almost the full height on the left to the top right corner, and the next section shows below the curve. It keeps both curves on small screens.

Put the photo inside the ribbon as `.ribbon__photo`, then the band (`.ribbon__band`) with the top curve, the content and the bottom curve. Directly under the hero, leave the photo out: the hero's own photo plays that part, and the top curve cuts into it.

Add `data-overlap` to lay the ribbon over the bottom of the section above (the hero photo, the photo band), as the design does both times.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--ribbon-overlap` | `-13.4cqi` | With `data-overlap`: the negative top margin. The design's overlap; you rarely need to change it. |
| `--ribbon-below` | `transparent` (`var(--color-background)` for the wave) | Fill for the area under the ribbon's bottom edge. Set it to the next section's top colour when the next section starts behind the ribbon (`var(--color-grey-wash)` before the tools section). |
| `--ribbon-wave` | `clamp(5.625rem, 21cqi, 26.25rem)` | With `data-variant="wave"`: the height of the bottom sweep. 420px at 1920px, as on the live site; 30cqi below 48rem. |
| `--ribbon-dip` | `clamp(1.5rem, 5.5cqi, 6.5625rem)` | With `data-variant="wave"`: the height of the top curve, which overlaps the photo. |
| `--ribbon-photo-height` | `clamp(16.25rem, 46cqi, 55rem)` | With `data-variant="wave"`: the photo's height. It is cropped to fill it. |

## Do

- Keep the ribbon to a title (h1 or h2 styled as h1) and one short subtitle. It is a chapter heading, not a content block.
- Follow it with a white or washed section.

## Don't

- Don't put buttons or long text in a ribbon. The thin right end can't hold them.
- Don't change the curve or flip it. The design uses the same ribbon both times.

## Approximate

- The wave variant's sizes come from the live site, not the XD design.
- Below 48rem (`--threshold-m`, no mobile design) the ribbon would get too thin on the right for its text, so it becomes a plain red band with the curve dropped. This is a proposal.

## Code

The wave with its photo, as on the live site:

```html
<section class="ribbon" data-variant="wave">
  <img class="ribbon__photo" src="/brands/gospel-ambition/assets/photos/photo-band.jpg" alt="A young man in a striped shirt looking at his phone" />
  <div class="ribbon__band">
    <svg class="ribbon__dip" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 34C420 130 1000 110 1440 0V100H0Z"/></svg>
    <div class="container ribbon__content">
      <h2 class="ribbon__title">Understand the calling.</h2>
      <p class="subtitle">Begin with Jesus and the commission He has given His Church.</p>
    </div>
    <svg class="ribbon__wave" viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true"><path d="M0 300V285C560 270 1040 230 1440 0V300Z"/></svg>
  </div>
</section>
```

The XD design's ribbon with its content. In a narrow preview it shows the small-screen fallback:

```html
<section class="ribbon">
  <svg class="ribbon__shape" viewBox="0 0 1924.5 664.5" preserveAspectRatio="none" aria-hidden="true">
    <path class="ribbon__below" d="M1924.5 248.3C1924.5 248.3 1446.7 450.5 1152.7 517.9 817.6 594.7 0 664.5 0 664.5H1924.5Z"/>
    <path d="M0 110C0 110 997.3 342.9 1924.5 0V248.3C1924.5 248.3 1446.7 450.5 1152.7 517.9 817.6 594.7 0 664.5 0 664.5Z"/>
  </svg>
  <div class="container ribbon__content">
    <h2 class="ribbon__title">Understand the calling.</h2>
    <p class="subtitle">Begin with Jesus and the commission He has given His Church.</p>
  </div>
</section>
```

```css
.ribbon {
  position: relative;
  z-index: 1;
  color: var(--surface-red-text);
}
.ribbon[data-overlap] { margin-block-start: var(--ribbon-overlap, -13.4cqi); }
.ribbon__shape { position: absolute; inset: 0; inline-size: 100%; block-size: 100%; fill: var(--surface-red-background); }
.ribbon__shape .ribbon__below { fill: var(--ribbon-below, transparent); }
.ribbon__content { padding-block: 20cqi 7cqi; }
.ribbon__content > * { max-inline-size: var(--size-measure); }
.ribbon__title { font-size: var(--size-h1); font-weight: var(--weight-heavy); margin-block-end: var(--space-xxs); }
.ribbon[data-variant="wave"] {
  --ribbon-wave: clamp(5.625rem, 21cqi, 26.25rem);
  --ribbon-wave-space: 0.62;
}
.ribbon__photo {
  display: block;
  inline-size: 100%;
  block-size: var(--ribbon-photo-height, clamp(16.25rem, 46cqi, 55rem));
  object-fit: cover;
  object-position: 50% 25%;
  /* Fades in at the top over whatever is above. A mask only reads alpha, so any opaque colour works. */
  mask-image: linear-gradient(transparent, var(--color-red) 9%);
}
.ribbon__band { position: relative; background: var(--surface-red-background); }
.ribbon__dip {
  position: absolute;
  inset: auto 0 calc(100% - 1px); /* sits on the band's top edge, over the photo */
  display: block;
  inline-size: 100%;
  block-size: var(--ribbon-dip, clamp(1.5rem, 5.5cqi, 6.5625rem));
  fill: var(--surface-red-background);
  pointer-events: none;
}
.ribbon[data-variant="wave"] .ribbon__content {
  position: relative;
  z-index: 1;
  padding-block: clamp(2.5rem, 7cqi, 8.4375rem) calc(var(--ribbon-wave) * var(--ribbon-wave-space));
}
.ribbon__wave {
  position: absolute;
  inset: auto 0 -1px; /* overlaps the seam so no hairline shows */
  display: block;
  inline-size: 100%;
  block-size: var(--ribbon-wave);
  fill: var(--ribbon-below, var(--color-background));
  pointer-events: none;
}
@container (max-width: 48rem) {
  .ribbon[data-variant="wave"] { --ribbon-wave: 30cqi; --ribbon-wave-space: 0.75; background: none; }
  .ribbon { background: var(--surface-red-background); }
  .ribbon[data-overlap] { margin-block-start: 0; }
  .ribbon__shape { display: none; }
  .ribbon__content { padding-block: var(--space-l); }
}
```
