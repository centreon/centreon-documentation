#!/usr/bin/env bash
# Generates the root page (/) of the dev distribution: a permanent staging row
# first, then one row per branch preview (a top-level S3 prefix holding a
# meta.json, see deploy-dev.yml). A site built for the branch gets a link,
# anything else a dash.
set -euo pipefail
: "${BUCKET:?BUCKET is required}"
REPO_URL="https://github.com/${GITHUB_REPOSITORY:-centreon/centreon-documentation}"

work="$(mktemp -d)"
out="${work}/index.html"

# link <meta.json> <site> <url>: a link when the site was built, else a dash.
link() {
  if [ "$(jq -r --arg s "$2" '.sites[$s].status // "built"' "$1")" = built ]; then
    echo "<a href=\"$3\" target=\"_blank\" rel=\"noopener\">Open</a>"
  else
    echo "—"
  fi
}

prefixes=()
while IFS= read -r prefix; do
  prefixes+=("$prefix")
done < <(aws s3 ls "s3://${BUCKET}/" | awk '/ PRE /{print $2}' | sed 's#/##')

# row <prefix> <meta.json>
row() {
  local p=$1 f=$2 branch commit actor updated pr pr_cell next_cell commit_cell
  branch="$(jq -r --arg p "$p" '(.branch // $p) | @html' "$f")"
  commit="$(jq -r '(.commit // "") | @html' "$f")"
  actor="$(jq -r '(.actor // "") | @html' "$f")"
  updated="$(jq -r '(.updated // "") | @html' "$f")"
  pr="$(jq -r '(.pr // "") | @html' "$f")"
  pr_cell="—"
  [ -n "$pr" ] && pr_cell="<a href=\"${REPO_URL}/pull/${pr}\" target=\"_blank\" rel=\"noopener\">#${pr}</a>"
  next_cell="—"
  [ -n "$(jq -r '.sites.next.version // ""' "$f")" ] && next_cell="$(link "$f" next "/${p}/next/")"
  commit_cell="—"
  [ -n "$commit" ] && commit_cell="<a href=\"${REPO_URL}/commit/${commit}\" target=\"_blank\" rel=\"noopener\"><code>${commit}</code></a>"
  echo "<tr><td>${branch}</td><td>$(link "$f" staging "/${p}/")</td><td>${next_cell}</td><td>${pr_cell}</td><td>${commit_cell}</td><td>${actor:-—}</td><td>${updated:-—}</td></tr>"
}

# The staging row is always there, even before staging is first deployed.
staging_meta="${work}/staging.json"
aws s3 cp "s3://${BUCKET}/staging/meta.json" "$staging_meta" --only-show-errors 2>/dev/null ||
  echo '{"branch": "staging", "sites": {"next": {"version": "next"}}}' > "$staging_meta"
rows="$(row staging "$staging_meta")"

for p in "${prefixes[@]:-}"; do
  { [ -z "$p" ] || [ "$p" = staging ]; } && continue
  f="${work}/${p}.json"
  aws s3 cp "s3://${BUCKET}/${p}/meta.json" "$f" --only-show-errors 2>/dev/null || continue
  rows="${rows}$(row "$p" "$f")"
done

cat > "$out" <<HTML
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta http-equiv="refresh" content="30">
<title>Previews · Centreon documentation</title>
<style>
  :root { --navy:#0b1f3a; --cyan:#009fdf; --ink:#1a2b45; --bg:#f4f6fa; --line:#e1e7f0; --muted:#8a97ab; }
  * { box-sizing:border-box; }
  body { margin:0; font-family:Inter,system-ui,Arial,sans-serif; background:var(--bg); color:var(--ink); }
  header { background:var(--navy); color:#fff; padding:24px; }
  header h1 { margin:0; font-size:20px; }
  main { max-width:1200px; margin:32px auto; padding:0 24px; overflow-x:auto; }
  table { width:100%; border-collapse:collapse; background:#fff; border:1px solid var(--line); border-radius:10px; overflow:hidden; }
  th, td { text-align:left; padding:12px 16px; border-bottom:1px solid var(--line); font-size:14px; }
  th { background:#eef2f8; font-weight:600; color:var(--navy); }
  tr:last-child td { border-bottom:0; }
  a { color:var(--cyan); text-decoration:none; font-weight:600; }
  a:hover { text-decoration:underline; }
  code { background:#eef2f8; padding:2px 6px; border-radius:4px; font-size:12px; }
</style>
</head>
<body>
<header>
  <h1>Previews — Centreon documentation</h1>
</header>
<main>
  <table>
    <thead><tr><th>Branch</th><th>Current versions</th><th>Next version</th><th>PR</th><th>Commit</th><th>By</th><th>Updated (UTC)</th></tr></thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</main>
</body>
</html>
HTML

aws s3 cp "$out" "s3://${BUCKET}/index.html" \
  --cache-control "public,max-age=0,must-revalidate" \
  --content-type "text/html; charset=utf-8"
