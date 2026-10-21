---
title: Nav bar
summary: Sticky three-column bar. Share and streak on the left, the outlined "Prayer.Global" title in the centre, login and the menu button on the right.
uses: [icon, layout]
---

From `pages/assets/nav.php`. There are three versions:

- **Home** (`.navbar-home.navbar-dark` + `data-home`): fixed and transparent over the hero, turning navy (`.scrolled`) once the page scrolls.
- **Dark** (`.navbar-dark`): navy. Used on About, Login, Register and Profile.
- **Light** (`.white-bg.brand`): white with navy text. Every other page.

## Do

- Keep the title as plain text in a thin outlined box, linking to the home page. It hides itself below 576px.
- Put every other link (Map, Prayer Relays, Donate, About) in the off-canvas menu behind the menu button. Only "Login" stays in the bar.

## Don't

- Don't put the "Start praying" button in the bar.

## Code

```html
<nav class="pg-navbar navbar-dark" aria-label="Main">
  <div class="pg-navbar__inner">
    <div class="cluster">
      <button class="icon-button two-rem" type="button" aria-label="Share"><i class="icon pg-share"></i></button>
      <a class="streak-link" href="#"><i class="icon two-rem pg-streak" aria-hidden="true"></i> 0</a>
    </div>
    <h5 class="navbar__title"><a class="navbar__title-link" href="#">Prayer.Global</a></h5>
    <div class="pg-navbar__end">
      <a href="#">Login</a>
      <button class="icon-button two-rem" type="button" aria-label="Menu"><i class="icon pg-menu"></i></button>
    </div>
  </div>
</nav>
```

```html
<nav class="pg-navbar white-bg brand" aria-label="Main">
  <div class="pg-navbar__inner">
    <div class="cluster">
      <button class="icon-button two-rem" type="button" aria-label="Share"><i class="icon pg-share"></i></button>
      <a class="streak-link" href="#"><i class="icon two-rem pg-streak" aria-hidden="true"></i> 0</a>
    </div>
    <h5 class="navbar__title"><a class="navbar__title-link" href="#">Prayer.Global</a></h5>
    <div class="pg-navbar__end">
      <a href="#">Login</a>
      <button class="icon-button two-rem" type="button" aria-label="Menu"><i class="icon pg-menu"></i></button>
    </div>
  </div>
</nav>
```

```css
.pg-navbar { position: sticky; top: 0; z-index: 100; width: 100%; }
.pg-navbar[data-home] { position: fixed; left: 0; right: 0; padding: 1em; background: none; transition: background-color 0.3s ease-out; }
.pg-navbar[data-home].scrolled { background-color: var(--color-brand); }
.pg-navbar__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  max-width: 1320px;
  margin-inline: auto;
  box-sizing: border-box;
}
.pg-navbar a { text-decoration: none; color: inherit; }
.pg-navbar__end { display: flex; justify-content: flex-end; align-items: center; gap: var(--space-3); }
.white-bg { background-color: var(--color-white); }
.brand { color: var(--color-brand); }
.navbar-dark { background-color: var(--color-brand); color: var(--color-white); }
.icon-button { cursor: pointer; color: inherit; background: none; border: 0; padding: 0; border-radius: var(--radius-md); margin: 2px; display: flex; }
.streak-link { display: flex; align-items: center; gap: var(--space-1); }
.streak-link .icon { color: var(--color-secondary); }
.navbar__title {
  justify-self: center;
  margin: 0;
  padding: 0 var(--space-3);
  border: 1px solid currentColor;
  border-radius: var(--radius-box);
  font-size: var(--size-nav-title);
  font-weight: var(--weight-regular);
  text-transform: none;
}
.white-bg .navbar__title { border-color: var(--color-brand-light); }
.white-bg .navbar__title-link { color: var(--color-brand-light); }
@media (max-width: 576px) {
  .navbar__title { visibility: hidden; width: 0; height: 0; padding: 0; margin: 0; }
}
```
