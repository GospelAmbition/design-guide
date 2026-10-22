---
title: Container
summary: The page-width wrapper, 1140px wide with a 10px gutter, as every section on disciple.tools.
---

Replaces the shared Container because the site's content column is narrower and its gutter is much smaller. Every section on disciple.tools centres its content at 1140px (`--size-container`), and each column inside adds 10px of padding (`--space-xxs`), so content sits 10px from the screen edge on phones. The nav bar is the one exception: it is 1200px wide (`--size-nav`), set in the Nav bar component.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--container-max` | `var(--size-container)` | Maximum width of the content. |
| `--gutter` | `var(--space-xxs)` | Padding on each side. |

## Do

- Put the background on the full-width section and the `.container` inside it.

## Code

```html
<section style="width: 100%; outline: 1px dashed currentColor">
  <div class="container" style="outline: 1px dashed currentColor">Content stays within 1140px, 10px from the edge.</div>
</section>
```

```css
.container {
  position: relative;
  margin-inline: auto;
  max-width: var(--container-max, var(--size-container));
  padding-inline: var(--gutter, var(--space-xxs));
}
```
