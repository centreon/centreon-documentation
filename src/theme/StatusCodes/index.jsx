/**
 * Responses of an endpoint (swizzled from docusaurus-theme-openapi-docs).
 *
 * Changes from the original:
 * - each tab shows the status code with its reason phrase ("200 OK",
 *   "403 Forbidden"), not the code alone, and the class of the code
 *   (api-status--2xx…) for its color;
 * - the selected response starts with what it means: a title ("Access
 *   denied") and an explanation in the context of the Centreon APIs. The
 *   description of the spec comes first when it says more than the reason
 *   phrase ("Host or service not found"); generic ones ("OK", "Forbidden",
 *   "Indicates that the server…") are left out.
 * The codes and their meanings: src/components/ApiPage/statusCodes.js.
 */
import React from 'react';
import { translate } from '@docusaurus/Translate';
import { isGeneric, meaningOf, statusClass, statusLabel } from '@site/src/components/ApiPage/statusCodes';
import ApiTabs from '@theme/ApiTabs';
import Details from '@theme/Details';
import Markdown from '@theme/Markdown';
import ResponseHeaders from '@theme/ResponseHeaders';
import ResponseSchema from '@theme/ResponseSchema';
import TabItem from '@theme/TabItem';

function ResponseSummary({ code, description }) {
  const family = statusClass(code);
  const meaning = meaningOf(code);
  const specific = !isGeneric(code, description);
  return (
    <div className={`api-response-summary api-response-summary--${family}`}>
      <div className="api-response-summary__title">
        <span className="api-response-summary__code">{code}</span>
        <span>{meaning.title}</span>
      </div>
      {specific && (
        <div className="api-response-summary__text">
          <Markdown>{description}</Markdown>
        </div>
      )}
      {meaning.text && (
        <p className={`api-response-summary__text${specific ? ' api-response-summary__hint' : ''}`}>{meaning.text}</p>
      )}
    </div>
  );
}

export default function StatusCodes({ label, id, responses }) {
  if (!responses) {
    return null;
  }
  const codes = Object.keys(responses);
  if (codes.length === 0) {
    return null;
  }
  return (
    <ApiTabs label={label} id={id}>
      {codes.map((code) => {
        const response = responses[code];
        return (
          <TabItem
            key={code}
            label={statusLabel(code)}
            value={code}
            attributes={{ className: `api-status--${statusClass(code)}` }}>
            <ResponseSummary code={code} description={response.description} />
            {response.headers && (
              <Details
                className="openapi-markdown__details"
                data-collapsed
                open={false}
                style={{ textAlign: 'left', marginBottom: '1rem' }}
                summary={
                  <summary>
                    <strong>
                      {translate({ id: 'theme.openapi.statusCodes.responseHeaders', message: 'Response Headers' })}
                    </strong>
                  </summary>
                }>
                <ResponseHeaders responseHeaders={response.headers} />
              </Details>
            )}
            <ResponseSchema
              title={translate({ id: 'theme.openapi.statusCodes.schemaTitle', message: 'Schema' })}
              body={{ content: response.content }}
            />
          </TabItem>
        );
      })}
    </ApiTabs>
  );
}
