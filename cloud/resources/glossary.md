---
id: glossary
title: Glossary of Centreon concepts
---

## Acknowledgement

When a user acknowledges a resource in Centreon, they notify their teams that they are aware of the incident and that they will take action to resolve it.

When a resource is acknowledged, [notifications](#notification) are stopped, and the resource is highlighted yellow in monitoring screens.

Acknowledging a resource does not mean that the incident is over. It will be over when the resource is back to its nominal state (**OK** or **UP**).

**See also**: [Acknowledging an alert](../alerts-notifications/acknowledge.md).

## Alert

An alert is one of the following statuses: **Warning**, **Down**, **Critical**, **Unknown**.

The term alert is used in this way in the [pre-defined filters on page **Resources Status**](../alerts-notifications/resources-status.md#pre-defined-filters).

## Central server

In Centreon, the central server is the main console where you monitor resources. The central server allows you to:

- configure the monitoring of your whole infrastructure,
- monitor resources
- see what all your Centreon servers (all [pollers](#poller)) monitor, using its web interface.

## Downtime

Downtime is a period during which [notifications](#notification) are disabled for a resource. Downtime is used during planned maintenance operations, to avoid unnecessary alerts.

**See also**: [Planning a downtime](../alerts-notifications/downtimes.md).

## Engine

See [**Monitoring engine**](#monitoring-engine).

## FQDN

Fully Qualified Domain Name: hostname and domain name for a server. Example: demo.centreon.com (hostname: demo, domain name: centreon.com).

## Graph

Graphs are generated from the [metrics](#metric) that make up [services](#service). They show how these metrics evolve over time.

**See also**: [Charts management](../metrology/chart-management.md) and the other topics in this section.

## Heritage

Principle according to which a parameter of a [template](#template) is applied to the resource that inherits from this template.

## Host

Equipment that has an IP address or an FQDN, and that you want to monitor. Examples: a Linux server, an internet router, a website, a 3D printer, an EC2 instance, a docker host, a cash register, etc. A host can have one or more associated [services](#service).

A host can have one of the following [statuses](#status): OK, DOWN and UNREACHABLE.

See also: [Monitoring a host](../monitoring/basic-objects/hosts-create.md) and the other topics in this section.

## Metric

A metric (or performance data) is part of a [service](#service). This piece of data allows you to display graphs and to define thresholds according to which you will receive notifications. These thresholds will determine the [status](#status) of the service the metric belongs to.

When a service has several metrics, the status of the service is the status of the worst metric.

You can see all metrics attached to a service in the details panel of the service.

## Monitoring action

Any action performed in the interface that acts on your monitoring in real time. For instance, to [acknowledge a resource](#acknowledgement), to [plan a downtime](#downtime), to force a check, etc.

## Monitoring Connector

The term "Monitoring Connector" refers to a [plugin](#plugin) and the corresponding pack.

A pack contains the configuration of the plugin in Centreon (command, [templates](#template), thresholds), as well as data required by the automatic discovery feature.

**See also**:

- [Monitoring Connectors](../monitoring/pluginpacks.md),
- [Introduction to Monitoring Connectors](/pp/integrations/plugin-packs/getting-started/introduction).

## Monitoring engine

Centreon Engine is the software component that plans checks, executes them, and [notifies](#notification) users if an incident occurs.
Centreon Engine is present on [pollers](#poller) and the [central server](#central-server).

## Notification

Message that warns a user that an incident has occurred. You can configure notifications on various [statuses](#status).

**See also**: [How notifications work](../alerts-notifications/notif-concept.md) and the other topics in this section.

## Performance data

See [**Metric**](#metric).

## Plugin

A plugin is a monitoring probe, i.e. a binary executable or a script that is called by the [monitoring engine](#monitoring-engine) to carry out a check on a [host](#host) or [service](#service). The plugin determines which status should be sent to the monitoring engine, based on the checks it makes and on the thresholds defined in the configuration of the host or service.

## Poller

A poller is a monitoring server installed in your infrastructure to monitor your resources. A poller is attached to the [central server](#central-server).

- A Centreon poller monitors [resources](#resource). It has a [monitoring engine](#monitoring-engine).

- A poller has no graphical interface: the resources it monitors are displayed in the interface of the central server it is attached to.

"Poller" is also used to refer to the monitoring engine that is present in a central server and a poller.

## Recurring downtime

Recurring downtime periods are [downtimes](#downtime) that occur regularly.

**See also**: [Recurrent downtimes](../alerts-notifications/downtimes.md#recurrent-downtimes).

## Resource

Object monitored by a Centreon platform ([hosts](#host), [services](#service), metaservices).

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

- the availability of a [host](#host) (UP, DOWN),

- the availability or performance of a [service](#service) (OK, WARNING, CRITICAL, UNKNOWN).

PENDING is not a status: a resource is "pending" when it has just been created and hasn't been checked yet.

**See also**: [Possible statuses of a resource](../alerts-notifications/concepts.md).

## Status type

Indicates whether a change in [status](#status) is confirmed (HARD) or not confirmed (SOFT). For instance, if a status becomes HARD, notifications are triggered.

**See also**: [Status types](../alerts-notifications/concepts.md#status-types).

## Template

Skeleton of a [resource](#resource) that is preconfigured so that parameters defined on the skeleton are applied to the resource that inherits from it.

There are host templates and service templates.

**See also**:

- [Using host templates](../monitoring/basic-objects/hosts-templates.md),
- [Using service templates](../monitoring/basic-objects/services-templates.md),

## Widget

Configurable visual element that allows you to display data in a custom view.

**See also**: [Custom views](../alerts-notifications/custom-views.md).
