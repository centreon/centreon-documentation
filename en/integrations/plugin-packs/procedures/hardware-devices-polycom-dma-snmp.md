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
* DMA Clusters
* Attached Clusters, Servers & Device registrations status

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Alerts-->

| Metric name             | Description        | Unit  |
| :---------------------- | :----------------- | :---- |
| dma.alerts.total.count  | Number of alerts.  | Count |

Specify through the `--warning-status` and `--critical-status` options which severities
increase the total count of alerts.

<!--Conference-Manager-->

| Metric name                               | Description                                    | Unit   |
|:----------------------------------------- |:-----------------------------------------------|:-------|
| dma.conferences.active.count              | Number of active conference on the DMA         | Count  |
| dma.cluster.conferences.active.count      | Number of active conference on a cluster       | Count  |
| dma.cluster.participants.active.count     | Number of active participants on a cluster     | Count  |
| dma.cluster.local.database.users.count    | Number of local users in a cluster database    | Count  |
| dma.cluster.custom.conference.rooms.count | Number of custom user rooms in a cluster       | Count  |
| dma.cluster.video.port.usage.count        | Number of video ports used by a cluster        | Count  |
| dma.cluster.video.port.free.count         | Number of free video ports on a cluster        | Count  |
| dma.cluster.video.port.percentage         | Percentage of video port used by a cluster     | %      |
| dma.cluster.voice.port.usage.count        | Number of voice ports used by a cluster        | Count  |
| dma.cluster.voice.port.free.count         | Number of free voice ports on a cluster        | Count  |
| dma.cluster.voice.port.percentage         | Percentage of voice port used by a cluster     | %      |

You can use the `--filter-cluster` option to narrow check scope to a specific cluster.

<!--Clusters-Usage-->

| Metric name                           | Description                                              | Unit  |
|:--------------------------------------|:---------------------------------------------------------|:------|
| dma.clusters.total.count              | Total number of DMA clusters                             | Count |
| dma.cluster.activecalls.count         | Current active calls per cluster                         | Count |
| dma.cluster.licenses.free.count       | Current free licenses sessions per cluster               | Count |
| dma.cluster.licenses.usage.percentage | Current percentage of licenses sessions used per cluster | %     |

You can use the `--filter-cluster` option to narrow check scope to a specific cluster.

<!--Device-Registrations-->

| Metric name                                         | Description                                            | Unit  | 
| :-------------------------------------------------- | :----------------------------------------------------- |------ |
| dma.registrations.count                             | Number of devices registered on the DMA                | Count |
| dma.cluster.endpoint.registrations.active.count     | Number of endpoint active registrations on a cluster   | Count |
| dma.cluster.endpoint.registrations.inactive.count   | Number of endpoint inactive registrations on a cluster | Count |

You can use the `--filter-cluster` option to narrow check scope to a specific cluster.

<!--Servers-usage-->

| Metric name                           | Description                               | Unit  |
|:------------------------------------- |:------------------------------------------|:----- |
| dma.server.cpu.utilization.percentage | CPU Utilization of a server               |   %   |
| dma.server.memory.usage.bytes         | Memory usage of a server                  |   B   |
| dma.server.memory.free.bytes          | Free memory on a server                   |   B   |
| dma.server.memory.usage.percentage    | Memory percentage use on a server         |   %   |
| dma.server.swap.usage.percentage      | Swap usage of a server                    |   B   | 
| dma.server.swap.free.bytes            | Free swap on a server                     |   B   |
| dma.server.swap.usage.percentage      | Swap percentage use on a server           |   %   |
| dma.server.disk.usage.bytes           | Disk space usage of a server              |   B   |
| dma.server.disk.free.bytes            | Free disk space on a server               |   B   |
| dma.server.disk.usage.percentage      | Disk percentage space usage on a server   |   %   |
| dma.server.logs.usage.bytes           | Logs space usage of a server              |   B   |
| dma.server.logs.free.bytes            | Free logs space on a server               |   B   |
| dma.server.logs.usage.percentage      | Logs percentage space usage on a server   |   %   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Device Configuration

Configure the proper SNMP settings on your RealPresence DMA device according to Polycom official documentation: 
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


  :warning: When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command:


```bash
/usr/lib/centreon/plugins/centreon_polycom_dma_snmp.pl \
    --plugin=hardware::devices::polycom::dma::snmp::plugin \
    --mode=clusters \
    --hostname=10.0.0.1 \
    --snmp-version='2c'
    --snmp-community='mysnmpcommunity' \
    --critical-cluster-status='%{cluster_status} =~ /outOfService/i' \
    --critical-license-status='%{license_status} =~ /notinstalled/i' \
    --warning-cluster-license-usage-prct='80' \
    --critical-cluster-license-usage-prct='90' \
    --verbose
```

Expected command output is shown below: 

```bash
OK: Total clusters : 1 - Cluster 'my_dma_cluster_1' Active calls : 78, Free licenses : 722, Licenses percentage usage : 9.75% |
'dma.clusters.total.count'=1;;;0; 'my_dma_cluster_1#dma.cluster.activecalls.count'=78;;;;800 
'my_dma_cluster_1#dma.cluster.licenses.free.count'=722;;;0; 'my_dma_cluster_1#dma.cluster.licenses.usage.percentage'=9.75%;0:80;0:90;0;
Cluster 'my_dma_cluster_1' Active calls : 78, Free licenses : 722, Licenses percentage usage : 9.75%
```

The command above monitors the clusters attached to a DMA device (```--plugin=hardware::devices::polycom::dma::snmp::plugin --mode=clusters```) identified
by the IP address *10.0.0.1* (```--hostname=10.0.0.1```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='mysnmpcommunity'```).

This command would trigger a WARNING alarm if the current amount of active calls reaches 80% of the total calls 
authorized by the license (```--warning-cluster-license-usage-prct='80'```) and a CRITICAL alarm over 90% (```--critical-cluster-license-usage-prct='90'```).

A CRITICAL alarm would also be triggered in the following situations:
* if the cluster reports a *Out of Service* status (```--critical-cluster-status='%{cluster_status} =~ /outOfService/i'```)
* if the DMA device reports an *invalid* license for the cluster (```--critical-license-status='%{license_status} =~ /notinstalled/i'```)

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_polycom_dma_snmp.pl --plugin=hardware::devices::polycom::dma::snmp::plugin --mode=clusters --help
```

### How to monitor system metrics on the Ploycom RealPresence DMA ?

Polycom RealPresence DMA are Linux-Based, use the *OS-Linux-SNMP-Custom* Host 
Template in addition with the DMA Template to monitor the operating system layer.

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues: 
* The SNMP agent of the device isn't started or is misconfigured 
* An external device is blocking the request (firewall, ...)
