---
title: Intro section
summary: Centred statement heading in Europa, a few short lines, a quote, and the CTA, over a faint light-blue world map.
uses: [button, center, container, flow]
---

The first section under the hero ("Want to pray globally but don't know where to start?").

## When to use

- Straight after the hero, to say what the site is and invite the first action.

## Do

- Ask a question in the heading, then answer it in two or three short lines.
- Use `.h2.font-body.weight-strong` for the heading. This is the one bold Europa statement heading.
- Set the faint world map with the `--intro-image` setting.

## Don't

- Don't write long paragraphs here.

## Code

```html
<section class="intro-section container py-xl bg-cover" id="intro" style="--intro-image: url(/brands/prayer-global/assets/world-map-light.png)">
  <div class="flow text-center">
    <h2 class="font-body weight-strong h2">Want to pray globally but don't know where to start?</h2>
    <p>Prayer.Global makes praying for the lost simple— and life-changing.</p>
    <p class="italic center">"With this resource, you will be saying prayers you never said before, praying for people you never knew existed, and you and the world will be changed." -Northside CC Pastor</p>
    <p>We'll show you how.</p>
    <p class="weight-strong">Ready…Set…</p>
    <a class="btn" data-variant="cta" data-size="large" href="/newest/lap/">Start praying</a>
  </div>
</section>
```

```css
.intro-section { background-image: var(--intro-image, none); }
```

