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
  `<div class="${language ? `language-${language} ` : ''}codeBlockContainer_x theme-code-block"><div class=codeBlockContent_x>` +
  `<pre tabindex=0 class="prism-code ${language ? `language-${language}` : ''} codeBlock_x">` +
  `<code class=codeBlockLines_x>${lines.map((line) => `<div class=token-line><span class="token plain">${line}</span><br/></div>`).join('')}</code>` +
  '</pre><div class=buttonGroup_x><button type=button aria-label="Copy code">Copy</button></div></div></div>';

const tabs = (items) =>
  '<div class="theme-tabs-container tabs-container tabList_x"><ul role=tablist aria-orientation=horizontal class=tabs>' +
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

  it('drops form controls such as an embedded search field, but keeps task list checkboxes', async () => {
    const markdown = await convert(
      '<p>Before.</p><div class=search_x><input placeholder=Search aria-label=Search value=""></div>' +
        '<select><option>Choice</option></select><textarea placeholder=Comment></textarea>' +
        '<ul class=contains-task-list><li class=task-list-item><input type=checkbox disabled checked> Done</li></ul>',
    );
    assert.equal(markdown, 'Before.\n\n- [x] Done\n');
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

describe('Mermaid diagrams', () => {
  // src/theme/Mermaid: the build has the source only, the browser adds the SVG.
  const diagram = (rendered = '') =>
    `<figure class=theme-mermaid>${rendered}<pre class="theme-mermaid-source language-mermaid" hidden>` +
    '<code class=language-mermaid>flowchart LR\n  accTitle: Pollers\n  central["Central server"]:::central\n' +
    '  central --&gt; poller1(["Poller 1"]):::poller</code></pre></figure>';
  const fence =
    '```mermaid\nflowchart LR\n  accTitle: Pollers\n  central["Central server"]:::central\n' +
    '  central --> poller1(["Poller 1"]):::poller\n```\n';

  it('outputs the Mermaid source as a mermaid code block', async () => {
    assert.equal(await convert(diagram()), fence);
  });

  it('ignores the drawn diagram', async () => {
    const rendered =
      '<div class="docusaurus-mermaid-container container_x"><svg aria-roledescription=flowchart-v2>' +
      '<g class="node central"><foreignObject><div><span class=nodeLabel><p>Central server</p></span></div></foreignObject></g>' +
      '</svg></div>';
    assert.equal(await convert(diagram(rendered)), fence);
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
      `<article class="docCardListItem_x col"><a class="card padding--lg cardContainer_x theme-doc-card-container" href=${href}>` +
      `<h2 class="text--truncate cardTitle_x theme-doc-card-title" title="${title}">${title}</h2>` +
      (description ? `<p class="text--truncate cardDescription_x theme-doc-card-description">${description}</p>` : '') +
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

describe('stable markers only', () => {
  it('finds tab labels when the tab list is nested deeper in the container', async () => {
    const html = tabs([['A', '<p>a</p>'], ['B', '<p>b</p>']])
      .replace('<ul role=tablist', '<div class=wrapper><ul role=tablist')
      .replace('</ul>', '</ul></div>');
    assert.equal(await convert(html), '**A**\n\na\n\n**B**\n\nb\n');
  });

  it('keeps the lines of a code block without Prism token lines', async () => {
    const html = '<div class="language-yaml theme-code-block"><pre><code>a: 1<br>b: 2</code></pre></div>';
    assert.equal(await convert(html), '```yaml\na: 1\nb: 2\n```\n');
  });

  it('recognizes a card list by its doc cards, whatever its hashed classes', async () => {
    const html =
      '<section class=renamed_y><article class=item_y><a class="card theme-doc-card-container" href=/docs/a/>' +
      '<h2 class="x theme-doc-card-title">A</h2><p class="x theme-doc-card-description">About A</p></a></article></section>';
    assert.equal(await convert(html), '- [A](https://docs.centreon.com/docs/a/): About A\n');
  });

  it('turns a card outside a card list into a paragraph', async () => {
    const html =
      '<div><a class="card theme-doc-card-container" href=/docs/a/><h2 class=theme-doc-card-title>A</h2></a></div><p>After.</p>';
    assert.equal(await convert(html), '[A](https://docs.centreon.com/docs/a/)\n\nAfter.\n');
  });
});
