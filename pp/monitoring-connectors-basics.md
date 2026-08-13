---
id: monitoring-connectors-basics
title: Monitoring connectors basics
description: "Learn what a Centreon Monitoring Connector is, what you can monitor with it, and how it collects data. Start here before you set one up."
---

## What is a monitoring connector?

A Centreon Monitoring Connector is a combination of two elements used to monitor a specific type of IT resource:

* a plugin : the script that runs the actual checks from a poller
* a pack: the commands, host templates, and service templates, with default thresholds. Some connectors also include discovery rules.

The two are installed separately but work together as the connector. (Formerly called a "Plugin Pack.")

## What can I do with a monitoring connector?

With a Centreon Monitoring Connector you can:

* Set up monitoring quickly for a specific resource (server, database, network device, etc.) by applying its ready-made templates.
* Track the relevant metrics automatically—like CPU, memory, disk, or network traffic—with default alert thresholds you can fine-tune.
* Auto-discover related assets (with some connectors), such as disk partitions or network interfaces.

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

* SNMP-based — polls devices via SNMP (common for network gear, sensors, UPS).
* API-based — queries a REST or other API (common for cloud services and modern apps, e.g. Azure, VMware RESTAPI).
* Agent-based — data collected via an agent on the host (e.g. NRPE, CMA).
* Protocol/command-based — direct checks over protocols like HTTP, SSH, or database connections.

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