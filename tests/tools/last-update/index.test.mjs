// Tests of the "last updated" dates of the pages (tools/last-update): the
// skipped commits and the Docusaurus VCS on a small Git repository.
// Run with: pnpm test

import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, it, mock } from 'node:test';

import {
  IGNORE_FILE,
  createLastUpdateVcs,
  fetchLabeledCommits,
  parseGitLog,
  parseIgnoreFile,
} from '../../../tools/last-update/index.mjs';

const DAY = 24 * 3600;
const T0 = 1700000000; // seconds since epoch

describe('parseIgnoreFile', () => {
  it('keeps the hashes and drops comments and blank lines', () => {
    const text = '# header\n\naaa111\n  bbb222  # trailing comment\n#ccc333\n';
    assert.deepEqual(parseIgnoreFile(text), ['aaa111', 'bbb222']);
  });
});

describe('parseGitLog', () => {
  // Newest first, as git log prints it.
  const log = [
    `\0c3 ${T0 + 2 * DAY} Bot Name\n\na.md\nb.md\n`,
    `\0c2 ${T0 + DAY} Jane Doe\n\na.md\n`,
    `\0c1 ${T0} John Doe\n\na.md\nb.md\n`,
  ].join('');

  it('dates each file with its last commit when nothing is skipped', () => {
    const { lastUpdate, lastCommit } = parseGitLog(log);
    assert.equal(lastUpdate.get('a.md').timestamp, (T0 + 2 * DAY) * 1000);
    assert.equal(lastUpdate.get('a.md').author, 'Bot Name');
    assert.deepEqual(lastUpdate, lastCommit);
  });

  it('dates each file with its last commit that is not skipped', () => {
    const { lastUpdate, lastCommit } = parseGitLog(log, new Set(['c3']));
    assert.deepEqual(lastUpdate.get('a.md'), { timestamp: (T0 + DAY) * 1000, author: 'Jane Doe' });
    assert.deepEqual(lastUpdate.get('b.md'), { timestamp: T0 * 1000, author: 'John Doe' });
    assert.equal(lastCommit.get('a.md').timestamp, (T0 + 2 * DAY) * 1000);
  });

  it('gives no update date to a file whose commits are all skipped', () => {
    const { lastUpdate, lastCommit } = parseGitLog(log, new Set(['c3', 'c1']));
    assert.equal(lastUpdate.has('b.md'), false);
    assert.equal(lastCommit.get('b.md').timestamp, (T0 + 2 * DAY) * 1000);
  });

  it('gives the first commit as creation, skipped or not', () => {
    const { creation } = parseGitLog(log, new Set(['c1']));
    assert.deepEqual(creation.get('a.md'), { timestamp: T0 * 1000, author: 'John Doe' });
  });
});

describe('fetchLabeledCommits', () => {
  const page = (oids, endCursor = null) => ({
    ok: true,
    json: async () => ({
      data: {
        search: {
          pageInfo: { hasNextPage: endCursor !== null, endCursor },
          nodes: oids.map((oid) => (oid ? { mergeCommit: { oid } } : { mergeCommit: null })),
        },
      },
    }),
  });

  it('returns null without a token, without calling the API', async () => {
    const fetch = mock.fn();
    assert.equal(await fetchLabeledCommits({ token: '', fetch }), null);
    assert.equal(fetch.mock.callCount(), 0);
  });

  it('reads every page of labeled pull requests', async () => {
    const pages = [page(['m1', null], 'cursor1'), page(['m2'])];
    const fetch = mock.fn(async () => pages.shift());
    const commits = await fetchLabeledCommits({ token: 't0ken', repository: 'org/repo', fetch });

    assert.deepEqual(commits, ['m1', 'm2']);
    assert.equal(fetch.mock.callCount(), 2);
    const [url, init] = fetch.mock.calls[0].arguments;
    assert.equal(url, 'https://api.github.com/graphql');
    assert.equal(init.headers.Authorization, 'Bearer t0ken');
    const first = JSON.parse(init.body).variables;
    assert.equal(first.q, 'repo:org/repo is:pr is:merged label:skip-last-update');
    assert.equal(first.after, null);
    assert.equal(JSON.parse(fetch.mock.calls[1].arguments[1].body).variables.after, 'cursor1');
  });

  it('fails on an HTTP error', async () => {
    const fetch = async () => ({ ok: false, status: 401 });
    await assert.rejects(fetchLabeledCommits({ token: 'x', fetch }), /HTTP 401/);
  });

  it('fails on a GraphQL error', async () => {
    const fetch = async () => ({ ok: true, json: async () => ({ errors: [{ message: 'Bad query' }] }) });
    await assert.rejects(fetchLabeledCommits({ token: 'x', fetch }), /Bad query/);
  });
});

describe('createLastUpdateVcs on a Git repository', () => {
  let repo;
  const commits = {};

  // Independent of the user's Git config: identity, signing, hooks.
  const GIT_CONFIG = [
    'user.name=Test',
    'user.email=test@example.com',
    'commit.gpgsign=false',
    'core.hooksPath=/dev/null',
  ].flatMap((setting) => ['-c', setting]);

  function git(args, env = process.env) {
    return execFileSync('git', [...GIT_CONFIG, ...args], { cwd: repo, encoding: 'utf8', env }).trim();
  }

  async function commit(name, seconds, files) {
    for (const [file, content] of Object.entries(files)) {
      await fs.mkdir(path.dirname(path.join(repo, file)), { recursive: true });
      await fs.writeFile(path.join(repo, file), content);
    }
    git(['add', '.']);
    const date = `@${seconds} +0000`;
    git(['commit', '-q', '-m', name], { ...process.env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date });
    commits[name] = git(['rev-parse', 'HEAD']);
  }

  const page = (file) => path.join(repo, file);
  const date = async (vcs, file) => (await vcs.getFileLastUpdateInfo(page(file)))?.timestamp;

  beforeEach(async () => {
    // realpath: on macOS, the temporary directory is behind a symlink and
    // git prints the resolved path.
    repo = await fs.realpath(await fs.mkdtemp(path.join(os.tmpdir(), 'last-update-')));
    git(['init', '-q']);
    await commit('content', T0, { 'docs/a.md': 'A', 'docs/b.md': 'B' });
    await commit('typo', T0 + DAY, { 'docs/a.md': 'A fixed' });
    await commit('front matter', T0 + 2 * DAY, { 'docs/a.md': '---\nx: 1\n---\nA fixed', 'docs/b.md': 'B!' });
    mock.method(console, 'info', () => {});
    mock.method(console, 'warn', () => {});
  });

  afterEach(async () => {
    mock.restoreAll();
    await fs.rm(repo, { recursive: true, force: true });
  });

  async function vcsWith({ ignored = [], labeled = null } = {}) {
    if (ignored.length) {
      await fs.writeFile(page(IGNORE_FILE), `# comment\n${ignored.join('\n')}\n`);
    }
    const vcs = createLastUpdateVcs({
      fetchLabeled: typeof labeled === 'function' ? labeled : async () => labeled,
    });
    vcs.initialize({ siteDir: repo });
    return vcs;
  }

  it('keeps the date of the last commit when nothing is skipped', async () => {
    const vcs = await vcsWith();
    assert.equal(await date(vcs, 'docs/a.md'), (T0 + 2 * DAY) * 1000);
  });

  it('skips the commits of .lastupdate-ignore-revs', async () => {
    const vcs = await vcsWith({ ignored: [commits['front matter']] });
    assert.equal(await date(vcs, 'docs/a.md'), (T0 + DAY) * 1000);
    assert.equal(await date(vcs, 'docs/b.md'), T0 * 1000);
  });

  it('skips the merge commits of labeled pull requests', async () => {
    const vcs = await vcsWith({ labeled: [commits['front matter'], commits.typo] });
    assert.equal(await date(vcs, 'docs/a.md'), T0 * 1000);
    assert.match(console.info.mock.calls[0].arguments[0], /2 commit\(s\) skipped/);
  });

  it('keeps the last commit date of a page whose commits are all skipped', async () => {
    const vcs = await vcsWith({ labeled: Object.values(commits) });
    assert.equal(await date(vcs, 'docs/b.md'), (T0 + 2 * DAY) * 1000);
  });

  it('falls back to .lastupdate-ignore-revs when the API fails', async () => {
    const error = new TypeError('fetch failed', { cause: new Error('getaddrinfo ENOTFOUND') });
    const vcs = await vcsWith({
      ignored: [commits['front matter']],
      labeled: async () => {
        throw error;
      },
    });
    assert.equal(await date(vcs, 'docs/a.md'), (T0 + DAY) * 1000);
    assert.match(console.warn.mock.calls[0].arguments[0], /fetch failed: getaddrinfo ENOTFOUND/);
  });

  it('reads the history once for every locale', async () => {
    const labeled = mock.fn(async () => null);
    const vcs = await vcsWith({ labeled });
    vcs.initialize({ siteDir: repo });
    await date(vcs, 'docs/a.md');
    assert.equal(labeled.mock.callCount(), 1);
  });

  it('gives the first commit as creation', async () => {
    const vcs = await vcsWith({ ignored: [commits.content] });
    assert.equal((await vcs.getFileCreationInfo(page('docs/a.md'))).timestamp, T0 * 1000);
  });

  it('gives no date to an untracked file', async () => {
    const vcs = await vcsWith();
    assert.equal(await vcs.getFileLastUpdateInfo(page('docs/new.md')), null);
    assert.equal(await vcs.getFileCreationInfo(page('docs/new.md')), null);
  });

  it('gives no date outside a Git repository', async () => {
    const outside = await fs.realpath(await fs.mkdtemp(path.join(os.tmpdir(), 'no-git-')));
    try {
      const vcs = createLastUpdateVcs({ fetchLabeled: async () => null });
      vcs.initialize({ siteDir: outside });
      assert.equal(await vcs.getFileLastUpdateInfo(path.join(outside, 'a.md')), null);
      assert.match(console.warn.mock.calls[0].arguments[0], /Not in a Git repository/);
    } finally {
      await fs.rm(outside, { recursive: true, force: true });
    }
  });
});
