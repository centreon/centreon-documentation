# Last update date of the pages

Each documentation page shows the date of its last update, and the sitemap
(`lastmod`) and `llms.txt` give the same date to search engines and AI
agents. Docusaurus takes it from the last Git commit of the page.

A change that does not change what readers read (longer descriptions in the
front matter, link fixes, formatting, a typo fix) would then date the pages it
touches of that day. After a mass change, search engines stop trusting the
dates of the site, and readers see "updated yesterday" on pages that did not
change.

Such commits are skipped: the pages keep the date of their previous change.

## How to skip a commit

**Add the `skip-last-update` label to the pull request.** It works before or
after merging: the label is read at each deployment, so a label added after
the merge applies at the next one.

**For a commit without a pull request**, add its full hash to
`.lastupdate-ignore-revs`, at the root of the repository, with a comment:

```text
# 2026-11-04 Longer frontmatter descriptions - OnPrem (#5752)
2eab2f8d696fbd184e5ef53e28023353e651284b
```

Get the full hash with `git log --format='%H %s' -5`.

Skip a commit only when it leaves the content as it is for the reader. A
commit that fixes or adds information is a real update: keep its date.

## How it works

`tools/last-update/index.mjs` is a custom Docusaurus VCS
(`future.experimental_vcs` in `docusaurus.config.js`). It reads the Git
history once per build, instead of one `git log` per page, and dates each page
with its last commit that is not skipped. A page whose commits are all skipped
keeps the date of its last commit. A page can still set `last_update` in its
front matter.

The skipped commits are the merge commits of the pull requests labeled
`skip-last-update`, read from the GitHub API, and the hashes of
`.lastupdate-ignore-revs`. The API needs `GITHUB_TOKEN`: the deployment
workflows set it. Without it (local builds), or if the API fails, only
`.lastupdate-ignore-revs` applies and the build logs a warning. To get the
same dates locally:

```bash
GITHUB_TOKEN=$(gh auth token) pnpm build
```

The deployment workflows fetch the full history (`fetch-depth: 0`). With a
shallow clone, the older commits are unknown and a page keeps the date of its
last commit.
