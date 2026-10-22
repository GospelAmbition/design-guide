---
title: Note
summary: A pale blue callout with blue text, for a short aside inside page copy.
---

The theme's `.dt-note`, used on the Give page ("Disciple.Tools is part of Gospel Ambition…").

## Don't

- Don't put long or essential text in it. Blue on the tint is 3.5:1, below AA for body text (see Known issues).

## Code

```html
<p class="note">Note: Disciple.Tools is part of Gospel Ambition. You may see Gospel Ambition on your receipt.</p>
```

```css
.note {
  padding: var(--space-xxs);
  color: var(--color-blue);
  background-color: var(--color-blue-tint);
  border-radius: var(--radius-xs);
}
```
