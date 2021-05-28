---
id: network-aruba-instant-snmp
title: Aruba Instant SNMP
---

## Overview

Aruba Networks is a provider of network access solutions for enterprises.

The Centreon Plugin Pack *Aruba Instant SNMP* relies on the SNMP protocol to query and collect status and metrics of the Aruba Wireless Access Point equipments. 


## Plugin Pack assets

### Monitored objects

* Wireless Access Point

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Ap-Usage-->

| Metric name                         | Description                                      | Unit   |
| :---------------------------------- | :----------------------------------------------- | :----- |
| accesspoints.total.count            | Number of access points on the Aruba device      | Count  |
| ap_name#clients.current.count       | Number of clients connected to the access point  | Count  |
| ap_name#cpu.utilization.percentage  | Percentage of used CPU on the access point       |   %    |
| ap_name#memory.usage.bytes          | Memory usage of the access point                 |   B    |
| ap_name#memory.usage.percentage     | Percentage of memory usage of the access point   |   %    |
| ap_name#memory.free.bytes           | Free memory on the access point                  |   B    |
| ap_name#memory.free.percentage      | Percentage of free memory on the access point    |   %    |
| ap_name#memory.usage.bytes          | Memory usage on the access point                 |   B    |
| ap_name#memory.usage.percentage     | Percentage of memory usage on the access point   |   %    |


<!--SSID-Status-->

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--- |
| status      | Check SSID status                          |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Device Configuration

The SNMP agent must be configured and running on the Aruba device. Please refer to the manufacturer documentation to achieve this.

### Network flows

The Centreon Poller must be able to reach the UDP/161 SNMP port of the Aruba device.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor Aruba Wireless Access Point equipments:

```bash
yum install centreon-plugin-Network-Aruba-Instant-Snmp
```

2. On the Centreon Web interface, install the *Aruba Instant SNMP* Plugin Pack through "Configuration > Plugin packs > Manager" page.

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor Aruba Wireless Access Point equipments :

```bash
yum install centreon-plugin-Network-Aruba-Instant-Snmp
```

2. Install the Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-network-aruba-instant-snmp
```

3. On the Centreon Web interface, install the *Aruba Instant SNMP* Plugin Pack through "Configuration > Plugin packs > Manager" page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

Create your Host and apply the *Net-Aruba-Instant-SNMP-custom* Host Template. You must set SNMP Community and Version in the dedicated fields of the Host Form. 

  :warning: If you are using SNMP v3, set all specific parameters within SNMPEXTRAOPTIONS Host Macro

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |


## How to test my plugin and what do the main parameters stand for ?

Once the plugin is installed, you can test it logging into the CLI with the centreon-engine user.

```bash
/usr/lib/centreon/plugins//centreon_aruba_instant_snmp.pl --plugin=network::aruba::instant::snmp::plugin \
	--mode=ap-usage \
	--hostname=10.30.2.11 \
	--snmp-version='2c' \
	--snmp-community='test/aruba' \
	--filter-name='' \
	--warning-status='' \
	--critical-status='%{status} !~ /up/i' \
	--warning-cpu='' \
	--critical-cpu='' \
	--warning-clients='20' \
	--critical-clients='50' \
	--warning-mem-usage='' \
	--critical-mem-usage='' \
	--warning-mem-usage-free='' \
	--critical-mem-usage-free='' \
	--warning-mem-usage-prct='' \
	--critical-mem-usage-prct='' \
	--verbose

```

The command above collects usage data for an Aruba access point (``` --mode=ap-usage ```). Mandatory options are the IP/FQDN of the device 

(``` --hostname=10.30.2.11 ```) and the SNMP version you have set on your appliance (``` --snmp-community='test/aruba' ```).


This command would trigger a WARNING alarm if the number of clients connected to the device is greater than 20 (``` --warning-clients='20' ```) and 

a CRITICAL alarm if the number of clients connected to the device is greater than 50 (``` --critical-clients='50' ```).

All available options for a given mode can be displayed by adding the ``` --help ``` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aruba_instant_snmp.pl \
	--plugin=network::aruba::instant::snmp::plugin \
	--mode=ap-usage \
	--help
```

All plugin modes can be listed with the following command:

```bash
/usr/lib/centreon/plugins//centreon_aruba_instant_snmp.pl \
	--plugin=network::aruba::instant::snmp::plugin \
	--list-mode
```

## Troubleshooting section

### UNKNOWN: SNMP GET Request : Timeout

If you get this error, it may indicate that some flows are blocked between the Centreon Poller and the Aruba devices. 

It can also mean that the Centreon Host Configuration doesn't reflect the SNMP configuration on Aruba side (version, community). 

### UNKNOWN: SNMP GET Request : Cant get a single value.

You may get this error when SNMP privileges are not wide enough. You can check that the SNMP community used in your command line has enough rights to walk the Aruba entreprise SNMP branch: .1.3.6.1.4.1.14823 

You can use the snmpwalk utilities which is provided through net-snmp package. 

