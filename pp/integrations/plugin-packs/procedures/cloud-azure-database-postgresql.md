---
id: cloud-azure-database-postgresql
title: Azure Database for PostgreSQL
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Azure Database for PostgreSQL** brings a host template:

* **Cloud-Azure-Database-PostgreSQL-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Database-PostgreSQL-custom" label="Cloud-Azure-Database-PostgreSQL-custom">

| Service Alias  | Service Template                                          | Service Description                                          |
|:---------------|:----------------------------------------------------------|:-------------------------------------------------------------|
| Connections    | Cloud-Azure-Database-PostgreSQL-Connections-Api-custom    | Monitor Azure Database for PostgreSQL connections statistics |
| Cpu            | Cloud-Azure-Database-PostgreSQL-Cpu-Api-custom            | Monitor Azure Database for PostgreSQL CPU usage              |
| IO-Consumption | Cloud-Azure-Database-PostgreSQL-IO-Consumption-Api-custom | Monitor Azure Database for PostgreSQL IO usage               |
| Memory         | Cloud-Azure-Database-PostgreSQL-Memory-Api-custom         | Monitor Azure Database for PostgreSQL memory usage           |
| Replication    | Cloud-Azure-Database-PostgreSQL-Replication-Api-custom    | Monitor Azure Database for PostgreSQL replication status     |
| Storage        | Cloud-Azure-Database-PostgreSQL-Storage-Api-custom        | Monitor Azure Database for PostgreSQL storage statistics     |
| Traffic        | Cloud-Azure-Database-PostgreSQL-Traffic-Api-custom        | Monitor Azure Database for PostgreSQL network usage          |

> The services listed above are created automatically when the **Cloud-Azure-Database-PostgreSQL-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| azpostgres.connections.active.count  | count |
| azpostgres.connections.failed.count  | count |
| azpostgres.connections.aborted.count | count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| azpostgresql.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="IO-Consumption" label="IO-Consumption">

| Metric name                               | Unit  |
|:------------------------------------------|:------|
| azpostgres.ioconsumption.usage.percentage | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                        | Unit  |
|:-----------------------------------|:------|
| azpostgres.memory.usage.percentage | %     |

</TabItem>
<TabItem value="Replication" label="Replication">

| Metric name                        | Unit  |
|:-----------------------------------|:------|
| azpostgres.replication.lag.seconds | s     |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| azpostgres.storage.backup.usage.bytes    | B     |
| azpostgres.storage.serverlog.usage.bytes | B     |
| azpostgres.storage.usage.percentage      | %     |
| azpostgres.storage.usage.bytes           | B     |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric name                  | Unit  |
|:-----------------------------|:------|
| azpostgres.traffic.out.bytes | B     |
| azpostgres.traffic.in.bytes  | B     |

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
dnf install centreon-pack-cloud-azure-database-postgresql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-database-postgresql
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-azure-database-postgresql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-database-postgresql
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Azure Database for PostgreSQL** connector through
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
dnf install centreon-plugin-Cloud-Azure-Database-Postgres-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Database-Postgres-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-azure-database-postgres-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Database-Postgres-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-Database-PostgreSQL-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
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

> Set the following options in the EXTRAOPTIONS macro if you are monitoring resources from Microsoft Azure operated by 21Vianet (Azure China):
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
<TabItem value="Connections" label="Connections">

| Macro                     | Description                                                                                                                                        | Default value     | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Total             |             |
| FILTERMETRIC              | Filter metrics (available metrics: 'Active Connections', 'Failed Connections', 'Aborted Connections').                                             |                   |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"               |                   |             |
| WARNINGCONNECTIONSACTIVE  | Thresholds where '*'                                                                                                                               |                   |             |
| CRITICALCONNECTIONSACTIVE | Thresholds where '*'                                                                                                                               |                   |             |
| WARNINGCONNECTIONSFAILED  | Thresholds where '*'                                                                                                                               |                   |             |
| CRITICALCONNECTIONSFAILED | Thresholds where '*'                                                                                                                               |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                 |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME        | Set timeframe in seconds (e.g. '3600' to check last 60 minutes).                                   | 900               |             |
| INTERVAL         | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION      | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Total             |             |
| FILTERMETRIC     | Filter metrics (available metrics: 'CPU percent').                                             |                   |             |
| FILTERDIMENSION  | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'". |
| WARNINGCPUUSAGE  | Set warning threshold for CPU utilization percentage                                               |                   |             |
| CRITICALCPUUSAGE | Set critical threshold for CPU utilization percentage                                              |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="IO-Consumption" label="IO-Consumption">

| Macro                      | Description                                                                                        | Default value     | Mandatory   |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                  | Set timeframe in seconds (e.g. '3600' to check last 60 minutes).                                   | 900               |             |
| INTERVAL                   | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Maximum             |             |
| FILTERMETRIC               | Filter metrics (available metrics: 'IO Percent').                                             |                   |             |
| FILTERDIMENSION  | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'". |
| WARNINGIOCONSUMPTIONUSAGE  | Set warning threshold for IO comsuption usage                                                      |                   |             |
| CRITICALIOCONSUMPTIONUSAGE | Set critical threshold for IO comsuption usage                                                     |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro               | Description                                                                                        | Default value     | Mandatory   |
|:--------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME           | Set timeframe in seconds (e.g. '3600' to check last 60 minutes).                                   | 900               |             |
| INTERVAL            | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION         | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average             |             |
| FILTERMETRIC        | Filter metrics (available metrics: 'Memory percent').                                             |                   |             |
| FILTERDIMENSION     | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'". |
| WARNINGMEMORYUSAGE  | Set warning threshold for memory utilization percentage                                            |                   |             |
| CRITICALMEMORYUSAGE | Set critical threshold for memory utilization percentage                                           |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Replication" label="Replication">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (e.g. '3600' to check last 60 minutes).                                   | 900               |             |
| INTERVAL               | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION            | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Maximum             |             |
| FILTERMETRIC           | Filter metrics (available metrics: 'Replication Lag In Seconds').                                             |                   |             |
| FILTERDIMENSION        | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'". |
| WARNINGREPLICATIONLAG  | Thresholds where '*'                                                                               |                   |             |
| CRITICALREPLICATIONLAG | Thresholds where '*'                                                                               |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --zeroed          |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (e.g. '3600' to check last 60 minutes).                                   | 900               |             |
| INTERVAL               | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION            | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Maximum             |             |
| FILTERMETRIC           | Filter metrics (available metrics: 'Backup Storage used', 'Server Log storage used', 'Storage Percent', 'Storage Used'). |                   |             |
| FILTERDIMENSION        | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'". |
| WARNINGSERVERLOGUSAGE  | Thresholds                                                                                  |                   |             |
| CRITICALSERVERLOGUSAGE | Thresholds                                                                                 |                   |             |
| WARNINGSTORAGEBACKUP   | Thresholds                                                                                 |                   |             |
| CRITICALSTORAGEBACKUP  | Thresholds                                                                                 |                   |             |
| WARNINGSTORAGEPERCENT  | Thresholds                                                                                |                   |             |
| CRITICALSTORAGEPERCENT | Thresholds                                                                                 |                   |             |
| WARNINGSTORAGEUSED     | Thresholds                                                                                   |                   |             |
| CRITICALSTORAGEUSED    | Thresholds                                                                                 |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Macro              | Description                                                                                        | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME          | Set timeframe in seconds (e.g. '3600' to check last 60 minutes).                                   | 900               |             |
| INTERVAL           | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION        | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average             |             |
| FILTERMETRIC       | Filter metrics (available metrics: 'Network Out', 'Network In'). |                   |             |
| FILTERDIMENSION    | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'". |
| WARNINGTRAFFICIN   | Thresholds                                                                                |                   |             |
| CRITICALTRAFFICIN  | Thresholds                                                                                 |                   |             |
| WARNINGTRAFFICOUT  | Thresholds                                                                                |                   |             |
| CRITICALTRAFFICOUT | Thresholds                                                                                |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an Azure Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_azure_database_postgres_api.pl \
	--plugin=cloud::azure::database::postgres::plugin \
	--mode=traffic \
	--custommode='api' \
	--resource='' \
	--resource-group='' \
	--subscription='' \
	--tenant='' \
	--client-id='' \
	--client-secret='' \
	--proxyurl=''  \
	--filter-metric='' \
	--filter-dimension='' \
	--timeframe='900' \
	--interval='PT5M' \
	--aggregation='Average' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--warning-traffic-in='' \
	--critical-traffic-in='' 
```

The expected command output is shown below:

```bash
OK: Network Out: 62 B Network In: 48 B | 'azpostgres.traffic.out.bytes'=62B;;;0;'azpostgres.traffic.in.bytes'=48B;;;0;
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
/usr/lib/centreon/plugins/centreon_azure_database_postgres_api.pl \
	--plugin=cloud::azure::database::postgres::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                       | Linked service template                                   |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/postgres/mode/connections.pm)]      | Cloud-Azure-Database-PostgreSQL-Connections-Api-custom    |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/postgres/mode/cpu.pm)]                      | Cloud-Azure-Database-PostgreSQL-Cpu-Api-custom            |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/postgres/mode/discovery.pm)]          | Not used in this Monitoring Connector                     |
| io-consumption [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/postgres/mode/ioconsumption.pm)] | Cloud-Azure-Database-PostgreSQL-IO-Consumption-Api-custom |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/postgres/mode/memory.pm)]                | Cloud-Azure-Database-PostgreSQL-Memory-Api-custom         |
| replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/postgres/mode/replication.pm)]      | Cloud-Azure-Database-PostgreSQL-Replication-Api-custom    |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/postgres/mode/storage.pm)]              | Cloud-Azure-Database-PostgreSQL-Storage-Api-custom        |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/postgres/mode/traffic.pm)]              | Cloud-Azure-Database-PostgreSQL-Traffic-Api-custom        |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_database_postgres_api.pl \
	--plugin=cloud::azure::database::postgres::plugin \
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
<TabItem value="Connections" label="Connections">

| Option                   | Description                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------|
| --resource               | Set resource name or ID (required).                                                                                     |
| --resource-group         | Set resource group (required if resource's name is used).                                                               |
| --resource-type          | Set resource type (default: 'servers'). Can be 'servers', 'flexibleServers'.                                            |
| --warning-* --critical-* | Thresholds where '*' can be: 'connections-active', 'connections-failed', 'connections-aborted', 'connections-total'.    |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option               | Description                                                                    |
|:---------------------|:-------------------------------------------------------------------------------|
| --resource           | Set resource name or ID (required).                                            |
| --resource-group     | Set resource group (required if resource's name is used).                      |
| --resource-type      | Set resource type (default: 'servers'). Can be 'servers', 'flexibleServers'.   |
| --warning-cpu-usage  | Set warning threshold for CPU utilization percentage.                          |
| --critical-cpu-usage | Set critical threshold for CPU utilization percentage.                         |

</TabItem>
<TabItem value="IO-Consumption" label="IO-Consumption">

| Option                         | Description                                                                    |
|:-------------------------------|:-------------------------------------------------------------------------------|
| --resource                     | Set resource name or ID (required).                                            |
| --resource-group               | Set resource group (required if resource's name is used).                      |
| --resource-type                | Set resource type (default: 'servers'). Can be 'servers', 'flexibleServers'.   |
| --warning-ioconsumption-usage  | Set warning threshold for IO comsuption usage.                                 |
| --critical-ioconsumption-usage | Set critical threshold for IO comsuption usage.                                |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                  | Description                                                                    |
|:------------------------|:-------------------------------------------------------------------------------|
| --resource              | Set resource name or ID (required).                                            |
| --resource-group        | Set resource group (required if resource's name is used).                      |
| --resource-type         | Set resource type (default: 'servers'). Can be 'servers', 'flexibleServers'.   |
| --warning-memory-usage  | Set warning threshold for memory utilization percentage.                       |
| --critical-memory-usage | Set critical threshold for memory utilization percentage.                      |

</TabItem>
<TabItem value="Replication" label="Replication">

| Option                   | Description                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------|
| --resource               | Set resource name or ID (required).                                            |
| --resource-group         | Set resource group (required if resource's name is used).                      |
| --resource-type          | Set resource type (default: 'servers'). Can be 'servers', 'flexibleServers'.   |
| --warning-* --critical-* | Thresholds where '*' can be: 'replication-lag'.                                |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                   | Description                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------|
| --resource               | Set resource name or ID (required).                                                                     |
| --resource-group         | Set resource group (required if resource's name is used).                                               |
| --resource-type          | Set resource type (default: 'servers'). Can be 'servers', 'flexibleServers'.                            |
| --warning-* --critical-* | Thresholds where '*' can be: 'storage-backup', 'serverlog-usage', 'storage-percent', 'storage-used'.    |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Option                   | Description                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------|
| --resource               | Set resource name or ID (required).                                            |
| --resource-group         | Set resource group (required if resource's name is used).                      |
| --resource-type          | Set resource type (default: 'servers'). Can be 'servers', 'flexibleServers'.   |
| --warning-* --critical-* | Thresholds where '*' can be: 'traffic-out', 'traffic-in'.                      |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_database_postgres_api.pl \
	--plugin=cloud::azure::database::postgres::plugin \
	--mode=traffic \
	--custommode='azcli' \
	--help
```
