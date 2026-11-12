#!/usr/bin/env bash
# Decides which documentation sites deploy-dev builds (deploy-prod builds the
# staging one only):
#
#   staging  every version of versions.json except the next one
#   next     the version of nextVersion.json alone, when versions.json has it
#
# On a push (staging) both sites are built. On a pull request, a site is only
# built when the PR can change it:
#
#   - files of the next version only        -> next
#   - files of the other versions only      -> staging
#   - anything else (src/, static/, config,
#     sections, versions.json, workflows...) -> both
#
# A site that is not built is identical to the one of the staging branch: the
# preview then links to /staging/ (or /staging/next/).
#
# Input (environment): EVENT_NAME, PR_NUMBER, GITHUB_REPOSITORY, GH_TOKEN.
# Output ($GITHUB_OUTPUT, or stdout): staging_versions, next_version,
# build_staging, build_next.
set -euo pipefail

out="${GITHUB_OUTPUT:-/dev/stdout}"

next="$(jq -r '.version // empty' nextVersion.json)"
if [ -n "$next" ] && jq -e --arg n "$next" 'index($n) != null' versions.json >/dev/null; then
  staging_versions="$(jq -r --arg n "$next" 'map(select(. != $n)) | join(",")' versions.json)"
else
  next=""
  staging_versions="$(jq -r 'join(",")' versions.json)"
fi

build_staging=true
build_next=$([ -n "$next" ] && echo true || echo false)

if [ "${EVENT_NAME:-}" = "pull_request" ]; then
  : "${PR_NUMBER:?PR_NUMBER is required on pull_request}"
  touch_staging=false
  touch_next=false
  # Renamed files count for both their old and new paths.
  while IFS= read -r file; do
    [ -z "$file" ] && continue
    version=""
    if [[ "$file" =~ ^versioned_docs/version-([^/]+)/ ]] ||
       [[ "$file" =~ ^versioned_sidebars/version-(.+)-sidebars\.json$ ]] ||
       [[ "$file" =~ ^i18n/[^/]+/docusaurus-plugin-content-docs/version-([^/]+)/ ]] ||
       [[ "$file" =~ ^i18n/[^/]+/docusaurus-plugin-content-docs/version-(.+)\.json$ ]]; then
      version="${BASH_REMATCH[1]}"
    fi
    if [ -z "$version" ]; then
      touch_staging=true
      touch_next=true
    elif [ "$version" = "$next" ]; then
      touch_next=true
    else
      touch_staging=true
    fi
  done < <(gh api --paginate "repos/${GITHUB_REPOSITORY}/pulls/${PR_NUMBER}/files" \
             --jq '.[] | .filename, (.previous_filename // empty)')

  build_staging=$touch_staging
  build_next=$([ -n "$next" ] && [ "$touch_next" = true ] && echo true || echo false)
fi

{
  echo "staging_versions=${staging_versions}"
  echo "next_version=${next}"
  echo "build_staging=${build_staging}"
  echo "build_next=${build_next}"
} >> "$out"

echo "staging: ${staging_versions} (build: ${build_staging})" >&2
echo "next: ${next:-none} (build: ${build_next})" >&2
