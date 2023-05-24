---
id: cloud-azure-compute-virtualmachine
title: Azure Virtual Machine
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Monitoring Connector **Azure Virtual Machine** allows you to monitor Azure instances that are linked to a given Microsoft Azure subscription, using either Azure CLI or Azure RestAPI.

## Pack assets

### Templates

The Monitoring Connector **Azure Virtual Machine** brings a host template:

* **Cloud-Azure-Compute-VirtualMachine**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Compute-VirtualMachine" label="Cloud-Azure-Compute-VirtualMachine">

| Service Alias | Service Template                                 | Service Description         |
|:--------------|:-------------------------------------------------|:----------------------------|
| Cpu-Usage     | Cloud-Azure-Compute-VirtualMachine-Network-Api   | Check CPU usage             |
| Diskio        | Cloud-Azure-Compute-VirtualMachine-Memory-Api    | Check disks I               |
| Health        | Cloud-Azure-Compute-VirtualMachine-Health-Api    | Check virtual machine state |
| Memory        | Cloud-Azure-Compute-VirtualMachine-Diskio-Api    | Check memory usage          |
| Network       | Cloud-Azure-Compute-VirtualMachine-Cpu-Usage-Api | Check network usage         |

> The services listed above are created automatically when the **Cloud-Azure-Compute-VirtualMachine** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                                       | Service Description               |
|:----------------|:-------------------------------------------------------|:----------------------------------|
| Cpu-Credit      | Cloud-Azure-Compute-VirtualMachine-Cpu-Credit-Api      | Check CPU credits usage           |
| Vm-Sizes-Global | Cloud-Azure-Compute-VirtualMachine-Vm-Sizes-Global-Api | Check vitual machines types count |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then appy the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

The Centreon Monitoring Connector **Azure Virtual Machine** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the list of monitored hosts. This provider is named **Microsoft Azure Virtual Machine**.

> This discovery feature is only compatible with the [**api** custom mode. **azcli** is not supported](../getting-started/how-to-guides/azure-credential-configuration.md).

Go to the corresponding chapter to learn more about [discovering hosts automatically](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| azvm.cpu.credits.consumed.count  | count |
| azvm.cpu.credits.remaining.count | count |
| azvm.cpu.utilization.percentage  | %     |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| azvm.cpu.credits.consumed.count  | count |
| azvm.cpu.credits.remaining.count | count |
| azvm.cpu.utilization.percentage  | %     |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Metric name               | Unit  |
|:--------------------------|:------|
| azvm.disk.read.bytes      | B     |
| azvm.disk.write.bytes     | B     |
| azvm.disk.read.persecond  |       |
| azvm.disk.write.persecond |       |

</TabItem>
<TabItem value="Health" label="Health">

Coming soon

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                 | Unit  |
|:----------------------------|:------|
| azvm.memory.available.bytes | B     |

</TabItem>
<TabItem value="Network" label="Network">

| Metric name            | Unit  |
|:-----------------------|:------|
| azvm.network.out.bytes | B     |
| azvm.network.in.bytes  | B     |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

Coming soon

</TabItem>
</Tabs>

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure
on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Azure Virtual Machine** connector through
the **Configuration > Monitoring Connectors Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:

- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet.

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-azure-compute-virtualmachine-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-Compute-VirtualMachine-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory. For example, for this connector, you must define the **AZURECUSTOMMODE** macros (possible values are **api** or **azcli**). Indeed, 2 modes of communication cn be used with this resource: either using the command tool azcli, or by querying the API directly.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory   | Macro              | Description                                                                                | Default                      |
|:------------|:-------------------|:-------------------------------------------------------------------------------------------|:-----------------------------|
|             | AZURECLIENTID      | Set Azure client ID                                                                        |                              |
|             | AZURECLIENTSECRET  | Set Azure client secret                                                                    |                              |
|             | AZURECUSTOMMODE    | Choose a custom mode (either api or azcli)                                                                     | api                          |
|             | AZURERESOURCE      | Set resource name or id                                                                    |                              |
|             | AZURERESOURCEGROUP | Set resource group                                                                         |                              |
|             | AZURESUBSCRIPTION  | Set Azure subscription                                                                     |                              |
|             | AZURETENANT        | Set Azure tenant ID                                                                        |                              |
|             | PROXYURL           | Proxy URL if any                                                                           |                              |
|             | STATUSCRITICAL     | Set critical threshold for status. Can use special variables like: %{status}, %{summary} | %{status} =~ /^Unavailable$/ |
|             | STATUSOK           | Set ok threshold for status. Can use special variables like: %{status}, %{summary}       | %{status} =~ /^Available$/   |
|             | STATUSUNKNOWN      | Set unknown threshold for status. Can use special variables like: %{status}, %{summary}  | %{status} =~ /^Unknown$/     |
|             | STATUSWARNING      | Set warning threshold for status. Can use special variables like: %{status}, %{summary}  |                              |
|             | EXTRAOPTIONS       | Any extra option you may want to add to every command line (e.g. a --verbose flag)          |                              |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory   | Macro              | Description                                                                                | Default                      |
|:------------|:-------------------|:-------------------------------------------------------------------------------------------|:-----------------------------|
|             | AZURECUSTOMMODE    | Choose a custom mode                                                                       | api                          |
|             | AZURERESOURCE      | Set resource name or id                                                                    |                              |
|             | AZURERESOURCEGROUP | Set resource group                                                                         |                              |
|             | AZURESUBSCRIPTION  | Set Azure subscription                                                                     |                              |
|             | PROXYURL           | Proxy URL if any                                                                           |                              |
|             | STATUSCRITICAL     | Set critical threshold for status. Can use special variables like: %{status}, %{summary} | %{status} =~ /^Unavailable$/ |
|             | STATUSOK           | Set ok threshold for status. Can use special variables like: %{status}, %{summary}       | %{status} =~ /^Available$/   |
|             | STATUSUNKNOWN      | Set unknown threshold for status. Can use special variables like: %{status}, %{summary}  | %{status} =~ /^Unknown$/     |
|             | STATUSWARNING      | Set warning threshold for status. Can use special variables like: %{status}, %{summary}  |                              |
|             | EXTRAOPTIONS       | Any extra option you may want to add to every command line (e.g. a --verbose flag)          |                              |

</TabItem>
</Tabs>

> Two methods can be used to define the authentication:
>
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`) in the **AZURERESOURCE** macro.
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Service

Once the service template is applied, fill in the corresponding macros. Some macros are mandatory.

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services).

2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Mandatory   | Macro                       | Description                                                                                                  | Default   |
|:------------|:----------------------------|:-------------------------------------------------------------------------------------------------------------|:----------|
|             | FILTERMETRIC                | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp) | Credits   |
|             | TIMEFRAME                   |                                                                                                              | 900       |
|             | INTERVAL                    |                                                                                                              | PT1M      |
|             | AGGREGATION                 |                                                                                                              | average   |
|             | WARNINGCPUCREDITSCONSUMED   |                                                                                                              |           |
|             | CRITICALCPUCREDITSCONSUMED  |                                                                                                              |           |
|             | WARNINGCPUCREDITSREMAINING  |                                                                                                              |           |
|             | CRITICALCPUCREDITSREMAINING |                                                                                                              |           |
|             | WARNINGCPUUTILIZATION       |                                                                                                              |           |
|             | CRITICALCPUUTILIZATION      |                                                                                                              |           |
|             | EXTRAOPTIONS                |                                                                                                              | --verbose |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Mandatory   | Macro                       | Description                                                                                                  | Default    |
|:------------|:----------------------------|:-------------------------------------------------------------------------------------------------------------|:-----------|
|             | FILTERMETRIC                | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp) | Percentage |
|             | TIMEFRAME                   |                                                                                                              | 900        |
|             | INTERVAL                    |                                                                                                              | PT1M       |
|             | AGGREGATION                 |                                                                                                              | average    |
|             | WARNINGCPUCREDITSCONSUMED   |                                                                                                              |            |
|             | CRITICALCPUCREDITSCONSUMED  |                                                                                                              |            |
|             | WARNINGCPUCREDITSREMAINING  |                                                                                                              |            |
|             | CRITICALCPUCREDITSREMAINING |                                                                                                              |            |
|             | WARNINGCPUUTILIZATION       |                                                                                                              | 80         |
|             | CRITICALCPUUTILIZATION      |                                                                                                              | 90         |
|             | EXTRAOPTIONS                |                                                                                                              | --verbose  |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Mandatory   | Macro                     | Description                                                                                                                               | Default             |
|:------------|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|
|             | TIMEFRAME                 |                                                                                                                                           | 900                 |
|             | INTERVAL                  |                                                                                                                                           | PT1M                |
|             | AGGREGATION               |                                                                                                                                           | average             |
|             | FILTERMETRIC              | Filter metrics (Can be: 'Disk Read Bytes', 'Disk Write Bytes', 'Disk Read Operations/Sec', 'Disk Write Operations/Sec') (Can be a regexp) |                     |
|             | WARNINGREADBYTES          |                                                                                                                                           |                     |
|             | CRITICALREADBYTES         |                                                                                                                                           |                     |
|             | WARNINGREADOPSPERSECOND   |                                                                                                                                           |                     |
|             | CRITICALREADOPSPERSECOND  |                                                                                                                                           |                     |
|             | WARNINGWRITEBYTES         |                                                                                                                                           |                     |
|             | CRITICALWRITEBYTES        |                                                                                                                                           |                     |
|             | WARNINGWRITEOPSPERSECOND  |                                                                                                                                           |                     |
|             | CRITICALWRITEOPSPERSECOND |                                                                                                                                           |                     |
|             | EXTRAOPTIONS              |                                                                                                                                           | --per-sec --verbose |

</TabItem>
<TabItem value="Memory" label="Memory">

| Mandatory   | Macro                   | Description        | Default   |
|:------------|:------------------------|:-------------------|:----------|
|             | TIMEFRAME               |                    | 900       |
|             | INTERVAL                |                    | PT1M      |
|             | AGGREGATION             |                    | average   |
|             | WARNINGMEMORYAVAILABLE  | Warning threshold  |           |
|             | CRITICALMEMORYAVAILABLE | Critical threshold |           |
|             | EXTRAOPTIONS            |                    | --verbose |

</TabItem>
<TabItem value="Network" label="Network">

| Mandatory   | Macro            | Description                                                            | Default             |
|:------------|:-----------------|:-----------------------------------------------------------------------|:--------------------|
|             | TIMEFRAME        |                                                                        | 900                 |
|             | INTERVAL         |                                                                        | PT1M                |
|             | AGGREGATION      |                                                                        | average             |
|             | FILTERMETRIC     | Filter metrics (Can be: 'Network In', 'Network Out') (Can be a regexp) |                     |
|             | WARNINGBYTESIN   |                                                                        |                     |
|             | CRITICALBYTESIN  |                                                                        |                     |
|             | WARNINGBYTESOUT  |                                                                        |                     |
|             | CRITICALBYTESOUT |                                                                        |                     |
|             | EXTRAOPTIONS     |                                                                        | --per-sec --verbose |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

| Mandatory   | Macro        | Description                                                                                                             | Default   |
|:------------|:-------------|:------------------------------------------------------------------------------------------------------------------------|:----------|
|             | FILTERTYPE   | Filter by virtual machine type (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'gpu', 'high\_performance') | .*        |
|             | FILTERSIZE   | Filter by virtual machine size (regexp)                                                                                 | .*        |
|             | EXTRAOPTIONS |                                                                                                                         | --verbose |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector is able to monitor an Azure instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--mode=cpu \
	--custommode='' \
	--resource='' \
	--resource-group='' \
	--subscription='' \
	--tenant='' \
	--client-id='' \
	--client-secret='' \
	--proxyurl=''  \
	--filter-metric='' \
	--timeframe='' \
	--interval='' \
	--aggregation='' \
	--warning-cpu-credits-remaining='' \
	--critical-cpu-credits-remaining='' \
	--warning-cpu-utilization='' \
	--critical-cpu-utilization='' \
	--warning-cpu-credits-consumed='' \
	--critical-cpu-credits-consumed='' \
	
```

The expected command output is shown below:

```bash
OK: Credits consumed Credits remaining Percentage | 'azvm.cpu.credits.consumed.count'=30;;;0;;;;;  'azvm.cpu.credits.remaining.count'=0;;;0;;;;;  'azvm.cpu.utilization.percentage'=85%;;;0;;;;100;  
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode           | Linked service template                                                                                 |
|:---------------|:--------------------------------------------------------------------------------------------------------|
| cpu            | Cloud-Azure-Compute-VirtualMachine-Cpu-Credit-Api<br />Cloud-Azure-Compute-VirtualMachine-Cpu-Usage-Api |
| discovery      | Used for host discovery                                                                                 |
| diskio         | Cloud-Azure-Compute-VirtualMachine-Diskio-Api                                                           |
| health         | Cloud-Azure-Compute-VirtualMachine-Health-Api                                                           |
| list-resources | Not used in this Monitoring Connector                                                                   |
| memory         | Cloud-Azure-Compute-VirtualMachine-Memory-Api                                                           |
| network        | Cloud-Azure-Compute-VirtualMachine-Network-Api                                                          |
| vm-sizes       | Cloud-Azure-Compute-VirtualMachine-Vm-Sizes-Global-Api                                                  |
| vms-state      | Not used in this Monitoring Connector                                                                   |


### Available custom modes

All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
    --list-custommode
```

The plugin brings the following custom modes:

* api
* azcli

### Available options

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Global |
| --dyn-mode                                 | Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global |
| --list-mode                                | List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global |
| --version                                  | Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --custommode                               | Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global |
| --list-custommode                          | List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Global |
| --multiple                                 | Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Global |
| --pass-manager                             | Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --verbose                                  | Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --debug                                    | Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --filter-perfdata-adv                      | Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output |
| --explode-perfdata-max                     | Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                       | Output |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                                                                                                                                                                                                                                                                   | Output |
| --change-short-output --change-long-output | Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --change-exit                              | Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output |
| --filter-uom                               | Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output |
| --opt-exit                                 | Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --output-ignore-perfdata                   | Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Output |
| --output-ignore-label                      | Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Output |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --float-precision                          | Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').      Microsoft Azure CLI 2.0      To install the Azure CLI 2.0 in a CentOS/RedHat environment :      (As root)      # rpm --import https://packages.microsoft.com/keys/microsoft.asc      # sh -c 'echo -e "\[azure-cli\]\nname=Azure     CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=     1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc"     \> /etc/yum.repos.d/azure-cli.repo'      # yum install azure-cli      (As centreon-engine)      # az login      Go to https://aka.ms/devicelogin and enter the code given by the last     command.      For futher informations, visit     https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-     cli-latest.   | Output |

#### Custom modes options

All custom modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option                 | Description                                                                                                                        | Type         |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --subscription         | Set Azure subscription ID.                                                                                                         | Api          |
| --tenant               | Set Azure tenant ID.                                                                                                               | Api          |
| --client-id            | Set Azure client ID.                                                                                                               | Api          |
| --client-secret        | Set Azure client secret.                                                                                                           | Api          |
| --login-endpoint       | Set Azure login endpoint URL (Default: 'https://login.microsoftonline.com')                                                        | Api          |
| --management-endpoint  | Set Azure management endpoint URL (Default: 'https://management.azure.com')                                                        | Api          |
| --timeframe            | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                           | Api          |
| --interval             | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                    | Api          |
| --aggregation          | Set monitor aggregation (Can be multiple, Can be: 'minimum', 'maximum', 'average', 'total', 'count').                              | Api          |
| --zeroed               | Set metrics value to 0 if none. Usefull when Monitor does not return value when not defined.                                       | Api          |
| --timeout              | Set timeout in seconds (Default: 10).                                                                                              | Api          |
| --http-peer-addr       | Set the address you want to connect (Useful if hostname is only a vhost. no ip resolve)                                            | Http global  |
| --proxyurl             | Proxy URL                                                                                                                          | Http global  |
| --proxypac             | Proxy pac file (can be an url or local file)                                                                                       | Http global  |
| --insecure             | Insecure SSL connections.                                                                                                          | Http global  |
| --http-backend         | Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                | Http global  |
| --ssl-opt              | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                          | Backend lwp  |
| --curl-opt             | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).   | Backend curl |
| --memcached            | Memcached server to use (only one server).                                                                                         | Retention    |
| --redis-server         | Redis server to use (only one server). SYntax: address\[:port\]                                                                    | Retention    |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                            | Retention    |
| --redis-db             | Set Redis database index.                                                                                                          | Retention    |
| --failback-file        | Failback on a local file if redis connection failed.                                                                               | Retention    |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                     | Retention    |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                | Retention    |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                 | Retention    |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                         | Retention    |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                 | Retention    |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                      | Retention    |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                          | Retention    |

</TabItem>
<TabItem value="azcli" label="azcli">

| Option            | Description                                                                                             | Type  |
|:------------------|:--------------------------------------------------------------------------------------------------------|:------|
| --subscription    | Set Azure subscription (Required if logged to several subscriptions).                                   | Azcli |
| --timeframe       | Set timeframe in seconds (i.e. 3600 to check last hour).                                                | Azcli |
| --interval        | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).         | Azcli |
| --aggregation     | Set monitor aggregation (Can be multiple, Can be: 'minimum', 'maximum', 'average', 'total', 'count').   | Azcli |
| --zeroed          | Set metrics value to 0 if none. Usefull when Monitor does not return value when not defined.            | Azcli |
| --timeout         | Set timeout in seconds (Default: 50).                                                                   | Azcli |
| --sudo            | Use 'sudo' to execute the command.                                                                      | Azcli |
| --command         | Command to get information (Default: 'az'). Can be changed if you have output in a file.                | Azcli |
| --command-path    | Command path (Default: none).                                                                           | Azcli |
| --command-options | Command options (Default: none).                                                                        | Azcli |
| --proxyurl        | Proxy URL if any                                                                                        | Azcli |

</TabItem>
</Tabs>

#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Option             | Description                                                                                                                            | Type        |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode |
| --per-sec          | Display the statistics based on a per-second period.                                                                                   | Custom mode |
| --resource         | Set resource name or id (Required).                                                                                                    | Mode        |
| --resource-group   | Set resource group (Required if resource's name is used).                                                                              | Mode        |
| --filter-metric    | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp).                          | Mode        |
| --warning-         | $label$Warning threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')                          | Mode        |
| --critical-        | $label$Critical threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')                         | Mode        |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Option             | Description                                                                                                                            | Type        |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode |
| --per-sec          | Display the statistics based on a per-second period.                                                                                   | Custom mode |
| --resource         | Set resource name or id (Required).                                                                                                    | Mode        |
| --resource-group   | Set resource group (Required if resource's name is used).                                                                              | Mode        |
| --filter-metric    | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp).                          | Mode        |
| --warning-         | $label$Warning threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')                          | Mode        |
| --critical-        | $label$Critical threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')                         | Mode        |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Option             | Description                                                                                                                                  | Type        |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"         | Custom mode |
| --per-sec          | Display the statistics based on a per-second period.                                                                                         | Custom mode |
| --resource         | Set resource name or id (Required).                                                                                                          | Mode        |
| --resource-group   | Set resource group (Required if resource's name is used).                                                                                    | Mode        |
| --filter-metric    | Filter metrics (Can be: 'Disk Read Bytes', 'Disk Write Bytes', 'Disk Read Operations/Sec', 'Disk Write Operations/Sec') (Can be a regexp).   | Mode        |
| --warning-         | $label$Warning thresholds. ($label$ can be: 'read-bytes', 'write-bytes', 'read-ops-persecond', 'write-ops-persecond')                        | Mode        |
| --critical-        | $label$Critical thresholds. ($label$ can be: 'read-bytes', 'write-bytes', 'read-ops-persecond', 'write-ops-persecond')                       | Mode        |
| --per-sec          | Transform Disk Read Bytes & Disk Write Bytes in a persecond value. (Inherited from base class)                                               | Mode        |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                           | Type |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --resource        | Set resource name or id (Required).                                                                                                   | Mode |
| --resource-group  | Set resource group (Required if resource's name is used).                                                                             | Mode |
| --warning-status  | Set warning threshold for status (Default: ''). Can used special variables like: %{status}, %{summary}                                | Mode |
| --critical-status | Set critical threshold for status (Default: '%{status} =~ /^Unavailable$/'). Can used special variables like: %{status}, %{summary}   | Mode |
| --unknown-status  | Set unknown threshold for status (Default: '%{status} =~ /^Unknown$/'). Can used special variables like: %{status}, %{summary}        | Mode |
| --ok-status       | Set ok threshold for status (Default: '%{status} =~ /^Available$/'). Can used special variables like: %{status}, %{summary}           | Mode |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                      | Description                                                                                                                            | Type        |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-dimension          | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode |
| --per-sec                   | Display the statistics based on a per-second period.                                                                                   | Custom mode |
| --resource                  | Set resource name or id (Required).                                                                                                    | Mode        |
| --resource-group            | Set resource group (Required if resource's name is used).                                                                              | Mode        |
| --warning-memory-available  | Warning threshold.                                                                                                                     | Mode        |
| --critical-memory-available | Critical threshold.                                                                                                                    | Mode        |

</TabItem>
<TabItem value="Network" label="Network">

| Option             | Description                                                                                                                            | Type        |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode |
| --per-sec          | Display the statistics based on a per-second period.                                                                                   | Custom mode |
| --resource         | Set resource name or id (Required).                                                                                                    | Mode        |
| --resource-group   | Set resource group (Required if resource's name is used).                                                                              | Mode        |
| --filter-metric    | Filter metrics (Can be: 'Network In', 'Network Out') (Can be a regexp).                                                                | Mode        |
| --warning-         | $label$Warning thresholds ($label$ can be: 'bytes-in', 'bytes-out').                                                                   | Mode        |
| --critical-        | $label$Critical thresholds ($label$ can be: 'bytes-in', 'bytes-out').                                                                  | Mode        |
| --per-sec          | Transform value to obtain Bytes/second. (Inherited from base class)                                                                    | Mode        |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

| Option           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --resource-group | Set resource group (Optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Mode |
| --filter-type    | Filter by virtual machine type (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'gpu', 'high\_performance')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Mode |
| --filter-size    | Filter by virtual machine size (regexp)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Mode |
| --warning-*      | Threshold warning. Can be: 'standard-b1s', 'standard-b1ms', 'standard-b2s', 'standard-b2ms', 'standard-b4ms', 'standard-b8ms', 'standard-d2s-v3', 'standard-d4s-v3', 'standard-d8s-v3', 'standard-d16s-v3', 'standard-d32s-v3', 'standard-d64s-v3', 'standard-d2-v3', 'standard-d4-v3', 'standard-d8-v3', 'standard-d16-v3', 'standard-d32-v3', 'standard-d64-v3', 'standard-ds1-v2', 'standard-ds2-v2', 'standard-ds3-v2', 'standard-ds4-v2', 'standard-ds5-v2', 'standard-d1-v2', 'standard-d2-v2', 'standard-d3-v2', 'standard-d4-v2', 'standard-d5-v2', 'standard-a1-v2', 'standard-a2-v2', 'standard-a4-v2', 'standard-a8-v2', 'standard-a2m-v2', 'standard-a4m-v2', 'standard-a8m-v2', 'standard-f2s-v2', 'standard-f4s-v2', 'standard-f8s-v2', 'standard-f16s-v2', 'standard-f32s-v2', 'standard-f64s-v2', 'standard-f72s-v2', 'standard-f1s', 'standard-f2s', 'standard-f4s', 'standard-f8s', 'standard-f16s', 'standard-f1', 'standard-f2', 'standard-f4', 'standard-f8', 'standard-f16', 'standard-e2s-v3', 'standard-e4s-v3', 'standard-e8s-v3', 'standard-e16s-v3', 'standard-e32s-v3', 'standard-e64s-v3', 'standard-e64is-v3', 'standard-e2-v3', 'standard-e4-v3', 'standard-e8-v3', 'standard-e16-v3', 'standard-e32-v3', 'standard-e64-v3', 'standard-e64i-v3', 'standard-m8ms3', 'standard-m16ms', 'standard-m32ts', 'standard-m32ls', 'standard-m32ms', 'standard-m64s', 'standard-m64ls', 'standard-m64ms', 'standard-m128s', 'standard-m128ms', 'standard-m64', 'standard-m64m', 'standard-m128', 'standard-m128m', 'standard-gs1', 'standard-gs2', 'standard-gs3', 'standard-gs4', 'standard-gs5', 'standard-g1', 'standard-g2', 'standard-g3', 'standard-g4', 'standard-g5', 'standard-ds11-v2', 'standard-ds12-v2', 'standard-ds13-v2', 'standard-ds14-v2', 'standard-ds15-v2', 'standard-d11-v2', 'standard-d12-v2', 'standard-d13-v2', 'standard-d14-v2', 'standard-d15-v2', 'standard-l4s', 'standard-l8s', 'standard-l16s', 'standard-l32s', 'standard-nc6', 'standard-nc12', 'standard-nc24', 'standard-nc24r', 'standard-nc6s-v2', 'standard-nc12s-v2', 'standard-nc24s-v2', 'standard-nc24rs-v2', 'standard-nc6s-v3', 'standard-nc12s-v3', 'standard-nc24s-v3', 'standard-nc24rs-v3', 'standard-nd6s', 'standard-nd12s', 'standard-nd24s', 'standard-nd24rs', 'standard-nv6', 'standard-nv12', 'standard-nv24','standard-h8', 'standard-h16', 'standard-h8m', 'standard-h16m', 'standard-h16r', 'standard-h16mr'.    | Mode |
| --critical-*     | Threshold critical. Can be: 'standard-b1s', 'standard-b1ms', 'standard-b2s', 'standard-b2ms', 'standard-b4ms', 'standard-b8ms', 'standard-d2s-v3', 'standard-d4s-v3', 'standard-d8s-v3', 'standard-d16s-v3', 'standard-d32s-v3', 'standard-d64s-v3', 'standard-d2-v3', 'standard-d4-v3', 'standard-d8-v3', 'standard-d16-v3', 'standard-d32-v3', 'standard-d64-v3', 'standard-ds1-v2', 'standard-ds2-v2', 'standard-ds3-v2', 'standard-ds4-v2', 'standard-ds5-v2', 'standard-d1-v2', 'standard-d2-v2', 'standard-d3-v2', 'standard-d4-v2', 'standard-d5-v2', 'standard-a1-v2', 'standard-a2-v2', 'standard-a4-v2', 'standard-a8-v2', 'standard-a2m-v2', 'standard-a4m-v2', 'standard-a8m-v2', 'standard-f2s-v2', 'standard-f4s-v2', 'standard-f8s-v2', 'standard-f16s-v2', 'standard-f32s-v2', 'standard-f64s-v2', 'standard-f72s-v2', 'standard-f1s', 'standard-f2s', 'standard-f4s', 'standard-f8s', 'standard-f16s', 'standard-f1', 'standard-f2', 'standard-f4', 'standard-f8', 'standard-f16', 'standard-e2s-v3', 'standard-e4s-v3', 'standard-e8s-v3', 'standard-e16s-v3', 'standard-e32s-v3', 'standard-e64s-v3', 'standard-e64is-v3', 'standard-e2-v3', 'standard-e4-v3', 'standard-e8-v3', 'standard-e16-v3', 'standard-e32-v3', 'standard-e64-v3', 'standard-e64i-v3', 'standard-m8ms3', 'standard-m16ms', 'standard-m32ts', 'standard-m32ls', 'standard-m32ms', 'standard-m64s', 'standard-m64ls', 'standard-m64ms', 'standard-m128s', 'standard-m128ms', 'standard-m64', 'standard-m64m', 'standard-m128', 'standard-m128m', 'standard-gs1', 'standard-gs2', 'standard-gs3', 'standard-gs4', 'standard-gs5', 'standard-g1', 'standard-g2', 'standard-g3', 'standard-g4', 'standard-g5', 'standard-ds11-v2', 'standard-ds12-v2', 'standard-ds13-v2', 'standard-ds14-v2', 'standard-ds15-v2', 'standard-d11-v2', 'standard-d12-v2', 'standard-d13-v2', 'standard-d14-v2', 'standard-d15-v2', 'standard-l4s', 'standard-l8s', 'standard-l16s', 'standard-l32s', 'standard-nc6', 'standard-nc12', 'standard-nc24', 'standard-nc24r', 'standard-nc6s-v2', 'standard-nc12s-v2', 'standard-nc24s-v2', 'standard-nc24rs-v2', 'standard-nc6s-v3', 'standard-nc12s-v3', 'standard-nc24s-v3', 'standard-nc24rs-v3', 'standard-nd6s', 'standard-nd12s', 'standard-nd24s', 'standard-nd24rs', 'standard-nv6', 'standard-nv12', 'standard-nv24','standard-h8', 'standard-h16', 'standard-h8m', 'standard-h16m', 'standard-h16r', 'standard-h16mr'.   | Mode |
| --running        | Only check running virtual machines (only with az CLI).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--mode=cpu \
    --help
```
