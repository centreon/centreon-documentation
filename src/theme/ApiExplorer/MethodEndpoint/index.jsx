/**
 * Method and path of an endpoint (wrapped from docusaurus-theme-openapi-docs).
 *
 * At the top of an endpoint page (context "endpoint"): the method, the path
 * from the root of the server (prefix: the path of the base URL, such as
 * /centreon/api/latest, set by tools/api-reference/generate.mjs) with its
 * parameters highlighted, and a button to copy it. The original component
 * shows the whole URL, which a narrow column cuts.
 */
import React, { useState } from 'react';
import { translate } from '@docusaurus/Translate';
import OriginalMethodEndpoint from '@theme-original/ApiExplorer/MethodEndpoint';

const METHOD_CLASSES = {
  get: 'get',
  post: 'post',
  put: 'put',
  patch: 'patch',
  delete: 'delete',
  head: 'head',
};

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button type="button" className="api-copy" onClick={copy}>
      {copied
        ? translate({ id: 'api.page.copied', message: 'Copied' })
        : translate({ id: 'api.page.copy', message: 'Copy' })}
    </button>
  );
}

export default function MethodEndpoint(props) {
  const { method, path, context, prefix } = props;
  if (context !== 'endpoint' || prefix === undefined || method === 'event') {
    return <OriginalMethodEndpoint {...props} />;
  }
  const fullPath = `${prefix}${path}`;
  // "/hosts/{host_id}" → ["/hosts/", "{host_id}", ""]
  const parts = fullPath.split(/(\{[^}]+\})/);
  return (
    <div className="api-endpoint">
      <span className={`api-endpoint__method api-method-badge api-method-badge--${METHOD_CLASSES[method] ?? 'other'}`}>
        {method.toUpperCase()}
      </span>
      <code className="api-endpoint__path">
        {parts.map((part, index) =>
          part.startsWith('{') ? (
            <span key={index} className="api-endpoint__param">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </code>
      <CopyButton text={fullPath} />
    </div>
  );
}
