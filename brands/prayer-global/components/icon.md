---
title: Icon
summary: The PrayerGlobal icon font. <i class="icon pg-…"> draws an icon in the current text colour; size classes match the site.
---

The live site draws its icons with the PrayerGlobal icon font (`assets/fonts/prayer-global-icons.css`, loaded in Setup). Every icon takes the colour and size of its text. The same icons are also in `assets/icons/pg-*.svg` for places a font can't go, such as image editors or emails.

Available classes: `pg-check`, `pg-chevron-down`, `pg-chevron-left`, `pg-chevron-right`, `pg-chevron-up`, `pg-close`, `pg-cluster`, `pg-community`, `pg-crown`, `pg-give`, `pg-home`, `pg-information`, `pg-logo-prayer`, `pg-menu`, `pg-pause`, `pg-prayer`, `pg-prayerfuel`, `pg-pray-hands-dark`, `pg-pray-hands-light`, `pg-profile`, `pg-question-dark`, `pg-question-light`, `pg-race`, `pg-relay`, `pg-settings`, `pg-share`, `pg-start`, `pg-status`, `pg-streak`, `pg-time`, `pg-world-arrow`, `pg-world-dark`, `pg-world-light`.

## Sizes

| Class | Size | Used for |
| --- | --- | --- |
| `.two-rem` | 2rem | Nav bar buttons |
| `.icon-small` | 3rem | Beside section titles, topic links, the hero chevron |
| `.icon-medium` | 4rem (5rem from 768px) | |
| `.icon-large` | 6rem (7rem from 768px) | |

## Do

- Put an icon at the end of section titles: `<h2>Prayer relays <i class="icon icon-small pg-relay"></i></h2>`.
- Hide decorative icons from screen readers with `aria-hidden="true"`, and give icon-only buttons an `aria-label`.

## Don't

- Don't mix in Ionicons for a symbol the PrayerGlobal set already has.

## Code

```html
<i class="icon icon-small pg-relay" aria-hidden="true"></i>
<i class="icon icon-small pg-pray-hands-light" aria-hidden="true"></i>
<i class="icon icon-small pg-logo-prayer" aria-hidden="true"></i>
<i class="icon icon-small pg-streak" aria-hidden="true"></i>
<i class="icon two-rem pg-share" aria-hidden="true"></i>
<i class="icon two-rem pg-menu" aria-hidden="true"></i>
```

```css
.two-rem { font-size: var(--size-icon-nav); }
.icon-small { font-size: var(--size-icon); }
.icon-medium { font-size: 4rem; }
.icon-large { font-size: 6rem; }
@media (min-width: 768px) {
  .icon-medium { font-size: 5rem; }
  .icon-large { font-size: 7rem; }
}
```
