---
name: translation
description: Translate written content into French while strictly applying the official terminology defined in the shared glossary. Use this skill whenever the user asks to "translate", "traduire", "localize", or "localiser" a document, article, help page, UI string, or any content into French — even a short passage. Also trigger when the user asks for a French version of English content, or mentions applying "official terms", "terminologie officielle", or "the glossary" to a translation. Do NOT use for reviewing an already-translated document (use the review skill) or for one-off word-lookups.
---

# Translation

Translate content into French, applying the official terminology from the shared
glossary as the single source of truth.

**Core rule:** the glossary is authoritative. When the official target term differs
from what would otherwise read most naturally, the glossary wins — always. You may
note a reservation, but you never silently substitute your own preferred term.

## The shared glossaries

There is one glossary per product, plus a `common.csv` of cross-product terms, in:

```
.claude/skills/_shared/glossaries/
├── common.csv                 (always loaded)
├── infra-monitoring.csv
├── experience-monitoring.csv
└── log-management.csv
```

These files are shared with the `review` skill — do not duplicate or edit them
during a translation task.

**Selecting the product glossary.** Before translating, determine which product the
content belongs to, in this order: (1) use the product if the user states it;
otherwise (2) infer it from the file path using the shared map
`.claude/skills/_shared/product-map.csv` — match its `path_segment` values against
the **directory segments** of the file path (not a raw substring, so `pp` matches a
`/pp/` folder, not the word "support"); otherwise (3) ask the user which of the
three products applies. If several segments match, the product-specific folders
(`logmanagement`, `experience-monitoring`) take precedence over the infra folders.
Never guess silently.

**Loading.** Load `common.csv` AND the selected product's file. When the same
`source` term appears in both, the **product-specific row wins**.

Columns (identical in every file):

- `source` — the source term to detect (case-insensitive).
- `FR` — the approved French term. This is what you output.
<!--- `a_proscrire` — banned renderings (`;`-separated). Never use these.
- `note` — usage guidance; follow it.-->

## Process

1. **Read the source content in full**, and determine the product (see "Selecting the product
   glossary" above).
2. **Load `common.csv` + the product glossary** and build a lookup of
   `source → FR`, letting product-specific rows override `common` on conflict.
3. **Translate**, and for every source term present in the glossary, use the exact FR.
   <!-- Respect each `note` and never emit an `a_proscrire` form. -->
4. **Handle terms absent from the glossary**: translate them at your best judgment,
   but keep a running list of every technical term you had to decide yourself, so
   the user can add it to the glossary later. (Do not invent glossary entries.)
5. Write the translation to a file. Save it as a .md file inside a _translation/ folder at the root of the repo, preserving the source file's name (and its sub-path under _translation/ when translating from a nested location, so multiple files never collide). At the end of the file, give the path you wrote to and a short "Termes hors glossaire" section listing the terms you decided on and the rendering you chose. If a source term collides with a glossary a_proscrire value in the original, flag it there too.

## Notes

- One term = one rendering throughout a document. If the glossary fixes a term,
  apply it consistently everywhere, including headings and UI labels.
- For long documents, translate section by section, then do a final terminology
  pass against the glossary to catch any drift.
- Preserve formatting (Markdown, code blocks, placeholders, variables) untouched —
  never translate code, identifiers, or `{{variables}}`.
- Your output is a strong first draft to be validated, not a final authority on
  specialized terminology.