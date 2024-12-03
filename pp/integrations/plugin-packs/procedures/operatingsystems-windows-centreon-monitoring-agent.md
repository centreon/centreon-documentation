---
id: operatingsystems-windows-centreon-monitoring-agent
title: Windows Centreon Monitoring Agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> At the moment, this monitoring connector is in a **BETA** version.

You may refer to [this page](../getting-started/how-to-guides/cma.md) for more information about Centreon Monitoring Agent.

## Pack assets

### Templates

The Monitoring Connector **Windows Centreon Monitoring Agent** brings a host template:

* **OS-Windows-Centreon-Monitoring-Agent-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-Windows-Centreon-Monitoring-Agent-custom" label="OS-Windows-Centreon-Monitoring-Agent-custom">

| Service Alias  | Service Template                                           | Service Description                                                                                                                                  |
|:---------------|:-----------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| CPU            | OS-Windows-CPU-Centreon-Monitoring-Agent-custom            | Check the rate of utilization of CPUs for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPUs |
| Memory         | OS-Windows-Memory-Centreon-Monitoring-Agent-custom         | Check the rate of the utilization of memory                                                                                                          |
| Ntp            | OS-Windows-Ntp-Centreon-Monitoring-Agent-custom            | Check the synchronization with a NTP server.                                                                                                         |
| Pending-Reboot | OS-Windows-Pending-Reboot-Centreon-Monitoring-Agent-custom | Check if Windows needs rebooting.                                                                                                                    |
| Sessions       | OS-Windows-Sessions-Centreon-Monitoring-Agent-custom       | Check the number of active sessions.                                                                                                                 |
| Swap           | OS-Windows-Swap-Centreon-Monitoring-Agent-custom           | Check virtual memory usage                                                                                                                           |
| Updates        | OS-Windows-Updates-Centreon-Monitoring-Agent-custom        | Check if there are pending updates.                                                                                                                  |
| Uptime         | OS-Windows-Uptime-Centreon-Monitoring-Agent-custom         | Check time since the server has been working and available                                                                                           |

> The services listed above are created automatically when the **OS-Windows-Centreon-Monitoring-Agent-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                         | Service Description                                                                                                                                           |
|:--------------|:---------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Certificates  | OS-Windows-Certificates-Centreon-Monitoring-Agent-custom | Check the local certificates.                                                                                                                                 |
| CPU-detailed  | OS-Windows-CPU-detailed-Centreon-Monitoring-Agent-custom | Check the detailed rate of utilization of CPUs for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPUs |
| Storage       | OS-Windows-Storage-Centreon-Monitoring-Agent-custom      | Check storage usages                                                                                                                                          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Metric                               | Unit  |
|:-------------------------------------|:------|
| certificates.detected.count          | count |
| certificate#certificate.expires.days | d     |

</TabItem>
<TabItem value="CPU" label="CPU">

| Metric   | Unit |
|:---------|:------|
|          |       |

</TabItem>
<TabItem value="CPU-detailed" label="CPU-detailed">

| Metric   | Unit |
|:---------|:------|
|          |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric   | Unit |
|:---------|:------|
|          |       |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Metric   | Unit |
|:---------|:-----|
| offset   | s    |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

No metrics for this service.

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric                              | Unit  |
|:------------------------------------|:------|
| sessions.created.total.count        | count |
| sessions.disconnected.total.count   | count |
| sessions.reconnected.total.count    | count |
| sessions.active.current.count       | count |
| sessions.disconnected.current.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric    | Unit  |
|:----------|:------|
|           |       |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric   | Unit  |
|:---------|:------|
|          |       |

</TabItem>
<TabItem value="Updates" label="Updates">

| Metric                        | Unit  |
|:------------------------------|:------|
| windows.pending.updates.count | count |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric   | Unit  |
|:---------|:------|
|          |       |

</TabItem>
</Tabs>

## Prerequisites

### Network flow

Only one TCP flow must be open from the host to the poller.

| Source         | Destination | Protocol | Port | Purpose                                          |
|----------------|-------------|----------|------|--------------------------------------------------|
| Monitored host | Collecteur  | TCP      | 4317 | Configuration retrieval OpenTelemetry data flow. |

### System prerequisites on the poller

> To be able to use the Centreon Monitoring agent, you must use a poller with at least version `24.09.0` for Centreon Cloud users and version `24.04.6` or `24.10.0` for On Prem users of `centreon-engine`. The Centreon Monitoring agent will configure itself by connecting to Centreon Engine.

### Configure Engine

Read [this page](../getting-started/how-to-guides/cma.md#configure-engine) to learn how to configure Engine for compatibility with CMA.

### System prerequisites on the monitored host

The installer can be downloaded from the [centreon-collect's releases page](https://github.com/centreon/centreon-collect/releases?q=centreon-collect&expanded=true).

#### Installing the Centreon Monitoring Agent

The installation and configuration procedure of Centreon Monitoring Agent for Windows is detailed in 
[this dedicated page](../getting-started/how-to-guides/cma.md#step-2-prepare-the-host).

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
dnf install centreon-pack-operatingsystems-windows-centreon-monitoring-agent
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-centreon-monitoring-agent
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-windows-centreon-monitoring-agent
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

> None of the versions of Centreon Engine supported on CentOS 7 is compatible with the Centreon Monitoring Agent.

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Windows Centreon Monitoring Agent** connector through
the **Configuration > Monitoring Connectors Manager** menu.

3. Create the corresponding connector:

In the **Configuration > Commands > Connectors** menu, click **Add** and fill the following fields:

| Parameter             | Value                                                                                                                                                                                         |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connector Name        | Centreon Monitoring Agent Agent                                                                                                                                                               |
| Connector Description | Centreon Monitoring Agent Agent                                                                                                                                                               |
| Command Line          | `opentelemetry --processor=centreon_agent --extractor=attributes --host_path=resource_metrics.resource.attributes.host.name --service_path=resource_metrics.resource.attributes.service.name` |
| Used by command       | Select all the commands named like `OS-Windows-Centreon-Monitoring-Agent-*`                                                                                                                   |
| Connector Status      | Enabled                                                                                                                                                                                       |


### Plugin

This connector relies on an integration supported by Centreon Engine and does not need a plugin.

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **OS-Windows-Centreon-Monitoring-Agent-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                              | Default value                       | Mandatory |
|:---------------------|:---------------------------------------------------------|:------------------------------------|:---------:|
| SYSTEMLANGUAGE       | Language installed on the Windows system.                | en                                  |           |
| CENTREONAGENTPLUGINS | Path where the centreon_plugins.exe plugin can be found. | `C:/Program Files/Centreon/Plugins` |     X     |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Macro                        | Description                                                                                                                                                 | Default value | Mandatory |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| FILTERSUBJECT                | Filter certificate by subject (can be a regexp).                                                                                                            |               |           |
| FILTERTHUMBPRINT             | Filter certificate by thumbprint (can be a regexp).                                                                                                         |               |           |
| FILTERPATH                   | Filter certificate by path (can be a regexp).                                                                                                               |               |           |
| THRESHOLDSUNIT               | Select the time unit for the expiration thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. | d             |           |
| WARNINGCERTIFICATEEXPIRES    | Thresholds.                                                                                                                                                 | 60:           |           |
| CRITICALCERTIFICATEEXPIRES   | Thresholds.                                                                                                                                                 | 30:           |           |
| WARNINGCERTIFICATESDETECTED  | Thresholds.                                                                                                                                                 |               |           |
| CRITICALCERTIFICATESDETECTED | Thresholds.                                                                                                                                                 |               |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                    |               |           |

</TabItem>
<TabItem value="CPU" label="CPU">

| Macro           | Description                                                                                                                              | Default value | Mandatory |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGCORE     | Threshold for warning status on core usage in percentage                                                                                 |               |           |
| CRITICALCORE    | Threshold for critical status on core usage in percentage                                                                                |               |           |
| WARNINGAVERAGE  | Threshold for warning status on average usage in percentage                                                                              |               |           |
| CRITICALAVERAGE | Threshold for critical status on average usage in percentage                                                                             |               |           |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |               |           |

</TabItem>
<TabItem value="CPU-detailed" label="CPU-detailed">

| Macro                 | Description                                                                                                                              | Default value | Mandatory |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGCORE           | Threshold for warning status on core usage in percentage                                                                                 |               |           |
| CRITICALCORE          | Threshold for critical status on core usage in percentage                                                                                |               |           |
| WARNINGAVERAGE        | Threshold for warning status on average usage in percentage                                                                              |               |           |
| CRITICALAVERAGE       | Threshold for critical status on average usage in percentage                                                                             |               |           |
| WARNINGCOREUSER       | Threshold for warning status on core user usage in percentage                                                                            |               |           |
| CRITICALCOREUSER      | Threshold for critical status on core user usage in percentage                                                                           |               |           |
| WARNINGAVERAGEUSER    | Threshold for warning status on average user usage in percentage                                                                         |               |           |
| CRITICALAVERAGEUSER   | Threshold for critical status on average user usage in percentage                                                                        |               |           |
| WARNINGCORESYSTEM     | Threshold for warning status on core system usage in percentage                                                                          |               |           |
| CRITICALCORESYSTEM    | Threshold for critical status on core system usage in percentage                                                                         |               |           |
| WARNINGAVERAGESYSTEM  | Threshold for warning status on average system usage in percentage                                                                       |               |           |
| CRITICALAVERAGESYSTEM | Threshold for critical status on average system usage in percentage                                                                      |               |           |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |               |           |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                 | Description                                                                                                                              | Default value | Mandatory |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGUSAGE          | Threshold for warning status on physical memory usage in bytes                                                                           |               |           |
| CRITICALUSAGE         | Threshold for critical status on physical memory usage in bytes                                                                          |               |           |
| WARNINGUSAGEFREE      | Threshold for warning status on free physical memory in bytes                                                                            |               |           |
| CRITICALUSAGEFREE     | Threshold for critical status on free physical memory in bytes                                                                           |               |           |
| WARNINGUSAGEPRCT      | Threshold for warning status on physical memory usage in percentage                                                                      |               |           |
| CRITICALUSAGEPRCT     | Threshold for critical status on physical memory usage in percentage                                                                     |               |           |
| WARNINGUSAGEFREEPRCT  | Threshold for warning status on free physical memory in percentage                                                                       |               |           |
| CRITICALUSAGEFREEPRCT | Threshold for critical status on free physical memory in percentage                                                                      |               |           |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |               |           |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro          | Description                                                                                                                    | Default value | Mandatory |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| NTPHOSTNAME    | Set the NTP server to use (if not set, we try to find it with w32tm command).                                                  |               |           |
| NTPPORT        | Set the NTP port (default: 123).                                                                                               |               |           |
| WARNINGOFFSET  | Thresholds.                                                                                                                    | -1:1          |           |
| CRITICALOFFSET | Thresholds.                                                                                                                    | -2:2          |           |
| TIMEOUT        | Set timeout time for 'w32tm' command execution (default: 30 sec).                                                              | 10            |           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |               |           |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Macro          | Description                                                                                                                                                                                                                                              | Default value                 | Mandatory |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:---------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename} | `%{RebootPending} =~ /true/i` |           |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}                           |                               |           |
| TIMEOUT        | Set timeout time for command execution                                                                                                                                                                                                | 10                            |           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                           |                               |           |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                               | Description                                                                                                                                          | Default value | Mandatory |
|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| FILTERSESSIONNAME                   | Filter session name (can be a regexp).                                                                                                               |               |           |
| CONFIG                              | The command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file |               |           |
| WARNINGSESSIONSACTIVE               | Thresholds.                                                                                                                                          |               |           |
| CRITICALSESSIONSACTIVE              | Thresholds.                                                                                                                                          |               |           |
| WARNINGSESSIONSCREATED              | Thresholds.                                                                                                                                          |               |           |
| CRITICALSESSIONSCREATED             | Thresholds.                                                                                                                                          |               |           |
| WARNINGSESSIONSDISCONNECTED         | Thresholds.                                                                                                                                          |               |           |
| CRITICALSESSIONSDISCONNECTED        | Thresholds.                                                                                                                                          |               |           |
| WARNINGSESSIONSRECONNECTED          | Thresholds.                                                                                                                                          |               |           |
| CRITICALSESSIONSRECONNECTED         | Thresholds.                                                                                                                                          |               |           |
| WARNINGSESSIONSDISCONNECTEDCURRENT  | Thresholds.                                                                                                                                          |               |           |
| CRITICALSESSIONSDISCONNECTEDCURRENT | Thresholds.                                                                                                                                          |               |           |
| TIMEOUT                             | Timeout in seconds for the command                                                                                                  | 10            |           |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                       |               |           |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro             | Description                                                                                                                                                                                                                                                                                    | Default value | Mandatory |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING           | Thresholds                                                                                                                                                                                                                                                                                     |               |           |
| CRITICAL          | Thresholds                                                                                                                                                                                                                                                                                     |               |           |
| FILTERSTORAGETYPE | Case insensitive regex to filter storage type it includes drive type (fixed, network...). Types recognized by agent: hrunknown, hrstoragefixeddisk, hrstorageremovabledisk, hrstoragecompactdisc, hrstorageramdisk, hrstoragenetworkdisk, hrfsunknown, hrfsfat, hrfsntfs, hrfsfat32, hrfsexfat |               |           |
| FILTERFS          | Case insensitive regex to filter filesystem. Example: [C-D]:\\.*                                                                                                                                                                                                                               |               |           |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                       |               |           |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro                | Description                                                                                                                              | Default value | Mandatory |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGSWAP          | Threshold for warning status on swap memory usage in bytes                                                                               |               |           |
| CRITICALSWAP         | Threshold for critical status on swap memory usage in bytes                                                                              |               |           |
| WARNINGSWAPFREE      | Threshold for warning status on free swap memory in bytes                                                                                |               |           |
| CRITICALSWAPFREE     | Threshold for critical status on free swap memory in bytes                                                                               |               |           |
| WARNINGSWAPPRCT      | Threshold for warning status on swap memory usage in percentage                                                                          |               |           |
| CRITICALSWAPPRCT     | Threshold for critical status on swap memory usage in percentage                                                                         |               |           |
| WARNINGSWAPFREEPRCT  | Threshold for warning status on free swap memory in percentage                                                                           |               |           |
| CRITICALSWAPFREEPRCT | Threshold for critical status on free swap memory in percentage                                                                          |               |           |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |               |           |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                  | Description                                                                                                                    | Default value               | Mandatory |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:---------:|
| WARNINGPENDINGUPDATES  | Thresholds                                                                                                                     | 1                           |           |
| CRITICALPENDINGUPDATES | Thresholds                                                                                                                     |                             |           |
| TIMEOUT                | Set timeout time for command execution                                                                                         | 30                          |           |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --display-updates |           |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                                                              | Default value | Mandatory |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGUPTIME  | Warning threshold, if computer has been up for less than this time, service will be in warning state                                     |               |           |
| CRITICALUPTIME | Critical threshold                                                                                                                       |               |           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Test that the plugin is able to monitor your Windows server by using a command like this one (replace the sample values by yours):

```cmd
"C:\Program Files\Centreon\Plugins\centreon_plugins.exe" --plugin os::windows::local::plugin --mode sessions --language='fr' --timeout='30' --use-new-perfdata
```

> NB: This command cannot be run on the pollers, it must be launched directly on the Windows host.

The expected command output is shown below:

```bash
OK: Sessions created: 0, disconnected: 0, reconnected : 0, current active : 1, current disconnected : 1 | 'sessions.created.total.count'=0;;;0; 'sessions.disconnected.total.count'=0;;;0; 'sessions.reconnected.total.count'=0;;;0; 'sessions.active.current.count'=1;;;0; 'sessions.disconnected.current.count'=1;;;0;
```

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

The plugin brings the following modes:

| Mode                                                                                                                          | Linked service template                                    |
|:------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
| certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/certificates.pm)]    | OS-Windows-Certificates-Centreon-Monitoring-Agent-custom   |
| pending-reboot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/pendingreboot.pm)] | OS-Windows-Pending-Reboot-Centreon-Monitoring-Agent-custom |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/sessions.pm)]            | OS-Windows-Sessions-Centreon-Monitoring-Agent-custom       |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/ntp.pm)]                     | OS-Windows-Ntp-Centreon-Monitoring-Agent-custom            |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/updates.pm)]              | OS-Windows-Updates-Centreon-Monitoring-Agent-custom        |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Option                           | Description                                                                                                                                                 |
|:---------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-thumbprint              | Filter certificate by thumbprint (can be a regexp).                                                                                                         |
| --filter-subject                 | Filter certificate by subject (can be a regexp).                                                                                                            |
| --filter-path                    | Filter certificate by path (can be a regexp).                                                                                                               |
| --unit                           | Select the time unit for the expiration thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. |
| --warning-certificates-detected  | Thresholds.                                                                                                                                                 |
| --critical-certificates-detected | Thresholds.                                                                                                                                                 |
| --warning-certificate-expires    | Thresholds.                                                                                                                                                 |
| --critical-certificate-expires   | Thresholds.                                                                                                                                                 |
| --no-ps                          | Don't encode powershell. To be used with --command and 'type' command.                                                                                      |
| --command                        | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                      |
| --command-path                   | Command path (default: none).                                                                                                                               |
| --command-options                | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                     |
| --ps-display                     | Display powershell script.                                                                                                                                  |
| --ps-exec-only                   | Print powershell output.                                                                                                                                    |

</TabItem>
<TabItem value="CPU" label="CPU">

| Option                            | Description                                                                        |
|:----------------------------------|:-----------------------------------------------------------------------------------|
| --use-nt-query-system-information | (default true): true: use NtQuerySystemInformation instead of performance counters |
| --cpu-detailed                    | (default false): true: add detailed cpu usage to output                            |
| --warning-core                    | Threshold for warning status on core usage in percentage                           |
| --critical-core                   | Threshold for critical status on core usage in percentage                          |
| --warning-average                 | Threshold for warning status on average usage in percentage                        |
| --critical-average                | Threshold for critical status on average usage in percentage                       |
| --warning-core-user               | Threshold for warning status on core user usage in percentage                      |
| --critical-core-user              | Threshold for critical status on core user usage in percentage                     |
| --warning-average-user            | Threshold for warning status on average user usage in percentage                   |
| --critical-average-user           | Threshold for critical status on average user usage in percentage                  |
| --warning-core-system             | Threshold for warning status on core system usage in percentage                    |
| --critical-core-system            | Threshold for critical status on core system usage in percentage                   |
| --warning-average-system          | Threshold for warning status on average system usage in percentage                 |
| --critical-average-system         | Threshold for critical status on average system usage in percentage                |

</TabItem>
<TabItem value="CPU-detailed" label="CPU-detailed">

| Option                            | Description                                                                        |
|:----------------------------------|:-----------------------------------------------------------------------------------|
| --use-nt-query-system-information | (default true): true: use NtQuerySystemInformation instead of performance counters |
| --cpu-detailed                    | (default false): true: add detailed cpu usage to output                            |
| --warning-core                    | Threshold for warning status on core usage in percentage                           |
| --critical-core                   | Threshold for critical status on core usage in percentage                          |
| --warning-average                 | Threshold for warning status on average usage in percentage                        |
| --critical-average                | Threshold for critical status on average usage in percentage                       |
| --warning-core-user               | Threshold for warning status on core user usage in percentage                      |
| --critical-core-user              | Threshold for critical status on core user usage in percentage                     |
| --warning-average-user            | Threshold for warning status on average user usage in percentage                   |
| --critical-average-user           | Threshold for critical status on average user usage in percentage                  |
| --warning-core-system             | Threshold for warning status on core system usage in percentage                    |
| --critical-core-system            | Threshold for critical status on core system usage in percentage                   |
| --warning-average-system          | Threshold for warning status on average system usage in percentage                 |
| --critical-average-system         | Threshold for critical status on average system usage in percentage                |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                       | Description                                                          |
|:-----------------------------|:---------------------------------------------------------------------|
| --swap                       | (default false): true: add swap to output                            |
| --virtual                    | (default false): true: add virtual memory to output                  |
| --warning-usage              | Threshold for warning status on physical memory usage in bytes       |
| --critical-usage             | Threshold for critical status on physical memory usage in bytes      |
| --warning-usage-free         | Threshold for warning status on free physical memory in bytes        |
| --critical-usage-free        | Threshold for critical status on free physical memory in bytes       |
| --warning-usage-prct         | Threshold for warning status on physical memory usage in percentage  |
| --critical-usage-prct        | Threshold for critical status on physical memory usage in percentage |
| --warning-usage-free-prct    | Threshold for warning status on free physical memory in percentage   |
| --critical-usage-free-prct   | Threshold for critical status on free physical memory in percentage  |
| --warning-swap               | Threshold for warning status on swap usage in bytes                  |
| --critical-swap              | Threshold for critical status on swap usage in bytes                 |
| --warning-swap-free          | Threshold for warning status on free swap in bytes                   |
| --critical-swap-free         | Threshold for critical status on free swap in bytes                  |
| --warning-swap-prct          | Threshold for warning status on swap usage in percentage             |
| --critical-swap-prct         | Threshold for critical status on swap usage in percentage            |
| --warning-swap-free-prct     | Threshold for warning status on free swap in percentage              |
| --critical-swap-free-prct    | Threshold for critical status on free swap in percentage             |
| --warning-virtual            | Threshold for warning status on virtual memory usage in bytes        |
| --critical-virtual           | Threshold for critical status on virtual memory usage in bytes       |
| --warning-virtual-free       | Threshold for warning status on free virtual memory in bytes         |
| --critical-virtual-free      | Threshold for critical status on free virtual memory in bytes        |
| --warning-virtual-prct       | Threshold for warning status on virtual memory usage in percentage   |
| --critical-virtual-prct      | Threshold for critical status on virtual memory usage in percentage  |
| --warning-virtual-free-prct  | Threshold for warning status on free virtual memory in percentage    |
| --critical-virtual-free-prct | Threshold for critical status on free virtual memory in percentage   |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option         | Description                                                                |
|:---------------|:---------------------------------------------------------------------------|
| --warning      | Warning threshold.                                                         |
| --critical     | Critical threshold.                                                        |
| --ntp-hostname | Set the ntp hostname (if not set, we try to find it with w32tm command).   |
| --ntp-port     | Set the ntp port (Default: 123).                                           |
| --timeout      | Set timeout time for 'w32tm' command execution (Default: 30 sec)           |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Option            | Description                                                                                                                                                                                                                                               |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (Default: 50 sec)                                                                                                                                                                                                  |
| --no-ps           | Don't encode powershell. To be used with --command and 'type' command.                                                                                                                                                                                    |
| --command         | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                                    |
| --command-path    | Command path (Default: none).                                                                                                                                                                                                                             |
| --command-options | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                                   |
| --ps-display      | Display powershell script.                                                                                                                                                                                                                                |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                                                                  |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: '%{RebootPending} =~ /true/i'). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}. |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}.                           |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --config                 | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file                                                                                              |
| --language               | Set the language used in config file (default: 'en').                                                                                                                                                                                         |
| --command                | Command to get information (Default: 'qwinsta'). Can be changed if you have output in a file.                                                                                                                                                 |
| --command-path           | Command path (Default: none).                                                                                                                                                                                                                 |
| --command-options        | Command options (Default: '/COUNTER').                                                                                                                                                                                                        |
| --timeout                | Timeout in seconds for the command (Default: 30).                                                                                                                                                                                             |
| --filter-sessionname     | Filter session name (can be a regexp).                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'sessions-created', 'sessions-disconnected', 'sessions-reconnected', 'sessions-active', 'sessions-disconnected-current'.                                                                                                  |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                | Description                                                                                                                                                                                                                                                                                    |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unit                | (default %): unit of threshold. If different from % threshold are in bytes                                                                                                                                                                                                                     |
| --free                | (default used): true: threshold is applied on free space and service become warning if free sapce is lower than threshold. false: threshold is applied on used space and service become warning if used space is higher than threshold                                                         |
| --warning             | warning threshold                                                                                                                                                                                                                                                                              |
| --critical            | critical threshold                                                                                                                                                                                                                                                                             |
| --filter-storage-type | Case insensitive regex to filter storage type it includes drive type (fixed, network...). Types recognized by agent: hrunknown, hrstoragefixeddisk, hrstorageremovabledisk, hrstoragecompactdisc, hrstorageramdisk, hrstoragenetworkdisk, hrfsunknown, hrfsfat, hrfsntfs, hrfsfat32, hrfsexfat |
| --filter-fs           | Regex to filter filesystem. Example: [C-D]:\\.*                                                                                                                                                                                                                                                                   |
| --exclude-fs          | Regex to exclude filesystem                                                                                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                       | Description                                                          |
|:-----------------------------|:---------------------------------------------------------------------|
| --swap                       | (default false): true: add swap to output                            |
| --virtual                    | (default false): true: add virtual memory to output                  |
| --warning-usage              | Threshold for warning status on physical memory usage in bytes       |
| --critical-usage             | Threshold for critical status on physical memory usage in bytes      |
| --warning-usage-free         | Threshold for warning status on free physical memory in bytes        |
| --critical-usage-free        | Threshold for critical status on free physical memory in bytes       |
| --warning-usage-prct         | Threshold for warning status on physical memory usage in percentage  |
| --critical-usage-prct        | Threshold for critical status on physical memory usage in percentage |
| --warning-usage-free-prct    | Threshold for warning status on free physical memory in percentage   |
| --critical-usage-free-prct   | Threshold for critical status on free physical memory in percentage  |
| --warning-swap               | Threshold for warning status on swap usage in bytes                  |
| --critical-swap              | Threshold for critical status on swap usage in bytes                 |
| --warning-swap-free          | Threshold for warning status on free swap in bytes                   |
| --critical-swap-free         | Threshold for critical status on free swap in bytes                  |
| --warning-swap-prct          | Threshold for warning status on swap usage in percentage             |
| --critical-swap-prct         | Threshold for critical status on swap usage in percentage            |
| --warning-swap-free-prct     | Threshold for warning status on free swap in percentage              |
| --critical-swap-free-prct    | Threshold for critical status on free swap in percentage             |
| --warning-virtual            | Threshold for warning status on virtual memory usage in bytes        |
| --critical-virtual           | Threshold for critical status on virtual memory usage in bytes       |
| --warning-virtual-free       | Threshold for warning status on free virtual memory in bytes         |
| --critical-virtual-free      | Threshold for critical status on free virtual memory in bytes        |
| --warning-virtual-prct       | Threshold for warning status on virtual memory usage in percentage   |
| --critical-virtual-prct      | Threshold for critical status on virtual memory usage in percentage  |
| --warning-virtual-free-prct  | Threshold for warning status on free virtual memory in percentage    |
| --critical-virtual-free-prct | Threshold for critical status on free virtual memory in percentage   |

</TabItem>
<TabItem value="Updates" label="Updates">

| Option                   | Description                                                                                                                              |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                | Set timeout time for command execution (Default: 50 sec)                                                                                 |
| --no-ps                  | Don't encode powershell. To be used with --command and 'type'command.                                                                    |
| --command                | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path           | Command path (Default: none).                                                                                                            |
| --command-options        | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display             | Display powershell script.                                                                                                               |
| --ps-exec-only           | Print powershell output.                                                                                                                 |
| --filter-title           | Filter windows updates by title (can be a regexp).                                                                                       |
| --exclude-title          | Exclude windows updates by title (regexp can be used).                                                                                   |
| --display-updates        | Display updates in verbose output.                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'pending-updates'.                                                                                                   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option             | Description                                                                                          |
|:-------------------|:-----------------------------------------------------------------------------------------------------|
| --unit             | (defaults s): can be s, second, m, minute, h, hour, d, day, w, week                                  |
| --warning-uptime   | warning threshold, if computer has been up for less than this time, service will be in warning state |
| --critical-uptime  | critical threshold                                                                                   |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
"C:\Program Files\Centreon\Plugins\centreon_plugins.exe" --plugin=os::windows::local::plugin --mode=certificates --help
```
