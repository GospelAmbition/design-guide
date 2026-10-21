---
title: Flow
summary: Even vertical space between the children of an element. The default rhythm for any run of content.
---

CUBE CSS's flow utility (Every Layout calls it the Stack). It adds space between siblings, never before the first child or after the last, so it doesn't fight the container's padding.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--flow-space` | `var(--space-m)` | Space between each child. Set it on the element or on any child. |

## When to use

- Any sequence of blocks: a heading, paragraphs and a button in a section, or cards in a column.

## Do

- Change the rhythm for one section with `style="--flow-space: var(--space-l)"` or in that block's CSS, rather than adding margins to children.
- Set `--flow-space` on a single child to change the gap above just that child.

## Don't

- Don't add top margins to the children as well. Flow owns that space.

## Code

```html
<div class="flow" style="max-width: 32rem">
  <h3>A heading</h3>
  <p>Each child is separated by the same space, taken from the brand's space scale.</p>
  <p>No margin before the first child or after the last.</p>
</div>
```

```css
.flow > * + * { margin-block-start: var(--flow-space, var(--space-m)); }
```
