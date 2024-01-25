---
id: hardware-ups-apc-snmp
title: APC UPS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **APC UPS** brings a host template:

* **HW-UPS-Apc-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-UPS-Apc-SNMP-custom" label="HW-UPS-Apc-SNMP-custom">

| Service Alias  | Service Template                      | Service Description        |
|:---------------|:--------------------------------------|:---------------------------|
| Battery-Status | HW-UPS-Apc-Battery-Status-SNMP-custom | Check battery status       |
| Input-Lines    | HW-UPS-Apc-Input-Lines-SNMP-custom    | Check input lines metrics  |
| Output-Lines   | HW-UPS-Apc-Output-Lines-SNMP-custom   | Check output lines metrics |
| Sensors        | HW-UPS-Apc-Sensors-SNMP-custom        | Check sensors              |

> The services listed above are created automatically when the **HW-UPS-Apc-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template              | Service Description                                  |
|:--------------|:------------------------------|:-----------------------------------------------------|
| Time          | HW-UPS-Apc-Time-SNMP-custom   | Check time offset                                    |
| Uptime        | HW-UPS-Apc-Uptime-SNMP-custom | Time since the server has been working and available |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Battery-Status" label="Battery-Status">

| Metric name                        | Unit  |
|:-----------------------------------|:------|
| battery status                     |       |
| battery.charge.remaining.percent   | %     |
| battery.charge.remaining.minutes   | m     |
| battery.timeon.minutes             | m     |
| battery.current.ampere             | A     |
| battery.voltage.volt               | V     |
| battery.temperature.celsius        | C     |
| battery.replace.lasttime.seconds   | s     |
| battery pack status                |       |
| cartridge status                   |       |

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Metric name                                                | Unit  |
|:-----------------------------------------------------------|:------|
| lines.input.voltage.volt                                   | V     |
| lines.input.frequence.hertz                                | Hz    |
| input lines status                                         |       |
| *input_num.input_type*#line.input.frequence.hertz          | Hz    |
| *input_num.input_type~phase_num*#line.input.voltage.volt   | V     |
| *input_num.input_type~phase_num*#line.input.current.ampere | A     |
| *input_num.input_type~phase_num*#line.input.power.watt     | W     |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Metric name                  | Unit  |
|:-----------------------------|:------|
| output source status         |       |
| lines.output.load.percentage | %     |
| lines.output.current.ampere  | A     |
| lines.output.voltage.volt    | V     |
| lines.output.frequence.hertz | Hz    |

</TabItem>
<TabItem value="Sensors" label="Sensors">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| sensor.universal.temperature.celsius  | C     |
| sensor.universal.humidity.percentage  | %     |
| sensor.integrated.humidity.percentage | %     |

</TabItem>
<TabItem value="Time" label="Time">

| Metric name         | Unit  |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your ressource.
Please refer to the official documentation from the constructor.

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
dnf install centreon-pack-hardware-ups-apc-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-ups-apc-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-ups-apc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-ups-apc-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **APC UPS** connector through
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
dnf install centreon-plugin-Hardware-Ups-Apc-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Ups-Apc-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-ups-apc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Ups-Apc-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **HW-UPS-Apc-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                           | Default value     | Mandatory   |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Battery-Status" label="Battery-Status">

| Macro                 | Description                                                                                                                                                     | Default value              | Mandatory   |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /unknown/i'). You can use the following variables: %{status}, %{replace}    | %{status} =~ /unknown/i    |             |
| REPLACELASTTIMEFORMAT | Define the date format (default: '%m/%d/%Y')                                                                                                                    |                            |             |
| WARNINGCURRENT        | Thresholds                                                                                                                                                      |                            |             |
| CRITICALCURRENT       | Thresholds                                                                                                                                                      |                            |             |
| WARNINGLOAD           | Thresholds                                                                                                                                                      |                            |             |
| CRITICALLOAD          | Thresholds                                                                                                                                                      |                            |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING (Default: '%{status} =~ /batteryLow/i'). You can use the following variables: %{status}, %{replace} | %{status} =~ /batteryLow/i |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (Default: '%{replace} =~ /yes/i'). You can use the following variables: %{status}, %{replace}      | %{replace} =~ /yes/i       |             |
| WARNINGTEMPERATURE    | Thresholds                                                                                                                                                      |                            |             |
| CRITICALTEMPERATURE   | Thresholds                                                                                                                                                      |                            |             |
| WARNINGTIME           | Thresholds                                                                                                                                                      |                            |             |
| CRITICALTIME          | Thresholds                                                                                                                                                      |                            |             |
| WARNINGVOLTAGE        | Thresholds                                                                                                                                                      |                            |             |
| CRITICALVOLTAGE       | Thresholds                                                                                                                                                      |                            |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                             |                            |             |

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Macro                    | Description                                                                                                       | Default value     | Mandatory   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGFREQUENCE         | Thresholds                                                                                                        |                   |             |
| CRITICALFREQUENCE        | Thresholds                                                                                                        |                   |             |
| WARNINGLINEFREQUENCE     | Thresholds                                                                                                        |                   |             |
| CRITICALLINEFREQUENCE    | Thresholds                                                                                                        |                   |             |
| WARNINGLINEPHASECURRENT  | Thresholds                                                                                                        |                   |             |
| CRITICALLINEPHASECURRENT | Thresholds                                                                                                        |                   |             |
| WARNINGLINEPHASEPOWER    | Thresholds                                                                                                        |                   |             |
| CRITICALLINEPHASEPOWER   | Thresholds                                                                                                        |                   |             |
| WARNINGLINEPHASEVOLTAGE  | Thresholds                                                                                                        |                   |             |
| CRITICALLINEPHASEVOLTAGE | Thresholds                                                                                                        |                   |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_cause}  |                   |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{last\_cause} |                   |             |
| WARNINGVOLTAGE           | Thresholds                                                                                                        |                   |             |
| CRITICALVOLTAGE          | Thresholds                                                                                                        |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)               |                   |             |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Macro             | Description                                                                                                                                                 | Default value                     | Mandatory   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| UNKNOWNSTATUS     | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /unknown/i'). You can use the following variables: %{status}            | %{status} =~ /unknown/i           |             |
| WARNINGCURRENT    | Thresholds                                                                                                                                                  |                                   |             |
| CRITICALCURRENT   | Thresholds                                                                                                                                                  |                                   |             |
| WARNINGFREQUENCE  | Thresholds                                                                                                                                                  |                                   |             |
| CRITICALFREQUENCE | Thresholds                                                                                                                                                  |                                   |             |
| WARNINGLOAD       | Thresholds                                                                                                                                                  | 90                                |             |
| CRITICALLOAD      | Thresholds                                                                                                                                                  | 95                                |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL (Default: '%{status} !~ /onLine\|rebooting/i'). You can use the following variables: %{status} | %{status} !~ /onLine\|rebooting/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                   |                                   |             |
| WARNINGVOLTAGE    | Thresholds                                                                                                                                                  |                                   |             |
| CRITICALVOLTAGE   | Thresholds                                                                                                                                                  |                                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                         |                                   |             |

</TabItem>
<TabItem value="Sensors" label="Sensors">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Time" label="Time">

| Macro          | Description                                                                                                     | Default value     | Mandatory   |
|:---------------|:----------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NTPHOSTNAME    | Set the ntp hostname (if not set, localtime is used)                                                            |                   |             |
| NTPPORT        | Set the ntp port (Default: 123)                                                                                 |                   |             |
| TIMEZONE       | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100' |                   |             |
| WARNINGOFFSET  | Time offset warning threshold (in seconds)                                                                      |                   |             |
| CRITICALOFFSET | Time offset critical Threshold (in seconds)                                                                     |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)             |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                         | Default value     | Mandatory   |
|:---------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUPTIME  | Warning threshold                                                                                   |                   |             |
| CRITICALUPTIME | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor the resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_ups_apc.pl \
	--plugin=hardware::ups::apc::snmp::plugin \
	--mode=battery-status \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--verbose
```

The expected command output is shown below:

```bash
OK: battery status is 'batteryNormal' [battery needs replace: no] [last replace date: 06/01/14], remaining capacity: 100 %, remaining time: 62.00 minutes, time on battery: 0.00 minutes, current: 0 A, voltage: 218 V, temperature: 23 C | 'battery.charge.remaining.percent'=100%;;;0;100 'battery.charge.remaining.minutes'=62.00m;;;0; 'battery.timeon.minutes'=0.00m;;;0; 'battery.current.ampere'=0A;;;0; 'battery.voltage.volt'=218V;;;; 'battery.temperature.celsius'=23C;;;; 'battery.replace.lasttime.seconds'=287411790s;;;;
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
/usr/lib/centreon/plugins/centreon_ups_apc.pl \
	--plugin=hardware::ups::apc::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode           | Linked service template               |
|:---------------|:--------------------------------------|
| battery-status | HW-UPS-Apc-Battery-Status-SNMP-custom |
| input-lines    | HW-UPS-Apc-Input-Lines-SNMP-custom    |
| output-lines   | HW-UPS-Apc-Output-Lines-SNMP-custom   |
| sensors        | HW-UPS-Apc-Sensors-SNMP-custom        |
| time           | HW-UPS-Apc-Time-SNMP-custom           |
| uptime         | HW-UPS-Apc-Uptime-SNMP-custom         |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
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
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
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
<TabItem value="Battery-Status" label="Battery-Status">

| Option                         | Description                                                                                                                                                       |
|:-------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters              | Only display some counters (regexp can be used). Example: --filter-counters='^status\|load$'                                                                      |
| --replace-lasttime-format      | Define the date format (default: '%m/%d/%Y').                                                                                                                     |
| --unknown-status               | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /unknown/i'). You can use the following variables: %{status}, %{replace}      |
| --warning-status               | Define the conditions to match for the status to be WARNING (Default: '%{status} =~ /batteryLow/i'). You can use the following variables: %{status}, %{replace}   |
| --critical-status              | Define the conditions to match for the status to be CRITICAL (Default: '%{replace} =~ /yes/i'). You can use the following variables: %{status}, %{replace}        |
| --unknown-battery-pack-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}                                                       |
| --warning-battery-pack-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}                                                       |
| --critical-battery-pack-status | Define the conditions to match for the status to be CRITICAL (Default: '%{status} ne "OK"'). You can use the following variables: %{status}                       |
| --unknown-cartridge-status     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}                                                       |
| --warning-cartridge-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}                                                       |
| --critical-cartridge-status    | Define the conditions to match for the status to be CRITICAL (Default: '%{status} ne "OK"'). You can use the following variables: %{status}                       |
| --warning-* --critical-*       | Thresholds. Can be: 'load', 'voltage', 'current', 'temperature', 'time', 'replace-lasttime', 'timeon'.                                                            |

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Option                   | Description                                                                                                                      |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^frequence\|voltage$'                               |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_cause}                 |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{last\_cause}                |
| --warning-* --critical-* | Thresholds. Can be: 'voltage', 'frequence', 'line-frequence', 'line-phase-voltage', 'line-phase-current', 'line-phase-power'.    |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Option                   | Description                                                                                                                                                   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^status\|load$'                                                                  |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /unknown/i'). You can use the following variables: %{status}              |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                     |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{status} !~ /onLine\|rebooting/i'). You can use the following variables: %{status}   |
| --warning-* --critical-* | Thresholds. Can be: 'load', 'voltage', 'current', 'frequence'.                                                                                                |

</TabItem>
<TabItem value="Sensors" label="Sensors">

| Option               | Description                                                                                                                                                                                                                                |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter             | Exclude some parts (comma seperated list) You can also exclude items from specific instances: --filter=sensor,1.1                                                                                                                          |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                                 |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='sensor,CRITICAL,sensorStatusNotApplicable'   |
| --warning            | Set warning threshold for 'temperature', 'humidity' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,40'                                                                                                                 |
| --critical           | Set critical threshold for 'temperature', 'humidity' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,50'                                                                                                               |

</TabItem>
<TabItem value="Time" label="Time">

| Option            | Description                                                                                                         |
|:------------------|:--------------------------------------------------------------------------------------------------------------------|
| --warning-offset  | Time offset warning threshold (in seconds).                                                                         |
| --critical-offset | Time offset critical Threshold (in seconds).                                                                        |
| --ntp-hostname    | Set the ntp hostname (if not set, localtime is used).                                                               |
| --ntp-port        | Set the ntp port (Default: 123).                                                                                    |
| --timezone        | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100'.    |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-uptime       | Warning threshold.                                                                                                                                                                                                                            |
| --critical-uptime      | Critical threshold.                                                                                                                                                                                                                           |
| --add-sysdesc          | Display system description.                                                                                                                                                                                                                   |
| --force-oid            | Can choose your oid (numeric format only).                                                                                                                                                                                                    |
| --check-overload       | Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.                                                                                          |
| --reboot-window        | To be used with check-overload option. Time in milliseconds (Default: 5000) You increase the chance of not missing a reboot if you decrease that value.                                                                                       |
| --unit                 | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds                                                                                   |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ups_apc.pl \
	--plugin=hardware::ups::apc::snmp::plugin \
	--mode=battery-status \
	--help
```
