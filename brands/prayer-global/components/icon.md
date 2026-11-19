---
title: Icon
summary: The PrayerGlobal icon font. <i class="icon pg-…"> draws an icon in the current text colour; data-size sets the site's sizes.
---

The live site draws its icons with the PrayerGlobal icon font (`assets/fonts/prayer-global-icons.css`, loaded in Setup). Every icon takes the colour and size of its text. The same icons are also in `assets/icons/pg-*.svg` for places a font can't go, such as image editors or emails.

Available classes: `pg-check`, `pg-chevron-down`, `pg-chevron-left`, `pg-chevron-right`, `pg-chevron-up`, `pg-close`, `pg-cluster`, `pg-community`, `pg-crown`, `pg-give`, `pg-home`, `pg-information`, `pg-logo-prayer`, `pg-menu`, `pg-pause`, `pg-prayer`, `pg-prayerfuel`, `pg-pray-hands-dark`, `pg-pray-hands-light`, `pg-profile`, `pg-question-dark`, `pg-question-light`, `pg-race`, `pg-relay`, `pg-settings`, `pg-share`, `pg-start`, `pg-status`, `pg-streak`, `pg-time`, `pg-world-arrow`, `pg-world-dark`, `pg-world-light`.

## Sizes

Set the size with `data-size` on the icon. Without it, the icon is the size of its text.

| `data-size` | Size | Used for | Site class |
| --- | --- | --- | --- |
| `nav` | 2rem | Nav bar buttons, the call-out button's chevron | `.two-rem` |
| `small` | 3rem | Beside section titles, topic links, the hero chevron | `.icon-small` |
| `medium` | 4rem (5rem from 48rem wide) | | `.icon-medium` |
| `large` | 6rem (7rem from 48rem wide) | | `.icon-large` |

## Do

- Put an icon at the end of section titles: `<h2>Prayer relays <i class="icon pg-relay" data-size="small" aria-hidden="true"></i></h2>`.
- Hide decorative icons from screen readers with `aria-hidden="true"`, and give icon-only buttons an `aria-label`.

## Don't

- Don't mix in Ionicons for a symbol the PrayerGlobal set already has.

## Code

```html
<i class="icon pg-relay" data-size="small" aria-hidden="true"></i>
<i class="icon pg-pray-hands-light" data-size="small" aria-hidden="true"></i>
<i class="icon pg-logo-prayer" data-size="small" aria-hidden="true"></i>
<i class="icon pg-streak" data-size="small" aria-hidden="true"></i>
<i class="icon pg-share" data-size="nav" aria-hidden="true"></i>
<i class="icon pg-menu" data-size="nav" aria-hidden="true"></i>
```

```css
.icon[data-size="nav"] { font-size: var(--size-icon-nav); }
.icon[data-size="small"] { font-size: var(--size-icon); }
.icon[data-size="medium"] { font-size: 4rem; }
.icon[data-size="large"] { font-size: 6rem; }
/* The site's 768px breakpoint, as a container query at --threshold-l. */
@container (width >= 48rem) {
  .icon[data-size="medium"] { font-size: 5rem; }
  .icon[data-size="large"] { font-size: 7rem; }
}
```
