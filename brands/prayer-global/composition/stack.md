---
title: Stack
summary: A centred flex column with fixed gaps. .stack-xxs (0.5rem), .stack-xs (1rem), .stack-md (2rem), .stack (4rem).
---

Prayer.Global-only, from the Composition section of `basic.css`. The size classes are named after the space token they use, so two differ from the site: its `.stack-xsm` is `.stack-xxs` here and its `.stack-sm` is `.stack-xs`. Unlike Every Layout's Stack, which is the same as Flow, this one also centres its children. Use it for centred groups such as an icon, a title and a button.

## Options

- `data-grid` switches to grid layout, so children can stretch to the full width.
- `data-stretch` stretches the children instead of centring them.

## Code

```html
<div class="stack-xs" style="width: 100%">
  <i class="icon icon-small pg-relay" aria-hidden="true"></i>
  <h3>Centred group</h3>
  <a class="btn btn-primary-light uppercase" href="#">Action</a>
</div>
```

```css
.stack-xxs,
.stack-xs,
.stack-md,
.stack { display: flex; flex-direction: column; align-items: center; }
.stack-xs[data-grid],
.stack-md[data-grid],
.stack[data-grid] { display: grid; }
.stack-xs[data-stretch],
.stack-md[data-stretch],
.stack[data-stretch] { align-items: stretch; }
.stack-xxs > *,
.stack-xs > *,
.stack-md > *,
.stack > * { margin-top: 0; margin-bottom: 0; }
.stack-xxs > * + * { margin-top: var(--flow-space, var(--space-xxs)); }
.stack-xs > * + * { margin-top: var(--flow-space, var(--space-xs)); }
.stack-md > * + * { margin-top: var(--flow-space, var(--space-m)); }
.stack > * + * { margin-top: var(--flow-space, var(--space-xl)); }
```
