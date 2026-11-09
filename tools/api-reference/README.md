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
- `api/index.md` is the landing page, `api/sidebarsApi.js` gives one sidebar
  per API and version.
- `API=0` builds the site without the API reference.

POC: the specs were taken from https://docs-api.centreon.com, where they are
already bundled. The target is to take them from the product repositories at
each release tag.
