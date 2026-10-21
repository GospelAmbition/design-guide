---
title: Switcher variants
summary: Prayer.Global's switcher sizes and direction. .switcher-md (40rem / 2rem gap), .switcher-lg (55rem / 3rem gap), .switcher-reverse.
uses: [switcher]
---

Prayer.Global-only, added on top of the shared Switcher. The site's switcher stacks below 27rem by default (the shared Switcher uses 30rem), so this file sets that default too. Use the classes together with `.switcher`: `class="switcher switcher-md switcher-reverse"`.

- `.switcher-md`: stacks below 40rem, with a 2rem gap. Most two-column sections on the home page use it.
- `.switcher-lg`: stacks below 55rem, with a 3rem gap.
- `.switcher-reverse`: puts the last item first when side by side, for an image on the left with its text second in the source.

## Code

```html
<div class="switcher switcher-md switcher-reverse" style="width: 100%">
  <div style="outline: 1px dashed currentColor; padding: 1rem">First in source, shown on the right</div>
  <div style="outline: 1px dashed currentColor; padding: 1rem">Second in source, shown on the left</div>
</div>
```

```css
.switcher { --threshold: 27rem; }
.switcher-md { --threshold: 40rem; --gutter: var(--space-m); }
.switcher-lg { --threshold: 55rem; --gutter: var(--space-l); }
.switcher-reverse { flex-direction: row-reverse; }
```
