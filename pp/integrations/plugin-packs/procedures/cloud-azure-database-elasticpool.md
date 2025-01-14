---
id: cloud-azure-database-elasticpool
title: Azure Elastic Pool
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

Azure SQL Database elastic pools are a simple, cost-effective solution for managing and scaling multiple databases that have
varying and unpredictable usage demands. The databases in an elastic pool are on a single server and share a set number of
resources at a set price.

The Centreon Monitoring Connector **Azure Elastic Pool** can rely on Azure API or Azure CLI to collect the metrics related to the
Elastic Pool service.

## Pack assets

### Templates

The Monitoring Connector **Azure Elastic Pool** brings a host template:

* **Cloud-Azure-Database-Elasticpool-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Database-Elasticpool-custom" label="Cloud-Azure-Database-Elasticpool-custom">

| Service Alias | Service Template                                     | Service Description                             |
|:--------------|:-----------------------------------------------------|:------------------------------------------------|
| Log-Usage     | Cloud-Azure-Database-Elasticpool-Log-Api-custom      | Check Azure Elastic Pools log file and DB usage |
| Sessions      | Cloud-Azure-Database-Elasticpool-Sessions-Api-custom | Check Azure Elastic Pools sessions and workers  |
| Storage       | Cloud-Azure-Database-Elasticpool-Storage-Api-custom  | Check Azure Elastic Pools storage               |

> The services listed above are created automatically when the **Cloud-Azure-Database-Elasticpool-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                | Service Description                       |
|:--------------|:------------------------------------------------|:------------------------------------------|
| Cpu           | Cloud-Azure-Database-Elasticpool-Cpu-Api-custom | Check Azure Elastic Pools CPU usage |
| Dtu           | Cloud-Azure-Database-Elasticpool-Dtu-Api-custom | Check Azure Elastic Pools DTU usage       |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

The Centreon Monitoring Connector **Azure Elastic Pool** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the list of monitored hosts. This provider is named **Microsoft Azure SQL Elastic Pool**.

> This discovery feature is only compatible with the [**api** custom mode. **azcli** is not supported](../getting-started/how-to-guides/azure-credential-configuration.md).

Go to the corresponding chapter to learn more about [discovering hosts automatically](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| elasticpool.cpu.limit.count      | count |
| elasticpool.cpu.usage.percentage | %     |
| elasticpool.cpu.used.count       | count |

</TabItem>
<TabItem value="Dtu" label="Dtu">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| elasticpool.dtu.consumpution.percentage | %     |
| elasticpool.edtu.limit.count            | count |
| elasticpool.edtu.used.count             | count |

</TabItem>
<TabItem value="Log-Usage" label="Log-Usage">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| elasticpool.log.write.percentage        | %     |
| elasticpool.log.tempdb.size.kilobytes   | KB    |
| elasticpool.log.tempdb.usage.percentage | %     |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| elasticpool.sessions.usage.percentage | %     |
| elasticpool.workers.usage.percentage  | %     |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| elasticpool.storage.data.allocated.percentage | %     |
| elasticpool.storage.data.allocated.bytes      | B     |
| elasticpool.storage.usage.percentage          | %     |
| elasticpool.storage.used.bytes                | B     |

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
dnf install centreon-pack-cloud-azure-database-elasticpool
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-database-elasticpool
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-azure-database-elasticpool
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-database-elasticpool
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Azure Elastic Pool** connector through
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
dnf install centreon-plugin-Cloud-Azure-Database-Elasticpool-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Database-Elasticpool-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-azure-database-elasticpool-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Database-Elasticpool-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-Database-Elasticpool-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory. For example, for this connector, you must define the **AZURECUSTOMMODE** macros (possible values are **api** or **azcli**). Indeed, 2 modes of communication can be used with this resource: either using the command tool azcli, or by querying the API directly.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Macro              | Description                                                                                                                | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID                                                                                                        |                   | X           |
| AZURECLIENTSECRET  | Set Azure client secret                                                                                                    |                   | X           |
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| AZURERESOURCE      | Set resource name or ID (required)                                                                                         |                   |      X      |
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
| AZURERESOURCE      | Set resource name or ID (required)                                                                                         |                   |      X      |
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
<TabItem value="Cpu" label="Cpu">

| Macro              | Description                                                                                                                                        | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME          | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL           | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION        | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average           |             |
| FILTERMETRIC       | Filter on specific metrics. The Azure format must be used, for example: 'cpu\_percent' (can be a regexp)                                           |                   |             |
| WARNINGCPULIMIT    | Warning threshold                                                                                                                           |                   |             |
| CRITICALCPULIMIT   | Critical threshold                                                                                                                          |                   |             |
| WARNINGCPUPERCENT  | Warning threshold                                                                                                                           |                   |             |
| CRITICALCPUPERCENT | Critical threshold                                                                                                                          |                   |             |
| WARNINGCPUUSED     | Warning threshold                                                                                                                           |                   |             |
| CRITICALCPUUSED    | Critical threshold                                                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                 |                   |             |

</TabItem>
<TabItem value="Dtu" label="Dtu">

| Macro                         | Description                                                                                                           | Default value     | Mandatory   |
|:------------------------------|:----------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                     | Set timeframe in seconds                                                                                                                      | 900               |             |
| INTERVAL                      | Set interval of the metric query                                                                                                                      | PT5M              |             |
| AGGREGATION                   | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', and 'total'.                                                                                                                      | Average           |             |
| FILTERMETRIC                  | Filter on specific metrics. The Azure format must be used, for example: 'dtu\_consumption\_percent' (can be a regexp) |                   |             |
| WARNINGDTUCONSUMPTIONPERCENT  | Warning threshold                                                                                              |                   |             |
| CRITICALDTUCONSUMPTIONPERCENT | Critical threshold                                                                                             |                   |             |
| WARNINGEDTULIMIT              | Warning threshold                                                                                              |                   |             |
| CRITICALEDTULIMIT             | Critical threshold                                                                                             |                   |             |
| WARNINGEDTUUSED               | Warning threshold                                                                                              |                   |             |
| CRITICALEDTUUSED              | Critical threshold                                                                                             |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                    |                   |             |

</TabItem>
<TabItem value="Log-Usage" label="Log-Usage">

| Macro                        | Description                                                                                                                   | Default value     | Mandatory   |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                    | Set timeframe in seconds                                                                                                                              | 900               |             |
| INTERVAL                     | Set interval of the metric query                                                                                                                              | PT5M              |             |
| AGGREGATION                  | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', and 'total'.                                                                                                                              | Average           |             |
| FILTERMETRIC                 | Filter on specific metrics. The Azure format must be used, for example: 'allocated\_data\_storage\_percent' (can be a regexp) |                   |             |
| WARNINGLOGWRITEPERCENT       | Warning threshold                                                                                                                              |                   |             |
| CRITICALLOGWRITEPERCENT      | Critical threshold                                                                                                                              |                   |             |
| WARNINGTEMPDBLOGSIZE         | Warning threshold                                                                                                                              |                   |             |
| CRITICALTEMPDBLOGSIZE        | Critical threshold                                                                                                                              |                   |             |
| WARNINGTEMPDBLOGUSEDPERCENT  | Warning threshold                                                                                                                              |                   |             |
| CRITICALTEMPDBLOGUSEDPERCENT | Critical threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                            |                   |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                   | Description                                                                                                   | Default value     | Mandatory   |
|:------------------------|:--------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME               | Set timeframe in seconds                                                                                                              | 900               |             |
| INTERVAL                | Set interval of the metric query                                                                                                              | PT5M              |             |
| AGGREGATION             | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', and 'total'.                                                                                                              | Average           |             |
| FILTERMETRIC            | Filter on specific metrics. The Azure format must be used, for example: 'sessions\_percent' (can be a regexp) |                   |             |
| WARNINGSESSIONSPERCENT  | Warning threshold                                                                                                              |                   |             |
| CRITICALSESSIONSPERCENT | Critical threshold                                                                                                              |                   |             |
| WARNINGWORKERSPERCENT   | Warning threshold                                                                        |                   |             |
| CRITICALWORKERSPERCENT  | Critical threshold                                                                        |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).            |                   |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro                               | Description                                                                                                                   | Default value     | Mandatory   |
|:------------------------------------|:------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                           | Set timeframe in seconds                                                                                                                              | 900               |             |
| INTERVAL                            | Set interval of the metric query                                                                                                                              | PT5M              |             |
| AGGREGATION                         | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', and 'total'.                                                                                                                              | Average           |             |
| FILTERMETRIC                        | Filter on specific metrics. The Azure format must be used, for example: 'allocated\_data\_storage\_percent' (can be a regexp) |                   |             |
| WARNINGALLOCATEDDATASTORAGE         | Warning threshold                                                                                                      |                   |             |
| CRITICALALLOCATEDDATASTORAGE        | Critical threshold                                                                                                     |                   |             |
| WARNINGALLOCATEDDATASTORAGEPERCENT  | Warning threshold                                                                                                                              |                   |             |
| CRITICALALLOCATEDDATASTORAGEPERCENT | Critical threshold                                                                                                                              |                   |             |
| WARNINGSTORAGEPERCENT               | Warning threshold                                                                                                      |                   |             |
| CRITICALSTORAGEPERCENT              | Critical threshold                                                                                                     |                   |             |
| WARNINGSTORAGEUSED                  | Warning threshold                                                                                                      |                   |             |
| CRITICALSTORAGEUSED                 | Critical threshold                                                                                                     |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                            |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor an Azure Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_azure_database_elasticpool_api.pl \
	--plugin=cloud::azure::database::elasticpool::plugin \
	--mode=storage \
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
	--interval='PT5M' \
	--aggregation='Average' \
	--warning-storage-percent='' \
	--critical-storage-percent='' \
	--warning-allocated-data-storage='' \
	--critical-allocated-data-storage='' \
	--warning-storage-used='' \
	--critical-storage-used='' \
	--warning-allocated-data-storage-percent='' \
	--critical-allocated-data-storage-percent=''
```

The expected command output is shown below:

```bash
OK: Allocated data storage percentage: 29 % Allocated data storage: 99 B Storage usage percentage: 2 % Storage usage: 21 B | 'elasticpool.storage.data.allocated.percentage'=29%;;;;'elasticpool.storage.data.allocated.bytes'=99B;;;;'elasticpool.storage.usage.percentage'=2%;;;;'elasticpool.storage.used.bytes'=21B;;;;
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
/usr/lib/centreon/plugins/centreon_azure_database_elasticpool_api.pl \
	--plugin=cloud::azure::database::elasticpool::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                 | Linked service template                              |
|:-------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/elasticpool/mode/cpu.pm)]             | Cloud-Azure-Database-Elasticpool-Cpu-Api-custom      |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/elasticpool/mode/discovery.pm)] | Used for host discovery                              |
| dtu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/elasticpool/mode/dtu.pm)]             | Cloud-Azure-Database-Elasticpool-Dtu-Api-custom      |
| log [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/elasticpool/mode/log.pm)]             | Cloud-Azure-Database-Elasticpool-Log-Api-custom      |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/elasticpool/mode/sessions.pm)]   | Cloud-Azure-Database-Elasticpool-Sessions-Api-custom |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/elasticpool/mode/storage.pm)]     | Cloud-Azure-Database-Elasticpool-Storage-Api-custom  |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_database_elasticpool_api.pl \
	--plugin=cloud::azure::database::elasticpool::plugin \
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
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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

</TabItem>
<TabItem value="azcli" label="azcli">

| Option            | Description                                                                                                                                           |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| --subscription    | Set Azure subscription (required if logged to several subscriptions).                                                                                 |
| --timeframe       | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                              |
| --interval        | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                       |
| --aggregation     | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.   |
| --zeroed          | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                   |
| --timeout         | Set timeout in seconds (default: 50).                                                                                                                 |
| --sudo            | Use 'sudo' to execute the command.                                                                                                                    |
| --command         | Command to get information (default: 'az'). Can be changed if you have output in a file.                                                              |
| --command-path    | Command path (default: none).                                                                                                                         |
| --command-options | Command options (default: none).                                                                                                                      |
| --proxyurl        | Proxy URL if any                                                                                                                                      |

</TabItem>
</Tabs>

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option           | Description                                                                                                 |
|:-----------------|:------------------------------------------------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                                                         |
| --resource-group | Set resource group (required if resource's name is used).                                                   |
| --filter-metric  | Filter on specific metrics. The Azure format must be used, for example: 'cpu\_percent' (can be a regexp).   |
| --warning-*      | Warning threshold where * can be: 'cpu-limit', 'cpu-percent', 'cpu-used'.                                   |
| --critical-*     | Critical threshold where * can be: 'cpu-limit', 'cpu-percent', 'cpu-used'.                                  |

</TabItem>
<TabItem value="Dtu" label="Dtu">

| Option           | Description                                                                                                              |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                                                                      |
| --resource-group | Set resource group (required if resource's name is used).                                                                |
| --filter-metric  | Filter on specific metrics. The Azure format must be used, for example: 'dtu\_consumption\_percent' (can be a regexp).   |
| --warning-*      | Warning threshold where * can be: 'dtu-consumption-percent', 'edtu-limit', 'edtu-used'.                                  |
| --critical-*     | Critical threshold where * can be: 'dtu-consumption-percent', 'edtu-limit', 'edtu-used'.                                 |

</TabItem>
<TabItem value="Log-Usage" label="Log-Usage">

| Option           | Description                                                                                                                         |
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                                                                                 |
| --resource-group | Set resource group (required if resource's name is used).                                                                           |
| --filter-metric  | Filter on specific metrics. The Azure format must be used, for example: 'allocated\_data\_storage\_percent' (can be a regexp).      |
| --warning-*      | Warning threshold where * can be: 'allocated-data-storage', allocated-data-storage-percent', 'storage-percent', 'storage-used'.     |
| --critical-*     | Critical threshold where * can be: 'allocated-data-storage', allocated-data-storage-percent', 'storage-percent', 'storage-used'.    |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option           | Description                                                                                                      |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                                                              |
| --resource-group | Set resource group (required if resource's name is used).                                                        |
| --filter-metric  | Filter on specific metrics. The Azure format must be used, for example: 'sessions\_percent' (can be a regexp).   |
| --warning-*      | Warning threshold where * can be: 'workers-percent', sessions\_percent'.                                         |
| --critical-*     | Critical threshold where * can be: 'workers-percent', sessions\_percent'.                                        |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option           | Description                                                                                                                         |
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                                                                                 |
| --resource-group | Set resource group (required if resource's name is used).                                                                           |
| --filter-metric  | Filter on specific metrics. The Azure format must be used, for example: 'allocated\_data\_storage\_percent' (can be a regexp).      |
| --warning-*      | Warning threshold where * can be: 'allocated-data-storage', allocated-data-storage-percent', 'storage-percent', 'storage-used'.     |
| --critical-*     | Critical threshold where * can be: 'allocated-data-storage', allocated-data-storage-percent', 'storage-percent', 'storage-used'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_database_elasticpool_api.pl \
	--plugin=cloud::azure::database::elasticpool::plugin \
	--mode=storage \
	--custommode='azcli' \
	--help
```
