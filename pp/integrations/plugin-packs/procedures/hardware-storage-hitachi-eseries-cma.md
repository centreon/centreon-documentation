---
id: hardware-storage-hitachi-eseries-cma
slug: /hardware-storage-hitachi-eseries-cma
title: Hitachi E Series CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Hitachi E Series CMA** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Hitachi E Series CMA** brings a host template:

* **HW-Storage-Hitachi-Eseries-CMA-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-Hitachi-Eseries-CMA-custom" label="HW-Storage-Hitachi-Eseries-CMA-custom">

| Service Alias | Service Template                                  | Service Description                                        |
|:--------------|:--------------------------------------------------|:-----------------------------------------------------------|
| Efficiency    | HW-Storage-Hitachi-Eseries-Efficiency-CMA-custom  | Check Hitachi E Series system efficiency (raidcom)         |
| Pair-Status   | HW-Storage-Hitachi-Eseries-Pair-Status-CMA-custom | Check Hitachi E Series pairs status (pairdisplay)          |
| Path-Status   | HW-Storage-Hitachi-Eseries-Path-Status-CMA-custom | Check Hitachi E Series path status (raidcom)               |
| Pool          | HW-Storage-Hitachi-Eseries-Pool-CMA-custom        | Check Hitachi E Series pool status and capacity (raidcom)  |
| Quorum        | HW-Storage-Hitachi-Eseries-Quorum-CMA-custom      | Check Hitachi E Series quorum status (raidcom)             |

> The services listed above are created automatically when the **HW-Storage-Hitachi-Eseries-CMA-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Efficiency" label="Efficiency">

| Name                   | Unit |
|:-----------------------|:-----|
| total-efficiency-ratio | N/A  |
| data-reduction-ratio   | N/A  |
| software-saving-ratio  | N/A  |

</TabItem>
<TabItem value="Pair-Status" label="Pair-Status">

| Name   | Unit |
|:-------|:-----|
| status | N/A  |

</TabItem>
<TabItem value="Path-Status" label="Path-Status">

| Name   | Unit |
|:-------|:-----|
| status | N/A  |

</TabItem>
<TabItem value="Pool" label="Pool">

| Name                                        | Unit |
|:--------------------------------------------|:-----|
| status                                      | N/A  |
| *pools*#storage.pool.space.usage.bytes      | B    |
| *pools*#storage.pool.space.usage.percentage | %    |

</TabItem>
<TabItem value="Quorum" label="Quorum">

| Name   | Unit |
|:-------|:-----|
| status | N/A  |

</TabItem>
</Tabs>

## Prerequisites

For monitoring Hitachi E-Series storage arrays, this connector relies on the CCI (Command Control Interface) software which must be installed and configured in accordance with the [official Hitachi documentation](https://docs.hitachivantara.com).

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
dnf install centreon-pack-hardware-storage-hitachi-eseries-cma
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-hitachi-eseries-cma
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-hitachi-eseries-cma
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-hitachi-eseries-cma
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Hitachi E Series CMA** connector through
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
dnf install 
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install 
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install 
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install 
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-Hitachi-Eseries-CMA-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                        | Description                                                                                                                                        | Default value                     | Mandatory |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:---------:|
| CENTREON_AGENT_PLUGINS       | Path where the centreon_plugins.exe plugin can be found                                                                                            | C:/Program Files/Centreon/Plugins |           |
| COMMAND_PATH                 | Command path                                                                                                                                       |                                   |           |
| INSTANCE_ID                  |                                                                                                                                                    |                                   |           |
| TIMEOUT                      | Timeout time for command execution                                                                                                                 | 45                                |           |
| CENTREON_AGENT_EXTRA_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).           |                                   |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Efficiency" label="Efficiency">

| Macro                           | Description                                                                                                                                      | Default value | Mandatory |
|:--------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_DATA_REDUCTION_RATIO    | Warning threshold for Data Reduction Ratio (TLS\_R)                                                                                              |               |           |
| CRITICAL_DATA_REDUCTION_RATIO   | Critical threshold for Data Reduction Ratio (TLS\_R)                                                                                             |               |           |
| WARNING_SOFTWARE_SAVING_RATIO   | Warning threshold for Software Saving Ratio (PLS\_R)                                                                                             |               |           |
| CRITICAL_SOFTWARE_SAVING_RATIO  | Critical threshold for Software Saving Ratio (PLS\_R)                                                                                            |               |           |
| WARNING_TOTAL_EFFICIENCY_RATIO  | Warning threshold for Total Efficiency Ratio (TOTAL\_EFF)                                                                                        | 2.01:         |           |
| CRITICAL_TOTAL_EFFICIENCY_RATIO | Critical threshold for Total Efficiency Ratio (TOTAL\_EFF)                                                                                       | 1.01:         |           |
| EXTRA_OPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Pair-Status" label="Pair-Status">

| Macro              | Description                                                                                                                                                           | Default value                                          | Mandatory |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:---------:|
| REMOTE_INSTANCE_ID | Remote array ID. If starts with + or -, it is added to the local array ID, otherwise used as is (e.g. `--remote-instance-id='100'` or `--remote-instance-id='+1000'`) |                                                        |           |
| GROUP_ID           | `HORCM` group name to check                                                                                                                                           |                                                        | X         |
| LDEV_ID            | Filter pair volumes by `LDEV ID`. Can be used multiple times (e.g. `--ldev-id='1' --ldev-id='2' --ldev-id='3'`)                                                       |                                                        |           |
| CRITICAL_STATUS    | Critical threshold for pair status                                                                                                                                    | %\{status\_l\} ne "PAIR" \|\| %\{status\_r\} ne "PAIR" |           |
| WARNING_STATUS     | Warning threshold for pair status                                                                                                                                     |                                                        |           |
| EXTRA_OPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                |                                                        |           |

</TabItem>
<TabItem value="Path-Status" label="Path-Status">

| Macro           | Description                                                                                                                                      | Default value        | Mandatory |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:---------:|
| INCLUDE_PORT    | Filter paths by port name (regexp, e.g. `--include-port='CL1-A'`)                                                                                |                      |           |
| EXCLUDE_PORT    | Exclude paths by port name (regexp)                                                                                                              |                      |           |
| INCLUDE_LUN     | Filter paths by LUN ID (regexp)                                                                                                                  |                      |           |
| EXCLUDE_LUN     | Exclude paths by LUN ID (regexp)                                                                                                                 |                      |           |
| CRITICAL_STATUS | Critical threshold for path status                                                                                                               | %\{status\} ne "NML" |           |
| WARNING_STATUS  | Warning threshold for path status                                                                                                                |                      |           |
| EXTRA_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |                      |           |

</TabItem>
<TabItem value="Pool" label="Pool">

| Macro               | Description                                                                                                                                      | Default value          | Mandatory |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:---------:|
| INCLUDE_PID         | Filter pools by PID (regexp)                                                                                                                     |                        |           |
| EXCLUDE_PID         | Exclude pools by PID (regexp)                                                                                                                    |                        |           |
| CRITICAL_STATUS     | Critical threshold for pool status                                                                                                               | %\{status\} ne "POLN"' |           |
| WARNING_STATUS      | Warning threshold for pool status                                                                                                                |                        |           |
| WARNING_USAGE       | Warning threshold in bytes for pool space usage                                                                                                  |                        |           |
| CRITICAL_USAGE      | Critical threshold in bytes for pool space usage                                                                                                 |                        |           |
| WARNING_USAGE_PRCT  | Warning threshold in percentage for pool space usage                                                                                             |                        |           |
| CRITICAL_USAGE_PRCT | Critical threshold in percentage for pool space usage                                                                                            |                        |           |
| EXTRA_OPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |                        |           |

</TabItem>
<TabItem value="Quorum" label="Quorum">

| Macro           | Description                                                                                                                                      | Default value           | Mandatory |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:---------:|
| QUORUM_ID       |                                                                                                                                                  |                         |           |
| CRITICAL_STATUS | Critical threshold for quorum status                                                                                                             | %\{status\} ne "NORMAL" |           |
| WARNING_STATUS  | Warning threshold for quorum status                                                                                                              |                         |           |
| EXTRA_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |                         |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
C:/Program Files/Centreon/Plugins/centreon_plugins.exe" \
	--plugin=storage::hitachi::eseries::local::plugin \
	--mode=quorum \
	--timeout="45" \
	--instance-id="" \
	--query-id="" \
	--warning-status='' \
	--critical-status='%\{status\} ne "NORMAL"' 
```

The expected command output is shown below:

```bash
OK: All quorums are normal 
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
	--plugin=storage::hitachi::eseries::local::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                 | Linked service template                           |
|:-------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
| efficiency [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/eseries/local/mode/efficiency.pm)]  | HW-Storage-Hitachi-Eseries-Efficiency-CMA-custom  |
| pair-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/eseries/local/mode/pairstatus.pm)] | HW-Storage-Hitachi-Eseries-Pair-Status-CMA-custom |
| path-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/eseries/local/mode/pathstatus.pm)] | HW-Storage-Hitachi-Eseries-Path-Status-CMA-custom |
| pool [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/eseries/local/mode/pool.pm)]              | HW-Storage-Hitachi-Eseries-Pool-CMA-custom        |
| quorum [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/eseries/local/mode/quorum.pm)]          | HW-Storage-Hitachi-Eseries-Quorum-CMA-custom      |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'        |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
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
| --instance-id                              | Storage array ID (4 digits, required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Timeout in seconds for the command (default: 45).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-path                             | Path to the raidcom/pairdisplay binaries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --sudo                                     | Run commands with sudo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Efficiency" label="Efficiency">

| Option                            | Description                                                                                                    |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------|
| --warning-total-efficiency-ratio  | Warning threshold for Total Efficiency Ratio (TOTAL\_EFF) (default: `2.01:` to warn if equal to or below 2).   |
| --critical-total-efficiency-ratio | Critical threshold for Total Efficiency Ratio (TOTAL\_EFF) (default: `1.01:` to alert if equal to or below 1). |
| --warning-data-reduction-ratio    | Warning threshold for Data Reduction Ratio (TLS\_R).                                                           |
| --critical-data-reduction-ratio   | Critical threshold for Data Reduction Ratio (TLS\_R).                                                          |
| --warning-software-saving-ratio   | Warning threshold for Software Saving Ratio (PLS\_R).                                                          |
| --critical-software-saving-ratio  | Critical threshold for Software Saving Ratio (PLS\_R).                                                         |

</TabItem>
<TabItem value="Pair-Status" label="Pair-Status">

| Option               | Description                                                                                                                                                            |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --remote-instance-id | Remote array ID. If starts with + or -, it is added to the local array ID, otherwise used as is (e.g. `--remote-instance-id='100'` or `--remote-instance-id='+1000'`). |
| --group-id           | `HORCM` group name to check .                                                                                                                                          |
| --ldev-id            | Filter pair volumes by `LDEV ID`. Can be used multiple times (e.g. `--ldev-id='1' --ldev-id='2' --ldev-id='3'`).                                                       |
| --warning-status     | Warning threshold for pair status.                                                                                                                                     |
| --critical-status    | Critical threshold for pair status (default: `'%\{status\_l\} ne "PAIR" \|\| %\{status\_r\} ne "PAIR"'`).                                                              |

</TabItem>
<TabItem value="Path-Status" label="Path-Status">

| Option            | Description                                                             |
|:------------------|:------------------------------------------------------------------------|
| --include-port    | Filter paths by port name (regexp, e.g. `--include-port='CL1-A'`).      |
| --exclude-port    | Exclude paths by port name (regexp).                                    |
| --include-lun     | Filter paths by LUN ID (regexp).                                        |
| --exclude-lun     | Exclude paths by LUN ID (regexp).                                       |
| --warning-status  | Warning threshold for path status.                                      |
| --critical-status | Critical threshold for path status (default: `'%\{status\} ne "NML"'`). |

</TabItem>
<TabItem value="Pool" label="Pool">

| Option                | Description                                                              |
|:----------------------|:-------------------------------------------------------------------------|
| --include-pid         | Filter pools by PID (regexp).                                            |
| --exclude-pid         | Exclude pools by PID (regexp).                                           |
| --warning-status      | Warning threshold for pool status.                                       |
| --critical-status     | Critical threshold for pool status (default: `'%\{status\} ne "POLN"'`). |
| --warning-usage       | Warning threshold in bytes for pool space usage.                         |
| --critical-usage      | Critical threshold in bytes for pool space usage.                        |
| --warning-usage-prct  | Warning threshold in percentage for pool space usage.                    |
| --critical-usage-prct | Critical threshold in percentage for pool space usage.                   |

</TabItem>
<TabItem value="Quorum" label="Quorum">

| Option            | Description                                                                                                           |
|:------------------|:----------------------------------------------------------------------------------------------------------------------|
| --quorum-id       | Check a specific quorum ID (optional). If not specified, all quorums are discovered automatically starting from ID 0. |
| --warning-status  | Warning threshold for quorum status.                                                                                  |
| --critical-status | Critical threshold for quorum status (default: `'%\{status\} ne "NORMAL"'`).                                          |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
C:/Program Files/Centreon/Plugins/centreon_plugins.exe" \
	--plugin=storage::hitachi::eseries::local::plugin \
	--mode=quorum \
	--help
```
