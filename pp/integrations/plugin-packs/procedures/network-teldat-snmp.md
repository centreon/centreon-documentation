---
id: network-teldat-snmp
title: Teldat SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Teldat Edge Routers SNMP** brings a host template:

* **Net-Teldat-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Teldat-SNMP-custom" label="Net-Teldat-SNMP-custom">

| Service Alias | Service Template                   | Service Description                                  | Discovery  |
|:--------------|:-----------------------------------|:-----------------------------------------------------|:----------:|
| Cells-Radio   | Net-Teldat-Cells-Radio-SNMP-custom | Check cellular radio modules                         | X          |
| Cpu           | Net-Teldat-Cpu-SNMP-custom         | Check the rate of utilization of CPU for the machine |            |
| Memory        | Net-Teldat-Memory-SNMP-custom      | Check the rate of the utilization of memory          |            |
| Uptime        | Net-Teldat-Uptime-SNMP-custom      | Time since the server has been working and available |            |

> The services listed above are created automatically when the **Net-Teldat-SNMP-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                  | Service Description | Discovery  |
|:--------------|:----------------------------------|:--------------------|:----------:|
| Interfaces    | Net-Teldat-Interfaces-SNMP-custom | Check interfaces    | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                    |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Teldat-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                          | Description                                                   |
|:-----------------------------------|:--------------------------------------------------------------|
| Net-Teldat-SNMP-Cells-Radio-IMEI   |                                                               |
| Net-Teldat-SNMP-Cells-Radio-Module |                                                               |
| Net-Teldat-SNMP-Interface-Name     | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cells-Radio" label="Cells-Radio">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| modules.cellradio.detected.count  | count |
| *cells*~status                    | N/A   |
| *cells*~module.cellradio.rsrp.dbm | N/A   |
| *cells*~module.cellradio.rsrq.dbm | N/A   |
| *cells*~module.cellradio.snr.db   | N/A   |
| *cells*~module.cellradio.rscp.dbm | N/A   |
| *cells*~module.cellradio.csq.dbm  | N/A   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                    | Unit  |
|:-------------------------------|:------|
| cpu.utilization.5s.percentage  | %     |
| cpu.utilization.1m.percentage  | %     |
| cpu.utilization.15m.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Unit  |
|:----------------------------------------------------------|:------|
| *interface_name*#status                                   | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| *memory*#memory.usage.bytes      | B     |
| *memory*#memory.free.bytes       | B     |
| *memory*#memory.usage.percentage | %     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this Pack, the SNMP service must be properly configured on your device.

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161 SNMP port.

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
dnf install centreon-pack-network-teldat-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-teldat-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-teldat-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-teldat-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Teldat Edge Routers SNMP** connector through
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
dnf install centreon-plugin-Network-Teldat-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Teldat-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-teldat-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Teldat-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Teldat-SNMP-custom** template to the host. 

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
<TabItem value="Cells-Radio" label="Cells-Radio">

| Macro                            | Description                                                                                        | Default value                                                           | Mandatory   |
|:---------------------------------|:---------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|:-----------:|
| FILTERMODULE                     |                                                                                                    |                                                                         |             |
| FILTERIMEI                       |                                                                                                    |                                                                         |             |
| FILTERINTERFACETYPE              |                                                                                                    |                                                                         |             |
| WARNINGMODULECELLRADIOCSQ        |                                                                                                    |                                                                         |             |
| CRITICALMODULECELLRADIOCSQ       |                                                                                                    |                                                                         |             |
| WARNINGMODULECELLRADIORSCP       |                                                                                                    |                                                                         |             |
| CRITICALMODULECELLRADIORSCP      |                                                                                                    |                                                                         |             |
| WARNINGMODULECELLRADIORSRP       |                                                                                                    |                                                                         |             |
| CRITICALMODULECELLRADIORSRP      |                                                                                                    |                                                                         |             |
| WARNINGMODULECELLRADIORSRQ       |                                                                                                    |                                                                         |             |
| CRITICALMODULECELLRADIORSRQ      |                                                                                                    |                                                                         |             |
| WARNINGMODULECELLRADIOSNR        |                                                                                                    |                                                                         |             |
| CRITICALMODULECELLRADIOSNR       |                                                                                                    |                                                                         |             |
| WARNINGMODULESCELLRADIODETECTED  |                                                                                                    |                                                                         |             |
| CRITICALMODULESCELLRADIODETECTED |                                                                                                    |                                                                         |             |
| WARNINGSTATUS                    |                                                                                                    | %{interfaceState} =~ /disconnect/ && %{interfaceType} =~ /data primary/ |             |
| CRITICALSTATUS                   |                                                                                                    |                                                                         |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                                                               |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro                    | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCPUUTILIZATION1M  |                                                                                                    |                   |             |
| CRITICALCPUUTILIZATION1M |                                                                                                    |                   |             |
| WARNINGCPUUTILIZATION5M  |                                                                                                    |                   |             |
| CRITICALCPUUTILIZATION5M |                                                                                                    |                   |             |
| WARNINGCPUUTILIZATION5S  |                                                                                                    |                   |             |
| CRITICALCPUUTILIZATION5S |                                                                                                    |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                        | Default value                                         | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| OIDFILTER          |                                                                                                    | ifname                                                |             |
| OIDDISPLAY         |                                                                                                    | ifname                                                |             |
| INTERFACENAME      |                                                                                                    |                                                       |             |
| WARNINGINDISCARD   |                                                                                                    |                                                       |             |
| CRITICALINDISCARD  |                                                                                                    |                                                       |             |
| WARNINGINERROR     |                                                                                                    |                                                       |             |
| CRITICALINERROR    |                                                                                                    |                                                       |             |
| WARNINGINTRAFFIC   |                                                                                                    |                                                       |             |
| CRITICALINTRAFFIC  |                                                                                                    |                                                       |             |
| WARNINGOUTDISCARD  |                                                                                                    |                                                       |             |
| CRITICALOUTDISCARD |                                                                                                    |                                                       |             |
| WARNINGOUTERROR    |                                                                                                    |                                                       |             |
| CRITICALOUTERROR   |                                                                                                    |                                                       |             |
| WARNINGOUTTRAFFIC  |                                                                                                    |                                                       |             |
| CRITICALOUTTRAFFIC |                                                                                                    |                                                       |             |
| CRITICALSTATUS     |                                                                                                    | %{admstatus} eq "up" and %{opstatus} !~ /up\|dormant/ |             |
| WARNINGSTATUS      |                                                                                                    |                                                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                                             |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGE      |                                                                                                    |                   |             |
| CRITICALUSAGE     |                                                                                                    |                   |             |
| WARNINGUSAGEFREE  |                                                                                                    |                   |             |
| CRITICALUSAGEFREE |                                                                                                    |                   |             |
| WARNINGUSAGEPRCT  |                                                                                                    |                   |             |
| CRITICALUSAGEPRCT |                                                                                                    |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      |                                                                                                    |                   |             |
| CRITICAL     |                                                                                                    |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --check-overload  |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_teldat_snmp.pl \
	--plugin=network::teldat::snmp::plugin \
	--mode=memory \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' 
```

The expected command output is shown below:

```bash
OK: All memory usages are ok | '*memory*#memory.usage.bytes'=B;;;0;total'*memory*#memory.free.bytes'=B;;;0;total'*memory*#memory.usage.percentage'=%;;;0;100
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
/usr/lib/centreon/plugins/centreon_teldat_snmp.pl \
	--plugin=network::teldat::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                | Linked service template            |
|:------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| cells-radio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/cellsradio.pm)]          | Net-Teldat-Cells-Radio-SNMP-custom |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/cpu.pm)]                         | Net-Teldat-Cpu-SNMP-custom         |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/interfaces.pm)]           | Net-Teldat-Interfaces-SNMP-custom  |
| list-cells-radio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/listcellsradio.pm)] | Used for service discovery         |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]        | Used for service discovery         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/memory.pm)]                   | Net-Teldat-Memory-SNMP-custom      |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/uptime.pm)]                   | Net-Teldat-Uptime-SNMP-custom      |

### Available options

#### Generic options

All generic options are listed here:

| Option | Description |
|:-------|:------------|

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cells-Radio" label="Cells-Radio">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Memory" label="Memory">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_teldat_snmp.pl \
	--plugin=network::teldat::snmp::plugin \
	--mode=memory \
	--help
```
