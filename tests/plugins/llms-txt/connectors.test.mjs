// Tests of the Monitoring Connectors helpers. Run with: pnpm test

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { connectorCategories, isProcedure } from '../../../src/plugins/llms-txt/connectors.js';

const PROCEDURES = 'integrations/plugin-packs/procedures/';
const doc = (id, title, unlisted = false) => ({ id, title, unlisted });
const category = (label, link, items) => ({ type: 'category', label, link, items });
const docItem = (id) => ({ type: 'doc', id });
const generatedIndex = (slug) => ({ type: 'generated-index', permalink: `/pp/category/${slug}` });

describe('isProcedure', () => {
  it('tells connector procedures from the other pages', () => {
    assert.equal(isProcedure(doc(`${PROCEDURES}aws-ec2`)), true);
    assert.equal(isProcedure(doc('integrations/plugin-packs/getting-started/introduction')), false);
  });
});

describe('connectorCategories', () => {
  const version = {
    docs: [
      doc('integrations/plugin-packs/getting-started/introduction', 'Introduction'),
      doc(`${PROCEDURES}aws-ec2`, 'Amazon EC2'),
      doc(`${PROCEDURES}aws-s3`, 'Amazon S3'),
      doc(`${PROCEDURES}azure-vm`, 'Azure VM'),
      doc(`${PROCEDURES}old`, 'Old connector', true),
      doc(`${PROCEDURES}mysql`, 'MySQL'),
    ],
    sidebars: {
      pp: [
        category('Getting started', { type: 'doc', id: 'integrations/plugin-packs/getting-started/introduction' }, [
          category('How-to guides', generatedIndex('how-to'), []),
        ]),
        category('Cloud', generatedIndex('cloud'), [
          category('AWS', undefined, [docItem(`${PROCEDURES}aws-ec2`), docItem(`${PROCEDURES}aws-s3`)]),
          docItem(`${PROCEDURES}azure-vm`),
          docItem(`${PROCEDURES}old`),
        ]),
        category('Empty', generatedIndex('empty'), [docItem(`${PROCEDURES}missing`)]),
        docItem(`${PROCEDURES}mysql`),
        category('Database', generatedIndex('database'), [docItem(`${PROCEDURES}mysql`)]),
      ],
    },
  };

  it('lists the top-level generated-index categories with the titles of their listed procedures, in sidebar order', () => {
    assert.deepEqual(connectorCategories(version), [
      { label: 'Cloud', permalink: '/pp/category/cloud', titles: ['Amazon EC2', 'Amazon S3', 'Azure VM'] },
      { label: 'Database', permalink: '/pp/category/database', titles: ['MySQL'] },
    ]);
  });
});
