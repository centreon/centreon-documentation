---
id: hardware-storage-dell-me4-restapi
title: Dell ME4 Rest API
description: "Monitor Dell ME4 storage arrays via REST API: controller statistics, hardware health, volume statistics, and interfaces."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Dell Me4 Rest API** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Dell Me4 Rest API** brings a host template:

* **HW-Storage-Dell-Me4-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-Dell-Me4-Restapi-custom" label="HW-Storage-Dell-Me4-Restapi-custom">

| Service Alias         | Service Template                                         | Service Description          | Discovery  |
|:----------------------|:---------------------------------------------------------|:-----------------------------|:----------:|
| Controller-Statistics | HW-Storage-Dell-Me4-Controller-Statistics-Restapi-custom | Check controller statistics | X          |
| Hardware              | HW-Storage-Dell-Me4-Hardware-Restapi-custom              | Check hardware               |            |
| Volume-Statistics     | HW-Storage-Dell-Me4-Volume-Statistics-Restapi-custom     | Check volume statistics     | X          |

> The services listed above are created automatically when the **HW-Storage-Dell-Me4-Restapi-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                              | Service Description |
|:--------------|:----------------------------------------------|:--------------------|
| Interfaces    | HW-Storage-Dell-Me4-Interfaces-Restapi-custom | Check interfaces    |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                              | Description                                               |
|:-------------------------------------------------------|:----------------------------------------------------------|
| HW-Storage-Dell-Me4-Restapi-Controller-Statistics-Name | Discover controllers and monitor them |
| HW-Storage-Dell-Me4-Restapi-Volume-Statistics-Name     | Discover volumes and monitor them |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Controller-Statistics" label="Controller-Statistics">

| Name                                                  | Unit  |
|:------------------------------------------------------|:------|
| *controllers*#controller.data.read.bytespersecond     | B/s   |
| *controllers*#controller.data.written.bytespersecond  | B/s   |
| reads                                                 | N/A   |
| writes                                                | N/A   |
| *controllers*#controller.data.transfer.bytespersecond | B/s   |
| *controllers*#controller.iops.count                   | ops   |
| *controllers*#controller.commands.forwarded.count     | count |
| *controllers*#controller.cache.write.usage.percentage | %     |
| write-cache-hits                                      | N/A   |
| write-cache-misses                                    | N/A   |
| read-cache-hits                                       | N/A   |
| read-cache-misses                                     | N/A   |
| *controllers*#controller.cpu.utilization.percentage   | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name       | Description                                | Unit  |
|:------------------|:-------------------------------------------|:------|
| controller status | Status/health/redundancy of the controller |       |
| disk status       | Status/health/state of the disk            |       |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Name                                                       | Unit  |
|:-----------------------------------------------------------|:------|
| port-status                                                | N/A   |
| *ports*~port.io.read.usage.iops                            | iops  |
| *ports*~port.io.write.usage.iops                           | iops  |
| *ports*~port.traffic.read.usage.bitspersecond              | b/s   |
| *ports*~port.traffic.write.usage.bitspersecond             | b/s   |
| *ports*~*interfaces*#port.interface.disparity.errors.count | count |
| *ports*~*interfaces*#port.interface.lost.dwords.count      | count |
| *ports*~*interfaces*#port.interface.invalid.dwords.count   | count |

</TabItem>
<TabItem value="Volume-Statistics" label="Volume-Statistics">

| Name                                          | Unit  |
|:----------------------------------------------|:------|
| *volumes*#volume.data.read.bytespersecond     | B/s   |
| *volumes*#volume.data.written.bytespersecond  | B/s   |
| reads                                         | N/A   |
| writes                                        | N/A   |
| *volumes*#volume.data.transfer.bytespersecond | B/s   |
| *volumes*#volume.iops.ops                     | ops   |
| *volumes*#volume.cache.write.usage.percentage | %     |
| write-cache-hits                              | N/A   |
| write-cache-misses                            | N/A   |
| read-cache-hits                               | N/A   |
| read-cache-misses                             | N/A   |

</TabItem>
</Tabs>

## Prerequisites

To control your Dell ME4, the Rest API must be configured.

https://www.dell.com/support/manuals/fr-fr/powervault-me4024/me4_series_cli_pub/using-a-script-to-access-the-cli?guid=guid-9ae5ccd6-a207-42df-b2f3-1e02a487a354&lang=en-us

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-dell-me4-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-dell-me4-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-dell-me4-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-dell-me4-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Dell Me4 Rest API** connector through
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
dnf install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-dell-me4-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-Dell-Me4-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                          | Default value     | Mandatory   |
|:----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | API username                                                                                         |                   | X           |
| APIPASSWORD     | API password                                                                                         |                   | X           |
| APIPROTO        | Specify https if needed                                                          | https             |             |
| APIPORT         | Port used                                                                           | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Controller-Statistics" label="Controller-Statistics">

| Macro                    | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME               | Filter controller name (can be a regexp)                                                           |                   |             |
| WARNINGCPUUTILIZATION    | Threshold                                                                                          |                   |             |
| CRITICALCPUUTILIZATION   | Threshold                                                                                          |                   |             |
| WARNINGDATAREAD          | Threshold                                                                                          |                   |             |
| CRITICALDATAREAD         | Threshold                                                                                          |                   |             |
| WARNINGDATATRANSFER      | Threshold                                                                                          |                   |             |
| CRITICALDATATRANSFER     | Threshold                                                                                          |                   |             |
| WARNINGDATAWRITTEN       | Threshold                                                                                          |                   |             |
| CRITICALDATAWRITTEN      | Threshold                                                                                          |                   |             |
| WARNINGFORWARDEDCMDS     | Threshold                                                                                          |                   |             |
| CRITICALFORWARDEDCMDS    | Threshold                                                                                          |                   |             |
| WARNINGIOPS              | Threshold                                                                                          |                   |             |
| CRITICALIOPS             | Threshold                                                                                          |                   |             |
| WARNINGREADCACHEHITS     | Threshold                                                                                          |                   |             |
| CRITICALREADCACHEHITS    | Threshold                                                                                          |                   |             |
| WARNINGREADCACHEMISSES   | Threshold                                                                                          |                   |             |
| CRITICALREADCACHEMISSES  | Threshold                                                                                          |                   |             |
| WARNINGREADS             | Threshold                                                                                          |                   |             |
| CRITICALREADS            | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEHITS    | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEHITS   | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEMISSES  | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEMISSES | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEUSED    | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEUSED   | Threshold                                                                                          |                   |             |
| WARNINGWRITES            | Threshold                                                                                          |                   |             |
| CRITICALWRITES           | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                                     | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'controller', 'disk', 'fan', 'fru', 'psu', 'sensor', 'volume' |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).              | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro                            | Description                                                                                                                                                                      | Default value              | Mandatory   |
|:---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| UNKNOWNPORTSTATUS                | Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\}  | %\{health\} =~ /unknown/i  |             |
| FILTERPORTNAME                   | Filter port name (can be a regexp)                                                                                                                                               |                            |             |
| WARNINGINTERFACEDISPARITYERRORS  | Threshold                                                                                                                                                                        |                            |             |
| CRITICALINTERFACEDISPARITYERRORS | Threshold                                                                                                                                                                        |                            |             |
| WARNINGINTERFACEINVALIDDWORDS    | Threshold                                                                                                                                                                        |                            |             |
| CRITICALINTERFACEINVALIDDWORDS   | Threshold                                                                                                                                                                        |                            |             |
| WARNINGINTERFACELOSTDWORDS       | Threshold                                                                                                                                                                        |                            |             |
| CRITICALINTERFACELOSTDWORDS      | Threshold                                                                                                                                                                        |                            |             |
| WARNINGPORTSTATUS                | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /degraded/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\} | %\{health\} =~ /degraded/i |             |
| CRITICALPORTSTATUS               | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /fault/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\}   | %\{health\} =~ /fault/i    |             |
| WARNINGREADIOPS                  | Threshold                                                                                                                                                                        |                            |             |
| CRITICALREADIOPS                 | Threshold                                                                                                                                                                        |                            |             |
| WARNINGREADTRAFFIC               | Threshold                                                                                                                                                                        |                            |             |
| CRITICALREADTRAFFIC              | Threshold                                                                                                                                                                        |                            |             |
| WARNINGWRITEIOPS                 | Threshold                                                                                                                                                                        |                            |             |
| CRITICALWRITEIOPS                | Threshold                                                                                                                                                                        |                            |             |
| WARNINGWRITETRAFFIC              | Threshold                                                                                                                                                                        |                            |             |
| CRITICALWRITETRAFFIC             | Threshold                                                                                                                                                                        |                            |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                               | --verbose                  |             |

</TabItem>
<TabItem value="Volume-Statistics" label="Volume-Statistics">

| Macro                     | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                | Filter volume name (can be a regexp)                                                               |                   |             |
| WARNINGDATAREAD           | Threshold                                                                                          |                   |             |
| CRITICALDATAREAD          | Threshold                                                                                          |                   |             |
| WARNINGDATATRANSFER       | Threshold                                                                                          |                   |             |
| CRITICALDATATRANSFER      | Threshold                                                                                          |                   |             |
| WARNINGDATAWRITTEN        | Threshold                                                                                          |                   |             |
| CRITICALDATAWRITTEN       | Threshold                                                                                          |                   |             |
| WARNINGIOPS               | Threshold                                                                                          |                   |             |
| CRITICALIOPS              | Threshold                                                                                          |                   |             |
| WARNINGREADCACHEHITS      | Threshold                                                                                          |                   |             |
| CRITICALREADCACHEHITS     | Threshold                                                                                          |                   |             |
| WARNINGREADCACHEMISSES    | Threshold                                                                                          |                   |             |
| CRITICALREADCACHEMISSES   | Threshold                                                                                          |                   |             |
| WARNINGREADS              | Threshold                                                                                          |                   |             |
| CRITICALREADS             | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEHITS     | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEHITS    | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEMISSES   | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEMISSES  | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEPERCENT  | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEPERCENT | Threshold                                                                                          |                   |             |
| WARNINGWRITES             | Threshold                                                                                          |                   |             |
| CRITICALWRITES            | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \
	--plugin=storage::dell::me4::restapi::plugin \
	--mode=interfaces \
	--hostname='10.0.0.1' \
	--api-username='XXXX' \
	--api-password='XXXX' \
	--port='443' \
	--proto='https'  \
	--filter-port-name='' \
	--unknown-port-status='%\{health\} =~ /unknown/i' \
	--warning-port-status='%\{health\} =~ /degraded/i' \
	--critical-port-status='%\{health\} =~ /fault/i' \
	--warning-read-iops='' \
	--critical-read-iops='' \
	--warning-write-iops='' \
	--critical-write-iops='' \
	--warning-read-traffic='' \
	--critical-read-traffic='' \
	--warning-write-traffic='' \
	--critical-write-traffic='' \
	--warning-interface-disparity-errors='' \
	--critical-interface-disparity-errors='' \
	--warning-interface-lost-dwords='' \
	--critical-interface-lost-dwords='' \
	--warning-interface-invalid-dwords='' \
	--critical-interface-invalid-dwords='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: port 'A0' status: up [health: ok], read iops: 94.52, write iops: 161.11, read traffic: 1.29 Mb/s - All interfaces are ok | 'A0#port.io.read.usage.iops'=94.52iops;;;0; 'A0#port.io.write.usage.iops'=161.11iops;;;0; 'A0#port.traffic.read.usage.bitspersecond'=1287234b/s;;;0; 'A0~0#port.interface.disparity.errors.count'=0;;;0; 'A0~0#port.interface.lost.dwords.count'=0;;;0; 'A0~0#port.interface.invalid.dwords.count'=0;;;0; 'A0~1#port.interface.disparity.errors.count'=0;;;0; 'A0~1#port.interface.lost.dwords.count'=0;;;0; 'A0~1#port.interface.invalid.dwords.count'=0;;;0; 'A0~2#port.interface.disparity.errors.count'=0;;;0; 'A0~2#port.interface.lost.dwords.count'=0;;;0; 'A0~2#port.interface.invalid.dwords.count'=0;;;0; 'A0~3#port.interface.disparity.errors.count'=0;;;0; 'A0~3#port.interface.lost.dwords.count'=0;;;0; 'A0~3#port.interface.invalid.dwords.count'=0;;;0;
checking port 'A0'
    status: up [health: ok], read iops: 94.52, write iops: 161.11, read traffic: 1.29 Mb/s
    interface '0' disparity errors: 0, lost dwords: 0, invalid dwords: 0
    interface '1' disparity errors: 0, lost dwords: 0, invalid dwords: 0
    interface '2' disparity errors: 0, lost dwords: 0, invalid dwords: 0
    interface '3' disparity errors: 0, lost dwords: 0, invalid dwords: 0

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
/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \
	--plugin=storage::dell::me4::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                | Linked service template                                  |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|
| controller-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/controllerstatistics.pm)] | HW-Storage-Dell-Me4-Controller-Statistics-Restapi-custom |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/hardware.pm)]                          | HW-Storage-Dell-Me4-Hardware-Restapi-custom              |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/interfaces.pm)]                      | HW-Storage-Dell-Me4-Interfaces-Restapi-custom            |
| list-controllers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/listcontrollers.pm)]           | Used for service discovery                               |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/listvolumes.pm)]                   | Used for service discovery                               |
| volume-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/volumestatistics.pm)]         | HW-Storage-Dell-Me4-Volume-Statistics-Restapi-custom     |

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
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --memcached                                |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --redis-server                             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --redis-attribute                          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --redis-db                                 |   Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --failback-file                            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --memexpiration                            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-dir                            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-suffix                         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-concat-cwd                     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --statefile-format                         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-key                            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-cipher                         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --hostname                                 |   Dell ME4 hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-username                             |   API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --api-password                             |   API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --digest-sha256                            |   New digest to use since firmware GT280R010-01 (md5 deprecated).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Controller-Statistics" label="Controller-Statistics">

| Option                   | Description                                                                                                                                                                                                                                  |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                  |
| --filter-name            |   Filter controller name (can be a regexp).                                                                                                                                                                                                  |
| --warning-* --critical-* |   Thresholds. Can be: 'data-read', 'data-written', 'reads', 'writes', 'data-transfer', 'iops', 'forwarded-cmds', 'write-cache-used', 'write-cache-hits', 'write-cache-misses', 'read-cache-hits', 'read-cache-misses', 'cpu-utilization'.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                                                    |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'controller', 'disk', 'fan', 'fru', 'psu', 'sensor', 'volume'.                                                                                                                             |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='sensor,Overall Sensor'                                                                                                               |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                         |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                   |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='controller,OK,Operational but not redundant'   |
| --warning            |   Set warning threshold for 'temperature' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,40'                                                                                                                               |
| --critical           |   Set critical threshold for 'temperature' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,50'                                                                                                                             |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                 |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                          |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                          |
| --filter-port-name       |   Filter port name (can be a regexp).                                                                                                                                                |
| --unknown-port-status    |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\}    |
| --warning-port-status    |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /degraded/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\}   |
| --critical-port-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /fault/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\}     |
| --warning-* --critical-* |   Thresholds. Can be: 'read-iops', 'write-iops', 'read-traffic', 'write-traffic', 'interface-disparity-errors', 'interface-lost-dwords', 'interface-invalid-dwords'.                 |

</TabItem>
<TabItem value="Volume-Statistics" label="Volume-Statistics">

| Option                   | Description                                                                                                                                                                                                |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                |
| --filter-name            |   Filter volume name (can be a regexp).                                                                                                                                                                    |
| --warning-* --critical-* |   Thresholds. Can be: 'data-read', 'data-written', 'reads', 'writes', 'data-transfer', 'iops', 'write-cache-percent', 'write-cache-hits', 'write-cache-misses', 'read-cache-hits', 'read-cache-misses'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \
	--plugin=storage::dell::me4::restapi::plugin \
	--mode=interfaces \
	--help
```
