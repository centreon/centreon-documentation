---
id: hardware-storage-veritas-nba-ssh
title: Veritas NetBackup Appliance SSH
description: "Monitor Veritas NetBackup Appliance via SSH: hardware components, memory usage, and partition status and space usage."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Veritas NetBackup Appliance SSH** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Veritas NetBackup Appliance SSH** brings a host template:

* **HW-Storage-Veritas-Nba-SSH-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-Veritas-Nba-SSH-custom" label="HW-Storage-Veritas-Nba-SSH-custom">

| Service Alias | Service Template                           | Service Description                                                                         |
|:--------------|:-------------------------------------------|:--------------------------------------------------------------------------------------------|
| Memory        | HW-Storage-Veritas-Nba-Memory-SSH-custom   | Check the memory usage.                                                                     |
| Hardware      | HW-Storage-Veritas-Nba-Hardware-SSH-custom | Check the status of the hardware components (disks, fans, power supplies and temperatures). |

> The services listed above are created automatically when the **HW-Storage-Veritas-Nba-SSH-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                             | Service Description                                     | Discovery |
|:--------------|:---------------------------------------------|:--------------------------------------------------------|:---------:|
| Partitions    | HW-Storage-Veritas-Nba-Partitions-SSH-custom | Check the status and the space usage of the partitions. |     X     |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                 | Description                                                               |
|:------------------------------------------|:--------------------------------------------------------------------------|
| HW-Storage-Veritas-Nba-SSH-Partition-Name | Discover the partitions in order to monitor their status and space usage. |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Memory" label="Memory">

| Name                        | Unit |
|:----------------------------|:-----|
| memory.usage.bytes          | B    |
| memory.free.bytes           | B    |
| memory.usage.percentage     | %    |
| memory.available.bytes      | B    |
| memory.available.percentage | %    |
| memory.buffer.bytes         | B    |
| memory.shared.bytes         | B    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Name                                                  | Unit  |
|:------------------------------------------------------|:------|
| hardware.disk.count                                   | count |
| disk status                                           | N/A   |
| hardware.fan.count                                    | count |
| fan status                                            | N/A   |
| hardware.psu.count                                    | count |
| psu status                                            | N/A   |
| hardware.temperature.count                            | count |
| temperature status                                    | N/A   |
| *shelf_name*~*sensor_id*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Partitions" label="Partitions">

| Name                                              | Unit |
|:--------------------------------------------------|:-----|
| status                                            | N/A  |
| *partition_name*#partition.space.usage.bytes      | B    |
| *partition_name*#partition.space.free.bytes       | B    |
| *partition_name*#partition.space.usage.percentage | %    |

</TabItem>
</Tabs>

## Prerequisites

### SSH configuration

The Centreon poller connects to the appliance over SSH (the TCP/22 port by
default) and browses the **Manage** and **Monitor** menus of the NetBackup
Appliance Shell Menu. Create a user with the **Administrator** role on the
appliance, and set its name and password in the host macros.

The appliance can only be driven through its interactive menus, which only the
`libssh` SSH backend supports. This backend requires version 1.2 or later of
the `Libssh::Session` Perl module on the poller.

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
dnf install centreon-pack-hardware-storage-veritas-nba-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-veritas-nba-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-veritas-nba-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-veritas-nba-ssh
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Veritas NetBackup Appliance SSH** connector through
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
dnf install centreon-plugin-Hardware-Storage-Veritas-Nba-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Veritas-Nba-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-veritas-nba-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Veritas-Nba-Ssh
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-Veritas-Nba-SSH-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                                                                                             | Default value | Mandatory |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| NBA_SSH_USERNAME      | Define the user name to log in to the host                                                                                                                              |               |           |
| NBA_SSH_PASSWORD      | Define the password associated with the user name. Cannot be used with the `sshcli` backend. Warning: using a password is not recommended. Use `--ssh-priv-key` instead |               |           |
| NBA_SSH_PORT          | Define the TCP port on which SSH is listening                                                                                                                           | 22            |           |
| NBA_SSH_EXTRA_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                                |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Memory" label="Memory">

| Macro                      | Description                                                                                                                            | Default value | Mandatory |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_MEMORY_USAGE_PRCT  | Threshold in percentage                                                                                                                | 80            |           |
| CRITICAL_MEMORY_USAGE_PRCT | Threshold in percentage                                                                                                                | 90            |           |
| EXTRA_OPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro         | Description                                                                                                                            | Default value | Mandatory |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| COMPONENT     | Which component to check (default: '.*'). Can be: 'disk', 'fan', 'psu', 'temperature'                                                  | .*            |           |
| WARNING       | Set warning threshold for 'temperature' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,50'                         |               |           |
| CRITICAL      | Set critical threshold for 'temperature' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,70'                       |               |           |
| EXTRA_OPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose     |           |

</TabItem>
<TabItem value="Partitions" label="Partitions">

| Macro                     | Description                                                                                                                                                                                    | Default value                                           | Mandatory |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|:---------:|
| INCLUDE_NAME              | Filter partitions by name (regexp)                                                                                                                                                             |                                                         |           |
| EXCLUDE_NAME              | Exclude partitions by name (regexp)                                                                                                                                                            |                                                         |           |
| WARNING_STATUS            | Define the conditions to match for the status to be WARNING (default: `'%{status} =~ /Degraded/i'`). You can use the following variables: `%{status}`, `%{name}`                               | %\{status\} =~ /Degraded/i                              |           |
| CRITICAL_STATUS           | Define the conditions to match for the status to be CRITICAL (default: `'%{status} !~ /^(Optimal\|Degraded\|Not Configured)$/i'`). You can use the following variables: `%{status}`, `%{name}` | %\{status\} !~ /^(Optimal\|Degraded\|Not Configured)$/i |           |
| WARNING_SPACE_USAGE_PRCT  | Threshold in percentage                                                                                                                                                                        | 80                                                      |           |
| CRITICAL_SPACE_USAGE_PRCT | Threshold in percentage                                                                                                                                                                        | 90                                                      |           |
| EXTRA_OPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                         |                                                         |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_veritas_nba_ssh.pl \
	--plugin=storage::veritas::nba::ssh::plugin \
	--mode=memory \
	--hostname='10.0.0.1' \
	--ssh-username='XXXX' \
	--ssh-password='XXXX' \
	--ssh-port='22' \
	--warning-memory-usage-prct='80' \
	--critical-memory-usage-prct='90'
```

The expected command output is shown below:

```bash
OK: Ram total: 250.70 GB used (-buffers/cache): 116.91 GB (46.63%) free: 3.00 GB (1.20%) available: 131.19 GB (52.33%), buffer: 130.79 GB, shared: 138.79 MB | 'memory.usage.bytes'=125530263552B;;;0;269182509056 'memory.free.bytes'=3222704128B;;;0;269182509056 'memory.usage.percentage'=46.63%;0:80;0:90;0;100 'memory.available.bytes'=140865015808B;;;0;269182509056 'memory.available.percentage'=52.33%;;;0;100 'memory.buffer.bytes'=140429541376B;;;0; 'memory.shared.bytes'=145530880B;;;0;
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
/usr/lib/centreon/plugins/centreon_veritas_nba_ssh.pl \
	--plugin=storage::veritas::nba::ssh::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                      | Linked service template                      |
|:--------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/veritas/nba/ssh/mode/hardware.pm)] | HW-Storage-Veritas-Nba-Hardware-SSH-custom   |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/veritas/nba/ssh/mode/memory.pm)]     | HW-Storage-Veritas-Nba-Memory-SSH-custom     |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/veritas/nba/ssh/mode/storage.pm)]   | HW-Storage-Veritas-Nba-Partitions-SSH-custom |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --show-password                            | By default, sensitive information in command lines is hidden in debug output and replaced with `***` (however, debug logs may still display sensitive information). Using the `--show-password` option will display the passwords in plain text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage free perfdata into used: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage free perfdata into used: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage free perfdata into used: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach Common examples: Sum wrong packets from all interfaces (with interface need --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))' Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)' |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  | Timeout in seconds for the SSH connection or the local command (default: 55).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --command                                  | Command to get information. Use it if the output is in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --ssh-backend                              | Define the backend you want to use. It can be: `sshcli` (default for most plugins), `plink` and `libssh`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the `sshcli` backend. Warning: using a password is not recommended. Use `--ssh-priv-key` instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sshcli-command                           | SSH command (default: `ssh`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --sshcli-path                              | SSH command path (default: `none`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --sshcli-option                            | Specify SSH CLI options (example: --sshcli-option='-o=StrictHostKeyChecking=no -o=LogLevel=ERROR'). The default parameter is --sshcli-option='-o=LogLevel=ERROR' which hides the SSH banner. If you override this parameter, make sure to append '-o=LogLevel=ERROR' to your new value to maintain this behavior. This parameter can be used multiple times and multiple options can be specified in the same parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --plink-command                            | Plink command (default: `plink`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --plink-path                               | Plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --plink-option                             | Specify Plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --warning-xxx                              | Warning threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --critical-xxx                             | Critical threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --no-data-status                           | Status to return when the mode collects no data at all: no instance was found, or every counter was skipped for lack of value. Without this option the plugin would display an empty (or meaningless) `OK:` output. Can be: 'ok', 'warning', 'critical', 'unknown' (default: 'unknown').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Memory" label="Memory">

| Option                           | Description                                                                     |
|:---------------------------------|:--------------------------------------------------------------------------------|
| --warning-memory-usage           | Threshold in bytes.                                                             |
| --critical-memory-usage          | Threshold in bytes.                                                             |
| --warning-memory-usage-free      | Threshold in bytes.                                                             |
| --critical-memory-usage-free     | Threshold in bytes.                                                             |
| --warning-memory-usage-prct      | Threshold in percentage.                                                        |
| --critical-memory-usage-prct     | Threshold in percentage.                                                        |
| --warning-memory-available       | Threshold in bytes.                                                             |
| --critical-memory-available      | Threshold in bytes.                                                             |
| --warning-memory-available-prct  | Threshold in percentage.                                                        |
| --critical-memory-available-prct | Threshold in percentage.                                                        |
| --warning-buffer                 | Threshold in bytes (the appliance reports buffers and cache as a single value). |
| --critical-buffer                | Threshold in bytes (the appliance reports buffers and cache as a single value). |
| --warning-shared                 | Threshold in bytes.                                                             |
| --critical-shared                | Threshold in bytes.                                                             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                           |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'disk', 'fan', 'psu', 'temperature'.                                                                                                                                |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=temperature). You can also exclude items from specific instances: --filter=`fan,shelf1\.0`                                                       |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                            |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,WARNING,^(?!(ok)$)' |
| --warning            | Set warning threshold for 'temperature' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,50'                                                                                                        |
| --critical           | Set critical threshold for 'temperature' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,70'                                                                                                      |
| --warning-count-*    | Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                          |
| --critical-count-*   | Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                         |

</TabItem>
<TabItem value="Partitions" label="Partitions">

| Option                      | Description                                                                                                                                                                                    |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters           | Define which counters (filtered by regular expression) should be monitored. Can be: status, space-usage, space-usage-free, space-usage-prct. Example: --filter-counters='status'               |
| --include-name              | Filter partitions by name (regexp).                                                                                                                                                            |
| --exclude-name              | Exclude partitions by name (regexp).                                                                                                                                                           |
| --warning-status            | Define the conditions to match for the status to be WARNING (default: `'%{status} =~ /Degraded/i'`). You can use the following variables: `%{status}`, `%{name}`                               |
| --critical-status           | Define the conditions to match for the status to be CRITICAL (default: `'%{status} !~ /^(Optimal\|Degraded\|Not Configured)$/i'`). You can use the following variables: `%{status}`, `%{name}` |
| --warning-space-usage       | Threshold in bytes.                                                                                                                                                                            |
| --critical-space-usage      | Threshold in bytes.                                                                                                                                                                            |
| --warning-space-usage-free  | Threshold in bytes.                                                                                                                                                                            |
| --critical-space-usage-free | Threshold in bytes.                                                                                                                                                                            |
| --warning-space-usage-prct  | Threshold in percentage.                                                                                                                                                                       |
| --critical-space-usage-prct | Threshold in percentage.                                                                                                                                                                       |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_veritas_nba_ssh.pl \
	--plugin=storage::veritas::nba::ssh::plugin \
	--mode=memory \
	--help
```
