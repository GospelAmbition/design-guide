---
title: Flow
summary: Vertical space between children, in four fixed sizes. .flow (4rem), .flow-xmedium (3rem), .flow-medium (2rem), .flow-small (1rem).
---

Prayer.Global's own flow, from the Composition section of `basic.css`. It replaces the shared Flow because the site's version differs in three ways:

- Each size is its own class, so `.flow-small` works without `.flow`.
- `.flow` defaults to 4rem.
- It also clears every child's own top and bottom margins.

The site's `--pg-flow-size` override is called `--flow-space` here, as in the shared Flow.

## When to use

- `.flow-small`: inside a text column (heading, paragraphs, button).
- `.flow-medium`: between groups inside a section.
- `.flow`: between whole sections stacked in one wrapper.

## Code

```html
<div class="flow-small" style="max-width: 32rem">
  <h3>Flow small</h3>
  <p>1rem between each child.</p>
  <p>Child margins are cleared.</p>
</div>
<div class="flow-medium" style="max-width: 32rem">
  <h3>Flow medium</h3>
  <p>2rem between each child.</p>
</div>
```

```css
.flow > *,
.flow-xmedium > *,
.flow-medium > *,
.flow-small > * { margin-top: 0; margin-bottom: 0; }
.flow > * + * { margin-top: var(--flow-space, var(--space-xl)); }
.flow-xmedium > * + * { margin-top: var(--flow-space, var(--space-l)); }
.flow-medium > * + * { margin-top: var(--flow-space, var(--space-m)); }
.flow-small > * + * { margin-top: var(--flow-space, var(--space-s)); }
```
