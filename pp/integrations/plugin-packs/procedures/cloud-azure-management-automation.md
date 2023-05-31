---
id: cloud-azure-management-automation
title: Azure Automation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Azure Automation delivers a cloud-based automation and configuration service 
that supports consistent management across your Azure and non-Azure 
environments. It comprises process automation, configuration management, update 
management, shared capabilities, and heterogeneous features. Automation gives 
you complete control during deployment, operations, and decommissioning of 
workloads and resources.

The Centreon Monitoring Connector *Azure Automation* can rely on Azure API or Azure CLI 
to collect the metrics related to the Automation service.

## Monitoring Connector Assets

### Monitored Objects

* Azure *Automation* instances

### Discovery rules

The Centreon Monitoring Connector *Azure Automation* includes a Host Discovery *provider* to automatically discover the Azure instances of a given
subscription and add them to the Centreon configuration.
This provider is named **Microsoft Azure Automation**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-management-automation-provider.png)

> This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](/docs/monitoring/discovery/hosts-discovery)

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Metric Name                        | Description                                    |
|:-----------------------------------|:-----------------------------------------------|
| automation.jobs.total.count        | Number of total jobs                           |
| automation.machineruns.total.count | Number of total update deployment machine runs |
| automation.runs.total.count        | Number of total Update deployment runs         |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1.  Install the Centreon package on every Centreon poller expected to monitor Azure Automation resources:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Automation-Api
```

2. On the Centreon Web interface, install the *Azure Automation* Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor Azure Automation resources:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Automation-Api
```

2. Install the Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-azure-management-automation.noarch
```

3. On the Centreon Web interface, install the *Azure Automation* Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Management-Automation-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.
These mandatory Macros differ regarding the custom mode used:

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Nom               | Description                   |
|:----------|:------------------|:------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'api'             |
| X         | AZURESUBSCRIPTION | Subscription ID               |
| X         | AZURETENANT       | Tenant ID                     |
| X         | AZURECLIENTID     | Client ID                     |
| X         | AZURECLIENTSECRET | Client secret                 |
| X         | AZURERESOURCE     | Id of the Automation instance |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom               | Description                   |
|:----------|:------------------|:------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'azcli'           |
| X         | AZURESUBSCRIPTION | Subscription ID               |
| X         | AZURERESOURCE     | Id of the Automation instance |

</TabItem>
</Tabs>

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_azure_management_automation_api.pl \
    --plugin=cloud::azure::management::automation::plugin \
    --mode=jobs \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='AUTOMATION01' \
    --resource-group='xxxxxxxxx' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Total' \
    --warning-jobs-total='80' \
    --critical-jobs-total='90'
```

Expected command output is shown below:

```bash
OK: Instance 'AUTOMATION01' Statistic 'total' Metrics Total Update Deployment Runs: 0.00, Total Update Deployment Machine Runs: 0.00, Total Jobs: 0.00 | 'AUTOMATION01~total#automation.runs.total.count'=0.00;;;0; 'AUTOMATION01~total#automation.machineruns.total.count'=0.00;;;0; 'AUTOMATION01~total#automation.jobs.total.count'=0.00;0:80;0:90;0;
```

The command above checks the *jobs* of an Azure *Automation* instance using the 'api' custom-mode
(```--plugin=cloud::azure::management::automation::plugin --mode=jobs --custommode=api```).
This Automation instance is identified by its id (```--resource='SVC001ABCD'```) and the authentication parameters
to be used with the custom mode are specified in the options (```--subscription='xxxxxxxxx' --tenant='xxxxxxx'
--client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

The calculated metrics are the total (```--aggregation='total'```) of values on a 900 secondes / 15 min period (```--timeframe='900'```)
with one sample per 5 minutes (```--interval='PT5M'```).

This command would trigger a WARNING alarm if the *total jobs* count is reported as over 80
(```--warning-jobs-total='80'```) and a CRITICAL alarm over 90 (```--critical-jobs-total='90'```).

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_management_automation_api.pl \
    --plugin=cloud::azure::management::automation::plugin \
    --mode=jobs \
    --help
```

### Troubleshooting

#### The Azure credentials have changed and the Plugin does not work anymore

The Plugin is using a cache file to keep connection information and avoid an authentication at each call. 
If some of the authentication parameters change, you must delete the cache file. 

The cache file can be found within  ```/var/lib/centreon/centplugins/``` folder with a name similar to azure_api_`<md5>_<md5>_<md5>_<md5>`.

#### ```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```

When I run my command I obtain the following error message:
```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```.

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
