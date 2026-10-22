---
title: Flow
summary: Even vertical space between children, 20px by default, the gap between every heading, paragraph and button on the site.
---

The shared Flow with a different default. On disciple.tools every block in a column (heading, text, button, image) is followed by the same 20px (`--space-xs`), so that is the default here instead of `--space-m`. It also clears the children's own top and bottom margins (paragraphs have a bottom margin outside flow), so the gap is exactly `--flow-space`.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--flow-space` | `var(--space-xs)` | Space between each child. Set it on the element or on any child. |

## Do

- Use `style="--flow-space: var(--space-s)"` or a block's CSS to change the rhythm, rather than adding margins.

## Don't

- Don't add top margins to the children as well. Flow owns that space.

## Code

```html
<div class="flow" style="max-width: 32rem">
  <h2>Always free as your team grows</h2>
  <p>Each child is separated by 20px.</p>
  <p>No margin before the first child or after the last.</p>
</div>
```

```css
.flow > * { margin-block: 0; }
.flow > * + * { margin-block-start: var(--flow-space, var(--space-xs)); }
```
