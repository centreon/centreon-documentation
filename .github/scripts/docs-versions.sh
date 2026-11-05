#!/usr/bin/env bash
# Versions of the production site, like the staging site of get-versions in
# documentation.yml: every version of versions.json except the next one
# (nextVersion.json), which is not released yet.
#
# Output ($GITHUB_OUTPUT, or stdout): staging_versions, next_version.
set -euo pipefail

out="${GITHUB_OUTPUT:-/dev/stdout}"

next="$(jq -r '.version // empty' nextVersion.json)"
if [ -n "$next" ] && jq -e --arg n "$next" 'index($n) != null' versions.json >/dev/null; then
  staging_versions="$(jq -r --arg n "$next" 'map(select(. != $n)) | join(",")' versions.json)"
else
  next=""
  staging_versions="$(jq -r 'join(",")' versions.json)"
fi

{
  echo "staging_versions=${staging_versions}"
  echo "next_version=${next}"
} >> "$out"

echo "staging: ${staging_versions}" >&2
echo "next (not built): ${next:-none}" >&2
