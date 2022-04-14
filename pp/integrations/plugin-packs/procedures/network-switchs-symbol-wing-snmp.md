---
id: network-switchs-symbol-wing-snmp
title: Symbol WiNG Switchs SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Plugin Pack **Symbol WiNG switch SNMP** brings 1 host template:
* Net-Symbol-Wing-SNMP-custom

It brings the following service templates:

| Service Alias        | Service Template                          | Default | Discovery |
|:---------------------|:------------------------------------------|:--------|:----------|
| Systems              | Net-Symbol-Wing-Systems-SNMP              | X       |           |
| Traffic-Generic-Id   | Net-Symbol-Wing-Traffic-Generic-Id-SNMP   |         |           |
| Traffic-Generic-Name | Net-Symbol-Wing-Traffic-Generic-Name-SNMP |         | X         |
| Traffic-Global       | Net-Symbol-Wing-Traffic-Global-SNMP       |         |           |
| Packet-Errors        | Net-Symbol-wing-Packet-Errors-Global-SNMP |         | X         |

### Discovery rules

| Rule name                               | Description                                                           |
|:----------------------------------------|:----------------------------------------------------------------------|
| Net-Symbol-Wing-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |
| Net-Symbol-Wing-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |

### Collected metrics & statuses

<Tabs groupId="sync">
<TabItem value="Systems" label="Systems">

* Global

| Metric name                             | Description               | Unit  |
|:----------------------------------------|:--------------------------|:------|
| devices.total.count                     | Number of total devices   | count |
| *core*#cpu.utilization.1m.percentage    | Cpu usage for 1m          | %     |
| *core*#cpu.utilization.5m.percentage    | Cpu usage for 5m          | %     |
| *core*#cpu.utilization.15m.percentage   | Cpu usage for 15m         | %     |
| *memory*#device.memory.usage.bytes      | Used memory               | B     |
| *memory*#device.memory.free.bytes       | Free memory               | B     |
| *memory*#device.memory.usage.percentage | Percentage of used memory | %     |

<TabItem value="Interfaces" label="Interfaces">

| Metric name                                       | Description                                             | Unit   |
|:--------------------------------------------------|:--------------------------------------------------------|:-------|
| status                                            | Status of the interface                                 | String |
| *ifname*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.           | Bits/s |
| *ifname*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.           | Bits/s |
| *ifname*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface.   | %      |
| *ifname*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. | %      |
| *ifname*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface.   | %      |
| *ifname*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. | %      |

</TabItem>
</Tabs>

## Prerequisites

Configure SNMP on your Symbol WiNG device.

### Network flow

The target device must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Symbol WiNG** resources:

```bash
yum install centreon-plugin-Network-Symbol-Wing-Snmp
```

2. On the Centreon web interface, install the **Symbol WiNG switch SNMP** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Symbol WiNG** resources:

```bash
yum install centreon-plugin-Network-Symbol-Wing-Snmp
```

2. Install the **Symbol WiNG switch SNMP** Centreon Plugin Pack RPM on the Centreon central server:

 ```bash
yum install centreon-pack-network-switchs-symbol-wing-snmp
```

3. On the Centreon web interface, install the **Symbol WiNG switch SNMP** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address/DNS** fields according to your **Symbol WiNG** server settings.
* Apply the **Net-Symbol-Wing-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the SNMPEXTRAOPTIONS macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                 |
|:----------|:-----------------|:--------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon Poller CLI using the
**centreon-engine** user account and test the Plugin by running the following
command:

```bash
/usr/lib/centreon/plugins//centreon_symbol_wing.pl \
    --plugin=network::symbol::wing::snmp::plugin \
    --mode=systems \
    --hostname='10.0.0.1' \
    --snmp-community='my-snmp-community' \
    --snmp-version='2c' \
    --filter-name='' \
    --warning-cpu-utilization-1m='' \
    --critical-cpu-utilization-1m='' \
    --warning-cpu-utilization-5m='80' \
    --critical-cpu-utilization-5m='90' \
    --warning-cpu-utilization-15m='' \
    --critical-cpu-utilization-15m='' \
    --warning-memory-usage='' \
    --critical-memory-usage='' \
    --warning-memory-usage-free='' \
    --critical-memory-usage-free='' \
    --warning-memory-usage-prct='' \
    --critical-memory-usage-prct='' \
    --warning-devices-total='' \
    --critical-devices-total='' 
```

The expected command output is shown below:

```bash
OK: total devices: %s %.2f %% (1m) %.2f %% (5m) %.2f %% (15m)    | 'devices.total.count'=1;;;0; 'cpu.utilization.1m.percentage'=1%;;;0;100 'cpu.utilization.5m.percentage'=3%;80;90;0;100 'cpu.utilization.15m.percentage'=20%;;;0;100 'device.memory.usage.bytes'=8000B;;;0; 'device.memory.free.bytes'=192B;;;0; 'device.memory.usage.percentage'=99%;;;0;100 
```

This command would trigger a WARNING alarm if the CPU was reported as over 80% during the last 5 minutes
(`--warning-cpu-utilization-5m='80'`) and a CRITICAL alarm if over
90% during the last 5 minutes (`--critical-cpu-utilization-5m='90'`).

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_symbol_wing.pl \
    --plugin=network::symbol::wing::snmp::plugin \
    --mode=systems \
    --help
```

All available options for a given mode can be displayed by adding the
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_symbol_wing.pl \
    --plugin=network::symbol::wing::snmp::plugin \
    --list-mode 
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
on the [dedicated page](../getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-snmp).
