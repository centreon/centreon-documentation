// Tests of the HTML to Markdown conversion. Fixtures follow the markup of a
// Docusaurus 3.10 build (minified, unquoted attributes): refresh them when a
// Docusaurus upgrade changes it. Run with: pnpm test

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { createMarkdownConverter, frontMatter } from '../../../src/plugins/llms-txt/markdown.mjs';

const PAGE_URL = 'https://docs.centreon.com/docs/admin/page/';
const converter = createMarkdownConverter();

/** Wraps a doc body in a minimal Docusaurus page. */
const page = (body) =>
  '<html><head><title>Page</title></head><body><nav class=navbar>Navbar text</nav>' +
  '<main class=docMainContainer><article><div class="theme-doc-markdown markdown">' +
  body +
  '</div><footer class=theme-doc-footer>Edit this page</footer></article></main>' +
  '<footer class=footer>Site footer</footer></body></html>';

const convert = (body, options = {}) => converter.convert(page(body), { pageUrl: PAGE_URL, ...options });

const codeBlock = (language, lines) =>
  `<div class=codeBlockContainer><pre tabindex=0 class="prism-code ${language ? `language-${language}` : ''}">` +
  `<code class=codeBlockLines>${lines.map((line) => `<div class=token-line><span class="token plain">${line}</span><br/></div>`).join('')}</code>` +
  '</pre><button type=button aria-label="Copy code">Copy</button></div>';

const tabs = (items) =>
  '<div class="tabs-container tabList"><ul role=tablist aria-orientation=horizontal class=tabs>' +
  items.map(([label]) => `<li role=tab class=tabs__item>${label}`).join('') +
  '</ul><div class=margin-top--md>' +
  items.map(([, content], index) => `<div role=tabpanel class=tabItem${index ? ' hidden' : ''}>${content}</div>`).join('') +
  '</div></div>';

describe('doc body', () => {
  it('keeps only the doc body', async () => {
    const markdown = await convert('<header><h1>Title</h1></header><p>Body text.</p>');
    assert.equal(markdown, '# Title\n\nBody text.\n');
  });

  it('throws when the page has no doc body', async () => {
    await assert.rejects(converter.convert('<main><p>No body</p></main>', { pageUrl: PAGE_URL }), /No doc body/);
  });

  it('drops heading anchors', async () => {
    const markdown = await convert('<h2 id=intro>Intro<a href=#intro class=hash-link aria-label="Direct link">\u200b</a></h2>');
    assert.equal(markdown, '## Intro\n');
  });
});

describe('tabs', () => {
  it('outputs every panel, hidden ones included, under its label', async () => {
    const markdown = await convert(tabs([['RHEL 9', '<p>dnf update</p>'], ['Debian 13', '<p>apt update</p>']]));
    assert.equal(markdown, '**RHEL 9**\n\ndnf update\n\n**Debian 13**\n\napt update\n');
  });

  it('keeps the labels of nested tabs on their own panels', async () => {
    const inner = tabs([['dnf', '<p>A</p>'], ['yum', '<p>B</p>']]);
    const markdown = await convert(tabs([['Outer 1', inner], ['Outer 2', '<p>C</p>']]));
    assert.equal(markdown, '**Outer 1**\n\n**dnf**\n\nA\n\n**yum**\n\nB\n\n**Outer 2**\n\nC\n');
  });

  it('numbers panels that have no label', async () => {
    const html = tabs([['Only label', '<p>A</p>']]).replace('</div></div>', '</div><div role=tabpanel><p>B</p></div></div></div>');
    assert.match(await convert(html), /\*\*Tab 2\*\*\n\nB/);
  });
});

describe('code blocks', () => {
  it('keeps the language and one line per token line, without the copy button', async () => {
    const markdown = await convert(codeBlock('shell', ['dnf update', 'dnf install centreon']));
    assert.equal(markdown, '```shell\ndnf update\ndnf install centreon\n```\n');
  });

  it('uses a bare fence without language', async () => {
    assert.equal(await convert(codeBlock('', ['plain'])), '```\nplain\n```\n');
  });

  it('uses a longer fence when the code holds one', async () => {
    assert.match(await convert(codeBlock('md', ['```', 'nested'])), /^````md\n```\nnested\n````\n$/);
  });
});

describe('admonitions and details', () => {
  const admonition = (inner) =>
    '<div class="theme-admonition theme-admonition-warning admonition_x alert alert--warning">' +
    '<div class=admonitionHeading_x><span class=admonitionIcon_x><svg viewBox="0 0 16 16"><path d=M0 /></svg></span>warning</div>' +
    inner +
    '</div>';

  it('outputs a blockquote with the capitalized title', async () => {
    const markdown = await convert(admonition('<div class=admonitionContent_x><p>Back up first.</p></div>'));
    assert.equal(markdown, '> **Warning:**\n>\n> Back up first.\n');
  });

  it('keeps the content when its wrapper class is unknown', async () => {
    const markdown = await convert(admonition('<div class=renamedContent><p>Back up first.</p></div>'));
    assert.equal(markdown, '> **Warning:**\n>\n> Back up first.\n');
  });

  it('keeps a localized heading rather than the type', async () => {
    const markdown = await convert(
      '<div class="theme-admonition theme-admonition-warning alert"><div class=admonitionHeading_x>attention</div>' +
        '<div class=admonitionContent_x><p>Sauvegardez.</p></div></div>',
    );
    assert.equal(markdown, '> **Attention:**\n>\n> Sauvegardez.\n');
  });

  it('takes the title from the admonition type when the heading class is unknown', async () => {
    const markdown = await convert(
      '<div class="theme-admonition theme-admonition-danger alert"><div class=renamedHeading></div>' +
        '<div class=admonitionContent_x><p>Data loss.</p></div></div>',
    );
    assert.equal(markdown, '> **Danger:**\n>\n> Data loss.\n');
  });

  it('turns details into a bold summary followed by the content', async () => {
    const markdown = await convert('<details class=details><summary>More</summary><div><p>Hidden text.</p></div></details>');
    assert.equal(markdown, '**More**\n\nHidden text.\n');
  });
});

describe('doc card lists', () => {
  it('outputs a list of links with their description', async () => {
    const card = (href, title, description) =>
      `<article class="docCardListItem_x col"><a class="card padding--lg" href=${href}><h2 class=cardTitle title="${title}">${title}</h2>` +
      (description ? `<p class=cardDescription>${description}</p>` : '') +
      '</a></article>';
    const markdown = await convert(
      `<section class=row>${card('/docs/a/', 'First', 'About A')}${card('/docs/b/', 'Second')}</section><p>After the cards.</p>`,
    );
    assert.equal(
      markdown,
      '- [First](https://docs.centreon.com/docs/a/): About A\n- [Second](https://docs.centreon.com/docs/b/)\n\nAfter the cards.\n',
    );
  });
});

describe('tables', () => {
  it('does not pad cells to the column width', async () => {
    const markdown = await convert('<table><thead><tr><th>A<th>B<tbody><tr><td>a very long cell<td>b</table>');
    assert.equal(markdown, '| A | B |\n| - | - |\n| a very long cell | b |\n');
  });

  it('keeps lists and code of a cell on its row', async () => {
    const markdown = await convert(
      '<table><thead><tr><th>Setting<th>Command<tbody><tr><td><p>Keys:</p><ul><li><strong>Private</strong>: path<li>CA</ul>' +
        `<td>${codeBlock('shell', ['ls -l', 'pwd'])}</table>`,
    );
    assert.equal(
      markdown,
      '| Setting | Command |\n| - | - |\n| Keys:<br>- **Private**: path<br>- CA | `ls -l`<br>`pwd` |\n',
    );
  });

  it('turns line breaks inside inline code of a cell into spaces', async () => {
    const markdown = await convert('<table><thead><tr><th>A<tbody><tr><td><code>a<br>b</code> and x<br>y</table>');
    assert.equal(markdown, '| A |\n| - |\n| `a b` and x<br>y |\n');
  });

  it('keeps the line breaks written in a cell', async () => {
    const markdown = await convert('<table><thead><tr><th>A<tbody><tr><td>8.4<br/>8.0 until <strong>2026<br/>end</strong></table>');
    assert.equal(markdown, '| A |\n| - |\n| 8.4<br>8.0 until **2026<br>end** |\n');
  });

  it('puts a single line break between blocks separated by whitespace', async () => {
    const markdown = await convert('<table><thead><tr><th>A<tbody><tr><td><ul><li>one</ul>   <p>two</p>\n<p>three</p></table>');
    assert.equal(markdown, '| A |\n| - |\n| - one<br>two<br>three |\n');
  });

  it('numbers ordered lists and escapes pipes', async () => {
    const markdown = await convert(
      `<table><thead><tr><th>A<th>B<tbody><tr><td><ol><li>one<li>two</ol><td>${codeBlock('shell', ['ps aux | grep x'])}</table>`,
    );
    assert.equal(markdown, '| A | B |\n| - | - |\n| 1. one<br>2. two | `ps aux \\| grep x` |\n');
  });
});

describe('links and media', () => {
  it('resolves relative links against the page URL', async () => {
    assert.equal(await convert('<p><a href=../other/>Other</a></p>'), '[Other](https://docs.centreon.com/docs/admin/other/)\n');
  });

  it('keeps in-page anchors', async () => {
    assert.equal(await convert('<p><a href=#step-2>Step 2</a></p>'), '[Step 2](#step-2)\n');
  });

  it('passes absolute link targets to rewriteUrl', async () => {
    const rewriteUrl = (url) => url.replace('/docs/b/', '/docs/b.md');
    assert.equal(
      await convert('<p><a href=/docs/b/#part>B</a></p>', { rewriteUrl }),
      '[B](https://docs.centreon.com/docs/b.md#part)\n',
    );
  });

  it('keeps an invalid URL as is', async () => {
    assert.equal(await convert('<p><a href="http://[bad">Bad</a></p>'), '[Bad](http://\\[bad)\n');
  });

  it('makes image URLs absolute and leaves a placeholder for inlined images', async () => {
    const markdown = await convert(
      '<p><img alt=Menu src=/assets/images/menu.png><img alt=image src=data:image/png;base64,AAAA><img alt=Logo src=data:image/png;base64,AAAA></p>',
    );
    assert.equal(markdown, '![Menu](https://docs.centreon.com/assets/images/menu.png)\\[image]\\[Logo]\n');
  });

  it('turns embedded content into a link, labeled with its title when there is one', async () => {
    const markdown = await convert(
      '<p>Intro.</p><iframe src=https://demo.example/abc width=100%></iframe>' +
        '<p>See <iframe title="Create a host" src=https://demo.example/def></iframe> below.</p>',
    );
    assert.equal(
      markdown,
      'Intro.\n\n[Embedded content](https://demo.example/abc)\n\nSee [Create a host](https://demo.example/def) below.\n',
    );
  });

  it('turns a video into a link to its source, even with an empty src', async () => {
    const markdown = await convert(
      '<video controls src="" poster=/assets/p.png><source src=/assets/medias/demo.mp4 type=video/mp4></video>',
    );
    assert.equal(markdown, '[Video](https://docs.centreon.com/assets/medias/demo.mp4)\n');
  });

  it('drops HTML comments and keeps line breaks outside tables', async () => {
    assert.equal(await convert('<p>a<!-- -->b</p><p>c<br/>d</p>'), 'ab\n\nc\\\nd\n');
  });
});

describe('frontMatter', () => {
  it('omits empty values and keeps booleans', () => {
    assert.equal(
      frontMatter({ title: 'T', description: '', version: undefined, notes: null, latest: true }),
      '---\ntitle: "T"\nlatest: true\n---\n',
    );
  });

  it('escapes quotes and line breaks', () => {
    assert.equal(frontMatter({ title: 'Say "hi"\nnow' }), '---\ntitle: "Say \\"hi\\"\\nnow"\n---\n');
  });
});
