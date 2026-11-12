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
| Centreon Web REST API 24.10    | `openapi/centreon-web-24.10.json`  | `/api/centreon-web/24.10/`|
| Centreon Web REST API (Cloud)  | `openapi/centreon-web-cloud.json`  | `/api/centreon-cloud/`    |
| Centreon MAP API 26.10         | `openapi/centreon-map-26.10.json`  | `/api/centreon-map/`      |

- APIs are declared in `docusaurus.config.js` (plugin `docusaurus-plugin-openapi-docs`).
- Versions of the Web API: `web-versions.json`, latest first. The config, the
  sidebars, the version switch and the catalog read it: to add a version, add
  its spec as `openapi/centreon-web-<version>.json` and the version to this file.
- `tools/api-reference/generate.mjs` (`pnpm gen-api`) generates the pages in
  `api/<name>/` before `pnpm start` and `pnpm build`, and in `static/api/`:
  the specs to download (`specs/`) and a redirect to `/api/` for each former
  tag page. None of them is committed.
- `api/index.mdx` is the landing page (cards from
  `src/components/ApiCatalog`), `api/sidebarsApi.js` gives one sidebar per API
  and version, with a back link and a version switch.
- The **Get started** page of each API is written by hand in
  `tools/api-reference/intros/` and replaces the description of the spec
  (title, description and body are set by `generate.mjs`).
- The **Get started** page has a form that saves the server and the API token
  of the reader (`src/components/ApiSetup`), in the browser storage that the
  request panel of the endpoint pages reads (sessionStorage).
- Swizzled components (`src/theme/ApiExplorer/`): `Server` (no list of server
  URLs when there is one, resulting URL, port from 1 to 65535) and `Response`
  (shows why a request failed; the original component drops the error).
- Styles: `src/css/api-reference.css` (method badges of the sidebar, version
  switch, parameters in two columns, links to the request and the responses).
  Order of the code samples: `languageTabs` in `docusaurus.config.js`.
- `API=0` builds the site without the API reference.

POC: the specs were taken from https://docs-api.centreon.com, where they are
already bundled, then fixed:

- servers: real URL patterns (`https://your-centreon-server:443/centreon/api/latest`,
  Cloud instance URL, MAP server on port 9443) instead of `localhost` and a
  wrong `v25.10` default in the 26.10 spec;
- Cloud: HTML notice replaced with an admonition (it broke the MDX build);
- MAP: unresolved `$ref` removed, readable tags (`Maps`, `Views`…) instead of
  Java controller names, and a summary for every endpoint; the API token
  (`X-AUTH-TOKEN`) is the first security scheme, as for the other APIs;
- Web and Cloud: the `Cookie` security scheme (`PHPSESSID`) is removed: a
  browser does not send this cookie from another site, so it cannot work from
  this reference, and it added a confusing "Security Scheme" list;
- Web: the `version` server variable is a list (`latest`, `v<version>`);
- Web 24.10: 5 `$ref` with a wrong relative path in the product sources
  (`centreon/doc/API/latest/onPremise/…`) are resolved from the files they
  point to.

The target is to take the specs from the product repositories at each release
tag, and to make these fixes there.
