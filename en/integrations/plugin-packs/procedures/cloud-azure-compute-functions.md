---
id: cloud-azure-compute-functions
title: Azure Functions
---

## Overview

Azure functions is a serverless plateform that allows to easily write and deploy
code reacting to events occuring in any Azure or 3rd party services.

The Centreon Plugin-Pack *Azure Functions* can rely on Azure API or Azure CLI 
to collect the metrics related to the Functions service.

## Plugin Pack Assets

### Monitored Objects

* Azure *Functions* instances

### Discovery rules

The Centreon Plugin-Pack *Azure Functions* includes a Host Discovery *provider* to automatically discover the Azure instances of a given
subscription and add them to the Centreon configuration.
This provider is named **Microsoft Azure Functions**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-compute-functions-provider.png)

> This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](../../../monitoring/discovery/hosts-discovery.html)

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--App-Usage-->

| Metric Name                          | Description                                                                       |
|:-------------------------------------|:----------------------------------------------------------------------------------|
| appservice.connections.count         | The number of bound sockets existing in the sandbox                               |
| appservice.assemblies.current.count  | The current number of assemblies loaded across all AppDomains in this application |
| appservice.handle.count              | The total number of handles currently open by the app process                     |
| appservice.thread.count              | The number of threads currently active in the app process                         |
| appservice.appdomains.count          | The current number of AppDomains loaded in this application                       |
| appservice.appdomains.unloaded.count | The total number of AppDomains unloaded since the start of the application        |

<!--Cpu-Time-->

| Metric Name                     | Description                                      | Unit    |
|:--------------------------------|:-------------------------------------------------|:--------|
| appservice.cpu.consumed.seconds | The amount of CPU consumed by the app in seconds | seconds |

<!--Data-->

| Metric Name               | Description                                          | Unit  |
|:--------------------------|:---------------------------------------------------- |:------|
| appservice.data.in.bytes  | The amount of incoming bandwidth consumed by the app | bytes |
| appservice.data.out.bytes | The amount of outgoing bandwidth consumed by the app | bytes |

<!--File-System-->

| Metric Name                       | Description                                        |
|:----------------------------------|:---------------------------------------------------|
| appservice.filesystem.usage.bytes | Percentage of filesystem quota consumed by the app |

<!--Functions-->

| Metric Name                       | Description                           |
|:----------------------------------|:--------------------------------------|
| functions.executions.count.count  | The number of function exectution     |
| functions.executions.units.count  | The number of functon execution units |
 
<!--Gc-Usage-->

| Metric Name              | Description                                                                                           |
|:-------------------------|:------------------------------------------------------------------------------------------------------|
| appservice.gc.gen0.count | The number of times the generation 0 objects are garbage collected since the start of the app process |
| appservice.gc.gen1.count | The number of times the generation 1 objects are garbage collected since the start of the app process |
| appservice.gc.gen2.count | The number of times the generation 2 objects are garbage collected since the start of the app process |

<!--Health-->

| Status Name | Description                 |
|:------------|:----------------------------|
| status      | Current operational status  |
| summary     | Last related status message |

<!--Http-Requests-->

| Metric Name                          | Description                                                                 |
|:-------------------------------------|:----------------------------------------------------------------------------|
| appservice.http.request.count        | The total number of requests regardless of their resulting HTTP status code |
| appservice.http.request.queue.count  | The number of requests in the application request queue                     |
| appservice.htpp.request.XXX.count    | The count of requests resulting in an HTTP status code = XXX                | 

<!--IO-Operations-->

| Metric Name                                | Description                                                                                      | Unit |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------|:-----|
| appservice.bytes.other.bytespersecond      | The rate at which the app process is issuing bytes to I/O operations that don't involve data     | B/s  |
| appservice.operations.other.bytespersecond | The rate at which the app process is issuing I/O operations that aren't read or write operations | B/s  |
| appservice.bytes.read.bytespersecond       | The rate at which the app process is reading bytes from I/O operations                           | B/s  |
| appservice.operations.read.bytespersecond  | The rate at which the app process is issuing read I/O operations                                 | B/s  |
| appservice.bytes.write.bytespersecond      | The rate at which the app process is writing bytes to I/O operations                             | B/s  |
| appservice.operations.write.bytespersecond | The rate at which the app process is issuing write I/O operations                                | B/s  |

<!--Memory-->

| Metric Name                                | Description                                                                                           | Unit  |
|:-------------------------------------------|:------------------------------------------------------------------------------------------------------|:------|
| appservice.memory.average.usage.bytes      | The average amount of memory used by the app                                                          | bytes |
| appservice.memory.usage.bytes              | The current amount of memory used by the app                                                          | bytes |
| appservice.memory.privatebytes.usage.bytes | The amount of memory allocated allocated by the app process that can't be shared with other processes | bytes |

<!--Response-Time-->

| Metric Name                           | Description                                  | Unit    |
|:--------------------------------------|:---------------------------------------------|:--------|
| appservice.http.response.time.seconds | The time taken for the app to serve requests | seconds |

<!--Status-->

| Metric Name             | Description         | 
|:------------------------|:--------------------|
| appservice.status.count | Health check status |

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

1.  Install the Centreon Plugin package on every Centreon poller expected to monitor Azure Functions resources:

```bash
yum install centreon-plugin-Cloud-Azure-Compute-Functions-Api
```

2. On the Centreon Web interface, install the *Azure Functions* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Azure Functions resources:

```bash
yum install centreon-plugin-Cloud-Azure-Compute-Functions-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-azure-compute-functions.noarch
```

3. On the Centreon Web interface, install the *Azure Functions* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Compute-Functions-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.
These mandatory Macros differ regarding the custom mode used:

<!--DOCUSAURUS_CODE_TABS-->

<!--Azure Monitor API-->

| Mandatory | Nom               | Description                             |
|:----------|:------------------|:----------------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'api'                       |
| X         | AZURESUBSCRIPTION | Subscription ID                         |
| X         | AZURETENANT       | Tenant ID                               |
| X         | AZURECLIENTID     | Client ID                               |
| X         | AZURECLIENTSECRET | Client secret                           |
| X         | AZURERESOURCE     | Id of the Functions instance          |

<!--Azure AZ CLI-->

| Mandatory | Nom               | Description                             |
|:----------|:------------------|:----------------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'azcli'                     |
| X         | AZURESUBSCRIPTION | Subscription ID                         |
| X         | AZURERESOURCE     | Id of the Functions instance          |

<!--END_DOCUSAURUS_CODE_TABS-->

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_functions_api.pl \
    --plugin=cloud::azure::compute::functions::plugin \
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

The command above checks the *Cpu-Time* of an Azure *Functions* instance using the 'api' custom-mode
(```--plugin=cloud::azure::compute::functions::plugin --mode=cpu-time --custommode=api```).
This Functions instance is identified by its id (```--resource='APP01'```) and the authentication parameters
to be used with the custom mode are specified in the options (```--subscription='xxxxxxxxx' --tenant='xxxxxxx'
--client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

The calculated metrics are the total (```--aggregation='total'```) of values on a 900 secondes / 15 min period (```--timeframe='900'```)
with one sample per 5 minutes (```--interval='PT5M'```).

This command would trigger a WARNING alarm if the *Cpu-time* is reported as over 1
(```--warning-cpu-time='1'```) and a CRITICAL alarm over 2 (```--critical-cpu-time='2'```).

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_functions_api.pl \
    --plugin=cloud::azure::compute::functions::plugin \
    --mode=cpu-time \
    --help
```

### Troubleshooting

#### The Azure credentials have changed and the Plugin does not work anymore

The Plugin is using a cache file to keep connection information and avoid an authentication at each call. 
If some of the authentication parameters change, you must delete the cache file. 

The cache file can be found within  ```/var/lib/centreon/centplugins/``` folder with a name similar to azure_api_<md5>_<md5>_<md5>_<md5>.

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
