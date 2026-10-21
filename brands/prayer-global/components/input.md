---
title: Input
summary: Text fields with a 2px grey border, 10px corners and a soft shadow, plus the site's custom checkbox.
uses: [button]
---

From the Contact Us form. The site styles fields by type (`input[type="text"]`, `input[type="email"]`, `textarea[type="text"]`…), so plain fields pick up the style with no class. Add `.input` to anything else, such as a `<textarea>` without `type="text"`.

## When to use

- Short answers in `input`, longer ones in `textarea`.

## Do

- Put the label text above the field inside the `<label>`, at body size and regular weight, as the contact form does.
- Separate fields with paragraph spacing and put the submit button below.

## Don't

- Don't use placeholder text as the label.
- Don't go wider than 600px. The contact form is capped there.

## Code

```html
<form style="max-width: 600px; width: 100%">
  <p><label class="field">Name<br /><input type="text" /></label></p>
  <p><label class="field">Email<br /><input type="email" /></label></p>
  <p><label class="field">Question or comment<br /><textarea type="text" rows="4"></textarea></label></p>
  <p><label><input type="checkbox" checked /> Sign up for Prayer.Global news and opportunities</label></p>
  <p><button class="btn btn-primary-light uppercase" type="submit">Submit</button></p>
</form>
```

```css
.field { display: block; width: 100%; }
.field input, .field textarea { width: 100%; box-sizing: border-box; }
input[type="text"], input[type="email"], input[type="password"], input[type="number"], input[type="date"], input[type="time"],
textarea[type="text"], .input {
  font: inherit;
  border: 2px solid var(--color-grey);
  border-radius: var(--radius-md);
  padding: var(--space-input-y) var(--space-input-x);
  box-shadow: var(--shadow-small);
  color: var(--color-input-text);
  background-color: var(--color-white);
}
input[type="checkbox"]:not([role="switch"]) {
  --checkbox-color: currentColor;
  --checkbox-tick: var(--color-brand-lighter);
  appearance: none;
  -webkit-appearance: none;
  background-color: var(--color-white);
  margin: 0;
  font: inherit;
  color: var(--checkbox-color);
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid var(--checkbox-color);
  border-radius: 0.25em;
  display: inline-grid;
  place-content: center;
  vertical-align: -0.15em;
}
input[type="checkbox"]:not([role="switch"])::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--checkbox-tick);
  border-radius: 0.15em;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
input[type="checkbox"]:not([role="switch"]):checked::before { transform: scale(1); }
input[type="checkbox"]:not([role="switch"]):disabled { --checkbox-color: var(--color-grey); --checkbox-tick: var(--color-grey); }
input[type="checkbox"]:not([role="switch"]):focus { outline: max(2px, 0.15em) solid var(--checkbox-color); outline-offset: max(2px, 0.15em); }
```
