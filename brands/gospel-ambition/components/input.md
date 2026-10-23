---
title: Input
summary: The search field. A small white pill with a grey outline and a grey search icon, as in the nav bar.
---

Replaces the shared Input. The only field in the design is the search box in the nav bar: 143×32px, white, a 1px `--color-grey` outline, fully rounded, with the 16px search icon 13px from its left edge. The design shows no text in it.

The design has no forms. For a sign-up or contact form, ask for a design rather than stretching this field.

## Approximate

- Placeholder text, typing size and the focus state are not in the design. They are proposals: 18px Poppins (`--size-small`), and a red outline on focus like every other control.

## Code

```html
<label class="search">
  <svg class="search__icon" viewBox="0 0 16.19 16.19" aria-hidden="true"><path d="M11.88 10.46a6.57 6.57 0 1 0-1.41 1.42h-.01l.1.12 3.9 3.89a1.01 1.01 0 0 0 1.43-1.43L12 10.56a1 1 0 0 0-.12-.1Zm.26-3.89a5.57 5.57 0 1 1-11.13 0 5.57 5.57 0 0 1 11.13 0Z"/></svg>
  <span class="visually-hidden">Search</span>
  <input class="search__input" type="search" />
</label>
```

```css
.search {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: var(--space-xxs);
  inline-size: 9rem;
  block-size: 2rem;
  padding-inline: 0.8rem var(--space-xs);
  background: var(--color-white);
  border: 1px solid var(--color-grey);
  border-radius: var(--radius-pill);
}
.search:focus-within { outline: 2px solid var(--color-red); outline-offset: 2px; }
.search__icon { flex: none; inline-size: 1rem; block-size: 1rem; fill: var(--color-grey); }
.search__input {
  flex: 1;
  min-inline-size: 0;
  padding: 0;
  font: var(--weight-regular) var(--size-small) / var(--leading-body) var(--font-body);
  color: var(--color-text);
  background: transparent;
  border: 0;
  outline: 0;
}
.visually-hidden { position: absolute; inline-size: 1px; block-size: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
```
