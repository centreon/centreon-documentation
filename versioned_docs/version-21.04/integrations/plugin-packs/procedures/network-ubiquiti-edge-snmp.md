---
id: network-ubiquiti-edge-snmp
title: Ubiquiti Edge SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Plugin-Pack Ubiquiti Edge SNMP collects metrics for:
* Cpu
* Hardware
* Interfaces
* Memory

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Rule name                              | Description                                                           |
| :------------------------------------- | :-------------------------------------------------------------------- |
| Net-Ubiquiti-Edge-SNMP-Interface-Name  | Discover network interfaces and monitor bandwidth utilization         |

</TabItem>
</Tabs>

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                   | Description                            | Unit |
| :---------------------------- | :------------------------------------- |:---- |
| cpu.utilization.5s.percentage | CPU utilization during last 5 seconds. | %    |
| cpu.utilization.1m.percentage | CPU utilization during last minute.    | %    |
| cpu.utilization.5m.percentage | CPU utilization during last 5 minutes. | %    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                   | Description                               | Unit |
|:----------------------------- |:----------------------------------------- |:---- |
| disk.status                   | Status of the disk                        |      |
| raid.status                   | Status of the raid                        |      |
| fan.status                    | Status of the fan                         |      |
| temperature.status            | Status of the temperature                 |      |
| voltage.status                | Status of the voltage                     |      |
| hardware.fan.speed.rpm        | Speed of fan                              | rpm  |
| hardware.temperature.celsius  | temperature of the different sensors      | C    |
| hardware.voltage.millivolt    | Voltage of the different sensors          | mV   |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                                 | Description                                             | Unit |
|:----------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                      | Status of the interface                                 |      |
| *interface\_name*\#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.           | b/s  |
| *interface\_name*\#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.           | b/s  |
| *interface\_name*\#interface.packets.in.error.percentage    | Incoming errored packets going through the interface.   | %    |
| *interface\_name*\#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. | %    |
| *interface\_name*\#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface.   | %    |
| *interface\_name*\#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name              | Description                | Unit |
| :----------------------- | :------------------------- |:---- |
| memory.usage.bytes       | Memory usage               | B    | 

</TabItem>
</Tabs>

## Prerequisites

To monitor your Ubiquiti Edge, the SNMP must be configured.
The Poller should be able to perform SNMP requests toward the Lenovo device over SNMP UDP/161 port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Ubiquiti-Edge-Snmp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Ubiquiti Edge SNMP* Pack

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Ubiquiti-Edge-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-network-ubiquiti-edge-snmp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Ubiquiti Edge SNMP* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *Net-Ubiquiti-Edge-SNMP-Custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_edge__snmp.pl \
    --plugin=network::ubiquiti::edge::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='ubiquiti_ro' \
    --warning-1m='80' \
    --critical-1m='90' \
    --verbose
```

Expected command output is shown below:

```bash
OK: CPU 53.59 % (5sec), 38.13 % (1m), 21.37 % (5min) | 'cpu.utilization.5s.percentage'=53.59%;;;0;100 'cpu.utilization.1m.percentage'=38.13%;0:80;0:90;0;100 'cpu.utilization.5m.percentage'=21.37%;;;0;100
```

The command above monitors Ubiquiti Edge (```--plugin=network::ubiquiti::edge::snmp::plugin --mode=load```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='ubiquiti_ro'```).

This command would trigger a WARNING alarm if cpu utilization over 90% on the last minute 
(```--warning-1m='90'```) and a CRITICAL alarm over 95% on the last minute (```--critical-1m='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_edge_snmp.pl \
    --plugin=network::ubiquiti::edge::snmp::plugin \
    --mode=cpu \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins)