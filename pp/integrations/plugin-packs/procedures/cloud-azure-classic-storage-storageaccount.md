---
id: cloud-azure-classic-storage-storageaccount
title: Azure Classic Storage

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Azure Classic Storage** brings 5 different host templates:

* Cloud-Azure-ClassicStorage-StorageAccount-Account-custom
* Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom
* Cloud-Azure-ClassicStorage-StorageAccount-File-custom
* Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom
* Cloud-Azure-ClassicStorage-StorageAccount-Table-custom

It brings the following service templates:

| Service Alias                     | Service Template                                             | Service Description                                          | Default |
| :-------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :------ |
| Account-Transactions-Availability | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Availability-Api | Check storage account availability                           | X       |
| Account-Transactions-Count        | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Count-Api | Check storage account transactions number                    | X       |
| Account-Transactions-Latency      | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Latency-Api | Check storage successfull requests latency and processing time | X       |
| Account-Transactions-Throughput   | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Throughput-Api | Check storage ingress and egress data thoughput              | X       |
| Account-Used-Capacity             | Cloud-Azure-ClassicStorage-StorageAccount-Account-Used-Capacity-Api | Check storage usage                                          | X       |
| Blob-Capacity                     | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Capacity-Api  | Check Blob type storage usage                                | X       |
| Blob-Container-Count              | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Container-Count-Api | Check Bloc container count on the storage                    | X       |
| Blob-Count                        | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Count-Api     | Check object count on the storage                            | X       |
| Blob-Transactions-Availability    | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Availability-Api | Check storage blob availability                              | X       |
| Blob-Transactions-Count           | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Count-Api | Check storage blob transactions number                       | X       |
| Blob-Transactions-Latency         | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Latency-Api | Check storage blob successfull requests latency and processing time | X       |
| Blob-Transactions-Throughput      | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Throughput-Api | Check storage blob ingress and egress data thoughput         | X       |
| File-Capacity                     | Cloud-Azure-ClassicStorage-StorageAccount-File-Capacity-Api  | Check File type storage usage                                | X       |
| File-Count                        | Cloud-Azure-ClassicStorage-StorageAccount-File-Count-Api     | Check file count on the storage                              | X       |
| File-Share-Count                  | Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Count-Api | Check share count on the storage                             | X       |
| File-Share-Quota                  | Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Quota-Api | Check storage size in bytes                             | X       |
| File-Transactions-Availability    | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Availability-Api | Check storage file availability                              | X       |
| File-Transactions-Count           | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Count-Api | Check storage file transactions number                       | X       |
| File-Transactions-Latency         | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Latency-Api | Check storage file successfull requests latency and processing time | X       |
| File-Transactions-Throughput      | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Throughput-Api | Check storage file ingress and egress data thoughput         | X       |
| Health                            | Cloud-Azure-ClassicStorage-StorageAccount-Health-Api         | Check storage account state                                  | X       |
| Queue-Capacity                    | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Capacity-Api | Check Queue type storage usage                               | X       |
| Queue-Count                       | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Count-Api    | Check queue count on the storage                             | X       |
| Queue-Message-Count               | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Message-Count-Api | Check messages count queueing on the storage                 | X       |
| Queue-Transactions-Availability   | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Availability-Api | Check storage queue availability                             | X       |
| Queue-Transactions-Count          | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Count-Api | Check storage queue transactions number                      | X       |
| Queue-Transactions-Latency        | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Latency-Api | Check storage queue successfull requests latency and processing time | X       |
| Queue-Transactions-Throughput     | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Throughput-Api | Check storage queue ingress and egress data thoughput        | X       |
| Table-Capacity                    | Cloud-Azure-ClassicStorage-StorageAccount-Table-Capacity-Api | Check Table type storage usage                               | X       |
| Table-Count                       | Cloud-Azure-ClassicStorage-StorageAccount-Table-Count-Api    | Check table count on the storage                             | X       |
| Table-Entity-Count                | Cloud-Azure-ClassicStorage-StorageAccount-Table-Entity-Count-Api | Check entries count in tables on the storage                 | X       |
| Table-Transactions-Availability   | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Availability-Api | Check storage table availability                             | X       |
| Table-Transactions-Count          | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Count-Api | Check storage table transactions number                      | X       |
| Table-Transactions-Latency        | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Latency-Api | Check storage table successfull requests latency and processing time | X       |
| Table-Transactions-Throughput     | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Throughput-Api | Check storage table ingress and egress data thoughput        | X       |

### Discovery rules

The Centreon Plugin Pack **Azure Classic Storage** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the Centreon configuration. This provider is named **Microsoft Azure Classic Storage Account**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-classic-storage-storageaccount-provider.png)

> This discovery feature is only compatible with the **api** custom mode. **azcli** is not supported.

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Account-Transactions-Availability" label="Account-Transactions-Availability">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| usedcapacity_total                 | B     |


</TabItem>
<TabItem value="Account-Transactions-Count" label="Account-Transactions-Count">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| transactions_total                 | B     |


</TabItem>
<TabItem value="Account-Transactions-Latency" label="Account-Transactions-Latency">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| successserverlatency_average       | ms    |
| successe2elatency_average          | ms    |

</TabItem>
<TabItem value="Account-Transactions-Throughput" label="Account-Transactions-Throughput">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| ingress_total                      | B     |
| egress_total                       | B     |

</TabItem>
<TabItem value="Account-Used-Capacity" label="Account-Used-Capacity">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| usedcapacity_total                 | B     |

</TabItem>
<TabItem value="Blob-Capacity" label="Blob-Capacity">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| blobcapacity_total                 | B     |

</TabItem>
<TabItem value="Blob-Container-Count" label="Blob-Container-Count">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| containercount_average             |       |


</TabItem>
<TabItem value="Blob-Count" label="Blob-Count">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| blobcount_total                    |       |


</TabItem>
<TabItem value="Blob-Transactions-Availability" label="Blob-Transactions-Availability">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| availability_average               | %     |

</TabItem>
<TabItem value="Blob-Transactions-Count" label="Blob-Transactions-Count">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| transactions_total                 | B     |

</TabItem>
<TabItem value="Blob-Transactions-Latency" label="Blob-Transactions-Latency">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| successserverlatency_average       | ms    |
| successe2elatency_average          | ms    |

</TabItem>
<TabItem value="Blob-Transactions-Throughput" label="Blob-Transactions-Throughput">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| ingress_total                      | B     |
| egress_total                       | B     |

</TabItem>
<TabItem value="File-Capacity" label="File-Capacity">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| filecapacity_average               | B     |

</TabItem>
<TabItem value="File-Count" label="File-Count">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| filecount_average                  |       |

</TabItem>
<TabItem value="File-Share-Count" label="File-Share-Count">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| filesharecount_average             |       |


</TabItem>
<TabItem value="File-Share-Quota" label="File-Share-Quota">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| filesharecapacityquota_average     | B     |

</TabItem>
<TabItem value="File-Transactions-Availability" label="File-Transactions-Availability">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| availability_average               | %     |

</TabItem>
<TabItem value="File-Transactions-Count" label="File-Transactions-Count">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| transactions_total                 | B     |

</TabItem>
<TabItem value="File-Transactions-Latency" label="File-Transactions-Latency">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| successserverlatency_average       | ms    |
| successe2elatency_average          | ms    |

</TabItem>
<TabItem value="File-Transactions-Throughput" label="File-Transactions-Throughput">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| ingress_total                      | B     |
| egress_total                       | B     |

</TabItem>
<TabItem value="Health" label="Health">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| Status                             |       |

</TabItem>
<TabItem value="Queue-Capacity" label="Queue-Capacity">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| ingress_total                      | B     |
| egress_total                       | B     |

</TabItem>
<TabItem value="Queue-Count" label="Queue-Count">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| queuecount_average                 |       |

</TabItem>
<TabItem value="Queue-Message-Count" label="Queue-Message-Count">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| queuemessagecount_average          |       |

</TabItem>
<TabItem value="Queue-Transactions-Availability" label="Queue-Transactions-Availability">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| availability_average               | %     |

</TabItem>
<TabItem value="Queue-Transactions-Count" label="Queue-Transactions-Count">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| transactions_total                 | B     |

</TabItem>
<TabItem value="Queue-Transactions-Latency" label="Queue-Transactions-Latency">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| successserverlatency_average       | ms    |
| successe2elatency_average          | ms    |

</TabItem>
<TabItem value="Queue-Transactions-Throughput" label="Queue-Transactions-Throughput">

| Metric                             | Unit  |
|:-----------------------------------|:------|
| ingress_total                      | B     |
| egress_total                       | B     |

</TabItem>
<TabItem value="Table-Capacity" label="Table-Capacity">

| Metric                           | Unit  |
|:---------------------------------|:------|
| tablecapacity_average            | B     |

</TabItem>
<TabItem value="Table-Count" label="Table-Count">

| Metric                           | Unit  |
|:---------------------------------|:------|
| tablecount_average               | B     |

</TabItem>
<TabItem value="Table-Entity-Count" label="Table-Entity-Count">

| Metric                           | Unit  |
|:---------------------------------|:------|
| tableentitycount_average         |       |

</TabItem>
<TabItem value="Table-Transactions-Availability" label="Table-Transactions-Availability">

| Metric                           | Unit  |
|:---------------------------------|:------|
| availability_average             | %     |

</TabItem>
<TabItem value="Table-Transactions-Count" label="Table-Transactions-Count">

| Metric                           | Unit  |
|:---------------------------------|:------|
| transactions_total               | B     |

</TabItem>
<TabItem value="Table-Transactions-Latency" label="Table-Transactions-Latency">

| Metric                           | Unit |
|:---------------------------------|:------|
| successserverlatency_average     | ms    |
| successe2elatency_average        | ms    |

</TabItem>
<TabItem value="Table-Transactions-Throughput" label="Table-Transactions-Throughput">

| Metric                           | Unit |
|:---------------------------------|:------|
| ingress_total                    | B     |
| egress_total                     | B     |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Classic Storage** resources:

```bash
yum install centreon-plugin-Cloud-Azure-ClassicStorage-StorageAccount-Api
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure Classic Storage** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Classic Storage** resources:

```bash
yum install centreon-plugin-Cloud-Azure-ClassicStorage-StorageAccount-Api
```

2. Install the **Azure Classic Storage** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-azure-classicstorage-storageaccount
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure Classic Storage** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
* Aplly the **Cloud-Azure-ClassicStorage-StorageAccount-Account-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.
  These mandatory macros differ depending on the custom mode used.

> Two methods can be used to set the macros:
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`)
>   in **AZURERESOURCE**
>
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Macro              | Description                                      |
| :-------- | :----------------- | :----------------------------------------------- |
| X         | AZUREAPICUSTOMMODE | Custom mode **api**                              |
| X         | AZURECLIENTID      | Client ID                                        |
| X         | AZURECLIENTSECRET  | Client secret                                    |
| X         | AZURERESOURCE      | ID or name of the Azure Classic Storage resource |
|           | AZURERESOURCEGROUP | Resource group name if resource name is used     |
| X         | AZURESUBSCRIPTION  | Subscription ID                                  |
| X         | AZURETENANT        | Tenant ID                                        |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Macro              | Description                                      |
| :-------- | :----------------- | :----------------------------------------------- |
| X         | AZURECLICUSTOMMODE | Custom mode **azcli**                            |
| X         | AZURERESOURCE      | ID or name of the Azure Classic Storage resource |
|           | AZURERESOURCEGROUP | Resource group name if resource name is used     |
| X         | AZURESUBSCRIPTION  | Subscription ID                                  |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_classicstorage_storageaccount_api.pl \
    --plugin=cloud::azure::classicstorage::storageaccount::plugin \
    --mode=transactions-latency \
    --custommode='api' \
    --resource='/subscriptions/xxx/resourceGroups/rgdev/providers/Microsoft.ClassicStorage/storageAccounts/storageaccountdev' \
    --resource-group='' \
    --subscription='xxx' \
    --tenant='xxx' \
    --client-id='xxx' \
    --client-secret='xxx' \
    --proxyurl='' \
    --storage-type='' \
    --timeframe='' \
    --interval='' \
    --aggregation='' \
    --warning-successserverlatency-average='' \
    --critical-successserverlatency-average='' \
    --warning-successe2elatency-average='' \
    --critical-successe2elatency-average='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Resource 'storageaccountdev' (Account) average SuccessServerLatency: 10.00 ms, SuccessE2ELatency: 10.17 ms | 'successserverlatency_average'=10.00ms;;;0; 'successe2elatency_average'=10.17ms;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_classicstorage_storageaccount_api.pl \
    --plugin=cloud::azure::classicstorage::storageaccount::plugin \
    --mode=transactions-latency \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_classicstorage_storageaccount_api.pl \
    --plugin=cloud::azure::classicstorage::storageaccount::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
