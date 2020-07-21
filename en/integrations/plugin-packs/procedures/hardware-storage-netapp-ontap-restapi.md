---
id: hardware-storage-netapp-ontap-restapi
title: NetApp Ontap Rest API
---

## Overview

ONTAP or Data ONTAP or Clustered Data ONTAP (cDOT) or Data ONTAP 7-Mode is NetApp's proprietary operating system used in storage disk arrays such as NetApp FAS and AFF, ONTAP Select and Cloud Volumes ONTAP

## Plugin-Pack assets

### Monitored objects

* Cluster
* Hardware
* Luns
* Snapmirrors
* Volumes

### Discovery rules

<!--Services-->

| Rule name                                   | Description                                 |
| :------------------------------------------ | :------------------------------------------ |
| HW-Storage-Netapp-Ontap-Restapi-Volume-Name |  Discover volumes attached to your storage  |

### Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--Cluster-->

| Metric name                           | Description                                                                                    |
| :------------------------------------ | :--------------------------------------------------------------------------------------------- |
| node_status                           | The node status                                                                                |
| cluster.io.read.usage.bytespersecond  | I/O read. Unit: B/s                                                                            |
| cluster.io.write.usage.bytespersecond | I/O written. Unit: B/s                                                                         |
| cluster.io.read.usage.iops            | I/O read per seconds. Unit: iops                                                               |
| cluster.io.write.usage.iops           | I/O written per seconds. Unit: iops                                                            |
| cluster.io.read.latency.milliseconds  | I/O read latency. Unit: ms                                                                     |
| cluster.io.write.latency.milliseconds | I/O written latency. Unit: ms                                                                  |

<!--Hardware-->

| Metric name                         | Description                                                                 |
| :---------------------------------- | :---------------------------------------------------------------------------|
| status                              | Check components operational status: bay, fru, shelf. Unit: count           |

<!--Luns-->

| Metric name                         | Description                                                                 |
| :---------------------------------- | :---------------------------------------------------------------------------|
| status                              | The LUN status                                                              |

<!--Snapmirrors-->

| Metric name                         | Description                                                                 |
| :---------------------------------- | :---------------------------------------------------------------------------|
| status                              | The snapmirror status                                                       |

<!--Volumes-->

| Metric name                          | Description                                                                                    |
| :----------------------------------- | :--------------------------------------------------------------------------------------------- |
| status                               | The volume status                                                                              |
| volume.space.usage.bytes             | Volume space usage. Unit: B. By instances (```volume_name```)                                  |
| volume.space.usage.percentage        | Volume space percentage usage. Unit: %. By instances (```volume_name```)                       |
| volume.space.free.bytes              | Volume free space. Unit: B. By instances (```volume_name```)                                   |
| volume.io.read.usage.bytespersecond  | Volume I/O read. Unit: B/s. By instances (```volume_name```)                                   |
| volume.io.write.usage.bytespersecond | Volume I/O written. Unit: B/s. By instances (```volume_name```)                                |
| volume.io.read.usage.iops            | Volume I/O read per seconds. Unit: iops. By instances (```volume_name```)                      |
| volume.io.write.usage.iops           | Volume I/O written per seconds. Unit: iops. By instances (```volume_name```)                   |
| volume.io.read.latency.milliseconds  | Volume I/O read latency. Unit: ms. By instances (```volume_name```)                            |
| volume.io.write.latency.milliseconds | Volume I/O written latency. Unit: ms. By instances (```volume_name```)                         |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### NetApp ONTAP configuration

A read-only account (login/password) is required.

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor NetApp ONTAP ressources:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

2. On the Centreon Web interface, install the 'NetApp Ontap Rest API' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor NetApp ONTAP ressources:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-storage-netapp-ontap-restapi
```

3. On the Centreon Web interface, install the 'NetApp Ontap Rest API' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

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
