---
title: Photo band
summary: "A full-width photo that fades in from white at the top, cut off at the bottom by the red ribbon with the next chapter's title."
uses: [container, ribbon]
---

Between the stats and the tools on the home page: a full-bleed photo of one person using a phone, its top edge fading in from the white section above (`--gradient-fade-top`), and the red ribbon ("See what is free.") laid over its bottom. Under the ribbon's lower edge the grey wash of the next section begins, so the ribbon's `--ribbon-below` is set to `--color-grey-wash`.

## Do

- Use a photo of a real person engaging with a tool (a phone, a Bible, a conversation), with space at the top.
- Follow it with the [tools grid](../tools-grid/) or another `.bg-wash` section.

## Code

```html
<section class="photo-band">
  <img src="/brands/gospel-ambition/assets/photos/photo-band.jpg" alt="A young man in a striped shirt looking at his phone" />
</section>
<section class="ribbon" style="--ribbon-overlap: -13.4cqi; --ribbon-below: var(--color-grey-wash)">
  <svg class="ribbon__shape" viewBox="0 0 1924.5 664.5" preserveAspectRatio="none" aria-hidden="true">
    <path class="ribbon__below" d="M1924.5 248.3C1924.5 248.3 1446.7 450.5 1152.7 517.9 817.6 594.7 0 664.5 0 664.5H1924.5Z"/>
    <path d="M0 110C0 110 997.3 342.9 1924.5 0V248.3C1924.5 248.3 1446.7 450.5 1152.7 517.9 817.6 594.7 0 664.5 0 664.5Z"/>
  </svg>
  <div class="container ribbon__content">
    <h2 class="ribbon__title">See what is free.</h2>
    <p class="subtitle">Discover the tools and trainings, the people, and the ministries putting these resources to use.</p>
  </div>
</section>
```

```css
.photo-band { position: relative; }
.photo-band img { display: block; inline-size: 100%; block-size: 50cqi; min-block-size: 16rem; object-fit: cover; object-position: center 35%; }
.photo-band::before { content: ""; position: absolute; inset: 0 0 auto; block-size: 20%; background-image: var(--gradient-fade-top); }
```
