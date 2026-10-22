---
title: Title band
summary: A short full-width blue band with a centred white heading. Opens each chapter of a long page.
uses: [container, utilities]
---

On What is Disciple.Tools ("Conceptually…", "Technically…", "Aspirationally…") and Hosting ("Recommended Partner Hosting", "Premium Hosting Services", "Budget Hosting Services"). The band is 82px tall: a 32px heading with 25px above and below. The content under it is a plain white section, often a [Feature row](../feature-row/).

## Code

```html
<section class="title-band bg-blue py-band">
  <div class="container text-center">
    <h2>Conceptually, Disciple.Tools is…</h2>
  </div>
</section>
```

```css
.title-band h2 { line-height: var(--leading-heading); }
```
