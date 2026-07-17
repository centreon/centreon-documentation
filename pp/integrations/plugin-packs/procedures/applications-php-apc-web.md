---
id: applications-php-apc-web
title: PHP APC
description: Monitor PHP APC via its web status page over HTTP, tracking file cache hit/miss rates and memory usage and fragmentation.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **PHP APC** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **PHP APC** brings a host template:

* **App-Php-Apc-Web-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Php-Apc-Web-custom" label="App-Php-Apc-Web-custom">

| Service Alias      | Service Template                  | Service Description    |
|:-------------------|:----------------------------------|:-----------------------|
| Php-Apc-File-Cache | App-Php-Apc-File-Cache-Web-custom | Check file cache usage |
| Php-Apc-Memory     | App-Php-Apc-Memory-Web-custom     | Check memory usage     |

> The services listed above are created automatically when the **App-Php-Apc-Web-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Php-Apc-File-Cache" label="Php-Apc-File-Cache">

| Name                             | Unit  |
|:---------------------------------|:------|
| filecache.requests.persecond     | r/s   |
| filecache.requests.now.persecond | r/s   |
| filecache.hits.persecond         | r/s   |
| filecache.hits.now.persecond     | r/s   |
| filecache.misses.persecond       | r/s   |
| filecache.misses.now.persecond   | r/s   |
| filecache.hits.percentage        | %     |
| filecache.hits.now.percentage    | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Php-Apc-Memory" label="Php-Apc-Memory">

| Name                            | Unit  |
|:--------------------------------|:------|
| memory.usage.bytes              | B     |
| memory.fragmentation.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

The target PHP APC web page must be reachable from the Centreon poller on the 
specified port in the *PHPAPCWEBPORT* host macro.

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
dnf install centreon-pack-applications-php-apc-web
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-php-apc-web
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-php-apc-web
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-php-apc-web
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **PHP APC** connector through
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
dnf install centreon-plugin-Applications-Php-Apc-Web
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Php-Apc-Web
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-php-apc-web
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Php-Apc-Web
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Php-Apc-Web-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                          | Default value     | Mandatory   |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PHPAPCWEBPROTO        | Specify https if needed                                                                              | http              |             |
| PHPAPCWEBPORT         | Port used by web server                                                                              | 80                |             |
| PHPAPCWEBURLPATH      | Set path to get server-status page in auto mode (default: '/apc.php')                                | /apc.php          |             |
| PHPAPCWEBEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Php-Apc-File-Cache" label="Php-Apc-File-Cache">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGHITPERCENT      | Threshold                                                                                          |                   |             |
| CRITICALHITPERCENT     | Threshold                                                                                          |                   |             |
| WARNINGHITPERCENTNOW   | Threshold                                                                                          |                   |             |
| CRITICALHITPERCENTNOW  | Threshold                                                                                          |                   |             |
| WARNINGHITRATE         | Threshold                                                                                          |                   |             |
| CRITICALHITRATE        | Threshold                                                                                          |                   |             |
| WARNINGHITRATENOW      | Threshold                                                                                          |                   |             |
| CRITICALHITRATENOW     | Threshold                                                                                          |                   |             |
| WARNINGMISSRATE        | Threshold                                                                                          |                   |             |
| CRITICALMISSRATE       | Threshold                                                                                          |                   |             |
| WARNINGMISSRATENOW     | Threshold                                                                                          |                   |             |
| CRITICALMISSRATENOW    | Threshold                                                                                          |                   |             |
| WARNINGREQUESTRATE     | Threshold                                                                                          |                   |             |
| CRITICALREQUESTRATE    | Threshold                                                                                          |                   |             |
| WARNINGREQUESTRATENOW  | Threshold                                                                                          |                   |             |
| CRITICALREQUESTRATENOW | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Php-Apc-Memory" label="Php-Apc-Memory">

| Macro                 | Description                                                                                        | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGFRAGMENTATION  | Threshold                                                                                          |                   |             |
| CRITICALFRAGMENTATION | Threshold                                                                                          |                   |             |
| WARNINGUSED           | Threshold                                                                                          |                   |             |
| CRITICALUSED          | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_php_apc_web.pl \
	--plugin=apps::php::apc::web::plugin \
	--mode=file-cache \
	--hostname=10.0.0.1 \
	--proto='http' \
	--port='80' \
	--urlpath='/apc.php'  \
	--warning-request-rate='' \
	--critical-request-rate='' \
	--warning-request-rate-now='' \
	--critical-request-rate-now='' \
	--warning-hit-rate='' \
	--critical-hit-rate='' \
	--warning-hit-rate-now='' \
	--critical-hit-rate-now='' \
	--warning-miss-rate='' \
	--critical-miss-rate='' \
	--warning-miss-rate-now='' \
	--critical-miss-rate-now='' \
	--warning-hit-percent='' \
	--critical-hit-percent='' \
	--warning-hit-percent-now='' \
	--critical-hit-percent-now='' 
```

The expected command output is shown below:

```bash
OK: Request Rate (global): 52795 Request Rate : 58945 Hit Rate (global): 99658 Hit Rate : 86438 Miss Rate (global): 14421 Miss Rate : 89299 Hit Ratio (global) : 77924 % Hit Ratio : 19332 % | 'filecache.requests.persecond'=52795r/s;;;0; 'filecache.requests.now.persecond'=58945r/s;;;0; 'filecache.hits.persecond'=99658r/s;;;0; 'filecache.hits.now.persecond'=86438r/s;;;0; 'filecache.misses.persecond'=14421r/s;;;0; 'filecache.misses.now.persecond'=89299r/s;;;0; 'filecache.hits.percentage'=77924%;;;0;100 'filecache.hits.now.percentage'=19332%;;;0;100 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_php_apc_web.pl \
	--plugin=apps::php::apc::web::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                  | Linked service template           |
|:----------------------------------------------------------------------------------------------------------------------|:----------------------------------|
| file-cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/php/apc/web/mode/filecache.pm)] | App-Php-Apc-File-Cache-Web-custom |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/php/apc/web/mode/memory.pm)]        | App-Php-Apc-Memory-Web-custom     |

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

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Php-Apc-File-Cache" label="Php-Apc-File-Cache">

| Option        | Description                                                                                                                                                                                                                                                                                                           |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    |   IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                 |
| --port        |   Port used by web server                                                                                                                                                                                                                                                                                             |
| --proto       |   Specify https if needed                                                                                                                                                                                                                                                                                             |
| --urlpath     |   Set path to get server-status page in auto mode (default: '/apc.php')                                                                                                                                                                                                                                               |
| --credentials |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username    |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password    |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic       |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     |   Threshold for HTTP timeout (default: 30)                                                                                                                                                                                                                                                                            |
| --warning-*   |   Warning threshold. Can be: 'request-rate', 'request-rate-now',  'hit-rate', 'hit-rate-now', 'miss-rate', 'miss-rate-now', 'hit-percent', 'hit-percent-now'. '*-now' are rate between two calls.                                                                                                                     |
| --critical-*  |   Critical threshold. Can be: 'request-rate', 'request-rate-now',  'hit-rate', 'hit-rate-now', 'miss-rate', 'miss-rate-now', 'hit-percent', 'hit-percent-now'. '*-now' are rate between two calls.                                                                                                                    |

</TabItem>
<TabItem value="Php-Apc-Memory" label="Php-Apc-Memory">

| Option        | Description                                                                                                                                                                                                                                                                                                           |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    |   IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                 |
| --port        |   Port used by web server                                                                                                                                                                                                                                                                                             |
| --proto       |   Specify https if needed                                                                                                                                                                                                                                                                                             |
| --urlpath     |   Set path to get server-status page in auto mode (default: '/apc.php')                                                                                                                                                                                                                                               |
| --credentials |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username    |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password    |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic       |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     |   Threshold for HTTP timeout (default: 30)                                                                                                                                                                                                                                                                            |
| --warning-*   |   Warning threshold. Can be: 'used' (in percent), 'fragmentation' (in percent).                                                                                                                                                                                                                                       |
| --critical-*  |   Critical threshold. Can be: 'used' (in percent), 'fragmentation' (in percent).                                                                                                                                                                                                                                      |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_php_apc_web.pl \
	--plugin=apps::php::apc::web::plugin \
	--mode=file-cache \
	--help
```
