---
id: network-tplink-snmp
title: TP-Link SNMP
---

## Overview

TP-Link is a provider of network access solutions.

The Centreon Plugin Pack *TP-Link SNMP* relies on the SNMP protocol to query and collect the status and metrics of the TP-Link equipment.

## Plugin Pack assets

### Monitored objects

* CPU
* Interfaces
* Memory
* Uptime

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--CPU-->
* These 3 metrics for CPU core and average utilization

| Metric name                         | Description                    | Unit   |
| :---------------------------------- | :----------------------------- | :----- |
| cpu.utilization.percentage          | Percentage of CPU utilization  | %      |

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

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

The SNMP agent must be configured and running. Please refer to the manufacturer documentation to achieve this.
The Centreon Poller must be able to reach the UDP/161 SNMP port of the TP-Link equipment.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor TP-Link equipments:

```bash
yum install centreon-plugin-Network-Tplink-Snmp
```

2. On the Centreon Web interface, install the *TP-Link SNMP* Plugin Pack through "Configuration > Plugin packs > Manager" page.

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor TP-Link equipments :

```bash
yum install centreon-plugin-Network-Tplink-Snmp
```

2. Install the Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-tplink-snmp
```

3. On the Centreon Web interface, install the *TP-Link SNMP* Plugin Pack through "Configuration > Plugin packs > Manager" page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

Create your Host and apply the *Net-Tplink-SNMP-custom* Host Template. You must set SNMP Community and Version in the dedicated fields of the Host Form. 

  :warning: If you are using SNMP v3, set all specific parameters within SNMPEXTRAOPTIONS Host Macro

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    | 

## How to test my plugin and what do the main parameters stand for?

Once the plugin is installed, you can test it by logging into the CLI with the centreon-engine user.

```bash
/usr/lib/centreon/plugins//centreon_tplink_snmp.pl \
	--plugin=network::tplink::snmp::plugin \
	--mode=cpu \	
	--hostname=10.30.2.11 \
	--snmp-community=centreon-tplink \
	--snmp-version=2c \
	--warning-average-5m=90 \
	--critical-average-5m=95 \
	--verbose
  
OK: 1 CPU(s) average usage is 7.00 % (5s) 20.00 % (1m) 10.00 % (5m) - CPU '1' usage 7.00 % (5s) 20.00 % (1m) 10.00 % (5m) | 
'cpu.utilization.5s.percentage'=7.00%;;;0;100 'cpu.utilization.1m.percentage'=20.00%;;;0;100 'cpu.utilization.5m.percentage'=10.00%;0:90;0:95;0;100 
'1#core.cpu.utilization.5s.percentage'=7.00%;;;0;100 '1#core.cpu.utilization.1m.percentage'=20.00%;;;0;100 '1#core.cpu.utilization.5m.percentage'=10.00%;;;0;100
CPU '1' usage 7.00 % (5s) 20.00 % (1m) 10.00 % (5m)
```

The command above check CPU usage for TP-Link equipment (```--mode=cpu```). Mandatory options are the IP/FQDN of the device
(```--hostname=10.30.2.11```) and the SNMP version you have set on your equipment (```--snmp-community='centreon-tplink'```).

This command would trigger a WARNING alarm if the CPU average to the equipment is greater than 90 (```--warning-average-5m='90'```) and
a CRITICAL alarm if the CPU average to the equipment is greater than 95 (```--critical-average-5m='95'```).

All available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_tplink_snmp.pl \
	--plugin=network::tplink::snmp::plugin \
	--mode=cpu \
	--help
```

All plugin modes can be listed with the following command:

```bash
/usr/lib/centreon/plugins//centreon_tplink_snmp.pl \
	--plugin=network::tplink::snmp::plugin \
	--list-mode
```

## Troubleshooting

### UNKNOWN: SNMP GET Request : Timeout

If you get this error, it may indicate that some flows are blocked between the Centreon Poller and the TP-Link equipment.
It can also mean that the Centreon Host Configuration doesn't reflect the SNMP configuration on the TP-Link side (version, community).

### UNKNOWN: SNMP GET Request : Cant get a single value.

You may get this error when SNMP privileges are not wide enough. You can check that the SNMP community used in your command line has enough rights to walk the TP-Link enterprise SNMP branch: .1.3.6.1.4.1.11863
You can use the snmpwalk utilities which is provided through the net-snmp package.
