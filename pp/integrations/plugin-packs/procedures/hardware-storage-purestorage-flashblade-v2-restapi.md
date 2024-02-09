---
id: hardware-storage-purestorage-flashblade-v2-restapi
title: Pure Storage FlashBlade v2 Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Pure Storage FlashBlade Rest API v2** brings a host template:

* HW-Storage-Purestorage-Flashblade-V2-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template                                         | Service Description  | Default | Discovery |
|:--------------|:---------------------------------------------------------|:---------------------|:--------|:----------|
| Alerts        | HW-Storage-Purestorage-Flashblade-V2-Alerts-Restapi      | Check alerts         | X       |           |
| Arrays        | HW-Storage-Purestorage-Flashblade-V2-Arrays-Restapi      | Check arrays         |         | X         |
| Filesystems   | HW-Storage-Purestorage-Flashblade-V2-Filesystems-Restapi | Check filesystems    |         | X         |
| Hardware      | HW-Storage-Purestorage-Flashblade-V2-Hardware-Restapi    | Check hardware state | X       |           |

### Discovery rules

| Rule Name                                                    | Description                                       |
|:-------------------------------------------------------------|:--------------------------------------------------|
| HW-Storage-Purestorage-Flashblade-V2-Restapi-Array-Name      | Discover arrays and monitor space occupation      |
| HW-Storage-Purestorage-Flashblade-V2-Restapi-Filesystem-Name | Discover filesystems and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric Name           s| Unit  |
|:----------------------|:------|
| alerts.detected.count |       |
| alert status          |       |

</TabItem>
<TabItem value="Arrays" label="Arrays">

| Metric Name                                                 | Unit  |
|:------------------------------------------------------------|:------|
| *array_name*#array.space.usage.bytes                        | B     |
| *array_name*#array.space.free.bytes                         | B     |
| *array_name*#array.space.usage.percentage                   | %     |
| *array_name*#array.data.reduction.count                     |       |
| *array_name~resolution*#array.io.read.usage.bytespersecond  | B/s   |
| *array_name~resolution*#array.io.write.usage.bytespersecond | B/s   |

</TabItem>
<TabItem value="Filesystems" label="Filesystems">

| Metric Name                                         | Unit  |
|:----------------------------------------------------|:------|
| *filesystem_name*#filesystem.space.usage.bytes      | B     |
| *filesystem_name*#filesystem.space.free.bytes       | B     |
| *filesystem_name*#filesystem.space.usage.percentage | %     |
| *filesystem_name*#filesystem.data.reduction.count   |       |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric Name          | Unit  |
|:---------------------|:------|
| chassis status       |       |
| eth port status      |       |
| fan status           |       |
| flash blade status   |       |
| fabric module status |       |
| mgmt port status     |       |
| power supply status  |       |

</TabItem>
</Tabs>

## Prerequisites

A service account has to be created on the device. This account must have at least a "read only" access to the storage array.

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
dnf install centreon-pack-hardware-storage-purestorage-flashblade-v2-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-purestorage-flashblade-v2-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-storage-purestorage-flashblade-v2-restapi
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Pure Storage FlashBlade Rest API v2** Pack through
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
dnf install centreon-plugin-Hardware-Storage-Purestorage-Flashblade-V2-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Flashblade-V2-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-storage-purestorage-flashblade-v2-restapi
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Pure Storage FlashBlade** server settings.
* Apply the **HW-Storage-Purestorage-Flashblade-V2-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro           | Description      |
|:------------|:----------------|:-----------------|
|             | APIEXTRAOPTIONS | --insecure       |
|             | APIPORT         |                  |
|             | APIPROTO        |                  |
| X           | APITOKEN        |                  |
|             | APIVERSION      | (Default: '2.4') |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flashblade_v2_restapi.pl \
    --plugin=storage::purestorage::flashblade::v2::restapi::plugin \
    --mode=arrays \
    --hostname='10.0.0.1' \
    --api-version='2.4' \
    --api-token='mytoken' \
    --insecure \
    --verbose
```

The expected command output is shown below:

```bash
OK: Array 'objectstor301' space usage total: 59.73 TB used: 138.42 GB (0.23%) free: 59.60 TB (99.77%) - data reduction: 1.023 - read: 0.00 B/s, write: 73.16 KB/s | 'objectstor301#array.space.usage.bytes'=148629707720B;;;0;65677494565820 'objectstor301#array.space.free.bytes'=65528864858100B;;;0;65677494565820 'objectstor301#array.space.usage.percentage'=0.23%;;;0;100 'objectstor301#array.data.reduction.count'=1.023;;;0; 'objectstor301~5m#array.io.read.usage.bytespersecond'=0B/s;;;0; 'objectstor301~5m#array.io.write.usage.bytespersecond'=74913.1533333333B/s;;;0;
checking array 'objectstor301'
    space usage total: 59.73 TB used: 138.42 GB (0.23%) free: 59.60 TB (99.77%)
    data reduction: 1.023
    read: 0.00 B/s, write: 73.16 KB/s
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flashblade_v2_restapi.pl \
    --plugin=storage::purestorage::flashblade::v2::restapi::plugin \
    --mode=arrays \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flashblade_v2_restapi.pl \
    --plugin=storage::purestorage::flashblade::v2::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
