---
id: network-routers-atrica-snmp
title: Atrica Routeur
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Atrica Routeur** brings a host template:

* **Net-Atrica-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Atrica-SNMP-custom" label="Net-Atrica-SNMP-custom">

| Service Alias | Service Template  | Service Description |
|:--------------|:------------------|:--------------------|

> The services listed above are created automatically when the **Net-Atrica-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias            | Service Template                                | Service Description |
|:-------------------------|:------------------------------------------------|:--------------------|
| Connections-Generic-Id   | Net-Atrica-Connections-Generic-Id-SNMP-custom   | Check traffic       |
| Connections-Generic-Name | Net-Atrica-Connections-Generic-Name-SNMP-custom | Check traffic       |
| Connections-Global       | Net-Atrica-Connections-Global-SNMP-custom       | Check traffic       |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                    |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Atrica-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Connections-*" label="Connections-*">

| Metric name                                               | Unit  |
|:----------------------------------------------------------|:------|
| *interface_name*#status                                   | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |

> Applies to the following service templates: Connections-Generic-Id, Connections-Generic-Name, Connections-Global

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
dnf install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Atrica Routeur** connector through
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
dnf install centreon-plugin-Network-Routers-Atrica-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Routers-Atrica-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Routers-Atrica-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Atrica-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Connections-Generic-Id" label="Connections-Generic-Id">

| Macro                 | Description                                                                                                                            | Default value      | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| INTERFACEID           | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                              |                    |             |
| OIDDISPLAY            | Define the OID that will be used to name the interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                  | atrConnCepGenDescr |             |
| OIDFILTER             | Define the OID to be used to filter interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                           | atrConnCepGenDescr |             |
| SPEED                 | Set interface speed for incoming/outgoing traffic (in Mb)                                                                              |                    |             |
| CRITICALINCIR         | Thresholds                                                                                                                             |                    |             |
| WARNINGINCIR          | Thresholds                                                                                                                             |                    |             |
| CRITICALINEIR         | Thresholds                                                                                                                             |                    |             |
| WARNINGINEIR          | Thresholds                                                                                                                             |                    |             |
| CRITICALINEIRDISCARD  | Thresholds                                                                                                                             |                    |             |
| WARNINGINEIRDISCARD   | Thresholds                                                                                                                             |                    |             |
| CRITICALOUTCIR        | Thresholds                                                                                                                             |                    |             |
| WARNINGOUTCIR         | Thresholds                                                                                                                             |                    |             |
| CRITICALOUTEIR        | Thresholds                                                                                                                             |                    |             |
| WARNINGOUTEIR         | Thresholds                                                                                                                             |                    |             |
| CRITICALOUTEIRDISCARD | Thresholds                                                                                                                             |                    |             |
| WARNINGOUTEIRDISCARD  | Thresholds                                                                                                                             |                    |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                    |             |

</TabItem>
<TabItem value="Connections-Generic-Name" label="Connections-Generic-Name">

| Macro                 | Description                                                                                                                            | Default value      | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| INTERFACENAME         | Set the interface name                                                                                                                 |                    |             |
| SPEED                 | Set interface speed for incoming/outgoing traffic (in Mb)                                                                              |                    |             |
| OIDFILTER             | Define the OID to be used to filter interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                           | atrConnCepGenDescr |             |
| OIDDISPLAY            | Define the OID that will be used to name the interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                  | atrConnCepGenDescr |             |
| CRITICALINCIR         | Thresholds                                                                                                                             |                    |             |
| WARNINGINCIR          | Thresholds                                                                                                                             |                    |             |
| CRITICALINEIR         | Thresholds                                                                                                                             |                    |             |
| WARNINGINEIR          | Thresholds                                                                                                                             |                    |             |
| WARNINGINEIRDISCARD   | Thresholds                                                                                                                             |                    |             |
| CRITICALINEIRDISCARD  | Thresholds                                                                                                                             |                    |             |
| CRITICALOUTCIR        | Thresholds                                                                                                                             |                    |             |
| WARNINGOUTCIR         | Thresholds                                                                                                                             |                    |             |
| CRITICALOUTEIR        | Thresholds                                                                                                                             |                    |             |
| WARNINGOUTEIR         | Thresholds                                                                                                                             |                    |             |
| WARNINGOUTEIRDISCARD  | Thresholds                                                                                                                             |                    |             |
| CRITICALOUTEIRDISCARD | Thresholds                                                                                                                             |                    |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                    |             |

</TabItem>
<TabItem value="Connections-Global" label="Connections-Global">

| Macro                 | Description                                                                                                                                                                                                                                                                            | Default value      | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| FILTER                | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                                                                                                                              | .+                 |             |
| OIDDISPLAY            | Define the OID that will be used to name the interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                                                                                                                                                                  | atrConnCepGenDescr |             |
| OIDFILTER             | Define the OID to be used to filter interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                                                                                                                                                                           | atrConnCepGenDescr |             |
| SPEED                 | Set interface speed for incoming/outgoing traffic (in Mb)                                                                                                                                                                                                                              |                    |             |
| CRITICALINCIR         | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGINCIR          | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALINEIR         | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGINEIR          | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALINEIRDISCARD  | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGINEIRDISCARD   | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALOUTCIR        | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGOUTCIR         | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALOUTEIR        | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGOUTEIR         | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALOUTEIRDISCARD | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGOUTEIRDISCARD  | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL. Default (depends of the atrica release): '%{admstatus} eq "on" and %{opstatus} ne "inService"' '%{admstatus} eq "up" and %{opstatus} ne "up"' You can use the following variables: %{admstatus}, %{opstatus}, %{display} |                    |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                 | --verbose          |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_atrica.pl \
	--plugin=network::atrica::snmp::plugin \
	--mode=connections \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--interface='.+' \
	--name \
	--add-status \
	--add-traffic \
	--add-errors \
	--critical-status='' \
	--warning-in-cir='' \
	--critical-in-cir='' \
	--warning-out-cir='' \
	--critical-out-cir='' \
	--warning-in-eir='' \
	--critical-in-eir='' \
	--warning-out-eir='' \
	--critical-out-eir='' \
	--warning-in-eir-discard='' \
	--critical-in-eir-discard='' \
	--warning-out-eir-discard='' \
	--critical-out-eir-discard='' \
	--speed='' \
	--oid-filter='atrConnCepGenDescr' \
	--oid-display='atrConnCepGenDescr'  \
	--verbose
```

The expected command output is shown below:

```bash
OK: All interfaces are ok | '*interface_name*#status'='up';;;;'*interface_name*#interface.traffic.in.bitspersecond'=20b/s;;;;'*interface_name*#interface.traffic.out.bitspersecond'=20b/s;;;;'*interface_name*#interface.packets.in.discard.percentage'=10%;;;;100'*interface_name*#interface.packets.in.error.percentage'=25%;;;;100'*interface_name*#interface.packets.out.discard.percentage'=12%;;;;100'*interface_name*#interface.packets.out.error.percentage'=30%;;;;100
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
/usr/lib/centreon/plugins/centreon_atrica.pl \
	--plugin=network::atrica::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                 | Linked service template                                                                                                                           |
|:-------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/atrica/snmp/mode/connections.pm)]          | Net-Atrica-Connections-Generic-Id-SNMP-custom<br />Net-Atrica-Connections-Generic-Name-SNMP-custom<br />Net-Atrica-Connections-Global-SNMP-custom |
| list-connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/atrica/snmp/mode/listconnections.pm)] | Not used in this Monitoring Connector                                                                                                             |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Connections-*" label="Connections-*">

| Option                                          | Description                                                                                                                                                                                                                                                                              |
|:------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-status                                    | Check interface status (by default if no --add-* option is set).                                                                                                                                                                                                                         |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                 |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                  |
| --check-metrics                                 | If the expression is true, metrics are checked (default: '%{opstatus} eq "up" or %{opstatus} eq "inService"').                                                                                                                                                                           |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{display}                                                                                                                                                  |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL. Default (depends of the atrica release): '%{admstatus} eq "on" and %{opstatus} ne "inService"' '%{admstatus} eq "up" and %{opstatus} ne "up"' You can use the following variables: %{admstatus}, %{opstatus}, %{display}   |
| --warning-* --critical-*                        | Thresholds. Can be: 'in-cir', 'in-eir', 'out-cir', 'out-eir', 'in-eir-discard', 'out-eir-discard'.                                                                                                                                                                                       |
| --units-traffic                                 | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                    |
| --units-errors                                  | Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                        |
| --interface                                     | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                               |
| --name                                          | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                             |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                               |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                        |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                        |
| --reload-cache-time                             | Time in seconds before reloading cache file (default: 180).                                                                                                                                                                                                                              |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: atrConnCepGenDescr) (values: atrConnIngDescr, atrConnCepGenDescr).                                                                                                                                                              |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: atrConnCepGenDescr) (values: atrConnIngDescr, atrConnCepGenDescr).                                                                                                                                                     |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                   |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                         |
| --show-cache                                    | Display cache interface data.                                                                                                                                                                                                                                                            |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_atrica.pl \
	--plugin=network::atrica::snmp::plugin \
	--mode=connections \
	--help
```
