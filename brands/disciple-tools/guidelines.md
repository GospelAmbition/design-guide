---
name: Disciple.Tools
summary: "Clear, practical and free. Blue and green on white, heavy Open Sans headings over Roboto, for presenting the Disciple.Tools software to disciple-making teams."
fonts:
  - "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&family=Roboto:ital,wght@0,400;0,700;0,800;1,700&display=swap"
  - assets/fonts/font-awesome.css
icons:
  - name: Font Awesome 5 Free
    use: "The only icon set on the marketing pages. Solid (fas) by default; the site also uses regular (far) for fa-clock and fa-check-circle, and one brand icon (fab fa-simplybuilt). Seen on the site: fa-quote-left (testimonial cards), fa-people-carry, fa-clock, fa-dna, fa-simplybuilt (icon grid), fa-check-circle (icon lists). Write <i class=\"fas fa-quote-left\" aria-hidden=\"true\"></i>; it takes the text colour and font size (see the Icon component)."
    source: "https://fontawesome.com/v5/search?m=free. v5.15.4, the version the site loads through Elementor, self-hosted in assets/fonts/ (font-awesome.css plus woff2/woff)."
exclude: [tag]
---

> Scraped from https://disciple.tools in October 2026, from the live pages and the theme repository [disciple-tools-public-site](https://github.com/ChrisChasm/disciple-tools-public-site). Colours, type and spacing are what the site renders. Voice, principles and the do/don't lists are a **draft** inferred from the site's copy. Have the Disciple.Tools team confirm them. This brand covers the marketing site, not the Disciple.Tools app.

## Voice (draft)

Plain, practical and warm. Disciple.Tools explains software to people whose job is ministry, not technology.

- **People first, software second.** "Disciple.Tools software is designed by disciple makers for disciple makers to increase time you can spend with people."
- **Benefits as verbs.** Headings start with what a team gets to do: "Work collaboratively to serve spiritual seekers around you", "Steward the people God has given your ministry", "See a movement of the Gospel".
- **Free, and says so.** "Always free as your team grows", "Pricing (Free)". Cost and security are answered directly, not hidden.
- **Ministry vocabulary, used plainly.** Disciple-making movements, seekers, multipliers, the Kingdom. Write for practitioners; don't explain it away.
- **Real users speak.** Testimonials are from field workers and team leaders, named by role ("A field worker in the Middle East") rather than by name, for their security.
- **Calls to action are short and title case:** Get Started, Learn More, Download Disciple.Tools, Explore Hosting, Launch Demo.

## Principles (draft)

- **Blue for content, green for go.** Headings, links and most buttons are blue. Green marks the start of the journey (Get Started, Demo) and breaks a page into chapters with full-width bands.
- **One idea per row.** Feature rows pair one heading, one paragraph and at most two buttons with one picture of the app.
- **Show the product.** Screenshots and illustrations of the app sit beside nearly every claim.
- **Plain white page, coloured bands.** Sections are white with no decoration; full-width blue or green bands carry statements, titles and link lists.
- **Heavy headings, quiet text.** Section headings are Open Sans 800 in blue; everything else is Roboto at 16px.

## Do

- Use Open Sans 800 (`--font-heading`, `--weight-heavy`) in `--color-blue` for section headings, and Roboto (`--font-body`) for everything else.
- Use `.btn-green` for the first step (Get Started, Demo) and `.btn-blue` for the rest. Pair a filled button with `.btn-outline` when there are two.
- Make text links bold and blue. They turn green and underline on hover.
- Put a blue title band (`.title-band`) above each chapter of a long page, and close a page with the green link band ("Dig in!").
- Give app screenshots the `--shadow-media` shadow.
- Build new pages from this guide's tokens, composition and components. When adding to an existing site, adapt them to that site's own classes; don't paste the guide's markup in as-is.
- Use the full-colour logo (`logo.png`, `logo-blue.png`) on white, and `logo-white.png` on blue.

## Don't

- Don't use green for text on white, or white text on green at body size. Both fail contrast (see below).
- Don't use the sky blue (`--color-sky`) outside nav hover.
- Don't round corners beyond `--radius-card` (7px). Buttons and fields are almost square (3px).
- Don't name testimonial authors where it could put them at risk. Use their role and region.
- Don't add cards or tags to new layouts as decoration. The only card on the site is the testimonial; the site has no tags, so the shared Tag is excluded.

## Known issues on the live site

These are facts from the scrape, recorded so builds don't copy them by accident:

- White on `--color-green` is 2.1:1. It fails WCAG AA even for large text (3:1), which affects the Get Started and Demo buttons and the white headings on green bands. Raise this with the team before using green behind text; a darker green would fix it.
- `--color-blue` on `--color-green` (link-band column headings) is 2.4:1, and green link hover on white is 2.1:1. Both fail.
- White on `--color-sky` (nav hover) is 2.5:1. It fails.
- Blue text on the note tint is 3.5:1. It fails for body-size text.
- Blue on `--color-grey-light` is 4.3:1: fine for the 32px headings in the icon grid, not for body text.
- Body text on white (19.8:1) and white on blue (5.1:1) pass.
- Elementor buttons only underline on hover; there is no colour change. The nav Demo button turns blue on hover.
- The contact form's textarea renders in Arial at 19.2px while the other fields are Roboto at 16px. The Input component uses Roboto for all fields.
- The Elementor kit defines Roboto Slab and Elementor's default palette (#6EC1E4, #54595F, #7A7A7A, #61CE70), but no page uses them. They are not part of this brand.
