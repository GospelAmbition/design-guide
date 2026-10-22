---
title: Utilities
summary: Single-purpose classes for spacing, alignment, flex grow and widths. Spacing classes are named after the space tokens (.py-xl, .px-s-m).
---

CUBE CSS's utility layer for this brand: one class, one job. Spacing classes are a prefix plus a space token: `p` padding, `x` left and right, `y` top and bottom, `t` top, `b` bottom, so `.py-xl` sets top and bottom padding to `--space-xl`. Only the classes the patterns use are defined so far. A complete set generated from the tokens is planned.

## Code

```html
<div class="text-center py-xl" style="width: 100%; outline: 1px dashed currentColor">
  <p class="w-fit mx-auto px-s-m" style="outline: 1px dashed currentColor">.w-fit .mx-auto .px-s-m inside .py-xl .text-center</p>
</div>
```

```css
.text-center { text-align: center; }
.align-items-center { align-items: center; }
.w-fit { width: fit-content; }
.w-90 { width: 90%; }
.w-60ch { max-width: 60ch; }
.mx-auto { margin-inline: auto; }
.grow-1 { flex-grow: 1; }
.grow-2 { flex-grow: 2; }
.grow-3 { flex-grow: 3; }
.grow-4 { flex-grow: 4; }
.font-italic { font-style: italic; }
.fw-bold { font-weight: var(--weight-strong); }
.cover { background-size: cover; background-repeat: no-repeat; }
.py-xxs { padding-top: var(--space-xxs); padding-bottom: var(--space-xxs); }
.py-l { padding-top: var(--space-l); padding-bottom: var(--space-l); }
.py-xl { padding-top: var(--space-xl); padding-bottom: var(--space-xl); }
.pt-s-m { padding-top: var(--space-s-m); }
.pt-xl { padding-top: var(--space-xl); }
.pb-xl { padding-bottom: var(--space-xl); }
.px-s-m { padding-left: var(--space-s-m); padding-right: var(--space-s-m); }
.px-l { padding-left: var(--space-l); padding-right: var(--space-l); }
```
