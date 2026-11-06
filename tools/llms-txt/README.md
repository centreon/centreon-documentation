# llms.txt

The site publishes an [llms.txt](https://llmstxt.org) file for each language:

- https://docs.centreon.com/llms.txt
- https://docs.centreon.com/fr/llms.txt

AI assistants and agents read it to find their way in the documentation. It
presents Centreon, then lists the pages of each product.

## Editing the content

Each file is written from a Markdown template:

| Language | Template      |
|----------|---------------|
| English  | `llms.en.md`  |
| French   | `llms.fr.md`  |

The template is the file, in the order you want: the introduction, the key
facts, the sections and their texts are yours. Write them freely. Only the
following are replaced:

| In the template                    | Becomes                                                     |
|------------------------------------|-------------------------------------------------------------|
| `<!-- … -->`                       | nothing: notes for the editors                              |
| `{siteUrl}`                        | URL of the site for the language, with a trailing slash     |
| `{version}`                        | current OnPrem version, for example `26.10`                 |
| `{{page docs/api/rest-api-v2/}}`   | `- [Title](URL): description` of that page                  |
| `{{page <path> \| My label}}`      | the same, with your label instead of the title              |
| `{{pages docs}}`                   | every page under `docs/`, by sidebar category, in menu order |
| `{{categories pp}}`                | one line per sidebar category, with its number of pages     |

A `{{…}}` directive must be alone on its line. Paths are those of the page
URL, without the language (`docs/installation/architectures/`, also in
`llms.fr.md`).

Titles and descriptions come from the published pages: to change how a page
is described, change its `title` or `description` front matter. Lists follow
the sidebar of the current version: older versions and pages that are not in
the sidebar are left out (cite one with `{{page}}` if it matters).

Keep the texts factual and short: assistants quote them when they present
Centreon. The format expects an H1 title, a summary in a quote (`>`), then
`##` sections of links. A section named `## Optional` (kept in English, in
French too) holds links that tools may skip.

## How it is generated

`tools/llms-txt/generate.mjs` runs after every `pnpm build` (`postbuild`
script), so every deployment gets an up-to-date file. It reads the built site
(`sitemap.xml` and the HTML of the pages) and writes `llms.txt` next to each
`sitemap.xml`: `build/llms.txt` and `build/fr/llms.txt`. It needs no
dependency and no Docusaurus plugin. Archived versions (`ARCHIVED_VERSION`)
get no file.

To check a change to a template without rebuilding the site:

```bash
pnpm llms-txt            # uses build/
pnpm llms-txt path/to/build
```

The script prints the number of links of each file, and a warning for every
`{{page}}` or hand-written link to a page that is not in the build.
