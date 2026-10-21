---
title: Intro section
summary: Centred statement heading in Europa, a few short lines, a quote, and the CTA, over a faint light-blue world map.
uses: [button, center, container, flow, utilities]
---

The first section under the hero ("Want to pray globally but don't know where to start?").

## When to use

- Straight after the hero, to say what the site is and invite the first action.

## Do

- Ask a question in the heading, then answer it in two or three short lines.
- Use `.h2.font-base.font-weight-bold` for the heading. This is the one bold Europa statement heading.

## Don't

- Don't write long paragraphs here.

## Code

```html
<section class="container py-6 cover" style="background-image: url(/brands/prayer-global/assets/world-map-light.png)">
  <div class="flow-medium center text-center">
    <h2 class="font-base font-weight-bold h2">Want to pray globally but don't know where to start?</h2>
    <p>Prayer.Global makes praying for the lost simple— and life-changing.</p>
    <p class="font-italic w-60ch">"With this resource, you will be saying prayers you never said before, praying for people you never knew existed, and you and the world will be changed." -Northside CC Pastor</p>
    <p>We'll show you how.</p>
    <p class="font-weight-bold">Ready…Set…</p>
    <a class="btn btn-cta btn-lg" href="#">Start praying</a>
  </div>
</section>
```

