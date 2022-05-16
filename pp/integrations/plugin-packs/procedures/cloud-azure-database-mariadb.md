---
id: cloud-azure-database-mariadb
title: Azure Database for MariaDB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Azure Database for MariaDB** brings a host templates:

* Cloud-Azure-Database-MariaDB-custom

It brings the following service templates:

| Service Alias  | Service Template                                | Service Description                                     | Default |
|:---------------|:------------------------------------------------|:--------------------------------------------------------|:--------|
| Connections    | Cloud-Azure-Database-MariaDB-Connections-Api    | Check Azure Database for MariaDB connections statistics | X       |
| Cpu            | Cloud-Azure-Database-MariaDB-Cpu-Api            | Check Azure Database for MariaDB CPU usage              | X       |
| IO-Consumption | Cloud-Azure-Database-MariaDB-IO-Consumption-Api | Check Azure Database for MariaDB IO usage               | X       |
| Memory         | Cloud-Azure-Database-MariaDB-Memory-Api         | Check Azure Database for MariaDB memory usage           | X       |
| Replication    | Cloud-Azure-Database-MariaDB-Replication-Api    | Check Azure Database for MariaDB replication status     | X       |
| Storage        | Cloud-Azure-Database-MariaDB-Storage-Api        | Check Azure Database for MariaDB storage statistics     | X       |
| Traffic        | Cloud-Azure-Database-MariaDB-Traffic-Api        | Check Azure Database for MariaDB network usage          | X       |

### Discovery rules

The Centreon Plugin Pack **Azure Database for MariaDB** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the Centreon configuration. This provider is named **Microsoft Azure Database for MariaDB**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-database-mariadb-provider.png)

> This discovery feature is only compatible with the **api** custom mode. **azcli** is not supported.

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Metric Name                        | Unit  |
|:-----------------------------------|:------|
| azmariadb.connections.active.count |       |
| azmariadb.connections.failed.count |       |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| azmariadb.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="IO-Consumption" label="IO-Consumption">

| Metric Name                              | Unit  |
|:-----------------------------------------|:------|
| azmariadb.ioconsumption.usage.percentage | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name                       | Unit  |
|:----------------------------------|:------|
| azmariadb.memory.usage.percentage | %     |

</TabItem>
<TabItem value="Replication" label="Replication">

| Metric Name                     | Unit  |
|:--------------------------------|:------|
| azmariadb.slave.latency.seconds |       |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric Name                                  | Unit  |
|:---------------------------------------------|:------|
| azmariadb.storage.serverlog.limit.bytes      | B     |
| azmariadb.storage.serverlog.usage.percentage | %     |
| azmariadb.storage.serverlog.usage.bytes      | B     |
| azmariadb.storage.backup.usage.bytes         | B     |
| azmariadb.storage.limit.bytes                | B     |
| azmariadb.storage.usage.percentage           | %     |
| azmariadb.storage.usage.bytes                | B     |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric Name                 | Unit  |
|:----------------------------|:------|
| azmariadb.traffic.in.bytes  | B     |
| azmariadb.traffic.out.bytes | B     |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Database MariaDB** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Database-MariaDB-Api
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure Database for MariaDB** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Database MariaDB** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Database-MariaDB-Api
```

2. Install the **Azure Database for MariaDB** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-azure-database-mariadb
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure Database for MariaDB** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
* Aplly the **Cloud-Azure-Database-MariaDB-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.
These mandatory macros differ depending on the custom mode used.

> Two methods can be used to set the macros:

>> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`)
in **AZURERESOURCE**
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Obligatoire | Macro              | Description                                       |
|:------------|:-------------------|:--------------------------------------------------|
| X           | AZUREAPICUSTOMMODE | Custom mode **api**                               |
| X           | AZURECLIENTID      | Client ID                                         |
| X           | AZURECLIENTSECRET  | Client secret                                     |
| X           | AZURERESOURCE      | ID or name of the Azure Database MariaDB resource |
|             | AZURERESOURCEGROUP | Resource group name if resource name is used      |
| X           | AZURESUBSCRIPTION  | Subscription ID                                   |
| X           | AZURETENANT        | Tenant ID                                         |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Obligatoire | Macro              | Description                                       |
|:------------|:-------------------|:--------------------------------------------------|
| X           | AZURECLICUSTOMMODE | Custom mode **azcli**                             |
| X           | AZURERESOURCE      | ID or name of the Azure Database MariaDB resource |
|             | AZURERESOURCEGROUP | Resource group name if resource name is used      |
| X           | AZURESUBSCRIPTION  | Subscription ID                                   |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_database_mariadb_api.pl \
    --plugin=cloud::azure::database::mariadb::plugin \
    --mode=traffic \
    --custommode='api' \
    --resource='' \
    --resource-group='' \
    --subscription='' \
    --tenant='' \
    --client-id='' \
    --client-secret='' \
    --proxyurl='' \
    --filter-metric='' \
    --filter-dimension='' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Average' \
    --warning-serverlog-percent='' \
    --critical-serverlog-percent='' \
    --warning-storage-percent='' \
    --critical-storage-percent='' \
    --warning-storage-backup='' \
    --critical-storage-backup='' \
    --warning-storage-used='' \
    --critical-storage-used='' \
    --warning-storage-limit='' \
    --critical-storage-limit='' \
    --warning-serverlog-usage='' \
    --critical-serverlog-usage='' \
    --warning-serverlog-limit='' \
    --critical-serverlog-limit='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Instance 'myresource' Statistic 'maximum' Metrics Server Log storage percent: 0.00%, Storage Percent: 14.41%, Backup Storage used: 28.90GB, Storage Used: 21.62GB, Storage Limit: 150.00GB, Server Log storage used: 0.00B, Server Log storage limit: 7.00GB | 'myresource~maximum#azmariadb.storage.serverlog.usage.percentage'=0.00%;;;0; 'myresource~maximum#azmariadb.storage.usage.percentage'=14.41%;;;0; 'myresource~maximum#azmariadb.storage.backup.usage.bytes'=31029043513.00B;;;0; 'myresource~maximum#azmariadb.storage.usage.bytes'=23212425216.00B;;;0; 'myresource~maximum#azmariadb.storage.limit.bytes'=161061273600.00B;;;0; 'myresource~maximum#azmariadb.storage.serverlog.usage.bytes'=0.00B;;;0; 'myresource~maximum#azmariadb.storage.serverlog.limit.bytes'=7516192768.00B;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_database_mariadb_api.pl \
    --plugin=cloud::azure::database::mariadb::plugin \
    --mode=storage \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_database_mariadb_api.pl \
    --plugin=cloud::azure::database::mariadb::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).