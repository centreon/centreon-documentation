---
id: hardware-storage-nimble-snmp
title: Nimble Storage
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

HPE Nimble Storage is a predictive flash storage technology developed by Nimble Storage that was based in San Jose, California
founded in early 2008. Nimble Storage produced hardware and software products for data storage, specifically data storage arrays
that use the iSCSI and Fibre Channel protocols and includes data backup and data protection features. Nimble is a subsidiary of
Hewlett Packard Enterprise.

## Monitoring Connector assets

### Monitored Objects

* Nimble Flash Arrays

### Available services

The current version of the Nimble SNMP Monitoring Connector can monitor the following services:

* Global-Stats
* Volumes

### Collected metrics

The following metrics are collected by the Centreon Nimble SNMP Plugin:

<Tabs groupId="sync">
<TabItem value="Volume-Usage" label="Volume-Usage">

| Metric name                    | Description                          | Unit  |
| :----------------------------- | :----------------------------------- | :---- |
| volume.space.usage.bytes       | Per volume space usage (in Bytes)    | Bytes |

</TabItem>
<TabItem value="Global-Stats" label="Global-Stats">

| Metric name                           | Description                          | Unit    |
| :------------------------------------ | :----------------------------------- | :------ |
| system.io.read.usage.bytespersecond   | Sytem read I/O                       | Bytes/s |
| system.io.write.usage.bytespersecond  | Sytem write I/O                      | Bytes/s |
| system.io.read.usage.iops             | Sytem read IOPS count                | Iops    |
| system.io.write.usage.iops            | Sytem write IOPS count               | Iops    |
| system.io.read.time.seconds           | Sytem read time                      | Seconds |
| system.io.write.time.seconds          | Sytem write time                     | Seconds |

</TabItem>
</Tabs>

## Prerequisites

### Nimble SNMP Configuration

Enable SNMP on the Nimble device following the official HPE documentation:
https://infosight.hpe.com/InfoSight/media/cms/active/public/pubs_GUI_Administration_Guide_NOS_50x.whz/qzz1501525219979

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor Nimble Flash Arrays:

```bash
yum install centreon-plugin-Hardware-Storage-Nimble-Snmp
```

2. On the centreon Web interface, install the *Netdata RestAPI* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor Nimble Flash Arrays:

```bash
yum install centreon-plugin-Hardware-Storage-Nimble-Snmp
```

2. Install the Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-storage-nimble-snmp
```

3. On the centreon Web interface, install the *Nimble SNMP* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
</Tabs>

## Configuration

* Log into Centreon and add new host through "Configuration > Hosts".
* Fill *SNMP community* and *SNMP version* fields 
* Apply the template *HW-Storage-Nimble-SNMP* to the Host

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters 
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## FAQ

### Why do I get the following error message: 

#### UNKNOWN: SNMP GET Request : Timeout

This message generally means that you are not using the right SNMP version or community. It could also indicate that a third-party device like a firewall is blocking the SNMP UDP/161 request.

#### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - the Nimble device doesn't support the MIB used by the plugin
  - the targeted SNMP OID cannot be fetched because of insufficient privileges on the device
