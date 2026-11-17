/**
 * "Last updated" date of the documentation pages, without the commits that
 * do not change their content.
 *
 * Docusaurus dates each page with its last commit. A mass change (longer
 * descriptions, link fixes…) or a typo fix then dates pages of the same day,
 * on the pages, in the sitemap (lastmod) and in llms.txt. A commit is skipped
 * when:
 * - its pull request has the skip-last-update label (read from the GitHub
 *   API when GITHUB_TOKEN is set), or
 * - its hash is listed in .lastupdate-ignore-revs.
 *
 * Plugged in as a custom Docusaurus VCS (future.experimental_vcs in
 * docusaurus.config.js). It reads the Git history once per build, instead of
 * one git log per page. See README.md. Tests: tests/tools/last-update/.
 */
import { execFile } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { promisify } from 'node:util';

export const IGNORE_FILE = '.lastupdate-ignore-revs';
export const SKIP_LABEL = 'skip-last-update';
const DEFAULT_REPOSITORY = 'centreon/centreon-documentation';

const run = promisify(execFile);

async function git(cwd, ...args) {
  const { stdout } = await run('git', ['-c', 'log.showSignature=false', ...args], {
    cwd,
    encoding: 'utf8',
    maxBuffer: 256 * 1024 * 1024,
  });
  return stdout;
}

/** Commit hashes of .lastupdate-ignore-revs: one per line, # comments. */
export function parseIgnoreFile(text) {
  return text
    .split('\n')
    .map((line) => line.replace(/#.*/, '').trim())
    .filter(Boolean);
}

function readIgnoreFile(root) {
  const file = path.join(root, IGNORE_FILE);
  return fs.existsSync(file) ? parseIgnoreFile(fs.readFileSync(file, 'utf8')) : [];
}

/**
 * Merge commits of the pull requests that have the skip label, or null
 * without a token (local builds: only .lastupdate-ignore-revs applies).
 */
export async function fetchLabeledCommits({
  token = process.env.GITHUB_TOKEN,
  repository = process.env.GITHUB_REPOSITORY || DEFAULT_REPOSITORY,
  fetch = globalThis.fetch,
} = {}) {
  if (!token) return null;
  const query = `query($q: String!, $after: String) {
    search(query: $q, type: ISSUE, first: 100, after: $after) {
      pageInfo { hasNextPage endCursor }
      nodes { ... on PullRequest { mergeCommit { oid } } }
    }
  }`;
  const variables = { q: `repo:${repository} is:pr is:merged label:${SKIP_LABEL}`, after: null };
  const commits = [];
  for (;;) {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) throw new Error(`GitHub API: HTTP ${response.status}`);
    const { data, errors } = await response.json();
    if (errors?.length) throw new Error(`GitHub API: ${errors[0].message}`);
    for (const pr of data.search.nodes) {
      if (pr.mergeCommit?.oid) commits.push(pr.mergeCommit.oid);
    }
    if (!data.search.pageInfo.hasNextPage) return commits;
    variables.after = data.search.pageInfo.endCursor;
  }
}

/**
 * Dates of each file from the output of
 * git log --format=%x00%H %ct %an --name-only (newest first):
 * - lastCommit: its last commit, skipped or not;
 * - lastUpdate: its last commit that is not skipped;
 * - creation: its first commit.
 */
export function parseGitLog(log, skipped = new Set()) {
  const lastCommit = new Map();
  const lastUpdate = new Map();
  const creation = new Map();
  for (const record of log.split('\0').slice(1)) {
    const [header, ...files] = record.split('\n').filter(Boolean);
    const [hash, timestamp, ...author] = header.split(' ');
    const info = { timestamp: Number(timestamp) * 1000, author: author.join(' ') };
    const skip = skipped.has(hash);
    for (const file of files) {
      if (!lastCommit.has(file)) lastCommit.set(file, info);
      if (!skip && !lastUpdate.has(file)) lastUpdate.set(file, info);
      creation.set(file, info);
    }
  }
  return { lastCommit, lastUpdate, creation };
}

async function load(siteDir, fetchLabeled) {
  let root;
  try {
    root = (await git(siteDir, 'rev-parse', '--show-toplevel')).trim();
  } catch {
    console.warn('[last-update] Not in a Git repository: pages have no "last updated" date.');
    return null;
  }

  const skipped = new Set(readIgnoreFile(root));
  try {
    const labeled = await fetchLabeled();
    if (labeled) {
      labeled.forEach((hash) => skipped.add(hash));
      console.info(`[last-update] ${labeled.length} commit(s) skipped through the ${SKIP_LABEL} label.`);
    }
  } catch (error) {
    // fetch() hides the network error in its cause.
    const reason = [error.message, error.cause?.message].filter(Boolean).join(': ');
    console.warn(
      `[last-update] Could not read the pull requests labeled ${SKIP_LABEL} (${reason}): ` +
        `only ${IGNORE_FILE} applies.`,
    );
  }

  const log = await git(root, 'log', '--format=%x00%H %ct %an', '--name-only', '--no-renames', 'HEAD');
  return { root, ...parseGitLog(log, skipped) };
}

/**
 * Docusaurus VCS config: { initialize, getFileCreationInfo,
 * getFileLastUpdateInfo }. fetchLabeled is replaced in tests.
 */
export function createLastUpdateVcs({ fetchLabeled = fetchLabeledCommits } = {}) {
  let loading = null;

  async function lookup(filePath) {
    const data = await loading;
    if (!data) return null;
    const file = path.relative(data.root, filePath).split(path.sep).join('/');
    return { file, data };
  }

  return {
    initialize({ siteDir }) {
      // Called once per locale: read the history only once.
      loading ??= load(siteDir, fetchLabeled);
    },
    async getFileCreationInfo(filePath) {
      const found = await lookup(filePath);
      return found?.data.creation.get(found.file) ?? null;
    },
    async getFileLastUpdateInfo(filePath) {
      const found = await lookup(filePath);
      if (!found) return null;
      const { file, data } = found;
      // A file with only skipped commits (or a shallow clone that cut its
      // older ones) keeps the date of its last commit.
      return data.lastUpdate.get(file) ?? data.lastCommit.get(file) ?? null;
    },
  };
}

export const lastUpdateVcs = createLastUpdateVcs();
