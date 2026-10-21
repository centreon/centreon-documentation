---
id: cloud-zscaler-ztb-restapi
title: Zscaler Zero Trust Branch API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Zscaler Zero Trust Branch API** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Zscaler Zero Trust Branch API** brings 2 host templates:

* **Cloud-Zscaler-Ztb-Cluster-Restapi-custom**
* **Cloud-Zscaler-Ztb-Gateway-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Zscaler-Ztb-Cluster-Restapi-custom" label="Cloud-Zscaler-Ztb-Cluster-Restapi-custom">

| Service Alias        | Service Template                                      | Service Description                                |
|:---------------------|:------------------------------------------------------|:---------------------------------------------------|
| Cluster-Appconnector | Cloud-Zscaler-Ztb-Cluster-Appconnector-Restapi-custom | Monitors the state and the number of Appconnectors |
| Cluster-Ipsec        | Cloud-Zscaler-Ztb-Cluster-Ipsec-Restapi-custom        | Monitors the state of IPSec tunnels               |

> The services listed above are created automatically when the **Cloud-Zscaler-Ztb-Cluster-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Zscaler-Ztb-Gateway-Restapi-custom" label="Cloud-Zscaler-Ztb-Gateway-Restapi-custom">

| Service Alias      | Service Template                                    | Service Description                     |
|:-------------------|:----------------------------------------------------|:----------------------------------------|
| Gateway-Containers | Cloud-Zscaler-Ztb-Gateway-Containers-Restapi-custom | Monitors a gateway's containers         |
| Gateway-Cpu        | Cloud-Zscaler-Ztb-Gateway-Cpu-Restapi-custom        | Monitors the CPU usage                  |
| Gateway-Disk       | Cloud-Zscaler-Ztb-Gateway-Disk-Restapi-custom       | Monitors the disk usage                 |
| Gateway-Memory     | Cloud-Zscaler-Ztb-Gateway-Memory-Restapi-custom     | Monitors the memory usage               |
| Gateway-Status     | Cloud-Zscaler-Ztb-Gateway-Status-Restapi-custom     | Monitors the overall state of a gateway |

> The services listed above are created automatically when the **Cloud-Zscaler-Ztb-Gateway-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias      | Service Template                                    | Service Description                                                                                | Discovery |
|:-------------------|:----------------------------------------------------|:---------------------------------------------------------------------------------------------------|:---------:|
| Cache              | Cloud-Zscaler-Ztb-Cache-Restapi-custom              | Holds reusable data in a cache file available for other modes to reduce the number of API requests |           |
| Gateway-Interfaces | Cloud-Zscaler-Ztb-Gateway-Interfaces-Restapi-custom | Monitors the states and statistics of one or several interfaces                                    | X         |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name            | Description                                                |
|:---------------------|:-----------------------------------------------------------|
| Zscaler ZTB Gateways | Discover Zscaler Zero Trust Branch gateways using the REST API |
| Zscaler ZTB Clusters | Discover Zscaler Zero Trust Branch clusters using the REST API |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                                         | Description                                                                               |
|:--------------------------------------------------|:------------------------------------------------------------------------------------------|
| Cloud-Zscaler-Ztb-Restapi-Gateway-Interfaces-Name | Discover the network interfaces of the gateway by name and monitor their status and usage |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

No metrics are collected: this service only creates the cache file
used by the other services.

</TabItem>
<TabItem value="Cluster-Appconnector" label="Cluster-Appconnector">

| Name                                       | Unit  |
|:-------------------------------------------|:------|
| appconnectors.detected.count               | count |
| appconnector-status                        | N/A   |
| *appconnectors*#appconnector.running.count | count |

</TabItem>
<TabItem value="Cluster-Ipsec" label="Cluster-Ipsec">

| Name                                             | Unit  |
|:-------------------------------------------------|:------|
| tunnels.ipsec.detected.count                     | count |
| ike-status                                       | N/A   |
| sa-status                                        | N/A   |
| *tunnels*#tunnel.ipsec.refresh.time.last.seconds | s     |

</TabItem>
<TabItem value="Gateway-Containers" label="Gateway-Containers">

| Name                                 | Unit  |
|:-------------------------------------|:------|
| gateways.detected.count              | count |
| container.cpu.utilization.percentage | %     |
| container.memory.usage.bytes         | B     |

</TabItem>
<TabItem value="Gateway-Cpu" label="Gateway-Cpu">

| Name                               | Unit  |
|:-----------------------------------|:------|
| gateways.detected.count            | count |
| gateway.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Gateway-Disk" label="Gateway-Disk">

| Name                          | Unit  |
|:------------------------------|:------|
| gateways.detected.count       | count |
| gateway.disk.usage.bytes      | B     |
| gateway.disk.free.bytes       | B     |
| gateway.disk.usage.percentage | %     |

</TabItem>
<TabItem value="Gateway-Interfaces" label="Gateway-Interfaces">

| Name                                        | Unit  |
|:--------------------------------------------|:------|
| gateways.detected.count                     | count |
| interface-status                            | N/A   |
| gateway.interface.traffic.in.bitspersecond  | b/s   |
| gateway.interface.traffic.out.bitspersecond | b/s   |
| gateway.interface.jitter.milliseconds       | ms    |
| gateway.interface.latency.milliseconds      | ms    |
| gateway.interface.loss.percentage           | %     |

</TabItem>
<TabItem value="Gateway-Memory" label="Gateway-Memory">

| Name                            | Unit  |
|:--------------------------------|:------|
| gateways.detected.count         | count |
| gateway.memory.usage.bytes      | B     |
| gateway.memory.free.bytes       | B     |
| gateway.memory.usage.percentage | %     |
| gateway.swap.usage.bytes        | B     |

</TabItem>
<TabItem value="Gateway-Status" label="Gateway-Status">

| Name                                        | Unit  |
|:--------------------------------------------|:------|
| gateways.detected.count                     | count |
| gateway-status                              | N/A   |
| running-version                             | N/A   |
| *gateways*#gateway.update.time.last.seconds | s     |
| gateway-health                              | N/A   |
| gateway-vrrp-status                         | N/A   |

</TabItem>
</Tabs>

## Prerequisites

### Zscaler API client

The connector uses the Zero Trust Branch REST API through Zscaler OneAPI.
Authentication relies on the OAuth2 *client credentials* flow handled by
ZIdentity.

1. In the ZIdentity Admin Portal, go to **Administration > API Configuration >
OneAPI > API Clients** and [add an API client](https://help.zscaler.com/unified/adding-api-client)
using the **Client Secret** authentication method.
2. Grant this API client a role giving read-only access to the Zero Trust Branch
API resources.
3. Write down the **Client ID** and the **Client Secret** (the secret is only
displayed once). They will be used in the **CLIENT_ID** and **CLIENT_SECRET**
host macros.
4. Identify the following domains:
   - the ZIdentity vanity domain used to get the OAuth2 token (e.g.
   `mycompany.zslogin.net`), to be set in the **LOGIN_DOMAIN** macro,
   - the domain of your ZTB API (e.g. `mycompany-api.goairgap.com`), to be set
   in the **API_DOMAIN** macro.

### Network flows

The poller must be able to reach both the login domain and the API domain using
HTTPS (TCP/443).

### Cache

To limit the number of API calls, the services of this connector can read their
data from a cache file instead of querying the API. To do so:

1. Create a service using the **Cache** service template (it is not created
automatically by the host templates), with a check interval shorter than the
cache lifetime (30 minutes by default, see the `--cache-lifetime` option).
2. Add the `--cache-use` option to the **EXTRA_OPTIONS** macro of the other
services.

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-zscaler-ztb-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-zscaler-ztb-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-zscaler-ztb-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Zscaler Zero Trust Branch API** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Zscaler-Ztb-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Zscaler-Ztb-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-zscaler-ztb-restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="Cloud-Zscaler-Ztb-Cluster-Restapi-custom" label="Cloud-Zscaler-Ztb-Cluster-Restapi-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Zscaler-Ztb-Cluster-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro             | Description                                                                                                                                              | Default value | Mandatory |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROTO             | Define `https` if needed                                                                                                                                 | https         |           |
| PORT              | Port used                                                                                                                                                | 443           |           |
| API_DOMAIN        | Define the domain for ZTB API (example: `mycompany-api.goairgap.com`)                                                                                    |               | X         |
| CLIENT_ID         | Define client ID                                                                                                                                         |               | X         |
| CLIENT_SECRET     | Define client secret                                                                                                                                     |               | X         |
| CLUSTER_ID        | ID of the cluster to monitor, as a regular expression (example: `^<id>$`). Automatically set by the host discovery. If empty, all clusters are monitored |               |           |
| LOGIN_DOMAIN      | Define the domain for OAuth2 authentication (example: `test.zslogin.net`)                                                                                |               | X         |
| API_EXTRA_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                 |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Zscaler-Ztb-Gateway-Restapi-custom" label="Cloud-Zscaler-Ztb-Gateway-Restapi-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Zscaler-Ztb-Gateway-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro             | Description                                                                                                                                              | Default value | Mandatory |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROTO             | Define `https` if needed                                                                                                                                 | https         |           |
| PORT              | Port used                                                                                                                                                | 443           |           |
| API_DOMAIN        | Define the domain for ZTB API (example: `mycompany-api.goairgap.com`)                                                                                    |               | X         |
| CLIENT_ID         | Define client ID                                                                                                                                         |               | X         |
| CLIENT_SECRET     | Define client secret                                                                                                                                     |               | X         |
| GATEWAY_ID        | ID of the gateway to monitor, as a regular expression (example: `^<id>$`). Automatically set by the host discovery. If empty, all gateways are monitored |               |           |
| LOGIN_DOMAIN      | Define the domain for OAuth2 authentication (example: `test.zslogin.net`)                                                                                |               | X         |
| API_EXTRA_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                 |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

| Macro         | Description                                                                                                                                      | Default value | Mandatory |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| EXTRA_OPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Cluster-Appconnector" label="Cluster-Appconnector">

| Macro                           | Description                                                                                                                                             | Default value              | Mandatory |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:---------:|
| UNKNOWN_APPCONNECTOR_STATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}`  |                            |           |
| WARNING_APPCONNECTORS_DETECTED  | Threshold                                                                                                                                               |                            |           |
| CRITICAL_APPCONNECTORS_DETECTED | Threshold                                                                                                                                               |                            |           |
| WARNING_APPCONNECTOR_RUNNING    | Threshold                                                                                                                                               |                            |           |
| CRITICAL_APPCONNECTOR_RUNNING   | Threshold                                                                                                                                               |                            |           |
| CRITICAL_APPCONNECTOR_STATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}` | %\{status\} ne "connected" |           |
| WARNING_APPCONNECTOR_STATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}`  |                            |           |
| EXTRA_OPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                  | --verbose                  |           |

</TabItem>
<TabItem value="Cluster-Ipsec" label="Cluster-Ipsec">

| Macro                           | Description                                                                                                                                          | Default value                   | Mandatory |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:---------:|
| INCLUDE_TUNNEL_NAME             | Include tunnel names (regexp)                                                                                                                        |                                 |           |
| EXCLUDE_TUNNEL_NAME             | Exclude tunnel names (regexp)                                                                                                                        |                                 |           |
| UNKNOWN_SA_STATUS               | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`   |                                 |           |
| UNKNOWN_IKE_STATUS              | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}`  |                                 |           |
| CRITICAL_IKE_STATUS             | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}` | %\{ikeStatus\} !~ /established/ |           |
| WARNING_IKE_STATUS              | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}`  |                                 |           |
| WARNING_LAST_REFRESH_TIME       | Threshold                                                                                                                                            |                                 |           |
| CRITICAL_LAST_REFRESH_TIME      | Threshold                                                                                                                                            |                                 |           |
| CRITICAL_SA_STATUS              | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`  | %\{saStatus\} !~ /established/  |           |
| WARNING_SA_STATUS               | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`   |                                 |           |
| WARNING_TUNNELS_IPSEC_DETECTED  | Threshold                                                                                                                                            |                                 |           |
| CRITICAL_TUNNELS_IPSEC_DETECTED | Threshold                                                                                                                                            |                                 |           |
| EXTRA_OPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).               | --verbose                       |           |

</TabItem>
<TabItem value="Gateway-Containers" label="Gateway-Containers">

| Macro                    | Description                                                                                                                                      | Default value | Mandatory |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| INCLUDE_CONTAINER_NAME   | Include container names (regexp)                                                                                                                 |               |           |
| EXCLUDE_CONTAINER_NAME   | Exclude container names (regexp)                                                                                                                 |               |           |
| WARNING_CPU_UTILIZATION  | Threshold in percentage                                                                                                                          |               |           |
| CRITICAL_CPU_UTILIZATION | Threshold in percentage                                                                                                                          |               |           |
| WARNING_MEMORY_USAGE     | Threshold in bytes                                                                                                                               |               |           |
| CRITICAL_MEMORY_USAGE    | Threshold in bytes                                                                                                                               |               |           |
| EXTRA_OPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose     |           |

</TabItem>
<TabItem value="Gateway-Cpu" label="Gateway-Cpu">

| Macro                    | Description                                                                                                                                      | Default value | Mandatory |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_CPU_UTILIZATION  | Threshold in percentage                                                                                                                          | 80            |           |
| CRITICAL_CPU_UTILIZATION | Threshold in percentage                                                                                                                          | 90            |           |
| EXTRA_OPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose     |           |

</TabItem>
<TabItem value="Gateway-Disk" label="Gateway-Disk">

| Macro                    | Description                                                                                                                                      | Default value | Mandatory |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_DISK_USAGE       | Threshold in bytes                                                                                                                               |               |           |
| CRITICAL_DISK_USAGE      | Threshold in bytes                                                                                                                               |               |           |
| WARNING_DISK_USAGE_FREE  | Threshold in bytes                                                                                                                               |               |           |
| CRITICAL_DISK_USAGE_FREE | Threshold in bytes                                                                                                                               |               |           |
| WARNING_DISK_USAGE_PRCT  | Threshold in percentage                                                                                                                          | 80            |           |
| CRITICAL_DISK_USAGE_PRCT | Threshold in percentage                                                                                                                          | 90            |           |
| EXTRA_OPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose     |           |

</TabItem>
<TabItem value="Gateway-Interfaces" label="Gateway-Interfaces">

| Macro                          | Description                                                                                                                                                                                                      | Default value                                             | Mandatory |
|:-------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|:---------:|
| INCLUDE_INTERFACE_NAME         | Include interface names (regexp)                                                                                                                                                                                 |                                                           |           |
| EXCLUDE_INTERFACE_NAME         | Exclude interface names (regexp)                                                                                                                                                                                 |                                                           |           |
| UNKNOWN_INTERFACE_STATUS       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}`  |                                                           |           |
| WARNING_INTERFACE_JITTER       | Threshold                                                                                                                                                                                                        |                                                           |           |
| CRITICAL_INTERFACE_JITTER      | Threshold                                                                                                                                                                                                        |                                                           |           |
| WARNING_INTERFACE_LATENCY      | Threshold                                                                                                                                                                                                        |                                                           |           |
| CRITICAL_INTERFACE_LATENCY     | Threshold                                                                                                                                                                                                        |                                                           |           |
| WARNING_INTERFACE_LOSS         | Threshold                                                                                                                                                                                                        |                                                           |           |
| CRITICAL_INTERFACE_LOSS        | Threshold                                                                                                                                                                                                        |                                                           |           |
| CRITICAL_INTERFACE_STATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}` | %\{adminState\} =~ /up/ and %\{operationalState\} !~ /up/ |           |
| WARNING_INTERFACE_STATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}`  |                                                           |           |
| WARNING_INTERFACE_TRAFFIC_IN   | Threshold                                                                                                                                                                                                        |                                                           |           |
| CRITICAL_INTERFACE_TRAFFIC_IN  | Threshold                                                                                                                                                                                                        |                                                           |           |
| WARNING_INTERFACE_TRAFFIC_OUT  | Threshold                                                                                                                                                                                                        |                                                           |           |
| CRITICAL_INTERFACE_TRAFFIC_OUT | Threshold                                                                                                                                                                                                        |                                                           |           |
| EXTRA_OPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                           | --verbose                                                 |           |

</TabItem>
<TabItem value="Gateway-Memory" label="Gateway-Memory">

| Macro                      | Description                                                                                                                                      | Default value | Mandatory |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNING_MEMORY_USAGE       | Threshold in bytes                                                                                                                               |               |           |
| CRITICAL_MEMORY_USAGE      | Threshold in bytes                                                                                                                               |               |           |
| WARNING_MEMORY_USAGE_FREE  | Threshold in bytes                                                                                                                               |               |           |
| CRITICAL_MEMORY_USAGE_FREE | Threshold in bytes                                                                                                                               |               |           |
| WARNING_MEMORY_USAGE_PRCT  | Threshold in percentage                                                                                                                          | 80            |           |
| CRITICAL_MEMORY_USAGE_PRCT | Threshold in percentage                                                                                                                          | 90            |           |
| WARNING_SWAP_USAGE         | Threshold in bytes                                                                                                                               |               |           |
| CRITICAL_SWAP_USAGE        | Threshold in bytes                                                                                                                               |               |           |
| EXTRA_OPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           | --verbose     |           |

</TabItem>
<TabItem value="Gateway-Status" label="Gateway-Status">

| Macro                        | Description                                                                                                                                                                                    | Default value                              | Mandatory |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|:---------:|
| UNKNOWN_GATEWAY_STATUS       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}`  |                                            |           |
| UNKNOWN_RUNNING_VERSION      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                       |                                            |           |
| UNKNOWN_GATEWAY_HEALTH       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                          |                                            |           |
| UNKNOWN_GATEWAY_VRRP_STATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                            |                                            |           |
| WARNING_GATEWAYS_DETECTED    | Threshold                                                                                                                                                                                      |                                            |           |
| CRITICAL_GATEWAYS_DETECTED   | Threshold                                                                                                                                                                                      |                                            |           |
| CRITICAL_GATEWAY_HEALTH      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                         | %\{healthColor\} !~ /green/                |           |
| WARNING_GATEWAY_HEALTH       | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                          |                                            |           |
| CRITICAL_GATEWAY_STATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}` | %\{desiredState\} ne %\{operationalState\} |           |
| WARNING_GATEWAY_STATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}`  |                                            |           |
| CRITICAL_GATEWAY_VRRP_STATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                           | %\{vrrpState\} =~ /fault/i                 |           |
| WARNING_GATEWAY_VRRP_STATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                            |                                            |           |
| WARNING_LAST_UPDATE_TIME     | Threshold                                                                                                                                                                                      |                                            |           |
| CRITICAL_LAST_UPDATE_TIME    | Threshold                                                                                                                                                                                      |                                            |           |
| WARNING_RUNNING_VERSION      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                       |                                            |           |
| CRITICAL_RUNNING_VERSION     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                      |                                            |           |
| EXTRA_OPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                         | --verbose                                  |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_zscaler_ztb_restapi.pl \
	--plugin=cloud::zscaler::ztb::restapi::plugin \
	--custommode=api \
	--mode=gateway-status \
	--login-domain='mycompany.zslogin.net' \
	--api-domain='mycompany-api.goairgap.com' \
	--client-id='XXXXXXXX' \
	--client-secret='XXXXXXXX' \
	--port='443' \
	--proto='https' \
	--include-gateway-id='^id8$' \
	--warning-gateways-detected='' \
	--critical-gateways-detected='' \
	--unknown-gateway-status='' \
	--warning-gateway-status='' \
	--critical-gateway-status='%{desiredState} ne %{operationalState}' \
	--unknown-running-version='' \
	--warning-running-version='' \
	--critical-running-version='' \
	--unknown-gateway-health='' \
	--warning-gateway-health='' \
	--critical-gateway-health='%{healthColor} !~ /green/' \
	--unknown-gateway-vrrp-status='' \
	--warning-gateway-vrrp-status='' \
	--critical-gateway-vrrp-status='%{vrrpState} =~ /fault/i' \
	--warning-last-update-time='' \
	--critical-last-update-time='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: gateway 'LOCATION_501' operational state: active [desired state: active], running version: 8.0.8P3a, last update: 8m 9s - health color: green - VRRP state: master | 'gateways.detected.count'=1;;;0; 'LOCATION_501#gateway.update.time.last.seconds'=489s;;;0;
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_zscaler_ztb_restapi.pl \
	--plugin=cloud::zscaler::ztb::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                               | Linked service template                               |
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/cache.pm)]                              | Cloud-Zscaler-Ztb-Cache-Restapi-custom                |
| cluster-appconnector [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/clusterappconnector.pm)] | Cloud-Zscaler-Ztb-Cluster-Appconnector-Restapi-custom |
| cluster-ipsec [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/clusteripsec.pm)]               | Cloud-Zscaler-Ztb-Cluster-Ipsec-Restapi-custom        |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/discovery.pm)]                      | Used for host discovery                               |
| gateway-containers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewaycontainers.pm)]     | Cloud-Zscaler-Ztb-Gateway-Containers-Restapi-custom   |
| gateway-cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewaycpu.pm)]                   | Cloud-Zscaler-Ztb-Gateway-Cpu-Restapi-custom          |
| gateway-disk [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewaydisk.pm)]                 | Cloud-Zscaler-Ztb-Gateway-Disk-Restapi-custom         |
| gateway-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewayinterfaces.pm)]     | Cloud-Zscaler-Ztb-Gateway-Interfaces-Restapi-custom   |
| gateway-memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewaymemory.pm)]             | Cloud-Zscaler-Ztb-Gateway-Memory-Restapi-custom       |
| gateway-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewaystatus.pm)]             | Cloud-Zscaler-Ztb-Gateway-Status-Restapi-custom       |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:-------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --show-password                            | By default, sensitive information in command lines is hidden in debug output and replaced with `***` (however, debug logs may still display sensitive information). Using the `--show-password` option will display the passwords in plain text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage used perfdata into free: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                        |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage used perfdata into free: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                        |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage used perfdata into free: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                        |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach Common examples: Sum wrong packets from all interfaces (with interface, need --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\ |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --login-domain                             | Define the domain for OAuth2 authentication (example: `test.zslogin.net`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --api-domain                               | Define the domain for ZTB API (example: `mycompany-api.goairgap.com`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --client-id                                | Define client ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --client-secret                            | Define client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --port                                     | Port used (default: `443`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proto                                    | Define `https` if needed (default: `https`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Set timeout in seconds (default: `50`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --api-path                                 | Define the base path of the API endpoints (default: `/api`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --unknown-http-status                      | Define the conditions to match on the HTTP status for the returned status to be UNKNOWN (default: `%{http_code} < 200 or %{http_code} >= 300`). You can use the following variables: `%{http_code}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --warning-http-status                      | Define the conditions to match on the HTTP status for the returned status to be WARNING. You can use the following variables: `%{http_code}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --critical-http-status                     | Define the conditions to match on the HTTP status for the returned status to be CRITICAL. You can use the following variables: `%{http_code}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --cache-use                                | Use the cache file (created with `cache` mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --cache-lifetime                           | Define the cache lifetime before raising an error (default: `1800` seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cluster-Appconnector" label="Cluster-Appconnector">

| Option                            | Description                                                                                                                                                                                   |
|:----------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-cluster-name            | Include cluster names (regexp).                                                                                                                                                               |
| --exclude-cluster-name            | Exclude cluster names (regexp).                                                                                                                                                               |
| --include-appconnector-name       | Include App Connector names (regexp).                                                                                                                                                         |
| --exclude-appconnector-name       | Exclude App Connector names (regexp).                                                                                                                                                         |
| --include-cluster-id              | Include cluster IDs (regexp).                                                                                                                                                                 |
| --exclude-cluster-id              | Exclude cluster IDs (regexp).                                                                                                                                                                 |
| --custom-perfdata-instances       | Define perfdata instance (default: `%(clusterName) %(appConnectorName)`) You can use the following variables: `%(clusterName)`, `%(appConnectorName)`                                         |
| --unknown-appconnector-status     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}`                                        |
| --warning-appconnector-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}`                                        |
| --critical-appconnector-status    | Define the conditions to match for the status to be CRITICAL (default: `%{status} ne "connected"`). You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}` |
| --warning-appconnectors-detected  | Threshold.                                                                                                                                                                                    |
| --critical-appconnectors-detected | Threshold.                                                                                                                                                                                    |
| --warning-appconnector-running    | Threshold.                                                                                                                                                                                    |
| --critical-appconnector-running   | Threshold.                                                                                                                                                                                    |

</TabItem>
<TabItem value="Cluster-Ipsec" label="Cluster-Ipsec">

| Option                            | Description                                                                                                                                                                                     |
|:----------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-cluster-name            | Include cluster names (regexp).                                                                                                                                                                 |
| --exclude-cluster-name            | Exclude cluster names (regexp).                                                                                                                                                                 |
| --include-tunnel-name             | Include tunnel names (regexp).                                                                                                                                                                  |
| --exclude-tunnel-name             | Exclude tunnel names (regexp).                                                                                                                                                                  |
| --include-cluster-id              | Include cluster IDs (regexp).                                                                                                                                                                   |
| --exclude-cluster-id              | Exclude cluster IDs (regexp).                                                                                                                                                                   |
| --custom-perfdata-instances       | Define perfdata instance (default: `%(clusterName) %(tunnelName)`) You can use the following variables: `%(clusterName)`, `%(tunnelName)`                                                       |
| --unit                            | Select the time unit for refresh thresholds. May be `s` for seconds, `m` for minutes, `h` for hours, `d` for days, `w` for weeks (default: `s`).                                                |
| --unknown-sa-status               | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`                                              |
| --warning-sa-status               | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`                                              |
| --critical-sa-status              | Define the conditions to match for the status to be CRITICAL (default: `%{saStatus} !~ /established/`). You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`   |
| --unknown-ike-status              | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}`                                             |
| --warning-ike-status              | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}`                                             |
| --critical-ike-status             | Define the conditions to match for the status to be CRITICAL (default: `%{ikeStatus} !~ /established/`). You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}` |
| --warning-tunnels-ipsec-detected  | Threshold.                                                                                                                                                                                      |
| --critical-tunnels-ipsec-detected | Threshold.                                                                                                                                                                                      |
| --warning-last-refresh-time       | Threshold.                                                                                                                                                                                      |
| --critical-last-refresh-time      | Threshold.                                                                                                                                                                                      |

</TabItem>
<TabItem value="Gateway-Containers" label="Gateway-Containers">

| Option                               | Description                                                                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-container-name             | Include container names (regexp).                                                                                                                                                    |
| --exclude-container-name             | Exclude container names (regexp).                                                                                                                                                    |
| --include-site-name                  | Include site names (regexp).                                                                                                                                                         |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                         |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                      |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                      |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                      |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                      |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                        |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                        |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName) %(containerName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`, `%(containerName)`     |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}` |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                           |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                           |
| --warning-memory-usage               | Threshold in bytes.                                                                                                                                                                  |
| --critical-memory-usage              | Threshold in bytes.                                                                                                                                                                  |
| --warning-cpu-utilization            | Threshold in percentage.                                                                                                                                                             |
| --critical-cpu-utilization           | Threshold in percentage.                                                                                                                                                             |

</TabItem>
<TabItem value="Gateway-Cpu" label="Gateway-Cpu">

| Option                               | Description                                                                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-site-name                  | Include site names (regexp).                                                                                                                                                         |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                         |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                      |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                      |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                      |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                      |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                        |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                        |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`                                          |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}` |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                           |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                           |
| --warning-cpu-utilization            | Threshold in percentage.                                                                                                                                                             |
| --critical-cpu-utilization           | Threshold in percentage.                                                                                                                                                             |

</TabItem>
<TabItem value="Gateway-Disk" label="Gateway-Disk">

| Option                               | Description                                                                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-site-name                  | Include site names (regexp).                                                                                                                                                         |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                         |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                      |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                      |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                      |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                      |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                        |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                        |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`                                          |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}` |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                           |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                           |
| --warning-disk-usage                 | Threshold in bytes.                                                                                                                                                                  |
| --critical-disk-usage                | Threshold in bytes.                                                                                                                                                                  |
| --warning-disk-usage-free            | Threshold in bytes.                                                                                                                                                                  |
| --critical-disk-usage-free           | Threshold in bytes.                                                                                                                                                                  |
| --warning-disk-usage-prct            | Threshold in percentage.                                                                                                                                                             |
| --critical-disk-usage-prct           | Threshold in percentage.                                                                                                                                                             |

</TabItem>
<TabItem value="Gateway-Interfaces" label="Gateway-Interfaces">

| Option                               | Description                                                                                                                                                                                                                                                                         |
|:-------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-interface-name             | Include interface names (regexp).                                                                                                                                                                                                                                                   |
| --exclude-interface-name             | Exclude interface names (regexp).                                                                                                                                                                                                                                                   |
| --include-site-name                  | Include site names (regexp).                                                                                                                                                                                                                                                        |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                                                                                                                        |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                                                                                                                     |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                                                                                                                     |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                                                                                                                     |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                                                                                                                     |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                                                                                                                       |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                                                                                                                       |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName) %(interfaceName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`, `%(interfaceName)`                                                                                                    |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`                                                                                                |
| --traffic-unit                       | Units of thresholds for the traffic (default: `percent_delta`) (`percent_delta`, `bps`, `counter`).                                                                                                                                                                                 |
| --speed                              | Set interface speed (in Mb).                                                                                                                                                                                                                                                        |
| --unknown-interface-status           | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}`                                                                     |
| --warning-interface-status           | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}`                                                                     |
| --critical-interface-status          | Define the conditions to match for the status to be CRITICAL (default: `%{adminState} =~ /up/ and %{operationalState} !~ /up/`). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}` |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                                                                                                                          |
| --warning-interface-traffic-in       | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-interface-traffic-in      | Threshold.                                                                                                                                                                                                                                                                          |
| --warning-interface-traffic-out      | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-interface-traffic-out     | Threshold.                                                                                                                                                                                                                                                                          |
| --warning-interface-jitter           | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-interface-jitter          | Threshold.                                                                                                                                                                                                                                                                          |
| --warning-interface-latency          | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-interface-latency         | Threshold.                                                                                                                                                                                                                                                                          |
| --warning-interface-loss             | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-interface-loss            | Threshold.                                                                                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Gateway-Memory" label="Gateway-Memory">

| Option                               | Description                                                                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-site-name                  | Include site names (regexp).                                                                                                                                                         |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                         |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                      |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                      |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                      |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                      |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                        |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                        |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`                                          |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}` |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                           |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                           |
| --warning-memory-usage               | Threshold in bytes.                                                                                                                                                                  |
| --critical-memory-usage              | Threshold in bytes.                                                                                                                                                                  |
| --warning-memory-usage-free          | Threshold in bytes.                                                                                                                                                                  |
| --critical-memory-usage-free         | Threshold in bytes.                                                                                                                                                                  |
| --warning-memory-usage-prct          | Threshold in percentage.                                                                                                                                                             |
| --critical-memory-usage-prct         | Threshold in percentage.                                                                                                                                                             |
| --warning-swap-usage                 | Threshold in bytes.                                                                                                                                                                  |
| --critical-swap-usage                | Threshold in bytes.                                                                                                                                                                  |

</TabItem>
<TabItem value="Gateway-Status" label="Gateway-Status">

| Option                               | Description                                                                                                                                                                                                                                        |
|:-------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-site-name                  | Include site names (regexp).                                                                                                                                                                                                                       |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                                                                                       |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                                                                                    |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                                                                                    |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                                                                                    |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                                                                                    |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                                                                                      |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                                                                                      |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`                                                                                                        |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`                                                               |
| --unit                               | Select the time unit for update thresholds. May be `s` for seconds, `m` for minutes, `h` for hours, `d` for days, `w` for weeks (default: `s`).                                                                                                    |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                                                                                         |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                                                                                         |
| --unknown-gateway-status             | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}`                                                      |
| --warning-gateway-status             | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}`                                                      |
| --critical-gateway-status            | Define the conditions to match for the status to be CRITICAL (default: `%{desiredState} ne %{operationalState}`). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}` |
| --unknown-running-version            | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                                                                           |
| --warning-running-version            | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                                                                           |
| --critical-running-version           | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                                                                          |
| --unknown-gateway-health             | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                                                                              |
| --warning-gateway-health             | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                                                                              |
| --critical-gateway-health            | Define the conditions to match for the status to be CRITICAL (default: `%{healthColor} !~ /green/`). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                                      |
| --unknown-gateway-vrrp-status        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                                                                                |
| --warning-gateway-vrrp-status        | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                                                                                |
| --critical-gateway-vrrp-status       | Define the conditions to match for the status to be CRITICAL (default: `%{vrrpState} =~ /fault/i`). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                                         |
| --warning-last-update-time           | Threshold.                                                                                                                                                                                                                                         |
| --critical-last-update-time          | Threshold.                                                                                                                                                                                                                                         |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_zscaler_ztb_restapi.pl \
	--plugin=cloud::zscaler::ztb::restapi::plugin \
	--custommode=api \
	--help
```
