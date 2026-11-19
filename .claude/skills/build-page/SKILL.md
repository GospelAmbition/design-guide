---
name: build-page
description: Build a standalone web page (or a small site) for one of the brands in this design system, with HTML and CSS that follow the brand exactly. Use when asked to "build", "make" or "mock up" a page, landing page or site for a brand (Gospel Ambition, Disciple.Tools, Prayer.Global, …), or to change a page built that way.
---

# Build a page from a brand

Read `build-a-page.md` at the root of this repo and follow it step by step. It is the same process every agent uses (ChatGPT and Codex too), so don't take shortcuts here that it doesn't allow.

Notes for Claude Code:

- Ask the discovery and plan-approval questions as plain text in your message, not with the `AskUserQuestion` tool: at most three per round, lettered options, the reason for each question, and your recommendation. If the `discover` skill is available, use its style.
- Build the page **outside** this repo (for example `../pages/<page-name>/`, or wherever the person says). `scripts/new-page.mjs` refuses a folder inside it.
- Run `node scripts/check-page.mjs <folder>` after every change until it passes.
- For screenshots, use `node scripts/screenshot-page.mjs <folder>` if Playwright is installed, or Claude in Chrome (open the file at 375, 768 and 1280px wide) if it is connected. Look at every screenshot before handing over.
- If you change the design system itself on the way (a missing token, a broken example), stop and ask first: the page is the job, the brand is the reference.
