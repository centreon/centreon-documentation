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

const statusClass = (code) => {
  const family = String(code).charAt(0);
  return ['2', '3', '4', '5'].includes(family) ? `${family}xx` : '2xx';
};

// What each code means, for the user of the API: one translate() call per
// string, so that each can be extracted and translated as a whole.
const MEANINGS = {
  200: () => ({
    title: translate({ id: 'api.page.status.200.title', message: 'Success' }),
    text: translate({ id: 'api.page.status.200.text', message: 'The request succeeded. The response body contains the requested data.' }),
  }),
  201: () => ({
    title: translate({ id: 'api.page.status.201.title', message: 'Resource created' }),
    text: translate({ id: 'api.page.status.201.text', message: 'The resource was created. The response body describes it.' }),
  }),
  202: () => ({
    title: translate({ id: 'api.page.status.202.title', message: 'Request accepted' }),
    text: translate({ id: 'api.page.status.202.text', message: 'The request was accepted and will be processed later.' }),
  }),
  204: () => ({
    title: translate({ id: 'api.page.status.204.title', message: 'Success, no content' }),
    text: translate({ id: 'api.page.status.204.text', message: 'The request succeeded. The response has no body.' }),
  }),
  302: () => ({
    title: translate({ id: 'api.page.status.302.title', message: 'Redirection' }),
    text: translate({ id: 'api.page.status.302.text', message: 'The resource is temporarily at another URL, given in the Location header.' }),
  }),
  304: () => ({
    title: translate({ id: 'api.page.status.304.title', message: 'Not modified' }),
    text: translate({ id: 'api.page.status.304.text', message: 'The resource has not changed since your last request: use the copy you already have.' }),
  }),
  400: () => ({
    title: translate({ id: 'api.page.status.400.title', message: 'Invalid request' }),
    text: translate({
      id: 'api.page.status.400.text',
      message: 'A parameter is missing or malformed, or the body does not match the schema. The response body says what is wrong.',
    }),
  }),
  401: () => ({
    title: translate({ id: 'api.page.status.401.title', message: 'Not authenticated' }),
    text: translate({ id: 'api.page.status.401.text', message: 'The token is missing, invalid or expired. Get a new token and send the request again.' }),
  }),
  403: () => ({
    title: translate({ id: 'api.page.status.403.title', message: 'Access denied' }),
    text: translate({
      id: 'api.page.status.403.text',
      message: 'You are authenticated, but your user does not have the rights (ACL) needed for this action.',
    }),
  }),
  404: () => ({
    title: translate({ id: 'api.page.status.404.title', message: 'Not found' }),
    text: translate({ id: 'api.page.status.404.text', message: 'The resource does not exist, or your user is not allowed to see it.' }),
  }),
  409: () => ({
    title: translate({ id: 'api.page.status.409.title', message: 'Conflict' }),
    text: translate({
      id: 'api.page.status.409.text',
      message: 'The request conflicts with the current state of the resource, for example a name that is already used. The response body gives the details.',
    }),
  }),
  422: () => ({
    title: translate({ id: 'api.page.status.422.title', message: 'Invalid data' }),
    text: translate({
      id: 'api.page.status.422.text',
      message: 'The request is well formed, but its data breaks a business rule. The response body gives the details.',
    }),
  }),
  500: () => ({
    title: translate({ id: 'api.page.status.500.title', message: 'Server error' }),
    text: translate({ id: 'api.page.status.500.text', message: 'An unexpected error occurred on the server. Check the logs of your Centreon server.' }),
  }),
};

const FALLBACKS = {
  '2xx': () => ({ title: translate({ id: 'api.page.status.2xx.title', message: 'Success' }), text: '' }),
  '3xx': () => ({ title: translate({ id: 'api.page.status.3xx.title', message: 'Redirection' }), text: '' }),
  '4xx': () => ({ title: translate({ id: 'api.page.status.4xx.title', message: 'Request rejected' }), text: '' }),
  '5xx': () => ({ title: translate({ id: 'api.page.status.5xx.title', message: 'Server error' }), text: '' }),
};

// A description that only repeats the reason phrase or a generic definition
// of HTTP says nothing more than the title and the explanation.
const GENERIC = /^(ok|successful request|success|not found|indicates that\b|unprocessable (content|entity)\b)/i;

function isGeneric(code, description) {
  const text = (description ?? '').trim().replace(/[.\s]+$/, '');
  if (text === '') {
    return true;
  }
  return text.toLowerCase() === (REASONS[code] ?? '').toLowerCase() || GENERIC.test(text);
}

function ResponseSummary({ code, description }) {
  const family = statusClass(code);
  const meaning = (MEANINGS[code] ?? FALLBACKS[family])();
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
