---
id: applications-netbackup-cma
slug: /applications-netbackup-cma
title: Symantec Netbackup CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx'

## Connector dependencies

The following monitoring connectors will be installed when you install the **Symantec Netbackup CMA** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Symantec Netbackup CMA** brings a host template:

* **App-Netbackup-CMA-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Netbackup-CMA-custom" label="App-Netbackup-CMA-custom">

| Service Alias  | Service Template                        | Service Description        |
|:---------------|:----------------------------------------|:---------------------------|
| Dedup-Status   | App-Netbackup-Dedup-Status-CMA-custom   | Check deduplication status |
| Drive-Cleaning | App-Netbackup-Drive-Cleaning-CMA-custom | Check drive cleaning       |
| Drive-Status   | App-Netbackup-Drive-Status-CMA-custom   | Check drive status         |
| Job-Status     | App-Netbackup-Job-Status-CMA-custom     | Check job status           |

> The services listed above are created automatically when the **App-Netbackup-CMA-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                    | Service Description              |
|:--------------|:------------------------------------|:---------------------------------|
| Tape-Usage    | App-Netbackup-Tape-Usage-CMA-custom | Check tapes available in library |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Dedup-Status" label="Dedup-Status">

| Name                                              | Unit |
|:--------------------------------------------------|:-----|
| status                                            | N/A  |
| *volume*#disk_pool.deduplication.usage.percentage | %    |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Drive-Cleaning" label="Drive-Cleaning">

| Name                 | Unit  |
|:---------------------|:------|
| drives.unclean.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Drive-Status" label="Drive-Status">

| Name   | Unit |
|:-------|:-----|
| status | N/A  |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Job-Status" label="Job-Status">

| Name             | Unit  |
|:-----------------|:------|
| jobs.total.count | count |
| status           | N/A   |
| long             | N/A   |
| frozen           | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Tape-Usage" label="Tape-Usage">

| Name  | Unit |
|:------|:-----|
| usage | N/A  |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

<CMAprerequisites />

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-netbackup-cma
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-netbackup-cma
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-netbackup-cma
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-netbackup-cma
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Symantec Netbackup CMA** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

### Plugin

<CMAprerequisites />

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Netbackup-CMA-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                             | Default value                     | Mandatory |
|:---------------------|:--------------------------------------------------------|:----------------------------------|:---------:|
| CENTREONAGENTPLUGINS | Path where the centreon_plugins.exe plugin can be found | C:/Program Files/Centreon/Plugins |     X     |
| SYSTEMLANGUAGE       | Language installed on the Windows system                | en                                |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Dedup-Status" label="Dedup-Status">

| Macro          | Description                                                                                                                                      | Default value            | Mandatory |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:---------:|
| TIMEOUT        | Timeout in seconds for the command. Default value can be overridden by the mode                                                                    | 120                      |           |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{display\}, %\{status\}                     | not %\{status\} =~ /up/i |           |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{status\}                      |                          |           |
| WARNINGUSAGE   | Set warning threshold in percent                                                                                                                 |                          |           |
| CRITICALUSAGE  | Set critical threshold in percent                                                                                                                |                          |           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose                |           |

</TabItem>
<TabItem value="Drive-Cleaning" label="Drive-Cleaning">

| Macro            | Description                                                                                                                                      | Default value | Mandatory |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEOUT          | Timeout in seconds for the command. Default value can be override by the mode                                                                    | 120           |           |
| WARNINGCLEANING  | Threshold                                                                                                                                        | 1             |           |
| CRITICALCLEANING | Threshold                                                                                                                                        | 2             |           |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose     |           |

</TabItem>
<TabItem value="Drive-Status" label="Drive-Status">

| Macro          | Description                                                                                                                                      | Default value            | Mandatory |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:---------:|
| TIMEOUT        | Timeout in seconds for the command. Default value can be override by the mode                                                                    | 120                      |           |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{display\}, %\{status\}                     | not %\{status\} =~ /up/i |           |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{status\}                      |                          |           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose                |           |

</TabItem>
<TabItem value="Job-Status" label="Job-Status">

| Macro            | Description                                                                                                                                                                         | Default value                                 | Mandatory |
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|:---------:|
| TIMEOUT          | Timeout in seconds for the command. Default value can be override by the mode                                                                                                       | 120                                           |           |
| FILTERPOLICYNAME | Filter job policy name (can be a regexp)                                                                                                                                            | .*                                            |           |
| FILTERENDTIME    | Filter job with end time greater than current time less value in seconds                                                                                                            | 86400                                         |           |
| OKSTATUS         | Define the conditions to match for the status to be OK You can use the following variables: %\{display\}, %\{status\}                                                               | %\{status\} == 0                              |           |
| FILTERSTARTTIME  | Filter job with start time greater than current time less value in seconds                                                                                                          |                                               |           |
| FILTERCOUNTERS   | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                           |                                               |           |
| CRITICALFROZEN   | Set critical threshold for frozen jobs. You can use the following variables:  %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}, %\{kb\}, %\{parentid\}, %\{schedule\}, %\{jobid\} | %\{state\} =~ /active\|queue/ && %\{kb\} == 0 |           |
| WARNINGFROZEN    | Set warning threshold for frozen jobs You can use the following variables: %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}, %\{kb\}, %\{parentid\}, %\{schedule\}, %\{jobid\}    | none                                          |           |
| WARNINGLONG      | Set warning threshold for long jobs You can use the following variables: %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}                                                         | none                                          |           |
| CRITICALLONG     | Set critical threshold for long jobs. You can use the following variables: %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}                                                       | none                                          |           |
| WARNINGSTATUS    | Define the conditions to match for the status to be WARNING You can use the following variables: %\{display\}, %\{status\}, %\{type\}                                               | %\{status\} == 1                              |           |
| CRITICALSTATUS   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{display\}, %\{status\}, %\{type\}                                             | %\{status\} \> 1                              |           |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                              | --verbose                                     |           |

</TabItem>
<TabItem value="Tape-Usage" label="Tape-Usage">

| Macro         | Description                                                                                                                                      | Default value | Mandatory |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEOUT       | Timeout in seconds for the command. Default value can be override by the mode                                                                    | 120           |           |
| FILTERSCRATCH | Filter tape scratch                                                                                                                              | scratch       |           |
| UNITS         | Units of thresholds ('%', 'absolute')                                                                                                            | %             |           |
| WARNINGUSAGE  | Threshold                                                                                                                                        | 80            |           |
| CRITICALUSAGE | Threshold                                                                                                                                        | 90            |           |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
C:/Program Files/Centreon/Plugins/centreon_plugins.exe" \
	--plugin=apps::backup::netbackup::local::plugin \
	--mode=drive-status \
	--timeout="120"  \
	--warning-status="" \
	--critical-status="not %\{status\} =~ /up/i" \
	--verbose
```

The expected command output is shown below:

```bash
OK: All drive status are ok 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
C:/Program Files/Centreon/Plugins/centreon_plugins.exe" \
	--plugin=apps::backup::netbackup::local::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                     | Linked service template                 |
|:-----------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| dedup-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/netbackup/local/mode/dedupstatus.pm)]     | App-Netbackup-Dedup-Status-CMA-custom   |
| drive-cleaning [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/netbackup/local/mode/drivecleaning.pm)] | App-Netbackup-Drive-Cleaning-CMA-custom |
| drive-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/netbackup/local/mode/drivestatus.pm)]     | App-Netbackup-Drive-Status-CMA-custom   |
| job-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/netbackup/local/mode/jobstatus.pm)]         | App-Netbackup-Job-Status-CMA-custom     |
| list-policies [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/netbackup/local/mode/listpolicies.pm)]   | Not used in this Monitoring Connector   |
| tape-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/netbackup/local/mode/tapeusage.pm)]         | App-Netbackup-Tape-Usage-CMA-custom     |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --show-password                            | By default, sensitive information in command lines is hidden in debug output and replaced with `***` (however, debug logs may still display sensitive information). Using the C option will display the passwords in plain text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --warning-xxx                              | Warning threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --critical-xxx                             | Critical threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --ssh-backend                              | Define the backend you want to use. It can be: `sshcli` (default), `plink` and `libssh`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the `sshcli` backend. Warning: using a password is not recommended. Use `--ssh-priv-key` instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 | Hostname to query in ssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timeout                                  | Timeout in seconds for the command (default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --sudo                                     | sudo command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Dedup-Status" label="Dedup-Status">

| Option            | Description                                                                                                                                                    |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --exec-only       | Print command output                                                                                                                                           |
| --filter-name     | Filter pool name (can be a regexp).                                                                                                                            |
| --warning-usage   | Set warning threshold in percent.                                                                                                                              |
| --critical-usage  | Set critical threshold in percent.                                                                                                                             |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{status\}                                    |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /up/i'). You can use the following variables: %\{display\}, %\{status\} |

</TabItem>
<TabItem value="Drive-Cleaning" label="Drive-Cleaning">

| Option        | Description                             |
|:--------------|:----------------------------------------|
| --exec-only   | Print command output                    |
| --filter-name | Filter drive name (can be a regexp).    |
| --warning-*   | Warning threshold. Can be: 'cleaning'.  |
| --critical-*  | Critical threshold. Can be: 'cleaning'. |

</TabItem>
<TabItem value="Drive-Status" label="Drive-Status">

| Option            | Description                                                                                                                                                    |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --exec-only       | Print command output                                                                                                                                           |
| --filter-name     | Filter drive name (can be a regexp).                                                                                                                           |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{status\}                                    |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /up/i'). You can use the following variables: %\{display\}, %\{status\} |

</TabItem>
<TabItem value="Job-Status" label="Job-Status">

| Option               | Description                                                                                                                                                                                                                                    |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --exec-only          | Print command output                                                                                                                                                                                                                           |
| --filter-policy-name | Filter job policy name (can be a regexp).                                                                                                                                                                                                      |
| --filter-client-name | Filter jobs by client name (can be a regexp).                                                                                                                                                                                                  |
| --filter-server-name | Filter jobs by server name (can be a regexp).                                                                                                                                                                                                  |
| --filter-type        | Filter job type (can be a regexp).                                                                                                                                                                                                             |
| --filter-start-time  | Filter job with start time greater than current time less value in seconds.                                                                                                                                                                    |
| --filter-end-time    | Filter job with end time greater than current time less value in seconds (default: 86400).                                                                                                                                                     |
| --ok-status          | Define the conditions to match for the status to be OK (default: '%\{status\} == 0') You can use the following variables: %\{display\}, %\{status\}                                                                                            |
| --warning-status     | Define the conditions to match for the status to be WARNING (default: '%\{status\} == 1') You can use the following variables: %\{display\}, %\{status\}, %\{type\}                                                                            |
| --critical-status    | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} \> 1'). You can use the following variables: %\{display\}, %\{status\}, %\{type\}                                                                          |
| --warning-long       | Set warning threshold for long jobs (default: none) You can use the following variables: %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}                                                                                                    |
| --critical-long      | Set critical threshold for long jobs (default: none). You can use the following variables: %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}                                                                                                  |
| --warning-frozen     | Set warning threshold for frozen jobs (default: none) You can use the following variables: %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}, %\{kb\}, %\{parentid\}, %\{schedule\}, %\{jobid\}                                               |
| --critical-frozen    | Set critical threshold for frozen jobs (default: '%\{state\} =~ /active\|queue/ && %\{kb\} == 0'). You can use the following variables:  %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}, %\{kb\}, %\{parentid\}, %\{schedule\}, %\{jobid\} |
| --warning-total      | Set warning threshold for total jobs.                                                                                                                                                                                                          |
| --critical-total     | Set critical threshold for total jobs.                                                                                                                                                                                                         |

</TabItem>
<TabItem value="Tape-Usage" label="Tape-Usage">

| Option           | Description                                           |
|:-----------------|:------------------------------------------------------|
| --exec-only      | Print command output                                  |
| --filter-scratch | Filter tape scratch (default: 'scratch').             |
| --units          | Units of thresholds (default: '%') ('%', 'absolute'). |
| --free           | Thresholds are on free tape left.                     |
| --warning-*      | Warning threshold. Can be: 'usage'.                   |
| --critical-*     | Critical threshold. Can be: 'usage'.                  |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
C:/Program Files/Centreon/Plugins/centreon_plugins.exe" \
	--plugin=apps::backup::netbackup::local::plugin \
	--mode=drive-status \
	--help
```
