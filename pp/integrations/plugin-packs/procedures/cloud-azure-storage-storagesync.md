---
id: cloud-azure-storage-storagesync
title: Azure Storage Sync
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

By transforming a Windows Server into a quick cache, Azure Storage Sync service
allows you to centralize your files share in Azure Files.

The Centreon Monitoring Connector *Azure Storage Sync* can rely on Azure API or Azure CLI
to collect the metrics related to the Storage Sync service.

## Pack assets

### Monitored objects

* Files synchronised 
* Recalls statistics
* Server Status

### Discovery rules

The Centreon Monitoring Connector *Azure Storage Sync* includes a Host Discovery *provider* to
automatically discover the Azure instances of a given subscription and add them
to the Centreon configuration. This provider is named **Microsoft Azure Storage Sync**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-storage-storagesync-provider.png)
> This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.
More information about the Host Discovery module is available in the Centreon
documentation:
[Host Discovery](/docs/monitoring/discovery/hosts-discovery)

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Files-Synced" label="Files-Synced">

| Metric name                    | Description  | Unit  |
|:-------------------------------|:-------------|:------|
| storagesync.files.synced.count | Files Synced | Count |
| storagesync.item.errors.count  | Item errors  | Count |
| storagesync.bytes.synced.bytes | Bytes synced | B     |

</TabItem>
<TabItem value="Recalls" label="Recalls">

| Metric name                                        | Description                              | Unit |
|:---------------------------------------------------|:-----------------------------------------|:-----|
| storagesync.recalls.succesful.percentage           | Cloud tiering recall success rate        | %    |
| storagesync.recalls.application.size.bytes         | Cloud tiering recall size by application | B    |
| storagesync.recalls.size.bytes                     | Cloud tiering recall size                | B    |
| storagesync.recalls.total.size.bytes               | Cloud tiering recall                     | B    |
| storagesync.recalls.throughput.size.bytespersecond | Cloud tiering recall throughput          | B/s  |

</TabItem>
<TabItem value="Server-Status" label="Server-Status">

| Metric name                 | Description | Unit  |
|:----------------------------|:------------|:------|
| storagesync.heartbeat.count | Heartbeat   | Count |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon Poller expected to monitor *Azure Storage Sync* ressources:

```bash
yum install centreon-plugin-Cloud-Azure-Storage-StorageSync-Api
```

2. On the Centreon Web interface, install the *Azure Storage Sync* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon Poller expected to monitor *Azure Storage Sync* ressources:

```bash
yum install centreon-plugin-Cloud-Azure-Storage-StorageSync-Api
```

2. Install the *Azure Storage Sync* Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-azure-storage-storagesync
```

3. On the Centreon Web interface, install the *Azure Storage Sync* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Storage-StorageSync-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.
These mandatory Macros differ regarding the custom mode used.

> Two methods can be used to set the Macros:
> * full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.EventHub/<resource_type>/<resource_name>`)
in *AZURERESOURCE*
> * Resource Name in *AZURERESOURCE* associated with Resource Group (in *AZURERESOURCEGROUP*)

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'api'                                  |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURETENANT        | Tenant ID                                          |
| X         | AZURECLIENTID      | Client ID                                          |
| X         | AZURECLIENTSECRET  | Client secret                                      |
| X         | AZURERESOURCE      | ID or name of the Storage Sync resource            |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'azcli'                                |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURERESOURCE      | ID or name of the Storage Sync resource            |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for ? 

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the Plugin by running the following 
command:

```bash
 /usr/lib/centreon/plugins//centreon_azure_storage_storagesync_api.pl   \
    --plugin=cloud::azure::storage::storagesync::plugin  \
    --mode=files-synced  \
    --custommode='api'  \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='STO001ABCD' \
    --resource-group='RSG1234'
    --aggregation='Total' \
    --timeframe='900' \
    --interval='PT5M' \
    --warning-item-errors='800'  \
    --critical-item-errors='900'
 ```

 Expected command output is shown below:

```bash
OK : Instance 'STO001ABCD' Statistic 'total'Files Synced: 546.00, Item errors: 3.00, Bytes synced: 246.00 |
'STO001ABCD~storagesync.files.synced.count'=546;;;; 'STO001ABCD~storagesync.item.errors.count'=3;800;900;0; 'STO001ABCD~storagesync.bytes.synced.bytes'=246;;;0;
 ```

The command above checks the number of failed files synchronization of an Azure *Storage Sync* instance using the 'api' custom-mode
(`--plugin=cloud::azure::network::cdn::plugin --mode=requests --custommode=api`).
This Storage Sync instance is identified by its id (`--resource='STO001ABCD'`) and its associated group (`--resource-group='RSG1234'`).
The authentication parameters to be used with the custom mode are specified
in the options (`--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'`).

The calculated metrics are the total values (`--aggregation='Total'`) of a 900 secondes / 15 min period (`--timeframe='900'`)
with one sample per 5 minutes (```--interval='PT5M'```).

This command would trigger a WARNING alarm if the number of failed files synchronization  is reported as over 800 (```--warning-item-errors='800'`)
and a CRITICAL alarm over 900 errors (`--critical-item-errors='900'`).

All the available options for a given mode can be displayed by adding the `--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_storage_storagesync_api.pl   \
    --plugin=cloud::azure::storage::storagesync::plugin  \
    --mode=files-synced  \
    --help
```

All Plugin modes can be displayed by adding the `--list-mode` parameter to 
the command:

```bash
 /usr/lib/centreon/plugins//centreon_azure_storage_storagesync_api.pl   \
    --plugin=cloud::azure::storage::storagesync::plugin  \
    --list-mode
```

### Troubleshooting

#### The Azure credentials have changed and the Plugin does not work anymore

The Plugin is using a cache file to keep connection information and avoid an authentication at each call. 
If some of the authentication parameters change, you must delete the cache file. 

The cache file can be found within  `/var/lib/centreon/centplugins/` folder with a name similar to azure_api_`<md5>_<md5>_<md5>_<md5>`.

#### `UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)`

When I run my command I obtain the following error message:
```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```.

It means that some parameters used to authenticate the API request are wrong. The 'ERROR_NAME' string gives 
some hints about where the problem stands. 

As an example, if my Client ID or Client Secret are wrong, 'ERROR_DESC' value will be 'invalid_client'. 

#### `UNKNOWN: 500 Can't connect to login.microsoftonline.com:443`

This error message means that the Centreon Plugin couldn't successfully connect to the Azure Login API. Check that no third party
device (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API.
This can be done by using this option in the command: `--proxyurl='http://proxy.mycompany:8080'`.

#### `UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values`

This command result means that Azure does not have any value for the requested period.
This result can be overriden by adding the `--zeroed` option in the command. This will force a value of 0 when no metric has
been collected and will prevent the UNKNOWN error message.