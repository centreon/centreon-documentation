---
id: network-ubiquiti-unifi-snmp
title: Ubiquiti UniFi SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Ubiquiti UniFi collects metrics for:
* Cpu
* Disks
* Interfaces
* Load
* Memory
* Swap
* Uptime
* Virtual Access Points

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Rule name                              | Description                                                           |
| :------------------------------------- | :-------------------------------------------------------------------- |
| Net-Ubiquiti-Unifi-SNMP-Interface-Name | Discover network interfaces and monitor bandwidth utilization         |

</TabItem>
</Tabs>

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                           | Description                 | Unit  |
| :------------------------------------ | :-------------------------- | :---- |
| cpu.user.utilization.percentage       | CPU User utilization        | %     |
| cpu.nice.utilization.percentage       | CPU Nice utilization        | %     |
| cpu.system.utilization.percentage     | CPU System utilization      | %     |
| cpu.idle.utilization.percentage       | CPU Idle utilization        | %     |
| cpu.wait.utilization.percentage       | CPU Wait utilization        | %     |
| cpu.kernel.utilization.percentage     | CPU Kernel utilization      | %     |
| cpu.interrupt.utilization.percentage  | CPU Interrupt utilization   | %     |
| cpu.softirq.utilization.percentage    | CPU SoftIrq utilization     | %     |
| cpu.steal.utilization.percentage      | CPU Steal utilization       | %     |
| cpu.guest.utilization.percentage      | CPU Guest utilization       | %     |
| cpu.guestnice.utilization.percentage  | CPU Guest Nice utilization  | %     |

</TabItem>
<TabItem value="Disks" label="Disks">

| Metric name                     | Description                      | Unit  |
| :------------------------------ | :------------------------------- | :---- |
| storage.partitions.count        | Number of partitions storage     |       |
| storage.space.usage.bytes       | Usage Space Storage              | B     |
| storage.space.free.bytes        | Free Space storage               | B     |
| storage.space.usage.percentage  | Usage Space in percentage        | %     |
| storage.inodes.usage.percentage | Inode usage in percentage        | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

</TabItem>
<TabItem value="Load" label="Load">

| Metric name            | Description                                                       | Unit |
| :--------------------- | :---------------------------------------------------------------- | :--- |
| load.1m.count          | System load 1 minute-sample                                       |      |
| load.5m.count          | System load 5 minutes-sample                                      |      |
| load.15m.count         | System load 15 minutes-sample                                     |      |
| load.1m.average.count  | System load 1 minute-sample divided by the number of processors   |      |
| load.5m.average.count  | System load 5 minutes-sample divided by the number of processors  |      |
| load.15m.average.count | System load 15 minutes-sample divided by the number of processors |      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Description                              | Unit  |
| :---------------------  | :--------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage on the device               | B     |
| memory.free.bytes       | Free memory on the device                | B     |
| memory.usage.percentage | Percentage of memory usage on the device | %     |
| memory.buffer.bytes     | Buffered memory allocation               | B     |
| memory.cached.bytes     | Cached memory allocation                 | B     |
| memory.shared.bytes     | Shared memory allocation                 | B     |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name                 | Description             | Unit   |
| :-------------------------- | :---------------------- | :----- |
| swap.usage.bytes            | Used swap               | B      |
| swap.free.bytes             | Free swap               | B      |
| swap.usage.percentage       | Percentage of used swap | %      |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

</TabItem>
<TabItem value="Virtual-access-points" label="Virtual-access-points">

| Metric name                                                | Description                               | Unit   |
| :--------------------------------------------------------- | :---------------------------------------- | :----- |
| virtual_access_points.total.count                          | Number of virtual access points           |        |
| virtual_access_points.clients.connected.count              | Number of virtual access points connected |        |
| status                                                     | Status of the virtual access point        |        |
| *vap_name*\#virtual_access_point.clients.connected.count   | Number of clients connected               | dBm    |
| *vap_name*\#virtual_access_point.traffic.in.bitspersecond  | Incoming traffic                          | b/s    |
| *vap_name*\#virtual_access_point.traffic.out.bitspersecond | Outgoing traffic                          | b/s    |

</TabItem>
</Tabs>

## Prerequisites

To monitor your Ubiquiti UniFi, the SNMP must be configured.
The Poller should be able to perform SNMP requests toward the Ubiquiti device over SNMP UDP/161 port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Ubiquiti-Unifi-Snmp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Ubiquiti UniFi SNMP* Pack

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Ubiquiti-Unifi-Snmp
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-network-ubiquiti-unifi-snmp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Ubiquiti UniFi SNMP* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *Net-Ubiquiti-Unifi-SNMP-custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_unifi_snmp.pl \
    --plugin=network::ubiquiti::unifi::snmp::plugin \
    --mode=disks \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='ubiquiti_ro' \
    --filter-disk-path='^/$' \
    --warning-usage-prct='90' \
    --critical-usage-prct='95' \
    --verbose
```

Expected command output is shown below:

```bash
OK: Partition '/' usage total: 46.82 GB used: 26.41 GB (56.40%) free: 20.41 GB (43.60%), Inodes used: 2 % | 'storage.partitions.count'=1;;;0; '/#storage.space.usage.bytes'=28356739072B;;;0;50273779712 '/#storage.space.free.bytes'=21917040640B;;;0;50273779712 '/#storage.space.usage.percentage'=56.40%;0:90;0:95;0;100 '/#storage.inodes.usage.percentage'=2%;;;0;100
Partition '/' usage total: 46.82 GB used: 26.41 GB (56.40%) free: 20.41 GB (43.60%), Inodes used: 2 %
```

The command above monitors Ubiquiti UniFi (```--plugin=network::ubiquiti::unifi::snmp::plugin --mode=disks```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='ubiquiti_ro'```).

This command would trigger a WARNING alarm if disk utilization over 90% 
(```--warning-usage-prct='90'```) and a CRITICAL alarm over 95% (```--critical-usage-prct='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_unifi_snmp.pl \
    --plugin=network::ubiquiti::unifi::snmp::plugin \
    --mode=disks \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins)
