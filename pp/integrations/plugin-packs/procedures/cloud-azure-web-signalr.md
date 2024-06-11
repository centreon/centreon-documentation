---
id: cloud-azure-web-signalr
title: Azure SignalR
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Azure SignalR Service simplifies the process of adding real-time web functionality to applications over HTTP.
This real-time functionality allows the service to push content updates to connected clients, such as a single page web or mobile
application. As a result, clients are updated without the need to poll the server, or submit new HTTP requests for updates.

The Centreon Monitoring Connector *Azure SignalR* can rely on Azure API or Azure CLI to collect the metrics related to the
SignalR service.

## Monitoring Connector Assets

### Monitored Objects

* Azure *SignalR* instances
    * Errors
    * Traffic
    * Usage

### Discovery rules

The Centreon Monitoring Connector *Azure SignalR* includes a Host Discovery *provider* to automatically discover the Azure instances of a given
subscription and add them to the Centreon configuration.
This provider is named **Microsoft Azure SignalR**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-web-signalr-provider.png)

> This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](/onprem/monitoring/discovery/hosts-discovery)

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Errors" label="Errors">

| Metric name                      | Description   | Unit |
|:---------------------------------|:--------------|:-----|
| signalr.errors.system.percentage | System Errors | %    |
| signalr.errors.user.percentage   | User Errors   | %    |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric name                    | Description      | Unit |
|:-------------------------------|:-----------------|:-----|
| signalr.traffic.inbound.bytes  | Inbound Traffic  | B    |
| signalr.traffic.outbound.bytes | Outbound Traffic | B    |

</TabItem>
<TabItem value="Usage" label="Usage">

| Metric name               | Description      | Unit |
|:--------------------------|:-----------------|:-----|
| signalr.connections.count | Connection count |      |
| signalr.messages.count    | Message count    |      |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1.  Install the Centreon package on every Centreon poller expected to monitor Azure SignalR resources:

```bash
yum install centreon-plugin-Cloud-Azure-Web-SignalR-Api
```

2. On the Centreon Web interface, install the *Azure SignalR* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor Azure SignalR resources:

```bash
yum install centreon-plugin-Cloud-Azure-Web-SignalR-Api
```

2. Install the Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-azure-web-signalr.noarch
```

3. On the Centreon Web interface, install the *Azure SignalR* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Web-SignalR-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.
These mandatory Macros differ regarding the custom mode used:

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Nom               | Description                 |
|:----------|:------------------|:----------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'api'           |
| X         | AZURESUBSCRIPTION | Subscription ID             |
| X         | AZURETENANT       | Tenant ID                   |
| X         | AZURECLIENTID     | Client ID                   |
| X         | AZURECLIENTSECRET | Client secret               |
| X         | AZURERESOURCE     | Id of the SignalR instance  |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom               | Description                 |
|:----------|:------------------|:----------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'azcli'         |
| X         | AZURESUBSCRIPTION | Subscription ID             |
| X         | AZURERESOURCE     | Id of the SignalR instance  |

</TabItem>
</Tabs>

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_azure_web_signalr_api.pl \
    --plugin=cloud::azure::web::signalr::plugin \
    --mode=errors \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='SIG001ABCD' \
    --timeframe='900' \
    --interval='PT5M' \
    --warning-system-errors='50' \
    --critical-system-errors='90'
```

Expected command output is shown below:

```bash
OK: Instance 'SIG001ABCD' Statistic 'maximum' Metrics System Errors: 2.17%, User Errors: 4.12% |
'SIG001ABCD~maximum#signalr.errors.system.percentage'=2.17%;50;90;0;100 'SIG001ABCD~maximum#signalr.errors.user.percentage'=4.12%;;;0;100
```

The command above checks the *errors* of an Azure *SignalR* instance using the 'api' custom-mode
(```--plugin=cloud::azure::web::signalr::plugin --mode=errors --custommode=api```).
This SignalR instance is identified by its id (```--resource='SIG001ABCD'```) and the authentication parameters
to be used with the custom mode are specified in the options (```--subscription='xxxxxxxxx' --tenant='xxxxxxx'
--client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

The calculated metrics are the maximum (```--aggregation='maximum'```) of values on a 900 secondes / 15 min period (```--timeframe='900'```)
with one sample per 5 minutes (```--interval='PT5M'```).

This command would trigger a WARNING alarm if the *System errors* percentage rate is reported as over 50%
(```--warning-system-errors='50'```) and a CRITICAL alarm over 90% (```--critical-system-errors='90'```).

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_web_signalr_api.pl \
    --plugin=cloud::azure::web::signalr::plugin \
    --mode=errors \
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
