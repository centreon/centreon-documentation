---
id: network-dell-os10-snmp
title: Dell OS10 SNMP
---

## Plugin-Pack Assets

### Monitored Objects

* Dell OS 10 including CPU, Disk Usage, Hardware, Inodes, Interfaces, Load, Memory, Swap and Uptime.

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                      | Description           | Unit |
| :------------------------------- | :-------------------- | :--- |
| cpu.utilization.percentage       | CPU utilization.      | %    |
| core.cpu.utilization.percentage  | CPU Core utilization. | %    |

<!--Disk-usage-->

| Metric name                     | Description                      | Unit  |
| :------------------------------ | :------------------------------- | :---- |
| storage.partitions.count        | Number of partitions storage     | count |
| storage.space.usage.bytes       | Usage Space Storage              | B     |
| storage.space.free.bytes        | Free Space storage               | B     |
| storage.space.usage.percentage  | Usage Space in percentage        | %     |
| storage.inodes.usage.percentage | Inode usage in percentage        | %     |

It is possible to filter the results on the given disk path by using a REGEXP on the ``--disk-path`` parameter: [```--disk-patch='^my-disk-path$'```]

<!--Inodes-->

| Metric name                 | Description                       | Unit |
| :-------------------------- | :---------------------------------| :--- |
| used                        | Inodes space usage on partitions. | %    |

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

It is possible to filter on the name of an interface using a REGEXP of the form [```--interface='^ens160$' --name```].

<!--Hardware-->

* Per intances :

| Metric name                   | Description                               | Unit |
|:----------------------------- |:----------------------------------------- | :--- |
| os10CardStatus                | Status of the card                        |      |
| os10FanOperStatus             | Status of the fan                         |      |
| os10FanTrayOperStatus         | Status of the fantray                     |      |
| os10PowerSupplyOperStatus     | Status of the power supply                |      |
| resource.oper_status          | Status of the resources                   |      |
| hardware.temperature.celsius  | temperature of the different sensors      | C    |

<!--Load-->

| Metric name                 | Description                      | Unit |
| :-------------------------- | :--------------------------------| :--- |
| load1                       | System load 1 minute sample      |      |
| load5                       | System load 5 minutes sample     |      |
| load15                      | System load 15 minutes sample    |      |

<!--Memory-->

| Metric name             | Description                | Unit |
| :---------------------- | :------------------------- | :--- |
| memory.usage.bytes      | Memory usage               | B    |
| memory.free.bytes       | Free memory                | B    |
| memory.usage.percentage | Memory usage in percentage | %    |
| memory.buffer.bytes     | Buffer memory              | B    |  
| memory.cached.bytes     | Memory cached              | B    |
| memory.shared.bytes     | Shared Memory allocation   | B    |

<!--Swap-->

| Metric name                 | Description   | Unit |
| :-------------------------- | :------------ | :--- |
| swap.usage.bytes            | Swap usage    | B    |
| swap.free.bytes             | Swap free     | B    |
| swap.usage.percentage       | Swap usage    | %    |

<!--Uptime-->

| Metric name                 | Description                                        | Unit |
| :-------------------------- | :------------------------------------------------- | :--- |
| system.uptime               | Duration of system has been working and available. | s    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Dell OS10 equipment, the SNMP v2 must be configured.
For more information, please refer to the official user documentation :
https://www.dell.com/support/manuals/fr/fr/frbsdt1/networking-z9100/os10-enterprise-user-guide-10_4_2-pub/configure-snmp?guid=guid-cf75b1b6-5c24-4237-af0c-b9ed1f491b75&lang=en-us

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller monitoring Dell OS10 resources:

```bash
yum install centreon-plugin-Network-Dell-Os10-Snmp.noarch
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Dell OS10 SNMP* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller monitoring Dell OS10 resources:

```bash
yum install centreon-plugin-Network-Dell-Os10-Snmp.noarch
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-network-dell-os10-snmp.noarch
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Dell OS10 SNMP* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *Net-Dell-Os10-SNMP-custom* Host Template
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
/usr/lib/centreon/plugins/centreon_dell_os10_snmp.pl \
    --plugin=network::dell::os10::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='dell_os10_ro' \
    --warning-average='60' \
    --critical-average='75' \
    --verbose
```

Expected command output is shown below: 

```bash
OK: CPU(s) average usage is 15.29 % - CPU '0' usage : 15.29 % 
| 'total_cpu_avg'=15.29%;0:60;0:75;0;100 'cpu'=15.29%;;;0;100
```

The command above monitors a Dell OS10 cpu usage (```--plugin=network::dell::os10::snmp::plugin --mode=cpu```) identified

by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='dell_os10_ro'```).

This command would trigger a WARNING alarm if the CPU average used to raise over 60% of the CPU capacity 
(```--warning-average='60'```) and a CRITICAL alarm over 75% (```--critical-average='75'```).

For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_os10_snmp.pl 
    --plugin=network::dell::os10::snmp::plugin \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of these issues: 
* The SNMP agent of the device isn't started or is misconfigured 
* An external device is blocking the request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The Dell device doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch Dell: 1.3.6.1.4.1.674.
