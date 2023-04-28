---
id: hardware-storage-netapp-ontap-restapi
title: NetApp Ontap Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

ONTAP or Data ONTAP or Clustered Data ONTAP (cDOT) or Data ONTAP 7-Mode is NetApp's proprietary operating system used in storage disk arrays such as NetApp FAS and AFF, ONTAP Select and Cloud Volumes ONTAP

## Monitoring Connector assets

### Monitored objects

* Aggregates
* Cluster
* Hardware
* Luns
* Quotas
* Snapmirrors
* Volumes

### Discovery rules

| Rule name                                   | Description                                 |
| :------------------------------------------ | :------------------------------------------ |
| HW-Storage-Netapp-Ontap-Restapi-Volume-Name |  Discover volumes attached to your storage  |

### Monitored metrics 

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Metric Name                                              | Unit  |
|:---------------------------------------------------------|:------|
| *aggregate_name*#aggregate.space.usage.bytes             | B     |
| *aggregate_name*#aggregate.space.free.bytes              | B     |
| *aggregate_name*#aggregate.space.usage.percentage        | %     |
| *aggregate_name*#aggregate.io.read.usage.bytespersecond  | B/s   |
| *aggregate_name*#aggregate.io.write.usage.bytespersecond | B/s   |
| *aggregate_name*#aggregate.io.other.usage.bytespersecond | B/s   |
| *aggregate_name*#aggregate.io.total.usage.bytespersecond | B/s   |
| *aggregate_name*#aggregate.io.read.usage.iops            | iops  |
| *aggregate_name*#aggregate.io.write.usage.iops           | iops  |
| *aggregate_name*#aggregate.io.other.usage.iops           | iops  |
| *aggregate_name*#aggregate.io.total.usage.iops           | iops  |
| *aggregate_name*#aggregate.io.read.latency.microseconds  | µs    |
| *aggregate_name*#aggregate.io.write.latency.microseconds | µs    |
| *aggregate_name*#aggregate.io.other.latency.microseconds | µs    |
| *aggregate_name*#aggregate.io.total.latency.microseconds | µs    |

</TabItem>
<TabItem value="Cluster" label="Cluster">

| Metric Name                                          | Unit  |
| :----------------------------------------------------| :-----|
| node_status                                          |       |
| *cluster_name*#cluster.io.read.usage.bytespersecond  | B/s   |
| *cluster_name*#cluster.io.write.usage.bytespersecond | B/s   |
| *cluster_name*#cluster.io.read.usage.iops            | iops  |
| *cluster_name*#cluster.io.write.usage.iops           | iops  |
| *cluster_name*#cluster.io.read.latency.milliseconds  | ms    |
| *cluster_name*#cluster.io.write.latency.milliseconds | ms    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric Name  | Unit  |
| :------------| :-----|
| bay status   |       |
| fru status   |       |
| shelf status |       |

</TabItem>
<TabItem value="Luns" label="Luns">

| Metric Name | Unit  |
| :-----------| :-----|
| lun status  |       |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Metric Name                                                    | Unit  |
| :--------------------------------------------------------------| :------|
| *svm_name~volume_name~qtree_name*#quota.space.usage.bytes      | B      |
| *svm_name~volume_name~qtree_name*#quota.space.free.bytes       | B      |
| *svm_name~volume_name~qtree_name*#quota.space.usage.percentage | %      |

</TabItem>
<TabItem value="Snapmirrors" label="Snapmirrors">

| Métrique          | Unité |
| :-----------------| :-----|
| snapmirror status |       |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Metric Name                                                 | Unit  |
| :-----------------------------------------------------------| :-----|
| volume status                                               |       |
| *svm_name:volume_name*#volume.space.usage.bytes             | B     |
| *svm_name:volume_name*#volume.space.usage.percentage        | %     |
| *svm_name:volume_name*#volume.space.free.bytes              | B     |
| *svm_name:volume_name*#volume.io.read.usage.bytespersecond  | B/s   |
| *svm_name:volume_name*#volume.io.write.usage.bytespersecond | B/s   |
| *svm_name:volume_name*#volume.io.read.usage.iops            | iops  |
| *svm_name:volume_name*#volume.io.write.usage.iops           | iops  |
| *svm_name:volume_name*#volume.io.read.latency.milliseconds  | ms    |
| *svm_name:volume_name*#volume.io.write.latency.milliseconds | ms    |

</TabItem>
</Tabs>

## Prerequisites

### NetApp ONTAP configuration

A read-only account (login/password) is required.

## Setup 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor NetApp ONTAP ressources:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

2. On the Centreon Web interface, install the 'NetApp Ontap Rest API' Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor NetApp ONTAP ressources:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

2. Install the Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-storage-netapp-ontap-restapi
```

3. On the Centreon Web interface, install the 'NetApp Ontap Rest API' Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
</Tabs>

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the template *HW-Storage-NetApp-Ontap-Restapi-custom* and configure all the Macros:

| Mandatory   | Nom                    | Description                                                                |
| :---------- | :--------------------- | :------------------------------------------------------------------------- |
| X           | APIPORT                | Port used. Default is 443                                                  |
| X           | APIPROTO               | Protocol used. Default is https                                            |
| X           | APIUSERNAME            | Username to access to the API.                                             |
| X           | APIPASSWORD            | Password to access to the API.                                             |
|             | APIEXTRAOPTIONS        | Any extra option you may want to add to the command                        |

## FAQ

### How do I test my configuration through the CLI and what do the main parameters stand for ? 

Once the Centreon plugin installed, you can test it logging with the centreon-engine user:

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_restapi.pl \	
    --plugin=storage::netapp::ontap::restapi::plugin \
    --hostname=netapp.centreon.com \
    --port=443 \
    --proto=https \
    --api-username='admin' \
    --api-password='xxxx' \
    --mode=volumes \
    --verbose
```

The command above checks the status of the volumes (```--mode=volumes```) of the NetApp storage *netapp.centreon.com* (```--hostname=netapp.centreon.com```)
using the API username *admin* and the related password (```--api-username='admin' --api-password='xxxx'```).
The API connection uses the *HTTPS* protocol (```--proto=https```) on the port *443* (```--port=443```).
