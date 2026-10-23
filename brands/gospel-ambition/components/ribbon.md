---
title: Ribbon
summary: The red swoosh band. A full-width red ribbon, tall on the left and thin on the right, that carries a white title and subtitle and overlaps the photo above it.
uses: [container]
---

The design's signature shape, used twice on the home page: once under the hero ("Understand the calling.") and once under the photo band ("See what is free."). It is one exact curve from the XD file, 1924×664 at 1920px: the top edge dips and rises to the top right corner, the bottom edge falls from a third of the height on the right to the full height on the left. White ExtraBold title, white SemiBold subtitle, both on the tall left side.

The shape is an inline SVG stretched to the band (`preserveAspectRatio="none"`), so it keeps the curve at any width. The content's padding scales with the viewport so the text stays inside the tall part.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--ribbon-overlap` | `0` | Negative top margin, to lay the ribbon over the bottom of the section above (the hero photo, the photo band). The design overlaps by about 13cqi. |
| `--ribbon-below` | `transparent` | Fill for the area under the ribbon's bottom edge. Set it to the next section's top colour when the next section starts behind the ribbon (`var(--color-grey-wash)` before the tools section). |

## Do

- Keep the ribbon to a title (h1 or h2 styled as h1) and one short subtitle. It is a chapter heading, not a content block.
- Follow it with a white or washed section.

## Don't

- Don't put buttons or long text in a ribbon. The thin right end can't hold them.
- Don't change the curve or flip it. The design uses the same ribbon both times.

## Approximate

- Below 48rem (no mobile design) the ribbon would get too thin on the right for its text, so it becomes a plain red band with the curve dropped. This is a proposal.

## Code

The shape on its own, at the design's proportions:

```html
<svg viewBox="0 0 1924.5 664.5" style="display: block; width: 100%; height: auto; fill: var(--color-red)" aria-hidden="true"><path d="M0 110C0 110 997.3 342.9 1924.5 0V248.3C1924.5 248.3 1446.7 450.5 1152.7 517.9 817.6 594.7 0 664.5 0 664.5Z"/></svg>
```

The ribbon with its content. In a narrow preview it shows the small-screen fallback:

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
  margin-block-start: var(--ribbon-overlap, 0);
  color: var(--color-white);
}
.ribbon__shape { position: absolute; inset: 0; inline-size: 100%; block-size: 100%; fill: var(--color-red); }
.ribbon__shape .ribbon__below { fill: var(--ribbon-below, transparent); }
.ribbon__content { padding-block: 20cqi 7cqi; }
.ribbon__content > * { max-inline-size: var(--size-measure); }
.ribbon__title { font-size: var(--size-h1); font-weight: var(--weight-heavy); margin-block-end: var(--space-xxs); }
@container (max-width: 48rem) {
  .ribbon { background: var(--color-red); margin-block-start: 0; }
  .ribbon__shape { display: none; }
  .ribbon__content { padding-block: var(--space-l); }
}
```
