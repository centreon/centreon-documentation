/**
 * The "search" parameter of the Centreon Web API, which every list endpoint
 * describes with the same long text (operators, aggregators and examples in
 * a Markdown that does not render well: lists and code blocks run into the
 * text). Shown instead: a lead with the simple example, then the syntax in a
 * collapsible block: aggregators, operators in a table, and the examples as
 * code blocks. The operators and examples are read from the description, so
 * that each version shows its own (26.10 adds $rg).
 *
 * The block opens with a button, not a <details>: the parameters are in a
 * Details of Docusaurus, which handles the clicks on any <summary> inside it,
 * and would close the whole section instead.
 */
import React, { useId, useState } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';

const SEARCH_DESCRIPTION = /^\s*Retrieve only data matching the defined search value/;

export const isSearchHelp = (param) => param?.name === 'search' && SEARCH_DESCRIPTION.test(param?.description ?? '');

// One translate() call per operator, so that each can be extracted.
const OPERATORS = {
  $eq: () => translate({ id: 'api.page.search.op.eq', message: 'equal to' }),
  $neq: () => translate({ id: 'api.page.search.op.neq', message: 'not equal to' }),
  $lt: () => translate({ id: 'api.page.search.op.lt', message: 'less than' }),
  $le: () => translate({ id: 'api.page.search.op.le', message: 'less than or equal to' }),
  $gt: () => translate({ id: 'api.page.search.op.gt', message: 'greater than' }),
  $ge: () => translate({ id: 'api.page.search.op.ge', message: 'greater than or equal to' }),
  $lk: () => translate({ id: 'api.page.search.op.lk', message: 'like (% is a wildcard)' }),
  $nk: () => translate({ id: 'api.page.search.op.nk', message: 'not like (% is a wildcard)' }),
  $in: () => translate({ id: 'api.page.search.op.in', message: 'in a list of values' }),
  $ni: () => translate({ id: 'api.page.search.op.ni', message: 'not in a list of values' }),
  $rg: () => translate({ id: 'api.page.search.op.rg', message: 'matches a regular expression' }),
};

// Operators listed by the description ("`$eq` → equal"), in its order.
function operatorsOf(description) {
  return [...description.matchAll(/`(\$\w+)`\s*→\s*([^\n]+)/g)].map(([, code, meaning]) => ({
    code,
    meaning: OPERATORS[code]?.() ?? meaning.trim(),
  }));
}

// Code blocks of the description over several lines, without the indent of
// the Markdown list they are in: the examples without nested aggregators,
// then the ones with.
function examplesOf(rawDescription) {
  // The simple example is a code block on one line (``` search={…} ```): out
  // first, or its closing fence would open a block.
  const description = rawDescription.replace(/```[^\n]*?```/g, '');
  const blocks = (text) =>
    [...text.matchAll(/```[^\S\n]*\n([\s\S]*?)\n[^\S\n]*```/g)].map(([, code]) => {
      const lines = code.split('\n');
      const indent = Math.min(...lines.filter((line) => line.trim()).map((line) => line.match(/^ */)[0].length));
      return lines.map((line) => line.slice(indent)).join('\n');
    });
  const nestedAt = description.search(/Example with nested aggregators/i);
  return nestedAt === -1
    ? { flat: blocks(description), nested: [] }
    : { flat: blocks(description.slice(0, nestedAt)), nested: blocks(description.slice(nestedAt)) };
}

export default function SearchHelp({ description }) {
  const operators = operatorsOf(description);
  const { flat, nested } = examplesOf(description);
  const warnsAboutAnd = /incompatible values/i.test(description);
  const [open, setOpen] = useState(false);
  const bodyId = useId();
  return (
    <div className="api-search">
      <p className="api-search__lead">
        <Translate id="api.page.search.lead">
          Returns only the data that matches a JSON expression: a property and its value, or conditions combined with
          operators.
        </Translate>
      </p>
      <code className="api-search__simple">{'search={"host.name":"Central"}'}</code>

      <button
        type="button"
        className="api-search__toggle"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={(event) => {
          event.stopPropagation();
          setOpen((value) => !value);
        }}>
        <Translate id="api.page.search.syntax">Search syntax</Translate>
      </button>

      <div className="api-search__body" id={bodyId} hidden={!open}>
        <h4 className="api-search__title">
          <Translate id="api.page.search.aggregators">Combine conditions</Translate>
        </h4>
        <dl className="api-search__ops">
          <div>
            <dt>
              <code>$and</code>
            </dt>
            <dd>
              <Translate id="api.page.search.and">all the conditions are true</Translate>
            </dd>
          </div>
          <div>
            <dt>
              <code>$or</code>
            </dt>
            <dd>
              <Translate id="api.page.search.or">at least one condition is true</Translate>
            </dd>
          </div>
        </dl>
        {warnsAboutAnd && (
          <p className="api-search__note">
            <Translate id="api.page.search.andNote">
              $and on the same property with two different values always returns nothing: use $or to get the
              resources that match either value.
            </Translate>
          </p>
        )}

        {operators.length > 0 && (
          <>
            <h4 className="api-search__title">
              <Translate id="api.page.search.operators">Compare values</Translate>
            </h4>
            <dl className="api-search__ops">
              {operators.map(({ code, meaning }) => (
                <div key={code}>
                  <dt>
                    <code>{code}</code>
                  </dt>
                  <dd>{meaning}</dd>
                </div>
              ))}
            </dl>
          </>
        )}

        {flat.length + nested.length > 0 && (
          <>
            <h4 className="api-search__title">
              <Translate id="api.page.search.examples">Examples</Translate>
            </h4>
            {flat.map((code) => (
              <CodeBlock key={code} language="json">
                {code}
              </CodeBlock>
            ))}
            {nested.length > 0 && (
              <p className="api-search__caption">
                <Translate id="api.page.search.nested">With nested aggregators:</Translate>
              </p>
            )}
            {nested.map((code) => (
              <CodeBlock key={code} language="json">
                {code}
              </CodeBlock>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
