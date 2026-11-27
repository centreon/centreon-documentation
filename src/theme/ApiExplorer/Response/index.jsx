/**
 * Response panel (wrapped from docusaurus-theme-openapi-docs).
 *
 * When a request fails before the server answers (network, CORS, timeout…),
 * the original component drops the error message and shows its placeholder
 * again ("Click the Send API Request button…"), as if nothing had happened.
 * This wrapper shows the error, with the usual causes for a Centreon server.
 */
import React from 'react';
import Admonition from '@theme/Admonition';
import { useTypedSelector } from '@theme/ApiItem/hooks';
import OriginalResponse from '@theme-original/ApiExplorer/Response';

function resolveUrl(server) {
  if (!server?.url) {
    return '';
  }
  let url = server.url;
  for (const [name, variable] of Object.entries(server.variables ?? {})) {
    url = url.replace(`{${name}}`, variable.default ?? '');
  }
  return url;
}

function RequestError({ message, serverUrl }) {
  const mixedContent =
    typeof window !== 'undefined' && window.location.protocol === 'https:' && serverUrl.startsWith('http:');
  return (
    <div className="api-response-error" role="alert">
      <Admonition type="danger" title="The request did not reach your server">
        <p>{message}</p>
        {mixedContent ? (
          <p>
            Your server uses <code>http://</code>, and this page uses <code>https://</code>: your browser blocks the
            request. Use <code>https://</code>, or send the request with the cURL sample below.
          </p>
        ) : (
          <>
            <p>Check that:</p>
            <ul>
              <li>
                the base URL is right (<code>{serverUrl}</code>), and your browser can reach this server;
              </li>
              <li>
                your browser trusts the certificate of the server: open <code>{serverUrl}</code> in a new tab and
                accept the certificate if it is self-signed;
              </li>
              <li>your browser allows this page to access your local network, if it asks.</li>
            </ul>
            <p>You can also send the request with the cURL sample.</p>
          </>
        )}
      </Admonition>
    </div>
  );
}

export default function ResponseWrapper(props) {
  const code = useTypedSelector((state) => state.response.code);
  const response = useTypedSelector((state) => state.response.value);
  const server = useTypedSelector((state) => state.server.value);
  const failed = !code && typeof response === 'string' && response !== '' && response !== 'Fetching...';

  return (
    <div className={failed ? 'api-response--failed' : undefined}>
      <OriginalResponse {...props} />
      {failed ? <RequestError message={response} serverUrl={resolveUrl(server)} /> : null}
    </div>
  );
}
