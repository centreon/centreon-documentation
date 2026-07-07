// Reduce the generated search index for PR previews only, to stay well under
// Cloudflare Pages' 25 MiB per-file limit (full index is kept for staging and
// production). Runs as a post-build step in .github/workflows/rspress-pr-preview.yml.
//
// Instead of indexing full page bodies, the preview index is built from the
// page headings: the title (H1) plus the table-of-contents entries down to H3
// (sub-sub-titles). Search on previews then matches titles/sections, which is
// what reviewers usually look for, at a fraction of the size.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIR = join('doc_build', 'static');
const MAX_DEPTH = Number(process.env.SEARCH_MAX_HEADING_DEPTH || 3); // H1..H3

let count = 0;
for (const file of readdirSync(DIR)) {
  if (!/^search_index.*\.json$/.test(file)) continue;
  const path = join(DIR, file);
  const before = statSync(path).size;
  const data = JSON.parse(readFileSync(path, 'utf8'));
  for (const entry of data) {
    const headings = Array.isArray(entry.toc)
      ? entry.toc
          .filter((t) => typeof t?.text === 'string' && (t.depth ?? 1) <= MAX_DEPTH)
          .map((t) => t.text)
      : [];
    // Keep the title (H1) plus the in-page headings as the searchable content.
    entry.content = [entry.title, ...headings].filter(Boolean).join('\n');
  }
  writeFileSync(path, JSON.stringify(data));
  const after = statSync(path).size;
  count++;
  console.log(`  ${file}: ${(before / 1048576).toFixed(2)} -> ${(after / 1048576).toFixed(2)} MiB`);
}
console.log(`  rebuilt ${count} preview search index file(s) from headings (depth<=${MAX_DEPTH})`);
