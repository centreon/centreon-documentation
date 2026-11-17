# llms.txt editorial content

The site publishes an [llms.txt](https://llmstxt.org) file per language,
which AI assistants and agents read to find their way in the documentation:

| Language | Published file                        | Template     |
| -------- | ------------------------------------- | ------------ |
| English  | https://docs.centreon.com/llms.txt    | `root.en.md` |
| French   | https://docs.centreon.com/fr/llms.txt | `root.fr.md` |

The template is the file: write the introduction, the facts and the sections
in the order you want. Only the following are replaced when the site is built:

| In the template                  | Becomes                                                            |
| -------------------------------- | ------------------------------------------------------------------ |
| `<!-- ... -->`                   | nothing: notes for the editors                                     |
| `{siteUrl}`                      | URL of the site in that language, with a trailing slash            |
| `{version}`                      | current OnPrem version, for example `26.10`                        |
| `{connectorCount}`               | number of connectors, rounded down to the hundred, for example 700 |
| `{{page docs/api/rest-api-v2/}}` | `- [Title](URL): description` of that page                         |
| `{{page <path> \| My label}}`    | the same line, with your label instead of the page title           |
| `{{indexes}}`                    | the generated sections that link to the index of each product      |

A `{{...}}` directive must be alone on its line, and `{{indexes}}` must appear
exactly once. A page path is the path of its URL without the language
(`docs/installation/architectures/`, in `root.fr.md` too). Titles and
descriptions come from the pages themselves: to change how a page is described,
change its `title` or `description` front matter. Any `{word}` in braces is
read as a placeholder: the template cannot hold one literally.

The build fails on an unknown placeholder or directive, an unclosed comment, and
a `{{page}}` path that matches no listed page, so a renamed page cannot leave a
dead link. A `docs/` path must exist in the current version and in the next
one, which the preview of each pull request also builds. In a local build that
leaves a product out (`PP=0`, `CLOUD=0`...), its pages and values are skipped
with a warning instead.

Keep the texts factual and short: assistants quote them when they present
Centreon. Do not write facts that change with each release, such as the
supported distributions: link to the page that holds them instead. The
`## Optional` section keeps its English title in French too, since the
llms.txt format reserves it for links that tools may skip; keep it last.

The product indexes (`/docs/llms.txt`, `/cloud/llms.txt`...) and the generated
sections are written by the plugin in `src/plugins/llms-txt/index.js`. To check
a change, run `pnpm build` and read `build/llms.txt` and `build/fr/llms.txt`.
