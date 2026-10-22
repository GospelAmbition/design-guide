---
title: Utilities
summary: Single-purpose classes for section padding and text alignment. Spacing classes are named after the space tokens (.py-l, .py-s).
---

CUBE CSS's utility layer for this brand: one class, one job. Spacing classes are a prefix plus a space token: `p` padding, `y` top and bottom, `t` top, `b` bottom, so `.py-s` sets top and bottom padding to `--space-s`. Only the classes the patterns use are defined so far.

## Code

```html
<div class="text-center py-s" style="width: 100%; outline: 1px dashed currentColor">
  <p class="mx-auto" style="outline: 1px dashed currentColor; width: fit-content">.mx-auto inside .py-s .text-center</p>
</div>
```

```css
.text-center { text-align: center; }
.mx-auto { margin-inline: auto; }
.align-items-center { align-items: center; }
.py-xs { padding-top: var(--space-xs); padding-bottom: var(--space-xs); }
.py-s { padding-top: var(--space-s); padding-bottom: var(--space-s); }
.py-band { padding-top: var(--space-band); padding-bottom: var(--space-band); }
.py-m { padding-top: var(--space-m); padding-bottom: var(--space-m); }
.py-l { padding-top: var(--space-l); padding-bottom: var(--space-l); }
.py-xl { padding-top: var(--space-xl); padding-bottom: var(--space-xl); }
.pt-l { padding-top: var(--space-l); }
.pb-l { padding-bottom: var(--space-l); }
.pt-s { padding-top: var(--space-s); }
```
