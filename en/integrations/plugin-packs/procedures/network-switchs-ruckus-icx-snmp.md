---
id: network-switch-ruckus-icx-snmp
title: Ruckus ICX Series
---

## Overview

Ruckus ICX switches work  to simplify network set-up and management, enhance security, minimize troubleshooting and make upgrades easy.
It's work seamlessly with RUCKUS Wi-Fi access points, RUCKUS SmartZone network controllers and RUCKUS Cloud to deliver the most performance and cost effective unified wired and wireless access solutions.
	
## Plugin-pack assets

### Monitored objects

* Ruckus ICX Switchess series

## Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->
<!--Cpu-->

| Metric Name                              | Description                                                                                             |
| :----------------------------------------| :------------------------------------------------------------------------------------------------------ |
| cpu.utilization.5s.percentage            | CPU usage on 5s. Unit pourcentage (%)                                                                   |
| cpu.utilization.1m.percentage            | CPU usage on 1m. Unit pourcentage (%)                                                                   |
| cpu.utilization.5m.percentage            | CPU usage on 5m. Unit pourcentage (%)                                                                   |

<!--Memory-->

| Metric Name                              | Description                                                                                             |
| :----------------------------------------| :------------------------------------------------------------------------------------------------------ |
| memory.usage.bytes                       | Memory usage in bytes. Unit bytes (b)				                                                     |
| memory.free.bytes                        | Memory free. Unit bytes (b)		                                                                     |
| memory.usage.percentage                  | memory usage in percentage. Unit percentage (%)						                                 |

<!--Interfaces-->

| Metric name                              | Description                                                                                            |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------|
| status                                   | Status of the interface                                                                                |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface. Unit: bits/second                                        |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface. Unit: bits/second                                        |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface. Units: %                                         |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. Units: %                                       |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface. Units: %                                         |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. Units: %                                       |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Configuration Ruckus ICX Equipment  

In order to monitor your Ruckus ICX equipments the SNMP v2 must be configured.

### Network flow

Communication must be possible on UDP port 161 from the Centreon Collector to the supervised Ruckus ICX equipment.
 
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Plugin on every poller expected to monitor Ruckus ICX SNMP resources:

```bash
yum install centreon-plugin-Network-Switch-Ruckus-Icx-Snmp
```

2. Install the "Rucku-Icx-SNMP" Centreon Plugin Pack from the "Configuration > Plugin packs > Manager" page


<!--Offline IMP License-->

1. Install the Plugin on every poller expected to monitor Ruckus ICX resources:

```bash
yum install centreon-plugin-Network-Switch-Ruckus-Icx-Snmp
```

2. Install the Centreon Plugin Pack RPM on your central server:

```bash
yum install centreon-pack-network-switch-ruckus-icx-snmp
```

3. Install the "Rucku-Icx-SNMP" Centreon Plugin Pack from the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host Configuration

Apply the "Net-Switch-Ruckus-Icx-SNMP-custom" template to your newly created Host.
In the host creation form on the Centreon web interface, it is necessary to fill in the values for the "Snmp Community" and "Snmp Version" fields.
Then fill the macros value fileds marked as mandatory below:

| Mandatory   | Name                    | Description                                                                                 |
| :---------- | :---------------------- | :------------------------------------------------------------------------------------------ |
|             | SNMPEXTRAOPTIONS        | Extra options SNMP of Ruckus ICX                                                          |

:warning: If you are using SNMP version 3, select the appropriate SNMP version and configure the SNMP v3 parameters via the SNMPEXTRAOPTIONS macro.

## FAQ

#### How do I test in the command line and what do the main options mean?

When the Plugin is installed, you can test it directly in command line from your Centreon collector with the Centreon-engine user:

```bash
/usr/lib/centreon/plugins/centreon_ruckus_icx_snmp.pl
	--plugin=network::ruckus::icx::snmp::plugin
	--hostname=localhost
	--snmp-version='2c'
	--snmp-community='public' 
	--mode=memory
	-warning-usage='80' 
	--critical-usage='90'
	--verbose
```

If everything's fine, it should output something similar to:

```bash
OK: memory total: 7.78 GB used: 5.83 GB (75.00%) free: 1.94 GB (25.00%)|'memory.usage.bytes'=6261946368B;;;0;8349261824; 'memory.free.bytes'=2087315456B;;;0;8349261824; 'memory.usage.percentage'=75.00%;;;0;100
```

The above command requests the array via SNMP (```--plugin=network::ruckus::icx::snmp::plugin```) using the SNMP community (```--snmp-community='public```) and the version (```--snmp-version=2c```) previously created in the Prerequisites section.
This command checks the current statistics of the storage array (```--mode=memory``).

This command will trigger a WARNING alarm if the usage increases to 80% (```--warning-usage='80'```) and a CRITICAL alarm if it increases to 90% (```--critical-usage=90```). 

It is also possible to define WARNING and CRITICAL thresholds on a specific metric. In this example a WARNING alarm will be triggered if the memory free increases to 15% (```--warning-usage-free='15'```) and a CRITICAL alarm will be triggered if it increases to 5% (```--criticalusage-free='5'``).

The syntax of the different options of the thresholds as well as the list of options and their usage are detailed in the help of the mode by adding the parameter ```--help``` to the command:

```bash
/usr/lib/centreon/plugins/centreon_ruckus_icx_snmp.pl \
	--plugin=network::ruckus::icx::snmp::plugin \
	--mode=memory \
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, it means that you are unable to contact the Ruckus ICX device on UDP port 161, or that the configured SNMP community is not correct. It is also possible that a firewall is blocking the flow.

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following problems: 
* Ruckus ICX equipment does not support the MIB used by the plugin.
* The targeted SNMP OID cannot be recovered due to insufficient equipment privileges.
