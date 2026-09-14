---
name: create-doc
description: Open (or update) a documentation pull request on centreon-documentation, always filling in a "Versions that this PR changes" checklist computed from the files actually touched. Use this skill whenever the user asks to open a PR, create a PR, or submit their doc changes for this repo — even if they don't mention versions explicitly. Also use it to fix up an already-open PR that is missing this section. Do NOT use it for repos other than centreon-documentation, and do NOT use it just to write doc content (writing/editing pages is a separate step that happens before this skill runs).
---

# Create doc PR

Open a documentation pull request whose description always states which
published version(s) and product section(s) it touches, so reviewers and the
build pipeline don't have to guess. This mirrors `.github/PULL_REQUEST_TEMPLATE.md`,
but under the exact heading the team wants: **"Versions that this PR changes"**.
Reference PR: https://github.com/centreon/centreon-documentation/pull/5641.

## When this runs

- The doc content edits (and any associated Jira ticket) are already done —
  this skill is the "open/fix the PR" step, not the writing step.
- If there is no PR yet: create the branch (if needed), commit, push, and run
  `gh pr create`.
- If a PR already exists for the current branch: this skill instead computes
  the section and calls `gh pr edit` to insert or refresh it, leaving the rest
  of the body untouched.

## Step 1 — Determine the changed files

```bash
git diff --name-only origin/staging...HEAD
```

If nothing is committed yet but there are staged/unstaged doc edits, use
`git status --porcelain` instead (and commit as normal — see the repo's
standard commit workflow — before opening the PR).

## Step 2 — Map file paths to checklist items

Use the exact same path logic as `.github/workflows/documentation.yml`
(`get-versions` job) and the options already listed in
`.github/PULL_REQUEST_TEMPLATE.md`. For every changed file, check it against
each rule below (a single PR can match several):

| Rule (path contains / matches) | Checklist item |
|---|---|
| `versioned_docs/version-24.10/` or `i18n/**/docusaurus-plugin-content-docs/version-24.10/` | `24.10` |
| `versioned_docs/version-25.10/` or `i18n/**/docusaurus-plugin-content-docs/version-25.10/` | `25.10` |
| `versioned_docs/version-26.10/` or `i18n/**/docusaurus-plugin-content-docs/version-26.10/` | `26.10` |
| `cloud/` or `i18n/**/docusaurus-plugin-content-docs-cloud/` | `Cloud` |
| `pp/` or `i18n/**/docusaurus-plugin-content-docs-pp/` | `Monitoring Connectors` |
| `experience-monitoring/` or `i18n/**/docusaurus-plugin-content-docs-experience-monitoring/` | `Experience Monitoring` |
| `logmanagement/` or `i18n/**/docusaurus-plugin-content-docs-logmanagement/` | `Log Management` |

A file under `versioned_docs/version-NN.NN/...` (no `cloud`/`pp`/etc. segment)
only maps to that one version row — don't also tick unrelated products for it.
Files matching none of the rules (e.g. `docusaurus.config.js`, `src/**`,
`static/**`) don't drive any checkbox on their own; if that's genuinely the
*only* kind of file changed, ask the user which version(s) it's meant for
rather than guessing.

## Step 3 — Build the section

List only the items that actually matched (checked), one per line — don't pad
the list with unchecked rows for everything else, matching the format used on
[PR #5641](https://github.com/centreon/centreon-documentation/pull/5641). If
several items matched (e.g. a page that exists both in `versioned_docs` and
`cloud`), list every one of them, each checked:

```markdown
## Versions that this PR changes

- [x] 24.10
```

or, for a multi-version change:

```markdown
## Versions that this PR changes

- [x] 24.10
- [x] 25.10
```

## Step 4 — Apply it

- **New PR**: append this section to the end of the `gh pr create --body`
  content (after Summary / Jira link / Test plan), matching the structure
  already used on other doc PRs in this repo.
- **Existing PR missing the section**: `gh pr view <n> --json body -q .body`,
  append the section (or replace an existing but stale one — same heading,
  match on `## Versions that this PR changes` through the next `##` or end of
  body), then `gh pr edit <n> --body-file <tmpfile>`. Always regenerate the
  checklist from the *current* diff rather than trusting an old one — files
  get added or dropped as review comments land.

## Notes

- This section is informational for humans; it does not replace or duplicate
  the CI path-filter logic in `documentation.yml` — don't try to make the two
  systems talk to each other.
- If the PR touches genuinely unrelated things (e.g. a docs page plus a CI
  workflow tweak), still fill the checklist from the doc paths only.
- Keep using the repo's normal PR body conventions (Summary, Jira reference,
  Test plan) — this skill only adds/maintains the versions section, it
  doesn't replace the rest of the description.
