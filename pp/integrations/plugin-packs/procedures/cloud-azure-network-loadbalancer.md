---
id: cloud-azure-network-loadbalancer
title: Azure Load Balancer
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Azure Load Balancer operates at layer four of the Open Systems Interconnection (OSI) model. It's the single point of contact for
clients. Load Balancer distributes inbound flows that arrive at the load balancer's front end to backend pool instances.
These flows are according to configured load balancing rules and health probes. The backend pool instances can be Azure Virtual
Machines or instances in a virtual machine scale set.

The Centreon Monitoring Connector *Azure Load Balancer* can rely on Azure API or Azure CLI to collect the metrics related to the
Load Balancer service.

## Monitoring Connector Assets

### Monitored Objects

* Azure *Load Balancer* instances

### Discovery rules

The Centreon Monitoring Connector *Azure Load Balancer* includes a Host Discovery *provider* to automatically discover the Azure instancesof a given
subscription and add them to the Centreon configuration.
This provider is named **Microsoft Azure Load Balancer**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-loadbalancer-provider.png)

> This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](/docs/monitoring/discovery/hosts-discovery)

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Datapath" label="Datapath">

| Metric name                                   | Description           | Unit |
|:----------------------------------------------|:----------------------|:-----|
| loadbalancer.datapath.availability.percentage | Datapath availability | %    |

</TabItem>
<TabItem value="Healthprobe" label="Healthprobe">

| Metric name                                      | Description              | Unit |
|:-------------------------------------------------|:-------------------------|:-----|
| loadbalancer.healthprobe.availability.percentage | Healthprobe availability | %    |

</TabItem>
<TabItem value="Snat" label="Snat">

| Metric name                             | Description                        | Unit  |
|:----------------------------------------|:-----------------------------------|:------|
| loadbalancer.snat.ports.allocated.count | Number of allocated SNAT ports     | Count |
| loadbalancer.snat.ports.used.count      | Number of used SNAT ports          | Count |
| loadbalancer.snat.connection.count      | Number of current SNAT connections | Count |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Metric name                   | Description                  | Unit |
|:------------------------------|:-----------------------------|:-----|
| loadbalancer.throughput.bytes | Processed data throughput    | B    |
| loadbalancer.packets.count    | Processed packets throughput | %    |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1.  Install the Centreon package on every Centreon poller expected to monitor Azure Load Balancer resources:

```bash
yum install centreon-plugin-Cloud-Azure-Network-LoadBalancer-Api
```

2. On the Centreon Web interface, install the *Azure Load Balancer* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor Azure Load Balancer resources:

```bash
yum install centreon-plugin-Cloud-Azure-Network-LoadBalancer-Api
```

2. Install the Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-azure-network-loadbalancer.noarch
```

3. On the Centreon Web interface, install the *Azure Load Balancer* Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Network-LoadBalancer-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.
These mandatory Macros differ regarding the custom mode used:

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Nom               | Description                      |
|:----------|:------------------|:---------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'api'                |
| X         | AZURESUBSCRIPTION | Subscription ID                  |
| X         | AZURETENANT       | Tenant ID                        |
| X         | AZURECLIENTID     | Client ID                        |
| X         | AZURECLIENTSECRET | Client secret                    |
| X         | AZURERESOURCE     | Id of the Load Balancer instance |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom               | Description                      |
|:----------|:------------------|:---------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'azcli'              |
| X         | AZURESUBSCRIPTION | Subscription ID                  |
| X         | AZURERESOURCE     | Id of the Load Balancer instance |

</TabItem>
</Tabs>

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_azure_network_loadbalancer_api.pl \
    --plugin=cloud::azure::network::loadbalancer::plugin \
    --mode=datapath \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='LBA001ABCD' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='average' \
    --warning-datapath-availability-percentage='95:' \
    --critical-datapath-availability-percentage='50:' \
    --verbose
```

Expected command output is shown below:

```bash
OK: Instance 'LBA001ABCD' Statistic 'average' Metrics Data Path (VIP) Availability: 100.00% |
'LBA001ABCD~average#loadbalancer.datapath.availability.percentage'=100.00%;;;0;100
```

The command collects the *datapath* availability rate of a Azure Load Balancer instance using the 'api' custom-mode
(```--plugin=cloud::azure::network::loadbalancer::plugin --mode=datapath --custommode=api```).
This Load Balancer is identified by its id (```--resource='LBA001ABCD'```) and the authentication parameters
to be used with the custom mode are specified in the options (```--subscription='xxxxxxxxx' --tenant='xxxxxxx'
--client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

The calculated metrics are an average (```--aggregation='average'```) of values on a 900 secondes / 15 min period (```--timeframe='900'```)
with one sample per 5 minutes (```--interval='PT5M'```).

This command would trigger a WARNING alarm if the reported availability rate during the period is below 95%
(```--warning-datapath-availability-percentage='95:'```) and a CRITICAL alarm below 50% (```--critical-datapath-availability-percentage='50:'```).

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_network_loadbalancer_api.pl \
    --plugin=cloud::azure::network::loadbalancer::plugin \
    --mode=datapath \
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

This error message means that the Centreon Plugin couldn't successfully connect to the Azure Login API. Check that no third party
device (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API.
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.
