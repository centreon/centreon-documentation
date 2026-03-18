---
id: welcome
title: Getting started with Centreon Log Management
---

import DocCardList from '@theme/DocCardList';

# Welcome to Centreon Log Management

Centreon Log Management (CLM) collects, centralizes, and analyzes logs from across your IT infrastructure — so you can detect issues, investigate root causes, and set up alerts before problems escalate.

CLM is currently in **BETA**. You're among the first to use it, and your feedback will shape the product.

## Get up and running

Follow the [**Quickstart guide**](quickstart.md) to send your first logs in under 10 minutes. Or if you want to understand the concepts first:

1. [**Key concepts**](concepts.md) — what logs are, how CLM structures them, and why OpenTelemetry matters.
2. [**Quickstart**](quickstart.md) — install a collector, send logs, create your first alert.
3. [**Use cases**](use-cases.md) — concrete examples of what you can detect and investigate.

## What can you do with CLM?

| Feature | What you can do |
|---------|----------------|
| [**Log Explorer**](../explore-analyze.md) | Search, filter, and investigate logs in real time |
| [**Query syntax**](../query-syntax.md) | Filter logs using attributes, boolean operators, wildcards, and ranges |
| [**Alert rules**](../alerts.md) | Define conditions that trigger alert events (count or ratio-based) |
| [**Dashboards**](../dashboards.md) | Build visual dashboards with text and metrics charts |
| [**OpenTelemetry Collector**](../collector/collector.md) | Collect logs from Linux and Windows hosts |
| [**REST API**](../api.md) | Programmatic access to logs, alerts, and configuration |

## BETA program

### Limitations

| Limitation | Details |
|-----------|---------|
| **Storage** | 150 GB total per organization. Once reached, new logs are rejected. Monitor usage on the [Storage Usage](../administration/storage-usage.md) page. |
| **Alert rules** | Up to 10 alert rules per organization. |

These limits will be raised at general availability. If you need higher limits during the BETA, [contact us](https://www.centreon.com/contact/).

### What to expect

- **This is an early product.** Features may change, and you may encounter bugs.
- **Your feedback matters.** Report issues, suggest features, and share your experience with your Centreon contact.
- **Data retention during BETA.** Logs stored during the BETA will be retained according to the terms communicated at signup.

### Not signed up yet?

[Contact us](https://www.centreon.com/contact/) to join the BETA program. Once your access is confirmed, you'll receive a URL and instructions to create your administrator account.

### Support

During the BETA, reach out to your Centreon contact or use the [contact form](https://www.centreon.com/contact/) for any questions or issues.

## All topics

<DocCardList />
