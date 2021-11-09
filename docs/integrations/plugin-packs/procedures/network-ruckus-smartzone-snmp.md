---
id: network-ruckus-smartzone-snmp
title: Ruckus Smartzone
---

## Overview

Ruckus SmartZone network controllers simplify the complexity of scaling and managing wired switches, and wireless access points through a common interface to support private-cloud network-as-a-service (NaaS) offerings in addition to general enterprise networks.

## Plugin-Pack assets

### Monitored objects

* Ruckus Access Point
* Ruckus Controllers

### Discovery rules

<!--Services-->

| Rule name                              | Description                                         |
| :------------------------------------- | :-------------------------------------------------- |
| Net-Ruckus-Smartzone-SNMP-Ap-Name      |  Discover access point attached to your controller  |
| Net-Ruckus-Smartzone-SNMP-Disk-Name    |  Discover storage point attached to your controller |
| Net-Ruckus-Smartzone-SNMP-Traffic-Name |  Discover interfaces attached to your controller    |

### Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--Access-Point-->

| Metric name                                            | Description                                                                            |
| :----------------------------------------------------- | :------------------------------------------------------------------------------------- |
| connection_status                                      | The connection status.                                                                 |
| config_status                                          | The registration status, which could either be pending, approved, rejected or swapped. |
| registration_status                                    | The AP configuration status.                                                           |
| accesspoint.connection.client.devices.authorized.count | The number of stations. Unit: Count                                                    |
| accesspoint.traffic.in.bitspersecond                   | Incoming traffic going through the access point. Unit: bits/second                     |
| accesspoint.traffic.out.bitspersecond                  | Outgoing traffic going through the access point. Unit: bits/second                     |

<!--Cpu-->

| Metric name                     | Description                        |
| :------------------------------ | :--------------------------------- |
| cpu.utilization.percentage      | CPU utilization. Unit : %          |
| core.cpu.utilization.percentage | Per Core CPU utilization. Unit : % |

<!--Interfaces-->

| Metric name                              | Description                                                      |
| :--------------------------------------- | :--------------------------------------------------------------- |
| status                                   | Status of the interface                                          |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface. Unit: bits/second  |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface. Unit: bits/second  |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface. Units: %   |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. Units: % |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface. Units: %   |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. Units: % |

<!--Load-->

| Metric name | Description                   |
| :---------- | :---------------------------- |
| load1       | System load 1 minute-sample   |
| load5       | System load 5 minutes-sample  |
| load15      | System load 15 minutes-sample |

<!--Memory-->

| Metric name             | Description                                        |
| :---------------------  | :------------------------------------------------- |
| memory.usage.bytes      | Memory usage on the device. Unit : Bytes           |
| memory.free.bytes       | Free memory on the device. Unit : Bytes            |
| memory.usage.percentage | Percentage of Memory usage on the device. Unit : % |
| memory.buffer.bytes     | Buffered Memory allocation. Unit : Bytes           |
| memory.cached.bytes     | Cached Memory allocation. Unit : Bytes             |
| memory.shared.bytes     | Shared Memory allocation. Unit : Bytes             |

<!--Storage-->

| Metric name               | Description                                 |
| :------------------------ | :------------------------------------------ |
| storage.space.usage.bytes | Used space on a disk partition. Unit: Bytes |

<!--System-->

| Metric name                                       | Description                                                  |
| :------------------------------------------------ | :----------------------------------------------------------- |
| system.connection.accesspoints.count              | The number of APs. Unit: Count                               |
| system.connection.client.devices.authorized.count | The number of associated clients. Unit: Count                |
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

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Ruckus Smartzone ressources:

```bash
yum install centreon-plugin-Network-Ruckus-Smartzone-Snmp
```

2. On the Centreon Web interface, install the 'Ruckus Smartzone' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Ruckus Smartzone ressources:

```bash
yum install centreon-plugin-Network-Ruckus-Smartzone-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-ruckus-smartzone-snmp.noarch
```

3. On the Centreon Web interface, install the 'Ruckus Smartzone' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the template "Net-Ruckus-Smartzone-SNMP-custom" and configure the 'SNMP Community' and 'SNMP Version' fields to match the device configuration.

:warning: When using SNMP v3, set extra parameters with SNMPEXTRAOPTIONS macro :

| Mandatory   | Nom              | Description                                                                |
| :---------- | :--------------- | :------------------------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### How do I test my configuration through the CLI and what do the main parameters stand for ? 

Once the Centreon plugin installed, you can test it logging with the centreon-engine user:

```bash
/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \
	--plugin=network::ruckus::smartzone::snmp::plugin \
	--mode=cpu \
	--hostname=ruckus.int.centreon.com \
	--snmp-version='2c' \
	--snmp-community='ruckus_smartzone' \
  --verbose 
```

The command above checks the CPU utilization of your Ruckus box (```--mode=cpu```). You must always define the IP address/FQDN of the device (```--hostname=ruckus.int.centreon.com```) as well as the SNMP versions and community (```--snmp-version='2c' --snmp-community='ruckus_smartzone'```) 

You can display all modes that come with the plugin with the command below: 

```bash
/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \
    --plugin=network::ruckus::smartzone::snmp::plugin \
    --list-mode
```

You can display options of a specific mode by using the ```--help``` flag. Here is an example to display cpu mode parameters:

```bash
/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \
    --plugin=network::ruckus::smartzone::snmp::plugin \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

This message generally means that you are not using the right SNMP version or community. It could also indicate that a third-party device like a firewall is blocking the SNMP UDP/161 request.

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - the Ruckus device doesn't support the MIB used by the plugin
  - the targeted SNMP OID cannot be fetched because of insufficient privileges on the device. SNMP Agent must be capable of accessing to the enterprise branch Ruckus : .1.3.6.1.4.1.25053.
