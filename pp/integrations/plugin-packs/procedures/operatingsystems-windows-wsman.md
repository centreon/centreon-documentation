---
id: operatingsystems-windows-wsman
title: Windows WSMAN
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Windows WSMAN** brings a host template:

* **OS-Windows-WSMAN-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-Windows-WSMAN-custom" label="OS-Windows-WSMAN-custom">

| Service Alias | Service Template                      | Service Description                                                                                                                                  |
|:--------------|:--------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu           | OS-Windows-Cpu-WSMAN-custom           | Check the rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU.  |
| Memory        | OS-Windows-Memory-WSMAN-custom        | Check the rate of the utilization of memory                                                                                                          |
| Services-Auto | OS-Windows-Services-Auto-WSMAN-custom | Check if Windows services are started                                                                                                                |
| Swap          | OS-Windows-Swap-WSMAN-custom          | Check the rate of the utilization of virtual memory                                                                                                  |

> The services listed above are created automatically when the **OS-Windows-WSMAN-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias      | Service Template                           | Service Description                                                                                     | Discovery  |
|:-------------------|:-------------------------------------------|:--------------------------------------------------------------------------------------------------------|:----------:|
| Disk-Global        | OS-Windows-Disk-Global-WSMAN-custom        | Check the rate of free space on the disk. For each checks the name of the disk will appear              | X          |
| Files-Date-Generic | OS-Windows-Files-Date-Generic-WSMAN-custom | Check time                                                                                              |            |
| Files-Size-Generic | OS-Windows-Files-Size-Generic-WSMAN-custom | Check size of files                                                                                     |            |
| Ntp                | OS-Windows-Ntp-WSMAN-custom                | Check the synchronization with an NTP server                                                            |            |
| Pending-Reboot     | OS-Windows-Pending-Reboot-WSMAN-custom     | Check windows pending reboot                                                                            |            |
| Process-Global     | OS-Windows-Process-Global-WSMAN-custom     | Check if Windows process are started                                                                    | X          |
| Service-Generic    | OS-Windows-Service-Generic-WSMAN-custom    | Check if Windows services are started                                                                   | X          |
| Sessions           | OS-Windows-Sessions-WSMAN-custom           | Check Windows user sessions                                                                             |            |
| Traffic-Global     | OS-Windows-Traffic-Global-WSMAN-custom     | Check the bandwidth of the interface. For each checks the name of the interface will appear             | X          |
| Updates            | OS-Windows-Updates-WSMAN-custom            | Check windows pending updates                                                                           |            |
| Uptime             | OS-Windows-Uptime-WSMAN-custom             | Check the uptime of the Windows server since the last reboot. It's just an indication with no threshold |            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                       | Description                                                   |
|:--------------------------------|:--------------------------------------------------------------|
| OS-Windows-WSMAN-Disk-Name      | Discover the disk partitions and monitor space occupation     |
| OS-Windows-WSMAN-Processes-Name | Discover processes and monitor their system usage             |
| OS-Windows-WSMAN-Services-Name  | Discover services and monitor their system usage              |
| OS-Windows-WSMAN-Traffic-Name   | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Metric name                               | Unit  |
|:------------------------------------------|:------|
| storages.detected.count                   | count |
| *storages*#storage.space.usage.bytes      | B     |
| *storages*#storage.space.free.bytes       | B     |
| *storages*#storage.space.usage.percentage | %     |

</TabItem>
<TabItem value="Files-Date-Generic" label="Files-Date-Generic">

| Metric name             | Unit  |
|:------------------------|:------|
| file.mtime.last.seconds | s     |

</TabItem>
<TabItem value="Files-Size-Generic" label="Files-Size-Generic">

| Metric name      | Unit  |
|:-----------------|:------|
| file.size.bytes  | B     |
| files.size.bytes | B     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Metric name         | Unit  |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Metric name | Unit  |
|:------------|:------|
| status      | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Process-Global" label="Process-Global">

| Metric name              | Unit  |
|:-------------------------|:------|
| processes.detected.count | count |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

Coming soon

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

Coming soon

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| sessions.created.total.count        | count |
| sessions.disconnected.total.count   | count |
| sessions.reconnected.total.count    | count |
| sessions.active.current.count       | count |
| sessions.disconnected.current.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| *files*#page.space.usage.bytes      | B     |
| *files*#page.space.free.bytes       | B     |
| *files*#page.space.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Metric name                                           | Unit  |
|:------------------------------------------------------|:------|
| *interfaces*#interface.traffic.in.bitspersecond       | b/s   |
| *interfaces*#interface.traffic.out.bitspersecond      | b/s   |
| *interfaces*#interface.packets.in.discard.percentage  | %     |
| *interfaces*#interface.packets.in.error.percentage    | %     |
| *interfaces*#interface.packets.out.discard.percentage | %     |
| *interfaces*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Updates" label="Updates">

| Metric name                   | Unit  |
|:------------------------------|:------|
| windows.pending.updates.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

To monitor Windows Servers through WSMAN, please follow our [official documentation](../getting-started/how-to-guides/windows-winrm-wsman-tutorial.md) and make sure that WinRM and all rights are properly configured.

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
dnf install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Windows WSMAN** connector through
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
dnf install centreon-plugin-Operatingsystems-Windows-Wsman
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Wsman
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Windows-Wsman
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **OS-Windows-WSMAN-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro             | Description                                                                                           | Default value     | Mandatory   |
|:------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WSMANUSERNAME     | Define the username for authentication                                                                |                   |             |
| WSMANPASSWORD     | Define the password associated with the user name                                                     |                   |             |
| WSMANPROTO        | Define the transport scheme (default: 'http')                                                         | http              |             |
| WSMANPORT         | Define the port to connect to (default: 5985)                                                         | 5985              |             |
| WSMANEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro           | Description                                                                                         | Default value     | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE  | Warning threshold average CPU utilization                                                           | 80                |             |
| CRITICALAVERAGE | Critical threshold average CPU utilization                                                          | 90                |             |
| WARNINGCORE     | Warning thresholds for each CPU core                                                                |                   |             |
| CRITICALCORE    | Critical thresholds for each CPU core                                                               |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro         | Description                                                                                         | Default value     | Mandatory   |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGE       | Filter storages by name (can be a regexp)                                                           |                   |             |
| WARNINGUSAGE  | Thresholds                                                                                          | 80                |             |
| CRITICALUSAGE | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Files-Date-Generic" label="Files-Date-Generic">

| Macro          | Description                                                                                         | Default value     | Mandatory   |
|:---------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FOLDER         | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'                            |                   | X           |
| FILTERFILENAME | Filter files by name                                                                                |                   |             |
| WARNING        | Warning threshold in seconds for each files (diff time)                                             |                   |             |
| CRITICAL       | Critical threshold in seconds for each files (diff time)                                            |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Files-Size-Generic" label="Files-Size-Generic">

| Macro          | Description                                                                                         | Default value     | Mandatory   |
|:---------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FOLDER         | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'                            |                   | X           |
| FILTERFILENAME | Filter files by name                                                                                |                   |             |
| WARNINGONE     | Warning threshold in bytes for each files/directories                                               |                   |             |
| CRITICALONE    | Critical threshold in bytes for each files/directories                                              |                   |             |
| WARNINGTOTAL   | Warning threshold in bytes for all files/directories                                                |                   |             |
| CRITICALTOTAL  | Critical threshold in bytes for all files/directories                                               |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                         | Default value     | Mandatory   |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGEPRCT  | Thresholds                                                                                          | 80                |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro        | Description                                                                                                     | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NTPADDR      | Set the ntp hostname (if not set, localtime is used)                                                            |                   |             |
| NTPPORT      | Set the ntp port (Default: 123)                                                                                 |                   |             |
| TIMEZONE     | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100' |                   |             |
| WARNING      | Time offset warning threshold (in seconds)                                                                      | -1:1              |             |
| CRITICAL     | Time offset critical Threshold (in seconds)                                                                     | -2:2              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)             |                   |             |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Macro          | Description                                                                                                                                                                                                                                              | Default value               | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{RebootPending} =~ /true/i'). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename} | %{RebootPending} =~ /true/i |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}                           |                             |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                      |                             |             |

</TabItem>
<TabItem value="Process-Global" label="Process-Global">

| Macro         | Description                                                                                         | Default value     | Mandatory   |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME   | Filter process name                                                                                 |                   |             |
| CRITICALCOUNT | Critical threshold of matching processes detected                                                   | 1:                |             |
| WARNINGCOUNT  | Warning threshold of matching processes detected                                                    |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

| Macro        | Description                                                                                                                                                                                         | Default value        | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| SERVICENAME  | Services to monitor. Syntax: \[service\_name\[\[=\|!=\]state\]\],... Available states are: - Stopped - Start Pending - Stop Pending - Running - Continue Pending - Pause Pending - Paused - Unknown | SERVICE!=Running     | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                 | --critical --verbose |             |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXCLUDE      | Exclude some services for --auto option (Can be a regexp)                                           |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                        | Description                                                                                                                                      | Default value     | Mandatory   |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| LANGUAGE                     | Set the language used in config file (default: 'en')                                                                                             | en                |             |
| FILTERSESSIONNAME            | Filter session name (can be a regexp)                                                                                                            |                   |             |
| CONFIG                       | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file |                   |             |
| WARNINGSESSIONSACTIVE        | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSACTIVE       | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSCREATED       | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSCREATED      | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSDISCONNECTED  | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSDISCONNECTED | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSRECONNECTED   | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSRECONNECTED  | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                              |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICALPRCT | Thresholds                                                                                          | 20                |             |
| WARNINGPRCT  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Filter interface name (regexp can be used)                                                          | .*                |             |
| WARNINGIN    | Thresholds                                                                                          | 80                |             |
| CRITICALIN   | Thresholds                                                                                          | 90                |             |
| WARNINGOUT   | Thresholds                                                                                          | 80                |             |
| CRITICALOUT  | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                  | Description                                                                                         | Default value               | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERTITLE            | Filter windows updates by title (can be a regexp)                                                   |                             |             |
| EXCLUDETITLE           | Exclude windows updates by title (regexp can be used)                                               |                             |             |
| FILTERMANDATORY        |                                                                                                     |                             |             |
| WARNINGPENDINGUPDATES  | Thresholds                                                                                          |                             |             |
| CRITICALPENDINGUPDATES | Thresholds                                                                                          |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --display-updates |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_windows_wsman.pl \
	--plugin=os::windows::wsman::plugin \
	--mode=updates \
	--hostname='10.0.0.1' \
	--wsman-scheme=http \
	--wsman-port=5985 \
	--wsman-username='' \
	--wsman-password=''  \
	--filter-title='' \
	--exclude-title='' \
	--filter-mandatory='' \
	--warning-pending-updates='' \
	--critical-pending-updates='' \
	--verbose \
	--display-updates
```

The expected command output is shown below:

```bash
OK: windows pending updates: 60 | 'windows.pending.updates.count'=60;;;0; 
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
/usr/lib/centreon/plugins/centreon_windows_wsman.pl \
	--plugin=os::windows::wsman::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                            | Linked service template                                                            |
|:--------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/cpu.pm)]                        | OS-Windows-Cpu-WSMAN-custom                                                        |
| eventlog [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/eventlog.pm)]              | Not used in this Monitoring Connector                                              |
| files-date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/filesdate.pm)]           | OS-Windows-Files-Date-Generic-WSMAN-custom                                         |
| files-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/filessize.pm)]           | OS-Windows-Files-Size-Generic-WSMAN-custom                                         |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/interfaces.pm)]          | OS-Windows-Traffic-Global-WSMAN-custom                                             |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/listinterfaces.pm)] | Used for service discovery                                                         |
| list-processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/listprocesses.pm)]   | Used for service discovery                                                         |
| list-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/listservices.pm)]     | Used for service discovery                                                         |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/liststorages.pm)]     | Used for service discovery                                                         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/memory.pm)]                  | OS-Windows-Memory-WSMAN-custom                                                     |
| pages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/pages.pm)]                    | OS-Windows-Swap-WSMAN-custom                                                       |
| pending-reboot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/pendingreboot.pm)]   | OS-Windows-Pending-Reboot-WSMAN-custom                                             |
| processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/processes.pm)]            | OS-Windows-Process-Global-WSMAN-custom                                             |
| services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/services.pm)]              | OS-Windows-Service-Generic-WSMAN-custom<br />OS-Windows-Services-Auto-WSMAN-custom |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/sessions.pm)]              | OS-Windows-Sessions-WSMAN-custom                                                   |
| storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/storages.pm)]              | OS-Windows-Disk-Global-WSMAN-custom                                                |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/time.pm)]                      | OS-Windows-Ntp-WSMAN-custom                                                        |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/updates.pm)]                | OS-Windows-Updates-WSMAN-custom                                                    |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/uptime.pm)]                  | OS-Windows-Uptime-WSMAN-custom                                                     |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Need at least openwsman-perl version \>= 2.4.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --hostname                                 | Define the hostname to query (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --wsman-port                               | Define the port to connect to (default: 5985).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --wsman-path                               | Define the path of the WSMAN URL if it has been customized (default: '/wsman').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --wsman-scheme                             | Define the transport scheme (default: 'http').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --wsman-username                           | Define the username for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --wsman-password                           | Define the password associated with the user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --wsman-timeout                            | Define the HTTP transport timeout in seconds (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --wsman-auth-method                        | Define the authentication method. Available methods: noauth, basic (default), pass, digest, ntlm, gssnegotiate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --wsman-proxy-url                          | Define the URL of the HTTP proxy to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --wsman-proxy-username                     | Define the user name to authenticate to the proxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --wsman-proxy-password                     | Define the password to authenticate to the proxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --wsman-debug                              | Define the openwsman log level. Available levels: error, critical, warning, message, info (default), debug.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --wsman-errors-exit                        | Define the expected exit code when wsman errors occur (default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-average      | Warning threshold average CPU utilization.                                                                                                                                                                                                    |
| --critical-average     | Critical threshold average CPU utilization.                                                                                                                                                                                                   |
| --warning-core         | Warning thresholds for each CPU core                                                                                                                                                                                                          |
| --critical-core        | Critical thresholds for each CPU core                                                                                                                                                                                                         |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Option                   | Description                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------|
| --filter-name            | Filter storages by name (can be a regexp).                                            |
| --filter-type            | Filter storages by type (can be a regexp) (Default: 'localDisk').                     |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct'.    |

</TabItem>
<TabItem value="Files-Date-Generic" label="Files-Date-Generic">

| Option            | Description                                                                 |
|:------------------|:----------------------------------------------------------------------------|
| --folder          | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'.   |
| --filter-filename | Filter files by name.                                                       |
| --warning         | Warning threshold in seconds for each files (diff time).                    |
| --critical        | Critical threshold in seconds for each files (diff time).                   |

</TabItem>
<TabItem value="Files-Size-Generic" label="Files-Size-Generic">

| Option            | Description                                                                 |
|:------------------|:----------------------------------------------------------------------------|
| --folder          | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'.   |
| --filter-filename | Filter files by name.                                                       |
| --warning-one     | Warning threshold in bytes for each files/directories.                      |
| --critical-one    | Critical threshold in bytes for each files/directories.                     |
| --warning-total   | Warning threshold in bytes for all files/directories.                       |
| --critical-total  | Critical threshold in bytes for all files/directories.                      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                         |
|:-------------------------|:--------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct'.    |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option            | Description                                                                                                         |
|:------------------|:--------------------------------------------------------------------------------------------------------------------|
| --warning-offset  | Time offset warning threshold (in seconds).                                                                         |
| --critical-offset | Time offset critical Threshold (in seconds).                                                                        |
| --ntp-hostname    | Set the ntp hostname (if not set, localtime is used).                                                               |
| --ntp-port        | Set the ntp port (Default: 123).                                                                                    |
| --timezone        | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100'.    |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Option            | Description                                                                                                                                                                                                                                                 |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --ps-display      | Display powershell script.                                                                                                                                                                                                                                  |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                                                                    |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: '%{RebootPending} =~ /true/i'). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}.   |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}.                             |

</TabItem>
<TabItem value="Process-Global" label="Process-Global">

| Option           | Description                                                                       |
|:-----------------|:----------------------------------------------------------------------------------|
| --process-status | Filter process status. Can be a regexp. (Default: 'running').                     |
| --process-name   | Filter process name.                                                              |
| --regexp-name    | Allows to use WQL wildcard to filter process name (with option --process-name).   |
| --warning        | Warning threshold of matching processes detected.                                 |
| --critical       | Critical threshold of matching processes detected.                                |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

| Option     | Description                                                                                                                                                                                           |
|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning  | Return warning.                                                                                                                                                                                       |
| --critical | Return critical.                                                                                                                                                                                      |
| --services | Services to monitor. Syntax: \[service\_name\[\[=\|!=\]state\]\],... Available states are: - Stopped - Start Pending - Stop Pending - Running - Continue Pending - Pause Pending - Paused - Unknown   |
| --auto     | Return threshold for auto services not running.                                                                                                                                                       |
| --exclude  | Exclude some services for --auto option (Can be a regexp).                                                                                                                                            |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Option     | Description                                                                                                                                                                                           |
|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning  | Return warning.                                                                                                                                                                                       |
| --critical | Return critical.                                                                                                                                                                                      |
| --services | Services to monitor. Syntax: \[service\_name\[\[=\|!=\]state\]\],... Available states are: - Stopped - Start Pending - Stop Pending - Running - Continue Pending - Pause Pending - Paused - Unknown   |
| --auto     | Return threshold for auto services not running.                                                                                                                                                       |
| --exclude  | Exclude some services for --auto option (Can be a regexp).                                                                                                                                            |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --config                 | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file                                                                                              |
| --language               | Set the language used in config file (default: 'en').                                                                                                                                                                                         |
| --command                | Command to get information (Default: 'qwinsta'). Can be changed if you have output in a file.                                                                                                                                                 |
| --command-path           | Command path (Default: none).                                                                                                                                                                                                                 |
| --command-options        | Command options (Default: '/COUNTER').                                                                                                                                                                                                        |
| --timeout                | Timeout in seconds for the command (Default: 30).                                                                                                                                                                                             |
| --filter-sessionname     | Filter session name (can be a regexp).                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'sessions-created', 'sessions-disconnected', 'sessions-reconnected', 'sessions-active', 'sessions-disconnected-current'.                                                                                                  |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct'.    |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard',                                                                                                                                        |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                         |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                        |
| --filter-interface       | Filter interface name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-interface      | Exclude interface name (regexp can be used).                                                                                                                                                                                                  |
| --speed                  | Set interface speed (in Mb).                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Updates" label="Updates">

| Option                   | Description                                              |
|:-------------------------|:---------------------------------------------------------|
| --ps-display             | Display powershell script.                               |
| --ps-exec-only           | Print powershell output.                                 |
| --filter-title           | Filter windows updates by title (can be a regexp).       |
| --exclude-title          | Exclude windows updates by title (regexp can be used).   |
| --display-updates        | Display updates in verbose output.                       |
| --warning-* --critical-* | Thresholds. Can be: 'pending-updates'.                   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                    |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-uptime  | Warning threshold.                                                                                                                                             |
| --critical-uptime | Critical threshold.                                                                                                                                            |
| --unit            | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_windows_wsman.pl \
	--plugin=os::windows::wsman::plugin \
	--mode=updates \
	--help
```
