---
id: hardware-storage-nimble-restapi
title: Nimble Storage Rest API
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

* Nimble Flash Arrays (NimbleOS >=2.3.x)

### Available services

The current version of the Nimble SNMP Monitoring Connector can monitor the following services:

* Arrays
* Hardware
* Volumes

### Collected metrics

The following metrics are collected by the Centreon Nimble Rest API Plugin:

<Tabs groupId="sync">
<TabItem value="Arrays" label="Arrays">

| Metric name                            | Description (per array )             | Unit    |
| :------------------------------------- | :----------------------------------- | :------ |
| status                                 | Array status                         | String  |
| array.space.usage.bytes                | Used space                           | Bytes   |
| array.space.usage.percentage           | Used space                           |   %     |
| array.space.free.bytes                 | Free space                           | Bytes   |
| array.snapshots.compression.rate.count | Snapshot compression ratio           |         |
| array.snapshots.reduction.rate.count   | Snapshot reduction ratio             |         |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Component name | Description (per array ) | Unit   |
|:---------------|:-------------------------|:-------|
| Disk           | Disk & RAID state        | String |
| Fan            | Fan state & speed        | rpm    |
| Power Supply   | Power Supply state       | String |
| Temperature    | Temperature state        | °C     |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Metric name                           | Description (per volume)             | Unit    |
| :------------------------------------ | :----------------------------------- | :------ |
| status                                | Volume status                        | String  |
| volume.space.usage.bytes              | Space usage                          | Bytes   |
| volume.io.read.usage.bytespersecond   | Read I/O volume                      | Bytes/s |
| volume.io.write.usage.bytespersecond  | Write I/O volume                     | Bytes/s |
| volume.io.read.usage.iops             | Read IOPS count                      | Iops    |
| volume.io.write.usage.iops            | Write IOPS count                     | Iops    |
| volume.io.read.latency.milliseconds   | Read latency                         | ms      |
| volume.io.write.latency.milliseconds  | Write latency                        | ms      |

</TabItem>
</Tabs>

## Prerequisites

### Nimble Rest API configuration

Make sure you can reach Nimble device over its API. Read Prerequistes of the official HPE documentation:
https://infosight.hpe.com/InfoSight/media/cms/active/public/pubs_REST_API_Reference_NOS_51x.whz/jun1455055569904

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor Nimble Flash Arrays:

```bash
yum install centreon-pack-hardware-storage-nimble-restapi.noarch
```

2. On the centreon Web interface, install the *Nimble Storage Rest API* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor Nimble Flash Arrays:

```bash
yum install centreon-plugin-Hardware-Storage-Nimble-Restapi.noarch
```

2. Install the Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-storage-nimble-restapi.noarch
```

3. On the centreon Web interface, install the *Nimble Storage Rest API* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
</Tabs>

## Configuration

* Log into Centreon and add new host through "Configuration > Hosts".
* Apply the template *HW-Storage-Nimble-Restapi* to the Host and configure all the mandatories Macros:

| Mandatory | Name                | Description                                                                  |
| :-------- | :------------------ | :--------------------------------------------------------------------------- |
| X         | APIPORT             | Port used (Default: 5392)                                                    |
| X         | APIPROTO            | Specify protocol if needed (Default: 'https')                                |
| X         | APIUSERNAME         | Specify the API Username                                                     |
| X         | APIPASSWORD         | Specify the API Password                                                     |    
|           | APIEXTRAOPTIONS     | Any extra option you may want to add to the command (eg. a `--verbose` flag) |

## FAQ

### Why do I get the following error message: 

#### ```UNKNOWN: 500 Can't connect to myserver.mycompany.com:19999```

This error message means that the Centreon Plugin couldn't successfully connect to the Nimble device API.

Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. 
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the Nimble API, this error message means that the Centreon Plugin library does not support

the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.

#### ```UNKNOWN: Cannot load module 'Net::Curl::Easy'```

This error message means that a Perl library required to use the *curl* backend is missing.

In order to fix this issue, install the 'Net::Curl::Easy' Perl library using the following command:

```bash
yum install perl-Net-Curl
```
