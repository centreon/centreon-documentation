/**
 * Blocks of the "Get started" page of each API:
 * - ApiConfiguration: the address of the reader's platform and their API
 *   token, saved where the request panel of the endpoint pages reads them;
 * - ApiDownload: the OpenAPI file, to import into Postman, Bruno…
 */
import React, { useEffect, useId, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Keys of docusaurus-theme-openapi-docs (authPersistence: sessionStorage):
// "server" holds the selected server with its variables, and the name of a
// security scheme holds its credentials ({"apiKey": "…"}).
const SERVER_KEY = 'server';

function readStorage(key) {
  try {
    return JSON.parse(window.sessionStorage.getItem(key) ?? 'null');
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    if (value === null) {
      window.sessionStorage.removeItem(key);
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
    return true;
  } catch {
    return false;
  }
}

// Defaults such as "your-centreon-server" are examples, not values: the
// field starts empty and shows them as a placeholder.
const isExample = (value) => /^your-/.test(value ?? '');

const defaults = (server) =>
  Object.fromEntries(
    Object.entries(server.variables ?? {}).map(([name, variable]) => [
      name,
      isExample(variable.default) ? '' : (variable.default ?? ''),
    ]),
  );

function resolveUrl(server, values) {
  return Object.entries(values).reduce(
    (url, [name, value]) => url.replace(`{${name}}`, value || `<${server.variables[name].default}>`),
    server.url,
  );
}

function fieldError(name, value) {
  if (value.trim() === '') {
    return 'Required.';
  }
  if (name === 'port' && !(Number(value) >= 1 && Number(value) <= 65535)) {
    return 'A number from 1 to 65535.';
  }
  return null;
}

const LABELS = {
  protocol: 'Protocol',
  server: 'Server',
  port: 'Port',
  version: 'API version',
  organization: 'Organization',
  region: 'Region',
  instance: 'Instance',
};

export function ApiConfiguration({ server, auth, tokenLabel = 'API token' }) {
  const id = useId();
  const [values, setValues] = useState(() => defaults(server));
  const [token, setToken] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [status, setStatus] = useState(null);

  // Saved values, read after the first render (sessionStorage only exists in
  // the browser).
  useEffect(() => {
    const saved = readStorage(SERVER_KEY);
    if (saved?.url === server.url) {
      setValues((current) =>
        Object.fromEntries(Object.keys(current).map((name) => [name, saved.variables?.[name]?.default ?? current[name]])),
      );
    }
    setToken(readStorage(auth)?.apiKey ?? '');
  }, [server.url, auth]);

  const errors = Object.fromEntries(Object.entries(values).map(([name, value]) => [name, fieldError(name, value)]));
  const valid = Object.values(errors).every((error) => error === null);

  const save = (event) => {
    event.preventDefault();
    if (!valid) {
      setStatus('invalid');
      return;
    }
    const variables = Object.fromEntries(
      Object.entries(server.variables ?? {}).map(([name, variable]) => [name, { ...variable, default: values[name].trim() }]),
    );
    const saved =
      writeStorage(SERVER_KEY, { ...server, variables }) && writeStorage(auth, token.trim() ? { apiKey: token.trim() } : null);
    setStatus(saved ? 'saved' : 'error');
  };

  const reset = () => {
    writeStorage(SERVER_KEY, null);
    writeStorage(auth, null);
    setValues(defaults(server));
    setToken('');
    setStatus('reset');
  };

  const update = (name, value) => {
    setValues((current) => ({ ...current, [name]: name === 'port' ? value.replace(/\D/g, '').slice(0, 5) : value }));
    setStatus(null);
  };

  return (
    <form className={styles.panel} onSubmit={save} noValidate>
      <div className={styles.fields}>
        {Object.entries(server.variables ?? {}).map(([name, variable]) => (
          <label key={name} className={styles.field} htmlFor={`${id}-${name}`}>
            <span className={styles.label}>{LABELS[name] ?? name}</span>
            {variable.enum ? (
              <select id={`${id}-${name}`} value={values[name]} onChange={(e) => update(name, e.target.value)}>
                {variable.enum.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`${id}-${name}`}
                type="text"
                inputMode={name === 'port' ? 'numeric' : undefined}
                value={values[name]}
                placeholder={variable.default}
                aria-invalid={errors[name] !== null}
                onChange={(e) => update(name, e.target.value)}
                autoComplete="off"
                spellCheck={false}
              />
            )}
            {errors[name] && status === 'invalid' ? <span className={styles.error}>{errors[name]}</span> : null}
          </label>
        ))}
        <label className={`${styles.field} ${styles.wide}`} htmlFor={`${id}-token`}>
          <span className={styles.label}>
            {tokenLabel} <span className={styles.optional}>(optional)</span>
          </span>
          <span className={styles.tokenRow}>
            <input
              id={`${id}-token`}
              type={showToken ? 'text' : 'password'}
              value={token}
              onChange={(e) => {
                setToken(e.target.value);
                setStatus(null);
              }}
              autoComplete="off"
              spellCheck={false}
            />
            <button type="button" className={styles.linkButton} onClick={() => setShowToken(!showToken)}>
              {showToken ? 'Hide' : 'Show'}
            </button>
          </span>
        </label>
      </div>
      <p className={styles.preview}>
        <span className={styles.label}>Base URL</span>
        <code>{resolveUrl(server, values)}</code>
      </p>
      <div className={styles.actions}>
        <button type="submit" className="button button--primary">
          Save
        </button>
        <button type="button" className="button button--secondary" onClick={reset}>
          Reset
        </button>
        <span className={styles.status} role="status">
          {status === 'saved' &&
            'Saved. The request panel and the code samples of every endpoint page now use them, until you close this tab.'}
          {status === 'reset' && 'Back to the default values.'}
          {status === 'invalid' && 'Check the fields in red.'}
          {status === 'error' && 'Your browser does not let this page save them.'}
        </span>
      </div>
      <p className={styles.note}>
        Your token stays in this browser tab: it is never sent anywhere but to your server, and only when you click{' '}
        <strong>Send API Request</strong>.
      </p>
    </form>
  );
}

export function ApiDownload({ spec, name }) {
  const href = useBaseUrl(`/api/specs/${spec}`);
  return (
    <div className={styles.download}>
      <div>
        <strong>Import this API into Postman, Bruno or Insomnia</strong>
        <p>
          Download its OpenAPI definition and import it into your API client, or use it to generate a client in your
          language.
        </p>
      </div>
      <a className="button button--primary" href={href} download={spec} aria-label={`Download the OpenAPI definition of ${name}`}>
        Download OpenAPI (JSON)
      </a>
    </div>
  );
}
