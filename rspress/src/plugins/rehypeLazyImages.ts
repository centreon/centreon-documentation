// Lazy-load content images, like Docusaurus does for Markdown images. Without
// it, React preloads every image of the page in the SSG <head>.
interface Node {
  type: string;
  tagName?: string;
  name?: string;
  properties?: Record<string, unknown>;
  attributes?: { type: string; name: string; value?: unknown }[];
  children?: Node[];
}

function setJsxAttribute(node: Node, name: string, value: string): void {
  const attributes = (node.attributes ??= []);
  if (!attributes.some((attribute) => attribute.name === name)) {
    attributes.push({ type: 'mdxJsxAttribute', name, value });
  }
}

function visit(node: Node): void {
  if (node.type === 'element' && node.tagName === 'img') {
    node.properties = { loading: 'lazy', decoding: 'async', ...node.properties };
  } else if ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name === 'img') {
    setJsxAttribute(node, 'loading', 'lazy');
    setJsxAttribute(node, 'decoding', 'async');
  }
  node.children?.forEach(visit);
}

export function rehypeLazyImages() {
  return (tree: Node) => visit(tree);
}
