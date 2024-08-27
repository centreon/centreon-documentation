---
id: hardware-storage-emc-clariion-navisphere
title: EMC Clariion
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **EMC Clariion** brings a host template:

* **HW-Storage-EMC-Clariion-Navisphere-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-EMC-Clariion-Navisphere-custom" label="HW-Storage-EMC-Clariion-Navisphere-custom">

| Service Alias   | Service Template                                          | Service Description                 | Discovery  |
|:----------------|:----------------------------------------------------------|:------------------------------------|:----------:|
| Cache           | HW-Storage-EMC-Clariion-Cache-Navisphere-custom           | Check cache state                   |            |
| Controller      | HW-Storage-EMC-Clariion-Controller-Navisphere-custom      | Check the global Navisphere controller             |            |
| Disks           | HW-Storage-EMC-Clariion-Disks-Navisphere-custom           | Check disk status and performance | X          |
| Hardware-Global | HW-Storage-EMC-Clariion-Hardware-Global-Navisphere-custom | Check all hardware status           |            |

> The services listed above are created automatically when the **HW-Storage-EMC-Clariion-Navisphere-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                     | Service Description               |
|:--------------|:-----------------------------------------------------|:----------------------------------|
| Faults        | HW-Storage-EMC-Clariion-Faults-Navisphere-custom     | Check faults on the array         |
| Hba-State     | HW-Storage-EMC-Clariion-Hba-State-Navisphere-custom  | Check connection state of servers |
| Port-State    | HW-Storage-EMC-Clariion-Port-State-Navisphere-custom | Check SP port state               |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                               | Description                                               |
|:----------------------------------------|:----------------------------------------------------------|
| HW-Storage-EMC-Clariion-Navisphere-Luns | Discover the disk partitions and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

| Metric name | Unit  |
|:------------|:------|
| dirty_cache | %     |

</TabItem>
<TabItem value="Controller" label="Controller">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| controller.io.read.usage.iops    | iops  |
| controller.io.write.usage.iops   | iops  |
| controller.busy.usage.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Disks" label="Disks">

| Metric name                   | Unit  |
|:------------------------------|:------|
| *disk_name*#state             | N/A   |
| *disk_name*#hard-read-errors  | N/A   |
| *disk_name*#hard-write-errors | N/A   |
| *disk_name*#read-io           | B/s   |
| *disk_name*#write-io          | B/s   |
| *disk_name*#utils             | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Faults" label="Faults">

| Metric name  | Unit  |
|:-------------|:------|
| array.status | N/A   |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Metric name     | Unit  |
|:----------------|:------|
| fan.status      | N/A   |
| lcc.status      | N/A   |
| psu.status      | N/A   |
| battery.status  | N/A   |
| memory.status   | N/A   |
| cpu.status      | N/A   |
| iomodule.status | N/A   |
| cable.status    | N/A   |

</TabItem>
<TabItem value="Hba-State" label="Hba-State">

| Metric name      | Unit  |
|:-----------------|:------|
| hba.state.status | N/A   |

</TabItem>
<TabItem value="Port-State" label="Port-State">

| Metric name      | Unit  |
|:-----------------|:------|
| hba.state.status | N/A   |

</TabItem>
</Tabs>

## Prerequisites

The plugin needs the Navisphere client to be installed (ask your EMC Support).
 By default , the plugin uses the following path: `/opt/Navisphere/bin`.

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
dnf install centreon-pack-hardware-storage-emc-clariion-navisphere
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-emc-clariion-navisphere
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-emc-clariion-navisphere
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-emc-clariion-navisphere
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **EMC Clariion** connector through
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
dnf install centreon-plugin-Hardware-Storage-Emc-Clariion-Navisphere
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Emc-Clariion-Navisphere
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-emc-clariion-navisphere
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Emc-Clariion-Navisphere
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-EMC-Clariion-Navisphere-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                  | Description                                                                                                                              | Default value     | Mandatory   |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NAVISPHEREEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent (for dirty cache)                                                                                         |                   |             |
| CRITICAL     | Critical threshold in percent (for dirty cache)                                                                                        |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Controller" label="Controller">

| Macro             | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBUSY       | Warning threshold                                                                                                                      |                   |             |
| CRITICALBUSY      | Critical threshold                                                                                                                     |                   |             |
| WARNINGREADIOPS   | Warning threshold                                                                                                                      |                   |             |
| CRITICALREADIOPS  | Critical threshold                                                                                                                     |                   |             |
| WARNINGWRITEIOPS  | Warning threshold                                                                                                                      |                   |             |
| CRITICALWRITEIOPS | Critical threshold                                                                                                                     |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Faults" label="Faults">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'fan', 'lcc', 'psu', 'battery', 'memory', 'cpu', 'iomodule', 'cable'                 | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Hba-State" label="Hba-State">

| Macro        | Description                                                                                                                                                                                                        | Default value     | Mandatory   |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSERVER | Set server to check (not set, means 'all')                                                                                                                                                                         |                   |             |
| FILTERUID    | Set hba uid to check (not set, means 'all')                                                                                                                                                                        |                   |             |
| PATHSTATUS   | Set how many paths must be connected (can be defined multiple times). Syntax: \[WARNING\],\[CRITICAL\],filter\_uid,filter\_server Example: ,@0:1,.*,.* - Means all servers must have at least two paths connected  |                   | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                             |                   |             |

</TabItem>
<TabItem value="Port-State" label="Port-State">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME   | Set SP Name to check (not set, means 'all')                                                                                            |                   |             |
| FILTERID     | Set SP port ID to check (not set, means 'all')                                                                                         |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_emc_clariion.pl \
	--plugin=storage::emc::clariion::plugin \
	--custommode=clariion \
	--mode=controller \
	--hostname=10.0.0.1  \
	--warning-busy='' \
	--critical-busy=''  \
	--warning-read-iops='' \
	--critical-read-iops=''  \
	--warning-write-iops='' \
	--critical-write-iops='' 
```

The expected command output is shown below:

```bash
OK: Read IOPs : 76 Write IOPs : 63 Busy : 94 % | 'controller.io.read.usage.iops'=76iops;;;0;'controller.io.write.usage.iops'=63iops;;;0;'controller.busy.usage.percentage'=94%;;;0;100
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
/usr/lib/centreon/plugins/centreon_emc_clariion.pl \
	--plugin=storage::emc::clariion::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                 | Linked service template                                   |
|:-------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|
| cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/emc/navisphere/mode/cache.pm)]           | HW-Storage-EMC-Clariion-Cache-Navisphere-custom           |
| controller [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/emc/navisphere/mode/controller.pm)] | HW-Storage-EMC-Clariion-Controller-Navisphere-custom      |
| disk [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/emc/navisphere/mode/disk.pm)]             | HW-Storage-EMC-Clariion-Disks-Navisphere-custom           |
| faults [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/emc/navisphere/mode/faults.pm)]         | HW-Storage-EMC-Clariion-Faults-Navisphere-custom          |
| hba-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/emc/navisphere/mode/hbastate.pm)]    | HW-Storage-EMC-Clariion-Hba-State-Navisphere-custom       |
| list-luns [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/emc/navisphere/mode/listluns.pm)]    | Used for service discovery                                |
| port-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/emc/navisphere/mode/portstate.pm)]  | HW-Storage-EMC-Clariion-Port-State-Navisphere-custom      |
| sp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/emc/navisphere/mode/sp.pm)]                 | HW-Storage-EMC-Clariion-Hardware-Global-Navisphere-custom |
| sp-info [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/emc/navisphere/mode/spinfo.pm)]        | Not used in this Monitoring Connector                     |

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
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --ssh-address                              | Specify ssh address target (default: use hostname option)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --navicli-path                             | Specify navicli path (default: '/opt/Navisphere/bin')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --navicli-command                          | Specify navicli command (default: 'navicli').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --naviseccli-path                          | Specify naviseccli path (default: '/opt/Navisphere/bin')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --naviseccli-command                       | Specify naviseccli command (default: 'naviseccli').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --sudo                                     | Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --special-arg                              | Set a special argument for the command. To be used for set a file. (Need to change command and use 'cat' instead).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --hostname                                 | Emc Clariion/VNX SP Hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --secfilepath                              | Set directory with security files (username and password not needed. Will use 'naviseccli').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --username                                 | Username to connect (will use 'naviseccli').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --password                                 | Password to connect (will use 'naviseccli').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --scope                                    | User scope to connect (will use 'naviseccli'. Default: '0'(global)).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeout                                  | Set timeout for system command (default: '30').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --ssh-backend                              | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --sshcli-command                           | ssh command (default: 'ssh').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --sshcli-path                              | ssh command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sshcli-option                            | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-command                            | plink command (default: 'plink').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-path                               | plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --plink-option                             | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

| Option               | Description                                                                                                |
|:---------------------|:-----------------------------------------------------------------------------------------------------------|
| --cache-command      | Set cache command (default: 'getcache').                                                                   |
| --cache-options      | Set option for cache command (default: '-pdp -state -mirror').                                             |
| --warning            | Warning threshold in percent (for dirty cache).                                                            |
| --critical           | Critical threshold in percent (for dirty cache).                                                           |
| --threshold-overload | Set to overload default threshold value. Example: --threshold-overload='read\_cache:(enabled)=critical'    |

</TabItem>
<TabItem value="Controller" label="Controller">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold. Can be: 'busy', 'read-iops', 'write-iops'.                                                                                                                                                                                 |
| --critical-*           | Critical threshold. Can be: 'busy', 'read-iops', 'write-iops'.                                                                                                                                                                                |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold. Can be: 'read-errors', 'write-errors', 'read-io', 'write-io', 'utils'.                                                                                                                                                     |
| --critical-*           | Critical threshold. Can be: 'read-errors', 'write-errors', 'read-io', 'write-io', 'utils'.                                                                                                                                                    |
| --filter-disk          | Filter Disk (regexp can be used). Example: 1\_7\_14 (\[BUS\]\_\[ENCLOSURE\]\_\[DISK\]).                                                                                                                                                       |
| --filter-raidgroupid   | Filter Raid Group ID (regexp can be used). Example: N/A or a number.                                                                                                                                                                          |

</TabItem>
<TabItem value="Faults" label="Faults">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Option            | Description                                                                                                                                                    |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --getcrus-options | Set option for 'getcrus' command (default: '-all'). '-all' option is for some new flare version.                                                               |
| --component       | Which component to check (default: '.*'). Can be: 'fan', 'lcc', 'psu', 'battery', 'memory', 'cpu', 'iomodule', 'cable'.                                        |
| --filter          | Exclude the items given as a comma-separated list (example: --filter=lcc --filter=fan). You can also exclude items from specific instances: --filter=fan,1.2   |
| --no-component    | Define the expected status if no components are found (default: critical).                                                                                     |

</TabItem>
<TabItem value="Hba-State" label="Hba-State">

| Option          | Description                                                                                                                                                                                                           |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-server | Set server to check (not set, means 'all').                                                                                                                                                                           |
| --filter-uid    | Set hba uid to check (not set, means 'all').                                                                                                                                                                          |
| --path-status   | Set how many paths must be connected (can be defined multiple times). Syntax: \[WARNING\],\[CRITICAL\],filter\_uid,filter\_server Example: ,@0:1,.*,.* - Means all servers must have at least two paths connected.    |

</TabItem>
<TabItem value="Port-State" label="Port-State">

| Option        | Description                                        |
|:--------------|:---------------------------------------------------|
| --filter-name | Set SP Name to check (not set, means 'all').       |
| --filter-id   | Set SP port ID to check (not set, means 'all').    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_emc_clariion.pl \
	--plugin=storage::emc::clariion::plugin \
	--custommode=clariion \
	--help
```
