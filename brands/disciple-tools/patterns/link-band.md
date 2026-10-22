---
title: Link band
summary: "The green \"Dig in!\" band that closes a page. A white heading, then columns of blue headings over stacked full-width blue buttons."
uses: [button, container, flow, switcher, utilities]
---

The last section of What is Disciple.Tools, For Small Teams and the other audience pages. Each column groups related pages ("Learn more about…", "Explore solutions…"); buttons stack 20px apart and fill the column.

## Don't

- Don't use it mid-page. It is the page's way out.
- Don't rely on the blue column headings for meaning. Blue on green is 2.4:1 (see Known issues).

## Code

```html
<section class="link-band bg-green pt-s pb-l">
  <div class="container flow">
    <h2 class="text-center">Dig in!</h2>
    <div class="switcher">
      <div class="flow">
        <h4>Learn more about Disciple.Tools</h4>
        <a class="btn btn-blue btn-block" href="#">Our Kingdom Vision</a>
        <a class="btn btn-blue btn-block" href="#">Our History</a>
        <a class="btn btn-blue btn-block" href="#">What Disciple.Tools Is</a>
      </div>
      <div class="flow">
        <h4>Explore solutions for your team</h4>
        <a class="btn btn-blue btn-block" href="#">For Online Strategies</a>
        <a class="btn btn-blue btn-block" href="#">For Small Teams</a>
        <a class="btn btn-blue btn-block" href="#">For Multiple Teams</a>
      </div>
    </div>
  </div>
</section>
```

```css
.link-band .switcher { --threshold: 48rem; --gutter: var(--space-xs); }
.link-band h4 { font-weight: var(--weight-heavy); line-height: var(--leading-heading); color: var(--color-blue); }
```
