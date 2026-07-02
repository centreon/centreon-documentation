---
name: review
description: Review English-language written content against a fixed editorial checklist (plain English, idiomaticity, spelling, style/terminology consistency, broken links/anchors) and produce an annotated document with corrections. Use this skill whenever the user asks to "review", "proofread", "edit", "check", or "QA" a piece of English writing — a document, article, webpage copy, help article, or draft — even if they don't name all five criteria explicitly. Also trigger when the user asks to check a document for broken links, inconsistent terminology, or awkward phrasing. Do NOT use for code review, grammar-only quick fixes on a short pasted sentence. If the contents is in French, do the review in French.
---

# Review

A skill for auditing written content against five fixed criteria and delivering an annotated document with the issues found and suggested fixes.

## The five checklist criteria

Always check all five, in this order. Don't skip one because the document looks "fine" on that axis — say so explicitly if there's nothing to flag. Depending on the language of the document:

1. **Plain English**/**Plain French** — Flag needlessly complex sentences, jargon without explanation, nominalizations, passive voice that obscures the actor, sentences over ~30 words that could be split, and any place a shorter/simpler phrasing would serve the reader better.
2. **Idiomaticity** — Flag phrasing that is grammatically correct but unnatural to a native reader (calques, stiff or overly literal constructions, unnatural collocations, wrong preposition choices). This is especially important if the content reads like it may have been translated or drafted by a non-native writer.
3. **Spelling** — Flag misspellings and typos. Note if the document mixes US and UK spelling inconsistently (e.g. "color" and "colour" both appearing) — that's a spelling-consistency issue even if each word is individually correct. The contents must use US spelling.
4. **Style and terminology consistency** — Flag inconsistent capitalization, inconsistent product/feature naming, inconsistent voice (e.g. switching between "we" and "you" and passive), inconsistent formatting of things like numbers, dates, UI element names, or headings. Build a quick mental glossary of key terms as you read and flag any term used two different ways.
5. **Links and anchors** — Extract every URL and internal anchor/cross-reference in the document. For every external URL, use `web_fetch` to verify it resolves (not a 404, not a dead domain, not a redirect to an unrelated page). For internal anchors (e.g. `#section-name` or cross-references to other headings in the same doc), verify the target heading/anchor actually exists in the document. Flag anything broken with the specific URL/anchor and what went wrong.

## Process

1. **Get the content.** If the input is a file (.md or .mdx,or pasted text), read it in full first.
2. **Extract links up front.** Before writing any prose feedback, pull every URL and anchor reference out of the document into a list. Batch-verify external links with `web_fetch` (one call per unique URL — don't re-fetch duplicates). Check internal anchors by confirming the target text/heading exists in the document itself.
3. **Read through once for each of the other four criteria.** You can do this in a single pass, but keep the five categories mentally separate — don't lump "this sentence is awkward" into a vague general note; tag it to the specific criterion (idiomaticity vs. plain English are often confused — idiomaticity is about naturalness to a native speaker, plain English is about simplicity/clarity even for a native speaker).
4. **Produce the annotated output**, per the format rules below.
5. **Always end with a short summary table**: criterion, number of issues found, and a one-line takeaway (even "no issues found" is worth stating explicitly per criterion).

## Output format

Always produce a file, not just a conversational answer — this is a deliverable.

- **If the input was Markdown, plain text, or pasted directly in chat**: produce an HTML file where each issue is called out inline using a blockquote or bracketed annotation immediately after the flagged sentence, in this form:
  ```
  Original sentence here.
  > **[Plain English]** Suggested rewrite: "..."
  ```
  Group link/anchor issues in a dedicated "Links & Anchors" section at the end instead of inline, since they don't attach to a single sentence the same way.
- store the HTML file in a folder called "_review", located at the root of the centreon-documentation folder.
- **The HTML file must be a complete, self-contained, styled document** — never emit bare tags with no `<!DOCTYPE html>`/`<head>`/`<style>`, since that renders as unstyled default-browser text. Always include:
  - A `<head>` with a `<title>` and an embedded `<style>` block (no external stylesheets/CDNs).
  - Readable typography: a system sans-serif font stack, a max-width content column (e.g. `~840px`, centered), comfortable line-height (~1.6) and spacing between sections.
  - Distinct, color-coded styling per annotation type so issues are scannable at a glance — e.g. a colored left border + tinted background on each annotation block, with the color keyed to the criterion (pick 5 consistent colors for Plain English / Idiomaticity / Spelling / Style/terminology / Links & anchors and reuse them for the criterion tag badge and the summary table row).
  - Flagged original sentences visually distinguished from surrounding body text (e.g. light highlight or left rule) so the reader can tell "this is quoted from the source" apart from the annotation itself.
  - Styled tables (bordered cells, padded, header row visually distinct, zebra-striped rows) for the Links & Anchors and Summary tables — do not rely on bare `<table border="1">` with no CSS.
  - A short intro line stating the source file reviewed and the date, and anchor links (a small fixed or top-of-page nav) jumping to each of the 5 criteria sections if the document is long.

## Things to avoid

- Don't invent issues to seem thorough — if a section is clean on a given criterion, say so.
- Don't silently fix things without flagging them; the point is a reviewable trail of what changed and why.
- Don't test links you can't actually reach (e.g. URLs requiring login) — note them as "could not verify" rather than marking them broken.
- Don't conflate the five criteria in your annotations; always tag which one a comment belongs to so the user can filter/prioritize.
