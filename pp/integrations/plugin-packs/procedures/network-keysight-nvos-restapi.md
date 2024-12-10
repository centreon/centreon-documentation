---
id: network-keysight-nvos-restapi
title: Keysight NVOS Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Keysight NVOS Rest API** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Keysight NVOS Rest API** brings a host template:

* **Net-Keysight-Nvos-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Keysight-Nvos-Restapi-custom" label="Net-Keysight-Nvos-Restapi-custom">

| Service Alias | Service Template                          | Service Description                                     |
|:--------------|:------------------------------------------|:--------------------------------------------------------|
| Hardware      | Net-Keysight-Nvos-Hardware-Restapi-custom | Check hardware                                          |
| License       | Net-Keysight-Nvos-License-Restapi-custom  | Check license state                                     |
| Time          | Net-Keysight-Nvos-Time-Restapi-custom     | Check time offset                                       |
| Uptime        | Net-Keysight-Nvos-Uptime-Restapi-custom   | Time since the equipment has been working and available |

> The services listed above are created automatically when the **Net-Keysight-Nvos-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                                 | Service Description   | Discovery  |
|:----------------|:-------------------------------------------------|:----------------------|:----------:|
| Dynamic-Filters | Net-Keysight-Nvos-Dynamic-Filters-Restapi-custom | Check dynamic filters | X          |
| Ports           | Net-Keysight-Nvos-Ports-Restapi-custom           | Check ports           | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                     | Description                                       |
|:----------------------------------------------|:--------------------------------------------------|
| Net-Keysight-Nvos-Restapi-Dynamic-Filter-Name | Discover dynamic filters and monitor utilization  |
| Net-Keysight-Nvos-Restapi-Port-Name           | Discover ports and monitor status and utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Name                                            | Unit  |
|:------------------------------------------------|:------|
| *df*~dynamic_filter.traffic.pass.bytespersecond | B/s   |
| *df*~dynamic_filter.traffic.insp.bytespersecond | B/s   |
| *df*~dynamic_filter.packets.denied.count        | count |
| *df*~dynamic_filter.packets.pass.count          | count |
| *df*~dynamic_filter.packets.insp.count          | count |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Name                                        | Unit  |
|:--------------------------------------------|:------|
| temperature-status                          | N/A   |
| *temperatures*#hardware.temperature.celsius | C     |
| fans.failed.count                           | count |
| psu-status                                  | N/A   |

</TabItem>
<TabItem value="License" label="License">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Ports" label="Ports">

| Name                                    | Unit  |
|:----------------------------------------|:------|
| license-status                          | N/A   |
| link-status                             | N/A   |
| *ports*~port.traffic.out.percentage     | %     |
| *ports*~port.traffic.out.bytespersecond | B/s   |
| *ports*~port.packets.out.count          | count |
| *ports*~port.packets.pass.count         | count |
| *ports*~port.packets.invalid.count      | count |
| *ports*~port.packets.deny.count         | count |
| *ports*~port.crc.alignment.errors.count | count |
| *ports*~port.packets.out.count          | count |
| *ports*~port.packets.dropped.count      | count |
| *ports*~port.packets.pass.count         | count |
| *ports*~port.packets.insp.count         | count |

</TabItem>
<TabItem value="Time" label="Time">

| Name                | Unit  |
|:--------------------|:------|
| ntp-status          | N/A   |
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Name                  | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

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
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Keysight-Nvos-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                       | Description                                                                                                                              | Default value     | Mandatory   |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| KEYSIGHTNVOSAPIUSERNAME     | API username                                                                                                                             |                   | X           |
| KEYSIGHTNVOSAPIPASSWORD     | API password                                                                                                                             |                   | X           |
| KEYSIGHTNVOSAPIPROTO        | Specify https if needed                                                                                                                  | https             |             |
| KEYSIGHTNVOSAPIPORT         | Port used                                                                                                                                | 8000              |             |
| KEYSIGHTNVOSAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Macro                 | Description                                                                                                                            | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME            | Filter dynamic filters by name (can be a regexp)                                                                                       |                   |             |
| WARNINGPACKETSDENIED  | Threshold                                                                                                                              |                   |             |
| CRITICALPACKETSDENIED | Threshold                                                                                                                              |                   |             |
| WARNINGPACKETSINSP    | Threshold                                                                                                                              |                   |             |
| CRITICALPACKETSINSP   | Threshold                                                                                                                              |                   |             |
| WARNINGPACKETSPASS    | Threshold                                                                                                                              |                   |             |
| CRITICALPACKETSPASS   | Threshold                                                                                                                              |                   |             |
| WARNINGTRAFFICINSP    | Threshold                                                                                                                              |                   |             |
| CRITICALTRAFFICINSP   | Threshold                                                                                                                              |                   |             |
| WARNINGTRAFFICPASS    | Threshold                                                                                                                              |                   |             |
| CRITICALTRAFFICPASS   | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro                     | Description                                                                                                                            | Default value          | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| UNKNOWNTEMPERATURESTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{class\}                  | %\{status\} eq "unknown" |             |
| WARNINGFANSFAILED         | Threshold                                                                                                                              |                        |             |
| CRITICALFANSFAILED        | Threshold                                                                                                                              |                        |             |
| CRITICALPSUSTATUS         | Threshold                                                                                                                              | %\{status\} eq "bad"     |             |
| WARNINGPSUSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                   |                        |             |
| WARNINGTEMPERATURE        | Threshold                                                                                                                              |                        |             |
| CRITICALTEMPERATURE       | Threshold                                                                                                                              |                        |             |
| WARNINGTEMPERATURESTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{class\}                  | %\{status\} eq "warn"    |             |
| CRITICALTEMPERATURESTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{class\}                 | %\{status\} eq "hot"     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose              |             |

</TabItem>
<TabItem value="License" label="License">

| Macro          | Description                                                                                                                            | Default value                   | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:-----------:|
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}                            |                                 |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}                            | %\{status\} =~ /MINOR/i           |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}                           | %\{status\} =~ /MAJOR\|CRITICAL/i |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                       |             |

</TabItem>
<TabItem value="Ports" label="Ports">

| Macro                  | Description                                                                                                                                      | Default value                                                | Mandatory   |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|:-----------:|
| FILTERNAME             | Filter ports by name (can be a regexp)                                                                                                           |                                                              |             |
| FILTERTYPE             | Filter ports by type (can be a regexp). You can use the following types: 'Network Port', 'Port Group' and 'Tool Port'                            |                                                              |             |
| WARNINGLICENSESTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                             | %\{status\} =~ /invalid\_software\_version/                    |             |
| CRITICALLICENSESTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{name\}                            |                                                              |             |
| CRITICALLINKSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{adminStatus\}, %\{operationalStatus\}, %\{name\} | %\{adminStatus\} eq "enabled" and %\{operationalStatus\} ne "up" |             |
| WARNINGLINKSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{adminStatus\}, %\{operationalStatus\}, %\{name\}  |                                                              |             |
| WARNINGPACKETSDROPPED  | Threshold                                                                                                                                        |                                                              |             |
| CRITICALPACKETSDROPPED | Threshold                                                                                                                                        |                                                              |             |
| WARNINGPACKETSIN       | Threshold                                                                                                                                        |                                                              |             |
| CRITICALPACKETSIN      | Threshold                                                                                                                                        |                                                              |             |
| WARNINGPACKETSINSP     | Threshold                                                                                                                                        |                                                              |             |
| CRITICALPACKETSINSP    | Threshold                                                                                                                                        |                                                              |             |
| WARNINGPACKETSOUT      | Threshold                                                                                                                                        |                                                              |             |
| CRITICALPACKETSOUT     | Threshold                                                                                                                                        |                                                              |             |
| WARNINGPACKETSPASS     | Threshold                                                                                                                                        |                                                              |             |
| CRITICALPACKETSPASS    | Threshold                                                                                                                                        |                                                              |             |
| WARNINGTRAFFICIN       | Threshold                                                                                                                                        |                                                              |             |
| CRITICALTRAFFICIN      | Threshold                                                                                                                                        |                                                              |             |
| WARNINGTRAFFICINPRCT   | Threshold                                                                                                                                        |                                                              |             |
| CRITICALTRAFFICINPRCT  | Threshold                                                                                                                                        |                                                              |             |
| WARNINGTRAFFICOUT      | Threshold                                                                                                                                        |                                                              |             |
| CRITICALTRAFFICOUT     | Threshold                                                                                                                                        |                                                              |             |
| WARNINGTRAFFICOUTPRCT  | Threshold                                                                                                                                        |                                                              |             |
| CRITICALTRAFFICOUTPRCT | Threshold                                                                                                                                        |                                                              |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose                                                    |             |

</TabItem>
<TabItem value="Time" label="Time">

| Macro             | Description                                                                                                                                                  | Default value                      | Mandatory   |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| TIMEZONE          | Override the timezone of distant equipment. Can use format: 'Europe/London' or '+0100'                                                                       |                                    |             |
| NTPHOSTNAME       | Set the NTP hostname (if not set, localtime is used)                                                                                                         |                                    |             |
| NTPPORT           | Set the NTP port (default: 123)                                                                                                                              |                                    |             |
| CRITICALNTPSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /in\_reach\|in\_sync/i') You can use the following variables: %\{status\} | %\{status\} !~ /in\_reach\|in\_sync/ |             |
| WARNINGNTPSTATUS  | Define the conditions to match for the status to be WARNING                                                                                                  |                                    |             |
| WARNINGOFFSET     | Define the time offset (in seconds) that will trigger a WARNING status                                                                                       |                                    |             |
| CRITICALOFFSET    | Define the time offset (in seconds) that will trigger a CRITICAL status                                                                                      |                                    |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                           | --verbose                          |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                                                                                   | Default value     | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNIT           | Select the unit for performance data and thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks.  Default is seconds |                   |             |
| WARNINGUPTIME  | Warning threshold                                                                                                                                             |                   |             |
| CRITICALUPTIME | Critical threshold                                                                                                                                            |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                            |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=hardware \
	--hostname='10.0.0.1' \
	--proto='https' \
	--port='8000' \
	--api-username='username' \
	--api-password='*****'  \
	--unknown-temperature-status='%{status} eq "unknown"' \
	--warning-temperature-status='%{status} eq "warn"' \
	--critical-temperature-status='%{status} eq "hot"' \
	--warning-temperature='' \
	--critical-temperature='' \
	--warning-fans-failed='' \
	--critical-fans-failed='' \
	--warning-psu-status='' \
	--critical-psu-status='%{status} eq "bad"' \
	--verbose
```

The expected command output is shown below:

```bash
OK: temperature 'MAIN' status: normal, reading: 40 C - all power supplies are ok | 'MAIN#hardware.temperature.celsius'=40C;;;;
temperature 'MAIN' status: normal, reading: 40 C
power supply 'power_module_a' status: good
power supply 'power_module_b' status: good
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
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                  | Linked service template                          |
|:------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| dynamic-filters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/dynamicfilters.pm)]          | Net-Keysight-Nvos-Dynamic-Filters-Restapi-custom |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/hardware.pm)]                       | Net-Keysight-Nvos-Hardware-Restapi-custom        |
| license [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/license.pm)]                         | Net-Keysight-Nvos-License-Restapi-custom         |
| list-dynamic-filters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/listdynamicfilters.pm)] | Used for service discovery                       |
| list-ports [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/listports.pm)]                    | Used for service discovery                       |
| ports [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/ports.pm)]                             | Net-Keysight-Nvos-Ports-Restapi-custom           |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/time.pm)]                               | Net-Keysight-Nvos-Time-Restapi-custom            |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/uptime.pm)]                           | Net-Keysight-Nvos-Uptime-Restapi-custom          |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --hostname                                 |   Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --port                                     |   Port used (default: 8000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-username                             |   API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --api-password                             |   API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter dynamic filters by name (can be a regexp).                                                                           |
| --warning-* --critical-* |   Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option                        | Description                                                                                                                                                    |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-temperature-status  |   Define the conditions to match for the status to be UNKNOWN (default : '%{status} eq "unknown"'). You can use the following variables: %\{status\}, %\{class\}   |
| --warning-temperature-status  |   Define the conditions to match for the status to be WARNING (default : '%{status} eq "warn"'). You can use the following variables: %\{status\}, %\{class\}      |
| --critical-temperature-status |   Define the conditions to match for the status to be CRITICAL (default: '%{status} eq "hot"'); You can use the following variables: %\{status\}, %\{class\}       |
| --unknown-psu-status          |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{name\}                                         |
| --warning-psu-status          |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                         |
| --critical-status             |   Define the conditions to match for the status to be CRITICAL (default: '%{status} eq "bad"'); You can use the following variables: %\{status\}, %\{name\}        |
| --warning-* --critical-*      |   Thresholds. Can be: 'temperature', 'fans-failed'.                                                                                                            |

</TabItem>
<TabItem value="License" label="License">

| Option            | Description                                                                                                                                                   |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}                                                 |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: '%{status} =~ /MINOR/i'). You can use the following variables: %\{status\}              |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /MAJOR\|CRITICAL/i'). You can use the following variables: %\{status\}   |

</TabItem>
<TabItem value="Ports" label="Ports">

| Option                    | Description                                                                                                                                                                                                                    |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name             |   Filter ports by name (can be a regexp).                                                                                                                                                                                      |
| --filter-type             |   Filter ports by type (can be a regexp). You can use the following types: 'Network Port', 'Port Group' and 'Tool Port'                                                                                                        |
| --unknown-license-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{name\}                                                                                                         |
| --warning-license-status  |   Define the conditions to match for the status to be WARNING (default: '%{status} =~ /invalid\_software\_version/'). You can use the following variables: %\{status\}, %\{name\}                                                  |
| --critical-license-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{name\}                                                                                                        |
| --unknown-link-status     |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{adminStatus\}, %\{operationalStatus\}, %\{name\}                                                                              |
| --warning-link-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{adminStatus\}, %\{operationalStatus\}, %\{name\}                                                                              |
| --critical-link-status    |   Define the conditions to match for the status to be CRITICAL (default: '%{adminStatus} eq "enabled" and %\{operationalStatus\} ne "up"'). You can use the following variables: %\{adminStatus\}, %\{operationalStatus\}, %\{name\}   |
| --warning-* --critical-*  |   Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.                                                                                                     |

</TabItem>
<TabItem value="Time" label="Time">

| Option                | Description                                                                                                                                                      |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-ntp-status  |   Define the conditions to match for the status to be UNKNOWN.                                                                                                   |
| --warning-ntp-status  |   Define the conditions to match for the status to be WARNING.                                                                                                   |
| --critical-ntp-status |   Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /in\_reach\|in\_sync/i') You can use the following variables: %\{status\}   |
| --warning-offset      |   Define the time offset (in seconds) that will trigger a WARNING status.                                                                                        |
| --critical-offset     |   Define the time offset (in seconds) that will trigger a CRITICAL status.                                                                                       |
| --ntp-hostname        |   Set the NTP hostname (if not set, localtime is used).                                                                                                          |
| --ntp-port            |   Set the NTP port (default: 123).                                                                                                                               |
| --timezone            |   Override the timezone of distant equipment. Can use format: 'Europe/London' or '+0100'.                                                                        |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                        |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-uptime  |   Warning threshold.                                                                                                                                               |
| --critical-uptime |   Critical threshold.                                                                                                                                              |
| --unit            |   Select the unit for performance data and thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks.  Default is seconds    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=dynamic-filters \
	--help
```
