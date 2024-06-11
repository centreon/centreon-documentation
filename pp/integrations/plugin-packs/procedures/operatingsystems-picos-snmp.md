---
id: operatingsystems-picos-snmp
title: PICOS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **PICOS SNMP** brings a host template:

* OS-PICOS-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template          | Service Description                                     | Default | Discovery |
|:--------------|:--------------------------|:--------------------------------------------------------|:--------|:----------|
| Cpu           | OS-PICOS-Cpu-SNMP         | Check switch CPU usage                                  | X       |           |
| Hardware      | OS-PICOS-Hardware-SNMP    | Check hardware components                               | X       |           |
| Interfaces    | OS-PICOS-Interfaces-SNMP  | Check network interfaces traffic and state              |         | X         |
| Memory        | OS-PICOS-Memory-SNMP      | Check memory usage of the device                        | X       |           |
| Temperature   | OS-PICOS-Temperature-SNMP | Check temperature for whole switch, chip and CPU        | X       |           |

### Discovery rules

| Rule Name                    | Description                                                   |
|:-----------------------------|:--------------------------------------------------------------|
| OS-PICOS-SNMP-Interface-Name | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/onprem/monitoring/discovery/services-discovery)
and in the [following chapter](/onprem/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name                | Unit  |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |
| cpu.temperature.celsius    | C     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                                    | Unit  |
| :--------------------------------------------- | :---- |
| *psu_instance*#hardware.powersupply.temperature.celsius         | C   |
| *psu_instance*#hardware.powersupply.fan.speed.rpm         | rpm   |
| power supply status                            |       |
| *fan_instance*#hardware.fan.speed.rpm | C     |

</TabItem>
<TabItem value="Interface" label="Interface">

| Metric name                                               | Unit  |
| :-------------------------------------------------------- | :---- |
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       |  b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      |  b/s  |
| *interface_name*#interface.packets.in.error.percentage    |  %    |
| *interface_name*#interface.packets.in.discard.percentage  |  %    |
| *interface_name*#interface.packets.out.error.percentage   |  %    |
| *interface_name*#interface.packets.out.discard.percentage |  %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name             | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Temperature" label="Temperature">

| Metric Name                | Unit  |
|:---------------------------|:------|
| chip.temperature.celsius   | C     |
| cpu.temperature.celsius    | C     |
| switch.temperature.celsius | C     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **PICOS**
server. Please refer to the official documentation from Pica8:
https://docs.pica8.com/display/picos2102cg/Configuring+snmp

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-operatingsystems-picos-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-picos-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-picos-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **PICOS SNMP** Pack through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/onprem/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Operatingsystems-Picos-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Picos-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-picos-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **PICOS** server settings.
* Apply the **OS-PICOS-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
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
/usr/lib/centreon/plugins//centreon_picos_snmp.pl \
    --plugin=os::picos::snmp::plugin \
    --mode=memory \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-usage='' \
    --critical-usage='' \
    --warning-usage-free='' \
    --critical-usage-free='' \
    --warning-usage-prct='' \
    --critical-usage-prct='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Memory total: 1011.41 MB used: 444.87 MB (43.98%) free: 566.54 MB (56.02%) | 'memory.usage.bytes'=466477056B;;;0;1060540416 'memory.free.bytes'=594063360B;;;0;1060540416 'memory.usage.percentage'=43.98%;;;0;100 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_picos_snmp.pl \
    --plugin=os::picos::snmp::plugin \
    --mode=memory \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_picos_snmp.pl \
    --plugin=os::picos::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.