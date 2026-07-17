---
id: hardware-storage-emc-unisphere-restapi
title: EMC Unisphere Rest API
description: "Monitor Dell EMC Unisphere storage systems via REST API: hardware components, storage pools, replications, and storage resources."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **EMC Unisphere Rest API** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **EMC Unisphere Rest API** brings a host template:

* **HW-Storage-EMC-Unisphere-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-EMC-Unisphere-Restapi-custom" label="HW-Storage-EMC-Unisphere-Restapi-custom">

| Service Alias     | Service Template                                          | Service Description          | Discovery  |
|:------------------|:----------------------------------------------------------|:-----------------------------|:----------:|
| Hardware-Global   | HW-Storage-EMC-Unisphere-Hardware-Global-Restapi-custom   | Check hardware               |            |
| Pools             | HW-Storage-EMC-Unisphere-Pools-Restapi-custom             | Check pools                  | X          |
| Replications      | HW-Storage-EMC-Unisphere-Replications-Restapi-custom      | Check replications resources | X          |
| Storage-Resources | HW-Storage-EMC-Unisphere-Storage-Resources-Restapi-custom | Check storage resources      | X          |

> The services listed above are created automatically when the **HW-Storage-EMC-Unisphere-Restapi-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                          | Description                                               |
|:---------------------------------------------------|:----------------------------------------------------------|
| HW-Storage-EMC-Unisphere-Restapi-Pools             | Discover pools and monitor them |
| HW-Storage-EMC-Unisphere-Restapi-Replications      | Discover replication resources and monitor their status |
| HW-Storage-EMC-Unisphere-Restapi-Storage-Resources | Discover storage resources and monitor them |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Hardware-Global" label="Hardware-Global">

| Name                                     | Unit |
|:----------------------------------------|:------|
| battery.status                                  | N/A   |
| disk.status           | N/A     |
| fan.status            | N/A     |
| iomodule.status      | N/A     |
| memmodule.status      | N/A     |
| psu.status | N/A     |
| dpe.status                                  | N/A   |
| ssd.status           | N/A     |
| sp.status            | N/A     |

</TabItem>
<TabItem value="Pools" label="Pools">

| Name                                    | Unit  |
|:----------------------------------------|:------|
| status                                  | N/A   |
| *pool*#pool.space.usage.bytes           | B     |
| *pool*#pool.space.free.bytes            | B     |
| *pool*#pool.space.usage.percentage      | %     |
| *pool*#pool.subscribed.usage.bytes      | B     |
| *pool*#pool.subscribed.usage.percentage | %     |

</TabItem>
<TabItem value="Replications" label="Replications">

| Name               | Unit  |
|:-------------------|:------|
| health-status      | N/A   |
| replication-status | N/A   |

</TabItem>
<TabItem value="Storage-Resources" label="Storage-Resources">

| Name                                             | Unit  |
|:-------------------------------------------------|:------|
| status                                           | N/A   |
| status                                           | N/A   |
| *sr1*#storageresource.space.usage.bytes          | B     |
| *sr2*#storageresource.space.usage.bytes          | B     |
| *sr1*#storageresource.space.free.bytes           | B     |
| *sr2*#storageresource.space.free.bytes           | B     |
| *sr1*#storageresource.space.usage.percentage     | %     |
| *sr2*#storageresource.space.usage.percentage     | %     |
| *sr1*#storageresource.allocated.usage.bytes      | B     |
| *sr2*#storageresource.allocated.usage.bytes      | B     |
| *sr1*#storageresource.allocated.usage.percentage | %     |
| *sr2*#storageresource.allocated.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

An API username and password are required to monitor EMC Unisphere using its REST API.

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
dnf install centreon-pack-hardware-storage-emc-unisphere-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-emc-unisphere-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-emc-unisphere-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-emc-unisphere-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **EMC Unisphere Rest API** connector through
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
dnf install centreon-plugin-Hardware-Storage-Emc-Unisphere-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Emc-Unisphere-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-emc-unisphere-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Emc-Unisphere-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-EMC-Unisphere-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                          | Default value     | Mandatory   |
|:----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | EMC Unisphere API username                                                                           |                   | X           |
| APIPASSWORD     | EMC Unisphere API password                                                                           |                   | X           |
| APIPROTO        | Specify https if needed (default: 'https')                                                           | https             |             |
| APIPORT         | Port used (default: 443)                                                                             | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Hardware-Global" label="Hardware-Global">

| Macro        | Description                                                                                                                    | Default value     | Mandatory   |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'disk', 'fan', 'iomodule', 'memmodule', 'psu', 'dpe', 'battery', 'ssd', 'sp' | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                             | --verbose         |             |

</TabItem>
<TabItem value="Pools" label="Pools">

| Macro                  | Description                                                                                                                                                                                   | Default value                                       | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{display\}                            | %\{status\} =~ /unknown/i                           |             |
| FILTERNAME             | Filter pool name (can be a regexp)                                                                                                                                                            |                                                     |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{status\}, %\{display\}           | %\{status\} =~ /ok\_but\|degraded\|minor/i          |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{status\}, %\{display\} | %\{status\} =~ /major\|critical\|non\_recoverable/i |             |
| WARNINGSUBSCRIBED      | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALSUBSCRIBED     | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGSUBSCRIBEDPRCT  | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALSUBSCRIBEDPRCT | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGUSAGE           | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGE          | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGUSAGEFREE       | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGEFREE      | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGUSAGEPRCT       | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGEPRCT      | Threshold                                                                                                                                                                                     |                                                     |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                            | --verbose                                           |             |

</TabItem>
<TabItem value="Replications" label="Replications">

| Macro                     | Description                                                                                                                                                                                                   | Default value                                               | Mandatory   |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|:-----------:|
| FILTERNAME                | Filter replication name (can be a regexp)                                                                                                                                                                     |                                                             |             |
| WARNINGHEALTHSTATUS       | Define the conditions to match for the status to be WARNING (default: '%\{health\_status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{health\_status\}, %\{display\}           | %\{health\_status\} =~ /ok\_but\|degraded\|minor/i          |             |
| CRITICALHEALTHSTATUS      | Define the conditions to match for the status to be CRITICAL (default: '%\{health\_status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{health\_status\}, %\{display\} | %\{health\_status\} =~ /major\|critical\|non\_recoverable/i |             |
| WARNINGREPLICATIONSTATUS  | Threshold                                                                                                                                                                                                              | %\{repl\_status\} =~ /syncing/i                             |             |
| CRITICALREPLICATIONSTATUS | Threshold                                                                                                                                                                                                              | %\{repl\_status\} =~ /inconsistent/i                        |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                            | --verbose                                                   |             |

</TabItem>
<TabItem value="Storage-Resources" label="Storage-Resources">

| Macro                 | Description                                                                                                                                                                                   | Default value                                       | Mandatory   |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{display\}                            | %\{status\} =~ /unknown/i                           |             |
| FILTERNAME            | Filter name (can be a regexp)                                                                                                                                                                 |                                                     |             |
| WARNINGALLOCATED      | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALALLOCATED     | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGALLOCATEDPRCT  | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALALLOCATEDPRCT | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{status\}, %\{display\}           | %\{status\} =~ /ok\_but\|degraded\|minor/i          |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{status\}, %\{display\} | %\{status\} =~ /major\|critical\|non\_recoverable/i |             |
| WARNINGUSAGE          | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGE         | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGUSAGEFREE      | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGEFREE     | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGUSAGEPRCT      | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGEPRCT     | Threshold                                                                                                                                                                                     |                                                     |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                            | --verbose                                           |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_emc_unisphere_restapi.pl \
	--plugin=storage::emc::unisphere::restapi::plugin \
	--mode=storage-resources \
	--hostname='10.0.0.1' \
	--api-username='' \
	--api-password='' \
	--port='443' \
	--proto='https'  \
	--filter-name='' \
	--unknown-status='%\{status\} =~ /unknown/i' \
	--warning-status='%\{status\} =~ /ok\_but|degraded|minor/i' \
	--critical-status='%\{status\} =~ /major|critical|non\_recoverable/i' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--warning-allocated='' \
	--critical-allocated='' \
	--warning-allocated-prct='' \
	--critical-allocated-prct='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All storage resources are ok | 'sr1#storageresource.space.usage.bytes'=38352B;;;0;total_space 'sr2#storageresource.space.usage.bytes'=47601B;;;0;total_space 'sr1#storageresource.space.free.bytes'=35866B;;;0;total_space 'sr2#storageresource.space.free.bytes'=45950B;;;0;total_space 'sr1#storageresource.space.usage.percentage'=95596%;;;0;100 'sr2#storageresource.space.usage.percentage'=57370%;;;0;100 'sr1#storageresource.allocated.usage.bytes'=35842B;;;0;total_space 'sr2#storageresource.allocated.usage.bytes'=75354B;;;0;total_space 'sr1#storageresource.allocated.usage.percentage'=28973%;;;0;100 'sr2#storageresource.allocated.usage.percentage'=40222%;;;0;100
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
/usr/lib/centreon/plugins/centreon_emc_unisphere_restapi.pl \
	--plugin=storage::emc::unisphere::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                      | Linked service template                                   |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/hardware.pm)]                           | HW-Storage-EMC-Unisphere-Hardware-Global-Restapi-custom   |
| list-pools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/listpools.pm)]                        | Used for service discovery                                |
| list-replications [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/listreplications.pm)]          | Used for service discovery                                |
| list-storage-resources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/liststorageresources.pm)] | Used for service discovery                                |
| pools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/pools.pm)]                                 | HW-Storage-EMC-Unisphere-Pools-Restapi-custom             |
| replications [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/replications.pm)]                   | HW-Storage-EMC-Unisphere-Replications-Restapi-custom      |
| storage-resources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/storageresources.pm)]          | HW-Storage-EMC-Unisphere-Storage-Resources-Restapi-custom |

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
| --hostname                                 |   EMC Unisphere hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-username                             |   EMC Unisphere API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-password                             |   EMC Unisphere API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Hardware-Global" label="Hardware-Global">

| Option               | Description                                                                                                                                                                                                              |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'disk', 'fan', 'iomodule', 'memmodule', 'psu', 'dpe', 'battery', 'ssd', 'sp'.                                                                                        |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='disk,dpe\_disk\_6'                                                                                             |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.   |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                             |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='disk,OK,ok\_but'         |
| --warning            |   Set warning threshold for 'temperature', 'power' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,40'                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'power' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,50'                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                           |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                          |

</TabItem>
<TabItem value="Pools" label="Pools">

| Option                   | Description                                                                                                                                                                                       |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                                                           |
| --filter-name            |   Filter pool name (can be a regexp).                                                                                                                                                             |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{display\}                              |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{status\}, %\{display\}             |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{status\}, %\{display\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'subscribed', 'subscribed-prct'.                                                                                           |

</TabItem>
<TabItem value="Replications" label="Replications">

| Option                   | Description                                                                                                                                                                                                       |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^health'                                                                                                                           |
| --filter-name            |   Filter replication name (can be a regexp).                                                                                                                                                                      |
| --unknown-health-status  |   Define the conditions to match for the status to be UNKNOWN (default: '%\{health\_status\} =~ /unknown/i'). You can use the following variables: %\{health\_status\}, %\{display\}                              |
| --warning-health-status  |   Define the conditions to match for the status to be WARNING (default: '%\{health\_status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{health\_status\}, %\{display\}             |
| --critical-health-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{health\_status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{health\_status\}, %\{display\}   |
| --unknown-repl-status    |   Define the conditions to match for the status to be UNKNOWN (default: '%\{repl\_status\} =~ /unknown/i'). You can use the following variables: %\{repl\_status\}, %\{display\}                                  |
| --warning-repl-status    |   Define the conditions to match for the status to be WARNING (default: '%\{repl\_status\} =~ /syncing/i'). You can use the following variables: %\{repl\_status\}, %\{display\}                                  |
| --critical-repl-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{repl\_status\} =~ /inconsistent/i'). You can use the following variables: %\{repl\_status\}, %\{display\}                            |

</TabItem>
<TabItem value="Storage-Resources" label="Storage-Resources">

| Option                   | Description                                                                                                                                                                                       |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                                                           |
| --filter-name            |   Filter name (can be a regexp).                                                                                                                                                                  |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{display\}                              |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{status\}, %\{display\}             |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{status\}, %\{display\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'allocated', 'allocated-prct'.                                                                                             |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_emc_unisphere_restapi.pl \
	--plugin=storage::emc::unisphere::restapi::plugin \
	--mode=storage-resources \
	--help
```
