---
id: monitoring-connectors-basics
title: Monitoring connectors basics
description: "Learn what a Centreon Monitoring Connector is, what you can monitor with it, and how it collects data. Start here before you set one up."
---

## What is a monitoring connector?

A Centreon Monitoring Connector is a combination of two elements used to monitor a specific type of IT resource:

* a plugin : the script that runs the actual checks from a poller
* a pack: the commands, host templates, and service templates, with default thresholds. Some connectors also include discovery elements: a host discovery provider (to find hosts) and/or service discovery rules (to find items to monitor on a host).

The two are installed separately but work together as the connector. (Formerly called a "Plugin Pack.")

## What can I do with a monitoring connector?

With a Centreon Monitoring Connector you can:

* Set up monitoring quickly for a specific resource (server, database, network device, etc.) by applying its ready-made templates.
* Track the relevant metrics automatically—like CPU, memory, disk, or network traffic—with default alert thresholds you can fine-tune.
* Discover resources automatically (with some connectors and the Auto Discovery module):
  * hosts, such as the servers on a subnet, the virtual machines of a VMware cluster or the resources of a cloud account;
  * services on existing hosts, such as disk partitions or network interfaces.

  See [To perform host or service discovery](./using-connectors.md#to-perform-host-or-service-discovery).

## What can I monitor with a connector?

You can monitor almost any IT resource. Our catalog includes the following categories:

* Applications – business and web apps (e.g. Apache, Microsoft Exchange)
* Centreon – monitoring of Centreon's own components
* Cloud – cloud services like Azure and AWS
* Database – MySQL, PostgreSQL, Oracle, etc.
* Hardware – physical servers and components
* Network – switches, routers, firewalls
* Operating System – Linux, Windows
* Protocol – generic checks over SNMP, HTTP, etc.
* Sensor – temperature, environmental probes
* Storage – SAN/NAS systems
* ToIP-VoIP – telephony and voice
* UPS-PDU – power supplies and distribution units
* Virtualization – VMware, Hyper-V, and similar

## How does the connector actually collect data?

There are several [types of Monitoring Connectors](./types-of-connectors.md), depending on how they reach the resource you want to monitor: through an agent, an API, a standard protocol or SNMP. The type only changes what you need to set up: an agent to install, an API to reach, credentials to provide, and so on.

Whatever the type, all Monitoring Connectors follow the same pattern: Centreon Engine runs the connector's plugin from a poller, using the commands and templates provided by the connector, and the results are sent back to the central server. Discovery follows the same logic, using the discovery providers and rules provided by the connector. See [How connectors work](./workflow-service-check.md) for a step-by-step example.

## Does a monitoring connector need anything besides a plugin and a pack?

* Plugin + pack only — the standard setup. The plugin runs the checks from the poller, the pack provides the templates. Nothing else needed.
* Plugin + pack + a Connector — some require an extra Centreon Connector component (e.g. AS400, VMware).
* Plugin + pack + an agent — some require an agent installed on the monitored host (e.g. Windows NRPE, or the Centreon Monitoring Agent / CMA).

<!-- 
old contents

A Monitoring Connector is a downloadable package containing a set of configuration
templates that make it fast and easy to monitor your IT infrastructure.
Applying a template from a Monitoring Connector is the easiest way to monitor a host.

Monitoring Connectors consist of 2 elements, which are installed separately:

- A plugin that executes the monitoring commands from a poller. Plugins can be
installed using the command line interface, or automatically.

- A pack that contains commands, host templates and service templates. 
Packs are installed via the Centreon interface. For each type of equipment,
 the templates determine which indicators will be
monitored and set default warning and critical thresholds (these may be
fine-tuned later on).

  Some packs also contain [discovery rules](./using-connectors.md#discovery-connectors). -->