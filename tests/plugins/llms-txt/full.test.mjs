// Tests of the llms-full.txt helpers. Run with: pnpm test

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { formatSize, renderFullHeader, renderFullPages } from '../../../src/plugins/llms-txt/full.js';

describe('renderFullHeader and renderFullPages', () => {
  it('write the title, the summary on one line, then each page after a blank line and its separator', () => {
    const header = renderFullHeader({ title: 'Log Management: full text', summary: 'All the pages,\n  in Markdown.' });
    const pages = renderFullPages([
      { url: 'https://docs.example.com/a', markdown: '---\ntitle: "A"\n---\n\n# A\n\nText A.\n' },
      { url: 'https://docs.example.com/b', markdown: '---\ntitle: "B"\n---\n\n# B\n' },
    ]);
    assert.equal(
      header + pages,
      '# Log Management: full text\n\n> All the pages, in Markdown.\n\n' +
        '<!-- page: https://docs.example.com/a -->\n---\ntitle: "A"\n---\n\n# A\n\nText A.\n\n' +
        '<!-- page: https://docs.example.com/b -->\n---\ntitle: "B"\n---\n\n# B\n',
    );
  });

  it('render pages that can be appended to the pages already written', () => {
    const a = { url: 'https://docs.example.com/a', markdown: '# A\n' };
    const b = { url: 'https://docs.example.com/b', markdown: '# B\n' };
    assert.equal(renderFullPages([a]) + renderFullPages([b]), renderFullPages([a, b]));
    assert.equal(renderFullPages([]), '');
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
