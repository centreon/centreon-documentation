#!/usr/bin/env bash
# Generates the root page (/) of the dev distribution, listing the previews.
# A preview is a top-level S3 prefix that holds a meta.json (see deploy-dev.yml).
# Prefixes without meta.json are ignored. Each row links to both sites of the
# preview: current versions (staging) and next version, each either built for
# the branch or pointing to the staging branch preview when the branch does not
# change it.
set -euo pipefail
: "${BUCKET:?BUCKET is required}"
REPO_URL="https://github.com/${GITHUB_REPOSITORY:-centreon/centreon-documentation}"

work="$(mktemp -d)"

# site_cell <meta.json> <site> <fallback url>
site_cell() {
  local url status
  url="$(jq -r --arg s "$2" --arg d "$3" '(.sites[$s].url // $d) | @html' "$1")"
  status="$(jq -r --arg s "$2" --arg d "$([ -n "$3" ] && echo built || echo none)" '(.sites[$s].status // $d)' "$1")"
  case "$status" in
    built)  echo "<a href=\"${url}\" target=\"_blank\" rel=\"noopener\">${url}</a>" ;;
    same)   echo "<a class=\"same\" href=\"${url}\" target=\"_blank\" rel=\"noopener\">${url}</a><br><small>unchanged: staging</small>" ;;
    failed) echo "<span class=\"failed\">build failed</span>" ;;
    *)      echo "—" ;;
  esac
}
out="${work}/index.html"

prefixes=()
while IFS= read -r prefix; do
  prefixes+=("$prefix")
done < <(aws s3 ls "s3://${BUCKET}/" | awk '/ PRE /{print $2}' | sed 's#/##')

rows=""
staging_row=""
count=0
next_header="Next version"
for p in "${prefixes[@]:-}"; do
  [ -z "$p" ] && continue
  if aws s3 cp "s3://${BUCKET}/${p}/meta.json" "${work}/${p}.json" --only-show-errors 2>/dev/null; then
    branch="$(jq -r --arg p "$p" '(.branch // $p) | @html' "${work}/${p}.json")"
    commit="$(jq -r '(.commit // "") | @html' "${work}/${p}.json")"
    updated="$(jq -r '(.updated // "") | @html' "${work}/${p}.json")"
    actor="$(jq -r '(.actor // "") | @html' "${work}/${p}.json")"
    pr="$(jq -r '(.pr // "") | @html' "${work}/${p}.json")"
    if [ -n "$pr" ]; then
      pr_cell="<a href=\"${REPO_URL}/pull/${pr}\" target=\"_blank\" rel=\"noopener\">#${pr}</a>"
    else
      pr_cell="—"
    fi
    next_version="$(jq -r '(.sites.next.version // "") | @html' "${work}/${p}.json")"
    staging_cell="$(site_cell "${work}/${p}.json" staging "/${p}/")"
    next_cell="$(site_cell "${work}/${p}.json" next "")"
    [ -n "$next_version" ] && next_header="Next (${next_version})"
    row="<td>${staging_cell}</td><td>${next_cell}</td><td>${pr_cell}</td><td><a href=\"${REPO_URL}/commit/${commit}\" target=\"_blank\" rel=\"noopener\"><code>${commit}</code></a></td><td>${actor}</td><td>${updated}</td>"
    # The staging branch (general staging of the docs) always comes first.
    if [ "$p" = staging ]; then
      staging_row="<tr class=\"staging\"><td><strong>staging</strong><br><small>general staging</small></td>${row}</tr>"
    else
      rows="${rows}<tr><td>${branch}</td>${row}</tr>"
    fi
    count=$((count + 1))
  fi
done

rows="${staging_row}${rows}"
[ "$count" -eq 0 ] && rows='<tr><td colspan="7" class="empty">No preview deployed yet.</td></tr>'

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
  header { background:var(--navy); color:#fff; padding:32px 24px; }
  header h1 { margin:0 0 4px; font-size:20px; }
  header p { margin:0; opacity:.7; font-size:13px; }
  main { max-width:1200px; margin:32px auto; padding:0 24px; overflow-x:auto; }
  table { width:100%; border-collapse:collapse; background:#fff; border:1px solid var(--line); border-radius:10px; overflow:hidden; }
  th, td { text-align:left; padding:12px 16px; border-bottom:1px solid var(--line); font-size:14px; }
  th { background:#eef2f8; font-weight:600; color:var(--navy); }
  tr:last-child td { border-bottom:0; }
  a { color:var(--cyan); text-decoration:none; font-weight:600; }
  a:hover { text-decoration:underline; }
  code { background:#eef2f8; padding:2px 6px; border-radius:4px; font-size:12px; }
  .empty { text-align:center; color:var(--muted); }
  a.same { font-weight:400; }
  small { color:var(--muted); }
  .failed { color:#c0392b; font-weight:600; }
  tr.staging td { background:#f7fbff; }
  footer { max-width:1200px; margin:16px auto; padding:0 24px; font-size:12px; color:var(--muted); }
</style>
</head>
<body>
<header>
  <h1>Previews — Centreon documentation</h1>
  <p>staging and one preview per pull request, deployed on every push: current versions and next version.</p>
</header>
<main>
  <table>
    <thead><tr><th>Branch</th><th>Current versions</th><th>${next_header}</th><th>PR</th><th>Commit</th><th>By</th><th>Updated (UTC)</th></tr></thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</main>
<footer>Generated by GitHub Actions (deploy-dev). Refreshes every 30&nbsp;s.</footer>
</body>
</html>
HTML

aws s3 cp "$out" "s3://${BUCKET}/index.html" \
  --cache-control "public,max-age=0,must-revalidate" \
  --content-type "text/html; charset=utf-8"

echo "Previews page regenerated (${count} preview(s))."
