/**
 * Blocks of the endpoint pages of the API reference, added by
 * tools/api-reference/generate.mjs (styles: src/css/api-reference.css):
 * - ApiBadges: "API reference" and the API with its version, above the title;
 * - ApiCloudNotice: the endpoint behaves differently on Centreon Cloud;
 * - ApiAccess: how to authenticate, and the base URL of the requests;
 * - ApiSearchFields: the properties that search and sort_by accept;
 * - ApiStatusList: status codes with what they mean, for the "Get started"
 *   pages.
 */
import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { useTypedSelector } from '@theme/ApiItem/hooks';
import { meaningOf, statusClass } from './statusCodes';

export function ApiBadges({ api, version }) {
  return (
    <div className="api-badges">
      <span className="api-badge">
        <Translate id="api.page.badge.reference">API reference</Translate>
      </span>
      <span className="api-badge">{version ? `${api} · ${version}` : api}</span>
    </div>
  );
}

export function ApiCloudNotice({ to }) {
  return (
    <div className="api-notice" role="note">
      <svg className="api-notice__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 18a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 18 8.5a4.25 4.25 0 0 1-.5 9.5Z" />
      </svg>
      <p className="api-notice__text">
        <Translate id="api.page.cloudNotice">This endpoint behaves differently on Centreon Cloud.</Translate>
      </p>
      <Link className="api-notice__link" to={to}>
        <Translate id="api.page.cloudNotice.link">Cloud API reference</Translate> →
      </Link>
    </div>
  );
}

function resolveUrl(server) {
  let url = server.url.replace(/\/$/, '');
  for (const [name, variable] of Object.entries(server.variables ?? {})) {
    url = url.replace(`{${name}}`, variable.default ?? '');
  }
  return url;
}

// The base URL set by the reader (request panel, or "Set up this reference"),
// else the one of the spec.
function CurrentBaseUrl({ fallback }) {
  const server = useTypedSelector((state) => state.server.value);
  return server?.url ? resolveUrl(server) : fallback;
}

export function ApiAccess({ auth = [], baseUrl }) {
  const headers = auth.filter((item) => item.header);
  return (
    <div className="api-access">
      <div className="api-access__item">
        <div className="api-access__label">
          <Translate id="api.page.access.auth">Authentication</Translate>
        </div>
        <div className="api-access__value">
          {headers.length === 0 ? (
            <Translate id="api.page.access.none">None</Translate>
          ) : (
            headers.map((item, index) => (
              <React.Fragment key={item.scheme}>
                {index > 0 && (
                  <>
                    {' '}
                    <Translate id="api.page.access.or">or</Translate>{' '}
                  </>
                )}
                <Translate id="api.page.access.header">Header</Translate> <code>{item.header}</code>
                {item.value ? <> ({item.value})</> : null}
                {' — '}
                <Translate id="api.page.access.scheme">scheme</Translate> <strong>{item.scheme}</strong>
              </React.Fragment>
            ))
          )}
        </div>
      </div>
      <div className="api-access__item">
        <div className="api-access__label">
          <Translate id="api.page.access.baseUrl">Base URL</Translate>
        </div>
        <code className="api-access__url">
          <BrowserOnly fallback={baseUrl}>{() => <CurrentBaseUrl fallback={baseUrl} />}</BrowserOnly>
        </code>
      </div>
    </div>
  );
}

export function ApiSearchFields({ fields = [], params = ['search'] }) {
  if (fields.length === 0) {
    return null;
  }
  return (
    <div className="api-fields">
      <div className="api-fields__label">
        {params.length > 1 ? (
          <Translate
            id="api.page.fields.searchSort"
            values={{ search: <code>search</code>, sortBy: <code>sort_by</code> }}>
            {'Properties for {search} and {sortBy}'}
          </Translate>
        ) : (
          <Translate id="api.page.fields.search" values={{ search: <code>search</code> }}>
            {'Properties for {search}'}
          </Translate>
        )}
      </div>
      <ul className="api-fields__list">
        {fields.map((field) => (
          <li key={field}>
            <code>{field}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ApiStatusList({ codes = [] }) {
  return (
    <ul className="api-status-list">
      {codes.map((code) => {
        const meaning = meaningOf(code);
        return (
          <li key={code} className={`api-response-summary api-response-summary--${statusClass(code)}`}>
            <div className="api-response-summary__title">
              <span className="api-response-summary__code">{code}</span>
              <span>{meaning.title}</span>
            </div>
            {meaning.text && <p className="api-response-summary__text">{meaning.text}</p>}
          </li>
        );
      })}
    </ul>
  );
}
