---
id: cloud-azure-database-sqlserver
title: Azure SQL Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Azure SQL Server** brings a host template:

* Cloud-Azure-Database-SqlServer-custom

It brings the following service template:

| Service Alias | Service Template                                 | Service Description     | Default |
|:--------------|:-------------------------------------------------|:------------------------|:--------|
| Server-Status | Cloud-Azure-Database-SqlServer-Server-Status-Api | Check SQL server status | X       |

### Discovery rules

The Centreon Monitoring Connector **Azure SQL Server** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the Centreon configuration. This provider is named **Microsoft Azure SQL Server**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-database-sqlserver-provider.png)

> This discovery feature is only compatible with the **api** custom mode. **azcli** is not supported.

More information about discovering hosts automatically is available on the [dedicated page](/onprem/monitoring/discovery/hosts-discovery).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Server-Status" label="Server-Status">

| Metric Name                 | Unit   |
|:----------------------------|:-------|
| Server health status        | string |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **Azure SQL Server** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Database-SqlServer-Api
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Azure SQL Server** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **Azure SQL Server** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Database-SqlServer-Api
```

2. Install the **Azure SQL Server** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-azure-database-sqlserver
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Azure SQL Server** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
* Aplly the **Cloud-Azure-Database-SqlServer-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.
These mandatory macros differ depending on the custom mode used.

> Two methods can be used to set the macros:

>> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`)
in **AZURERESOURCE**
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory   | Macro              | Description                                  |
|:------------|:-------------------|:---------------------------------------------|
|             | AZUREAPICUSTOMMODE | Custom mode **api**                          |
|             | AZURECLIENTID      | Client ID                                    |
|             | AZURECLIENTSECRET  | Client secret                                |
|             | AZURERESOURCE      | ID or name of the Azure SQL Server resource  |
|             | AZURERESOURCEGROUP | Resource group name if resource name is used |
|             | AZURESUBSCRIPTION  | Subscription ID                              |
|             | AZURETENANT        | Tenant ID                                    |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory   | Macro              | Description                                  |
|:------------|:-------------------|:---------------------------------------------|
|             | AZURECLICUSTOMMODE | Custom mode **azcli**                        |
|             | AZURERESOURCE      | ID or name of the Azure SQL Server resource  |
|             | AZURERESOURCEGROUP | Resource group name if resource name is used |
|             | AZURESUBSCRIPTION  | Subscription ID                              |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_database_sqlserver_api.pl \
    --plugin=cloud::azure::database::sqlserver::plugin \
    --mode=server-status \
    --resource='SQLSRV001ABCD' \
    --resource-group='RSG1234' \
    --custommode='api' \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --proxyurl='' \
    --location='' \
    --filter-name='' \
    --warning-status='' \
    --critical-status='%{state} ne "Ready"' \
```

The expected command output is shown below:

```bash
OK: Server 'SQLSRV001ABCD' State: '%s' [FQDN:'%s'] | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_database_sqlserver_api.pl \
    --plugin=cloud::azure::database::sqlserver::plugin \
    --mode=server-status \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_database_sqlserver_api.pl \
    --plugin=cloud::azure::database::sqlserver::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).