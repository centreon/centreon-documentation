---
id: hardware-storage-netapp-santricity-restapi
title: Netapp Santricity Restapi
---

## Overview

SANtricity is a data management software that powers and administers the NetApp E-Series storage arrays. 
With the SANtricity operating system (OS), you can perform all your management tasks while the storage remains online, with complete read and write data access.

## Plugin-Pack assets

### Monitored Objects

* Hardware
* Storage-Controllers
* Storage-Pools
* Storage-Systems
* Storage-Volumes

### Monitored metrics

Following metrics are collected from the SANtricity API:

<!--DOCUSAURUS_CODE_TABS-->

<!--Hardware-->

| Metric name                        | Description                                                                                              |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------- |
| status                             | Check components operational status: battery, cbd, ctrl, drive, fan, psu, storage, thsensor. Unit: count |
| hardware.drive.temperature.celsius | Check drives temperature. Unit: °C                                                                       |

<!--Storage Pools-->

| Metric name            | Description              |
| :--------------------  | :----------------------- |
| raid\_status           | Raid status information  | 


<!--Storage Controllers-->

| Metric name                          | Description                          |
| :----------------------------------- | :----------------------------------- |
| status                               | Controller operational status        |
| volume.cpu.utilization.percentage    | CPU volume utilization. Unit: %      |
| volume.io.read.usage.bytespersecond  | Volume IO read usage. Unit: B/s      |
| volume.io.write.usage.bytespersecond | Volume IO write usage. Unit: B/s     |
| system.io.read.usage.iops            | System read IOPS usage. Unit: count  |
| system.io.write.usage.iops           | System write IOPS usage. Unit: count |

<!--Storage Systems-->

| Metric name                 | Description                          |
| :-------------------------- | :----------------------------------- |
| status                      | System operational status            |
| pool.space.usage.bytes      | Pool space usage. Unit: B            |
| pool.space.usage.percentage | Pool space percentage usage. Unit: % |
| pool.space.free.bytes       | Pool free space. Unit: B             |


<!--Storage Volumes-->

| Metric name                          | Description                          |
| :----------------------------------- | :----------------------------------- |
| status                               | Volume operational status            |
| volume.io.read.usage.bytespersecond  | Volume IO read usage. Unit: B/s      |
| volume.io.write.usage.bytespersecond | Volume IO write usage. Unit: B/s     |
| system.io.read.usage.iops            | Volume read IOPS usage. Unit: count  |
| system.io.write.usage.iops           | Volume write IOPS usage. Unit: count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### SANtricity API configuration

To use the SANtricity API, you need to install and configure the SANtricity Web Services Proxy on a dedicated machine.

More information about the setup steps and the service configuration can be found in the official documentation hereafter:

### Online ressources

* Installing the SANtricity Web Services software: https://library.netapp.com/ecm/ecm_download_file/ECMLP2846165
* Configuring and using the SANtricity Rest API: https://library.netapp.com/ecmdocs/ECMLP2839901/html/v2.html 


## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Netapp SANtricity:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi
```

2. On the centreon Web interface, install the  *Netapp Santricity Restapi* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Netapp SANtricity:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-storage-netapp-santricity-restapi.noarch
```

3. On the centreon Web interface, install the  *Netapp Santricity Restapi* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

## Configuration

* Log into Centreon and add new host through "Configuration > Hosts".
* Apply the template "HW-Storage-Netapp-Santricity-Restapi-custom" and configure all the mandatories Macros:

| Mandatory   | Name               | Description                                                                |
| :---------- | :----------------- | :------------------------------------------------------------------------- |
| X           | APIPORT            | Port used (Default: 8080)                                                  |
| X           | APIUSERNAME        | SANtricity API username.                                                   |
| X           | APIPASSWORD        | SANtricity API password. Password checkbox must be checked                 |
| X           | APIPATH            | Specify api path (Default: '/devmgr/v2')                                   |
| X           | APIPROTO           | Specify https if needed (Default: 'http')                                  |
|             | APIEXTRAOPTIONS    | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### How do I test my configuration through the CLI and what do the main parameters stand for ?

Once the Centreon plugin installed, you can test it directly from the CLI by logging with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \
	--plugin=storage::netapp::santricity::restapi::plugin \
	--hostname=sancitricy.int.centreon.com \
    --port=8080 \
    --proto=http \
    --api-path='/devmgr/v2' \
	--api-username='admin' \
	--api-password='xxxx' \
	--mode='storage-volumes' \
	--verbose \
	--warning-volume-status='%{status} =~ /degraded/i'
	--critical-volume-status='%{status} =~ /failed/i'
```

Expected command output is shown below:

```bash 	
OK: storage system 'SAN-XXX' volumes are ok |
checking storage system 'SAN-XXXX'
    volume 'Datastore_X' status: optimal
    volume 'Datastore_Y' status: optimal
```

The command above checks the status of the volumes (```-mode=storage-volumes```) of the SANtricity server *santricity.int.centreon.com* (```--hostname=santricity.int.centreon.com```) 
using the API username *admin* and the related password (```--api-username='admin' --api-password='xxxx'```).
The API connection uses the *HTTP* protocol (```--proto=http```) on the port *8080* (```--port=8080```). 
The API path used is */devmgr/v2* (```--api-path='/devmgr/v2'```).

This command would trigger the following alerts:
  * WARNING if a volume is in a degraded status.
  * CRITICAL if a volume is in a failed status.

Some thresholds can also be set on metrics using the ```--warning-*``` and ```--critical-*``` options 
(where \* stands for the name of the metric).

The available thresholds as well as all of the options that can be used with this Plugin can be displayed by adding the ```--help``` parameter to the command:               

```
/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \
        --plugin=storage::netapp::santricity::restapi::plugin \
        --mode=storage-volumes \
	--help
```

You can display all of the modes that come with the Plugin with the command below: 

```bash
/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \
	--plugin=storage::netapp::santricity::restapi::plugin \
	--list-mode                            
``` 

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to santricity.int.centreon.com:8080```

This error message means that the Centreon Plugin couldn't successfully connect to the Netapp SANtricity API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. 
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the SANtricity API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.

#### ```UNKNOWN: Cannot load module 'Net::Curl::Easy'```

This error message means that a Perl library required to use the *curl* backend is missing.

In order to fix this issue, install the 'Net\:\:Curl\:\:Easy' Perl library using the following command:

```bash
yum install perl-Net-Curl
```

