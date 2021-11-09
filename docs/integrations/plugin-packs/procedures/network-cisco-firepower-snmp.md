---
id: network-cisco-firepower-snmp
title: Cisco Firepower SNMP
---

## Plugin-Pack Assets

### Monitored Objects

The plugin-pack Cisco Firepower including monitoring of CPU, Faults, Hardware, Interfaces and Memory.

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                                     | Description           | Unit |
| :---------------------------------------------- | :-------------------- | :--- |
| *securitymodule*#cpu.utilization.1m.percentage  | CPU utilization       | %    |
| *securitymodule*#cpu.utilization.5m.percentage  | CPU utilization       | %    |
| *securitymodule*#cpu.utilization.15m.percentage | CPU utilization       | %    |

<!--Faults-->

| Metric name            | Description                                       | Unit |
| :--------------------- | :------------------------------------------------ | :--- |
| fault status           | Bank status, possible to set string-based alerts  |      |
| faults.total.count     | Number of total faults                            |      |
| faults.info.count      | Number of informational faults                    |      |
| faults.minor.count     | Number of minor faults                            |      |
| faults.warning.count   | Number of warning faults                          |      |
| faults.major.count     | Number of major faults                            |      |
| faults.critical.count  | Number of critical faults                         |      |

<!--Interfaces-->

| Metric name                                              | Description                                             | Unit |
|:-------------------------------------------------------- |:------------------------------------------------------- | :--- |
| interface status                                         | Status of the interface                                 |      |
| *interfacename*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.           | b/s  |
| *interfacename*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.           | b/s  |
| *interfacename*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface.   | %    |
| *interfacename*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. | %    |
| *interfacename*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface.   | %    |
| *interfacename*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. | %    |

It is possible to filter on the name of an interface using a REGEXP of the form [```--interface='^eth1/0/1$' --name```].

<!--Hardware-->

| Metric name                                    | Description                     | Unit |
| :--------------------------------------------- | :------------------------------ | :--- |
| chassis status                                 | Status of the chassis           |      |
| *dn*#hardware.chassis.input.power.watt         | Input power of the chassis      | W    |
| *dn*#hardware.chassis.output.power.watt        | Output power of the chassis     | W    |
| cpuunit status                                 | Status of the cpu unit          |      |
| *dn*#hardware.cpuunit.temperature.celsius      | Status of the cpu unit          | C    |
| fan status                                     | Status of the fan               |      |
| *dn*#hardware.fan.speed.rpm                    | Speed of the fan                | rpm  |
| fanmodule status                               | Status of the fan module        |      |
| *dn*#hardware.fanmodule.temperature.celsius    | Temperature of the fan module   | C    |
| memoryunit status                              | Status of the memory unit       |      |
| *dn*#hardware.memoryunit.temperature.celsius   | Temperature of the memory unit  | C    |
| psu status                                     | Status of the power supply      |      |
| *dn*#hardware.powersupply.temperature.celsius  | Temperature of the power supply | C    |

<!--Memory-->

| Metric name                              | Description                | Unit |
| :--------------------------------------- | :------------------------- | :--- |
| *securitymodule*#memory.usage.bytes      | Memory usage               | B    |
| *securitymodule*#memory.free.bytes       | Free memory                | B    |
| *securitymodule*#memory.usage.percentage | Memory usage in percentage | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Cisco Firepower, the SNMP must be configured.

E.g: https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/213971-configure-snmp-on-firepower-ngfw-applian.html

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Snmp.noarch
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Cisco Firepower SNMP* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Snmp.noarch
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-network-cisco-firepower-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Cisco Firepower SNMP* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *Net-Cisco-Firepower-SNMP-custom* Host Template
* Fill the SNMP Version and Community fields according to the device's configuration

> When using SNMP v3, use the SNMPEXTRAOPTIONS Host Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \
    --plugin=network::cisco::firepower::fxos::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='cisco_ro' \
    --warning-average-5m='60' \
    --critical-average-5m='75' \
    --verbose
```

Expected command output is shown below: 

```bash
OK: Security module 'sec-svc/slot-1' CPU average usage: 42.00 % (1m), 42.00 % (5m), 42.00 % (15m) | 'sec-svc/slot-1#cpu.utilization.1m.percentage'=42.00%;;;0;100 'sec-svc/slot-1#cpu.utilization.5m.percentage'=42.00%;;;0;100 'sec-svc/slot-1#cpu.utilization.15m.percentage'=42.00%;;;0;100
Security module 'sec-svc/slot-1' CPU average usage: 42.00 % (1m), 42.00 % (5m), 42.00 % (15m)
```

The command above monitors a Cisco Firepower cpu usage (```--plugin=network::cisco::firepower::fxos::snmp::plugin --mode=cpu```) identified

by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='cisco_ro'```).

This command would trigger a WARNING alarm if the CPU 5min average used to raise over 60% of the CPU capacity 
(```--warning-average-5m='60'```) and a CRITICAL alarm over 75% (```--critical-average-5m='75'```).

For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \
    --plugin=network::cisco::firepower::fxos::snmp::plugin \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of these issues: 
* The SNMP agent of the device isn't started or is misconfigured 
* An external device is blocking the request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The Cisco Firepower device doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch Cisco Firepower: .1.3.6.1.4.1.9.9.826
