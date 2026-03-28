---
id: query-syntax
title: Query syntax
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Queries let you filter logs in the [**Log Explorer**](explore-analyze.md), in [alert rules](alerts.md), and in [dashboards](dashboards.md). You query OpenTelemetry attributes — the ones [captured by your collector](./collector/collector.md). See [Understanding a log entry](./getting-started/concepts.md#understanding-a-log-entry) for an overview of available attributes.

:::tip
In the **Log Explorer**, type your query then press **Ctrl + Enter** to run it. Time periods are controlled by the selector in the top right corner, not in the query itself.
:::

## Syntax reference

### Basic field queries

| Syntax | Meaning | Example |
|--------|---------|---------|
| `field:value` | Exact match | `service_name:syslog` |
| `field:"multi word value"` | Exact phrase | `body.message:"connection refused"` |
| `field:value*` | Prefix wildcard | `host.name:prod-*` |
| `field:*value*` | Contains | `body.message:*timeout*` |
| `field:*` | Field exists | `cloud.region:*` |

:::warning
Queries are **case-sensitive**. `service_name:Syslog` is not the same as `service_name:syslog`.
:::

### Boolean operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `AND` | Both conditions must match | `service_name:nginx AND severity_number:[17 TO *]` |
| `OR` | Either condition must match | `service_name:nginx OR service_name:apache` |
| `NOT` | Exclude matching logs | `service_name:syslog AND NOT host.name:test-*` |
| `( )` | Group conditions | `service_name:nginx AND (severity_text:ERROR OR severity_text:FATAL)` |

### Numeric ranges

| Syntax | Meaning | Example |
|--------|---------|---------|
| `[min TO max]` | Inclusive range | `severity_number:[13 TO 16]` (WARNING) |
| `{min TO max}` | Exclusive range | `severity_number:{12 TO 17}` (WARNING, exclusive bounds) |
| `[min TO *]` | Greater than or equal | `severity_number:[17 TO *]` (ERROR and above) |
| `[* TO max]` | Less than or equal | `severity_number:[* TO 12]` (INFO and below) |

### Common fields

| Field | Description | Example values |
|-------|-------------|---------------|
| `service_name` | Service that produced the log | `syslog`, `nginx`, `payments-api` |
| `severity_number` | Numeric severity (see [glossary](resources/glossary.md#severity)) | `9` (INFO), `17` (ERROR), `21` (FATAL) |
| `severity_text` | Text severity | `DEBUG`, `INFO`, `WARNING`, `ERROR`, `FATAL` |
| `host.name` | Source hostname | `prod-web-03`, `db-replica-01` |
| `body.message` | Log message content | Free text |
| `cloud.region` | Cloud region | `us-east-1`, `eu-west-1` |
| `deployment.environment` | Environment | `prod`, `staging`, `dev` |

## Examples by use case

### Infrastructure — find errors on a specific host

```text
host.name:prod-web-03 AND severity_number:[17 TO *]
```

### Security — detect brute force login attempts

```text
body.message:*"authentication failure"* AND service_name:sshd
```

### Application — find database connection issues

```text
body.message:*"connection refused"* AND service_name:payments-api
```

### Multi-service investigation — correlate errors across services

```text
severity_text:ERROR AND (service_name:api-gateway OR service_name:payments-api OR service_name:user-service)
```

### Exclude noise — filter out health checks

```text
service_name:nginx AND NOT body.message:*healthcheck* AND NOT body.message:*ping*
```

## Common mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| `Service_Name:syslog` | Wrong case | `service_name:syslog` |
| `service_name: syslog` | Space after colon | `service_name:syslog` |
| `severity_number:>17` | Invalid range syntax | `severity_number:[17 TO *]` |
| `message:failed` | Wrong field name | `body.message:*failed*` |
| Including time in query | Time is set via the UI | Use the time period selector instead |

## What's next?

- [**Log Explorer**](explore-analyze.md) — put your queries to work
- [**Alert rules**](alerts.md) — use queries to trigger alerts automatically
- [**Dashboards**](dashboards.md) — build widgets powered by queries
