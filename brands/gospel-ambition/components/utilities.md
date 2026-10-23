---
title: Utilities
summary: Single-purpose classes for section padding and text alignment. Spacing classes are named after the space tokens (.py-xl, .pt-l).
---

CUBE CSS's utility layer for this brand: one class, one job. Spacing classes are a prefix plus a space token: `p` padding, `y` top and bottom, `t` top, `b` bottom, so `.py-xl` sets top and bottom padding to `--space-xl`. Only the classes the patterns use are defined so far.

## Code

```html
<div class="text-center py-m" style="outline: 1px dashed currentColor">
  <p class="mx-auto" style="outline: 1px dashed currentColor; width: fit-content">.mx-auto inside .py-m .text-center</p>
</div>
```

```css
.text-center { text-align: center; }
.mx-auto { margin-inline: auto; }
.py-m { padding-top: var(--space-m); padding-bottom: var(--space-m); }
.py-l { padding-top: var(--space-l); padding-bottom: var(--space-l); }
.py-xl { padding-top: var(--space-xl); padding-bottom: var(--space-xl); }
.pt-l { padding-top: var(--space-l); }
.pt-xl { padding-top: var(--space-xl); }
.pb-xl { padding-bottom: var(--space-xl); }
```
