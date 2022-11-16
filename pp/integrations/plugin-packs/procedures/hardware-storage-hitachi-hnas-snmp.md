---
id: hardware-storage-hitachi-hnas-snmp
title: Hitachi NAS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Hitachi NAS** brings a host template:

* HW-Storage-Hitachi-Hnas-SNMP-custom

It brings the following service templates:

| Service Alias          | Service Template                                    | Service Description          | Default | Discovery |
|:-----------------------|:----------------------------------------------------|:-----------------------------|:--------|:----------|
| Cluster-Status         | HW-Storage-Hitachi-Hnas-Cluster-Status-SNMP         | Check cluster nodes status   |         |           |
| Hardware-Global        | HW-Storage-Hitachi-Hnas-Hardware-Global-SNMP        | Check hardware               | X       |           |
| Interfaces             | HW-Storage-Hitachi-Hnas-Interfaces-SNMP             | Check interfaces             |         | X         |
| Virtual-Volumes-Quotas | HW-Storage-Hitachi-Hnas-Virtual-Volumes-Quotas-SNMP | Check virtual volumes quotas |         |           |
| Volume-Usage-Global    | HW-Storage-Hitachi-Hnas-Volume-Usage-Global-SNMP    | Check volumes                | X       |           |

### Discovery rules

| Rule Name                                   | Description                                               |
|:--------------------------------------------|:----------------------------------------------------------|
| HW-Storage-Hitachi-Hnas-SNMP-Interface-Name | Discover the disk partitions and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Metric Name | Unit  |
|:------------|:------|
| node status |       |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Metric Name                                       | Unit  |
|:--------------------------------------------------|:------|
| battery status                                    |       |
| fan status                                        |       |
| *node_name~fan_id*#hardware.fan.speed.rpm         | rpm   |
| power supply status                               |       |
| system drive status                               |       |
| temperature status                                |       |
| *node_name~probe_id*#hardware.temperature.celsius | C     |

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
<TabItem value="Virtual-Volumes-Quotas" label="Virtual-Volumes-Quotas">

| Metric Name                                                            | Unit  |
|:-----------------------------------------------------------------------|:------|
| virtual_volumes.quotas.detected.count                                  |       |
| *volume_name~filesystem_label~target*#virtual_volume.quota.usage.bytes | B     |
| *volume_name~filesystem_label~target*#virtual_volume.quota.files.count |       |

</TabItem>
<TabItem value="Volume-Usage-Global" label="Volume-Usage-Global">

| Metric Name                            | Unit  |
|:---------------------------------------|:------|
| volume status                          |       |
| *volume_name*#volume.space.usage.bytes | B     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Hitachi NAS**
server.

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
dnf install centreon-pack-hardware-storage-hitachi-hnas-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-hitachi-hnas-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-storage-hitachi-hnas-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Hitachi NAS** Pack through
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
dnf install centreon-plugin-Hardware-Storage-Hitachi-Hnas-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Hitachi-Hnas-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-storage-hitachi-hnas-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Hitachi NAS** server settings.
* Apply the **HW-Storage-Hitachi-Hnas-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory   | Macro            | Description         |
|:------------|:-----------------|:--------------------|
|             | SNMPEXTRAOPTIONS | --maxrepetitions=20 |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_hitachi_hnas_snmp.pl \
    --plugin=storage::hitachi::hnas::snmp::plugin \
    --mode=hardware \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All 118 components are ok [2/2 battery, 8/8 fans, 4/4 psus, 82/82 sysdrives, 22/22 temperatures]. | 'hnas-cluster-1.0#hardware.temperature.celsius'=28C;;;; 'hnas-cluster-1.1#hardware.temperature.celsius'=28C;;;; 'hnas-cluster-1.2#hardware.temperature.celsius'=31C;;;; 'hnas-cluster-1.3#hardware.temperature.celsius'=26C;;;; 'hnas-cluster-1.4#hardware.temperature.celsius'=23C;;;; 'hnas-cluster-1.5#hardware.temperature.celsius'=27C;;;; 'hnas-cluster-1.6#hardware.temperature.celsius'=27C;;;; 'hnas-cluster-1.7#hardware.temperature.celsius'=45C;;;; 'hnas-cluster-1.8#hardware.temperature.celsius'=67C;;;; 'hnas-cluster-1.9#hardware.temperature.celsius'=38C;;;; 'hnas-cluster-1.10#hardware.temperature.celsius'=38C;;;; 'hnas-cluster-2.0#hardware.temperature.celsius'=29C;;;; 'hnas-cluster-2.1#hardware.temperature.celsius'=25C;;;; 'hnas-cluster-2.2#hardware.temperature.celsius'=26C;;;; 'hnas-cluster-2.3#hardware.temperature.celsius'=28C;;;; 'hnas-cluster-2.4#hardware.temperature.celsius'=21C;;;; 'hnas-cluster-2.5#hardware.temperature.celsius'=25C;;;; 'hnas-cluster-2.6#hardware.temperature.celsius'=25C;;;; 'hnas-cluster-2.7#hardware.temperature.celsius'=43C;;;; 'hnas-cluster-2.8#hardware.temperature.celsius'=65C;;;; 'hnas-cluster-2.9#hardware.temperature.celsius'=37C;;;; 'hnas-cluster-2.10#hardware.temperature.celsius'=35C;;;; 'hardware.battery.count'=2;;;; 'hardware.fan.count'=8;;;; 'hardware.psu.count'=4;;;; 'hardware.sysdrive.count'=82;;;; 'hardware.temperature.count'=22;;;;
Checking temperatures
temperature 'hnas-cluster-1.0' status is 'ok' [instance: 1.0] [value: 28]
temperature 'hnas-cluster-1.1' status is 'ok' [instance: 1.1] [value: 28]
temperature 'hnas-cluster-1.2' status is 'ok' [instance: 1.2] [value: 31]
temperature 'hnas-cluster-1.3' status is 'ok' [instance: 1.3] [value: 26]
temperature 'hnas-cluster-1.4' status is 'ok' [instance: 1.4] [value: 23]
temperature 'hnas-cluster-1.5' status is 'ok' [instance: 1.5] [value: 27]
temperature 'hnas-cluster-1.6' status is 'ok' [instance: 1.6] [value: 27]
temperature 'hnas-cluster-1.7' status is 'ok' [instance: 1.7] [value: 45]
temperature 'hnas-cluster-1.8' status is 'ok' [instance: 1.8] [value: 67]
temperature 'hnas-cluster-1.9' status is 'ok' [instance: 1.9] [value: 38]
temperature 'hnas-cluster-1.10' status is 'ok' [instance: 1.10] [value: 38]
temperature 'hnas-cluster-2.0' status is 'ok' [instance: 2.0] [value: 29]
temperature 'hnas-cluster-2.1' status is 'ok' [instance: 2.1] [value: 25]
temperature 'hnas-cluster-2.2' status is 'ok' [instance: 2.2] [value: 26]
temperature 'hnas-cluster-2.3' status is 'ok' [instance: 2.3] [value: 28]
temperature 'hnas-cluster-2.4' status is 'ok' [instance: 2.4] [value: 21]
temperature 'hnas-cluster-2.5' status is 'ok' [instance: 2.5] [value: 25]
temperature 'hnas-cluster-2.6' status is 'ok' [instance: 2.6] [value: 25]
temperature 'hnas-cluster-2.7' status is 'ok' [instance: 2.7] [value: 43]
temperature 'hnas-cluster-2.8' status is 'ok' [instance: 2.8] [value: 65]
temperature 'hnas-cluster-2.9' status is 'ok' [instance: 2.9] [value: 37]
temperature 'hnas-cluster-2.10' status is 'ok' [instance: 2.10] [value: 35]
Checking fans
fan 'hnas-cluster-1.0' status is 'ok' [instance: 1.0] [value: ok]
fan 'hnas-cluster-1.1' status is 'ok' [instance: 1.1] [value: ok]
fan 'hnas-cluster-1.2' status is 'ok' [instance: 1.2] [value: ok]
fan 'hnas-cluster-1.3' status is 'ok' [instance: 1.3] [value: ok]
fan 'hnas-cluster-2.0' status is 'ok' [instance: 2.0] [value: ok]
fan 'hnas-cluster-2.1' status is 'ok' [instance: 2.1] [value: ok]
fan 'hnas-cluster-2.2' status is 'ok' [instance: 2.2] [value: ok]
fan 'hnas-cluster-2.3' status is 'ok' [instance: 2.3] [value: ok]
Checking power supplies
power supply 'hnas-cluster-1.0' status is 'ok' [instance: 1.0].
power supply 'hnas-cluster-1.1' status is 'ok' [instance: 1.1].
power supply 'hnas-cluster-2.0' status is 'ok' [instance: 2.0].
power supply 'hnas-cluster-2.1' status is 'ok' [instance: 2.1].
Checking system drives
system drive '8000000000000000' status is 'online' [instance: 8000000000000000].
system drive '8000000000000001' status is 'online' [instance: 8000000000000001].
system drive '8000000000000002' status is 'online' [instance: 8000000000000002].
system drive '8000000000000003' status is 'online' [instance: 8000000000000003].
system drive '8000000000000004' status is 'online' [instance: 8000000000000004].
system drive '8000000000000005' status is 'online' [instance: 8000000000000005].
system drive '8000000000000006' status is 'online' [instance: 8000000000000006].
system drive '8000000000000007' status is 'online' [instance: 8000000000000007].
system drive '8000000000000008' status is 'online' [instance: 8000000000000008].
system drive '8000000000000009' status is 'online' [instance: 8000000000000009].
system drive '800000000000000A' status is 'online' [instance: 800000000000000A].
system drive '800000000000000B' status is 'online' [instance: 800000000000000B].
system drive '800000000000000C' status is 'online' [instance: 800000000000000C].
system drive '800000000000000D' status is 'online' [instance: 800000000000000D].
system drive '800000000000000E' status is 'online' [instance: 800000000000000E].
system drive '800000000000000F' status is 'online' [instance: 800000000000000F].
system drive '8000000000000010' status is 'online' [instance: 8000000000000010].
system drive '8000000000000011' status is 'online' [instance: 8000000000000011].
system drive '8000000000000012' status is 'online' [instance: 8000000000000012].
system drive '8000000000000013' status is 'online' [instance: 8000000000000013].
system drive '8000000000000014' status is 'online' [instance: 8000000000000014].
system drive '8000000000000015' status is 'online' [instance: 8000000000000015].
system drive '8000000000000016' status is 'online' [instance: 8000000000000016].
system drive '8000000000000017' status is 'online' [instance: 8000000000000017].
system drive '8000000000000018' status is 'online' [instance: 8000000000000018].
system drive '8000000000000019' status is 'online' [instance: 8000000000000019].
system drive '800000000000001A' status is 'online' [instance: 800000000000001A].
system drive '800000000000001B' status is 'online' [instance: 800000000000001B].
system drive '800000000000001C' status is 'online' [instance: 800000000000001C].
system drive '800000000000001D' status is 'online' [instance: 800000000000001D].
system drive '800000000000001E' status is 'online' [instance: 800000000000001E].
system drive '800000000000001F' status is 'online' [instance: 800000000000001F].
system drive '8000000000000020' status is 'online' [instance: 8000000000000020].
system drive '8000000000000021' status is 'online' [instance: 8000000000000021].
system drive '8000000000000022' status is 'online' [instance: 8000000000000022].
system drive '8000000000000023' status is 'online' [instance: 8000000000000023].
system drive '8000000000000024' status is 'online' [instance: 8000000000000024].
system drive '8000000000000025' status is 'online' [instance: 8000000000000025].
system drive '8000000000000026' status is 'online' [instance: 8000000000000026].
system drive '8000000000000027' status is 'online' [instance: 8000000000000027].
system drive '8000000000000028' status is 'online' [instance: 8000000000000028].
system drive '8000000000000029' status is 'online' [instance: 8000000000000029].
system drive '800000000000002A' status is 'online' [instance: 800000000000002A].
system drive '800000000000002B' status is 'online' [instance: 800000000000002B].
system drive '800000000000002C' status is 'online' [instance: 800000000000002C].
system drive '800000000000002D' status is 'online' [instance: 800000000000002D].
system drive '800000000000002E' status is 'online' [instance: 800000000000002E].
system drive '800000000000002F' status is 'online' [instance: 800000000000002F].
system drive '8000000000000030' status is 'online' [instance: 8000000000000030].
system drive '8000000000000031' status is 'online' [instance: 8000000000000031].
system drive '8000000000000032' status is 'online' [instance: 8000000000000032].
system drive '8000000000000033' status is 'online' [instance: 8000000000000033].
system drive '8000000000000034' status is 'online' [instance: 8000000000000034].
system drive '8000000000000035' status is 'online' [instance: 8000000000000035].
system drive '8000000000000036' status is 'online' [instance: 8000000000000036].
system drive '8000000000000037' status is 'online' [instance: 8000000000000037].
system drive '8000000000000038' status is 'online' [instance: 8000000000000038].
system drive '8000000000000039' status is 'online' [instance: 8000000000000039].
system drive '800000000000003A' status is 'online' [instance: 800000000000003A].
system drive '800000000000003B' status is 'online' [instance: 800000000000003B].
system drive '800000000000003C' status is 'online' [instance: 800000000000003C].
system drive '800000000000003D' status is 'online' [instance: 800000000000003D].
system drive '800000000000003E' status is 'online' [instance: 800000000000003E].
system drive '800000000000003F' status is 'online' [instance: 800000000000003F].
system drive '8000000000000040' status is 'online' [instance: 8000000000000040].
system drive '8000000000000041' status is 'online' [instance: 8000000000000041].
system drive '8000000000000042' status is 'online' [instance: 8000000000000042].
system drive '8000000000000043' status is 'online' [instance: 8000000000000043].
system drive '8000000000000044' status is 'online' [instance: 8000000000000044].
system drive '8000000000000045' status is 'online' [instance: 8000000000000045].
system drive '8000000000000046' status is 'online' [instance: 8000000000000046].
system drive '8000000000000047' status is 'online' [instance: 8000000000000047].
system drive '8000000000000048' status is 'online' [instance: 8000000000000048].
system drive '8000000000000049' status is 'online' [instance: 8000000000000049].
system drive '800000000000004A' status is 'online' [instance: 800000000000004A].
system drive '800000000000004B' status is 'online' [instance: 800000000000004B].
system drive '800000000000004C' status is 'online' [instance: 800000000000004C].
system drive '800000000000004D' status is 'online' [instance: 800000000000004D].
system drive '800000000000004E' status is 'online' [instance: 800000000000004E].
system drive '800000000000004F' status is 'online' [instance: 800000000000004F].
system drive '8000000000000050' status is 'online' [instance: 8000000000000050].
system drive '8000000000000051' status is 'online' [instance: 8000000000000051].
Checking batteries
battery 'hnas-cluster-1.0' status is 'ok' [instance: 1.0].
battery 'hnas-cluster-2.0' status is 'ok' [instance: 2.0].
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_hitachi_hnas_snmp.pl \
    --plugin=storage::hitachi::hnas::snmp::plugin \
    --mode=hardware \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_hitachi_hnas_snmp.pl \
    --plugin=storage::hitachi::hnas::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
