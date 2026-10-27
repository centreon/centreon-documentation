---
id: traces
title: Centreon Prism — Distributed Tracing (Beta)
---

Centreon Prism extends Centreon Log Management (CLM) to **distributed traces**. It
lets you send OpenTelemetry (OTLP) traces to Centreon, explore them in a trace
explorer, drill into request waterfalls, and jump back and forth between your
traces and your logs.

> **Beta notice.** Prism is in Beta. There is no SLA, interfaces may still change,
> and data retention is not guaranteed across Beta versions. The feature is
> enabled per organization behind the **`Prism`** feature flag; if you don't see
> **Traces (Beta)** in the left navigation, ask your administrator to enable it
> for your organization.

## 1. Concepts

| Term | Meaning |
|---|---|
| **Trace** | The full journey of one request across your services, reconstructed from its spans. Identified by a 32-character lowercase hex `trace_id`. |
| **Span** | A single unit of work within a trace (an HTTP call, a DB query, an internal function). Each span has a `span_id`, an optional `parent_span_id`, a service name, an operation name, a start time, a duration, and a status. |
| **Root span** | The first span of a trace (no parent). The trace list shows **one row per trace**, using its root span. |
| **Operation** | The span name — the logical action a span represents (e.g. `GET /checkout`, `SELECT orders`). |
| **Status** | Shown as **OK** or **Critical**. OK folds in OTel `UNSET`; Critical corresponds to OTel `ERROR`. |
| **Waterfall** | The span tree of a single trace, one span per row, indented by depth, with a duration bar proportional to the total trace duration. |
| **Self time** | A span's own duration minus the time spent in its children — how much time was actually spent *in* that span. |
| **Service** | A logical component that emits spans, identified by the OTel `service.name` resource attribute. |

Prism is built on **OpenTelemetry** end to end — there is no proprietary agent and
no mandatory query language. Traces are stored in Quickwit (the same engine used
for CLM logs), in a dedicated per-organization index, so your trace data is
isolated from other tenants and from your logs.

---

## 2. Sending traces to Prism (ingestion)

Prism accepts standard **OTLP over HTTP**. You point any OpenTelemetry SDK,
Collector, or Grafana Alloy instance at the Prism trace endpoint and authenticate
with your organization's ingestion API key.

### Endpoint

```
POST https://<pulse-ingest-host>/v1/prism/otel/traces
```

- **Protocol:** OTLP. `Content-Type: application/x-protobuf` (recommended) or
  `application/json`.
- **Authentication:** send your ingestion API key in the request header. Prism
  reuses the **same API-key mechanism as CLM** — there is no separate credential
  to manage. The organization is derived from the key; you never pass it in the
  URL for ingestion.
- **Required attribute:** every resource in the payload **must** carry a
  `service.name` attribute. Payloads without it are rejected with HTTP 400.
- **Max body size:** 6 MiB per request.

> The trace ingestion path (`/v1/prism/otel/traces`) is completely separate from
> the CLM log ingestion path. Sending traces has no effect on your logs and vice
> versa.

### Option A — OpenTelemetry SDK (environment variables)

Configure your instrumented application with:

```sh
OTEL_EXPORTER_OTLP_ENDPOINT="https://<pulse-ingest-host>"
OTEL_EXPORTER_OTLP_HEADERS="<your-api-key-header>"
OTEL_EXPORTER_OTLP_TRACES_PROTOCOL="http/protobuf"
OTEL_SERVICE_NAME="my-service"
```

### Option B — OpenTelemetry Collector

Add an OTLP/HTTP exporter that targets Prism and route your `traces` pipeline to
it:

```yaml
exporters:
  otlphttp/prism:
    traces_endpoint: "https://<pulse-ingest-host>/v1/prism/otel/traces"
    headers:
      # your Prism/CLM API-key header
      X-Api-Key: "<your-api-key>"

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlphttp/prism]   # list ALL exporters — the array replaces, it does not append
```

> **Tip:** when you edit an existing Collector config, re-list every exporter you
> want to keep. The Collector *replaces* the exporter list rather than appending
> to it.

### Option C — Grafana Alloy

Configure an `otelcol.exporter.otlphttp` block pointing at the same endpoint with
your API-key header, and wire your tracing pipeline to it.

### Verifying that traces arrive

After you start sending traffic, open **Traces (Beta)** in Centreon, set the time
window to **Last hour**, and search. You should see traces appear within a few
seconds. You can also confirm which services are reporting by opening the
**Services** filter — it lists every service that has emitted spans.

### Local demo environment

To try Prism end to end without instrumenting your own apps, use the
**OpenTelemetry Demo** application as a realistic ~15-service trace source. The
full step-by-step setup (start the local stack, mint an ingestion token, point the
demo Collector at Prism, generate traffic through the demo webshop) is documented
in `docs/prism-demo-environment-runbook.md`.

---

## 3. Exploring traces (the UI)

Open **Traces (Beta)** in the left navigation. The URL is:

```
/organizations/<organization>/explorer/traces
```

### 3.1 Trace Explorer

The Trace Explorer is the main screen. From top to bottom it shows:

1. A **query bar** with a Search button and a filters button.
2. A collapsible **timeline chart**.
3. A **results table** of matching traces.
4. When you click a trace, an **inline split** opens below the table showing the
   waterfall and the span detail panel.

**Results table columns:**

| Column | Content |
|---|---|
| **Trace ID** | First 16 characters of the trace ID (monospace). |
| **Service** | Root span's service, with a color swatch. |
| **Operation** | Root span operation name. |
| **Duration** | Total trace duration in ms, plus a bar scaled against a 5 s reference (red bar for error traces). |
| **Status** | OK or Critical. |
| **Timestamp** | When the trace started. |

- **Sorting:** you can sort by **Duration** and **Timestamp** only. Default sort is
  newest first (Timestamp, descending).
- **Pagination**, column selection, and a **Refresh** button are available on the
  table.
- **Click a row** to open the trace inline (the row stays highlighted); the page
  does not navigate away. The inline panel shows a summary banner — status, total
  duration, span count and service count, a **View all logs for this trace**
  button, and a close (✕) button — above the waterfall.

### 3.2 Filters and search

Click the filters (tune) icon to open the filters popover:

- **Time period** — presets: Last minute, 5 min, 15 min, 30 min, **1 hour
  (default)**, 6 hours, 12 hours, 1 day, 1 week, 1 month, plus a **Customize**
  option for an explicit start/end range.
- **Services** — multi-select; pick one or more services to restrict results
  (combined with OR). Selected services appear as colored chips.
- **Status** — **All / OK / Critical**.

**Query bar.** Above the table you can refine results with a query. Two modes:

- **Builder** — a visual query builder; pick a field, an operator and a value.
  Field names and value suggestions are provided by autocomplete.
- **Editor** — free-text **Lucene / Quickwit** syntax, e.g.:

  ```
  http.status_code:503
  span_name:"GET /checkout" AND service_name:"checkout-service"
  ```

The query is applied only when you press **Enter** or click **Search** (typing
does not refetch on every keystroke). Applying a query resets to page 1.

### 3.3 Timeline chart

A collapsible, full-width **stacked bar chart** ("Trace timeline") above the
table:

- Two series: **OK** (grey) and **Critical** (red). The status filter is *not*
  applied to the chart — it always shows both, so you can see the error ratio at a
  glance.
- **Brush to zoom:** drag across a range to set a custom time window; both the
  chart and the table refetch for that range.

### 3.4 Trace waterfall

When you open a trace, the waterfall renders its full span tree:

- **One span per row**, indented by depth, with expand/collapse chevrons for spans
  that have children.
- Each row shows the service (color swatch + name), the operation name, a
  horizontal **duration bar** whose width is the span's share of the total trace
  duration, and the duration in ms.
- **Error spans** are marked with a red dot and a red left border.
- A **tick axis** marks 0 / 25 / 50 / 75 / 100 % of the total trace duration.
- Collapsed subtrees show an **"N children hidden"** badge.

**Filter spans within a trace.** A search box ("Filter spans by service or
operation…") narrows the waterfall to matching spans. A span is shown if it — or
any of its descendants — matches; ancestors are kept so the hierarchy stays
readable, and matches are shown in bold. A "Showing X / Y spans" counter tells you
how much is filtered.

Click any span row to open its detail panel.

### 3.5 Span detail panel

A side panel with everything about the selected span:

- **Header:** service, operation name, span **kind** (INTERNAL / SERVER / CLIENT /
  PRODUCER / CONSUMER), and a status pill (OK / Critical).
- **Metrics:** **Duration** (and % of the trace), **Self time** (and % of the
  span), and **Start** time.
- **Span ID** and **Trace ID**, each with a copy button.
- Four tabs:
  - **Attributes** — the span's OTel attributes, grouped by semantic convention:
    **HTTP** (`http.*`, `url.*`, `server.*`), **Database** (`db.*`), **RPC**
    (`rpc.*`), **Messaging** (`messaging.*`), **Resource** (resource attributes),
    and **Other**. Long values can be expanded; each value has a copy button.
  - **Events** — span events with a relative `+Nms` timestamp; `exception` events
    are highlighted in red.
  - **Logs** — a **View logs for this span** button (see
    [Correlating traces and logs](#4-correlating-traces-and-logs)).
  - **Links** — span links to other traces, clickable to navigate to the linked
    trace.

---

## 4. Correlating traces and logs

Correlation works in **both directions**.

**From a log to its trace.** In the CLM Log Explorer, any field value that is a
valid 32-character hex `trace_id` becomes a clickable link that opens the
corresponding trace in Prism. (Available when Prism is enabled for the
organization.)

**From a trace to its logs.** Two entry points:

- **View all logs for this trace** (in the trace summary banner and on the trace
  detail page) opens the CLM Log Explorer filtered by `trace_id`, over the trace's
  time window padded by ±60 s for context.
- **View logs for this span** (Span detail panel → Logs tab) opens the Log
  Explorer filtered by both `trace_id` **and** the span's `service_name`.

Navigation happens in the **same tab**, so you keep one working context as you hop
between signals.

---

## 5. Comparing trace groups

Prism can compare two independently-filtered sets of traces — typically a
**before/after a deployment** comparison used as a release gate.

Open the compare screen at:

```
/organizations/<organization>/explorer/traces/compare
```

> This screen is currently reachable **by direct URL** (there is no button to it
> in the explorer yet).

- Define **Group A** and **Group B**, each with its own **time period**,
  **services**, and **status** filters (e.g. Group A = the hour before a deploy,
  Group B = the hour after).
- The comparison table lists **one row per operation** with **p50 / p95 / p99**
  latency for each group, and a **Δp95** chip: a red up-arrow marks a regression,
  a green down-arrow marks an improvement, with the signed percentage. Rows arrive
  **regressions first**.
- A **verdict banner** summarizes the result in plain language (e.g. "Group B:
  *GET /checkout* +18% at p95", or a green banner when nothing regressed).
- A **Regressions only** toggle hides operations that did not get slower.

---

## 6. Permalinks and sharing

Each trace has a stable, shareable URL:

```
/organizations/<organization>/explorer/traces/<traceId>
```

The standalone trace detail page also supports deep-linking to a specific span via
a `?span=<spanId>` query parameter — the URL stays in sync with the span you open,
so copying the URL captures the exact span you're looking at. Paste the link into
a ticket or a chat and the recipient lands on the same trace (and span) — no
screenshots or timestamps to convey.

---

## 7. API reference

All read endpoints are authenticated (JWT or API key, minimum role **user**) and
scoped to an organization via the `{org}` path segment. Trace data is isolated per
organization — a trace ID from another org returns **404 Not Found**.

Base path: `/v1`. Timestamps in **request** parameters are **Unix seconds**;
responses use nanoseconds (`startTimestampNanos`) or milliseconds
(`timestampMillis`, `durationMillis`).

### Ingestion

| Method | Path | Auth | Description |
|---|---|---|---|
| `POST` | `/v1/prism/otel/traces` | API key, role `editor` | OTLP trace ingestion (protobuf or JSON). `service.name` required on every resource. Max 6 MiB. |

### Search — `GET /v1/orgs/{org}/traces/search`

Lists traces (one root span per trace).

| Param | Type | Notes |
|---|---|---|
| `query` | string (≤10 000) | Extra Quickwit query filter, AND-ed (e.g. `http.status_code:503`). |
| `services` | CSV (≤20) | Restrict to these `service_name` values (OR-ed). |
| `status` | `all` \| `ok` \| `error` | `ok` includes OTel UNSET; default `all`. |
| `start`, `end` | Unix seconds | `start > end` → 400. |
| `sortBy` | JSON | Keys `duration` or `timestamp`, dir `ASC`/`DESC`; default `{"timestamp":"DESC"}`. |
| `page`, `limit` | int | Pagination. |

**Response:** `{ results: [{ traceId, serviceName, spanName, durationMillis,
status, startTimestampNanos }], meta: { total, page, limit } }`.

### Services — `GET /v1/orgs/{org}/traces/services`

Returns `{ services: [{ serviceName, spanCount }] }` — the distinct services that
have emitted spans, for the filter dropdown.

### Timeline — `GET /v1/orgs/{org}/traces/timeline`

Params: `query`, `services`, `start`, `end` (default last 1 h), `buckets` (1–500,
default 60). Always splits OK vs ERROR (no `status` param).

**Response:** `{ buckets: [{ timestampMillis, okCount, errorCount }] }`.

### Trace detail — `GET /v1/orgs/{org}/traces/{trace_id}`

`trace_id` must be exactly 32 hex characters. Returns the full trace (up to 5 000
spans), sorted by start time. 404 if the trace does not exist (or belongs to
another org).

**Response:** `{ traceId, rootSpanId, services: [string], durationMillis,
spanCount, status, spans: [{ spanId, parentSpanId?, serviceName, operationName,
kind, startTimestampNanos, durationMillis, status, attributes, resourceAttributes,
events, links }] }`.

### Compare — `POST /v1/orgs/{org}/traces/compare`

Body: `{ groupA, groupB }`, each group `{ query, services, status, start, end }`.

**Response:** `{ operations: [{ operationName, groupA?: { p50, p95, p99, count },
groupB?: { p50, p95, p99, count }, deltaP95Pct? }] }`, sorted regressions-first.

### Field autocomplete (used by the query builder)

| Method | Path | Description |
|---|---|---|
| `GET` | `/v1/orgs/{org}/traces/fields/capabilities` | Available trace/span attribute fields and their capabilities. |
| `GET` | `/v1/orgs/{org}/traces/fields/{field}/terms` | Top values of a field (`filter` prefix, `maxTerms` 1–100). |

---

## 8. Limits and known behavior

- **Storage quota:** default **150 GiB per organization**. Ingestion over quota is
  rejected with **HTTP 403**. When Prism is temporarily under back-pressure
  (message queue full or memory ceiling reached), ingestion returns **HTTP 503**
  with a `Retry-After` header — resend after the indicated delay.
- **Status is a two-way split:** everything that isn't `error` (including OTel
  `UNSET`) is shown as **OK**.
- **The explorer "Critical" status filter checks the trace's root span.** A trace
  whose root span succeeded but which contains a deeper failed span may not be
  caught by the list-level Critical filter; open the trace to see per-span status,
  or query on a span attribute (e.g. `span_status.code:error`).
- **Trace size cap:** a single trace returns at most **5 000 spans**.
- **Sortable columns** in the list are **Duration** and **Timestamp** only.
- **Relative time windows are pinned** to the moment the query first resolved; they
  don't slide forward on refresh — re-apply the preset (or refresh) to move the
  window.
- **Missing traces (404) are expected sometimes:** a trace may have been sampled
  out at the source or aged out of retention. The UI shows a "not found" state
  rather than an error.

### Not yet in Beta

The following are planned but **not available** in the current Beta:

- **Service map / dependency graph** (topology view).
- **Guided reading mode** with anomaly highlighting (the explorer opens in full
  exploration mode).
- **Flamegraph** and **critical-path** views.
- **RED metrics** (rate/errors/duration dashboards) derived from traces.
- **Sampling configuration and per-trace sampling banners** inside Prism.
- **Saved views** and a distribution histogram in the explorer.
- **One-click "compare with yesterday"** (use the [Compare](#5-comparing-trace-groups) screen instead).

---

## 9. Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| **No "Traces (Beta)" in the menu** | The `Prism` feature flag is not enabled for your organization. Ask your administrator. |
| **HTTP 400 on ingestion** | Missing `service.name` on a resource, empty payload, or a `Content-Type` other than protobuf/JSON. |
| **HTTP 401 on ingestion** | Invalid, revoked, or wrong API key. Reissue the key and update your exporter header. |
| **HTTP 403 on ingestion** | Organization storage quota exceeded (default 150 GiB). |
| **HTTP 503 on ingestion** | Temporary back-pressure — honor the `Retry-After` header and resend. |
| **Traces don't appear** | Widen the time window (default is last 1 hour); check the **Services** filter lists your service; confirm your Collector's `traces` pipeline actually routes to the Prism exporter (the exporter list *replaces*, it doesn't append). |
| **"See logs" shows no results** | Your logs must carry the `trace_id` field for correlation to match. Only instrumented services that propagate trace context into their logs will correlate. |
| **A trace link opens "not found"** | The trace was sampled out, has aged out of retention, or belongs to another organization. |

---

*Related product documentation lives under [`docs/`](docs/): the framing note
(`note-cadrage-tracing-beta.md`), the story map (`story-map.md`), user journeys
(`user-journeys.md`), and the demo environment runbook
(`prism-demo-environment-runbook.md`).*
