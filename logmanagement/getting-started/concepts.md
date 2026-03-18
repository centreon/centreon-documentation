---
id: concepts
title: CLM basics
---

Every second, your servers, applications, and network devices generate logs — timestamped records of what's happening in your IT system. A failed database connection, a spike in login attempts, an unexpected restart: it's all in the logs. The challenge is finding the signal in the noise.

That's what Centreon Log Management (CLM) does: it collects logs from across your infrastructure, gives you the tools to search and analyze them in real time, and alerts you when something goes wrong.

## How does it work?

Here's the big picture — how logs flow from your infrastructure into CLM:

```text
┌──────────────┐    raw logs    ┌──────────────┐  structured logs  ┌──────────────┐
│ Your servers │ ─────────────► │ OpenTelemetry│ ────────────────► │   Centreon   │
│ applications │                │  Collector   │   (OTLP format)   │     Log      │
│   devices    │                │              │                   │  Management  │
└──────────────┘                └──────────────┘                   └──────┬───────┘
                                                                          │
                                                          ┌───────────────┼───────────────┐
                                                          ▼               ▼               ▼
                                                   ┌────────────┐ ┌────────────┐ ┌────────────┐
                                                   │    Log     │ │   Alert    │ │ Dashboards │
                                                   │  Explorer  │ │   Rules    │ │            │
                                                   │  Search &  │ │   Get      │ │ Visualize  │
                                                   │ investigate│ │  notified  │ │   trends   │
                                                   └────────────┘ └────────────┘ └────────────┘
```

The **OpenTelemetry Collector** runs on your hosts. It reads log files (or receives log streams), enriches them with context (hostname, OS, service name), and forwards them to CLM in a standardized format. From there, you can search, alert, and visualize.

## What can you do with CLM?

- **Collect and centralize**: [gather logs](../collector/collector.md) from servers, applications, databases, and network devices into a single place.
- **Search and investigate**: [explore your logs in real time](../explore-analyze.md) using filters, [queries](../query-syntax.md), and [dashboards](../dashboards.md) to detect anomalies, errors, security incidents, or unexpected behavior. See [**Use cases**](use-cases.md) for detailed examples.
- **Get alerted**: define [alert rules](../alerts.md) so that CLM creates [alert events](../resources/glossary.md#alert-eventalert-status) when problems occur or critical thresholds are exceeded — no need to watch a screen all day.
- **Store for the long term**: keep logs securely over extended periods for compliance, security, or historical analysis.

## What does a log look like in CLM?

All logs received by CLM appear on the **Log explorer** page. Each entry shows a [severity (i.e., a log level)](../resources/glossary.md#severity), indicated by a colored line — so you can immediately spot errors among thousands of routine messages.

![image](../assets/log_explorer.png)

## Why OpenTelemetry?

Logs come in all shapes and formats. CLM standardizes them using [OpenTelemetry](https://opentelemetry.io/docs/concepts/semantic-conventions/), an open protocol that turns unstructured text into structured, queryable data — with consistent fields, rich context (service, environment, version), and support for [custom attributes](../resources/glossary.md#custom-attributes).

This means your logs aren't just text anymore: they're data you can filter, correlate, and [define dynamic alerts on](../alerts.md).

Two ways to get logs into CLM:

* **Your system already produces OpenTelemetry logs?** Send them directly to CLM.
* **Your system produces logs in another format?** [Install an OpenTelemetry Collector](../collector/collector.md) to convert, enrich, and forward them. The collector can run as an agent on the device or in gateway mode.

## Understanding a log entry

A log entry in OpenTelemetry format always includes a **timestamp** and a **[service](../resources/glossary.md#service) name** (the service that produced the log). Most entries also carry a [severity](../resources/glossary.md#severity): <span style={{color:'#1ebeb3'}}>**DEBUG**</span>, <span style={{color:'#1588d1'}}>**INFO**</span>, <span style={{color:'#ffca34'}}>**WARNING**</span>, <span style={{color:'#fd9b27'}}>**ERROR**</span>, or <span style={{color:'#ff4a4a'}}>**FATAL**</span>. Everything else depends on [how you configure your OpenTelemetry Collector](../collector/collector.md).

Here's a real example — a Windows Event Viewer log collected by an OpenTelemetry collector:

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
    "event.provider.guid": "{XXXXXXXX-C8C9-472C-A5F9-F2BDFEA0X309}",
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

This entry has two kinds of metadata:

* **Attributes** describe the event itself — message details, error codes, process IDs.
* **Resource attributes** describe where the log came from. Common examples:

  | Attribute | Description | Example |
  |-----------|-------------|---------|
  | service.name | Service emitting the log | `apache`, `payments-api` |
  | service.version | Version of the service | `2.4.1` |
  | host.name | Hostname or machine name | `prod-web-03` |
  | cloud.region | Cloud region | `us-east-1` |
  | k8s.container.name | Kubernetes container name | `api-gateway` |
  | deployment.environment | Environment | `prod`, `staging` |

You can use any of these attributes in [queries](../query-syntax.md), in the [**Log explorer**](../explore-analyze.md#using-the-log-explorer-page), or in [dashboards](../dashboards.md) to filter and drill down into your data.

## How does CLM determine the date and time of logs?

The date and time of each log are based on the OpenTelemetry attribute **observed_timestamp_nanos**.

## How does CLM complement monitoring?

If you already use Centreon for monitoring, here's how CLM fits in:

- **Monitoring** detects problems that can be anticipated — it relies on metrics and predefined thresholds. It answers: "Is the system working as expected?"
- **CLM** lets you discover and investigate unexpected problems — by analyzing detailed, contextualized logs. It answers: "What happened, and why?"

In practice, these two work together:

1. You notice an incident in monitoring, but can't determine the root cause from metrics alone.
2. In CLM, you investigate the relevant logs and explore their context to identify what went wrong.
3. Once the cause is understood, you create an [alert rule](../alerts.md) in CLM (or in monitoring) to detect the issue automatically in the future.

| Aspect | Monitoring | CLM (Observability) |
| --- | --- | --- |
| Purpose | Know that there is a problem | Understand why and where it occurs |
| Data | Metrics with predefined thresholds | Enriched, contextualized logs |
| Approach | Predefined checks | Exploratory, open-ended investigation |
| Best for | Simple, known failure modes | Complex systems, unknown issues |

## What's next?

- [**Quickstart**](quickstart.md) — send your first logs in under 10 minutes
- [**Use cases**](use-cases.md) — see what you can detect and investigate with CLM
- [**Query syntax**](../query-syntax.md) — learn how to filter and search your logs
