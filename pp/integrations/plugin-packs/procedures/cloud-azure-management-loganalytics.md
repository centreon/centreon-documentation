---
id: cloud-azure-management-loganalytics
title: Azure Log Analytics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Log Analytics is a tool in the Azure portal to edit and run log queries from data 
collected by Azure Monitor Logs and interactively analyze their results.

The *Azure Log Analytics* Monitoring Connector allows you to run KQL queries and monitor 
number of matched items. It can rely on both Azure API and Azure CLI.

## Monitoring Connector Assets

### Monitored Objects

* Number of logs lines matching query expression

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Kusto-Query" label="Kusto-Query">

| Metric name               | Description                                        | Unit  |
|:--------------------------|:-------------------------------------------------- |:----- |
| match.count               | The number of logs matching the query expression.  | count |

The KUSTOQUERY Macro is mandatory. 

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1.  Install the Centreon package on every Centreon poller expected to run query against Azure Log Analytics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api
```

2. On the Centreon Web interface, install the *Azure Log Analytics* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to run query against Azure Log Analytics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api
```

2. Install the Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-azure-management-log-analytics-api
```

3. On the Centreon Web interface, install the *Azure Log Analytics* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Management-Log-Analytics-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

The Macros vary depending on the custom-mode used.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory   | Name              | Description       |
| :---------- | :---------------- | :---------------- |
| X           | AZURECUSTOMMODE   | Custom mode 'api' |
| X           | AZURESUBSCRIPTION | Subscription ID   |
| X           | AZURETENANT       | Tenant ID         |
| X           | AZURECLIENTID     | Client ID         |
| X           | AZURECLIENTSECRET | Client secret     |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory   | Name              | Description         |
| :---------- | :---------------- | :------------------ |
| X           | AZURECUSTOMMODE   | Custom mode 'azcli' |
| X           | AZURESUBSCRIPTION | Subscription ID     |

</TabItem>
</Tabs>

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_management_loganalytics_api.pl \
    --plugin=cloud::azure::management::loganalytics::plugin \
    --mode=kusto-query --custommode='api' --management-endpoint='https://api.loganalytics.io' \
    --subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'
    --workspace-id='xxxxxxxxxxxxxxx' --custom-output='Number of computer without heartbeat for more than 2 days: %d' \
    --query='Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall < ago(2d)' \
    --critical-match='0'
```

Expected command output is shown below:

```bash
OK: Number of computer without heartbeat for more than 2 days: 1 | 'match.count'=1;;;0;
```

The command above runs a KustoQL query against Azure Log Analytics using 'api' custom-mode (```-plugin=cloud::azure::management::loganalytics::plugin --mode=kusto-query --custommode='api'```).

All the parameters to obtain a token are specified in the corresponding options 
(```--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```). 

The query runs in a specific workspace (```--workspace-id='xxxxxxxxxxxxxxx'```) and you can customize 
the output message to make it more relevant (```--custom-output='Number of computer without heartbeat for more than 2 days: %d'```). 

The Query expression itself is included and can be copy/pasted from the one used in the Azure Analytics Web UI. The example is
a query returning the number of lines where the LastCall is older than two days. 
(```--query='Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall < ago(2d)'```)

The query's timespan uses the ISO-8601 time format and can be specified with the option ```--timespan```.

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_management_loganalytics_api.pl \
    --plugin=cloud::azure::management::loganalytics::plugin \
    --mode=kusto-query
    --help
```

### Troubleshooting

#### ```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```

When I run my command I obtain the following error message:
```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```.

It means that some parameters used to authenticate the API request are wrong. The 'ERROR_NAME' string gives 
some hints about where the problem stands. 

As an example, if my Client ID or Client Secret are wrong, 'ERROR_DESC' value will be 'invalid_client'. 

#### The Azure credentials have changed and the Plugin does not work anymore

The Plugin is using a cache file to keep connection information and avoid an authentication at each call. 
If some of the authentication parameters change, you must delete the cache file. 

The cache file can be found within  ```/var/lib/centreon/centplugins/``` folder with a name similar to azure_api_`<md5>_<md5>_<md5>_<md5>`.

#### UNKNOWN: 500 Can't connect to login.microsoftonline.com:443 

This error message means that the Centreon Plugin couldn't successfully connect 
to the Azure Login API. Check that no third party device (such as a firewall)
is blocking the request. A proxy connection may also be necessary to connect to the API.
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.
