---
title: Nav bar
summary: Sticky three-column bar. Share and streak on the left, the outlined "Prayer.Global" title in the centre, login and the menu button on the right.
uses: [icon, cluster]
---

From `pages/assets/nav.php`. There are three versions:

- **Dark** (`.surface-brand`): navy. Used on About, Login, Register and Profile.
- **Light** (`.surface-default`): white with navy text. Every other page.
- **Home** (`data-home`, no surface): fixed and transparent with white text over the hero. Set `data-state="scrolled"` from your script once the page scrolls, and it turns navy.

| Site class | Here |
| --- | --- |
| `.navbar-dark` | `.surface-brand` |
| `.white-bg.brand` | `.surface-default` |
| `.navbar-home` | `data-home` |
| `.scrolled` | `data-state="scrolled"` |

## Do

- Keep the title as plain text in a thin outlined box, linking to the home page. It hides itself when the page is narrower than `--threshold-s` (36rem).
- Put every other link (Map, Prayer Relays, Donate, About) in the off-canvas menu behind the menu button. Only "Login" stays in the bar.

## Don't

- Don't put the "Start praying" button in the bar.

## Code

```html
<nav class="pg-navbar surface-brand" aria-label="Main">
  <div class="pg-navbar__inner">
    <div class="cluster">
      <button class="icon-button" type="button" aria-label="Share"><i class="icon pg-share" data-size="nav" aria-hidden="true"></i></button>
      <a class="streak-link" href="/profile/"><i class="icon pg-streak" data-size="nav" aria-hidden="true"></i> 0<span class="visually-hidden"> day prayer streak</span></a>
    </div>
    <h5 class="navbar__title"><a class="navbar__title-link" href="/">Prayer.Global</a></h5>
    <div class="pg-navbar__end">
      <a class="pg-navbar__link" href="/login/">Login</a>
      <button class="icon-button" type="button" aria-label="Menu"><i class="icon pg-menu" data-size="nav" aria-hidden="true"></i></button>
    </div>
  </div>
</nav>
```

```html
<nav class="pg-navbar surface-default" aria-label="Main">
  <div class="pg-navbar__inner">
    <div class="cluster">
      <button class="icon-button" type="button" aria-label="Share"><i class="icon pg-share" data-size="nav" aria-hidden="true"></i></button>
      <a class="streak-link" href="/profile/"><i class="icon pg-streak" data-size="nav" aria-hidden="true"></i> 0<span class="visually-hidden"> day prayer streak</span></a>
    </div>
    <h5 class="navbar__title"><a class="navbar__title-link" href="/">Prayer.Global</a></h5>
    <div class="pg-navbar__end">
      <a class="pg-navbar__link" href="/login/">Login</a>
      <button class="icon-button" type="button" aria-label="Menu"><i class="icon pg-menu" data-size="nav" aria-hidden="true"></i></button>
    </div>
  </div>
</nav>
```

```css
.pg-navbar { position: sticky; top: 0; z-index: 100; width: 100%; }
.pg-navbar__inner .cluster { --gutter: var(--space-xs); }
.pg-navbar[data-home] { position: fixed; left: 0; right: 0; padding: 1em; background: none; color: var(--color-white); transition: background-color 0.3s ease-out; }
.pg-navbar[data-home][data-state="scrolled"] { background-color: var(--color-brand); }
.pg-navbar__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: var(--space-xs) var(--space-s);
  max-width: 1320px;
  margin-inline: auto;
  box-sizing: border-box;
}
.pg-navbar a,
.pg-navbar__link { text-decoration: none; color: inherit; }
.pg-navbar__end { display: flex; justify-content: flex-end; align-items: center; gap: var(--space-xs); }
/* The light bar uses navy (--color-brand) rather than the page's text colour, as the site does. */
.pg-navbar.surface-default .pg-navbar__inner { color: var(--color-brand); }
.pg-navbar.surface-default .navbar__title { border-color: var(--color-brand-light); }
.pg-navbar.surface-default .navbar__title-link { color: var(--color-brand-light); }
.icon-button { cursor: pointer; color: inherit; background: none; border: 0; padding: 0; border-radius: var(--radius-md); margin: 2px; display: flex; }
.streak-link { display: flex; align-items: center; gap: var(--space-xxxs); }
.streak-link .icon { color: var(--color-secondary); }
.navbar__title {
  justify-self: center;
  margin: 0;
  padding: 0 var(--space-xs);
  border: 1px solid currentColor;
  border-radius: var(--radius-box);
  font-size: var(--size-nav-title);
  font-weight: var(--weight-regular);
  text-transform: none;
}
/* The site's 576px breakpoint, as a container query at --threshold-s. */
@container (width <= 36rem) {
  .navbar__title { visibility: hidden; width: 0; height: 0; padding: 0; margin: 0; }
}
```
