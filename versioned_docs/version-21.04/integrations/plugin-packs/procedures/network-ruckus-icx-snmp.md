---
id: network-ruckus-icx-snmp
title: Ruckus ICX
---

## Overview

Ruckus ICX switches work to simplify network set-up and management, enhance security, minimize troubleshooting and make upgrades easy.
They seamlessly work together with Ruckus Wi-Fi access points, Ruckus SmartZone network controllers and Ruckus Cloud to deliver
the most performance and cost effective unified wired and wireless access solutions.

## Plugin-Pack assets

### Monitored objects

* Ruckus ICX Switches series

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                        | Description                                                                |
| :------------------------------- | :------------------------------------------------------------------------- |
| Net-Ruckus-Icx-SNMP-Traffic-Name |  Discover network interfaces and monitor status and bandwidth utilization  |

<!--DOCUSAURUS_CODE_TABS-->

## Monitored metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric Name                   | Description                                            |
| :---------------------------- | :----------------------------------------------------- |
| cpu.utilization.5s.percentage | CPU usage for the last 5s period. Unit: percentage (%) |
| cpu.utilization.1m.percentage | CPU usage for the last 1m period. Unit: percentage (%) |
| cpu.utilization.5m.percentage | CPU usage for the last 5m period. Unit: percentage (%) |

<!--Memory-->

| Metric Name             | Description                                      |
| :---------------------- | :----------------------------------------------- |
| memory.usage.bytes      | Memory usage in bytes. Unit: Bytes (B)           |
| memory.usage.percentage | Memory usage in percentage. Unit: percentage (%) |
| memory.free.bytes       | Free memory. Unit: Bytes (B)                     |

<!--Interfaces-->

| Metric Name                              | Description                                                                  |
| :--------------------------------------- | :--------------------------------------------------------------------------- |
| status                                   | Status of the interface                                                      |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface. Unit: bits/second (b/s)        |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface. Unit: bits/second (b/s)        |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface. Unit: percentage (%)   |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. Unit: percentage (%) |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface. Unit: percentage (%)   |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. Unit: percentage (%) |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Ruckus device configuration

The SNMP v2 agent has to be configured on the Ruckus ICX devices for the Centreon poller to be allowed to monitor them.

### Network flows

The Centreon poller should be able to reach the UDP SNMP port 161 of the Ruckus ICX device.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Plugin on every poller expected to monitor Ruckus ICX SNMP resources:

```bash
yum install centreon-plugin-Network-Switch-Ruckus-Icx-Snmp
```

2. Install the *Ruckus ICX* Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page

<!--Offline IMP License-->

1. Install the Plugin on every poller expected to monitor Ruckus ICX resources:

```bash
yum install centreon-plugin-Network-Switch-Ruckus-Icx-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-switch-ruckus-icx-snmp
```

3. Install the *Ruckus ICX* Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host Configuration

* In the Centreon Web interface, add a new Host from the "Configuration > Hosts" page.
* Set the values of the *SNMP community* and *SNMP version* fields then apply the *Net-Switch-Ruckus-Icx-SNMP-custom* Host template.

> If you're using the version 3 of the SNMP protocol, select the related SNMP version in the Host configuration form and
> set the SNMP v3 specific settings in the *SNMPEXTRAOPTIONS* Macro:

| Mandatory | Name             | Description                                 |
| :-------- | :--------------- | :------------------------------------------ |
|           | SNMPEXTRAOPTIONS | Extra SNMP options of the Ruckus ICX device |

## FAQ

### How can I test the Plugin in the CLI and what do the main options mean?

Once the Plugin is installed, you can test it directly from the command line interface of the Centreon poller with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins/centreon_ruckus_icx_snmp.pl
	--plugin=network::ruckus::icx::snmp::plugin \
	--hostname=ruckus.int.centreon.com \
	--snmp-version='2c' \
	--snmp-community='public' \
	--mode='memory' \
	--warning-usage='80' \
	--critical-usage='90' \
	--verbose
```

The expected result should output something similar to:

```bash
OK: memory total: 7.78 GB used: 5.83 GB (75.00%) free: 1.94 GB (25.00%)|
'memory.usage.bytes'=6261946368B;;;0;8349261824; 'memory.free.bytes'=2087315456B;;;0;8349261824; 'memory.usage.percentage'=75.00%;;;0;100
```

The above command checks a Ruckus ICX switch using the SNMP protocol (```--plugin=network::ruckus::icx::snmp::plugin```)
with the *public* community (```--snmp-community='public'```) and the *2c* version (```--snmp-version='2c'```).
This command checks the current memory usage of the switch (```--mode='memory'```).

This command will trigger a WARNING alarm if the usage increases over 80% (```--warning-usage='80'```)
and a CRITICAL alarm over 90% (```--critical-usage='90'```).

The syntax of the different options of the thresholds as well as the list of the options and their usage
are detailed in the help of the mode by adding the parameter ```--help``` to the command:

```bash
/usr/lib/centreon/plugins/centreon_ruckus_icx_snmp.pl \
	--plugin=network::ruckus::icx::snmp::plugin \
	--mode=memory \
	--help
```

You can display all of the modes that come with the Plugin with the command below:

```bash
/usr/lib/centreon/plugins/centreon_ruckus_icx_snmp.pl \
	--plugin=network::ruckus::icx::snmp::plugin \
	--list-mode
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, it means that the Centreon poller is unable to contact the Ruckus ICX device on UDP port 161
or that the configured SNMP community is not correct. It is also possible that a firewall is blocking the flows.

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following problems:

* The Ruckus ICX device does not support the MIB used by the Plugin.
* The targeted SNMP OID cannot be recovered due to insufficient equipment privileges.
