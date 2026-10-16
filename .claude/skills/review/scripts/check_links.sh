#!/usr/bin/env bash
# Validate external URLs by HTTP status only — never downloads the page body.
# This is the token-saving replacement for fetching every linked page's content.
#
# Usage:
#   extract_refs.py DOC.md --urls | bash check_links.sh
#   bash check_links.sh https://a.example https://b.example
#
# Output (tab-separated): STATUS  code  url  [-> final-url-if-redirected]
# STATUS is OK (2xx/3xx) | BROKEN (4xx/5xx) | UNREACHABLE (000, e.g. dead domain).
set -uo pipefail

UA='Mozilla/5.0 (compatible; centreon-doc-review-linkcheck)'
TIMEOUT=15

check() {
  local url="$1" code final
  # HEAD is cheapest; some servers reject it (405/501/000) -> retry with a 1-byte ranged GET.
  code=$(curl -sSIL -A "$UA" --max-time "$TIMEOUT" -o /dev/null -w '%{http_code}' "$url" 2>/dev/null)
  case "$code" in
    000|405|501) code=$(curl -sSL -A "$UA" --max-time "$TIMEOUT" -r 0-0 -o /dev/null -w '%{http_code}' "$url" 2>/dev/null) ;;
  esac
  final=$(curl -sSL -A "$UA" --max-time "$TIMEOUT" -o /dev/null -w '%{url_effective}' "$url" 2>/dev/null)

  local status
  case "$code" in
    2*|3*) status="OK" ;;
    000)   status="UNREACHABLE" ;;
    *)     status="BROKEN" ;;
  esac

  if [ -n "$final" ] && [ "$final" != "$url" ]; then
    printf '%s\t%s\t%s\t-> %s\n' "$status" "$code" "$url" "$final"
  else
    printf '%s\t%s\t%s\n' "$status" "$code" "$url"
  fi
}

if [ "$#" -gt 0 ]; then
  for u in "$@"; do check "$u"; done
else
  # Sequential keeps output readable; for many links, parallelize with:
  #   export -f check UA TIMEOUT ... ; xargs -P4 -I{} bash -c 'check "{}"'
  while IFS= read -r u; do
    [ -n "$u" ] && check "$u"
  done
fi
