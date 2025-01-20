---
id: cloud-azure-network-vpngateway
title: Azure VPN Gateway
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Azure VPN Gateway** brings a host template:

* Cloud-Azure-Network-VpnGateway-custom

It brings the following service templates:

| Service Alias      | Service Template                                      | Service Description                       | Default |
|:-------------------|:------------------------------------------------------|:------------------------------------------|:--------|
| Health             | Cloud-Azure-Network-VpnGateway-Health-Api             | Check VPN gateway state                   | X       |
| Site-Traffic       | Cloud-Azure-Network-VpnGateway-Site-Traffic-Api       | Check inbound and outbound site traffic   | X       |
| Tunnel-Traffic     | Cloud-Azure-Network-VpnGateway-Tunnel-Traffic-Api     | Check inbound and outbound tunnel traffic | X       |
| Vpn-Gateway-Status | Cloud-Azure-Network-VpnGateway-Vpn-Gateway-Status-Api | Check VPN gateway provisionning status    | X       |

### Discovery rules

The Centreon Monitoring Connector **Azure VPN Gateway** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the Centreon configuration. This provider is named **Microsoft Azure VPN Gateway**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-vpngateway-provider.png)

> This discovery feature is only compatible with the **api** custom mode. **azcli** is not supported.

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Status Name | Description                 |
|:------------|:----------------------------|
| status      | Current operational status  |
| summary     | Last related status message |

</TabItem>
<TabItem value="Site-Traffic" label="Site-Traffic">

| Metric Name                                        | Unit  |
|:---------------------------------------------------|:------|
| azvpngateway.site.traffic.bandwidth.bytespersecond | B     |
| azvpngateway.p2s.traffic.bandwidth.bytespersecond  | B     |
| azvpngateway.p2s.connections.count                 |       |

</TabItem>
<TabItem value="Tunnel-Traffic" label="Tunnel-Traffic">

| Metric Name                                   | Unit  |
|:----------------------------------------------|:------|
| azvpngateway.tunnel.dropped.packets.in.count  |       |
| azvpngateway.tunnel.dropped.packets.out.count |       |
| azvpngateway.tunnel.packets.in.count          |       |
| azvpngateway.tunnel.packets.out.count         |       |
| azvpngateway.tunnel.ingress.bytes             | B     |
| azvpngateway.tunnel.egress.bytes              | B     |

</TabItem>
<TabItem value="Vpn-Gateway-Status" label="Vpn-Gateway-Status">

| Status Name                           | Unit  |
|:--------------------------------------|:------|
| status of the gateway deployment      |       |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **Azure VPN Gateway** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Network-VpnGateway-Api
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Azure VPN Gateway** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **Azure VPN Gateway** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Network-VpnGateway-Api
```

2. Install the **Azure VPN Gateway** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-azure-network-vpngateway
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Azure VPN Gateway** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
* Aplly the **Cloud-Azure-Network-VpnGateway-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.
These mandatory macros differ depending on the custom mode used.

> Two methods can be used to set the macros:

> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`)
in **AZURERESOURCE**
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory   | Macro              | Description                                  |
|:------------|:-------------------|:---------------------------------------------|
|     x       | AZUREAPICUSTOMMODE | Custom mode **api**                          |
|     x       | AZURECLIENTID      | Client ID                                    |
|     x       | AZURECLIENTSECRET  | Client secret                                |
|     x       | AZURERESOURCE      | ID or name of the Azure VPN Gateway resource |
|             | AZURERESOURCEGROUP | Resource group name if resource name is used |
|     x       | AZURESUBSCRIPTION  | Subscription ID                              |
|     x       | AZURETENANT        | Tenant ID                                    |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory   | Macro              | Description                                  |
|:------------|:-------------------|:---------------------------------------------|
|     x       | AZURECLICUSTOMMODE | Custom mode **azcli**                        |
|     x       | AZURERESOURCE      | ID or name of the Azure VPN Gateway resource |
|     x       | AZURERESOURCEGROUP | Resource group name if resource name is used |
|     x       | AZURESUBSCRIPTION  | Subscription ID                              |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_network_vpngateway_api.pl \
    --plugin=cloud::azure::network::vpngateway::plugin \
    --mode=health \
    --custommode='api' \
    --resource='' \
    --resource-group='' \
    --subscription='' \
    --tenant='' \
    --client-id='' \
    --client-secret='' \
    --proxyurl='' \
    --ok-status='%\{status\} =~ /^Available$/' \
    --warning-status='' \
    --critical-status='%\{status\} =~ /^Unavailable$/' \
    --unknown-status='%\{status\} =~ /^Unknown$/' \
    --api-version=2017-07-01\
```

The expected command output is shown below:

```bash
OK: VPN Gateway '%s' Provisioning State '%s' [Gateway type: '%s'] [VPN type: '%s'] | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_network_vpngateway_api.pl \
    --plugin=cloud::azure::network::vpngateway::plugin \
    --mode=site-traffic \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_network_vpngateway_api.pl \
    --plugin=cloud::azure::network::vpngateway::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).