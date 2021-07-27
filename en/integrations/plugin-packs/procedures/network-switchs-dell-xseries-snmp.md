---
id: network-switchs-dell-xseries-snmp
title: Dell Xseries
---

## Overview

The Dell EMC Networking X-Series is a family of smart managed 1GbE and 10GbE Ethernet switches designed 
for small and medium businesses.
	
## Plugin-Pack assets

### Monitored objects

* Dell Xseries Switches

## Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->
<!--Cpu-->

| Metric Name                              | Description            | Unit  |
| :--------------------------------------- | :--------------------- | :---- |
| cpu.utilization.1s.percentage            | CPU usage on 1s.       |   %   |
| cpu.utilization.1m.percentage            | CPU usage on 1m.       |   %   |
| cpu.utilization.5m.percentage            | CPU usage on 5m.       |   %   |

<!--Interfaces-->

| Metric name                              | Description                                             | Unit   |
|:-----------------------------------------|:--------------------------------------------------------|:-------|
| status                                   | Status of the interface                                 | String |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.           | Bits/s |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.           | Bits/s |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface.   | %      |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. | %      |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface.   | %      |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. | %      |

<!--Uptime-->

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--: |
| uptime      | Elapsed time since last reboot             |   s  |

<!--END_DOCUSAURUS_CODE_TABS-->

### Prerequisites

### Dell Xseries Device configuration

The SNMP v2 agent has to be configured on the Dell Xseries device.

### Network flow

The Centreon Poller should be able to reach the UDP/161 SNMP port of the Dell Xseries device.

 
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Plugin on every poller expected to monitor Dell Xseries resources:

```bash
yum install centreon-plugin-Network-Switch-Dell-Xseries-Snmp
```

2. Install the *Dell Xseries* Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page

<!--Offline IMP License-->

1. Install the Plugin on every poller expected to monitor Dell Xseries resources:

```bash
yum install centreon-plugin-Network-Switch-Dell-Xseries-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-switch-dell-xseries-snmp
```

3. Install the *Dell Xseries* Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* In the Centreon Web interface, add a new Host from the "Configuration > Hosts" page.
* Set the values of the *SNMP community* and *SNMP version* fields then apply the *Net-Switch-Dell-Xseries-SNMP-custom* Host template.

> If you're using the version 3 of the SNMP protocol, select the related SNMP version in the Host configuration form and
> set the SNMP v3 specific settings in the *SNMPEXTRAOPTIONS* Macro:

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP of Dell Xseries|

## FAQ

### How can I test the Plugin in the CLI and what do the main options mean?

Once the Plugin is installed, you can test it directly from the command line interface of the Centreon Poller with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins/centreon_dell_xseries_snmp.pl \
	--plugin=network::dell::xseries::snmp::plugin \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='public' \
	--mode=cpu \
	--warning-average-1s='80' \
	--critical-average-1s='90' \
	--warning-average-1m='80' \ 
	--critical-average-1m='90' \
	--verbose

```

The expected result should output something similar to:

```bash
OK: cpu total: 15 % average-1s: 18.00% average-1m: 25.00% average-5m: 15.00%|
'cpu.utilization.1s.percentage'=18%;80;90;0;100; 'cpu.utilization.1m.percentage'=25%;80;90;0;100; 'cpu.utilization.1s.percentage'=15%;;;0;100
```

The above command checks a Dell Xseries switch using the SNMP protocol (```--plugin=network::dell::xseries::snmp::plugin```) 
with the *public* community (```--snmp-community='public'```) and the *2c* SNMP version (```--snmp-version='2c'```).
This command checks the current CPU average of the switch (```--mode='cpu'```).

This command will trigger a WARNING alarm if the average usage on a 1s period increases over 80% (```--warning-average-1s='80'```)

and a CRITICAL alarm over 90% (```--critical-average-1s=90```).

Alert thresholds can be defined for all metrics collected using the 
options ```--warning-*``` and ```--critical-*```, for example:
```--warning-average-1m='80'' --critical-average-1m='90''.```

The syntax of the different options of the thresholds as well as the list of the options and their usage
are detailed in the help of the mode by adding the parameter ```--help``` to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_xseries_snmp.pl \
	--plugin=network::dell::xseries::snmp::plugin \
	--mode=cpu \
	--help
```

You can display all of the modes that come with the Plugin with the command below:

```bash
/usr/lib/centreon/plugins/centreon_dell_xseries_snmp.pl \
	--plugin=network::dell::xseries::snmp::plugin \
	--list-mode
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, it means that the Centreon poller is unable to contact the Dell Xseries device on UDP port 161
or that the configured SNMP community is not correct. It is also possible that a firewall is blocking the flows.

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following problems:

* The Dell Xseries device does not support the MIB used by the Plugin.
* The targeted SNMP OID cannot be recovered due to insufficient device privileges.
The SNMP agent must be able to access the Dell enterprise branch: .1.3.6.1.4.1.674.
