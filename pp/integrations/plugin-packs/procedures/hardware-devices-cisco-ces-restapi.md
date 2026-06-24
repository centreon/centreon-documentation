---
id: hardware-devices-cisco-ces-restapi
slug: /hardware-devices-cisco-ces-restapi
title: Cisco Collaboration Endpoint Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Cisco Collaboration Endpoint Rest API** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Cisco Collaboration Endpoint Rest API** brings a host template:

* **HW-Device-Cisco-Ces-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Device-Cisco-Ces-Restapi-custom" label="HW-Device-Cisco-Ces-Restapi-custom">

| Service Alias     | Service Template                                     | Service Description                |
|:------------------|:-----------------------------------------------------|:-----------------------------------|
| Calls-Rt          | HW-Device-Cisco-Ces-Calls-Rt-Restapi-custom          | Check call channels in real-time   |
| Calls-Summary     | HW-Device-Cisco-Ces-Calls-Summary-Restapi-custom     | Check call history                 |
| Certificates      | HW-Device-Cisco-Ces-Certificates-Restapi-custom      | Check certificates validity        |
| Components-Global | HW-Device-Cisco-Ces-Components-Global-Restapi-custom | Check all components               |
| Diagnostics       | HW-Device-Cisco-Ces-Diagnostics-Restapi-custom       | Check diagnostic messages          |
| Peripherals       | HW-Device-Cisco-Ces-Peripherals-Restapi-custom       | Check peripherals device connected |
| Sessions          | HW-Device-Cisco-Ces-Sessions-Restapi-custom          | Check sessions                     |

> The services listed above are created automatically when the **HW-Device-Cisco-Ces-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias                     | Service Template                                                     | Service Description                     |
|:----------------------------------|:---------------------------------------------------------------------|:----------------------------------------|
| Components-Audio-Device           | HW-Device-Cisco-Ces-Components-Audio-Device-Restapi-custom           | Check audio device components           |
| Components-Audio-Input-Connector  | HW-Device-Cisco-Ces-Components-Audio-Input-Connector-Restapi-custom  | Check audio input connector component   |
| Components-Audio-Output-Connector | HW-Device-Cisco-Ces-Components-Audio-Output-Connector-Restapi-custom | Check audio output connector component  |
| Components-Camera                 | HW-Device-Cisco-Ces-Components-Camera-Restapi-custom                 | Check camera components                 |
| Components-Software               | HW-Device-Cisco-Ces-Components-Software-Restapi-custom               | Check software components               |
| Components-Speakertrack           | HW-Device-Cisco-Ces-Components-Speakertrack-Restapi-custom           | Check SpeakerTrack components           |
| Components-Temperature            | HW-Device-Cisco-Ces-Components-Temperature-Restapi-custom            | Check temperature components            |
| Components-Video-Input-Connector  | HW-Device-Cisco-Ces-Components-Video-Input-Connector-Restapi-custom  | Check video input connector components  |
| Components-Video-Input-Source     | HW-Device-Cisco-Ces-Components-Video-Input-Source-Restapi-custom     | Check video input source components     |
| Components-Video-Output-Connector | HW-Device-Cisco-Ces-Components-Video-Output-Connector-Restapi-custom | Check video output connector components |
| Components-Webex                  | HW-Device-Cisco-Ces-Components-Webex-Restapi-custom                  | Check webex components                  |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Calls-Rt" label="Calls-Rt">

| Name                                            | Unit  |
|:------------------------------------------------|:------|
| *channels*#call.channels.traffic.bytes          | B/s   |
| *channels*#call.channels.maxjitter.milliseconds | ms    |
| *channels*#call.channels.packetloss.count       | count |
| *channels*#call.channels.packetloss.percentage  | %     |

</TabItem>
<TabItem value="Calls-Summary" label="Calls-Summary">

| Name                       | Unit  |
|:---------------------------|:------|
| calls.total.finished.count | count |

</TabItem>
<TabItem value="Certificates" label="Certificates">

| Name                                             | Unit  |
|:-------------------------------------------------|:------|
| *certificates*#system.certificate.expire.seconds | s     |

</TabItem>
<TabItem value="Components-Audio-Device" label="Components-Audio-Device">

| Name                        | Unit |
|:---------------------------|:------|
| connection_status | N/A |

</TabItem>
<TabItem value="Components-Audio-Input-Connector" label="Components-Audio-Input-Connector">

| Name                        | Unit |
|:---------------------------|:------|
| connection_status | N/A |
| aiclatency | ms |

</TabItem>
<TabItem value="Components-Audio-Output-Connector" label="Components-Audio-Output-Connector">

| Name                        | Unit |
|:---------------------------|:------|
| connection_status | N/A |
| aocdelay | ms |

</TabItem>
<TabItem value="Components-Camera" label="Components-Camera">

| Name                        | Unit |
|:---------------------------|:------|
| connection_status | N/A |
| camera.status | N/A |

</TabItem>
<TabItem value="Components-Global" label="Components-Global">

| Name                        | Unit |
|:---------------------------|:------|
| connection_status | N/A |
| aiclatency | ms |
</TabItem>
<TabItem value="Components-Software" label="Components-Software">

| Name                        | Unit |
|:---------------------------|:------|
| status | N/A |

</TabItem>
<TabItem value="Components-Speakertrack" label="Components-Speakertrack">

| Name                        | Unit |
|:---------------------------|:------|
| st_status | N/A |
| st_availability | N/A |

</TabItem>
<TabItem value="Components-Temperature" label="Components-Temperature">

| Name                        | Unit |
|:---------------------------|:------|
| temperature_status | N/A |
| temperature | C |

</TabItem>
<TabItem value="Components-Video-Input-Connector" label="Components-Video-Input-Connector">

| Name                        | Unit |
|:---------------------------|:------|
| connection_status | N/A |
| vic.status | N/A |
| vic.signal_state | N/A |

</TabItem>
<TabItem value="Components-Video-Input-Source" label="Components-Video-Input-Source">

| Name                        | Unit |
|:---------------------------|:------|
| format_status | N/A |

</TabItem>
<TabItem value="Components-Video-Output-Connector" label="Components-Video-Output-Connector">

| Name                        | Unit |
|:---------------------------|:------|
| connection_status | N/A |

</TabItem>
<TabItem value="Components-Webex" label="Components-Webex">

| Name                        | Unit |
|:---------------------------|:------|
| webex.status | N/A |

</TabItem>
<TabItem value="Diagnostics" label="Diagnostics">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Peripherals" label="Peripherals">

| Name                               | Unit  |
|:-----------------------------------|:------|
| system.peripherals.connected.count | count |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Name                          | Unit  |
|:------------------------------|:------|
| system.sessions.current.count | count |

</TabItem>
</Tabs>

## Prerequisites

To use the Cisco Collaboration Endpoint Rest API connector, make sure the device is reachable over HTTPS (port 443), that the REST API is enabled, and that valid credentials (username and password) are configured with permissions to access device status and metrics.

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
dnf install centreon-pack-hardware-devices-cisco-ces-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-devices-cisco-ces-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-devices-cisco-ces-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-devices-cisco-ces-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Cisco Collaboration Endpoint Rest API** connector through
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
dnf install centreon-plugin-Hardware-Devices-Cisco-Ces-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Devices-Cisco-Ces-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-devices-cisco-ces-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Devices-Cisco-Ces-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Device-Cisco-Ces-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro              | Description                                                                                          | Default value     | Mandatory   |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CESAPIUSERNAME     | Set username                                                                                         |                   | X           |
| CESAPIPASSWORD     | Set password                                                                                         |                   | X           |
| CESAPIPROTO        | Specify https if needed (default: 'https')                                                           | https             |             |
| CESAPIPORT         | Set port (default: '443')                                                                            | 443               |             |
| CESAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Calls-Rt" label="Calls-Rt">

| Macro                          | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCHANNELSMAXJITTER       | Threshold                                                                                          |                   |             |
| CRITICALCHANNELSMAXJITTER      | Threshold                                                                                          |                   |             |
| WARNINGCHANNELSPACKETLOSS      | Threshold                                                                                          |                   |             |
| CRITICALCHANNELSPACKETLOSS     | Threshold                                                                                          |                   |             |
| WARNINGCHANNELSPACKETLOSSPRCT  | Threshold                                                                                          |                   |             |
| CRITICALCHANNELSPACKETLOSSPRCT | Threshold                                                                                          |                   |             |
| WARNINGCHANNELSTRAFFIC         | Threshold                                                                                          |                   |             |
| CRITICALCHANNELSTRAFFIC        | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Calls-Summary" label="Calls-Summary">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGMAXJITTER       | Threshold                                                                                          |                   |             |
| CRITICALMAXJITTER      | Threshold                                                                                          |                   |             |
| WARNINGPACKETLOSS      | Threshold                                                                                          |                   |             |
| CRITICALPACKETLOSS     | Threshold                                                                                          |                   |             |
| WARNINGPACKETLOSSPRCT  | Threshold                                                                                          |                   |             |
| CRITICALPACKETLOSSPRCT | Threshold                                                                                          |                   |             |
| WARNINGTOTALFINISHED   | Threshold                                                                                          |                   |             |
| CRITICALTOTALFINISHED  | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Certificates" label="Certificates">

| Macro                     | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCERTIFICATEEXPIRE  | Threshold                                                                                          |                   |             |
| CRITICALCERTIFICATEEXPIRE | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Components-Audio-Device" label="Components-Audio-Device">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | ad                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Components-Audio-Input-Connector" label="Components-Audio-Input-Connector">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | aic               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Components-Audio-Output-Connector" label="Components-Audio-Output-Connector">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | aoc               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Components-Camera" label="Components-Camera">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | camera            |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Components-Global" label="Components-Global">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Components-Software" label="Components-Software">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | software          |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Components-Speakertrack" label="Components-Speakertrack">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | st                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Components-Temperature" label="Components-Temperature">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | temperature       |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Components-Video-Input-Connector" label="Components-Video-Input-Connector">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | vic               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Components-Video-Input-Source" label="Components-Video-Input-Source">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | vis               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Components-Video-Output-Connector" label="Components-Video-Output-Connector">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | voc               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Components-Webex" label="Components-Webex">

| Macro        | Description                                                                                                                                                                                                                                                                                             | Default value     | Mandatory   |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex' | webex             |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Diagnostics" label="Diagnostics">

| Macro          | Description                                                                                                                                                                              | Default value                    | Mandatory   |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| FILTERMSG      | Filter by message (can be a regexp)                                                                                                                                                      |                                  |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: '%\{level\} =~ /warning\|minor/i') You can use the following variables: %\{description\}, %\{level\}, %\{type\}    | %\{level\} =~ /warning\|minor/i  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{level\} =~ /critical\|major/i'). You can use the following variables: %\{description\}, %\{level\}, %\{type\} | %\{level\} =~ /critical\|major/i |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                       | --verbose                        |             |

</TabItem>
<TabItem value="Peripherals" label="Peripherals">

| Macro                        | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSINCE                  | Filter by since X seconds (default: 86400)                                                         | 86400             |             |
| WARNINGPERIPHERALSCONNECTED  | Threshold                                                                                          |                   |             |
| CRITICALPERIPHERALSCONNECTED | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                   | Description                                                                                        | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSESSIONSCURRENT  | Threshold                                                                                          |                   |             |
| CRITICALSESSIONSCURRENT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_cisco_ces_restapi.pl \
	--plugin=hardware::devices::cisco::ces::restapi::plugin \
	--mode=sessions \
	--hostname='10.0.0.1' \
	--api-username='xxxxxx' \
	--api-password='xxxxxx' \
	--port='443' \
	--proto='https'  \
	--warning-sessions-current='' \
	--critical-sessions-current='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: total current sessions: 48099 | 'system.sessions.current.count'=48099;;;0;
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
/usr/lib/centreon/plugins/centreon_cisco_ces_restapi.pl \
	--plugin=hardware::devices::cisco::ces::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                          | Linked service template                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| calls-rt [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/cisco/ces/restapi/mode/callsrt.pm)]           | HW-Device-Cisco-Ces-Calls-Rt-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| calls-summary [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/cisco/ces/restapi/mode/callssummary.pm)] | HW-Device-Cisco-Ces-Calls-Summary-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/cisco/ces/restapi/mode/certificates.pm)]  | HW-Device-Cisco-Ces-Certificates-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| components [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/cisco/ces/restapi/mode/components.pm)]      | HW-Device-Cisco-Ces-Components-Audio-Device-Restapi-custom<br />HW-Device-Cisco-Ces-Components-Audio-Input-Connector-Restapi-custom<br />HW-Device-Cisco-Ces-Components-Audio-Output-Connector-Restapi-custom<br />HW-Device-Cisco-Ces-Components-Camera-Restapi-custom<br />HW-Device-Cisco-Ces-Components-Global-Restapi-custom<br />HW-Device-Cisco-Ces-Components-Software-Restapi-custom<br />HW-Device-Cisco-Ces-Components-Speakertrack-Restapi-custom<br />HW-Device-Cisco-Ces-Components-Temperature-Restapi-custom<br />HW-Device-Cisco-Ces-Components-Video-Input-Connector-Restapi-custom<br />HW-Device-Cisco-Ces-Components-Video-Input-Source-Restapi-custom<br />HW-Device-Cisco-Ces-Components-Video-Output-Connector-Restapi-custom<br />HW-Device-Cisco-Ces-Components-Webex-Restapi-custom |
| diagnostics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/cisco/ces/restapi/mode/diagnostics.pm)]    | HW-Device-Cisco-Ces-Diagnostics-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| peripherals [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/cisco/ces/restapi/mode/peripherals.pm)]    | HW-Device-Cisco-Ces-Peripherals-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/cisco/ces/restapi/mode/sessions.pm)]          | HW-Device-Cisco-Ces-Sessions-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

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
| --memcached                                |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 |   Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --memexpiration                            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
| --timeout                                  |   Threshold for HTTP timeout (default: '30').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --no-session                               |   To be used for legacy version (before CE 8.0).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Calls-Rt" label="Calls-Rt">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-* --critical-* |   Thresholds. Can be: 'channels-traffic', 'channels-maxjitter' 'channels-packetloss', 'channels-packetloss-prct'.             |

</TabItem>
<TabItem value="Calls-Summary" label="Calls-Summary">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-* --critical-* |   Thresholds. Can be: 'total-finished', 'packetloss' 'packetloss-prct', 'maxjitter'.                                          |

</TabItem>
<TabItem value="Certificates" label="Certificates">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-* --critical-* |   Thresholds. Can be: 'certificate-expire'.                                                                                   |

</TabItem>
<TabItem value="Components-Audio-Device" label="Components-Audio-Device">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Components-Audio-Input-Connector" label="Components-Audio-Input-Connector">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Components-Audio-Output-Connector" label="Components-Audio-Output-Connector">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Components-Camera" label="Components-Camera">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Components-Global" label="Components-Global">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Components-Software" label="Components-Software">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Components-Speakertrack" label="Components-Speakertrack">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Components-Temperature" label="Components-Temperature">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Components-Video-Input-Connector" label="Components-Video-Input-Connector">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Components-Video-Input-Source" label="Components-Video-Input-Source">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Components-Video-Output-Connector" label="Components-Video-Output-Connector">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Components-Webex" label="Components-Webex">

| Option               | Description                                                                                                                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'ad' (audio device), 'aic' (audio input connectors), 'aoc' (audio output connectors), 'camera', 'st' (speakerTrack), 'software', 'temperature', 'vic' (video input connectors), 'vis' (video input source), 'voc', (video output connectors), 'webex'.   |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='aic,Microphone.1'                                                                                                                                                                                  |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                                                                                       |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                 |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='ad.status,CRITICAL,NotConnected'                                                                             |
| --warning            |   Set warning threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --warning='aiclatency,.*,20'                                                                                                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'fan', 'psu' (syntax: type,regexp,threshold) Example: --critical='aiclatency,.*,50'                                                                                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                               |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Diagnostics" label="Diagnostics">

| Option            | Description                                                                                                                                                                                   |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                   |
| --filter-msg      |   Filter by message (can be a regexp).                                                                                                                                                        |
| --legacy-tc       |   Use old legacy command.                                                                                                                                                                     |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: '%\{level\} =~ /warning\|minor/i') You can use the following variables: %\{description\}, %\{level\}, %\{type\}       |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{level\} =~ /critical\|major/i'). You can use the following variables: %\{description\}, %\{level\}, %\{type\}    |

</TabItem>
<TabItem value="Peripherals" label="Peripherals">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --filter-since           |   Filter by since X seconds (default: 86400).                                                                                 |
| --warning-* --critical-* |   Thresholds. Can be: 'peripherals-connected'.                                                                                |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-* --critical-* |   Thresholds. Can be: 'sessions-current'.                                                                                     |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_ces_restapi.pl \
	--plugin=hardware::devices::cisco::ces::restapi::plugin \
	--mode=sessions \
	--help
```
