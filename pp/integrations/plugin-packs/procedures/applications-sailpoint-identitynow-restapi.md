---
id: applications-sailpoint-identitynow-restapi
title: SailPoint IdentityNow Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **SailPoint IdentityNow Rest API** brings a host template:

* **App-Sailpoint-Identitynow-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Sailpoint-Identitynow-Restapi-custom" label="App-Sailpoint-Identitynow-Restapi-custom">

This host template does not bring any service template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                | Service Description                                                      | Discovery  |
|:--------------|:------------------------------------------------|:-------------------------------------------------------------------------|:-----------|
| Search-Count  | App-Sailpoint-Identitynow-Restapi-Search-Count  | Performs a search with a provided query and returns the count of results |            |
| Source-Health | App-Sailpoint-Identitynow-Restapi-Source-Health | Check sources health status                                              | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                          | Description                         |
|:---------------------------------------------------|:------------------------------------|
| App-Sailpoint-Identitynow-Restapi-Source-Health-Id | Discover sources and monitor status |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Search-Count" label="Search-Count">

| Metric name         | Unit  |
|:--------------------|:------|
| query.results.count |       |

</TabItem>
<TabItem value="Source-Health" label="Source-Health">

| Metric name                    | Unit  |
|:-------------------------------|:------|
| sources.status.healthy.count   |       |
| sources.status.error.count     |       |
| sources.status.failure.count   |       |
| sources.status.unchecked.count |       |
| source health status           |       |

</TabItem>
</Tabs>

## Prerequisites

To monitor this type of resource, a user with read privileges on the SailPoint IdentityNow [API](https://developer.sailpoint.com/idn/api/getting-started) is required.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-sailpoint-identitynow-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-sailpoint-identitynow-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-sailpoint-identitynow-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-sailpoint-identitynow-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **SailPoint IdentityNow Rest API** connector through
the **Configuration > Monitoring Connectors Manager** menu.

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
dnf install centreon-plugin-Applications-Sailpoint-Identitynow-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Sailpoint-Identitynow-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-sailpoint-identitynow-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Sailpoint-Identitynow-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Sailpoint-Identitynow-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                               | Description                         | Default value     | Mandatory   |
|:------------------------------------|:------------------------------------|:------------------|:------------|
| SAILPOINTIDENTITYNOWAPICLIENTID     | SailPoint IdentityNow Client ID     |                   | X           |
| SAILPOINTIDENTITYNOWAPICLIENTSECRET | SailPoint IdentityNow Client Secret |                   | X           |
| SAILPOINTIDENTITYNOWAPITENANT       | SailPoint IdentityNow API tenant    |                   | X           |
| SAILPOINTIDENTITYNOWAPIDOMAIN       | SailPoint IdentityNow API domain    | identitynow       | X           |
| SAILPOINTIDENTITYNOWAPIPORT         | SailPoint IdentityNow API port      | 8443              |             |
| SAILPOINTIDENTITYNOWAPIPROTOCOL     | Specify HTTPS if needed             | https             |             |
| SAILPOINTIDENTITYNOWAPIVERSION      | SailPoint IdentityNow API version   | v3                | X           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Search-Count" label="Search-Count">

| Macro                | Description                                                                                         | Default value               | Mandatory   |
|:---------------------|:----------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| OUTPUT               | Output to print after retrieving the count of results (Default: "Number of results: %{count}")      | Number of results: %{count} |             |
| QUERY                | Query parameters used to construct an Elasticsearch query object(see documentation)                 |                             |             |
| WARNINGRESULTSCOUNT  |                                                                                                     |                             |             |
| CRITICALRESULTSCOUNT |                                                                                                     |                             |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                             |             |

</TabItem>
<TabItem value="Source-Health" label="Source-Health">

| Macro                    | Description                                                                                             | Default value                       | Mandatory   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------|:------------------------------------|:------------|
| SOURCEID                 | Define source ID to retrieve only one source health status (useful with service discovery)              |                                     |             |
| FILTERNAME               | Filter source name (Can be a regexp)                                                                    |                                     |             |
| FILTERTYPE               | Filter source type (Can be a regexp)                                                                    |                                     |             |
| CRITICALHEALTHSTATUS     | Set critical threshold for each source health status (Default: '%{status} ne "SOURCE\_STATE\_HEALTHY"') | %{status} ne "SOURCE_STATE_HEALTHY" |             |
| WARNINGHEALTHSTATUS      | Set warning threshold for each source health status (Default: none)                                     |                                     |             |
| WARNINGSOURCESERROR      | Set threshold for each status counter                                                                   |                                     |             |
| CRITICALSOURCESERROR     | Set threshold for each status counter                                                                   |                                     |             |
| WARNINGSOURCESFAILURE    | Set threshold for each status counter                                                                   |                                     |             |
| CRITICALSOURCESFAILURE   | Set threshold for each status counter                                                                   |                                     |             |
| WARNINGSOURCESHEALTHY    | Set threshold for each status counter                                                                   |                                     |             |
| CRITICALSOURCESHEALTHY   | Set threshold for each status counter                                                                   |                                     |             |
| WARNINGSOURCESUNCHECKED  | Set threshold for each status counter                                                                   |                                     |             |
| CRITICALSOURCESUNCHECKED | Set threshold for each status counter                                                                   |                                     |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)     | --verbose                           |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor the resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_sailpoint_identitynow_restapi.pl \
	--plugin=apps::sailpoint::identitynow::restapi::plugin \
	--mode=source-health \
	--hostname='10.0.0.1' \
	--port='8443' \
	--proto='https' \
	--client-id='myclient' \
	--client-secret='****' \
	--api-version='v3' \
	--domain='identitynow' \
	--tenant='mytenant'  \
	--verbose
```

The expected command output is shown below:

```bash
CRITICAL: Source 'Centreon' health status is 'SOURCE_STATE_FAILURE_SOURCE' | 'sources.status.healthy.count'=4;;;; 'sources.status.error.count'=0;;;; 'sources.status.failure.count'=1;;;; 'sources.status.unchecked.count'=0;;;;
Source 'Saint-Pathus' health status is 'SOURCE_STATE_HEALTHY'
Source 'Azure' health status is 'SOURCE_STATE_HEALTHY'
Source 'Centreon' health status is 'SOURCE_STATE_FAILURE_SOURCE'
Source 'Aws' health status is 'SOURCE_STATE_HEALTHY'
Source 'Outscale' health status is 'SOURCE_STATE_HEALTHY'
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_sailpoint_identitynow_restapi.pl \
	--plugin=apps::sailpoint::identitynow::restapi::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode          | Linked service template                         |
|:--------------|:------------------------------------------------|
| list-sources  | Used for service discovery                      |
| search-count  | App-Sailpoint-Identitynow-Restapi-Search-Count  |
| source-health | App-Sailpoint-Identitynow-Restapi-Source-Health |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type                       |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global                     |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global                     |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global                     |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global                     |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global                     |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get the an information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Global                     |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global                     |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global                     |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global                     |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output                     |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output                     |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output                     |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output                     |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output                     |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output                     |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output                     |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output                     |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output                     |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output                     |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output                     |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output                     |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output                     |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output                     |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output                     |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output                     |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output                     |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output                     |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output                     |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output                     |
| --tenant                                   | SailPoint IdentityNow API tenant.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Sailpoint identitynow  api |
| --domain                                   | SailPoint IdentityNow API domain (Default: identitynow)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Sailpoint identitynow  api |
| --port                                     | SailPoint IdentityNow API port (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Sailpoint identitynow  api |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Sailpoint identitynow  api |
| --client-id                                | SailPoint IdentityNow Client ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Sailpoint identitynow  api |
| --client-secret                            | SailPoint IdentityNow Client Secret                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Sailpoint identitynow  api |
| --timeout                                  | Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Sailpoint identitynow  api |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Http global                |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Http global                |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Http global                |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Http global                |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global                |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Backend lwp                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Backend curl               |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Retention                  |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Retention                  |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Retention                  |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Retention                  |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Retention                  |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Retention                  |
| --statefile-suffix                         | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Retention                  |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Retention                  |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Retention                  |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Retention                  |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention                  |

#### Modes options

All mode-specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Search-Count" label="Search-Count">

| Option                                           | Description                                                                                       | Type |
|:-------------------------------------------------|:--------------------------------------------------------------------------------------------------|:-----|
| --query                                          | Query parameters used to construct an Elasticsearch query object(see documentation).              | Mode |
| --output                                         | Output to print after retrieving the count of results (Default: "Number of results: %{count}").   | Mode |
| --warning-results-count --critical-results-count | Thresholds on count of results.                                                                   | Mode |

</TabItem>
<TabItem value="Source-Health" label="Source-Health">

| Option                                   | Description                                                                                                | Type |
|:-----------------------------------------|:-----------------------------------------------------------------------------------------------------------|:-----|
| --source-id                              | Define source ID to retrieve only one source health status (useful with service discovery).                | Mode |
| --filter-name                            | Filter source name (Can be a regexp).                                                                      | Mode |
| --filter-type                            | Filter source type (Can be a regexp).                                                                      | Mode |
| --warning-health-status                  | Set warning threshold for each source health status (Default: none).                                       | Mode |
| --critical-health-status                 | Set critical threshold for each source health status (Default: '%{status} ne "SOURCE\_STATE\_HEALTHY"').   | Mode |
| --warning-sources-* --critical-sources-* | Set threshold for each status counter. Can be: 'healthy', 'error', 'failure', 'unchecked'.                 | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_sailpoint_identitynow_restapi.pl \
	--plugin=apps::sailpoint::identitynow::restapi::plugin \
	--mode=source-health \
    --help
```
