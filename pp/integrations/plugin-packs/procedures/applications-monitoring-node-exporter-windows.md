---
id: applications-monitoring-node-exporter-windows
title: Node Exporter Windows Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This pack enables the monitoring of a Windows host based on metrics provided by the Prometheus exporter, a software agent that collects and exposes performance and system resource data.

## Pack assets

### Templates

The Monitoring Connector **Node Exporter Windows Metrics** brings a host template:

* **App-Monitoring-Node-Exporter-Windows-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Node-Exporter-Windows-custom" label="App-Monitoring-Node-Exporter-Windows-custom">

| Service Alias     | Service Template                                         | Service Description                 | Discovery  |
|:------------------|:---------------------------------------------------------|:------------------------------------|:----------:|
| Node-Cpu          | App-Monitoring-Node-Exporter-Windows-Cpu-custom          | Check node CPU usage                |            |
| Node-Memory       | App-Monitoring-Node-Exporter-Windows-Memory-custom       | Check node memory usage             |            |
| Node-Service-Name | App-Monitoring-Node-Exporter-Windows-Service-Name-custom | Check the status of services               | X          |
| Node-Storage      | App-Monitoring-Node-Exporter-Windows-Storage-custom      | Check node storage usage            | X          |
| Node-Traffic      | App-Monitoring-Node-Exporter-Windows-Traffic-custom      | Check network traffic per interface | X          |

> The services listed above are created automatically when the **App-Monitoring-Node-Exporter-Windows-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                           | Description                                                   |
|:----------------------------------------------------|:--------------------------------------------------------------|
| App-Monitoring-Node-Exporter-Windows-Interface-Name | Discover network interfaces and monitor bandwidth utilization |
| App-Monitoring-Node-Exporter-Windows-Service-Name   | Discover services and monitor their system usage              |
| App-Monitoring-Node-Exporter-Windows-Storage-Name   | Discover the disk partitions and monitor space occupation     |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Metric name                                           | Unit  |
|:------------------------------------------------------|:------|
| cpu.utilization.percentage                            | %     |
| *node_cpu*#node.cpu.idle.utilization.percentage       | %     |
| *node_cpu*#node.cpu.dpc.utilization.percentage        | %     |
| *node_cpu*#node.cpu.interrupt.utilization.percentage  | %     |
| *node_cpu*#node.cpu.privileged.utilization.percentage | %     |
| *node_cpu*#node.cpu.user.utilization.percentage       | %     |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Metric name             | Unit  |
|:------------------------|:------|
| node.memory.usage.bytes | B     |
| node.paging.usage.bytes | B     |

</TabItem>
<TabItem value="Node-Service-Name" label="Node-Service-Name">

| Metric name      | Unit  |
|:-----------------|:------|
| *service*#status | N/A   |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Metric name                               | Unit  |
|:------------------------------------------|:------|
| *disk_name*#node.storage.space.free.bytes | B     |

</TabItem>
<TabItem value="Node-Traffic" label="Node-Traffic">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| node.bandwidth.usage                     | %     |
| *traffic*#node.packets.in.count          | count |
| *traffic*#node.packets.out.count         | count |
| *traffic*#node.packets.in.error.count    | count |
| *traffic*#node.packets.out.error.count   | count |
| *traffic*#node.traffic.in.bitspersecond  | b/s   |
| *traffic*#node.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

This pack is based on the community Prometheus exporter for Windows machines: https://github.com/prometheus-community/windows_exporter#installation.

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
dnf install centreon-pack-applications-monitoring-node-exporter-windows
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-node-exporter-windows
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-monitoring-node-exporter-windows
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-node-exporter-windows
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Node Exporter Windows Metrics** connector through
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
dnf install centreon-plugin-Applications-Monitoring-Nodeexporter-Windows
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Nodeexporter-Windows
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-monitoring-nodeexporter-windows
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Windows
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Monitoring-Node-Exporter-Windows-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro             | Description                                                                                          | Default value     | Mandatory   |
|:------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NODEEXPORTERPROTO | Specify https if needed (default: 'http')                                                            | http              |             |
| NODEEXPORTERURL   | URL to scrape metrics from (default: '/metrics')                                                     | /metrics          |             |
| NODEEXPORTERPORT  | Port used                                                                              | 9182              |             |
| EXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Macro              | Description                                                                                        | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE     | Warning threshold                                                                                  |                   |             |
| CRITICALAVERAGE    | Critical threshold                                                                                 |                   |             |
| WARNINGDPC         | Warning threshold                                                                                  |                   |             |
| CRITICALDPC        | Critical threshold                                                                                 |                   |             |
| WARNINGIDLE        | Warning threshold                                                                                  |                   |             |
| CRITICALIDLE       | Critical threshold                                                                                 |                   |             |
| WARNINGINTERRUPT   | Warning threshold                                                                                  |                   |             |
| CRITICALINTERRUPT  | Critical threshold                                                                                 |                   |             |
| WARNINGPRIVILEGED  | Warning threshold                                                                                  |                   |             |
| CRITICALPRIVILEGED | Critical threshold                                                                                 |                   |             |
| WARNINGUSER        | Warning threshold                                                                                  |                   |             |
| CRITICALUSER       | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Macro          | Description                                                                                        | Default value     | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS          | Units of thresholds. Can be : '%', 'B' Default: '%'                                                | %                 |             |
| WARNINGPAGING  | Warning threshlod                                                                                  |                   |             |
| CRITICALPAGING | Critical threshlod                                                                                 |                   |             |
| WARNINGUSAGE   | Warning threshlod                                                                                  |                   |             |
| CRITICALUSAGE  | Critical threshlod                                                                                 |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Node-Service-Name" label="Node-Service-Name">

| Macro          | Description                                                                                                                                                                                    | Default value                                        | Mandatory   |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:-----------:|
| SERVICENAME    | Specify which service to monitor. Can be a regex.  Default: all services are monitored                                                                                                         | .*                                                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{start\_mode} =~ /auto/ && %{status} !~ /^running$/'). You can use the following variables: %{status}, %{start\_mode} | %{start\_mode} =~ /auto/ && %{status} !~ /^running$/ |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{start\_mode}                                                      |                                                      |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                             |                                                      |             |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Macro         | Description                                                                                        | Default value     | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS         | Units of thresholds. Can be : '%', 'B' Default: '%'                                                | %                 |             |
| DISKNAME      | Specify which disk to monitor. Can be a regex.  Default: all disks are monitored                   | .*                |             |
| WARNINGUSAGE  | Warning threshold                                                                                  |                   |             |
| CRITICALUSAGE | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Node-Traffic" label="Node-Traffic">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME          | Specify which interface to monitor. Can be a regex.          Default: all interfaces are monitored | .*                |             |
| WARNINGBANDWIDTHUSAGE  | Warning thresholds                                                                                 |                   |             |
| CRITICALBANDWIDTHUSAGE | Critical thresholds                                                                                |                   |             |
| WARNINGPACKETSIN       | Warning thresholds                                                                                 |                   |             |
| CRITICALPACKETSIN      | Critical thresholds                                                                                |                   |             |
| WARNINGPACKETSOUT      | Warning thresholds                                                                                 |                   |             |
| CRITICALPACKETSOUT     | Critical thresholds                                                                                |                   |             |
| WARNINGTRAFFICIN       | Warning thresholds                                                                                 |                   |             |
| CRITICALTRAFFICIN      | Critical thresholds                                                                                |                   |             |
| WARNINGTRAFFICOUT      | Warning thresholds                                                                                 |                   |             |
| CRITICALTRAFFICOUT     | Critical thresholds                                                                                |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_monitoring_nodeexporter_windows.pl \
	--plugin=apps::monitoring::nodeexporter::windows::plugin \
	--mode=traffic \
	--hostname=10.0.0.1 \
	--urlpath='/metrics' \
	--port='9182' \
	--proto='http'  \
	--interface='.*' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--warning-packets-in='' \
	--critical-packets-in='' \
	--warning-packets-out='' \
	--critical-packets-out='' \
	--warning-bandwidth-usage='' \
	--critical-bandwidth-usage=''
```

The expected command output is shown below:

```bash
OK: Average bandwidth usage : 86 % All interfaces are OK.  | 'node.bandwidth.usage'=86%;;;0;100'*traffic*#node.packets.in.count'=;;;0;'*traffic*#node.packets.out.count'=;;;0;'*traffic*#node.packets.in.error.count'=;;;0;'*traffic*#node.packets.out.error.count'=;;;0;'*traffic*#node.traffic.in.bitspersecond'=123b/s;;;0;'*traffic*#node.traffic.out.bitspersecond'=123b/s;;;0;
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
/usr/lib/centreon/plugins/centreon_monitoring_nodeexporter_windows.pl \
	--plugin=apps::monitoring::nodeexporter::windows::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                | Linked service template                                  |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/windows/mode/cpu.pm)]                        | App-Monitoring-Node-Exporter-Windows-Cpu-custom          |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/windows/mode/listinterfaces.pm)] | Used for service discovery                               |
| list-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/windows/mode/listservices.pm)]     | Used for service discovery                               |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/windows/mode/liststorages.pm)]     | Used for service discovery                               |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/windows/mode/memory.pm)]                  | App-Monitoring-Node-Exporter-Windows-Memory-custom       |
| services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/windows/mode/services.pm)]              | App-Monitoring-Node-Exporter-Windows-Service-Name-custom |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/windows/mode/storage.pm)]                | App-Monitoring-Node-Exporter-Windows-Storage-custom      |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/windows/mode/traffic.pm)]                | App-Monitoring-Node-Exporter-Windows-Traffic-custom      |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Endpoint hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     | Port used (default: 80)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    | Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --urlpath                                  | URL to scrape metrics from (default: '/metrics').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --username                                 | Endpoint username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --password                                 | Endpoint password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Set HTTP timeout (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold.  Can be: 'average', 'idle', 'dpc', 'user', 'interrupt', 'privileged'                                                                                                                                                       |
| --critical-*           | Critical threshold.  Can be: 'average', 'idle', 'dpc', 'user', 'interrupt', 'privileged'                                                                                                                                                      |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Option            | Description                                          |
|:------------------|:-----------------------------------------------------|
| --units           | Units of thresholds. Can be : '%', 'B' Default: '%'  |
| --warning-usage   | Warning threshlod.                                   |
| --critical-usage  | Critical threshlod.                                  |
| --warning-paging  | Warning threshlod.                                   |
| --critical-paging | Critical threshlod.                                  |

</TabItem>
<TabItem value="Node-Service-Name" label="Node-Service-Name">

| Option            | Description                                                                                                                                                                                       |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --service         | Specify which service to monitor. Can be a regex.  Default: all services are monitored.                                                                                                           |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{start\_mode}                                                         |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{start\_mode} =~ /auto/ && %{status} !~ /^running$/'). You can use the following variables: %{status}, %{start\_mode}    |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Option           | Description                                                                         |
|:-----------------|:------------------------------------------------------------------------------------|
| --storage        | Specify which disk to monitor. Can be a regex.  Default: all disks are monitored.   |
| --units          | Units of thresholds. Can be : '%', 'B' Default: '%'                                 |
| --warning-usage  | Warning threshold.                                                                  |
| --critical-usage | Critical threshold.                                                                 |

</TabItem>
<TabItem value="Node-Traffic" label="Node-Traffic">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --interface            |         Specify which interface to monitor. Can be a regex.          Default: all interfaces are monitored.                                                                                                                                   |
| --warning-*            |         Warning thresholds.          Can be: 'traffic-in', 'traffic-out', 'packets-in', 'packets-out',         'bandwidth-usage'                                                                                                              |
| --critical-*           |         Critical thresholds.          Can be: 'traffic-in', 'traffic-out', 'packets-in', 'packets-out',         'bandwidth-usage'                                                                                                             |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_nodeexporter_windows.pl \
	--plugin=apps::monitoring::nodeexporter::windows::plugin \
	--mode=traffic \
	--help
```
