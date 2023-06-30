---
id: network-oneaccess-snmp
title: OneAccess SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **OneAccess SNMP** brings a host template:

* **Net-Oneaccess-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Oneaccess-SNMP" label="Net-Oneaccess-SNMP">

| Service Alias | Service Template          | Service Description                                  |
|:--------------|:--------------------------|:-----------------------------------------------------|
| Cpu           | Net-Oneaccess-Cpu-SNMP    | Check the rate of utilization of CPU for the machine |
| Memory        | Net-Oneaccess-Memory-SNMP | Check the rate of the utilization of memory          |

> The services listed above are created automatically when the **Net-Oneaccess-SNMP** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template               | Service Description          | Discovery  |
|:--------------|:-------------------------------|:-----------------------------|:-----------|
| Cells-Radio   | Net-Oneaccess-Cells-Radio-SNMP | Check cellular radio modules |            |
| Interfaces    | Net-Oneaccess-Interfaces-SNMP  | Check interfaces             | X          |
| Rtt-Probes    | Net-Oneaccess-Rtt-Probes-SNMP  | Check round-trip time probes | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then appy the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                         | Description                                         |
|:----------------------------------|:----------------------------------------------------|
| Net-Oneaccess-SNMP-Interface-Name | Discover network interfaces and monitor utilization |
| Net-Oneaccess-SNMP-Rtt-Probe-Tag  | Discover probes and monitor status                  |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cells-Radio" label="Cells-Radio">

| Metric name                                    | Unit  |
|:-----------------------------------------------|:------|
| modules.cellradio.detected.count               |       |
| status                                         |       |
| *module_id~operator*#module.cellradio.rsrp.dbm | dBm   |
| *module_id~operator*#module.cellradio.rsrq.dbm | dBm   |
| *module_id~operator*#module.cellradio.rssi.dbm | dBm   |
| *module_id~operator*#module.cellradio.snr.db   | dB    |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                | Unit  |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Unit |
|:----------------------------------------------------------|:-----|
| status                                                    |      |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | %    |
| *interface_name*#interface.packets.out.error.percentage   | %    |
| *interface_name*#interface.packets.out.discard.percentage | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name        | Unit  |
|:-------------------|:------|
| memory.usage.bytes | B     |

</TabItem>
<TabItem value="Rtt-Probes" label="Rtt-Probes">

| Metric name                                   | Unit |
|:----------------------------------------------|:-----|
| probe status                                  |      |
| *tag_name*#probe.completion.time.milliseconds | ms   |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this Pack, the SNMP service must be properly configured on your device.

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-oneaccess-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-oneaccess-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-oneaccess-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-oneaccess-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **OneAccess SNMP** connector through
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
dnf install centreon-plugin-Network-Oneaccess-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Oneaccess-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-oneaccess-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Oneaccess-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Oneaccess-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                           | Default value     | Mandatory   |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cells-Radio" label="Cells-Radio">

| Macro                            | Description                                                                                                                                                                                                                | Default value                                              | Mandatory   |
|:---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|:------------|
| CUSTOMPERFDATAINSTANCES          | Define perfdatas instance (default: '%(cellId) %(operator)')                                                                                                                                                               | %(cellId) %(operator)                                      |             |
| WARNINGMODULECELLRADIORSRP       | Thresholds                                                                                                                                                                                                                 |                                                            |             |
| CRITICALMODULECELLRADIORSRP      | Thresholds                                                                                                                                                                                                                 |                                                            |             |
| WARNINGMODULECELLRADIORSRQ       | Thresholds                                                                                                                                                                                                                 |                                                            |             |
| CRITICALMODULECELLRADIORSRQ      | Thresholds                                                                                                                                                                                                                 |                                                            |             |
| WARNINGMODULECELLRADIORSSI       | Thresholds                                                                                                                                                                                                                 |                                                            |             |
| CRITICALMODULECELLRADIORSSI      | Thresholds                                                                                                                                                                                                                 |                                                            |             |
| WARNINGMODULECELLRADIOSNR        | Thresholds                                                                                                                                                                                                                 |                                                            |             |
| CRITICALMODULECELLRADIOSNR       | Thresholds                                                                                                                                                                                                                 |                                                            |             |
| WARNINGMODULESCELLRADIODETECTED  | Thresholds                                                                                                                                                                                                                 |                                                            |             |
| CRITICALMODULESCELLRADIODETECTED | Thresholds                                                                                                                                                                                                                 |                                                            |             |
| WARNINGSTATUS                    | Set warning threshold for status (default: '%{signalQuality} =~ /poor/'). You can use the following variables: %{simStatus}, %{signalQuality}, %{cellId}, %{icci},%{operator}, %{imsi}                                     | %{signalQuality} =~ /poor/                                 |             |
| CRITICALSTATUS                   | Set critical threshold for status (default: '%{simStatus} eq "notPresent" \|\| %{signalQuality} =~ /none/'). You can use the following variables: %{simStatus}, %{signalQuality}, %{cellId}, %{icci}, %{operator}, %{imsi} | %{simStatus} eq "notPresent" || %{signalQuality} =~ /none/ |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                        | --verbose                                                  |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning in percent                                                                        |                   |             |
| CRITICAL     | Threshold critical in percent                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                                                                                                              | Default value                                        | Mandatory   |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:------------|
| OIDFILTER          | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                          | ifname                                               |             |
| OIDDISPLAY         | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                         | ifname                                               |             |
| INTERFACENAME      | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface')                                                                                                      |                                                      |             |
| WARNINGINDISCARD   | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINDISCARD  | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGINERROR     | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINERROR    | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGINTRAFFIC   | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINTRAFFIC  | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTDISCARD | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTERROR    | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTERROR   | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTTRAFFIC  | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTTRAFFIC | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALSTATUS     | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} | %{admstatus} eq "up" and %{opstatus} !~ /up|dormant/ |             |
| WARNINGSTATUS      | Set warning threshold for status. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                            |                                                      |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                      | --verbose                                            |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning in percent                                                                        |                   |             |
| CRITICAL     | Threshold critical in percent                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Rtt-Probes" label="Rtt-Probes">

| Macro                       | Description                                                                                                                                                                      | Default value                                    | Mandatory   |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|:------------|
| FILTERTAG                   | Filter probes by name                                                                                                                                                            |                                                  |             |
| WARNINGPROBECOMPLETIONTIME  | Thresholds                                                                                                                                                                       |                                                  |             |
| CRITICALPROBECOMPLETIONTIME | Thresholds                                                                                                                                                                       |                                                  |             |
| CRITICALPROBESTATUS         | Set critical threshold for status (Default: '%{adminStatus} eq "active" and %{status} ne "ok"'). You can use the following variables: %{adminStatus}, %{status}, %{type}, %{tag} | %{adminStatus} eq "active" and %{status} ne "ok" |             |
| WARNINGPROBESTATUS          |                                                                                                                                                                                  |                                                  |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                              | --verbose                                        |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_oneaccess.pl \
    --plugin=network::oneaccess::snmp::plugin \
    --mode=cpu \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

The expected command output is shown below:

```bash
OK: CPU Usage: 31 % | 'cpu.utilization.percentage'=31%;;;0;100
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_oneaccess.pl \
	--plugin=network::oneaccess::snmp::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode            | Linked service template        |
|:----------------|:-------------------------------|
| cells-radio     | Net-Oneaccess-Cells-Radio-SNMP |
| cpu             | Net-Oneaccess-Cpu-SNMP         |
| interfaces      | Net-Oneaccess-Interfaces-SNMP  |
| list-interfaces | Used for service discovery     |
| list-rtt-probes | Used for service discovery     |
| memory          | Net-Oneaccess-Memory-SNMP      |
| rtt-probes      | Net-Oneaccess-Rtt-Probes-SNMP  |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | SNMP   |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --subsetleef                               | How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --snmp-autoreduce                          | Progressively reduce the number requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-force-getnext                       | Use snmp getnext function in snmp v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | SNMP   |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | SNMP   |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | SNMP   |

#### Modes options

All modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Cells-Radio" label="Cells-Radio">

| Option                      | Description                                                                                                                                                                                                                  | Type |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-cell-id            | Filter cell modules by id (IMEI or MEID).                                                                                                                                                                                    | Mode |
| --custom-perfdata-instances | Define perfdatas instance (default: '%(cellId) %(operator)')                                                                                                                                                                 | Mode |
| --unknown-status            | Set unknown threshold for status. You can use the following variables: %{simStatus}, %{signalQuality}, %{cellId}, %{icci}, %{operator}, %{imsi}                                                                              | Mode |
| --warning-status            | Set warning threshold for status (default: '%{signalQuality} =~ /poor/'). You can use the following variables: %{simStatus}, %{signalQuality}, %{cellId}, %{icci},%{operator}, %{imsi}                                       | Mode |
| --critical-status           | Set critical threshold for status (default: '%{simStatus} eq "notPresent" \|\| %{signalQuality} =~ /none/'). You can use the following variables: %{simStatus}, %{signalQuality}, %{cellId}, %{icci}, %{operator}, %{imsi}   | Mode |
| --warning-* --critical-*    | Thresholds. Can be: 'modules-cellradio-detected', 'module-cellradio-rsrp', ''module-cellradio-rsrq', 'module-cellradio-rssi', 'module-cellradio-snr'.                                                                        | Mode |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option     | Description                       | Type |
|:-----------|:----------------------------------|:-----|
| --warning  | Threshold warning in percent.     | Mode |
| --critical | Threshold critical in percent.    | Mode |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                                                                                                                                | Type      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                  | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                             | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                         | Retention |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode      |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                    | Mode      |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode      |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                   | Mode      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                    | Mode      |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                      | Mode      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                     | Mode      |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode      |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                              | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                   | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode      |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          | Mode      |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      | Mode      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode      |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode      |
| --name                   | Allows to use interface name with option --interface instead ofinterface oid index (can be a regexp)                                                                                                                                                                                       | Mode      |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode      |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode      |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode      |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode      |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode      |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode      |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode      |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             | Mode      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option     | Description                       | Type |
|:-----------|:----------------------------------|:-----|
| --warning  | Threshold warning in percent.     | Mode |
| --critical | Threshold critical in percent.    | Mode |

</TabItem>
<TabItem value="Rtt-Probes" label="Rtt-Probes">

| Option                   | Description                                                                                                                                                                        | Type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-tag             | Filter probes by name.                                                                                                                                                             | Mode |
| --unknown-probe-status   | Set unknown threshold for status. You can use the following variables: %{adminStatus}, %{status}, %{type}, %{tag}                                                                  | Mode |
| --warning-probe-estatus  | Set warning threshold for status. You can use the following variables: %{adminStatus}, %{status}, %{type}, %{tag}                                                                  | Mode |
| --critical-probe-status  | Set critical threshold for status (Default: '%{adminStatus} eq "active" and %{status} ne "ok"'). You can use the following variables: %{adminStatus}, %{status}, %{type}, %{tag}   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'probe-completion-time'.                                                                                                                                       | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_oneaccess.pl \
	--plugin=network::oneaccess::snmp::plugin \
	--mode=cpu \
    --help
```
