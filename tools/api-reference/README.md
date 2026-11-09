# API reference

The API reference (`/api/`) is generated from OpenAPI specifications with
[docusaurus-plugin-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs):
one page per endpoint, with its parameters, request and response schemas and
code samples, in the same site, navigation and search as the rest of the
documentation.

| API                            | Spec                               | Pages                     |
|--------------------------------|------------------------------------|---------------------------|
| Centreon Web REST API 26.10    | `openapi/centreon-web-26.10.json`  | `/api/centreon-web/`      |
| Centreon Web REST API 25.10    | `openapi/centreon-web-25.10.json`  | `/api/centreon-web/25.10/`|
| Centreon Web REST API (Cloud)  | `openapi/centreon-web-cloud.json`  | `/api/centreon-cloud/`    |
| Centreon MAP API 26.10         | `openapi/centreon-map-26.10.json`  | `/api/centreon-map/`      |

- APIs are declared in `docusaurus.config.js` (plugin `docusaurus-plugin-openapi-docs`).
- `tools/api-reference/generate.mjs` (`pnpm gen-api`) generates the pages in
  `api/<name>/` before `pnpm start` and `pnpm build`. They are not committed.
- `api/index.mdx` is the landing page (cards from
  `src/components/ApiCatalog`), `api/sidebarsApi.js` gives one sidebar per API
  and version, with a back link and a version switch.
- The **Get started** page of each API is written by hand in
  `tools/api-reference/intros/` and replaces the description of the spec
  (title, description and body are set by `generate.mjs`).
- Styles: `src/css/api-reference.css` (method badges of the sidebar, version
  switch). Order of the code samples: `languageTabs` in `docusaurus.config.js`.
- `API=0` builds the site without the API reference.

POC: the specs were taken from https://docs-api.centreon.com, where they are
already bundled, then fixed:

- servers: real URL patterns (`https://your-centreon-server:443/centreon/api/latest`,
  Cloud instance URL, MAP server on port 9443) instead of `localhost` and a
  wrong `v25.10` default in the 26.10 spec;
- Cloud: HTML notice replaced with an admonition (it broke the MDX build);
- MAP: unresolved `$ref` removed, readable tags (`Maps`, `Views`…) instead of
  Java controller names, and a summary for every endpoint.

The target is to take the specs from the product repositories at each release
tag, and to make these fixes there.
