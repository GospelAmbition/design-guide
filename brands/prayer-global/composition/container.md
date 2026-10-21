---
title: Container
summary: Bootstrap's .container (540–1320px at its breakpoints), with the site's data-gutter-4 and data-no-gutter options.
---

Replaces the shared Container. Prayer.Global sections use Bootstrap 5.2's `.container`, which steps between fixed maximum widths instead of growing fluidly. The site adds two options:

- `data-gutter-4`: 1.5rem side padding.
- `data-no-gutter`: no side padding, for full-bleed photos.

## Code

```html
<section style="width: 100%; outline: 1px dashed currentColor">
  <div class="container" data-gutter-4 style="outline: 1px dashed currentColor">Bootstrap container with 1.5rem side padding.</div>
</section>
```

```css
.container {
  width: 100%;
  box-sizing: border-box;
  padding-inline: 0.75rem;
  margin-inline: auto;
}
.container[data-gutter-4] { padding-inline: var(--space-s-m); }
.container[data-no-gutter] { padding-inline: 0; }
@media (min-width: 576px) { .container { max-width: 540px; } }
@media (min-width: 768px) { .container { max-width: 720px; } }
@media (min-width: 992px) { .container { max-width: 960px; } }
@media (min-width: 1200px) { .container { max-width: 1140px; } }
@media (min-width: 1400px) { .container { max-width: 1320px; } }
```
