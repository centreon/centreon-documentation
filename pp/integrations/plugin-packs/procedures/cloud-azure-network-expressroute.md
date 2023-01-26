---
id: cloud-azure-network-expressroute
title: Azure ExpressRoute
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Azure ExpressRoute** brings a host template:

* Cloud-Azure-Network-ExpressRoute-custom

It brings the following service templates:

| Service Alias  | Service Template                                    | Service Description                        | Default |
|:---------------|:----------------------------------------------------|:-------------------------------------------|:--------|
| Circuit-Status | Cloud-Azure-Network-ExpressRoute-Circuit-Status-Api | Check circuit status                       | X       |
| Health         | Cloud-Azure-Network-ExpressRoute-Health-Api         | Check circuit state                        | X       |
| Traffic        | Cloud-Azure-Network-ExpressRoute-Traffic-Api        | Check circuit inbound and outbound traffic | X       |

### Discovery rules

The Centreon Plugin Pack **Azure ExpressRoute** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the Centreon configuration. This provider is named **Microsoft Azure Express Route**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-expressroute-provider.png)

> This discovery feature is only compatible with the **api** custom mode. **azcli** is not supported.

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Circuit-Status" label="Circuit-Status">

| Metric Name                         | Unit |
|:------------------------------------|:-----|
| Deployment status of the circuit    |      |

</TabItem>
<TabItem value="Health" label="Health">

| Status Name | Unit |
|:------------|------|
| status      |      |
| summary     |      |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| azexpressroute.traffic.in.bitspersecond | b/s   |
| azexpressroute.traffic.in.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Express Route** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Network-ExpressRoute-Api
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure ExpressRoute** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Express Route** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Network-ExpressRoute-Api
```

2. Install the **Azure ExpressRoute** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-azure-network-expressroute
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure ExpressRoute** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
* Aplly the **Cloud-Azure-Network-ExpressRoute-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.
These mandatory macros differ depending on the custom mode used.

> Two methods can be used to set the macros:
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`)
in **AZURERESOURCE**
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory   | Macro              | Description                                    |
|:------------|:-------------------|:-----------------------------------------------|
|     x       | AZUREAPICUSTOMMODE | Custom mode **api**                            |
|     x       | AZURECLIENTID      | Client ID                                      |
|     x       | AZURECLIENTSECRET  | Client secret                                  |
|     x       | AZURERESOURCE      | ID or name of the Azure Express Route resource |
|             | AZURERESOURCEGROUP | Resource group name if resource name is used   |
|     x       | AZURESUBSCRIPTION  | Subscription ID                                |
|     x       | AZURETENANT        | Tenant ID                                      |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory   | Macro              | Description                                    |
|:------------|:-------------------|:-----------------------------------------------|
|     x       | AZURECLICUSTOMMODE | Custom mode **azcli**                          |
|     x       | AZURERESOURCE      | ID or name of the Azure Express Route resource |
|     x       | AZURERESOURCEGROUP | Resource group name if resource name is used   |
|     x       | AZURESUBSCRIPTION  | Subscription ID                                |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_network_expressroute_api.pl \
    --plugin=cloud::azure::network::expressroute::plugin \
    --mode=traffic \
    --custommode='api' \
    --resource='' \
    --resource-group='' \
    --subscription='' \
    --tenant='' \
    --client-id='' \
    --client-secret='' \
    --proxyurl='' \
    --filter-metric='' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Average' \
    --warning-traffic-in='' \
    --critical-traffic-out='' \
```

The expected command output is shown below:

```bash
OK: Circuit '%s' Traffic In '%s'b/s Traffic Out '%s'b/s | 'azexpressroute.traffic.in.bitspersecond'=9000b/s;;;0; 'azexpressroute.traffic.in.bitspersecond'=9000b/s;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_network_expressroute_api.pl \
    --plugin=cloud::azure::network::expressroute::plugin \
    --mode=traffic \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_network_expressroute_api.pl \
    --plugin=cloud::azure::network::expressroute::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).