---
id: network-switchs-aruba-standard-snmp
title: Aruba Standard
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Aruba Standard** brings 2 host templates:

* **Net-Aruba-Standard-Ap-SNMP-custom**
* **Net-Aruba-Standard-Controller-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Aruba-Standard-Ap-SNMP-custom" label="Net-Aruba-Standard-Ap-SNMP-custom">

| Service Alias      | Service Template                                  | Service Description                             |
|:-------------------|:--------------------------------------------------|:------------------------------------------------|
| Ap-Ssid-Statistics | Net-Aruba-Standard-Ap-Ssid-Statistics-SNMP-custom | Check access points' ESSID and BSSID statistics |
| Ap-Status          | Net-Aruba-Standard-Ap-Status-SNMP-custom          | Check access points status                      |

> The services listed above are created automatically when the **Net-Aruba-Standard-Ap-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Net-Aruba-Standard-Controller-SNMP-custom" label="Net-Aruba-Standard-Controller-SNMP-custom">

| Service Alias     | Service Template                                 | Service Description                                                                                           |
|:------------------|:-------------------------------------------------|:--------------------------------------------------------------------------------------------------------------|
| Controller-Status | Net-Aruba-Standard-Controller-Status-SNMP-custom | Check controllers status                                                                                      |
| Cpu               | Net-Aruba-Standard-Cpu-SNMP-custom               | Check the rate of utilization of CPU for the machine. This check can give the average utilization rate of CPU |
| Hardware-Global   | Net-Aruba-Standard-Hardware-Global-SNMP-custom   | Check hardware status                                                                                         |
| License           | Net-Aruba-Standard-License-SNMP-custom           | Check the status of the licenses on the controller                                                            |
| Memory            | Net-Aruba-Standard-Memory-SNMP-custom            | Check machine memory usage                                                                                    |
| Storage           | Net-Aruba-Standard-Storage-SNMP-custom           | Check storage device usages                                                                                   |

> The services listed above are created automatically when the **Net-Aruba-Standard-Controller-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias              | Service Template                                          | Service Description                                     | Discovery  |
|:---------------------------|:----------------------------------------------------------|:--------------------------------------------------------|:----------:|
| Hardware-Fan               | Net-Aruba-Standard-Hardware-Fan-SNMP-custom               | Check fan status on hardware                            |            |
| Hardware-Module            | Net-Aruba-Standard-Hardware-Module-SNMP-custom            | Check module status on hardware                         |            |
| Hardware-Psu               | Net-Aruba-Standard-Hardware-Psu-SNMP-custom               | Check power supply status on hardware                   |            |
| Packet-Errors-Generic-Id   | Net-Aruba-Standard-Packet-Errors-Generic-Id-SNMP-custom   | Check packets on errors/discards of a network interface |            |
| Packet-Errors-Generic-Name | Net-Aruba-Standard-Packet-Errors-Generic-Name-SNMP-custom | Check packets on errors/discards of a network interface |            |
| Packet-Errors-Global       | Net-Aruba-Standard-Packet-Errors-Global-SNMP-custom       | Check packets on errors/discards of a network interface | X          |
| Traffic-Generic-Id         | Net-Aruba-Standard-Traffic-Generic-Id-SNMP-custom         | Check traffic of an network interface                   |            |
| Traffic-Generic-Name       | Net-Aruba-Standard-Traffic-Generic-Name-SNMP-custom       | Check traffic of an network interface                   |            |
| Traffic-Global             | Net-Aruba-Standard-Traffic-Global-SNMP-custom             | Check traffic of an network interface                   | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name           | Description                                                |
|:--------------------|:-----------------------------------------------------------|
| Aruba Access Points | Discover Aruba Access Points through the Aruba Controller |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                                  | Description                                                           |
|:-------------------------------------------|:----------------------------------------------------------------------|
| Net-Aruba-Standard-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| Net-Aruba-Standard-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Ap-Ssid-Statistics" label="Ap-Ssid-Statistics">

| Metric name                                  | Unit  |
|:---------------------------------------------|:------|
| *ap*~stations.associated.count               | count |
| *ap*~*essid*#essid.stations.associated.count | count |
| *ap*~*bssid*#bssid.stations.associated.count | count |
| *ap*~*bssid*#bssid.channel.noise.count       | count |
| *ap*~*bssid*#bssid.signal.noise.ratio.count  | count |

</TabItem>
<TabItem value="Ap-Status" label="Ap-Status">

| Metric name                                 | Unit  |
|:--------------------------------------------|:------|
| accesspoints.connected.current.count        | count |
| *ap*#status                                 | N/A   |
| *ap*#accesspoint.uptime.seconds             | s     |
| *ap*#accesspoint.controller.bootstrap.count | count |
| *ap*#accesspoint.reboot.count               | count |

</TabItem>
<TabItem value="Controller-Status" label="Controller-Status">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| controllers.connected.current.count | count |
| *controllers*#status                | N/A   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| *cpu*#cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Hardware-Fan" label="Hardware-Fan">

No metrics for this service.

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

No metrics for this service.

</TabItem>
<TabItem value="Hardware-Module" label="Hardware-Module">

No metrics for this service.

</TabItem>
<TabItem value="Hardware-Psu" label="Hardware-Psu">

No metrics for this service.

</TabItem>
<TabItem value="License" label="License">

| Metric name      | Unit  |
|:-----------------|:------|
| *license*#status | N/A   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                 | Unit  |
|:----------------------------|:------|
| *memory*#memory.usage.bytes | B     |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Metric name                                               | Unit  |
|:----------------------------------------------------------|:------|
| *interface_name*#status                                   | N/A   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |

> Applies to the following service templates: Packet-Errors-Generic-Id, Packet-Errors-Generic-Name, Packet-Errors-Global

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| *disk_name*#storage.usage.bytes | B     |

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
dnf install centreon-pack-network-switchs-aruba-standard-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-switchs-aruba-standard-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-switchs-aruba-standard-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-switchs-aruba-standard-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Aruba Standard** connector through
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
dnf install centreon-plugin-Network-Switchs-Aruba-Standard-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Switchs-Aruba-Standard-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-switchs-aruba-standard-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Switchs-Aruba-Standard-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="Net-Aruba-Standard-Ap-SNMP-custom" label="Net-Aruba-Standard-Ap-SNMP-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Aruba-Standard-Ap-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro                   | Description                                                                                                                   | Default value     | Mandatory   |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ARUBACONTROLLERHOSTNAME | Name or address of the host to monitor (mandatory)                                                                            |                   |             |
| SNMPPORT                | UDP port to send the SNMP request to (default: 161)                                                                           |                   |             |
| APNAME                  | Filter by 'ap', 'essid', 'protocol', 'bssid' (regexp can be used)                                                             |                   |             |
| SNMPTIMEOUT             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries |                   |             |
| SNMPEXTRAOPTIONS        | Any extra option you may want to add to every command (e.g. a --verbose flag). All options are listed [here](#available-options)                                 |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Net-Aruba-Standard-Controller-SNMP-custom" label="Net-Aruba-Standard-Controller-SNMP-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Aruba-Standard-Controller-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                   | Default value     | Mandatory   |
|:-----------------|:----------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Ap-Ssid-Statistics" label="Ap-Ssid-Statistics">

| Macro                           | Description                                                                                 | Default value     | Mandatory   |
|:--------------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBSSIDSTATIONSASSOCIATED  | Warning threshold                                                                           |                   |             |
| CRITICALBSSIDSTATIONSASSOCIATED | Critical threshold                                                                          |                   |             |
| WARNINGCHANNELNOISE             | Warning threshold                                                                           |                   |             |
| CRITICALCHANNELNOISE            | Critical threshold                                                                          |                   |             |
| WARNINGESSIDSTATIONSASSOCIATED  | Warning threshold                                                                           |                   |             |
| CRITICALESSIDSTATIONSASSOCIATED | Critical threshold                                                                          |                   |             |
| WARNINGSIGNALNOISERATIO         | Warning threshold                                                                           |                   |             |
| CRITICALSIGNALNOISERATIO        | Critical threshold                                                                          |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Ap-Status" label="Ap-Status">

| Macro                       | Description                                                                                 | Default value      | Mandatory   |
|:----------------------------|:--------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| WARNINGCONNECTEDCURRENT     | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| CRITICALCONNECTEDCURRENT    | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| WARNINGCONTROLLERBOOTSTRAP  | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| CRITICALCONTROLLERBOOTSTRAP | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| WARNINGREBOOT               | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| CRITICALREBOOT              | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| CRITICALSTATUS              | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                | %{status} !~ /up/i |             |
| WARNINGSTATUS               | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| WARNINGUPTIME               | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| CRITICALUPTIME              | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose          |             |

</TabItem>
<TabItem value="Controller-Status" label="Controller-Status">

| Macro                    | Description                                                                                               | Default value          | Mandatory   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| WARNINGCONNECTEDCURRENT  | Warning threshold. : %{name}, %{status}, %{ip}, %{role}, %{location} (default: '')                        |                        |             |
| CRITICALCONNECTEDCURRENT | Critical threshold. : %{name}, %{status}, %{ip}, %{role}, %{location} (default: '%{status} !~ /active/i') |                        |             |
| CRITICALSTATUS           | Critical threshold. : %{name}, %{status}, %{ip}, %{role}, %{location} (default: '%{status} !~ /active/i') | %{status} !~ /active/i |             |
| WARNINGSTATUS            | Warning threshold. : %{name}, %{status}, %{ip}, %{role}, %{location} (default: '')                        |                        |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)               | --verbose              |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                | 90                |             |
| CRITICAL     | Critical threshold in percent                                                               | 95                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Hardware-Fan" label="Hardware-Fan">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'                    | fan               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'                    | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Hardware-Module" label="Hardware-Module">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'                    | module            |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Hardware-Psu" label="Hardware-Psu">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'                    | psu               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="License" label="License">

| Macro          | Description                                                                                                                                                                        | Default value                                                             | Mandatory   |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------|:-----------:|
| CRITICALSTATUS | Critical threshold. Can use special variables like: %{key}, %{service}, %{flag}, %{expires} (default: '%{flag} !~ /enabled/i \|\| (%{expires} ne "Never" && %{expires} \< 86400)') | %{flag} !~ /enabled/i \|\| (%{expires} ne "Never" && %{expires} \< 86400) |             |
| WARNINGSTATUS  | Warning threshold. Can use special variables like:%{key}, %{service}, %{flag}, %{expires} (default: '')                                                                            |                                                                           |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                        | --verbose                                                                 |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                | 80                |             |
| CRITICAL     | Critical threshold in percent                                                               | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Packet-Errors-Generic-Id" label="Packet-Errors-Generic-Id">

| Macro              | Description                                                                                 | Default value     | Mandatory   |
|:-------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACEID        | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   |                   |             |
| WARNINGINDISCARD   | Thresholds                                                                                  |                   |             |
| CRITICALINDISCARD  | Thresholds                                                                                  |                   |             |
| WARNINGINERROR     | Thresholds                                                                                  |                   |             |
| CRITICALINERROR    | Thresholds                                                                                  |                   |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                  |                   |             |
| CRITICALOUTDISCARD | Thresholds                                                                                  |                   |             |
| WARNINGOUTERROR    | Thresholds                                                                                  |                   |             |
| CRITICALOUTERROR   | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Packet-Errors-Generic-Name" label="Packet-Errors-Generic-Name">

| Macro              | Description                                                                                 | Default value     | Mandatory   |
|:-------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME      | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   |                   |             |
| WARNINGINDISCARD   | Thresholds                                                                                  |                   |             |
| CRITICALINDISCARD  | Thresholds                                                                                  |                   |             |
| WARNINGINERROR     | Thresholds                                                                                  |                   |             |
| CRITICALINERROR    | Thresholds                                                                                  |                   |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                  |                   |             |
| CRITICALOUTDISCARD | Thresholds                                                                                  |                   |             |
| WARNINGOUTERROR    | Thresholds                                                                                  |                   |             |
| CRITICALOUTERROR   | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Packet-Errors-Global" label="Packet-Errors-Global">

| Macro              | Description                                                                                                                                                                                                         | Default value     | Mandatory   |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                                                           |                   |             |
| WARNINGINDISCARD   | Thresholds                                                                                                                                                                                                          |                   |             |
| CRITICALINDISCARD  | Thresholds                                                                                                                                                                                                          |                   |             |
| WARNINGINERROR     | Thresholds                                                                                                                                                                                                          |                   |             |
| CRITICALINERROR    | Thresholds                                                                                                                                                                                                          |                   |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                                                                                                                                          |                   |             |
| CRITICALOUTDISCARD | Thresholds                                                                                                                                                                                                          |                   |             |
| WARNINGOUTERROR    | Thresholds                                                                                                                                                                                                          |                   |             |
| CRITICALOUTERROR   | Thresholds                                                                                                                                                                                                          |                   |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                         | --verbose         |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                | 80                |             |
| CRITICAL     | Critical threshold in percent                                                               | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   |                   |             |
| WARNINGIN    | Thresholds                                                                                  | 80                |             |
| CRITICALIN   | Thresholds                                                                                  | 90                |             |
| WARNINGOUT   | Thresholds                                                                                  | 80                |             |
| CRITICALOUT  | Thresholds                                                                                  | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Macro         | Description                                                                                 | Default value     | Mandatory   |
|:--------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   |                   |             |
| WARNINGIN     | Thresholds                                                                                  | 80                |             |
| CRITICALIN    | Thresholds                                                                                  | 90                |             |
| WARNINGOUT    | Thresholds                                                                                  | 80                |             |
| CRITICALOUT   | Thresholds                                                                                  | 90                |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro        | Description                                                                                 | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   | .*                |             |
| WARNINGIN    | Thresholds                                                                                  | 80                |             |
| CRITICALIN   | Thresholds                                                                                  | 90                |             |
| WARNINGOUT   | Thresholds                                                                                  | 80                |             |
| CRITICALOUT  | Thresholds                                                                                  | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_aruba.pl \
	--plugin=network::aruba::standard::snmp::plugin \
	--mode=interfaces \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--interface='.*' \
	--name \
	--add-status \
	--add-traffic \
	--warning-in-traffic='80' \
	--critical-in-traffic='90' \
	--warning-out-traffic='80' \
	--critical-out-traffic='90' \
	--verbose
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
/usr/lib/centreon/plugins/centreon_aruba.pl \
	--plugin=network::aruba::standard::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                           | Linked service template                                                                                                                                                                                                                                                                                                                            |
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ap-connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/apconnections.pm)]        | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                              |
| ap-ssid-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/apssidstatistics.pm)] | Net-Aruba-Standard-Ap-Ssid-Statistics-SNMP-custom                                                                                                                                                                                                                                                                                                  |
| ap-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/apstatus.pm)]                  | Net-Aruba-Standard-Ap-Status-SNMP-custom                                                                                                                                                                                                                                                                                                           |
| ap-users [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/apusers.pm)]                    | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                              |
| controller-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/controllerstatus.pm)]  | Net-Aruba-Standard-Controller-Status-SNMP-custom                                                                                                                                                                                                                                                                                                   |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/cpu.pm)]                             | Net-Aruba-Standard-Cpu-SNMP-custom                                                                                                                                                                                                                                                                                                                 |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/discovery.pm)]                 | Used for host discovery                                                                                                                                                                                                                                                                                                                            |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/hardware.pm)]                   | Net-Aruba-Standard-Hardware-Fan-SNMP-custom<br />Net-Aruba-Standard-Hardware-Global-SNMP-custom<br />Net-Aruba-Standard-Hardware-Module-SNMP-custom<br />Net-Aruba-Standard-Hardware-Psu-SNMP-custom                                                                                                                                               |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                            | Net-Aruba-Standard-Packet-Errors-Generic-Id-SNMP-custom<br />Net-Aruba-Standard-Packet-Errors-Generic-Name-SNMP-custom<br />Net-Aruba-Standard-Packet-Errors-Global-SNMP-custom<br />Net-Aruba-Standard-Traffic-Generic-Id-SNMP-custom<br />Net-Aruba-Standard-Traffic-Generic-Name-SNMP-custom<br />Net-Aruba-Standard-Traffic-Global-SNMP-custom |
| license [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/license.pm)]                     | Net-Aruba-Standard-License-SNMP-custom                                                                                                                                                                                                                                                                                                             |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                   | Used for service discovery                                                                                                                                                                                                                                                                                                                         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/memory.pm)]                       | Net-Aruba-Standard-Memory-SNMP-custom                                                                                                                                                                                                                                                                                                              |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/storage.pm)]                     | Net-Aruba-Standard-Storage-SNMP-custom                                                                                                                                                                                                                                                                                                             |

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
<TabItem value="Ap-Ssid-Statistics" label="Ap-Ssid-Statistics">

| Option       | Description                                                                                                           |
|:-------------|:----------------------------------------------------------------------------------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'stations-associated' (ESSID and BSSID), 'channel-noise', 'signal-noise-ratio' (BSSID).    |
| --critical-* | Critical threshold. Can be: 'stations-associated' (ESSID and BSSID), 'channel-noise', 'signal-noise-ratio' (BSSID).   |
| --filter-*   | Filter by 'ap', 'essid', 'protocol', 'bssid' (regexp can be used).                                                    |

</TabItem>
<TabItem value="Ap-Status" label="Ap-Status">

| Option                   | Description                                                                                                                                                                                                                 |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'connected-current' (global), 'uptime', 'controller-bootstrap', 'reboot', 'status' (per AP).  'status' can use special variables like: %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')   |
| --filter-*               | Filter by 'ip', 'name', 'group' (regexp can be used).                                                                                                                                                                       |

</TabItem>
<TabItem value="Controller-Status" label="Controller-Status">

| Option       | Description                                                                                                                                                                                                         |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'connected-current' (global), 'status' (per controller). 'status' can use special variables like: %{name}, %{status}, %{ip}, %{role}, %{location} (default: '')                          |
| --critical-* | Critical threshold. Can be: 'connected-current' (global), 'status' (per controller). 'status' can use special variables like: %{name}, %{status}, %{ip}, %{role}, %{location} (default: '%{status} !~ /active/i')   |
| --filter-*   | Filter by 'ip', 'name', 'location' (regexp can be used).                                                                                                                                                            |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                 | Description                       |
|:-----------------------|:----------------------------------|
| --warning-utilization  | Warning threshold in percent.     |
| --critical-utilization | Critical threshold in percent.    |

</TabItem>
<TabItem value="Hardware-Fan" label="Hardware-Fan">

| Option               | Description                                                                                                                                                                                                       |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'.                                                                                                                                         |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                        |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                        |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,OK,inactive'    |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Option               | Description                                                                                                                                                                                                       |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'.                                                                                                                                         |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                        |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                        |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,OK,inactive'    |

</TabItem>
<TabItem value="Hardware-Module" label="Hardware-Module">

| Option               | Description                                                                                                                                                                                                       |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'.                                                                                                                                         |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                        |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                        |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,OK,inactive'    |

</TabItem>
<TabItem value="Hardware-Psu" label="Hardware-Psu">

| Option               | Description                                                                                                                                                                                                       |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'.                                                                                                                                         |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                        |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                        |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,OK,inactive'    |

</TabItem>
<TabItem value="License" label="License">

| Option            | Description                                                                                                                                                                           |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  | Warning threshold. Can use special variables like:%{key}, %{service}, %{flag}, %{expires} (default: '')                                                                               |
| --critical-status | Critical threshold. Can use special variables like: %{key}, %{service}, %{flag}, %{expires} (default: '%{flag} !~ /enabled/i \|\| (%{expires} ne "Never" && %{expires} \< 86400)')    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option           | Description                       |
|:-----------------|:----------------------------------|
| --warning-usage  | Warning threshold in percent.     |
| --critical-usage | Critical threshold in percent.    |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

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
<TabItem value="Storage" label="Storage">

| Option           | Description                                                                       |
|:-----------------|:----------------------------------------------------------------------------------|
| --warning-usage  | Warning threshold in percent.                                                     |
| --critical-usage | Critical threshold in percent.                                                    |
| --filter-name    | Filter storage device name (regexp can be used).                                  |
| --filter-type    | Filter storage device type (regexp can be used). Can use: 'ram', 'flashMemory'    |

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
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aruba.pl \
	--plugin=network::aruba::standard::snmp::plugin \
	--mode=interfaces \
	--help
```
