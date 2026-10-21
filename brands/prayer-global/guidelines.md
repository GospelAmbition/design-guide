---
name: Prayer.Global
summary: "Bold, hopeful and mission-driven. Navy and orange, all-caps Bebas Kai headings, for mobilising people to pray for every place on earth."
fonts:
  - assets/fonts/fonts.css
  - assets/fonts/prayer-global-icons.css
icons:
  - name: Prayer.Global icons
    use: "The default set, for everything it covers: share, menu, prayer, relay, streak, world, chevrons, play/pause, settings, profile. Use the icon font, <i class=\"icon pg-relay\"></i>, which takes the text colour and size (see the Icon component). icon-small (3rem) beside section titles, two-rem (2rem) in the nav bar."
    source: "Custom set from prayer-global-porch (pages/assets/fonts/prayer-global). The font is assets/fonts/prayer-global-icons.css; SVG copies are in assets/icons/pg-*.svg."
    files: assets/icons/
  - name: Ionicons
    use: "Only for the few symbols the Prayer.Global set lacks. The site uses ion-ios-body (a person), ion-map, ion-happy, ion-sad, ion-android-warning and ion-ellipsis-horizontal; SVGs of those are in assets/icons/ion-*.svg. Size and colour them like the Prayer.Global icons, and never use both sets for the same symbol."
    source: "https://ionic.io/ionicons (the site loads v4.5.6 from cdnjs)."
    files: assets/icons/
exclude: [card, tag]
---

> Scraped from https://prayer.global in October 2026. Colours, type and spacing are the values the live site renders. Voice, principles and the do/don't lists are a **draft** inferred from the site's copy. Have the Prayer.Global team confirm them. Components and patterns use the site's own class names and CSS, translated to tokens.

## Voice (draft)

Hopeful, simple and inviting. Prayer.Global makes a huge goal ("cover the world in prayer") feel doable today.

- **Invite, then show how.** "Want to pray globally but don't know where to start? … We'll show you how."
- **Short and energetic.** Short sentences, the odd exclamation mark: "Team up in prayer!"
- **Concrete numbers.** 4,770 states, one "prayer lap", live counts of laps and intercessors. Numbers make the mission tangible.
- **Shared mission.** "You and your friends, small group or church", "every prayer moves us closer to seeing the nations reached".
- **Christian vocabulary, used plainly.** Intercessors, the nations, the lost, the Great Commission. Don't explain it away, and don't stack jargon.
- **Calls to action are verbs in caps:** START PRAYING, CREATE PRAYER RELAY, REGISTER NOW, DONATE.

## Principles (draft)

- **One big next step.** Nearly every section ends with the same orange "Start praying" button. Praying is always one click away.
- **Navy and orange, never black.** Text is navy-blue (`--color-text`), dark areas are navy (`--color-brand`), and the orange gradient is saved for the main action.
- **The world is the backdrop.** World-map imagery sits behind the hero, the intro and the stats.
- **Big, calm, centred.** Large Bebas Kai titles, centred text, a 1.8 line height and 4rem of padding between sections.

## Do

- Use `.btn-cta` (the orange-gradient pill) for "Start praying" and other main actions, at most one per section.
- Use Bebas Kai (`--font-heading`) for h1–h3, and Europa for everything else. Bebas Kai is caps-only, so write titles in normal case and let the font do the rest.
- Use `.btn-primary-light` for secondary actions in feature sections and bands, and `.btn-white` on navy or light-blue bands.
- Put an icon at the end of section titles: `<i class="icon icon-small pg-…">`, in the title's colour.
- Alternate white feature sections with `.blue-orange-gradient` feature bands to pace a long page.
- Use the site's class names (Layout, Button and Icon components) so markup moves between this guide and prayer.global unchanged.
- Show the white logo mark only on navy (`--color-brand`, `--color-dark`) or on dark photos.

## Don't

- Don't use black or grey for body text. Use `--color-text` on light and `--color-white` on dark.
- Don't bold Bebas Kai. It has one weight.
- Don't put orange text on white. It fails contrast. Orange is for button fills and the focus outline.
- Don't put two orange CTAs side by side.
- Don't square off buttons. Every button is a pill (`--radius-pill`).

## Known issues on the live site

These are facts from the scrape, recorded so builds don't copy them by accident:

- White text on the orange CTA gradient is 1.7:1 at the top and 3.0:1 at the bottom, and white on `--color-brand-lightest` (`.btn-primary-light`) is 3.8:1. Both fail WCAG AA for normal text. The site gets by with bold, uppercase, 16px+ labels. Keep labels bold and large, or raise this with the team before relying on it.
- The site's CSS asks for weight 300 everywhere, but only Europa Regular (400) and Bold (700) exist, so 400 renders. The tokens record what renders.
- The marketing pages have no cards and no tags, so the shared Card and Tag components are excluded for this brand rather than invented.
