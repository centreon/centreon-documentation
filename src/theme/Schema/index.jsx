/**
 * Schema of a request or response body (wrapper of the component of
 * docusaurus-theme-openapi-docs).
 *
 * When the body has a single property (an object such as "graph"), it is
 * expanded: closed, it would leave the body nearly empty. The theme opens an
 * object when its depth is lower than the expansion level (0 by default, so
 * none): the root is rendered one level higher, which opens its property
 * only. The nested objects stay closed, and the expand / collapse controls of
 * the theme still work. Only the root goes through this wrapper: the theme
 * renders the nested levels with its own component.
 */
import React from 'react';
import Schema from '@theme-original/Schema';
import { SchemaDepthProvider, useSchemaDepth } from '@theme/SchemaExpansion';

// Properties of the root, merged from allOf as the theme does.
function rootProperties(schema) {
  const parts = [schema, ...(schema?.allOf ?? [])];
  return new Set(parts.flatMap((part) => Object.keys(part?.properties ?? {})));
}

export default function SchemaWrapper(props) {
  const depth = useSchemaDepth();
  if (rootProperties(props.schema).size !== 1) {
    return <Schema {...props} />;
  }
  return (
    <SchemaDepthProvider depth={depth - 1}>
      <Schema {...props} />
    </SchemaDepthProvider>
  );
}
