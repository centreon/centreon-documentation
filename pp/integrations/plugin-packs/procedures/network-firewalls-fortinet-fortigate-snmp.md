---
id: network-firewalls-fortinet-fortigate-snmp
title: Fortinet Fortigate
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Fortinet Fortigate** brings a host template:

* **Net-Fortinet-Fortigate-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Fortinet-Fortigate-SNMP-custom" label="Net-Fortinet-Fortigate-SNMP-custom">

| Service Alias | Service Template                            | Service Description                                                                                           |
|:--------------|:--------------------------------------------|:--------------------------------------------------------------------------------------------------------------|
| Cpu           | Net-Fortinet-Fortigate-Cpu-SNMP-custom      | Check the rate of utilization of CPU for the machine. This check can give the average utilization rate of the CPU |
| Memory        | Net-Fortinet-Fortigate-Memory-SNMP-custom   | Check memory usage                                                                                            |
| Sessions      | Net-Fortinet-Fortigate-Sessions-SNMP-custom | Check current active sessions                                                                                 |

> The services listed above are created automatically when the **Net-Fortinet-Fortigate-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias    | Service Template                                    | Service Description                                          | Discovery  |
|:-----------------|:----------------------------------------------------|:-------------------------------------------------------------|:----------:|
| Cluster-Status   | Net-Fortinet-Fortigate-Cluster-Status-SNMP-custom   | Check cluster status                                         |            |
| Disk             | Net-Fortinet-Fortigate-Disk-SNMP-custom             | Check system disk usage                                      |            |
| Hardware         | Net-Fortinet-Fortigate-Hardware-SNMP-custom         | Check hardware sensors                                       |            |
| Ips-Stats-Global | Net-Fortinet-Fortigate-Ips-Stats-Global-SNMP-custom | Check virtual domain IPS statistics                          |            |
| SDWan            | Net-Fortinet-Fortigate-SDWan-SNMP-custom            | Check SDWan links                                            |            |
| Traffic-Global   | Net-Fortinet-Fortigate-Traffic-Global-SNMP-custom   | Check traffic of multiple network interfaces                 | X          |
| Traffic-Id       | Net-Fortinet-Fortigate-Traffic-Id-SNMP-custom       | Check traffic of a network interface                        |            |
| Traffic-Name     | Net-Fortinet-Fortigate-Traffic-Name-SNMP-custom     | Check traffic of a network interface                        |            |
| VPN-Global       | Net-Fortinet-Fortigate-VPN-Global-SNMP-custom       | Check the state of VPN links                                        |            |
| Vdom-Usage       | Net-Fortinet-Fortigate-Vdom-Usage-SNMP-custom       | Check virtual domains                                        |            |
| Virus            | Net-Fortinet-Fortigate-Virus-SNMP-custom            | Check blocked and detected virus on multiple virtual domains |            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Fortinet-Fortigate-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                                | Description                                                   |
|:-----------------------------------------|:--------------------------------------------------------------|
| Net-Fortinet-Fortigate-SNMP-Traffic-Name | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| cluster.nodes.count                     | count |
| cluster.nodes.synchronized.count        | count |
| cluster.nodes.unsynchronized.count      | count |
| cluster.checksums.total.count           | count |
| *nodes*~status                          | N/A   |
| *nodes*~node.cpu.utilization.percentage | %     |
| *nodes*~node.memory.usage.percentage    | %     |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                                  | Unit  |
|:---------------------------------------------|:------|
| cpu.utilization.percentage                   | %     |
| *cpu_core*#core.cpu.utilization.percentage   | %     |
| *cluster*#cluster.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk" label="Disk">

| Metric name               | Unit  |
|:--------------------------|:------|
| storage.space.usage.bytes | B     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name              | Unit  |
|:-------------------------|:------|
| hardware.sensors.measure | N/A   |

</TabItem>
<TabItem value="Ips-Stats-Global" label="Ips-Stats-Global">

| Metric name                                                 | Unit  |
|:------------------------------------------------------------|:------|
| *domain*#domain.intrusions.detected.count                   | count |
| *domain*#domain.intrusions.blocked.count                    | count |
| *domain*#domain.intrusions.detected.critical.severity.count | count |
| *domain*#domain.intrusions.detected.high.severity.count     | count |
| *domain*#domain.intrusions.detected.medium.severity.count   | count |
| *domain*#domain.intrusions.detected.low.severity.count      | count |
| *domain*#domain.intrusions.detected.info.severity.count     | count |
| *domain*#domain.intrusions.detected.signature.count         | count |
| *domain*#domain.intrusions.detected.anomaly.count           | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                               | Unit  |
|:------------------------------------------|:------|
| memory.usage.bytes                        | B     |
| memory.free.bytes                         | B     |
| memory.usage.percentage                   | %     |
| *cluster*#cluster.memory.usage.percentage | %     |

</TabItem>
<TabItem value="SDWan" label="SDWan">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| *sdwan*~status                          | N/A   |
| *sdwan*~sdwan.traffic.in.bitspersecond  | b/s   |
| *sdwan*~sdwan.traffic.out.bitspersecond | b/s   |
| *sdwan*~sdwan.traffic.bi.bitspersecond  | b/s   |
| *sdwan*~sdwan.latency.milliseconds      | ms    |
| *sdwan*~sdwan.jitter.milliseconds       | ms    |
| *sdwan*~sdwan.packetloss.percentage     | %     |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric name                | Unit  |
|:---------------------------|:------|
| sessions.active.count      | count |
| sessions.setup.1min.count  | count |
| sessions.setup.10min.count | count |
| sessions.setup.30min.count | count |
| sessions.setup.60min.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Metric name                                          | Unit  |
|:-----------------------------------------------------|:------|
| *interface_name*#status                              | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Id" label="Traffic-Id">

| Metric name                                          | Unit  |
|:-----------------------------------------------------|:------|
| *interface_name*#status                              | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Name" label="Traffic-Name">

| Metric name                                          | Unit  |
|:-----------------------------------------------------|:------|
| *interface_name*#status                              | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="VPN-Global" label="VPN-Global">

| Metric name                              | Unit     |
|:-----------------------------------------|:---------|
| *vd*~vpn.users.logged.count              | users    |
| *vd*~vpn.websessions.active.count        | sessions |
| *vd*~vpn.tunnels.active.count            | tunnels  |
| *vd*~*vpn*#status                        | N/A      |
| *vd*~*vpn*#vpn.traffic.in.bitspersecond  | b/s      |
| *vd*~*vpn*#vpn.traffic.out.bitspersecond | b/s      |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vdom-Usage" label="Vdom-Usage">

| Metric name                                     | Unit  |
|:------------------------------------------------|:------|
| virtualdomains.license.usage.count              | count |
| virtualdomains.license.free.count               | count |
| virtualdomains.license.usage.percentage         | %     |
| *vdom*~virtualdomain.cpu.utilization.percentage | %     |
| *vdom*~virtualdomain.memory.usage.percentage    | %     |
| *vdom*~virtualdomain.sessions.active.count      | count |
| *vdom*~virtualdomain.sessions.rate.persecond    | /s    |
| *vdom*~virtualdomain.traffic.in.bitspersecond   | b/s   |
| *vdom*~virtualdomain.traffic.out.bitspersecond  | b/s   |
| *vdom*~virtualdomain.policies.active.count      | count |
| *vdom*~status                                   | N/A   |

</TabItem>
<TabItem value="Virus" label="Virus">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| *domain*#domain.virus.detected.count     | count |
| *domain*#domain.virus.detected.persecond | /s    |
| *domain*#domain.virus.blocked.count      | count |
| *domain*#domain.virus.blocked.persecond  | /s    |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

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
dnf install centreon-pack-network-firewalls-fortinet-fortigate-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-firewalls-fortinet-fortigate-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-firewalls-fortinet-fortigate-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-firewalls-fortinet-fortigate-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Fortinet Fortigate** connector through
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
dnf install centreon-plugin-Network-Firewalls-Fortinet-Fortigate-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Firewalls-Fortinet-Fortigate-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-firewalls-fortinet-fortigate-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Firewalls-Fortinet-Fortigate-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Fortinet-Fortigate-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                   | Default value     | Mandatory   |
|:-----------------|:----------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Macro                  | Description                                                                                                                                                                                                                                 | Default value                                                 | Mandatory   |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------|:-----------:|
| WARNINGCPUUTILIZATION  | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALCPUUTILIZATION | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| WARNINGMEMORYUSAGE     | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALMEMORYUSAGE    | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{role} ne %{roleLast} or %{sync\_status} =~ /unsynchronized/'). You can use the following variables: %{serial}, %{hostname}, %{sync\_status}, %{role}, %{roleLast} | %{role} ne %{roleLast} or %{sync\_status} =~ /unsynchronized/ |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{serial}, %{hostname}, %{sync\_status}, %{role}, %{roleLast}                                                                             |                                                               |             |
| WARNINGSYNCHRONIZED    | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALSYNCHRONIZED   | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| WARNINGTOTALCHECKSUMS  | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALTOTALCHECKSUMS | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| WARNINGTOTALNODES      | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALTOTALNODES     | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| WARNINGUNSYNCHRONIZED  | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALUNSYNCHRONIZED | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                 | --verbose                                                     |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro                  | Description                                                                                 | Default value     | Mandatory   |
|:-----------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE         | Thresholds                                                                                  |                   |             |
| CRITICALAVERAGE        | Thresholds                                                                                  |                   |             |
| WARNINGCLUSTERAVERAGE  | Thresholds                                                                                  |                   |             |
| CRITICALCLUSTERAVERAGE | Thresholds                                                                                  |                   |             |
| WARNINGCORE            | Thresholds                                                                                  |                   |             |
| CRITICALCORE           | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Disk" label="Disk">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                |                   |             |
| CRITICAL     | Critical threshold in percent                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Ips-Stats-Global" label="Ips-Stats-Global">

| Macro                      | Description                                                                                 | Default value     | Mandatory   |
|:---------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                     | Filter virtual domain name (can be a regexp)                                                | .*                |             |
| WARNINGINTRUSIONSBLOCKED   | Thresholds                                                                                  |                   |             |
| CRITICALINTRUSIONSBLOCKED  | Thresholds                                                                                  |                   |             |
| WARNINGINTRUSIONSDETECTED  | Thresholds                                                                                  |                   |             |
| CRITICALINTRUSIONSDETECTED | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                    | Description                                                                                 | Default value     | Mandatory   |
|:-------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCLUSTERUSAGEPRCT  | Thresholds                                                                                  |                   |             |
| CRITICALCLUSTERUSAGEPRCT | Thresholds                                                                                  |                   |             |
| WARNINGUSAGE             | Thresholds                                                                                  |                   |             |
| CRITICALUSAGE            | Thresholds                                                                                    |                   |             |
| WARNINGUSAGEFREE         | Thresholds                                                                                  |                   |             |
| CRITICALUSAGEFREE        | Thresholds                                                                                  |                   |             |
| WARNINGUSAGEPRCT         | Thresholds                                                                                  |                   |             |
| CRITICALUSAGEPRCT        | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="SDWan" label="SDWan">

| Macro              | Description                                                                                                                                                                     | Default value      | Mandatory   |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| FILTERVDOMAIN      | Define which virtual domains should be monitored based on their names. This option will be treated as a regular expression.                                                                                                                              |                    |             |
| FILTERLINKNAME     | Define which SD-WAN links should be monitored based on their names. This option will be treated as a regular expression.                                                                                                                                   |                    |             |
| FILTERLINKID       | Define which SD-WAN links should be monitored based on their IDs. This option will be treated as a regular expression.                                                                                                                                     |                    |             |
| WARNINGJITTER      | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALJITTER     | Thresholds                                                                                                                                                                      |                    |             |
| WARNINGLATENCY     | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALLATENCY    | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{state} eq "down"'). You can use the following variables: %{state}, %{vdom}, %{id}, %{name}, %{ifName} | %{state} eq "down" |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{vdom}, %{id}, %{name}, %{ifName}                                  |                    |             |
| WARNINGTRAFFICBI   | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALTRAFFICBI  | Thresholds                                                                                                                                                                      |                    |             |
| WARNINGTRAFFICIN   | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALTRAFFICIN  | Thresholds                                                                                                                                                                      |                    |             |
| WARNINGTRAFFICOUT  | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALTRAFFICOUT | Thresholds                                                                                                                                                                      |                    |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                     |                    |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro              | Description                                                                                 | Default value     | Mandatory   |
|:-------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGACTIVE      | Thresholds                                                                                  |                   |             |
| CRITICALACTIVE     | Thresholds                                                                                  |                   |             |
| WARNINGSETUP10MIN  | Thresholds                                                                                  |                   |             |
| CRITICALSETUP10MIN | Thresholds                                                                                  |                   |             |
| WARNINGSETUP1MIN   | Thresholds                                                                                  |                   |             |
| CRITICALSETUP1MIN  | Thresholds                                                                                  |                   |             |
| WARNINGSETUP30MIN  | Thresholds                                                                                  |                   |             |
| CRITICALSETUP30MIN | Thresholds                                                                                  |                   |             |
| WARNINGSETUP60MIN  | Thresholds                                                                                  |                   |             |
| CRITICALSETUP60MIN | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro          | Description                                                                                                                                                                                                         | Default value                                | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|:-----------:|
| FILTER         | Define which interfaces to check (number expected). Example: 1,2... (empty means 'check all interfaces').                                                                                                                           | .*                                           |             |
| WARNINGIN      | Thresholds                                                                                                                                                                                                          |                                              |             |
| CRITICALIN     | Thresholds                                                                                                                                                                                                          |                                              |             |
| WARNINGOUT     | Thresholds                                                                                                                                                                                                          |                                              |             |
| CRITICALOUT    | Thresholds                                                                                                                                                                                                          |                                              |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} | %{admstatus} eq "up" and %{opstatus} ne "up" |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                         | --verbose                                    |             |

</TabItem>
<TabItem value="Traffic-Id" label="Traffic-Id">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACEID  | Define which interfaces to check (number expected). Example: 1,2... (empty means 'check all interfaces').   |                   |             |
| WARNINGIN    | Thresholds                                                                                  |                   |             |
| CRITICALIN   | Thresholds                                                                                  |                   |             |
| WARNINGOUT   | Thresholds                                                                                  |                   |             |
| CRITICALOUT  | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Traffic-Name" label="Traffic-Name">

| Macro         | Description                                                                                 | Default value     | Mandatory   |
|:--------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME | Define which interfaces to check (number expected). Example: 1,2... (empty means 'check all interfaces').   |                   |             |
| WARNINGIN     | Thresholds                                                                                  |                   |             |
| CRITICALIN    | Thresholds                                                                                  |                   |             |
| WARNINGOUT    | Thresholds                                                                                  |                   |             |
| CRITICALOUT   | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="VPN-Global" label="VPN-Global">

| Macro              | Description                                                                                 | Default value     | Mandatory   |
|:-------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             | Define which VPNs should be monitored based on their names. This option will be treated as a regular expression.                                          | .*                |             |
| VDOMAIN            | Define which virtual domains should be monitored based on their names. This option will be treated as a regular expression.                                          |                   |             |
| WARNINGSESSIONS    | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| CRITICALSESSIONS   | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| WARNINGTRAFFICIN   | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| CRITICALTRAFFICIN  | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| WARNINGTRAFFICOUT  | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| CRITICALTRAFFICOUT | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| WARNINGTUNNELS     | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| CRITICALTUNNELS    | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| WARNINGUSERS       | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| CRITICALUSERS      | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Vdom-Usage" label="Vdom-Usage">

| Macro                    | Description                                                                                                                                | Default value     | Mandatory   |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERVDOMAIN            | Define which virtual domains should be monitored based on their names. This option will be treated as a regular expression.                                                                                            |                   |             |
| WARNINGCPUUTILIZATION    | Thresholds                                                                                                                                 |                   |             |
| CRITICALCPUUTILIZATION   | Thresholds                                                                                                                                 |                   |             |
| WARNINGLICENSEFREE       | Thresholds                                                                                                                                 |                   |             |
| CRITICALLICENSEFREE      | Thresholds                                                                                                                                 |                   |             |
| WARNINGLICENSEUSAGE      | Thresholds                                                                                                                                 |                   |             |
| CRITICALLICENSEUSAGE     | Thresholds                                                                                                                                 |                   |             |
| WARNINGLICENSEUSAGEPRCT  | Thresholds                                                                                                                                 |                   |             |
| CRITICALLICENSEUSAGEPRCT | Thresholds                                                                                                                                 |                   |             |
| WARNINGMEMORYUSAGEPRCT   | Thresholds                                                                                                                                 |                   |             |
| CRITICALMEMORYUSAGEPRCT  | Thresholds                                                                                                                                 |                   |             |
| WARNINGSESSIONSACTIVE    | Thresholds                                                                                                                                 |                   |             |
| CRITICALSESSIONSACTIVE   | Thresholds                                                                                                                                 |                   |             |
| WARNINGSESSIONSRATE      | Thresholds                                                                                                                                  |                   |             |
| CRITICALSESSIONSRATE     | Thresholds                                                                                                                                 |                   |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{op\_mode}, %{ha\_state}  |                   |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{op\_mode}, %{ha\_state} |                   |             |
| WARNINGTRAFFICIN         | Thresholds                                                                                                                                 |                   |             |
| CRITICALTRAFFICIN        | Thresholds                                                                                                                                 |                   |             |
| WARNINGTRAFFICOUT        | Thresholds                                                                                                                                 |                   |             |
| CRITICALTRAFFICOUT       | Thresholds                                                                                                                                 |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                | --verbose         |             |

</TabItem>
<TabItem value="Virus" label="Virus">

| Macro                     | Description                                                                                 | Default value     | Mandatory   |
|:--------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                | Define which virtual domains should be monitored based on their names. This option will be treated as a regular expression.                                                |                   |             |
| WARNINGVIRUSBLOCKED       | Thresholds                                                                                  |                   |             |
| CRITICALVIRUSBLOCKED      | Thresholds                                                                                  |                   |             |
| WARNINGVIRUSBLOCKEDPSEC   | Thresholds                                                                                  |                   |             |
| CRITICALVIRUSBLOCKEDPSEC  | Thresholds                                                                                  |                   |             |
| WARNINGVIRUSDETECTED      | Thresholds                                                                                  |                   |             |
| CRITICALVIRUSDETECTED     | Thresholds                                                                                  |                   |             |
| WARNINGVIRUSDETECTEDPSEC  | Thresholds                                                                                  |                   |             |
| CRITICALVIRUSDETECTEDPSEC | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortigate.pl \
	--plugin=network::fortinet::fortigate::snmp::plugin \
	--mode=virus \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-name='' \
	--warning-virus-detected='' \
	--critical-virus-detected='' \
	--warning-virus-detected-psec='' \
	--critical-virus-detected-psec='' \
	--warning-virus-blocked='' \
	--critical-virus-blocked='' \
	--warning-virus-blocked-psec='' \
	--critical-virus-blocked-psec='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All virtualdomains virus stats are ok | '*domain*#domain.virus.detected.count'=;;;0;'*domain*#domain.virus.detected.persecond'=/s;;;0;'*domain*#domain.virus.blocked.count'=;;;0;'*domain*#domain.virus.blocked.persecond'=/s;;;0;
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
/usr/lib/centreon/plugins/centreon_fortinet_fortigate.pl \
	--plugin=network::fortinet::fortigate::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                           | Linked service template                                                                                                                                   |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| ap-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/apusage.pm)]                       | Not used in this Monitoring Connector                                                                                                                     |
| cluster-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/clusterstatus.pm)]           | Net-Fortinet-Fortigate-Cluster-Status-SNMP-custom                                                                                                         |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/cpu.pm)]                                | Net-Fortinet-Fortigate-Cpu-SNMP-custom                                                                                                                    |
| disk [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/disk.pm)]                              | Net-Fortinet-Fortigate-Disk-SNMP-custom                                                                                                                   |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/hardware.pm)]                      | Net-Fortinet-Fortigate-Hardware-SNMP-custom                                                                                                               |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/interfaces.pm)]                  | Net-Fortinet-Fortigate-Traffic-Global-SNMP-custom<br />Net-Fortinet-Fortigate-Traffic-Id-SNMP-custom<br />Net-Fortinet-Fortigate-Traffic-Name-SNMP-custom |
| ips-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/ipsstats.pm)]                     | Net-Fortinet-Fortigate-Ips-Stats-Global-SNMP-custom                                                                                                       |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                                   | Used for service discovery                                                                                                                                |
| list-virtualdomains [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/listvirtualdomains.pm)] | Not used in this Monitoring Connector                                                                                                                     |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/memory.pm)]                          | Net-Fortinet-Fortigate-Memory-SNMP-custom                                                                                                                 |
| sdwan [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/sdwan.pm)]                            | Net-Fortinet-Fortigate-SDWan-SNMP-custom                                                                                                                  |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/sessions.pm)]                      | Net-Fortinet-Fortigate-Sessions-SNMP-custom                                                                                                               |
| signatures [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/signatures.pm)]                  | Not used in this Monitoring Connector                                                                                                                     |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                                                    | Not used in this Monitoring Connector                                                                                                                     |
| vdom-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/vdomusage.pm)]                   | Net-Fortinet-Fortigate-Vdom-Usage-SNMP-custom                                                                                                             |
| virus [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/virus.pm)]                            | Net-Fortinet-Fortigate-Virus-SNMP-custom                                                                                                                  |
| vpn [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/vpn.pm)]                                | Net-Fortinet-Fortigate-VPN-Global-SNMP-custom                                                                                                             |

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
| --filter-perfdata                          | Keep only perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource. Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you change this. It is recommended to leave the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
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
<TabItem value="Cluster-Status" label="Cluster-Status">

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
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{serial}, %{hostname}, %{sync\_status}, %{role}, %{roleLast}                                                                               |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{role} ne %{roleLast} or %{sync\_status} =~ /unsynchronized/'). You can use the following variables: %{serial}, %{hostname}, %{sync\_status}, %{role}, %{roleLast}   |
| --warning-* --critical-* | Set thresholds. Can be: 'total-nodes', 'synchronized', 'unsynchronized', 'total-checksums', 'cpu-utilization', 'memory-usage'.                                                                                                                |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                 |
|:-------------------------|:------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'core', 'average', 'cluster-average'.   |
| --cluster                | Add cluster CPU information.                               |
| --filter-core            | Core CPU to monitor (can be a regexp).                      |

</TabItem>
<TabItem value="Disk" label="Disk">

| Option     | Description                       |
|:-----------|:----------------------------------|
| --warning  | Warning threshold in percent.     |
| --critical | Critical threshold in percent.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                          |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'sensors'.                                                                                                                                                         |
| --add-name-instance  | Add literal description for instance value (used in filter, and threshold options).                                                                                                                                  |
| --filter             | Exclude some parts (comma separated list). You can also exclude items from specific instances: --filter=sensors,1                                                                                                     |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                           |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='sensors,WARNING,off'   |
| --warning            | Set warning threshold for 'sensors' (syntax: type,regexp,threshold) Example: --warning='sensors,.*,30'                                                                                                               |
| --critical           | Set critical threshold for 'sensors' (syntax: type,regexp,threshold) Example: --critical='sensors,.*,50'                                                                                                             |

</TabItem>
<TabItem value="Ips-Stats-Global" label="Ips-Stats-Global">

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
| --warning-* --critical-* | Thresholds. Can be: 'intrusions-detected', 'intrusions-blocked', 'crit-sev-detections', 'high-sev-detections', 'med-sev-detections', 'low-sev-detections', 'info-sev-detections', 'signature-detections', 'anomaly-detections'.               |
| --filter-name            | Define which virtual domains should be monitored based on their names. This option will be treated as a regular expression.                                                                                                                                                                                                 |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'usage-free', 'usage-prct', 'cluster-usage-prct'.   |
| --cluster                | Add cluster memory informations.                                        |

</TabItem>
<TabItem value="SDWan" label="SDWan">

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
| --filter-id              | Define which SD-WAN links should be monitored based on their IDs. This option will be treated as a regular expression.                                                                                                                                                                                                  |
| --filter-name            | Define which SD-WAN links should be monitored based on their names. This option will be treated as a regular expression.                                                                                                                                                                                                |
| --filter-vdom            | Define which virtual domains should be monitored based on their names. This option will be treated as a regular expression.                                                                                                                                                                                           |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{vdom}, %{id}, %{name}, %{ifName}                                                                                                |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{vdom}, %{id}, %{name}, %{ifName}                                                                                                |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{state} eq "down"'). You can use the following variables: %{state}, %{vdom}, %{id}, %{name}, %{ifName}                                                               |
| --warning-* --critical-* | Thresholds. Can be: 'traffic-in', 'traffic-out', 'traffic-bi', 'latency', 'jitter', 'packetloss'.                                                                                                                                             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                 |
|:-------------------------|:--------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'active', 'setup-1min', 'setup-10min', 'setup-30min', 'setup-60min'.    |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

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
| --interface                                     | Define which interfaces to check (number expected). Example: 1,2... (empty means 'check all interfaces').                                                                                                                                                                                                 |
| --name                                          | Allows you to define the interface (in option --interface) by name instead of OID index. The name matching mode supports regular expressions.                                                                                                                                               |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --force-counters32                              | Force to use 32-bit counters (even in snmp v2c and v3). Should be used when 64-bit counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                          |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                 |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface data.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Traffic-Id" label="Traffic-Id">

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
| --interface                                     | Define which interfaces to check (number expected). Example: 1,2... (empty means 'check all interfaces').                                                                                                                                                                                                 |
| --name                                          | Allows you to define the interface (in option --interface) by name instead of OID index. The name matching mode supports regular expressions.                                                                                                                                               |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --force-counters32                              | Force to use 32-bit counters (even in snmp v2c and v3). Should be used when 64-bit counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                          |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                 |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface data.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Traffic-Name" label="Traffic-Name">

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
| --interface                                     | Define which interfaces to check (number expected). Example: 1,2... (empty means 'check all interfaces').                                                                                                                                                                                                 |
| --name                                          | Allows you to define the interface (in option --interface) by name instead of OID index. The name matching mode supports regular expressions.                                                                                                                                               |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --force-counters32                              | Force to use 32-bit counters (even in snmp v2c and v3). Should be used when 64-bit counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                          |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                 |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface data.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="VPN-Global" label="VPN-Global">

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
| --filter-*             | Filter name with regexp. Can be ('vdomain', 'vpn')                                                                                                                                                                                            |
| --warning-*            | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')                                                                                                                                                     |
| --critical-*           | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')                                                                                                                                                     |
| --warning-status       | Define the conditions to match for the status to be WARNING. Use "%{state}" as a special variable. Useful to be notified when tunnel is up "%{state} eq 'up'"                                                                                 |
| --critical-status      | Define the conditions to match for the status to be CRITICAL. Use "%{state}" as a special variable. Useful to be notified when tunnel is up "%{state} eq 'up'"                                                                                |

</TabItem>
<TabItem value="Vdom-Usage" label="Vdom-Usage">

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
| --filter-vdomain         | Define which virtual domains should be monitored based on their names. This option will be treated as a regular expression.                                                                                                                                                                                              |
| --add-traffic            | Add traffic usage by virtual domain.                                                                                                                                                                                                          |
| --add-policy             | Add number of policies by virtual domain.                                                                                                                                                                                                     |
| --policy-cache-time      | Time in minutes before reloading cache file (default: 60).                                                                                                                                                                                    |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{op\_mode}, %{ha\_state}                                                                                                     |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{op\_mode}, %{ha\_state}                                                                                                    |
| --warning-* --critical-* | Thresholds. Can be: 'cpu-utilization', 'sessions-active', 'session-rate', 'memory-usage-prct', 'license-usage', 'license-free', 'license-usage-prct', 'traffic-in', 'traffic-out', 'policies-active'.                                         |

</TabItem>
<TabItem value="Virus" label="Virus">

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
| --warning-* --critical-* | Thresholds. Can be: 'virus-detected', ''virus-detected-psec', 'virus-blocked', 'virus-blocked-psec'.                                                                                                                                          |
| --filter-name            | Define which virtual domains should be monitored based on their names. This option will be treated as a regular expression.                                                                                                                                                                                                 |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortigate.pl \
	--plugin=network::fortinet::fortigate::snmp::plugin \
	--mode=virus \
	--help
```
