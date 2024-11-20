---
id: network-riverbed-interceptor-snmp
title: Riverbed Interceptor
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Riverbed Interceptor** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Riverbed Interceptor** brings a host template:

* **Net-Riverbed-Interceptor-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Riverbed-Interceptor-SNMP-custom" label="Net-Riverbed-Interceptor-SNMP-custom">

| Service Alias        | Service Template                                          | Service Description                                                                                                                                |
|:---------------------|:----------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu                  | Net-Riverbed-Interceptor-Cpu-SNMP-custom                  | Check the rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU |
| Load                 | Net-Riverbed-Interceptor-Load-SNMP-custom                 | Check the server load average                                                                                                                      |
| Memory               | Net-Riverbed-Interceptor-Memory-SNMP-custom               | Check the rate of the utilization of memory                                                                                                        |
| Neighbor-Connections | Net-Riverbed-Interceptor-Neighbor-Connections-SNMP-custom | Check neighbor connections count                                                                                                                   |
| Status               | Net-Riverbed-Interceptor-Status-SNMP-custom               | Check the equipment status                                                                                                                         |

> The services listed above are created automatically when the **Net-Riverbed-Interceptor-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias        | Service Template                                          | Service Description                                                                                                                                         | Discovery  |
|:---------------------|:----------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------:|
| Cpu-Detailed         | Net-Riverbed-Interceptor-Cpu-Detailed-SNMP-custom         | Check the detailed rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU |            |
| Disk-Global          | Net-Riverbed-Interceptor-Disk-Global-SNMP-custom          | Check the rate of free space on disks. For each checks the mount point of disks will appear                                                                 | X          |
| Packet-Errors-Global | Net-Riverbed-Interceptor-Packet-Errors-Global-SNMP-custom | Check packets on errors/discards of multiple network interfaces                                                                                             | X          |
| Traffic-Global       | Net-Riverbed-Interceptor-Traffic-Global-SNMP-custom       | Check the bandwidth of interfaces. For each checks the name of the interface will appear                                                                    | X          |
| Uptime               | Net-Riverbed-Interceptor-Uptime-SNMP-custom               | Time since the server has been working and available                                                                                                        |            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                                   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Riverbed-Interceptor-SNMP-custom** host template. |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                                        | Description                                                           |
|:-------------------------------------------------|:----------------------------------------------------------------------|
| Net-Riverbed-Interceptor-SNMP-Disk-Name          | Discover the disk partitions and monitor space occupation             |
| Net-Riverbed-Interceptor-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| Net-Riverbed-Interceptor-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Name                                       | Unit  |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Name                                 | Unit  |
|:-------------------------------------|:------|
| cpu.user.utilization.percentage      | %     |
| cpu.nice.utilization.percentage      | %     |
| cpu.system.utilization.percentage    | %     |
| cpu.idle.utilization.percentage      | %     |
| cpu.wait.utilization.percentage      | %     |
| cpu.kernel.utilization.percentage    | %     |
| cpu.interrupt.utilization.percentage | %     |
| cpu.softirq.utilization.percentage   | %     |
| cpu.steal.utilization.percentage     | %     |
| cpu.guest.utilization.percentage     | %     |
| cpu.guestnice.utilization.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Name                                  | Unit  |
|:--------------------------------------|:------|
| storage.partitions.count              | count |
| *disk_name*#storage.space.usage.bytes | B     |
| *disk_name*#storage.access.count      | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Load" label="Load">

| Name                   | Unit  |
|:-----------------------|:------|
| load.1m.average.count  | count |
| load.5m.average.count  | count |
| load.15m.average.count | count |
| load.1m.count          | count |
| load.5m.count          | count |
| load.15m.count         | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Name                    | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| memory.buffer.bytes     | B     |
| memory.cached.bytes     | B     |
| memory.shared.bytes     | B     |
| swap.usage.bytes        | B     |
| swap.free.bytes         | B     |
| swap.usage.percentage   | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Neighbor-Connections" label="Neighbor-Connections">

| Name       | Unit  |
|:-----------|:------|
| connection | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Packet-Errors-Global" label="Packet-Errors-Global">

| Name                                                      | Unit  |
|:----------------------------------------------------------|:------|
| status                                                    | N/A   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Status" label="Status">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |
| uptime | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Name                                                  | Unit  |
|:------------------------------------------------------|:------|
| status                                                | N/A   |
| status                                                | N/A   |
| *interface_name1*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name2*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name1*#interface.traffic.out.bitspersecond | b/s   |
| *interface_name2*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Name                  | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

The SNMP agent must be configured and activated on the host. Please refer to the official documentation from the manufacturer/publisher.

### Network flow

The target resource must be reachable from the Centreon poller on the UDP/161
SNMP port.

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
dnf install centreon-pack-network-riverbed-interceptor-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-riverbed-interceptor-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-riverbed-interceptor-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-riverbed-interceptor-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Riverbed Interceptor** connector through
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
dnf install centreon-plugin-Network-Riverbed-Interceptor-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Riverbed-Interceptor-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-riverbed-interceptor-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Riverbed-Interceptor-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Riverbed-Interceptor-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                                                              | Default value     | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold average CPU utilization                                                                                              | 80                |             |
| CRITICAL     | Critical  threshold average CPU utilization                                                                                            | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIDLE  | Threshold                                                                                                                              | 20:               |             |
| CRITICALIDLE | Threshold                                                                                                                              | 10:               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro        | Description                                                                                                                                                                                     | Default value     | Mandatory   |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage')                                                                                                           | .*                |             |
| TRANSFORMSRC | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run'  will replace all occurrences of 'dev' with 'run' |                   |             |
| TRANSFORMDST | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run'  will replace all occurrences of 'dev' with 'run' |                   |             |
| WARNING      | Warning threshold                                                                                                                                                                               | 80                |             |
| CRITICAL     | Critical threshold                                                                                                                                                                              | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                          | --verbose         |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold (1min,5min,15min)                                                                                                    | 4,3,2             |             |
| CRITICAL     | Critical threshold (1min,5min,15min)                                                                                                   | 6,5,4             |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold                                                                                                                              | 80                |             |
| CRITICAL     | Threshold                                                                                                                              | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Neighbor-Connections" label="Neighbor-Connections">

| Macro              | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTION  | Warning threshold                                                                                                                      |                   |             |
| CRITICALCONNECTION | Critical threshold                                                                                                                     |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Packet-Errors-Global" label="Packet-Errors-Global">

| Macro              | Description                                                                                                                                                                                                         | Default value     | Mandatory   |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             | Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored.  To filter on interface names, see --name                                                              | .*                |             |
| WARNINGINDISCARD   | Threshold                                                                                                                                                                                                           |                   |             |
| CRITICALINDISCARD  | Threshold                                                                                                                                                                                                           |                   |             |
| WARNINGINERROR     | Threshold                                                                                                                                                                                                           |                   |             |
| CRITICALINERROR    | Threshold                                                                                                                                                                                                           |                   |             |
| WARNINGOUTDISCARD  | Threshold                                                                                                                                                                                                           |                   |             |
| CRITICALOUTDISCARD | Threshold                                                                                                                                                                                                           |                   |             |
| WARNINGOUTERROR    | Threshold                                                                                                                                                                                                           |                   |             |
| CRITICALOUTERROR   | Threshold                                                                                                                                                                                                           |                   |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                              | --verbose         |             |

</TabItem>
<TabItem value="Status" label="Status">

| Macro          | Description                                                                                                                            | Default value                                      | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL . You can use the following variables: %{health}, %{status}               | %{health} !~ /Healthy/ \|\| %{status} !~ /running/ |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{health}, %{status}                 |                                                    |             |
| WARNINGUPTIME  | Warning thresholds in seconds                                                                                                          |                                                    |             |
| CRITICALUPTIME | Critical thresholds in seconds                                                                                                         |                                                    |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                                                    |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro          | Description                                                                                                                                                                                                         | Default value     | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER         | Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored.  To filter on interface names, see --name                                                              | .*                |             |
| WARNINGIN      | Threshold                                                                                                                                                                                                           | 80                |             |
| CRITICALIN     | Threshold                                                                                                                                                                                                           | 90                |             |
| WARNINGOUT     | Threshold                                                                                                                                                                                                           | 80                |             |
| CRITICALOUT    | Threshold                                                                                                                                                                                                           | 90                |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                              | --verbose         |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                                                      |                   |             |
| CRITICAL     | Critical threshold                                                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_riverbed_interceptor.pl \
	--plugin=network::riverbed::interceptor::snmp::plugin \
	--mode=interfaces \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--interface='.*' \
	--name \
	--add-status \
	--add-traffic \
	--critical-status='' \
	--warning-in-traffic='80' \
	--critical-in-traffic='90' \
	--warning-out-traffic='80' \
	--critical-out-traffic='90' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All interfaces are ok | '*interface_name*#status'='up';;;;'*interface_name*#interface.traffic.in.bitspersecond'=20b/s;80;90;;'*interface_name*#interface.traffic.out.bitspersecond'=20b/s;80;90;;
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
/usr/lib/centreon/plugins/centreon_riverbed_interceptor.pl \
	--plugin=network::riverbed::interceptor::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                       | Linked service template                                                                                            |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpu.pm)]                                                      | Net-Riverbed-Interceptor-Cpu-SNMP-custom                                                                           |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpudetailed.pm)]                                     | Net-Riverbed-Interceptor-Cpu-Detailed-SNMP-custom                                                                  |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                                        | Net-Riverbed-Interceptor-Packet-Errors-Global-SNMP-custom<br />Net-Riverbed-Interceptor-Traffic-Global-SNMP-custom |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                               | Used for service discovery                                                                                         |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/liststorages.pm)]                                   | Used for service discovery                                                                                         |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/loadaverage.pm)]                                             | Net-Riverbed-Interceptor-Load-SNMP-custom                                                                          |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/memory.pm)]                                                | Net-Riverbed-Interceptor-Memory-SNMP-custom                                                                        |
| neighbor-connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/riverbed/interceptor/snmp/mode/neighborconnections.pm)] | Net-Riverbed-Interceptor-Neighbor-Connections-SNMP-custom                                                          |
| status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/riverbed/steelhead/snmp/mode/status.pm)]                      | Net-Riverbed-Interceptor-Status-SNMP-custom                                                                        |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/storage.pm)]                                              | Net-Riverbed-Interceptor-Disk-Global-SNMP-custom                                                                   |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                                                | Net-Riverbed-Interceptor-Uptime-SNMP-custom                                                                        |

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
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --hostname                                 |   Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-community                           |   SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-version                             |   Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-port                                |   UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-timeout                             |   Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-retries                             |   Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --maxrepetitions                           |   Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --subsetleef                               |   How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-autoreduce                          |    Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-force-getnext                       |   Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-cache-file                          |   Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-username                            |   SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authpassphrase                           |   SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authprotocol                             |   SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --privpassphrase                           |   SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --privprotocol                             |   SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --contextname                              |   SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --contextengineid                          |   SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given  as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --securityengineid                         |   SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-errors-exit                         |   Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-tls-transport                       |   Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-our-identity                    |   X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-tls-their-identity                  |   X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-their-hostname                  |   Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-trust-cert                      |   A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also  define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
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

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                                                                                                   |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters  |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --use-ucd          |   Use UCD mib for CPU average.                                                                                                |
| --warning-average  |   Warning threshold average CPU utilization.                                                                                  |
| --critical-average |   Critical  threshold average CPU utilization.                                                                                |
| --warning-core     |   Warning thresholds for each CPU core                                                                                        |
| --critical-core    |   Critical thresholds for each CPU core                                                                                       |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option            | Description                                                                                                                                            |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                            |
| --warning-*       |   Warning threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.     |
| --critical-*      |   Critical threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.    |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Option                                          | Description                                                                                                                                                                                                                                     |
|:------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                     |
| --memcached                                     |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server                                  |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute                               |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                                      |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file                                 |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration                                 |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir                                 |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix                              |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd                          |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format                              |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key                                 |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher                              |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-usage                                 |   Warning threshold.                                                                                                                                                                                                                            |
| --critical-usage                                |   Critical threshold.                                                                                                                                                                                                                           |
| --warning-access                                |   Warning threshold.                                                                                                                                                                                                                            |
| --critical-access                               |   Critical threshold. Check if storage is readOnly: --critical-access=readOnly                                                                                                                                                                  |
| --add-access                                    |   Check storage access (readOnly, readWrite).                                                                                                                                                                                                   |
| --units                                         |   Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                                                |
| --free                                          |   Thresholds are on free space left.                                                                                                                                                                                                            |
| --storage                                       |   Set the storage (number expected) example: 1, 2,... (empty means 'check all storage').                                                                                                                                                        |
| --name                                          |   Allows to use storage name with option --storage instead of storage oid index.                                                                                                                                                                |
| --regexp                                        |   Allows to use regexp to filter storage (with option --name).                                                                                                                                                                                  |
| --regexp-insensitive                            |   Allows to use regexp non case-sensitive (with --regexp).                                                                                                                                                                                      |
| --path-best-match                               |   Allows to select best path mount point (with --name).                                                                                                                                                                                         |
| --reload-cache-time                             |   Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                   |
| --oid-filter                                    |   Choose OID used to filter storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                                                                                                                         |
| --oid-display                                   |   Choose OID used to display storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                                                                                                                        |
| --display-transform-src --display-transform-dst |   Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run'  will replace all occurrences of 'dev' with 'run'                                               |
| --show-cache                                    |   Display cache storage data.                                                                                                                                                                                                                   |
| --space-reservation                             |   Some filesystem has space reserved (like ext4 for root). The value is in percent of total (default: none) (results like 'df' command).                                                                                                        |
| --filter-duplicate                              |   Filter duplicate storages (in used size and total size).                                                                                                                                                                                      |
| --filter-storage-type                           |   Filter storage types with a regexp (default: '^(hrStorageFixedDisk\|hrStorageNetworkDisk\|hrFSBerkeleyFFS)$').                                                                                                                                |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                               |
|:-----------|:------------------------------------------|
| --warning  |   Warning threshold (1min,5min,15min).    |
| --critical |   Critical threshold (1min,5min,15min).   |
| --average  |   Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                                                                                                                                                                                          |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                          |
| --units                  |   Units of thresholds (default: '%') ('%', 'absolute') (deprecated. Please use new counters directly)                                                                                                                                                                                                                                |
| --free                   |   Thresholds are on free space left (deprecated. Please use new counters directly)                                                                                                                                                                                                                                                   |
| --swap                   |   Check swap also.                                                                                                                                                                                                                                                                                                                   |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%),  'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'shared' (B).                                                                                                                                                                      |
| --patch-redhat           |   If using Red Hat distribution with net-snmp \>= 5.7.2-43 and net-snmp \< 5.7.2-47. But you should update net-snmp!!!!  This version: used = memTotalReal - memAvailReal // free = memAvailReal  Others versions: used = memTotalReal - memAvailReal - memBuffer - memCached // free = total - used                                 |
| --force-64bits-counters  |   Use this option to monitor a server/device that has more than 2 TB of RAM, the maximum size of a signed 32 bits integer. If you omit it you'll get the remainder of the Euclidean division of the actual value by 2 TB. NB: it cannot work with version 1 of SNMP protocol. 64 bits counters are supported starting version 2c.    |

</TabItem>
<TabItem value="Neighbor-Connections" label="Neighbor-Connections">

| Option                | Description                                                                                                                   |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters     |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-connection  |   Warning threshold.                                                                                                          |
| --critical-connection |   Critical threshold.                                                                                                         |

</TabItem>
<TabItem value="Packet-Errors-Global" label="Packet-Errors-Global">

| Option                                          | Description                                                                                                                                                                                                                                                                                  |
|:------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                  |
| --memcached                                     |   Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server                                  |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            |
| --redis-attribute                               |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    |
| --redis-db                                      |   Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file                                 |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                       |
| --memexpiration                                 |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir                                 |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     |
| --statefile-suffix                              |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                             |
| --statefile-concat-cwd                          |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                |
| --statefile-format                              |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      |
| --statefile-key                                 |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               |
| --statefile-cipher                              |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                         |
| --add-global                                    |   Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status                                    |   Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status                             |   Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic                                   |   Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors                                    |   Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast                                      |   Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed                                     |   Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume                                    |   Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics                                 |   If the expression is true, metrics are checked (default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status                                |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                   |
| --critical-status                               |   Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                        |
| --warning-* --critical-*                        |   Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic                                 |   Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      |
| --units-errors                                  |   Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          |
| --units-cast                                    |   Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      |
| --nagvis-perfdata                               |   Display traffic perfdata to be compatible with NagVis widget.                                                                                                                                                                                                                              |
| --interface                                     |   Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored.  To filter on interface names, see --name.                                                                                                                                    |
| --name                                          |   With this option, the interfaces will be filtered by name (given in option --interface) instead of OID index. The name matching mode supports regular expressions.                                                                                                                         |
| --regex-id                                      |   With this option, interface IDs will be filtered using the --interface parameter as a regular expression instead of a list of IDs.                                                                                                                                                         |
| --speed                                         |   Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      |   Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     |   Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl                                 |   Get interface speed configuration for interfaces of type 'ADSL' and 'VDSL2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                        |
| --force-counters64                              |   Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32                              |   Force to use 32-bits counters (even with SNMP versions 2c and 3). To use when 64 bits counters are buggy.                                                                                                                                                                                  |
| --reload-cache-time                             |   Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    |   Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                |
| --oid-display                                   |   Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       |
| --oid-extra-display                             |   Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst |   Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens'  will replace all occurrences of 'eth' with 'ens'                                                                                          |
| --show-cache                                    |   Display cache interface data.                                                                                                                                                                                                                                                              |

</TabItem>
<TabItem value="Status" label="Status">

| Option            | Description                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                 |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{health}, %{status}                                                      |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%{health} !~ /Healthy/ \|\| %{status} !~ /running/'). You can use the following variables: %{health}, %{status}   |
| --warning-uptime  |   Warning thresholds in seconds.                                                                                                                                                            |
| --critical-uptime |   Critical thresholds in seconds.                                                                                                                                                           |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Option                                          | Description                                                                                                                                                                                                                                                                                  |
|:------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                  |
| --memcached                                     |   Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server                                  |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            |
| --redis-attribute                               |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    |
| --redis-db                                      |   Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file                                 |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                       |
| --memexpiration                                 |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir                                 |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     |
| --statefile-suffix                              |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                             |
| --statefile-concat-cwd                          |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                |
| --statefile-format                              |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      |
| --statefile-key                                 |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               |
| --statefile-cipher                              |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                         |
| --add-global                                    |   Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status                                    |   Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status                             |   Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic                                   |   Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors                                    |   Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast                                      |   Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed                                     |   Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume                                    |   Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics                                 |   If the expression is true, metrics are checked (default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status                                |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                   |
| --critical-status                               |   Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                        |
| --warning-* --critical-*                        |   Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic                                 |   Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      |
| --units-errors                                  |   Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          |
| --units-cast                                    |   Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      |
| --nagvis-perfdata                               |   Display traffic perfdata to be compatible with NagVis widget.                                                                                                                                                                                                                              |
| --interface                                     |   Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored.  To filter on interface names, see --name.                                                                                                                                    |
| --name                                          |   With this option, the interfaces will be filtered by name (given in option --interface) instead of OID index. The name matching mode supports regular expressions.                                                                                                                         |
| --regex-id                                      |   With this option, interface IDs will be filtered using the --interface parameter as a regular expression instead of a list of IDs.                                                                                                                                                         |
| --speed                                         |   Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      |   Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     |   Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl                                 |   Get interface speed configuration for interfaces of type 'ADSL' and 'VDSL2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                        |
| --force-counters64                              |   Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32                              |   Force to use 32-bits counters (even with SNMP versions 2c and 3). To use when 64 bits counters are buggy.                                                                                                                                                                                  |
| --reload-cache-time                             |   Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    |   Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                |
| --oid-display                                   |   Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       |
| --oid-extra-display                             |   Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst |   Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens'  will replace all occurrences of 'eth' with 'ens'                                                                                          |
| --show-cache                                    |   Display cache interface data.                                                                                                                                                                                                                                                              |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters      |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                     |
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-uptime       |   Warning threshold.                                                                                                                                                                                                                            |
| --critical-uptime      |   Critical threshold.                                                                                                                                                                                                                           |
| --add-sysdesc          |   Display system description.                                                                                                                                                                                                                   |
| --force-oid            |   Can choose your OID (numeric format only).                                                                                                                                                                                                    |
| --check-overload       |   Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.                                                                                          |
| --reboot-window        |   To be used with check-overload option. Time in milliseconds (default: 5000) You increase the chance of not missing a reboot if you decrease that value.                                                                                       |
| --unit                 |   Select the time unit for thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.                                                                                                 |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_riverbed_interceptor.pl \
	--plugin=network::riverbed::interceptor::snmp::plugin \
	--mode=interfaces \
	--help
```
