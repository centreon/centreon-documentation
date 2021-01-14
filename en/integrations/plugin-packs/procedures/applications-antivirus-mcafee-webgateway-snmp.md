---
id: applications-antivirus-mcafee-webgateway-snmp
title: McAfee Web Gateway
---

## Overview

McAfee Web Gateway is a proxy platform that provides proactive Web traffic 
scanning and threat blocking with advanced real-time malware inspection
techniques.

The Centreon Plugin-Pack *McAfee Web Gateway* aims to collect signature 
databases versions and Web and malware detections statistics using the SNMP
protocol.

## Plugin-Pack assets

### Monitored objects

* McAfee Web Gateway

### Monitored metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Clients-->

| Metric name             | Description                    |
|:------------------------|:-------------------------------|
| clients.connected.count | Number of connected client     |
| sockets.connected.count | Number of open network sockets |

<!--Connections-->

| Metric name                               | Description                                                  | Unit          |
|:------------------------------------------|:-------------------------------------------------------------|:--------------|
| connections.legitimate.persecond          | Number of legitimate connections per second                  | connections/s |
| connections.blocked.persecond             | Number of blocked connections per second                     | connections/s |
| connections.antimalware.blocked.persecond | Number of connections blocked by the Anti Malware per second | connections/s |
| connections.mediafilter.blocked.persecond | Number of connections blocked by the Media Filter per second | connections/s |
| connections.urlfilter.blocked.persecond   | Number of connections blocked by the URL Filter   per second | connections/s |

<!--Detections-->

* Global

| Metric name                 | Description                           | Unit         |
|:----------------------------|:--------------------------------------|:-------------|
| malwares.detected.persecond | Number of malware detected per second | detections/s |

* Per *categories*

| Metric name                                         | Description                          | Unit         |
|:----------------------------------------------------|:-------------------------------------|:-------------|
| *categoryname*#category.malwares.detected.persecond |Number of malware detected per second | detections/s |

<!--Ftpstatistics-->

| Metric name                            | Description                      | Unit    |
|:---------------------------------------|:---------------------------------|:------- |
| ftp.traffic.client2proxy.bitspersecond | FTP traffic from client to proxy | b/s     |
| ftp.traffic.server2proxy.bitspersecond | FTP traffic from server to proxy | b/s     |
| ftp.traffic.proxy2client.bitspersecond | FTP traffic from proxy to client | b/s     |
| ftp.traffic.proxy2server.bitspersecond | FTP traffic from proxy to server | b/s     |

<!--Httpstatistics-->

| Metric name                             | Description                       | Unit    |
|:----------------------------------------|:----------------------------------|:------- |
| http.requests.persecond                 | Number of HTTP request per second |         |
| http.traffic.client2proxy.bitspersecond | HTTP traffic from client to proxy | b/s     |
| http.traffic.server2proxy.bitspersecond | HTTP traffic from server to proxy | b/s     |
| http.traffic.proxy2client.bitspersecond | HTTP traffic from proxy to client | b/s     |
| http.traffic.proxy2server.bitspersecond | HTTP traffic from proxy to server | b/s     |

<!--Httpsstatistics-->


| Metric name                              | Description                        | Unit    |
|:-----------------------------------------|:-----------------------------------|:--------|
| https.requests.persecond                 | Number of HTTPS request per second |         |
| https.traffic.client2proxy.bitspersecond | HTTPS traffic from client to proxy | b/s     |
| https.traffic.server2proxy.bitspersecond | HTTPS traffic from server to proxy | b/s     |
| https.traffic.proxy2client.bitspersecond | HTTPS traffic from proxy to client | b/s     |
| https.traffic.proxy2server.bitspersecond | HTTPS traffic from proxy to server | b/s     |

<!--Versions-->

| Metric name       | Description                    |
|:------------------|:-------------------------------|
| dat-version       | DAT version                    |
| tsdb-version      | TrustedSource Database Version |
| proactive-version | ProActive Database Version     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To use this pack, the SNMP service must be properly configured on your McAfee 
Web Gateway. McAfee provides an official documentation to achieve this:

* https://docs.mcafee.com/bundle/web-gateway-8.2.x-product-guide/page/GUID-7F25543B-2BE5-47A5-BC40-AEEF65F5D156.html

* https://docs.mcafee.com/bundle/web-gateway-8.2.x-interface-reference-guide/page/GUID-92B0527B-9709-43DD-AEDC-FE82966AC6EF.html

### Network flow

The target server must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *TO CHANGE* ressources:

```bash
yum install centreon-plugin-Applications-Antivirus-Mcafee-Webgateway-Snmp
```

2. On the Centreon Web interface, install the *McAfee Web Gateway* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *TO CHANGE* ressources:

```bash
yum install centreon-plugin-Applications-Antivirus-Mcafee-Webgateway-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-antivirus-mcafee-webgateway-snmp
```

3. On the Centreon Web interface, install the *McAfee Web Gateway* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your *TO CHANGE* Server settings
* Apply the *Applications-Antivirus-mcafee-webgateway-snmp-custom* template and configure all the mandatory Macros :

If you are using SNMP Version 3, use the *SNMPEXTRAOPTIONS* Macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                 |
|:----------|:-----------------|:--------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the
Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \
    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \
    --mode=clients \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-counters='' \
    --warning-clients='20' \
    --critical-clients='30' \
    --warning-sockets='60' \
    --critical-sockets='70' 
```

Expected command output is shown below:

```bash
OK: Connected clients: 10, Open network sockets: 50 | clients.connected.count=10;0:20;0:30;0;   sockets.connected.count=50;0:60;0:70;0;
```

In this example, the Plugin gets the number of connected clients
(--plugin=apps::antivirus::mcafee::webgateway::snmp::plugin--mode=client) by 
requesting the McAfee Web Gateway using the SNMP protocol at 10.0.0.1
(--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='mysnmpcommunity').

This command triggers a WARNING alarm in the following cases:

* The number of connected clients is greater than 20 (--warning-clients='30)
* The number of open network sockets is greater then 60 (--warning-sockets='70')

A CRITICAL alarm is however triggered in the following cases:

* The number of connected clients is greater than 30 (--critical-clients='20)
* The number of open network sockets is greater then 70 (--critical-sockets='60')

All the available options for a given mode can be displayed by adding the 
```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \
    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \
    --mode=clients \
    --help
```

All plugin modes can be listed by adding the ```--list-mode``` paramter to he 
following command:

```bash
/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \
    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \
    --list-mode