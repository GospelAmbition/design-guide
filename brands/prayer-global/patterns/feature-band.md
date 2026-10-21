---
title: Feature band
summary: Navy-to-orange gradient band. White text with a Bebas Kai title and icon on the left, a clipped image panel on the right.
uses: [button, icon, image-panel, center, container, flow, switcher, switcher-variants, utilities]
---

"How it works" and "Prayer relays" on the home page (`section.brand-lightest-bg.blue-orange-gradient.py-6`). Alternate it with the white [Feature section](../feature-section/).

## When to use

- Every second section on a long page, to break up the white.

## Do

- Keep the text on the left, over the navy end of the gradient.
- Use `.btn-primary-light` for its button.

## Don't

- Don't put text over the orange end.
- Don't stack two bands back to back.

## Code

```html
<section class="brand-lightest-bg blue-orange-gradient py-6" style="width: 100%">
  <div class="container" data-gutter-4>
    <div class="switcher switcher-md align-items-center">
      <div class="flow-small white">
        <h2 class="text-center">How it works <i class="icon icon-small pg-logo-prayer" aria-hidden="true"></i></h2>
        <p>Prayer.Global has broken the world down into 4,770 states based on geographical and governmental boundaries.</p>
        <p>Pray for all 4,770…complete a "prayer lap" around the world!</p>
        <p>An interactive map tracks your prayers in real time.</p>
        <a class="btn btn-primary-light uppercase center w-fit mx-auto px-4" href="#">View prayer map</a>
      </div>
      <div class="drop-shadow"><img class="clip-rounded-start" src="/brands/prayer-global/assets/photos/panel-how-it-works.jpg" alt="" /></div>
    </div>
  </div>
</section>
```

```css
.blue-orange-gradient { background-image: var(--gradient-blue-orange); }
```
