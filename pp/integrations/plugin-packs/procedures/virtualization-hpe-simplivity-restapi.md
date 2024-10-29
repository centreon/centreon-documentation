---
id: virtualization-hpe-simplivity-restapi
title: HPE Simplivity Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **HPE Simplivity Rest API** brings a host template:

* **Virt-Hpe-Simplivity-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Virt-Hpe-Simplivity-Restapi-custom" label="Virt-Hpe-Simplivity-Restapi-custom">

| Service Alias      | Service Template                                      | Service Description      | Discovery  |
|:-------------------|:------------------------------------------------------|:-------------------------|:----------:|
| Hosts              | Virt-Hpe-Simplivity-Hosts-Restapi-custom              | Check hosts              | X          |
| Omnistack-Clusters | Virt-Hpe-Simplivity-Omnistack-Clusters-Restapi-custom | Check Omnistack clusters |            |

> The services listed above are created automatically when the **Virt-Hpe-Simplivity-Restapi-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias    | Service Template                                    | Service Description    |
|:-----------------|:----------------------------------------------------|:-----------------------|
| Virtual-Machines | Virt-Hpe-Simplivity-Virtual-Machines-Restapi-custom | Check virtual machines |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                             | Description                                       |
|:--------------------------------------|:--------------------------------------------------|
| Virt-Hpe-Simplivity-Restapi-Host-Name | Discover hosts and monitor their status and usage |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| hosts.alive.count                       | count |
| hosts.faulty.count                      | count |
| hosts.managed.count                     | count |
| hosts.removed.count                     | count |
| hosts.suspected.count                   | count |
| hosts.unknown.count                     | count |
| *hosts*~host-status                     | N/A   |
| *hosts*~host.components.green.count     | count |
| *hosts*~host.components.yellow.count    | count |
| *hosts*~host.components.red.count       | count |
| *hosts*~host.components.unknown.count   | count |
| *hosts*~raid-status                     | N/A   |
| *hosts*~*ldrives*#logical-drive-status  | N/A   |
| *hosts*~*pdrives*#physical-drive-status | N/A   |

</TabItem>
<TabItem value="Omnistack-Clusters" label="Omnistack-Clusters">

| Metric name                                            | Unit  |
|:-------------------------------------------------------|:------|
| *clusters*~omnistack_cluster.ratio.deduplication.count | count |
| *clusters*~omnistack_cluster.ratio.compression.count   | count |
| *clusters*~omnistack_cluster.ratio.efficiency.count    | count |
| *clusters*~omnistack_cluster.space.usage.bytes         | B     |
| *clusters*~omnistack_cluster.space.free.bytes          | B     |
| *clusters*~omnistack_cluster.space.usage.percentage    | %     |

</TabItem>
<TabItem value="Virtual-Machines" label="Virtual-Machines">

| Metric name                                 | Unit  |
|:--------------------------------------------|:------|
| *vm*~ha-status                              | N/A   |
| *vm*~virtual_machine.space.usage.bytes      | B     |
| *vm*~virtual_machine.space.free.bytes       | B     |
| *vm*~virtual_machine.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

To control your HPE Simplivity, the Rest API must be configured:
* https://developer.hpe.com/platform/hpe-simplivity/home/

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
dnf install centreon-pack-virtualization-hpe-simplivity-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-hpe-simplivity-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-hpe-simplivity-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-hpe-simplivity-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **HPE Simplivity Rest API** connector through
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
dnf install centreon-plugin-Virtualization-Hpe-Simplivity-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Hpe-Simplivity-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-virtualization-hpe-simplivity-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Hpe-Simplivity-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Virt-Hpe-Simplivity-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                    | Description                                                                                                                              | Default value     | Mandatory   |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OMNISTACKAPIUSERNAME     | OmniStack API username                                                                                                                   |                   | X           |
| OMNISTACKAPIPASSWORD     | OmniStack API password                                                                                                                   |                   | X           |
| OMNISTACKAPIPROTO        | Specify https if needed                                                                                                                  | https             |             |
| OMNISTACKAPIPORT         | OmniStack API port                                                                                                                       | 443               |             |
| OMNISTACKAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Macro                         | Description                                                                                                                            | Default value            | Mandatory   |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| UNKNOWNRAIDSTATUS             | Set unknown threshold for component status. You can use the following variables: %{status}, %{name}                                    | %{status} =~ /unknown/   |             |
| UNKNOWNPHYSICALDRIVESTATUS    | Set unknown threshold for component status. You can use the following variables: %{status}, %{name}                                    | %{status} =~ /unknown/   |             |
| UNKNOWNLOGICALDRIVESTATUS     | Set unknown threshold for component status. You can use the following variables: %{status}, %{name}                                    | %{status} =~ /unknown/   |             |
| UNKNOWNHOSTSTATUS             | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                   | %{status} =~ /unknown/   |             |
| FILTERNAME                    | Filter hosts by name                                                                                                                   |                          |             |
| WARNINGHOSTCOMPONENTSGREEN    | Thresholds                                                                                                                             |                          |             |
| CRITICALHOSTCOMPONENTSGREEN   | Thresholds                                                                                                                             |                          |             |
| WARNINGHOSTCOMPONENTSRED      | Thresholds                                                                                                                             |                          |             |
| CRITICALHOSTCOMPONENTSRED     | Thresholds                                                                                                                             |                          |             |
| WARNINGHOSTCOMPONENTSUNKNOWN  | Thresholds                                                                                                                             |                          |             |
| CRITICALHOSTCOMPONENTSUNKNOWN | Thresholds                                                                                                                             |                          |             |
| WARNINGHOSTCOMPONENTSYELLOW   | Thresholds                                                                                                                             |                          |             |
| CRITICALHOSTCOMPONENTSYELLOW  | Thresholds                                                                                                                             |                          |             |
| WARNINGHOSTSALIVE             | Thresholds                                                                                                                             |                          |             |
| CRITICALHOSTSALIVE            | Thresholds                                                                                                                             |                          |             |
| WARNINGHOSTSFAULTY            | Thresholds                                                                                                                             |                          |             |
| CRITICALHOSTSFAULTY           | Thresholds                                                                                                                             |                          |             |
| WARNINGHOSTSMANAGED           | Thresholds                                                                                                                             |                          |             |
| CRITICALHOSTSMANAGED          | Thresholds                                                                                                                             |                          |             |
| WARNINGHOSTSREMOVED           | Thresholds                                                                                                                             |                          |             |
| CRITICALHOSTSREMOVED          | Thresholds                                                                                                                             |                          |             |
| WARNINGHOSTSSUSPECTED         | Thresholds                                                                                                                             |                          |             |
| CRITICALHOSTSSUSPECTED        | Thresholds                                                                                                                             |                          |             |
| WARNINGHOSTSTATUS             | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                   | %{status} =~ /suspected/ |             |
| CRITICALHOSTSTATUS            | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                  | %{status} =~ /faulty/    |             |
| WARNINGHOSTSUNKNOWN           | Thresholds                                                                                                                             |                          |             |
| CRITICALHOSTSUNKNOWN          | Thresholds                                                                                                                             |                          |             |
| WARNINGLOGICALDRIVESTATUS     | Set warning threshold for component status. You can use the following variables: %{status}, %{name}                                    | %{status} =~ /yellow/    |             |
| CRITICALLOGICALDRIVESTATUS    | Set critical threshold for component status. You can use the following variables: %{status}, %{name}                                   | %{status} =~ /red/       |             |
| WARNINGPHYSICALDRIVESTATUS    | Set warning threshold for component status. You can use the following variables: %{status}, %{name}                                    | %{status} =~ /yellow/    |             |
| CRITICALPHYSICALDRIVESTATUS   | Set critical threshold for component status. You can use the following variables: %{status}, %{name}                                   | %{status} =~ /red/       |             |
| WARNINGRAIDSTATUS             | Set warning threshold for component status. You can use the following variables: %{status}, %{name}                                    | %{status} =~ /yellow/    |             |
| CRITICALRAIDSTATUS            | Set critical threshold for component status. You can use the following variables: %{status}, %{name}                                   | %{status} =~ /red/       |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                |             |

</TabItem>
<TabItem value="Omnistack-Clusters" label="Omnistack-Clusters">

| Macro                      | Description                                                                                                                            | Default value     | Mandatory   |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                 | Filter clusters by name                                                                                                                |                   |             |
| WARNINGRATIOCOMPRESSION    | Thresholds                                                                                                                             |                   |             |
| CRITICALRATIOCOMPRESSION   | Thresholds                                                                                                                             |                   |             |
| WARNINGRATIODEDUPLICATION  | Thresholds                                                                                                                             |                   |             |
| CRITICALRATIODEDUPLICATION | Thresholds                                                                                                                             |                   |             |
| WARNINGRATIOEFFICIENCY     | Thresholds                                                                                                                             |                   |             |
| CRITICALRATIOEFFICIENCY    | Thresholds                                                                                                                             |                   |             |
| WARNINGSPACEUSAGE          | Thresholds                                                                                                                             |                   |             |
| CRITICALSPACEUSAGE         | Thresholds                                                                                                                             |                   |             |
| WARNINGSPACEUSAGEFREE      | Thresholds                                                                                                                             |                   |             |
| CRITICALSPACEUSAGEFREE     | Thresholds                                                                                                                             |                   |             |
| WARNINGSPACEUSAGEPRCT      | Thresholds                                                                                                                             |                   |             |
| CRITICALSPACEUSAGEPRCT     | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Virtual-Machines" label="Virtual-Machines">

| Macro                  | Description                                                                                                                            | Default value               | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| UNKNOWNHASTATUS        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{ha\_status}, %{vm\_name}           | %{ha\_status} =~ /unknown/  |             |
| FILTERVMNAME           | Filter virtual machines by virtual machine name                                                                                        |                             |             |
| WARNINGHASTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{ha\_status}, %{vm\_name}           | %{ha\_status} =~ /degraded/ |             |
| CRITICALHASTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{ha\_status}, %{vm\_name}          |                             |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                                                             |                             |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                                                             |                             |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                                                             |                             |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                                                             |                             |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                                                             |                             |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                                                             |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
	--plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
	--mode=hosts \
	--hostname='10.0.0.1' \
	--api-username='XXXX' \
	--api-password='XXXX' \
	--proto='https' \
	--port='443'  \
	--filter-name='' \
	--warning-host-components-green='' \
	--critical-host-components-green='' \
	--warning-host-components-yellow='' \
	--critical-host-components-yellow='' \
	--warning-host-components-red='' \
	--critical-host-components-red='' \
	--warning-host-components-unknown='' \
	--critical-host-components-unknown='' \
	--warning-hosts-alive='' \
	--critical-hosts-alive='' \
	--warning-hosts-faulty='' \
	--critical-hosts-faulty='' \
	--warning-hosts-managed='' \
	--critical-hosts-managed='' \
	--warning-hosts-removed='' \
	--critical-hosts-removed='' \
	--warning-hosts-suspected='' \
	--critical-hosts-suspected='' \
	--warning-hosts-unknown='' \
	--critical-hosts-unknown='' \
	--unknown-raid-status='%{status} =~ /unknown/' \
	--warning-raid-status='%{status} =~ /yellow/' \
	--critical-raid-status='%{status} =~ /red/' \
	--unknown-physical-drive-status='%{status} =~ /unknown/' \
	--warning-physical-drive-status='%{status} =~ /yellow/' \
	--critical-physical-drive-status='%{status} =~ /red/' \
	--unknown-logical-drive-status='%{status} =~ /unknown/' \
	--warning-logical-drive-status='%{status} =~ /yellow/' \
	--critical-logical-drive-status='%{status} =~ /red/' \
	--unknown-host-status='%{status} =~ /unknown/' \
	--warning-host-status='%{status} =~ /suspected/' \
	--critical-host-status='%{status} =~ /faulty/' \
	--verbose
```

The expected command output is shown below:

```bash
OK: alive: 86 faulty: 20 managed: 8 removed: 16 suspected: 31 unknown: 48 green: 3 yellow: 42 red: 12 unknown: 6 logical drives are ok physical drives are ok | 'hosts.alive.count'=86;;;;'hosts.faulty.count'=20;;;;'hosts.managed.count'=8;;;;'hosts.removed.count'=16;;;;'hosts.suspected.count'=31;;;;'hosts.unknown.count'=48;;;;'*hosts*~host.components.green.count'=3;;;;'*hosts*~host.components.yellow.count'=42;;;;'*hosts*~host.components.red.count'=12;;;;'*hosts*~host.components.unknown.count'=6;;;;
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
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
	--plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                            | Linked service template                               |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/virtualization/hpe/simplivity/restapi/mode/discovery.pm)]                  | Not used in this Monitoring Connector                 |
| hosts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/virtualization/hpe/simplivity/restapi/mode/hosts.pm)]                          | Virt-Hpe-Simplivity-Hosts-Restapi-custom              |
| list-hosts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/virtualization/hpe/simplivity/restapi/mode/listhosts.pm)]                 | Used for service discovery                            |
| omnistack-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/virtualization/hpe/simplivity/restapi/mode/omnistackclusters.pm)] | Virt-Hpe-Simplivity-Omnistack-Clusters-Restapi-custom |
| virtual-machines [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/virtualization/hpe/simplivity/restapi/mode/virtualmachines.pm)]     | Virt-Hpe-Simplivity-Virtual-Machines-Restapi-custom   |

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
| --hostname                                 | OmniStack API hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --port                                     | OmniStack API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-username                             | OmniStack API username                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --api-password                             | OmniStack API password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --timeout                                  | Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Option                           | Description                                                                                                                                                                                                                      |
|:---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name                    | Filter hosts by name.                                                                                                                                                                                                            |
| --unknown-host-status            | Define the conditions to match for the status to be UNKNOWN (default: '%{status} =~ /unknown/'). You can use the following variables: %{status}, %{name}                                                                         |
| --warning-host-status            | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /suspected/'). You can use the following variables: %{status}, %{name}                                                                       |
| --critical-host-status           | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /faulty/'). You can use the following variables: %{status}, %{name}                                                                         |
| --unknown-raid-status            | Set unknown threshold for component status (default: '%{status} =~ /unknown/'). You can use the following variables: %{status}, %{name}                                                                                          |
| --warning-raid-status            | Set warning threshold for component status (default: '%{status} =~ /yellow/'). You can use the following variables: %{status}, %{name}                                                                                           |
| --critical-raid-status           | Set critical threshold for component status (default: '%{status} =~ /red/'). You can use the following variables: %{status}, %{name}                                                                                             |
| --unknown-logical-drive-status   | Set unknown threshold for component status (default: '%{status} =~ /unknown/'). You can use the following variables: %{status}, %{name}                                                                                          |
| --warning-logical-drive-status   | Set warning threshold for component status (default: '%{status} =~ /yellow/'). You can use the following variables: %{status}, %{name}                                                                                           |
| --critical-logical-drive-status  | Set critical threshold for component status (default: '%{status} =~ /red/'). You can use the following variables: %{status}, %{name}                                                                                             |
| --unknown-physical-drive-status  | Set unknown threshold for component status (default: '%{status} =~ /unknown/'). You can use the following variables: %{status}, %{name}                                                                                          |
| --warning-physical-drive-status  | Set warning threshold for component status (default: '%{status} =~ /yellow/'). You can use the following variables: %{status}, %{name}                                                                                           |
| --critical-physical-drive-status | Set critical threshold for component status (default: '%{status} =~ /red/'). You can use the following variables: %{status}, %{name}                                                                                             |
| --warning-* --critical-*         | Thresholds. Can be: 'hosts-alive', 'hosts-faulty', 'hosts-managed', 'hosts-removed', 'hosts-suspected', 'hosts-unknown', 'host-components-green', 'host-components-yellow', 'host-components-red', 'host-components-unknown'.    |

</TabItem>
<TabItem value="Omnistack-Clusters" label="Omnistack-Clusters">

| Option                   | Description                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter clusters by name.                                                                                                                      |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct', 'ratio-compression', 'ratio-deduplication', 'ratio-efficiency'.    |

</TabItem>
<TabItem value="Virtual-Machines" label="Virtual-Machines">

| Option                   | Description                                                                                                                                                         |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-vm-name         | Filter virtual machines by virtual machine name.                                                                                                                    |
| --unknown-ha-status      | Define the conditions to match for the status to be UNKNOWN (default: '%{status} =~ /unknown/'). You can use the following variables: %{ha\_status}, %{vm\_name}    |
| --warning-ha-status      | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /degraded/'). You can use the following variables: %{ha\_status}, %{vm\_name}   |
| --critical-ha-status     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{ha\_status}, %{vm\_name}                                       |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                                                          |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
	--plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
	--mode=hosts \
	--help
```
