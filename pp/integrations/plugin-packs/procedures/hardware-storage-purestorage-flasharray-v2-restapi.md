---
id: hardware-storage-purestorage-flasharray-v2-restapi
title: Pure Storage FlashArray Rest API v2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Pure Storage FlashArray Rest API v2** brings a host template:

* **HW-Storage-Purestorage-Flasharray-V2-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-Purestorage-Flasharray-V2-Restapi-custom" label="HW-Storage-Purestorage-Flasharray-V2-Restapi-custom">

| Service Alias | Service Template                                             | Service Description  |
|:--------------|:-------------------------------------------------------------|:---------------------|
| Alerts        | HW-Storage-Purestorage-Flasharray-V2-Alerts-Restapi-custom   | Check alerts         |
| Hardware      | HW-Storage-Purestorage-Flasharray-V2-Hardware-Restapi-custom | Check hardware state |

> The services listed above are created automatically when the **HW-Storage-Purestorage-Flasharray-V2-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                            | Service Description | Discovery  |
|:--------------|:------------------------------------------------------------|:--------------------|:----------:|
| Arrays        | HW-Storage-Purestorage-Flasharray-V2-Arrays-Restapi-custom  | Check arrays        | X          |
| Volumes       | HW-Storage-Purestorage-Flasharray-V2-Volumes-Restapi-custom | Check volumes       | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                                | Description                                               |
|:---------------------------------------------------------|:----------------------------------------------------------|
| HW-Storage-Purestorage-Flasharray-V2-Restapi-Array-Name  | Discover the disk partitions and monitor space occupation |
| HW-Storage-Purestorage-Flasharray-V2-Restapi-Volume-Name | Discover the disk partitions and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric Name           | Unit  |
|:----------------------|:------|
| alerts.detected.count |       |
| alert status          | N/A   |

</TabItem>
<TabItem value="Arrays" label="Arrays">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| arrays~array.space.usage.bytes             | B     |
| arrays~array.space.free.bytes              | B     |
| arrays~array.space.usage.percentage        | %     |
| arrays~array.data.reduction.count          | count |
| arrays~array.io.read.usage.bytespersecond  | B/s   |
| arrays~array.io.write.usage.bytespersecond | B/s   |

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

| Metric name                                  | Unit  |
|:---------------------------------------------|:------|
| volumes~volume.space.usage.bytes             | B     |
| volumes~volume.space.free.bytes              | B     |
| volumes~volume.space.usage.percentage        | %     |
| volumes~volume.data.reduction.count          | count |
| volumes~volume.io.read.usage.bytespersecond  | B/s   |
| volumes~volume.io.write.usage.bytespersecond | B/s   |

</TabItem>
</Tabs>

## Prerequisites

A service account has to be created on the device. This account must have at least a "read only" access to the storage array.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Pure Storage FlashArray Rest API v2** connector through
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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-V2-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-V2-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **HW-Storage-Purestorage-Flasharray-V2-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                           | Default value     | Mandatory   |
|:----------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APITOKEN        | API token                                                                                             |                   | X           |
| APIPROTO        | Specify https if needed (Default: 'https')                                                            |                   |             |
| APIPORT         | Port used (Default: 443)                                                                              |                   |             |
| APIVERSION      | API version (Default: 2.4)                                                                            | 2.4               | X           |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Macro          | Description                                                                                                                                                                                                                                              | Default value                                       | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| FILTERCATEGORY | Filter by category name (can be a regexp)                                                                                                                                                                                                                |                                                     |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{state} ne "closed" and %{severity} =~ /warning/i') You can use the following variables: %{category}, %{code}, %{severity}, %{opened}, %{state}, %{issue}, %{component\_name}    | %{state} ne "closed" and %{severity} =~ /warning/i  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{state} ne "closed" and %{severity} =~ /critical/i'). You can use the following variables: %{category}, %{code}, %{severity}, %{opened}, %{state}, %{issue}, %{component\_name} | %{state} ne "closed" and %{severity} =~ /critical/i |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                      | --verbose                                           |             |

</TabItem>
<TabItem value="Arrays" label="Arrays">

| Macro                  | Description                                                                                         | Default value     | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PERFRESOLUTION         |                                                                                                     | 5m                |             |
| FILTERID               | Filter arrays by id (can be a regexp)                                                               |                   |             |
| FILTERNAME             | Filter arrays by name (can be a regexp)                                                             |                   |             |
| WARNINGDATAREDUCTION   | Thresholds                                                                                          |                   |             |
| CRITICALDATAREDUCTION  | Thresholds                                                                                          |                   |             |
| WARNINGREAD            | Thresholds                                                                                          |                   |             |
| CRITICALREAD           | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                          |                   |             |
| WARNINGWRITE           | Thresholds                                                                                          |                   |             |
| CRITICALWRITE          | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                                                                                  | Default value     | Mandatory   |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (Default: '.*'). Can be: 'chassis', 'controller', 'cooling', 'drive', 'ethport', 'fcport', 'nvram', 'psu', 'sasport', 'temperature' |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                          | --verbose         |             |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Macro                  | Description                                                                                         | Default value     | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PERFRESOLUTION         |                                                                                                     | 5m                |             |
| FILTERID               | Filter volumes by id (can be a regexp)                                                              |                   |             |
| FILTERNAME             | Filter volumes by name (can be a regexp)                                                            |                   |             |
| WARNINGDATAREDUCTION   | Thresholds                                                                                          |                   |             |
| CRITICALDATAREDUCTION  | Thresholds                                                                                          |                   |             |
| WARNINGREAD            | Thresholds                                                                                          |                   |             |
| CRITICALREAD           | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                          |                   |             |
| WARNINGWRITE           | Thresholds                                                                                          |                   |             |
| CRITICALWRITE          | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

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
/usr/lib/centreon/plugins//centreon_purestorage_flasharray_v2_restapi.pl \
	--plugin=storage::purestorage::flasharray::v2::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                               | Linked service template                                      |
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|
| alerts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/alerts.pm)]            | HW-Storage-Purestorage-Flasharray-V2-Alerts-Restapi-custom   |
| arrays [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/arrays.pm)]            | HW-Storage-Purestorage-Flasharray-V2-Arrays-Restapi-custom   |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/hardware.pm)]        | HW-Storage-Purestorage-Flasharray-V2-Hardware-Restapi-custom |
| list-arrays [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/listarrays.pm)]   | Used for service discovery                                   |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/listvolumes.pm)] | Used for service discovery                                   |
| volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/volumes.pm)]          | HW-Storage-Purestorage-Flasharray-V2-Volumes-Restapi-custom  |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Pure Storage API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-token                                | API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-version                              | API version (Default: 2.4).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeout                                  | Set timeout in seconds (Default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Option            | Description                                                                                                                                                                                                                                                |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-category | Filter by category name (can be a regexp).                                                                                                                                                                                                                 |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: '%{state} ne "closed" and %{severity} =~ /warning/i') You can use the following variables: %{category}, %{code}, %{severity}, %{opened}, %{state}, %{issue}, %{component\_name}      |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{state} ne "closed" and %{severity} =~ /critical/i'). You can use the following variables: %{category}, %{code}, %{severity}, %{opened}, %{state}, %{issue}, %{component\_name}   |
| --memory          | Only check new alarms.                                                                                                                                                                                                                                     |

</TabItem>
<TabItem value="Arrays" label="Arrays">

| Option                   | Description                                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='data-reduction'                                 |
| --filter-id              | Filter arrays by id (can be a regexp).                                                                                       |
| --filter-name            | Filter arrays by name (can be a regexp).                                                                                     |
| --filter-resolution      | Time resolution for array performance. Can be: 1s, 30s, 5m, 30m, 2h, 8h, 24h (default: 5m).                                  |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct' (%), 'data-reduction', 'read', 'write'.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                                 |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (Default: '.*'). Can be: 'chassis', 'controller', 'cooling', 'drive', 'ethport', 'fcport', 'nvram', 'psu', 'sasport', 'temperature'.                                                               |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=controller). You can also exclude items from specific instances: --filter=drive,1                                                                      |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                  |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='temperature,OK,identifying'   |
| --warning            | Set warning threshold (syntax: type,regexp,threshold) Example: --warning='temperature,.*,30'                                                                                                                                |
| --critical           | Set critical threshold (syntax: type,regexp,threshold) Example: --critical='temperature,.*,40'                                                                                                                              |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Option                   | Description                                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='data-reduction'                                 |
| --filter-id              | Filter volumes by id (can be a regexp).                                                                                      |
| --filter-name            | Filter volumes by name (can be a regexp).                                                                                    |
| --filter-resolution      | Time resolution for array performance. Can be: 1s, 30s, 5m, 30m, 2h, 8h, 24h (default: 5m).                                  |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct' (%), 'data-reduction', 'read', 'write'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_purestorage_flasharray_v2_restapi.pl \
	--plugin=storage::purestorage::flasharray::v2::restapi::plugin \
	--mode=volumes \
	--help
```
