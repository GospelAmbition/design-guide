---
title: Button
summary: Triggers an action. Primary for the main action on a screen, secondary for the rest.
---

> Placeholder shared component. Will be replaced by components found when scraping real brands.

## When to use

- **Primary** (`data-variant="primary"`): the single most important action on a screen.
- **Secondary** (`data-variant="secondary"`): any other action next to a primary one.

Variants are CUBE CSS exceptions: the block is `.btn`, and `data-variant` picks the version.

## Do

- Write the label as a verb: "Join the group", not "Submit".
- Use a `<button>` for actions and an `<a>` styled as a button only for navigation.

## Don't

- Don't put two primary buttons side by side.
- Don't disable a button without explaining why nearby.

## Code

```html
<button class="btn" data-variant="primary" type="button">Primary action</button>
<button class="btn" data-variant="secondary" type="button">Secondary</button>
```

```css
.btn {
  font: var(--weight-strong) var(--size-step-0) / var(--leading-heading) var(--font-body);
  border: 0;
  border-radius: var(--radius-md);
  padding: var(--space-s) var(--space-l);
  cursor: pointer;
}
.btn[data-variant="primary"] {
  background: var(--color-primary);
  color: var(--color-on-primary);
}
.btn[data-variant="primary"]:hover { background: var(--color-primary-hover); }
.btn[data-variant="secondary"] {
  background: transparent;
  color: var(--color-secondary);
  box-shadow: inset 0 0 0 2px var(--color-secondary);
}
.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```
