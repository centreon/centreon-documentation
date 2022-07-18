---
id: cloud-azure-classic-storage-storageaccount
title: Azure Classic Storage Account
---

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

### Install Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Azure-ClassicStorage-StorageAccount-Api
```
## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                                                       |
| :---------------------- | :-------------------------------------------------------------------------- |
| Host name               | *Name of the host*                                                          |
| Alias                   | *Host description*                                                          |
| IP                      | *Host IP Address*                                                           |
| Monitored from          | *Monitoring Poller to use*                                                  |
| Host Multiple Templates | Cloud-Azure-ClassicStorage-StorageAccount-\[Account/Blob/File/Queue/Table\]-custom |

Click on the *Save* button.

### Set host macros

The following macros must be configured on host.

#### Common macros

| Macro                  | Description                                              |
| :--------------------- | :------------------------------------------------------- |
| AZURERESOURCE          | Resource name or id                                      |
| AZURERESOURCEGROUP     | Resource group (Required if resource's name is used)     |
| AZURERESOURCENAMESPACE | Resource namespace (Required if resource's name is used) |

#### 'api' custom mode macros

| Macro             | Description       |
| :---------------- | :---------------- |
| AZURECUSTOMMODE   | Custom mode 'api' |
| AZURESUBSCRIPTION | Subscription ID   |
| AZURETENANT       | Tenant ID         |
| AZURECLIENTID     | Client ID         |
| AZURECLIENTSECRET | Client secret     |

#### 'azcli' custom mode macros

| Macro             | Description         |
| :---------------- | :------------------ |
| AZURECUSTOMMODE   | Custom mode 'azcli' |
| AZURESUBSCRIPTION | Subscription ID     |

Click on the *Save* button.

## Available metrics

Go to
<https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-supported-metrics?toc=/azure/azure-monitor/toc.json#microsoftstoragestorageaccounts>
to see the description of return metrics for this Azure service.
