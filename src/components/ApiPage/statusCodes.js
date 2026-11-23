/**
 * HTTP status codes of the API reference: reason phrases, class (2xx…) for
 * the colors, and what each code means for the user of the Centreon APIs.
 * Used by the responses of the endpoint pages (src/theme/StatusCodes) and by
 * the error list of the "Get started" pages (ApiStatusList).
 */
import { translate } from '@docusaurus/Translate';

export const REASONS = {
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

export const statusClass = (code) => {
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
    text: translate({ id: 'api.page.status.500.text', message: 'An unexpected error occurred on the server. If it persists, check the Centreon logs or contact support.' }),
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

export function isGeneric(code, description) {
  const text = (description ?? '').trim().replace(/[.\s]+$/, '');
  if (text === '') {
    return true;
  }
  return text.toLowerCase() === (REASONS[code] ?? '').toLowerCase() || GENERIC.test(text);
}

// Title and explanation of a code, or of its class for the other codes.
export function meaningOf(code) {
  return (MEANINGS[code] ?? FALLBACKS[statusClass(code)])();
}
