// Tests of the root llms.txt template rendering. Run with: pnpm test

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';

import { createPageFinder, renderTemplate } from '../../../src/plugins/llms-txt/editorial.js';

const pageLine = (path, label) => {
  if (path !== 'docs/api/') {
    throw new Error(`no page at ${path}`);
  }
  return `- [${label ?? 'API'}](https://docs.centreon.com/docs/api/): About the API.`;
};

const context = (overrides = {}) => ({
  values: { version: '26.10' },
  pageLine,
  indexes: '',
  warn: () => {},
  ...overrides,
});

// Most cases are about other features: they get an empty {{indexes}} at the end.
const render = (template, overrides) => renderTemplate(`${template}\n{{indexes}}`, context(overrides));

describe('renderTemplate', () => {
  it('replaces the placeholders', () => {
    assert.equal(render('# Docs\n\nVersion {version}.'), '# Docs\n\nVersion 26.10.\n');
  });

  it('keeps a placeholder unavailable in this build, with a warning', () => {
    const warnings = [];
    const markdown = render('{connectorCount}+ connectors', {
      values: { connectorCount: null },
      warn: (message) => warnings.push(message),
    });
    assert.equal(markdown, '{connectorCount}+ connectors\n');
    assert.match(warnings[0], /\{connectorCount\} is unavailable/);
  });

  it('turns a page directive into its link line, with an optional label', () => {
    assert.equal(
      render('{{page docs/api/}}\n{{ page docs/api/ | REST API }}'),
      '- [API](https://docs.centreon.com/docs/api/): About the API.\n' +
        '- [REST API](https://docs.centreon.com/docs/api/): About the API.\n',
    );
  });

  it('drops the line of a page that pageLine leaves out', () => {
    assert.equal(render('- first\n{{page cloud/x/}}\n- last', { pageLine: () => null }), '- first\n- last\n');
  });

  it('inserts the indexes', () => {
    assert.equal(
      renderTemplate('# Docs\n\n{{indexes}}\n\n## Optional', context({ indexes: '## Indexes' })),
      '# Docs\n\n## Indexes\n\n## Optional\n',
    );
  });

  it('requires exactly one indexes directive', () => {
    assert.throws(() => renderTemplate('# Docs', context()), /exactly once, found 0/);
    assert.throws(() => renderTemplate('{{indexes}}\n{{indexes}}', context()), /exactly once, found 2/);
  });

  it('removes comments, without splitting a list or leaving runs of blank lines', () => {
    assert.equal(
      render('<!-- notes -->\n# Docs\n\n- one\n<!--\n  about two\n-->\n- two <!-- inline -->\n\n<!-- a -->\n\n\nEnd'),
      '# Docs\n\n- one\n- two\n\nEnd\n',
    );
  });

  it('keeps the text after a comment that opens a line', () => {
    assert.equal(
      render('<!-- note --> Keep this text.\n\n<!-- later -->\nEnd'),
      'Keep this text.\n\nEnd\n',
    );
    assert.equal(render('<!--\nmulti\n--> Keep me\n{{page docs/api/}}\n<!-- x -->\nEnd'), 'Keep me\n- [API](https://docs.centreon.com/docs/api/): About the API.\nEnd\n');
  });

  it('fails on an unclosed comment', () => {
    assert.throws(() => render('# T\n<!-- unclosed'), /unclosed or stray/);
  });

  it('accepts Windows line endings', () => {
    assert.equal(render('# Docs\r\n\r\n- one\r\n<!-- note -->\r\n- two'), '# Docs\n\n- one\n- two\n');
  });

  it('fails on an unknown placeholder', () => {
    assert.throws(() => render('Version {verison}.', { source: 'root.en.md' }), /root\.en\.md: unknown placeholder \{verison\}/);
  });

  it('fails on an unknown directive', () => {
    assert.throws(() => render('{{pages docs}}'), /unknown directive/);
  });

  it('fails on a directive that is not alone on its line', () => {
    assert.throws(() => render('See {{page docs/api/}}'), /alone on its line/);
  });

  it('fails on a page directive without a path, or an indexes directive with one', () => {
    assert.throws(() => render('{{page}}'), /needs a path/);
    assert.throws(() => render('{{indexes docs}}'), /takes no argument/);
  });

  it('passes the error of an unknown page through', () => {
    assert.throws(() => render('{{page docs/gone/}}'), /no page at docs\/gone\//);
  });
});

describe('createPageFinder', () => {
  const doc = (permalink, unlisted = false) => ({ permalink, unlisted, title: permalink });
  const instances = (baseUrl) => ({
    default: {
      loadedVersions: [
        { path: `${baseUrl}docs`, docs: [doc(`${baseUrl}docs/api/`), doc(`${baseUrl}docs/hidden/`, true)] },
        { path: `${baseUrl}docs/25.10`, docs: [doc(`${baseUrl}docs/25.10/api/`)] },
      ],
    },
    logmanagement: { loadedVersions: [{ path: `${baseUrl}logmanagement`, docs: [doc(`${baseUrl}logmanagement/intro`)] }] },
  });

  it('finds a page of the locale from its path, trailing slash or not', () => {
    const find = createPageFinder(instances('/fr/'), '/fr/');
    assert.equal(find('docs/api/').permalink, '/fr/docs/api/');
    assert.equal(find('docs/api').permalink, '/fr/docs/api/');
    assert.equal(find('docs/25.10/api/').permalink, '/fr/docs/25.10/api/');
    assert.equal(find('logmanagement/intro/').permalink, '/fr/logmanagement/intro');
  });

  it('throws on a missing or unlisted page of a loaded instance', () => {
    const find = createPageFinder(instances('/'), '/');
    assert.throws(() => find('docs/gone/'), /no listed page at \/docs\/gone/);
    assert.throws(() => find('docs/hidden/'), /no listed page/);
  });

  it('returns null, with a warning, for a page of an instance not in this build', () => {
    const warnings = [];
    const find = createPageFinder(instances('/'), '/', (message) => warnings.push(message));
    assert.equal(find('cloud/getting-started/'), null);
    assert.match(warnings[0], /not in this build/);
  });
});

describe('editorial templates', () => {
  for (const locale of ['en', 'fr']) {
    it(`renders root.${locale}.md with every placeholder known`, async () => {
      const template = await readFile(new URL(`../../../src/plugins/llms-txt/editorial/root.${locale}.md`, import.meta.url), 'utf8');
      const paths = [];
      const rendered = renderTemplate(template, {
        values: { version: '26.10', siteUrl: 'https://docs.centreon.com/', connectorCount: '700' },
        pageLine: (path) => {
          paths.push(path);
          return `- [Page](https://docs.centreon.com/${path})`;
        },
        indexes: '## Indexes',
      });
      assert.match(rendered, /^# /);
      assert.match(rendered, /\n## Optional\n[^#]*$/, 'Optional is the last section');
      assert.doesNotMatch(rendered, /<!--|\{\{|\{\w+\}/);
      assert.ok(paths.length > 0);
    });
  }
});
