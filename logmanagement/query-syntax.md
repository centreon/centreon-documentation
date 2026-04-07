---
id: query-syntax
title: Query syntax
---

Use queries in the [**Log Explorer** page](explore-analyze.md), in [alert rules](alerts.md) or in [dashboards](dashboards.md) to filter your data and query OpenTelemetry attributes. The attributes you will be able to query will be the ones [retrieved by your OpenTelemetry Collector, as you configured it](./collector/collector.md). See [What does a log entry in OpenTelemetry format look like?](./getting-started/concepts.md#what-does-a-log-entry-in-opentelemetry-format-look-like) for an overview of the main attributes.

In the **Log Explorer** page:

* Type your query, then press **CTRL** + **Enter** to launch the search. <!--autocomplete-->
* Do not include time parameters in your queries: time periods are defined using the list in the top right corner, or using the timeline.

## Examples of simple queries

Select all logs with **syslog** as a [service name](resources/glossary.md#service).

```text
service_name:syslog
```

Select all logs for the **syslog** service, with a [severity number](resources/glossary.md#severity) strictly above 20, i.e. logs with the FATAL severity. Use the boolean operator **AND**.

```text
service_name:syslog AND severity_number:[21 TO *]
```

Select all FATAL logs for the **syslog** service, coming from hosts in a specified IP range. Use the `*` wildcard.

```text
service_name:syslog AND severity_number:[21 TO *] AND host.ip:192.168.1.*
```

Select all FATAL logs for the **syslog** service, coming from hosts in a specified IP range, except 192.168.1.10. Combine the **AND** and **NOT** boolean operators.

```text
service_name:syslog AND severity_number:[21 TO *] AND host.ip:192.168.1.* AND NOT host.ip:"192.168.1.10"
```

In these logs, find logs whose message body includes the word "failed". The syntax is case-sensitive.

```text
service_name:syslog AND severity_number:[21 TO *] AND host.ip:192.168.1.* AND NOT host.ip:"192.168.1.10" AND body.message:*failed*
```

## Querying nested attributes

To query nested data, you simply chain the steps from the root of the document using dots as separators.

In an OpenTelemetry log, some attributes are located at the root of the log, while others are contained within the **attributes** and **resource_attributes** sections.

* Attributes in the **attributes** section relate to the log itself
* Attributes in the **resource_attributes** section relate to the host on which the collector is installed.

To query data contained in these sections, simply chain the steps from the root of the document using dots as separators. In the example below, to filter on the **host.name** attribute, use **resource_attributes.host.name**.

```json
{
  "attributes": {
    "event.id": 16394,
    "event.record.id": 226535,
    "event.task": "0",
    "process.pid": 0
  },
  "body": {
    "message": "La migration de bas niveau hors connexion a réussi."
  },
  "observed_timestamp_nanos": 1763648218788360200,
  "resource_attributes": {
    "event.provider.guid": "{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}",
    "event.provider.name": "Microsoft-Windows-Security-SPP",
    "host.name": "MyLaptop",
    "os.name": "Microsoft Windows 10 Pro",
    "os.type": "windows",
    "os.version": "22H2",
    "service.namespace": "application",
    "service.version": "1.0.0"
  },
  "service_name": "windows-event-log",
  "severity_number": 9,
  "severity_text": "INFO",
  "timestamp_nanos": 1763648218609230600,
  "trace_flags": 0
}
```

## Syntax cheatsheet

### Boolean operators

| Syntax | Description | Example |
|--------|-------------|---------|
| `AND` / `&&` | Both terms must match | `error AND timeout` |
| `OR` / `\|\|` | Either term must match | `warn OR error` |
| `NOT` / `!` / `-` | Term must not match | `NOT debug` / `-debug` |
| *(space)* | Implicit OR between terms | `foo bar` → `foo OR bar` |

### Field queries

| Syntax | Description | Example |
|--------|-------------|---------|
| `field:value` | Match value in a specific field | `level:error` |
| `field:(a OR b)` | Match multiple values in a field | `level:(warn OR error)` |
| `field:*` | Field exists (non-null) | `user_id:*` |

### Phrase & exact match

| Syntax | Description | Example |
|--------|-------------|---------|
| `"..."` | Exact phrase match | `"connection refused"` |
| `"..."~N` | Phrase with slop (word distance) | `"foo bar"~2` |

### Wildcards

| Syntax | Description | Example |
|--------|-------------|---------|
| `*` | Zero or more characters | `time*` → timeout, timer… |
| `?` | Exactly one character | `te?t` → test, text… |

> Wildcards cannot be used at the start of a term (e.g. `*foo` is not supported).

### Ranges

| Syntax | Description | Example |
|--------|-------------|---------|
| `[A TO B]` | Inclusive range | `status:[200 TO 299]` |
| `{A TO B}` | Exclusive range | `duration:{100 TO 500}` |
| `[A TO B}` | Mixed (inclusive start, exclusive end) | `bytes:[0 TO 1024}` |
| `[* TO B]` | Unbounded start | `latency:[* TO 200]` |
| `[A TO *]` | Unbounded end | `latency:[500 TO *]` |
| `field:>N` | Greater than | `duration:>100` |
| `field:>=N` | Greater than or equal | `duration:>=100` |
| `field:<N` | Less than | `duration:<500` |
| `field:<=N` | Less than or equal | `duration:<=500` |

### Grouping and precedence

| Syntax | Description | Example |
|--------|-------------|---------|
| `(...)` | Group expressions | `(foo OR bar) AND baz` |
| `field:(...)` | Group values for a field | `level:(warn OR error)` |

### Special characters and escaping

| Syntax | Description | Example |
|--------|-------------|---------|
| `\char` | Escape a reserved character | `user\@example\.com` |

Reserved characters: `+ - && \|\| ! ( ) { } [ ] ^ " ~ * ? : \ /`

## Tips

* Field names are **case-sensitive**.
* The AND, OR and NOT operators must be all upppercase.
* String queries on `text` fields are **analyzed** (tokenized, lowercased); use `keyword` fields for exact matching.
* Combine operators freely: `level:error AND (service:api OR service:gateway) AND latency:[* TO 500]`
