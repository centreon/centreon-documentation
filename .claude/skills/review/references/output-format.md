# Output format

The deliverable is a **file**, not a conversational answer. Fill
`assets/report-template.html` — do not hand-write CSS or emit bare tags. Save to a
`_review/` folder at the root of the centreon-documentation repo, named
`_review/<source-basename>.review.html`.

## Filling the template

The template ships the full `<style>` block, the 5-criterion color scheme, the nav,
and the table styles. You only inject content into the marked placeholder regions:

- `<!-- META -->` — one line: source file reviewed + date.
- `<!-- SECTION:plain -->`, `:idiom`, `:spelling`, `:style` — the inline annotations
  for criteria 1–4.
- `<!-- SECTION:links -->` — the Links & Anchors table (link issues are grouped here,
  not inline, since they don't attach to one sentence).
- `<!-- SUMMARY -->` — the summary table rows.

## Inline annotations (criteria 1–4)

Each flagged sentence is quoted, then annotated immediately after. Use the template's
classes so the criterion color is applied automatically:

```html
<blockquote class="src">Original sentence here.</blockquote>
<div class="note plain">          <!-- class = plain | idiom | spelling | style -->
  <span class="badge">Plain language</span>
  Suggested rewrite: "…". Why: …
</div>
```

- One annotation = exactly one criterion. Never conflate.
- If a criterion is clean, write a single line saying so — don't fabricate issues.

## Links & Anchors section

Populate the table from the script output:

| Reference | Type | Status | Detail |
|-----------|------|--------|--------|
| https://… | external | BROKEN 404 | (from check_links.sh) |
| #install  | anchor   | broken     | no matching heading (from extract_refs.py) |
| ./x.md    | relative | check      | verify against repo |

- Login-gated or otherwise unreachable-by-design URLs → status **could not verify**,
  never **broken**.
- Only use `WebFetch` to confirm a redirect lands on a *relevant* page; note when you did.

## Summary table (always last)

| Criterion | Issues | Takeaway |
|-----------|:------:|----------|
| Plain language | 3 | Several >30-word sentences in the intro |
| Idiomaticity | 0 | Reads naturally |
| Spelling | 1 | "colour" — use US spelling |
| Style & terminology | 2 | "Poller" vs "poller" capitalization |
| Links & anchors | 1 | One 404 external link |

State "no issues found" explicitly for any clean criterion.
