# Test briefs

Fixed briefs for checking that `build-a-page.md` keeps working. Run them after any big change to the process, the checker or a brand, in at least two agents (for example ChatGPT/Codex and Claude Code), and compare the results with the last run.

Each brief is written as the person would type it. Some start from an idea (the agent should ask questions first), some from an outline (the agent should go straight to a section plan). When the agent asks questions, answer from the "If asked" notes in the brief, and approve the section plan unless it breaks something in the notes.

## Running one

1. Start a fresh chat in the agent.
2. Paste: `Clone https://github.com/GospelAmbition/design-guide and follow build-a-page.md.` followed by the brief's **Prompt**.
3. Answer its questions from the brief's notes. Approve the plan.
4. When it hands over, run the checks yourself from a clone:
   ```sh
   node scripts/check-page.mjs <page folder>
   node scripts/screenshot-page.mjs <page folder>
   ```
5. Add a row to `results.md`.

## What to record

| Column | How |
| --- | --- |
| Errors / warnings | From `check-page.mjs` on the handed-over folder. Should be 0 errors. |
| site.css lines | `grep -cv '^\s*$' site.css`. Lower is better: it means the brand covered the page. |
| New blocks | How many, and whether each was really needed (or a pattern would have done). |
| Overflow | Problems `screenshot-page.mjs` reports. |
| CSS fixes needed | The number of things you'd have to ask the agent to fix that are CSS or layout problems (spacing, alignment, stacking, colours), as opposed to content or design choices. This is the number we're trying to get to zero. |
| Process | Did it ask questions when it should, show a plan, wait for approval, fill GAPS.md, take screenshots? |

When a run goes wrong, turn what went wrong into a fix in `build-a-page.md`, the checker or the brand, and when a real page goes wrong in a new way, turn it into a new brief here.
