// Trims the generated search index for PR previews only, to keep each file
// comfortably under Cloudflare Pages' 25 MiB per-file limit. Runs after the
// preview build (see .github/workflows/rspress-pr-preview.yml); staging and
// production keep the full index. Truncates each page's `content` (the bulk of
// the index) so search still works for the start of every page.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIR = join('doc_build', 'static');
const MAX_CONTENT = Number(process.env.SEARCH_MAX_CONTENT || 12000);

let total = 0;
for (const file of readdirSync(DIR)) {
  if (!/^search_index.*\.json$/.test(file)) continue;
  const path = join(DIR, file);
  const before = statSync(path).size;
  const data = JSON.parse(readFileSync(path, 'utf8'));
  for (const entry of data) {
    if (typeof entry.content === 'string' && entry.content.length > MAX_CONTENT) {
      entry.content = entry.content.slice(0, MAX_CONTENT);
    }
  }
  writeFileSync(path, JSON.stringify(data));
  const after = statSync(path).size;
  total++;
  console.log(`  ${file}: ${(before / 1048576).toFixed(2)} -> ${(after / 1048576).toFixed(2)} MiB`);
}
console.log(`  trimmed ${total} search index file(s) (MAX_CONTENT=${MAX_CONTENT})`);
