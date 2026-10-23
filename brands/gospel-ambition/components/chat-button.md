---
title: Chat button
summary: "A floating red circle with a white speech bubble, fixed to the bottom right of the screen."
---

The design floats a 119px red circle (`--size-chat`) with a white speech-bubble shape over the bottom right of the hero, 50px from the edge, with a darker shadow than anything else (`--shadow-float`). The bubble is a 49px square rounded on three corners, which makes the tail. In a build it stays fixed while the page scrolls and opens the help chat.

## Do

- Give it an accessible name ("Chat with us") and keep it the only floating element.

## Approximate

- The design shows it only at 1920px. Below 48rem it shrinks to 4rem here; that is a proposal.
- The example is shown in place; add `.chat-button--fixed` in a build to fix it to the corner.

## Code

```html
<button class="chat-button" type="button" aria-label="Chat with us"><span class="chat-button__bubble"></span></button>
```

```css
.chat-button {
  display: inline-grid;
  place-items: center;
  inline-size: var(--size-chat);
  block-size: var(--size-chat);
  padding: 0;
  background: var(--color-red);
  border: 0;
  border-radius: 50%;
  box-shadow: var(--shadow-float);
  cursor: pointer;
}
.chat-button:hover { background: var(--color-red-dark); }
.chat-button__bubble { inline-size: 41%; aspect-ratio: 1; background: var(--color-white); border-radius: 50% 50% 0 50%; }
.chat-button--fixed { position: fixed; inset: auto var(--space-m) var(--space-m) auto; z-index: 10; }
@container (max-width: 48rem) {
  .chat-button { inline-size: var(--space-l); block-size: var(--space-l); }
  .chat-button--fixed { inset: auto var(--space-xs) var(--space-xs) auto; }
}
```
