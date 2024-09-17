---
id: applications-vmware-vcsa-snmp
title: VMware VCSA SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **VMware VCSA SNMP** brings a host template:

* App-Vmware-Vcsa-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                | Service Description                         | Default | Discovery |
|:--------------|:--------------------------------|:--------------------------------------------|:--------|:----------|
| Cpu           | App-Vmware-Vcsa-Cpu-SNMP        | Check the rate of utilization of CPU        | X       |           |
| Interfaces    | App-Vmware-Vcsa-Interfaces-SNMP | Check interfaces                            |         | X         |
| Memory        | App-Vmware-Vcsa-Memory-SNMP     | Check the rate of the utilization of memory | X       |           |
| Storage       | App-Vmware-Vcsa-Storage-SNMP    | Check storages                              |         | X         |
| Uptime        | App-Vmware-Vcsa-Uptime-SNMP     | Check uptime                                | X       |           |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule Name                           | Description                                         |
|:------------------------------------|:----------------------------------------------------|
| App-Vmware-Vcsa-SNMP-Interface-Name | Discover network interfaces and monitor utilization |
| App-Vmware-Vcsa-SNMP-Storage-Name   | Discover disks and monitor utilization              |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| cpu.utilization.percentage                | %     |
| *cpu_num*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Unit |
|:--------------------------------------------------------- |:---- |
| status                                                    |      |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | %    |
| *interface_name*#interface.packets.out.error.percentage   | %    |
| *interface_name*#interface.packets.out.discard.percentage | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name             | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                                | Unit  |
| :----------------------------------------- |:----- |
| storage.partitions.count                   |       |
| *partition_name*#storage.space.usage.bytes | B     |
| *partition_name*#storage.access.count      |       |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric Name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **VMware VCSA**
server. Please refer to the official documentation:
* https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vcsa.doc/GUID-3695CE84-C6DF-497E-BA4E-2B341CC366C5.html

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
<TabItem value="RHEL, Oracle Linux, Alma Linux 8" label="RHEL, Oracle Linux, Alma Linux 8">

```bash
dnf install centreon-pack-applications-vmware-vcsa-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-vmware-vcsa-snmp
```

</TabItem>
<TabItem value="RHEL/CentOS 7" label="RHEL/CentOS 7">

```bash
yum install centreon-pack-applications-vmware-vcsa-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **VMware VCSA SNMP** Pack through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="RHEL, Oracle Linux, Alma Linux 8" label="RHEL, Oracle Linux, Alma Linux 8">

```bash
dnf install centreon-plugin-Applications-Vmware-Vcsa-SNMP
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-vmware-vcsa-snmp
```

</TabItem>
<TabItem value="RHEL/CentOS 7" label="RHEL/CentOS 7">

```bash
yum install centreon-plugin-Applications-Vmware-Vcsa-SNMP
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **VMware VCSA** server settings.
* Apply the **App-Vmware-Vcsa-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_vmware_vcsa_snmp.pl \
    --plugin=apps::vmware::vcsa::snmp::plugin \
    --mode=cpu \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community'
    --verbose
```

The expected command output is shown below:

```bash
OK: 4 CPU(s) average usage is 11.75 % | 'cpu.utilization.percentage'=11.75%;;;0;100 '0#core.cpu.utilization.percentage'=10.00%;;;0;100 '1#core.cpu.utilization.percentage'=11.00%;;;0;100 '2#core.cpu.utilization.percentage'=10.00%;;;0;100 '3#core.cpu.utilization.percentage'=16.00%;;;0;100
CPU '0' usage : 10.00 %
CPU '1' usage : 11.00 %
CPU '2' usage : 10.00 %
CPU '3' usage : 16.00 %
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_vmware_vcsa_snmp.pl \
    --plugin=apps::vmware::vcsa::snmp::plugin \
    --mode=cpu \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_vmware_vcsa_snmp.pl \
    --plugin=apps::vmware::vcsa::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
