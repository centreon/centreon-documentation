---
id: cloud-azure-compute-virtualmachine
title: Azure Virtual Machine
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Azure Virtual Machine** brings a host template:

* **Cloud-Azure-Compute-VirtualMachine-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Compute-VirtualMachine-custom" label="Cloud-Azure-Compute-VirtualMachine-custom">

| Service Alias | Service Template                                        | Service Description         |
|:--------------|:--------------------------------------------------------|:----------------------------|
| Cpu-Usage     | Cloud-Azure-Compute-VirtualMachine-Cpu-Usage-Api-custom | Check CPU usage             |
| Diskio        | Cloud-Azure-Compute-VirtualMachine-Diskio-Api-custom    | Check disks I               |
| Health        | Cloud-Azure-Compute-VirtualMachine-Health-Api-custom    | Check virtual machine state |
| Memory        | Cloud-Azure-Compute-VirtualMachine-Memory-Api-custom    | Check memory usage          |
| Network       | Cloud-Azure-Compute-VirtualMachine-Network-Api-custom   | Check network usage         |

> The services listed above are created automatically when the **Cloud-Azure-Compute-VirtualMachine-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                                              | Service Description               |
|:----------------|:--------------------------------------------------------------|:----------------------------------|
| Cpu-Credit      | Cloud-Azure-Compute-VirtualMachine-Cpu-Credit-Api-custom      | Check CPU credits usage           |
| Vm-Sizes-Global | Cloud-Azure-Compute-VirtualMachine-Vm-Sizes-Global-Api-custom | Check vitual machines types count |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

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
| azvm.disk.read.persecond  | N/A   |
| azvm.disk.write.persecond | N/A   |

</TabItem>
<TabItem value="Health" label="Health">

| Metric name | Unit  |
|:------------|:------|
| status      | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

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
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

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
4. Fill in the macros you want. Some macros are mandatory. For example, for this connector, you must define the **AZURECUSTOMMODE** macros (possible values are **api** or **azcli**). Indeed, 2 modes of communication can be used with this resource: either using the command tool azcli, or by querying the API directly.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Macro              | Description                                                                                                                                                        | Default value                | Mandatory   |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID                                                                                                                                                |                              | X           |
| AZURECLIENTSECRET  | Set Azure client secret                                                                                                                                            |                              | X           |
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                                         | api                          |             |
| AZURERESOURCE      | Set resource name or id (Required)                                                                                                                                 |                              |             |
| AZURERESOURCEGROUP | Set resource group (Required if resource's name is used)                                                                                                           |                              | X           |
| AZURESUBSCRIPTION  | Set Azure subscription (Required if logged to several subscriptions)                                                                                               |                              | X           |
| AZURETENANT        | Set Azure tenant ID                                                                                                                                                |                              | X           |
| PROXYURL           | Proxy URL if any                                                                                                                                                   |                              |             |
| STATUSCRITICAL     | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /^Unavailable$/'). You can use the following variables: %{status}, %{summary} | %{status} =~ /^Unavailable$/ |             |
| STATUSOK           | Define the conditions to match for the status to be OK (Default: '%{status} =~ /^Available$/'). You can use the following variables: %{status}, %{summary}         | %{status} =~ /^Available$/   |             |
| STATUSUNKNOWN      | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /^Unknown$/'). You can use the following variables: %{status}, %{summary}      | %{status} =~ /^Unknown$/     |             |
| STATUSWARNING      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}, %{summary}                              |                              |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                              |                              |             |

> Set the following options in the EXTRAOPTIONS macro if you are monitoring resource from Microsoft Azure operated by 21Vianet (Azure China):
--management-endpoint='https://management.chinacloudapi.cn' --login-endpoint='https://login.partner.microsoftonline.cn'.

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Macro              | Description                                                                                                                                                        | Default value                | Mandatory   |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                                         | api                          |             |
| AZURERESOURCE      | Set resource name or id (Required)                                                                                                                                 |                              |             |
| AZURERESOURCEGROUP | Set resource group (Required if resource's name is used)                                                                                                           |                              | X           |
| AZURESUBSCRIPTION  | Set Azure subscription (Required if logged to several subscriptions)                                                                                               |                              | X           |
| PROXYURL           | Proxy URL if any                                                                                                                                                   |                              |             |
| STATUSCRITICAL     | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /^Unavailable$/'). You can use the following variables: %{status}, %{summary} | %{status} =~ /^Unavailable$/ |             |
| STATUSOK           | Define the conditions to match for the status to be OK (Default: '%{status} =~ /^Available$/'). You can use the following variables: %{status}, %{summary}         | %{status} =~ /^Available$/   |             |
| STATUSUNKNOWN      | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /^Unknown$/'). You can use the following variables: %{status}, %{summary}      | %{status} =~ /^Unknown$/     |             |
| STATUSWARNING      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}, %{summary}                              |                              |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                              |                              |             |

</TabItem>
</Tabs>

> Two methods can be used to define the authentication:
>
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`) in the **AZURERESOURCE** macro.
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Macro                       | Description                                                                                                            | Default value     | Mandatory   |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMETRIC                | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp)           | Credits           |             |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                | 900               |             |
| INTERVAL                    | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                         | PT1M              |             |
| AGGREGATION                 | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGCPUCREDITSCONSUMED   | Warning threshold                                                                                                      |                   |             |
| CRITICALCPUCREDITSCONSUMED  | Critical threshold                                                                                                     |                   |             |
| WARNINGCPUCREDITSREMAINING  | Warning threshold                                                                                                      |                   |             |
| CRITICALCPUCREDITSREMAINING | Critical threshold                                                                                                     |                   |             |
| WARNINGCPUUTILIZATION       | Warning threshold                                                                                                      |                   |             |
| CRITICALCPUUTILIZATION      | Critical threshold                                                                                                     |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                    | --verbose         |             |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Macro                       | Description                                                                                                            | Default value     | Mandatory   |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMETRIC                | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp)           | Percentage        |             |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                | 900               |             |
| INTERVAL                    | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                         | PT1M              |             |
| AGGREGATION                 | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGCPUCREDITSCONSUMED   | Warning threshold                                                                                                      |                   |             |
| CRITICALCPUCREDITSCONSUMED  | Critical threshold                                                                                                     |                   |             |
| WARNINGCPUCREDITSREMAINING  | Warning threshold                                                                                                      |                   |             |
| CRITICALCPUCREDITSREMAINING | Critical threshold                                                                                                     |                   |             |
| WARNINGCPUUTILIZATION       | Warning threshold                                                                                                      | 80                |             |
| CRITICALCPUUTILIZATION      | Critical threshold                                                                                                     | 90                |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                    | --verbose         |             |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Macro                     | Description                                                                                                                               | Default value       | Mandatory   |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| TIMEFRAME                 |                                                                                                                                           | 900                 |             |
| INTERVAL                  |                                                                                                                                           | PT1M                |             |
| AGGREGATION               |                                                                                                                                           | average             |             |
| FILTERMETRIC              | Filter metrics (Can be: 'Disk Read Bytes', 'Disk Write Bytes', 'Disk Read Operations/Sec', 'Disk Write Operations/Sec') (Can be a regexp) |                     |             |
| WARNINGREADBYTES          | Warning thresholds                                                                                                                        |                     |             |
| CRITICALREADBYTES         | Critical thresholds                                                                                                                       |                     |             |
| WARNINGREADOPSPERSECOND   | Warning thresholds                                                                                                                        |                     |             |
| CRITICALREADOPSPERSECOND  | Critical thresholds                                                                                                                       |                     |             |
| WARNINGWRITEBYTES         | Warning thresholds                                                                                                                        |                     |             |
| CRITICALWRITEBYTES        | Critical thresholds                                                                                                                       |                     |             |
| WARNINGWRITEOPSPERSECOND  | Warning thresholds                                                                                                                        |                     |             |
| CRITICALWRITEOPSPERSECOND | Critical thresholds                                                                                                                       |                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                       | --per-sec --verbose |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                   | Description                                                                                         | Default value     | Mandatory   |
|:------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME               |                                                                                                     | 900               |             |
| INTERVAL                |                                                                                                     | PT1M              |             |
| AGGREGATION             |                                                                                                     | average           |             |
| WARNINGMEMORYAVAILABLE  | Warning threshold                                                                                   |                   |             |
| CRITICALMEMORYAVAILABLE | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Network" label="Network">

| Macro            | Description                                                                                         | Default value       | Mandatory   |
|:-----------------|:----------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| TIMEFRAME        |                                                                                                     | 900                 |             |
| INTERVAL         |                                                                                                     | PT1M                |             |
| AGGREGATION      |                                                                                                     | average             |             |
| FILTERMETRIC     | Filter metrics (Can be: 'Network In', 'Network Out') (Can be a regexp)                              |                     |             |
| WARNINGBYTESIN   | Warning thresholds                                                                                  |                     |             |
| CRITICALBYTESIN  | Critical thresholds                                                                                 |                     |             |
| WARNINGBYTESOUT  | Warning thresholds                                                                                  |                     |             |
| CRITICALBYTESOUT | Critical thresholds                                                                                 |                     |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --per-sec --verbose |             |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

| Macro        | Description                                                                                                             | Default value     | Mandatory   |
|:-------------|:------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTYPE   | Filter by virtual machine type (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'gpu', 'high\_performance') | .*                |             |
| FILTERSIZE   | Filter by virtual machine size (regexp)                                                                                 | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                     | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an Azure Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--mode=network \
	--custommode='api' \
	--resource='' \
	--resource-group='' \
	--subscription='' \
	--tenant='' \
	--client-id='' \
	--client-secret='' \
	--proxyurl=''  \
	--filter-metric='' \
	--timeframe='900' \
	--interval='PT1M' \
	--aggregation='average' \
	--warning-bytes-out='' \
	--critical-bytes-out='' \
	--warning-bytes-in='' \
	--critical-bytes-in='' \
	--per-sec \
	--verbose
```

The expected command output is shown below:

```bash
OK: Network Out: 4 B Network In: 33 B | 'azvm.network.out.bytes'=4B;;;0; 'azvm.network.in.bytes'=33B;;;0; 
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
/usr/lib/centreon/plugins/centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                            | Linked service template                                                                                               |
|:------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/cpu.pm)]                      | Cloud-Azure-Compute-VirtualMachine-Cpu-Credit-Api-custom<br />Cloud-Azure-Compute-VirtualMachine-Cpu-Usage-Api-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/discovery.pm)]          | Used for host discovery                                                                                               |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/diskio.pm)]                | Cloud-Azure-Compute-VirtualMachine-Diskio-Api-custom                                                                  |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/health.pm)]                | Cloud-Azure-Compute-VirtualMachine-Health-Api-custom                                                                  |
| list-resources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/listresources.pm)] | Not used in this Monitoring Connector                                                                                 |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/memory.pm)]                | Cloud-Azure-Compute-VirtualMachine-Memory-Api-custom                                                                  |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/network.pm)]              | Cloud-Azure-Compute-VirtualMachine-Network-Api-custom                                                                 |
| vm-sizes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/vmsizes.pm)]             | Cloud-Azure-Compute-VirtualMachine-Vm-Sizes-Global-Api-custom                                                         |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--list-custommode
```

The plugin brings the following custom modes:

* api
* azcli

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --subscription         | Set Azure subscription ID.                                                                                                                                                                                                                    |
| --tenant               | Set Azure tenant ID.                                                                                                                                                                                                                          |
| --client-id            | Set Azure client ID.                                                                                                                                                                                                                          |
| --client-secret        | Set Azure client secret.                                                                                                                                                                                                                      |
| --login-endpoint       | Set Azure login endpoint URL (Default: 'https://login.microsoftonline.com')                                                                                                                                                                   |
| --management-endpoint  | Set Azure management endpoint URL (Default: 'https://management.azure.com')                                                                                                                                                                   |
| --timeframe            | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                      |
| --interval             | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                               |
| --aggregation          | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                                                       |
| --zeroed               | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                           |
| --timeout              | Set timeout in seconds (Default: 10).                                                                                                                                                                                                         |
| --http-peer-addr       | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                           |
| --proxyurl             | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                           |
| --proxypac             | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                |
| --insecure             | Accept insecure SSL connections.                                                                                                                                                                                                              |
| --http-backend         | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                       |
| --ssl-opt              | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                     |
| --curl-opt             | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                              |
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --filter-dimension     | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                          |
| --per-sec              | Display the statistics based on a per-second period.                                                                                                                                                                                          |

</TabItem>
<TabItem value="azcli" label="azcli">

| Option             | Description                                                                                                                            |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| --subscription     | Set Azure subscription (Required if logged to several subscriptions).                                                                  |
| --timeframe        | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                               |
| --interval         | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                        |
| --aggregation      | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                |
| --zeroed           | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                    |
| --timeout          | Set timeout in seconds (Default: 50).                                                                                                  |
| --sudo             | Use 'sudo' to execute the command.                                                                                                     |
| --command          | Command to get information (Default: 'az'). Can be changed if you have output in a file.                                               |
| --command-path     | Command path (Default: none).                                                                                                          |
| --command-options  | Command options (Default: none).                                                                                                       |
| --proxyurl         | Proxy URL if any                                                                                                                       |
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec          | Display the statistics based on a per-second period.                                                                                   |

</TabItem>
</Tabs>

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Option             | Description                                                                                                     |
|:-------------------|:----------------------------------------------------------------------------------------------------------------|
| --resource         | Set resource name or id (Required).                                                                             |
| --resource-group   | Set resource group (Required if resource's name is used).                                                       |
| --filter-metric    | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp).   |
| --warning-$label$  | Warning threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')          |
| --critical-$label$ | Critical threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')         |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Option             | Description                                                                                                     |
|:-------------------|:----------------------------------------------------------------------------------------------------------------|
| --resource         | Set resource name or id (Required).                                                                             |
| --resource-group   | Set resource group (Required if resource's name is used).                                                       |
| --filter-metric    | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp).   |
| --warning-$label$  | Warning threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')          |
| --critical-$label$ | Critical threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')         |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Option             | Description                                                                                                                                  |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| --resource         | Set resource name or id (Required).                                                                                                          |
| --resource-group   | Set resource group (Required if resource's name is used).                                                                                    |
| --filter-metric    | Filter metrics (Can be: 'Disk Read Bytes', 'Disk Write Bytes', 'Disk Read Operations/Sec', 'Disk Write Operations/Sec') (Can be a regexp).   |
| --warning-$label$  | Warning thresholds. ($label$ can be: 'read-bytes', 'write-bytes', 'read-ops-persecond', 'write-ops-persecond')                               |
| --critical-$label$ | Critical thresholds. ($label$ can be: 'read-bytes', 'write-bytes', 'read-ops-persecond', 'write-ops-persecond')                              |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                                                          |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource        | Set resource name or id (Required).                                                                                                                                  |
| --resource-group  | Set resource group (Required if resource's name is used).                                                                                                            |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}, %{summary}                                |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /^Unavailable$/'). You can use the following variables: %{status}, %{summary}   |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /^Unknown$/'). You can use the following variables: %{status}, %{summary}        |
| --ok-status       | Define the conditions to match for the status to be OK (Default: '%{status} =~ /^Available$/'). You can use the following variables: %{status}, %{summary}           |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                      | Description                                                 |
|:----------------------------|:------------------------------------------------------------|
| --resource                  | Set resource name or id (Required).                         |
| --resource-group            | Set resource group (Required if resource's name is used).   |
| --warning-memory-available  | Warning threshold.                                          |
| --critical-memory-available | Critical threshold.                                         |

</TabItem>
<TabItem value="Network" label="Network">

| Option             | Description                                                               |
|:-------------------|:--------------------------------------------------------------------------|
| --resource         | Set resource name or id (Required).                                       |
| --resource-group   | Set resource group (Required if resource's name is used).                 |
| --filter-metric    | Filter metrics (Can be: 'Network In', 'Network Out') (Can be a regexp).   |
| --warning-$label$  | Warning thresholds ($label$ can be: 'bytes-in', 'bytes-out').             |
| --critical-$label$ | Critical thresholds ($label$ can be: 'bytes-in', 'bytes-out').            |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

| Option           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource-group | Set resource group (Optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-type    | Filter by virtual machine type (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'gpu', 'high\_performance')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --filter-size    | Filter by virtual machine size (regexp)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --warning-*      | Warning threshold. Can be: 'standard-b1s', 'standard-b1ms', 'standard-b2s', 'standard-b2ms', 'standard-b4ms', 'standard-b8ms', 'standard-d2s-v3', 'standard-d4s-v3', 'standard-d8s-v3', 'standard-d16s-v3', 'standard-d32s-v3', 'standard-d64s-v3', 'standard-d2-v3', 'standard-d4-v3', 'standard-d8-v3', 'standard-d16-v3', 'standard-d32-v3', 'standard-d64-v3', 'standard-ds1-v2', 'standard-ds2-v2', 'standard-ds3-v2', 'standard-ds4-v2', 'standard-ds5-v2', 'standard-d1-v2', 'standard-d2-v2', 'standard-d3-v2', 'standard-d4-v2', 'standard-d5-v2', 'standard-a1-v2', 'standard-a2-v2', 'standard-a4-v2', 'standard-a8-v2', 'standard-a2m-v2', 'standard-a4m-v2', 'standard-a8m-v2', 'standard-f2s-v2', 'standard-f4s-v2', 'standard-f8s-v2', 'standard-f16s-v2', 'standard-f32s-v2', 'standard-f64s-v2', 'standard-f72s-v2', 'standard-f1s', 'standard-f2s', 'standard-f4s', 'standard-f8s', 'standard-f16s', 'standard-f1', 'standard-f2', 'standard-f4', 'standard-f8', 'standard-f16', 'standard-e2s-v3', 'standard-e4s-v3', 'standard-e8s-v3', 'standard-e16s-v3', 'standard-e32s-v3', 'standard-e64s-v3', 'standard-e64is-v3', 'standard-e2-v3', 'standard-e4-v3', 'standard-e8-v3', 'standard-e16-v3', 'standard-e32-v3', 'standard-e64-v3', 'standard-e64i-v3', 'standard-m8ms3', 'standard-m16ms', 'standard-m32ts', 'standard-m32ls', 'standard-m32ms', 'standard-m64s', 'standard-m64ls', 'standard-m64ms', 'standard-m128s', 'standard-m128ms', 'standard-m64', 'standard-m64m', 'standard-m128', 'standard-m128m', 'standard-gs1', 'standard-gs2', 'standard-gs3', 'standard-gs4', 'standard-gs5', 'standard-g1', 'standard-g2', 'standard-g3', 'standard-g4', 'standard-g5', 'standard-ds11-v2', 'standard-ds12-v2', 'standard-ds13-v2', 'standard-ds14-v2', 'standard-ds15-v2', 'standard-d11-v2', 'standard-d12-v2', 'standard-d13-v2', 'standard-d14-v2', 'standard-d15-v2', 'standard-l4s', 'standard-l8s', 'standard-l16s', 'standard-l32s', 'standard-nc6', 'standard-nc12', 'standard-nc24', 'standard-nc24r', 'standard-nc6s-v2', 'standard-nc12s-v2', 'standard-nc24s-v2', 'standard-nc24rs-v2', 'standard-nc6s-v3', 'standard-nc12s-v3', 'standard-nc24s-v3', 'standard-nc24rs-v3', 'standard-nd6s', 'standard-nd12s', 'standard-nd24s', 'standard-nd24rs', 'standard-nv6', 'standard-nv12', 'standard-nv24','standard-h8', 'standard-h16', 'standard-h8m', 'standard-h16m', 'standard-h16r', 'standard-h16mr'.    |
| --critical-*     | Critical threshold. Can be: 'standard-b1s', 'standard-b1ms', 'standard-b2s', 'standard-b2ms', 'standard-b4ms', 'standard-b8ms', 'standard-d2s-v3', 'standard-d4s-v3', 'standard-d8s-v3', 'standard-d16s-v3', 'standard-d32s-v3', 'standard-d64s-v3', 'standard-d2-v3', 'standard-d4-v3', 'standard-d8-v3', 'standard-d16-v3', 'standard-d32-v3', 'standard-d64-v3', 'standard-ds1-v2', 'standard-ds2-v2', 'standard-ds3-v2', 'standard-ds4-v2', 'standard-ds5-v2', 'standard-d1-v2', 'standard-d2-v2', 'standard-d3-v2', 'standard-d4-v2', 'standard-d5-v2', 'standard-a1-v2', 'standard-a2-v2', 'standard-a4-v2', 'standard-a8-v2', 'standard-a2m-v2', 'standard-a4m-v2', 'standard-a8m-v2', 'standard-f2s-v2', 'standard-f4s-v2', 'standard-f8s-v2', 'standard-f16s-v2', 'standard-f32s-v2', 'standard-f64s-v2', 'standard-f72s-v2', 'standard-f1s', 'standard-f2s', 'standard-f4s', 'standard-f8s', 'standard-f16s', 'standard-f1', 'standard-f2', 'standard-f4', 'standard-f8', 'standard-f16', 'standard-e2s-v3', 'standard-e4s-v3', 'standard-e8s-v3', 'standard-e16s-v3', 'standard-e32s-v3', 'standard-e64s-v3', 'standard-e64is-v3', 'standard-e2-v3', 'standard-e4-v3', 'standard-e8-v3', 'standard-e16-v3', 'standard-e32-v3', 'standard-e64-v3', 'standard-e64i-v3', 'standard-m8ms3', 'standard-m16ms', 'standard-m32ts', 'standard-m32ls', 'standard-m32ms', 'standard-m64s', 'standard-m64ls', 'standard-m64ms', 'standard-m128s', 'standard-m128ms', 'standard-m64', 'standard-m64m', 'standard-m128', 'standard-m128m', 'standard-gs1', 'standard-gs2', 'standard-gs3', 'standard-gs4', 'standard-gs5', 'standard-g1', 'standard-g2', 'standard-g3', 'standard-g4', 'standard-g5', 'standard-ds11-v2', 'standard-ds12-v2', 'standard-ds13-v2', 'standard-ds14-v2', 'standard-ds15-v2', 'standard-d11-v2', 'standard-d12-v2', 'standard-d13-v2', 'standard-d14-v2', 'standard-d15-v2', 'standard-l4s', 'standard-l8s', 'standard-l16s', 'standard-l32s', 'standard-nc6', 'standard-nc12', 'standard-nc24', 'standard-nc24r', 'standard-nc6s-v2', 'standard-nc12s-v2', 'standard-nc24s-v2', 'standard-nc24rs-v2', 'standard-nc6s-v3', 'standard-nc12s-v3', 'standard-nc24s-v3', 'standard-nc24rs-v3', 'standard-nd6s', 'standard-nd12s', 'standard-nd24s', 'standard-nd24rs', 'standard-nv6', 'standard-nv12', 'standard-nv24','standard-h8', 'standard-h16', 'standard-h8m', 'standard-h16m', 'standard-h16r', 'standard-h16mr'.   |
| --running        | Only check running virtual machines (only with az CLI).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--mode=network \
	--custommode='azcli' \
	--help
```
