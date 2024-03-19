---
id: hardware-storage-huawei-oceanstor-snmp
title: Huawei OceanStor SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Monitoring Connector Assets

### Templates

The Centreon Pack **Huawei OceanStor SNMP** brings a host template:

* HW-Storage-Huawei-Oceanstor-SNMP-custom

It brings the following service templates:

| Service Alias   | Service Template                                 | Service Description | Default | Discovery |
|:----------------|:-------------------------------------------------|:--------------------|:--------|:----------|
| Controllers     | HW-Storage-Huawei-Oceanstor-Controllers-SNMP     | Check controllers   | X       | X         |
| Hardware-Global | HW-Storage-Huawei-Oceanstor-Hardware-Global-SNMP | Check hardware      | X       |           |
| Luns            | HW-Storage-Huawei-Oceanstor-Luns-SNMP            | Check LUNs          | X       | X         |
| Storage-Pools   | HW-Storage-Huawei-Oceanstor-Storage-Pools-SNMP   | Check storage pools |         | X         |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Rule name                                          | Description                                           |
| :------------------------------------------------- | :---------------------------------------------------- |
| HW-Storage-Huawei-Oceanstor-SNMP-Controller-Id     | Discover controllers and monitor cpu and memory usage |
| HW-Storage-Huawei-Oceanstor-SNMP-Lun-Name          | Discover LUNs and monitor space usage                 |
| HW-Storage-Huawei-Oceanstor-SNMP-Storage-Pool-Name | Discover storage pools and monitor space usage        |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Controllers" label="Controllers">

| Metric name                                           | Unit |
| :---------------------------------------------------- | :--- |
| status                                                |      |
| *controller_id*#controller.cpu.utilization.percentage | %    |
| *controller_id*#controller.memory.usage.percentage    | %    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                                            | Unit |
| :----------------------------------------------------- | :--- |
| bbu status                                             |      |
| disk status                                            |      |
| *disk_instance*#hardware.disk.temperature.celsius      | C    |
| enclosure status                                       |      |
| *enclosure\_id*#hardware.enclosure.temperature.celsius | C    |
| expboard status                                        |      |
| fan status                                             |      |
| psu status                                             |      |

</TabItem>
<TabItem value="Luns" label="Luns">

| Metric name                           | Unit |
| :------------------------------------ | :--- |
| *lun_name*#lun.space.usage.bytes      | B    |
| *lun_name*#lun.space.free.bytes       | B    |
| *lun_name*#lun.space.usage.percentage | %    |
| *lun_name*#lun.space.prot.bytes       | B    |

</TabItem>
<TabItem value="Storage-Pools" label="Storage-Pools">

| Metric name                                            | Unit |
| :----------------------------------------------------- | :--- |
| status                                                 |      |
| *storagepool_name*#storage_pool.space.usage.bytes      | B    |
| *storagepool_name*#storage_pool.space.free.bytes       | B    |
| *storagepool_name*#storage_pool.space.usage.percentage | %    |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To control your Huawei OceanStor, the SNMP must be configured.

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
dnf install centreon-pack-hardware-storage-huawei-oceanstor-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-huawei-oceanstor-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-huawei-oceanstor-snmp
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Huawei OceanStor SNMP** Pack through
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
dnf install centreon-plugin-Hardware-Storage-Huawei-Oceanstor-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Huawei-Oceanstor-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-huawei-oceanstor-snmp
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Huawei OceanStor** server settings.
* Apply the **HW-Storage-Huawei-Oceanstor-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins/centreon_huawei_oceanstor_snmp.pl \
    --plugin=storage::huawei::oceanstor::snmp::plugin \
    --mode=controllers \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='huawei_ro' \
    --warning-cpu-utilization=90 \
    --warning-cpu-utilization=95 \
    --verbose
```

Expected command output is shown below:

```bash
OK: All controllers are ok | '0A#controller.cpu.utilization.percentage'=6.00%;0:95;;0;100 '0A#controller.memory.usage.percentage'=76.00%;;;0;100 '0B#controller.cpu.utilization.percentage'=8.00%;0:95;;0;100 '0B#controller.memory.usage.percentage'=75.00%;;;0;100
checking controller '0A'
    health status: Normal [running status: Online]
    cpu usage: 6.00 %
    memory used: 76.00 %
checking controller '0B'
    health status: Normal [running status: Online]
    cpu usage: 8.00 %
    memory used: 75.00 %
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_huawei_oceanstor_snmp.pl \
    --plugin=storage::huawei::oceanstor::snmp::plugin \
    --mode=controllers \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_huawei_oceanstor_snmp.pl \
    --plugin=storage::huawei::oceanstor::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
