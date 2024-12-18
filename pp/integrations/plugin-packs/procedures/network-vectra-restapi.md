---
id: network-vectra-restapi
title: Vectra Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Vectra Rest API** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Vectra Rest API** brings a host template:

* **Net-Vectra-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Vectra-Restapi-custom" label="Net-Vectra-Restapi-custom">

| Service Alias | Service Template                 | Service Description                                  |
|:--------------|:---------------------------------|:-----------------------------------------------------|
| Cpu           | Net-Vectra-Cpu-Restapi-custom    | Check the rate of CPU utilization for the machine |
| Disk          | Net-Vectra-Disk-Restapi-custom   | Check disk usage                                     |
| Memory        | Net-Vectra-Memory-Restapi-custom | Check memory usage                                   |
| Uptime        | Net-Vectra-Uptime-Restapi-custom | Time since the server has been working and available |

> The services listed above are created automatically when the **Net-Vectra-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                     | Service Description | Discovery  |
|:--------------|:-------------------------------------|:--------------------|:----------:|
| Interfaces    | Net-Vectra-Interfaces-Restapi-custom | Check interfaces    | X          |
| Sensors       | Net-Vectra-Sensors-Restapi-custom    | Check sensors       | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                         | Description                                                   |
|:----------------------------------|:--------------------------------------------------------------|
| Net-Vectra-Restapi-Interface-Name | Discover network interfaces and monitor bandwidth utilization |
| Net-Vectra-Restapi-Sensor-Name    | Discover network sensors and monitor utilization              |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Name                       | Unit  |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk" label="Disk">

| Name                  | Unit  |
|:----------------------|:------|
| disk.usage.bytes      | B     |
| disk.free.bytes       | B     |
| disk.usage.percentage | %     |
| raid-status           | N/A   |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Name                                              | Unit  |
|:--------------------------------------------------|:------|
| interface-status                                  | N/A   |
| *interfaces*#interface.traffic.peak.bitspersecond | b/s   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Name                    | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| dimm-status             | N/A   |

</TabItem>
<TabItem value="Sensors" label="Sensors">

| Name                                                         | Unit  |
|:-------------------------------------------------------------|:------|
| sensor-status                                                | N/A   |
| trafficdrop-status                                           | N/A   |
| connectivity-status                                          | N/A   |
| interface-status                                             | N/A   |
| interface-status                                             | N/A   |
| *sensors*~*interfaces1*#interface.traffic.peak.bitspersecond | b/s   |
| *sensors*~*interfaces2*#interface.traffic.peak.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Name                  | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

The connector uses the following API endpoints, which must be queriable by the Centreon poller:
* /health/connectivity
* /health/cpu
* /health/disk
* /health/memory
* /health/sensors
* /health/system
* /health/trafficdrop

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
dnf install centreon-pack-network-vectra-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-vectra-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-vectra-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-vectra-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Vectra Rest API** connector through
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
dnf install centreon-plugin-Network-Vectra-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Vectra-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-vectra-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Vectra-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Vectra-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                              | Default value     | Mandatory   |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APITOKEN        | API token                                                                                                                                |                   | X           |
| APIPROTO        | Specify https if needed                                                                                                                  | https             |             |
| APIPORT         | Port use                                                                                                                                 | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro                  | Description                                                                                                                            | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCPUUTILIZATION  | Threshold                                                                                                                              |                   |             |
| CRITICALCPUUTILIZATION | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Disk" label="Disk">

| Macro                 | Description                                                                                                                            | Default value      | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| WARNINGDISKUSAGE      | Threshold                                                                                                                              |                    |             |
| CRITICALDISKUSAGE     | Threshold                                                                                                                              |                    |             |
| WARNINGDISKUSAGEFREE  | Threshold                                                                                                                              |                    |             |
| CRITICALDISKUSAGEFREE | Threshold                                                                                                                              |                    |             |
| WARNINGDISKUSAGEPRCT  | Threshold                                                                                                                              |                    |             |
| CRITICALDISKUSAGEPRCT | Threshold                                                                                                                              |                    |             |
| CRITICALRAIDSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{name\}                  | %\{status\} !~ /ok/i |             |
| WARNINGRAIDSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                   |                    |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose          |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro                        | Description                                                                                                                            | Default value        | Mandatory   |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| FILTERINTERFACENAME          | Filter interfaces by name (can be a regexp)                                                                                            |                      |             |
| WARNINGINTERFACEPEAKTRAFFIC  | Threshold                                                                                                                              |                      |             |
| CRITICALINTERFACEPEAKTRAFFIC | Threshold                                                                                                                              |                      |             |
| CRITICALINTERFACESTATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{name\}                  | %\{status\} =~ /down/i |             |
| WARNINGINTERFACESTATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                   |                      |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose            |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                   | Description                                                                                                                            | Default value      | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| CRITICALDIMMSTATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{name\}                  | %\{status\} !~ /ok/i |             |
| WARNINGDIMMSTATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                   |                    |             |
| WARNINGMEMORYUSAGE      | Threshold                                                                                                                              |                    |             |
| CRITICALMEMORYUSAGE     | Threshold                                                                                                                              |                    |             |
| WARNINGMEMORYUSAGEFREE  | Threshold                                                                                                                              |                    |             |
| CRITICALMEMORYUSAGEFREE | Threshold                                                                                                                              |                    |             |
| WARNINGMEMORYUSAGEPRCT  | Threshold                                                                                                                              |                    |             |
| CRITICALMEMORYUSAGEPRCT | Threshold                                                                                                                              |                    |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose          |             |

</TabItem>
<TabItem value="Sensors" label="Sensors">

| Macro                        | Description                                                                                                                                   | Default value                                     | Mandatory   |
|:-----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|:-----------:|
| UNKNOWNCONNECTIVITYSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{connectivityStatus\}, %\{name\}              | %\{connectivityStatus\} =~ /unknown/i               |             |
| FILTERSENSORNAME             | Filter sensors by name (can be a regexp)                                                                                                      |                                                   |             |
| WARNINGCONNECTIVITYSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{connectivityStatus\}, %\{name\}              | %\{connectivityStatus\} =~ /warning/i               |             |
| CRITICALCONNECTIVITYSTATUS   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{connectivityStatus\}, %\{name\}             | %\{connectivityStatus\} =~ /critical/i              |             |
| WARNINGINTERFACEPEAKTRAFFIC  | Threshold                                                                                                                                     |                                                   |             |
| CRITICALINTERFACEPEAKTRAFFIC | Threshold                                                                                                                                     |                                                   |             |
| CRITICALINTERFACESTATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{interfaceName\}, %\{sensorName\} | %\{connectivityStatus\} =~ /critical/i              |             |
| WARNINGINTERFACESTATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{interfaceName\}, %\{sensorName\}  |                                                   |             |
| CRITICALSENSORSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{name\}                         | %\{status\} !~ /^paired/i                           |             |
| WARNINGSENSORSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                          |                                                   |             |
| WARNINGTRAFFICDROPSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{trafficDropStatus\}, %\{name\}               | %\{trafficDropStatus\} =~ /warning\|unknown\|skip/i |             |
| CRITICALTRAFFICDROPSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{trafficDropStatus\}, %\{name\}              |                                                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).        | --verbose                                         |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                                                                                           | Default value     | Mandatory   |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNIT           | Select the time unit for the performance data and thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds |                   |             |
| WARNINGUPTIME  | Threshold                                                                                                                                                             |                   |             |
| CRITICALUPTIME | Threshold                                                                                                                                                             |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_vectra_restapi.pl \
	--plugin=network::vectra::restapi::plugin \
	--mode=memory \
	--hostname='10.0.0.1' \
	--port='443' \
	--proto='https' \
	--token='XXXX'  \
	--warning-dimm-status='%{status} !~ /ok/i' \
	--critical-dimm-status='' \
	--warning-memory-usage='' \
	--critical-memory-usage='' \
	--warning-memory-usage-free='' \
	--critical-memory-usage-free='' \
	--warning-memory-usage-prct='' \
	--critical-memory-usage-prct='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: Ram total: 187.39 GB used (-buffers/cache): 85.47 GB (45.61%) free: 59.08 GB (31.53%) - All dimm are ok | 'memory.usage.bytes'=91772731392B;;;0;201210691584 'memory.free.bytes'=63436963840B;;;0;201210691584 'memory.usage.percentage'=45.61%;;;0;100
Dimm 'mc0' status: ok
Dimm 'mc1' status: ok
Dimm 'mc2' status: ok
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
/usr/lib/centreon/plugins/centreon_vectra_restapi.pl \
	--plugin=network::vectra::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                  | Linked service template              |
|:--------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/cpu.pm)]                        | Net-Vectra-Cpu-Restapi-custom        |
| disk [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/disk.pm)]                      | Net-Vectra-Disk-Restapi-custom       |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/interfaces.pm)]          | Net-Vectra-Interfaces-Restapi-custom |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/listinterfaces.pm)] | Used for service discovery           |
| list-sensors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/listsensors.pm)]       | Used for service discovery           |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/memory.pm)]                  | Net-Vectra-Memory-Restapi-custom     |
| sensors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/sensors.pm)]                | Net-Vectra-Sensors-Restapi-custom    |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/uptime.pm)]                  | Net-Vectra-Uptime-Restapi-custom     |

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
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --token                                    |   API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                     |
|:-------------------------|:------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'cpu-utilization' (%).    |

</TabItem>
<TabItem value="Disk" label="Disk">

| Option                   | Description                                                                                                                                               |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-raid-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                    |
| --warning-raid-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                    |
| --critical-raid-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /ok/i'). You can use the following variables: %\{status\}, %\{name\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'disk-usage', 'disk-usage-free', 'disk-usage-prct'                                                                                  |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                      | Description                                                                                                                                                 |
|:----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-interface-name     |   Filter interfaces by name (can be a regexp).                                                                                                              |
| --unknown-interface-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                      |
| --warning-interface-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                      |
| --critical-interface-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /down/i'). You can use the following variables: %\{status\}, %\{name\}   |
| --warning-* --critical-*    |   Thresholds. Can be: 'interface-peak-traffic'.                                                                                                             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                               |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-dimm-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                    |
| --warning-dimm-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                    |
| --critical-dimm-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /ok/i'). You can use the following variables: %\{status\}, %\{name\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'memory-usage', 'memory-usage-free', 'memory-usage-prct'                                                                            |

</TabItem>
<TabItem value="Sensors" label="Sensors">

| Option                         | Description                                                                                                                                                                                        |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-sensor-name           |   Filter sensors by name (can be a regexp).                                                                                                                                                        |
| --unknown-sensor-status        |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                                                             |
| --warning-sensor-status        |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                                                             |
| --critical-sensor-status       |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /^paired/i'). You can use the following variables: %\{status\}, %\{name\}                                       |
| --unknown-trafficdrop-status   |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{trafficDropStatus\}, %\{name\}                                                                  |
| --warning-trafficdrop-status   |   Define the conditions to match for the status to be WARNING (default: '%\{trafficDropStatus\} =~ /warning\|unknown\|skip/i'). You can use the following variables: %\{trafficDropStatus\}, %\{name\}   |
| --critical-trafficdrop-status  |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{trafficDropStatus\}, %\{name\}                                                                 |
| --unknown-connectivity-status  |   Define the conditions to match for the status to be WARNING (default: '%\{connectivityStatus\} =~ /unknown/i'). You can use the following variables: %\{connectivityStatus\}, %\{name\}                |
| --warning-connectivity-status  |   Define the conditions to match for the status to be WARNING (default: '%\{connectivityStatus\} =~ /warning/i'). You can use the following variables: %\{connectivityStatus\}, %\{name\}                |
| --critical-connectivity-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{connectivityStatus\} =~ /critical/i'). You can use the following variables: %\{connectivityStatus\}, %\{name\}              |
| --unknown-interface-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{interfaceName\}, %\{sensorName\}                                                     |
| --warning-interface-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{interfaceName\}, %\{sensorName\}                                                     |
| --critical-interface-status    |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /down/i'). You can use the following variables: %\{status\}, %\{interfaceName\}, %\{sensorName\}                  |
| --warning-* --critical-*       |   Thresholds. Can be: 'interface-peak-traffic'.                                                                                                                                                    |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                   | Description                                                                                                                                                                |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-system-info        |   Display model and firmware informations                                                                                                                                  |
| --unit                   |   Select the time unit for the performance data and thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   |
| --warning-* --critical-* |   Thresholds. Can be: 'uptime'.                                                                                                                                            |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_vectra_restapi.pl \
	--plugin=network::vectra::restapi::plugin \
	--mode=sensors \
	--help
```
