---
id: cloud-azure-integration-servicebus
title: Azure ServiceBus
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Microsoft Azure Service Bus is a fully managed enterprise message broker with message queues and publish-subscribe topics. Service
Bus is used to decouple applications and services from each other, providing the following benefits:

* Load-balancing work across competing workers
* Safely routing and transferring data and control across service and application boundaries
* Coordinating transactional work that requires a high-degree of reliability

The Centreon Monitoring Connector *Azure ServiceBus* can rely on Azure API or Azure CLI to collect the metrics related to the
ServiceBus service.

## Monitoring Connector Assets

### Monitored Objects

* Azure *ServiceBus* instances
    * Connections
    * Messages
    * Requests
    * Namespaces

### Discovery rules

The Centreon Monitoring Connector *Azure ServiceBus* includes a Host Discovery *provider* to automatically discover the Azure instances of a given
subscription and add them to the Centreon configuration.
This provider is named **Microsoft Azure ServiceBus**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-integration-servicebus-provider.png)

> This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](/docs/monitoring/discovery/hosts-discovery)

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Messages" label="Messages">

| Metric Name                                      | Description                                      | Unit  |
|:-------------------------------------------------|:-------------------------------------------------|:------|
| servicebus.namespace.messages.active.count       | Count of active messages in a Queue/Topic        | Count |
| servicebus.namespace.messages.deadlettered.count | Count of dead-lettered messages in a Queue/Topic | Count |
| servicebus.namespace.messages.incoming.count     | Incoming Messages                                | Count |
| servicebus.namespace.messages.outgoing.count     | Outgoing Messages                                | Count |
| servicebus.namespace.messages.scheduled.count    | Count of scheduled messages in a Queue/Topic.    | Count |
| servicebus.namespace.messages.total.count        | Total messages                                   | Count |

</TabItem>
<TabItem value="Requests" label="Requests">

| Metric Name                                    | Description         | Unit  |
|:-----------------------------------------------|:--------------------|:------|
| servicebus.namespace.requests.incoming.count   | Incoming Requests   | Count |
| servicebus.namespace.requests.successful.count | Successful Requests | Count |
| servicebus.namespace.requests.throttled.count  | Throttled Requests  | Count |

</TabItem>
<TabItem value="Namespaces" label="Namespaces">

| Metric Name                                  | Description  | Unit |
|:---------------------------------------------|:-------------|:-----|
| servicebus.namespace.cpu.usage.percentage    | CPU          | %    |
| servicebus.namespace.memory.usage.percentage | Memory Usage | %    |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Integration-ServiceBus-custom* template to apply to the Host.
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
| X         | AZURERESOURCE     | Id of the ServiceBus instance |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom               | Description                   |
|:----------|:------------------|:------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'azcli'           |
| X         | AZURESUBSCRIPTION | Subscription ID               |
| X         | AZURERESOURCE     | Id of the ServiceBus instance |

</TabItem>
</Tabs>

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_azure_integration_servicebus_api.pl \
    --plugin=cloud::azure::integration::servicebus::plugin \
    --mode=requests \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='SVC001ABCD' \
    --timeframe='900' \
    --interval='PT5M' \
    --warning-throttled-requests='800' \
    --critical-throttled-requests='900'
```

Expected command output is shown below:

```bash
OK: Instance 'SVC001ABCD' Statistic 'total' Metrics Incoming Requests: 1227.00, Successful Requests: 1221.00 Throttled Requests: 6.00 |
'SVC001ABCD~maximum#servicebus.namespace.requests.incoming.count'=1221;;;0; 'SVC001ABCD~maximum#servicebus.namespace.requests.successful.count'=1221;;;0; 
'SVC001ABCD~maximum#servicebus.namespace.requests.throttled.count'=6;800;900;0;
```

The command above checks the *requests* of an Azure *ServiceBus* instance using the 'api' custom-mode
(```--plugin=cloud::azure::integration::servicebus::plugin --mode=requests --custommode=api```).
This ServiceBus instance is identified by its id (```--resource='SVC001ABCD'```) and the authentication parameters
to be used with the custom mode are specified in the options (```--subscription='xxxxxxxxx' --tenant='xxxxxxx'
--client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

The calculated metrics are the total (```--aggregation='total'```) of values on a 900 secondes / 15 min period (```--timeframe='900'```)
with one sample per 5 minutes (```--interval='PT5M'```).

This command would trigger a WARNING alarm if the *Throttled Requests* rate is reported as over 800
(```--warning-throttled-requests='800'```) and a CRITICAL alarm over 900 (```--critical-throttled-requests='900'```).

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_integration_servicebus_api.pl \
    --plugin=cloud::azure::integration::servicebus::plugin \
    --mode=requests \
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
