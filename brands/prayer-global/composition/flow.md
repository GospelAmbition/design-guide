---
title: Flow
summary: Even vertical space between the children of an element. Like the shared Flow, but it also clears the children's own top and bottom margins.
---

Prayer.Global's own flow, from the Composition section of the site's `basic.css`. It replaces the shared Flow because the site's version also clears every child's own top and bottom margins, so headings and paragraphs keep exactly the gap you set.

The site has one class per size (`.flow-xsmall`, `.flow-medium`, `.flow-xmedium`, and `.flow` at 4rem). Here there is one `.flow`, and you set the size with the `--flow-space` setting, to a space token.

## Settings

| Property | Default | What it does |
| --- | --- | --- |
| `--flow-space` | `var(--space-m)` | Space between each child. Set it on the element or on any child. |

## When to use

- `style="--flow-space: var(--space-xs)"` (1rem): inside a text column (heading, paragraphs, button).
- No setting (2rem): between groups inside a section.
- `style="--flow-space: var(--space-xl)"` (4rem): between whole sections stacked in one wrapper.

## Don't

- Don't add margins to the children. Flow owns that space.

## Code

```html
<div class="flow" style="--flow-space: var(--space-xs)">
  <h3>Flow, extra small</h3>
  <p>1rem between each child.</p>
  <p>Child margins are cleared.</p>
</div>
<div class="flow">
  <h3>Flow, default</h3>
  <p>2rem between each child.</p>
</div>
```

```css
.flow > * { margin-block: 0; }
.flow > * + * { margin-block-start: var(--flow-space, var(--space-m)); }
```
