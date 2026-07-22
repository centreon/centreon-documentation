---
id: cma-migratenscpp
title: Centreon Monitoring Agent - Migrate from NSClient++
description: Guide for migrating hosts monitored with NSClient++ or NRPE to the Centreon Monitoring Agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you're already using NSClient++ or NRPE with Centreon, this guide will help you gradually switch to Centreon Monitoring Agent.

The Centreon Monitoring Agent offers a number of advantages over NSClient and NRPE:

* Better performance in executing controls, i.e. reduced impact on the host.
* Enhanced security, implemented by default (TLS encryption, authentication token).
* Easy configuration with a dedicated interface, especially for connection security.
* An "offline" mode for installing plugins on hosts without internet access.
* Command-line installation mode for mass deployment under Windows.
* A monitoring method based solely on passive checks.
* Full Centreon support and dedicated roadmap.

## Agent deployment and configuration

Deploy and configure the Centreon monitoring agent using the [documentation](cma-setup.md).

## Monitoring configuration

### Install the dedicated Windows and/or Linux Monitoring connectors (as required)

Here is the correspondence with NSClient++/NRPE Connectors:

| NSClient++/NRPE Connector | Centreon Monitoring Agent Connector |
| ----------- | ----------- |
| Windows NSClient API | Windows Centreon Monitoring Agent |
| Windows NSClient 0.5 NRPE | Windows Centreon Monitoring Agent |
| Linux NRPE4 | Linux Centreon Monitoring Agent |

### Modify host templates on existing hosts

Here is the correspondence with NSClient++/NRPE host templates:

| NSClient++/NRPE Host template | Centreon Monitoring Agent Host template |
| ----------- | ----------- |
| OS-Windows-NSClient-05-Restapi-custom | Windows Centreon Monitoring Agent |
| OS-Windows-NSClient-05-NRPE-custom | Windows Centreon Monitoring Agent |
| OS-Linux-NRPE4-custom | Linux Centreon Monitoring Agent |

### Adapt/replace existing services

| Command type | Description |
| ----------- | ----------- |
| Centreon plugin commands | These are the same plugins as those for NSClient/NRPE; only the command changes. Macros with the same name are kept, so you can replace the existing service template with the one linked to the Centreon Monitoring Agent.<br/><br/>For example: **OS-Linux-Memory-NRPE4** → **OS-Linux-Memory-NRPE4-custom** |
| Native check commands (NSClient++) | The Centreon Monitoring Agent provides native checks that differ in structure (JSON command) from those of NSClient++ and the rest of the Centreon ecosystem.<br/><br/>It will be necessary to create a new service or modify the existing service template by adapting the macros.<br/><br/>For example: **OS-Windows-NSClient05-NRPE-Cpu** ou **OS-Windows-NSClient05-Restapi-Cpu** → **OS-Windows-Centreon-Monitoring-Agent-CPU** |
| Customizable check commands | These scripts remain compatible with the Centreon Monitoring Agent. You will need to adapt the commands (or duplicate them to work in double run mode). A [detailed guide](cma-custom.md) is available. |
