---
id: hardware-devices-polycom-dma-snmp
title: Polycom DMA SNMP
---

## Overview

The Polycom RealPresence Distributed Media Application (DMA) is a unique network-based 
virtualization application that provides conference manager and call server functionality 
for managing and distributing calls across collaboration networks. 

The RealPresence DMA system is available in an Appliance Edition and a Virtual Edition 
(packaged as software only) that can be deployed on VMware, Hyper-V, KVM, Amazon AWS 
or Microsoft Azure cloud.

## Plugin-Pack assets

### Monitored objects

* DMA Devices (hardware & software)                 

## Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Alerts-->

| Metric name             | Description        | Unit  |
| :---------------------- | :----------------- | :---- |
| dma.alerts.total.count  | Number of alerts.  | Count |

Specify throug `--warning-status` and `--critical-status` options which severities
increase the total count of alerts.

<!--Conference-Manager-->

| Metric name                           | Description                                    | Unit   |
|:------------------------------------- |:-----------------------------------------------|:-------|
| manager.conferences.active.count      | Number of active conference on the DMA         | Count  |
| cluster.conferences.active.count      | Number of active conference on a cluster       | Count  |
| cluster.participants.active.count     | Number of active participants on a cluster     | Count  |
| cluster.local.database.users.count    | Number of local users in a cluster database    | Count  |
| cluster.custom.conference.rooms.count | Number of custom user rooms in a cluster       | Count  |
| cluster.video.port.usage.count        | Number of video ports used by a cluster        | Count  |
| cluster.video.port.free.count         | Number of free video ports on a cluster        | Count  |
| cluster.video.port.percentage         | Percentage of video port used by a cluster     | Count  |
| cluster.voice.port.usage.count        | Number of voice ports used by a cluster        | Count  |
| cluster.voice.port.free.count         | Number of free voice ports on a cluster        | Count  |
| cluster.voice.port.percentage         | Percentage of voice port used by a cluster     | Count  |

You can use the `--filter-cluster` option to narrow check scope to a specific cluster.

<!--Device-Registrations-->

| Metric name                                   | Description                                            | Unit  | 
| :-------------------------------------------- | :----------------------------------------------------- |------ |
| manager.registrations.count                   | Number of devices registered on the DMA                | Count |
| cluster.endpoint.registrations.active.count   | Number of endpoint active registrations on a cluster   | Count |
| cluster.endpoint.registrations.active.count   | Number of endpoint inactive registrations on a cluster | Count |

You can use the `--filter-cluster` option to narrow check scope to a specific cluster.

<!--Servers-usage-->

| Metric name                       | Description                               | Unit  |
|:--------------------------------- |:------------------------------------------|:----- |
| server.cpu.utilization.percentage | CPU Utilization of a server               |   %   |
| server.memory.usage.bytes         | Memory usage of a server                  |   B   |
| server.memory.free.bytes          | Free memory on a server                   |   B   |
| server.memory.usage.percentage    | Memory percentage use on a server         |   %   |
| server.swap.usage.percentage      | Swap usage of a server                    |   B   | 
| server.swap.free.bytes            | Free swap on a server                     |   B   |
| server.swap.usage.percentage      | Swap percentage use on a server           |   %   |
| server.disk.usage.bytes           | Disk space usage of a server              |   B   |
| server.disk.free.bytes            | Free disk space on a server               |   B   |
| server.disk.usage.percentage      | Disk percentage space usage on a server   |   %   |
| server.logs.usage.bytes           | Logs space usage of a server              |   B   |
| server.logs.free.bytes            | Free logs space on a server               |   B   |
| server.logs.usage.percentage      | Logs percentage space usage on a server   |   %   |

## Prerequisites

### Device Configuration

Configure SNMP on your RealPresence DMA device according to Polycom official documentation: 
https://documents.polycom.com/bundle/dma-ops-9-0/page/dma-ops-help/snmp/TOC_Configure_SNMP_Settings.htm

### Network flows

The Centreon Poller must be able to reach the UDP/161 SNMP port of the Polycom RealPresence DMA device.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor 
Polycom RealPresence DMA devices:


```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Dma-Snmp
```

2. On the Centreon Web interface, install the *Polycom DMA SNMP* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor
Polycom RealPresence DMA devices:

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Dma-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:


```bash
yum install centreon-pack-hardware-devices-polycom-dma-snmp
```

3. On the Centreon Web interface, install the *Polycom DMA SNMP* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.


<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *HW-Device-Polycom-Dma-SNMP-Custom* Host Template
* Fill SNMP Version and Community fields according to the device's configuration


  :warning: When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific auth parameters

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command:


```bash
TODO
```

```bash
TODO
```

Use the ```--help``` flag to display a dedicated manual for a given mode:

```bash
TODO
```

### How to monitor system metrics on the Ploycom RealPresence DMA ?

Polycom RealPresence DMA are Linux-Based, use the *OS-Linux-SNMP-Custom* Host 
Template to monitor the operating system layer.

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues: 
* Your SNMP server isn't started or misconfigured 
* An external device is blocking your request (firewall, ...)
