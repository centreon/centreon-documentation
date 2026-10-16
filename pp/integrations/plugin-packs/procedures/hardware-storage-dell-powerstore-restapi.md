---
id: hardware-storage-dell-powerstore-restapi
title: Dell PowerStore Rest API
description: "Monitor Dell PowerStore storage systems via REST API: alerts, clusters, hardware status, and memory usage."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Dell PowerStore Rest API** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Dell PowerStore Rest API** brings a host template:

* **HW-Storage-Dell-Powerstore-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-Dell-Powerstore-Restapi-custom" label="HW-Storage-Dell-Powerstore-Restapi-custom">

| Service Alias | Service Template                                   | Service Description |
|:--------------|:---------------------------------------------------|:--------------------|
| Alerts        | HW-Storage-Dell-Powerstore-Alerts-Restapi-custom   | Check alerts        |
| Clusters      | HW-Storage-Dell-Powerstore-Clusters-Restapi-custom | Check clusters      |
| Hardware      | HW-Storage-Dell-Powerstore-Hardware-Restapi-custom | Check hardware      |
| Memory        | HW-Storage-Dell-Powerstore-Memory-Restapi-custom   | Check memory        |

> The services listed above are created automatically when the **HW-Storage-Dell-Powerstore-Restapi-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Name                           | Unit  |
|:-------------------------------|:------|
| alerts.severity.none.count     | count |
| alerts.severity.info.count     | count |
| alerts.severity.minor.count    | count |
| alerts.severity.major.count    | count |
| alerts.severity.critical.count | count |
| status                         | N/A   |

</TabItem>
<TabItem value="Clusters" label="Clusters">

| Name                    | Unit  |
|:------------------------|:------|
| clusters.detected.count | count |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name         | Unit  |
|:--------------------|:------|
| appliance status    |       |
| battery status      |       |
| dimm status         |       |
| disk status         |       |
| enclosure status    |       |
| fan status          |       |
| node status         |       |
| io module status    |       |
| power supply status |       |
| sfp status          |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Name                              | Unit  |
|:----------------------------------|:------|
| *memory1*#memory.usage.bytes      | B     |
| *memory2*#memory.usage.bytes      | B     |
| *memory1*#memory.free.bytes       | B     |
| *memory2*#memory.free.bytes       | B     |
| *memory1*#memory.usage.percentage | %     |
| *memory2*#memory.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

To monitor your Dell PowerStore, the Rest API must be configured.
https://downloads.dell.com/manuals/common/pwrstr-apig_en-us.pdf

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-dell-powerstore-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-dell-powerstore-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-dell-powerstore-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-dell-powerstore-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Dell PowerStore Rest API** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

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
dnf install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-dell-powerstore-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-Dell-Powerstore-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                          | Default value     | Mandatory   |
|:----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | API username                                                                                         |                   | X           |
| APIPASSWORD     | API password                                                                                         |                   | X           |
| APIPROTO        | Specify https if needed (default: 'https')                                                           | https             |             |
| APIPORT         | Port used (default: 443)                                                                             | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Macro                    | Description                                                                                                                                                                                                                     | Default value                       | Mandatory   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|:-----------:|
| FILTERNAME               | Filter alerts by name (can be a regexp)                                                                                                                                                                                         |                                     |             |
| WARNINGSEVERITYCRITICAL  | Threshold                                                                                                                                                                                                                       |                                     |             |
| CRITICALSEVERITYCRITICAL | Threshold                                                                                                                                                                                                                       |                                     |             |
| WARNINGSEVERITYINFO      | Threshold                                                                                                                                                                                                                       |                                     |             |
| CRITICALSEVERITYINFO     | Threshold                                                                                                                                                                                                                       |                                     |             |
| WARNINGSEVERITYMAJOR     | Threshold                                                                                                                                                                                                                       |                                     |             |
| CRITICALSEVERITYMAJOR    | Threshold                                                                                                                                                                                                                       |                                     |             |
| WARNINGSEVERITYMINOR     | Threshold                                                                                                                                                                                                                       |                                     |             |
| CRITICALSEVERITYMINOR    | Threshold                                                                                                                                                                                                                       |                                     |             |
| WARNINGSEVERITYNONE      | Threshold                                                                                                                                                                                                                       |                                     |             |
| CRITICALSEVERITYNONE     | Threshold                                                                                                                                                                                                                       |                                     |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING (default: '%\{severity\} =~ /minor/i') You can use the following variables: %\{severity\}, %\{resource\}, %\{name\}, %\{timeraised\}, %\{acknowledged\}             | %\{severity\} =~ /minor/i           |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL (default: '%\{severity\} =~ /major\|critical/i'). You can use the following variables: %\{severity\}, %\{resource\}, %\{name\}, %\{timeraised\}, %\{acknowledged\} | %\{severity\} =~ /major\|critical/i |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                              | --verbose                           |             |

</TabItem>
<TabItem value="Clusters" label="Clusters">

| Macro                     | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERID                  | Filter clusters by id                                                                              |                   |             |
| WARNINGCLUSTERSDETECTED   | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERSDETECTED  | Threshold                                                                                          |                   |             |
| WARNINGREADBANDWIDTH1H    | Threshold                                                                                          |                   |             |
| CRITICALREADBANDWIDTH1H   | Threshold                                                                                          |                   |             |
| WARNINGREADBANDWIDTH24H   | Threshold                                                                                          |                   |             |
| CRITICALREADBANDWIDTH24H  | Threshold                                                                                          |                   |             |
| WARNINGREADBANDWIDTH30M   | Threshold                                                                                          |                   |             |
| CRITICALREADBANDWIDTH30M  | Threshold                                                                                          |                   |             |
| WARNINGREADBANDWIDTH5M    | Threshold                                                                                          |                   |             |
| CRITICALREADBANDWIDTH5M   | Threshold                                                                                          |                   |             |
| WARNINGREADIOPS1H         | Threshold                                                                                          |                   |             |
| CRITICALREADIOPS1H        | Threshold                                                                                          |                   |             |
| WARNINGREADIOPS24H        | Threshold                                                                                          |                   |             |
| CRITICALREADIOPS24H       | Threshold                                                                                          |                   |             |
| WARNINGREADIOPS30M        | Threshold                                                                                          |                   |             |
| CRITICALREADIOPS30M       | Threshold                                                                                          |                   |             |
| WARNINGREADIOPS5M         | Threshold                                                                                          |                   |             |
| CRITICALREADIOPS5M        | Threshold                                                                                          |                   |             |
| WARNINGREADLATENCY1H      | Threshold                                                                                          |                   |             |
| CRITICALREADLATENCY1H     | Threshold                                                                                          |                   |             |
| WARNINGREADLATENCY24H     | Threshold                                                                                          |                   |             |
| CRITICALREADLATENCY24H    | Threshold                                                                                          |                   |             |
| WARNINGREADLATENCY30M     | Threshold                                                                                          |                   |             |
| CRITICALREADLATENCY30M    | Threshold                                                                                          |                   |             |
| WARNINGREADLATENCY5M      | Threshold                                                                                          |                   |             |
| CRITICALREADLATENCY5M     | Threshold                                                                                          |                   |             |
| WARNINGWRITEBANDWIDTH1H   | Threshold                                                                                          |                   |             |
| CRITICALWRITEBANDWIDTH1H  | Threshold                                                                                          |                   |             |
| WARNINGWRITEBANDWIDTH24H  | Threshold                                                                                          |                   |             |
| CRITICALWRITEBANDWIDTH24H | Threshold                                                                                          |                   |             |
| WARNINGWRITEBANDWIDTH30M  | Threshold                                                                                          |                   |             |
| CRITICALWRITEBANDWIDTH30M | Threshold                                                                                          |                   |             |
| WARNINGWRITEBANDWIDTH5M   | Threshold                                                                                          |                   |             |
| CRITICALWRITEBANDWIDTH5M  | Threshold                                                                                          |                   |             |
| WARNINGWRITEIOPS1H        | Threshold                                                                                          |                   |             |
| CRITICALWRITEIOPS1H       | Threshold                                                                                          |                   |             |
| WARNINGWRITEIOPS24H       | Threshold                                                                                          |                   |             |
| CRITICALWRITEIOPS24H      | Threshold                                                                                          |                   |             |
| WARNINGWRITEIOPS30M       | Threshold                                                                                          |                   |             |
| CRITICALWRITEIOPS30M      | Threshold                                                                                          |                   |             |
| WARNINGWRITEIOPS5M        | Threshold                                                                                          |                   |             |
| CRITICALWRITEIOPS5M       | Threshold                                                                                          |                   |             |
| WARNINGWRITELATENCY1H     | Threshold                                                                                          |                   |             |
| CRITICALWRITELATENCY1H    | Threshold                                                                                          |                   |             |
| WARNINGWRITELATENCY24H    | Threshold                                                                                          |                   |             |
| CRITICALWRITELATENCY24H   | Threshold                                                                                          |                   |             |
| WARNINGWRITELATENCY30M    | Threshold                                                                                          |                   |             |
| CRITICALWRITELATENCY30M   | Threshold                                                                                          |                   |             |
| WARNINGWRITELATENCY5M     | Threshold                                                                                          |                   |             |
| CRITICALWRITELATENCY5M    | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                                                                    | Default value     | Mandatory   |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'appliance', 'battery', 'dimm', 'disk', 'enclosure', 'fan', 'node', 'iomodule', 'psu', 'sfp' |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                             | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERAPPLIANCEID | Filter appliance ID                                                                                |                   |             |
| WARNINGUSAGE      | Threshold                                                                                          |                   |             |
| CRITICALUSAGE     | Threshold                                                                                          |                   |             |
| WARNINGUSAGEFREE  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEFREE | Threshold                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
	--plugin=storage::dell::powerstore::restapi::plugin \
	--mode=memory \
	--hostname='10.0.0.1' \
	--api-username='xxxxxx' \
	--api-password='xxxxxx' \
	--port='443' \
	--proto='https'  \
	--filter-appliance-id='' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All appliances memory usage are ok | 'memory1#memory.usage.bytes'=40486B;;;0;total 'memory2#memory.usage.bytes'=28727B;;;0;total 'memory1#memory.free.bytes'=35247B;;;0;total 'memory2#memory.free.bytes'=24088B;;;0;total 'memory1#memory.usage.percentage'=90297%;;;0;100 'memory2#memory.usage.percentage'=40201%;;;0;100
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
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
	--plugin=storage::dell::powerstore::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                              | Linked service template                            |
|:----------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| alerts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/powerstore/restapi/mode/alerts.pm)]     | HW-Storage-Dell-Powerstore-Alerts-Restapi-custom   |
| clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/powerstore/restapi/mode/clusters.pm)] | HW-Storage-Dell-Powerstore-Clusters-Restapi-custom |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/powerstore/restapi/mode/hardware.pm)] | HW-Storage-Dell-Powerstore-Hardware-Restapi-custom |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/powerstore/restapi/mode/memory.pm)]     | HW-Storage-Dell-Powerstore-Memory-Restapi-custom   |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --hostname                                 |   Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-username                             |   API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --api-password                             |   API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Option                   | Description                                                                                                                                                                                                                                     |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                     |
| --memcached              |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration          |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-name            |   Filter alerts by name (can be a regexp).                                                                                                                                                                                                      |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{severity\} =~ /minor/i') You can use the following variables: %\{severity\}, %\{resource\}, %\{name\}, %\{timeraised\}, %\{acknowledged\}                           |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{severity\} =~ /major\|critical/i'). You can use the following variables: %\{severity\}, %\{resource\}, %\{name\}, %\{timeraised\}, %\{acknowledged\}               |
| --warning-* --critical-* |   Thresholds. Can be: 'severity-none', 'severity-info', 'severity-minor', 'severity-major', 'severity-critical'.                                                                                                                                |
| --memory                 |   Only check new alarms.                                                                                                                                                                                                                        |

</TabItem>
<TabItem value="Clusters" label="Clusters">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-id              |   Filter clusters by id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --warning-* --critical-* |   Thresholds. Can be: 'clusters-detected', 'read-iops-5m', 'read-iops-30m', 'read-iops-1h', 'read-iops-24h', 'write-iops-5m', 'write-iops-30m', 'write-iops-1h', 'write-iops-24h', 'read-latency-5m', 'read-latency-30m', 'read-latency-1h', 'read-latency-24h', 'write-latency-5m', 'write-latency-30m', 'write-latency-1h', 'write-latency-24h', 'read-bandwidth-5m', 'read-bandwidth-30m', 'read-bandwidth-1h', 'read-bandwidth-24h', 'write-bandwidth-5m', 'write-bandwidth-30m', 'write-bandwidth-1h', 'write-bandwidth-24h'.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                                     |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'appliance', 'battery', 'dimm', 'disk', 'enclosure', 'fan', 'node', 'iomodule', 'psu', 'sfp'.                                                                               |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='disk,26018c5b69264a868e49119eec95b0a9'                                                                                |
| --absent-problem     |   Return an error if an entity is 'Empty' (default is skipping) Can be specific or global: --absent-problem="fan,c41c5a99937e4953a180c65756f303f6"                                                                              |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                    |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='disk,CRITICAL,Uninitialized'    |
| --warning            |   Define the warning threshold for temperatures (syntax: type,instance,threshold) Example: --warning='temperature,.*,30'                                                                                                        |
| --critical           |   Define the critical threshold for temperatures (syntax: type,instance,threshold) Example: --critical='temperature,.*,40'                                                                                                      |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                  |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                 |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --filter-appliance-id    |   Filter appliance ID.                                                                                                        |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                        |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
	--plugin=storage::dell::powerstore::restapi::plugin \
	--mode=memory \
	--help
```
