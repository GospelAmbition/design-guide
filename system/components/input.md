---
title: Input
summary: A single-line text field with a visible label.
---

> Placeholder shared component. Will be replaced by components found when scraping real brands.

## When to use

- Short free-text answers: names, emails, search terms.

## Do

- Always show a visible label above the field. Placeholder text is not a label.

## Don't

- Don't use placeholder text for instructions the user needs while typing.

## Code

```html
<label class="field">
  <span class="field__label">Email address</span>
  <input class="input" type="email" placeholder="you@example.com" />
</label>
```

```css
.field { display: grid; gap: var(--space-1); max-width: 22rem; }
.field__label { font-weight: var(--weight-strong); font-size: var(--size-small); }
.input {
  font: inherit;
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-surface);
  color: var(--color-text);
}
.input:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 1px;
}
```
