---
id: network-cisco-wap-snmp
title: Cisco Wap SNMP
---

## Overview

Cisco  is a provider of network solutions.

The Centreon Plugin Pack *Cisco Wap SNMP* relies on the SNMP protocol to query and collect the status and metrics of the Cisco Wireless Access Point equipment.

## Plugin Pack assets

### Monitored objects

* Client
* CPU
* Interfaces
* Memory
* Uptime
* Virtual access point

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Clients-->

| Metric name                         | Description                                                    | Unit   |
| :---------------------------------- | :------------------------------------------------------------- | :----- |
| clients.connected.count             | Total number of clients connected on the access point          | count  |
| radio.clients.connected.count       | Number of clients connected radio channel of the access point  | count  |

<!--CPU-->

| Metric name                         | Description                    | Unit   |
| :---------------------------------- | :----------------------------- | :----- |
| cpu.utilization.percentage          | Percentage of CPU utilization  | %      |

<!--Clients-->

| Metric name                         | Description                                                    | Unit   |
| :---------------------------------- | :------------------------------------------------------------- | :----- |
| clients.connected.count             | Total number of clients connected on the access point          | count  |
| radio.clients.connected.count       | Number of clients connected radio channel of the access point  | count  |

<!--Interfaces-->

| Metric name                              | Description                                             | Unit |
|:---------------------------------------- |:------------------------------------------------------- | :--- |
| status                                   | Status of the interface                                 |      |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.           | b/s  |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.           | b/s  |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface.   | %    |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. | %    |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface.   | %    |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. | %    |

<!--Memory-->

| Metric name                         | Description                 | Unit   |
| :---------------------------------- | :-------------------------- | :----- |
| memory.usage.percentage             | Percentage of memory usage  | %      |

<!--Uptime-->

| Metric name                 | Description                                        | Unit   |
| :-------------------------- | :------------------------------------------------- | :----- |
| system.uptime               | Duration of system has been working and available. | s      |

<!--Virual Access Point-->

| Metric name                         | Description                                | Unit   |
| :---------------------------------- | :----------------------------------------- | :----- |
| virtual_access_points.total.count   | Total number of virtual access point       | count  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

The SNMP agent must be configured and running. Please refer to the manufacturer documentation to achieve this.
The Centreon Poller must be able to reach the UDP/161 SNMP port of the Cisco Wap device.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor Cisco Wireless Access Point equipments:

```bash
yum install centreon-plugin-Network-Cisco-Wap-Snmp
```

2. On the Centreon Web interface, install the *Cisco Wap SNMP* Plugin Pack through "Configuration > Plugin packs > Manager" page.

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor Cisco Wireless Access Point equipments :

```bash
yum install centreon-plugin-Network-Cisco-Wap-Snmp
```

2. Install the Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-cisco-wap-snmp
```

3. On the Centreon Web interface, install the *Cisco Wap SNMP* Plugin Pack through "Configuration > Plugin packs > Manager" page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

Create your Host and apply the *Net-Cisco-Wap-SNMP-custom* Host Template. You must set SNMP Community and Version in the dedicated fields of the Host Form. 

  :warning: If you are using SNMP v3, set all specific parameters within SNMPEXTRAOPTIONS Host Macro

| Mandatory   | Name             | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    | 

## How to test my plugin and what do the main parameters stand for ?

Once the plugin is installed, you can test it logging into the CLI with the centreon-engine user.

```bash
/usr/lib/centreon/plugins//centreon_cisco_wap_snmp.pl --plugin=network::cisco::wap::snmp::plugin \
	--mode=clients \	
	--hostname=10.30.2.11 \
	--snmp-community=centreon-cisco-wap \
	--snmp-version=2c \
	--warning-clients-connected=90 \
	--critical-clients-connected=100 \
	--verbose
  
OK: clients connected: 1 | 'clients.connected.count'=1;0:90;0:100;0; 'wlan0#radio.clients.connected.count'=0;;;0; 'wlan1#radio.clients.connected.count'=1;;;0;
Radio interface 'wlan0' clients connected: 0
Radio interface 'wlan1' clients connected: 1
```

The command above collects the number of clients connected to the Cisco Access Point (```--mode=clients```). Mandatory options are the IP/FQDN of the device 
(```--hostname=10.30.2.11```) and the SNMP version you have set on your appliance (```--snmp-community='centreon-cisco-wap'```).

This command would trigger a WARNING alarm if the number of clients connected to the device is greater than 90 (``` --warning-clients-connected='90' ```) and 
a CRITICAL alarm if the number of clients connected to the device is greater than 100 (``` --critical-clients-connected='100' ```).

All available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_cisco_wap_snmp.pl \
	--plugin=network::cisco::wap::snmp::plugin \
	--mode=clients \
	--help
```

All plugin modes can be listed with the following command:

```bash
/usr/lib/centreon/plugins//centreon_cisco_wap_snmp.pl \
	--plugin=network::cisco::wap::snmp::plugin \
	--list-mode
```

## Troubleshooting

### UNKNOWN: SNMP GET Request : Timeout

If you get this error, it may indicate that some flows are blocked between the Centreon Poller and the Cisco devices. 
It can also mean that the Centreon Host Configuration doesn't reflect the SNMP configuration on Cisco side (version, community). 

### UNKNOWN: SNMP GET Request : Cant get a single value.

You may get this error when SNMP privileges are not wide enough. You can check that the SNMP community used in your command line has enough rights to walk the Cisco entreprise SNMP branch: .1.3.6.1.4.1.9.6.1.104
You can use the snmpwalk utilities which is provided through net-snmp package.
