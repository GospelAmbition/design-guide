---
title: Nav bar
summary: "A red arch across the top of the page, then a white bar with the logo on the left and uppercase links, a red Give pill and the search field on the right."
uses: [container, button, input]
---

The top of every page. A red band arches across the very top (73px at the edges, 13px in the middle, at 1920px), and the white bar below it (187px in all) holds the logo at 93px tall (`--size-logo`) and the menu. Links are Poppins SemiBold 18px in charcoal, uppercase, about 56px apart. The Give pill is the only red item; the search field closes the row. The bar has a faint shadow (`--shadow-nav`).

The arch is the design's own curve, drawn with an inline SVG that stretches to the page width.

## Do

- Keep the menu to four or five short items. The design has About, Tools & trainings, Impact, For your ministry.
- Keep Give as the last link, as a `.btn-primary.btn-sm` pill.

## Approximate

- The design has no mobile menu. Here the links wrap under the logo on narrow screens; a real build needs a menu button, which isn't designed yet.
- Hover is a proposal: links turn red.

## Code

```html
<header class="nav-bar">
  <svg class="nav-bar__arch" viewBox="0 0 1920 73" preserveAspectRatio="none" aria-hidden="true"><path d="M1920 73.3C1920 73.3 1619.9 12.7 962.3 12.7 325.9 12.7 0 73.3 0 73.3V0h1920Z"/></svg>
  <div class="container nav-bar__inner">
    <a class="nav-bar__logo" href="#"><img src="/brands/gospel-ambition/assets/logo.png" alt="Gospel Ambition" /></a>
    <nav class="nav-bar__menu" aria-label="Main">
      <a href="#">About</a>
      <a href="#">Tools &amp; trainings</a>
      <a href="#">Impact</a>
      <a href="#">For your ministry</a>
      <a class="btn btn-primary btn-sm" href="#">Give</a>
      <label class="search">
        <svg class="search__icon" viewBox="0 0 16.19 16.19" aria-hidden="true"><path d="M11.88 10.46a6.57 6.57 0 1 0-1.41 1.42h-.01l.1.12 3.9 3.89a1.01 1.01 0 0 0 1.43-1.43L12 10.56a1 1 0 0 0-.12-.1Zm.26-3.89a5.57 5.57 0 1 1-11.13 0 5.57 5.57 0 0 1 11.13 0Z"/></svg>
        <span class="visually-hidden">Search</span>
        <input class="search__input" type="search" />
      </label>
    </nav>
  </div>
</header>
```

```css
.nav-bar { position: relative; background: var(--color-white); box-shadow: var(--shadow-nav); }
.nav-bar__arch { display: block; inline-size: 100%; block-size: auto; aspect-ratio: 1920 / 73; fill: var(--color-red); }
.nav-bar__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-xs) var(--space-l);
  padding-block: var(--space-xxs) var(--space-s);
}
.nav-bar__logo { display: block; flex: none; }
.nav-bar__logo img { display: block; block-size: var(--size-logo); inline-size: auto; }
.nav-bar__menu { display: flex; flex-wrap: wrap; align-items: center; column-gap: calc(var(--space-s) * 2); row-gap: var(--space-xs); }
.nav-bar__menu > a:not(.btn) {
  font-size: var(--size-small);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text);
}
.nav-bar__menu > a:not(.btn):hover { color: var(--color-red); }
/* The Give pill and the search field sit closer: 28px instead of 56px. */
.nav-bar__menu > .btn,
.nav-bar__menu > .search { margin-inline-start: calc(var(--space-s) * -1); }
```
