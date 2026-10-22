---
title: Nav bar
summary: White top bar, 1200px wide. Logo on the left, centred menu with blue dropdown carets, green Demo button on the right, a grey rule underneath.
uses: [button, repel, cluster]
---

The site's top bar (theme `parts/nav-offcanvas-topbar.php`). Menu items are black, regular weight; hovering or opening one fills it with sky blue (`--color-sky`) and turns the text white. Items with a submenu show a small blue triangle. Below 640px the menu collapses into an off-canvas panel behind a menu button; that panel is not covered yet.

Menu on the live site: About, Pricing (Free), Software, Resources, Join the Community, News, then the Demo button.

## Do

- Keep the menu to six top-level items or fewer, with the details in dropdowns.

## Don't

- Don't use `--color-sky` anywhere else. White on sky is 2.5:1 (see Known issues).

## Code

```html
<header class="nav-bar">
  <nav class="nav-bar__inner repel" aria-label="Main">
    <a href="#"><img class="nav-bar__logo" src="/brands/disciple-tools/assets/logo.png" alt="Disciple.Tools" /></a>
    <ul class="nav-bar__menu cluster" role="list">
      <li><a class="has-submenu" href="#">About</a></li>
      <li><a class="has-submenu" href="#">Pricing (Free)</a></li>
      <li><a class="has-submenu" href="#">Software</a></li>
      <li><a href="#">Join the Community</a></li>
      <li><a href="#">News</a></li>
    </ul>
    <a class="btn btn-nav" href="#">Demo</a>
  </nav>
</header>
```

```css
.nav-bar {
  background: var(--color-background);
  border-bottom: 1px solid var(--color-grey-dark);
}
.nav-bar__inner {
  --gutter: var(--space-xs);
  max-width: var(--size-nav);
  margin-inline: auto;
  padding: var(--space-xxs) 0;
}
.nav-bar__logo { display: block; height: var(--size-logo); width: auto; }
.nav-bar__menu { --gutter: 0; margin: 0; padding: 0; list-style: none; }
.nav-bar__menu a:not(.btn) {
  display: block;
  padding: var(--space-nav-y) var(--space-nav-x);
  font-weight: var(--weight-regular);
  line-height: var(--leading-heading);
  color: var(--color-text);
  text-decoration: none;
}
.nav-bar__menu a:not(.btn):hover,
.nav-bar__menu a:not(.btn):focus { color: var(--color-white); background: var(--color-sky); text-decoration: none; }
.nav-bar__menu a.has-submenu { position: relative; padding-right: var(--space-button-x); }
.nav-bar__menu a.has-submenu::after {
  content: "";
  position: absolute;
  right: var(--space-xxxs);
  top: 50%;
  margin-top: -3px;
  border: 6px solid transparent;
  border-bottom-width: 0;
  border-top-color: var(--color-blue);
}
```
