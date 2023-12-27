---
id: network-stormshield-snmp
title: Stormshield SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Stormshield SNMP** brings a host template:

* **Net-Stormshield-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Stormshield-SNMP-custom" label="Net-Stormshield-SNMP-custom">

| Service Alias   | Service Template                            | Service Description                                                                                                                                         |
|:----------------|:--------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu-Detailed    | Net-Stormshield-Cpu-Detailed-SNMP-custom    | Check the detailed rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU. |
| Hardware        | Net-Stormshield-Hardware-SNMP-custom        | Check hardware.                                                                                                                                              |
| Load            | Net-Stormshield-Load-SNMP-custom            | Check the server load average.                                                                                                                               |
| Memory          | Net-Stormshield-Memory-SNMP-custom          | Check the rate of the utilization of memory.                                                                                                                 |
| Memory-Detailed | Net-Stormshield-Memory-Detailed-SNMP-custom | Check detailed memory usage.                                                                                                                                 |
| Swap            | Net-Stormshield-Swap-SNMP-custom            | Check virtual memory usage.                                                                                                                                  |

> The services listed above are created automatically when the **Net-Stormshield-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias        | Service Template                                 | Service Description                                                                                                                                | Discovery  |
|:---------------------|:-------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------:|
| Connections          | Net-Stormshield-Connections-SNMP-custom          | Check connections setup. rate                                                                                                                       |            |
| Cpu                  | Net-Stormshield-Cpu-SNMP-custom                  | Check the rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU. |            |
| Disk-Global          | Net-Stormshield-Disk-Global-SNMP-custom          | Check the rate of free space on disks. For each checks the mount point of disks will appear.                                                        |            |
| Ha-Status            | Net-Stormshield-Ha-Status-SNMP-custom            | Check HA status.                                                                                                                                    |            |
| Health               | Net-Stormshield-Health-SNMP-custom               | Check health.                                                                                                                                       |            |
| Qos                  | Net-Stormshield-Qos-SNMP-custom                  | Check QoS usage.                                                                                                                                    |            |
| Traffic-Generic-Id   | Net-Stormshield-Traffic-Generic-Id-SNMP-custom   | Check traffic of an network interface.                                                                                                              |            |
| Traffic-Generic-Name | Net-Stormshield-Traffic-Generic-Name-SNMP-custom | Check traffic of an network interface.                                                                                                              |            |
| Traffic-Global       | Net-Stormshield-Traffic-Global-SNMP-custom       | Check traffic of multiple network interfaces.                                                                                                       | X          |
| Vpn-Status           | Net-Stormshield-Vpn-Status-SNMP-custom           | Check VPN states.                                                                                                                                   |            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                         |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Stormshield-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                         | Description                                                   |
|:----------------------------------|:--------------------------------------------------------------|
| Net-Stormshield-SNMP-Traffic-Name | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Metric name | Unit  |
|:------------|:------|
| udp         | con   |
| tcp         | con   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Metric name                          | Unit  |
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

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| storage.partitions.count              | count |
| *disk_name*#storage.space.usage.bytes | B     |
| *disk_name*#storage.access.count      | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Ha-Status" label="Ha-Status">

| Metric name    | Unit  |
|:---------------|:------|
| dead_nodes     | N/A   |
| *nodes*#state  | N/A   |
| *nodes*#health | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Hardware" label="Hardware">

Coming soon

</TabItem>
<TabItem value="Health" label="Health">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| *firewalls*~*services*#service-status | N/A   |

</TabItem>
<TabItem value="Load" label="Load">

| Metric name            | Unit  |
|:-----------------------|:------|
| load.1m.average.count  | count |
| load.5m.average.count  | count |
| load.15m.average.count | count |
| load.1m.count          | count |
| load.5m.count          | count |
| load.15m.count         | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name         | Unit  |
|:--------------------|:------|
| memory.cached.bytes | B     |
| memory.usage.bytes  | B     |
| swap.usage.bytes    | B     |

</TabItem>
<TabItem value="Memory-Detailed" label="Memory-Detailed">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| memory.usage.percentage          | %     |
| memory.protected_host.percentage | %     |
| memory.fragmented.percentage     | %     |
| memory.connections.percentage    | %     |
| memory.icmp.percentage           | %     |
| memory.data_tracking.percentage  | %     |
| memory.dynamic.percentage        | %     |
| memory.ether_state.percentage    | %     |

</TabItem>
<TabItem value="Qos" label="Qos">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| *qos*#qos.traffic.in.bitspersecond       | b/s   |
| *qos*#qos.traffic.in.percentage          | %     |
| *qos*#qos.traffic.in.peak.bitspersecond  | b/s   |
| *qos*#qos.traffic.out.bitspersecond      | b/s   |
| *qos*#qos.traffic.out.percentage         | %     |
| *qos*#qos.traffic.out.peak.bitspersecond | b/s   |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name           | Unit  |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Metric name                                          | Unit  |
|:-----------------------------------------------------|:------|
| *interface_name*#status                              | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond | b/s   |

> Applies to the following service templates: Traffic-Generic-Id, Traffic-Generic-Name, Traffic-Global

</TabItem>
<TabItem value="Vpn-Status" label="Vpn-Status">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| vpn.detected.count                  | count |
| *vpn*#status                        | N/A   |
| *vpn*#vpn.traffic.bitspersecond     | b/s   |
| *vpn*#vpn.traffic.in.bitspersecond  | b/s   |
| *vpn*#vpn.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

The SNMP service must be configured and activated on the host. Please refer to the official documentation from the constructor/editor.

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
dnf install centreon-pack-network-stormshield-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-stormshield-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-stormshield-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-stormshield-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Stormshield SNMP** connector through
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
dnf install centreon-plugin-Network-Stormshield-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Stormshield-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-stormshield-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Stormshield-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Stormshield-SNMP-custom** template to the host.

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                          | Default value     | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGTCP   | Warning threshold                                                                                  |                   |             |
| CRITICALTCP  | Critical threshold                                                                                 |                   |             |
| WARNINGUDP   | Warning threshold                                                                                  |                   |             |
| CRITICALUDP  | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold average CPU utilization                                                          | 80                |             |
| CRITICAL     | Critical threshold average CPU utilization                                                         | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIDLE  | Warning threshold in percent                                                                       | 20:               |             |
| CRITICALIDLE | Critical threshold in percent                                                                      | 10:               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro        | Description                                                                                                                                                                                    | Default value     | Mandatory   |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage')                                                                                                          | .*                |             |
| TRANSFORMSRC | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run' |                   |             |
| TRANSFORMDST | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run' |                   |             |
| WARNING      | Warning threshold                                                                                                                                                                              | 80                |             |
| CRITICAL     | Critical threshold                                                                                                                                                                             | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                             | --verbose         |             |

</TabItem>
<TabItem value="Ha-Status" label="Ha-Status">

| Macro             | Description                                                                                                                   | Default value     | Mandatory   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGDEADNODES  | Warning threshold on deadnode (absolute unless --percent is used)                                                             |                   |             |
| CRITICALDEADNODES | Critical threshold on deadnode (absolute unless --percent is used)                                                            |                   |             |
| WARNINGHEALTH     | Warning threshold on health level (example: --warning 90:)                                                                    |                   |             |
| CRITICALHEALTH    | Critical threshold on health level (example --critical 80:)                                                                   |                   |             |
| WARNINGSTATE      | Set warning threshold for state. You can use the following variables: %{state}, %{role}                                       |                   |             |
| CRITICALSTATE     | Set critical threshold for state. (default: '%{state} =~ /offline/i'). You can use the following variables: %{state}, %{role} |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                            | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'disk', 'fan', 'psu', 'temperature'              |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Health" label="Health">

| Macro                 | Description                                                                                                                                                 | Default value         | Mandatory   |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| UNKNOWNSERVICESTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{health}, %{service}                                     |                       |             |
| WARNINGSERVICESTATUS  | Define the conditions to match for the status to be WARNING (default: '%{health} =~ /minor/i'). You can use the following variables: %{health}, %{service}  | %{health} =~ /minor/i |             |
| CRITICALSERVICESTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{health} =~ /major/i'). You can use the following variables: %{health}, %{service} | %{health} =~ /major/i |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                          | --verbose             |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold (1min,5min,15min)                                                                | 4,3,2             |             |
| CRITICAL     | Critical threshold (1min,5min,15min)                                                               | 6,5,4             |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                       | 80                |             |
| CRITICAL     | Critical threshold in percent                                                                      | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Memory-Detailed" label="Memory-Detailed">

| Macro              | Description                                                                                        | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONN        | Thresholds                                                                                         |                   |             |
| CRITICALCONN       | Thresholds                                                                                         |                   |             |
| WARNINGDTRACK      | Thresholds                                                                                         |                   |             |
| CRITICALDTRACK     | Thresholds                                                                                         |                   |             |
| WARNINGDYN         | Thresholds                                                                                         |                   |             |
| CRITICALDYN        | Thresholds                                                                                         |                   |             |
| WARNINGETHERSTATE  | Thresholds                                                                                         |                   |             |
| CRITICALETHERSTATE | Thresholds                                                                                         |                   |             |
| WARNINGFRAG        | Thresholds                                                                                         |                   |             |
| CRITICALFRAG       | Thresholds                                                                                         |                   |             |
| WARNINGHOST        | Thresholds                                                                                         |                   |             |
| CRITICALHOST       | Thresholds                                                                                         |                   |             |
| WARNINGICMP        | Thresholds                                                                                         |                   |             |
| CRITICALICMP       | Thresholds                                                                                         |                   |             |
| WARNINGTOTAL       | Thresholds                                                                                         |                   |             |
| CRITICALTOTAL      | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Qos" label="Qos">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             | Filter by QoS name (can be a regexp)                                                               |                   |             |
| SPEEDIN                | Set interface speed for incoming traffic (in Mb)                                                   |                   |             |
| SPEEDOUT               | Set interface speed for outgoing traffic (in Mb)                                                   |                   | X           |
| WARNINGTRAFFICIN       | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICIN      | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICINPEAK   | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICINPEAK  | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICINPRCT   | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICINPRCT  | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICOUT      | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICOUT     | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICOUTPEAK  | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICOUTPEAK | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICOUTPRCT  | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICOUTPRCT | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Thresholds                                                                                         | 10                |             |
| CRITICAL     | Thresholds                                                                                         | 30                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACEID  | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')          |                   |             |
| WARNINGIN    | Thresholds                                                                                         | 80                |             |
| CRITICALIN   | Thresholds                                                                                         | 90                |             |
| WARNINGOUT   | Thresholds                                                                                         | 80                |             |
| CRITICALOUT  | Thresholds                                                                                         | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Macro         | Description                                                                                        | Default value     | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')          |                   |             |
| WARNINGIN     | Thresholds                                                                                         | 80                |             |
| CRITICALIN    | Thresholds                                                                                         | 90                |             |
| WARNINGOUT    | Thresholds                                                                                         | 80                |             |
| CRITICALOUT   | Thresholds                                                                                         | 90                |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro          | Description                                                                                                                                                                                                         | Default value     | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER         | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                                                           | .*                |             |
| WARNINGIN      | Thresholds                                                                                                                                                                                                          | 80                |             |
| CRITICALIN     | Thresholds                                                                                                                                                                                                          | 90                |             |
| WARNINGOUT     | Thresholds                                                                                                                                                                                                          | 80                |             |
| CRITICALOUT    | Thresholds                                                                                                                                                                                                          | 90                |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                  | --verbose         |             |

</TabItem>
<TabItem value="Vpn-Status" label="Vpn-Status">

| Macro               | Description                                                                                                                                                    | Default value      | Mandatory   |
|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| FILTERID            | Filter by ID (regexp can be used)                                                                                                                              |                    |             |
| FILTERSRCIP         | Filter by src ip (regexp can be used)                                                                                                                          |                    |             |
| FILTERDSTIP         | Filter by dst ip (regexp can be used)                                                                                                                          |                    |             |
| WARNINGSTATUS       | Define the conditions to match for the status to be WARNING (default: '%{state} eq "dead"'). You can use the following variables: %{state}, %{srcIp}, %{dstIp} | %{state} eq "dead" |             |
| CRITICALSTATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{srcIp}, %{dstIp}                                |                    |             |
| WARNINGTRAFFIC      | Thresholds                                                                                                                                                     |                    |             |
| CRITICALTRAFFIC     | Thresholds                                                                                                                                                     |                    |             |
| WARNINGTRAFFICIN    | Thresholds                                                                                                                                                     |                    |             |
| CRITICALTRAFFICIN   | Thresholds                                                                                                                                                     |                    |             |
| WARNINGTRAFFICOUT   | Thresholds                                                                                                                                                     |                    |             |
| CRITICALTRAFFICOUT  | Thresholds                                                                                                                                                     |                    |             |
| WARNINGVPNDETECTED  | Thresholds                                                                                                                                                     |                    |             |
| CRITICALVPNDETECTED | Thresholds                                                                                                                                                     |                    |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                             | --verbose          |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_stormshield_snmp.pl \
	--plugin=network::stormshield::snmp::plugin \
	--mode=vpn-status \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-id='' \
	--filter-src-ip='' \
	--filter-dst-ip='' \
	--warning-status='%{state} eq "dead"' \
	--critical-status='' \
	--warning-traffic='' \
	--critical-traffic='' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--warning-vpn-detected='' \
	--critical-vpn-detected='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: detected: 85 All vpn are ok | 'vpn.detected.count'=85;;;0;'*vpn*#vpn.traffic.bitspersecond'=b/s;;;;'*vpn*#vpn.traffic.in.bitspersecond'=b/s;;;;'*vpn*#vpn.traffic.out.bitspersecond'=b/s;;;;
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
/usr/lib/centreon/plugins/centreon_stormshield_snmp.pl \
	--plugin=network::stormshield::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                    | Linked service template                                                                                                                              |
|:----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/snmp/mode/connections.pm)]        | Net-Stormshield-Connections-SNMP-custom                                                                                                              |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpu.pm)]                                   | Net-Stormshield-Cpu-SNMP-custom                                                                                                                      |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpudetailed.pm)]                  | Net-Stormshield-Cpu-Detailed-SNMP-custom                                                                                                             |
| ha-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/snmp/mode/hanodes.pm)]               | Net-Stormshield-Ha-Status-SNMP-custom                                                                                                                |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/snmp/mode/hardware.pm)]              | Net-Stormshield-Hardware-SNMP-custom                                                                                                                 |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/snmp/mode/health.pm)]                  | Net-Stormshield-Health-SNMP-custom                                                                                                                   |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                     | Net-Stormshield-Traffic-Generic-Id-SNMP-custom<br />Net-Stormshield-Traffic-Generic-Name-SNMP-custom<br />Net-Stormshield-Traffic-Global-SNMP-custom |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]            | Used for service discovery                                                                                                                           |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/loadaverage.pm)]                          | Net-Stormshield-Load-SNMP-custom                                                                                                                     |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/freebsd/snmp/mode/memory.pm)]                           | Net-Stormshield-Memory-SNMP-custom                                                                                                                   |
| memory-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/snmp/mode/memorydetailed.pm)] | Net-Stormshield-Memory-Detailed-SNMP-custom                                                                                                          |
| qos [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/snmp/mode/qos.pm)]                        | Net-Stormshield-Qos-SNMP-custom                                                                                                                      |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/storage.pm)]                           | Net-Stormshield-Disk-Global-SNMP-custom                                                                                                              |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/swap.pm)]                                 | Net-Stormshield-Swap-SNMP-custom                                                                                                                     |
| vpn-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/snmp/mode/vpnstatus.pm)]           | Net-Stormshield-Vpn-Status-SNMP-custom                                                                                                               |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
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
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-force-getnext                       | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

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
| --warning-*            | Warning threshold. Can be: 'tcp', 'udp'                                                                                                                                                                                                       |
| --critical-*           | Critical threshold. Can be: 'tcp', 'udp'                                                                                                                                                                                                      |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                   |
|:-------------------|:----------------------------------------------|
| --use-ucd          | Use UCD mib for cpu average.                  |
| --warning-average  | Warning threshold average CPU utilization.    |
| --critical-average | Critical threshold average CPU utilization.   |
| --warning-core     | Warning thresholds for each CPU core          |
| --critical-core    | Critical thresholds for each CPU core         |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

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
| --warning-*            | Warning threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                              |
| --critical-*           | Critical threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Option                                          | Description                                                                                                                                                                                                                                   |
|:------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file                                 | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration                                 | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix                              | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-usage                                 | Warning threshold.                                                                                                                                                                                                                            |
| --critical-usage                                | Critical threshold.                                                                                                                                                                                                                           |
| --warning-access                                | Warning threshold.                                                                                                                                                                                                                            |
| --critical-access                               | Critical threshold. Check if storage is readOnly: --critical-access=readOnly                                                                                                                                                                  |
| --add-access                                    | Check storage access (readOnly, readWrite).                                                                                                                                                                                                   |
| --units                                         | Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                                                |
| --free                                          | Thresholds are on free space left.                                                                                                                                                                                                            |
| --storage                                       | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage').                                                                                                                                                        |
| --name                                          | Allows to use storage name with option --storage instead ofstorage oid index.                                                                                                                                                                 |
| --regexp                                        | Allows to use regexp to filter storage (with option --name).                                                                                                                                                                                  |
| --regexp-insensitive                            | Allows to use regexp non case-sensitive (with --regexp).                                                                                                                                                                                      |
| --path-best-match                               | Allows to select best path mount point (with --name).                                                                                                                                                                                         |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                   |
| --oid-filter                                    | Choose OID used to filter storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                                                                                                                         |
| --oid-display                                   | Choose OID used to display storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                                                                                                                        |
| --display-transform-src --display-transform-dst | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run'                                                |
| --show-cache                                    | Display cache storage datas.                                                                                                                                                                                                                  |
| --space-reservation                             | Some filesystem has space reserved (like ext4 for root). The value is in percent of total (default: none) (results like 'df' command).                                                                                                        |
| --filter-duplicate                              | Filter duplicate storages (in used size and total size).                                                                                                                                                                                      |
| --filter-storage-type                           | Filter storage types with a regexp (default: '^(hrStorageFixedDisk\|hrStorageNetworkDisk\|hrFSBerkeleyFFS)$').                                                                                                                                |

</TabItem>
<TabItem value="Ha-Status" label="Ha-Status">

| Option                | Description                                                                                                                      |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| --filter-node         | Filter name with regexp (based on serial).                                                                                       |
| --warning-health      | Warning threshold on health level (example: --warning 90:).                                                                      |
| --critical-health     | Critical threshold on health level (example --critical 80:).                                                                     |
| --warning-dead-nodes  | Warning threshold on deadnode (absolute unless --percent is used).                                                               |
| --critical-dead-nodes | Critical threshold on deadnode (absolute unless --percent is used).                                                              |
| --warning-state       | Set warning threshold for state. You can use the following variables: %{state}, %{role}.                                         |
| --critical-state      | Set critical threshold for state. (default: '%{state} =~ /offline/i'). You can use the following variables: %{state}, %{role}.   |
| --percent             | Set this option if you want to warn on percent .                                                                                 |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                           |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'disk', 'fan', 'psu', 'temperature'.                                                                                                                                |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan). You can also exclude items from specific instances: --filter=fan,1                                                                         |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                            |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='disk,WARNING,missing'   |
| --warning            | Set warning threshold for 'temperature', 'fan' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,40'                                                                                                 |
| --critical           | Set critical threshold for 'temperature', 'fan' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,50'                                                                                               |

</TabItem>
<TabItem value="Health" label="Health">

| Option                    | Description                                                                                                                                                    |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-serial           | Filter by firewall serial (can be a regexp).                                                                                                                   |
| --unknown-service-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{health}, %{service}                                        |
| --warning-service-status  | Define the conditions to match for the status to be WARNING (default: '%{health} =~ /minor/i'). You can use the following variables: %{health}, %{service}     |
| --critical-service-status | Define the conditions to match for the status to be CRITICAL (default: '%{health} =~ /major/i'). You can use the following variables: %{health}, %{service}    |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                             |
|:-----------|:----------------------------------------|
| --warning  | Warning threshold (1min,5min,15min).    |
| --critical | Critical threshold (1min,5min,15min).   |
| --average  | Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option          | Description                                           |
|:----------------|:------------------------------------------------------|
| --warning       | Warning threshold in percent.                         |
| --critical      | Critical threshold in percent.                        |
| --swap          | Check swap also.                                      |
| --warning-swap  | Warning threshold in percent.                         |
| --critical-swap | Critical threshold in percent.                        |
| --no-swap       | Threshold if no active swap (default: 'critical').    |

</TabItem>
<TabItem value="Memory-Detailed" label="Memory-Detailed">

| Option                   | Description                                                                                    |
|:-------------------------|:-----------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'total', 'host', 'frag', 'conn', 'icmp', 'dtrack', 'dyn', 'etherstate'.    |

</TabItem>
<TabItem value="Qos" label="Qos">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-name            | Filter by QoS name (can be a regexp).                                                                                                                                                                                                         |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                             |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                             |
| --warning-* --critical-* | Thresholds. Can be: 'traffic-in', 'traffic-in-prct', 'traffic-in-peak', 'traffic-out', 'traffic-out-prct', 'traffic-out-peak'.                                                                                                                |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --no-swap                | Threshold if no active swap (default: 'critical').                      |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).    |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                                          | Description                                                                                                                                                                                                                                                                                |
|:------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file                                 | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                        |
| --memexpiration                                 | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     |
| --statefile-suffix                              | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                             |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                         |
| --add-global                                    | Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status                                    | Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status                             | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast                                      | Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed                                     | Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume                                    | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics                                 | If the expression is true, metrics are checked (default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                   |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                        |
| --warning-* --critical-*                        | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic                                 | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      |
| --units-errors                                  | Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          |
| --units-cast                                    | Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      |
| --nagvis-perfdata                               | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              |
| --interface                                     | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                 |
| --name                                          | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                               |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl                                 | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            |
| --force-counters64                              | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32                              | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Vpn-Status" label="Vpn-Status">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-id              | Filter by ID (regexp can be used).                                                                                                                                                                                                            |
| --filter-src-ip          | Filter by src ip (regexp can be used).                                                                                                                                                                                                        |
| --filter-dst-ip          | Filter by dst ip (regexp can be used).                                                                                                                                                                                                        |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{srcIp}, %{dstIp}                                                                                                                |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: '%{state} eq "dead"'). You can use the following variables: %{state}, %{srcIp}, %{dstIp}                                                                                |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{srcIp}, %{dstIp}                                                                                                               |
| --warning-* --critical-* | Thresholds. Can be: 'vpn-detected', 'traffic', 'traffic-in', 'traffic-out'.                                                                                                                                                                   |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_stormshield_snmp.pl \
	--plugin=network::stormshield::snmp::plugin \
	--mode=vpn-status \
	--help
```
