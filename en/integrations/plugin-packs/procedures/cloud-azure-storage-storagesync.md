---
id: cloud-azure-storage-storagesync
title: Azure Storage Sync
---

## Overview

By transforming a Windows Server into a quick cache, Azure Storage Sync service
allows you to centralize your files share in Azure Files.

The Centreon Plugin-Pack *Azure Storage Sync* can rely on Azure API or Azure CLI
to collect the metrics related to the Storage Sync service.

## Pack assets

### Monitored objects

* Files synchronised 

* Recalls statistics

* Server Status

### Discovery rules

The Centreon Plugin-Pack *Azure Storage Sync* includes a Host Discovery *provider* to
automatically discover the Azure instances of a given subscription and add them
to the Centreon configuration. This provider is named **Microsoft Azure Storage Sync**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-storage-storagesync-provider.png)
> This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.
More information about the Host Discovery module is available in the Centreon
documentation:
[Host Discovery](../../../monitoring/discovery/hosts-discovery.html)

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Files-Synced-->

| Metric name                    | Description  | Unit  |
|:-------------------------------|:-------------|:------|
| storagesync.files.synced.count | Files Synced | Count |
| storagesync.item.errors.count  | Item errors  | Count |
| storagesync.bytes.synced.bytes | Bytes synced | B     |

<!--Recalls-->

| Metric name                                        | Description                              | Unit |
|:---------------------------------------------------|:-----------------------------------------|:-----|
| storagesync.recalls.succesful.percentage           | Cloud tiering recall success rate        | %    |
| storagesync.recalls.application.size.bytes         | Cloud tiering recall size by application | B    |
| storagesync.recalls.size.bytes                     | Cloud tiering recall size                | B    |
| storagesync.recalls.total.size.bytes               | Cloud tiering recall                     | B    |
| storagesync.recalls.throughput.size.bytespersecond | Cloud tiering recall throughput          | B/s  |

<!--Server-Status-->

| Metric name                 | Description | Unit  |
|:----------------------------|:------------|:------|
| storagesync.heartbeat.count | Heartbeat   | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To get data from Azure Services, following methods are available:
	* Azure API ('api')
	* Azure CLI ('azcli')

Centreon recommends to use the API instead of the CLI for the following reasons:
	* API is much more efficient by avoiding CLI binary execution
	* API supports application authentication while CLI does not (yet)

<!--DOCUSAURUS_CODE_TABS-->

<!--Azure Monitor API-->

To use the 'api' custom mode, make sure to obtain the required information using the 
how-to below. Keep it safe until including it in a Host or Host Template definition.

* Create an *application* in Azure Active Directory:
	- Log in to your Azure account.
	- Select *Azure Active directory* in the left sidebar.
	- Click on *App registrations*.
	- Click on *+ Add*.
	- Enter Centreon as the application name (or any name of your choice), select application type(api) and sign-on-url.
	- Click on the *Create* button.

* Get *Subscription ID*
	- Log in to your Azure account.
	- Select *Subscriptions* in the left sidebar.
	- Select whichever subscription is needed.
	- Click on *Overview*.
	- **Copy the Subscription ID.**

* Get *Tenant ID*
	- Log in to your Azure account.
	- Select *Azure Active directory* in the left sidebar.
	- Click on *Properties*.
	- **Copy the directory ID.**

* Get *Client ID*
	- Log in to your Azure account.
	- Select *Azure Active directory* in the left sidebar.
	- Click on *Enterprise applications*.
	- Click on *All applications*.
	- Select the application previously created.
	- Click on *Properties*.
	- **Copy the Application ID.**

* Get *Client secret*
	- Log in to your Azure account.
	- Select *Azure Active directory* in the left sidebar.
	- Click on *App registrations*.
	- Select the application previously created.
	- Click on *All settings*.
	- Click on *Keys*.
	- Enter the key description and select the duration.
	- Click on *Save*.
	- **Copy and store the key value. You won't be able to retrieve it after you leave this page.**

<!--Azure AZ CLI-->

To use the 'azcli' custom mode, install the required packages on every Centreon poller expected to 
monitor Azure Resources using CLI:

- The CLI needs at least Python version 2.7
(<https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md>).

On RPM-Based distributions, use the command below to install it using *root* or 'sudo':

```shell
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo
sudo yum install azure-cli
```

Then, use the *centreon-engine* account to obtain a token using command below:

```shell
su - centreon-engine
az login
```

The shell will output this message including an authentication code:

	*To sign in, use a web browser to open the page https://microsoft.com/devicelogin*
	*and enter the code CWT4WQZAD to authenticate.*

Go to <https://microsoft.com/devicelogin> and enter the code.

Connect using a monitoring service account, as a result, the shell should prompt
information below:

```shell
	[
	  {
		"cloudName": "AzureCloud",
		"id": "0ef83f3a-d83e-2039-d930-309df93acd93d",
		"isDefault": true,
		"name": "N/A(tenant level account)",
		"state": "Enabled",
		"tenantId": "0ef83f3a-03cd-2039-d930-90fd39ecd048",
		"user": {
		  "name": "email@mycompany.onmicrosoft.com",
		  "type": "user"
		}
	  }
	]
```

Credentials are now stored locally in the .accessTokens.json file so the Plugin
can use it.

<!--END_DOCUSAURUS_CODE_TABS-->

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Azure Storage Sync* ressources:

```bash
yum install centreon-plugin-Cloud-Azure-Storage-StorageSync-Api
```

2. On the Centreon Web interface, install the *Azure Storage Sync* Centreon Plugin Pack on the"Configuration > Plugin Packs" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Azure Storage Sync* ressources:

```bash
yum install centreon-plugin-Cloud-Azure-Storage-StorageSync-Api
```

2. Install the *Azure Storage Sync* Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-cloud-azure-storage-storagesync
```

3. On the Centreon Web interface, install the *Azure Storage Sync* Centreon Plugin Pack on the"Configuration > Plugin Packs" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Storage-StorageSync-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.
These mandatory Macros differ regarding the custom mode used.

> Two methods can be used to set the Macros:
> * full ID of the Resource (```/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.EventHub/<resource_type>/<resource_name>```)
in *AZURERESOURCE*
> * Resource Name in *AZURERESOURCE* associated with Resource Group (in *AZURERESOURCEGROUP*)

<!--Azure Monitor API-->

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'api'                                  |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURETENANT        | Tenant ID                                          |
| X         | AZURECLIENTID      | Client ID                                          |
| X         | AZURECLIENTSECRET  | Client secret                                      |
| X         | AZURERESOURCE      | ID or name of the Storage Sync resource            |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |

<!--Azure AZ CLI-->

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'azcli'                                |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURERESOURCE      | ID or name of the Storage Sync resource            |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |

<!--END_DOCUSAURUS_CODE_TABS-->

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
(```--plugin=cloud::azure::network::cdn::plugin --mode=requests --custommode=api```).
This Storage Sync instance is identified by its id (```--resource='STO001ABCD'```) and its associated group (```--resource-group='RSG1234'```).
The authentication parameters to be used with the custom mode are specified
in the options (```--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

The calculated metrics are the total values (```--aggregation='Total'```) of a 900 secondes / 15 min period (```--timeframe='900'```)
with one sample per 5 minutes (```--interval='PT5M'```).

This command would trigger a WARNING alarm if the number of failed files synchronization  is reported as over 800 (```--warning-item-errors='800'```)
and a CRITICAL alarm over 900 errors (```--critical-item-errors='900'```).

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_storage_storagesync_api.pl   \
    --plugin=cloud::azure::storage::storagesync::plugin  \
    --mode=files-synced  \
    --help
```

All Plugin modes can be displayed by adding the ```--list-mode``` parameter to 
the command:

```bash
 /usr/lib/centreon/plugins//centreon_azure_storage_storagesync_api.pl   \
    --plugin=cloud::azure::storage::storagesync::plugin  \
    --list-mode
```

### Troubleshooting

#### ```Error message```

......