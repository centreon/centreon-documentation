---
id: glossary
title: Glossary of Centreon concepts
---

## ACL

Access Control Lists allow you to grant rights to Centreon users. You can grant users rights on:

- the menus of the Centreon web interface,

- the [resources](#resource) users can see,

- the actions that can be performed in the Centreon web interface.

**See also**: [Granting rights to Centreon users (ACL)](../administration/access-control-lists.md).

## Acknowledgement

When a user acknowledges a resource in Centreon, they notify their teams that they are aware of the incident and that they will take action to resolve it.

When a resource is acknowledged, [notifications](#notification) are stopped, and the resource is highlighted yellow in monitoring screens.

Acknowledging a resource does not mean that the incident is over. It will be over when the resource is back to its nominal state (**OK** or **UP**).

**See also**: [Acknowledging an alert](../alerts-notifications/acknowledge.md).

## Alert

An alert is one of the following statuses: **Warning**, **Down**, **Critical**, **Unknown**.

The term alert is used in this way in the [pre-defined filters on page **Resources Status**](../alerts-notifications/resources-status.md#pre-defined-filters).

## Architecture: simple VS distributed

- **Simple architecture**: architecture that consists solely of a [central server](#central-server).

- **Distributed architecture**: architecture that consists of a [central server](#central-server) and of n [remote server(s)](#remote-server) and [poller(s)](#poller). Remote servers and pollers allow you to distribute the monitoring load for security reasons, geographical or historical reasons, etc.

**See also**: [Architectures](../installation/architectures.md).

## BBDO

Broker Binary Data Object: communication protocol used to transfer monitoring data from [remote servers](#remote-server) and [pollers](#poller) to the [central server](#central-server).

**See also**: [The BBDO protocol](../developer/developer-broker-bbdo.md).

## Broker

Centreon Broker is the software component that receives monitoring data collected by [monitoring engines](#monitoring-engine).
Once it receives this data, by default, Centreon Broker redistributes it to the MariaDB/MySQL and RRD databases.

**See also**: [Centreon Broker Event Mapping](../developer/developer-broker-mapping.md).

## Broker reverse mode

Advanced configuration for Centreon [Broker](#broker) that reverses the direction of connection for Broker communications. It switches the "client" and "server" roles to adapt to particular network configurations. For example, this mode is used by Centreon MAP to subscribe to the real-time flow of Broker events.

## Central server

In Centreon, the central server is the main console where you monitor resources. The central server allows you to:

- configure the monitoring of your whole infrastructure,
- monitor resources
- see what all your Centreon servers monitor (central server, [remote servers](#remote-server) and [pollers](#poller)), using its web interface.

## CLAPI

Command-Line API: allows you to manage the monitoring using the command line.

**See also**: [Command Line API (v1) - CLAPI](../api/clapi.md).

## Downtime

Downtime is a period during which [notifications](#notification) are disabled for a resource. Downtime is used during planned maintenance operations, to avoid unnecessary alerts.

**See also**: [Planning a downtime](../alerts-notifications/downtimes.md).

## Engine

See [**Monitoring engine**](#monitoring-engine).

## FQDN

Fully Qualified Domain Name: hostname and domain name for a server. Example: demo.centreon.com (hostname: demo, domain name: centreon.com).

## Gorgone

Centreon Gorgone is the software component that allows the [central server](#central-server) to send information to the [remote servers](#remote-server) and the [pollers](#poller).
Among other things, Gorgone deploys the configuration to the [monitoring engines](#monitoring-engine).

**See also**: [Managing client/server communication](../developer/developer-gorgone-client-server-communication.md) and the other topics in this section.

## Graph

Graphs are generated from the [metrics](#metric) that make up [services](#service), using [RRD files](#rrd-files). They show how these metrics evolve over time.

**See also**: [Charts management](../metrology/chart-management.md) and the other topics in this section.

## Heritage

Principle according to which a parameter of a [template](#template) is applied to the resource that inherits from this template.

## Host

Equipment that has an IP address or an FQDN, and that you want to monitor. Examples: a Linux server, an internet router, a website, a 3D printer, an EC2 instance, a docker host, a cash register, etc. A host can have one or more associated [services](#service).

A host can have one of the following [statuses](#status): OK, DOWN and UNREACHABLE.

**See also**: [Monitoring a host](../monitoring/basic-objects/hosts-create.md) and the other topics in this section.

## LVM

LVM (logical volume manager): Centreon recommends that you use this partitioning system when you install your host system. It will allow you to live adjust the size of partitions and to use LVM snapshots for backups.

## LVM snapshot

Feature included in LVM that allows you to take a snapshot of a file system. Centreon uses this process to back up databases.

**See also**: [Backup](../administration/backup.md).

## Metric

A metric (or performance data) is part of a [service](#service). This piece of data allows you to display graphs and to define thresholds according to which you will receive notifications. These thresholds will determine the [status](#status) of the service the metric belongs to.

When a service has several metrics, the status of the service is the status of the worst metric.

You can see all metrics attached to a service in the details panel of the service.

**See also**: [Understanding metrics](../monitoring/metrics.md).

## Monitoring action

Any action performed in the interface that acts on your monitoring in real time. For instance, to [acknowledge a resource](#acknowledgement), to [plan a downtime](#downtime), to force a check, etc.

## Monitoring Connector

Connectors are the programming brick that lets Centreon communicate with the supervised equipment.

Centreon offers a great variety of connectors ready to be used to control any type of equipment.
The connector is made of a [pack](#pack) (preconfigured models) and a [plugin](#plugin) (the probe that executes the checks).
Some connectors may also have an automatic discovery feature allowing them to independently find ressources of a certain type to monitor them.

**See also**:

- [Monitoring Connectors](../monitoring/pluginpacks.md),
- [Introduction to Monitoring Connectors](/pp/integrations/plugin-packs/getting-started/introduction).

## Monitoring engine

Centreon Engine is the software component that plans checks, executes them, and [notifies](#notification) users if an incident occurs.
Centreon Engine is present on [pollers](#poller), [remote servers](#remote-server) and the [central server](#central-server).

## MySQL Dump

Backup, in a text file, of a MySQL/MariaDB database.

## Notification

Message that warns a user that an incident has occurred. You can configure notifications on various [statuses](#status).

**See also**: [How notifications work](../alerts-notifications/notif-concept.md) and the other topics in this section.

## One-peer retention mode

Advanced configuration for Centreon [Broker](#broker) that activates the retention mechanism in [Broker inverted flow mode](#broker-inverted-flow-mode). This mode is commonly used for monitoring servers ([pollers](#poller) or [remote servers](#remote-server)) located in demilitarized zones (DMZ).

## Pack

The pack holds the information related to the services that will be controlled, their alert thresholds and the command lines required to perform the checks. The pack allows a default configuration for the services but remains highly customizable.

## Performance data

See [**Metric**](#metric).

## Plugin

A plugin is a monitoring probe, i.e. a binary executable or a script that is called by the [monitoring engine](#monitoring-engine) to carry out a check on a [host](#host) or [service](#service). The plugin determines which status should be sent to the monitoring engine, based on the checks it makes and on the thresholds defined in the configuration of the host or service.

## Poller

Centreon server used in a [distributed architecture](#architecture-simple-vs-distributed). A poller can be attached to a [remote server](#remote-server), or directly to a [central server](#central-server).

- A Centreon poller monitors [resources](#resource). It has a [monitoring engine](#monitoring-engine).

- A poller has no graphical interface. The resources it monitors are displayed in the interface of the central server and of the remote server it is attached to.

"Poller" is also used to refer to the monitoring engine that is present in a central server, a remote server and a poller.

## Pull mode

Advanced configuration for Centreon [Gorgone](#gorgone) that reverses the direction of ZMQ flows. The communication is initiated by pollers and remote servers, and is directed to the central server. This mode is commonly used by MSPs.

**See also**: [Configuring Gorgone in pull mode](../developer/developer-gorgone-pull-mode.md).

## Recurring downtime

Recurring downtime periods are [downtimes](#downtime) that occur regularly.

**See also**: [Recurrent downtimes](../alerts-notifications/downtimes.md#recurrent-downtimes).

## Remote server

Centreon server used in a [distributed architecture](#architecture-simple-vs-distributed). A remote server is attached to a central server. Pollers can be attached to a remote server.

- A remote server monitors [resources](#resource). It has a [monitoring engine](#monitoring-engine).

- It has a graphical interface, but no configuration menus.

- The resources it monitors are displayed in its interface, and in the interface of the central server it is attached to.

## Resource

Object monitored by a Centreon platform ([hosts](#host), [services](#service), metaservices).

## Retention files

Retention files belong to Centreon [Broker](#broker). These files store the monitoring data that could not be inserted into the database. For instance, if a communication problem occurs between Engine and Broker, the data is not lost. The Broker stores it in a file (whose name includes the term "queue"). The file will then be read by Centreon Broker, then inserted into the databases so as to avoid data loss.

## Retention period

Time period, in days, during which you want to keep the data from your RRD and MariaDB/MySQL databases.

## RRD files

An RRD file contains the data for a [metric](#metric). RRD files are used to build performance [graph](#graphs). If there are no RRD files, graphs cannot be displayed. Because of the way RRD works, the data displayed in the graphs shows a trend rather than the exact data that was measured.

## Scheduler

See [**Monitoring engine**](#monitoring-engine).

## Service

A service is attached to a [host](#host). It is a check point on this host, that can relate to:

- the status of a component: is the power supply connected? Is my instance started?

- the performance of a component: is my website accessible in less than 0.5 s? What are the ink levels on my printer? How much of the memory is used on my server?

A service can consist of one or several [metrics](#metric).

A service can have one of the following [statuses](#status): OK, WARNING, CRITICAL, UNKNOWN.

**See also**: [Monitoring a service](../monitoring/basic-objects/services-create.md) and the other topics in this section.

## State

Unhandled, acknowledged, in downtime.

## Status

Indicates:

- the availability of a [host](#host) (UP, DOWN, UNREACHABLE),

- the availability or performance of a [service](#service) (OK, WARNING, CRITICAL, UNKNOWN).

PENDING is not a status: a resource is "pending" when it has just been created and hasn't been checked yet.

**See also**: [Possible statuses of a resource](../alerts-notifications/concepts.md).

## Status type

Indicates whether a change in [status](#status) is confirmed (HARD) or not confirmed (SOFT). For instance, if a status becomes HARD, notifications are triggered.

**See also**: [Status types](../alerts-notifications/concepts.md#status-types).

## Template

Skeleton of a [resource](#resource) that is preconfigured so that parameters defined on the skeleton are applied to the resource that inherits from it.

There are host templates, service templates and contact templates.

**See also**:

- [Using host templates](../monitoring/basic-objects/hosts-templates.md),
- [Using service templates](../monitoring/basic-objects/services-templates.md),
- [Using contact templates](../monitoring/basic-objects/contacts-templates.md).

## Time period

Time periods define a time interval for each day of the week. They enable the features of the [monitoring engine](#monitoring-engine) over a given time slot. Use time periods to define:

- when check commands are executed, i.e. the time period during which resources are monitored,

- when [notifications](#notification) are sent.

**See also**: [Time periods](../monitoring/basic-objects/timeperiods.md).

## Widget

Configurable visual element that allows you to display data in a custom view.

**See also**: [Custom views](../alerts-notifications/custom-views.md).

## ZMQ

Protocol used by Centreon [Gorgone](#gorgone) to communicate from the [central server](#central-server) to the [remote servers](#remote-server) and the [pollers](#poller), in a [distributed architecture](#architecture-simple-vs-distributed).
