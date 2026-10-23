---
name: frontmatter-description
description: Write or fix the description field in a Docusaurus topic's frontmatter in English or French. Use whenever the user asks for a frontmatter description or wants an existing description checked, shortened or rewritten, even if they just say "add a description" to a .md/.mdx file.
---

# Frontmatter description

Write a short, plain summary of what a page is about, for the description field of its YAML frontmatter. Search engines and site previews show this text, often cut off around 120 characters, so it must work even when truncated.

## Rules (all mandatory)

1. Length: 120 to 155 characters, counting spaces and punctuation, excluding the surrounding quotes.
2. Always wrapped in double quotes: description: "...". If the text itself contains a double quote, use a typographic one (“ ” or « ») or rephrase instead of escaping.
3. Plain, idiomatic language in the page's language:
   * English content → English description (US spelling).
   * French content → French description, natural French (not a literal translation), with French typography (espace insécable before : ; ? !, guillemets « »).
4. Sums up the topic: say what the page covers or what the reader can do with it. No marketing filler ("Discover…", "Everything you need to know…", "Découvrez…"), no repeating the title word for word.
5. Front-load the key information: the first 120 characters must hold the essential point (main subject + main action/benefit). Anything after 120 is a bonus detail that can be cut without loss.

## Workflow
1. Read the page (title, headings, first paragraphs) and identify its main subject and purpose.
2. Detect the language of the content and write in that language.
3. Draft one or two sentences (aim for about 130–150 characters): subject first, then what the reader learns or does. Prefer active voice and concrete verbs ("Configure…", "Learn how to…", "Configurez…", "Comment…").
4. Check it with the script:

   ```bash
   python scripts/check_description.py "Your description here"
   ```

   It reports the length, flags anything outside 120–155, and shows where the 120-character cut falls. Fix and re-check until it passes. 
5. Output the final line ready to paste:

   ```yaml
   description: "Your description here"
   ```

   If editing a file, insert or replace the description field inside the existing frontmatter without touching other fields.

## Examples

English, page about resetting a password:

```yaml
description: "Reset your account password from the sign-in page or your profile settings, and what to do if the reset email never arrives."
```

(First 120 characters already cover the topic and both methods; the end is extra detail.)

French, page sur l'export de données :

```yaml
description: "Exportez vos données au format CSV ou Excel depuis le tableau de bord, planifiez des exports automatiques et choisissez qui les reçoit par e-mail."
```

Too short and vague (rejected): "Learn everything about passwords." Missing quotes (rejected): description: Reset your password

## When fixing an existing description

Keep what is accurate, then fix in this order: quotes, language, length, front-loading, wording. Tell the user briefly what changed and why.
