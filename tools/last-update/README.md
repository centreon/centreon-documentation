# Last update date of the pages

Each documentation page shows the date of its last update, and the sitemap
gives the same date to search engines (`lastmod`). Docusaurus takes it from
the last Git commit of the page.

A mass change that does not change what readers read (longer descriptions in
the front matter, link fixes, formatting) would then date thousands of pages
of the same day. Search engines stop trusting the dates of the site, and
readers see "updated yesterday" on pages that did not change.

Such commits are skipped: the pages keep the date of their previous change.

## How to skip a commit

**Before merging** (preferred): put `[skip-last-update]` in the title of the
pull request. The squashed commit keeps it in its message.

```text
Longer frontmatter descriptions - Connectors [skip-last-update]
```

**After merging**: add the full hash of the commit to
`.lastupdate-ignore-revs`, at the root of the repository, with a comment:

```text
# 2026-11-04 Longer frontmatter descriptions - OnPrem (#5752)
2eab2f8d696fbd184e5ef53e28023353e651284b
```

Get the full hash with `git log --format='%H %s' -5`. The change applies at the
next deployment.

Skip a commit only when it leaves the content as it is for the reader. A
commit that fixes or adds information is a real update: keep its date.

## How it works

`tools/last-update/index.mjs` reads the Git history once per build (under a
second). In `docusaurus.config.js`, `markdown.parseFrontMatter` gives each page
whose last commit is skipped a `last_update` front matter with the date of its
last commit that is not. Other pages keep the Docusaurus date. A page can still
set `last_update` by hand.

Without the full history (shallow clone), the Docusaurus dates are kept. The
deployment workflows fetch the full history (`fetch-depth: 0`).
