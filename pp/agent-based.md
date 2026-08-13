---
id: agent-based
title: Agent-based connectors
description: "Learn about the types of agent-based connector, from the Centreon Monitoring Agent to NSClient++ and NRPE, and how they differ."
---

Agent-based connectors fall into these types:

## Centreon Monitoring Agent (CMA)

Centreon's own agent. It offers advantages over NSClient and NRPE, including better performance, enhanced security by default (TLS encryption, authentication token), and a passive-checks-based monitoring method. Connectors using it are typically named with a "CMA" suffix (e.g. Windows CMA, Hyper-V 2012 CMA).

## NSClient++ NRPE

Collects data via the NSClient++ agent using its embedded NRPE server (mainly for Windows). These connectors collect metrics and statuses using the NSClient++ monitoring agent and its embedded NRPE Server.

## NSClient++ RestAPI

Uses the NSClient++ agent but communicates over its REST API instead of NRPE (e.g. Microsoft Exchange NSClient RestAPI).

## NRPE / NRPE4

The standard NRPE protocol, mainly for Linux servers (e.g. Linux NRPE4). NRPE4 uses the newer NRPE v4 protocol and replaced the deprecated NRPE3 connector.

A note worth adding: Centreon now recommends migrating NSClient++ and NRPE setups to the Centreon Monitoring Agent, so the CMA connectors are the direction the catalog is moving toward, with many existing NSClient/NRPE connectors getting CMA equivalents.

## Troubleshooting agent-based connectors

* See the [**NRPE checks** section of our troubleshooting page](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#nrpe-checks).
* The [**Common problems**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#common-problems) section may also help.
