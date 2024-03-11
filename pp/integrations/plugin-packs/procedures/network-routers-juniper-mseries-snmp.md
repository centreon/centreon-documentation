---
id: network-routers-juniper-mseries-snmp
title: Juniper M-Series
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Juniper M-Series** brings a host template:

* **Net-Juniper-Mseries-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Juniper-Mseries-SNMP-custom" label="Net-Juniper-Mseries-SNMP-custom">

| Service Alias  | Service Template                          | Service Description                  |
|:---------------|:------------------------------------------|:-------------------------------------|
| Cpu-Routing    | Net-Juniper-Mseries-Cpu-Routing-custom    | Check CPU Usage of routing engine    |
| Hardware       | Net-Juniper-Mseries-Hardware-custom       | Check hardware                       |
| Memory-Routing | Net-Juniper-Mseries-Memory-Routing-custom | Check Memory Usage of routing engine |

> The services listed above are created automatically when the **Net-Juniper-Mseries-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias              | Service Template                                           | Service Description                                                                          | Discovery  |
|:---------------------------|:-----------------------------------------------------------|:---------------------------------------------------------------------------------------------|:----------:|
| Bgp-Peer-Prefix-Statistics | Net-Juniper-Mseries-SNMP-Bgp-Peer-Prefix-Statistics-custom | Check BGP peers prefix statistics                                                            |            |
| Bgp-Peer-State             | Net-Juniper-Mseries-SNMP-Bgp-Peer-State-custom             | Check BGP peers status                                                                       |            |
| Disk-Generic-Id            | Net-Juniper-Mseries-Disk-Generic-Id-custom                 | Check the rate of free space on the disk                                                     |            |
| Disk-Generic-Name          | Net-Juniper-Mseries-Disk-Generic-Name-custom               | Check the rate of free space on the disk                                                     |            |
| Disk-Global                | Net-Juniper-Mseries-Disk-Global-custom                     | Check the rate of free space on the disk                                                     | X          |
| Ldp-Session-Status         | Net-Juniper-Mseries-SNMP-Ldp-Session-Status-custom         | Check LDP sessions status                                                                    |            |
| Lsp-Status                 | Net-Juniper-Mseries-SNMP-Lsp-Status-custom                 | Check LSP status                                                                             |            |
| Rsvp-Session-Status        | Net-Juniper-Mseries-SNMP-Rsvp-Session-Status-custom        | Check RSVP sessions status                                                                   |            |
| Traffic-Generic-Id         | Net-Juniper-Mseries-Traffic-Generic-Id-custom              | Check the bandwidth of the interface. For each checks the name of the interface will appear  |            |
| Traffic-Generic-Name       | Net-Juniper-Mseries-Traffic-Generic-Name-custom            | Check the bandwidth of the interface. For each checks the name of the interface will appear  |            |
| Traffic-Global             | Net-Juniper-Mseries-Traffic-Global-custom                  | Check the bandwidth of  interfaces. For each checks the name of the interface will appear    | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Juniper-Mseries-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                        | Description                                                   |
|:---------------------------------|:--------------------------------------------------------------|
| Net-Juniper-Mseries-Storage-Name | Discover the disk partitions and monitor space occupation     |
| Net-Juniper-Mseries-Traffic-Name | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Bgp-Peer-Prefix-Statistics" label="Bgp-Peer-Prefix-Statistics">

| Metric name                                               | Unit  |
|:----------------------------------------------------------|:------|
| *peers*~*afisafi*#peer.afisafi.prefixes.in.count          | count |
| *peers*~*afisafi*#peer.afisafi.prefixes.in.accepted.count | count |
| *peers*~*afisafi*#peer.afisafi.prefixes.in.rejected.count | count |
| *peers*~*afisafi*#peer.afisafi.prefixes.in.active.count   | count |
| *peers*~*afisafi*#peer.afisafi.prefixes.out.count         | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Bgp-Peer-State" label="Bgp-Peer-State">

| Metric name    | Unit  |
|:---------------|:------|
| *peers*#status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cpu-Routing" label="Cpu-Routing">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| *cpu*#cpu.utilization.percentage | %     |
| *cpu*#cpu.load.1m.percentage     | %     |
| *cpu*#cpu.load.5m.percentage     | %     |
| *cpu*#cpu.load.15m.percentage    | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| storage.partitions.count              | count |
| *disk_name*#storage.space.usage.bytes | B     |
| *disk_name*#storage.access.count      | count |

> Applies to the following service templates: Disk-Generic-Id, Disk-Generic-Name, Disk-Global

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Hardware" label="Hardware">

Coming soon

</TabItem>
<TabItem value="Ldp-Session-Status" label="Ldp-Session-Status">

| Metric name            | Unit  |
|:-----------------------|:------|
| *sessions*#status      | N/A   |
| *sessions*#last-change | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Lsp-Status" label="Lsp-Status">

| Metric name             | Unit  |
|:------------------------|:------|
| *lsps*#status           | N/A   |
| *lsps*#transition-count | N/A   |
| *lsps*#last-transition  | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Memory-Routing" label="Memory-Routing">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| *memory*#memory.usage.bytes      | B     |
| *memory*#memory.free.bytes       | B     |
| *memory*#memory.usage.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Rsvp-Session-Status" label="Rsvp-Session-Status">

| Metric name       | Unit  |
|:------------------|:------|
| *sessions*#status | N/A   |

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
</Tabs>

## Prerequisites

### SNMP Configuration

The SNMP service must be configured and activated on the host. Please refer to the official documentation from the manufacturer/publisher.

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
dnf install centreon-pack-network-routers-juniper-mseries-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-routers-juniper-mseries-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-routers-juniper-mseries-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-routers-juniper-mseries-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Juniper M-Series** connector through
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
dnf install centreon-plugin-Network-Routers-Juniper-Mseries-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Routers-Juniper-Mseries-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-routers-juniper-mseries-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Routers-Juniper-Mseries-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Juniper-Mseries-SNMP-custom** template to the host. 

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
<TabItem value="Bgp-Peer-Prefix-Statistics" label="Bgp-Peer-Prefix-Statistics">

| Macro                      | Description                                                                                        | Default value     | Mandatory   |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                     | Filter by peer identifier (can be regexp)                                                          |                   |             |
| WARNINGPREFIXESIN          | Specify warning threshold                                                                          |                   |             |
| CRITICALPREFIXESIN         | Specify critical threshold                                                                         |                   |             |
| WARNINGPREFIXESINACCEPTED  | Specify warning threshold                                                                          |                   |             |
| CRITICALPREFIXESINACCEPTED | Specify critical threshold                                                                         |                   |             |
| WARNINGPREFIXESINACTIVE    | Specify warning threshold                                                                          |                   |             |
| CRITICALPREFIXESINACTIVE   | Specify critical threshold                                                                         |                   |             |
| WARNINGPREFIXESINREJECTED  | Specify warning threshold                                                                          |                   |             |
| CRITICALPREFIXESINREJECTED | Specify critical threshold                                                                         |                   |             |
| WARNINGPREFIXESOUT         | Specify warning threshold                                                                          |                   |             |
| CRITICALPREFIXESOUT        | Specify critical threshold                                                                         |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Bgp-Peer-State" label="Bgp-Peer-State">

| Macro          | Description                                                                                                                                                                                                                                                                                                              | Default value                                                   | Mandatory   |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|:-----------:|
| FILTER         | Filter by peer identifier (can be regexp)                                                                                                                                                                                                                                                                                |                                                                 |             |
| FILTERREMOTEIP | Filter by remote ip address (can be regexp)                                                                                                                                                                                                                                                                              |                                                                 |             |
| FILTERLOCALAS  | Filter by local AS (can be regexp)                                                                                                                                                                                                                                                                                       |                                                                 |             |
| CRITICALSTATUS | Specify critical threshold (default: '%{peer\_status} =~ /running/ && %{peer\_state} !~ /established/'). Can use special variables like %{peer\_identifier}, %{peer\_state}, %{peer\_status}, %{local\_type}, %{local\_ip}, %{local\_port}, %{local\_as}, %{remote\_type}, %{remote\_ip}, %{remote\_port}, %{remote\_as} | %{peer\_status} =~ /running/ && %{peer\_state} !~ /established/ |             |
| WARNINGSTATUS  | Specify warning threshold. Can use special variables like %{peer\_identifier}, %{peer\_state}, %{peer\_status}, %{local\_type}, %{local\_ip}, %{local\_port}, %{local\_as}, %{remote\_type}, %{remote\_ip}, %{remote\_port}, %{remote\_as}                                                                               |                                                                 |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                                       |                                                                 |             |

</TabItem>
<TabItem value="Cpu-Routing" label="Cpu-Routing">

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER          | Filter operating (default: 'routing\|fpc')                                                         | routing           |             |
| WARNING         | Thresholds                                                                                         | 80                |             |
| CRITICAL        | Thresholds                                                                                         | 90                |             |
| WARNINGLOAD15M  | Thresholds                                                                                         |                   |             |
| CRITICALLOAD15M | Thresholds                                                                                         |                   |             |
| WARNINGLOAD1M   | Thresholds                                                                                         |                   |             |
| CRITICALLOAD1M  | Thresholds                                                                                         |                   |             |
| WARNINGLOAD5M   | Thresholds                                                                                         |                   |             |
| CRITICALLOAD5M  | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Disk-Generic-Id" label="Disk-Generic-Id">

| Macro        | Description                                                                                                                                                                                    | Default value       | Mandatory   |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| DISKID       | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage')                                                                                                          |                     |             |
| TRANSFORMDST | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run' | $1                  |             |
| TRANSFORMSRC | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run' | ^.*mounted on: (.*) |             |
| CRITICAL     | Critical threshold                                                                                                                                                                             | 90                  |             |
| WARNING      | Warning threshold                                                                                                                                                                              | 80                  |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                             |                     |             |

</TabItem>
<TabItem value="Disk-Generic-Name" label="Disk-Generic-Name">

| Macro        | Description                                                                                                                                                                                    | Default value       | Mandatory   |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| DISKNAME     | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage')                                                                                                          |                     |             |
| TRANSFORMDST | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run' | $1                  |             |
| TRANSFORMSRC | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run' | ^.*mounted on: (.*) |             |
| CRITICAL     | Critical threshold                                                                                                                                                                             | 90                  |             |
| WARNING      | Warning threshold                                                                                                                                                                              | 80                  |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                             |                     |             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro        | Description                                                                                                                                                                                    | Default value          | Mandatory   |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTER       | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage')                                                                                                          | ^(?!(devfs\|/dev/md0)) |             |
| TRANSFORMDST | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run' | $1                     |             |
| TRANSFORMSRC | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run' | ^.*mounted on: (.*)    |             |
| CRITICAL     | Critical threshold                                                                                                                                                                             | 95                     |             |
| WARNING      | Warning threshold                                                                                                                                                                              | 90                     |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                             | --verbose              |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'fru', 'operating', 'alarm'                      | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Ldp-Session-Status" label="Ldp-Session-Status">

| Macro              | Description                                                                                                                                         | Default value              | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| FILTERENTITY       | Filter entities and/or peer                                                                                                                         |                            |             |
| FILTERPEER         | Filter entities and/or peer                                                                                                                         |                            |             |
| WARNINGLASTCHANGE  | Warning threshold in seconds                                                                                                                        |                            |             |
| CRITICALLASTCHANGE | Critical threshold in seconds                                                                                                                       |                            |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{state} !~ /operational/i'). You can use the following variables: %{state} | %{state} !~ /operational/i |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{state}                            |                            |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                  |                            |             |

</TabItem>
<TabItem value="Lsp-Status" label="Lsp-Status">

| Macro                   | Description                                                                                                                                | Default value     | Mandatory   |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME              | Filter LSPs                                                                                                                                |                   |             |
| FILTERFROM              | Filter LSPs                                                                                                                                |                   |             |
| FILTERTO                | Filter LSPs                                                                                                                                |                   |             |
| WARNINGLASTTRANSITION   | Warning threshold                                                                                                                          |                   |             |
| CRITICALLASTTRANSITION  | Critical threshold                                                                                                                         |                   |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL (default: '%{state} !~ /up/i'). You can use the following variables: %{state} | %{state} !~ /up/i |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{state}                   |                   |             |
| WARNINGTRANSITIONCOUNT  | Warning threshold                                                                                                                          |                   |             |
| CRITICALTRANSITIONCOUNT | Critical threshold                                                                                                                         |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                         |                   |             |

</TabItem>
<TabItem value="Memory-Routing" label="Memory-Routing">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER            | Filter operating (default: 'routing\|fpc')                                                         | routing           |             |
| WARNING           | Thresholds                                                                                         | 80                |             |
| CRITICAL          | Thresholds                                                                                         | 90                |             |
| WARNINGUSAGE      | Thresholds                                                                                         |                   |             |
| CRITICALUSAGE     | Thresholds                                                                                         |                   |             |
| WARNINGUSAGEFREE  | Thresholds                                                                                         |                   |             |
| CRITICALUSAGEFREE | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Rsvp-Session-Status" label="Rsvp-Session-Status">

| Macro          | Description                                                                                                                                | Default value     | Mandatory   |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME     | Filter sessions                                                                                                                            |                   |             |
| FILTERFROM     | Filter sessions                                                                                                                            |                   |             |
| FILTERTO       | Filter sessions                                                                                                                            |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{state} !~ /up/i'). You can use the following variables: %{state} | %{state} !~ /up/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{state}                   |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                         |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Macro        | Description                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACEID  | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                               |                   |             |
| CRITICALIN   | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C) | 90                |             |
| WARNINGIN    | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C) | 80                |             |
| CRITICALOUT  | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C) | 90                |             |
| WARNINGOUT   | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C) | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                      |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Macro         | Description                                                                                                                                                             | Default value     | Mandatory   |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                               |                   |             |
| CRITICALIN    | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C) | 90                |             |
| WARNINGIN     | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C) | 80                |             |
| CRITICALOUT   | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C) | 90                |             |
| WARNINGOUT    | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C) | 80                |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                      |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro          | Description                                                                                                                                                                                                         | Default value     | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER         | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                                                           | .*                |             |
| WARNINGIN      | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C)                                             | 80                |             |
| CRITICALIN     | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C)                                             | 90                |             |
| WARNINGOUT     | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C)                                             | 80                |             |
| CRITICALOUT    | Thresholds (will superseed --\[warning-critical\]-errors). : 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C)                                             | 90                |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                  |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_juniper_mseries.pl \
	--plugin=network::juniper::mseries::plugin \
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
	--critical-out-traffic='90' 
```

The expected command output is shown below:

```bash
OK: All interfaces are ok | '*interface_name*#status'=;;;;'*interface_name*#interface.traffic.in.bitspersecond'=b/s;;;;'*interface_name*#interface.traffic.out.bitspersecond'=b/s;;;;
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
/usr/lib/centreon/plugins/centreon_juniper_mseries.pl \
	--plugin=network::juniper::mseries::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                            | Linked service template                                                                                                                           |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| bgp-peer-prefix-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/juniper/common/junos/mode/bgppeerprefixstatistics.pm)] | Net-Juniper-Mseries-SNMP-Bgp-Peer-Prefix-Statistics-custom                                                                                        |
| bgp-peer-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/juniper/common/junos/mode/bgppeerstate.pm)]                        | Net-Juniper-Mseries-SNMP-Bgp-Peer-State-custom                                                                                                    |
| cos [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/juniper/common/junos/mode/cos.pm)]                                            | Not used in this Monitoring Connector                                                                                                             |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/juniper/common/junos/mode/cpu.pm)]                                            | Net-Juniper-Mseries-Cpu-Routing-custom                                                                                                            |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/juniper/common/junos/mode/hardware.pm)]                                  | Net-Juniper-Mseries-Hardware-custom                                                                                                               |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/juniper/common/junos/mode/interfaces.pm)]                              | Net-Juniper-Mseries-Traffic-Generic-Id-custom<br />Net-Juniper-Mseries-Traffic-Generic-Name-custom<br />Net-Juniper-Mseries-Traffic-Global-custom |
| ldp-session-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/juniper/common/junos/mode/ldpsessionstatus.pm)]                | Net-Juniper-Mseries-SNMP-Ldp-Session-Status-custom                                                                                                |
| list-bgp-peers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/juniper/common/junos/mode/listbgppeers.pm)]                        | Not used in this Monitoring Connector                                                                                                             |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                                    | Used for service discovery                                                                                                                        |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/liststorages.pm)]                                        | Used for service discovery                                                                                                                        |
| lsp-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/juniper/common/junos/mode/lspstatus.pm)]                               | Net-Juniper-Mseries-SNMP-Lsp-Status-custom                                                                                                        |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/juniper/common/junos/mode/memory.pm)]                                      | Net-Juniper-Mseries-Memory-Routing-custom                                                                                                         |
| rsvp-session-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/juniper/common/junos/mode/rsvpsessionstatus.pm)]              | Net-Juniper-Mseries-SNMP-Rsvp-Session-Status-custom                                                                                               |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/storage.pm)]                                                   | Net-Juniper-Mseries-Disk-Generic-Id-custom<br />Net-Juniper-Mseries-Disk-Generic-Name-custom<br />Net-Juniper-Mseries-Disk-Global-custom          |

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
<TabItem value="Bgp-Peer-Prefix-Statistics" label="Bgp-Peer-Prefix-Statistics">

| Option        | Description                                                                                                                                |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-peer | Filter by peer identifier (can be regexp)                                                                                                  |
| --warning-*   | Specify warning threshold. Can be: 'prefixes-in', 'prefixes-in-accepted', 'prefixes-in-rejected', 'prefixes-in-active', 'prefixes-out'     |
| --critical-*  | Specify critical threshold. Can be: 'prefixes-in', 'prefixes-in-accepted', 'prefixes-in-rejected', 'prefixes-in-active', 'prefixes-out'    |

</TabItem>
<TabItem value="Bgp-Peer-State" label="Bgp-Peer-State">

| Option             | Description                                                                                                                                                                                                                                                                                                                 |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-peer      | Filter by peer identifier (can be regexp)                                                                                                                                                                                                                                                                                   |
| --filter-remote-ip | Filter by remote ip address (can be regexp)                                                                                                                                                                                                                                                                                 |
| --filter-local-as  | Filter by local AS (can be regexp)                                                                                                                                                                                                                                                                                          |
| --warning-status   | Specify warning threshold. Can use special variables like %{peer\_identifier}, %{peer\_state}, %{peer\_status}, %{local\_type}, %{local\_ip}, %{local\_port}, %{local\_as}, %{remote\_type}, %{remote\_ip}, %{remote\_port}, %{remote\_as}                                                                                  |
| --critical-status  | Specify critical threshold (default: '%{peer\_status} =~ /running/ && %{peer\_state} !~ /established/'). Can use special variables like %{peer\_identifier}, %{peer\_state}, %{peer\_status}, %{local\_type}, %{local\_ip}, %{local\_port}, %{local\_as}, %{remote\_type}, %{remote\_ip}, %{remote\_port}, %{remote\_as}    |

</TabItem>
<TabItem value="Cpu-Routing" label="Cpu-Routing">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --filter                 | Filter operating (default: 'routing\|fpc').                             |
| --warning-* --critical-* | Thresholds. Can be: 'utilization', 'load-1m', 'load-5m', 'load-15m'.    |

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

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
| --show-cache                                    | Display cache storage data.                                                                                                                                                                                                                   |
| --space-reservation                             | Some filesystem has space reserved (like ext4 for root). The value is in percent of total (default: none) (results like 'df' command).                                                                                                        |
| --filter-duplicate                              | Filter duplicate storages (in used size and total size).                                                                                                                                                                                      |
| --filter-storage-type                           | Filter storage types with a regexp (default: '^(hrStorageFixedDisk\|hrStorageNetworkDisk\|hrFSBerkeleyFFS)$').                                                                                                                                |

</TabItem>
<TabItem value="Hardware" label="Hardware">

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
| --component            | Which component to check (default: '.*'). Can be: 'fru', 'operating', 'alarm'.                                                                                                                                                                |
| --add-name-instance    | Add literal description for instance value (used in filter, absent-problem and threshold options).                                                                                                                                            |
| --filter               | Exclude the items given as a comma-separated list (example: --filter=fru). You can also exclude items from specific instances: --filter=fru,7.3.0.0                                                                                           |
| --absent-problem       | Return an error if an entity is not 'present' (default is skipping) (comma separated list) Can be specific or global: --absent-problem=fru,7.1.0.0                                                                                            |
| --no-component         | Define the expected status if no components are found (default: critical).                                                                                                                                                                    |
| --threshold-overload   | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='operating,CRITICAL,^(?!(running)$)'             |
| --warning              | Set warning threshold (syntax: type,regexp,threshold) Example: --warning='operating-temperature,.*,30'                                                                                                                                        |
| --critical             | Set critical threshold (syntax: type,regexp,threshold) Example: --critical='operating-temperature,.*,40'                                                                                                                                      |
| --reload-cache-time    | Time in minutes before reloading cache file (default: 180). Use '-1' to disable cache reload.                                                                                                                                                 |

</TabItem>
<TabItem value="Ldp-Session-Status" label="Ldp-Session-Status">

| Option                 | Description                                                                                                                                           |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-*             | Filter entities and/or peer. Can be: 'entity', 'peer' (can be a regexp).                                                                              |
| --warning-status       | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{state}                              |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%{state} !~ /operational/i'). You can use the following variables: %{state}   |
| --warning-last-change  | Warning threshold in seconds.                                                                                                                         |
| --critical-last-change | Critical threshold in seconds.                                                                                                                        |

</TabItem>
<TabItem value="Lsp-Status" label="Lsp-Status">

| Option            | Description                                                                                                                                  |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-*        | Filter LSPs. Can be: 'name', 'from', 'to' (can be a regexp).                                                                                 |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{state}                     |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{state} !~ /up/i'). You can use the following variables: %{state}   |
| --warning-*       | Warning threshold. Can be: 'transition-count', 'last-transition' (seconds).                                                                  |
| --critical-*      | Critical threshold. Can be: 'transition-count', 'last-transition' (seconds).                                                                 |

</TabItem>
<TabItem value="Memory-Routing" label="Memory-Routing">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --filter                 | Filter operating (default: 'routing\|fpc').                             |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).    |

</TabItem>
<TabItem value="Rsvp-Session-Status" label="Rsvp-Session-Status">

| Option            | Description                                                                                                                                   |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-*        | Filter sessions. Can be: 'name', 'from', 'to' (can be a regexp).                                                                              |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{state}                      |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{state} !~ /up/i'). You can use the following variables: %{state}    |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --failback-file                                 | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                              |
| --memexpiration                                 | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-suffix                              | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                      |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                            |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                               |
| --add-global                                    | Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                                                                                                                                                                                           |
| --add-status                                    | Check interface status.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --add-duplex-status                             | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                                                                                                                               |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --add-cast                                      | Check interface cast.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --add-speed                                     | Check interface speed.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --add-volume                                    | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                                                                                                                                                                                            |
| --add-optical                                   | Check interface optical metrics.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --check-metrics                                 | If the expression is true, metrics are checked (default: '%{opstatus} eq "up"').                                                                                                                                                                                                                                                                                                                                                                                 |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                                                                                                                                                         |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                                                                                              |
| --warning-errors                                | Set warning threshold for all error counters.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --critical-errors                               | Set critical threshold for all error counters.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --warning-* --critical-*                        | Thresholds (will superseed --\[warning-critical\]-errors). Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).  And also: 'fcs-errors (%)', 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'module-temperature' (C).   |
| --units-traffic                                 | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                                                                                                                                                                                            |
| --units-errors                                  | Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                                                                                                                                |
| --units-cast                                    | Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                                                                                                                            |
| --nagvis-perfdata                               | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                                                                                                                                                                                                    |
| --interface                                     | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                                                                                                                                                                                       |
| --name                                          | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                                                                                                                                                                                                     |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                                                                                                                       |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                                                                                                                                                                |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                                                                                                                                |
| --force-counters32                              | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                                                                                                                                                                                         |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                                                                                                                                                                                      |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                                                                                                                      |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                                                                                                             |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                                                                                                                                                                                                 |
| --show-cache                                    | Display cache interface data.                                                                                                                                                                                                                                                                                                                                                                                                                                    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_juniper_mseries.pl \
	--plugin=network::juniper::mseries::plugin \
	--mode=interfaces \
	--help
```
