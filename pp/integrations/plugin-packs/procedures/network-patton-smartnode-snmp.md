---
id: network-patton-smartnode-snmp
title: Patton SmartNode SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Patton SmartNode SNMP** brings a host template:

* Net-Patton-Smartnode-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                 | Service Description | Default |
|:--------------|:---------------------------------|:--------------------|:--------|
| Call          | Net-Patton-Smartnode-Call-SNMP   | Check calls         | X       |
| System        | Net-Patton-Smartnode-System-SNMP | Check system health | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Call" label="Call">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *gateway*#gateway.current.connected.calls |       |
| *gateway*#gateway.current.ongoing.calls   |       |
| *gateway*#gateway.total.accumulated.calls |       |
| *isdn*#isdn.current.connected.calls       |       |
| *isdn*#isdn.current.ongoing.calls         |       |
| *isdn*#isdn.total.accumulated.calls       |       |

</TabItem>
<TabItem value="System" label="System">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *cpu*#cpu.workload.1m                     | %     |
| *cpu*#cpu.workload.5m                     | %     |
| *cpu*#cpu.workload.current                | %     |
| *memory*#memory.allocated.bytes           | B     |
| *memory*#memory.allocated.percentage      | %     |
| *memory*#memory.free.bytes                | B     |
| *temperature*#temperature.current.celsius | C     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Patton SmartNode SNMP**
server. Please refer to the official documentation from XXX:
* LINK

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
dnf install centreon-pack-network-patton-smartnode-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-patton-smartnode-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-patton-smartnode-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Patton SmartNode SNMP** Pack through
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
dnf install centreon-plugin-Network-Patton-SmartNode-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Patton-SmartNode-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-patton-smartnode-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Patton SmartNode SNMP** server settings.
* Apply the **Net-Patton-Smartnode-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_patton_smartnode.pl \
    --plugin=network::patton::smartnode::snmp::plugin \
    --mode=system \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-memory-allocated-bytes='' \
    --critical-memory-allocated-bytes='' \
    --warning-memory-free-bytes='' \
    --critical-memory-free-bytes='' \
    --warning-memory-allocated-percentage='' \
    --critical-memory-allocated-percentage='' \
    --warning-cpu-workload-current='' \
    --critical-cpu-workload-current='' \
    --warning-cpu-workload-1m='' \
    --critical-cpu-workload-1m='' \
    --warning-cpu-workload-5m='' \
    --critical-cpu-workload-5m='' \
    --warning-temperature-current-celsius='' \
    --critical-temperature-current-celsius='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: All CPU usages are ok - All memory usages are ok - All temperatures are ok | 'CPU 2#cpu.workload.current'=15.00%;;;0;100 'CPU 2#cpu.workload.1m'=5.00%;;;0;100 'CPU 2#cpu.workload.5m'=2.00%;;;0;100 'Main CPU#cpu.workload.current'=10.00%;;;0;100 'Main CPU#cpu.workload.1m'=4.00%;;;0;100 'Main CPU#cpu.workload.5m'=3.00%;;;0;100 'System Heap#memory.allocated.bytes'=10997440B;;;0;0 'System Heap#memory.free.bytes'=233509184B;;;0;0 'System Heap#memory.allocated.percentage'=0.00%;;;0;100 'System memory 2#memory.allocated.bytes'=200000000B;;;0;300000000 'System memory 2#memory.free.bytes'=100000000B;;;0;300000000 'System memory 2#memory.allocated.percentage'=66.67%;;;0;100 'Probe 1#temperature.current.celsius'=47.00C;;;0;100 'Probe 2#temperature.current.celsius'=43.00C;;;0;100
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_patton_smartnode.pl \
    --plugin=network::patton::smartnode::snmp::plugin \
    --mode=system \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_patton_smartnode.pl \
    --plugin=network::patton::smartnode::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.