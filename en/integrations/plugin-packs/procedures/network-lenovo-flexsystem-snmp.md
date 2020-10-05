---
id: network-lenovo-flexsystem-snmp
title: Lenovo Flex System Switch 
---

## Overview

Lenovo develops, manufactures and sells computer hardware and software. Flex
System is Lenovo's blade server architecture.

## Plugin-Pack assests

### Monitored objects

* Lenovo Flex System network switch

### Collected Metrics

In addition to modes and metrics described here, it is also possible to monitor 
the following indicators:

* Ntp: Check time offset of server with ntp server
* Uptime: Elapsed time since the last reboot

<!--Cpu-->

| Metric name                    | Description                              | Unit   |
| :----------------------------- | :--------------------------------------- | :------|
| cpu.utilization.1m.percentage  | CPU utilization for the last minute      | %      |
| cpu.utilization.5m.percentage  | CPU utilization for the last 5 minutes   | %      |

<!--Storage-->

| Metric name                         | Description                    | Unit   |
| :---------------------------------- | :----------------------------- |------- |
| storage.partitions.count            | Total number of partition      |        |
| partition#storage.space.usage.bytes | Used space on a disk partition | Bytes  |

<!--Memory-Usage-->

| Metric name             | Description                 | Unit   |
| :---------------------- | :---------------------------| :----- |
| memory.usage.bytes      | Total current memory usage  | Bytes  |
| memory.usage.percentage | Total current memory usage  |  %     |
| memory.free.bytes       | Current free memory         | Bytes  |

<!--Traffic-->

| Metric name                              | Description                                                               | Unit        |
| :--------------------------------------- | :------------------------------------------------------------------------ | :---------- |
| status                                   | Interface status                                                          |             |
| interface.traffic.\*.bitspersecond       | \*in/out. Incoming/outgoing traffic going through the interface           | Bytes/s & % |
| interface.packets.\*.errors.percentage   | \*in/out. Incoming/outgoing errored packets going through an interface    | Count & %   |
| interface.packets.\*.discards.percentage | \*in/out. Incoming/outgoing discarded packets going through an interface  | Count & %   |

A regexp filter is available to target a specific interface identifier/ifName [```--interface='^my-interface-name$' --name```] 

<!--Environment-->

| Metric name                   | Description                      | Unit     |               
| :---------------------------- | :------------------------------- | :--------|
| hardware.temperature.celsius  | Temperature of the system        | Celsius  |
| faultled                      | Status of the fault LED (On/Off) |          |

You can use ```--no-component``` if you want to alert when a component is 
absent/removed. You can also overload the default status using the 
```--threshold-overload option```. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To use this pack, the SNMP service must be properly configured on your 
Flex System blade server. Lenovo provides an official documentation
to achieve this: 
* Throught the CMM Web console : https://sysmgt.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.lxci_hwmp_scom.doc%2Fhwmp_enable_snmp_agent.html
* Throught the CMM Command-Line Interface : https://flexsystem.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.acc.cmm.doc%2Fcli_command_snmp.html

### Network flow

The Lenovo Flex System blade server must be reachable from the Centreon Poller
on the UDP/161 SNMP port.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Plugin package on every Centreon poller expected to monitor a Lenovo Flex System network switch:

```bash
yum install centreon-plugin-Network-Lenovo-Flexsystem-Snmp
```

2. On the centreon Web interface, install the *Lenovo Flex System Switch* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Plugin package on every Centreon poller expected to monitor a Lenovo Flex System network switch:

```bash
yum install centreon-plugin-Network-Lenovo-Flexsystem-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-lenovo-flexsystem-snmp
```

3. On the centreon Web interface, install the *Lenovo Flex System Switch* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Go to *Configuration* > *Host* > and click *Add*. Then fill the *SNMP Community*
and *SNMP Version* fields and apply the template 
*Net-Lenovo-Flexsystem-SNMP-custom*.

If you are using SNMP Version 3, use the
*SNMPEXTRAOPTIONS* macro to configure your own SNMPv3 credentials combo.

| Mandatory   | Name             | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How do I run my plugin through the CLI and what do the main parameters stand for ?

Once you've installed the plugin, you can test it logging with *centreon-engine*
user:
 
```bash
/usr/lib/centreon/plugins/centreon_net_lenovo_flexsystem_snmp.pl \
  --plugin=network::lenovo::flexsystem::snmp::plugin \
  --mode=interfaces --hostname=10.30.2.138 \
  --snmp-community='public' \
  --snmp-version='2c' \
  --add-status \
  --add-traffic
```

Expected command output is shown below:

```
OK: All interfaces are ok | 'traffic_in_lo'=11723.33b/s;;;0;10000000 'traffic_out_lo'=11723.33b/s;;;0;10000000 'traffic_in_ens192'=14097.70b/s;;;0;10000000000 'traffic_out_ens192'=21796.60b/s;;;0;10000000000
```

All available modes with the plugin can be displayed with:

```bash
/usr/lib/centreon/plugins/centreon_net_lenovo_flexsystem_snmp.pl \
  --plugin=network::lenovo::flexsystem::snmp::plugin \
  --list-mode
```

The available options for a mode can be displayed using the ```--help``` parameter:

```bash
/usr/lib/centreon/plugins/centreon_net_lenovo_flexsystem_snmp.pl \
  --plugin=network::lenovo::flexsystem::snmp::plugin \
  --mode=interfaces \
  --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:

* Your SNMP server isn't started or misconfigured
* An external device is blocking your request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This message generally means that SNMP privileges are not wide enough for the
mode/plugin to work properly.
