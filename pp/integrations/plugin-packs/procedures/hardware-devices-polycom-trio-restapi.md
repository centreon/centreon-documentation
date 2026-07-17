---
id: hardware-devices-polycom-trio-restapi
title: Polycom Trio Rest API
description: Monitor Polycom Trio phones via REST API: call quality, CPU, memory, network traffic, paired devices, and SIP registration.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Polycom Trio Rest API** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Polycom Trio Rest API** brings a host template:

* **HW-Device-Polycom-Trio-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Device-Polycom-Trio-Restapi-custom" label="HW-Device-Polycom-Trio-Restapi-custom">

| Service Alias    | Service Template                                    | Service Description                          |
|:-----------------|:----------------------------------------------------|:---------------------------------------------|
| Calls-Rt         | HW-Device-Polycom-Trio-Calls-Rt-Restapi-custom      | Check call audio/video channels in real-time |
| Calls-Summary    | HW-Device-Polycom-Trio-Calls-Summary-Restapi-custom | Check call history                           |
| Device           | HW-Device-Polycom-Trio-Device-Restapi-custom        | Check device cpu, memory and state           |
| Network          | HW-Device-Polycom-Trio-Network-Restapi-custom       | Check network traffic                        |
| Sip-Registration | HW-Device-Polycom-Trio-Registration-Restapi-custom  | Check SIP registration                       |

> The services listed above are created automatically when the **HW-Device-Polycom-Trio-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias  | Service Template                             | Service Description  |
|:---------------|:---------------------------------------------|:---------------------|
| Paired-Devices | HW-Device-Polycom-Trio-Paired-Restapi-custom | Check paired devices |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Calls-Rt" label="Calls-Rt">

| Name                                           | Unit  |
|:-----------------------------------------------|:------|
| *channels*#call.channel.traffic.in.bytes       | B/s   |
| *channels*#call.channel.traffic.out.bytes      | B/s   |
| *channels*#call.channel.maxjitter.milliseconds | ms    |
| *channels*#call.channel.packetloss.count       | count |
| *channels*#call.channel.packetloss.percentage  | %     |

</TabItem>
<TabItem value="Calls-Summary" label="Calls-Summary">

| Name                 | Unit  |
|:---------------------|:------|
| calls.total.count    | count |
| calls.placed.count   | count |
| calls.missed.count   | count |
| calls.received.count | count |

</TabItem>
<TabItem value="Device" label="Device">

| Name                                      | Unit  |
|:------------------------------------------|:------|
| status                                    | N/A   |
| device.cpu.utilization.average.percentage | %     |
| device.memory.usage.bytes                 | B     |
| device.memory.free.bytes                  | B     |
| device.memory.usage.percentage            | %     |

</TabItem>
<TabItem value="Network" label="Network">

| Name                          | Unit  |
|:------------------------------|:------|
| network.packets.in.persecond  | /s    |
| network.packets.out.persecond | /s    |

</TabItem>
<TabItem value="Paired-Devices" label="Paired-Devices">

| Name                            | Unit  |
|:--------------------------------|:------|
| devices.camera.paired.count     | count |
| devices.audio.paired.count      | count |
| devices.display_ui.paired.count | count |

</TabItem>
<TabItem value="Sip-Registration" label="Sip-Registration">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

</TabItem>
</Tabs>

## Prerequisites

To use the Polycom Trio Rest API connector, enable the REST API on the phone by setting apps.restapi.enabled="1". Configure a custom administrator password through the web interface or a provisioning file. Ensure the phone is reachable on the network via port 443 using HTTPS and is running UC software version 5.8.0 or higher.

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-devices-polycom-trio-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-devices-polycom-trio-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-devices-polycom-trio-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-devices-polycom-trio-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Polycom Trio Rest API** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

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
dnf install centreon-plugin-Hardware-Devices-Polycom-Trio-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Devices-Polycom-Trio-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-devices-polycom-trio-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Trio-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Device-Polycom-Trio-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                      | Description                                                                                          | Default value     | Mandatory   |
|:---------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| POLYCOMTRIOAPIUSERNAME     | Set username                                                                                         | Polycom           | X           |
| POLYCOMTRIOAPIPASSWORD     | Set password                                                                                         |                   | X           |
| POLYCOMTRIOAPIPROTO        | Specify https if needed (default: 'https')                                                           | https             |             |
| POLYCOMTRIOAPIPORT         | Set port (default: '443')                                                                            | 443               |             |
| POLYCOMTRIOAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Calls-Rt" label="Calls-Rt">

| Macro                         | Description                                                                                        | Default value     | Mandatory   |
|:------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCHANNELMAXJITTER       | Threshold                                                                                          |                   |             |
| CRITICALCHANNELMAXJITTER      | Threshold                                                                                          |                   |             |
| WARNINGCHANNELPACKETLOSS      | Threshold                                                                                          |                   |             |
| CRITICALCHANNELPACKETLOSS     | Threshold                                                                                          |                   |             |
| WARNINGCHANNELPACKETLOSSPRCT  | Threshold                                                                                          |                   |             |
| CRITICALCHANNELPACKETLOSSPRCT | Threshold                                                                                          |                   |             |
| WARNINGCHANNELTRAFFICIN       | Threshold                                                                                          |                   |             |
| CRITICALCHANNELTRAFFICIN      | Threshold                                                                                          |                   |             |
| WARNINGCHANNELTRAFFICOUT      | Threshold                                                                                          |                   |             |
| CRITICALCHANNELTRAFFICOUT     | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Calls-Summary" label="Calls-Summary">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGMISSED    | Threshold                                                                                          |                   |             |
| CRITICALMISSED   | Threshold                                                                                          |                   |             |
| WARNINGPLACED    | Threshold                                                                                          |                   |             |
| CRITICALPLACED   | Threshold                                                                                          |                   |             |
| WARNINGRECEIVED  | Threshold                                                                                          |                   |             |
| CRITICALRECEIVED | Threshold                                                                                          |                   |             |
| WARNINGTOTAL     | Threshold                                                                                          |                   |             |
| CRITICALTOTAL    | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Device" label="Device">

| Macro                         | Description                                                                                                                                         | Default value           | Mandatory   |
|:------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| WARNINGCPUUTILIZATIONAVERAGE  | Threshold                                                                                                                                           |                         |             |
| CRITICALCPUUTILIZATIONAVERAGE | Threshold                                                                                                                                           |                         |             |
| WARNINGMEMORYUSAGE            | Threshold                                                                                                                                           |                         |             |
| CRITICALMEMORYUSAGE           | Threshold                                                                                                                                           |                         |             |
| WARNINGMEMORYUSAGEFREE        | Threshold                                                                                                                                           |                         |             |
| CRITICALMEMORYUSAGEFREE       | Threshold                                                                                                                                           |                         |             |
| WARNINGMEMORYUSAGEPRCT        | Threshold                                                                                                                                           |                         |             |
| CRITICALMEMORYUSAGEPRCT       | Threshold                                                                                                                                           |                         |             |
| CRITICALSTATUS                | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /error/i'). You can use the following variables: %\{status\} | %\{status\} =~ /error/i |             |
| WARNINGSTATUS                 | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}                         |                         |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                  |                         |             |

</TabItem>
<TabItem value="Network" label="Network">

| Macro              | Description                                                                                        | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPACKETSIN   | Threshold                                                                                          |                   |             |
| CRITICALPACKETSIN  | Threshold                                                                                          |                   |             |
| WARNINGPACKETSOUT  | Threshold                                                                                          |                   |             |
| CRITICALPACKETSOUT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Paired-Devices" label="Paired-Devices">

| Macro                   | Description                                                                                        | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERDEVICENAME        | Filter devices by name                                                                             |                   |             |
| FILTERDEVICETYPE        | Filter devices by type                                                                             |                   |             |
| WARNINGAUDIOPAIRED      | Threshold                                                                                          |                   |             |
| CRITICALAUDIOPAIRED     | Threshold                                                                                          |                   |             |
| WARNINGCAMERAPAIRED     | Threshold                                                                                          |                   |             |
| CRITICALCAMERAPAIRED    | Threshold                                                                                          |                   |             |
| WARNINGDISPLAYUIPAIRED  | Threshold                                                                                          |                   |             |
| CRITICALDISPLAYUIPAIRED | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Sip-Registration" label="Sip-Registration">

| Macro          | Description                                                                                                                                             | Default value                | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /registred/i'). You can use the following variables: %\{status\} | %\{status\} !~  /registred/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}                                           |                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                      |                              |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_polycom_trio_restapi.pl \
	--plugin=hardware::devices::polycom::trio::restapi::plugin \
	--mode=paired \
	--hostname='10.0.0.1' \
	--api-username='Polycom' \
	--api-password='xxxxxx' \
	--port='443' \
	--proto='https'  \
	--filter-device-name='' \
	--filter-device-type='' \
	--warning-camera-paired='' \
	--critical-camera-paired='' \
	--warning-audio-paired='' \
	--critical-audio-paired='' \
	--warning-displayui-paired='' \
	--critical-displayui-paired=''
```

The expected command output is shown below:

```bash
OK: camera: 90577 audio: 33412 display ui: 54353 | 'devices.camera.paired.count'=90577;;;0; 'devices.audio.paired.count'=33412;;;0; 'devices.display_ui.paired.count'=54353;;;0;
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
/usr/lib/centreon/plugins/centreon_polycom_trio_restapi.pl \
	--plugin=hardware::devices::polycom::trio::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                             | Linked service template                             |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| calls-rt [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/callsrt.pm)]           | HW-Device-Polycom-Trio-Calls-Rt-Restapi-custom      |
| calls-summary [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/callssummary.pm)] | HW-Device-Polycom-Trio-Calls-Summary-Restapi-custom |
| device [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/device.pm)]              | HW-Device-Polycom-Trio-Device-Restapi-custom        |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/network.pm)]            | HW-Device-Polycom-Trio-Network-Restapi-custom       |
| paired [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/paired.pm)]              | HW-Device-Polycom-Trio-Paired-Restapi-custom        |
| registration [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/registration.pm)]  | HW-Device-Polycom-Trio-Registration-Restapi-custom  |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     |   Set port (default: '443').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proto                                    |   Specify https if needed (default: 'https').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --api-username                             |   Set username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-password                             |   Set password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --lockfile-dir                             |   Specify the lock file directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeout                                  |   Threshold for HTTP timeout (default: '30').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Calls-Rt" label="Calls-Rt">

| Option                   | Description                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'channel-traffic-in', 'channel-traffic-out', 'channel-maxjitter' 'channel-packetloss', 'channel-packetloss-prct'.    |

</TabItem>
<TabItem value="Calls-Summary" label="Calls-Summary">

| Option                   | Description                                                                                                                                                                                                                                     |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration          |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* |   Thresholds. Can be: 'total', 'placed', 'missed', 'received'.                                                                                                                                                                                  |

</TabItem>
<TabItem value="Device" label="Device">

| Option                   | Description                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}                           |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /error/i'). You can use the following variables: %\{status\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'cpu-utilization-average', 'memory-usage', 'memory-usage-free', 'memory-usage-prct'.                                              |

</TabItem>
<TabItem value="Network" label="Network">

| Option                   | Description                                           |
|:-------------------------|:------------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'packets-in', 'packets-out'.    |

</TabItem>
<TabItem value="Paired-Devices" label="Paired-Devices">

| Option                   | Description                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------|
| --filter-device-name     |   Filter devices by name.                                                      |
| --filter-device-type     |   Filter devices by type.                                                      |
| --warning-* --critical-* |   Thresholds. Can be: 'camera-paired', 'audio-paired', 'displayui-paired'.     |

</TabItem>
<TabItem value="Sip-Registration" label="Sip-Registration">

| Option            | Description                                                                                                                                                  |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}                                              |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /registred/i'). You can use the following variables: %\{status\}    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_polycom_trio_restapi.pl \
	--plugin=hardware::devices::polycom::trio::restapi::plugin \
	--mode=paired \
	--help
```
