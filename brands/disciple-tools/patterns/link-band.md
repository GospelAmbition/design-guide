---
title: Link band
summary: "The green \"Dig in!\" band that closes a page. A centred heading, then columns of headings over stacked full-width blue buttons."
uses: [button, container, flow, switcher]
---

The last section of What is Disciple.Tools, For Small Teams and the other audience pages. Each column groups related pages ("Learn more about…", "Explore solutions…"); buttons stack 20px apart and fill the column (`data-width="full"`). It sits on the green surface (`.surface-green`). Columns stack below 768px (`--threshold-l`).

## Don't

- Don't use it mid-page. It is the page's way out.
- Don't make the headings white or blue as the live site does. White on green is 2.1:1 and blue on green 2.4:1 (see Known issues); the green surface sets them near-black.

## Code

```html
<section class="link-band surface-green pt-s pb-l">
  <div class="container flow">
    <h2 class="text-center">Dig in!</h2>
    <div class="switcher">
      <div class="flow">
        <h4>Learn more about Disciple.Tools</h4>
        <a class="btn" data-variant="blue" data-width="full" href="/kingdom-vision/">Our Kingdom Vision</a>
        <a class="btn" data-variant="blue" data-width="full" href="/history/">Our History</a>
        <a class="btn" data-variant="blue" data-width="full" href="/what-is-disciple-tools/">What Disciple.Tools Is</a>
      </div>
      <div class="flow">
        <h4>Explore solutions for your team</h4>
        <a class="btn" data-variant="blue" data-width="full" href="/online-strategies/">For Online Strategies</a>
        <a class="btn" data-variant="blue" data-width="full" href="/small-teams/">For Small Teams</a>
        <a class="btn" data-variant="blue" data-width="full" href="/multiple-teams/">For Multiple Teams</a>
      </div>
    </div>
  </div>
</section>
```

```css
.link-band .switcher { --threshold: var(--threshold-l); --gutter: var(--space-xs); }
.link-band h4 { font-weight: var(--weight-heavy); line-height: var(--leading-heading); }
```
