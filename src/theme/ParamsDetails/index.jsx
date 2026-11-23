/**
 * Parameters of an endpoint (swizzled from docusaurus-theme-openapi-docs).
 *
 * Changes from the original:
 * - a title per type of parameters (path, query, header, cookie) that
 *   translates as a whole ("Paramètres de chemin");
 * - the "search" parameter of the list endpoints: its long description is
 *   replaced with SearchHelp (src/components/ApiPage/SearchHelp.jsx), in a
 *   row with the same classes as the others.
 * The rows are laid out in src/css/api-reference.css.
 */
import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { translate } from '@docusaurus/Translate';
import Details from '@theme/Details';
import ParamsItem from '@theme/ParamsItem';
import SkeletonLoader from '@theme/SkeletonLoader';
import SearchHelp, { isSearchHelp } from '@site/src/components/ApiPage/SearchHelp';

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
            <ul>
              {params.map((param, index) =>
                isSearchHelp(param) ? (
                  <div key={index} className="openapi-params__list-item">
                    <span className="openapi-schema__container">
                      <strong className="openapi-schema__property">{param.name}</strong>
                      <span className="openapi-schema__type"> {param.schema?.type ?? 'string'}</span>
                    </span>
                    <SearchHelp description={param.description} />
                  </div>
                ) : (
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
                ),
              )}
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
