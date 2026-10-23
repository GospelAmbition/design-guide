---
name: Gospel Ambition
summary: "Confident, warm and mission-driven. Brand red and charcoal on white, heavy Poppins headlines and sweeping red curves, for inviting ministries to use free disciple-making tools."
fonts:
  - "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,800&display=swap"
icons:
  - name: Bootstrap Icons
    use: "The design uses two icons, both matching Bootstrap Icons: arrow-right (at the end of every full-size button, in the label colour, about 1.3× the label size) and search (in the search field, 16px, --color-grey). Inline the SVG so it takes currentColor. For any other icon, pick it from the same set so line weight and style match."
    source: "https://icons.getbootstrap.com (MIT). The two SVGs in assets/icons/ are traced from the XD file, not copied from the set."
    files: assets/icons/
exclude: [tag]
---

> Built from the Adobe XD design of the Gospel Ambition home page ("Kylan-updated", artboard "Web 1920 – 7", 1920px wide) in October 2026, not from a live site. Colours, type, radii, shadows and curves are exact values read from the XD file. Spacing is measured from it and fitted to a scale. The design has one page at one width, so hover states, mobile layouts and anything the page doesn't show are proposals and are marked as such. Voice, principles and the do/don't lists are a **draft** inferred from the page's copy. Have the Gospel Ambition team confirm them.

## Voice (draft)

Confident, warm and inclusive. Gospel Ambition speaks as experienced practitioners inviting others into a shared mission, not as a vendor selling software.

- **Big calling, plainly said.** The mission is stated without hedging: "Fulfilling the Great Commission in this generation, with you." "Understand the calling."
- **"With you."** The reader is a partner, not an audience: "There's a place for you in the mission." "Tools made on our mission field. Useful on yours."
- **Short, stacked fragments.** "Mission experience. Technical expertise." "All free. Most multilingual." "Free. Anytime. Anywhere." Two to four words, full stops, no filler.
- **Credentials from the field.** Claims are grounded in practice: "Conceived on the mission field and delivered in difficult places."
- **Jesus and Scripture first.** The page begins with Matthew 28 and returns to people: "Behind the numbers are people Jesus loves."
- **Christian vocabulary, used plainly.** Disciple-makers, obedient disciples, the Church, the Kingdom of God, frontier missions. Write for practitioners; don't explain it away or stack jargon.
- **Calls to action are short verb phrases, set in caps by the button style:** Find my tools, Start praying, Partner with us, Receive updates.

## Principles (draft)

- **Red moves, charcoal grounds.** Brand red carries the energy: the ribbons, the main buttons, the key words of a heading. Charcoal is for text and the one dark section. Everything else is white or a soft grey.
- **Curves, not boxes, between sections.** The red ribbon and the grey swoosh replace straight section edges. They are the most recognisable thing in the design; use the exact curves, never approximations.
- **Headlines do the work.** Big, heavy Poppins with one phrase in red. Body text is short and secondary.
- **People in every picture.** Photos are of real people in the places the tools serve, and fade softly into white rather than sitting in frames.
- **Everything is free, and says so.** Tools are presented as gifts to the Church: "See what is free."

## Do

- Use Poppins for everything except eyebrows, which are Bebas Neue (`--font-label`) in red.
- Put the key phrase of a heading in red with `.text-accent`: "motive, mission and vision.", "with you.", "go.".
- Open each chapter of a long page with a red [ribbon](components/ribbon/), and separate other sections with the grey [swoosh](components/swoosh/).
- Use one `.btn-primary` per block, with the arrow, and `.btn-light` or `.btn-grey` for the second action.
- Put tool cards on the grey wash (`.bg-wash`) and call-to-action cards on a darkened photo.
- Keep `body` (or the page's outer wrapper) an inline-size container, as `base.css` does. Fluid sizes use `cqi` and breakpoints use `@container`, so they follow the width of the page, or of a preview or embed.
- Build new pages from this guide's tokens, composition and components. When adding to an existing site, adapt them to that site's own classes; don't paste the guide's markup in as-is.
- Use the full-colour logo (`logo.png`) on white only. A reversed logo for red, charcoal or photos doesn't exist yet (see the assets page).

## Don't

- Don't use red text on charcoal at any size. It fails contrast (see below), including the design's own red "go.".
- Don't use colours outside the palette. The design file also saves cyan, gold, blue and navy swatches; they aren't used on the page and aren't part of this guide.
- Don't square off corners: buttons and fields are pills, cards are 16px or 25px.
- Don't add shadows to tool cards or panels. Only the nav bar, the call-to-action cards and the chat button have one.
- Don't add tags or badges. The design has none, so the shared Tag is excluded.
- Don't set body text in italics. Italics are for the hero title, the hero tagline, Scripture, quotes and footnotes.

## Known issues in the design

These are facts from the XD file, recorded so builds don't copy them by accident:

- Red on charcoal is 2.2:1. The red "go." in "Let's go." fails WCAG AA even for large text (3:1). Make it white or raise it with the team.
- The 1px `--color-grey` outlines on the light and grey buttons and the search field are 1.7:1 against white. The search field's edge fails the 3:1 non-text contrast rule; consider a darker outline for form fields.
- The call-to-action cards have a 1px `--color-grey-dark` outline (XD's default stroke) that barely shows on the dark photo. It is kept in the card, but it may be unintended.
- The nav bar reads "FOR YOUR MINSITRY". The guide spells it "For your ministry".
- Font sizes the design uses once have been folded into the nearest step: the 17px Give label (18px here), 25px testimonial roles (26px) and 38px testimonial names (36px).
- The design has no hover, focus or pressed states, and no tablet or phone layouts. Everything this guide adds for them is a proposal.
- Passing pairs, for reference: charcoal on white 13.7:1, white on red 6.2:1, red on white 6.2:1, red on the grey wash 5.0:1, white at 80% on charcoal 9.4:1, white at 90% on red 5.3:1.
