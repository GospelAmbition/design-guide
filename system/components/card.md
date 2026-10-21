---
title: Card
summary: Groups related content on a raised surface.
uses: [button]
---

> Placeholder shared component. Will be replaced by components found when scraping real brands.

## When to use

- A self-contained item in a list or grid: an event, an article, a product.

## Don't

- Don't nest cards inside cards.
- Don't put more than one primary button in a card.

## Code

```html
<div class="card">
  <h3>Card title</h3>
  <p>Cards group related content on a surface with a border and a medium radius.</p>
  <button class="btn btn-primary" type="button">Learn more</button>
</div>
```

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-l);
  max-width: 22rem;
}
.card > :last-child { margin-bottom: 0; }
```
