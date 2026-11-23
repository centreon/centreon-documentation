/**
 * Responses of an endpoint (swizzled from docusaurus-theme-openapi-docs).
 *
 * Change from the original: each tab shows the status code with its reason
 * phrase ("200 OK", "403 Forbidden"), not the code alone.
 */
import React from 'react';
import { translate } from '@docusaurus/Translate';
import ApiTabs from '@theme/ApiTabs';
import Details from '@theme/Details';
import Markdown from '@theme/Markdown';
import ResponseHeaders from '@theme/ResponseHeaders';
import ResponseSchema from '@theme/ResponseSchema';
import TabItem from '@theme/TabItem';

const REASONS = {
  100: 'Continue',
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  204: 'No Content',
  206: 'Partial Content',
  207: 'Multi-Status',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  307: 'Temporary Redirect',
  308: 'Permanent Redirect',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  409: 'Conflict',
  410: 'Gone',
  412: 'Precondition Failed',
  413: 'Payload Too Large',
  415: 'Unsupported Media Type',
  422: 'Unprocessable Entity',
  423: 'Locked',
  429: 'Too Many Requests',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
};

export const statusLabel = (code) => (REASONS[code] ? `${code} ${REASONS[code]}` : code);

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
          <TabItem key={code} label={statusLabel(code)} value={code}>
            <div>
              {response.description && (
                <div className="api-response-description">
                  <Markdown>{response.description}</Markdown>
                </div>
              )}
            </div>
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
