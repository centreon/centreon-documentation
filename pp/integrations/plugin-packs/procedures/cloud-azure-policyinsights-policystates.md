---
id: cloud-azure-policyinsights-policystates
title: Azure Policy States
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Monitoring Connector **Azure Policies States** brings a host template:

* Cloud-Azure-PolicyInsights-PolicyStates

The connector brings the following service template:

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-PolicyInsights-PolicyStates" label="Cloud-Azure-PolicyInsights-PolicyStates">

| Service Alias | Service Template                                       | Service Description             |
|:--------------|:-------------------------------------------------------|:--------------------------------|
| Compliance    | Cloud-Azure-PolicyInsights-PolicyStates-Compliance-Api | Check Azure policies compliance |

</TabItem>
</Tabs>



### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Compliance" label="Compliance">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| policies.non_compliant.count      | count |
| compliance_state#compliance-state | N/A   |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure
on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-azure-policyinsights-policystates
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-policyinsights-policystates
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-azure-policyinsights-policystates
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-policyinsights-policystates
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Azure Policies States** Pack through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/onprem/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-PolicyInsights-PolicyStates-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Azure-PolicyInsights-PolicyStates-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-PolicyInsights-PolicyStates-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-azure-policyinsights-policystates-api
```

</TabItem>
</Tabs>

## Configuration

### Host

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
3. Apply the **Cloud-Azure-PolicyInsights-PolicyStates-custom** template to the host.
4. Once the template is applied, fill in the corresponding macros. Some macros are mandatory. These mandatory macros differ depending on the custom mode used.

> Two methods can be used to set the macros:
>
> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`) in the **AZURERESOURCE** macro.
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

| Mandatory   | Macro              | Description                                                                       | Default |
|:------------|:-------------------|:----------------------------------------------------------------------------------|:--------|
| x           | AZURECLIENTID      | Set Azure client ID                                                               |         |
| x           | AZURECLIENTSECRET  | Set Azure client secret                                                           |         |
|             | AZURERESOURCEGROUP | Set resource group                                                                |         |
| x           | AZURESUBSCRIPTION  | Set Azure subscription ID                                                         |         |
| x           | AZURETENANT        | Set Azure tenant ID                                                               |         |
|             | PROXYURL           | Proxy URL                                                                         |         |
|             | EXTRAOPTIONS       | Any extra option you may want to add to every command line (eg. a --verbose flag) |         |


### Service 

Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

<Tabs groupId="sync">
<TabItem value="Compliance" label="Compliance">

| Mandatory   | Macro                        | Description                                                                                                                                                                    | Default                               |
|:------------|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
|             | POLICYSTATES                 | The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s) | default                               |
|             | RESOURCELOCATION             | Set resource location (Optional)                                                                                                                                               |                                       |
|             | RESOURCETYPE                 | Set resource type (Optional)                                                                                                                                                   |                                       |
|             | POLICYNAME                   | Set policy name (Optional)                                                                                                                                                     |                                       |
|             | CRITICALCOMPLIANCESTATE      |                                                                                                                                                                                | %{compliance_state} eq "NonCompliant" |
|             | WARNINGCOMPLIANCESTATE       |                                                                                                                                                                                |                                       |
|             | WARNINGNONCOMPLIANTPOLICIES  |                                                                                                                                                                                |                                       |
|             | CRITICALNONCOMPLIANTPOLICIES |                                                                                                                                                                                |                                       |
|             | EXTRAOPTIONS                 | Any extra option you may want to add to the command line (eg. a --verbose flag)                                                                                                |                                       |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_policyinsights_policystates_api.pl \
	--plugin=cloud::azure::policyinsights::policystates::plugin \
	--mode=compliance \
	--resource-group='' \
	--subscription='' \
	--tenant='' \
	--client-id='' \
	--client-secret='' \
	--proxyurl=''  \
	--policy-states='' \
	--resource-location='' \
	--resource-type='' \
	--policy-name='' \
	--warning-non-compliant-policies='' \
	--critical-non-compliant-policies='' \
	--warning-compliance-state='' \
	--critical-compliance-state='' \
	
```

The expected command output is shown below:

```bash
OK: Number of non compliant policies: 0 - All compliances states are ok | 'policies.non_compliant.count'=0;;;0; 
```

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_policyinsights_policystates_api.pl \
	--plugin=cloud::azure::policyinsights::policystates::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode       | Linked service template                                |
|:-----------|:-------------------------------------------------------|
| compliance | Cloud-Azure-PolicyInsights-PolicyStates-Compliance-Api |



### Available options



#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Compliance" label="Compliance">

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Type         |
|:-------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --mode                                     | Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global       |
| --dyn-mode                                 | Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global       |
| --list-mode                                | List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global       |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global       |
| --version                                  | Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Global       |
| --custommode                               | Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global       |
| --list-custommode                          | List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Global       |
| --multiple                                 | Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global       |
| --pass-manager                             | Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Global       |
| --verbose                                  | Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --debug                                    | Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --filter-perfdata                          | Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output       |
| --filter-perfdata-adv                      | Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Output       |
| --explode-perfdata-max                     | Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                      | Output       |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                                                                                                                                                                                                  | Output       |
| --change-short-output --change-long-output | Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --change-exit                              | Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --filter-uom                               | Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --opt-exit                                 | Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-ignore-perfdata                   | Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --output-ignore-label                      | Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output       |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output       |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output       |
| --float-precision                          | Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').      Microsoft Azure Rest API      To connect to the Azure Rest API, you must register an application.      Follow the 'How-to guide' in     https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-cr     eate-service-principal-portal      The application needs the 'Monitoring Reader' role (See     https://docs.microsoft.com/en-us/azure/azure-monitor/platform/roles-perm     issions-security#monitoring-reader).      This custom mode is using the 'OAuth 2.0 Client Credentials Grant Flow'      For futher informations, visit     https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-oauth     2-client-creds-grant-flow   | Output       |
| --subscription                             | Set Azure subscription ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Api          |
| --tenant                                   | Set Azure tenant ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Api          |
| --client-id                                | Set Azure client ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Api          |
| --client-secret                            | Set Azure client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --login-endpoint                           | Set Azure login endpoint URL (Default: 'https://login.microsoftonline.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Api          |
| --management-endpoint                      | Set Azure management endpoint URL (Default: 'https://management.azure.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Api          |
| --timeframe                                | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --interval                                 | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Api          |
| --aggregation                              | Set monitor aggregation (Can be multiple, Can be: 'minimum', 'maximum', 'average', 'total', 'count').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Api          |
| --zeroed                                   | Set metrics value to 0 if none. Usefull when Monitor does not return value when not defined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Api          |
| --timeout                                  | Set timeout in seconds (Default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Api          |
| --http-peer-addr                           | Set the address you want to connect (Useful if hostname is only a vhost. no ip resolve)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Http global  |
| --proxyurl                                 | Proxy URL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Http global  |
| --proxypac                                 | Proxy pac file (can be an url or local file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --insecure                                 | Insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Http global  |
| --http-backend                             | Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Backend curl |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Retention    |
| --redis-server                             | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Retention    |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention    |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Retention    |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Retention    |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Retention    |
| --statefile-dir                            | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Retention    |
| --statefile-suffix                         | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Retention    |
| --statefile-concat-cwd                     | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Retention    |
| --statefile-format                         | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Retention    |
| --statefile-key                            | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Retention    |
| --statefile-cipher                         | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Retention    |
| --policy-states                            | The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Mode         |
| --resource-group                           | Set resource group (Optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Mode         |
| --resource-location                        | Set resource location (Optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Mode         |
| --resource-type                            | Set resource type (Optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Mode         |
| --policy-name                              | Set policy name (Optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Mode         |
| --warning-* --critical-*                   | Thresholds. Can be: 'non-compliant-policies' ,'compliance-state'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Mode         |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_policyinsights_policystates_api.pl \
	--plugin=cloud::azure::policyinsights::policystates::plugin \
	--mode=compliance \
    --help
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).