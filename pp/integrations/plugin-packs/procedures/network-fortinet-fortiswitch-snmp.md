---
id: network-fortinet-fortiswitch-snmp
title: Fortinet FortiSwitch SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Pack Fortinet FortiSwitch SNMP brings 1 host template:
* Net-Fortinet-Fortiswitch-SNMP-custom

It brings the following Service Templates:

| Service Alias | Service Template                         | Default | Discovery |
|:--------------|:-----------------------------------------|:--------|:----------|
| Arp           | Net-Fortinet-Fortiswitch-Arp-SNMP        |         |           |
| Cpu           | Net-Fortinet-Fortiswitch-Cpu-SNMP        | X       |           |
| Disk          | Net-Fortinet-Fortiswitch-Disk-SNMP       | X       |           |
| Interfaces    | Net-Fortinet-Fortiswitch-Interfaces-SNMP |         | X         |
| Memory        | Net-Fortinet-Fortiswitch-Memory-SNMP     | X       |           |
| Uptime        | Net-Fortinet-Fortiswitch-Uptime-SNMP     | X       |           |

### Discovery rules

| Rule name                                    | Description                                         |
|:---------------------------------------------|:----------------------------------------------------|
| Net-Fortinet-Fortiswitch-SNMP-Interface-Name | Discover network interfaces and monitor utilization |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Arp" label="Arp">

| Metric name                 | Description                       | Unit  |
| :-------------------------- | :-------------------------------- | :---- |
| arp.total.entries.count     | Number of arp entries             |       |
| arp.duplicate.macaddr.count | Number of duplicate mac addresses |       |
| arp.duplicate.ipaddr.count  | Number of duplicate ip addresses  |       |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                | Description     | Unit  |
| :------------------------- | :-------------- | :---- |
| cpu.utilization.percentage | CPU utilization | %     |

</TabItem>
<TabItem value="Disk" label="Disk">

| Metric name           | Description              | Unit  |
| :-------------------- | :----------------------- | :---- |
| disk.usage.bytes      | Disk usage               | B     |
| disk.free.bytes       | Free disk                | B     |
| disk.usage.percentage | Disk usage in percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Description                                             | Unit |
|:--------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                    | Status of the interface                                 |      |
| *interface_name*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface            | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface            | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface  | %    |
| *interface_name*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface    | %    |
| *interface_name*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface  | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Description                | Unit  |
| :---------------------- | :------------------------- | :---- |
| memory.usage.bytes      | Memory usage               | B     |
| memory.free.bytes       | Free memory                | B     |
| memory.usage.percentage | Memory usage in percentage | %     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your device:
* https://docs.fortinet.com/product/fortiswitch/

### Network flow

The target equipment must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Fortinet FortiSwitch SNMP** resources:

```bash
yum install centreon-plugin-Network-Fortinet-Fortiswitch-Snmp
```

2. On the Centreon Web interface, install the **Fortinet FortiSwitch SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Fortinet FortiSwitch SNMP** resources:

```bash
yum install centreon-plugin-Network-Fortinet-Fortiswitch-Snmp
```

2. Install the **Fortinet FortiSwitch SNMP** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-fortinet-fortiswitch-snmp
```

3. On the Centreon Web interface, install the **Fortinet FortiSwitch SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Fortinet FortiSwitch SNMP** server settings
* Select the **Net-Fortinet-Fortiswitch-SNMP-custom** template to apply to the Host

If you are using SNMP Version 3, use the SNMPEXTRAOPTIONS Macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins/centreon_fotinet_fortiswitch_snmp.pl \
    --plugin=network::fortinet::fortiswitch::snmp::plugin \
    --mode=cpu \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-cpu-utilization='' \
    --critical-cpu-utilization='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: Cpu utilization: 95.00% | 'cpu.utilization.percentage'=95%;;;0;100
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_fotinet_fortiswitch_snmp.pl \
    --plugin=network::fortinet::fortiswitch::snmp::plugin \
    --mode=cpu \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_fotinet_fortiswitch_snmp.pl \
    --plugin=network::fortinet::fortiswitch::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-snmp)
