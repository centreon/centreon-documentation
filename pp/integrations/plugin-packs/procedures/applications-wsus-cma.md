---
id: applications-wsus-cma
slug: /applications-wsus-cma
title: Microsoft WSUS CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Microsoft WSUS CMA** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Microsoft WSUS CMA** brings 2 host templates:

* **App-Wsus-CMA-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Wsus-CMA-custom" label="App-Wsus-CMA-custom">

| Alias                  | Modèle de service                          | Description                                           |
|:-----------------------|:-------------------------------------------|:------------------------------------------------------|
| Computers-Status       | App-Wsus-Computers-Status-CMA-custom       | Check computers status count                          |
| Server-Statistics      | App-Wsus-Server-Statistics-CMA-custom      | Check serveral WSUS server statistics                 |
| Synchronisation-Status | App-Wsus-Synchronisation-Status-CMA-custom | Check updates synchronisation with WSUS server status |
| Update-Status          | App-Wsus-Update-Status-CMA-custom          | Check updates status                                  |

> The services listed above are created automatically when the **App-Wsus-CMA-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Name               | Unit  |
|:-------------------|:------|
| up-to-date         | N/A   |
| needing-updates    | N/A   |
| with-update-errors | N/A   |
| not-contacted      | N/A   |
| unassigned         | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Name                 | Unit  |
|:---------------------|:------|
| computers            | N/A   |
| computer-groups      | N/A   |
| updates              | N/A   |
| approved-updates     | N/A   |
| declined-updates     | N/A   |
| not-approved-updates | N/A   |
| stale-updates        | N/A   |
| expired-updates      | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Name                          | Unit  |
|:------------------------------|:------|
| synchronisation-status        | N/A   |
| synchronisation_progress      | N/A   |
| last-synchronisation-status   | N/A   |
| last_synchronisation_duration | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Name                | Unit  |
|:--------------------|:------|
| with-client-errors  | N/A   |
| with-server-errors  | N/A   |
| needing-files       | N/A   |
| needed-by-computers | N/A   |
| up-to-date          | N/A   |

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
dnf install centreon-pack-applications-wsus-cma
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-wsus-cma
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-wsus-cma
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-wsus-cma
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Microsoft WSUS CMA** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

### Plugin

This connector relies on an integration supported by Centreon Engine and does not need a plugin.

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="App-Wsus-CMA-custom" label="App-Wsus-CMA-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Wsus-CMA-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                             | Default value                     | Mandatory   |
|:---------------------|:--------------------------------------------------------|:----------------------------------|:-----------:|
| CENTREONAGENTPLUGINS | Path where the centreon_plugins.exe plugin can be found | C:/Program Files/Centreon/Plugins |      X      |
| SYSTEMLANGUAGE       | Language installed on the Windows system                | en                                |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Macro                    | Description                                                                                                                            | Default value | Mandatory |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| NOTUPDATEDSINCE          | Time in days to count computers not updated since (default: 30)                                                                        |               |           |
| FILTERCOUNTERS           | Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                   |               |           |
| WARNINGNEEDINGUPDATES    | Threshold                                                                                                                              |               |           |
| CRITICALNEEDINGUPDATES   | Threshold                                                                                                                              |               |           |
| WARNINGNOTCONTACTED      | Threshold                                                                                                                              |               |           |
| CRITICALNOTCONTACTED     | Threshold                                                                                                                              |               |           |
| WARNINGUNASSIGNED        | Threshold                                                                                                                              |               |           |
| CRITICALUNASSIGNED       | Threshold                                                                                                                              |               |           |
| WARNINGUPTODATE          | Threshold                                                                                                                              |               |           |
| CRITICALUPTODATE         | Threshold                                                                                                                              |               |           |
| WARNINGWITHUPDATEERRORS  | Threshold                                                                                                                              |               |           |
| CRITICALWITHUPDATEERRORS | Threshold                                                                                                                              |               |           |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose     |           |

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Macro                      | Description                                                                                                                            | Default value | Mandatory |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| FILTERCOUNTERS             | Only display some counters (regexp can be used). Example: --filter-counters='not'                                                      |               |           |
| WARNINGAPPROVEDUPDATES     | Threshold                                                                                                                              |               |           |
| CRITICALAPPROVEDUPDATES    | Threshold                                                                                                                              |               |           |
| WARNINGCOMPUTERGROUPS      | Threshold                                                                                                                              |               |           |
| CRITICALCOMPUTERGROUPS     | Threshold                                                                                                                              |               |           |
| WARNINGCOMPUTERS           | Threshold                                                                                                                              |               |           |
| CRITICALCOMPUTERS          | Threshold                                                                                                                              |               |           |
| WARNINGDECLINEDUPDATES     | Threshold                                                                                                                              |               |           |
| CRITICALDECLINEDUPDATES    | Threshold                                                                                                                              |               |           |
| WARNINGEXPIREDUPDATES      | Threshold                                                                                                                              |               |           |
| CRITICALEXPIREDUPDATES     | Threshold                                                                                                                              |               |           |
| WARNINGNOTAPPROVEDUPDATES  | Threshold                                                                                                                              |               |           |
| CRITICALNOTAPPROVEDUPDATES | Threshold                                                                                                                              |               |           |
| WARNINGSTALEUPDATES        | Threshold                                                                                                                              |               |           |
| CRITICALSTALEUPDATES       | Threshold                                                                                                                              |               |           |
| WARNINGUPDATES             | Threshold                                                                                                                              |               |           |
| CRITICALUPDATES            | Threshold                                                                                                                              |               |           |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose     |           |

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Macro                               | Description                                                                                                                            | Default value              | Mandatory |
|:------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:---------:|
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example: --filter-counters='status'                                                   |                            |           |
| WARNINGLASTSYNCHRONISATIONDURATION  | Threshold                                                                                                                              |                            |           |
| CRITICALLASTSYNCHRONISATIONDURATION | Threshold                                                                                                                              |                            |           |
| CRITICALLASTSYNCHRONISATIONSTATUS   | Set critical threshold for current synchronisation status. You can use the following variables: %\{status\}                            | %\{status\} !~ /Succeeded/ |           |
| WARNINGLASTSYNCHRONISATIONSTATUS    | Set warning threshold for current synchronisation status. You can use the following variables: %\{status\}                             |                            |           |
| WARNINGSYNCHRONISATIONPROGRESS      | Threshold                                                                                                                              |                            |           |
| CRITICALSYNCHRONISATIONPROGRESS     | Threshold                                                                                                                              |                            |           |
| WARNINGSYNCHRONISATIONSTATUS        | Set warning threshold for current synchronisation status. You can use the following variables: %\{status\}                             |                            |           |
| CRITICALSYNCHRONISATIONSTATUS       | Set critical threshold for current synchronisation status. You can use the following variables: %\{status\}                            |                            |           |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                  |           |

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Macro                    | Description                                                                                                                            | Default value | Mandatory |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| FILTERCOUNTERS           | Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                   |               |           |
| WARNINGNEEDEDBYCOMPUTER  | Threshold                                                                                                                              |               |           |
| CRITICALNEEDEDBYCOMPUTER | Threshold                                                                                                                              |               |           |
| WARNINGNEEDINGFILES      | Threshold                                                                                                                              |               |           |
| CRITICALNEEDINGFILES     | Threshold                                                                                                                              |               |           |
| WARNINGUPTODATE          | Threshold                                                                                                                              |               |           |
| CRITICALUPTODATE         | Threshold                                                                                                                              |               |           |
| WARNINGWITHCLIENTERRORS  | Threshold                                                                                                                              |               |           |
| CRITICALWITHCLIENTERRORS | Threshold                                                                                                                              |               |           |
| WARNINGWITHSERVERERRORS  | Threshold                                                                                                                              |               |           |
| CRITICALWITHSERVERERRORS | Threshold                                                                                                                              |               |           |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose     |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Test that the plugin is able to monitor your Windows server by using a command like this one (replace the sample values by yours):

```cmd
"C:\Program Files\Centreon\Plugins\centreon_plugins.exe" --plugin=apps::microsoft::wsus::local::plugin \
    --mode=updates-status \
	--wsus-server="" \
	--wsus-port="" \
	--filter-counters="" \
	--warning-with-client-errors="" \
	--critical-with-client-errors="" \
	--warning-with-server-errors="" \
	--critical-with-server-errors="" \
	--warning-needing-files="" \
	--critical-needing-files="" \
	--warning-needed-by-computers="" \
	--critical-needed-by-computers="" \
	--warning-up-to-date="" \
	--critical-up-to-date="" \
	--verbose
```

The expected command output is shown below:

```bash
OK: With Client Errors: 32694 With Server Errors: 3648 Needing Files: 40252 Needed By Computers: 5327 Up-to-date: 70835 | 'with-client-errors'=32694;;;0; 'with-server-errors'=3648;;;0; 'needing-files'=40252;;;0; 'needed-by-computers'=5327;;;0; 'up-to-date'=70835;;;0;
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
cd "C:/Program Files/Centreon/Plugins/".\centreon_plugins.exe `
	--plugin=apps::microsoft::wsus::local::plugin 
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                   | Linked service template                    |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| computers-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/wsus/local/mode/computersstatus.pm)]             | App-Wsus-Computers-Status-CMA-custom       |
| server-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/wsus/local/mode/serverstatistics.pm)]           | App-Wsus-Server-Statistics-CMA-custom      |
| synchronisation-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/wsus/local/mode/synchronisationstatus.pm)] | App-Wsus-Synchronisation-Status-CMA-custom |
| updates-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/wsus/local/mode/updatesstatus.pm)]                 | App-Wsus-Update-Status-CMA-custom          |

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
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Option                   | Description                                                                                                                              |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                   |
| --timeout                |   Set timeout time for command execution (default: 30 sec)                                                                               |
| --no-ps                  |   Don't encode powershell. To be used with --command and 'type' command.                                                                 |
| --command                |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.   |
| --command-path           |   Command path (default: none).                                                                                                          |
| --command-options        |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                |
| --ps-display             |   Display powershell script.                                                                                                             |
| --ps-exec-only           |   Print powershell output.                                                                                                               |
| --wsus-server            |   Set WSUS hostname/IP.                                                                                                                  |
| --wsus-port              |   Set WSUS port.                                                                                                                         |
| --not-updated-since      |   Time in days to count computers not updated since (default: 30).                                                                       |
| --use-ssl                |   Set if WSUS use ssl.                                                                                                                   |
| --warning-* --critical-* |   Thresholds. Can be: 'needing-updates', 'with-update-errors', 'up-to-date', 'not-contacted', 'unassigned'                               |

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Option            | Description                                                                                                                                                                    |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='not'                                                                                            |
| --timeout         |   Set timeout time for command execution (default: 30 sec)                                                                                                                     |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                                                       |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.                                         |
| --command-path    |   Command path (default: none).                                                                                                                                                |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                      |
| --ps-display      |   Display powershell script.                                                                                                                                                   |
| --ps-exec-only    |   Print powershell output.                                                                                                                                                     |
| --wsus-server     |   Set WSUS hostname/IP (default: localhost).                                                                                                                                   |
| --wsus-port       |   Set WSUS port (default: 8530).                                                                                                                                               |
| --use-ssl         |   Set if WSUS use ssl.                                                                                                                                                         |
| --warning-*       |   Warning thresholds. Can be: 'computers', 'computer-groups', 'updates', 'approved-updates', 'declined-updates', 'not-approved-updates', 'stale-updates', 'expired-updates'    |
| --critical-*      |   Critical thresholds. Can be: 'computers', 'computer-groups', 'updates', 'approved-updates', 'declined-updates', 'not-approved-updates', 'stale-updates', 'expired-updates'   |

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Option                                 | Description                                                                                                                                              |
|:---------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                      |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                   |
| --timeout                              |   Set timeout time for command execution (default: 30 sec)                                                                                               |
| --no-ps                                |   Don't encode powershell. To be used with --command and 'type' command.                                                                                 |
| --command                              |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.                   |
| --command-path                         |   Command path (default: none).                                                                                                                          |
| --command-options                      |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                |
| --ps-display                           |   Display powershell script.                                                                                                                             |
| --ps-exec-only                         |   Print powershell output.                                                                                                                               |
| --wsus-server                          |   Set WSUS hostname/IP (default: localhost).                                                                                                             |
| --wsus-port                            |   Set WSUS port (default: 8530).                                                                                                                         |
| --use-ssl                              |   Set if WSUS use ssl.                                                                                                                                   |
| --warning-synchronisation-status       |   Set warning threshold for current synchronisation status (default: '') You can use the following variables: %\{status\}.                               |
| --critical-synchronisation-status      |   Set critical threshold for current synchronisation status (default: ''). You can use the following variables: %\{status\}.                             |
| --warning-last-synchronisation-status  |   Set warning threshold for current synchronisation status (default: '') You can use the following variables: %\{status\}.                               |
| --critical-last-synchronisation-status |   Set critical threshold for current synchronisation status (default: '%\{status\} !~ /Succeeded/'). You can use the following variables: %\{status\}.   |
| --warning-* --critical-*               |   Thresholds. Can be: 'last-synchronisation-duration' (s), 'synchronisation-progress' (%).                                                               |

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Option            | Description                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                   |
| --timeout         |   Set timeout time for command execution (default: 30 sec)                                                                               |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                 |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.   |
| --command-path    |   Command path (default: none).                                                                                                          |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                |
| --ps-display      |   Display powershell script.                                                                                                             |
| --ps-exec-only    |   Print powershell output.                                                                                                               |
| --wsus-server     |   Set WSUS hostname/IP (default: localhost).                                                                                             |
| --wsus-port       |   Set WSUS port (default: 8530).                                                                                                         |
| --use-ssl         |   Set if WSUS use ssl.                                                                                                                   |
| --warning-*       |   Warning thresholds. Can be: 'with-client-errors', 'with-server-errors', 'needing-files', 'needed-by-computers', 'up-to-date'.          |
| --critical-*      |   Critical thresholds. Can be: 'with-client-errors', 'with-server-errors', 'needing-files', 'needed-by-computers', 'up-to-date'.         |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
cd "C:/Program Files/Centreon/Plugins/"
.\centreon_plugins.exe `
	--plugin=apps::microsoft::wsus::local::plugin \
	--mode=updates-status \
	--help
```
