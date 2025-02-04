---
id: cloud-prometheus-node-exporter-api
title: Node Exporter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Node Exporter** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Node Exporter** brings a host template:

* **Cloud-Prometheus-Node-Exporter-Api-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Prometheus-Node-Exporter-Api-custom" label="Cloud-Prometheus-Node-Exporter-Api-custom">

| Service Alias     | Service Template                                       | Service Description           |
|:------------------|:-------------------------------------------------------|:------------------------------|
| Node-Cpu          | Cloud-Prometheus-Node-Exporter-Cpu-Api-custom          | Check node CPU usage          |
| Node-Cpu-Detailed | Cloud-Prometheus-Node-Exporter-Cpu-Detailed-Api-custom | Check node detailed CPU usage |
| Node-Load         | Cloud-Prometheus-Node-Exporter-Load-Api-custom         | Check node load               |
| Node-Memory       | Cloud-Prometheus-Node-Exporter-Memory-Api-custom       | Check node memory usage       |
| Node-Storage      | Cloud-Prometheus-Node-Exporter-Storage-Api-custom      | Check node storage usage      |

> The services listed above are created automatically when the **Cloud-Prometheus-Node-Exporter-Api-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Name                                          | Unit  |
|:----------------------------------------------|:------|
| *nodes*~node.cpu.utilization.percentage       | %     |
| *nodes*~*cpu*#core.cpu.utilization.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Node-Cpu-Detailed" label="Node-Cpu-Detailed">

| Name                                                    | Unit  |
|:--------------------------------------------------------|:------|
| *nodes*~node.cpu.wait.utilization.percentage            | %     |
| *nodes*~node.cpu.user.utilization.percentage            | %     |
| *nodes*~node.cpu.softirq.utilization.percentage         | %     |
| *nodes*~node.cpu.interrupt.utilization.percentage       | %     |
| *nodes*~node.cpu.idle.utilization.percentage            | %     |
| *nodes*~node.cpu.steal.utilization.percentage           | %     |
| *nodes*~node.cpu.system.utilization.percentage          | %     |
| *nodes*~node.cpu.nice.utilization.percentage            | %     |
| *nodes*~*cpu*#core.cpu.wait.utilization.percentage      | %     |
| *nodes*~*cpu*#core.cpu.user.utilization.percentage      | %     |
| *nodes*~*cpu*#core.cpu.softirq.utilization.percentage   | %     |
| *nodes*~*cpu*#core.cpu.interrupt.utilization.percentage | %     |
| *nodes*~*cpu*#core.cpu.idle.utilization.percentage      | %     |
| *nodes*~*cpu*#core.cpu.steal.utilization.percentage     | %     |
| *nodes*~*cpu*#core.cpu.system.utilization.percentage    | %     |
| *nodes*~*cpu*#core.cpu.nice.utilization.percentage      | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Node-Load" label="Node-Load">

| Name                         | Unit  |
|:-----------------------------|:------|
| *nodes*#load.1minute.count   | count |
| *nodes*#load.5minutes.count  | count |
| *nodes*#load.15minutes.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Name                       | Unit  |
|:---------------------------|:------|
| *nodes*#memory.usage.bytes | B     |
| *nodes*#buffer.usage.bytes | B     |
| *nodes*#cache.usage.bytes  | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Name                                           | Unit  |
|:-----------------------------------------------|:------|
| *nodes*~*disk_name1*#storage.space.usage.bytes | B     |
| *nodes*~*disk_name2*#storage.space.usage.bytes | B     |

</TabItem>
</Tabs>

## Prerequisites

The Centreon Collector must be able to execute HTTP(S) requests to the Prometheus Server.

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
dnf install centreon-pack-cloud-prometheus-node-exporter-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-prometheus-node-exporter-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-prometheus-node-exporter-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-prometheus-node-exporter-api
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Node Exporter** connector through
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
dnf install centreon-plugin-Cloud-Prometheus-Node-Exporter-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Prometheus-Node-Exporter-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-prometheus-node-exporter-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Prometheus-Node-Exporter-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Prometheus-Node-Exporter-Api-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                          | Default value     | Mandatory   |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROMETHEUSAPIHOSTNAME | Prometheus hostname                                                                                  |                   |             |
| PROMETHEUSAPIPROTO    | Specify https if needed (default: 'http')                                                            | http              |             |
| PROMETHEUSAPIPORT     | API port (default: 9090)                                                                             | 9090              |             |
| PROMETHEUSAPIURL      | API url path (default: '/api/v1')                                                                    | /api/v1           |             |
| EXTRAOPTIONS          | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE          | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                 | instance=~".*"    |             |
| CPU               | Filter on a specific CPU (must be a PromQL filter, Default: 'cpu=~".*"')                           | cpu=~".*"         |             |
| WARNINGCPUUSAGE   | Threshold                                                                                          |                   |             |
| CRITICALCPUUSAGE  | Threshold                                                                                          |                   |             |
| WARNINGNODEUSAGE  | Threshold                                                                                          | 80                |             |
| CRITICALNODEUSAGE | Threshold                                                                                          | 90                |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Node-Cpu-Detailed" label="Node-Cpu-Detailed">

| Macro                 | Description                                                                                        | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE              | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                 | instance=~".*"    |             |
| CPU                   | Filter on a specific CPU (must be a PromQL filter, Default: 'cpu=~".*"')                           | cpu=~".*"         |             |
| TYPE                  | Filter on a specific type (must be a PromQL filter, Default: 'mode=~".*"')                         | mode=~".*"        |             |
| WARNINGCPUIDLE        | Threshold                                                                                          |                   |             |
| CRITICALCPUIDLE       | Threshold                                                                                          |                   |             |
| WARNINGCPUINTERRUPT   | Threshold                                                                                          |                   |             |
| CRITICALCPUINTERRUPT  | Threshold                                                                                          |                   |             |
| WARNINGCPUNICE        | Threshold                                                                                          |                   |             |
| CRITICALCPUNICE       | Threshold                                                                                          |                   |             |
| WARNINGCPUSOFTIRQ     | Threshold                                                                                          |                   |             |
| CRITICALCPUSOFTIRQ    | Threshold                                                                                          |                   |             |
| WARNINGCPUSTEAL       | Threshold                                                                                          |                   |             |
| CRITICALCPUSTEAL      | Threshold                                                                                          |                   |             |
| WARNINGCPUSYSTEM      | Threshold                                                                                          |                   |             |
| CRITICALCPUSYSTEM     | Threshold                                                                                          |                   |             |
| WARNINGCPUUSER        | Threshold                                                                                          |                   |             |
| CRITICALCPUUSER       | Threshold                                                                                          |                   |             |
| WARNINGCPUWAIT        | Threshold                                                                                          |                   |             |
| CRITICALCPUWAIT       | Threshold                                                                                          |                   |             |
| WARNINGNODEIDLE       | Threshold                                                                                          |                   |             |
| CRITICALNODEIDLE      | Threshold                                                                                          |                   |             |
| WARNINGNODEINTERRUPT  | Threshold                                                                                          |                   |             |
| CRITICALNODEINTERRUPT | Threshold                                                                                          |                   |             |
| WARNINGNODENICE       | Threshold                                                                                          |                   |             |
| CRITICALNODENICE      | Threshold                                                                                          |                   |             |
| WARNINGNODESOFTIRQ    | Threshold                                                                                          |                   |             |
| CRITICALNODESOFTIRQ   | Threshold                                                                                          |                   |             |
| WARNINGNODESTEAL      | Threshold                                                                                          |                   |             |
| CRITICALNODESTEAL     | Threshold                                                                                          |                   |             |
| WARNINGNODESYSTEM     | Threshold                                                                                          |                   |             |
| CRITICALNODESYSTEM    | Threshold                                                                                          |                   |             |
| WARNINGNODEUSER       | Threshold                                                                                          |                   |             |
| CRITICALNODEUSER      | Threshold                                                                                          |                   |             |
| WARNINGNODEWAIT       | Threshold                                                                                          |                   |             |
| CRITICALNODEWAIT      | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Node-Load" label="Node-Load">

| Macro          | Description                                                                                        | Default value     | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE       | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                 | instance=~".*"    |             |
| WARNINGLOAD1   | Threshold                                                                                          |                   |             |
| CRITICALLOAD1  | Threshold                                                                                          |                   |             |
| WARNINGLOAD15  | Threshold                                                                                          |                   |             |
| CRITICALLOAD15 | Threshold                                                                                          |                   |             |
| WARNINGLOAD5   | Threshold                                                                                          |                   |             |
| CRITICALLOAD5  | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Macro          | Description                                                                                        | Default value     | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE       | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                 | instance=~".*"    |             |
| UNITS          | Units of thresholds (default: '%') ('%', 'B')                                                      | %                 |             |
| WARNINGBUFFER  | Threshold                                                                                          |                   |             |
| CRITICALBUFFER | Threshold                                                                                          |                   |             |
| WARNINGCACHED  | Threshold                                                                                          |                   |             |
| CRITICALCACHED | Threshold                                                                                          |                   |             |
| WARNINGUSAGE   | Threshold                                                                                          | 80                |             |
| CRITICALUSAGE  | Threshold                                                                                          | 90                |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Macro         | Description                                                                                        | Default value                    | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| INSTANCE      | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                 | instance=~".*"                   |             |
| MOUNTPOINT    | Filter on a specific mountpoint (must be a PromQL filter, Default: 'mountpoint=~".*"')             | mountpoint=~".*"                 |             |
| FSTYPE        | Filter on a specific fstype (must be a PromQL filter, Default: 'fstype!~"linuxfs\|rootfs\|tmpfs"') | fstype!~"linuxfs\|rootfs\|tmpfs" |             |
| UNITS         | Units of thresholds (default: '%') ('%', 'B')                                                      | %                                |             |
| WARNINGUSAGE  | Warning threshold                                                                                  | 80                               |             |
| CRITICALUSAGE | Critical threshold                                                                                 | 90                               |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                        |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_prometheus_node_exporter_api.pl \
	--plugin=cloud::prometheus::exporters::nodeexporter::plugin \
	--mode=storage \
	--hostname= \
	--url-path='/api/v1' \
	--port='9090' \
	--proto='http'  \
	--instance='instance=~".*"' \
	--mountpoint='mountpoint=~".*"' \
	--fstype='fstype!~"linuxfs|rootfs|tmpfs"' \
	--units='%' \
	--warning-usage='80' \
	--critical-usage='90' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All storages usage are ok | 'nodes~disk_name1#storage.space.usage.bytes'=84856B;80;90;; 'nodes~disk_name2#storage.space.usage.bytes'=19180B;80;90;;
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
/usr/lib/centreon/plugins/centreon_prometheus_node_exporter_api.pl \
	--plugin=cloud::prometheus::exporters::nodeexporter::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                             | Linked service template                                |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/cpu.pm)]                  | Cloud-Prometheus-Node-Exporter-Cpu-Api-custom          |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/cpudetailed.pm)] | Cloud-Prometheus-Node-Exporter-Cpu-Detailed-Api-custom |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/load.pm)]                | Cloud-Prometheus-Node-Exporter-Load-Api-custom         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/memory.pm)]            | Cloud-Prometheus-Node-Exporter-Memory-Api-custom       |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/storage.pm)]          | Cloud-Prometheus-Node-Exporter-Storage-Api-custom      |

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
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timeframe                                |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --step                                     |   Set the step of the metric query (examples: '30s', '1m', '15m', '1h').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --hostname                                 |   Prometheus hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --url-path                                 |   API url path (default: '/api/v1')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --port                                     |   API port (default: 9090)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --credentials                              |   Specify this option if you access the API with authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --username                                 |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --password                                 |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --basic                                    |   Specify this option if you access the API over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access the API over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --header                                   |   Set HTTP header (can be multiple, example: --header='Authorization:Bearer ABCD')  Useful to access Prometheus API hosted in a specific environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Option            | Description                                                                                                                                                    |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                                           |
| --cpu             |   Filter on a specific CPU (must be a PromQL filter, Default: 'cpu=~".*"')                                                                                     |
| --warning-*       |   Warning threshold. Can be: 'node-usage', 'cpu-usage'.                                                                                                        |
| --critical-*      |   Critical threshold. Can be: 'node-usage', 'cpu-usage'.                                                                                                       |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                           |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - cpu: ^node\_cpu.*   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='node'                                                                           |

</TabItem>
<TabItem value="Node-Cpu-Detailed" label="Node-Cpu-Detailed">

| Option            | Description                                                                                                                                                                                                                                                   |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                                                                                                                                          |
| --cpu             |   Filter on a specific CPU (must be a PromQL filter, Default: 'cpu=~".*"')                                                                                                                                                                                    |
| --type            |   Filter on a specific type (must be a PromQL filter, Default: 'mode=~".*"')                                                                                                                                                                                  |
| --warning-*       |   Warning threshold. Can be: 'node-idle', 'node-wait', 'node-interrupt', 'node-nice', 'node-softirq', 'node-steal', 'node-system', 'node-user', 'cpu-idle', 'cpu-wait', 'cpu-interrupt', 'cpu-nice', 'cpu-softirq', 'cpu-steal', 'cpu-system', 'cpu-user'.    |
| --critical-*      |   Critical threshold. Can be: 'node-idle', 'node-wait', 'node-interrupt', 'node-nice', 'node-softirq', 'node-steal', 'node-system', 'node-user', 'cpu-idle', 'cpu-wait', 'cpu-interrupt', 'cpu-nice', 'cpu-softirq', 'cpu-steal', 'cpu-system', 'cpu-user'.   |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                                                          |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - cpu: ^node\_cpu\_seconds\_total.*                                                                                  |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='wait'                                                                                                                                                                          |

</TabItem>
<TabItem value="Node-Load" label="Node-Load">

| Option            | Description                                                                                                                                                                                                               |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                                                                                                      |
| --warning-*       |   Warning threshold. Can be: 'load1', 'load5', 'load15'.                                                                                                                                                                  |
| --critical-*      |   Critical threshold. Can be: 'load1', 'load5', 'load15'.                                                                                                                                                                 |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                      |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - load1: ^node\_load1$     - load5: ^node\_load5$     - load15: ^node\_load15$   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='load15'                                                                                                                                    |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Option            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                                                                                                                                                                                                                                                                                                                                                                               |
| --warning-*       |   Warning threshold. Can be: 'usage', 'buffer', 'cached'.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --critical-*      |   Critical threshold. Can be: 'usage', 'buffer', 'cached'.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --units           |   Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                                                                                                                                                                                                                                                                                               |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  By default, 'node\_memory\_MemFree' node's metric will be used for 'available' metric as it is more commonly used for now. The best being to use 'node\_memory\_MemAvailable' in the future.  Default :      - total: ^node\_memory\_MemTotal.*     - available: ^node\_memory\_MemFree.*     - cached: ^node\_memory\_Cached.*     - buffer: ^node\_memory\_Buffers.*   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='usage'                                                                                                                                                                                                                                                                                                                                                                                                              |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Option            | Description                                                                                                                                                                                                         |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                                                                                                |
| --mountpoint      |   Filter on a specific mountpoint (must be a PromQL filter, Default: 'mountpoint=~".*"')                                                                                                                            |
| --fstype          |   Filter on a specific fstype (must be a PromQL filter, Default: 'fstype!~"linuxfs\|rootfs\|tmpfs"')                                                                                                                |
| --units           |   Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                    |
| --free            |   Thresholds are on free space left.                                                                                                                                                                                |
| --warning-usage   |   Warning threshold.                                                                                                                                                                                                |
| --critical-usage  |   Critical threshold.                                                                                                                                                                                               |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - free: ^node\_filesystem\_free.*     - size: ^node\_filesystem\_size.*    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_prometheus_node_exporter_api.pl \
	--plugin=cloud::prometheus::exporters::nodeexporter::plugin \
	--mode=storage \
	--help
```
