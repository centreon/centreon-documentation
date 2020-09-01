---
id: applications-pfsense-fauxapi
title: Pfsense Fauxapi
---

## Overview

At its core FauxAPI simply reads the core pfSense config.xml file, converts it to JSON and returns to the API caller. 
FauxAPI provides easy backup and restore API interfaces that by default store configuration backups on all configuration write operations thus it is very easy to roll-back
even if the API user manages to deploy a “very broken” configuration.

## Plugin-Pack Assets

### Monitored Objects

* Applications
* Firewall
* Router
* FauxAPI

### Collected Metrics

More information about collected metrics is available in the official Pfsense Fauxapi documentation: https://github.com/ndejong/pfsense_fauxapi

<!--DOCUSAURUS_CODE_TABS-->

<!--Backup-files-->

| Metric name                                | Description                                  |
| :----------------------------------------- | :------------------------------------------- |
| backups.total.count                        | Total number of backups		                |
| backups.time.last.seconds                  | Last backup time in milliseconds. Unit : ms  |

<!--Gateways-->

| Metric name                                 | Description                                                                       |
| :------------------------------------------ | :-------------------------------------------------------------------------------- |
| status                                      | Gateways status                                                                   |
| gateway.packets.delay.milliseconds          | Delay packets going through the interface in milliseconds. Unit : ms              |
| gateway.packets.loss.percentage             | Lost packets going through the interface in percentage. Unit : %                  |
| gateway.packets.stddev.milliseconds         | Standard deviation packets going through the interface in milliseconds. Unit : ms |

<!--Rules-->

| Metric name                 | Description                                                         |
| :-------------------------- | :------------------------------------------------------------------ |
| rules.total.count           | Total number of rules                                               |
| rule.traffic.bitspersecond  | Traffic going through the interface in bits per seconds. Unit : b/s |

<!--System-->

| Metric name                                | Description                                   |
| :----------------------------------------- | :-------------------------------------------- |
| system.connections.tcp.usage.count         | Number of usage TCP connection                |
| system.connections.tcp.usage.percentage    | Usage TCP connection in percentage. Unit : %  |
| system.temperature.celsius                 | System temperature in celsius. Unit : C       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

A service account is required to request the Pfsense Fauxapi. It needs to have sufficient reading privileges in the environment.
More infomation is avaible in official Pfsense Fauxpi documentation : https://github.com/ndejong/pfsense_fauxapi/blob/master/README.md

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every poller monitoring Pfsense Fauxapi resources:

```bash
yum install centreon-plugin-Applications-Pfsense-Fauxapi.noarch
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Pfsense Fauxapi* Plugin-Pack


<!--Offline IMP License-->

1. Install the Centreon Plugin on every poller monitoring Pfsense Fauxapi resources:

```bash
yum install centreon-plugin-Applications-Pfsense-Fauxapi.noarch
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-pfsense-fauxapi.noarch
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Pfsense Fauxapi* Plugin-Pack


<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

The Plugin-Pack is designed to monitor resources based on one host per Pfsense Fauxapi environment.
Adding a host into Centreon, link it to the template named *App-Pfsense-Fauxapi-custom*. 
Once the template applied, some Macros have to be configured:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIKEY          | Pfsense Fauxapi key                                                        |
| X         | APISECRET       | Pfsense Fauxapi secret                                                     |
|    	    | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command (Parameters such as ```api-key``` or ```api-secret```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_pfsense_fauxapi.pl \
    --plugin=apps::pfsense::fauxapi::plugin \
	--mode=gateways \
	--hostname='api.pfsensefauxpi.com' \
	--port='443' \
	--proto='https' \
	--api-key='myapikey' \
	--api-secret='myapisecret' \
	--filter-name='mygateway' \
	--critical-status='%{status} !~ /none/i' \
	--warning-packets-delay=120 \
	--critical-packets-delay=300 \
	--warning-packets-loss=5 \ 
	--critical-packets-loss=10 \
	--warning-packets-stddev=360 \
	--critical-packets-stddev=480 \
	--verbose

OK: Gateways 'mygateway', Status: ok_mygateway |
'gateway.packets.delay.milliseconds'=1;;120;300; 'gateway.packets.loss.percentage'=1;;5;10; 'gateway.packets.stddev.milliseconds'=0;;360;480;
Gateways 'mygateway', Status: ok_mygateway
```

The command above gets the status of a gateway Pfsense Fauxapi (```--mode=gateways```) named *mygateway* (```--filter-name='mygateway'```). 
It uses api-key (```--api-key='myapikey'```), an api-secret (```--api-secret='myapisecret'```)
and it connects to the host _api.pfsensefauxpi.com_ (```--hostname='api.pfsensefauxpi.com'```) 
on the port 443 (```--port='443'```) using https (```--proto='https'```).

This command would trigger a CRITICAL alert if the returned status of the gateway is different from *none* (```--critical-status='%{status} !~ /none/i'```).

This command will also trigger a WARNING alarm if the packets loss increase to 5% (```--warning-packets-loss='5'```)
and a CRITICAL alarm if it increases to 10% (```--critical-packets-loss='10'```).
Thresholds can be set on all of the device metrics using the syntax ```--warning-*metric* --critical-*metric*```.

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins//centreon_pfsense_fauxapi.pl --plugin=apps::pfsense::fauxapi::plugin 
--mode=gateways --help
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to api.pfsensefauxpi.com:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Pfsense Fauxapi.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the Pfsense Fauxapi, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.

### How do I remove the *count* perfdatas if I want to filter on just one application ?

The Plugin adds the count of objects by default. This can be useless if the objects are filtered with the ```--filter-name``` parameter.
Therefore, these useless perfdatas can be omitted by adding a perfdata filter : ```--filter-perfdata='^$'```.
