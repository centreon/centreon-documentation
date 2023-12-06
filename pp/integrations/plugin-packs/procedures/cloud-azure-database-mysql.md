---
id: cloud-azure-database-mysql
title: Azure Database for MySQL
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Azure Database for MySQL allows you to easily set up scalable and secure high 
availability MySQL instances.

The Centreon Monitoring Connector *Azure Database for MySQL* can rely on Azure API or Azure CLI to collect the metrics related to the
API Management service.

## Pack Assets

### Monitored Objects

* Azure *Azure Database for MySQL* instances
    * Connections
    * CPU
    * IO consumption
    * Memory
    * Queries
    * Replication
    * Storage
    * Traffic


### Discovery rules

The Centreon Monitoring Connector *Azure Database for MySQL* includes a Host Discovery *provider* to automatically discover the Azure instances of a given
subscription and add them to the Centreon configuration.
This provider is named **Microsoft Azure Database for MySQL**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-database-mysql-provider.png)

> This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](/docs/monitoring/discovery/hosts-discovery)

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Metric Name                       | Description                   | Unit  |
|:----------------------------------|:------------------------------|:------|
| azmysql.connections.active.count  | Number of active connections  | Count |
| azmysql.connections.failed.count  | Number of failed Connections  | Count |
| azmysql.connections.aborted.count | Number of aborted Connections | Count |
| azmysql.connections.total.count   | Number of total Connections   | Count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric Name                        | Description     | Unit      |
|:---------------------------------- |:----------------|:----------|
| azmysql.cpu.utilization.percentage | CPU utilization | Percentage |

</TabItem>
<TabItem value="IO-Consumption" label="IO-Consumption">

| Metric Name                            | Description    | Unit       |
|:---------------------------------------|:---------------|:-----------|
| azmysql.ioconsumption.usage.percentage | IO consumption | Percentage |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name                     | Description  | Unit       |
|:--------------------------------|:-------------|:-----------|
| azmysql.memory.usage.percentage | Memory usage | Percentage |

</TabItem>
<TabItem value="Queries" label="Queries">

| Metric Name           | Description       | Unit  |
|:----------------------|:------------------|:------|
| azmysql.queries.count | Number of queries | Count |

</TabItem>
<TabItem value="Replication" label="Replication">

| Metric Name                     | Description      | Unit    |
|:--------------------------------|:-----------------|:--------|
| azmysql.replication.lag.seconds | Replication Lag  | Seconds |
| azmysql.replication.lag.count   | Replication Lag  | Count   |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric Name                                | Description              | Unit       |
|:-------------------------------------------|:-------------------------|:-----------|
| azmysql.storage.usage.bytes                | Storage used             | Bytes      |
| azmysql.storage.limit.bytes                | Storage limit            | Bytes      |
| azmysql.storage.usage.percentage           | Storage used             | Percentage |
| azmysql.storage.backup.usage.bytes         | Backup storage used      | Bytes      |
| azmysql.storage.serverlog.limit.bytes      | Server Log storage limit | Bytes      |
| azmysql.storage.serverlog.usage.bytes      | Server Log storage used  | Bytes      |
| azmysql.storage.serverlog.usage.percentage | Server Log storage used  | Percentage |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric Name               | Description | Unit  |
|:--------------------------|:------------|:------|
| azmysql.traffic.out.bytes | Network Out | Bytes |
| azmysql.traffic.in.bytes  | Network In  | Bytes |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure in the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor Azure Database for MySQL resources:

```bash
yum install centreon-plugin-Cloud-Azure-Database-MySQL-Api
```

2. On the Centreon Web interface, install the *Azure Database for MySQL* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor Azure Database for MySQL resources:

```bash
yum install centreon-plugin-Cloud-Azure-Database-MySQL-Api
```

2. Install the Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-azure-database-mysql.noarch
```

3. On the Centreon Web interface, install the *Azure Database for MySQL* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Database-MySQL-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.
These mandatory Macros differ regarding the custom mode used.

> Two methods can be used to set the Macros:
> * full ID of the Resource (```/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.Network/<resource_type>/<resource_name>```)
in *AZURERESOURCE*
> * Resource Name in *AZURERESOURCE* associated with Resource Group (in *AZURERESOURCEGROUP*) and Resource Type (in *AZURERESOURCETYPE*)

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'api'                                  |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURETENANT        | Tenant ID                                          |
| X         | AZURECLIENTID      | Client ID                                          |
| X         | AZURECLIENTSECRET  | Client secret                                      |
| X         | AZURERESOURCE      | ID or name of the API Management resource          |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |
| X         | AZURERESOURCETYPE  | Associated Resource Type if resource name is used  |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'azcli'                                |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURERESOURCE      | ID or name of the API Management resource          |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |
| X         | AZURERESOURCETYPE  | Associated Resource Type if resource name is used  |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_azure_database_mysql_api.pl \
    --plugin=cloud::azure::database::mysql::plugin \
    --mode=cpu \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='SQL001ABCD' \
    --resource-group='RSG1234' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Average' \
    --warning-cpu-usage='80' \
    --critical-cpu-usage='90' \
```

Expected command output is shown below:

```bash
OK: Instance 'SQL001ABCD' Statistic 'average' Metrics CPU percent: 0.44 | 'SQL001ABCD~average#azmysql.cpu.utilization.percentage'=0.44;0:80;0:90;0;100
```

The command above checks the *CPU* utilization of an Azure *Azure Database for MySQL* instance using the 'api' custom-mode
(```--plugin=cloud::azure::database::mysql::plugin --mode=cpu --custommode=api```).
This instance is identified by its id (```--resource='SQL001ABCD'```) and its associated group (```--resource-group='RSG1234'```).
The authentication parameters to be used with the custom mode are specified in the options (```--subscription='xxxxxxxxx'
--tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

The calculated metrics are the total values (```--aggregation='Average'```) of a 900 secondes / 15 min period (```--timeframe='900'```)
with one sample per 5 minutes (```--interval='PT5M'```).

This command would trigger a WARNING alarm if the CPU utilization percentage
(```--filter-dimension="GatewayResponseCodeCategory eq '2XX'"```) is reported as over 80 (```--warning-cpu-usage='80'```)
and a CRITICAL alarm over 90 utilization percentage (```--critical-cpu-usage='90'```).

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_database_mysql_api.pl \
    --plugin=cloud::azure::database::mysql::plugin \
    --mode=cpu \
    --help
```

### Troubleshooting

#### The Azure credentials have changed and the Plugin does not work anymore

The Plugin is using a cache file to keep connection information and avoid an authentication at each call. 
If some of the authentication parameters change, you must delete the cache file. 

The cache file can be found within  ```/var/lib/centreon/centplugins/``` folder with a name similar to azure_api_`<md5>_<md5>_<md5>_<md5>`.`

#### ```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```

It means that some parameters used to authenticate the API request are wrong. The 'ERROR_NAME' string gives 
some hints about where the problem stands. 

As an example, if my Client ID or Client Secret are wrong, 'ERROR_DESC' value will be 'invalid_client'. 

#### ```UNKNOWN: 500 Can't connect to login.microsoftonline.com:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Azure Login API. Check that no third party
device (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API.
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

This command result means that Azure does not have any value for the requested period.
This result can be overriden by adding the ```--zeroed``` option in the command. This will force a value of 0 when no metric has
been collected and will prevent the UNKNOWN error message.
