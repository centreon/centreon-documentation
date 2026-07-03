---
id: system-tab-indicators
title: Understanding the System tab indicators
---

The **System data** page shows the health of the server infrastructure hosting your web application. Use it to diagnose whether a performance issue originates from your application code or from the underlying infrastructure.

> **Prerequisites:** System data requires a [system agent](../installation/servers/install-system-agents.md) to be installed on your server. [Application agents](../installation/servers/add-advanced-metrics.md) unlock additional tabs for Apache, MySQL, Nginx, and other services.

## Default indicators

### Network interface (bandwidth)

Shows data **received** (incoming) and **sent** (outgoing) by the server, in bytes per second.

A sudden spike in incoming traffic can indicate a traffic surge, a DDoS attempt, or a large file upload. A spike in outgoing traffic often means large assets are being served — check whether a deploy introduced heavier resources.

Sustained high values are not necessarily a problem, but an unexpected jump correlated with slower page load times suggests the server is saturated on I/O.

### Memory (RAM)

Shows used and available memory over time.

Memory usage should be **relatively stable**. A steady upward trend that never releases (a "sawtooth" that only goes up) typically signals a memory leak. If memory is consistently near its limit, the server may be swapping to disk, which causes significant latency.

Memory rarely spikes dramatically on its own — if you see a sudden jump, look for a correlation with a deployment or a traffic surge.

### Disk

Shows disk read and write activity.

Like memory, disk I/O should not vary dramatically. High disk activity can slow down database queries, session handling, and any other operation that reads or writes to the filesystem. Persistent high disk usage is worth investigating — common causes include excessive logging, large database queries, or unoptimized file storage.

Disk *space* is not shown here. Monitor disk space separately to avoid outages from full disks.

## Application-specific tabs

If you have installed [application agents](../installation/servers/add-advanced-metrics.md), dedicated tabs appear for each service: **Apache**, **MySQL**, **PostgreSQL**, **Nginx**, **Varnish**, **Redis**, **Memcached**, and others.

Each tab shows metrics specific to that service — for example, active connections, query throughput, cache hit rate. These are especially useful for pinpointing whether a slowdown originates in your web server, your database, or your cache layer.

## Correlating infrastructure and performance

Use System data alongside the rest of Experience Monitoring to understand cause and effect:

- **Correlate with page load times:** if load times spike at the same time as a memory or disk peak, the infrastructure is likely the bottleneck.
- **Correlate with business data:** if you have configured [Business data](../getting-started/business-view.md), the **Infrastructure cost/click** tab on the **Business data** page links your system metrics to conversion and traffic data — useful for understanding the business impact of infrastructure issues.
