---
id: hardware-storage-hpe-primera-restapi
title: HPE Primera REST API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Compatibility

This connector is designed to be compatible with the following products.

| Product     | Model        | Versions |
|-------------|--------------|----------|
| HPE Primera | C650 2 nodes | 4.5.24.7 |
| HPE Alletra | 9000         | NA       |

## Pack assets

### Templates

The Monitoring Connector **HPE Primera REST API** brings a host template:

* **HW-Storage-HPE-Primera-API-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-HPE-Primera-API-custom" label="HW-Storage-HPE-Primera-API-custom">

| Service Alias | Service Template                                  | Service Description                   | Discovery |
|:--------------|:--------------------------------------------------|:--------------------------------------|:---------:|
| Capacity      | HW-Storage-HPE-Primera-Capacity-RESTAPI-custom    | Check capacity by storage type        |           |
| Disk-Status   | HW-Storage-HPE-Primera-Disk-Status-RESTAPI-custom | Check the state of the physical disks |     X     |
| Licenses      | HW-Storage-HPE-Primera-Licenses-RESTAPI-custom    | Check the state of the licenses       |           |
| Nodes         | HW-Storage-HPE-Primera-Nodes-RESTAPI-custom       | Check the state of the nodes          |           |

> The services listed above are created automatically when the **HW-Storage-HPE-Primera-API-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                   | Service Description    | Discovery  |
|:--------------|:---------------------------------------------------|:-----------------------|:----------:|
| Disk-Usage    | HW-Storage-HPE-Primera-Disk-Usage-RESTAPI-custom   | Check the disk usage   | X          |
| Volume-Usage  | HW-Storage-HPE-Primera-Volume-Usage-RESTAPI-custom | Check the volume usage | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                           | Description                                                |
|:----------------------------------------------------|:-----------------------------------------------------------|
| HW-Storage-HPE-Primera-RESTAPI-Disk-Status-Id       | Discover the physical disks and monitor their status.     |
| HW-Storage-HPE-Primera-RESTAPI-Disk-Status-Position | Discover the physical disks and monitor their status.     |
| HW-Storage-HPE-Primera-RESTAPI-Disk-Usage-Id        | Discover the physical disks and monitor their usage. |
| HW-Storage-HPE-Primera-RESTAPI-Disk-Usage-Position  | Discover the physical disks and monitor their usage. |
| HW-Storage-HPE-Primera-RESTAPI-Volume-Usage-Id      | Discover the volumes and monitor their usage.           |
| HW-Storage-HPE-Primera-RESTAPI-Volume-Usage-Name    | Discover the volumes and monitor their usage.           |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Capacity" label="Capacity">

| Metric name                                               | Unit  |
|:----------------------------------------------------------|:------|
| *storage_type*~storage.space.usage.bytes                  | B     |
| *storage_type*~storage.space.free.bytes                   | B     |
| *storage_type*~storage.space.usage.percentage             | %     |
| *storage_type*~storage.space.unavailable.bytes            | B     |
| *storage_type*~storage.space.failed.bytes                 | B     |
| *storage_type*~storage.space.compaction.ratio.count       | count |
| *storage_type*~storage.space.deduplication.ratio.count    | count |
| *storage_type*~storage.space.compression.ratio.count      | count |
| *storage_type*~storage.space.data_reduction.ratio.count   | count |
| *storage_type*~storage.space.overprovisioning.ratio.count | count |

</TabItem>
<TabItem value="Disk-Status" label="Disk-Status">

| Metric name          | Unit  |
|:---------------------|:------|
| disks.total.count    | count |
| disks.normal.count   | count |
| disks.degraded.count | count |
| disks.new.count      | count |
| disks.failed.count   | count |
| disks.unknown.count  | count |
| *disk_id*#status     | N/A   |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Metric name                           | Unit |
|:--------------------------------------|:-----|
| disks.total.space.usage.bytes         | B    |
| disks.total.space.usage.percent       | %    |
| disks.total.space.free.bytes          | B    |
| *disk_id*#disk.space.usage.bytes      | B    |
| *disk_id*#disk.space.free.bytes       | B    |
| *disk_id*#disk.space.usage.percentage | %    |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Metric name                                     | Unit  |
|:------------------------------------------------|:------|
| licenses.total.count                            | count |
| licenses.expired.count                          | count |
| *license_expiration*#license.expiration.seconds | s     |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Metric name           | Unit  |
|:----------------------|:------|
| nodes.total.count     | count |
| nodes.online.count    | count |
| nodes.offline.count   | count |
| *node_id*#node-status | N/A   |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Metric                                    | Unit |
|:------------------------------------------|:-----|
| *volume_id*#volume.space.usage.bytes      | B    |
| *volume_id*#volume.space.free.bytes       | B    |
| *volume_id*#volume.space.usage.percentage | %    |

</TabItem>
</Tabs>

## Prerequisites

The following procedure is a excerpt from the official [HPE documentation](https://support.hpe.com/hpesc/public/docDisplay?docId=a00118636en_us&page=GUID-77CF1ECF-98D5-44E1-B040-F54F17374A20.html).

1. Log in to the CLI as `Super`, `Service`, or any role granted the `wsapi_set` right.
2. Start the WSAPI server.
    ```
   cli%
   startwsapi
   ```
3. To configure WSAPI, enter `setwsapi` in the CLI.

Please refer to the official documentation for the details.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-hpe-primera-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-hpe-primera-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-hpe-primera-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-hpe-primera-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **HPE Primera REST API** connector through
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
dnf install centreon-plugin-Hardware-Storage-Hpe-Primera-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Hpe-Primera-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-hpe-primera-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Hpe-Primera-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-HPE-Primera-API-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                              | Default value | Mandatory |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| APIUSERNAME     | Define the username for authentication                                                                                                   | LOGIN         |     X     |
| APIPASSWORD     | Define the password associated with the username                                                                                         | PASSWORD      |     X     |
| APIPROTO        | Define the protocol to reach the API.                                                                                                    | https         |           |
| APIPORT         | Define the TCP port to use to reach the API.                                                                                             | 443           |           |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Capacity" label="Capacity">

| Macro                    | Description                                                                                                                            | Default value | Mandatory |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| FILTERTYPE               | Filter storage by type (regular expression). The known types are: allCapacity, FCCapacity, SSDCapacity and NLCapacity                  |               |           |
| WARNINGCOMPACTION        | Thresholds.                                                                                                                            |               |           |
| CRITICALCOMPACTION       | Thresholds.                                                                                                                            |               |           |
| WARNINGCOMPRESSION       | Thresholds.                                                                                                                            |               |           |
| CRITICALCOMPRESSION      | Thresholds.                                                                                                                            |               |           |
| WARNINGDATAREDUCTION     | Thresholds.                                                                                                                            |               |           |
| CRITICALDATAREDUCTION    | Thresholds.                                                                                                                            |               |           |
| WARNINGDEDUPLICATION     | Thresholds.                                                                                                                            |               |           |
| CRITICALDEDUPLICATION    | Thresholds.                                                                                                                            |               |           |
| WARNINGOVERPROVISIONING  | Thresholds.                                                                                                                            |               |           |
| CRITICALOVERPROVISIONING | Thresholds.                                                                                                                            |               |           |
| WARNINGSPACEFAILED       | Thresholds.                                                                                                                            |               |           |
| CRITICALSPACEFAILED      | Thresholds.                                                                                                                            |               |           |
| WARNINGSPACEUNAVAILABLE  | Thresholds.                                                                                                                            |               |           |
| CRITICALSPACEUNAVAILABLE | Thresholds.                                                                                                                            |               |           |
| WARNINGSPACEUSAGE        | Thresholds.                                                                                                                            |               |           |
| CRITICALSPACEUSAGE       | Thresholds.                                                                                                                            |               |           |
| WARNINGSPACEUSAGEFREE    | Thresholds.                                                                                                                            |               |           |
| CRITICALSPACEUSAGEFREE   | Thresholds.                                                                                                                            |               |           |
| WARNINGSPACEUSAGEPRCT    | Thresholds.                                                                                                                            |               |           |
| CRITICALSPACEUSAGEPRCT   | Thresholds.                                                                                                                            |               |           |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="Disk-Status" label="Disk-Status">

| Macro                 | Description                                                                                                                                                                                                                                                                                                                                                                  | Default value                             | Mandatory |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|:---------:|
| FILTERID              | Define which disks should be monitored based on their IDs. This option will be treated as a regular expression                                                                                                                                                                                                                                                               |                                           |           |
| FILTERMANUFACTURER    | Define which volumes should be monitored based on the disk manufacturer. This option will be treated as a regular expression                                                                                                                                                                                                                                                 |                                           |           |
| FILTERMODEL           | Define which volumes should be monitored based on the disk model. This option will be treated as a regular expression                                                                                                                                                                                                                                                        |                                           |           |
| FILTERSERIAL          | Define which volumes should be monitored based on the disk serial number. This option will be treated as a regular expression                                                                                                                                                                                                                                                |                                           |           |
| FILTERPOSITION        | Define which volumes should be monitored based on the disk position. The position is composed of 3 integers, separated by colons: - Cage number where the physical disk is in. - Magazine number where the physical disk is in. - For DC4 cages, disk position within the magazine. For non-DC4 cages, 0. Example: 7:5:0 This option will be treated as a regular expression |                                           |           |
| WARNINGDISKSDEGRADED  | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| CRITICALDISKSDEGRADED | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| WARNINGDISKSFAILED    | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| CRITICALDISKSFAILED   | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| WARNINGDISKSNEW       | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| CRITICALDISKSNEW      | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| WARNINGDISKSNORMAL    | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| CRITICALDISKSNORMAL   | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| WARNINGDISKSTOTAL     | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| CRITICALDISKSTOTAL    | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| WARNINGDISKSUNKNOWN   | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| CRITICALDISKSUNKNOWN  | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |           |
| WARNINGSTATUS         | Define the condition to match for the returned status to be WARNING. Default: '%{status} =~ /^(new\|degraded\|unknown)$/'                                                                                                                                                                                                                                                    | %{status} =~ /^(new\|degraded\|unknown)$/ |           |
| CRITICALSTATUS        | Define the condition to match for the returned status to be CRITICAL. Default: '%{status} =~ /failed/'                                                                                                                                                                                                                                                                       | %{status} =~ /failed/                     |           |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                                                       | --verbose                                 |           |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Macro                  | Description                                                                                                                                                                                                                                                                                                                                                                  | Default value | Mandatory |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| FILTERID               | Define which disks should be monitored based on their IDs. This option will be treated as a regular expression                                                                                                                                                                                                                                                               |               |           |
| FILTERMANUFACTURER     | Define which volumes should be monitored based on the disk manufacturer. This option will be treated as a regular expression                                                                                                                                                                                                                                                 |               |           |
| FILTERMODEL            | Define which volumes should be monitored based on the disk model. This option will be treated as a regular expression                                                                                                                                                                                                                                                        |               |           |
| FILTERSERIAL           | Define which volumes should be monitored based on the disk serial number. This option will be treated as a regular expression                                                                                                                                                                                                                                                |               |           |
| FILTERPOSITION         | Define which volumes should be monitored based on the disk position. The position is composed of 3 integers, separated by colons: - Cage number where the physical disk is in. - Magazine number where the physical disk is in. - For DC4 cages, disk position within the magazine. For non-DC4 cages, 0. Example: 7:5:0 This option will be treated as a regular expression |               |           |
| WARNINGTOTALFREE       | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |               |           |
| CRITICALTOTALFREE      | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |               |           |
| WARNINGTOTALUSAGE      | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |               |           |
| CRITICALTOTALUSAGE     | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |               |           |
| WARNINGTOTALUSAGEPRCT  | Thresholds in percents.                                                                                                                                                                                                                                                                                                                                                      |               |           |
| CRITICALTOTALUSAGEPRCT | Thresholds in percents.                                                                                                                                                                                                                                                                                                                                                      |               |           |
| WARNINGUSAGE           | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |               |           |
| CRITICALUSAGE          | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |               |           |
| WARNINGUSAGEFREE       | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |               |           |
| CRITICALUSAGEFREE      | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |               |           |
| WARNINGUSAGEPRCT       | Thresholds in percents.                                                                                                                                                                                                                                                                                                                                                      |               |           |
| CRITICALUSAGEPRCT      | Thresholds in percents.                                                                                                                                                                                                                                                                                                                                                      |               |           |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                                                       | --verbose     |           |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Macro                       | Description                                                                                                                                        | Default value       |   Mandatory   |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-------------:|
| FILTERNAME                  | Filter licenses by name (regular expression)                                                                                                       |                     |               |
| WARNINGEXPIRED              | Thresholds. Applies to the number of expired licenses.                                                                                             |                     |               |
| CRITICALEXPIRED             | Thresholds. Applies to the number of expired licenses.                                                                                             |                     |               |
| WARNINGLICENSEEXPIRATION    | Thresholds. Applies to the remaining time in seconds until the licenses will expire.                                                               | 1296000:            |               |
| CRITICALLICENSEEXPIRATION   | Thresholds. Applies to the remaining time in seconds until the licenses will expire.                                                               | 86400:              |               |
| WARNINGTOTAL                | Thresholds. Aplies to the total number of licenses.                                                                                                |                     |               |
| CRITICALTOTAL               | Thresholds. Aplies to the total number of licenses.                                                                                                |                     |               |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose           |               |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Macro              | Description                                                                                                                            | Default value         | Mandatory |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:---------:|
| FILTERNODEID       | Define which nodes (filtered by regular expression) should be monitored. Example: --filter-node='^(0\|1)$'                             |                       |           |
| WARNINGNODESTATUS  | Define the conditions to match for the status to be WARNING. You can use the %{status} variables.                                      | %{status} ne "online" |           |
| CRITICALNODESTATUS | Define the conditions to match for the status to be CRITICAL. You can use the %{status} variables.                                     |                       |           |
| WARNINGOFFLINE     | Thresholds for the number of offline nodes                                                                                             | 0:0                   |           |
| CRITICALOFFLINE    | Thresholds for the number of offline nodes                                                                                             |                       |           |
| WARNINGONLINE      | Thresholds for the number of online nodes                                                                                              |                       |           |
| CRITICALONLINE     | Thresholds for the number of online nodes                                                                                              |                       |           |
| WARNINGTOTAL       | Thresholds for the total number of nodes                                                                                               |                       |           |
| CRITICALTOTAL      | Thresholds for the total number of nodes                                                                                               |                       |           |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                       |           |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Macro             | Description                                                                                                                            | Default value | Mandatory |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| FILTERNAME        | Define which volumes should be monitored based on the volume names. This option will be treated as a regular expression.               |               |           |
| FILTERID          | Define which volumes should be monitored based on their IDs. This option will be treated as a regular expression.                      |               |           |
| WARNINGUSAGE      | Thresholds.                                                                                                                            |               |           |
| CRITICALUSAGE     | Thresholds.                                                                                                                            |               |           |
| WARNINGUSAGEFREE  | Thresholds.                                                                                                                            |               |           |
| CRITICALUSAGEFREE | Thresholds.                                                                                                                            |               |           |
| WARNINGUSAGEPRCT  | Thresholds.                                                                                                                            |               |           |
| CRITICALUSAGEPRCT | Thresholds.                                                                                                                            |               |           |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose     |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_hpe_primera_restapi.pl \
	--plugin=storage::hp::primera::restapi::plugin \
	--mode=licenses \
	--hostname='10.0.0.1' \
	--api-username='LOGIN' \
	--api-password='PASSWORD' \
	--port='443' \
	--proto='https'  \
	--filter-name='' \
	--warning-total='' \
	--critical-total='' \
	--warning-expired='' \
	--critical-expired='' \
	--warning-license-expiration='1296000:' \
	--critical-license-expiration='86400:' \
	--verbose
```

The expected command output is shown below:

```bash
CRITICAL: License 'Adaptive Flash Cache' expires: 2024-07-14. Adaptive Flash Cache license has expired. \| 'licenses.total.count'=25;;;0; 'licenses.expired.count'=1;;;0;25 'Adaptive Flash Cache#Adaptive Flash Cache#license.expiration.seconds'=0s;1296000:;86400:;0; 'Autonomic Rebalance#Autonomic Rebalance#license.expiration.seconds'=1234567890s;1296000:;86400:;0;
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_hpe_primera_restapi.pl \
	--plugin=storage::hp::primera::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                | Linked service template                            |
|:------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/capacity.pm)]        | HW-Storage-HPE-Primera-Capacity-RESTAPI-custom     |
| disk-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/diskstatus.pm)]   | HW-Storage-HPE-Primera-Disk-Status-RESTAPI-custom  |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/diskusage.pm)]     | HW-Storage-HPE-Primera-Disk-Usage-RESTAPI-custom   |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/licenses.pm)]        | HW-Storage-HPE-Primera-Licenses-RESTAPI-custom     |
| list-disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/listdisks.pm)]     | Used for service discovery                         |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/listvolumes.pm)] | Used for service discovery                         |
| nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/nodes.pm)]              | HW-Storage-HPE-Primera-Nodes-RESTAPI-custom        |
| volume-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/volumeusage.pm)] | HW-Storage-HPE-Primera-Volume-Usage-RESTAPI-custom |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      HPE Primera REST API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --hostname                                 | Address of the server that hosts the API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --port                                     | Define the TCP port to use to reach the API (default: 443).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --proto                                    | Define the protocol to reach the API (default: 'https').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-username                             | Define the username for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --api-password                             | Define the password associated with the username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --timeout                                  | Define the timeout in seconds for HTTP requests (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Capacity" label="Capacity">

| Option                   | Description                                                                                                                                                                                                                                                                |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-type            | Filter storage by type (regular expression). The known types are: allCapacity, FCCapacity, SSDCapacity and NLCapacity.                                                                                                                                                     |
| --warning-* --critical-* | Thresholds that can apply to: - Space oriented metrics: 'space-usage', 'space-usage-free', 'space-usage-prct', 'space-unavailable', 'space-failed', - Storage optimization metrics: 'compaction', 'deduplication', 'compression', 'data-reduction', 'overprovisioning'.    |

</TabItem>
<TabItem value="Disk-Status" label="Disk-Status">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-id              | Define which disks should be monitored based on their IDs. This option will be treated as a regular expression.                                                                                                                                                                                                                                                                 |
| --filter-manufacturer    | Define which volumes should be monitored based on the disk manufacturer. This option will be treated as a regular expression.                                                                                                                                                                                                                                                   |
| --filter-model           | Define which volumes should be monitored based on the disk model. This option will be treated as a regular expression.                                                                                                                                                                                                                                                          |
| --filter-serial          | Define which volumes should be monitored based on the disk serial number. This option will be treated as a regular expression.                                                                                                                                                                                                                                                  |
| --filter-position        | Define which volumes should be monitored based on the disk position. The position is composed of 3 integers, separated by colons: - Cage number where the physical disk is in. - Magazine number where the physical disk is in. - For DC4 cages, disk position within the magazine. For non-DC4 cages, 0. Example: 7:5:0 This option will be treated as a regular expression.   |
| --warning-status         | Define the condition to match for the returned status to be WARNING. Default: '%{status} =~ /^(new\|degraded\|unknown)$/'                                                                                                                                                                                                                                                       |
| --critical-status        | Define the condition to match for the returned status to be CRITICAL. Default: '%{status} =~ /failed/'                                                                                                                                                                                                                                                                          |
| --unknown-status         | Define the condition to match for the returned status to be UNKNOWN. Default: '%{status} =~ /NOT\_DOCUMENTED$/'                                                                                                                                                                                                                                                                 |
| --warning-* --critical-* | Thresholds. '*' may stand for 'disks-total', 'disks-normal', 'disks-degraded', 'disks-new', 'disks-failed', 'disks-unknown'.                                                                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Define which counters (filtered by regular expression) should be monitored. Example: --filter-counters='^usage$'                                                                                                                                                                                                                                                                |
| --filter-id              | Define which disks should be monitored based on their IDs. This option will be treated as a regular expression.                                                                                                                                                                                                                                                                 |
| --filter-manufacturer    | Define which volumes should be monitored based on the disk manufacturer. This option will be treated as a regular expression.                                                                                                                                                                                                                                                   |
| --filter-model           | Define which volumes should be monitored based on the disk model. This option will be treated as a regular expression.                                                                                                                                                                                                                                                          |
| --filter-serial          | Define which volumes should be monitored based on the disk serial number. This option will be treated as a regular expression.                                                                                                                                                                                                                                                  |
| --filter-position        | Define which volumes should be monitored based on the disk position. The position is composed of 3 integers, separated by colons: - Cage number where the physical disk is in. - Magazine number where the physical disk is in. - For DC4 cages, disk position within the magazine. For non-DC4 cages, 0. Example: 7:5:0 This option will be treated as a regular expression.   |
| --warning-* --critical-* | Thresholds for disk usage metrics. * may be replaced with: - For individual disks: 'usage' (B), 'usage-free' (B), 'usage-prct' (%). - For global statistics: 'total-usage' (B), 'total-free' (B), 'total-usage-prct' (%).                                                                                                                                                       |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Option                   | Description                                                                                                                                                                                                                                                                                                |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter licenses by name (regular expression).                                                                                                                                                                                                                                                              |
| --warning-* --critical-* | Thresholds for counters and license validity remaining time in seconds. * may be replaced with:  'total': applies to the total number of licenses. 'expired': applies to the number of expired licenses. 'license-expiration': applies to the remaining time in seconds until the licenses will expire.    |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Option                 | Description                                                                                                                             |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node          | Define which nodes (filtered by regular expression) should be monitored. Example: --filter-node='^(0\|1)$'                              |
| --warning-node-status  | Define the conditions to match for the status to be WARNING. (default: '%{status} ne "online"'). You can use the %{status} variables.   |
| --critical-node-status | Define the conditions to match for the status to be CRITICAL You can use the %{status} variables.                                       |
| --warning-total        | Thresholds for the total number of nodes.                                                                                               |
| --critical-total       | Thresholds for the total number of nodes.                                                                                               |
| --warning-online       | Thresholds for the number of online nodes.                                                                                              |
| --critical-online      | Thresholds for the number of online nodes.                                                                                              |
| --warning-offline      | Thresholds for the number of offline nodes.                                                                                             |
| --critical-offline     | Thresholds for the number of offline nodes.                                                                                             |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Option                   | Description                                                                                                                |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Define which counters (filtered by regular expression) should be monitored. Example: --filter-counters='^usage$'           |
| --filter-id              | Define which volumes should be monitored based on their IDs. This option will be treated as a regular expression.          |
| --filter-name            | Define which volumes should be monitored based on the volume names. This option will be treated as a regular expression.   |
| --warning-* --critical-* | Thresholds for volume usage metrics. * may be replaced with: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).              |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hpe_primera_restapi.pl \
	--plugin=storage::hp::primera::restapi::plugin \
	--mode=licenses \
	--help
```
