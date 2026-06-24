---
id: hardware-devices-polycom-dma-snmp
slug: /hardware-devices-polycom-dma-snmp
title: Polycom DMA SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Polycom DMA SNMP** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Polycom DMA SNMP** brings a host template:

* **HW-Device-Polycom-Dma-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Device-Polycom-Dma-SNMP-custom" label="HW-Device-Polycom-Dma-SNMP-custom">

| Service Alias        | Service Template                                       | Service Description              |
|:---------------------|:-------------------------------------------------------|:---------------------------------|
| Alerts               | HW-Device-Polycom-Dma-Alerts-SNMP-custom               | Check Polycom DMA alerts         |
| Clusters-Usage       | HW-Device-Polycom-Dma-Clusters-Usage-SNMP-custom       | Check clusters state and metrics |
| Conference-Manager   | HW-Device-Polycom-Dma-Conference-Manager-SNMP-custom   | Check conference manager         |
| Device-Registrations | HW-Device-Polycom-Dma-Device-Registrations-SNMP-custom | Check registered devices states  |
| Servers-Usage        | HW-Device-Polycom-Dma-Servers-Usage-SNMP-custom        | Check servers system's metrics   |

> The services listed above are created automatically when the **HW-Device-Polycom-Dma-SNMP-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **HW-Device-Polycom-Dma-SNMP-custom** host template. |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Clusters-Usage" label="Clusters-Usage">

| Name                                            | Unit  |
|:------------------------------------------------|:------|
| dma.clusters.total.count                        | count |
| cluster-status                                  | N/A   |
| license-status                                  | N/A   |
| *cluster*#dma.cluster.activecalls.count         | count |
| *cluster*#dma.cluster.licenses.free.count       | count |
| *cluster*#dma.cluster.licenses.usage.percentage | %     |

</TabItem>
<TabItem value="Conference-Manager" label="Conference-Manager">

| Name                                                | Unit  |
|:----------------------------------------------------|:------|
| dma.conferences.active.count                        | count |
| *cluster*#dma.cluster.conferences.active.count      | count |
| *cluster*#dma.cluster.participants.active.count     | count |
| *cluster*#dma.cluster.local.database.users.count    | count |
| *cluster*#dma.cluster.custom.conference.rooms.count | count |
| *cluster*#dma.cluster.video.port.usage.count        | count |
| *cluster*#dma.cluster.video.port.free.count         | count |
| *cluster*#dma.cluster.video.port.percentage         | %     |
| *cluster*#dma.cluster.voice.port.usage.count        | count |
| *cluster*#dma.cluster.voice.port.free.count         | count |
| *cluster*#dma.cluster.voice.port.percentage         | %     |

</TabItem>
<TabItem value="Device-Registrations" label="Device-Registrations">

| Name                                                        | Unit  |
|:------------------------------------------------------------|:------|
| dma.registrations.count                                     | count |
| *cluster*#dma.cluster.endpoint.registrations.active.count   | count |
| *cluster*#dma.cluster.endpoint.registrations.inactive.count | count |

</TabItem>
<TabItem value="Servers-Usage" label="Servers-Usage">

| Name                                            | Unit  |
|:------------------------------------------------|:------|
| *server1*#dma.server.cpu.utilization.percentage | %     |
| *server2*#dma.server.cpu.utilization.percentage | %     |
| *server1*#dma.server.memory.usage.bytes         | B     |
| *server2*#dma.server.memory.usage.bytes         | B     |
| *server1*#dma.server.memory.free.bytes          | B     |
| *server2*#dma.server.memory.free.bytes          | B     |
| *server1*#dma.server.memory.usage.percentage    | %     |
| *server2*#dma.server.memory.usage.percentage    | %     |
| *server1*#dma.server.swap.usage.percentage      | %     |
| *server2*#dma.server.swap.usage.percentage      | %     |
| *server1*#dma.server.swap.free.bytes            | B     |
| *server2*#dma.server.swap.free.bytes            | B     |
| *server1*#dma.server.swap.usage.percentage      | %     |
| *server2*#dma.server.swap.usage.percentage      | %     |
| *server1*#dma.server.disk.usage.bytes           | B     |
| *server2*#dma.server.disk.usage.bytes           | B     |
| *server1*#dma.server.disk.free.bytes            | B     |
| *server2*#dma.server.disk.free.bytes            | B     |
| *server1*#dma.server.disk.usage.percentage      | %     |
| *server2*#dma.server.disk.usage.percentage      | %     |
| *server1*#dma.server.logs.usage.bytes           | B     |
| *server2*#dma.server.logs.usage.bytes           | B     |
| *server1*#dma.server.logs.free.bytes            | B     |
| *server2*#dma.server.logs.free.bytes            | B     |
| *server1*#dma.server.logs.usage.percentage      | %     |
| *server2*#dma.server.logs.usage.percentage      | %     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

The SNMP agent must be enabled and configured on the resource. Please refer to the official documentation. Your resource may require a list of addresses authorized to query it to be set up. Please ensure that the addresses of the Centreon pollers are included in this list.

### Network flow

The target resource must be reachable from the Centreon poller on the UDP/161 SNMP port.

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
dnf install centreon-pack-hardware-devices-polycom-dma-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-devices-polycom-dma-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-devices-polycom-dma-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-devices-polycom-dma-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Polycom DMA SNMP** connector through
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
dnf install centreon-plugin-Hardware-Devices-Polycom-Dma-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Devices-Polycom-Dma-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-devices-polycom-dma-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Dma-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Device-Polycom-Dma-SNMP-custom** template to the host.

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
<TabItem value="Alerts" label="Alerts">

| Macro          | Description                                                                                                                                                                             | Default value              | Mandatory   |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: '%\{severity\} =~ /warn/i') Can use special variables like: %\{severity\}, %\{text\}, %\{code\}, %\{since\}       | %\{severity\} =~ /warn/i   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{severity\} =~ /severe/i'). Can use special variables like: %\{severity\}, %\{text\}, %\{source\}, %\{since\} | %\{severity\} =~ /severe/i |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                      |                            |             |

</TabItem>
<TabItem value="Clusters-Usage" label="Clusters-Usage">

| Macro                           | Description                                                                                                                                                                        | Default value                           | Mandatory   |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|:-----------:|
| WARNINGCLUSTERACTIVECALLS       | Threshold                                                                                                                                                                          |                                         |             |
| CRITICALCLUSTERACTIVECALLS      | Threshold                                                                                                                                                                          |                                         |             |
| WARNINGCLUSTERLICENSEUSAGEFREE  | Threshold                                                                                                                                                                          |                                         |             |
| CRITICALCLUSTERLICENSEUSAGEFREE | Threshold                                                                                                                                                                          |                                         |             |
| WARNINGCLUSTERLICENSEUSAGEPRCT  | Threshold                                                                                                                                                                          |                                         |             |
| CRITICALCLUSTERLICENSEUSAGEPRCT | Threshold                                                                                                                                                                          |                                         |             |
| CRITICALCLUSTERSTATUS           | Custom Critical threshold of the cluster state (default: '%\{cluster\_status\} =~ /outOfService/i' ) Syntax: --critical-cluster-status='%\{cluster\_status\} =~ /busyOut/i'        | %\{cluster\_status\} =~ /outOfService/i |             |
| WARNINGCLUSTERSTATUS            | Custom Warning threshold of the cluster state (default: none) Syntax: --warning-cluster-status='%\{cluster\_status\} =~ /busyOut/i'                                                |                                         |             |
| WARNINGDMATOTALCLUSTERS         | Threshold                                                                                                                                                                          |                                         |             |
| CRITICALDMATOTALCLUSTERS        | Threshold                                                                                                                                                                          |                                         |             |
| CRITICALLICENSESTATUS           | Custom Critical threshold of the cluster license state (default: '%\{license\_status\} =~ /invalid/i') Syntax: --critical-license-status='%\{license\_status\} =~ /notinstalled/i' | %\{license\_status\} =~ /invalid/i      |             |
| WARNINGLICENSESTATUS            | Custom Warning threshold of the cluster license state (default: none) Syntax: --warning-license-status='%\{license\_status\} =~ /notinstalled/i'                                   |                                         |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                 | --verbose                               |             |

</TabItem>
<TabItem value="Conference-Manager" label="Conference-Manager">

| Macro                          | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCLUSTERCONFERENCES      | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERCONFERENCES     | Threshold                                                                                          |                   |             |
| WARNINGCLUSTERCUSTOMROOMS      | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERCUSTOMROOMS     | Threshold                                                                                          |                   |             |
| WARNINGCLUSTERLOCALUSERS       | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERLOCALUSERS      | Threshold                                                                                          |                   |             |
| WARNINGCLUSTERPARTICIPANTS     | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERPARTICIPANTS    | Threshold                                                                                          |                   |             |
| WARNINGCLUSTERVIDEOPORTSFREE   | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERVIDEOPORTSFREE  | Threshold                                                                                          |                   |             |
| WARNINGCLUSTERVIDEOPORTSPRCT   | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERVIDEOPORTSPRCT  | Threshold                                                                                          |                   |             |
| WARNINGCLUSTERVIDEOPORTSUSAGE  | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERVIDEOPORTSUSAGE | Threshold                                                                                          |                   |             |
| WARNINGCLUSTERVOICEPORTSFREE   | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERVOICEPORTSFREE  | Threshold                                                                                          |                   |             |
| WARNINGCLUSTERVOICEPORTSPRCT   | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERVOICEPORTSPRCT  | Threshold                                                                                          |                   |             |
| WARNINGCLUSTERVOICEPORTSUSAGE  | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERVOICEPORTSUSAGE | Threshold                                                                                          |                   |             |
| WARNINGDMATOTALCONFERENCES     | Threshold                                                                                          |                   |             |
| CRITICALDMATOTALCONFERENCES    | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Device-Registrations" label="Device-Registrations">

| Macro                                       | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCLUSTERENDPOINTACTIVEREGISTRATION    | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERENDPOINTACTIVEREGISTRATION   | Threshold                                                                                          |                   |             |
| WARNINGCLUSTERENDPOINTINACTIVEREGISTRATION  | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERENDPOINTINACTIVEREGISTRATION | Threshold                                                                                          |                   |             |
| WARNINGDMATOTALREGISTRATIONS                | Threshold                                                                                          |                   |             |
| CRITICALDMATOTALREGISTRATIONS               | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Servers-Usage" label="Servers-Usage">

| Macro                     | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSERVERCPUUSAGE     | Threshold                                                                                          |                   |             |
| CRITICALSERVERCPUUSAGE    | Threshold                                                                                          |                   |             |
| WARNINGSERVERDISKFREE     | Threshold                                                                                          |                   |             |
| CRITICALSERVERDISKFREE    | Threshold                                                                                          |                   |             |
| WARNINGSERVERDISKPRCT     | Threshold                                                                                          |                   |             |
| CRITICALSERVERDISKPRCT    | Threshold                                                                                          |                   |             |
| WARNINGSERVERDISKUSAGE    | Threshold                                                                                          |                   |             |
| CRITICALSERVERDISKUSAGE   | Threshold                                                                                          |                   |             |
| WARNINGSERVERLOGSFREE     | Threshold                                                                                          |                   |             |
| CRITICALSERVERLOGSFREE    | Threshold                                                                                          |                   |             |
| WARNINGSERVERLOGSPRCT     | Threshold                                                                                          |                   |             |
| CRITICALSERVERLOGSPRCT    | Threshold                                                                                          |                   |             |
| WARNINGSERVERLOGSUSAGE    | Threshold                                                                                          |                   |             |
| CRITICALSERVERLOGSUSAGE   | Threshold                                                                                          |                   |             |
| WARNINGSERVERMEMORYFREE   | Threshold                                                                                          |                   |             |
| CRITICALSERVERMEMORYFREE  | Threshold                                                                                          |                   |             |
| WARNINGSERVERMEMORYPRCT   | Threshold                                                                                          |                   |             |
| CRITICALSERVERMEMORYPRCT  | Threshold                                                                                          |                   |             |
| WARNINGSERVERMEMORYUSAGE  | Threshold                                                                                          |                   |             |
| CRITICALSERVERMEMORYUSAGE | Threshold                                                                                          |                   |             |
| WARNINGSERVERSWAPFREE     | Threshold                                                                                          |                   |             |
| CRITICALSERVERSWAPFREE    | Threshold                                                                                          |                   |             |
| WARNINGSERVERSWAPPRCT     | Threshold                                                                                          |                   |             |
| CRITICALSERVERSWAPPRCT    | Threshold                                                                                          |                   |             |
| WARNINGSERVERSWAPUSAGE    | Threshold                                                                                          |                   |             |
| CRITICALSERVERSWAPUSAGE   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_polycom_dma_snmp.pl \
	--plugin=hardware::devices::polycom::dma::snmp::plugin \
	--mode=servers-usage \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--warning-server-cpu-usage='' \
	--critical-server-cpu-usage='' \
	--warning-server-memory-usage='' \
	--critical-server-memory-usage='' \
	--warning-server-memory-free='' \
	--critical-server-memory-free='' \
	--warning-server-memory-prct='' \
	--critical-server-memory-prct='' \
	--warning-server-swap-usage='' \
	--critical-server-swap-usage='' \
	--warning-server-swap-free='' \
	--critical-server-swap-free='' \
	--warning-server-swap-prct='' \
	--critical-server-swap-prct='' \
	--warning-server-disk-usage='' \
	--critical-server-disk-usage='' \
	--warning-server-disk-free='' \
	--critical-server-disk-free='' \
	--warning-server-disk-prct='' \
	--critical-server-disk-prct='' \
	--warning-server-logs-usage='' \
	--critical-server-logs-usage='' \
	--warning-server-logs-free='' \
	--critical-server-logs-free='' \
	--warning-server-logs-prct='' \
	--critical-server-logs-prct=''
```

The expected command output is shown below:

```bash
OK: All servers are ok | 'server1#dma.server.cpu.utilization.percentage'=91650%;;;0;100 'server2#dma.server.cpu.utilization.percentage'=50558%;;;0;100 'server1#dma.server.memory.usage.bytes'=15936;;;0;memory_total 'server2#dma.server.memory.usage.bytes'=97412;;;0;memory_total 'server1#dma.server.memory.free.bytes'=31047;;;0;memory_total 'server2#dma.server.memory.free.bytes'=83130;;;0;memory_total 'server1#dma.server.memory.usage.percentage'=93663%;;;0;100 'server2#dma.server.memory.usage.percentage'=52196%;;;0;100 'server1#dma.server.swap.usage.percentage'=69880;;;0;swap_total 'server2#dma.server.swap.usage.percentage'=84291;;;0;swap_total 'server1#dma.server.swap.free.bytes'=66332;;;0;swap_total 'server2#dma.server.swap.free.bytes'=3209;;;0;swap_total 'server1#dma.server.swap.usage.percentage'=85632%;;;0;100 'server2#dma.server.swap.usage.percentage'=84677%;;;0;100 'server1#dma.server.disk.usage.bytes'=99468;;;0;disk_total 'server2#dma.server.disk.usage.bytes'=75186;;;0;disk_total 'server1#dma.server.disk.free.bytes'=80118;;;0;disk_total 'server2#dma.server.disk.free.bytes'=94868;;;0;disk_total 'server1#dma.server.disk.usage.percentage'=76995%;;;0;100 'server2#dma.server.disk.usage.percentage'=97788%;;;0;100 'server1#dma.server.logs.usage.bytes'=88684;;;0;logs_total 'server2#dma.server.logs.usage.bytes'=73074;;;0;logs_total 'server1#dma.server.logs.free.bytes'=78239;;;0;logs_total 'server2#dma.server.logs.free.bytes'=22266;;;0;logs_total 'server1#dma.server.logs.usage.percentage'=20828%;;;0;100 'server2#dma.server.logs.usage.percentage'=33160%;;;0;100
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
/usr/lib/centreon/plugins/centreon_polycom_dma_snmp.pl \
	--plugin=hardware::devices::polycom::dma::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                       | Linked service template                                |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|
| alerts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/dma/snmp/mode/alerts.pm)]                            | HW-Device-Polycom-Dma-Alerts-SNMP-custom               |
| clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/dma/snmp/mode/clusters.pm)]                        | HW-Device-Polycom-Dma-Clusters-Usage-SNMP-custom       |
| conference-manager [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/dma/snmp/mode/conferencemanager.pm)]     | HW-Device-Polycom-Dma-Conference-Manager-SNMP-custom   |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpu.pm)]                                                      | Not used in this Monitoring Connector                  |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpudetailed.pm)]                                     | Not used in this Monitoring Connector                  |
| device-registrations [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/dma/snmp/mode/deviceregistrations.pm)] | HW-Device-Polycom-Dma-Device-Registrations-SNMP-custom |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                                        | Not used in this Monitoring Connector                  |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/loadaverage.pm)]                                             | Not used in this Monitoring Connector                  |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/memory.pm)]                                                | Not used in this Monitoring Connector                  |
| servers-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/dma/snmp/mode/serversusage.pm)]               | HW-Device-Polycom-Dma-Servers-Usage-SNMP-custom        |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/storage.pm)]                                              | Not used in this Monitoring Connector                  |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/swap.pm)]                                                    | Not used in this Monitoring Connector                  |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                                                | Not used in this Monitoring Connector                  |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --hostname                                 |   Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-community                           |   SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-version                             |   Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-port                                |   UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-timeout                             |   Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-retries                             |   Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --maxrepetitions                           |   Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --subsetleef                               |   How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-autoreduce                          |    Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-force-getnext                       |   Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-cache-file                          |   Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-username                            |   SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authpassphrase                           |   SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --authprotocol                             |   SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --privpassphrase                           |   SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --privprotocol                             |   SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --contextname                              |   SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --contextengineid                          |   SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given  as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --securityengineid                         |   SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-errors-exit                         |   Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       |   Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-our-identity                    |   X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-tls-their-identity                  |   X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --snmp-tls-their-hostname                  |   Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-trust-cert                      |   A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also  define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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
| --filter-msg           |   Filter by message (can be a regexp).                                                                                                                                                                                                          |
| --warning-status       |   Define the conditions to match for the status to be WARNING (default: '%\{severity\} =~ /warn/i') Can use special variables like: %\{severity\}, %\{text\}, %\{code\}, %\{since\}                                                             |
| --critical-status      |   Define the conditions to match for the status to be CRITICAL (default: '%\{severity\} =~ /severe/i'). Can use special variables like: %\{severity\}, %\{text\}, %\{source\}, %\{since\}                                                       |
| --memory               |   Only check new alarms.                                                                                                                                                                                                                        |

</TabItem>
<TabItem value="Clusters-Usage" label="Clusters-Usage">

| Option                    | Description                                                                                                                                                                                                 |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster          |   Filter on one or several cluster (POSIX regexp)                                                                                                                                                           |
| --warning-cluster-status  |   Custom Warning threshold of the cluster state (default: none) Syntax: --warning-cluster-status='%\{cluster\_status\} =~ /busyOut/i'                                                                       |
| --critical-cluster-status |   Custom Critical threshold of the cluster state (default: '%\{cluster\_status\} =~ /outOfService/i' ) Syntax: --critical-cluster-status='%\{cluster\_status\} =~ /busyOut/i'                               |
| --warning-license-status  |   Custom Warning threshold of the cluster license state (default: none) Syntax: --warning-license-status='%\{license\_status\} =~ /notinstalled/i'                                                          |
| --critical-license-status |   Custom Critical threshold of the cluster license state (default: '%\{license\_status\} =~ /invalid/i') Syntax: --critical-license-status='%\{license\_status\} =~ /notinstalled/i'                        |
| --warning-* --critical-*  |   Warning & Critical Thresholds for the collected metrics. Possible values:  \[PER-CLUSTER\] cluster-active-calls cluster-license-usage-free cluster-license-usage-prct  \[GLOBAL\] dma-total-clusters      |

</TabItem>
<TabItem value="Conference-Manager" label="Conference-Manager">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster         |   Filter on one or several cluster (POSIX regexp)                                                                                                                                                                                                                                                                                                          |
| --warning-* --critical-* |   TWarning & Critical Thresholds. Possible values: \[PER-CLUSTER\] cluster-conferences, cluster-participants, cluster-local-users, cluster-custom-rooms, cluster-video-ports-usage, cluster-video-ports-free, cluster-video-ports-prct, cluster-voice-ports-usage, cluster-voice-ports-free, cluster-voice-ports-prct  \[GLOBAL\] dma-total-conferences    |

</TabItem>
<TabItem value="Device-Registrations" label="Device-Registrations">

| Option                   | Description                                                                                                                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster         |   Filter on one or several cluster (POSIX regexp)                                                                                                                                     |
| --warning-* --critical-* |   Warning & Critical Thresholds. Possible values:  \[PER-CLUSTER\] cluster-endpoint-active-registration cluster-endpoint-inactive-registration  \[GLOBAL\] dma-total-registrations    |

</TabItem>
<TabItem value="Servers-Usage" label="Servers-Usage">

| Option                   | Description                                                                                                                                                                                                                                                                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-server          |   Filter on one or several server (POSIX regexp)                                                                                                                                                                                                                                                                                          |
| --warning-* --critical-* |   Warning & Critical Thresholds. Possible values:  \[CPU\]  server-cpu-usage \[RAM\]  server-memory-usage server-memory-free server-memory-prct \[SWAP\] server-swap-usage server-swap-free server-swap-prct \[DISK\] server-disk-usage server-disk-free server-disk-prct \[LOGS\] server-logs-usage server-logs-free server-logs-prct    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_polycom_dma_snmp.pl \
	--plugin=hardware::devices::polycom::dma::snmp::plugin \
	--mode=servers-usage \
	--help
```
