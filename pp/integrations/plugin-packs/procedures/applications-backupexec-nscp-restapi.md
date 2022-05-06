---
id: applications-backupexec-nscp-restapi
title: Veritas Backup Exec NSCP Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Backup Exec brings a host template:
* App-Backupexec-Nscp-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template                   | Default | Discovery |
|:--------------|:-----------------------------------|:--------|:----------|
| Alerts        | App-Backupexec-Alerts-Nscp-Restapi | X       |           |
| Disks         | App-Backupexec-Disks-Nscp-Restapi  | X       | X         |
| Jobs          | App-Backupexec-Jobs-Nscp-Restapi   | X       |           |

### Discovery rules

| Rule name                             | Description                            |
|:--------------------------------------|:---------------------------------------|
| App-Backupexec-Nscp-Restapi-Disk-Name | Discover disks and monitor utilization |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric name                       | Description                                  | Unit  |
| :-------------------------------- | :------------------------------------------- | :---- |
| alerts.severity.none.count        | Number of alerts with none severity          |       |
| alerts.severity.question.count    | Number of alerts with question severity      |       |
| alerts.severity.error.count       | Number of alerts with error severity         |       |
| alerts.severity.warning.count     | Number of alerts with warning severity       |       |
| alerts.severity.information.count | Number of alerts with informational severity |       |
| alert status                      | Current alert status                         |       |

</TabItem>
<TabItem value="Disks" label="Disks">

| Metric name                             | Description                                                | Unit |
|:--------------------------------------- |:---------------------------------------------------------- |:---- |
| disk status                             | Status of the disk (enabled or disabled)                   |      |
| *disk_name*#disk.space.usage.bytes      | Space used on the disk                                     | B    |
| *disk_name*#disk.space.free.bytes       | Free space left on the disk                                | B    |
| *disk_name*#disk.space.usage.percentage | Space used on the disk in percentage                       | %    |


</TabItem>
<TabItem value="Jobs" label="Jobs">

| Metric name         | Description                     | Unit  |
| :------------------ | :------------------------------ | :---- |
| jobs.detected.count | Number of jobs detected         |       |
| job status          | Current job status              |       |
| job long status     | Current active job elapsed time |       |

</TabItem>
</Tabs>

## Prerequisites

### NSClient Configuration

To monitor **Backup Exec** through NRPE, install the Centreon packaged version of the NSClient++ agent.
Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md).

Please download and install the last release of **Centreon-NSClient-xxx.exe**: https://github.com/centreon/centreon-nsclient-build/releases.

By default, the username/password is **centreon/centreon**.

### Network flow

The target equipment must be reachable from the Centreon poller on the TCP/8443 port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Veritas Backup Exec NSCP API** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Nrpe
```

2. On the Centreon web interface, install the **Veritas Backup Exec NSCP API** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Veritas Backup Exec NSCP API** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Nrpe
```

2. Install the **Veritas Backup Exec NSCP API** Centreon Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-applications-backupexec-nscp-restapi
```

3. On the Centreon web interface, install the **Veritas Backup Exec NSCP API** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Veritas Backup Exec** server settings.
* Apply the **App-Backupexec-Nscp-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name                      | Description                                                                                  |
| :-------- | :------------------------ | :------------------------------------------------------------------------------------------- |
|           | NSCPRESTAPIPORT           | Port used (Default: 8443)                                                                    |
|           | NSCPRESTAPIPROTO          | Protocol used (Default: https)                                                               |
|           | NSCPRESTAPIUSERNAME       | NSClient API username                                                                        |
|           | NSCPRESTAPIPASSWORD       | NSClient API password                                                                        |
|           | NSCPRESTAPILEGACYPASSWORD | NSClient API legacy authentication password                                                  |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --insecure)                       |
|           | BEMCLIFILE                | Powershell module file (Default: C:/Program Files/Veritas/Backup Exec/Modules/BEMCLI/bemcli) |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon Poller CLI using the
**centreon-engine** user account and test the Plugin by running the following
command to check NSClient configuration:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_version
```

The expected command output is shown below:

```bash
0.5.2.41 2018-04-26
```

Check the Backup Exec Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::backup::backupexec::local::plugin' \
    --arg='disks' \
    --arg='--filter-name="" --verbose' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All disks are ok | 'disk 1#disk.space.usage.bytes'=1000000B;;;0;100000000 'disk 1#disk.space.free.bytes'=99000000B;;;0;100000000 'disk 1#disk.space.usage.percentage'=1.00%;;;0;100 'disk 2#disk.space.usage.bytes'=1000000B;;;0;250000000 'disk 2#disk.space.free.bytes'=249000000B;;;0;250000000 'disk 2#disk.space.usage.percentage'=0.40%;;;0;100
checking disk 'disk 1' [type: tapeDriveDevice]
    status: enabled
    space usage total: 95.37 MB used: 976.56 KB (1.00%) free: 94.41 MB (99.00%)
checking disk 'disk 2' [type: deduplicationDiskStorageDevice]
    status: enabled
    space usage total: 238.42 MB used: 976.56 KB (0.40%) free: 237.46 MB (99.60%)
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::backup::backupexec::local::plugin' \
    --arg='disks' \
    --arg='--help'
```

All available modes can be displayed by adding the
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::backup::backupexec::local::plugin' \
    --arg='xxx' \
    --arg='--list-mode'
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md)
