---
title: Center
summary: A flex column that centres its children (.center), and a block centred by its own width (.center-block).
---

Prayer.Global's own center, from the Composition section of `basic.css`. It replaces the shared Center. On the site, `.center` centres the children of a column, like the shared Center's `data-intrinsic`, and has no maximum width. Markup uses it all over, for example `btn … center w-fit mx-auto`.

## Code

```html
<div class="center" style="width: 100%; outline: 1px dashed currentColor">
  <p>Children are centred in a column.</p>
  <a class="btn btn-primary-light uppercase" href="#">Centred button</a>
</div>
<div class="center-block" style="outline: 1px dashed currentColor">
  <p>Left-aligned text in a block centred by its own width.</p>
</div>
```

```css
.center { display: flex; flex-direction: column; align-items: center; }
.center-block { width: fit-content; text-align: left; margin-inline: auto; }
```
