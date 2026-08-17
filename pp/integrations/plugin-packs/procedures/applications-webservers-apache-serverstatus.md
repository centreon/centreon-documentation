---
id: applications-webservers-apache-serverstatus
title: Apache Server
description: "Monitor Apache web servers via the mod_status page: requests, response time, worker slots, and CPU load."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Apache Server** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Apache Server** brings a host template:

* **App-Webserver-Apache-ServerStatus-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Webserver-Apache-ServerStatus-custom" label="App-Webserver-Apache-ServerStatus-custom">

| Service Alias       | Service Template                         | Service Description                      |
|:--------------------|:-----------------------------------------|:-----------------------------------------|
| Apache-Requests     | App-Webserver-Apache-Requests-custom     | Check request informations               |
| Apache-ResponseTime | App-Webserver-Apache-ResponseTime-custom | Check response time of 'mod_status' page |
| Apache-SlotStates   | App-Webserver-Apache-SlotStates-custom   | Check slot informations                  |

> The services listed above are created automatically when the **App-Webserver-Apache-ServerStatus-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias  | Service Template                    | Service Description         |
|:---------------|:------------------------------------|:----------------------------|
| Apache-Cpuload | App-Webserver-Apache-Cpuload-custom | Check Apache Cpuload        |
| Apache-Workers | App-Webserver-Apache-Workers-custom | Check Apache busy processes |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Apache-Cpuload" label="Apache-Cpuload">

| Name    | Unit  |
|:--------|:------|
| cpuload | %     |

</TabItem>
<TabItem value="Apache-Requests" label="Apache-Requests">

| Name                | Unit  |
|:--------------------|:------|
| avg_RequestPerSec   | N/A   |
| bytesPerSec         | B     |
| avg_bytesPerRequest | B     |
| avg_bytesPerSec     | B     |
| accessPerSec        | N/A   |

</TabItem>
<TabItem value="Apache-ResponseTime" label="Apache-ResponseTime">

| Name | Unit  |
|:-----|:------|
| time | s     |

</TabItem>
<TabItem value="Apache-SlotStates" label="Apache-SlotStates">

| Name                                | Unit  |
|:------------------------------------|:------|
| apache.slot.busy.count              | count |
| apache.slot.free.count              | count |
| apache.slot.waiting.count           | count |
| apache.slot.starting.count          | count |
| apache.slot.reading.count           | count |
| apache.slot.sending.count           | count |
| apache.slot.keepalive.count         | count |
| apache.slot.dnslookup.count         | count |
| apache.slot.closing.count           | count |
| apache.slot.logging.count           | count |
| apache.slot.gracefulyfinished.count | count |
| apache.slot.idlecleanupworker.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Apache-Workers" label="Apache-Workers">

| Name         | Unit  |
|:-------------|:------|
| idle_workers | N/A   |
| busy_workers | N/A   |

</TabItem>
</Tabs>

## Connector dependencies

Before using this connector, make sure that the Apache server to be monitored is properly configured:

- The `mod_status` module must be enabled. It generates a real-time report on the server's status, which is used by Centreon.
- The `ExtendedStatus` directive must be enabled to collect detailed statistics.
- The `/server-status` page must be accessible **from the Centreon poller**, without authentication.
- The Centreon poller's IP address must be allowed in the Apache configuration.

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
dnf install centreon-pack-applications-webservers-apache-serverstatus
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-webservers-apache-serverstatus
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-webservers-apache-serverstatus
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-webservers-apache-serverstatus
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Apache Server** connector through
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
dnf install centreon-plugin-Applications-Webservers-Apache-Serverstatus
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Webservers-Apache-Serverstatus
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-webservers-apache-serverstatus
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Webservers-Apache-Serverstatus
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Webserver-Apache-ServerStatus-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro              | Description                                                                                          | Default value     | Mandatory   |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APACHEPROTOCOL     | Protocol used http or https                                                                          | http              |             |
| APACHEPORT         | Port used by Apache                                                                                  | 80                |             |
| APACHEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Apache-Cpuload" label="Apache-Cpuload">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical Threshold for CpuLoad                                                                     |                   |             |
| WARNING      | Warning Threshold for CpuLoad                                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Apache-Requests" label="Apache-Requests">

| Macro         | Description                                                                                        | Default value     | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL      | Critical Threshold for Request per seconds                                                         |                   |             |
| WARNING       | Warning Threshold for Request per seconds                                                          |                   |             |
| CRITICALBYTES | Critical Threshold for Bytes per seconds                                                           |                   |             |
| WARNINGBYTES  | Warning Threshold for Bytes per seconds                                                            |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Apache-ResponseTime" label="Apache-ResponseTime">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical threshold in seconds (server-status page response time)                                   | 2                 |             |
| WARNING      | Warning threshold in seconds (server-status page response time)                                    | 1                 |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Apache-SlotStates" label="Apache-SlotStates">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Threshold                                                                                          |                   |             |
| WARNING      | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Apache-Workers" label="Apache-Workers">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical Threshold (%) of busy workers                                                             |                   |             |
| WARNING      | Warning Threshold (%) of busy workers                                                              |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_apache_serverstatus.pl \
	--plugin=apps::apache::serverstatus::plugin \
	--mode=workers \
	--hostname=10.0.0.1 \
	--proto=http \
	--port=80  \
	--warning= \
	--critical=
```

The expected command output is shown below:

```bash
OK: Busy workers : 85695 Idle workers : 93363 | 'idle_workers'=93363;;;0; 'busy_workers'=85695;;;0;
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
/usr/lib/centreon/plugins/centreon_apache_serverstatus.pl \
	--plugin=apps::apache::serverstatus::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                               | Linked service template                  |
|:-----------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| cpuload [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/apache/serverstatus/mode/cpuload.pm)]           | App-Webserver-Apache-Cpuload-custom      |
| requests [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/apache/serverstatus/mode/requests.pm)]         | App-Webserver-Apache-Requests-custom     |
| responsetime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/apache/serverstatus/mode/responsetime.pm)] | App-Webserver-Apache-ResponseTime-custom |
| slotstates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/apache/serverstatus/mode/slotstates.pm)]     | App-Webserver-Apache-SlotStates-custom   |
| workers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/apache/serverstatus/mode/workers.pm)]           | App-Webserver-Apache-Workers-custom      |

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
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Apache-Cpuload" label="Apache-Cpuload">

| Option        | Description                                                                                                                                                                                                                                                                                                           |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    |   IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                 |
| --port        |   Port used by Apache                                                                                                                                                                                                                                                                                                 |
| --proto       |   Specify https if needed                                                                                                                                                                                                                                                                                             |
| --urlpath     |   Set path to get server-status page in auto mode (default: '/server-status/?auto')                                                                                                                                                                                                                                   |
| --credentials |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username    |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password    |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic       |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --header      |   Set HTTP headers (multiple option)                                                                                                                                                                                                                                                                                  |
| --warning     |   Warning Threshold for CpuLoad                                                                                                                                                                                                                                                                                       |
| --critical    |   Critical Threshold for CpuLoad                                                                                                                                                                                                                                                                                      |

</TabItem>
<TabItem value="Apache-Requests" label="Apache-Requests">

| Option                 | Description                                                                                                                                                                                                                                                                                                           |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                          |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                     |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                             |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                                                                                           |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                      |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                              |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                      |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                         |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                               |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                        |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                  |
| --hostname             |   IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                 |
| --port                 |   Port used by Apache                                                                                                                                                                                                                                                                                                 |
| --proto                |   Specify https if needed                                                                                                                                                                                                                                                                                             |
| --urlpath              |   Set path to get server-status page in auto mode (default: '/server-status/?auto')                                                                                                                                                                                                                                   |
| --credentials          |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username             |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password             |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic                |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout              |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --header               |   Set HTTP headers (multiple option)                                                                                                                                                                                                                                                                                  |
| --warning              |   Warning Threshold for Request per seconds                                                                                                                                                                                                                                                                           |
| --critical             |   Critical Threshold for Request per seconds                                                                                                                                                                                                                                                                          |
| --warning-bytes        |   Warning Threshold for Bytes per seconds                                                                                                                                                                                                                                                                             |
| --critical-bytes       |   Critical Threshold for Bytes per seconds                                                                                                                                                                                                                                                                            |
| --warning-access       |   Warning Threshold for Access per seconds                                                                                                                                                                                                                                                                            |
| --critical-access      |   Critical Threshold for Access per seconds                                                                                                                                                                                                                                                                           |

</TabItem>
<TabItem value="Apache-ResponseTime" label="Apache-ResponseTime">

| Option            | Description                                                                                                                                                                                                                                                                                                           |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname        |   IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                 |
| --port            |   Port used by Apache                                                                                                                                                                                                                                                                                                 |
| --proto           |   Specify https if needed                                                                                                                                                                                                                                                                                             |
| --urlpath         |   Set path to get server-status page in auto mode (default: '/server-status/?auto')                                                                                                                                                                                                                                   |
| --credentials     |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username        |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password        |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic           |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout         |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --header          |   Set HTTP headers (multiple option)                                                                                                                                                                                                                                                                                  |
| --unknown-status  |   Warning threshold for http response code                                                                                                                                                                                                                                                                            |
| --warning-status  |   Warning threshold for http response code                                                                                                                                                                                                                                                                            |
| --critical-status |   Critical threshold for http response code (default: '%\{http\_code\} \< 200 or %\{http\_code\} \>= 300')                                                                                                                                                                                                            |
| --warning         |   Warning threshold in seconds (server-status page response time)                                                                                                                                                                                                                                                     |
| --critical        |   Critical threshold in seconds (server-status page response time)                                                                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Apache-SlotStates" label="Apache-SlotStates">

| Option            | Description                                                                                                                                                                                                                                                                                                           |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                           |
| --hostname        |   IP Address or FQDN of the web server host                                                                                                                                                                                                                                                                           |
| --port            |   Port used by Apache                                                                                                                                                                                                                                                                                                 |
| --proto           |   Protocol used http or https                                                                                                                                                                                                                                                                                         |
| --urlpath         |   Set path to get server-status page in auto mode (default: '/server-status/?auto')                                                                                                                                                                                                                                   |
| --credentials     |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username        |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password        |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic           |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout         |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --header          |   Set HTTP headers (multiple option)                                                                                                                                                                                                                                                                                  |
| --units           |   Threshold unit (default: '%'. Can be: '%' or 'absolute')                                                                                                                                                                                                                                                            |
| --warning-*       |   Warning threshold. Can be: 'busy', 'free', 'waiting', 'starting', 'reading', 'sending', 'keepalive', 'dns-lookup', 'closing', 'logging', 'gracefuly-finished', 'idle-cleanup-worker'.                                                                                                                               |
| --critical-*      |   Critical threshold. Can be: 'busy', 'free', 'waiting', 'starting', 'reading', 'sending', 'keepalive', 'dns-lookup', 'closing', 'logging', 'gracefuly-finished', 'idle-cleanup-worker'.  =over 8)                                                                                                                    |

</TabItem>
<TabItem value="Apache-Workers" label="Apache-Workers">

| Option        | Description                                                                                                                                                                                                                                                                                                           |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    |   IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                 |
| --port        |   Port used by Apache                                                                                                                                                                                                                                                                                                 |
| --proto       |   Protocol to use http or https, http is default                                                                                                                                                                                                                                                                      |
| --urlpath     |   Set path to get server-status page in auto mode (default: '/server-status/?auto')                                                                                                                                                                                                                                   |
| --credentials |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username    |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password    |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic       |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --header      |   Set HTTP headers (multiple option)                                                                                                                                                                                                                                                                                  |
| --warning     |   Warning Threshold (%) of busy workers                                                                                                                                                                                                                                                                               |
| --critical    |   Critical Threshold (%) of busy workers                                                                                                                                                                                                                                                                              |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_apache_serverstatus.pl \
	--plugin=apps::apache::serverstatus::plugin \
	--mode=workers \
	--help
```
