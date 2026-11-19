---
title: Box
summary: Padding and an optional border around content. Add a surface utility to give it a background.
---

Every Layout's Box. It only pads and outlines: colours come from a surface (`.surface-*`), so text on it always has enough contrast.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--box-padding` | `var(--space-m)` | Padding on every side. |
| `--box-border-width` | `0` | Border width. The border takes the text colour. |

## When to use

- A callout, a panel of related links, a boxed quote. For a full card with an image and actions, use the brand's Card.

## Code

```html
<div class="box demo-fill" style="--box-border-width: 1px">A box with a border in the text colour.</div>
```

```css
.box {
  padding: var(--box-padding, var(--space-m));
  border: var(--box-border-width, 0) solid currentColor;
  /* Keeps the box visible in Windows high contrast mode, where backgrounds are removed. */
  outline: 1px solid transparent;
  outline-offset: -1px;
}
```
