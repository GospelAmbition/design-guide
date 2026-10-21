---
title: Callout
summary: A warm, highlighted note that draws attention to one piece of information.
---

Aurora-only component.

## When to use

- A single tip, reminder or encouragement within a page of body text.
- At most one callout per screen section.

## Don't

- Don't put a button inside a callout; link to the next step instead.
- Don't use it for errors or warnings.

## Code

```html
<aside class="callout">
  <p class="callout__title">Good to know</p>
  <p>Bring a friend along — everyone is welcome, no sign-up needed.</p>
</aside>
```

```css
.callout {
  background: var(--color-surface);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: var(--space-m) var(--space-l);
  max-width: 36rem;
}
.callout p { margin: 0; }
.callout .callout__title {
  font-family: var(--font-heading);
  font-weight: var(--weight-heading);
  color: var(--color-primary);
  margin-bottom: var(--space-xs);
}
```
