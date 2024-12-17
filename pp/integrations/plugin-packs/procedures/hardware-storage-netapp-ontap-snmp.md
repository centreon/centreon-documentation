---
id: hardware-storage-netapp-ontap-snmp
title: NetApp Ontap SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **NetApp Ontap SNMP** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **NetApp Ontap SNMP** brings a host template:

* **HW-Storage-NetApp-Ontap-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-NetApp-Ontap-SNMP-custom" label="HW-Storage-NetApp-Ontap-SNMP-custom">

| Service Alias | Service Template                                  | Service Description                                                      |
|:--------------|:--------------------------------------------------|:-------------------------------------------------------------------------|
| Cache-Age     | HW-Storage-NetApp-Ontap-Cache-Age-SNMP-custom     | Check age in minutes of the oldest read-only blocks in the buffer cache. |
| Cp-Statistics | HW-Storage-NetApp-Ontap-Cp-Statistics-SNMP-custom | Check consistency point metrics.                                         |
| Cpu-Load      | HW-Storage-NetApp-Ontap-Cpu-Load-SNMP-custom      | Check CPU usage.                                                         |
| Disk-Failed   | HW-Storage-NetApp-Ontap-Disk-Failed-SNMP-custom   | Check the current number of disk broken                                  |
| Global-status | HW-Storage-NetApp-Ontap-Global-status-SNMP-custom | Check the overall status of the  appliance                               |
| Nvram         | HW-Storage-NetApp-Ontap-Nvram-SNMP-custom         | Check current status of the NVRAM batteries                              |
| Shelf         | HW-Storage-NetApp-Ontap-Shelf-SNMP-custom         | Check Shelves hardware                                                   |

> The services listed above are created automatically when the **HW-Storage-NetApp-Ontap-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias          | Service Template                                           | Service Description                                                                   | Discovery |
|:-----------------------|:-----------------------------------------------------------|:--------------------------------------------------------------------------------------|:---------:|
| Aggregates             | HW-Storage-NetApp-Ontap-Aggregates-SNMP-custom             | Check state of one or several aggregates                                              |           |
| Cluster-Nodes          | HW-Storage-NetApp-Ontap-Cluster-Nodes-SNMP-custom          | Check cluster nodes                                                                   |     X     |
| Fan                    | HW-Storage-NetApp-Ontap-Fan-SNMP-custom                    | Check if fans are failed                                                              |           |
| File-System-Global     | HW-Storage-NetApp-Ontap-File-System-Global-SNMP-custom     | Check filesystem usage                                                                |     X     |
| Ndmpsessions           | HW-Storage-NetApp-Ontap-Ndmpsessions-SNMP-custom           | Check current total of ndmp sessions opened                                           |           |
| Partner-Status         | HW-Storage-NetApp-Ontap-Partner-Status-SNMP-custom         | Check status of clustered failover partner                                            |           |
| Plexes                 | HW-Storage-NetApp-Ontap-Plexes-SNMP-custom                 | Check plexes                                                                          |     X     |
| Psu                    | HW-Storage-NetApp-Ontap-Psu-SNMP-custom                    | Check if power supplies are failed                                                    |           |
| Quotas                 | HW-Storage-NetApp-Ontap-Quotas-SNMP-custom                 | Check quotas                                                                          |           |
| Share-Calls            | HW-Storage-NetApp-Ontap-Share-Calls-SNMP-custom            | Check cifs and nfs calls per seconds.                                                 |           |
| Snapshot-Age-Global    | HW-Storage-NetApp-Ontap-Snapshot-Age-Global-SNMP-custom    | Check snapshot age of volumes                                                         |           |
| Snapshot-Age-Name      | HW-Storage-NetApp-Ontap-Snapshot-Age-Name-SNMP-custom      | Check snapshot age of volumes                                                         |           |
| Temperature            | HW-Storage-NetApp-Ontap-Temperature-SNMP-custom            | Check if hardware is currently operating outside of its recommended temperature range |           |
| Volume-Options-Generic | HW-Storage-NetApp-Ontap-Volume-Options-Generic-SNMP-custom | Check options from volumes                                                            |           |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                                  |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **HW-Storage-NetApp-Ontap-SNMP-custom** host template. |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                               | Description                             |
|:----------------------------------------|:----------------------------------------|
| Net-Netapp-Ontap-SNMP-Cluster-Node-Name | Discover cluster nodes and monitor them |
| Net-Netapp-Ontap-SNMP-Disk-Name         | Discover disk broken and monitor them   |
| Net-Netapp-Ontap-SNMP-Plex-Name         | Discover plexes and monitor them        |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Name   | Unit  |
|:-------|:------|
| state  | N/A   |
| status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cache-Age" label="Cache-Age">

| Name      | Unit  |
|:----------|:------|
| cache_age | m     |

</TabItem>
<TabItem value="Cluster-Nodes" label="Cluster-Nodes">

| Name                                                | Unit  |
|:----------------------------------------------------|:------|
| node-status                                         | N/A   |
| bbu-status                                          | N/A   |
| *nodes*~node.cpu.utilization.percentage             | %     |
| *nodes*~node.hardware.fans.failed.count             | count |
| *nodes*~node.hardware.power_supplies.failed.count   | count |
| *nodes*~node.hardware.temperatures.over_range.count | count |
| port-link-status                                    | N/A   |
| port-health                                         | N/A   |

</TabItem>
<TabItem value="Cp-Statistics" label="Cp-Statistics">

| Name                                          | Unit  |
|:----------------------------------------------|:------|
| storage.cp.timer.operations.count             | count |
| storage.cp.snapshot.operations.count          | count |
| storage.cp.lowerwatermark.operations.count    | count |
| storage.cp.highwatermark.operations.count     | count |
| storage.cp.logfull.operations.count           | count |
| storage.cp.back2back.operations.count         | count |
| storage.cp.flushunlog.operations.count        | count |
| storage.cp.syncrequests.operations.count      | count |
| storage.cp.lowvirtualbuffers.operations.count | count |
| storage.cp.deferred.operations.count          | count |
| storage.cp.lowdatavecs.operations.count       | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Name    | Unit  |
|:--------|:------|
| cpuload | %     |

</TabItem>
<TabItem value="Disk-Failed" label="Disk-Failed">

| Name   | Unit  |
|:-------|:------|
| failed | N/A   |

</TabItem>
<TabItem value="Fan" label="Fan">

No metrics for this service.

</TabItem>
<TabItem value="File-System-Global" label="File-System-Global">

| Name               | Unit  |
|:-------------------|:------|
| usage              | N/A   |
| *fs*#inodes        | %     |
| *fs*#compresssaved | %     |
| *fs*#dedupsaved    | %     |
| vserver-status     | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Global-status" label="Global-status">

| Name                                  | Unit  |
|:--------------------------------------|:------|
| storage.io.read.usage.bytespersecond  | B/s   |
| storage.io.write.usage.bytespersecond | B/s   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Ndmpsessions" label="Ndmpsessions">

| Name     | Unit  |
|:---------|:------|
| sessions | N/A   |

</TabItem>
<TabItem value="Nvram" label="Nvram">

No metrics for this service.

</TabItem>
<TabItem value="Partner-Status" label="Partner-Status">

No metrics for this service.

</TabItem>
<TabItem value="Plexes" label="Plexes">

| Name                                            | Unit  |
|:------------------------------------------------|:------|
| plexes.online.count                             | count |
| plexes.offline.count                            | count |
| plexes.resyncing.count                          | count |
| status                                          | N/A   |
| *plexes*~*aggregates*#plex.resyncing.percentage | %     |

</TabItem>
<TabItem value="Psu" label="Psu">

No metrics for this service.

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Name                                  | Unit  |
|:--------------------------------------|:------|
| *quotas*#quota.space.usage.bytes      | B     |
| *quotas*#quota.space.free.bytes       | B     |
| *quotas*#quota.space.usage.percentage | %     |

</TabItem>
<TabItem value="Share-Calls" label="Share-Calls">

| Name | Unit  |
|:-----|:------|
| cifs | N/A   |
| nfs  | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Shelf" label="Shelf">

| Name                          | Unit  |
|:------------------------------|:------|
| count_communication           | count |
| count_electronics             | count |
| count_fan                     | count |
| count_psu                     | count |
| count_raid                    | count |
| count_temperature             | count |
| count_voltage                 | count |
| speed_*channel-shelf-address* | rpm   |
| temp_*channel-shelf-address*  | C     |
| volt_*channel-shelf-address*  | mV    |

</TabItem>
<TabItem value="Snapshot-Age-Global" label="Snapshot-Age-Global">

| Name      | Unit  |
|:----------|:------|
| snapshots | N/A   |

</TabItem>
<TabItem value="Snapshot-Age-Name" label="Snapshot-Age-Name">

| Name      | Unit  |
|:----------|:------|
| snapshots | N/A   |

</TabItem>
<TabItem value="Temperature" label="Temperature">

No metrics for this service.

</TabItem>
<TabItem value="Volume-Options-Generic" label="Volume-Options-Generic">

| Name    | Unit  |
|:--------|:------|
| status  | N/A   |
| status  | N/A   |
| options | N/A   |
| options | N/A   |
| failed  | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

### Equipment specificity

If your netapp storage is in 'c-mode', following services won't work:
- Global-Status
- Share-Calls
- Cache-Age
- Ndmpsessions

### SNMP Configuration

The SNMP agent must be enabled and configured on the resource. Please refer to the official documentation from the manufacturer/publisher. 
Your resource may require a list of addresses authorized to query it to be set up. 
Please ensure that the addresses of the Centreon pollers are included in this list.

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
dnf install centreon-pack-hardware-storage-netapp-ontap-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-netapp-ontap-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-netapp-ontap-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-netapp-ontap-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **NetApp Ontap SNMP** connector through
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
dnf install centreon-plugin-Hardware-Storage-Netapp-Ontap-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Netapp-Ontap-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-netapp-ontap-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-NetApp-Ontap-SNMP-custom** template to the host. 

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
<TabItem value="Aggregates" label="Aggregates">

| Macro          | Description                                                                                                                            | Default value                    | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| FILTERNAME     | Filter aggregates by name                                                                                                              |                                  |             |
| CRITICALSTATE  | Set critical threshold for state. You can use the following variables: %{state}, %{name}                                               | %{state} =~ /offline/i           |             |
| WARNINGSTATE   | Set warning threshold for state. You can use the following variables: %{state}, %{name}                                                |                                  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                  | %{status} !~ /normal\|mirrored/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                   |                                  |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                        |             |

</TabItem>
<TabItem value="Cache-Age" label="Cache-Age">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in minutes                                                                                                           |                   |             |
| CRITICAL     | Critical threshold in minutes                                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Cluster-Nodes" label="Cluster-Nodes">

| Macro                        | Description                                                                                                                                              | Default value                                | Mandatory   |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|:-----------:|
| FILTERNODENAME               | Filter nodes by name (can be a regexp)                                                                                                                   |                                              |             |
| FILTERPORDID                 | Filter ports by ID (can be a regexp)                                                                                                                     |                                              |             |
| FILTERPORTROLE               | Filter ports by role (can be a regexp)                                                                                                                   |                                              |             |
| CRITICALBBUSTATUS            | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{bbu\_status}, %{node\_name}                         | %{bbu\_status} !~ /fullyCharged\|ok/i        |             |
| WARNINGBBUSTATUS             | Define the conditions to match for the status to be WARNING. You can use the following variables: %{bbu\_status}, %{node\_name}                          |                                              |             |
| WARNINGCPUUTILIZATION        | Threshold                                                                                                                                                |                                              |             |
| CRITICALCPUUTILIZATION       | Threshold                                                                                                                                                |                                              |             |
| WARNINGFANFAILED             | Threshold                                                                                                                                                |                                              |             |
| CRITICALFANFAILED            | Threshold                                                                                                                                                |                                              |             |
| CRITICALNODESTATUS           | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{node\_status}, %{node\_name}                        | %{node\_status} eq "clusterComLost"          |             |
| WARNINGNODESTATUS            | Define the conditions to match for the status to be WARNING. You can use the following variables: %{node\_status}, %{node\_name}                         |                                              |             |
| CRITICALPORTHEALTH           | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{health}, %{port\_id}, %{node\_name}                 | %{health} eq "degraded"                      |             |
| WARNINGPORTHEALTH            | Define the conditions to match for the status to be WARNING. You can use the following variables: %{health}, %{port\_id}, %{node\_name}                  |                                              |             |
| CRITICALPORTLINKSTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{admstatus}, %{opstatus}, %{port\_id}, %{node\_name} | %{admstatus} eq "up" and %{opstatus} ne "up" |             |
| WARNINGPORTLINKSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{port\_id}, %{node\_name}  |                                              |             |
| WARNINGPSUFAILED             | Threshold                                                                                                                                                |                                              |             |
| CRITICALPSUFAILED            | Threshold                                                                                                                                                |                                              |             |
| WARNINGTEMPERATUREOVERRANGE  | Threshold                                                                                                                                                |                                              |             |
| CRITICALTEMPERATUREOVERRANGE | Threshold                                                                                                                                                |                                              |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                   | --verbose                                    |             |

</TabItem>
<TabItem value="Cp-Statistics" label="Cp-Statistics">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Macro        | Description                                                                                                                            | Default value | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                                                           |               |             |
| CRITICAL     | Critical threshold in percent                                                                                                          |               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |             |

</TabItem>
<TabItem value="Fan" label="Fan">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="File-System-Global" label="File-System-Global">

| Macro          | Description                                                                                                                            | Default value                              | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|:-----------:|
| FILTER         | Filter by filesystem name (can be a regexp)                                                                                            | .*                                         |             |
| UNIT           | Units of thresholds ('%', 'B')                                                                                                         | %                                          |             |
| WARNING        | Threshold                                                                                                                              |                                            |             |
| CRITICAL       | Threshold                                                                                                                              |                                            |             |
| WARNINGINODES  | Threshold                                                                                                                              |                                            |             |
| CRITICALINODES | Threshold                                                                                                                              |                                            |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose --filter-perfdata='used\|inodes' |             |

</TabItem>
<TabItem value="Global-status" label="Global-status">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Ndmpsessions" label="Ndmpsessions">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                                                      |                   |             |
| CRITICAL     | Critical threshold                                                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Nvram" label="Nvram">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Partner-Status" label="Partner-Status">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Plexes" label="Plexes">

| Macro                  | Description                                                                                                                            | Default value            | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| FILTERNAME             | Filter plexes by name                                                                                                                  |                          |             |
| WARNINGRESYNCING       | Threshold                                                                                                                              |                          |             |
| CRITICALRESYNCING      | Threshold                                                                                                                              |                          |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}, %{aggregate}     | %{status} eq "resyncing" |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}, %{aggregate}    | %{status} eq "offline"   |             |
| WARNINGTOTALOFFLINE    | Threshold                                                                                                                              |                          |             |
| CRITICALTOTALOFFLINE   | Threshold                                                                                                                              |                          |             |
| WARNINGTOTALONLINE     | Threshold                                                                                                                              |                          |             |
| CRITICALTOTALONLINE    | Threshold                                                                                                                              |                          |             |
| WARNINGTOTALRESYNCING  | Threshold                                                                                                                              |                          |             |
| CRITICALTOTALRESYNCING | Threshold                                                                                                                              |                          |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                |             |

</TabItem>
<TabItem value="Psu" label="Psu">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Macro                  | Description                                                                                                                            | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERINDEX            | Filter by index (identified entry in the /etc/quotas) (can be a regexp)                                                                |                   |             |
| FILTERQTREE            | Filter by qtree name (can be a regexp)                                                                                                 |                   |             |
| FILTERVOLUME           | Filter by volume name (can be a regexp)                                                                                                |                   |             |
| FILTERVSERVER          | Filter by vserver name (can be a regexp)                                                                                               |                   |             |
| WARNINGSPACEUSAGE      | Threshold                                                                                                                              |                   |             |
| CRITICALSPACEUSAGE     | Threshold                                                                                                                              |                   |             |
| WARNINGSPACEUSAGEFREE  | Threshold                                                                                                                              |                   |             |
| CRITICALSPACEUSAGEFREE | Threshold                                                                                                                              |                   |             |
| WARNINGSPACEUSAGEPRCT  | Threshold                                                                                                                              |                   |             |
| CRITICALSPACEUSAGEPRCT | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Share-Calls" label="Share-Calls">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCIFS  | Threshold                                                                                                                              |                   |             |
| CRITICALCIFS | Threshold                                                                                                                              |                   |             |
| WARNINGNFS   | Threshold                                                                                                                              |                   |             |
| CRITICALNFS  | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Shelf" label="Shelf">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'psu', 'fan', 'communication', 'voltage', 'temperature', 'electronics', 'raid'       | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Snapshot-Age-Global" label="Snapshot-Age-Global">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VOLUMENAME   | Set the snapshot name                                                                                                                  |                   |             |
| WARNING      | Warning threshold in seconds                                                                                                           |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Snapshot-Age-Name" label="Snapshot-Age-Name">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VOLUMENAME   | Set the snapshot name                                                                                                                  |                   |             |
| WARNING      | Warning threshold in seconds                                                                                                           |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Temperature" label="Temperature">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Volume-Options-Generic" label="Volume-Options-Generic">

| Macro           | Description                                                                                                                            | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME      | Filter on volume name (can be a regexp)                                                                                                |                   |             |
| UNKNOWNSTATUS   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{display}                |                   |             |
| UNKNOWNOPTIONS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{options}, %{display}               |                   |             |
| WARNINGOPTIONS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{options}, %{display}               |                   |             |
| CRITICALOPTIONS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{options}, %{display}              |                   |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                |                   |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{display}               |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_snmp.pl \
	--plugin=storage::netapp::ontap::snmp::plugin \
	--mode=volumeoptions \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-name='' \
	--unknown-status='' \
	--warning-status='' \
	--critical-status='' \
	--unknown-options='' \
	--warning-options='' \
	--critical-options='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All volumes are ok | 'failed'=0;;;0;
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
/usr/lib/centreon/plugins/centreon_netapp_ontap_snmp.pl \
	--plugin=storage::netapp::ontap::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                          | Linked service template                                                                                            |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
| aggregates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/aggregates.pm)]               | HW-Storage-NetApp-Ontap-Aggregates-SNMP-custom                                                                     |
| cache-age [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/cacheage.pm)]                  | HW-Storage-NetApp-Ontap-Cache-Age-SNMP-custom                                                                      |
| cluster-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/clusternodes.pm)]          | HW-Storage-NetApp-Ontap-Cluster-Nodes-SNMP-custom                                                                  |
| cp-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/cpstatistics.pm)]          | HW-Storage-NetApp-Ontap-Cp-Statistics-SNMP-custom                                                                  |
| cpuload [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/cpuload.pm)]                     | HW-Storage-NetApp-Ontap-Cpu-Load-SNMP-custom                                                                       |
| diskfailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/diskfailed.pm)]               | HW-Storage-NetApp-Ontap-Disk-Failed-SNMP-custom                                                                    |
| failover [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/failover.pm)]                   | Not used in this Monitoring Connector                                                                              |
| fan [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/fan.pm)]                             | HW-Storage-NetApp-Ontap-Fan-SNMP-custom                                                                            |
| filesys [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/filesys.pm)]                     | HW-Storage-NetApp-Ontap-File-System-Global-SNMP-custom                                                             |
| global-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/globalstatus.pm)]          | HW-Storage-NetApp-Ontap-Global-status-SNMP-custom                                                                  |
| list-cluster-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/listclusternodes.pm)] | Used for service discovery                                                                                         |
| list-filesys [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/listfilesys.pm)]            | Used for service discovery                                                                                         |
| list-plexes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/listplexes.pm)]              | Used for service discovery                                                                                         |
| list-snapvault [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/listsnapvault.pm)]        | Not used in this Monitoring Connector                                                                              |
| ndmpsessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/ndmpsessions.pm)]           | HW-Storage-NetApp-Ontap-Ndmpsessions-SNMP-custom                                                                   |
| nvram [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/nvram.pm)]                         | HW-Storage-NetApp-Ontap-Nvram-SNMP-custom                                                                          |
| partnerstatus [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/partnerstatus.pm)]         | HW-Storage-NetApp-Ontap-Partner-Status-SNMP-custom                                                                 |
| plexes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/plexes.pm)]                       | HW-Storage-NetApp-Ontap-Plexes-SNMP-custom                                                                         |
| psu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/psu.pm)]                             | HW-Storage-NetApp-Ontap-Psu-SNMP-custom                                                                            |
| quotas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/quotas.pm)]                       | HW-Storage-NetApp-Ontap-Quotas-SNMP-custom                                                                         |
| share-calls [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/sharecalls.pm)]              | HW-Storage-NetApp-Ontap-Share-Calls-SNMP-custom                                                                    |
| shelf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/shelf.pm)]                         | HW-Storage-NetApp-Ontap-Shelf-SNMP-custom                                                                          |
| sis [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/sis.pm)]                             | Not used in this Monitoring Connector                                                                              |
| snapmirrorlag [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/snapmirrorlag.pm)]         | Not used in this Monitoring Connector                                                                              |
| snapshotage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/snapshotage.pm)]             | HW-Storage-NetApp-Ontap-Snapshot-Age-Global-SNMP-custom<br />HW-Storage-NetApp-Ontap-Snapshot-Age-Name-SNMP-custom |
| snapvault-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/snapvaultusage.pm)]      | Not used in this Monitoring Connector                                                                              |
| temperature [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/temperature.pm)]             | HW-Storage-NetApp-Ontap-Temperature-SNMP-custom                                                                    |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                                   | Not used in this Monitoring Connector                                                                              |
| volumeoptions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/volumeoptions.pm)]         | HW-Storage-NetApp-Ontap-Volume-Options-Generic-SNMP-custom                                                         |

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
<TabItem value="Aggregates" label="Aggregates">

| Option            | Description                                                                                                                                                             |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                             |
| --filter-name     |   Filter aggregates by name.                                                                                                                                            |
| --unknown-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                                                  |
| --warning-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                                  |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal\|mirrored/i'). You can use the following variables: %{status}, %{name}   |
| --unknown-state   |   Set unknown threshold for state. You can use the following variables: %{state}, %{name}                                                                               |
| --warning-state   |   Set warning threshold for state. You can use the following variables: %{state}, %{name}                                                                               |
| --critical-state  |   Set critical threshold for state (default: '%{state} =~ /offline/i'). You can use the following variables: %{state}, %{name}                                          |

</TabItem>
<TabItem value="Cache-Age" label="Cache-Age">

| Option     | Description                        |
|:-----------|:-----------------------------------|
| --warning  |   Warning threshold in minutes     |
| --critical |   Critical threshold in minutes    |

</TabItem>
<TabItem value="Cluster-Nodes" label="Cluster-Nodes">

| Option                      | Description                                                                                                                                                                                                            |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters           |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                            |
| --filter-node-name          |   Filter nodes by name (can be a regexp).                                                                                                                                                                              |
| --filter-port-id            |   Filter ports by ID (can be a regexp).                                                                                                                                                                                |
| --filter-port-role          |   Filter ports by role (can be a regexp).                                                                                                                                                                              |
| --unknown-node-status       |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{node\_status}, %{node\_name}                                                                                     |
| --warning-node-status       |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{node\_status}, %{node\_name}                                                                                     |
| --critical-node-status      |   Define the conditions to match for the status to be CRITICAL (default: '%{node\_status} eq "clusterComLost"'). You can use the following variables: %{node\_status}, %{node\_name}                                   |
| --unknown-bbu-status        |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{bbu\_status}, %{node\_name}                                                                                      |
| --warning-bbu-status        |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{bbu\_status}, %{node\_name}                                                                                      |
| --critical-bbu-status       |   Define the conditions to match for the status to be CRITICAL (default: '%{bbu\_status} !~ /fullyCharged\|ok/i'). You can use the following variables: %{bbu\_status}, %{node\_name}                                  |
| --unknown-port-link-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{admstatus}, %{opstatus}, %{port\_id}, %{node\_name}                                                              |
| --warning-port-link-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{port\_id}, %{node\_name}                                                              |
| --critical-port-link-status |   Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{port\_id}, %{node\_name}   |
| --unknown-port-health       |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{health}, %{port\_id}, %{node\_name}                                                                              |
| --warning-port-health       |   Define the conditions to match for the status to be WARNING (default: '%{health} eq "degraded"'). You can use the following variables: %{health}, %{port\_id}, %{node\_name}                                         |
| --critical-port-health      |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{health}, %{port\_id}, %{node\_name}                                                                             |
| --warning-* --critical-*    |   Thresholds. Can be: 'cpu-utilization', 'temperature-overrange', 'fan-failed', 'psu-failed'.                                                                                                                          |

</TabItem>
<TabItem value="Cp-Statistics" label="Cp-Statistics">

| Option            | Description                                                                                                                                                      |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                      |
| --warning-*       |   Warning threshold. Can be: 'timer', 'snapshot', 'lowerwater', 'highwater',  'logfull', 'back', 'flush', 'sync', 'lowvbuf', 'deferred', 'lowdatavecs'.          |
| --critical-*      |   Critical threshold. Can be: 'timer', 'snapshot', 'lowerwater', 'highwater',  'logfull', 'back', 'flush', 'sync', 'lowvbuf', 'deferred', 'lowdatavecs'.         |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Option     | Description                              |
|:-----------|:-----------------------------------------|
| --warning  |   Warning threshold in percent.          |
| --critical |   Critical threshold in percent.         |

</TabItem>
<TabItem value="File-System-Global" label="File-System-Global">

| Option                    | Description                                                                                                                                               |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                               |
| --unknown-vserver-status  |   Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %{vserver\_status}, %{vserver\_name}    |
| --warning-vserver-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{vserver\_status}, %{vserver\_name}    |
| --critical-vserver-status |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{vserver\_status}, %{vserver\_name}   |
| --warning-*               |   Warning threshold. Can be: usage, inodes (%), compresssaved (%), dedupsaved (%).                                                                        |
| --critical-*              |   Critical threshold. Can be: usage, inodes (%), compresssaved (%), dedupsaved (%).                                                                       |
| --units                   |   Units of thresholds (default: '%') ('%', 'B').                                                                                                          |
| --free                    |   Thresholds are on free space left.                                                                                                                      |
| --filter-name             |   Filter by filesystem name (can be a regexp).                                                                                                            |
| --filter-vserver          |   Filter by vserver name (can be a regexp).                                                                                                               |
| --filter-vserver-state    |   Filter by vserver state (can be a regexp).                                                                                                              |
| --filter-type             |   Filter filesystem type (can be a regexp. Example: 'flexibleVolume\|aggregate').                                                                         |

</TabItem>
<TabItem value="Global-status" label="Global-status">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-* --critical-* |   Thresholds. Can be: 'read', 'write'.                                                                                        |

</TabItem>
<TabItem value="Ndmpsessions" label="Ndmpsessions">

| Option     | Description                   |
|:-----------|:------------------------------|
| --warning  |   Warning threshold.          |
| --critical |   Critical threshold.         |

</TabItem>
<TabItem value="Nvram" label="Nvram">

| Option               | Description                                                                                                                                                                                                           |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,status,regexp). Example: --threshold-overload='nvram,CRITICAL,^(?!(ok)$)'         |

</TabItem>
<TabItem value="Partner-Status" label="Partner-Status">

| Option               | Description                                                                                                                                                                                                             |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,status,regexp). Example: --threshold-overload='partner,CRITICAL,^(?!(ok)$)'         |

</TabItem>
<TabItem value="Plexes" label="Plexes">

| Option                   | Description                                                                                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                  |
| --filter-name            |   Filter plexes by name.                                                                                                                                                     |
| --filter-aggregate       |   Filter plexes by aggregate name.                                                                                                                                           |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}, %{aggregate}                                         |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%{status} eq "resyncing"'). You can use the following variables: %{status}, %{name}, %{aggregate}   |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%{status}  eq "offline"'). You can use the following variables: %{status}, %{name}, %{aggregate}   |
| --warning-* --critical-* |   Thresholds. Can be: 'total-online', 'total-offline', 'total-resyncing', 'resyncing'.                                                                                       |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Option                   | Description                                                                                                                                                                                                                                     |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                     |
| --memcached              |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration          |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-index           |   Filter by index (identified entry in the /etc/quotas) (can be a regexp).                                                                                                                                                                      |
| --filter-vserver         |   Filter by vserver name (can be a regexp).                                                                                                                                                                                                     |
| --filter-volume          |   Filter by volume name (can be a regexp).                                                                                                                                                                                                      |
| --filter-qtree           |   Filter by qtree name (can be a regexp).                                                                                                                                                                                                       |
| --cache                  |   Use cache file to store quota volume/vserver/qtree information.                                                                                                                                                                               |
| --cache-time             |   Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                   |
| --warning-* --critical-* |   Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                                                                                                                                    |
| --not-kbytes             |   If qrV264KBytesUsed and qrV264KBytesLimit OIDs are not really KBytes.                                                                                                                                                                         |

</TabItem>
<TabItem value="Share-Calls" label="Share-Calls">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'cifs', 'nfs'.                                                                                   |
| --critical-*      |   Critical threshold. Can be: 'cifs', 'nfs'.                                                                                  |

</TabItem>
<TabItem value="Shelf" label="Shelf">

| Option               | Description                                                                                                                                                                                                                    |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'psu', 'fan', 'communication', 'voltage', 'temperature', 'electronics', 'raid'.                                                                                            |
| --filter             |   Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=psu,41239F00647-A                                                       |
| --absent-problem     |   Return an error if an entity is not 'present' (default is skipping) (comma separated list) Can be specific or global: --absent-problem=fan,41239F00647-fan02                                                                 |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                   |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='gfc,CRITICAL,^(?!(Online)$)'   |
| --warning            |   Set warning threshold for temperature, fan, voltage (syntax: type,regexp,threshold) Example: --warning='41239F00647-vimm46,20' --warning='41239F00647-vimm5.*,30'                                                            |
| --critical           |   Set critical threshold for temperature, fan, voltage (syntax: type,regexp,threshold) Example: --critical='temperature,.*,25' --warning='temperature,.*,35'                                                                   |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                 |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                |

</TabItem>
<TabItem value="Snapshot-Age-Global" label="Snapshot-Age-Global">

| Option     | Description                                                                  |
|:-----------|:-----------------------------------------------------------------------------|
| --warning  |   Warning threshold in seconds.                                              |
| --critical |   Critical threshold in seconds.                                             |
| --name     |   Set the snapshot name.                                                     |
| --regexp   |   Allows to use regexp to filter snapshot name (with option --name).         |

</TabItem>
<TabItem value="Snapshot-Age-Name" label="Snapshot-Age-Name">

| Option     | Description                                                                  |
|:-----------|:-----------------------------------------------------------------------------|
| --warning  |   Warning threshold in seconds.                                              |
| --critical |   Critical threshold in seconds.                                             |
| --name     |   Set the snapshot name.                                                     |
| --regexp   |   Allows to use regexp to filter snapshot name (with option --name).         |

</TabItem>
<TabItem value="Volume-Options-Generic" label="Volume-Options-Generic">

| Option             | Description                                                                                                                                       |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters  |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                       |
| --filter-vserver   |   Filter volumes by vserver name (can be a regexp).                                                                                               |
| --filter-name      |   Filter on volume name (can be a regexp).                                                                                                        |
| --filter-status    |   Filter on volume status (can be a regexp).                                                                                                      |
| --unknown-status   |   Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %{status}, %{display}           |
| --warning-status   |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{display}           |
| --critical-status  |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{status}, %{display}          |
| --unknown-options  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{options}, %{display}          |
| --warning-options  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{options}, %{display}          |
| --critical-options |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{options}, %{display}         |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_snmp.pl \
	--plugin=storage::netapp::ontap::snmp::plugin \
	--mode=volumeoptions \
	--help
```
