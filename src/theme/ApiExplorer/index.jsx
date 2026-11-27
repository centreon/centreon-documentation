/**
 * Right column of an endpoint page (wrapped from docusaurus-theme-openapi-docs).
 *
 * Adds to the original (authorization, code samples, request and response
 * panels):
 * - "On this page": links to the request and the responses of the page;
 * - an example of the success response, under the code samples (placed with
 *   the "order" of the column, see src/css/api-reference.css).
 */
import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';
import OriginalApiExplorer from '@theme-original/ApiExplorer';
import { sampleResponseFromSchema } from 'docusaurus-plugin-openapi-docs/lib/openapi/createResponseExample';

function OnThisPage({ item }) {
  const hasRequest = (item.parameters?.length ?? 0) > 0 || item.requestBody !== undefined;
  const hasResponses = Object.keys(item.responses ?? {}).length > 0;
  if (!hasRequest && !hasResponses) {
    return null;
  }
  return (
    <nav className="api-on-this-page" aria-label={translate({ id: 'theme.TOCCollapsible.toggleButtonLabel', message: 'On this page' })}>
      <div className="api-on-this-page__title">
        <Translate id="theme.TOCCollapsible.toggleButtonLabel">On this page</Translate>
      </div>
      <ul>
        {hasRequest && (
          <li>
            <a href="#request">
              <Translate id="theme.openapi.request.title">Request</Translate>
            </a>
          </li>
        )}
        {hasResponses && (
          <li>
            <a href="#responses">
              <Translate id="theme.openapi.tabs.responses.label">Responses</Translate>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

// First success response with a JSON body: its example in the spec, else an
// example built from its schema (as the "Example (auto)" tab of the page).
function successExample(item) {
  for (const [code, response] of Object.entries(item.responses ?? {})) {
    if (!code.startsWith('2')) {
      continue;
    }
    const [, media] = Object.entries(response?.content ?? {}).find(([type]) => type.includes('json')) ?? [];
    if (!media) {
      continue;
    }
    let example = media.example ?? Object.values(media.examples ?? {})[0]?.value;
    if (example === undefined && media.schema) {
      try {
        example = sampleResponseFromSchema(media.schema);
      } catch {
        example = undefined;
      }
    }
    if (example !== undefined && example !== null && example !== '') {
      return { code, example };
    }
  }
  return null;
}

function ResponseExample({ item }) {
  const success = successExample(item);
  if (!success) {
    return null;
  }
  const json = typeof success.example === 'string' ? success.example : JSON.stringify(success.example, null, 2);
  return (
    <div className="api-response-example">
      <CodeBlock
        language="json"
        showLineNumbers
        title={translate(
          { id: 'api.page.responseExample', message: 'Response {code} — example' },
          { code: success.code },
        )}>
        {json}
      </CodeBlock>
    </div>
  );
}

export default function ApiExplorer(props) {
  return (
    <>
      <OnThisPage item={props.item} />
      <OriginalApiExplorer {...props} />
      <ResponseExample item={props.item} />
    </>
  );
}
