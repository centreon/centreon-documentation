---
id: active-passive-checks
title: Active vs passive checks
description: Difference between active and passive checks, their collection methods, and how to choose or combine them
---

A check is an operation that determines the [status](../alerts-notifications/concepts.md) of a resource, and may also produce [metrics](./metrics.md) (performance data).The result of a check updates the corresponding resource's row on the **Resource Status** page.
A check can be performed either by the monitoring engine (active check) or by the equipment itself (passive check).

## Active checks

An active check is initiated by the monitoring engine, which triggers data collection at regular intervals defined in the configuration (except for forced checks, which run on demand outside that interval).

This mode is used by all monitoring connectors except [CMA](../cma/cma.md)-type connectors. Connectors typically rely on the following collection methods:

* ICMP
* SNMP
* HTTP requests
* Database queries

## Passive checks

A passive check is initiated by the device itself (or by an external source submitting a result on its behalf), which sends its data on its own, without being polled by the monitoring engine — either at regular intervals or when a specific event occurs.

In Centreon Cloud, it is used by CMA-type connectors: the agent sends data at regular intervals.

## Monitoring strategy

The choice between active and passive checks depends on several factors:

* Security requirements: some policies require or rule out one of the two modes.
* Technical constraints, particularly network segmentation.
* Whether you want an agentless approach: if you have control over the device or server, you can install an agent on it and use passive checks; if the device is a black box, active checks are the better fit.

When a single mode doesn't fully cover your monitoring needs, you can combine active and passive checks on the same device or server.

Recommended implementation order:

1. Active system monitoring
2. Active hardware monitoring (in the case of a physical server, for example)
3. Active application monitoring via application protocols (HTTP, database connections, etc.)
4. Supplement by passive monitoring.
