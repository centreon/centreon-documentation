---
id: applications-vernemq-restapi
title: VerneMQ Restapi
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

VerneMQ is a scalable and open source MQTT broker that connects IoT, M2M, Mobile, and web applications
The VerneMQ Monitoring Connector monitors Clusters, Listeners, Plugins, and sessions using the RestAPI.

## Monitoring Connector Assets

### Monitored Objects

* VerneMQ including Clusters, Listeners, Plugins, Sessions

### Collected Metrics

More information about collected metrics is available in the official VerneMQ documentation : https://docs.vernemq.com/monitoring/introduction

<Tabs groupId="sync">
<TabItem value="Clusters" label="Clusters">

| Metric name                      | Description                         | Unit  |
| :------------------------------- | :---------------------------------- | :---- |
| status                           | Status of clusters                  |       |
| clusters.running.count           | Number of clusters running          | count |
| clusters.notrunning.count        | Number of cluster not running       | count |

</TabItem>
<TabItem value="Listeners" label="Listeners">

| Metric name                      | Description                         | Unit  |
| :------------------------------- | :---------------------------------- | :---- |
| status                           | Status of listeners                 |       |
| listeners.running.count          | Number of listeners running         | count |
| listeners.notrunning.count       | Number of listeners not running     | count |

</TabItem>
<TabItem value="Plugins" label="Plugins">

| Metric name                      | Description                         | Unit  |
| :------------------------------- | :---------------------------------- | :---- |
| plugins.total.count              | Total number of plugins             | count |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric name                      | Description                         | Unit  |
| :------------------------------- | :---------------------------------- | :---- |
| sessions.online.count            | Number of sessions online           | count |
| sessions.total.count             | Total number of sessions            | count |

</TabItem>
</Tabs>

## Prerequisites

A number of distributions provide VerneMQ, including pre-built binary packages.
Support for these builds, if any, is being provided by the associated distribution vendor.
Their release cycle may lag behind VerneMQ source releases.

More information is available on the official documentation of VerneMQ : https://docs.vernemq.com/getting-started

The VerneMQ HTTP API is enabled by default and installs an HTTP handler on `http://myvernemq.com:8888/api/v1`.
The centreon-engine user performs a RestAPI request to this system. 
You must have generated one Token on VerneMQ server with the following command :

```bash
$ vmq-admin api-key create
```

More information on VerneMQ HTTP API on : https://docs.vernemq.com/administration/http-administration#managing-api-keys

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller monitoring VerneMQ resources:

```bash
yum install centreon-plugin-Applications-Vernemq-Restapi.noarch
```

2. On the Centreon Web interface in **Configuration > Monitoring Connectors Manager**, install the *VerneMQ RestAPI* Monitoring Connector

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller monitoring VerneMQ resources:

```bash
yum install centreon-plugin-Applications-Vernemq-Restapi.noarch
```

2. On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:

```bash
yum install centreon-pack-applications-vernemq-restapi.noarch
```

3. On the Centreon Web interface in **Configuration > Monitoring Connectors Manager**, install the *VerneMQ RestAPI* Monitoring Connector

</TabItem>
</Tabs>

## Configuration

Adding a Host into Centreon, link it to the Template named *App-Vernemq-Restapi-custom*.
Once the template applied, some Macros have to be configured:

| Mandatory   | Name             | Description                                         |
| :---------- | :--------------- | :-------------------------------------------------- |
| X           | APIPORT          | Port used. Default is 8888                          |
| X           | APIPROTO         | Protocol used. Default is http                      |
| X           | APIKEY           | VerneMQ API Token                                   |
|             | APIEXTRAOPTIONS  | Any extra option you may want to add to the command |


## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command :

```bash
/usr/lib/centreon/plugins/centreon_vernemq_restapi.pl \
	--plugin=apps::mq::vernemq::restapi::plugin \
	--mode='sessions' \
	--hostname='myvernemq.com' \
	--port='8888' \
	--proto='http' \
	--api-key='12342939495003' \
	--warning-total='15' \
	--critical-total='20' \
	--verbose
	
OK: Sessions current online: 14, current total: 14 
| 'sessions.online.count'=14;;;0; 'sessions.total.count'=14;;;15;20
```

The command above gets the sessions of a VerneMQ RestAPI (```--mode=sessions```).
It uses _api-key_, VerneMQ Token, (```--api-key='12342939495003'```)
and it connects to the Host _myvernemq.com_ (```--Hostname='myvernemq.com'```) 
on the port 8888 (```--port='8888'```) using http (```--proto='http'```).

```bash
/usr/lib/centreon/plugins/centreon_vernemq_restapi.pl \
	--plugin=apps::mq::vernemq::restapi::plugin \
	--mode='sessions' \
	--help
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to myvernemq.com:8888```

This error message means that the Centreon Plugin couldn't successfully connect to the VerneMQ RestAPI.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl='http://proxy.mycompany:8080'``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the VerneMQ RestAPI, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.
