import React from 'react';
import Mermaid from '@theme-original/Mermaid';
// Adds transition() to d3 selections, which Mermaid uses to show node
// tooltips on hover. Mermaid gets it through the d3 package, which declares
// no side effects: the bundler drops it, and hovering a node throws
// "tooltipElem.transition is not a function".
import 'd3-transition';

/**
 * Mermaid diagram, with its source kept in the page.
 *
 * The diagram itself is only drawn in the browser: the static HTML has no
 * trace of it. The Mermaid source is therefore also written, hidden, in a
 * code block, so that the content of the diagram stays readable by tools that
 * read the HTML (search engines, LLMs) and by the llms-txt export, which turns
 * it back into a ```mermaid code block (src/plugins/llms-txt/markdown.mjs).
 */
export default function MermaidWrapper(props) {
  return (
    <figure className="theme-mermaid">
      <Mermaid {...props} />
      <pre className="theme-mermaid-source language-mermaid" hidden>
        <code className="language-mermaid">{props.value}</code>
      </pre>
    </figure>
  );
}
