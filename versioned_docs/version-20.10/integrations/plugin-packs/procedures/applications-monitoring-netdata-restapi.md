---
id: applications-monitoring-netdata-restapi
title: Netdata RestAPI
---

## Overview

Netdata is an open source tool to visualize and monitor real-time metrics, optimized to accumulate all types of data, such as CPU usage, disk activity,
SQL queries, visits to a website, etc.

The tool is designed to visualize activity in the greatest possible detail, allowing the user to obtain an overview of what is happening and 
what has just happened in their system or application.

## Plugin-Pack assets

### Monitored Objects

The Netdata RestAPI Centreon Plugin-Pack allows to collect and monitor servers' key metrics by interacting with the Netdata agent RestAPI.
The open-source and highly efficient Netdata agent can be used on the following platforms

* Linux (Debian, Ubuntu, RedHat, CentOS, Fedora, Arch...)
* BSD
* MacOs
* pfSense
* Synology

### Available services

The current version of the Netdata RestAPI Plugin-Pack can monitor the following services:

* Alarms
* CPU
* Disks (Usage & Inodes)
* Load
* RAM
* Swap
* Inodes
* Network traffic
* Custom Netdata "chart"

### Collected metrics

The following metrics are collected by the Centreon Netdata RestAPI Plugin:

<!--DOCUSAURUS_CODE_TABS-->

<!--Alarms-->

| Metric name                           | Description                                                | Unit |
| :------------------------------------ | :--------------------------------------------------------- | :--- |
| netdata.alarms.current.total.count    | Current total active alarms triggered by the Netdata agent |      |
| netdata.alarms.current.warning.count  | Current warning alarms triggered by the Netdata agent      |      |
| netdata.alarms.current.critical.count | Current critical alarms triggered by the Netdata agent     |      |

<!--CPU-->

| Metric name                     | Description             | Unit |
| :------------------------------ | :---------------------- | :--- |
| cpu.utilization.percentage      | Average total CPU usage | %    |
| core.cpu.utilization.percentage | Per core CPU usage      | %    |

<!--Disks-->

| Metric name                    | Description                          | Unit |
| :----------------------------- | :----------------------------------- | :--- |
| storage.partitions.count       | Total number of partitions           |      |
| storage.space.usage.bytes      | Per partition space usage (in Bytes) | B    |
| storage.space.usage.percentage | Per partition space usage (in %)     | %    |
| storage.space.free.bytes       | Per partition free space (in Bytes)  | B    |

<!--Inodes-->

| Metric name                     | Description                | Unit |
| :------------------------------ | :------------------------- | :--- |
| storage.inodes.usage.percentage | Per partition Inodes usage | %    |

<!--Load-->

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--: |
| load1       | System load average on a 1 minute period   |      |
| load5       | System load average on a 5 minutes period  |      |
| load15      | System load average on a 15 minutes period |      |

<!--Memory-->

| Metric name             | Description                                    | Unit |
| :---------------------- | :--------------------------------------------- | :--: |
| memory.usage.bytes      | Total current memory usage (in Bytes)          |  B   |
| memory.usage.percentage | Total current memory usage (in %)              |  %   |
| memory.free.bytes       | Current free memory                            |  B   |
| memory.buffer.bytes     | Current amount of memory allocated to 'buffer' |  B   |
| memory.cached.bytes     | Current amount of memory allocated to 'cached' |  B   |
| memory.shared.bytes     | Current amount of memory allocated to 'shared' |  B   |

<!--Swap-->

| Metric name           | Description                 | Unit |
| :-------------------- | :-------------------------- | :--: |
| swap.usage.bytes      | Swap space usage (in Bytes) |  B   |
| swap.usage.percentage | Swap space usage (in %)     |  %   |
| swap.free.bytes       | Free Swap space             |  B   |

<!--Traffic-->

| Metric name                       | Description                    | Unit |
| :-------------------------------- | :----------------------------- | :--: |
| network.traffic.in.bitspersecond  | Per interface incoming traffic | b/s  |
| network.traffic.out.bitspersecond | Per interface outgoing traffic | b/s  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Netdata agent setup

The Netdata agent has to be set up and configured on the targeted server in order to use the Plugin-Pack.

More information about how to get and install the agent is available in the official Netdata documentation:
https://learn.netdata.cloud/docs/agent/packaging/installer

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Netdata agents:

```bash
yum install centreon-plugin-Applications-Monitoring-Netdata-Restapi
```

2. On the centreon Web interface, install the *Netdata RestAPI* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Netdata agents:

```bash
yum install centreon-plugin-Applications-Monitoring-Netdata-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-monitoring-netdata-restapi.noarch
```

3. On the centreon Web interface, install the *Netdata RestAPI* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add new host through "Configuration > Hosts".
* Apply the template *App-Monitoring-Netdata-Restapi* to the Host and configure all the mandatories Macros:

| Mandatory | Name                | Description                                                                  |
| :-------- | :------------------ | :--------------------------------------------------------------------------- |
| X         | NETDATAAPIPORT      | Port used (Default: 19999)                                                   |
| X         | NETDATAAPIPROTOCOL  | Specify https if needed (Default: 'http')                                    |
| X         | NETDATAAPIENDPOINT  | Specify the API URL path (Default: '/api/v1')                                |
|           | EXTRAOPTIONS        | Any extra option you may want to add to the command (eg. a `--verbose` flag) |

## FAQ

### How can I test my configuration and what do the main parameters stand for ?

Once the Centreon plugin installed, you can test it directly from the Centreon Poller CLI by logging with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_netdata_restapi.pl \
	--plugin=apps::monitoring::netdata::restapi::plugin \
	--hostname=10.0.0.1 \
	--mode=cpu \
	--warning-average=70 \
	--critical-average=80 \
	--verbose
```

Expected command output is shown below:

```bash 	
OK: 2 CPU(s) average usage is 17.23 % | 
'cpu.utilization.percentage'=17.23%;0:40;0:50;0;100 '0#core.cpu.utilization.percentage'=16.71%;;;0;100 '1#core.cpu.utilization.percentage'=17.75%;;;0;100
CPU '0' usage: 16.71 %
CPU '1' usage: 17.75 %
```

The above command checks the average CPU usage (```--mode=cpu```) of an Unix server hosting the Netdata agent. The Plugin gets the information by
requesting the agent API (```--plugin=apps::monitoring::netdata::restapi::plugin --hostname=10.0.0.1```).

This command would trigger a WARNING alarm if the average CPU usage raises beyond 70% (```--warning-average=70```)
and a CRITICAL beyond 80% (```--critical-average=80```).

The available thresholds as well as all of the options that can be used with this Plugin 
can be displayed by adding the ```--help``` parameter to the command:

```
/usr/lib/centreon/plugins/centreon_monitoring_netdata_restapi.pl \
	--plugin=apps::monitoring::netdata::restapi::plugin \
	--hostname=10.0.0.1 \
	--mode=cpu \
	--help
```

### Why do I get the following error message: 

#### ```UNKNOWN: 500 Can't connect to myserver.mycompany.com:19999```

This error message means that the Centreon Plugin couldn't successfully connect to the Netdata agent API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. 
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the Netdata agent API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.

#### ```UNKNOWN: Cannot load module 'Net::Curl::Easy'```

This error message means that a Perl library required to use the *curl* backend is missing.

In order to fix this issue, install the 'Net\:\:Curl\:\:Easy' Perl library using the following command:

```bash
yum install perl-Net-Curl
```
