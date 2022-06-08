---
id: cloud-azure-network-trafficmanager
title: Azure Traffic Manager
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Azure Traffic Manager** brings 2 different host templates:

* Cloud-Azure-Network-TrafficManager-custom
* generic-dummy-host-custom

It brings the following service templates:

| Service Alias   | Service Template                                      | Service Description                                                              | Default |
|:----------------|:------------------------------------------------------|:---------------------------------------------------------------------------------|:--------|
| Endpoint-Status | Cloud-Azure-Network-TrafficManager-EndpointStatus-Api | Check Endpoints state for an Azure Traffic Manager Profile                       | X       |
| Health          | Cloud-Azure-Network-TrafficManager-Health-Api         | Check Traffic Manager Profile availability                                       | X       |
| Queries         | Cloud-Azure-Network-TrafficManager-Queries-Api        | Check queries number per second per Endpoint for a Azure Traffic Manager Profile | X       |

### Discovery rules

The Centreon Plugin Pack **Azure Traffic Manager** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the Centreon configuration. This provider is named **Microsoft Azure Traffic Manager Profile**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-trafficmanager-provider.png)

> This discovery feature is only compatible with the **api** custom mode. **azcli** is not supported.

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Endpoint-Status" label="Endpoint-Status">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| trafficmanager.endpoint.status.count |       |

</TabItem>
<TabItem value="Health" label="Health">

| Metric Name | Unit  |
|:------------|:------|
| status      |       |

</TabItem>
<TabItem value="Queries" label="Queries">

| Metric Name                      | Unit  |
|:---------------------------------|:------|
| trafficmanager.queries.persecond |       |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Traffic Manager** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Network-TrafficManager-Api
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure Traffic Manager** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Traffic Manager** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Network-TrafficManager-Api
```

2. Install the **Azure Traffic Manager** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-azure-network-trafficmanager
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure Traffic Manager** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
* Aplly the **Cloud-Azure-Network-TrafficManager-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.
These mandatory macros differ depending on the custom mode used.

> Two methods can be used to set the macros:

>> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`)
in **AZURERESOURCE**
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory   | Macro              | Description                                      |
|:------------|:-------------------|:-------------------------------------------------|
| X           | AZUREAPICUSTOMMODE | Custom mode **api**                              |
| X           | AZURECLIENTID      | Client ID                                        |
| X           | AZURECLIENTSECRET  | Client secret                                    |
| X           | AZURERESOURCE      | ID or name of the Azure Traffic Manager resource |
| X           | AZURERESOURCEGROUP | Resource group name if resource name is used     |
|             | AZURESUBSCRIPTION  | Subscription ID                                  |
| X           | AZURETENANT        | Tenant ID                                        |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory   | Macro              | Description                                      |
|:------------|:-------------------|:-------------------------------------------------|
| X           | AZURECLICUSTOMMODE | Custom mode **azcli**                            |
| X           | AZURERESOURCE      | ID or name of the Azure Traffic Manager resource |
| X           | AZURERESOURCEGROUP | Resource group name if resource name is used     |
|             | AZURESUBSCRIPTION  | Subscription ID                                  |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_network_trafficmanager_api.pl \
    --plugin=cloud::azure::network::trafficmanager::plugin \
    --mode=queries \
    --custommode='api' \
    --resource='' \
    --resource-group='' \
    --subscription='' \
    --tenant='' \
    --client-id='' \
    --client-secret='' \
    --proxyurl='' \
    --filter-metric='' \
    --filter-dimension='' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Total' \
    --warning-queries-persecond='' \
    --critical-queries-persecond='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Queries per second By Endpoint : 9000 | 'trafficmanager.queries.persecond'=9000;;;0; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_network_trafficmanager_api.pl \
    --plugin=cloud::azure::network::trafficmanager::plugin \
    --mode=queries \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_network_trafficmanager_api.pl \
    --plugin=cloud::azure::network::trafficmanager::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).