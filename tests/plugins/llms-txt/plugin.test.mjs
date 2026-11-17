// Tests of the llms-txt plugin on a small built site: Markdown pages and
// llms-full.txt files. Run with: pnpm test

import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, it, mock } from 'node:test';

const require = createRequire(import.meta.url);
const llmsTxtPlugin = require('../../../src/plugins/llms-txt/index.js');

const SITE_URL = 'https://docs.example.com';

const doc = (id, permalink, options = {}) => ({
  id,
  permalink,
  title: `Title ${id}`,
  description: `Description ${id}.`,
  source: `@site/${id}.md`,
  ...options,
});

/**
 * Two docs instances: on-prem, with a latest version and an older one, and
 * Cloud. Paths avoid /docs/, so the key pages of the root template are
 * dropped as "not in this build" instead of failing.
 */
function siteContent() {
  return {
    default: {
      loadedVersions: [
        {
          versionName: '26.10',
          isLast: true,
          path: '/onprem',
          docs: [
            doc('orphan', '/onprem/orphan'),
            doc('a', '/onprem/a'),
            doc('intro', '/onprem/intro'),
            doc('hidden', '/onprem/hidden', { unlisted: true }),
            doc('b', '/onprem/b'),
          ],
          sidebars: {
            main: [
              { type: 'doc', id: 'intro' },
              {
                type: 'category',
                label: 'Install',
                items: [
                  { type: 'doc', id: 'b' },
                  { type: 'doc', id: 'a' },
                ],
              },
            ],
          },
        },
        {
          versionName: '25.10',
          isLast: false,
          path: '/onprem/25.10',
          docs: [doc('old', '/onprem/25.10/old')],
          sidebars: { main: [{ type: 'doc', id: 'old' }] },
        },
      ],
    },
    cloud: {
      loadedVersions: [
        {
          versionName: 'current',
          isLast: true,
          path: '/cloud',
          docs: [doc('cloud-intro', '/cloud/cloud-intro')],
          sidebars: { main: [{ type: 'doc', id: 'cloud-intro' }] },
        },
      ],
    },
  };
}

const html = (title, body) =>
  '<html><body><main><article><div class="theme-doc-markdown markdown">' +
  `<header><h1>${title}</h1></header>${body}</div></article></main></body></html>`;

/** Writes the built HTML page of every doc, listed or not. */
async function writeSite(outDir, content) {
  for (const instance of Object.values(content)) {
    for (const version of instance.loadedVersions) {
      for (const { id, permalink, title } of version.docs) {
        const body = id === 'cloud-intro' ? '<p>See <a href="/onprem/a">page A</a>.</p>' : `<p>Text of ${id}.</p>`;
        await fs.mkdir(path.join(outDir, permalink), { recursive: true });
        await fs.writeFile(path.join(outDir, permalink, 'index.html'), html(title, body));
      }
    }
  }
}

async function build(options) {
  const outDir = await fs.mkdtemp(path.join(os.tmpdir(), 'llms-txt-'));
  const content = siteContent();
  await writeSite(outDir, content);
  const plugin = llmsTxtPlugin(
    {
      siteConfig: { url: SITE_URL },
      i18n: { currentLocale: 'en', locales: ['en'], localeConfigs: { en: { url: SITE_URL, baseUrl: '/' } } },
      baseUrl: '/',
    },
    options,
  );
  await plugin.allContentLoaded({ allContent: { 'docusaurus-plugin-content-docs': content } });
  await plugin.postBuild({ outDir });
  const read = (file) => fs.readFile(path.join(outDir, file), 'utf8');
  const exists = (file) =>
    fs.access(path.join(outDir, file)).then(
      () => true,
      () => false,
    );
  return { outDir, read, exists };
}

/** Returns the page URLs of an llms-full.txt file, in order. */
const pageUrls = (full) => [...full.matchAll(/^<!-- page: (\S+) -->$/gm)].map((match) => match[1]);

describe('llms-txt plugin', () => {
  const outDirs = [];
  beforeEach(() => {
    mock.method(console, 'log', () => {});
    mock.method(console, 'warn', () => {});
  });
  afterEach(async () => {
    mock.restoreAll();
    await Promise.all(outDirs.splice(0).map((dir) => fs.rm(dir, { recursive: true, force: true })));
  });
  const run = async (options) => {
    const site = await build(options);
    outDirs.push(site.outDir);
    return site;
  };

  it('writes the pages of a version in index order, unlisted ones excepted', async () => {
    const { read } = await run({});
    assert.deepEqual(pageUrls(await read('onprem/llms-full.txt')), [
      `${SITE_URL}/onprem/intro`,
      `${SITE_URL}/onprem/b`,
      `${SITE_URL}/onprem/a`,
      `${SITE_URL}/onprem/orphan`,
    ]);
  });

  it('starts each page with its separator, then its front matter', async () => {
    const { read } = await run({});
    const full = await read('cloud/llms-full.txt');
    assert.match(full, /^# Infra Monitoring Cloud: full text\n\n> .+\n\n<!-- page: \S+ -->\n---\n/);
    assert.match(full, /\n<!-- page: https:\/\/docs\.example\.com\/cloud\/cloud-intro -->\n---\ntitle: /);
  });

  it('keeps older on-prem versions out of the root file, even when they are published', async () => {
    const { read } = await run({ onPremVersions: 'all' });
    assert.deepEqual(pageUrls(await read('onprem/25.10/llms-full.txt')), [`${SITE_URL}/onprem/25.10/old`]);
    const rootUrls = pageUrls(await read('llms-full.txt'));
    assert.equal(rootUrls.length, 5);
    assert.ok(rootUrls.includes(`${SITE_URL}/cloud/cloud-intro`));
    assert.ok(!rootUrls.some((url) => url.includes('/25.10/')));
  });

  it('gives the root file the pages of every version file it covers', async () => {
    const { read } = await run({});
    const root = await read('llms-full.txt');
    for (const file of ['onprem/llms-full.txt', 'cloud/llms-full.txt']) {
      const content = await read(file);
      const pages = content.slice(content.indexOf('\n<!-- page: '));
      assert.ok(root.includes(pages), `${file} pages are in the root file`);
    }
  });

  it('links each index and the root llms.txt to their llms-full.txt, with its size', async () => {
    const { read } = await run({});
    const size = Buffer.byteLength(await read('onprem/llms-full.txt'));
    const fullLink = new RegExp(`of ${Math.round(size / 1000)} kB: ${SITE_URL}/onprem/llms-full\\.txt`);
    assert.match(await read('onprem/llms.txt'), fullLink);
    const rootLink = '## Full text\n\n- [Centreon Documentation: full text](https://docs.example.com/llms-full.txt): ';
    assert.ok((await read('llms.txt')).includes(rootLink));
  });

  it('links to Markdown pages only when they are published', async () => {
    const withMarkdown = await run({});
    assert.match(await withMarkdown.read('cloud/llms-full.txt'), /\(https:\/\/docs\.example\.com\/onprem\/a\.md\)/);
    assert.ok(await withMarkdown.exists('onprem/a.md'));

    const withoutMarkdown = await run({ markdown: false });
    const full = await withoutMarkdown.read('cloud/llms-full.txt');
    assert.match(full, /\(https:\/\/docs\.example\.com\/onprem\/a\)/);
    assert.doesNotMatch(full, /\.md\)/);
    assert.ok(!(await withoutMarkdown.exists('onprem/a.md')));
  });

  it('writes no llms-full.txt file or link when the full option is off', async () => {
    const { read, exists } = await run({ full: false });
    assert.ok(!(await exists('llms-full.txt')));
    assert.ok(!(await exists('onprem/llms-full.txt')));
    assert.ok(await exists('onprem/a.md'));
    assert.doesNotMatch(await read('llms.txt'), /llms-full/);
    assert.doesNotMatch(await read('onprem/llms.txt'), /llms-full/);
  });
});
