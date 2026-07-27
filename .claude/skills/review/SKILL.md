---
name: review
description: Review English- or French-language written content against a fixed editorial checklist (plain language, idiomaticity, spelling, style/terminology consistency, broken links/anchors) and produce an annotated report with corrections. Use this skill whenever the user asks to "review", "proofread", "edit", "check", or "QA" a piece of writing — a document, article, webpage copy, help article, or draft — even if they don't name all five criteria. Also trigger for requests to check a document for broken links, inconsistent terminology, or awkward phrasing. Do NOT use for code review or grammar-only quick fixes on a short pasted sentence. Review French content in French, English content in English (US spelling).
---

# Review

Audit written content against five fixed criteria and deliver an annotated report
listing the issues found and suggested fixes.

**Efficiency principle:** the mechanical parts of this checklist (extracting links,
checking anchors, flagging long sentences, detecting spelling-variant mixing, and
validating URLs) are done by the bundled scripts — NOT by reading token-by-token.
Run the scripts first, then spend model reasoning only on judgment calls
(idiomaticity, plain language, terminology consistency).

## The five criteria

Always report on all five, in this order. If a criterion is clean, say so
explicitly — don't skip it, and don't invent issues to seem thorough.

1. **Plain language** — needlessly complex sentences, jargon without explanation,
   nominalizations, actor-obscuring passive voice, sentences the script flags as
   >30 words that could be split. (Plain English / plain French per the doc's language.)
2. **Idiomaticity** — phrasing that is grammatically correct but unnatural to a
   native reader (calques, stiff/literal constructions, wrong prepositions,
   unnatural collocations). Especially important if the text reads translated.
3. **Spelling** — misspellings and typos; plus US/UK mixing (the script lists
   variant pairs found). English content must use US spelling.
4. **Style & terminology consistency** — inconsistent capitalization, product/
   feature naming, voice ("we" vs "you"), number/date/UI-element formatting.
   Build a mental glossary; flag any term used two ways.
5. **Links & anchors** — from the script output: broken/unreachable external URLs
   (by HTTP status) and internal anchors whose target heading doesn't exist.
   Note login-gated URLs as "could not verify", not broken.

## Process

1. **Get the content.** Read the input file (.md / .mdx / pasted text) in full.

2. **Run the deterministic pass** from the doc's directory:
   ```bash
   python3 scripts/extract_refs.py <DOC>            # compact report: anchors, long sentences, US/UK
   python3 scripts/extract_refs.py <DOC> --urls | bash scripts/check_links.sh
   ```
   Use `--urls` output (deduplicated) for link checking so no page body is ever
   downloaded. Only fall back to `WebFetch` on a specific URL when you must verify
   a *redirect lands on a relevant page* — that is the expensive path, use it sparingly.

3. **Read once for the judgment criteria** (1, 2, 4). Keep the categories separate:
   idiomaticity = naturalness to a native speaker; plain language = simplicity even
   for a native speaker. Tag every comment to exactly one criterion.

4. **Produce the annotated report.** Follow `references/output-format.md` and fill
   `assets/report-template.html` — do not hand-write CSS. Save to a `_review/`
   folder at the root of the centreon-documentation repo.

5. **End with the summary table**: criterion, issue count, one-line takeaway
   (state "no issues found" per clean criterion).

## Notes

- Don't silently fix — the deliverable is a reviewable trail of what changed and why.
- Tool name is `WebFetch` (Claude Code). If running in the claude.ai app instead,
  it is `web_fetch` and `check_links.sh` (curl) is unavailable — verify links with
  `web_fetch` there.
