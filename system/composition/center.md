---
title: Center
summary: Centres a block horizontally with a maximum width, such as a readable column of text.
---

Every Layout's Center. It centres the box itself, not the text inside it.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--measure` | `60ch` | Maximum width of the content. |
| `--gutter` | `0` | Minimum space on each side on narrow screens. |

Add `data-intrinsic` to also centre the children by their own width, for example a button below a paragraph.

## When to use

- A column of article text, a form, a narrow intro inside a wide section.

## Don't

- Don't use it as the page-width wrapper. That's Container.

## Code

```html
<div class="center" data-intrinsic style="outline: 1px dashed currentColor; width: 100%">
  <p>A centred column, at most 60 characters wide.</p>
  <span style="outline: 1px dashed currentColor">Intrinsic child</span>
</div>
```

```css
.center {
  box-sizing: content-box;
  max-inline-size: var(--measure, 60ch);
  margin-inline: auto;
  padding-inline: var(--gutter, 0);
}
.center[data-intrinsic] {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```
