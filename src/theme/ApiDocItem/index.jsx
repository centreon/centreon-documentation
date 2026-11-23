/**
 * Page component of the OnPrem and Cloud docs (docItemComponent).
 *
 * The pages of the API reference, generated in api/reference/ (see
 * tools/api-reference/), need the page of docusaurus-theme-openapi-docs: it
 * gives them the request panel and its state. Every other page keeps the
 * default page, unchanged: the API page wraps its content in a different
 * layout.
 */
import React from 'react';
import ApiItem from '@theme/ApiItem';
import DocItem from '@theme/DocItem';

export default function ApiDocItem(props) {
  const { frontMatter } = props.content;
  if (frontMatter.api || frontMatter.schema) {
    return <ApiItem {...props} />;
  }
  return <DocItem {...props} />;
}
