---
id: network-keysight-nvos-restapi
title: Keysight NVOS Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Keysight NVOS Rest API** brings a host template:

* **Net-Keysight-Nvos-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Keysight-Nvos-Restapi" label="Net-Keysight-Nvos-Restapi">

| Service Alias | Service Template                   | Service Description                                     |
|:--------------|:-----------------------------------|:--------------------------------------------------------|
| Hardware      | Net-Keysight-Nvos-Hardware-Restapi | Check hardware                                          |
| Time          | Net-Keysight-Nvos-Time-Restapi     | Check time offset                                       |
| Uptime        | Net-Keysight-Nvos-Uptime-Restapi   | Time since the equipment has been working and available |

> The services listed above are created automatically when the **Net-Keysight-Nvos-Restapi** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                          | Service Description   | Discovery  |
|:----------------|:------------------------------------------|:----------------------|:-----------|
| Dynamic-Filters | Net-Keysight-Nvos-Dynamic-Filters-Restapi | Check dynamic filters | X          |
| Ports           | Net-Keysight-Nvos-Ports-Restapi           | Check ports           | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then appy the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule Name                                     | Description                                       |
|:----------------------------------------------|:--------------------------------------------------|
| Net-Keysight-Nvos-Restapi-Dynamic-Filter-Name | Discover dynamic filters and monitor utilization  |
| Net-Keysight-Nvos-Restapi-Port-Name           | Discover ports and monitor status and utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| df~dynamic_filter.traffic.pass.bytespersecond | B/s   |
| df~dynamic_filter.traffic.insp.bytespersecond | B/s   |
| df~dynamic_filter.packets.denied.count        | count |
| df~dynamic_filter.packets.pass.count          | count |
| df~dynamic_filter.packets.insp.count          | count |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                               | Unit  |
|:------------------------------------------|:------|
| temperatures#temperature-status           | N/A   |
| temperatures#hardware.temperature.celsius |       |
| fans.failed.count                         | count |
| psus#psu-status                           | N/A   |

</TabItem>
<TabItem value="Ports" label="Ports">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| ports~license-status                  | N/A   |
| ports~port.traffic.out.percentage     | %     |
| ports~port.traffic.out.bytespersecond | B/s   |
| ports~port.packets.out.count          | count |
| ports~port.packets.dropped.count      | count |
| ports~port.packets.pass.count         | count |
| ports~port.packets.insp.count         | count |

</TabItem>
<TabItem value="Time" label="Time">

| Metric name         | Unit  |
|:--------------------|:------|
| ntp-status          | N/A   |
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds |       |

</TabItem>
</Tabs>

## Prerequisites

To monitor, a user with read privileges on the Control-M [Automation API](https://docs.bmc.com/docs/automation-api/918/) is required.

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
dnf install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Keysight NVOS Rest API** connector through
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
dnf install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Keysight-Nvos-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                       | Description                                                                                           | Default value     | Mandatory   |
|:----------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| KEYSIGHTNVOSAPIPASSWORD     | API password                                                                                          |                   |             |
| KEYSIGHTNVOSAPIPORT         | Port used                                                                                             | 8000              |             |
| KEYSIGHTNVOSAPIPROTO        | Specify https if needed                                                                               | https             |             |
| KEYSIGHTNVOSAPIUSERNAME     | API username                                                                                          |                   |             |
| KEYSIGHTNVOSAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Macro                 | Description                                                                                         | Default value     | Mandatory   |
|:----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME            | Filter dynamic filters by name (can be a regexp)                                                    |                   |             |
| WARNINGPACKETSDENIED  |                                                                                                     |                   |             |
| CRITICALPACKETSDENIED |                                                                                                     |                   |             |
| WARNINGPACKETSINSP    | Thresholds                                                                                          |                   |             |
| CRITICALPACKETSINSP   | Thresholds                                                                                          |                   |             |
| WARNINGPACKETSPASS    | Thresholds                                                                                          |                   |             |
| CRITICALPACKETSPASS   | Thresholds                                                                                          |                   |             |
| WARNINGTRAFFICINSP    |                                                                                                     |                   |             |
| CRITICALTRAFFICINSP   |                                                                                                     |                   |             |
| WARNINGTRAFFICPASS    |                                                                                                     |                   |             |
| CRITICALTRAFFICPASS   |                                                                                                     |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro                     | Description                                                                                                                     | Default value          | Mandatory   |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:------------|
| UNKNOWNTEMPERATURESTATUS  | Set unknown threshold for status (Default : '%{status} eq "unknown"'). You can use the following variables: %{status}, %{class} | %{status} eq "unknown" |             |
| WARNINGFANSFAILED         | Thresholds                                                                                                                      |                        |             |
| CRITICALFANSFAILED        | Thresholds                                                                                                                      |                        |             |
| CRITICALPSUSTATUS         |                                                                                                                                 | %{status} eq "bad"     |             |
| WARNINGPSUSTATUS          | Set warning threshold for status. You can use the following variables: %{status}, %{name}                                       |                        |             |
| WARNINGTEMPERATURE        | Thresholds                                                                                                                      |                        |             |
| CRITICALTEMPERATURE       | Thresholds                                                                                                                      |                        |             |
| WARNINGTEMPERATURESTATUS  | Set warning threshold for status (Default : '%{status} eq "warn"'). You can use the following variables: %{status}, %{class}    | %{status} eq "warn"    |             |
| CRITICALTEMPERATURESTATUS | Set critical threshold for status (Default: '%{status} eq "hot"'); You can use the following variables: %{status}, %{class}     | %{status} eq "hot"     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                             | --verbose              |             |

</TabItem>
<TabItem value="Ports" label="Ports">

| Macro                  | Description                                                                                                                                                                                     | Default value                                                | Mandatory   |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|:------------|
| FILTERNAME             | Filter ports by name (can be a regexp)                                                                                                                                                          |                                                              |             |
| WARNINGLICENSESTATUS   | Set warning threshold for status (Default: '%{status} =~ /invalid\_software\_version/'). You can use the following variables: %{status}, %{name}                                                | %{status} =~ /invalid_software_version/                      |             |
| CRITICALLICENSESTATUS  | Set critical threshold for status. You can use the following variables: %{status}, %{name}                                                                                                      |                                                              |             |
| CRITICALLINKSTATUS     | Set critical threshold for status (Default: '%{adminStatus} eq "enabled" and %{operationalStatus} ne "up"'). You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name} | %{adminStatus} eq "enabled" and %{operationalStatus} ne "up" |             |
| WARNINGLINKSTATUS      | Set warning threshold for status. You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}                                                                            |                                                              |             |
| WARNINGPACKETSDROPPED  | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALPACKETSDROPPED | Thresholds                                                                                                                                                                                      |                                                              |             |
| WARNINGPACKETSINSP     | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALPACKETSINSP    | Thresholds                                                                                                                                                                                      |                                                              |             |
| WARNINGPACKETSOUT      | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALPACKETSOUT     | Thresholds                                                                                                                                                                                      |                                                              |             |
| WARNINGPACKETSPASS     | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALPACKETSPASS    | Thresholds                                                                                                                                                                                      |                                                              |             |
| WARNINGTRAFFICOUT      | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALTRAFFICOUT     | Thresholds                                                                                                                                                                                      |                                                              |             |
| WARNINGTRAFFICOUTPRCT  | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALTRAFFICOUTPRCT | Thresholds                                                                                                                                                                                      |                                                              |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                             | --verbose                                                    |             |

</TabItem>
<TabItem value="Time" label="Time">

| Macro             | Description                                                                                                                         | Default value                   | Mandatory   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:------------|
| TIMEZONE          | Override the timezone of distant equipment. Can use format: 'Europe/London' or '+0100'                                              |                                 |             |
| NTPHOSTNAME       | Set the ntp hostname (if not set, localtime is used)                                                                                |                                 |             |
| NTPPORT           | Set the ntp port (Default: 123)                                                                                                     |                                 |             |
| CRITICALNTPSTATUS | Set thresholds for status (Default critical: '%{status} !~ /in\_reach\|in\_sync/i')  You can use the following variables: %{status} | %{status} !~ /in_reach\|in_sync/ |             |
| WARNINGNTPSTATUS  |                                                                                                                                     |                                 |             |
| WARNINGOFFSET     | Time offset warning threshold (in seconds)                                                                                          |                                 |             |
| CRITICALOFFSET    | Time offset critical Threshold (in seconds)                                                                                         |                                 |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                 | --verbose                       |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                                                                                 | Default value     | Mandatory   |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| UNIT           | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds |                   |             |
| WARNINGUPTIME  | Threshold warning                                                                                                                                           |                   |             |
| CRITICALUPTIME | Threshold critical                                                                                                                                          |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                         |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=dynamic-filters \
	--hostname='10.0.0.1' \
	--proto='https' \
	--port='8000' \
	--api-username='' \
	--api-password=''  \
	--filter-name='' \
	--warning-packets-denied='' \
	--critical-packets-denied='' \
	--warning-packets-pass='' \
	--critical-packets-pass='' \
	--warning-packets-insp='' \
	--critical-packets-insp='' \
	--warning-traffic-pass='' \
	--critical-traffic-pass='' \
	--warning-traffic-insp='' \
	--critical-traffic-insp='' \
	--verbose\
	
```

The expected command output is shown below:

```bash
OK:      | 'dynamic_filter.traffic.pass.bytespersecond'=31B/s;;;0; 'dynamic_filter.traffic.insp.bytespersecond'=2B/s;;;0; 'dynamic_filter.packets.denied.count'=90;;;0; 'dynamic_filter.packets.pass.count'=3;;;0; 'dynamic_filter.packets.insp.count'=21;;;0; 
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode                 | Linked service template                   |
|:---------------------|:------------------------------------------|
| dynamic-filters      | Net-Keysight-Nvos-Dynamic-Filters-Restapi |
| hardware             | Net-Keysight-Nvos-Hardware-Restapi        |
| list-dynamic-filters | Used for service discovery                |
| list-ports           | Used for service discovery                |
| ports                | Net-Keysight-Nvos-Ports-Restapi           |
| time                 | Net-Keysight-Nvos-Time-Restapi            |
| uptime               | Net-Keysight-Nvos-Uptime-Restapi          |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type         |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global       |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global       |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Global       |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --version                                  | Display the plugin's version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global       |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get the an information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global       |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Global       |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global       |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output       |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                           | Output       |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                            | Output       |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output       |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output       |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                              | Output       |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output       |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --output-ignore-label                      | Remove the status label from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output       |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --float-precision                          | Set the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --source-encoding                          | Set encoding of monitoring sources (in some cases. Default: 'UTF-8').      Keysight NVOS API                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --port                                     | Port used (Default: 8000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Api          |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Api          |
| --api-username                             | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --api-password                             | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --timeout                                  | Set timeout in seconds (Default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Http global  |
| --proxyurl                                 | Proxy URL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --proxypac                                 | Proxy pac file (can be a URL or local file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Http global  |
| --insecure                                 | Insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --http-backend                             | Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Backend curl |

#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Option                   | Description                                                                                                                 | Type      |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                  | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                             | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                     | Retention |
| --redis-db               | Set Redis database index.                                                                                                   | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                        | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                              | Retention |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                         | Retention |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                          | Retention |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                  | Retention |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                          | Retention |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                               | Retention |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                   | Retention |
| --filter-name            | Filter dynamic filters by name (can be a regexp).                                                                           | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.    | Mode      |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option                        | Description                                                                                                                       | Type |
|:------------------------------|:----------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-temperature-status  | Set unknown threshold for status (Default : '%{status} eq "unknown"'). You can use the following variables: %{status}, %{class}   | Mode |
| --warning-temperature-status  | Set warning threshold for status (Default : '%{status} eq "warn"'). You can use the following variables: %{status}, %{class}      | Mode |
| --critical-temperature-status | Set critical threshold for status (Default: '%{status} eq "hot"'); You can use the following variables: %{status}, %{class}       | Mode |
| --unknown-psu-status          | Set unknown threshold for status. You can use the following variables: %{status}, %{name}                                         | Mode |
| --warning-psu-status          | Set warning threshold for status. You can use the following variables: %{status}, %{name}                                         | Mode |
| --critical-status             | Set critical threshold for status (Default: '%{status} eq "bad"'); You can use the following variables: %{status}, %{name}        | Mode |
| --warning-* --critical-*      | Thresholds. Can be: 'temperature', 'fans-failed'.                                                                                 | Mode |

</TabItem>
<TabItem value="Ports" label="Ports">

| Option                    | Description                                                                                                                                                                                       | Type      |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached               | Memcached server to use (only one server).                                                                                                                                                        | Retention |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                   | Retention |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                           | Retention |
| --redis-db                | Set Redis database index.                                                                                                                                                                         | Retention |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                              | Retention |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                    | Retention |
| --statefile-dir           | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                               | Retention |
| --statefile-suffix        | Add a suffix for the statefile name (Default: '').                                                                                                                                                | Retention |
| --statefile-concat-cwd    | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                        | Retention |
| --statefile-format        | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                | Retention |
| --statefile-key           | Key to encrypt/decrypt cache.                                                                                                                                                                     | Retention |
| --statefile-cipher        | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                         | Retention |
| --filter-name             | Filter ports by name (can be a regexp).                                                                                                                                                           | Mode      |
| --unknown-license-status  | Set unknown threshold for status. You can use the following variables: %{status}, %{name}                                                                                                         | Mode      |
| --warning-license-status  | Set warning threshold for status (Default: '%{status} =~ /invalid\_software\_version/'). You can use the following variables: %{status}, %{name}                                                  | Mode      |
| --critical-license-status | Set critical threshold for status. You can use the following variables: %{status}, %{name}                                                                                                        | Mode      |
| --unknown-link-status     | Set unknown threshold for status. You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}                                                                              | Mode      |
| --warning-link-status     | Set warning threshold for status. You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}                                                                              | Mode      |
| --critical-link-status    | Set critical threshold for status (Default: '%{adminStatus} eq "enabled" and %{operationalStatus} ne "up"'). You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}   | Mode      |
| --warning-* --critical-*  | Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.                                                                          | Mode      |

</TabItem>
<TabItem value="Time" label="Time">

| Option                | Description                                                                                                                           | Type |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-ntp-status  |                                                                                                                                       | Mode |
| --warning-ntp-status  |                                                                                                                                       | Mode |
| --critical-ntp-status | Set thresholds for status (Default critical: '%{status} !~ /in\_reach\|in\_sync/i')  You can use the following variables: %{status}   | Mode |
| --warning-offset      | Time offset warning threshold (in seconds).                                                                                           | Mode |
| --critical-offset     | Time offset critical Threshold (in seconds).                                                                                          | Mode |
| --ntp-hostname        | Set the ntp hostname (if not set, localtime is used).                                                                                 | Mode |
| --ntp-port            | Set the ntp port (Default: 123).                                                                                                      | Mode |
| --timezone            | Override the timezone of distant equipment. Can use format: 'Europe/London' or '+0100'.                                               | Mode |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                    | Type |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-uptime  | Threshold warning.                                                                                                                                             | Mode |
| --critical-uptime | Threshold critical.                                                                                                                                            | Mode |
| --unit            | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds    | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=dynamic-filters \
    --help
```
