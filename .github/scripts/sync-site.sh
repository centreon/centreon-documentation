#!/usr/bin/env bash
# Syncs a built documentation site (both locales) to S3, in several passes:
#
#   assets   hashed assets of both locales (name = content hash): long cache,
#            and --size-only since a known name always holds the same
#            content, so only new assets are uploaded
#   pages    everything else (HTML, sitemap, images under img/...),
#            revalidated on each visit
#   markdown all .md pages, revalidated, with an explicit
#            text/markdown; charset=utf-8: the guessed type may be missing
#            or carry no charset
#   text     all .txt files (robots.txt, llms.txt...), revalidated, with an
#            explicit UTF-8 charset: the guessed bare text/plain can be read
#            as Latin-1
#
# Each pass only deletes the files it covers. The markdown pass runs before
# the text one, so that llms.txt never links to a .md page not uploaded yet.
#
# Usage: sync-site.sh <build-dir> <s3-destination> [kept-path...]
#
#   s3-destination  s3://<bucket>/ or s3://<bucket>/<prefix>/, with the
#                   trailing slash
#   kept-path       destination paths (AWS CLI filter patterns) that no pass
#                   uploads or deletes, such as a site nested in this one
#                   and deployed separately
set -euo pipefail

if (($# < 2)); then
  echo "Usage: $0 <build-dir> <s3-destination> [kept-path...]" >&2
  exit 2
fi
source_dir="$1"
destination="$2"
shift 2

# An empty bucket or prefix would point --delete at a wider part of the
# bucket: s3:///..., s3://<bucket>//... are refused.
if ! [[ "$destination" =~ ^s3://[^/]+/([^/]+/)*$ ]]; then
  echo "Refusing to sync to '${destination}': expected s3://<bucket>/[<prefix>/...]" >&2
  exit 2
fi

kept=()
for path in "$@"; do
  kept+=(--exclude "$path")
done
revalidate=(--cache-control "public,max-age=0,must-revalidate")

aws s3 sync "$source_dir" "$destination" \
  --delete --exclude "*" --include "assets/*" --include "fr/assets/*" --size-only \
  --cache-control "public,max-age=31536000,immutable"

aws s3 sync "$source_dir" "$destination" \
  --delete --exclude "assets/*" --exclude "fr/assets/*" --exclude "*.txt" --exclude "*.md" ${kept[@]+"${kept[@]}"} \
  "${revalidate[@]}"

aws s3 sync "$source_dir" "$destination" \
  --delete --exclude "*" --include "*.md" --exclude "assets/*" --exclude "fr/assets/*" ${kept[@]+"${kept[@]}"} \
  "${revalidate[@]}" --content-type "text/markdown; charset=utf-8"

aws s3 sync "$source_dir" "$destination" \
  --delete --exclude "*" --include "*.txt" --exclude "assets/*" --exclude "fr/assets/*" ${kept[@]+"${kept[@]}"} \
  "${revalidate[@]}" --content-type "text/plain; charset=utf-8"
