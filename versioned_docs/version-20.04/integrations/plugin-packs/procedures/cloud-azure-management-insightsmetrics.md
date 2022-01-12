---
id: cloud-azure-management-insightsmetrics
title: Azure InsightsMetrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

> This Pack is in an experimental state (version 2.x.X).

The Centreon Pack *Azure InsightsMetrics* aims to monitor additional indicators that are not available on the Azure Monitor feature.
For this, it runs KustoQL based queries on the InsightsMetrics database reachable through the Azure LogAnalytics API.
For example, using this Pack will allow you to monitor system indicators of Azure Virtual Machines resources (CPU, memory, disks...).

> The associated Plugin is only compatible with the 'api' *custom-mode*. 'azcli' is not supported for this usage.

## Pack Assets

### Monitored Objects

Available indicators and metrics:
* Azure Virtual Machines
     * CPU
     * Memory
     * Logical-Disks

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name                                                   | Description                    | Unit |
|:--------------------------------------------------------------|:-------------------------------|:-----|
| *instance*#azure.insights.cpu.average.utilization.percentage  | Average utilization percentage | %    |
| *instance\~ID*#azure.insights.cpu.core.utilization.percentage | Current utilization per core   | %    |

</TabItem>
<TabItem value="Logical-Disks" label="Logical-Disks">

| Metric Name                                                               | Description                            | Unit    |
|:--------------------------------------------------------------------------|:---------------------------------------|:--------|
| *instance\~mount_point*#azure.insights.logicaldisk.used.bytes             | Logical Disk current usage             | B       |
| *instance\~mount_point*#azure.insights.logicaldisk.used.percentage        | Logical Disk current usage percentage  | %       |
| *instance\~mount_point*#azure.insights.logicaldisk.free.percentage        | Logical Disk current free percentage   | %       |
| *instance\~mount_point*#azure.insights.logicaldisks.io.readspersecond     | Logical Disk current IO/s reads rate   | count/s |
| *instance\~mount_point*#azure.insights.logicaldisks.io.readbytespersecond | Logical Disk current IO B/s reads rate | B/s     |
| *instance\~mount_point*#azure.insights.logicaldisks.io.writespersecond    | Logical Disk current IO writes rate    | count/s |
| *instance\~mount_point*#azure.insights.logicaldisks.io.transferspersecond | Logical Disk current IO transfers rate | count/s |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name                                           | Description                         | Unit |
|:------------------------------------------------------|:------------------------------------|:-----|
| *instance*#azure.insights.memory.usage.bytes          | Current memory usage                | B    |
| *instance*#azure.insights.memory.usage.percentage     | Current memory usage percentage     | %    |
| *instance*#azure.insights.memory.usage.percentage     | Current memory usage percentage     | %    |
| *instance*#azure.insights.memory.available.percentage | Current memory available percentage | %    |

</TabItem>
</Tabs>

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Rule name                                                                    | Description                                                 |
|:-----------------------------------------------------------------------------|:------------------------------------------------------------|
| Cloud-Azure-Management-InsightsMetrics-Api-VirtualMachine-Logical-Disks-Name | Discover logical disks associated to Azure Virtual Machines |

</TabItem>
</Tabs>

## Prerequisites

### Azure credentials

To use the 'api' custom mode, make sure to obtain the required information using the 
how-to below. Keep it safe until including it in the Autodiscovery job settings form.

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

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon Plugin on every Centreon Poller expected to monitor Azure resources based on InsightsMetrics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-InsightsMetrics-Api
```

2. On the Centreon Web interface, install the *Azure InsightsMetrics* Centreon Pack on the **Configuration > Plugin Packs > Manager** page.

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin on every Centreon Poller expected to monitor Azure resources based on InsightsMetrics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-InsightsMetrics-Api
```

2. Install the Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-azure-management-insightsmetrics.noarch
```

3. On the Centreon Web interface, install the *Azure InsightsMetrics* Centreon Pack on the **Configuration > Plugin Packs > Manager** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the appropriate *Cloud-Azure-Management-InsightsMetrics-XXX-custom* template to apply to the Host
(for example, choose *Cloud-Azure-Management-InsightsMetrics-VirtualMachine-custom* for an Azure VM resource).
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

| Mandatory | Nom                       | Description                                                    |
|:----------|:--------------------------|:---------------------------------------------------------------|
| X         | AZURECUSTOMMODE           | Custom mode 'api'                                              |
| X         | AZURELOGANALYTICSENDPOINT | LogAnalytics endpoint (default: `https://api.loganalytics.io`) |
| X         | AZURESUBSCRIPTION         | Subscription ID                                                |
| X         | AZUREWORKSPACEID          | LogAnalytics workspace ID                                      |
| X         | AZURETENANT               | Tenant ID                                                      |
| X         | AZURECLIENTID             | Client ID                                                      |
| X         | AZURECLIENTSECRET         | Client secret                                                  |
| X         | AZURERESOURCE             | full ID of the resource to monitor                             |


## How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_management_insightsmetrics_api.pl \
    --plugin=cloud::azure::management::insightsmetrics::plugin \
    --mode=cpu --custommode='api' --management-endpoint='https://api.loganalytics.io' \
    --subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx' \
    --workspace-id='xxxxxxxxxxxxxxx' \
    --filter-resourceid='/subscriptions/XXXX/resourcegroups/my_resourcegroup1/providers/microsoft.compute/virtualmachines/my_vm1' \
    --warning-average-utilization-percentage='90' \
    --critical-average-utilization-percentage='95'
```

Expected command output is shown below:

```bash
OK: 2 CPU(s) average utilization: 2.18 % - All CPUs are ok | 'azure.insights.cpu.average.utilization.percentage'=2.18%;0:90;0:95;0;100
'1#azure.insights.cpu.core.utilization.percentage'=2.12%;;;0;100 '2#azure.insights.cpu.core.utilization.percentage'=2.25%;;;0;100
Computer 'my_vm1'
2 CPU(s) average utilization: 2.18 %
CPU #1 usage : 2.12 %
CPU #2 usage : 2.25 %
```

The command above checks the *CPU* of an Azure *Virtual Machine* account using the 'api' custom-mode
targetting the *LogAnalytics* API (```--plugin=cloud::azure::management::insightsmetrics::plugin --mode=cpu --custommode=api 
--management-endpoint='https://api.loganalytics.io'```).
The authentication parameters to be used with the custom mode are specified in the options (```--subscription='xxxxxxxxx'
--tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```). The Resource ID of the Azure VM *my_vm1* is specified in the filter 
(```--filter-resourceid='/subscriptions/XXXX/resourcegroups/my_resourcegroup1/providers/microsoft.compute/virtualmachines/my_vm1'```).

This command would trigger a WARNING alarm if the *average utilization* is reported as over 90% (```--warning-average-utilization-percentage='90'```)
and a CRITICAL alarm over 95% (```--critical-average-utilization-percentage='95'```).

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_management_insightsmetrics_api.pl \
    --plugin=cloud::azure::management::insightsmetrics::plugin \
    --mode=cpu
    --help
```

### Troubleshooting

Please find all the troubleshooting documentation for the API-based Plugins in the [dedicated chapter](../tutorials/troubleshooting-plugins#http-and-api-checks)
of the Centreon documentation.
