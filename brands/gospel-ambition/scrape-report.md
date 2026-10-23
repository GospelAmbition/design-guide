# Gospel Ambition scrape report

October 2026. Branch `brand/gospel-ambition`, not yet committed.

The Gospel Ambition brand is built in `brands/gospel-ambition/` and `npm run check` passes.

Source: one Adobe XD prototype of the home page ("Kylan-updated", artboard "Web 1920 – 7", 1920×13681px), shared at https://xd.adobe.com/view/1b0f0783-14da-431f-92dd-431435168639-4e5c/. As agreed, no repository or live site was used.

## How the values were taken

The XD share link loads the design's full graphics tree (`agc.graphicsTree`, every layer with its exact colours, text styles, radii, shadows and vector paths) and the file's Document Assets (saved colour swatches). These were saved to the session scratchpad and read with small scripts, so colours, type, radii, shadows and the section curves are exact, not estimated from screenshots. Spacing is measured from layer positions and fitted to the scale.

The whole page was then rebuilt from the guide's own CSS and pattern HTML at 1920px and compared section by section with Adobe's render of the artboard. It matches closely.

## What's in it

- **Tokens:**
  - **Colours:** red `#BC2026`, charcoal `#2E2D2C`, four greys (`#E6E7E8` wash, `#F7F7F7` crescents, `#C7C7C7` outlines, `#707070` card outline) and white. Also `red-dark` `#8A1E20`, a swatch saved in the XD file but unused on the page, used here only for hover.
  - **Fonts:** Poppins 400–800 with italics for everything, and Bebas Neue for the small red eyebrow labels. Both are free from Google Fonts.
  - **Spacing:** `xxs`–`xxl` (8, 16, 28, 48, 64, 96, 140px).
  - **Other:** five gradients (the grey wash and photo fades), three shadows, three radii (16px, 25px, pill).
  - **Fluid sizes:** heading and body sizes use `clamp()` in `cqi`, reaching the design's 1920px values.
- **Composition:**
  - **Container** is overridden to 1640px of content (140px margins at 1920px).
  - **Grid** is new (Every Layout's Grid), because the shared switcher can't lay out the six tool cards three to a row.
- **Components:**
  - **Replaced:** button (six variants, each with the arrow), card (as the tool card) and input (as the search field). The shared Tag is excluded because the design has no tags.
  - **New:** CTA card, nav bar (with the red arch), ribbon, swoosh, tabs, testimonial, chat button and utilities.
  - **Ribbon and swoosh** are the red band and grey crescent between sections, drawn with the design's exact bezier curves as inline SVG.
- **Patterns:** one per section of the page: hero, scripture section, stats section, photo band, tools grid, ministries, story, testimonials, CTA section, footer.
- **Assets:**
  - **Logos:** the header logo, the footer badge and the wordmark (raster in the XD file).
  - **Tool logos:** all six. Prayer.Global's was a vector in the file and is rendered to PNG.
  - **Vectors exported from the XD file:** the world map, the ministry-logo wall and the two icons.
  - **Photos:** resized ones for the previews.
- **Icons:** the design's arrow and search icons match Bootstrap Icons exactly, so that's named as the set to pick any other icons from.
- **Guidelines:** voice, principles and do/don't are marked as a draft, written from the page's own copy.

## Different from what was agreed

- **Sizes follow the container, not the viewport.** `base.css` makes `body` an inline-size container, and fluid sizes and breakpoints use `cqi` and `@container` instead of `vw` and `@media`. With `vw`, the guide's narrow preview column showed desktop-size type. On a real page the result is the same as `vw`.
- **Narrow previews show the phone layout.** For example, the ribbon page shows the plain red band (so a shape-only example was added), and the hero shows its photo below the text.
- **Viewer change (affects every brand):** in `src/components/BrandContext.astro`, `section`, `header`, `footer`, `nav` and `main` now span the full width of the preview canvas instead of shrinking to their content. Previously a grid inside a shrink-wrapped section collapsed to one column. Examples that already set `style="width: 100%"` are unaffected. The grid composition example follows that convention.

## Approximate, or not in the design

- **Not designed:** there's no mobile layout and no hover, focus or pressed states. Everything the guide adds for them is a proposal and is marked as such.
- **Rounded values:**
  - Spacing is measured and rounded to the scale.
  - One-off font sizes are folded into the nearest step: the 17px Give label to 18px, 25px testimonial roles to 26px, and 38px testimonial names to 36px.
- **Buttons:** in the design the label is centred on the whole pill and the arrow sits 28–35px from the right edge. Here the label and arrow are centred together, so the label sits about 20px left of the design's position on wide buttons.

## Known issues in the design

- **Red on charcoal:** the red "go." in "Let's go." is 2.2:1 and fails accessibility contrast (WCAG AA) even at large size.
- **Grey outlines:** the light grey outlines on buttons and the search field are 1.7:1 against white. The field edge fails the 3:1 non-text rule.
- **Card outline:** the CTA cards have a 1px `#707070` outline, probably XD's leftover default stroke. It is kept but barely shows.
- **Typo:** the nav reads "FOR YOUR MINSITRY".
- **Unused swatches:** the XD file also saves cyan, gold, blue and navy swatches that the page never uses. They are left out of the guide.
- **Passing pairs:** charcoal on white 13.7:1, white on red 6.2:1, red on the grey wash 5.0:1, white at 80% on charcoal 9.4:1, white at 90% on red 5.3:1.

## To obtain

- Vector logo masters (SVG/AI/EPS), and a white or reversed logo for red, charcoal and photo backgrounds (the design has none).
- The wordmark typeface name and licence, and logo clear-space and minimum-size rules.
- Permission for the roughly 40 ministry logos and the two testimonial photos.
- The full-resolution photos and their licences.
- Sign-off on the draft voice and principles.

## Not covered yet

- **Unbuilt content:** the "Recent Activity" tab (no design), and the interactive "Disciples multiplying disciples" chart (the design only has a screenshot of it).
- **Not designed:** a mobile menu, and forms (the only field is the search box).

## Notes for next time

- **Chrome screenshots:** they kept timing out after the first shot in a tab. A tab the user added to the group worked reliably.
- **Full-width checks:** these used a scratch page built from the guide's CSS and HTML, served locally with `Cache-Control: no-store`.
- **SVG export:** Inkscape's `--export-plain-svg` re-save broke the clip paths for Chrome (the logo wall rendered as fragments). The shipped SVGs are the raw exports with a `viewBox` from Inkscape's bounding-box query.
