---
id: network-cisco-firepower-snmp
title: Cisco Firepower SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Cisco Firepower SNMP** brings a host template:

* **Net-Cisco-Firepower-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Firepower-SNMP-custom" label="Net-Cisco-Firepower-SNMP-custom">

| Service Alias | Service Template                         | Service Description                         |
|:--------------|:-----------------------------------------|:--------------------------------------------|
| Cpu           | Net-Cisco-Firepower-Cpu-SNMP-custom      | Check the rate of the utilization of CPU    |
| Faults        | Net-Cisco-Firepower-Faults-SNMP-custom   | Check faults                                |
| Hardware      | Net-CIsco-Firepower-Hardware-SNMP-custom | Check hardware environment                  |
| Memory        | Net-Cisco-Firepower-Memory-SNMP-custom   | Check the rate of the utilization of memory |

> The services listed above are created automatically when the **Net-Cisco-Firepower-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                           | Service Description | Discovery  |
|:--------------|:-------------------------------------------|:--------------------|:----------:|
| Interfaces    | Net-Cisco-Firepower-Interfaces-SNMP-custom | Check interfaces    | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Cisco-Firepower-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                                   | Description                                                           |
|:--------------------------------------------|:----------------------------------------------------------------------|
| Net-Cisco-Firepower-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| Net-Cisco-Firepower-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| *cpu*#cpu.utilization.1m.percentage  | %     |
| *cpu*#cpu.utilization.5m.percentage  | %     |
| *cpu*#cpu.utilization.15m.percentage | %     |

</TabItem>
<TabItem value="Faults" label="Faults">

| Metric name           | Unit  |
|:----------------------|:------|
| faults.total.count    | count |
| faults.critical.count | count |
| faults.major.count    | count |
| faults.warning.count  | count |
| faults.minor.count    | count |
| faults.info.count     | count |
| status                | N/A   |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                                   | Description                     | Unit  |
|:----------------------------------------------|:--------------------------------|:------|
| chassis status                                | Status of the chassis           |       |
| *dn*#hardware.chassis.input.power.watt        | Input power of the chassis      | W     |
| *dn*#hardware.chassis.output.power.watt       | Output power of the chassis     | W     |
| cpuunit status                                | Status of the cpu unit          |       |
| *dn*#hardware.cpuunit.temperature.celsius     | Status of the cpu unit          | C     |
| fan status                                    | Status of the fan               |       |
| *dn*#hardware.fan.speed.rpm                   | Speed of the fan                | rpm   |
| fanmodule status                              | Status of the fan module        |       |
| *dn*#hardware.fanmodule.temperature.celsius   | Temperature of the fan module   | C     |
| memoryunit status                             | Status of the memory unit       |       |
| *dn*#hardware.memoryunit.temperature.celsius  | Temperature of the memory unit  | C     |
| psu status                                    | Status of the power supply      |       |
| *dn*#hardware.powersupply.temperature.celsius | Temperature of the power supply | C     |

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
</Tabs>

## Prerequisites

### SNMP Configuration

The SNMP service must be configured and activated on the host. Please refer to the official documentation from the manufacturer/publisher.

### Network flow

The target resource must be reachable from the Centreon poller on the UDP/161
SNMP port.

### Configuring Cisco Firepower equipment

To control your Cisco Firepower, the SNMP must be configured (see official documentation: https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/213971-configure-snmp-on-firepower-ngfw-applian.html?dtid=osscdc000283).

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
dnf install centreon-pack-network-cisco-firepower-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-firepower-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-cisco-firepower-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-firepower-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Cisco Firepower SNMP** connector through
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
dnf install centreon-plugin-Network-Cisco-Firepower-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Firepower-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-cisco-firepower-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Cisco-Firepower-SNMP-custom** template to the host. 

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

| Macro                | Description                                                                                                                                      | Default value     | Mandatory   |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSECURITYMODULE | Filter security module name                                                                                                                      |                   |             |
| WARNINGAVERAGE15M    | Warning threshold for 'average-15m' (%)                                                                                                          |                   |             |
| CRITICALAVERAGE15M   | Critical threshold for 'average-15m' (%)                                                                                                         |                   |             |
| WARNINGAVERAGE1M     | Warning threshold for 'average-1m' (%)                                                                                                           |                   |             |
| CRITICALAVERAGE1M    | Critical threshold for 'average-1m' (%)                                                                                                          |                   |             |
| WARNINGAVERAGE5M     | Warning threshold for 'average-5m' (%)                                                                                                           |                   |             |
| CRITICALAVERAGE5M    | Critical threshold for 'average-5m' (%)                                                                                                          |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose         |             |

</TabItem>
<TabItem value="Faults" label="Faults">

| Macro                  | Description                                                                                                                                                                  | Default value                    | Mandatory   |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| WARNINGFAULTSCRITICAL  | Warning threshold for 'faults-critical'                                                                                                                                      |                                  |             |
| CRITICALFAULTSCRITICAL | Critical threshold for 'faults-critical'                                                                                                                                     |                                  |             |
| WARNINGFAULTSWARNING   | Warning threshold for 'faults-warning'                                                                                                                                       |                                  |             |
| CRITICALFAULTSWARNING  | Critical threshold for 'faults-warning'                                                                                                                                      |                                  |             |
| WARNINGFAULTSINFO      | Warning threshold for 'faults-info'                                                                                                                                          |                                  |             |
| CRITICALFAULTSINFO     | Critical threshold for 'faults-info'                                                                                                                                         |                                  |             |
| WARNINGFAULTSMAJOR     | Warning threshold for 'faults-major'                                                                                                                                         |                                  |             |
| CRITICALFAULTSMAJOR    | Critical threshold for 'faults-major'                                                                                                                                        |                                  |             |
| WARNINGFAULTSMINOR     | Warning threshold for 'faults-info'                                                                                                                                          |                                  |             |
| CRITICALFAULTSMINOR    | Critical threshold for 'faults-info'                                                                                                                                         |                                  |             |
| WARNINGFAULTSTOTAL     | Warning threshold for 'faults-total'                                                                                                                                         |                                  |             |
| CRITICALFAULTSTOTAL    | Critical threshold for 'faults-total'                                                                                                                                        |                                  |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{description}, %{object}, %{severity}, %{type}, %{acknowledged}, %{since} | %{severity} =~ /minor\|warning/  |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{description}, %{object}, %{severity}, %{type}, %{since}                 | %{severity} =~ /major\|critical/ |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                       | --verbose                        |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    |                                                                                                                                        | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                                                                               | Default value                                         | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| OIDFILTER          | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                               | ifname                                                |             |
| OIDDISPLAY         | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                      | ifname                                                |             |
| INTERFACENAME      | Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored                                               |                                                       |             |
| WARNINGINDISCARD   | Warning threshold for 'faults-total'                                                                                                                      |                                                       |             |
| CRITICALINDISCARD  | Critical threshold for 'faults-total'                                                                                                                     |                                                       |             |
| WARNINGINERROR     | Warning threshold for 'in-error'                                                                                                                          |                                                       |             |
| CRITICALINERROR    | Critical threshold for 'in-error'                                                                                                                         |                                                       |             |
| WARNINGINTRAFFIC   | Warning threshold for 'in-traffic'                                                                                                                        |                                                       |             |
| CRITICALINTRAFFIC  | Critical threshold for 'in-traffic'                                                                                                                       |                                                       |             |
| WARNINGOUTDISCARD  | Warning threshold for 'in-traffic'                                                                                                                        |                                                       |             |
| CRITICALOUTDISCARD | Critical threshold for 'in-traffic'                                                                                                                       |                                                       |             |
| WARNINGOUTERROR    | Warning threshold for 'out-error'                                                                                                                         |                                                       |             |
| CRITICALOUTERROR   | Critical threshold for 'out-error'                                                                                                                        |                                                       |             |
| WARNINGOUTTRAFFIC  | Warning threshold for 'out-traffic'                                                                                                                       |                                                       |             |
| CRITICALOUTTRAFFIC | Critical threshold for 'out-traffic'                                                                                                                      |                                                       |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} | %{admstatus} eq "up" and %{opstatus} !~ /up\|dormant/ |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}  |                                                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                    | --verbose --no-skipped-counters                       |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                | Description                                                                                                                            | Default value     | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSECURITYMODULE | Filter switch number.                                                                                                                  |                   |             |
| WARNINGUSAGE         | Warning threshold for 'usage' (B)                                                                                                      |                   |             |
| CRITICALUSAGE        | Critical threshold for 'usage' (B)                                                                                                     |                   |             |
| WARNINGUSAGEFREE     | Warning threshold for 'usage-free' (B)                                                                                                 |                   |             |
| CRITICALUSAGEFREE    | Critical threshold for 'usage-free' (B)                                                                                                |                   |             |
| WARNINGUSAGEPRCT     | Warning threshold for 'usage-free' (B)                                                                                                 |                   |             |
| CRITICALUSAGEPRCT    | Critical threshold for 'usage-free' (B)                                                                                                |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \
	--plugin=network::cisco::firepower::fxos::snmp::plugin \
	--mode=memory \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-security-module='' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--verbose
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
/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \
	--plugin=network::cisco::firepower::fxos::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                | Linked service template                    |
|:------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fxos/snmp/mode/cpu.pm)]           | Net-Cisco-Firepower-Cpu-SNMP-custom        |
| faults [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fxos/snmp/mode/faults.pm)]     | Net-Cisco-Firepower-Faults-SNMP-custom     |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fxos/snmp/mode/hardware.pm)] | Net-CIsco-Firepower-Hardware-SNMP-custom   |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                 | Net-Cisco-Firepower-Interfaces-SNMP-custom |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]        | Used for service discovery                 |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fxos/snmp/mode/memory.pm)]     | Net-Cisco-Firepower-Memory-SNMP-custom     |

### Available options

#### Generic options

All generic options are listed here:

| Option | Description |
|:-------|:------------|

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Faults" label="Faults">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Hardware" label="Hardware">

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
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \
	--plugin=network::cisco::firepower::fxos::snmp::plugin \
	--mode=memory \
	--help
```
