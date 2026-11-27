/**
 * Base URL of the request panel (swizzled from docusaurus-theme-openapi-docs).
 *
 * Changes from the original:
 * - no drop-down list of server URLs when the spec has only one: it showed
 *   the raw URL template ({protocol}://{server}…) and read as a setting;
 * - the resulting URL is shown while editing;
 * - a "port" variable only takes digits, from 1 to 65535;
 * - an "Edit" button that is always visible (see api-reference.css).
 */
import React, { useState } from 'react';
import { translate } from '@docusaurus/Translate';
import FloatingButton from '@theme/ApiExplorer/FloatingButton';
import FormItem from '@theme/ApiExplorer/FormItem';
import FormSelect from '@theme/ApiExplorer/FormSelect';
import FormTextInput from '@theme/ApiExplorer/FormTextInput';
import { useTypedDispatch, useTypedSelector } from '@theme/ApiItem/hooks';
import { setServer, setServerVariable } from '@theme-original/ApiExplorer/Server/slice';

function resolveUrl(server) {
  let url = server.url.replace(/\/$/, '');
  for (const [name, variable] of Object.entries(server.variables ?? {})) {
    url = url.replace(`{${name}}`, variable.default ?? '');
  }
  return url;
}

function portError(port) {
  if (port === '') {
    return 'Enter a port.';
  }
  const value = Number(port);
  return value >= 1 && value <= 65535 ? null : 'The port is a number from 1 to 65535.';
}

export default function Server({ labelId }) {
  const [isEditing, setIsEditing] = useState(false);
  const value = useTypedSelector((state) => state.server.value);
  const options = useTypedSelector((state) => state.server.options);
  const dispatch = useTypedDispatch();

  if (options.length <= 0) {
    return null;
  }
  if (!value || !options.find((server) => server.url === value.url)) {
    dispatch(setServer(JSON.stringify(options[0])));
  }
  if (!value) {
    return null;
  }

  const url = resolveUrl(value);
  const setVariable = (key, variableValue) =>
    dispatch(setServerVariable(JSON.stringify({ key, value: variableValue })));

  if (!isEditing) {
    return (
      <FloatingButton
        onClick={() => setIsEditing(true)}
        label={translate({ id: 'theme.openapi.server.editButton', message: 'Edit' })}>
        <FormItem>
          <span className="openapi-explorer__server-url" title={url}>
            {url}
          </span>
        </FormItem>
      </FloatingButton>
    );
  }

  return (
    <div className="openapi-explorer__server-container">
      <FloatingButton
        onClick={() => setIsEditing(false)}
        label={translate({ id: 'theme.openapi.server.hideButton', message: 'Hide' })}>
        <FormItem>
          {options.length > 1 ? (
            <FormSelect
              ariaLabelledBy={labelId}
              options={options.map((server) => server.url)}
              onChange={(e) =>
                dispatch(setServer(JSON.stringify(options.find((server) => server.url === e.target.value))))
              }
              value={value.url}
            />
          ) : null}
          <span className="openapi-explorer__server-url api-server-preview" title={url}>
            {url}
          </span>
          {value.description ? (
            <small className="openapi-explorer__server-description">{value.description}</small>
          ) : null}
        </FormItem>
      </FloatingButton>
      {Object.entries(value.variables ?? {}).map(([key, variable]) => {
        if (variable.enum !== undefined) {
          return (
            <FormItem key={key}>
              <FormSelect
                label={key}
                options={variable.enum}
                onChange={(e) => setVariable(key, e.target.value)}
                value={variable.default}
              />
            </FormItem>
          );
        }
        if (key === 'port') {
          const error = portError(variable.default ?? '');
          return (
            <FormItem key={key}>
              <FormTextInput
                label={key}
                placeholder="443"
                onChange={(e) => setVariable(key, e.target.value.replace(/\D/g, '').slice(0, 5))}
                value={variable.default}
              />
              {error ? <div className="openapi-explorer__input-error">{error}</div> : null}
            </FormItem>
          );
        }
        return (
          <FormItem key={key}>
            <FormTextInput
              label={key}
              placeholder={variable.description ?? key}
              onChange={(e) => setVariable(key, e.target.value.trim())}
              value={variable.default}
            />
          </FormItem>
        );
      })}
    </div>
  );
}
