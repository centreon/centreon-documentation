---
id: cloud-azure-web-appservice
title: Azure App Service
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Azure App Service is a solution that allows to easily build, deploy and scale
web apps and APIs running on containers or in Windows or Linux.

The Centreon Monitoring Connector *Azure App Service* can rely on Azure API or Azure CLI 
to collect the metrics related to the App Service service.

## Monitoring Connector Assets

### Monitored Objects

* Azure *App Service* instances

### Discovery rules

The Centreon Monitoring Connector *Azure App Service* includes a Host Discovery *provider* to automatically discover the Azure instances of a given
subscription and add them to the Centreon configuration.
This provider is named **Microsoft Azure App Service**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-web-appservice-provider.png)

> This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](/onprem/monitoring/discovery/hosts-discovery)

### Collected metrics and status

<Tabs groupId="sync">
<TabItem value="App-Usage" label="App-Usage">

| Metric Name                          | Description                                                                       | Unit  |
|:-------------------------------------|:----------------------------------------------------------------------------------|:------|
| appservice.connections.count         | The number of bound sockets existing in the sandbox                               | Count |
| appservice.assemblies.current.count  | The current number of assemblies loaded across all AppDomains in this application | Count |
| appservice.handle.count              | The total number of handles currently open by the app process                     | Count |
| appservice.thread.count              | The number of threads currently active in the app process                         | Count |
| appservice.appdomains.count          | The current number of AppDomains loaded in this application                       | Count |
| appservice.appdomains.unloaded.count | The total number of AppDomains unloaded since the start of the application        | Count |

</TabItem>
<TabItem value="Cpu-Time" label="Cpu-Time">

| Metric Name                     | Description                                      | Unit |
|:--------------------------------|:-------------------------------------------------|:-----|
| appservice.cpu.consumed.seconds | The amount of CPU consumed by the app in seconds | s    |

</TabItem>
<TabItem value="Data" label="Data">

| Metric Name               | Description                                          | Unit |
|:--------------------------|:-----------------------------------------------------|:-----|
| appservice.data.in.bytes  | The amount of incoming bandwidth consumed by the app | B    |
| appservice.data.out.bytes | The amount of outgoing bandwidth consumed by the app | B    |

</TabItem>
<TabItem value="File-System" label="File-System">

| Metric Name                       | Description                          | Unit |
|:----------------------------------|:-------------------------------------|:-----|
| appservice.filesystem.usage.bytes | Filesystem quota consumed by the app | B    |
 
</TabItem>
<TabItem value="Gc-Usage" label="Gc-Usage">

| Metric Name              | Description                                                                                           | Unit  |
|:-------------------------|:------------------------------------------------------------------------------------------------------|:------|
| appservice.gc.gen0.count | The number of times the generation 0 objects are garbage collected since the start of the app process | Count |
| appservice.gc.gen1.count | The number of times the generation 1 objects are garbage collected since the start of the app process | Count |
| appservice.gc.gen2.count | The number of times the generation 2 objects are garbage collected since the start of the app process | Count |

</TabItem>
<TabItem value="Health" label="Health">

| Status Name | Description                 |
|:------------|:----------------------------|
| status      | Current operational status  |
| summary     | Last related status message |

</TabItem>
<TabItem value="Http-Requests" label="Http-Requests">

| Metric Name                         | Description                                                                 | Unit  |
|:------------------------------------|:----------------------------------------------------------------------------|:------|
| appservice.http.request.count       | The total number of requests regardless of their resulting HTTP status code | Count |
| appservice.http.request.queue.count | The number of requests in the application request queue                     | Count |
| appservice.htpp.request.XXX.count   | The count of requests resulting in an HTTP status code = XXX                | Count |

</TabItem>
<TabItem value="IO-Operations" label="IO-Operations">

| Metric Name                                | Description                                                                                      | Unit |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------|:-----|
| appservice.bytes.other.bytespersecond      | The rate at which the app process is issuing bytes to I/O operations that don't involve data     | B/s  |
| appservice.operations.other.bytespersecond | The rate at which the app process is issuing I/O operations that aren't read or write operations | B/s  |
| appservice.bytes.read.bytespersecond       | The rate at which the app process is reading bytes from I/O operations                           | B/s  |
| appservice.operations.read.bytespersecond  | The rate at which the app process is issuing read I/O operations                                 | B/s  |
| appservice.bytes.write.bytespersecond      | The rate at which the app process is writing bytes to I/O operations                             | B/s  |
| appservice.operations.write.bytespersecond | The rate at which the app process is issuing write I/O operations                                | B/s  |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name                                | Description                                                                                           | Unit |
|:-------------------------------------------|:------------------------------------------------------------------------------------------------------|:-----|
| appservice.memory.average.usage.bytes      | The average amount of memory used by the app                                                          | B    |
| appservice.memory.usage.bytes              | The current amount of memory used by the app                                                          | B    |

</TabItem>
<TabItem value="Response-Time" label="Response-Time">

| Metric Name                           | Description                                  | Unit |
|:--------------------------------------|:---------------------------------------------|:-----|
| appservice.http.response.time.seconds | The time taken for the app to serve requests | s    |

</TabItem>
<TabItem value="Status" label="Status">

| Metric Name             | Description         | Unit  |
|:------------------------|:--------------------|:------|
| appservice.status.count | Health check status | Count |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Web-AppService-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.
These mandatory Macros differ regarding the custom mode used:

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Nom               | Description                             |
|:----------|:------------------|:----------------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'api'                       |
| X         | AZURESUBSCRIPTION | Subscription ID                         |
| X         | AZURETENANT       | Tenant ID                               |
| X         | AZURECLIENTID     | Client ID                               |
| X         | AZURECLIENTSECRET | Client secret                           |
| X         | AZURERESOURCE     | Id of the App Service instance          |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom               | Description                             |
|:----------|:------------------|:----------------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'azcli'                     |
| X         | AZURESUBSCRIPTION | Subscription ID                         |
| X         | AZURERESOURCE     | Id of the App Service instance          |

</TabItem>
</Tabs>

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_azure_web_appservice_api.pl \
    --plugin=cloud::azure::web::appservice::plugin \
    --mode=cpu-time \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='APP01' \
    --resource-group='xxxxxxxxx' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Total' \
    --warning-cpu-time='1' \
    --critical-cpu-time='2'
```

Expected command output is shown below:

```bash
OK: Instance 'APP01' Statistic 'total' Metrics CPU Time: 0.08s | 'APP01~total#appservice.cpu.consumed.seconds'=0.08s;;;0;
```

The command above checks the *Cpu-Time* of an Azure *App Service* instance using the 'api' custom-mode
(```--plugin=cloud::azure::web::appservice::plugin --mode=cpu-time --custommode=api```).
This App Service instance is identified by its id (```--resource='APP01'```) and the authentication parameters
to be used with the custom mode are specified in the options (```--subscription='xxxxxxxxx' --tenant='xxxxxxx'
--client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

The calculated metrics are the total (```--aggregation='total'```) of values on a 900 secondes / 15 min period (```--timeframe='900'```)
with one sample per 5 minutes (```--interval='PT5M'```).

This command would trigger a WARNING alarm if the *Cpu-time* is reported as over 1
(```--warning-cpu-time='1'```) and a CRITICAL alarm over 2 (```--critical-cpu-time='2'```).

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_web_appservice_api.pl \
    --plugin=cloud::azure::web::appservice::plugin \
    --mode=cpu-time \
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
