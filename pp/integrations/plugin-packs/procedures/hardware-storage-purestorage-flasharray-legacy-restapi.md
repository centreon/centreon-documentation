---
id: hardware-storage-purestorage-flasharray-legacy-restapi
title: Pure Storage FlashArray Legacy Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Pure Storage FlashArray Legacy Rest API** brings a host template:

* HW-Storage-Purestorage-Flasharray-Legacy-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template                                              | Service Description  | Default |
|:--------------|:--------------------------------------------------------------|:---------------------|:--------|
| Alarms        | HW-Storage-Purestorage-Flasharray-Legacy-Alarms-Restapi       | Check alarms         | X       |
| Hardware      | HW-Storage-Purestorage-Flasharray-Legacy-Hardware-Restapi     | Check hardware state | X       |
| Volume-Usage  | HW-Storage-Purestorage-Flasharray-Legacy-Volume-Usage-Restapi | Check volumes usage  | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Metric Name           | Unit  |
|:----------------------|:------|
| alerts.detected.count |       |
| alert status          |       |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric Name                                       | Unit  |
|:--------------------------------------------------|:------|
| entity status                                     |       |
| *entity_name*#hardware.entity.temperature.celsius |       |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| *volume_name*#volume.space.usage.bytes     | B     |
| *volume_name*#volume.data.reduction.count  |       |
| *volume_name*#volume.total.reduction.count |       |
| *volume_name*#volume.snapshots.usage.bytes | B     |

</TabItem>
</Tabs>

## Prerequisites

The Pack uses the old legacy API. You should try to use the Pack [Pure Storage FlashArray Rest API v2](hardware-storage-purestorage-flasharray-v2-restapi.md).

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
dnf install centreon-pack-hardware-storage-purestorage-flasharray-legacy-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-purestorage-flasharray-legacy-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-storage-purestorage-flasharray-legacy-restapi
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Pure Storage FlashArray Legacy Rest API** Pack through
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
dnf install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-Legacy-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-Legacy-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-storage-purestorage-flasharray-legacy-restapi
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Pure Storage FlashArray** server settings.
* Apply the **HW-Storage-Purestorage-Flasharray-Legacy-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro        | Description                                                                            |
|:------------|:-------------|:---------------------------------------------------------------------------------------|
| X           | APIUSERNAME  |                                                                                        |
| X           | APIPASSWORD  |                                                                                        |
|             | APIURLPATH   | (Default: '/api/1.11')                                                                 |
|             | EXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)      |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_legacy_restapi.pl \
    --plugin=storage::purestorage::flasharray::legacy::restapi::plugin \
    --mode=volume-usage \
    --hostname=10.0.0.1 \
    --api-path='/api/1.11' \
    --username='myuser' \
    --password='mypass' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All volumes are ok | 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.space.usage.bytes'=327296252612B;;;0;3298534883328 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.data.reduction.count'=5.436;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.total.reduction.count'=8.870;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.snapshots.usage.bytes'=1454226866B;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.space.usage.bytes'=327296252612B;;;0;4298534883328 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.data.reduction.count'=4.436;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.total.reduction.count'=7.870;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.snapshots.usage.bytes'=1854226866B;;;0;
Volume 'PURE-M50R2-ADM24-CLU04-Oracle-prod1' usage total: 3.00 TB used: 304.82 GB (9.92%) free: 2.70 TB (90.08%), data reduction: 5.436, total reduction: 8.870, snapshots: 1.35 GB
Volume 'PURE-M50R2-ADM24-CLU04-Oracle-prod2' usage total: 3.91 TB used: 304.82 GB (7.61%) free: 3.61 TB (92.39%), data reduction: 4.436, total reduction: 7.870, snapshots: 1.73 GB
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_legacy_restapi.pl \
    --plugin=storage::purestorage::flasharray::legacy::restapi::plugin \
    --mode=volume-usage \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_legacy_restapi.pl \
    --plugin=storage::purestorage::flasharray::legacy::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
