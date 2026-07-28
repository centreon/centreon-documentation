---
id: virtualization-proxmox-ve-restapi
title: Proxmox VE Rest API
description: "Monitor Proxmox VE via REST API: node, storage, and VM usage metrics with Centreon's monitoring connector."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Proxmox VE** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Proxmox VE** brings a host template:

* **Virt-Proxmox-Ve-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Virt-Proxmox-Ve-Restapi-custom" label="Virt-Proxmox-Ve-Restapi-custom">

| Service Alias | Service Template                             | Service Description  | Discovery  |
|:--------------|:---------------------------------------------|:---------------------|:----------:|
| Node-Usage    | Virt-Proxmox-Ve-Node-Usage-Restapi-custom    | Check node usage     | X          |
| Storage-Usage | Virt-Proxmox-Ve-Storage-Usage-Restapi-custom | Check stockage usage | X          |
| Vm-Usage      | Virt-Proxmox-Ve-Vm-Usage-Restapi-custom      | Check VM usage       | X          |

> The services listed above are created automatically when the **Virt-Proxmox-Ve-Restapi-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                       |
|:----------------|:----------------------------------|
| Proxmox VM      | Discover Proxmox virtual machines |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                            | Description                                       |
|:-------------------------------------|:--------------------------------------------------|
| Virt-Proxmox-Ve-Restapi-Node-Name    | Discover nodes and monitor utilization            |
| Virt-Proxmox-Ve-Restapi-Storage-Name | Discover storages and monitor utilization         |
| Virt-Proxmox-Ve-Restapi-Vm-Name      | Discover virtual machines and monitor utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Node-Usage" label="Node-Usage">

| Name                                    | Unit  |
|:----------------------------------------|:------|
| node-status                             | N/A   |
| *nodes*#node.cpu.utilization.percentage | %     |
| *nodes*#node.memory.usage.bytes         | B     |
| *nodes*#node.filesystem.usage.bytes     | B     |
| *nodes*#node.swap.usage.bytes           | B     |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Name                                  | Unit  |
|:--------------------------------------|:------|
| storage-status                        | N/A   |
| *disk_name*#storage.space.usage.bytes | B     |

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Name                                 | Unit  |
|:-------------------------------------|:------|
| vm-status                            | N/A   |
| *vms1*#vm.cpu.utilization.percentage | %     |
| *vms2*#vm.cpu.utilization.percentage | %     |
| *vms1*#vm.memory.usage.bytes         | B     |
| *vms2*#vm.memory.usage.bytes         | B     |
| *vms1*#vm.read.usage.iops            | iops  |
| *vms2*#vm.read.usage.iops            | iops  |
| *vms1*#vm.write.usage.iops           | iops  |
| *vms2*#vm.write.usage.iops           | iops  |
| *vms1*#vm.swap.usage.bytes           | B     |
| *vms2*#vm.swap.usage.bytes           | B     |
| *vms1*#vm.traffic.in.bitspersecond   | b/s   |
| *vms2*#vm.traffic.in.bitspersecond   | b/s   |
| *vms1*#vm.traffic.out.bitspersecond  | b/s   |
| *vms2*#vm.traffic.out.bitspersecond  | b/s   |

</TabItem>
</Tabs>

## Prerequisites

To monitor, a user with the following "read" privileges is required:

<Tabs groupId="sync">
<TabItem value="Proxmox VE < 9.1" label="Proxmox VE < 9.1">

`VM.Monitor`, `VM.Audit`, `Datastore.Audit`, `Sys.Audit`, `Sys.Syslog`

</TabItem>
<TabItem value="Proxmox VE ≥ 9.1" label="Proxmox VE ≥ 9.1">

`VM.Audit`, `Datastore.Audit`, `Sys.Audit`, `Sys.Syslog`, `Sys.Modify`

> The `VM.Monitor` privilege has been removed. Replace it with `Sys.Audit` for basic access. Some advanced commands require the `Sys.Modify` privilege.

</TabItem>
</Tabs>

Please refer to their [official documentation](https://pve.proxmox.com/wiki/Proxmox_VE_API).

IP address and OS information discovery for virtual machines requires the [Qemu-guest-agent](https://pve.proxmox.com/wiki/Qemu-guest-agent) agent to be installed on them.

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
dnf install centreon-pack-virtualization-proxmox-ve-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-proxmox-ve-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-proxmox-ve-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-proxmox-ve-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Proxmox VE** connector through
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
dnf install centreon-plugin-Virtualization-Proxmox-Ve-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Proxmox-Ve-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-virtualization-proxmox-ve-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Proxmox-Ve-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Virt-Proxmox-Ve-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                  | Description                                                                                                                              | Default value | Mandatory |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROXMOXAPIUSERNAME     | Set Proxmox VE username                                                                                                                  |               |     X     |
| PROXMOXAPIPASSWORD     | Set Proxmox VE password                                                                                                                  |               |     X     |
| PROXMOXAPIPROTO        | Specify https if needed                                                                                                                  | https         |           |
| PROXMOXAPIPORT         | Set Proxmox VE port                                                                                                                      | 8006          |           |
| PROXMOXAPIREALM        | Set Proxmox VE realm (pam, pve or custom)                                                                                                | pam           |           |
| PROXMOX_TOKEN_LIFETIME    | Token lifetime in seconds                                                                                                                          | 5400              |             |
| PROXMOX_RELOAD_CACHE_TIME | Time to reload the cache in seconds                                                                                                                | 7200              |             |
| PROXMOXAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Node-Usage" label="Node-Usage">

| Macro          | Description                                                                                                                            | Default value     | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME     | Filter by node name (can be a regexp)                                                                                                  | .*                |             |
| WARNINGCPU     | Threshold                                                                                                                              | 80                |             |
| CRITICALCPU    | Threshold                                                                                                                              | 90                |             |
| WARNINGFS      | Threshold                                                                                                                              | 80                |             |
| CRITICALFS     | Threshold                                                                                                                              | 90                |             |
| WARNINGMEMORY  | Threshold                                                                                                                              | 80                |             |
| CRITICALMEMORY | Threshold                                                                                                                              | 90                |             |
| WARNINGSWAP    | Threshold                                                                                                                              | 50                |             |
| CRITICALSWAP   | Threshold                                                                                                                              | 70                |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Macro           | Description                                                                                                                            | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME      | Filter by storage name (can be a regexp)                                                                                               | .*                |             |
| NODEID          | Exact node ID                                                                                                                          |                   |             |
| NODENAME        | Exact node name                                                                                                                        |                   |             |
| WARNINGSTORAGE  | Threshold                                                                                                                              | 80                |             |
| CRITICALSTORAGE | Threshold                                                                                                                              | 90                |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Macro              | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME         | Filter by vm name (can be a regexp)                                                                                                    | .*                |             |
| EXCLUDENAME        | Exclude by virtual machine name (can be a regexp)                                                                                      |                   |             |
| INCLUDENODENAME    | Filter only virtual machine running on specified node name (can be a regexp)                                                           |                   |             |
| EXCLUDENODENAME    | Exclude virtual machine running on specified node name (can be a regexp)                                                               |                   |             |
| WARNINGCPU         | Threshold                                                                                                                              | 80                |             |
| CRITICALCPU        | Threshold                                                                                                                              | 90                |             |
| WARNINGMEMORY      | Threshold                                                                                                                              | 80                |             |
| CRITICALMEMORY     | Threshold                                                                                                                              | 90                |             |
| WARNINGREADIOPS    | Threshold                                                                                                                              |                   |             |
| CRITICALREADIOPS   | Threshold                                                                                                                              |                   |             |
| WARNINGTRAFFICIN   | Threshold                                                                                                                              |                   |             |
| CRITICALTRAFFICIN  | Threshold                                                                                                                              |                   |             |
| WARNINGTRAFFICOUT  | Threshold                                                                                                                              |                   |             |
| CRITICALTRAFFICOUT | Threshold                                                                                                                              |                   |             |
| WARNINGWRITEIOPS   | Threshold                                                                                                                              |                   |             |
| CRITICALWRITEIOPS  | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --use-name        |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
	--plugin apps::proxmox::ve::restapi::plugin \
	--mode=storage \
	--hostname=10.0.0.1 \
	--api-username='XXXX' \
	--api-password='XXXX' \
	--proto='https' \
	--port='8006' \
	--realm='pam'  \
	--reload-cache-time='7200' \
	--token-lifetime='5400'  \
	--filter-name='.*' \
	--node-id='' \
	--node-name='' \
	--warning-storage='80' \
	--critical-storage='90' \
```

The expected command output is shown below:

```bash
OK: Storage 'storage/nuc/local' state: available, space total: 217.61 GB used: 145.86 GB (67.03%) free: 71.76 GB (32.97%) | 'storage/nuc/local#storage.space.usage.bytes'=156610641920B;0:186927058124;0:210292940390;0;233658822656
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
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
	--plugin apps::proxmox::ve::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                               | Linked service template                      |
|:-----------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/discovery.pm)]        | Used for host discovery                      |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/listnodes.pm)]       | Used for service discovery                   |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/liststorages.pm)] | Used for service discovery                   |
| list-vms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/listvms.pm)]           | Used for service discovery                   |
| node-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/nodeusage.pm)]       | Virt-Proxmox-Ve-Node-Usage-Restapi-custom    |
| storage-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/storageusage.pm)] | Virt-Proxmox-Ve-Storage-Usage-Restapi-custom |
| version [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/version.pm)]            | Not used in this Monitoring Connector        |
| vm-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/vmusage.pm)]           | Virt-Proxmox-Ve-Vm-Usage-Restapi-custom      |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)' |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         || --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --hostname                                 | Set hostname or IP of Proxmox VE Cluster node                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --port                                     | Set Proxmox VE Port (default: '8006')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    | Specify https if needed (default: 'https').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-username                             | Set Proxmox VE username                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-password                             | Set Proxmox VE password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --realm                                    | Set Proxmox VE realm (pam, pve or custom) (default: 'pam').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --reload-cache-time                        | Time to reload the cache in seconds (default: '7200').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --token-lifetime                           | Token lifetime in seconds (default: '5400').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  | Threshold for HTTP timeout.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Node-Usage" label="Node-Usage">

| Option                   | Description                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| --node-id                |   Exact node ID.                                                                                                               |
| --node-name              |   Exact node name (if multiple names: names separated by ':').                                                                 |
| --use-name               |   Use node name for perfdata and display.                                                                                      |
| --filter-name            |   Filter by node name (can be a regexp).                                                                                       |
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^node-status$'                                  |
| --warning-* --critical-* |   Thresholds. Can be: 'cpu' (%), 'memory' (%), 'swap' (%), 'fs' (%).                                                           |
| --warning-node-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{state\}.     |
| --critical-node-status   |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{state\}.    |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Option                    | Description                                                                                                                   |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         |   Only display some counters (regexp can be used). Example: --filter-counters='^storage-status$'                              |
| --storage-id              |   Exact storage ID.                                                                                                           |
| --storage-name            |   Exact storage name (if multiple names: names separated by ':').                                                             |
| --use-name                |   Use storage name for perfdata and display.                                                                                  |
| --filter-name             |   Filter by storage name (can be a regexp).                                                                                   |
| --node-id                 |   Exact node ID.                                                                                                              |
| --node-name               |   Exact node name.                                                                                                            |
| --warning-storage-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{state\}.    |
| --critical-storage-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{state\}.   |
| --warning-* --critical-*  |   Thresholds. Can be: 'storage' (%).                                                                                          |

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Option               | Description                                                                                                                                 |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-id              |   Exact VM ID.                                                                                                                              |
| --vm-name            |   Exact VM name (if multiple names: names separated by ':').                                                                                |
| --use-name           |   Use VM name for perfdata and display.                                                                                                     |
| --filter-name        |   Filter by vm name (can be a regexp).                                                                                                      |
| --exclude-name       |   Exclude by virtual machine name (can be a regexp).                                                                                        |
| --include-node-name  |   Filter only virtual machine running on specified node name (can be a regexp).                                                             |
| --exclude-node-name  |   Exclude virtual machine running on specified node name (can be a regexp).                                                                 |
| --filter-counters    |   Only display some counters (regexp can be used). Example: --filter-counters='^vm-status$'                                                 |
| --warning-*          |   Warning threshold. Can be: 'read-iops', 'write-iops', 'traffic-in', 'traffic-out', 'cpu' (%), 'memory' (%), 'swap' (%).                   |
| --critical-*         |   Critical threshold. Can be: 'read-iops', 'write-iops', 'traffic-in', 'traffic-out', 'cpu' (%), 'memory' (%), 'swap' (%).                  |
| --warning-vm-status  |   Define the conditions to match for the status to be WARNING (default: -) You can use the following variables: %\{name\}, %\{state\}.      |
| --critical-vm-status |   Define the conditions to match for the status to be CRITICAL (default: -). You can use the following variables: %\{name\}, %\{state\}.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
	--plugin apps::proxmox::ve::restapi::plugin \
	--mode=vm-usage \
	--help
```
