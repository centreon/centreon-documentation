/**
 * Parameters of an endpoint (swizzled from docusaurus-theme-openapi-docs).
 *
 * Changes from the original: each list of parameters (path, query, header,
 * cookie) is a table, with a row of column titles (Name, Type, Description;
 * the rows are laid out in src/css/api-reference.css), and a title per type
 * that translates as a whole ("Paramètres de chemin").
 */
import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Translate, { translate } from '@docusaurus/Translate';
import Details from '@theme/Details';
import ParamsItem from '@theme/ParamsItem';
import SkeletonLoader from '@theme/SkeletonLoader';

const TYPES = ['path', 'query', 'header', 'cookie'];

// One title per type, so that each can be translated as a whole.
const TITLES = {
  path: () => translate({ id: 'api.page.params.path', message: 'Path parameters' }),
  query: () => translate({ id: 'api.page.params.query', message: 'Query parameters' }),
  header: () => translate({ id: 'api.page.params.header', message: 'Header parameters' }),
  cookie: () => translate({ id: 'api.page.params.cookie', message: 'Cookie parameters' }),
};

function ParamsDetailsComponent({ parameters }) {
  return (
    <>
      {TYPES.map((type) => {
        const params = parameters?.filter((param) => param?.in === type);
        if (!params || params.length === 0) {
          return null;
        }
        return (
          <Details
            key={type}
            className="openapi-markdown__details api-params"
            style={{ marginBottom: '1rem' }}
            data-collapsed={false}
            open
            summary={
              <summary>
                <h3 className="openapi-markdown__details-summary-header-params">
                  {TITLES[type]()}
                </h3>
              </summary>
            }>
            <div className="api-table-head" aria-hidden="true">
              <span>
                <Translate id="api.page.table.name">Name</Translate>
              </span>
              <span>
                <Translate id="api.page.table.type">Type</Translate>
              </span>
              <span>
                <Translate id="api.page.table.description">Description</Translate>
              </span>
            </div>
            <ul>
              {params.map((param, index) => (
                <ParamsItem
                  key={index}
                  className="paramsItem"
                  param={{
                    ...param,
                    enumDescriptions: Object.entries(
                      param?.schema?.['x-enumDescriptions'] ?? param?.schema?.items?.['x-enumDescriptions'] ?? {},
                    ),
                  }}
                />
              ))}
            </ul>
          </Details>
        );
      })}
    </>
  );
}

export default function ParamsDetails(props) {
  return (
    <BrowserOnly fallback={<SkeletonLoader size="sm" />}>{() => <ParamsDetailsComponent {...props} />}</BrowserOnly>
  );
}
