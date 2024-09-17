---
id: hardware-storage-wd-nas-snmp
title: WD NAS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **WD NAS SNMP** brings a host template:

* HW-Storage-Wd-Nas-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                | Service Description | Default | Discovery |
|:--------------|:--------------------------------|:--------------------|:--------|:----------|
| Hardware      | HW-Storage-Wd-Nas-Hardware-SNMP | Check hardware      | X       |           |
| Volumes       | HW-Storage-Wd-Nas-Volumes-SNMP  | Check volumes       |         | X         |

### Discovery rules

| Rule Name                          | Description                                   |
|:-----------------------------------|:----------------------------------------------|
| HW-Storage-Wd-Nas-SNMP-Volume-Name | Discover volumes and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| system#hardware.temperature.celsius       | C     |
| fan status                                |       |
| *drive_name*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Metric Name                                 | Unit  |
|:--------------------------------------------|:------|
| *volume_name*#volume.space.usage.bytes      | B     |
| *volume_name*#volume.space.free.bytes       | B     |
| *volume_name*#volume.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **WD NAS** equipment.

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
dnf install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **WD NAS SNMP** Pack through
the **Configuration > Monitoring Connector Manager** menu.

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
dnf install centreon-plugin-Hardware-Storage-Wd-Nas-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Wd-Nas-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-wd-nas-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **WD NAS** server settings.
* Apply the **HW-Storage-Wd-Nas-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
    --plugin=storage::wd::nas::snmp::plugin \
    --mode=volumes \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

The expected command output is shown below:

```bash
OK: volume 'Volume_1' space usage total: 7.20 TB used: 5.60 TB (77.78%) free: 1.60 TB (22.22%) | 'Volume_1#volume.space.usage.bytes'=6157265115545B;;;0;7916483719987.2 'Volume_1#volume.space.free.bytes'=1759218604441B;;;0;7916483719987.2 'Volume_1#volume.space.usage.percentage'=77.78%;;;0;100
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
    --plugin=storage::wd::nas::snmp::plugin \
    --mode=volumes \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
    --plugin=storage::wd::nas::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
