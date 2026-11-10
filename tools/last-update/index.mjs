/**
 * "Last updated" date of the documentation pages, without the commits that
 * do not change their content.
 *
 * Docusaurus dates each page with its last commit. A mass change (longer
 * descriptions, link fixes…) then dates thousands of pages of the same day,
 * on the pages and in the sitemap (lastmod). Such commits are skipped when:
 * - their hash is listed in .lastupdate-ignore-revs, or
 * - their message contains [skip-last-update] (for example in the title of
 *   a squashed pull request).
 *
 * Used by markdown.parseFrontMatter in docusaurus.config.js: when the last
 * commit of a page is skipped, the page gets the date of its last other
 * commit through the last_update front matter. See README.md.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const IGNORE_FILE = '.lastupdate-ignore-revs';
const SKIP_TAG = '[skip-last-update]';

let dates = null;

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
}

// For each file whose last commit is skipped: the date of its last commit
// that is not.
function load() {
  const result = new Map();
  let root;
  try {
    root = git('rev-parse', '--show-toplevel').trim();
    // Without the full history, the previous commits are unknown: keep the
    // Docusaurus dates.
    if (git('rev-parse', '--is-shallow-repository').trim() === 'true') {
      return { root, result };
    }
  } catch {
    return { root: null, result };
  }

  const ignoreFile = path.join(root, IGNORE_FILE);
  const ignored = new Set(
    fs.existsSync(ignoreFile)
      ? fs
          .readFileSync(ignoreFile, 'utf8')
          .split('\n')
          .map((line) => line.replace(/#.*/, '').trim())
          .filter(Boolean)
      : [],
  );

  // Newest first: "\0<hash> <timestamp> <subject>\n\n<file>\n<file>…"
  const log = git('log', '--format=%x00%H %ct %s', '--name-only', '--no-renames', 'HEAD');
  const skippedFiles = new Set();
  const seen = new Set();
  for (const record of log.split('\0').slice(1)) {
    const [header, ...files] = record.split('\n').filter(Boolean);
    const [hash, timestamp, ...subject] = header.split(' ');
    const skip = ignored.has(hash) || subject.join(' ').includes(SKIP_TAG);
    for (const file of files) {
      if (!seen.has(file)) {
        // Last commit of the file
        seen.add(file);
        if (skip) skippedFiles.add(file);
      } else if (skippedFiles.has(file) && !skip && !result.has(file)) {
        result.set(file, new Date(Number(timestamp) * 1000));
      }
    }
  }
  return { root, result };
}

/**
 * Date of the last change to the content of a file, or undefined when its
 * last commit is not skipped (the Docusaurus date is then right).
 */
export function lastContentUpdate(filePath) {
  dates ??= load();
  if (!dates.root) return undefined;
  return dates.result.get(path.relative(dates.root, filePath).split(path.sep).join('/'));
}
