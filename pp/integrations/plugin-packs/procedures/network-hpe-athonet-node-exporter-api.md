---
id: network-hpe-athonet-node-exporter-api
slug: /network-hpe-athonet-node-exporter-api
title: HPE Athonet w/ Prometheus API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **HPE Athonet w/ Prometheus API** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **HPE Athonet w/ Prometheus API** brings a host template:

* **Net-HPE-Athonet-Node-Exporter-Api-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-HPE-Athonet-Node-Exporter-Api-custom" label="Net-HPE-Athonet-Node-Exporter-Api-custom">

| Service Alias | Service Template                                      | Service Description               |
|:--------------|:------------------------------------------------------|:----------------------------------|
| Cpu           | Net-HPE-Athonet-Node-Exporter-Cpu-Api-custom          | Monitors the CPU usage            |
| Cpu-Detailed  | Net-HPE-Athonet-Node-Exporter-Cpu-Detailed-Api-custom | Monitors the detailed CPU usage   |
| Licenses      | Net-HPE-Athonet-Node-Exporter-Licenses-Api-custom     | Monitor Athonet's licenses status |
| Load          | Net-HPE-Athonet-Node-Exporter-Load-Api-custom         | Monitors the system load average  |
| Memory        | Net-HPE-Athonet-Node-Exporter-Memory-Api-custom       | Monitors the memory usage         |

> The services listed above are created automatically when the **Net-HPE-Athonet-Node-Exporter-Api-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                    | Service Description                                                   | Discovery |
|:--------------|:----------------------------------------------------|:----------------------------------------------------------------------|:---------:|
| Chf           | Net-HPE-Athonet-Node-Exporter-Chf-Api-custom        | Monitor Athonet's **charging** function                               |           |
| Dra           | Net-HPE-Athonet-Node-Exporter-Dra-Api-custom        | Monitor Athonet's **diameter routing agent** function                 |           |
| Eir           | Net-HPE-Athonet-Node-Exporter-Eir-Api-custom        | Monitor Athonet's **equipment identity register** function            |           |
| Interfaces    | Net-HPE-Athonet-Node-Exporter-Interfaces-Api-custom | Monitors the status of the interfaces                                 | X         |
| Mme           | Net-HPE-Athonet-Node-Exporter-Mme-Api-custom        | Monitor Athonet's **mobility management entity** function             |           |
| Nrf           | Net-HPE-Athonet-Node-Exporter-Nrf-Api-custom        | Monitor Athonet's **network repository** function                     |           |
| Pcf           | Net-HPE-Athonet-Node-Exporter-Pcf-Api-custom        | Monitor Athonet's **policy control** function                         |           |
| Sgwc          | Net-HPE-Athonet-Node-Exporter-Sgwc-Api-custom       | Monitor Athonet's **serving gateway control plane** function          |           |
| Smf           | Net-HPE-Athonet-Node-Exporter-Smf-Api-custom        | Monitor Athonet's **session management** function                     |           |
| Smsf          | Net-HPE-Athonet-Node-Exporter-Smsf-Api-custom       | Monitor Athonet's **short message service** function                  |           |
| Storage       | Net-HPE-Athonet-Node-Exporter-Storage-Api-custom    | Monitors the storage usage                                            | X         |
| Udm           | Net-HPE-Athonet-Node-Exporter-Udm-Api-custom        | Monitor Athonet's **unified data management** function                |           |
| Udr           | Net-HPE-Athonet-Node-Exporter-Udr-Api-custom        | Monitor Athonet's **unified data repository** function                |           |
| Upf           | Net-HPE-Athonet-Node-Exporter-Upf-Api-custom        | Monitor Athonet's **user plane** function                             |           |
| Uptime        | Net-HPE-Athonet-Node-Exporter-Uptime-Api-custom     | Time since the server has been working and available                  |           |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                         | Description                                                   |
|:--------------------------------------------------|:--------------------------------------------------------------|
| Net-HPE-Athonet-Node-Exporter-Api-Interfaces-Name | Discover the disk partitions and monitor space occupation     |
| Net-HPE-Athonet-Node-Exporter-Api-Storage-Name    | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Chf" label="Chf">

| Name                                 | Unit  |
|:-------------------------------------|:------|
| chf.sessions.active.charging.count   | count |
| sbi-nf-registration-status           | N/A   |
| sbi.nf.registration.detected.count   | count |
| sbi.nf.registration.registered.count | count |
| sbi.nf.registration.suspended.count  | count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Name                                          | Unit |
|:----------------------------------------------|:-----|
| *nodes*~node.cpu.utilization.percentage       | %    |
| *nodes*~*cpu*#core.cpu.utilization.percentage | %    |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Name                                                    | Unit |
|:--------------------------------------------------------|:-----|
| *nodes*~node.cpu.wait.utilization.percentage            | %    |
| *nodes*~node.cpu.user.utilization.percentage            | %    |
| *nodes*~node.cpu.softirq.utilization.percentage         | %    |
| *nodes*~node.cpu.interrupt.utilization.percentage       | %    |
| *nodes*~node.cpu.idle.utilization.percentage            | %    |
| *nodes*~node.cpu.steal.utilization.percentage           | %    |
| *nodes*~node.cpu.system.utilization.percentage          | %    |
| *nodes*~node.cpu.nice.utilization.percentage            | %    |
| *nodes*~*cpu*#core.cpu.wait.utilization.percentage      | %    |
| *nodes*~*cpu*#core.cpu.user.utilization.percentage      | %    |
| *nodes*~*cpu*#core.cpu.softirq.utilization.percentage   | %    |
| *nodes*~*cpu*#core.cpu.interrupt.utilization.percentage | %    |
| *nodes*~*cpu*#core.cpu.idle.utilization.percentage      | %    |
| *nodes*~*cpu*#core.cpu.steal.utilization.percentage     | %    |
| *nodes*~*cpu*#core.cpu.system.utilization.percentage    | %    |
| *nodes*~*cpu*#core.cpu.nice.utilization.percentage      | %    |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Dra" label="Dra">

| Name                                | Unit  |
|:------------------------------------|:------|
| diameter.connections.detected.count | count |
| diameter.connections.up.count       | count |
| diameter.connections.down.count     | count |
| diameter-connection-status          | N/A   |

</TabItem>
<TabItem value="Eir" label="Eir">

| Name                                      | Unit  |
|:------------------------------------------|:------|
| clusters.detected.count                   | count |
| *clusters*~cluster.nodes.detected.count   | count |
| *clusters*~cluster.nodes.running.count    | count |
| *clusters*~cluster.nodes.notrunning.count | count |
| node-status                               | N/A   |
| diameter-connection-status                | N/A   |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Name             | Unit |
|:-----------------|:-----|
| interface-status | N/A  |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Name                    | Unit  |
|:------------------------|:------|
| licenses.detected.count | count |
| licenses.valid.count    | count |
| licenses.invalid.count  | count |
| license-status          | N/A   |

</TabItem>
<TabItem value="Load" label="Load">

| Name                         | Unit  |
|:-----------------------------|:------|
| *nodes*#load.1minute.count   | count |
| *nodes*#load.5minutes.count  | count |
| *nodes*#load.15minutes.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Memory" label="Memory">

| Name                       | Unit |
|:---------------------------|:-----|
| *nodes*#memory.usage.bytes | B    |
| *nodes*#buffer.usage.bytes | B    |
| *nodes*#cache.usage.bytes  | B    |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Mme" label="Mme">

| Name                                               | Unit  |
|:---------------------------------------------------|:------|
| mme.imsi.tracked.count                             | count |
| mme.ue.registered.count                            | count |
| mme.enb.connections.active.count                   | count |
| mme.ue.connections.active.count                    | count |
| mme.enb.cells.count                                | count |
| interface-s1enb-status                             | N/A   |
| mme.license.ue.usage.count                         | count |
| mme.license.ue.free.count                          | count |
| mme.license.ue.percentage                          | %     |
| mme.license.enb.usage.count                        | count |
| mme.license.enb.free.count                         | count |
| mme.license.enb.percentage                         | %     |
| diameter-connection-status                         | N/A   |
| gtpc-connection-status                             | N/A   |
| *gtpc*#mme.gtpc.connection.tunnels.allocated.count | count |

</TabItem>
<TabItem value="Nrf" label="Nrf">

| Name                                         | Unit  |
|:---------------------------------------------|:------|
| clusters.detected.count                      | count |
| nf.registrations.detected.count              | count |
| nf.registrations.registered.count            | count |
| nf.registrations.suspended.count             | count |
| nf-registration-status                       | N/A   |
| *registrations*#nf.registration.last.seconds | s     |
| *clusters*~cluster.nodes.detected.count      | count |
| *clusters*~cluster.nodes.running.count       | count |
| *clusters*~cluster.nodes.notrunning.count    | count |
| node-status                                  | N/A   |

</TabItem>
<TabItem value="Pcf" label="Pcf">

| Name                       | Unit  |
|:---------------------------|:------|
| pcf.pdn.n7.connected.count | count |
| pcf.sessions.n5.count      | count |
| diameter-connection-status | N/A   |

</TabItem>
<TabItem value="Sgwc" label="Sgwc">

| Name                                     | Unit  |
|:-----------------------------------------|:------|
| sgwc.ue.count                            | count |
| sgwc.dfb.count                           | count |
| pfcp-node-status                         | N/A   |
| gtpc-connection-status                   | N/A   |
| *blacklist_nodes*#peer.blacklisted.count | count |

</TabItem>
<TabItem value="Smf" label="Smf">

| Name                                     | Unit  |
|:-----------------------------------------|:------|
| smf.sessions.count                       | count |
| smf.supi.count                           | count |
| sbi-nf-registration-status               | N/A   |
| sbi.nf.registration.detected.count       | count |
| sbi.nf.registration.registered.count     | count |
| sbi.nf.registration.suspended.count      | count |
| pfcp-node-status                         | N/A   |
| *blacklist_nodes*#peer.blacklisted.count | count |

</TabItem>
<TabItem value="Smsf" label="Smsf">

| Name                       | Unit  |
|:---------------------------|:------|
| smsf.sms.stored.count      | count |
| diameter-connection-status | N/A   |

</TabItem>
<TabItem value="Storage" label="Storage">

| Name                                          | Unit |
|:----------------------------------------------|:-----|
| *nodes*~*disk_name*#storage.space.usage.bytes | B    |

</TabItem>
<TabItem value="Udm" label="Udm">

| Name                                      | Unit  |
|:------------------------------------------|:------|
| clusters.detected.count                   | count |
| sbi-nf-registration-status                | N/A   |
| sbi.nf.registration.detected.count        | count |
| sbi.nf.registration.registered.count      | count |
| sbi.nf.registration.suspended.count       | count |
| *clusters*~cluster.nodes.detected.count   | count |
| *clusters*~cluster.nodes.running.count    | count |
| *clusters*~cluster.nodes.notrunning.count | count |
| node-status                               | N/A   |
| diameter-connection-status                | N/A   |

</TabItem>
<TabItem value="Udr" label="Udr">

| Name                                      | Unit  |
|:------------------------------------------|:------|
| clusters.detected.count                   | count |
| udr.supi.change.last24h.percentage        | %     |
| sbi-nf-registration-status                | N/A   |
| sbi.nf.registration.detected.count        | count |
| sbi.nf.registration.registered.count      | count |
| sbi.nf.registration.suspended.count       | count |
| udr.license.supi.usage.count              | count |
| udr.license.supi.free.count               | count |
| udr.license.supi.percentage               | %     |
| *clusters*~cluster.nodes.detected.count   | count |
| *clusters*~cluster.nodes.running.count    | count |
| *clusters*~cluster.nodes.notrunning.count | count |
| node-status                               | N/A   |

</TabItem>
<TabItem value="Upf" label="Upf">

| Name                          | Unit  |
|:------------------------------|:------|
| upf.pfcp.nodes.detected.count | count |
| upf.sessions.count            | count |
| upf.gtpu.interfaces.count     | count |
| upf.ip.interfaces.count       | count |
| upf.dnn.count                 | count |
| upf-pfcp-node-status          | N/A   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Name   | Unit |
|:-------|:-----|
| uptime | N/A  |

</TabItem>
</Tabs>

## Prerequisites

The Centreon poller must be able to execute HTTP(S) requests to the host's Prometheus Node Exporter.

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
dnf install centreon-pack-network-hpe-athonet-node-exporter-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-hpe-athonet-node-exporter-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-hpe-athonet-node-exporter-api
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **HPE Athonet w/ Prometheus API** connector through
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
dnf install centreon-plugin-Network-Hp-Athonet-Node-Exporter-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Hp-Athonet-Node-Exporter-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-hp-athonet-node-exporter-api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-HPE-Athonet-Node-Exporter-Api-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                  | Description                                                                                                                                        | Default value           | Mandatory |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:---------:|
| ATHONETAPIUSERNAME     | Define the username for authentication                                                                                                             | login                   | X         |
| ATHONETAPIPASSWORD     | Define the password for authentication                                                                                                             | password                | X         |
| ATHONETAPIPROTOCOL     | Define https if needed                                                                                                                             | https                   |           |
| ATHONETAPIPORT         | API port                                                                                                                                           | 443                     |           |
| ATHONETAPIURLPATH      | API url path                                                                                                                                       | /core/prometheus/api/v1 |           |
| ATHONETAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).           |                         |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Chf" label="Chf">

| Macro                               | Description                                                                                                                                      | Default value               | Mandatory |
|:------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:---------:|
| FILTERCOUNTERSBLOCK                 |                                                                                                                                                  |                             |           |
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                        |                             |           |
| UNKNOWNSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}                                    |                             |           |
| WARNINGSBINFREGISTRATIONDETECTED    | Threshold                                                                                                                                        |                             |           |
| CRITICALSBINFREGISTRATIONDETECTED   | Threshold                                                                                                                                        |                             |           |
| WARNINGSBINFREGISTRATIONREGISTERED  | Threshold                                                                                                                                        |                             |           |
| CRITICALSBINFREGISTRATIONREGISTERED | Threshold                                                                                                                                        |                             |           |
| CRITICALSBINFREGISTRATIONSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}                                   | %\{status\} =~ /suspended/i |           |
| WARNINGSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}                                    |                             |           |
| WARNINGSBINFREGISTRATIONSUSPENDED   | Threshold                                                                                                                                        |                             |           |
| CRITICALSBINFREGISTRATIONSUSPENDED  | Threshold                                                                                                                                        |                             |           |
| WARNINGSESSIONSACTIVECHARGING       | Threshold                                                                                                                                        |                             |           |
| CRITICALSESSIONSACTIVECHARGING      | Threshold                                                                                                                                        |                             |           |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose                   |           |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro             | Description                                                                                                                            | Default value  | Mandatory |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------|:---------:|
| INSTANCE          | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                     | instance=~".*" |           |
| CPU               | Filter on a specific CPU (must be a PromQL filter, Default: 'cpu=~".*"')                                                               | cpu=~".*"      |           |
| WARNING\_CPU\_USAGE   | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_CPU\_USAGE  | Threshold                                                                                                                                        |                   |             |
| WARNING\_NODE\_USAGE  | Threshold                                                                                                                                        | 80                |             |
| CRITICAL\_NODE\_USAGE | Threshold                                                                                                                                        | 90                |             |
| EXTRA\_OPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro                 | Description                                                                                                                            | Default value  | Mandatory |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE                  | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                               | instance=~".*"    |             |
| CPU                       | Filter on a specific CPU (must be a PromQL filter, Default: 'cpu=~".*"')                                                                         | cpu=~".*"         |             |
| TYPE                      | Filter on a specific type (must be a PromQL filter, Default: 'mode=~".*"')                                                                       | mode=~".*"        |             |
| WARNING\_CPU\_IDLE        | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_CPU\_IDLE       | Threshold                                                                                                                                        |                   |             |
| WARNING\_CPU\_INTERRUPT   | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_CPU\_INTERRUPT  | Threshold                                                                                                                                        |                   |             |
| WARNING\_CPU\_NICE        | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_CPU\_NICE       | Threshold                                                                                                                                        |                   |             |
| WARNING\_CPU\_SOFTIRQ     | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_CPU\_SOFTIRQ    | Threshold                                                                                                                                        |                   |             |
| WARNING\_CPU\_STEAL       | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_CPU\_STEAL      | Threshold                                                                                                                                        |                   |             |
| WARNING\_CPU\_SYSTEM      | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_CPU\_SYSTEM     | Threshold                                                                                                                                        |                   |             |
| WARNING\_CPU\_USER        | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_CPU\_USER       | Threshold                                                                                                                                        |                   |             |
| WARNING\_CPU\_WAIT        | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_CPU\_WAIT       | Threshold                                                                                                                                        |                   |             |
| WARNING\_NODE\_IDLE       | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_NODE\_IDLE      | Threshold                                                                                                                                        |                   |             |
| WARNING\_NODE\_INTERRUPT  | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_NODE\_INTERRUPT | Threshold                                                                                                                                        |                   |             |
| WARNING\_NODE\_NICE       | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_NODE\_NICE      | Threshold                                                                                                                                        |                   |             |
| WARNING\_NODE\_SOFTIRQ    | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_NODE\_SOFTIRQ   | Threshold                                                                                                                                        |                   |             |
| WARNING\_NODE\_STEAL      | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_NODE\_STEAL     | Threshold                                                                                                                                        |                   |             |
| WARNING\_NODE\_SYSTEM     | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_NODE\_SYSTEM    | Threshold                                                                                                                                        |                   |             |
| WARNING\_NODE\_USER       | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_NODE\_USER      | Threshold                                                                                                                                        |                   |             |
| WARNING\_NODE\_WAIT       | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_NODE\_WAIT      | Threshold                                                                                                                                        |                   |             |
| EXTRA\_OPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose      |           |

</TabItem>
<TabItem value="Dra" label="Dra">

| Macro                               | Description                                                                                                                                       | Default value          | Mandatory |
|:------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:---------:|
| FILTERCOUNTERSBLOCK                 |                                                                                                                                                   |                        |           |
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                         |                        |           |
| FILTERORIGINHOST                    | Filter diameter peers by origin host                                                                                                              |                        |           |
| FILTERSTACK                         | Filter diameter peers by stack                                                                                                                    |                        |           |
| UNKNOWNDIAMETERCONNECTIONSTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`  |                        |           |
| WARNINGDIAMETERCONNECTIONSDETECTED  | Thresholds                                                                                                                                        |                        |           |
| CRITICALDIAMETERCONNECTIONSDETECTED | Thresholds                                                                                                                                        |                        |           |
| WARNINGDIAMETERCONNECTIONSDOWN      | Thresholds                                                                                                                                        |                        |           |
| CRITICALDIAMETERCONNECTIONSDOWN     | Thresholds                                                                                                                                        |                        |           |
| CRITICALDIAMETERCONNECTIONSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}` | %\{status\} =~ /down/i |           |
| WARNINGDIAMETERCONNECTIONSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`  |                        |           |
| WARNINGDIAMETERCONNECTIONSUP        | Thresholds                                                                                                                                        |                        |           |
| CRITICALDIAMETERCONNECTIONSUP       | Thresholds                                                                                                                                        |                        |           |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).            | --verbose              |           |

</TabItem>
<TabItem value="Eir" label="Eir">

| Macro                            | Description                                                                                                                                      | Default value                | Mandatory |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:---------:|
| FILTERCOUNTERSBLOCK              |                                                                                                                                                  |                              |           |
| FILTERCOUNTERS                   | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                        |                              |           |
| FILTERCLUSTERREPOSITORY          | Filter clusters by repository name                                                                                                               |                              |           |
| UNKNOWNNODESTATUS                | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{repository\}, %\{node\}        |                              |           |
| UNKNOWNDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}       |                              |           |
| WARNINGCLUSTERNODESDETECTED      | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERNODESDETECTED     | Thresholds                                                                                                                                       |                              |           |
| WARNINGCLUSTERNODESNOTRUNNING    | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERNODESNOTRUNNING   | Thresholds                                                                                                                                       |                              |           |
| WARNINGCLUSTERNODESRUNNING       | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERNODESRUNNING      | Thresholds                                                                                                                                       |                              |           |
| WARNINGCLUSTERSDETECTED          | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERSDETECTED         | Thresholds                                                                                                                                       |                              |           |
| CRITICALDIAMETERCONNECTIONSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}      | %\{status\} =~ /down/i       |           |
| WARNINGDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}       |                              |           |
| CRITICALNODESTATUS               | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{repository\}, %\{node\}       | %\{status\} =~ /notRunning/i |           |
| WARNINGNODESTATUS                | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{repository\}, %\{node\}        |                              |           |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose                    |           |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Macro                    | Description                                                                                                                                      | Default value             | Mandatory |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|:---------:|
| FILTERTARGETTYPE         | Filter licenses by target type                                                                                                                   |                           |           |
| UNKNOWNLICENSESTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{targetType\}                   |                           |           |
| WARNINGLICENSESDETECTED  | Thresholds                                                                                                                                       |                           |           |
| CRITICALLICENSESDETECTED | Thresholds                                                                                                                                       |                           |           |
| WARNINGLICENSESINVALID   | Thresholds                                                                                                                                       |                           |           |
| CRITICALLICENSESINVALID  | Thresholds                                                                                                                                       |                           |           |
| CRITICALLICENSESTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{targetType\}                  | %\{status\} =~ /invalid/i |           |
| WARNINGLICENSESTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{targetType\}                   |                           |           |
| WARNINGLICENSESVALID     | Thresholds                                                                                                                                       |                           |           |
| CRITICALLICENSESVALID    | Thresholds                                                                                                                                       |                           |           |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose                 |           |

</TabItem>
<TabItem value="Load" label="Load">

| Macro          | Description                                                                                        | Default value     | Mandatory   |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE           | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                               | instance=~".*"    |             |
| WARNING\_LOAD\_1   | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_LOAD\_1  | Threshold                                                                                                                                        |                   |             |
| WARNING\_LOAD\_15  | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_LOAD\_15 | Threshold                                                                                                                                        |                   |             |
| WARNING\_LOAD\_5   | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_LOAD\_5  | Threshold                                                                                                                                        |                   |             |
| EXTRA\_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro          | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE         | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                               | instance=~".*"    |             |
| UNITS            | Units of thresholds (default: '%') ('%', 'B')                                                                                                    | %                 |             |
| WARNING\_BUFFER  | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_BUFFER | Threshold                                                                                                                                        |                   |             |
| WARNING\_CACHED  | Threshold                                                                                                                                        |                   |             |
| CRITICAL\_CACHED | Threshold                                                                                                                                        |                   |             |
| WARNING\_USAGE   | Threshold                                                                                                                                        | 80                |             |
| CRITICAL\_USAGE  | Threshold                                                                                                                                        | 90                |             |
| EXTRA\_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Mme" label="Mme">

| Macro                            | Description                                                                                                                                       | Default value          | Mandatory |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:---------:|
| FILTERCOUNTERSBLOCK              |                                                                                                                                                   |                        |           |
| FILTERCOUNTERS                   | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                         |                        |           |
| UNKNOWNINTERFACES1ENBSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{enbId\}`                     |                        |           |
| UNKNOWNDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`  |                        |           |
| UNKNOWNGTPCCONNECTIONSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`  |                        |           |
| CRITICALDIAMETERCONNECTIONSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}` | %\{status\} =~ /down/i |           |
| WARNINGDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`  |                        |           |
| WARNINGENBCELLS                  | Thresholds                                                                                                                                        |                        |           |
| CRITICALENBCELLS                 | Thresholds                                                                                                                                        |                        |           |
| WARNINGENBCONNECTIONSACTIVE      | Thresholds                                                                                                                                        |                        |           |
| CRITICALENBCONNECTIONSACTIVE     | Thresholds                                                                                                                                        |                        |           |
| WARNINGGTPCALLOCATEDTUNNELS      | Thresholds                                                                                                                                        |                        |           |
| CRITICALGTPCALLOCATEDTUNNELS     | Thresholds                                                                                                                                        |                        |           |
| CRITICALGTPCCONNECTIONSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}` | %\{status\} =~ /down/i |           |
| WARNINGGTPCCONNECTIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`  |                        |           |
| WARNINGIMSITRACKED               | Thresholds                                                                                                                                        |                        |           |
| CRITICALIMSITRACKED              | Thresholds                                                                                                                                        |                        |           |
| CRITICALINTERFACES1ENBSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{enbId\}`                    | %\{status\} =~ /down/i |           |
| WARNINGINTERFACES1ENBSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{enbId\}`                     |                        |           |
| WARNINGLICENSEENBUSAGE           | Thresholds                                                                                                                                        |                        |           |
| CRITICALLICENSEENBUSAGE          | Thresholds                                                                                                                                        |                        |           |
| WARNINGLICENSEENBUSAGEFREE       | Thresholds                                                                                                                                        |                        |           |
| CRITICALLICENSEENBUSAGEFREE      | Thresholds                                                                                                                                        |                        |           |
| WARNINGLICENSEENBUSAGEPRCT       | Thresholds                                                                                                                                        |                        |           |
| CRITICALLICENSEENBUSAGEPRCT      | Thresholds                                                                                                                                        |                        |           |
| WARNINGLICENSEUEUSAGE            | Thresholds                                                                                                                                        |                        |           |
| CRITICALLICENSEUEUSAGE           | Thresholds                                                                                                                                        |                        |           |
| WARNINGLICENSEUEUSAGEFREE        | Thresholds                                                                                                                                        |                        |           |
| CRITICALLICENSEUEUSAGEFREE       | Thresholds                                                                                                                                        |                        |           |
| WARNINGLICENSEUEUSAGEPRCT        | Thresholds                                                                                                                                        |                        |           |
| CRITICALLICENSEUEUSAGEPRCT       | Thresholds                                                                                                                                        |                        |           |
| WARNINGUECONNECTIONSACTIVE       | Thresholds                                                                                                                                        |                        |           |
| CRITICALUECONNECTIONSACTIVE      | Thresholds                                                                                                                                        |                        |           |
| WARNINGUEREGISTERED              | Thresholds                                                                                                                                        |                        |           |
| CRITICALUEREGISTERED             | Thresholds                                                                                                                                        |                        |           |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).            | --verbose              |           |

</TabItem>
<TabItem value="Nrf" label="Nrf">

| Macro                             | Description                                                                                                                                      | Default value                | Mandatory |
|:----------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:---------:|
| FILTERCOUNTERSBLOCK               |                                                                                                                                                  |                              |           |
| FILTERCOUNTERS                    | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                        |                              |           |
| FILTERCLUSTERREPOSITORY           | Filter clusters by repository name                                                                                                               |                              |           |
| FILTERREGISTRATIONNFTYPE          | Filter registrations by network function type                                                                                                    |                              |           |
| UNKNOWNNODESTATUS                 | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`  |                              |           |
| UNKNOWNNFREGISTRATIONSTATUS       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{nfType\}`                   |                              |           |
| WARNINGCLUSTERNODESDETECTED       | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERNODESDETECTED      | Thresholds                                                                                                                                       |                              |           |
| WARNINGCLUSTERNODESNOTRUNNING     | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERNODESNOTRUNNING    | Thresholds                                                                                                                                       |                              |           |
| WARNINGCLUSTERNODESRUNNING        | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERNODESRUNNING       | Thresholds                                                                                                                                       |                              |           |
| WARNINGCLUSTERSDETECTED           | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERSDETECTED          | Thresholds                                                                                                                                       |                              |           |
| WARNINGNFREGISTRATIONLAST         | Thresholds                                                                                                                                       |                              |           |
| CRITICALNFREGISTRATIONLAST        | Thresholds                                                                                                                                       |                              |           |
| WARNINGNFREGISTRATIONSDETECTED    | Thresholds                                                                                                                                       |                              |           |
| CRITICALNFREGISTRATIONSDETECTED   | Thresholds                                                                                                                                       |                              |           |
| WARNINGNFREGISTRATIONSREGISTERED  | Thresholds                                                                                                                                       |                              |           |
| CRITICALNFREGISTRATIONSREGISTERED | Thresholds                                                                                                                                       |                              |           |
| WARNINGNFREGISTRATIONSSUSPENDED   | Thresholds                                                                                                                                       |                              |           |
| CRITICALNFREGISTRATIONSSUSPENDED  | Thresholds                                                                                                                                       |                              |           |
| CRITICALNFREGISTRATIONSTATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{nfType\}`                  | %\{status\} =~ /suspended/i  |           |
| WARNINGNFREGISTRATIONSTATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{nfType\}`                   |                              |           |
| CRITICALNODESTATUS                | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}` | %\{status\} =~ /notRunning/i |           |
| WARNINGNODESTATUS                 | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`  |                              |           |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose                    |           |

</TabItem>
<TabItem value="Pcf" label="Pcf">

| Macro                            | Description                                                                                                                                      | Default value          | Mandatory |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:---------:|
| FILTERCOUNTERSBLOCK              |                                                                                                                                                  |                        |           |
| FILTERCOUNTERS                   | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                        |                        |           |
| UNKNOWNDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}       |                        |           |
| CRITICALDIAMETERCONNECTIONSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}      | %\{status\} =~ /down/i |           |
| WARNINGDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}       |                        |           |
| WARNINGPDNN7CONNECTED            | Thresholds                                                                                                                                       |                        |           |
| CRITICALPDNN7CONNECTED           | Thresholds                                                                                                                                       |                        |           |
| WARNINGSESSIONSN5                | Thresholds                                                                                                                                       |                        |           |
| CRITICALSESSIONSN5               | Thresholds                                                                                                                                       |                        |           |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose              |           |

</TabItem>
<TabItem value="Sgwc" label="Sgwc">

| Macro                        | Description                                                                                                                                                 | Default value                | Mandatory |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:---------:|
| FILTERCOUNTERSBLOCK          |                                                                                                                                                             |                              |           |
| FILTERCOUNTERS               | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                   |                              |           |
| UNKNOWNPFCPNODESTATUS        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`            |                              |           |
| UNKNOWNGTPCCONNECTIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`            |                              |           |
| UNKNOWNBLACKLISTNODESTATUS   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`  |                              |           |
| CRITICALBLACKLISTNODESTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}` | %\{isBlacklisted\} =~ /yes/i |           |
| WARNINGBLACKLISTNODESTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`  |                              |           |
| WARNINGDFB                   | Thresholds                                                                                                                                                  |                              |           |
| CRITICALDFB                  | Thresholds                                                                                                                                                  |                              |           |
| CRITICALGTPCCONNECTIONSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`           | %\{status\} =~ /down/i       |           |
| WARNINGGTPCCONNECTIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`            |                              |           |
| CRITICALPFCPNODESTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`           | %\{status\} =~ /down/i       |           |
| WARNINGPFCPNODESTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`            |                              |           |
| WARNINGUE                    | Thresholds                                                                                                                                                  |                              |           |
| CRITICALUE                   | Thresholds                                                                                                                                                  |                              |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                      | --verbose                    |           |

</TabItem>
<TabItem value="Smf" label="Smf">

| Macro                               | Description                                                                                                                                                 | Default value                | Mandatory |
|:------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:---------:|
| FILTERCOUNTERSBLOCK                 |                                                                                                                                                             |                              |           |
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                   |                              |           |
| UNKNOWNSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`                                             |                              |           |
| UNKNOWNPFCPNODESTATUS               | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`            |                              |           |
| UNKNOWNBLACKLISTNODESTATUS          | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`  |                              |           |
| CRITICALBLACKLISTNODESTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}` | %\{isBlacklisted\} =~ /yes/i |           |
| WARNINGBLACKLISTNODESTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`  |                              |           |
| CRITICALPFCPNODESTATUS              | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`           | %\{status\} =~ /down/i       |           |
| WARNINGPFCPNODESTATUS               | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`            |                              |           |
| WARNINGSBINFREGISTRATIONDETECTED    | Thresholds                                                                                                                                                  |                              |           |
| CRITICALSBINFREGISTRATIONDETECTED   | Thresholds                                                                                                                                                  |                              |           |
| WARNINGSBINFREGISTRATIONREGISTERED  | Thresholds                                                                                                                                                  |                              |           |
| CRITICALSBINFREGISTRATIONREGISTERED | Thresholds                                                                                                                                                  |                              |           |
| CRITICALSBINFREGISTRATIONSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`                                            | %\{status\} =~ /suspended/i  |           |
| WARNINGSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`                                             |                              |           |
| WARNINGSBINFREGISTRATIONSUSPENDED   | Thresholds                                                                                                                                                  |                              |           |
| CRITICALSBINFREGISTRATIONSUSPENDED  | Thresholds                                                                                                                                                  |                              |           |
| WARNINGSESSIONS                     | Thresholds                                                                                                                                                  |                              |           |
| CRITICALSESSIONS                    | Thresholds                                                                                                                                                  |                              |           |
| WARNINGSUPI                         | Thresholds                                                                                                                                                  |                              |           |
| CRITICALSUPI                        | Thresholds                                                                                                                                                  |                              |           |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                      | --verbose                    |           |

</TabItem>
<TabItem value="Smsf" label="Smsf">

| Macro                            | Description                                                                                                                                       | Default value          | Mandatory |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:---------:|
| FILTERCOUNTERSBLOCK              |                                                                                                                                                   |                        |           |
| FILTERCOUNTERS                   | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                         |                        |           |
| UNKNOWNDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`  |                        |           |
| CRITICALDIAMETERCONNECTIONSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}` | %\{status\} =~ /down/i |           |
| WARNINGDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`  |                        |           |
| WARNINGSMSSTORED                 | Thresholds                                                                                                                                        |                        |           |
| CRITICALSMSSTORED                | Thresholds                                                                                                                                        |                        |           |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).            | --verbose              |           |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro         | Description                                                                                        | Default value                    | Mandatory   |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| INSTANCE        | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                               | instance=~".*"                   |             |
| MOUNT\_POINT    | Filter on a specific mountpoint (must be a PromQL filter, Default: 'mountpoint=~".*"')                                                           | mountpoint=~".*"                 |             |
| FS\_TYPE        | Filter on a specific fstype (must be a PromQL filter, Default: 'fstype!~"linuxfs\|rootfs\|tmpfs"')                                               | fstype!~"linuxfs\|rootfs\|tmpfs" |             |
| UNITS           | Units of thresholds (default: '%') ('%', 'B')                                                                                                    | %                                |             |
| WARNING\_USAGE  | Warning threshold                                                                                                                                | 80                               |             |
| CRITICAL\_USAGE | Critical threshold                                                                                                                               | 90                               |             |
| EXTRA\_OPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                        |             |

</TabItem>
<TabItem value="Udm" label="Udm">

| Macro                               | Description                                                                                                                                       | Default value                | Mandatory |
|:------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:---------:|
| FILTERCOUNTERSBLOCK                 |                                                                                                                                                   |                              |           |
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                         |                              |           |
| FILTERCLUSTERREPOSITORY             | Filter clusters by repository name                                                                                                                |                              |           |
| UNKNOWNNODESTATUS                   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`   |                              |           |
| UNKNOWNDIAMETERCONNECTIONSTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`  |                              |           |
| UNKNOWNSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`                                   |                              |           |
| WARNINGCLUSTERNODESDETECTED         | Thresholds                                                                                                                                        |                              |           |
| CRITICALCLUSTERNODESDETECTED        | Thresholds                                                                                                                                        |                              |           |
| WARNINGCLUSTERNODESNOTRUNNING       | Thresholds                                                                                                                                        |                              |           |
| CRITICALCLUSTERNODESNOTRUNNING      | Thresholds                                                                                                                                        |                              |           |
| WARNINGCLUSTERNODESRUNNING          | Thresholds                                                                                                                                        |                              |           |
| CRITICALCLUSTERNODESRUNNING         | Thresholds                                                                                                                                        |                              |           |
| WARNINGCLUSTERSDETECTED             | Thresholds                                                                                                                                        |                              |           |
| CRITICALCLUSTERSDETECTED            | Thresholds                                                                                                                                        |                              |           |
| CRITICALDIAMETERCONNECTIONSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}` | %\{status\} =~ /down/i       |           |
| WARNINGDIAMETERCONNECTIONSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`  |                              |           |
| CRITICALNODESTATUS                  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`  | %\{status\} =~ /notRunning/i |           |
| WARNINGNODESTATUS                   | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`   |                              |           |
| WARNINGSBINFREGISTRATIONDETECTED    | Thresholds                                                                                                                                        |                              |           |
| CRITICALSBINFREGISTRATIONDETECTED   | Thresholds                                                                                                                                        |                              |           |
| WARNINGSBINFREGISTRATIONREGISTERED  | Thresholds                                                                                                                                        |                              |           |
| CRITICALSBINFREGISTRATIONREGISTERED | Thresholds                                                                                                                                        |                              |           |
| CRITICALSBINFREGISTRATIONSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`                                  | %\{status\} =~ /suspended/i  |           |
| WARNINGSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`                                   |                              |           |
| WARNINGSBINFREGISTRATIONSUSPENDED   | Thresholds                                                                                                                                        |                              |           |
| CRITICALSBINFREGISTRATIONSUSPENDED  | Thresholds                                                                                                                                        |                              |           |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).            | --verbose                    |           |

</TabItem>
<TabItem value="Udr" label="Udr">

| Macro                               | Description                                                                                                                                      | Default value                | Mandatory |
|:------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:---------:|
| FILTERCOUNTERSBLOCK                 |                                                                                                                                                  |                              |           |
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                        |                              |           |
| FILTERCLUSTERREPOSITORY             | Filter clusters by repository name                                                                                                               |                              |           |
| UNKNOWNNODESTATUS                   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`  |                              |           |
| UNKNOWNSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`                                  |                              |           |
| WARNINGCLUSTERNODESDETECTED         | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERNODESDETECTED        | Thresholds                                                                                                                                       |                              |           |
| WARNINGCLUSTERNODESNOTRUNNING       | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERNODESNOTRUNNING      | Thresholds                                                                                                                                       |                              |           |
| WARNINGCLUSTERNODESRUNNING          | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERNODESRUNNING         | Thresholds                                                                                                                                       |                              |           |
| WARNINGCLUSTERSDETECTED             | Thresholds                                                                                                                                       |                              |           |
| CRITICALCLUSTERSDETECTED            | Thresholds                                                                                                                                       |                              |           |
| WARNINGLICENSESUPIUSAGE             | Thresholds                                                                                                                                       |                              |           |
| CRITICALLICENSESUPIUSAGE            | Thresholds                                                                                                                                       |                              |           |
| WARNINGLICENSESUPIUSAGEFREE         | Thresholds                                                                                                                                       |                              |           |
| CRITICALLICENSESUPIUSAGEFREE        | Thresholds                                                                                                                                       |                              |           |
| WARNINGLICENSESUPIUSAGEPRCT         | Thresholds                                                                                                                                       |                              |           |
| CRITICALLICENSESUPIUSAGEPRCT        | Thresholds                                                                                                                                       |                              |           |
| CRITICALNODESTATUS                  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}` | %\{status\} =~ /notRunning/i |           |
| WARNINGNODESTATUS                   | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`  |                              |           |
| WARNINGSBINFREGISTRATIONDETECTED    | Thresholds                                                                                                                                       |                              |           |
| CRITICALSBINFREGISTRATIONDETECTED   | Thresholds                                                                                                                                       |                              |           |
| WARNINGSBINFREGISTRATIONREGISTERED  | Thresholds                                                                                                                                       |                              |           |
| CRITICALSBINFREGISTRATIONREGISTERED | Thresholds                                                                                                                                       |                              |           |
| CRITICALSBINFREGISTRATIONSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`                                 | %\{status\} =~ /suspended/i  |           |
| WARNINGSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`                                  |                              |           |
| WARNINGSBINFREGISTRATIONSUSPENDED   | Thresholds                                                                                                                                       |                              |           |
| CRITICALSBINFREGISTRATIONSUSPENDED  | Thresholds                                                                                                                                       |                              |           |
| WARNINGSUPICHANGELAST24H            | Thresholds                                                                                                                                       |                              |           |
| CRITICALSUPICHANGELAST24H           | Thresholds                                                                                                                                       |                              |           |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose                    |           |

</TabItem>
<TabItem value="Upf" label="Upf">

| Macro                        | Description                                                                                                                                       | Default value          | Mandatory |
|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:---------:|
| FILTERCOUNTERSBLOCK          |                                                                                                                                                   |                        |           |
| FILTERCOUNTERS               | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                         |                        |           |
| UNKNOWNUPFPFCPNODESTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`  |                        |           |
| WARNINGUPFDNN                | Thresholds                                                                                                                                        |                        |           |
| CRITICALUPFDNN               | Thresholds                                                                                                                                        |                        |           |
| WARNINGUPFFPCFNODESDETECTED  | Thresholds                                                                                                                                        |                        |           |
| CRITICALUPFFPCFNODESDETECTED | Thresholds                                                                                                                                        |                        |           |
| WARNINGUPFGTPUINTERFACES     | Thresholds                                                                                                                                        |                        |           |
| CRITICALUPFGTPUINTERFACES    | Thresholds                                                                                                                                        |                        |           |
| WARNINGUPFIPINTERFACES       | Thresholds                                                                                                                                        |                        |           |
| CRITICALUPFIPINTERFACES      | Thresholds                                                                                                                                        |                        |           |
| CRITICALUPFPFCPNODESTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}` | %\{status\} =~ /down/i |           |
| WARNINGUPFPFCPNODESTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`  |                        |           |
| WARNINGUPFSESSIONS           | Thresholds                                                                                                                                        |                        |           |
| CRITICALUPFSESSIONS          | Thresholds                                                                                                                                        |                        |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).            | --verbose              |           |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro | Description                                                                                                                                                           | Default value | Mandatory |
|:-----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER\_INSTANCE | Threshold                                                                                                                                                             |                   |             |
| WARNING\_UPTIME  | Threshold                                                                                                                                                             |                   |             |
| CRITICAL\_UPTIME | Threshold                                                                                                                                                             |                   |             |
| UNIT             | Select the time unit for the performance data and thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds | s                 |             |
| EXTRA\_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).            | --verbose              |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_hp_athonet_node_exporter_api.pl \
	--plugin=network::hp::athonet::nodeexporter::api::plugin \
	--custommode=api \
	--mode=upf \
	--hostname=10.0.0.1 \
	--url-path='/core/prometheus/api/v1' \
	--port='443' \
	--proto='https' \
	--api-username='login' \
	--api-password='password'  \
	--filter-counters-block='' \
	--filter-counters='' \
	--unknown-upf-pfcp-node-status='' \
	--warning-upf-pfcp-node-status='' \
	--critical-upf-pfcp-node-status='%\{status\} =~ /down/i' \
	--warning-upf-fpcf-nodes-detected='' \
	--critical-upf-fpcf-nodes-detected='' \
	--warning-upf-sessions='' \
	--critical-upf-sessions='' \
	--warning-upf-gtpu-interfaces='' \
	--critical-upf-gtpu-interfaces='' \
	--warning-upf-ip-interfaces='' \
	--critical-upf-ip-interfaces='' \
	--warning-upf-dnn='' \
	--critical-upf-dnn='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: fpcf nodes detected: 25250 sessions: 4012 GTP-U interfaces: 55083 IP interfaces: 55599 DNN: 26887 All PFCP nodes are ok | 'upf.pfcp.nodes.detected.count'=25250;;;0; 'upf.sessions.count'=4012;;;0; 'upf.gtpu.interfaces.count'=55083;;;0; 'upf.ip.interfaces.count'=55599;;;0; 'upf.dnn.count'=26887;;;0; 
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
/usr/lib/centreon/plugins/centreon_hp_athonet_node_exporter_api.pl \
	--plugin=network::hp::athonet::nodeexporter::api::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                             | Linked service template                               |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| chf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/chf.pm)]                      | Net-HPE-Athonet-Node-Exporter-Chf-Api-custom          |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/cpu.pm)]                  | Net-HPE-Athonet-Node-Exporter-Cpu-Api-custom          |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/cpudetailed.pm)] | Net-HPE-Athonet-Node-Exporter-Cpu-Detailed-Api-custom |
| dra [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/dra.pm)]                      | Net-HPE-Athonet-Node-Exporter-Dra-Api-custom          |
| eir [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/eir.pm)]                      | Net-HPE-Athonet-Node-Exporter-Eir-Api-custom          |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/interfaces.pm)]    | Net-HPE-Athonet-Node-Exporter-Interfaces-Api-custom   |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/licenses.pm)]            | Net-HPE-Athonet-Node-Exporter-Licenses-Api-custom     |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/load.pm)]                | Net-HPE-Athonet-Node-Exporter-Load-Api-custom         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/memory.pm)]            | Net-HPE-Athonet-Node-Exporter-Memory-Api-custom       |
| mme [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/mme.pm)]                      | Net-HPE-Athonet-Node-Exporter-Mme-Api-custom          |
| nrf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/nrf.pm)]                      | Net-HPE-Athonet-Node-Exporter-Nrf-Api-custom          |
| pcf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/pcf.pm)]                      | Net-HPE-Athonet-Node-Exporter-Pcf-Api-custom          |
| sgwc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/sgwc.pm)]                    | Net-HPE-Athonet-Node-Exporter-Sgwc-Api-custom         |
| smf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/smf.pm)]                      | Net-HPE-Athonet-Node-Exporter-Smf-Api-custom          |
| smsf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/smsf.pm)]                    | Net-HPE-Athonet-Node-Exporter-Smsf-Api-custom         |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/storage.pm)]          | Net-HPE-Athonet-Node-Exporter-Storage-Api-custom      |
| udm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/udm.pm)]                      | Net-HPE-Athonet-Node-Exporter-Udm-Api-custom          |
| udr [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/udr.pm)]                      | Net-HPE-Athonet-Node-Exporter-Udr-Api-custom          |
| upf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/upf.pm)]                      | Net-HPE-Athonet-Node-Exporter-Upf-Api-custom          |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/uptime.pm)]            | Net-HPE-Athonet-Node-Exporter-Uptime-Api-custom       |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timeframe                                | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --step                                     | Set the step of the metric query (examples: `30s`, `1m`, `15m`, C\<1hC\<).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --hostname                                 | Prometheus hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --url-path                                 | API url path (default: `/core/prometheus/api/v1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proto                                    | Define https if needed (default: `https`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --credentials                              | Specify this option if you access the API with authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --username                                 | Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --password                                 | Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --basic                                    | Specify this option if you access the API over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access the API over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --timeout                                  | Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --header                                   | Set HTTP header (can be multiple, example: --header='Authorization:Bearer ABCD')  Useful to access Prometheus API hosted in a specific environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --api-backend                              | Define the backend for authentication (default: `local`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --api-username                             | Define the username for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --api-password                             | Define the password for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Chf" label="Chf">

| Option                                    | Description                                                                                                                                             |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-sbi-nf-registration-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}                                           |
| --warning-sbi-nf-registration-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}                                           |
| --critical-sbi-nf-registration-status     | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /suspended/i'). You can use the following variables: %\{status\} |
| --warning-sbi-nf-registration-detected    | Threshold.                                                                                                                                              |
| --critical-sbi-nf-registration-detected   | Threshold.                                                                                                                                              |
| --warning-sbi-nf-registration-registered  | Threshold.                                                                                                                                              |
| --critical-sbi-nf-registration-registered | Threshold.                                                                                                                                              |
| --warning-sbi-nf-registration-suspended   | Threshold.                                                                                                                                              |
| --critical-sbi-nf-registration-suspended  | Threshold.                                                                                                                                              |
| --warning-sessions-active-charging        | Threshold.                                                                                                                                              |
| --critical-sessions-active-charging       | Threshold.                                                                                                                                              |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                | Description                                                                                                                                                |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance            | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                                         |
| --cpu                 | Filter on a specific CPU (must be a PromQL filter, Default: 'cpu=~".*"')                                                                                   |
| --warning-cpu-usage   | Threshold in percentage.                                                                                                                                   |
| --critical-cpu-usage  | Threshold in percentage.                                                                                                                                   |
| --warning-node-usage  | Threshold in percentage.                                                                                                                                   |
| --critical-node-usage | Threshold in percentage.                                                                                                                                   |
| --extra-filter        | Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                         |
| --metric-overload     | Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - cpu: ^node\_cpu.* |
| --filter-counters     | Only display some counters (regexp can be used). Example: --filter-counters='node'                                                                         |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                    | Description                                                                                                                                                                |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance                | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                                                         |
| --cpu                     | Filter on a specific CPU (must be a PromQL filter, Default: 'cpu=~".*"')                                                                                                   |
| --type                    | Filter on a specific type (must be a PromQL filter, Default: 'mode=~".*"')                                                                                                 |
| --warning-cpu-idle        | Threshold in percentage.                                                                                                                                                   |
| --critical-cpu-idle       | Threshold in percentage.                                                                                                                                                   |
| --warning-cpu-interrupt   | Threshold in percentage.                                                                                                                                                   |
| --critical-cpu-interrupt  | Threshold in percentage.                                                                                                                                                   |
| --warning-cpu-nice        | Threshold in percentage.                                                                                                                                                   |
| --critical-cpu-nice       | Threshold in percentage.                                                                                                                                                   |
| --warning-cpu-softirq     | Threshold in percentage.                                                                                                                                                   |
| --critical-cpu-softirq    | Threshold in percentage.                                                                                                                                                   |
| --warning-cpu-steal       | Threshold in percentage.                                                                                                                                                   |
| --critical-cpu-steal      | Threshold in percentage.                                                                                                                                                   |
| --warning-cpu-system      | Threshold in percentage.                                                                                                                                                   |
| --critical-cpu-system     | Threshold in percentage.                                                                                                                                                   |
| --warning-cpu-user        | Threshold in percentage.                                                                                                                                                   |
| --critical-cpu-user       | Threshold in percentage.                                                                                                                                                   |
| --warning-cpu-wait        | Threshold in percentage.                                                                                                                                                   |
| --critical-cpu-wait       | Threshold in percentage.                                                                                                                                                   |
| --warning-node-idle       | Threshold in percentage.                                                                                                                                                   |
| --critical-node-idle      | Threshold in percentage.                                                                                                                                                   |
| --warning-node-interrupt  | Threshold in percentage.                                                                                                                                                   |
| --critical-node-interrupt | Threshold in percentage.                                                                                                                                                   |
| --warning-node-nice       | Threshold in percentage.                                                                                                                                                   |
| --critical-node-nice      | Threshold in percentage.                                                                                                                                                   |
| --warning-node-softirq    | Threshold in percentage.                                                                                                                                                   |
| --critical-node-softirq   | Threshold in percentage.                                                                                                                                                   |
| --warning-node-steal      | Threshold in percentage.                                                                                                                                                   |
| --critical-node-steal     | Threshold in percentage.                                                                                                                                                   |
| --warning-node-system     | Threshold in percentage.                                                                                                                                                   |
| --critical-node-system    | Threshold in percentage.                                                                                                                                                   |
| --warning-node-user       | Threshold in percentage.                                                                                                                                                   |
| --critical-node-user      | Threshold in percentage.                                                                                                                                                   |
| --warning-node-wait       | Threshold in percentage.                                                                                                                                                   |
| --critical-node-wait      | Threshold in percentage.                                                                                                                                                   |
| --extra-filter            | Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                         |
| --metric-overload         | Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - cpu: ^node\_cpu\_seconds\_total.* |
| --filter-counters         | Only display some counters (regexp can be used). Example: --filter-counters='wait'                                                                                         |

</TabItem>
<TabItem value="Dra" label="Dra">

| Option                                   | Description                                                                                                                                                                           |
|:-----------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-origin-host                     | Filter diameter peers by origin host.                                                                                                                                                 |
| --filter-stack                           | Filter diameter peers by stack.                                                                                                                                                       |
| --unknown-diameter-connection-status     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                      |
| --warning-diameter-connection-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                      |
| --critical-diameter-connection-status    | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}` |
| --warning-diameter-connections-detected  | Thresholds.                                                                                                                                                                           |
| --critical-diameter-connections-detected | Thresholds.                                                                                                                                                                           |
| --warning-diameter-connections-up        | Thresholds.                                                                                                                                                                           |
| --critical-diameter-connections-up       | Thresholds.                                                                                                                                                                           |
| --warning-diameter-connections-down      | Thresholds.                                                                                                                                                                           |
| --critical-diameter-connections-down     | Thresholds.                                                                                                                                                                           |

</TabItem>
<TabItem value="Eir" label="Eir">

| Option                                | Description                                                                                                                                                                          |
|:--------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster-repository           | Filter clusters by repository name.                                                                                                                                                  |
| --unknown-node-status                 | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{repository\}, %\{node\}                                            |
| --warning-node-status                 | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{repository\}, %\{node\}                                            |
| --critical-node-status                | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /notRunning/i'). You can use the following variables: %\{status\}, %\{repository\}, %\{node\} |
| --unknown-diameter-connection-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                           |
| --warning-diameter-connection-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                           |
| --critical-diameter-connection-status | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /down/i'). You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}      |
| --warning-clusters-detected           | Thresholds.                                                                                                                                                                          |
| --critical-clusters-detected          | Thresholds.                                                                                                                                                                          |
| --warning-cluster-nodes-detected      | Thresholds.                                                                                                                                                                          |
| --critical-cluster-nodes-detected     | Thresholds.                                                                                                                                                                          |
| --warning-cluster-nodes-running       | Thresholds.                                                                                                                                                                          |
| --critical-cluster-nodes-running      | Thresholds.                                                                                                                                                                          |
| --warning-cluster-nodes-notrunning    | Thresholds.                                                                                                                                                                          |
| --critical-cluster-nodes-notrunning   | Thresholds.                                                                                                                                                                          |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                      | Description                                                                                                                                                                                                                     |
|:----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name               | Filter interfaces by name.                                                                                                                                                                                                      |
| --filter-instance           | Filter interfaces by instance.                                                                                                                                                                                                  |
| --unknown-interface-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{opstatus\}, %\{admstatus\}, %\{name\}                                                                                      |
| --warning-interface-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{opstatus\}, %\{admstatus\}, %\{name\}                                                                                      |
| --critical-interface-status | Define the conditions to match for the status to be CRITICAL (default: '%\{name\} ne "lo" and %\{admstatus\} eq "up" and %\{opstatus\} ne "up"'). You can use the following variables: %\{opstatus\}, %\{admstatus\}, %\{name\} |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Option                       | Description                                                                                                                                                            |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-target-type         | Filter licenses by target type.                                                                                                                                        |
| --unknown-license-status     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{targetType\}                                         |
| --warning-license-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{targetType\}                                         |
| --critical-license-status    | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /invalid/i'). You can use the following variables: %\{status\}, %\{targetType\} |
| --warning-licenses-detected  | Thresholds.                                                                                                                                                            |
| --critical-licenses-detected | Thresholds.                                                                                                                                                            |
| --warning-licenses-valid     | Thresholds.                                                                                                                                                            |
| --critical-licenses-valid    | Thresholds.                                                                                                                                                            |
| --warning-licenses-invalid   | Thresholds.                                                                                                                                                            |
| --critical-licenses-invalid  | Thresholds.                                                                                                                                                            |

</TabItem>
<TabItem value="Load" label="Load">

| Option            | Description                                                                                                                                                                                                           |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                                                                                                    |
| --warning-load1   | Threshold.                                                                                                                                                                                                            |
| --critical-load1  | Threshold.                                                                                                                                                                                                            |
| --warning-load15  | Threshold.                                                                                                                                                                                                            |
| --critical-load15 | Threshold.                                                                                                                                                                                                            |
| --warning-load5   | Threshold.                                                                                                                                                                                                            |
| --critical-load5  | Threshold.                                                                                                                                                                                                            |
| --extra-filter    | Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                    |
| --metric-overload | Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - load1: ^node\_load1$     - load5: ^node\_load5$     - load15: ^node\_load15$ |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='load15'                                                                                                                                  |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                                                                                                                                                                                                                                                                                                                                                                             |
| --warning-buffer  | Threshold in bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --critical-buffer | Threshold in bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --warning-cached  | Threshold in bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --critical-cached | Threshold in bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --warning-usage   | Threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --critical-usage  | Threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --units           | Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --extra-filter    | Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                                                                                                                                                                                                                                                                                             |
| --metric-overload | Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  By default, 'node\_memory\_MemFree' node's metric will be used for 'available' metric as it is more commonly used for now. The best being to use 'node\_memory\_MemAvailable' in the future.  Default :      - total: ^node\_memory\_MemTotal.*     - available: ^node\_memory\_MemFree.*     - cached: ^node\_memory\_Cached.*     - buffer: ^node\_memory\_Buffers.* |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='usage'                                                                                                                                                                                                                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Mme" label="Mme">

| Option                                | Description                                                                                                                                                                            |
|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-interface-s1enb-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{enbId\}`.                                                         |
| --warning-interface-s1enb-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{enbId\}`.                                                         |
| --critical-interface-s1enb-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{enbId\}`.                    |
| --unknown-diameter-connection-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                      |
| --warning-diameter-connection-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                      |
| --critical-diameter-connection-status | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`. |
| --unknown-gtpc-connection-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                      |
| --warning-gtpc-connection-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                      |
| --critical-gtpc-connection-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`. |
| --warning-imsi-tracked                | Thresholds.                                                                                                                                                                            |
| --critical-imsi-tracked               | Thresholds.                                                                                                                                                                            |
| --warning-ue-registered               | Thresholds.                                                                                                                                                                            |
| --critical-ue-registered              | Thresholds.                                                                                                                                                                            |
| --warning-enb-connections-active      | Thresholds.                                                                                                                                                                            |
| --critical-enb-connections-active     | Thresholds.                                                                                                                                                                            |
| --warning-ue-connections-active       | Thresholds.                                                                                                                                                                            |
| --critical-ue-connections-active      | Thresholds.                                                                                                                                                                            |
| --warning-enb-cells                   | Thresholds.                                                                                                                                                                            |
| --critical-enb-cells                  | Thresholds.                                                                                                                                                                            |
| --warning-license-ue-usage            | Thresholds.                                                                                                                                                                            |
| --critical-license-ue-usage           | Thresholds.                                                                                                                                                                            |
| --warning-license-ue-usage-free       | Thresholds.                                                                                                                                                                            |
| --critical-license-ue-usage-free      | Thresholds.                                                                                                                                                                            |
| --warning-license-ue-usage-prct       | Thresholds.                                                                                                                                                                            |
| --critical-license-ue-usage-prct      | Thresholds.                                                                                                                                                                            |
| --warning-license-enb-usage           | Thresholds.                                                                                                                                                                            |
| --critical-license-enb-usage          | Thresholds.                                                                                                                                                                            |
| --warning-license-enb-usage-free      | Thresholds.                                                                                                                                                                            |
| --critical-license-enb-usage-free     | Thresholds.                                                                                                                                                                            |
| --warning-license-enb-usage-prct      | Thresholds.                                                                                                                                                                            |
| --critical-license-enb-usage-prct     | Thresholds.                                                                                                                                                                            |
| --warning-gtpc-allocated-tunnels      | Thresholds.                                                                                                                                                                            |
| --critical-gtpc-allocated-tunnels     | Thresholds.                                                                                                                                                                            |

</TabItem>
<TabItem value="Nrf" label="Nrf">

| Option                                 | Description                                                                                                                                                                                 |
|:---------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster-repository            | Filter clusters by repository name.                                                                                                                                                         |
| --filter-registration-nftype           | Filter registrations by network function type.                                                                                                                                              |
| --unknown-node-status                  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --warning-node-status                  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --critical-node-status                 | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /notRunning/i`). You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`. |
| --unknown-nf-registration-status       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{nfType\}`.                                                             |
| --warning-nf-registration-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{nfType\}`.                                                             |
| --critical-nf-registration-status      | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`, `%\{nfType\}`.                   |
| --warning-clusters-detected            | Thresholds.                                                                                                                                                                                 |
| --critical-clusters-detected           | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-detected       | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-detected      | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-running        | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-running       | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-notrunning     | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-notrunning    | Thresholds.                                                                                                                                                                                 |
| --warning-nf-registration-last         | Thresholds.                                                                                                                                                                                 |
| --critical-nf-registration-last        | Thresholds.                                                                                                                                                                                 |
| --warning-nf-registrations-detected    | Thresholds.                                                                                                                                                                                 |
| --critical-nf-registrations-detected   | Thresholds.                                                                                                                                                                                 |
| --warning-nf-registrations-registered  | Thresholds.                                                                                                                                                                                 |
| --critical-nf-registrations-registered | Thresholds.                                                                                                                                                                                 |
| --warning-nf-registrations-suspended   | Thresholds.                                                                                                                                                                                 |
| --critical-nf-registrations-suspended  | Thresholds.                                                                                                                                                                                 |

</TabItem>
<TabItem value="Pcf" label="Pcf">

| Option                                | Description                                                                                                                                                                     |
|:--------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-diameter-connection-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                      |
| --warning-diameter-connection-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                      |
| --critical-diameter-connection-status | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /down/i'). You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\} |
| --warning-pdn-n7-connected            | Thresholds.                                                                                                                                                                     |
| --critical-pdn-n7-connected           | Thresholds.                                                                                                                                                                     |
| --warning-sessions-n5                 | Thresholds.                                                                                                                                                                     |
| --critical-sessions-n5                | Thresholds.                                                                                                                                                                     |

</TabItem>
<TabItem value="Sgwc" label="Sgwc">

| Option                            | Description                                                                                                                                                                                            |
|:----------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-pfcp-node-status        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --warning-pfcp-node-status        | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --critical-pfcp-node-status       | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                 |
| --unknown-gtpc-connection-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --warning-gtpc-connection-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --critical-gtpc-connection-status | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                 |
| --unknown-blacklist-node-status   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`.                                            |
| --warning-blacklist-node-status   | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`.                                            |
| --critical-blacklist-node-status  | Define the conditions to match for the status to be CRITICAL (default: `%\{isBlacklisted\} =~ /yes/i`). You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`. |
| --warning-ue                      | Thresholds.                                                                                                                                                                                            |
| --critical-ue                     | Thresholds.                                                                                                                                                                                            |
| --warning-dfb                     | Thresholds.                                                                                                                                                                                            |
| --critical-dfb                    | Thresholds.                                                                                                                                                                                            |

</TabItem>
<TabItem value="Smf" label="Smf">

| Option                                    | Description                                                                                                                                                                                            |
|:------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-sbi-nf-registration-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`.                                                                                       |
| --warning-sbi-nf-registration-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`.                                                                                       |
| --critical-sbi-nf-registration-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`.                                             |
| --unknown-pfcp-node-status                | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --warning-pfcp-node-status                | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --critical-pfcp-node-status               | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                 |
| --unknown-blacklist-node-status           | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`.                                            |
| --warning-blacklist-node-status           | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`.                                            |
| --critical-blacklist-node-status          | Define the conditions to match for the status to be CRITICAL (default: `%\{isBlacklisted\} =~ /yes/i`). You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`. |
| --warning-sessions                        | Thresholds.                                                                                                                                                                                            |
| --critical-sessions                       | Thresholds.                                                                                                                                                                                            |
| --warning-supi                            | Thresholds.                                                                                                                                                                                            |
| --critical-supi                           | Thresholds.                                                                                                                                                                                            |
| --warning-sbi-nf-registration-detected    | Thresholds.                                                                                                                                                                                            |
| --critical-sbi-nf-registration-detected   | Thresholds.                                                                                                                                                                                            |
| --warning-sbi-nf-registration-registered  | Thresholds.                                                                                                                                                                                            |
| --critical-sbi-nf-registration-registered | Thresholds.                                                                                                                                                                                            |
| --warning-sbi-nf-registration-suspended   | Thresholds.                                                                                                                                                                                            |
| --critical-sbi-nf-registration-suspended  | Thresholds.                                                                                                                                                                                            |

</TabItem>
<TabItem value="Smsf" label="Smsf">

| Option                                | Description                                                                                                                                                                            |
|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-diameter-connection-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                      |
| --warning-diameter-connection-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                      |
| --critical-diameter-connection-status | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`. |
| --warning-sms-stored                  | Thresholds.                                                                                                                                                                            |
| --critical-sms-stored                 | Thresholds.                                                                                                                                                                            |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option            | Description                                                                                                                                                                                                    |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        | Filter on a specific instance (must be a PromQL filter, Default: 'instance=~".*"')                                                                                                                             |
| --mountpoint      | Filter on a specific mountpoint (must be a PromQL filter, Default: 'mountpoint=~".*"')                                                                                                                         |
| --fstype          | Filter on a specific file system type (must be a PromQL filter, Default: `fstype!~'linuxfs\|rootfs\|tmpfs'`)                                                                                                   |
| --units           | Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                 |
| --free            | Thresholds are on free space left.                                                                                                                                                                             |
| --warning-usage   | Warning threshold.                                                                                                                                                                                             |
| --critical-usage  | Critical threshold.                                                                                                                                                                                            |
| --extra-filter    | Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                             |
| --metric-overload | Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - free: ^node\_filesystem\_free.*     - size: ^node\_filesystem\_size.* |

</TabItem>
<TabItem value="Udm" label="Udm">

| Option                                    | Description                                                                                                                                                                                 |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster-repository               | Filter clusters by repository name.                                                                                                                                                         |
| --unknown-node-status                     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --warning-node-status                     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --critical-node-status                    | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /notRunning/i`). You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`. |
| --unknown-diameter-connection-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                           |
| --warning-diameter-connection-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                           |
| --critical-diameter-connection-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.      |
| --unknown-sbi-nf-registration-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`.                                                                            |
| --warning-sbi-nf-registration-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`.                                                                            |
| --critical-sbi-nf-registration-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`.                                  |
| --warning-clusters-detected               | Thresholds.                                                                                                                                                                                 |
| --critical-clusters-detected              | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-detected          | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-detected         | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-running           | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-running          | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-notrunning        | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-notrunning       | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-detected    | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-detected   | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-registered  | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-registered | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-suspended   | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-suspended  | Thresholds.                                                                                                                                                                                 |

</TabItem>
<TabItem value="Udr" label="Udr">

| Option                                    | Description                                                                                                                                                                                 |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster-repository               | Filter clusters by repository name.                                                                                                                                                         |
| --unknown-node-status                     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --warning-node-status                     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --critical-node-status                    | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /notRunning/i`). You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`. |
| --unknown-sbi-nf-registration-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`.                                                                            |
| --warning-sbi-nf-registration-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`.                                                                            |
| --critical-sbi-nf-registration-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`.                                  |
| --warning-clusters-detected               | Thresholds.                                                                                                                                                                                 |
| --critical-clusters-detected              | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-detected          | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-detected         | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-running           | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-running          | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-notrunning        | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-notrunning       | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-detected    | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-detected   | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-registered  | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-registered | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-suspended   | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-suspended  | Thresholds.                                                                                                                                                                                 |
| --warning-license-supi-usage              | Thresholds.                                                                                                                                                                                 |
| --critical-license-supi-usage             | Thresholds.                                                                                                                                                                                 |
| --warning-license-supi-usage-free         | Thresholds.                                                                                                                                                                                 |
| --critical-license-supi-usage-free        | Thresholds.                                                                                                                                                                                 |
| --warning-license-supi-usage-prct         | Thresholds.                                                                                                                                                                                 |
| --critical-license-supi-usage-prct        | Thresholds.                                                                                                                                                                                 |
| --warning-supi-change-last24h             | Thresholds.                                                                                                                                                                                 |
| --critical-supi-change-last24h            | Thresholds.                                                                                                                                                                                 |

</TabItem>
<TabItem value="Upf" label="Upf">

| Option                             | Description                                                                                                                                                                            |
|:-----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-upf-pfcp-node-status     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                      |
| --warning-upf-pfcp-node-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                      |
| --critical-upf-pfcp-node-status    | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`. |
| --warning-upf-fpcf-nodes-detected  | Thresholds.                                                                                                                                                                            |
| --critical-upf-fpcf-nodes-detected | Thresholds.                                                                                                                                                                            |
| --warning-upf-sessions             | Thresholds.                                                                                                                                                                            |
| --critical-upf-sessions            | Thresholds.                                                                                                                                                                            |
| --warning-upf-gtpu-interfaces      | Thresholds.                                                                                                                                                                            |
| --critical-upf-gtpu-interfaces     | Thresholds.                                                                                                                                                                            |
| --warning-upf-ip-interfaces        | Thresholds.                                                                                                                                                                            |
| --critical-upf-ip-interfaces       | Thresholds.                                                                                                                                                                            |
| --warning-upf-dnn                  | Thresholds.                                                                                                                                                                            |
| --critical-upf-dnn                 | Thresholds.                                                                                                                                                                            |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                            |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-instance | Filter uptime by instance.                                                                                                                                             |
| --warning-uptime  | Warning threshold.                                                                                                                                                     |
| --critical-uptime | Critical threshold.                                                                                                                                                    |
| --unit            | Select the time unit for the performance data and thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hp_athonet_node_exporter_api.pl \
	--plugin=network::hp::athonet::nodeexporter::api::plugin \
	--custommode=api \
	--help
```
