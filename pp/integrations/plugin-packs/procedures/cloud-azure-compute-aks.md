---
id: cloud-azure-compute-aks
title: Azure Kubernetes Service
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Azure Kubernetes Service** brings a host template:

* **Cloud-Azure-Compute-Aks-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Compute-Aks-custom" label="Cloud-Azure-Compute-Aks-custom">

| Service Alias         | Service Template                                         | Service Description                                            |
|:----------------------|:---------------------------------------------------------|:---------------------------------------------------------------|
| Allocatable-resources | Cloud-Azure-Compute-Aks-Allocatable-Resources-Api-custom | Check memory and CPU cores allocatable for AKS Cluster         |
| Cpu-Usage             | Cloud-Azure-Compute-Aks-Cpu-Usage-Api-custom             | Monitor the CPU usage of the AKS cluster                       |
| Health                | Cloud-Azure-Compute-Aks-Health-Api-custom                | Check AKS Cluster state                                        |
| Memory                | Cloud-Azure-Compute-Aks-Memory-Api-custom                | Monitors the memory usage of the AKS Cluster                   |
| Node-State            | Cloud-Azure-Compute-Aks-Node-State-Api-custom            | Monitors the state of the AKS cluster nodes                    |
| Pod-State             | Cloud-Azure-Compute-Aks-Pod-State-Api-custom             | Monitors the state of the AKS cluster Pods                     |
| Storage               | Cloud-Azure-Compute-Aks-Storage-Api-custom               | Check AKS Cluster storage                                      |
| Traffic               | Cloud-Azure-Compute-Aks-Traffic-Api-custom               | Check AKS Cluster network usage                                |
| Unneeded-nodes        | Cloud-Azure-Compute-Aks-Unneeded-Nodes-Api-custom        | Check amount of unneeded nodes on AKS Cluster                  |
| Unschedulable-Pods    | Cloud-Azure-Compute-Aks-Unschedulable-Pods-Api-custom    | Monitors the presence of unschedulable Pods on the AKS cluster |

> The services listed above are created automatically when the **Cloud-Azure-Compute-Aks-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

The Centreon Monitoring Connector **Azure Kubernetes Service** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the list of monitored hosts. This provider is named **Microsoft Azure Kubernetes Service**.

> This discovery feature is only compatible with the [**api** custom mode. **azcli** is not supported](../getting-started/how-to-guides/azure-credential-configuration.md).

Go to the corresponding chapter to learn more about [discovering hosts automatically](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Allocatable-resources" label="Allocatable-resources">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| aks.node.allocatable.cpu.cores    | N/A   |
| aks.node.allocatable.memory.bytes | B     |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| aks.node.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Health" label="Health">

| Metric name | Unit  |
|:------------|:------|
| status      | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                            | Unit  |
|:---------------------------------------|:------|
| aks.node.memory.rss.bytes              | B     |
| aks.node.memory.rss.percentage         | %     |
| aks.node.memory.working.set.bytes      | B     |
| aks.node.memory.working.set.percentage | %     |

</TabItem>
<TabItem value="Node-State" label="Node-State">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| aks.kube.node.status.condition.count | count |

</TabItem>
<TabItem value="Pod-State" label="Pod-State">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| aks.kube.pod.status.ready.count | count |
| aks.kube.pod.status.phase.count | count |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                    | Unit  |
|:-------------------------------|:------|
| aks.node.disk.usage.bytes      | B     |
| aks.node.disk.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric name                | Unit  |
|:---------------------------|:------|
| aks.node.traffic.out.bytes | B     |
| aks.node.traffic.in.bytes  | B     |

</TabItem>
<TabItem value="Unneeded-nodes" label="Unneeded-nodes">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| aks.cluster.autoscaler.unneeded.nodes | N/A   |

</TabItem>
<TabItem value="Unschedulable-Pods" label="Unschedulable-Pods">

| Metric name                                     | Unit  |
|:------------------------------------------------|:------|
| aks.cluster.autoscaler.unschedulable.pods.count | count |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure
on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

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
dnf install centreon-pack-cloud-azure-compute-aks
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-compute-aks
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-azure-compute-aks
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-compute-aks
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Azure Kubernetes Service** connector through
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
dnf install centreon-plugin-Cloud-Azure-Compute-Aks-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Compute-Aks-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-azure-compute-aks-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Compute-Aks-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-Compute-Aks-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory. For example, for this connector, you must define the **AZURECUSTOMMODE** macros (possible values are **api** or **azcli**). Indeed, 2 modes of communication can be used with this resource: either using the command tool azcli, or by querying the API directly.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Macro              | Description                                                                                                                | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID                                                                                                        |                   | X           |
| AZURECLIENTSECRET  | Set Azure client secret                                                                                                    |                   | X           |
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| AZURERESOURCE      | Set resource name or ID (required)                                                                                         |                   |             |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                   |                   | X           |
| AZURESUBSCRIPTION  | Set Azure subscription (required if logged to several subscriptions)                                                       |                   | X           |
| AZURETENANT        | Set Azure tenant ID                                                                                                        |                   | X           |
| PROXYURL           | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                       |                   |             |

> Set the following options in the EXTRAOPTIONS macro if you are monitoring resource from Microsoft Azure operated by 21Vianet (Azure China):
--management-endpoint='https://management.chinacloudapi.cn' --login-endpoint='https://login.partner.microsoftonline.cn'.

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Macro              | Description                                                                                                                | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| AZURERESOURCE      | Set resource name or ID (required)                                                                                         |                   |             |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                   |                   | X           |
| AZURESUBSCRIPTION  | Set Azure subscription (required if logged to several subscriptions)                                                       |                   | X           |
| PROXYURL           | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                       |                   |             |

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
<TabItem value="Allocatable-resources" label="Allocatable-resources">

| Macro                       | Description                                                                                                                                                          | Default value     | Mandatory   |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                                              | 900               |             |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                                       | PT5M              |             |
| FILTERMETRIC                | Filter metrics (available metrics: 'Allocatable CPU Cores', 'Allocatable Memory Bytes') (can be a regexp).           |                   |             |
| WARNINGALLOCATABLECPUCORES  | Set warning threshold for number of remaining allocatable CPU Cores. It is a range, set 10: to get WARNING if there are less than 10 CPU cores allocatable remaining |                   |             |
| CRITICALALLOCATABLECPUCORES | Set critical threshold for number of remaining allocatable CPU Cores. It is a range, set 5: to get CRITICAL if there are less than 5 CPU cores allocatable remaining |                   |             |
| WARNINGALLOCATABLEMEMORY    | Set warning threshold for remaining allocatable memory in bytes. It is a range, set 16GB: to get WARNING if there are less than 16GB allocatable left                |                   |             |
| CRITICALALLOCATABLEMEMORY   | Set critical threshold for remaining allocatable memory in bytes. It is a range, set 8GB: to get CRITICAL if there are less than 8GB allocatable left                |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                   |                   |             |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME        | Set timeframe in seconds (i.e. 3600 to check last hour).                                           | 900               |             |
| INTERVAL         | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).    | PT5M              |             |
| FILTERMETRIC     | Filter metrics (available metrics: 'CPU percent') (can be a regexp).           |                   |             |
| WARNINGCPUUSAGE  | Set warning threshold for CPU utilization percentage                                               |                   |             |
| CRITICALCPUUSAGE | Set critical threshold for CPU utilization percentage                                              |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Health" label="Health">

| Macro          | Description                                                                                                                                                         | Default value                | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| STATUSOK       | Define the conditions to match for the status to be OK (default: '%{status} =~ /^Available$/').  You can use the following variables: %{status}, %{summary}         | %{status} =~ /^Available$/   |             |
| STATUSUNKNOWN  | Define the conditions to match for the status to be UNKNOWN (default: '%{status} =~ /^Unknown$/').  You can use the following variables: %{status}, %{summary}      | %{status} =~ /^Unknown$/     |             |
| STATUSCRITICAL | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /^Unavailable$/').  You can use the following variables: %{status}, %{summary} | %{status} =~ /^Unavailable$/ |             |
| STATUSWARNING  | Define the conditions to match for the status to be WARNING (default: '').  You can use the following variables: %{status}, %{summary}                              |                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                  |                              |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                    | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGMEMORYPERCENT     | Warning threshold in percent.                                                                       |                   |             |
| CRITICALMEMORYPERCENT    | Critical threshold in percent.                                                                      |                   |             |
| WARNINGMEMORYRSSPERCENT  | Warning threshold in percent.                                                        |                   |             |
| CRITICALMEMORYRSSPERCENT | Critical threshold in percent.                                                                |                   |             |
| WARNINGMEMORYRSSUSAGE    | Warning threshold in Bytes.                                                         |                   |             |
| CRITICALMEMORYRSSUSAGE   | Critical threshold in Bytes.                                                          |                   |             |
| WARNINGMEMORYUSAGE       | Warning threshold in Bytes.                                                                         |                   |             |
| CRITICALMEMORYUSAGE      | Critical threshold in Bytes                                                                        |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Node-State" label="Node-State">

| Macro                      | Description                                                                                        | Default value     | Mandatory   |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGNODESTATECONDITION  | Set warning threshold for number of condition nodes                                                |                   |             |
| CRITICALNODESTATECONDITION | Set critical threshold for number of condition nodes                                               |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Pod-State" label="Pod-State">

| Macro                 | Description                                                                                        | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPODSTATEPHASE  | Set warning threshold for number of Pods State Phase                                               |                   |             |
| CRITICALPODSTATEPHASE | Set critical threshold for number of Pods State Phase                                              |                   |             |
| WARNINGPODSTATEREADY  | Set warning threshold for number of Pods State Ready                                               |                   |             |
| CRITICALPODSTATEREADY | Set critical threshold for number of Pods State Ready                                              |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour).                                           | 900               |             |
| INTERVAL               | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).    | PT5M              |             |
| FILTERMETRIC           | Filter metrics (available metrics: 'Storage Used', 'Storage Percent') (can be a regexp).           |                   |             |
| WARNINGSTORAGEPERCENT  | Warning threshold in percent                                                                       |                   |             |
| CRITICALSTORAGEPERCENT | Critical threshold in percent                                                                      |                   |             |
| WARNINGSTORAGEUSED     | Warning threshold in Bytes                                                                         |                   |             |
| CRITICALSTORAGEUSED    | Critical threshold in Bytes                                                                        |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Macro              | Description                                                                                        | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME          | Set timeframe in seconds (i.e. 3600 to check last hour).                                           | 900               |             |
| INTERVAL           | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).   | PT5M              |             |
| FILTERMETRIC       | Filter metrics (available metrics: 'Network In', 'Network Out') (can be a regexp).                             |                   |             |
| WARNINGTRAFFICIN   | Warning threshold where '*'                                                                        |                   |             |
| CRITICALTRAFFICIN  | Critical threshold where '*'                                                                       |                   |             |
| WARNINGTRAFFICOUT  | Warning threshold where '*'                                                                        |                   |             |
| CRITICALTRAFFICOUT | Critical threshold where '*'                                                                       |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Unneeded-nodes" label="Unneeded-nodes">

| Macro                 | Description                                                                                        | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour).                                           | 900               |             |
| INTERVAL               | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).    | PT5M              |             |
| FILTERMETRIC           | Filter metrics (available metrics: 'Cluster Autoscaler Unneeded Nodes') (can be a regexp).           |                   |             |
| WARNINGUNNEEDEDNODES  | Set warning threshold for number of unneeded nodes                                                 |                   |             |
| CRITICALUNNEEDEDNODES | Set critical threshold for number of unneeded nodes                                                |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Unschedulable-Pods" label="Unschedulable-Pods">

| Macro                     | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUNSCHEDULABLEPODS  | Set warning threshold for number of unschedulable pods                                             |                   |             |
| CRITICALUNSCHEDULABLEPODS | Set critical threshold for number of unschedulable pods                                            |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an Azure Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_aks_api.pl \
	--plugin=cloud::azure::compute::aks::plugin \
	--mode=unschedulable-pods \
	--custommode='api' \
	--resource='' \
	--resource-group='' \
	--subscription='' \
	--tenant='' \
	--client-id='' \
	--client-secret='' \
	--proxyurl=''  \
	--warning-unschedulable-pods='' \
	--critical-unschedulable-pods='' 
```

The expected command output is shown below:

```bash
OK: Cluster Autoscaler Unschedulable Pods: 8 | 'aks.cluster.autoscaler.unschedulable.pods.count'=8;;;0;
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
/usr/lib/centreon/plugins/centreon_azure_compute_aks_api.pl \
	--plugin=cloud::azure::compute::aks::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                               | Linked service template                                  |
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|
| allocatable-resources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/allocatableresources.pm)] | Cloud-Azure-Compute-Aks-Allocatable-Resources-Api-custom |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/cpu.pm)]                                    | Cloud-Azure-Compute-Aks-Cpu-Usage-Api-custom             |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/discovery.pm)]                        | Used for host discovery                                  |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/health.pm)]                              | Cloud-Azure-Compute-Aks-Health-Api-custom                |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/memory.pm)]                              | Cloud-Azure-Compute-Aks-Memory-Api-custom                |
| node-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/nodestate.pm)]                       | Cloud-Azure-Compute-Aks-Node-State-Api-custom            |
| pod-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/podstate.pm)]                         | Cloud-Azure-Compute-Aks-Pod-State-Api-custom             |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/storage.pm)]                            | Cloud-Azure-Compute-Aks-Storage-Api-custom               |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/traffic.pm)]                            | Cloud-Azure-Compute-Aks-Traffic-Api-custom               |
| unneeded-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/unneedednodes.pm)]               | Cloud-Azure-Compute-Aks-Unneeded-Nodes-Api-custom        |
| unschedulable-pods [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/unschedulablepods.pm)]       | Cloud-Azure-Compute-Aks-Unschedulable-Pods-Api-custom    |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_aks_api.pl \
	--plugin=cloud::azure::compute::aks::plugin \
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
| --login-endpoint       | Set Azure login endpoint URL (default: 'https://login.microsoftonline.com')                                                                                                                                                                   |
| --management-endpoint  | Set Azure management endpoint URL (default: 'https://management.azure.com')                                                                                                                                                                   |
| --timeframe            | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                      |
| --interval             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                               |
| --aggregation          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                           |
| --zeroed               | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                           |
| --timeout              | Set timeout in seconds (default: 10).                                                                                                                                                                                                         |
| --http-peer-addr       | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                           |
| --proxyurl             | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                      |
| --proxypac             | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                |
| --insecure             | Accept insecure SSL connections.                                                                                                                                                                                                              |
| --http-backend         | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                       |
| --ssl-opt              | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                     |
| --curl-opt             | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                              |
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
| --filter-dimension     | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                          |
| --per-sec              | Display the statistics based on a per-second period.                                                                                                                                                                                          |

</TabItem>
<TabItem value="azcli" label="azcli">

| Option             | Description                                                                                                                                           |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| --subscription     | Set Azure subscription (required if logged to several subscriptions).                                                                                 |
| --timeframe        | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                              |
| --interval         | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                       |
| --aggregation      | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.   |
| --zeroed           | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                   |
| --timeout          | Set timeout in seconds (default: 50).                                                                                                                 |
| --sudo             | Use 'sudo' to execute the command.                                                                                                                    |
| --command          | Command to get information (default: 'az'). Can be changed if you have output in a file.                                                              |
| --command-path     | Command path (default: none).                                                                                                                         |
| --command-options  | Command options (default: none).                                                                                                                      |
| --proxyurl         | Proxy URL if any                                                                                                                                      |
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                  |
| --per-sec          | Display the statistics based on a per-second period.                                                                                                  |

</TabItem>
</Tabs>

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Allocatable-resources" label="Allocatable-resources">

| Option                              | Description                                                                                                                                                              |
|:------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                          | Set resource name or ID (required).                                                                                                                                      |
| --resource-group                    | Set resource group (required if resource's name is used).                                                                                                                |
| --warning-allocatable-memory-bytes  | Set warning threshold for remaining allocatable memory in bytes. It is a range, set 16GB: to get WARNING if there are less than 16GB allocatable left.                   |
| --critical-allocatable-memory-bytes | Set critical threshold for remaining allocatable memory in bytes. It is a range, set 8GB: to get CRITICAL if there are less than 8GB allocatable left.                   |
| --warning-allocatable-cpu-cores     | Set warning threshold for number of remaining allocatable CPU Cores. It is a range, set 10: to get WARNING if there are less than 10 CPU cores allocatable remaining.    |
| --critical-allocatable-cpu-cores    | Set critical threshold for number of remaining allocatable CPU Cores. It is a range, set 5: to get CRITICAL if there are less than 5 CPU cores allocatable remaining.    |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Option               | Description                                                 |
|:---------------------|:------------------------------------------------------------|
| --resource           | Set resource name or ID (required).                         |
| --resource-group     | Set resource group (required if resource's name is used).   |
| --warning-cpu-usage  | Set warning threshold for CPU utilization percentage.       |
| --critical-cpu-usage | Set critical threshold for CPU utilization percentage.      |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                                                           |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource        | Set resource name or ID (required).                                                                                                                                   |
| --resource-group  | Set resource group (required if resource's name is used).                                                                                                             |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '').  You can use the following variables: %{status}, %{summary}                                |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /^Unavailable$/').  You can use the following variables: %{status}, %{summary}   |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN (default: '%{status} =~ /^Unknown$/').  You can use the following variables: %{status}, %{summary}        |
| --ok-status       | Define the conditions to match for the status to be OK (default: '%{status} =~ /^Available$/').  You can use the following variables: %{status}, %{summary}           |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                        | Description                                                 |
|:------------------------------|:------------------------------------------------------------|
| --resource                    | Set resource name or ID (required).                         |
| --resource-group              | Set resource group (required if resource's name is used).   |
| --warning-memory-usage        | Warning threshold in Bytes.                                 |
| --critical-memory-usage       | Critical threshold in Bytes.                                |
| --warning-memory-percent      | Warning threshold in percent.                               |
| --critical-memory-percent     | Critical threshold in percent.                              |
| --warning-rss-memory-usage    | Warning threshold in Bytes.                                 |
| --critical-rss-memory-usage   | Critical threshold in Bytes.                                |
| --warning-rss-memory-percent  | Warning threshold in percent.                               |
| --critical-rss-memory-percent | Critical threshold in percent.                              |

</TabItem>
<TabItem value="Node-State" label="Node-State">

| Option                          | Description                                                 |
|:--------------------------------|:------------------------------------------------------------|
| --resource                      | Set resource name or ID (required).                         |
| --resource-group                | Set resource group (required if resource's name is used).   |
| --warning-node-state-condition  | Set warning threshold for number of condition nodes.        |
| --critical-node-state-condition | Set critical threshold for number of condition nodes.       |

</TabItem>
<TabItem value="Pod-State" label="Pod-State">

| Option                     | Description                                                 |
|:---------------------------|:------------------------------------------------------------|
| --resource                 | Set resource name or ID (required).                         |
| --resource-group           | Set resource group (required if resource's name is used).   |
| --warning-pod-state-ready  | Set warning threshold for number of Pods State Ready.       |
| --critical-pod-state-ready | Set critical threshold for number of Pods State Ready.      |
| --warning-pod-state-phase  | Set warning threshold for number of Pods State Phase.       |
| --critical-pod-state-phase | Set critical threshold for number of Pods State Phase.      |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                     | Description                                                 |
|:---------------------------|:------------------------------------------------------------|
| --resource                 | Set resource name or ID (required).                         |
| --resource-group           | Set resource group (required if resource's name is used).   |
| --warning-storage-used     | Warning threshold in Bytes.                                 |
| --critical-storage-used    | Critical threshold in Bytes.                                |
| --warning-storage-percent  | Warning threshold in percent.                               |
| --critical-storage-percent | Critical threshold in percent.                              |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Option           | Description                                                          |
|:-----------------|:---------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                  |
| --resource-group | Set resource group (required if resource's name is used).            |
| --warning-*      | Warning threshold where '*' can be: 'traffic-out', 'traffic-in'.     |
| --critical-*     | Critical threshold where '*' can be: 'traffic-out', 'traffic-in'.    |

</TabItem>
<TabItem value="Unneeded-nodes" label="Unneeded-nodes">

| Option                    | Description                                                 |
|:--------------------------|:------------------------------------------------------------|
| --resource                | Set resource name or ID (required).                         |
| --resource-group          | Set resource group (required if resource's name is used).   |
| --warning-unneeded-nodes  | Set warning threshold for number of unneeded nodes.         |
| --critical-unneeded-nodes | Set critical threshold for number of unneeded nodes.        |

</TabItem>
<TabItem value="Unschedulable-Pods" label="Unschedulable-Pods">

| Option                        | Description                                                 |
|:------------------------------|:------------------------------------------------------------|
| --resource                    | Set resource name or ID (required).                         |
| --resource-group              | Set resource group (required if resource's name is used).   |
| --warning-unschedulable-pods  | Set warning threshold for number of unschedulable pods.     |
| --critical-unschedulable-pods | Set critical threshold for number of unschedulable pods.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_aks_api.pl \
	--plugin=cloud::azure::compute::aks::plugin \
	--mode=unschedulable-pods \
	--custommode='azcli' \
	--help
```
