---
id: types-of-connectors
title: Connector types and configuration
description: "Learn about the four types of monitoring connector: agent-based, API-based, protocol-based, and SNMP-based, and how each one collects data."
---

Monitoring connectors collect data from the resource you want to monitor in different ways. Understanding which type a connector belongs to tells you what information you'll need to set it up—an agent to install, an API to reach, credentials to provide, and so on. There are four main types:

* [**Agent-based connectors**](./agent-based.md) — a small piece of software (an agent) runs on the monitored device and collects data locally, which the Centreon poller then retrieves. This includes the Centreon Monitoring Agent (CMA), NSClient++, and NRPE.
* [**API-based connectors**](./api-based.md) — the connector queries the target's API (usually REST) to collect data. This is common for cloud services and modern applications.
* [**Protocol-based connectors**](./protocol-based.md) — the connector connects directly to a service or runs a check over a standard protocol, such as HTTP/HTTPS, SSH, or a database connection.
* [**SNMP-based connectors**](./snmp-based.md) — the connector uses SNMP (Simple Network Management Protocol) to query devices like routers, switches, servers, and printers over UDP.

Whichever type you're working with, you apply the connector's template to your host and then fill in the required values through its macros. The connector's monitoring procedure lists exactly what each one needs.