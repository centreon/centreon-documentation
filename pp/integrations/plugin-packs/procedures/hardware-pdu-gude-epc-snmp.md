---
id: hardware-pdu-gude-epc-snmp
title: Gude EPC PDU SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Gude EPC SNMP** brings a host template:

* **HW-Pdu-Gude-Epc-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Pdu-Gude-Epc-SNMP-custom" label="HW-Pdu-Gude-Epc-SNMP-custom">

| Service Alias     | Service Template                              | Service Description              | Discovery  |
|:------------------|:----------------------------------------------|:---------------------------------|:----------:|
| Power-Channels    | HW-Pdu-Gude-Epc-Power-Channels-SNMP-custom    | Check power channels             |            |
| Sp-Power-Channels | HW-Pdu-Gude-Epc-Sp-Power-Channels-SNMP-custom | Check single port power channels | X          |

> The services listed above are created automatically when the **HW-Pdu-Gude-Epc-SNMP-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                         |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **HW-Pdu-Gude-Epc-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                                  | Description |
|:-------------------------------------------|:------------|
| HW-Pdu-Gude-Epc-SNMP-Sp-Power-Channel-Name |             |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Power-Channels" label="Power-Channels">

| Metric name                                                       | Unit  |
|:------------------------------------------------------------------|:------|
| pdu.power_channels.active.count                                   | count |
| *channels*#status                                                 | N/A   |
| *channels*#ovp-status                                             | N/A   |
| *channels*#ps-status                                              | N/A   |
| *channels*#pdu.interface.power_channel.current.ampere             | A     |
| *channels*#pdu.interface.power_channel.energy.active.kilowatthour | kWh   |
| *channels*#pdu.interface.power_channel.frequency.hertz            | Hz    |
| *channels*#pdu.interface.power_channel.phase.angle.degree         | N/A   |
| *channels*#pdu.interface.power_channel.active.watt                | W     |
| *channels*#pdu.interface.power_channel.power.apparent.voltampere  | VA    |
| *channels*#pdu.interface.power_channel.power.factor.count         | count |
| *channels*#pdu.interface.power_channel.power.reactive.voltampere  | Var   |
| *channels*#pdu.interface.power_channel.voltage.volt               | V     |

</TabItem>
<TabItem value="Sp-Power-Channels" label="Sp-Power-Channels">

| Metric name                                                            | Unit  |
|:-----------------------------------------------------------------------|:------|
| pdu.singleport_power_channels.total.count                              | count |
| *sp*#state                                                             | N/A   |
| *sp*#status                                                            | N/A   |
| *sp*#pdu.interface.singleport_power_channel.current.ampere             | A     |
| *sp*#pdu.interface.singleport_power_channel.energy.active.kilowatthour | kWh   |
| *sp*#pdu.interface.singleport_power_channel.frequency.hertz            | Hz    |
| *sp*#pdu.interface.singleport_power_channel.phase.angle.degree         | N/A   |
| *sp*#pdu.power_channel.active.watt                                     | W     |
| *sp*#pdu.interface.singleport_power_channel.power.apparent.voltampere  | VA    |
| *sp*#pdu.interface.singleport_power_channel.power.factor.count         | count |
| *sp*#pdu.interface.singleport_power_channel.power.reactive.voltampere  | Var   |
| *sp*#pdu.interface.singleport_power_channel.voltage.volt               | V     |

</TabItem>
</Tabs>

## Prerequisites

To monitor your Gude Export Power Control, the SNMP must be configured.
The Poller should be able to perform SNMP requests toward the Lenovo device over SNMP UDP/161 port.

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
dnf install centreon-pack-hardware-pdu-gude-epc-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-pdu-gude-epc-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-pdu-gude-epc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-pdu-gude-epc-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Gude EPC SNMP** connector through
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
dnf install centreon-plugin-Hardware-Pdu-Gude-Epc-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Pdu-Gude-Epc-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-pdu-gude-epc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Pdu-Gude-Epc-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Pdu-Gude-Epc-SNMP-custom** template to the host.

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
<TabItem value="Power-Channels" label="Power-Channels">

| Macro                  | Description                                                                                        | Default value           | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERNAME             | Filter power channel interfaces by name (can be a regexp)                                          |                         |             |
| WARNINGACTIVECHANNELS  | Warning threshold                                                                                  |                         |             |
| CRITICALACTIVECHANNELS | Critical threshold                                                                                                   |                         |             |
| WARNINGCURRENT         | Warning threshold                                                                                  |                         |             |
| CRITICALCURRENT        | Critical threshold                                                                                                   |                         |             |
| WARNINGENERGY          | Warning threshold                                                                                  |                         |             |
| CRITICALENERGY         | Critical threshold                                                                                                   |                         |             |
| WARNINGFREQUENCY       | Warning threshold                                                                                  |                         |             |
| CRITICALFREQUENCY      | Critical threshold                                                                                                   |                         |             |
| CRITICALOVPSTATUS      | Critical threshold for OVP (OverVoltage Protection) status (default: '%{ovp\_status} !~ /ok/i')    | %{ovp\_status} !~ /ok/i |             |
| WARNINGOVPSTATUS       | Warning threshold for OVP (OverVoltage Protection) status                                          |                         |             |
| WARNINGPHASEANGLE      | Warning threshold                                                                                  |                         |             |
| CRITICALPHASEANGLE     | Critical threshold                                                                                                   |                         |             |
| WARNINGPOWERACTIVE     | Warning threshold                                                                                  |                         |             |
| CRITICALPOWERACTIVE    | Critical threshold                                                                                                   |                         |             |
| WARNINGPOWERAPPARENT   | Warning threshold                                                                                  |                         |             |
| CRITICALPOWERAPPARENT  | Critical threshold                                                                                                   |                         |             |
| WARNINGPOWERFACTOR     | Warning threshold                                                                                  |                         |             |
| CRITICALPOWERFACTOR    | Critical threshold                                                                                                   |                         |             |
| WARNINGPOWERREACTIVE   | Warning threshold                                                                                  |                         |             |
| CRITICALPOWERREACTIVE  | Critical threshold                                                                                                   |                         |             |
| CRITICALPSSTATUS       | Critical threshold for power supply status (default: '%{ps\_status} !~ /up/i')                     | %{ps\_status} !~ /up/i  |             |
| WARNINGPSSTATUS        | Warning threshold for power supply status                                                          |                         |             |
| CRITICALSTATUS         | Critical threshold for channel status (default: '%{status} !~ /valid/i')                           | %{status} !~ /valid/i   |             |
| WARNINGSTATUS          | Warning threshold for channel status                                                               |                         |             |
| WARNINGVOLTAGE         | Warning threshold                                                                                  |                         |             |
| CRITICALVOLTAGE        | Critical threshold                                                                                                   |                         |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose               |             |

</TabItem>
<TabItem value="Sp-Power-Channels" label="Sp-Power-Channels">

| Macro                    | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME               | Filter single port power channels by name (can be a regexp)                                        |                   |             |
| WARNINGCURRENT           | Warning threshold                                                                                  |                   |             |
| CRITICALCURRENT          | Critical threshold                                                                                                   |                   |             |
| WARNINGENERGY            | Warning threshold                                                                                  |                   |             |
| CRITICALENERGY           | Critical threshold                                                                                                   |                   |             |
| WARNINGFREQUENCY         | Warning threshold                                                                                  |                   |             |
| CRITICALFREQUENCY        | Critical threshold                                                                                                   |                   |             |
| WARNINGPHASEANGLE        | Warning threshold                                                                                  |                   |             |
| CRITICALPHASEANGLE       | Critical threshold                                                                                                   |                   |             |
| WARNINGPOWERACTIVE       | Warning threshold                                                                                  |                   |             |
| CRITICALPOWERACTIVE      | Critical threshold                                                                                                   |                   |             |
| WARNINGPOWERAPPARENT     | Warning threshold                                                                                  |                   |             |
| CRITICALPOWERAPPARENT    | Critical threshold                                                                                                   |                   |             |
| WARNINGPOWERFACTOR       | Warning threshold                                                                                  |                   |             |
| CRITICALPOWERFACTOR      | Critical threshold                                                                                                   |                   |             |
| WARNINGPOWERREACTIVE     | Warning threshold                                                                                  |                   |             |
| CRITICALPOWERREACTIVE    | Critical threshold                                                                                                   |                   |             |
| WARNINGSTATE             | Warning threshold single port state                                                            |                   |             |
| CRITICALSTATE            | Critical threshold single port state                                                           |                   |             |
| WARNINGSTATUS            | Warning threshold for single port status                                                       |                   |             |
| CRITICALSTATUS           | Critical threshold for single port status                                                      |                   |             |
| WARNINGTOTALSINGLEPORTS  | Warning threshold                                                                                                   |                   |             |
| CRITICALTOTALSINGLEPORTS | Critical threshold                                                                                                   |                   |             |
| WARNINGVOLTAGE           | Warning threshold                                                                                  |                   |             |
| CRITICALVOLTAGE          | Critical threshold                                                                                                   |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_pdu_gude_epc_snmp.pl  \
	--plugin=hardware::pdu::gude::epc::snmp::plugin \
	--mode=sp-power-channels \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-name='' \
	--warning-state='' \
	--critical-state='' \
	--warning-status='' \
	--critical-status='' \
	--warning-current='' \
	--critical-current='' \
	--warning-energy='' \
	--critical-energy='' \
	--warning-frequency='' \
	--critical-frequency='' \
	--warning-phase-angle='' \
	--critical-phase-angle='' \
	--warning-power-active='' \
	--critical-power-active='' \
	--warning-power-apparent='' \
	--critical-power-apparent='' \
	--warning-power-factor='' \
	--critical-power-factor='' \
	--warning-power-reactive='' \
	--critical-power-reactive='' \
	--warning-voltage='' \
	--critical-voltage='' \
	--warning-total-singleports='' \
	--critical-total-singleports='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: 35 single port(s) All single port power channel interfaces are ok | 'pdu.singleport_power_channels.total.count'=35;;;0;'*sp*#pdu.interface.singleport_power_channel.current.ampere'=A;;;0;'*sp*#pdu.interface.singleport_power_channel.energy.active.kilowatthour'=kWh;;;0;'*sp*#pdu.interface.singleport_power_channel.frequency.hertz'=Hz;;;0;'*sp*#pdu.interface.singleport_power_channel.phase.angle.degree'=;;;0;'*sp*#pdu.power_channel.active.watt'=W;;;;'*sp*#pdu.interface.singleport_power_channel.power.apparent.voltampere'=VA;;;;'*sp*#pdu.interface.singleport_power_channel.power.factor.count'=;;;0;'*sp*#pdu.interface.singleport_power_channel.power.reactive.voltampere'=Var;;;;'*sp*#pdu.interface.singleport_power_channel.voltage.volt'=V;;;0;
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
/usr/lib/centreon/plugins/centreon_pdu_gude_epc_snmp.pl  \
	--plugin=hardware::pdu::gude::epc::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                  | Linked service template                       |
|:------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
| list-sp-power-channels [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/pdu/gude/epc/snmp/mode/listsppowerchannels.pm)] | Used for service discovery                    |
| power-channels [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/pdu/gude/epc/snmp/mode/powerchannels.pm)]               | HW-Pdu-Gude-Epc-Power-Channels-SNMP-custom    |
| sp-power-channels [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/pdu/gude/epc/snmp/mode/sppowerchannels.pm)]          | HW-Pdu-Gude-Epc-Sp-Power-Channels-SNMP-custom |

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
<TabItem value="Power-Channels" label="Power-Channels">

| Option                | Description                                                                                                                                                                    |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name         | Filter power channel interfaces by name (can be a regexp).                                                                                                                     |
| --warning-status      | Warning threshold for channel status.                                                                                                                                          |
| --critical-status     | Critical threshold for channel status (default: '%{status} !~ /valid/i')                                                                                                       |
| --warning-ovp-status  | Warning threshold for OVP (OverVoltage Protection) status.                                                                                                                     |
| --critical-ovp-status | Critical threshold for OVP (OverVoltage Protection) status (default: '%{ovp\_status} !~ /ok/i')                                                                                |
| --warning-ps-status   | Warning threshold for power supply status.                                                                                                                                     |
| --critical-ps-status  | Critical threshold for power supply status (default: '%{ps\_status} !~ /up/i')                                                                                                 |
| --warning-*           | Warning threshold. Can be: 'active-channels', 'current', 'energy', 'frequency', 'phase-angle', 'power-active', 'power-apparent', 'power-factor', 'power-reactive', 'voltage'   |
| --critical-*          | Can be: 'active-channels', 'current', 'energy', 'frequency', 'phase-angle', 'power-active', 'power-apparent', 'power-factor', 'power-reactive', 'voltage'                      |

</TabItem>
<TabItem value="Sp-Power-Channels" label="Sp-Power-Channels">

| Option            | Description                                                                                                                                                                    |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter single port power channels by name (can be a regexp).                                                                                                                   |
| --skip-poweredoff | Exclude the single ports that have been powered off.                                                                                                                           |
| --warning-state   | Warning threshold for single port state.                                                                                                                                       |
| --critical-state  | Critical threshold for single port state.                                                                                                                                      |
| --warning-status  | Warning threshold for for single port status.                                                                                                                                  |
| --critical-status | Critical threshold for for single port status.                                                                                                                                 |
| --warning-*       | Warning threshold. Can be: 'active-channels', 'current', 'energy', 'frequency', 'phase-angle', 'power-active', 'power-apparent', 'power-factor', 'power-reactive', 'voltage'   |
| --critical-*      | Can be: 'active-channels', 'current', 'energy', 'frequency', 'phase-angle', 'power-active', 'power-apparent', 'power-factor', 'power-reactive', 'voltage'                      |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_pdu_gude_epc_snmp.pl  \
	--plugin=hardware::pdu::gude::epc::snmp::plugin \
	--mode=sp-power-channels \
	--help
```
