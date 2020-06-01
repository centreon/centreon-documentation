---
id: network-ruckus-zonedirector-snmp
title: Ruckus Zonedirector
---

## Overview

RUCKUS Wireless ZoneDirector is RUCKUS’ centrally managed Smart Wireless LAN (WLAN) system developed specifically for small-to-medium enterprises (SMEs).

## Plugin-Pack assets

### Monitored objects

* Ruckus Access Point
* Ruckus Controllers

### Discovery rules

<!--Services-->

| Rule name                            | Description                                         |
| :----------------------------------- | :-------------------------------------------------- |
| Net-Ruckus-Zonedirector-SNMP-Ap-Name |  Discover access point attached to your controller  |


### Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--Access-Point-->

| Metric name                                            | Description                                                                             |
| :----------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| zd_connection_status                                   | The connection status with Zonedirector controller.                                     |
| accesspoint.cpu.utilization.percentage                 | Cpu utilization by AP. Unit: %                                                          |
| accesspoint.memory.usage.bytes                         | Memory used by AP. Unit: Bytes                                                          |
| accesspoint.memory.free.bytes                          | Memory free by AP. Unit: Bytes                                                          |
| accesspoint.memory.usage.percentage                    | Memory used by AP. Unit: %                                                              |
| accesspoint.connection.accesspoints                    | Number of APs. Unit: Count                                                              |
| accesspoint.connection.client.devices.authorized.count | Total number of authenticated terminal which is using currently on this AP. Unit: Count |
| accesspoint.connection.rogue.devices.count             | Number of rogue devices. Unit: Count                                                    |
| accesspoint.traffic.in.bitspersecon                    | Incoming traffic going through the access point. Unit: bits/second                      |
| accesspoint.traffic.out.bitspersecond                  | Outgoing traffic going through the access point. Unit: bits/second                      |

<!--System-->

| Metric name                                       | Description                                                  |
| :------------------------------------------------ | :----------------------------------------------------------- |
| system_status                                     | System status.                                               |
| peer_connected_status                             | Peer connection status.                                      |
| system.cpu.utilization.percentage                 | Cpu utilization of the controller. Unit: %                   | 
| system.memory.usage.bytes                         | Memory used by the controller. Unit: Bytes                   |
| system.memory.free.bytes                          | Memory free of the controller. Unit: Bytes                   |
| system.memory.usage.percentage                    | Memory used by the controller. Unit: %                       |
| system.connection.accesspoints.count              | Number of APs. Unit: Count                                   |
| system.connection.client.devices.authorized.count | Number of associated clients. Unit: Count                    |
| system.connection.rogue.devices.count             | Number of rogue devices. Unit: Count                         |
| system.traffic.in.bitspersecond                   | Incoming traffic going through the system. Unit: bits/second |
| system.traffic.out.bitspersecond                  | Outgoing traffic going through the system. Unit: bits/second |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Ruckus device configuration

To use this pack, the SNMP service must be properly configured on your Ruckus device. Ruckus provides an official documentation to achieve this: http://docs.ruckuswireless.com/smartzone/3.6.1/sz100-vsze-administrator-guide/GUID-F08BF334-2116-47A5-900C-B6AA4FC5E62A.html

### Network flow

Your centreon server must be able to reach the Ruckus device over UDP/161 SNMP port.

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Ruckus Zonedirector ressources:

```bash
yum install centreon-plugin-Network-Ruckus-Zonedirector-Snmp
```

2. On the Centreon Web interface, install the 'Ruckus Zonedirector' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Ruckus Zonedirector ressources:

```bash
yum install centreon-plugin-Network-Ruckus-Zonedirector-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-ruckus-zonedirector-snmp.noarch
```

3. On the Centreon Web interface, install the 'Ruckus Zonedirector' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->


## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the template "Net-Ruckus-Zonedirector-SNMP-custom" and configure the 'SNMP Community' and 'SNMP Version' fields to match the device configuration.

:warning: When using SNMP v3, set extra parameters with SNMPEXTRAOPTIONS macro :

| Mandatory   | Nom              | Description                                                                |
| :---------- | :--------------- | :------------------------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### How do I test my configuration through the CLI and what do the main parameters stand for ? 

Once the Centreon plugin installed, you can test it logging with the centreon-engine user:

```bash
/usr/lib/centreon/plugins//centreon_ruckus_zonedirector_snmp.pl \
	--plugin=network::ruckus::zonedirector::snmp::plugin \
	--mode=system \
	--hostname=ruckus.int.centreon.com \
	--snmp-version='2c' \
	--snmp-community='ruckus_zonedirector' \
        --verbose 
```

The command above checks the system utilization of your Ruckus box (```--mode=system```). You must always define the IP address/FQDN of the device (```--hostname=ruckus.int.centreon.com```) as well as the SNMP versions and community (```--snmp-version='2c' --snmp-community='ruckus_zonedirector'```) 

You can display all modes that come with the plugin with the command below: 

```bash
/usr/lib/centreon/plugins//centreon_ruckus_zonedirector_snmp.pl \
    --plugin=network::ruckus::zonedirector::snmp::plugin \
    --list-mode
```

You can display options of a specific mode by using the ```--help``` flag. Here is an example to display system mode parameters:

```bash
/usr/lib/centreon/plugins//centreon_ruckus_zonedirector_snmp.pl \
    --plugin=network::ruckus::zonedirector::snmp::plugin \
    --mode=system \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

This message generally means that you are not using the right SNMP version or community. It could also indicate that a third-party device like a firewall is blocking the SNMP UDP/161 request.

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - the Ruckus device doesn't support the MIB used by the plugin
  - the targeted SNMP OID cannot be fetched because of insufficient privileges on the device. SNMP Agent must be capable of accessing to the enterprise branch Ruckus : .1.3.6.1.4.1.25053.
