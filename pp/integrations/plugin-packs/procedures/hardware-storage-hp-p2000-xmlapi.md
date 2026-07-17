---
id: hardware-storage-hp-p2000-xmlapi
title: HP P2000 XML API
description: Monitor HP P2000 storage arrays via XML API: hardware health, virtual disks, and volume I/O statistics.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **HP P2000** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **HP P2000** brings a host template:

* **HW-Storage-Hp-P2000-Xmlapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-Hp-P2000-Xmlapi-custom" label="HW-Storage-Hp-P2000-Xmlapi-custom">

| Service Alias       | Service Template                                      | Service Description      | Discovery |
|:--------------------|:------------------------------------------------------|:-------------------------|:---------:|
| Health              | HW-Storage-Hp-P2000-Health-Xmlapi-custom              | Check health state       |           |
| Volume-Stats-Global | HW-Storage-Hp-P2000-Volume-Stats-Global-Xmlapi-custom | Check volumes statistics |     X     |

> The services listed above are created automatically when the **HW-Storage-Hp-P2000-Xmlapi-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias     | Service Template                                    | Service Description     |
|:------------------|:----------------------------------------------------|:------------------------|
| Vdisks            | HW-Storage-Hp-P2000-Vdisks-Xmlapi-custom            | Check virtual disks     |
| Volume-Stats-Name | HW-Storage-Hp-P2000-Volume-Stats-Name-Xmlapi-custom | Check volume statistics |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                          | Description                                               |
|:-----------------------------------|:----------------------------------------------------------|
| HW-Storage-Hp-P2000-Xmlapi-Volumes | Discover the disk partitions and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Name                      | Unit  |
|:--------------------------|:------|
| hardware.disk.status      | N/A   |
| hardware.disk.count       | count |
| hardware.enclosure.status | N/A   |
| hardware.enclosure.count  | count |
| hardware.fan.status       | N/A   |
| hardware.fan.count        | count |
| hardware.fan.speed.rpm    | rpm   |
| hardware.fru.status       | N/A   |
| hardware.fru.count        | count |
| hardware.psu.status       | N/A   |
| hardware.psu.count        | count |
| hardware.saslink.status   | N/A   |
| hardware.saslink.count    | count |
| hardware.sensor.status    | N/A   |
| hardware.sensor.count     | count |
| hardware.sensor.unit      | N/A   |
| hardware.vdisk.status     | N/A   |
| hardware.vdisk.count      | count |

</TabItem>
<TabItem value="Vdisks" label="Vdisks">

| Name                                     | Unit  |
|:-----------------------------------------|:------|
| status                                   | N/A   |
| *disk_name*#vdisk.space.usage.bytes      | B     |
| *disk_name*#vdisk.space.free.bytes       | B     |
| *disk_name*#vdisk.space.usage.percentage | %     |

</TabItem>
<TabItem value="Volume-Stats-Global" label="Volume-Stats-Global">

| Name                                          | Unit  |
|:----------------------------------------------|:------|
| *volume*#volume.io.read.usage.bytespersecond  | B/s   |
| *volume*#volume.io.write.usage.bytespersecond | B/s   |
| *volume*#volume.cache.read.hits.percentage    | %     |
| *volume*#volume.cache.write.hits.percentage   | %     |
| *volume*#volume.io.usage.iops                 | iops  |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Volume-Stats-Name" label="Volume-Stats-Name">

| Name                                           | Unit  |
|:-----------------------------------------------|:------|
| *volume1*#volume.io.read.usage.bytespersecond  | B/s   |
| *volume2*#volume.io.read.usage.bytespersecond  | B/s   |
| *volume1*#volume.io.write.usage.bytespersecond | B/s   |
| *volume2*#volume.io.write.usage.bytespersecond | B/s   |
| *volume1*#volume.cache.read.hits.percentage    | %     |
| *volume2*#volume.cache.read.hits.percentage    | %     |
| *volume1*#volume.cache.write.hits.percentage   | %     |
| *volume2*#volume.cache.write.hits.percentage   | %     |
| *volume1*#volume.io.usage.iops                 | iops  |
| *volume2*#volume.io.usage.iops                 | iops  |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

An account must be created on the monitored P2000.

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
dnf install centreon-pack-hardware-storage-hp-p2000-xmlapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-hp-p2000-xmlapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-hp-p2000-xmlapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-hp-p2000-xmlapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **HP P2000** connector through
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
dnf install centreon-plugin-Hardware-Storage-Hp-P2000-Xmlapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Hp-P2000-Xmlapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-hp-p2000-xmlapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Hp-P2000-Xmlapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-Hp-P2000-Xmlapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro        | Description                                                                                                                              | Default value | Mandatory |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| HTTPUSERNAME | Username to connect                                                                                                                      |               |     X     |
| HTTPPASSWORD | Password to connect                                                                                                                      |               |     X     |
| HTTPPROTOCOL | Specify https if needed                                                                                                                  | http          |           |
| HTTPPORT     | Port used                                                                                                                                | 80            |           |
| EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| COMPONENT    | Which component to check. Can be: 'disk', 'enclosure', 'fan', 'fru', 'psu', 'saslink', 'sensor', 'vdisk'                               | .*            |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose     |           |

</TabItem>
<TabItem value="Vdisks" label="Vdisks">

| Macro             | Description                                                                                                                            | Default value              | Mandatory |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:---------:|
| UNKNOWNSTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{display\}            | %\{status\} =~ /unknown/i  |           |
| FILTERNAME        | Filter virtual disk name (can be a regexp)                                                                                             |                            |           |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}            | %\{status\} =~ /degraded/i |           |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}           | %\{status\} =~ /failed/i   |           |
| WARNINGUSAGE      | Threshold                                                                                                                              |                            |           |
| CRITICALUSAGE     | Threshold                                                                                                                              |                            |           |
| WARNINGUSAGEFREE  | Threshold                                                                                                                              |                            |           |
| CRITICALUSAGEFREE | Threshold                                                                                                                              |                            |           |
| WARNINGUSAGEPRCT  | Threshold                                                                                                                              |                            |           |
| CRITICALUSAGEPRCT | Threshold                                                                                                                              |                            |           |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                  |           |

</TabItem>
<TabItem value="Volume-Stats-Global" label="Volume-Stats-Global">

| Macro                  | Description                                                                                                                            | Default value | Mandatory |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| FILTER                 | Set the volume name                                                                                                                    | .*            |           |
| CRITICALIOPS           | Threshold                                                                                                                              |               |           |
| WARNINGIOPS            | Threshold                                                                                                                              |               |           |
| CRITICALREAD           | Threshold                                                                                                                              |               |           |
| WARNINGREAD            | Threshold                                                                                                                              |               |           |
| CRITICALREADCACHEHITS  | Threshold                                                                                                                              |               |           |
| WARNINGREADCACHEHITS   | Threshold                                                                                                                              |               |           |
| CRITICALWRITE          | Threshold                                                                                                                              |               |           |
| WARNINGWRITE           | Threshold                                                                                                                              |               |           |
| CRITICALWRITECACHEHITS | Threshold                                                                                                                              |               |           |
| WARNINGWRITECACHEHITS  | Threshold                                                                                                                              |               |           |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose     |           |

</TabItem>
<TabItem value="Volume-Stats-Name" label="Volume-Stats-Name">

| Macro                  | Description                                                                                                                            | Default value | Mandatory |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| NAME                   | Set the volume name                                                                                                                    |               |           |
| CRITICALIOPS           | Threshold                                                                                                                              |               |           |
| WARNINGIOPS            | Threshold                                                                                                                              |               |           |
| CRITICALREAD           | Threshold                                                                                                                              |               |           |
| WARNINGREAD            | Threshold                                                                                                                              |               |           |
| CRITICALREADCACHEHITS  | Threshold                                                                                                                              |               |           |
| WARNINGREADCACHEHITS   | Threshold                                                                                                                              |               |           |
| CRITICALWRITE          | Threshold                                                                                                                              |               |           |
| WARNINGWRITE           | Threshold                                                                                                                              |               |           |
| CRITICALWRITECACHEHITS | Threshold                                                                                                                              |               |           |
| WARNINGWRITECACHEHITS  | Threshold                                                                                                                              |               |           |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose     |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_hp_p2000.pl \
	--plugin=storage::hp::p2000::xmlapi::plugin \
	--mode=volume-stats \
	--hostname=10.0.0.1 \
	--port='80' \
	--proto='http' \
	--username='XXXX' \
	--password='XXXX' \
	--name='' \
	--warning-read='' \
	--critical-read='' \
	--warning-write='' \
	--critical-write='' \
	--warning-iops='' \
	--critical-iops='' \
	--warning-write-cache-hits='' \
	--critical-write-cache-hits='' \
	--warning-read-cache-hits='' \
	--critical-read-cache-hits=''  \
	--verbose
```

The expected command output is shown below:

```bash
OK: All volumes statistics are ok | 'volume1#volume.io.read.usage.bytespersecond'=67056B/s;;;0; 'volume2#volume.io.read.usage.bytespersecond'=87122B/s;;;0; 'volume1#volume.io.write.usage.bytespersecond'=48347B/s;;;0; 'volume2#volume.io.write.usage.bytespersecond'=76968B/s;;;0; 'volume1#volume.cache.read.hits.percentage'=41509%;;;0;100 'volume2#volume.cache.read.hits.percentage'=58150%;;;0;100 'volume1#volume.cache.write.hits.percentage'=35171%;;;0;100 'volume2#volume.cache.write.hits.percentage'=68769%;;;0;100 'volume1#volume.io.usage.iops'=39588iops;;;0; 'volume2#volume.io.usage.iops'=44259iops;;;0; 
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
/usr/lib/centreon/plugins/centreon_hp_p2000.pl \
	--plugin=storage::hp::p2000::xmlapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                              | Linked service template                                                                                        |
|:----------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------|
| controllers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/controllers.pm)]   | Not used in this Monitoring Connector                                                                          |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/health.pm)]             | HW-Storage-Hp-P2000-Health-Xmlapi-custom                                                                       |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/listvolumes.pm)]  | Used for service discovery                                                                                     |
| ntp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/ntp.pm)]                   | Not used in this Monitoring Connector                                                                          |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/time.pm)]                 | Not used in this Monitoring Connector                                                                          |
| vdisks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/vdisks.pm)]             | HW-Storage-Hp-P2000-Vdisks-Xmlapi-custom                                                                       |
| volume-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/volumesstats.pm)] | HW-Storage-Hp-P2000-Volume-Stats-Global-Xmlapi-custom<br />HW-Storage-Hp-P2000-Volume-Stats-Name-Xmlapi-custom |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   HP p2000 Hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     |   Port used                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    |   Specify https if needed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --urlpath                                  |   Set path to xml api (default: '/api/')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --username                                 |   Username to connect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --password                                 |   Password to connect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --digest-sha256                            |   New digest to use (md5 deprecated).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Option               | Description                                                                                                                                                                                                             |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'disk', 'enclosure', 'fan', 'fru', 'psu', 'saslink', 'sensor', 'vdisk'.                                                                                             |
| --filter             |   Exclude the items given as a comma-separated list (example: --filter=fru --filter=enclosure). You can also exclude items from specific instances: --filter=disk,1                                                     |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping). It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.   |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                            |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='disk,OK,unknown'        |
| --warning            |   Set warning threshold for 'sensor', 'fan.speed' (syntax: type,instance,threshold) Example: --warning='sensor,temperature.*,30'                                                                                        |
| --critical           |   Set warning threshold for 'sensor', 'fan.speed' (syntax: type,instance,threshold) Example: --warning='sensor,temperature.*,30'                                                                                        |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                          |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                         |

</TabItem>
<TabItem value="Vdisks" label="Vdisks">

| Option                   | Description                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                                 |
| --filter-name            |   Filter virtual disk name (can be a regexp).                                                                                                                           |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{display\}    |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /degraded/i'). You can use the following variables: %\{status\}, %\{display\}   |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /failed/i'). You can use the following variables: %\{status\}, %\{display\}    |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                                                  |

</TabItem>
<TabItem value="Volume-Stats-Global" label="Volume-Stats-Global">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'read', 'write', 'iops', 'write-cache-hits', 'read-cache-hits'.                                  |
| --critical-*      |   Critical threshold. Can be: 'read', 'write', 'iops', 'write-cache-hits', 'read-cache-hits'.                                 |
| --name            |   Set the volume name.                                                                                                        |
| --regexp          |   Allows to use regexp to filter volume name (with option --name).                                                            |

</TabItem>
<TabItem value="Volume-Stats-Name" label="Volume-Stats-Name">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'read', 'write', 'iops', 'write-cache-hits', 'read-cache-hits'.                                  |
| --critical-*      |   Critical threshold. Can be: 'read', 'write', 'iops', 'write-cache-hits', 'read-cache-hits'.                                 |
| --name            |   Set the volume name.                                                                                                        |
| --regexp          |   Allows to use regexp to filter volume name (with option --name).                                                            |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hp_p2000.pl \
	--plugin=storage::hp::p2000::xmlapi::plugin \
	--mode=volume-stats \
	--help
```
