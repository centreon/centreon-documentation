---
id: applications-nginx-plus-restapi
title: Nginx Plus Restapi
description: Monitor Nginx Plus via its REST API: HTTP zone traffic and responses, connections, and SSL handshake statistics.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Nginx Plus** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Nginx Plus** brings a host template:

* **App-Nginx-Plus-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Nginx-Plus-Restapi-custom" label="App-Nginx-Plus-Restapi-custom">

| Service Alias                  | Service Template                          | Service Description |
|:-------------------------------|:------------------------------------------|:--------------------|
| Nginx-Http-Zones-Restapi       | App-Nginx-Plus-Http-Zones-Restapi-custom  | Check http zones            |
| Nginx-Plus-Connections-Restapi | App-Nginx-Plus-Connections-Restapi-custom | Check connections            |
| Nginx-Plus-Ssl=Restapi         | App-Nginx-Plus-Ssl-Restapi-custom         | Check ssl statistics            |

> The services listed above are created automatically when the **App-Nginx-Plus-Restapi-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Nginx-Http-Zones-Restapi" label="Nginx-Http-Zones-Restapi">

| Name                       | Unit  |
|:---------------------------|:------|
| zone.requests.persecond   | /s |
| zone.requests.discarded.count     | count |
| zone.traffic.in.bitspersecond | b/s |
| zone.traffic.out.bitspersecond  | b/s |
| zone.responses.total.count  | count |
| name.zone.responses.[1xx,2xx,3xx,4xx,5xx].count  | count |

</TabItem>
<TabItem value="Nginx-Plus-Connections-Restapi" label="Nginx-Plus-Connections-Restapi">

| Name                       | Unit  |
|:---------------------------|:------|
| connections.active.count   | count |
| connections.idle.count     | count |
| connections.accepted.count | count |
| connections.dropped.count  | count |

</TabItem>
<TabItem value="Nginx-Plus-Ssl=Restapi" label="Nginx-Plus-Ssl=Restapi">

| Name                           | Unit  |
|:-------------------------------|:------|
| ssl.handshakes.succeeded.count | count |
| ssl.handshakes.failed.count    | count |
| ssl.sessions.reuses.count      | count |

</TabItem>
</Tabs>

## Prerequisites

A service account is required to request the Nginx Plus API. It needs to have sufficient reading privileges in the environment.
More infomation is avaible in official Nginx documentation : https://docs.nginx.com/nginx/admin-guide/monitoring/live-activity-monitoring/#getting-statistics-with-the-api

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
dnf install centreon-pack-applications-nginx-plus-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-nginx-plus-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-nginx-plus-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-nginx-plus-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Nginx Plus** connector through
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
dnf install centreon-plugin-Applications-Nginx-Plus-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Nginx-Plus-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-nginx-plus-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Nginx-Plus-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Nginx-Plus-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                          | Default value     | Mandatory   |
|:----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | Nginx basic username                                                                                 |                   |             |
| APIPASSWORD     | Nginx basic password                                                                                 |                   |             |
| APIPROTO        | Specify https if needed (default: 'https')                                                           | https             |             |
| APIPORT         | Port used (default: 443)                                                                             | 443               |             |
| APIPATH         | Specify api path (default: '/api/6')                                                                 | /api/6            |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Nginx-Http-Zones-Restapi" label="Nginx-Http-Zones-Restapi">

| Macro                                  | Description                                                                                        | Default value     | Mandatory   |
|:---------------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS                         | Only display some counters (regexp can be used). Example: --filter-counters='serverzone'           |                   |             |
| FILTERSERVERNAME                       | Filter server zone name (can be a regexp)                                                          |                   |             |
| FILTERLOCATIONNAME                     | Filter location zone name (can be a regexp)                                                        |                   |             |
| WARNINGLOCATIONZONERESPONSES1XX        | Threshold                                                                                          |                   |             |
| CRITICALLOCATIONZONERESPONSES1XX       | Threshold                                                                                          |                   |             |
| WARNINGLOCATIONZONERESPONSES2XX        | Threshold                                                                                          |                   |             |
| CRITICALLOCATIONZONERESPONSES2XX       | Threshold                                                                                          |                   |             |
| WARNINGLOCATIONZONERESPONSES3XX        | Threshold                                                                                          |                   |             |
| CRITICALLOCATIONZONERESPONSES3XX       | Threshold                                                                                          |                   |             |
| WARNINGLOCATIONZONERESPONSES4XX        | Threshold                                                                                          |                   |             |
| CRITICALLOCATIONZONERESPONSES4XX       | Threshold                                                                                          |                   |             |
| WARNINGLOCATIONZONERESPONSES5XX        | Threshold                                                                                          |                   |             |
| CRITICALLOCATIONZONERESPONSES5XX       | Threshold                                                                                          |                   |             |
| WARNINGLOCATIONZONERESPONSESTOTAL      | Threshold                                                                                          |                   |             |
| CRITICALLOCATIONZONERESPONSESTOTAL     | Threshold                                                                                          |                   |             |
| WARNINGLOCATIONZONERESQUESTS           | Threshold                                                                                          |                   |             |
| CRITICALLOCATIONZONERESQUESTS          | Threshold                                                                                          |                   |             |
| WARNINGLOCATIONZONERESQUESTSDISCARDED  | Threshold                                                                                          |                   |             |
| CRITICALLOCATIONZONERESQUESTSDISCARDED | Threshold                                                                                          |                   |             |
| WARNINGLOCATIONZONETRAFFICIN           | Threshold                                                                                          |                   |             |
| CRITICALLOCATIONZONETRAFFICIN          | Threshold                                                                                          |                   |             |
| WARNINGLOCATIONZONETRAFFICOUT          | Threshold                                                                                          |                   |             |
| CRITICALLOCATIONZONETRAFFICOUT         | Threshold                                                                                          |                   |             |
| WARNINGSERVERZONERESPONSES1XX          | Threshold                                                                                          |                   |             |
| CRITICALSERVERZONERESPONSES1XX         | Threshold                                                                                          |                   |             |
| WARNINGSERVERZONERESPONSES2XX          | Threshold                                                                                          |                   |             |
| CRITICALSERVERZONERESPONSES2XX         | Threshold                                                                                          |                   |             |
| WARNINGSERVERZONERESPONSES3XX          | Threshold                                                                                          |                   |             |
| CRITICALSERVERZONERESPONSES3XX         | Threshold                                                                                          |                   |             |
| WARNINGSERVERZONERESPONSES4XX          | Threshold                                                                                          |                   |             |
| CRITICALSERVERZONERESPONSES4XX         | Threshold                                                                                          |                   |             |
| WARNINGSERVERZONERESPONSES5XX          | Threshold                                                                                          |                   |             |
| CRITICALSERVERZONERESPONSES5XX         | Threshold                                                                                          |                   |             |
| WARNINGSERVERZONERESPONSESTOTAL        | Threshold                                                                                          |                   |             |
| CRITICALSERVERZONERESPONSESTOTAL       | Threshold                                                                                          |                   |             |
| WARNINGSERVERZONERESQUESTS             | Threshold                                                                                          |                   |             |
| CRITICALSERVERZONERESQUESTS            | Threshold                                                                                          |                   |             |
| WARNINGSERVERZONERESQUESTSDISCARDED    | Threshold                                                                                          |                   |             |
| CRITICALSERVERZONERESQUESTSDISCARDED   | Threshold                                                                                          |                   |             |
| WARNINGSERVERZONETRAFFICIN             | Threshold                                                                                          |                   |             |
| CRITICALSERVERZONETRAFFICIN            | Threshold                                                                                          |                   |             |
| WARNINGSERVERZONETRAFFICOUT            | Threshold                                                                                          |                   |             |
| CRITICALSERVERZONETRAFFICOUT           | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Nginx-Plus-Connections-Restapi" label="Nginx-Plus-Connections-Restapi">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS   | Only display some counters (regexp can be used). Example: --filter-counters='accepted'             |                   |             |
| WARNINGACCEPTED  | Threshold                                                                                          |                   |             |
| CRITICALACCEPTED | Threshold                                                                                          |                   |             |
| WARNINGACTIVE    | Threshold                                                                                          |                   |             |
| CRITICALACTIVE   | Threshold                                                                                          |                   |             |
| WARNINGDROPPED   | Threshold                                                                                          |                   |             |
| CRITICALDROPPED  | Threshold                                                                                          |                   |             |
| WARNINGIDLE      | Threshold                                                                                          |                   |             |
| CRITICALIDLE     | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Nginx-Plus-Ssl=Restapi" label="Nginx-Plus-Ssl=Restapi">

| Macro                       | Description                                                                                        | Default value     | Mandatory   |
|:----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS              | Only display some counters (regexp can be used). Example: --filter-counters='failed'               |                   |             |
| WARNINGHANDSHAKESFAILED     | Threshold                                                                                          |                   |             |
| CRITICALHANDSHAKESFAILED    | Threshold                                                                                          |                   |             |
| WARNINGHANDSHAKESSUCCEEDED  | Threshold                                                                                          |                   |             |
| CRITICALHANDSHAKESSUCCEEDED | Threshold                                                                                          |                   |             |
| WARNINGSESSIONSREUSES       | Threshold                                                                                          |                   |             |
| CRITICALSESSIONSREUSES      | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_nginx_plus_restapi.pl \
	--plugin=apps::nginx::nginxplus::restapi::plugin \
	--mode=ssl \
	--hostname='10.0.0.1' \
	--port='443' \
	--proto='https' \
	--api-username='' \
	--api-password='' \
	--api-path='/api/6'  \
	--filter-counters='' \
	--warning-handshakes-succeeded='' \
	--critical-handshakes-succeeded='' \
	--warning-handshakes-failed='' \
	--critical-handshakes-failed='' \
	--warning-sessions-reuses='' \
	--critical-sessions-reuses=''
```

The expected command output is shown below:

```bash
OK: handshakes succeeded: 4648 handshakes failed: 93638 session reuses: 40367 | 'ssl.handshakes.succeeded.count'=4648;;;0; 'ssl.handshakes.failed.count'=93638;;;0; 'ssl.sessions.reuses.count'=40367;;;0;
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
/usr/lib/centreon/plugins/centreon_nginx_plus_restapi.pl \
	--plugin=apps::nginx::nginxplus::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                 | Linked service template                   |
|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/nginx/nginxplus/restapi/mode/connections.pm)] | App-Nginx-Plus-Connections-Restapi-custom |
| http-zones [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/nginx/nginxplus/restapi/mode/httpzones.pm)]    | App-Nginx-Plus-Http-Zones-Restapi-custom  |
| ssl [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/nginx/nginxplus/restapi/mode/ssl.pm)]                 | App-Nginx-Plus-Ssl-Restapi-custom         |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   Nginx hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-username                             |   Nginx basic username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --api-password                             |   Nginx basic password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --api-path                                 |   Specify api path (default: '/api/6')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeout                                  |   Set timeout in seconds (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Nginx-Http-Zones-Restapi" label="Nginx-Http-Zones-Restapi">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='serverzone'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --filter-server-name     |   Filter server zone name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --filter-location-name   |   Filter location zone name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --warning-* --critical-* |   Thresholds. Can be: 'serverzone-requests', 'serverzone-requests-discarded', 'serverzone-traffic-in', 'serverzone-traffic-out', 'serverzone-responses-total', 'serverzone-responses-1xx', 'serverzone-responses-2xx', 'serverzone-responses-3xx',  'serverzone-responses-4xx', 'serverzone-responses-5xx', 'locationzone-requests', 'locationzone-requests-discarded', 'locationzone-traffic-in', 'locationzone-traffic-out',  'locationzone-responses-total', 'locationzone-responses-1xx', 'locationzone-responses-2xx', 'locationzone-responses-3xx', 'locationzone-responses-4xx', 'locationzone-responses-5xx'.    |

</TabItem>
<TabItem value="Nginx-Plus-Connections-Restapi" label="Nginx-Plus-Connections-Restapi">

| Option                   | Description                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='accepted'   |
| --warning-* --critical-* |   Thresholds. Can be: 'active', 'idle', 'accepted', 'dropped'.                             |

</TabItem>
<TabItem value="Nginx-Plus-Ssl=Restapi" label="Nginx-Plus-Ssl=Restapi">

| Option                   | Description                                                                              |
|:-------------------------|:-----------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='failed'   |
| --warning-* --critical-* |   Thresholds. Can be: 'handshakes-succeeded', 'handshakes-failed', 'sessions-reuses'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_nginx_plus_restapi.pl \
	--plugin=apps::nginx::nginxplus::restapi::plugin \
	--mode=ssl \
	--help
```
