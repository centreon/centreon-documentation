#!/usr/bin/env bash
# Removes the branch previews whose pull request is no longer open.
#
# The cleanup job of deploy-dev.yml runs on the "closed" event, but GitHub
# sends no workflow event when a pull request cannot be merged (conflicts) or
# when Dependabot closes its own pull request and deletes the branch. Those
# previews would stay forever. This script reads the pull request number from
# each preview's meta.json and deletes the preview when that pull request is
# closed or merged. Previews without a pull request number (staging) are kept.
set -euo pipefail
: "${BUCKET:?BUCKET is required}" "${DISTRIBUTION:?DISTRIBUTION is required}"
: "${GH_TOKEN:?GH_TOKEN is required}" "${GITHUB_REPOSITORY:?GITHUB_REPOSITORY is required}"

work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

removed=()
while IFS= read -r p; do
  [[ -z "$p" || "$p" == staging ]] && continue
  f="${work}/${p}.json"
  aws s3 cp "s3://${BUCKET}/${p}/meta.json" "$f" --only-show-errors 2>/dev/null || continue
  pr="$(jq -r '.pr // ""' "$f")"
  [[ "$pr" =~ ^[0-9]+$ ]] || continue

  # An API error (rate limit, outage) keeps the preview: deletion needs a
  # positive answer.
  state="$(curl -fsS -H "Authorization: Bearer ${GH_TOKEN}" -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/${GITHUB_REPOSITORY}/pulls/${pr}" | jq -r '.state // ""')" || continue
  [[ "$state" == closed ]] || continue

  echo "Pull request #${pr} is closed: removing preview '${p}'."
  aws s3 rm "s3://${BUCKET}/${p}/" --recursive --only-show-errors
  removed+=("/${p}/*")
done < <(aws s3 ls "s3://${BUCKET}/" | awk '/ PRE /{print $2}' | sed 's#/##')

if ((${#removed[@]} > 0)); then
  aws cloudfront create-invalidation --distribution-id "${DISTRIBUTION}" --paths "${removed[@]}" >/dev/null
else
  echo "No stale preview."
fi
