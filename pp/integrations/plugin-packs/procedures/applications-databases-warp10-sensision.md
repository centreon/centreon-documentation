---
id: applications-databases-warp10-sensision
title: Warp10 Sensision
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Warp10 Sensision** brings a host template:

* **App-DB-Warp10-Sensision-Web-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-Warp10-Sensision-Web-custom" label="App-DB-Warp10-Sensision-Web-custom">

| Service Alias     | Service Template                                     | Service Description      |
|:------------------|:-----------------------------------------------------|:-------------------------|
| Fetch-Statistics  | App-DB-Warp10-Sensision-Fetch-Statistics-Web-custom  | Monitors statistics on "fetch" requests.  |
| Script-Statistics | App-DB-Warp10-Sensision-Script-Statistics-Web-custom | Monitors statistics on scripts and functions. |

> The services listed above are created automatically when the **App-DB-Warp10-Sensision-Web-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Fetch-Statistics" label="Fetch-Statistics">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| *fetchs*#fetch.calls.count                 | count |
| *fetchs*#fetch.calls.persecond             | N/A   |
| *fetchs*#fetch.bytes.values.bytes          | B     |
| *fetchs*#fetch.bytes.values.bytespersecond | B/s   |
| *fetchs*#fetch.bytes.keys.bytes            | B     |
| *fetchs*#fetch.bytes.keys.bytespersecond   | B/s   |
| *fetchs*#fetch.datapoints.count            | count |
| *fetchs*#fetch.datapoints.persecond        | N/A   |

</TabItem>
<TabItem value="Script-Statistics" label="Script-Statistics">

| Metric name                            | Unit  |
|:---------------------------------------|:------|
| time.total.microseconds                | us    |
| requests.count                         | count |
| requests.persecond                     | N/A   |
| ops.count                              | count |
| ops.persecond                          | N/A   |
| errors.count                           | count |
| errors.persecond                       | N/A   |
| bootstrap.loads.count                  | count |
| bootstrap.loads.persecond              | N/A   |
| *functions*#function.time.microseconds | us    |
| *functions*#function.uses.count        | count |
| *functions*#function.uses.persecond    | N/A   |

</TabItem>
</Tabs>

## Prerequisites

The SNMP service must be configured and activated on the host. Please refer to the official documentation from the constructor/editor.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-databases-warp10-sensision
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-warp10-sensision
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-databases-warp10-sensision
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-warp10-sensision
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Warp10 Sensision** connector through
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
dnf install centreon-plugin-Applications-Databases-Warp10-Sensision
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Warp10-Sensision
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-databases-warp10-sensision
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Warp10-Sensision
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-DB-Warp10-Sensision-Web-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro                       | Description                                                                                          | Default value     | Mandatory   |
|:----------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARP10SENSISIONUSERNAME     | Endpoint username                                                                                    |                   |             |
| WARP10SENSISIONPASSWORD     | Endpoint password                                                                                    |                   |             |
| WARP10SENSISIONPROTO        | Specify https if needed (default: 'http')                                                            | http              |             |
| WARP10SENSISIONPORT         | Port used (default: 80)                                                                              | 80                |             |
| WARP10SENSISIONURLPATH      | URL to scrape metrics from (default: '/metrics')                                                     | /metrics          |             |
| WARP10SENSISIONEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Fetch-Statistics" label="Fetch-Statistics">

| Macro                        | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERAPPNAME                | Filter app name (can be a regexp)                                                                  |                   |             |
| WARNINGBYTESKEYSCOUNT        | Thresholds.                                                                                        |                   |             |
| CRITICALBYTESKEYSCOUNT       | Thresholds.                                                                                        |                   |             |
| WARNINGBYTESKEYSPERSECOND    | Thresholds.                                                                                        |                   |             |
| CRITICALBYTESKEYSPERSECOND   | Thresholds.                                                                                        |                   |             |
| WARNINGBYTESVALUESCOUNT      | Thresholds.                                                                                        |                   |             |
| CRITICALBYTESVALUESCOUNT     | Thresholds.                                                                                        |                   |             |
| WARNINGBYTESVALUESPERSECOND  | Thresholds.                                                                                        |                   |             |
| CRITICALBYTESVALUESPERSECOND | Thresholds.                                                                                        |                   |             |
| WARNINGCALLSCOUNT            | Thresholds.                                                                                        |                   |             |
| CRITICALCALLSCOUNT           | Thresholds.                                                                                        |                   |             |
| WARNINGCALLSPERSECOND        | Thresholds.                                                                                        |                   |             |
| CRITICALCALLSPERSECOND       | Thresholds.                                                                                        |                   |             |
| WARNINGDATAPOINTSCOUNT       | Thresholds.                                                                                        |                   |             |
| CRITICALDATAPOINTSCOUNT      | Thresholds.                                                                                        |                   |             |
| WARNINGDATAPOINTSPERSECOND   | Thresholds.                                                                                        |                   |             |
| CRITICALDATAPOINTSPERSECOND  | Thresholds.                                                                                        |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Script-Statistics" label="Script-Statistics">

| Macro                           | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERAPPNAME                   | Filter function name (can be a regexp)                                                             |                   |             |
| WARNINGBOOTSTRAPLOADSCOUNT      | Thresholds.                                                                                        |                   |             |
| CRITICALBOOTSTRAPLOADSCOUNT     | Thresholds.                                                                                        |                   |             |
| WARNINGBOOTSTRAPLOADSPERSECOND  | Thresholds.                                                                                        |                   |             |
| CRITICALBOOTSTRAPLOADSPERSECOND | Thresholds.                                                                                        |                   |             |
| WARNINGBYTESVALUESCOUNT         | Thresholds.                                                                                        |                   |             |
| CRITICALBYTESVALUESCOUNT        | Thresholds.                                                                                        |                   |             |
| WARNINGCALLSCOUNT               | Thresholds.                                                                                        |                   |             |
| CRITICALCALLSCOUNT              | Thresholds.                                                                                        |                   |             |
| WARNINGCALLSPERSECOND           | Thresholds.                                                                                        |                   |             |
| CRITICALCALLSPERSECOND          | Thresholds.                                                                                        |                   |             |
| WARNINGERRORSCOUNT              | Thresholds.                                                                                        |                   |             |
| CRITICALERRORSCOUNT             | Thresholds.                                                                                        |                   |             |
| WARNINGERRORSPERSECOND          | Thresholds.                                                                                        |                   |             |
| CRITICALERRORSPERSECOND         | Thresholds.                                                                                        |                   |             |
| WARNINGOPSCOUNT                 | Thresholds.                                                                                        |                   |             |
| CRITICALOPSCOUNT                | Thresholds.                                                                                        |                   |             |
| WARNINGOPSPERSECOND             | Thresholds.                                                                                        |                   |             |
| CRITICALOPSPERSECOND            | Thresholds.                                                                                        |                   |             |
| WARNINGREQUESTSCOUNT            | Thresholds.                                                                                        |                   |             |
| CRITICALREQUESTSCOUNT           | Thresholds.                                                                                        |                   |             |
| WARNINGREQUESTSPERSECOND        | Thresholds.                                                                                        |                   |             |
| CRITICALREQUESTSPERSECOND       | Thresholds.                                                                                        |                   |             |
| WARNINGTIME                     | Thresholds.                                                                                        |                   |             |
| CRITICALTIME                    | Thresholds.                                                                                        |                   |             |
| WARNINGTIMETOTAL                | Thresholds.                                                                                        |                   |             |
| CRITICALTIMETOTAL               | Thresholds.                                                                                        |                   |             |
| WARNINGUSESCOUNT                | Thresholds.                                                                                        |                   |             |
| CRITICALUSESCOUNT               | Thresholds.                                                                                        |                   |             |
| WARNINGUSESPERSECOND            | Thresholds.                                                                                        |                   |             |
| CRITICALUSESPERSECOND           | Thresholds.                                                                                        |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_warp10_sensision.pl \
	--plugin=database::warp10::sensision::plugin \
	--mode=script-statistics \
	--custommode='web' \
	--hostname='10.0.0.1' \
	--port='80' \
	--proto='http' \
	--urlpath='/metrics' \
	--username='' \
	--password=''  \
	--filter-name='' \
	--warning-calls-count='' \
	--critical-calls-count='' \
	--warning-calls-persecond='' \
	--critical-calls-persecond='' \
	--warning-bytes-values-count='' \
	--critical-bytes-values-count='' \
	--warning-time='' \
	--critical-time='' \
	--warning-uses-count='' \
	--critical-uses-count='' \
	--warning-uses-persecond='' \
	--critical-uses-persecond='' \
	--warning-time-total='' \
	--critical-time-total='' \
	--warning-requests-count='' \
	--critical-requests-count='' \
	--warning-requests-persecond='' \
	--critical-requests-persecond='' \
	--warning-ops-count='' \
	--critical-ops-count='' \
	--warning-ops-persecond='' \
	--critical-ops-persecond='' \
	--warning-errors-count='' \
	--critical-errors-count='' \
	--warning-errors-persecond='' \
	--critical-errors-persecond='' \
	--warning-bootstrap-loads-count='' \
	--critical-bootstrap-loads-count='' \
	--warning-bootstrap-loads-persecond='' \
	--critical-bootstrap-loads-persecond='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: Time Spent: 57 us Requests: 17 Ops: 51 Errors: 84 Bootstrap Loads: 8 All functions statistics are ok | 'time.total.microseconds'=57us;;;0;'requests.count'=17;;;0;'requests.persecond'=91;;;0;'ops.count'=51;;;0;'ops.persecond'=35;;;0;'errors.count'=84;;;0;'errors.persecond'=66;;;0;'bootstrap.loads.count'=8;;;0;'bootstrap.loads.persecond'=51;;;0;'*functions*#function.time.microseconds'=us;;;0;'*functions*#function.uses.count'=;;;0;'*functions*#function.uses.persecond'=;;;0;
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
/usr/lib/centreon/plugins/centreon_warp10_sensision.pl \
	--plugin=database::warp10::sensision::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                         | Linked service template                              |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
| fetch-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/warp10/sensision/mode/fetchstatistics.pm)]   | App-DB-Warp10-Sensision-Fetch-Statistics-Web-custom  |
| script-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/warp10/sensision/mode/scriptstatistics.pm)] | App-DB-Warp10-Sensision-Script-Statistics-Web-custom |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_warp10_sensision.pl \
	--plugin=database::warp10::sensision::plugin \
	--list-custommode
```

The plugin brings the following custom modes:

* file
* web

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="file" label="file">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname             | Hostname to query (with ssh).                                                                                                                                                                                                                 |
| --command              | Command to get information (default: 'cat').                                                                                                                                                                                                  |
| --command-path         | Command path.                                                                                                                                                                                                                                 |
| --command-options      | Command options.                                                                                                                                                                                                                              |
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |

</TabItem>
<TabItem value="web" label="web">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname             | Endpoint hostname.                                                                                                                                                                                                                            |
| --port                 | Port used (default: 80)                                                                                                                                                                                                                       |
| --proto                | Specify https if needed (default: 'http')                                                                                                                                                                                                     |
| --urlpath              | URL to scrape metrics from (default: '/metrics').                                                                                                                                                                                             |
| --username             | Endpoint username.                                                                                                                                                                                                                            |
| --password             | Endpoint password.                                                                                                                                                                                                                            |
| --timeout              | Set HTTP timeout (default: 10).                                                                                                                                                                                                               |
| --http-peer-addr       | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                           |
| --proxyurl             | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                      |
| --proxypac             | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                |
| --insecure             | Accept insecure SSL connections.                                                                                                                                                                                                              |
| --http-backend         | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                       |
| --ssl-opt              | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                     |
| --curl-opt             | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                              |
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |

</TabItem>
</Tabs>

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Fetch-Statistics" label="Fetch-Statistics">

| Option                  | Description                                                                                                                                                            |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --ssh-backend           | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                     |
| --ssh-username          | Define the user name to log in to the host.                                                                                                                            |
| --ssh-password          | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.   |
| --ssh-port              | Define the TCP port on which SSH is listening.                                                                                                                         |
| --ssh-priv-key          | Define the private key file to use for user authentication.                                                                                                            |
| --sshcli-command        | ssh command (default: 'ssh').                                                                                                                                          |
| --sshcli-path           | ssh command path (default: none)                                                                                                                                       |
| --sshcli-option         | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                      |
| --plink-command         | plink command (default: 'plink').                                                                                                                                      |
| --plink-path            | plink command path (default: none)                                                                                                                                     |
| --plink-option          | Specify plink options (example: --plink-option='-T').                                                                                                                  |
| --libssh-strict-connect | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                    |
| --filter-name           | Filter app name (can be a regexp).                                                                                                                                     |
| --filter-counters       | Only display some counters (regexp can be used). Example: --filter-counters='calls'                                                                                    |
| --warning-*-count       | /persecondWarning threshold. Can be: 'calls', 'bytes-values', 'bytes-keys'.                                                                                            |
| --critical-*-count      | /persecondCritical threshold. Can be: 'calls', 'bytes-values', 'bytes-keys'.                                                                                           |

</TabItem>
<TabItem value="Script-Statistics" label="Script-Statistics">

| Option             | Description                                                                                                                            |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name      | Filter function name (can be a regexp).                                                                                                |
| --filter-counters  | Only display some counters (regexp can be used). Example: --filter-counters='^time$\|uses'                                             |
| --warning-*-count  | /persecondWarning threshold. Can be: 'time-total' (delta), 'requests', 'ops', 'errors', 'bootstrap-loads', 'time' (delta), 'uses'.     |
| --critical-*-count | /persecondCritical threshold. Can be: 'time-total' (delta), 'requests', 'ops', 'errors', 'bootstrap-loads', 'time' (delta), 'uses'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_warp10_sensision.pl \
	--plugin=database::warp10::sensision::plugin \
	--mode=script-statistics \
	--custommode='web' \
	--help
```
