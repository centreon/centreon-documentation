---
id: cloud-azure-network-appgateway
title: Azure Application Gateway
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Azure Application Gateway** brings 2 different host templates:

* Cloud-Azure-Network-AppGateway-V2-custom
* Cloud-Azure-Network-AppGateway-V1-custom

It brings the following service templates:

| Service Alias   | Service Template                                   | Service Description                                    | Default |
|:----------------|:---------------------------------------------------|:-------------------------------------------------------|:--------|
| Backend-Health  | Cloud-Azure-Network-AppGateway-Backend-Health-Api  | Check Azure Application Gateway v1 host backend status | X       |
| Backend-Status  | Cloud-Azure-Network-AppGateway-Backend-Status-Api  | Check Azure Application Gateway backend status         | X       |
| Backend-Time    | Cloud-Azure-Network-AppGateway-Backend-Time-Api    | Check Azure Application Gateway backend response time  | X       |
| Clients-Traffic | Cloud-Azure-Network-AppGateway-Clients-Traffic-Api | Check Azure Application Gateway clients traffic        | X       |
| Connections     | Cloud-Azure-Network-AppGateway-Connections-Api     | Check Azure Application Gateway connections            | X       |
| Gateway-Time    | Cloud-Azure-Network-AppGateway-Gateway-Time-Api    | Check Azure Application Gateway response time          | X       |
| Health          | Cloud-Azure-Network-AppGateway-Health-Api          | Check Azure Application Gateway health                 | X       |
| Requests        | Cloud-Azure-Network-AppGateway-Requests-Api        | Check Azure Application Gateway requests               | X       |
| Throughput      | Cloud-Azure-Network-AppGateway-Throughput-Api      | Check Azure Application Gateway throughput             | X       |
| Units           | Cloud-Azure-Network-AppGateway-Units-Api           | Check Azure Application Gateway units                  | X       |



> *Default* services templates are automatically linked to the host template(s).

### Discovery rules

The Centreon Plugin Pack **Azure Application Gateway** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the Centreon configuration. This provider is named **Microsoft Azure Application Gateway**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-appgateway-provider.png)

> This discovery feature is only compatible with the **api** custom mode. **azcli** is not supported.

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Backend-Health" label="Backend-Health">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| appgateway.backend.healthy.host.count   | count |
| appgateway.backend.unhealthy.host.count | count |

</TabItem>
<TabItem value="Backend-Status" label="Backend-Status">

| Metric Name                              | Unit  |
|:-----------------------------------------|:------|
| appgateway.backend.response.status.count | count |

</TabItem>
<TabItem value="Backend-Time" label="Backend-Time">

| Metric Name                                            | Unit  |
|:-------------------------------------------------------|:------|
| appgateway.backend.connect.time.milliseconds           | ms    |
| appgateway.backend.firstbyte.responsetime.milliseconds | ms    |
| appgateway.backend.lastbyte.responsetime.milliseconds  | ms    |

</TabItem>
<TabItem value="Clients-Traffic" label="Clients-Traffic">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| appgateway.traffic.clients.received.bytes | B     |
| appgateway.traffic.clients.sent.bytes     | B     |

</TabItem>
<TabItem value="Connections" label="Connections">

| Metric Name                                  | Unit  |
|:---------------------------------------------|:------|
| appgateway.backend.connections.current.count | count |

</TabItem>
<TabItem value="Gateway-Time" label="Gateway-Time">

| Metric Name                        | Unit  |
|:-----------------------------------|:------|
| appgateway.time.total.milliseconds | ms    |

</TabItem>
<TabItem value="Health" label="Health">

Could not retrive metrics

</TabItem>
<TabItem value="Requests" label="Requests">

| Metric Name                      | Unit  |
|:---------------------------------|:------|
| appgateway.requests.failed.count | count |
| appgateway.requests.total.count  | count |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| appgateway.throughput.bytespersecond | B/s   |

</TabItem>
<TabItem value="Units" label="Units">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| appgateway.capacity.units.count         | count |
| appgateway.compute.units.count          | count |
| appgateway.billed.units.estimated.count | count |
| appgateway.billable.units.fixed.count   | count |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Plugin Packs > Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-azure-network-appgateway
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-network-appgateway
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-azure-network-appgateway
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Azure Application Gateway** Pack through
the **Configuration > Plugin Packs > Manager** menu.

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
dnf install centreon-plugin-Cloud-Azure-Network-AppGateway-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Network-AppGateway-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-azure-network-appgateway-api
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
* Apply the **Cloud-Azure-Network-AppGateway-V2-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.
These mandatory macros differ depending on the custom mode used.

> Two methods can be used to set the macros:
>
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`)
in **AZURERESOURCE**
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory      | Macro              | Description                                  |
|:---------------|:-------------------|:---------------------------------------------|
|                | AZUREAPICUSTOMMODE | Custom mode **api**                          |
|                | AZURECLIENTID      | Client ID                                    |
|                | AZURECLIENTSECRET  | Client secret                                |
|                | AZURERESOURCE      | ID or name of the Azure resource             |
|                | AZURERESOURCEGROUP | Resource group name if resource name is used |
|                | AZURESUBSCRIPTION  | Subscription ID                              |
|                | AZURETENANT        | Tenant ID                                    |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory      | Macro              | Description                                  |
|:---------------|:-------------------|:---------------------------------------------|
|                | AZURECLICUSTOMMODE | Custom mode **azcli**                        |
|                | AZURERESOURCE      | ID or name of the Azure resource             |
|                | AZURERESOURCEGROUP | Resource group name if resource name is used |
|                | AZURESUBSCRIPTION  | Subscription ID                              |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_azure_network_appgateway_api.pl \
    --plugin=cloud::azure::network::appgateway::plugin \
    --mode=units \
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
    --aggregation='Average' \
    --warning-estimated-billed-units='' \
    --critical-estimated-billed-units='' \
    --warning-fixed-billable-units='' \
    --critical-fixed-billable-units='' \
    --warning-compute-units='' \
    --critical-compute-units='' \
    --warning-capacity-units='' \
    --critical-capacity-units='' \
    
```

The expected command output is shown below:

```bash
OK: Capacity Units consumed Compute Units consumed Estimated Billed Capacity Units Fixed Billable Capacity Units | 'appgateway.capacity.units.count'=34;;;0; 'appgateway.compute.units.count'=99;;;0; 'appgateway.billed.units.estimated.count'=96;;;0; 'appgateway.billable.units.fixed.count'=8;;;0; 
```

### Available custom modes

All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_network_appgateway_api.pl \
    --plugin=cloud::azure::network::appgateway::plugin \
    --list-custommode
```

The plugin brings the following custom modes:

* api
* azcli

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_network_appgateway_api.pl \
    --plugin=cloud::azure::network::appgateway::plugin \
    --list-mode
```

The plugin brings the following modes:

* backend-health
* backend-status
* backend-time
* clients-traffic
* connections
* discovery
* gateway-time
* health
* requests
* throughput
* units

### Available options

#### Global optionsAll global options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --mode                                     |     Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --dyn-mode                                 |     Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global      |
| --list-mode                                |     List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --mode-version                             |     Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --version                                  |     Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --custommode                               |     Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --list-custommode                          |     List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Global      |
| --multiple                                 |     Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --pass-manager                             |     Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --verbose                                  |     Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --debug                                    |     Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --filter-perfdata                          |     Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --filter-perfdata-adv                      |     Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output      |
| --explode-perfdata-max                     |     Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output      |
| --change-perfdata --extend-perfdata        |     Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output      |
| --extend-perfdata-group                    |     Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output      |
| --change-short-output --change-long-output |     Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --change-exit                              |     Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --range-perfdata                           |     Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output      |
| --filter-uom                               |     Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output      |
| --opt-exit                                 |     Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-ignore-perfdata                   |     Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --output-ignore-label                      |     Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-xml                               |     Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output      |
| --output-json                              |     Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output      |
| --output-openmetrics                       |     Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --output-file                              |     Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --disco-format                             |     Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output      |
| --disco-show                               |     Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output      |
| --float-precision                          |     Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --source-encoding                          |     Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |


#### Custom modes options

All custom modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option                 | Description                                                                                                                                | Option type  |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --subscription         |     Set Azure subscription ID.                                                                                                             | Api          |
| --tenant               |     Set Azure tenant ID.                                                                                                                   | Api          |
| --client-id            |     Set Azure client ID.                                                                                                                   | Api          |
| --client-secret        |     Set Azure client secret.                                                                                                               | Api          |
| --login-endpoint       |     Set Azure login endpoint URL (Default: 'https://login.microsoftonline.com')                                                            | Api          |
| --management-endpoint  |     Set Azure management endpoint URL (Default: 'https://management.azure.com')                                                            | Api          |
| --timeframe            |     Set timeframe in seconds (i.e. 3600 to check last hour).                                                                               | Api          |
| --interval             |     Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                        | Api          |
| --aggregation          |     Set monitor aggregation (Can be multiple, Can be: 'minimum', 'maximum', 'average', 'total', 'count').                                  | Api          |
| --zeroed               |     Set metrics value to 0 if none. Usefull when Monitor does not return value when not defined.                                           | Api          |
| --timeout              |     Set timeout in seconds (Default: 10).                                                                                                  | Api          |
| --http-peer-addr       |     Set the address you want to connect (Useful if hostname is only a vhost. no ip resolve)                                                | Http global  |
| --proxyurl             |     Proxy URL                                                                                                                              | Http global  |
| --proxypac             |     Proxy pac file (can be an url or local file)                                                                                           | Http global  |
| --insecure             |     Insecure SSL connections.                                                                                                              | Http global  |
| --http-backend         |     Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                    | Http global  |
| --ssl-opt              |     Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                              | Backend lwp  |
| --ssl                  |     Set SSL version (--ssl=TLSv1).                                                                                                         | Backend lwp  |
| --curl-opt             |     Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).       | Backend curl |
| --memcached            |     Memcached server to use (only one server).                                                                                             | Retention    |
| --redis-server         |     Redis server to use (only one server). SYntax: address\[:port\]                                                                        | Retention    |
| --redis-attribute      |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                | Retention    |
| --redis-db             |     Set Redis database index.                                                                                                              | Retention    |
| --failback-file        |     Failback on a local file if redis connection failed.                                                                                   | Retention    |
| --memexpiration        |     Time to keep data in seconds (Default: 86400).                                                                                         | Retention    |
| --statefile-dir        |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                    | Retention    |
| --statefile-suffix     |     Add a suffix for the statefile name (Default: '').                                                                                     | Retention    |
| --statefile-concat-cwd |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                             | Retention    |
| --statefile-format     |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                     | Retention    |
| --statefile-key        |     Key to encrypt/decrypt cache.                                                                                                          | Retention    |
| --statefile-cipher     |     Cipher to encrypt cache (Default: 'AES').                                                                                              | Retention    |
| --filter-dimension     |     Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode  |
| --per-sec              |     Display the statistics based on a per-second period.                                                                                   | Custom mode  |

</TabItem>
<TabItem value="azcli" label="azcli">

| Option             | Description                                                                                                                                | Option type |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --subscription     |     Set Azure subscription (Required if logged to several subscriptions).                                                                  | Azcli       |
| --timeframe        |     Set timeframe in seconds (i.e. 3600 to check last hour).                                                                               | Azcli       |
| --interval         |     Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                        | Azcli       |
| --aggregation      |     Set monitor aggregation (Can be multiple, Can be: 'minimum', 'maximum', 'average', 'total', 'count').                                  | Azcli       |
| --zeroed           |     Set metrics value to 0 if none. Usefull when Monitor does not return value when not defined.                                           | Azcli       |
| --timeout          |     Set timeout in seconds (Default: 50).                                                                                                  | Azcli       |
| --sudo             |     Use 'sudo' to execute the command.                                                                                                     | Azcli       |
| --command          |     Command to get information (Default: 'az'). Can be changed if you have output in a file.                                               | Azcli       |
| --command-path     |     Command path (Default: none).                                                                                                          | Azcli       |
| --command-options  |     Command options (Default: none).                                                                                                       | Azcli       |
| --proxyurl         |     Proxy URL if any                                                                                                                       | Azcli       |
| --filter-dimension |     Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode |
| --per-sec          |     Display the statistics based on a per-second period.                                                                                   | Custom mode |

</TabItem>
</Tabs>

#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Backend-Health" label="Backend-Health">

| Option                          | Description                                                                                     | Option type |
|:--------------------------------|:------------------------------------------------------------------------------------------------|:------------|
| --resource                      |     Set resource name or id (Required).                                                         | Mode        |
| --critical-unhealthy-host-count |     ='2'     Default aggregation: 'average' / 'total', 'minimum' and 'maximum' are     valid.   | Mode        |
| --resource-group                |     Set resource group (Required if resource's name is used).                                   | Mode        |
| --warning-*                     |     Warning threshold where '*' can be: 'healthyhostcount', 'unhealthyhostcount'.               | Mode        |
| --critical-*                    |     Critical threshold where '*' can be: 'healthyhostcount', 'unhealthyhostcount'.              | Mode        |

</TabItem>
<TabItem value="Backend-Status" label="Backend-Status">

| Option                     | Description                                                     | Option type |
|:---------------------------|:----------------------------------------------------------------|:------------|
| --plugin                   |     =cloud::azure::integration::servicebus::plugin              | Mode        |
| --resource                 |     Set resource name or id (Required).                         | Mode        |
| --critical-response-status |     Critical threshold.                                         | Mode        |
| --resource-group           |     Set resource group (Required if resource's name is used).   | Mode        |
| --warning-response-status  |     Warning threshold.                                          | Mode        |

</TabItem>
<TabItem value="Backend-Time" label="Backend-Time">

| Option                            | Description                                                                                                      | Option type |
|:----------------------------------|:-----------------------------------------------------------------------------------------------------------------|:------------|
| --warning-lastbyte-response-time  |     ='1000'                                                                                                      | Mode        |
| --critical-lastbyte-response-time |     ='2000'     Default aggregation: 'average' / 'total', 'minimum' and 'maximum' are     valid.                 | Mode        |
| --plugin                          |     =cloud::azure::integration::servicebus::plugin                                                               | Mode        |
| --resource                        |     Set resource name or id (Required).                                                                          | Mode        |
| --resource-group                  |     Set resource group (Required if resource's name is used).                                                    | Mode        |
| --warning-*                       |     Warning threshold where '*' can be: 'connect-time', 'lastbyte-response-time', 'firstbyte-response-time'.     | Mode        |
| --critical-*                      |     Critical threshold where '*' can be: 'connect-time', 'lastbyte-response-time', 'firstbyte-response-time'.    | Mode        |

</TabItem>
<TabItem value="Clients-Traffic" label="Clients-Traffic">

| Option                            | Description                                                                                        | Option type |
|:----------------------------------|:---------------------------------------------------------------------------------------------------|:------------|
| --plugin                          |     =cloud::azure::integration::servicebus::plugin                                                 | Mode        |
| --warning-lastbyte-response-time  |     ='1000'                                                                                        | Mode        |
| --critical-lastbyte-response-time |     ='2000'     Default aggregation: 'total' / 'average', 'minimum' and 'maximum' are     valid.   | Mode        |
| --resource                        |     Set resource name or id (Required).                                                            | Mode        |
| --resource-group                  |     Set resource group (Required if resource's name is used).                                      | Mode        |
| --warning-*                       |     Warning threshold where '*' can be: 'clients-bytes-received', 'clients-bytes-sent'.            | Mode        |
| --critical-*                      |     Critical threshold where '*' can be: 'clients-bytes-received', 'clients-bytes-sent'.           | Mode        |

</TabItem>
<TabItem value="Connections" label="Connections">

| Option                         | Description                                                     | Option type |
|:-------------------------------|:----------------------------------------------------------------|:------------|
| --warning-current-connections  |     Warning threshold.                                          | Mode        |
| --critical-current-connections |     Critical threshold.                                         | Mode        |
| --plugin                       |     =cloud::azure::integration::servicebus::plugin              | Mode        |
| --resource                     |     Set resource name or id (Required).                         | Mode        |
| --resource-group               |     Set resource group (Required if resource's name is used).   | Mode        |

</TabItem>
<TabItem value="Gateway-Time" label="Gateway-Time">

| Option                | Description                                                     | Option type |
|:----------------------|:----------------------------------------------------------------|:------------|
| --plugin              |     =cloud::azure::integration::servicebus::plugin              | Mode        |
| --resource            |     Set resource name or id (Required).                         | Mode        |
| --critical-total-time |     Critical threshold.                                         | Mode        |
| --resource-group      |     Set resource group (Required if resource's name is used).   | Mode        |
| --warning-total-time  |     Warning threshold.                                          | Mode        |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                               | Option type |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --resource        |     Set resource name or id (Required).                                                                                                   | Mode        |
| --resource-group  |     Set resource group (Required if resource's name is used).                                                                             | Mode        |
| --warning-status  |     Set warning threshold for status (Default: ''). Can used special variables like: %{status}, %{summary}                                | Mode        |
| --critical-status |     Set critical threshold for status (Default: '%{status} =~ /^Unavailable$/'). Can used special variables like: %{status}, %{summary}   | Mode        |
| --unknown-status  |     Set unknown threshold for status (Default: '%{status} =~ /^Unknown$/'). Can used special variables like: %{status}, %{summary}        | Mode        |
| --ok-status       |     Set ok threshold for status (Default: '%{status} =~ /^Available$/'). Can used special variables like: %{status}, %{summary}           | Mode        |

</TabItem>
<TabItem value="Requests" label="Requests">

| Option                     | Description                                                                                        | Option type |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------|
| --resource                 |     Set resource name or id (Required).                                                            | Mode        |
| --critical-failed-requests |     ='2000'     Default aggregation: 'total' / 'average', 'minimum' and 'maximum' are     valid.   | Mode        |
| --resource-group           |     Set resource group (Required if resource's name is used).                                      | Mode        |
| --warning-*                |     Warning threshold where '*' can be: 'failed-requests', 'total-requests'.                       | Mode        |
| --critical-*               |     Critical threshold where '*' can be: 'failed-requests', 'total-requests'.                      | Mode        |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Option                | Description                                                     | Option type |
|:----------------------|:----------------------------------------------------------------|:------------|
| --resource            |     Set resource name or id (Required).                         | Mode        |
| --critical-throughput |     Critical threshold.                                         | Mode        |
| --resource-group      |     Set resource group (Required if resource's name is used).   | Mode        |
| --warning-throughput  |     Warning threshold.                                          | Mode        |

</TabItem>
<TabItem value="Units" label="Units">

| Option                   | Description                                                                                                                      | Option type |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------|:------------|
| --resource               |     Set resource name or id (Required).                                                                                          | Mode        |
| --critical-compute-units |     ='2000'     Default aggregation: 'average' / 'total', 'minimum' and 'maximum' are     valid.                                 | Mode        |
| --resource-group         |     Set resource group (Required if resource's name is used).                                                                    | Mode        |
| --warning-*              |     Warning threshold where '*' can be: 'estimated-billed-units', 'fixed-billable-units', 'compute-units', 'capacity-units'.     | Mode        |
| --critical-*             |     Critical threshold where '*' can be: 'estimated-billed-units', 'fixed-billable-units', 'compute-units', 'capacity-units'.    | Mode        |

</TabItem>
</Tabs>


All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_network_appgateway_api.pl \
    --plugin=cloud::azure::network::appgateway::plugin \
    --mode=units \
    --help
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).