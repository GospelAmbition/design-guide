---
title: Get the app
summary: A "Get the app" title and the App Store and Google Play badges beside the two-phone mockup.
uses: [center, container, flow, switcher]
---

From the bottom of the home page.

## When to use

- Near the end of the home page, or on any page about the mobile app.

## Do

- Use the official badges unchanged (`assets/app-store-badge.svg`, `assets/google-play-badge.png`) and link them to the store listings. The store URLs in the example are placeholders: use the real listing links.

## Don't

- Don't recolour, crop or redraw the badges. Apple and Google don't allow it.

## Code

```html
<section class="py-xl">
  <div class="container switcher align-items-center" style="--threshold: var(--threshold-m); --gutter: var(--space-m)">
    <div class="flow">
      <h2 class="text-center">Get the app</h2>
      <div class="center app-badges" data-intrinsic>
        <a href="https://apps.apple.com/"><img src="/brands/prayer-global/assets/app-store-badge.svg" alt="Download on the App Store" /></a>
        <a href="https://play.google.com/store/apps/"><img src="/brands/prayer-global/assets/google-play-badge.png" alt="Get it on Google Play" /></a>
      </div>
    </div>
    <div><img src="/brands/prayer-global/assets/photos/app-phones.png" alt="The Prayer.Global app on two phones" /></div>
  </div>
</section>
```

```css
.app-badges { gap: var(--space-xxs); }
.app-badges img { height: 3.5rem; width: auto; display: block; }
```
