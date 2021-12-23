---
id: network-dlink-standard-snmp
title: D-Link standard SNMP
---

## Plugin-Pack Assets

### Monitored Objects

D-Link standard including CPU, Hardware, Interfaces, Memory, Stack.

The pack had been tested on following models: DGS-1510, DGS 3130, DGS-3630.

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                         | Description           | Unit |
| :---------------------------------- | :-------------------- | :--- |
| cpu.utilization.5s.percentage       | CPU utilization       | %    |
| cpu.utilization.1m.percentage       | CPU utilization       | %    |
| cpu.utilization.5m.percentage       | CPU utilization       | %    |
| core.cpu.utilization.5s.percentage  | CPU Core utilization  | %    |
| core.cpu.utilization.1m.percentage  | CPU Core utilization  | %    |
| core.cpu.utilization.5m.percentage  | CPU Core utilization  | %    |

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

It is possible to filter on the name of an interface using a REGEXP of the form [```--interface='^eth1/0/1$' --name```].

<!--Hardware-->

* Per intances :

| Metric name                   | Description                               | Unit |
|:----------------------------- |:----------------------------------------- | :--- |
| fan-status                    | Status of the fan                         |      |
| psu-status                    | Status of the power supply                |      |
| temperature-status            | Status of temperature sensor              |      |
| hardware.temperature.celsius  | Temperature of the different sensors      | C    |

<!--Memory-->

| Metric name             | Description                | Unit |
| :---------------------- | :------------------------- | :--- |
| memory.usage.bytes      | Memory usage               | B    |
| memory.free.bytes       | Free memory                | B    |
| memory.usage.percentage | Memory usage in percentage | %    |

<!--Stack-->

| Metric name               | Description                | Unit |
| :------------------------ | :------------------------- | :--- |
| member-status             | Status of stack member     |      |
| link-status               | Status of stack links      |      |
| stack.members.total.count | Number of members in stack |      |

On some equipments, there are no ```link-status``` informations. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your D-Link equipment, the SNMP v2 must be configured.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Dlink-Standard-Snmp.noarch
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *D-Link Network* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Dlink-Standard-Snmp.noarch
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install network-dlink-standard-snmp.noarch
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *D-Link Network* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *Net-Dlink-Standard-SNMP-custom* Host Template
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
/usr/lib/centreon/plugins/centreon_dlink_standard_snmp.pl \
    --plugin=network::dlink::standard::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='dlink_ro' \
    --warning-average-5m='60' \
    --critical-average-5m='75' \
    --verbose
```

Expected command output is shown below: 

```bash
OK: 1 CPU(s) average usage is 16.00 % (5s) 14.00 % (1m) 14.00 % (5m) - CPU 'unit1~1' usage 16.00 % (5s) 14.00 % (1m) 14.00 % (5m) | 'cpu.utilization.5s.percentage'=16.00%;;;0;100 'cpu.utilization.1m.percentage'=14.00%;;;0;100 'cpu.utilization.5m.percentage'=14.00%;0:60;0:75;0;100 'unit1~1#core.cpu.utilization.5s.percentage'=16.00%;;;0;100 'unit1~1#core.cpu.utilization.1m.percentage'=14.00%;;;0;100 'unit1~1#core.cpu.utilization.5m.percentage'=14.00%;;;0;100

```

The command above monitors a D-Link cpu usage (```--plugin=network::dlink::standard::snmp::plugin --mode=cpu```) identified

by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='dlink_ro'```).

This command would trigger a WARNING alarm if the CPU 5min average used to raise over 60% of the CPU capacity 
(```--warning-average-5m='60'```) and a CRITICAL alarm over 75% (```--critical-average-5m='75'```).

For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dlink_standard_snmp.pl \
    --plugin=network::dlink::standard::snmp::plugin \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of these issues: 
* The SNMP agent of the device isn't started or is misconfigured 
* An external device is blocking the request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The D-Link device doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch D-Link: .1.3.6.1.4.1.171.
