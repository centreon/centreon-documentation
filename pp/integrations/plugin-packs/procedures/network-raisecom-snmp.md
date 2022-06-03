---
id: network-raisecom-snmp
title: Raisecom SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Raisecom** brings a host template:

* Net-Raisecom-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template             | Service Description                                  | Default | Discovery |
|:--------------|:-----------------------------|:-----------------------------------------------------|:--------|:----------|
| Cpu           | Net-Raisecom-Cpu-SNMP        | Check CPU usage                                      | X       |           |
| Hardware      | Net-Raisecom-Hardware-SNMP   | Check hardware environment                           | X       |           |
| Interfaces    | Net-Raisecom-Interfaces-SNMP | Check traffic of multiple network interfaces         |         | X         |
| Memory        | Net-Raisecom-Memory-SNMP     | Check memory usage                                   | X       |           |

### Discovery rules

| Rule Name                        | Description                                         |
|:---------------------------------|:--------------------------------------------------- |
| Net-Raisecom-SNMP-Interface-Name | Discover network interfaces and monitor utilization |

### Collected metrics & status 

<Tabs groupId="sync">
<TabItem value="Interfaces" label="Interfaces">
  
| Metric Name                                               | Unit  | 
|:--------------------------------------------------------- |:------| 
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |


</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name             | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
</Tabs>

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| *cpu*#cpu.utilization.1s.percentage  | %     |
| *cpu*#cpu.utilization.5s.percentage  | %     |
| *cpu*#cpu.utilization.1m.percentage  | %     |
| *cpu*#cpu.utilization.10m.percentage | %     |
| *cpu*#cpu.utilization.2h.percentage  | %     |


</TabItem>
<TabItem value="Cpu xPON" label="Cpu xPON">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| *cpu*#cpu.utilization.1s.percentage  | %     |
| *cpu*#cpu.utilization.10m.percentage | %     |
| *cpu*#cpu.utilization.2h.percentage  | %     |

</TabItem>
</Tabs>

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric Name                             | Unit  |
| :-------------------------------------- | :---- |
| Fan status                              |       |
| *instance*#hardware.fan.speed.rpm       | rpm   |
| *instance*#hardware.voltage.millivolt   | mv    |
| *instance*#hardware.temperature.celsius | C     |

</TabItem>

<TabItem value="Hardware xPON" label="Hardware xPON">

| Metric Name                                  | Unit  |
| :------------------------------------------- | :---- |
| Fan status                                   |       |
| *instance*#hardware.fan.speed.rpm            | rpm   |
| *instance*#hardware.voltage.output.millivolt | mv    |
| *instance*#hardware.voltage.input.millivolt  | mv    |
| *instance*#hardware.temperature.celsius      | C     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Raisecom** device.

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Raisecom SNMP** resources:

```bash
yum install centreon-plugin-Network-Raisecom-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Raisecom** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Raisecom SNMP** resources:

```bash
yum install centreon-plugin-Network-Raisecom-Snmp
```

2. Install the **Raisecom** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-network-raisecom-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Raisecom** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Raisecom SNMP** server settings.
* Apply the **Net-Raisecom-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
your own SNMPv3 credentials combo.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_raisecom_snmp.pl \
    --plugin=network::raisecom::snmp::plugin \
    --mode=memory \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-usage= \
    --critical-usage= \
    --warning-usage-free= \
    --critical-usage-free= \
    --warning-usage-prct= \
    --critical-usage-prct= \
```

The expected command output is shown below:

```bash
OK: Memory total: 128.00 MB used: 106.21 MB (82.97%) free: 21.79 MB (17.03%) | 'memory.usage.bytes'=111366736B;;;0;134217728 'memory.free.bytes'=22850992B;;;0;134217728 'memory.usage.percentage'=82.97%;;;0;100
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_raisecom_snmp.pl \
    --plugin=network::raisecom::snmp::plugin \
    --mode=memory \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_raisecom_snmp.pl \
    --plugin=network::raisecom::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.