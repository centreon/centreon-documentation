---
id: hardware-storage-purestorage-flasharray-v2-restapi
title: Pure Storage FlashArray v2 Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Pure Storage FlashArray Rest API v2** brings a host template:

* HW-Storage-Purestorage-Flasharray-V2-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template                                      | Service Description  | Default | Discovery |
|:--------------|:------------------------------------------------------|:---------------------|:--------|:----------|
| Alerts        | HW-Storage-Purestorage-Flasharray-V2-Alerts-Restapi   | Check alerts         | X       |           |
| Arrays        | HW-Storage-Purestorage-Flasharray-V2-Arrays-Restapi   | Check arrays         |         | X         |
| Hardware      | HW-Storage-Purestorage-Flasharray-V2-Hardware-Restapi | Check hardware state | X       |           |
| Volumes       | HW-Storage-Purestorage-Flasharray-V2-Volumes-Restapi  | Check volumes        |         | X         |

### Discovery rules

| Rule Name                                                | Description                                       |
|:---------------------------------------------------------|:--------------------------------------------------|
| HW-Storage-Purestorage-Flasharray-V2-Restapi-Array-Name  | Discover the arrays and monitor space occupation  |
| HW-Storage-Purestorage-Flasharray-V2-Restapi-Volume-Name | Discover the volumes and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric Name           | Unit  |
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
<TabItem value="Hardware" label="Hardware">

| Metric Name                                       | Unit  |
|:--------------------------------------------------|:------|
| chassis status                                    |       |
| controller status                                 |       |
| drive bay status                                  |       |
| eth port status                                   |       |
| fc port status                                    |       |
| nvram bay status                                  |       |
| power supply status                               |       |
| sas port status                                   |       |
| temperature status                                |       |
| *sensor_name*#hardware.sensor.temperature.celsius | C     |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Metric Name                                 | Unit  |
|:--------------------------------------------|:------|
| *volume_name*#volume.space.usage.bytes      | B     |
| *volume_name*#volume.space.free.bytes       | B     |
| *volume_name*#volume.space.usage.percentage | %     |
| *volume_name*#volume.data.reduction.count   |       |

</TabItem>
</Tabs>

## Prerequisites

A service account has to be created on the device. This account must have at least a "read only" access to the storage array.

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Pure Storage FlashArray Rest API v2** Pack through
the **Configuration > Monitoring Connectors Manager** menu.

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
dnf install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-V2-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-V2-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Pure Storage FlashArray** server settings.
* Apply the **HW-Storage-Purestorage-Flasharray-V2-Restapi-custom** template to the host.
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
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_v2_restapi.pl \
    --plugin=storage::purestorage::flasharray::v2::restapi::plugin \
    --mode=arrays \
    --hostname='10.0.0.1' \
    --api-version='2.4' \
    --api-token='mytoken' \
    --insecure \
    --verbose
```

The expected command output is shown below:

```bash
OK: Array 'filer06-c' space usage total: 26.52 TB used: 16.15 TB (60.91%) free: 10.37 TB (39.09%) - data reduction: 3.808 - read: 732.13 MB/s, write: 0.00 B/s | 'filer06-c#array.space.usage.bytes'=17760870565810B;;;0;29159353378407 'filer06-c#array.space.free.bytes'=11398482812597B;;;0;29159353378407 'filer06-c#array.space.usage.percentage'=60.91%;;;0;100 'filer06-c#array.data.reduction.count'=3.808;;;0; 'filer06-c~5m#array.io.read.usage.bytespersecond'=767691223B/s;;;0; 'filer06-c~5m#array.io.write.usage.bytespersecond'=0B/s;;;0;
checking array 'filer06-c'
    space usage total: 26.52 TB used: 16.15 TB (60.91%) free: 10.37 TB (39.09%)
    data reduction: 3.808
    read: 732.13 MB/s, write: 0.00 B/s
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_v2_restapi.pl \
    --plugin=storage::purestorage::flasharray::v2::restapi::plugin \
    --mode=arrays \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_v2_restapi.pl \
    --plugin=storage::purestorage::flasharray::v2::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
