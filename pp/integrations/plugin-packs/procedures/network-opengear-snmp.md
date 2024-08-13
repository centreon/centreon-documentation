---
id: network-opengear-snmp
title: Opengear SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Opengear SNMP** brings a host template:

* Net-Opengear-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template               | Service Description                                           | Default | Discovery |
|:--------------|:-------------------------------|:--------------------------------------------------------------|:--------|:----------|
| Cpu-Detailed  | Net-Opengear-Cpu-Detailed-SNMP | Check the detailed rate of utilization of CPU for the machine | X       |           |
| Interfaces    | Net-Opengear-Interfaces-SNMP   | Check interfaces                                              |         | X         |
| Load          | Net-Opengear-Load-SNMP         | Check the server load average                                 | X       |           |
| Memory        | Net-Opengear-Memory-SNMP       | Check the rate of the utilization of memory                   | X       |           |
| Serial-Ports  | Net-Opengear-Serial-Ports-SNMP | Check serial ports                                            |         | X         |
| Uptime        | Net-Opengear-Uptime-SNMP       | Time since the server has been working and available          | X       |           |

### Discovery rules

| Rule Name                          | Description                                                   |
|:-----------------------------------|:--------------------------------------------------------------|
| Net-Opengear-SNMP-Interface-Name   | Discover network interfaces and monitor bandwidth utilization |
| Net-Opengear-SNMP-Serial-Port-Name | Discover serial ports and monitor utilization                 |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Metric Name                           | Unit  |
|:--------------------------------------|:------|
| cpu.user.utilization.percentage       | %     |
| cpu.nice.utilization.percentage       | %     |
| cpu.system.utilization.percentage     | %     |
| cpu.idle.utilization.percentage       | %     |
| cpu.wait.utilization.percentage       | %     |
| cpu.kernel.utilization.percentage     | %     |
| cpu.interrupt.utilization.percentage  | %     |
| cpu.softirq.utilization.percentage    | %     |
| cpu.steal.utilization.percentage      | %     |
| cpu.guest.utilization.percentage      | %     |
| cpu.guestnice.utilization.percentage  | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric Name                                               | Unit  |
|:----------------------------------------------------------|:------|
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |

</TabItem>
<TabItem value="Load" label="Load">

| Metric Name    | Unit  |
|:---------------|:------|
| load.1m.count  |       |
| load.5m.count  |       |
| load.15m.count |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name             | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| memory.buffer.bytes     | B     |
| memory.cached.bytes     | B     |
| memory.shared.bytes     | B     |

</TabItem>
<TabItem value="Serial-Ports" label="Serial-Ports">

| Metric Name                                        | Unit  |
|:---------------------------------------------------|:------|
| *port_label*#serial_port.traffic.in.bitspersecond  | b/s   |
| *port_label*#serial_port.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric Name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Opengear**
equipment.

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Plugin Packs > Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-opengear-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-opengear-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-opengear-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Opengear SNMP** Pack through
the **Configuration > Plugin Packs > Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Opengear-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Opengear-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-opengear-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Opengear** server settings.
* Apply the **Net-Opengear-SNMP-custom** template to the host.

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_opengear_snmp.pl \
    --plugin=network::opengear::snmp::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community'
```

The expected command output is shown below:

```bash
OK: Ram Total: 247.75 MB Used (-buffers/cache): 49.95 MB (20.16%) Free: 197.80 MB (79.84%), Buffer: 7.08 MB, Cached: 21.73 MB, Shared: 0.00 B | 'memory.usage.bytes'=52375552B;;;0;259784704 'memory.free.bytes'=207409152B;;;0;259784704 'memory.usage.percentage'=20.16%;;;0;100 'memory.buffer.bytes'=7421952B;;;0; 'memory.cached.bytes'=22781952B;;;0; 'memory.shared.bytes'=0B;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_opengear_snmp.pl \
    --plugin=network::opengear::snmp::plugin \
    --mode=memory \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_opengear_snmp.pl \
    --plugin=network::opengear::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
