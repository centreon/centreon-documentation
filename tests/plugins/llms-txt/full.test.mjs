// Tests of the llms-full.txt helpers. Run with: pnpm test

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { formatSize, renderFullFile, sortPages } from '../../../src/plugins/llms-txt/full.js';

const page = (id, permalink = `/docs/${id}`) => ({ doc: { id, permalink } });

describe('sortPages', () => {
  it('puts pages in sidebar order, then the others by permalink', () => {
    const pages = [page('z-orphan'), page('b'), page('a-orphan'), page('a'), page('c')];
    const sorted = sortPages(pages, ['c', 'a', 'b', 'a']);
    assert.deepEqual(
      sorted.map(({ doc }) => doc.id),
      ['c', 'a', 'b', 'a-orphan', 'z-orphan'],
    );
    assert.equal(pages[0].doc.id, 'z-orphan', 'the given array is left as is');
  });
});

describe('renderFullFile', () => {
  it('writes the title, the summary on one line, then each page separated by a blank line', () => {
    const content = renderFullFile({
      title: 'Log Management: full text',
      summary: 'All the pages,\n  in Markdown.',
      pages: [{ markdown: '---\ntitle: "A"\n---\n\n# A\n\nText A.\n' }, { markdown: '---\ntitle: "B"\n---\n\n# B\n' }],
    });
    assert.equal(
      content,
      '# Log Management: full text\n\n> All the pages, in Markdown.\n\n' +
        '---\ntitle: "A"\n---\n\n# A\n\nText A.\n\n---\ntitle: "B"\n---\n\n# B\n',
    );
  });
});

describe('formatSize', () => {
  it('uses kB below a megabyte and MB with one decimal above', () => {
    assert.equal(formatSize(84_000), '84 kB');
    assert.equal(formatSize(200), '1 kB');
    assert.equal(formatSize(2_687_849), '2.7 MB');
    assert.equal(formatSize(999_600), '1.0 MB');
  });

  it('uses French units and decimal comma for French', () => {
    assert.equal(formatSize(84_000, 'fr'), '84 ko');
    assert.equal(formatSize(22_348_341, 'fr'), '22,3 Mo');
  });
});
