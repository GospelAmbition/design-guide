---
title: Steps band
summary: A green band of numbered steps. Huge white Open Sans numbers beside short white instructions.
uses: [container, flow, utilities]
---

"7 Simple Steps to…" on the Hosting page. Each step is a big number (89px, `--size-step`) in a column of its own, with the instruction (Open Sans 400, 20.8px) beside it.

## Don't

- Don't put long text here. White on green fails contrast for body-size text (see Known issues); the site gets by with 20.8px.

## Code

```html
<section class="steps-band bg-green pt-l pb-l">
  <div class="container flow">
    <h2 class="text-center">7 Simple Steps to Self-Hosting</h2>
    <ol class="steps" role="list">
      <li><span class="steps__number">1</span><h4>Download Disciple.Tools (this is a WordPress theme)</h4></li>
      <li><span class="steps__number">2</span><h4>Choose a host and set up a WordPress site</h4></li>
      <li><span class="steps__number">3</span><h4>Upload the theme and activate it</h4></li>
    </ol>
  </div>
</section>
```

```css
.steps { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-xs); }
.steps li { display: grid; grid-template-columns: 1fr 2fr; align-items: center; gap: var(--space-xs); }
.steps__number {
  font-family: var(--font-heading);
  font-size: var(--size-step);
  font-weight: var(--weight-heavy);
  line-height: var(--leading-heading);
  text-align: center;
}
.steps h4 { font-weight: var(--weight-regular); color: var(--color-white); }
```
