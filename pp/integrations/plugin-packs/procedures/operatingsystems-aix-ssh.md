---
id: operatingsystems-aix-ssh
title: AIX SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **AIX SSH** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **AIX SSH** brings a host template:

* **OS-AIX-SSH-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-AIX-SSH-custom" label="OS-AIX-SSH-custom">

| Service Alias | Service Template          | Service Description                             |
|:--------------|:--------------------------|:------------------------------------------------|
| Errpt         | OS-AIX-Errpt-SSH-custom   | Check AIX erreur pront by SSH                   |
| Lvsync        | OS-AIX-Lvsync-SSH-custom  | Check AIX logical volume synchronisation by SSH |
| Process       | OS-AIX-Process-SSH-custom | Check AIX processes by SSH                      |

> The services listed above are created automatically when the **OS-AIX-SSH-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template             | Service Description                    | Discovery  |
|:--------------|:-----------------------------|:---------------------------------------|:----------:|
| Cmd-Return    | OS-AIX-Cmd-Return-SSH-custom | Check AIX command/script return by SSH |            |
| Inode         | OS-AIX-Inode-SSH-custom      | Check AIX inodes by SSH                |            |
| Storage       | OS-AIX-Storage-SSH-custom    | Check AIX storage by SSH               | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name            | Description                                               |
|:---------------------|:----------------------------------------------------------|
| OS-AIX-SSH-Disk-Name | Discover the disk partitions and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Cmd-Return" label="Cmd-Return">

| Name                    | Unit  |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Errpt" label="Errpt">

| Name   | Unit  |
|:-------|:------|
| errors | count |

</TabItem>
<TabItem value="Inode" label="Inode">

| Name                                     | Unit  |
|:-----------------------------------------|:------|
| *inodes*#storage.inodes.usage.percentage | %     |

</TabItem>
<TabItem value="Lvsync" label="Lvsync">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Process" label="Process">

| Name                  | Unit  |
|:----------------------|:------|
| processes.total.count | count |
| status                | N/A   |

</TabItem>
<TabItem value="Storage" label="Storage">

| Name                                                | Unit  |
|:----------------------------------------------------|:------|
| *disk_name1*#storage.space.usage.bytes              | B     |
| *disk_name2*#storage.space.usage.bytes              | B     |
| *disk_name1*#storage.space.free.bytes               | B     |
| *disk_name2*#storage.space.free.bytes               | B     |
| *disk_name1*#storageresource.space.usage.percentage | %     |
| *disk_name2*#storageresource.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

### SSH configuration

A user is required to query the resource by SSH. There is no need for root or sudo
privileges. There are two possible ways to log in through SSH, either by
exchanging the SSH key from **centreon-engine** user to the target resource, or by
setting your unique user and password directly in the host macros.

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
dnf install centreon-pack-operatingsystems-aix-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-aix-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-aix-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-aix-ssh
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **AIX SSH** connector through
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
dnf install centreon-plugin-Operatingsystems-Aix-Local
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Aix-Local
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-aix-local
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Aix-Local
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **OS-AIX-SSH-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                                                         | Default value     | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli, plink and libssh                                                                                             | sshcli            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                            |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cmd-Return" label="Cmd-Return">

| Macro           | Description                                                                                                                                       | Default value     | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MANAGERETURNS   | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem |                   |             |
| EXECCOMMAND     | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'                                                                           |                   |             |
| EXECCOMMANDPATH | Command path                                                                                                                                      |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).            |                   |             |

</TabItem>
<TabItem value="Errpt" label="Errpt">

| Macro          | Description                                                                                                                            | Default value                      | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| ERRORTYPE      | Filter error type separated by a coma (INFO, PEND, PERF, PERM, TEMP, UNKN)                                                             | INFO, PEND, PERF, PERM, TEMP, UNKN |             |
| ERRORCLASS     | Filter error class ('H' for hardware, 'S' for software, '0' for errlogger, 'U' for undetermined)                                       | 0                                  |             |
| FILTERRESOURCE | Filter resource (can use a regexp)                                                                                                     |                                    |             |
| FILTERID       | Filter error code (can use a regexp)                                                                                                   |                                    |             |
| ERRORID        | Filter specific error code (can be a comma separated list)                                                                             |                                    |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                                    |             |

</TabItem>
<TabItem value="Inode" label="Inode">

| Macro         | Description                                                                                                                            | Default value     | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMOUNT   | Filter mountpoint (regexp can be used)                                                                                                 |                   |             |
| FILTERFS      | Filter filesystem (regexp can be used)                                                                                                 |                   |             |
| WARNINGUSAGE  | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALUSAGE | Critical threshold in percent                                                                                                          |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Lvsync" label="Lvsync">

| Macro          | Description                                                                                                                            | Default value        | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| FILTERTYPE     | Filter filesystem type (regexp can be used)                                                                                            |                      |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{lv}, %{mount}, %{type}   |                      |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{lv}, %{mount}, %{type}  | %{state} =~ /stale/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{lv}, %{mount}, %{type}   |                      |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                      |             |

</TabItem>
<TabItem value="Process" label="Process">

| Macro          | Description                                                                                                                                       | Default value     | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOMMAND  | Filter process commands (regexp can be used)                                                                                                      |                   |             |
| FILTERPPID     | Filter process ppid (regexp can be used)                                                                                                          |                   |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{ppid}, %{state}, %{elapsed}, %{cmd}, %{args}  |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{ppid}, %{state}, %{elapsed}, %{cmd}, %{args} |                   |             |
| WARNINGTOTAL   | Threshold                                                                                                                                         |                   |             |
| CRITICALTOTAL  | Threshold                                                                                                                                         |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).            |                   |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro             | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERFS          | Filter filesystem (regexp can be used)                                                                                                 |                   |             |
| FILTERMOUNT       | Filter mountpoint (regexp can be used)                                                                                                 |                   |             |
| WARNINGUSAGE      | Threshold                                                                                                                              |                   |             |
| CRITICALUSAGE     | Threshold                                                                                                                              |                   |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                                                              |                   |             |
| CRITICALUSAGEPRCT | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_aix_local.pl \
	--plugin=os::aix::local::plugin  \
	--mode=storage \
	--hostname='10.0.0.1' \
	--ssh-backend='sshcli' \
	--ssh-username='' \
	--ssh-password='XXXX' \
	--ssh-port='XXXX'  \
	--filter-fs='' \
	--filter-mount='' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' 
```

The expected command output is shown below:

```bash
OK: All storages are ok | 'disk_name1#storage.space.usage.bytes'=90102B;;;0;total_space 'disk_name2#storage.space.usage.bytes'=18580B;;;0;total_space 'disk_name1#storage.space.free.bytes'=53768B;;;0;total_space 'disk_name2#storage.space.free.bytes'=16004B;;;0;total_space 'disk_name1#storageresource.space.usage.percentage'=63%;;;0;100 'disk_name2#storageresource.space.usage.percentage'=54%;;;0;100 
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
/usr/lib/centreon/plugins/centreon_aix_local.pl \
	--plugin=os::aix::local::plugin  \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                    | Linked service template      |
|:------------------------------------------------------------------------------------------------------------------------|:-----------------------------|
| cmd-return [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/cmdreturn.pm)]       | OS-AIX-Cmd-Return-SSH-custom |
| errpt [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/errpt.pm)]                | OS-AIX-Errpt-SSH-custom      |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/inodes.pm)]              | OS-AIX-Inode-SSH-custom      |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/liststorages.pm)] | Used for service discovery   |
| lvsync [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/lvsync.pm)]              | OS-AIX-Lvsync-SSH-custom     |
| process [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/process.pm)]            | OS-AIX-Process-SSH-custom    |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/storage.pm)]            | OS-AIX-Storage-SSH-custom    |

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
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --ssh-backend                              |   Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --ssh-username                             |   Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --ssh-password                             |   Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-port                                 |   Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --ssh-priv-key                             |   Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --hostname                                 |   Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --timeout                                  |   Timeout in seconds for the command (default: 45).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --command                                  |   Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command-path                             |   Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-options                          |   Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --sudo                                     |   sudo command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ignore-exit-code                         |   Don't quit if the exit code matches that option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cmd-Return" label="Cmd-Return">

| Option                 | Description                                                                                                                                           |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       |   Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            |   Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         |   Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    |   Command path (default: none).                                                                                                                       |
| --exec-command-options |   Command options (default: none).                                                                                                                    |

</TabItem>
<TabItem value="Errpt" label="Errpt">

| Option            | Description                                                                                                             |
|:------------------|:------------------------------------------------------------------------------------------------------------------------|
| --error-type      |   Filter error type separated by a coma (INFO, PEND, PERF, PERM, TEMP, UNKN).                                           |
| --error-class     |   Filter error class ('H' for hardware, 'S' for software, '0' for errlogger, 'U' for undetermined).                     |
| --error-id        |   Filter specific error code (can be a comma separated list).                                                           |
| --retention       |   Retention time of errors in seconds.                                                                                  |
| --verbose         |   Print error description in long output. \[ Error 'CODE' Date: Timestamp ResourceName: RsrcName Description: Desc \]   |
| --filter-resource |   Filter resource (can use a regexp).                                                                                   |
| --filter-id       |   Filter error code (can use a regexp).                                                                                 |
| --exclude-id      |   Filter on specific error code (can be a comma separated list).                                                        |
| --format-date     |   Print the date to format 20YY/mm/dd HH:MM instead of mmddHHMMYY.                                                      |

</TabItem>
<TabItem value="Inode" label="Inode">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --filter-fs       |   Filter filesystem (regexp can be used).                                                                                     |
| --filter-mount    |   Filter mountpoint (regexp can be used).                                                                                     |
| --warning-usage   |   Warning threshold in percent.                                                                                               |
| --critical-usage  |   Critical threshold in percent.                                                                                              |

</TabItem>
<TabItem value="Lvsync" label="Lvsync">

| Option            | Description                                                                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                   |
| --filter-type     |   Filter filesystem type (regexp can be used).                                                                                                                                |
| --filter-mount    |   Filter storage mount point (regexp can be used).                                                                                                                            |
| --unknown-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{lv}, %{mount}, %{type}.                                       |
| --warning-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{lv}, %{mount}, %{type}.                                       |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%{state} =~ /stale/i'). You can use the following variables: %{state}, %{lv}, %{mount}, %{type}.    |

</TabItem>
<TabItem value="Process" label="Process">

| Option                   | Description                                                                                                                                                         |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                         |
| --filter-command         |   Filter process commands (regexp can be used).                                                                                                                     |
| --filter-arg             |   Filter process arguments (regexp can be used).                                                                                                                    |
| --filter-ppid            |   Filter process ppid (regexp can be used).                                                                                                                         |
| --filter-state           |   Filter process states (regexp can be used). You can use: 'Canceled', 'Nonexistent', 'Active', 'Swapped', 'Idle', 'Stopped', 'Running', 'Sleeping'.                |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '') You can use the following variables: %{ppid}, %{state}, %{elapsed}, %{cmd}, %{args}     |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{ppid}, %{state}, %{elapsed}, %{cmd}, %{args}   |
| --warning-* --critical-* |   Thresholds. Can be: 'total'.                                                                                                                                      |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --filter-fs              |   Filter filesystem (regexp can be used).                                                                                     |
| --filter-mount           |   Filter mountpoint (regexp can be used).                                                                                     |
| --space-reservation      |   Some filesystem has space reserved (like ext4 for root). The value is in percent of total (default: none).                  |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                        |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aix_local.pl \
	--plugin=os::aix::local::plugin  \
	--mode=storage \
	--help
```
