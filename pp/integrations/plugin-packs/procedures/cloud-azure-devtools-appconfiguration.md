---
id: cloud-azure-devtools-appconfiguration
title: Azure App Configuration
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Azure App Configuration helps manage application settings and control their 
access centrally by storing their configuration in a universal hosted location. 

The Centreon Monitoring Connector *Azure App Configuration* can rely on Azure API or Azure CLI 
to collect the metrics related to the App Configuration service.

## Monitoring Connector Assets

### Monitored Objects

* Azure *App Configuration* HTTP requests

### Discovery rules

The Centreon Monitoring Connector *Azure App Configuration* includes a Host Discovery *provider* to automatically discover the Azure instances of a given
subscription and add them to the Centreon configuration.
This provider is named **Microsoft Azure App Configuration**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-devtools-appconfiguration-provider.png)

> This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](/docs/monitoring/discovery/hosts-discovery)

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Http-Requests" label="Http-Requests">

| Metric Name                                             | Description                            | Unit  |
|:--------------------------------------------------------|:---------------------------------------|:------|
| appconfiguration.http.incoming.requests.count           | Total number of incoming http requests | Count |
| appconfiguration.http.incoming.requests.milliseconds    | Latency on an http request             | ms    |
| appconfiguration.http.throttled.incoming.requests.count | Throttled http requests                | Count |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1.  Install the Centreon package on every Centreon poller expected to monitor Azure App Configuration resources:

```bash
yum install centreon-plugin-Cloud-Azure-DevTools-AppConfiguration-Api
```

2. On the Centreon Web interface, install the *Azure App Configuration* Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor Azure App Configuration resources:

```bash
yum install centreon-plugin-Cloud-Azure-DevTools-AppConfiguration-Api
```

2. Install the Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-azure-devtools-appconfiguration.noarch
```

3. On the Centreon Web interface, install the *Azure App Configuration* Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-DevTools-AppConfiguration-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.
These mandatory Macros differ regarding the custom mode used:

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Nom               | Description                          |
|:----------|:------------------|:-------------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'api'                    |
| X         | AZURESUBSCRIPTION | Subscription ID                      |
| X         | AZURETENANT       | Tenant ID                            |
| X         | AZURECLIENTID     | Client ID                            |
| X         | AZURECLIENTSECRET | Client secret                        |
| X         | AZURERESOURCE     | Id of the App Configuration instance |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom               | Description                          |
|:----------|:------------------|:-------------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'azcli'                  |
| X         | AZURESUBSCRIPTION | Subscription ID                      |
| X         | AZURERESOURCE     | Id of the App Configuration instance |

</TabItem>
</Tabs>

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_azure_devtools_appconfiguration_api.pl \
    --plugin=cloud::azure::devtools::appconfiguration::plugin \
    --mode=http-requests \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='APPCONF01' \
    --resource-group='xxxxxxxxx' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Count' \
    --warning-http-requests='800' \
    --critical-http-requests='900'
```

Expected command output is shown below:

```bash
OK: Instance 'APPCONF01' Statistic 'count' Metrics Incoming HTTP requests: 0.00, 
Throttled Incoming HTTP requests: 0.00, Incoming HTTP requests duration: 0.00ms | 
'APPCONF01~count#http.incoming.requests.count'=0.00;0:800;0:900;0; 
'APPCONF01~count#http.throttled.incoming.requests.count'=0.00;;;0; 
'APPCONF01~count#http.incoming.requests.milliseconds'=0.00ms;;;0;
```

The command above checks the number of *http-requests* of an Azure *App Configuration* instance using the 'api' custom-mode
(```--plugin=cloud::azure::devtools::appconfiguration::plugin --mode=http-requests --custommode=api```).
This App Configuration instance is identified by its id (```--resource='APPCONF01'```) and the authentication parameters
to be used with the custom mode are specified in the options (```--subscription='xxxxxxxxx' --tenant='xxxxxxx'
--client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

The calculated metrics are the count (```--aggregation='Count'```) of values on a 900 secondes / 15 min period (```--timeframe='900'```)
with one sample per 5 minutes (```--interval='PT5M'```).

This command would trigger a WARNING alarm if the number of *requests* is reported as over 800
(```--warning-http-requests='800'```) and a CRITICAL alarm over 900 (```--critical-http-requests='900'```).

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_devtools_appconfiguration_api.pl \
    --plugin=cloud::azure::devtools::appconfiguration::plugin \
    --mode=http-requests \
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
