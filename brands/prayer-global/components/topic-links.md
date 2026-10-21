---
title: Topic links
summary: A ruled list of in-page links. Icon on the left, centred uppercase title, chevron on the right. Each one jumps to a section further down.
uses: [icon]
---

From the About page ("Historic moment", "How it works", "Global race", "Moravian prayer challenge"). It looks like an accordion, but each row is a link to a section lower on the page (`.pg-accordion__toggle` in the site's CSS). The chevron comes from the icon font.

## When to use

- Near the top of a long page made of several topic sections, as a table of contents.

## Do

- Give every row a Prayer.Global icon that matches its topic.
- Add `data-smaller` to a row whose title is too long to fit at 20px.

## Don't

- Don't use it for content that should expand in place.

## Code

```html
<div class="topic-links" style="width: 100%; max-width: 40rem">
  <a class="pg-accordion__toggle" href="#historic-moment"><i class="icon pg-time icon-small" aria-hidden="true"></i>Historic moment</a>
  <a class="pg-accordion__toggle" href="#how-it-works"><i class="icon pg-question-dark icon-small" aria-hidden="true"></i>How it works</a>
  <a class="pg-accordion__toggle" href="#global-race"><i class="icon pg-race icon-small" aria-hidden="true"></i>Global race</a>
  <a class="pg-accordion__toggle" href="#prayer-challenge" data-smaller><i class="icon pg-prayer icon-small" aria-hidden="true"></i>Moravian prayer challenge</a>
</div>
```

```css
.topic-links { border-top: 1px solid var(--color-brand-light); text-align: center; }
.pg-accordion__toggle {
  display: block;
  position: relative;
  padding: 1.8rem 0;
  border-bottom: 1px solid var(--color-brand);
  color: var(--color-brand-light);
  text-transform: uppercase;
  font-size: var(--size-large);
  text-decoration: none;
}
.pg-accordion__toggle[data-smaller] { font-size: var(--size-small); }
.pg-accordion__toggle .icon { position: absolute; left: 0; top: 0; bottom: 0; line-height: var(--leading-body); }
.pg-accordion__toggle[aria-expanded="true"] { color: var(--color-brand-lighter); border-bottom-color: transparent; }
.pg-accordion__toggle::after {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-icons);
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  font-size: var(--size-icon);
  content: "\e91b";
}
.pg-accordion__toggle[aria-expanded="true"]::after { content: "\e91e"; }
```
