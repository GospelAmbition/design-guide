---
title: Utilities
summary: The single-purpose classes Prayer.Global's markup relies on. Section padding (.py-6), Bootstrap spacing and alignment, flex grow, widths.
---

CUBE CSS's utility layer for this brand: one class, one job. They come from the Utilities section of `basic.css` (`.py-6`, `.w-fit`, `.w-90`, `.grow-*`, `.font-italic`, `.cover`…) and from the Bootstrap 5.2 utilities the templates use (`.px-4`, `.py-5`, `.mx-auto`, `.text-center`…), with values as tokens.

## Code

```html
<div class="text-center py-6" style="width: 100%; outline: 1px dashed currentColor">
  <p class="w-fit mx-auto px-4" style="outline: 1px dashed currentColor">.w-fit .mx-auto .px-4 inside .py-6 .text-center</p>
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
.py-1 { padding-top: var(--space-xxs); padding-bottom: var(--space-xxs); }
.py-5 { padding-top: var(--space-l); padding-bottom: var(--space-l); }
.py-6 { padding-top: var(--space-xl); padding-bottom: var(--space-xl); }
.pt-4 { padding-top: var(--space-s-m); }
.pt-6 { padding-top: var(--space-xl); }
.pb-6 { padding-bottom: var(--space-xl); }
.px-4 { padding-left: var(--space-s-m); padding-right: var(--space-s-m); }
.px-5 { padding-left: var(--space-l); padding-right: var(--space-l); }
```
