---
id: cloud-azure-classicstorage-storageaccount
slug: /cloud-azure-classicstorage-storageaccount
title: Azure Classic Storage
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Azure Classic Storage** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Azure Classic Storage** brings 5 host templates:

* **Cloud-Azure-ClassicStorage-StorageAccount-Account-custom**
* **Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom**
* **Cloud-Azure-ClassicStorage-StorageAccount-File-custom**
* **Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom**
* **Cloud-Azure-ClassicStorage-StorageAccount-Table-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Account-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Account-custom">

| Service Alias                     | Service Template                                                                       | Service Description                                            |
|:----------------------------------|:---------------------------------------------------------------------------------------|:---------------------------------------------------------------|
| Account-Transactions-Availability | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Availability-Api-custom | Check storage account availability                             |
| Account-Transactions-Count        | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Count-Api-custom        | Check storage account transactions number                      |
| Account-Transactions-Latency      | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Latency-Api-custom      | Check storage successful requests latency and processing time |
| Account-Transactions-Throughput   | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Throughput-Api-custom   | Check storage ingress and egress data thoughput                |
| Account-Used-Capacity             | Cloud-Azure-ClassicStorage-StorageAccount-Account-Used-Capacity-Api-custom             | Check storage usage                                            |
| Health                            | Cloud-Azure-ClassicStorage-StorageAccount-Health-Api-custom                            | Check storage account state                                    |

> The services listed above are created automatically when the **Cloud-Azure-ClassicStorage-StorageAccount-Account-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom">

| Service Alias                  | Service Template                                                                    | Service Description                                                 |
|:-------------------------------|:------------------------------------------------------------------------------------|:--------------------------------------------------------------------|
| Blob-Capacity                  | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Capacity-Api-custom                  | Check Blob type storage usage                                       |
| Blob-Container-Count           | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Container-Count-Api-custom           | Check Blob container count on the storage                           |
| Blob-Count                     | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Count-Api-custom                     | Check object count on the storage                                   |
| Blob-Transactions-Availability | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Availability-Api-custom | Check blob storage availability                                     |
| Blob-Transactions-Count        | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Count-Api-custom        | Check blob storage transactions number                              |
| Blob-Transactions-Latency      | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Latency-Api-custom      | Check blob storage successful requests latency and processing time |
| Blob-Transactions-Throughput   | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Throughput-Api-custom   | Check blob storage ingress and egress data thoughput                |

> The services listed above are created automatically when the **Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-File-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-File-custom">

| Service Alias                  | Service Template                                                                    | Service Description                                                 | Discovery  |
|:-------------------------------|:------------------------------------------------------------------------------------|:--------------------------------------------------------------------|:----------:|
| File-Capacity                  | Cloud-Azure-ClassicStorage-StorageAccount-File-Capacity-Api-custom                  | Check File type storage usage                                       |            |
| File-Count                     | Cloud-Azure-ClassicStorage-StorageAccount-File-Count-Api-custom                     | Check file count on the storage                                     |            |
| File-Share-Count               | Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Count-Api-custom               | Check share count on the storage                                    |            |
| File-Share-Quota               | Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Quota-Api-custom               | Check share count on the storage                                    | X          |
| File-Transactions-Availability | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Availability-Api-custom | Check file storage availability                                     |            |
| File-Transactions-Count        | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Count-Api-custom        | Check file storage transactions number                              |            |
| File-Transactions-Latency      | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Latency-Api-custom      | Check file storage successful requests latency and processing time |            |
| File-Transactions-Throughput   | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Throughput-Api-custom   | Check file storage ingress and egress data thoughput                |            |

> The services listed above are created automatically when the **Cloud-Azure-ClassicStorage-StorageAccount-File-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom">

| Service Alias                   | Service Template                                                                     | Service Description                                                  |
|:--------------------------------|:-------------------------------------------------------------------------------------|:---------------------------------------------------------------------|
| Queue-Capacity                  | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Capacity-Api-custom                  | Check Queue type storage usage                                       |
| Queue-Count                     | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Count-Api-custom                     | Check queue count on the storage                                     |
| Queue-Message-Count             | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Message-Count-Api-custom             | Check messages count queueing on the storage                         |
| Queue-Transactions-Availability | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Availability-Api-custom | Check queue storage availability                                     |
| Queue-Transactions-Count        | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Count-Api-custom        | Check queue storage transactions number                              |
| Queue-Transactions-Latency      | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Latency-Api-custom      | Check queue storage successful requests latency and processing time |
| Queue-Transactions-Throughput   | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Throughput-Api-custom   | Check queue storage ingress and egress data thoughput                |

> The services listed above are created automatically when the **Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Table-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Table-custom">

| Service Alias                   | Service Template                                                                     | Service Description                                                  |
|:--------------------------------|:-------------------------------------------------------------------------------------|:---------------------------------------------------------------------|
| Table-Capacity                  | Cloud-Azure-ClassicStorage-StorageAccount-Table-Capacity-Api-custom                  | Check Table type storage usage                                       |
| Table-Count                     | Cloud-Azure-ClassicStorage-StorageAccount-Table-Count-Api-custom                     | Check table count on the storage                                     |
| Table-Entity-Count              | Cloud-Azure-ClassicStorage-StorageAccount-Table-Entity-Count-Api-custom              | Check entries count in tables on the storage                         |
| Table-Transactions-Availability | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Availability-Api-custom | Check table storage availability                                     |
| Table-Transactions-Count        | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Count-Api-custom        | Check table storage transactions number                              |
| Table-Transactions-Latency      | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Latency-Api-custom      | Check table storage successful requests latency and processing time |
| Table-Transactions-Throughput   | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Throughput-Api-custom   | Check table storage ingress and egress data thoughput                |

> The services listed above are created automatically when the **Cloud-Azure-ClassicStorage-StorageAccount-Table-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

The Centreon Monitoring Connector **Azure Classic Storage** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the list of monitored hosts. This provider is named **Microsoft Azure Classic Storage Account**.

> This discovery feature is only compatible with the [**api** custom mode. **azcli** is not supported](../getting-started/how-to-guides/azure-credential-configuration.md).

Go to the corresponding chapter to learn more about [discovering hosts automatically](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                                                      | Description                                               |
|:---------------------------------------------------------------|:----------------------------------------------------------|
| Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Quota-Api | Discover the disk partitions and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Account-Transactions-Availability" label="Account-Transactions-Availability">

| Metric             | Unit  |
|:-------------------|:------|
| usedcapacity_total | B     |

</TabItem>
<TabItem value="Account-Transactions-Count" label="Account-Transactions-Count">

| Metric             | Unit  |
|:-------------------|:------|
| transactions_total | B     |

</TabItem>
<TabItem value="Account-Transactions-Latency" label="Account-Transactions-Latency">

| Metric                       | Unit  |
|:-----------------------------|:------|
| successserverlatency_average | ms    |
| successe2elatency_average    | ms    |

</TabItem>
<TabItem value="Account-Transactions-Throughput" label="Account-Transactions-Throughput">

| Metric        | Unit  |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

</TabItem>
<TabItem value="Account-Used-Capacity" label="Account-Used-Capacity">

| Metric             | Unit  |
|:-------------------|:------|
| usedcapacity_total | B     |

</TabItem>
<TabItem value="Blob-Capacity" label="Blob-Capacity">

| Metric             | Unit  |
|:-------------------|:------|
| blobcapacity_total | B     |

</TabItem>
<TabItem value="Blob-Container-Count" label="Blob-Container-Count">

| Metric                 | Unit  |
|:-----------------------|:------|
| containercount_average | count |

</TabItem>
<TabItem value="Blob-Count" label="Blob-Count">

| Metric          | Unit  |
|:----------------|:------|
| blobcount_total | count |

</TabItem>
<TabItem value="Blob-Transactions-Availability" label="Blob-Transactions-Availability">

| Metric               | Unit  |
|:---------------------|:------|
| availability_average | %     |

</TabItem>
<TabItem value="Blob-Transactions-Count" label="Blob-Transactions-Count">

| Metric             | Unit  |
|:-------------------|:------|
| transactions_total | B     |

</TabItem>
<TabItem value="Blob-Transactions-Latency" label="Blob-Transactions-Latency">

| Metric                       | Unit  |
|:-----------------------------|:------|
| successserverlatency_average | ms    |
| successe2elatency_average    | ms    |

</TabItem>
<TabItem value="Blob-Transactions-Throughput" label="Blob-Transactions-Throughput">

| Metric        | Unit  |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

</TabItem>
<TabItem value="File-Capacity" label="File-Capacity">

| Metric               | Unit  |
|:---------------------|:------|
| filecapacity_average | B     |

</TabItem>
<TabItem value="File-Count" label="File-Count">

| Metric            | Unit  |
|:------------------|:------|
| filecount_average | count |

</TabItem>
<TabItem value="File-Share-Count" label="File-Share-Count">

| Metric                 | Unit  |
|:-----------------------|:------|
| filesharecount_average | count |

</TabItem>
<TabItem value="File-Share-Quota" label="File-Share-Quota">

| Metric                         | Unit  |
|:-------------------------------|:------|
| filesharecapacityquota_average | B     |

</TabItem>
<TabItem value="File-Transactions-Availability" label="File-Transactions-Availability">

| Metric               | Unit  |
|:---------------------|:------|
| availability_average | %     |

</TabItem>
<TabItem value="File-Transactions-Count" label="File-Transactions-Count">

| Metric             | Unit  |
|:-------------------|:------|
| transactions_total | B     |

</TabItem>
<TabItem value="File-Transactions-Latency" label="File-Transactions-Latency">

| Metric                       | Unit  |
|:-----------------------------|:------|
| successserverlatency_average | ms    |
| successe2elatency_average    | ms    |

</TabItem>
<TabItem value="File-Transactions-Throughput" label="File-Transactions-Throughput">

| Metric        | Unit  |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

</TabItem>
<TabItem value="Health" label="Health">

| Metric | Unit |
|:-------|:-----|
| Status | N/A  |

</TabItem>
<TabItem value="Queue-Capacity" label="Queue-Capacity">

| Metric        | Unit  |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

</TabItem>
<TabItem value="Queue-Count" label="Queue-Count">

| Metric             | Unit  |
|:-------------------|:------|
| queuecount_average | count |

</TabItem>
<TabItem value="Queue-Message-Count" label="Queue-Message-Count">

| Metric                    | Unit  |
|:--------------------------|:------|
| queuemessagecount_average | count |

</TabItem>
<TabItem value="Queue-Transactions-Availability" label="Queue-Transactions-Availability">

| Metric               | Unit  |
|:---------------------|:------|
| availability_average | %     |

</TabItem>
<TabItem value="Queue-Transactions-Count" label="Queue-Transactions-Count">

| Metric             | Unit  |
|:-------------------|:------|
| transactions_total | B     |

</TabItem>
<TabItem value="Queue-Transactions-Latency" label="Queue-Transactions-Latency">

| Metric                       | Unit  |
|:-----------------------------|:------|
| successserverlatency_average | ms    |
| successe2elatency_average    | ms    |

</TabItem>
<TabItem value="Queue-Transactions-Throughput" label="Queue-Transactions-Throughput">

| Metric        | Unit  |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

</TabItem>
<TabItem value="Table-Capacity" label="Table-Capacity">

| Metric                | Unit  |
|:----------------------|:------|
| tablecapacity_average | B     |

</TabItem>
<TabItem value="Table-Count" label="Table-Count">

| Metric             | Unit  |
|:-------------------|:------|
| tablecount_average | B     |

</TabItem>
<TabItem value="Table-Entity-Count" label="Table-Entity-Count">

| Metric                   | Unit  |
|:-------------------------|:------|
| tableentitycount_average | count |

</TabItem>
<TabItem value="Table-Transactions-Availability" label="Table-Transactions-Availability">

| Metric               | Unit  |
|:---------------------|:------|
| availability_average | %     |

</TabItem>
<TabItem value="Table-Transactions-Count" label="Table-Transactions-Count">

| Metric             | Unit  |
|:-------------------|:------|
| transactions_total | B     |

</TabItem>
<TabItem value="Table-Transactions-Latency" label="Table-Transactions-Latency">

| Metric                       | Unit  |
|:-----------------------------|:------|
| successserverlatency_average | ms    |
| successe2elatency_average    | ms    |

</TabItem>
<TabItem value="Table-Transactions-Throughput" label="Table-Transactions-Throughput">

| Metric        | Unit  |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

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
dnf install centreon-pack-cloud-azure-classicstorage-storageaccount
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-classicstorage-storageaccount
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-azure-classicstorage-storageaccount
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-classicstorage-storageaccount
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Azure Classic Storage** connector through
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
dnf install centreon-plugin-Cloud-Azure-ClassicStorage-StorageAccount-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-ClassicStorage-StorageAccount-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-azure-classicstorage-storageaccount-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-ClassicStorage-StorageAccount-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Account-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Account-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-ClassicStorage-StorageAccount-Account-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory. For example, for this connector, you must define the **AZURECUSTOMMODE** macros (possible values are **api** or **azcli**). Indeed, 2 modes of communication can be used with this resource: either using the command tool azcli, or by querying the API directly.

| Macro              | Description                                                                                                                              | Default value                  | Mandatory |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:---------:|
| AZURECLIENTID      | Set Azure client ID (required for api custom mode)                                                                                       |                                |     X     |
| AZURECLIENTSECRET  | Set Azure client secret (required for api custom mode)                                                                                   |                                |     X     |
| AZURECUSTOMMODE    | When a plugin offers several ways (api or azcli) to get information the desired one must be defined with this option                     | api                            |           |
| AZURERESOURCE      | Set resource name or ID                                                                                                                  |                                |     X     |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                 |                                |           |
| AZURESUBSCRIPTION  | Set Azure subscription ID (required for api custom mode)                                                                                 |                                |     X     |
| AZURETENANT        | Set Azure tenant ID     (required for api custom mode)                                                                                   |                                |     X     |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                 |                                |           |
| RESOURCENAMESPACE  | Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.                                                   | Microsoft.ClassicStorage       |           |
| STATUSCRITICAL     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{summary\}             | %\{status\} =~ /^Unavailable$/ |           |
| STATUSOK           | Define the conditions to match for the status to be OK. You can use the following variables: %\{status\}, %\{summary\}                   | %\{status\} =~ /^Available$/   |           |
| STATUSUNKNOWN      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{summary\}              | %\{status\} =~ /^Unknown$/     |           |
| STATUSWARNING      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{summary\}              |                                |           |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                                |           |

> Two methods can be used to define the authentication:
>
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`) in the **AZURERESOURCE** macro.
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory. For example, for this connector, you must define the **AZURECUSTOMMODE** macros (possible values are **api** or **azcli**). Indeed, 2 modes of communication can be used with this resource: either using the command tool azcli, or by querying the API directly.

| Macro              | Description                                                                                                                              | Default value            | Mandatory |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:---------:|
| AZURECLIENTID      | Set Azure client ID (required for api custom mode)                                                                                       |                          |     X     |
| AZURECLIENTSECRET  | Set Azure client secret (required for api custom mode)                                                                                   |                          |     X     |
| AZURECUSTOMMODE    | When a plugin offers several ways (api or azcli) to get information the desired one must be defined with this option                     | api                      |           |
| AZURERESOURCE      | Set resource name or ID                                                                                                                  |                          |     X     |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                 |                          |           |
| AZURESUBSCRIPTION  | Set Azure subscription ID (required for api custom mode)                                                                                 |                          |     X     |
| AZURETENANT        | Set Azure tenant ID     (required for api custom mode)                                                                                   |                          |     X     |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                 |                          |           |
| RESOURCENAMESPACE  | Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.                                                   | Microsoft.ClassicStorage |           |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                          |           |

> Two methods can be used to define the authentication:
>
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`) in the **AZURERESOURCE** macro.
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-File-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-File-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-ClassicStorage-StorageAccount-File-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory. For example, for this connector, you must define the **AZURECUSTOMMODE** macros (possible values are **api** or **azcli**). Indeed, 2 modes of communication can be used with this resource: either using the command tool azcli, or by querying the API directly.

| Macro              | Description                                                                                                                              | Default value            | Mandatory |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:---------:|
| AZURECLIENTID      | Set Azure client ID (required for api custom mode)                                                                                       |                          |     X     |
| AZURECLIENTSECRET  | Set Azure client secret (required for api custom mode)                                                                                   |                          |     X     |
| AZURECUSTOMMODE    | When a plugin offers several ways (api or azcli) to get information the desired one must be defined with this option                     | api                      |           |
| AZURERESOURCE      | Set resource name or ID                                                                                                                  |                          |     X     |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                 |                          |           |
| AZURESUBSCRIPTION  | Set Azure subscription ID (required for api custom mode)                                                                                 |                          |     X     |
| AZURETENANT        | Set Azure tenant ID     (required for api custom mode)                                                                                   |                          |     X     |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                 |                          |           |
| RESOURCENAMESPACE  | Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.                                                   | Microsoft.ClassicStorage |           |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                          |           |

> Two methods can be used to define the authentication:
>
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`) in the **AZURERESOURCE** macro.
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory. For example, for this connector, you must define the **AZURECUSTOMMODE** macros (possible values are **api** or **azcli**). Indeed, 2 modes of communication can be used with this resource: either using the command tool azcli, or by querying the API directly.

| Macro              | Description                                                                                                                              | Default value            | Mandatory |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:---------:|
| AZURECLIENTID      | Set Azure client ID (required for api custom mode)                                                                                       |                          |     X     |
| AZURECLIENTSECRET  | Set Azure client secret (required for api custom mode)                                                                                   |                          |     X     |
| AZURECUSTOMMODE    | When a plugin offers several ways (api or azcli) to get information the desired one must be defined with this option                     | api                      |           |
| AZURERESOURCE      | Set resource name or ID                                                                                                                  |                          |     X     |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                 |                          |           |
| AZURESUBSCRIPTION  | Set Azure subscription ID (required for api custom mode)                                                                                 |                          |     X     |
| AZURETENANT        | Set Azure tenant ID     (required for api custom mode)                                                                                   |                          |     X     |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                 |                          |           |
| RESOURCENAMESPACE  | Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.                                                   | Microsoft.ClassicStorage |           |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                          |           |

> Two methods can be used to define the authentication:
>
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`) in the **AZURERESOURCE** macro.
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Table-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Table-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-ClassicStorage-StorageAccount-Table-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory. For example, for this connector, you must define the **AZURECUSTOMMODE** macros (possible values are **api** or **azcli**). Indeed, 2 modes of communication can be used with this resource: either using the command tool azcli, or by querying the API directly.

| Macro              | Description                                                                                                                              | Default value            | Mandatory |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:---------:|
| AZURECLIENTID      | Set Azure client ID (required for api custom mode)                                                                                       |                          |     X     |
| AZURECLIENTSECRET  | Set Azure client secret (required for api custom mode)                                                                                   |                          |     X     |
| AZURECUSTOMMODE    | When a plugin offers several ways (api or azcli) to get information the desired one must be defined with this option                     | api                      |           |
| AZURERESOURCE      | Set resource name or ID                                                                                                                  |                          |     X     |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                 |                          |           |
| AZURESUBSCRIPTION  | Set Azure subscription ID (required for api custom mode)                                                                                 |                          |     X     |
| AZURETENANT        | Set Azure tenant ID     (required for api custom mode)                                                                                   |                          |     X     |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                 |                          |           |
| RESOURCENAMESPACE  | Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.                                                   | Microsoft.ClassicStorage |           |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                          |           |

> Two methods can be used to define the authentication:
>
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`) in the **AZURERESOURCE** macro.
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Account-Transactions-Availability" label="Account-Transactions-Availability">

| Macro                       | Description                                                                                                                                        | Default value | Mandatory |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:-----------:|
| STORAGETYPE                 | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Account       |             |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800          |             |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M         |             |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |             |
| WARNINGAVAILABILITYAVERAGE  | Warning thresholds                                                                                                                                 |               |             |
| CRITICALAVAILABILITYAVERAGE | Critical thresholds                                                                                                                                |               |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |             |

</TabItem>
<TabItem value="Account-Transactions-Count" label="Account-Transactions-Count">

| Macro                     | Description                                                                                                                                        | Default value       | Mandatory |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------:|
| STORAGETYPE               | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Account             |           |
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800                |           |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M               |           |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |           |
| WARNINGTRANSACTIONSTOTAL  | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALTRANSACTIONSTOTAL | Critical thresholds                                                                                                                                |                     |           |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --per-sec --verbose |           |

</TabItem>
<TabItem value="Account-Transactions-Latency" label="Account-Transactions-Latency">

| Macro                        | Description                                                                                                                                        | Default value | Mandatory |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| STORAGETYPE                  | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Account       |           |
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900           |           |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M          |           |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |           |
| WARNINGSUCCESSE2ELATENCY     | Warning thresholds                                                                                                                                 |               |           |
| CRITICALSUCCESSE2ELATENCY    | Critical thresholds                                                                                                                                |               |           |
| WARNINGSUCCESSSERVERLATENCY  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALSUCCESSSERVERLATENCY | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Account-Transactions-Throughput" label="Account-Transactions-Throughput">

| Macro                | Description                                                                                                                                        | Default value       | Mandatory |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------:|
| STORAGETYPE          | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Account             |           |
| TIMEFRAME            | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900                 |           |
| INTERVAL             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M                |           |
| AGGREGATION          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |           |
| WARNINGEGRESSTOTAL   | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALEGRESSTOTAL  | Critical thresholds                                                                                                                                |                     |           |
| WARNINGINGRESSTOTAL  | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALINGRESSTOTAL | Critical thresholds                                                                                                                                |                     |           |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --per-sec --verbose |           |

</TabItem>
<TabItem value="Account-Used-Capacity" label="Account-Used-Capacity">

| Macro                     | Description                                                                                                                                        | Default value | Mandatory |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 3600          |           |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H          |           |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total         |           |
| WARNINGUSEDCAPACITYTOTAL  | Warning threshold                                                                                                                                  |               |           |
| CRITICALUSEDCAPACITYTOTAL | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Blob-Capacity" label="Blob-Capacity">

| Macro                     | Description                                                                                                                                        | Default value | Mandatory |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200          |           |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H          |           |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total         |           |
| WARNINGUSEDCAPACITYTOTAL  | Warning threshold                                                                                                                                  |               |           |
| CRITICALUSEDCAPACITYTOTAL | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Blob-Container-Count" label="Blob-Container-Count">

| Macro                         | Description                                                                                                                                        | Default value | Mandatory |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                     | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200          |           |
| INTERVAL                      | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H          |           |
| AGGREGATION                   | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |           |
| WARNINGCONTAINERCOUNTAVERAGE  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALCONTAINERCOUNTAVERAGE | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Blob-Count" label="Blob-Count">

| Macro                  | Description                                                                                                                                        | Default value | Mandatory |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200          |           |
| INTERVAL               | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H          |           |
| AGGREGATION            | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total         |           |
| WARNINGUSEDCOUNTTOTAL  | Warning threshold                                                                                                                                  |               |           |
| CRITICALUSEDCOUNTTOTAL | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Blob-Transactions-Availability" label="Blob-Transactions-Availability">

| Macro                       | Description                                                                                                                                        | Default value | Mandatory |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| STORAGETYPE                 | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Blob          |           |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800          |           |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M         |           |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |           |
| WARNINGAVAILABILITYAVERAGE  | Warning threshold                                                                                                                                  |               |           |
| CRITICALAVAILABILITYAVERAGE | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Blob-Transactions-Count" label="Blob-Transactions-Count">

| Macro                     | Description                                                                                                                                        | Default value       | Mandatory |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------:|
| STORAGETYPE               | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Blob                |           |
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800                |           |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M               |           |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |           |
| WARNINGTRANSACTIONSTOTAL  | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALTRANSACTIONSTOTAL | Critical thresholds                                                                                                                                |                     |           |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --per-sec --verbose |           |

</TabItem>
<TabItem value="Blob-Transactions-Latency" label="Blob-Transactions-Latency">

| Macro                        | Description                                                                                                                                        | Default value | Mandatory |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| STORAGETYPE                  | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Blob          |           |
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900           |           |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M          |           |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |           |
| WARNINGSUCCESSE2ELATENCY     | Warning thresholds                                                                                                                                 |               |           |
| CRITICALSUCCESSE2ELATENCY    | Critical thresholds                                                                                                                                |               |           |
| WARNINGSUCCESSSERVERLATENCY  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALSUCCESSSERVERLATENCY | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Blob-Transactions-Throughput" label="Blob-Transactions-Throughput">

| Macro                | Description                                                                                                                                        | Default value       | Mandatory |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------:|
| STORAGETYPE          | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Blob                |           |
| TIMEFRAME            | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900                 |           |
| INTERVAL             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M                |           |
| AGGREGATION          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |           |
| WARNINGEGRESSTOTAL   | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALEGRESSTOTAL  | Critical thresholds                                                                                                                                |                     |           |
| WARNINGINGRESSTOTAL  | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALINGRESSTOTAL | Critical thresholds                                                                                                                                |                     |           |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --per-sec --verbose |           |

</TabItem>
<TabItem value="File-Capacity" label="File-Capacity">

| Macro                       | Description                                                                                                                                        | Default value | Mandatory |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200          |           |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H          |           |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total         |           |
| WARNINGFILECAPACITYAVERAGE  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALFILECAPACITYAVERAGE | TCritical thresholds                                                                                                                               |               |           |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="File-Count" label="File-Count">

| Macro                    | Description                                                                                                                                        | Default value | Mandatory |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200          |           |
| INTERVAL                 | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H          |           |
| AGGREGATION              | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total         |           |
| WARNINGFILECOUNTAVERAGE  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALFILECOUNTAVERAGE | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="File-Share-Count" label="File-Share-Count">

| Macro                         | Description                                                                                                                                        | Default value | Mandatory |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                     | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200          |           |
| INTERVAL                      | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H          |           |
| AGGREGATION                   | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |           |
| WARNINGFILESHARECOUNTAVERAGE  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALFILESHARECOUNTAVERAGE | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="File-Share-Quota" label="File-Share-Quota">

| Macro                         | Description                                                                                                                            | Default value | Mandatory |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGFILESHARECOUNTAVERAGE  | Warning thresholds                                                                                                                     |               |           |
| CRITICALFILESHARECOUNTAVERAGE | Critical thresholds                                                                                                                    |               |           |
| WARNINGFILESHARECOUNTTOTAL    | Warning thresholds                                                                                                                     |               |           |
| CRITICALFILESHARECOUNTTOTAL   | Critical thresholds                                                                                                                    |               |           |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose     |           |

</TabItem>
<TabItem value="File-Transactions-Availability" label="File-Transactions-Availability">

| Macro                       | Description                                                                                                                                        | Default value   | Mandatory |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|:---------:|
| STORAGETYPE                 | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | File            |           |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800            |           |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M           |           |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average         |           |
| WARNINGAVAILABILITYAVERAGE  | Warning thresholds                                                                                                                                 |                 |           |
| CRITICALAVAILABILITYAVERAGE | Critical thresholds                                                                                                                                |                 |           |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose       |           |

</TabItem>
<TabItem value="File-Transactions-Count" label="File-Transactions-Count">

| Macro                     | Description                                                                                                                                        | Default value       | Mandatory |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------:|
| STORAGETYPE               | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | File                |           |
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800                |           |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M               |           |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |           |
| WARNINGTRANSACTIONSTOTAL  | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALTRANSACTIONSTOTAL | Critical thresholds                                                                                                                                |                     |           |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --per-sec --verbose |           |

</TabItem>
<TabItem value="File-Transactions-Latency" label="File-Transactions-Latency">

| Macro                        | Description                                                                                                                                        | Default value | Mandatory |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| STORAGETYPE                  | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | File          |           |
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900           |           |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M          |           |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |           |
| WARNINGSUCCESSE2ELATENCY     | Warning thresholds                                                                                                                                 |               |           |
| CRITICALSUCCESSE2ELATENCY    | Critical thresholds                                                                                                                                |               |           |
| WARNINGSUCCESSSERVERLATENCY  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALSUCCESSSERVERLATENCY | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="File-Transactions-Throughput" label="File-Transactions-Throughput">

| Macro                | Description                                                                                                                                        | Default value       | Mandatory |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------:|
| STORAGETYPE          | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | File                |           |
| TIMEFRAME            | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900                 |           |
| INTERVAL             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M                |           |
| AGGREGATION          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |           |
| WARNINGEGRESSTOTAL   | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALEGRESSTOTAL  | Critical thresholds                                                                                                                                |                     |           |
| WARNINGINGRESSTOTAL  | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALINGRESSTOTAL | Critical thresholds                                                                                                                                |                     |           |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --per-sec --verbose |           |

</TabItem>
<TabItem value="Queue-Capacity" label="Queue-Capacity">

| Macro                        | Description                                                                                                                                        | Default value   | Mandatory |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|:---------:|
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200            |           |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H            |           |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total           |           |
| WARNINGQUEUECAPACITYAVERAGE  | Warning thresholds                                                                                                                                 |                 |           |
| CRITICALQUEUECAPACITYAVERAGE | Critical thresholds                                                                                                                                |                 |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose       |           |

</TabItem>
<TabItem value="Queue-Count" label="Queue-Count">

| Macro                     | Description                                                                                                                                        | Default value | Mandatory |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200          |           |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H          |           |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total         |           |
| WARNINGQUEUECOUNTAVERAGE  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALQUEUECOUNTAVERAGE | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Queue-Message-Count" label="Queue-Message-Count">

| Macro                            | Description                                                                                                                                        | Default value   | Mandatory |
|:---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|:---------:|
| TIMEFRAME                        | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200            |           |
| INTERVAL                         | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H            |           |
| AGGREGATION                      | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average         |           |
| WARNINGQUEUEMESSAGECOUNTAVERAGE  | Warning thresholds                                                                                                                                 |                 |           |
| CRITICALQUEUEMESSAGECOUNTAVERAGE | Critical thresholds                                                                                                                                |                 |           |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose       |           |

</TabItem>
<TabItem value="Queue-Transactions-Availability" label="Queue-Transactions-Availability">

| Macro                       | Description                                                                                                                                        | Default value | Mandatory |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| STORAGETYPE                 | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Queue         |           |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800          |           |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M         |           |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |           |
| WARNINGAVAILABILITYAVERAGE  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALAVAILABILITYAVERAGE | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Queue-Transactions-Count" label="Queue-Transactions-Count">

| Macro                     | Description                                                                                                                                        | Default value       | Mandatory |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------:|
| STORAGETYPE               | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Queue               |           |
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800                |           |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M               |           |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |           |
| WARNINGTRANSACTIONSTOTAL  | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALTRANSACTIONSTOTAL | Critical thresholds                                                                                                                                |                     |           |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --per-sec --verbose |           |

</TabItem>
<TabItem value="Queue-Transactions-Latency" label="Queue-Transactions-Latency">

| Macro                        | Description                                                                                                                                        | Default value | Mandatory |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| STORAGETYPE                  | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Queue         |           |
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900           |           |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M          |           |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |           |
| WARNINGSUCCESSE2ELATENCY     | Warning thresholds                                                                                                                                 |               |           |
| CRITICALSUCCESSE2ELATENCY    | Critical thresholds                                                                                                                                |               |           |
| WARNINGSUCCESSSERVERLATENCY  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALSUCCESSSERVERLATENCY | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Queue-Transactions-Throughput" label="Queue-Transactions-Throughput">

| Macro                | Description                                                                                                                                        | Default value       | Mandatory |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------:|
| STORAGETYPE          | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Queue               |           |
| TIMEFRAME            | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900                 |           |
| INTERVAL             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M                |           |
| AGGREGATION          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |           |
| WARNINGEGRESSTOTAL   | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALEGRESSTOTAL  | Critical thresholds                                                                                                                                |                     |           |
| WARNINGINGRESSTOTAL  | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALINGRESSTOTAL | Critical thresholds                                                                                                                                |                     |           |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --per-sec --verbose |           |

</TabItem>
<TabItem value="Table-Capacity" label="Table-Capacity">

| Macro                        | Description                                                                                                                                        | Default value | Mandatory |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200          |           |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H          |           |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total         |           |
| WARNINGTABLECAPACITYAVERAGE  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALTABLECAPACITYAVERAGE | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Table-Count" label="Table-Count">

| Macro                     | Description                                                                                                                                        | Default value | Mandatory |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200          |           |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H          |           |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total         |           |
| WARNINGTABLECOUNTAVERAGE  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALTABLECOUNTAVERAGE | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Table-Entity-Count" label="Table-Entity-Count">

| Macro                           | Description                                                                                                                                        | Default value | Mandatory |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEFRAME                       | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200          |           |
| INTERVAL                        | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H          |           |
| AGGREGATION                     | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |           |
| WARNINGTABLEENTITYCOUNTAVERAGE  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALTABLEENTITYCOUNTAVERAGE | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Table-Transactions-Availability" label="Table-Transactions-Availability">

| Macro                       | Description                                                                                                                                        | Default value | Mandatory |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| STORAGETYPE                 | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Table         |           |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800          |           |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M         |           |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |           |
| WARNINGAVAILABILITYAVERAGE  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALAVAILABILITYAVERAGE | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Table-Transactions-Count" label="Table-Transactions-Count">

| Macro                     | Description                                                                                                                                        | Default value       | Mandatory |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------:|
| STORAGETYPE               | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Table               |           |
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800                |           |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M               |           |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |           |
| WARNINGTRANSACTIONSTOTAL  | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALTRANSACTIONSTOTAL | Critical thresholds                                                                                                                                |                     |           |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --per-sec --verbose |           |

</TabItem>
<TabItem value="Table-Transactions-Latency" label="Table-Transactions-Latency">

| Macro                        | Description                                                                                                                                        | Default value | Mandatory |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| STORAGETYPE                  | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Table         |           |
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900           |           |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M          |           |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average       |           |
| WARNINGSUCCESSE2ELATENCY     | Warning thresholds                                                                                                                                 |               |           |
| CRITICALSUCCESSE2ELATENCY    | Critical thresholds                                                                                                                                |               |           |
| WARNINGSUCCESSSERVERLATENCY  | Warning thresholds                                                                                                                                 |               |           |
| CRITICALSUCCESSSERVERLATENCY | Critical thresholds                                                                                                                                |               |           |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --verbose     |           |

</TabItem>
<TabItem value="Table-Transactions-Throughput" label="Table-Transactions-Throughput">

| Macro                | Description                                                                                                                                        | Default value       | Mandatory |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------:|
| STORAGETYPE          | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Table               |           |
| TIMEFRAME            | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900                 |           |
| INTERVAL             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M                |           |
| AGGREGATION          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |           |
| WARNINGEGRESSTOTAL   | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALEGRESSTOTAL  | Critical thresholds                                                                                                                                |                     |           |
| WARNINGINGRESSTOTAL  | Warning thresholds                                                                                                                                 |                     |           |
| CRITICALINGRESSTOTAL | Critical thresholds                                                                                                                                |                     |           |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).             | --per-sec --verbose |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an Azure Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_azure_classicstorage_storageaccount_api.pl \
	--plugin=cloud::azure::classicstorage::storageaccount::plugin \
	--mode=transactions-latency \
	--custommode='api' \
	--resource='Ressource_name' \
	--resource-group='Ressource_group' \
	--resource-namespace='Microsoft.ClassicStorage' \
	--subscription='XXXX' \
	--tenant='XXXX' \
	--client-id='XXXX' \
	--client-secret='XXXX' \
	--proxyurl=''  \
	--storage-type='Account' \
	--timeframe='900' \
	--interval='PT5M' \
	--aggregation='average' \
	--warning-successserverlatency-average='' \
	--critical-successserverlatency-average='' \
	--warning-successe2elatency-average='' \
	--critical-successe2elatency-average='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: Resource 'storageaccountdev' (Account) average SuccessServerLatency: 10.00 ms, SuccessE2ELatency: 10.17 ms | 'successserverlatency_average'=10.00ms;;;0; 'successe2elatency_average'=10.17ms;;;0;
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
/usr/lib/centreon/plugins/centreon_azure_classicstorage_storageaccount_api.pl \
	--plugin=cloud::azure::classicstorage::storageaccount::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                            | Linked service template                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| account-used-capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/accountusedcapacity.pm)]          | Cloud-Azure-ClassicStorage-StorageAccount-Account-Used-Capacity-Api-custom                                                                                                                                                                                                                                                                                                                                                                                   |
| blob-capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/blobcapacity.pm)]                         | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Capacity-Api-custom                                                                                                                                                                                                                                                                                                                                                                                           |
| blob-container-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/blobcontainercount.pm)]            | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Container-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                    |
| blob-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/blobcount.pm)]                               | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                              |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/classicstorage/storageaccount/mode/discovery.pm)]                   | Used for host discovery                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| file-capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/filecapacity.pm)]                         | Cloud-Azure-ClassicStorage-StorageAccount-File-Capacity-Api-custom                                                                                                                                                                                                                                                                                                                                                                                           |
| file-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/filecount.pm)]                               | Cloud-Azure-ClassicStorage-StorageAccount-File-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                              |
| file-share-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/filesharecount.pm)]                    | Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                        |
| file-share-quota [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/filesharecount.pm)]                    | Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Quota-Api-custom                                                                                                                                                                                                                                                                                                                                                                                        |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/health.pm)]                                      | Cloud-Azure-ClassicStorage-StorageAccount-Health-Api-custom                                                                                                                                                                                                                                                                                                                                                                                                  |
| list-fileshares [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/listfileshares.pm)]                     | Used for service discovery                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| list-resources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/classicstorage/storageaccount/mode/listresources.pm)]          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                        |
| queue-capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/queuecapacity.pm)]                       | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Capacity-Api-custom                                                                                                                                                                                                                                                                                                                                                                                          |
| queue-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/queuecount.pm)]                             | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                             |
| queue-message-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/queuemessagecount.pm)]              | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Message-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                     |
| table-capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/tablecapacity.pm)]                       | Cloud-Azure-ClassicStorage-StorageAccount-Table-Capacity-Api-custom                                                                                                                                                                                                                                                                                                                                                                                          |
| table-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/tablecount.pm)]                             | Cloud-Azure-ClassicStorage-StorageAccount-Table-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                             |
| table-entity-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/tableentitycount.pm)]                | Cloud-Azure-ClassicStorage-StorageAccount-Table-Entity-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                      |
| transactions-availability [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/transactionsavailability.pm)] | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Availability-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Availability-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Availability-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Availability-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Availability-Api-custom |
| transactions-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/transactionscount.pm)]               | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Count-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Count-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Count-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Count-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Count-Api-custom                                    |
| transactions-latency [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/transactionslatency.pm)]           | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Latency-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Latency-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Latency-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Latency-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Latency-Api-custom                          |
| transactions-throughput [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/transactionsthroughput.pm)]     | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Throughput-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Throughput-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Throughput-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Throughput-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Throughput-Api-custom           |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --subscription                             |   Set Azure subscription ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --timeframe                                |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --interval                                 |   Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --aggregation                              |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --zeroed                                   |   Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --sudo                                     |   Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --command                                  |   Command to get information (default: 'az'). Can be changed if you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --command-path                             |   Command path (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          |   Command options (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --memcached                                |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 |   Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --memexpiration                            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --tenant                                   |   Set Azure tenant ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --client-id                                |   Set Azure client ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --client-secret                            |   Set Azure client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --login-endpoint                           |   Set Azure login endpoint URL (default: 'https://login.microsoftonline.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --management-endpoint                      |   Set Azure management endpoint URL (default: 'https://management.azure.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Account-Transactions-Availability" label="Account-Transactions-Availability">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type            |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-availability-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average').                                                         |
| --critical-availability-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average').                                                        |

</TabItem>
<TabItem value="Account-Transactions-Count" label="Account-Transactions-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type                |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-transactions-total  |   Warning thresholds.                                                                                                     |
| --critical-transactions-total |   Critical thresholds.                                                                                                    |
| --per-sec                     |   Change the data to be unit/sec.                                                                                         |

</TabItem>
<TabItem value="Account-Transactions-Latency" label="Account-Transactions-Latency">

| Option                            | Description                                                                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                                                    |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                                              |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                  |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                                                |
| --filter-metric                   |   Filter metrics (can be: 'SuccessServerLatency', 'SuccessE2ELatency') (Can be a regexp).                                                                |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').     |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |

</TabItem>
<TabItem value="Account-Transactions-Throughput" label="Account-Transactions-Throughput">

| Option                            | Description                                                                                                                     |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                           |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                     |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.         |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                       |
| --filter-metric                   |   Filter metrics (can be: 'Ingress', 'Egress') (Can be a regexp).                                                               |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').   |
| --per-sec                         |   Change the data to be unit/sec.                                                                                               |

</TabItem>
<TabItem value="Account-Used-Capacity" label="Account-Used-Capacity">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-usedcapacity-total  |   Warning threshold.                                                                                                      |
| --critical-usedcapacity-total |   Critical thresholds.                                                                                                    |

</TabItem>
<TabItem value="Blob-Capacity" label="Blob-Capacity">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-blobcapacity-total  |   Warning threshold.                                                                                                      |
| --critical-blobcapacity-total |   Critical thresholds.                                                                                                    |

</TabItem>
<TabItem value="Blob-Container-Count" label="Blob-Container-Count">

| Option                      | Description                                                                                                               |
|:----------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                  |   Set resource name or ID (required).                                                                                     |
| --resource-group            |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace        |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-containercount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-containercount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Blob-Count" label="Blob-Count">

| Option                     | Description                                                                                                               |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                 |   Set resource name or ID (required).                                                                                     |
| --resource-group           |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace       |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-blobcount-total  |   Warning threshold.                                                                                                      |
| --critical-blobcount-total |   Critical thresholds.                                                                                                    |

</TabItem>
<TabItem value="Blob-Transactions-Availability" label="Blob-Transactions-Availability">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type            |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-availability-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average').                                                         |
| --critical-availability-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average').                                                        |

</TabItem>
<TabItem value="Blob-Transactions-Count" label="Blob-Transactions-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type                |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-transactions-total  |   Warning thresholds.                                                                                                     |
| --critical-transactions-total |   Critical thresholds.                                                                                                    |
| --per-sec                     |   Change the data to be unit/sec.                                                                                         |

</TabItem>
<TabItem value="Blob-Transactions-Latency" label="Blob-Transactions-Latency">

| Option                            | Description                                                                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                                                    |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                                              |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                  |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                                                |
| --filter-metric                   |   Filter metrics (can be: 'SuccessServerLatency', 'SuccessE2ELatency') (Can be a regexp).                                                                |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').     |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |

</TabItem>
<TabItem value="Blob-Transactions-Throughput" label="Blob-Transactions-Throughput">

| Option                            | Description                                                                                                                     |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                           |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                     |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.         |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                       |
| --filter-metric                   |   Filter metrics (can be: 'Ingress', 'Egress') (Can be a regexp).                                                               |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').   |
| --per-sec                         |   Change the data to be unit/sec.                                                                                               |

</TabItem>
<TabItem value="File-Capacity" label="File-Capacity">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-filecapacity-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-filecapacity-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="File-Count" label="File-Count">

| Option                 | Description                                                                                                               |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource             |   Set resource name or ID (required).                                                                                     |
| --resource-group       |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace   |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-filecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-filecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="File-Share-Count" label="File-Share-Count">

| Option                      | Description                                                                                                               |
|:----------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                  |   Set resource name or ID (required).                                                                                     |
| --resource-group            |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace        |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-filesharecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-filesharecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="File-Share-Quota" label="File-Share-Quota">

| Option                      | Description                                                                                                               |
|:----------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                  |   Set resource name or ID (required).                                                                                     |
| --resource-group            |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace        |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-filesharecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-filesharecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="File-Transactions-Availability" label="File-Transactions-Availability">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type            |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-availability-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average').                                                         |
| --critical-availability-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average').                                                        |

</TabItem>
<TabItem value="File-Transactions-Count" label="File-Transactions-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type                |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-transactions-total  |   Warning thresholds.                                                                                                     |
| --critical-transactions-total |   Critical thresholds.                                                                                                    |
| --per-sec                     |   Change the data to be unit/sec.                                                                                         |

</TabItem>
<TabItem value="File-Transactions-Latency" label="File-Transactions-Latency">

| Option                            | Description                                                                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                                                    |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                                              |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                  |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                                                |
| --filter-metric                   |   Filter metrics (can be: 'SuccessServerLatency', 'SuccessE2ELatency') (Can be a regexp).                                                                |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').     |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |

</TabItem>
<TabItem value="File-Transactions-Throughput" label="File-Transactions-Throughput">

| Option                            | Description                                                                                                                     |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                           |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                     |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.         |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                       |
| --filter-metric                   |   Filter metrics (can be: 'Ingress', 'Egress') (Can be a regexp).                                                               |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').   |
| --per-sec                         |   Change the data to be unit/sec.                                                                                               |

</TabItem>
<TabItem value="Health" label="Health">

| Option               | Description                                                                                                                                                                  |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource           |   Set resource name or ID (required).                                                                                                                                        |
| --resource-group     |   Set resource group (required if resource's name is used).                                                                                                                  |
| --resource-namespace |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                                      |
| --resource-type      |   Set resource type (required if resource's name is used).                                                                                                                   |
| --warning-status     |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{summary\}                                  |
| --critical-status    |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /^Unavailable$/'). You can use the following variables: %\{status\}, %\{summary\}   |
| --unknown-status     |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /^Unknown$/'). You can use the following variables: %\{status\}, %\{summary\}        |
| --ok-status          |   Define the conditions to match for the status to be OK (default: '%\{status\} =~ /^Available$/'). You can use the following variables: %\{status\}, %\{summary\}           |

</TabItem>
<TabItem value="Queue-Capacity" label="Queue-Capacity">

| Option                     | Description                                                                                                               |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                 |   Set resource name or ID (required).                                                                                     |
| --resource-group           |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace       |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-queuecapacity-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-queuecapacity-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Queue-Count" label="Queue-Count">

| Option                  | Description                                                                                                               |
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource              |   Set resource name or ID (required).                                                                                     |
| --resource-group        |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace    |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-queuecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-queuecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Queue-Message-Count" label="Queue-Message-Count">

| Option                         | Description                                                                                                               |
|:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                     |   Set resource name or ID (required).                                                                                     |
| --resource-group               |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace           |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-queuemessagecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-queuemessagecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Queue-Transactions-Availability" label="Queue-Transactions-Availability">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type            |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-availability-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average').                                                         |
| --critical-availability-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average').                                                        |

</TabItem>
<TabItem value="Queue-Transactions-Count" label="Queue-Transactions-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type                |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-transactions-total  |   Warning thresholds.                                                                                                     |
| --critical-transactions-total |   Critical thresholds.                                                                                                    |
| --per-sec                     |   Change the data to be unit/sec.                                                                                         |

</TabItem>
<TabItem value="Queue-Transactions-Latency" label="Queue-Transactions-Latency">

| Option                            | Description                                                                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                                                    |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                                              |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                  |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                                                |
| --filter-metric                   |   Filter metrics (can be: 'SuccessServerLatency', 'SuccessE2ELatency') (Can be a regexp).                                                                |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').     |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |

</TabItem>
<TabItem value="Queue-Transactions-Throughput" label="Queue-Transactions-Throughput">

| Option                            | Description                                                                                                                     |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                           |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                     |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.         |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                       |
| --filter-metric                   |   Filter metrics (can be: 'Ingress', 'Egress') (Can be a regexp).                                                               |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').   |
| --per-sec                         |   Change the data to be unit/sec.                                                                                               |

</TabItem>
<TabItem value="Table-Capacity" label="Table-Capacity">

| Option                     | Description                                                                                                               |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                 |   Set resource name or ID (required).                                                                                     |
| --resource-group           |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace       |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-tablecapacity-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-tablecapacity-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Table-Count" label="Table-Count">

| Option                  | Description                                                                                                               |
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource              |   Set resource name or ID (required).                                                                                     |
| --resource-group        |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace    |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-tablecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-tablecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Table-Entity-Count" label="Table-Entity-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-tableentitycount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-tableentitycount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Table-Transactions-Availability" label="Table-Transactions-Availability">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type            |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-availability-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average').                                                         |
| --critical-availability-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average').                                                        |

</TabItem>
<TabItem value="Table-Transactions-Count" label="Table-Transactions-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type                |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-transactions-total  |   Warning thresholds.                                                                                                     |
| --critical-transactions-total |   Critical thresholds.                                                                                                    |
| --per-sec                     |   Change the data to be unit/sec.                                                                                         |

</TabItem>
<TabItem value="Table-Transactions-Latency" label="Table-Transactions-Latency">

| Option                            | Description                                                                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                                                    |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                                              |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                  |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                                                |
| --filter-metric                   |   Filter metrics (can be: 'SuccessServerLatency', 'SuccessE2ELatency') (Can be a regexp).                                                                |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').     |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |

</TabItem>
<TabItem value="Table-Transactions-Throughput" label="Table-Transactions-Throughput">

| Option                            | Description                                                                                                                     |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                           |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                     |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.         |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                       |
| --filter-metric                   |   Filter metrics (can be: 'Ingress', 'Egress') (Can be a regexp).                                                               |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').   |
| --per-sec                         |   Change the data to be unit/sec.                                                                                               |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_classicstorage_storageaccount_api.pl \
	--plugin=cloud::azure::classicstorage::storageaccount::plugin \
	--mode=transactions-latency \
	--help
```
