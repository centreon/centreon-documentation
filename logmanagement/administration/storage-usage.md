---
id: storage-usage
title: Storage usage
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Understanding the CLM pricing model

Centreon Log Management uses a **storage-based pricing model**. Unlike other log management solutions that charge per volume of data ingested, per host, or per user, CLM pricing is based solely on the amount of log data you store.

This means:

- **No per-GB ingestion fees**: send as many logs as you need without worrying about ingestion costs.
- **No per-host pricing**: connect as many hosts as your infrastructure requires.
- **No user seat limits**: your entire team can access CLM without additional cost.
- **You only pay for what you keep**: storage is the single billing dimension. The more logs you retain, the more storage you use. When logs expire or are deleted, storage is freed.

This model gives you full control over your costs: by adjusting your **retention policies** and being selective about which logs you store, you can optimize your storage consumption to match your budget and compliance needs.

## Monitoring your storage

Use the **Administration > Storage Usage** page to track how much storage your CLM instance is consuming.

- **Select a time period** in the top right corner to view storage trends over time.
- **Hover over the graph** to display precise values at any data point.

Storage is expressed in **Mebibytes** (MiB). 1 MiB = 1,048,576 bytes (approximately 1.05 MB).

## Tips for optimizing storage

| Strategy | Impact |
|---|---|
| **Filter at the source** | Configure your log collectors to send only relevant logs, reducing unnecessary storage. |
| **Use retention policies** | Define how long logs are kept. Shorter retention = lower storage usage. |
| **Focus on high-value logs** | Prioritize error logs, security events, and audit trails over verbose debug output. |
| **Monitor regularly** | Check the Storage Usage page weekly to spot unexpected spikes early. |

## Beta program limits

During the beta program, total storage is limited to **150 GB**. Once this limit is reached, CLM will stop accepting new logs. Monitor your usage regularly to avoid interruptions.
