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

* McAfee Web Gateway proxy

### Monitored metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Clients-->

| Metric name             | Description                         |
|:------------------------|:------------------------------------|
| clients.connected.count | The number of connected client      |
| sockets.connected.count | The number of open network sockets  |

<!--Connections-->

| Metric name                               | Description                                                      | Unit          |
|:------------------------------------------|:-----------------------------------------------------------------|:--------------|
| connections.legitimate.persecond          | The number of legitimate connections per second                  | connections/s |
| connections.blocked.persecond             | The number of blocked connections per second                     | connections/s |
| connections.antimalware.blocked.persecond | The number of connections blocked by the Anti Malware per second | connections/s |
| connections.mediafilter.blocked.persecond | The number of connections blocked by the Media Filter per second | connections/s |
| connections.urlfilter.blocked.persecond   | The number of connections blocked by the URL Filter per second   | connections/s |

<!--Detections-->

* Global

| Metric name                 | Description                               | Unit         |
|:----------------------------|:------------------------------------- ----|:-------------|
| malwares.detected.persecond | The number of malware detected per second | detections/s |

* Per *categories*

| Metric name                                         | Description                               | Unit         |
|:----------------------------------------------------|:------------------------------------------|:-------------|
| *categoryname*#category.malwares.detected.persecond | The number of malware detected per second | detections/s |

<!--Ftpstatistics-->

| Metric name                            | Description                      | Unit    |
|:---------------------------------------|:---------------------------------|:------- |
| ftp.traffic.clienttoproxy.bitspersecond | FTP traffic from client to proxy | b/s     |
| ftp.traffic.servertoproxy.bitspersecond | FTP traffic from server to proxy | b/s     |
| ftp.traffic.proxytoclient.bitspersecond | FTP traffic from proxy to client | b/s     |
| ftp.traffic.proxytoserver.bitspersecond | FTP traffic from proxy to server | b/s     |

<!--Httpstatistics-->

| Metric name                             | Description                           | Unit    |
|:----------------------------------------|:--------------------------------------|:------- |
| http.requests.persecond                 | The number of HTTP request per second |         |
| http.traffic.clienttoproxy.bitspersecond | HTTP traffic from client to proxy     | b/s     |
| http.traffic.servertoproxy.bitspersecond | HTTP traffic from server to proxy     | b/s     |
| http.traffic.proxytoclient.bitspersecond | HTTP traffic from proxy to client     | b/s     |
| http.traffic.proxytoserver.bitspersecond | HTTP traffic from proxy to server     | b/s     |

<!--Httpsstatistics-->


| Metric name                              | Description                            | Unit    |
|:-----------------------------------------|:---------------------------------------|:--------|
| https.requests.persecond                 | The number of HTTPS request per second |         |
| https.traffic.clienttoproxy.bitspersecond | HTTPS traffic from client to proxy     | b/s     |
| https.traffic.servertoproxy.bitspersecond | HTTPS traffic from server to proxy     | b/s     |
| https.traffic.proxytoclient.bitspersecond | HTTPS traffic from proxy to client     | b/s     |
| https.traffic.proxytoserver.bitspersecond | HTTPS traffic from proxy to server     | b/s     |

<!--Versions-->

| Metric name       | Description                    |
|:------------------|:-------------------------------|
| dat-version       | DAT version                    |
| tsdb-version      | TrustedSource Database Version |
| proactive-version | ProActive Database Version     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### McAfee Web Gateway proxy configuration

To use this pack, the SNMP service must be properly configured on your McAfee 
Web Gateway. McAfee provides an official documentation to achieve this:
* https://docs.mcafee.com/bundle/web-gateway-8.2.x-product-guide/page/GUID-7F25543B-2BE5-47A5-BC40-AEEF65F5D156.html
* https://docs.mcafee.com/bundle/web-gateway-8.2.x-interface-reference-guide/page/GUID-92B0527B-9709-43DD-AEDC-FE82966AC6EF.html

### Network flow

The McAfee Web Gateway proxy must be reachable from the Centreon Poller on the 
UDP/161 SNMP port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon McAfee Web Gateway Plugin package on every Centreon Poller expected to monitor a McAfee Web Gateway proxy:

```bash
yum install centreon-plugin-Applications-Antivirus-Mcafee-Webgateway-Snmp
```

2. On the Centreon Web interface, install the *McAfee Web Gateway* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon McAfee Web Gateway Plugin package on every Centreon Poller expected to monitor a McAfee Web Gateway proxy:

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

### Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your a McAfee Web Gateway proxy settings
* Select the *App-Antivirus-Mcafee-Webgateway-SNMP-custom* template to apply to the Host.

If you are using SNMP Version 3, use the *SNMPEXTRAOPTIONS* Macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                 |
|:----------|:-----------------|:--------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## FAQ

### How do I run my plugin through the CLI and what do the main parameters stand for?

Once you've installed the plugin, you can test it logging with centreon-engine 
user:

```bash
/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \
    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \
    --mode=clients \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-counters='' \
    --warning-clients='' \
    --critical-clients='30' \
    --warning-sockets='' \
    --critical-sockets='70' \
    --use-new-perfdata
```

Expected command output is shown below:

```bash
OK: Connected clients: 10, Open network sockets: 50 | 'clients.connected.count'=10;0:20;0:30;0;  'sockets.connected.count'=50;0:60;0:70;0;
```

In this example, the Plugin gets the number of connected clients
(```--plugin=apps::antivirus::mcafee::webgateway::snmp::plugin--mode=client```)
by requesting the McAfee Web Gateway using the SNMP protocol at 10.0.0.1
(```--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='mysnmpcommunity'```).

This command will trigger an alarm when the number of connected clients is greater 
than 30 (```--critical-clients='30'```) or the number of open network sockets is 
greater then 70 (```--critical-sockets='70'```)

All available options for a given mode can be displayed by adding the 
```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \
    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \
    --mode=clients \
    --help
```

All Plugin modes can be listed with the following command:

```bash
/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \
    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \
    --list-mode
```

## Troubleshooting

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:

* Your SNMP server isn't started or misconfigured

* An external device is blocking your request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This message generally means that SNMP privileges are not wide enough for the
mode/plugin to work properly. The SNMP agent must be able to access the branch 
.1.3.6.1.4.1.1230.
