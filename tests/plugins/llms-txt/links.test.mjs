// Tests of the Markdown page URL helpers. Run with: pnpm test

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { createUrlRewriter, markdownPath } from '../../../src/plugins/llms-txt/links.js';

describe('markdownPath', () => {
  it('replaces the trailing slash of a page path with .md', () => {
    assert.equal(markdownPath('/docs/foo/'), '/docs/foo.md');
    assert.equal(markdownPath('/fr/docs/25.10/foo/'), '/fr/docs/25.10/foo.md');
    assert.equal(markdownPath('/docs/foo'), '/docs/foo.md');
  });
});

describe('createUrlRewriter', () => {
  const rewriteUrl = createUrlRewriter(
    new Map([['https://docs.centreon.com/docs/foo/', 'https://docs.centreon.com/docs/foo.md']]),
  );

  it('points a page URL to its Markdown version', () => {
    assert.equal(rewriteUrl('https://docs.centreon.com/docs/foo/'), 'https://docs.centreon.com/docs/foo.md');
  });

  it('accepts a page URL without its trailing slash', () => {
    assert.equal(rewriteUrl('https://docs.centreon.com/docs/foo'), 'https://docs.centreon.com/docs/foo.md');
  });

  it('keeps the anchor', () => {
    assert.equal(rewriteUrl('https://docs.centreon.com/docs/foo/#setup'), 'https://docs.centreon.com/docs/foo.md#setup');
  });

  it('returns other URLs as is', () => {
    assert.equal(rewriteUrl('https://docs.centreon.com/docs/bar/'), 'https://docs.centreon.com/docs/bar/');
    assert.equal(rewriteUrl('https://example.com/'), 'https://example.com/');
  });
});
