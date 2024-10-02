---
id: network-aruba-orchestrator-restapi
title: Aruba Orchestrator Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Aruba Orchestrator Rest API** brings a host template:

* **Net-Aruba-Orchestrator-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Aruba-Orchestrator-Restapi-custom" label="Net-Aruba-Orchestrator-Restapi-custom">

| Service Alias | Service Template                                 | Service Description |
|:--------------|:-------------------------------------------------|:--------------------|
| Alarms        | Net-Aruba-Orchestrator-Alarms-Restapi-custom     | Check alarms        |
| Appliances    | Net-Aruba-Orchestrator-Appliances-Restapi-custom | Check appliances    |

> The services listed above are created automatically when the **Net-Aruba-Orchestrator-Restapi-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name                    | Description                            |
|:-----------------------------|:---------------------------------------|
| Aruba Orchestrator Appliance | Discover Aruba Orchestrator Appliances |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Metric name                    | Unit  |
|:-------------------------------|:------|
| alarms.severity.minor.count    | count |
| alarms.severity.warning.count  | count |
| alarms.severity.major.count    | count |
| alarms.severity.critical.count | count |
| status                         | N/A   |

</TabItem>
<TabItem value="Appliances" label="Appliances">

| Metric name               | Unit  |
|:--------------------------|:------|
| appliances.detected.count | count |
| *appliances*#status       | N/A   |

</TabItem>
</Tabs>

## Prerequisites

To control your Aruba Orchestrator, the Rest API must be configured.

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
dnf install centreon-pack-network-aruba-orchestrator-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-aruba-orchestrator-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-aruba-orchestrator-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-aruba-orchestrator-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Aruba Orchestrator Rest API** connector through
the **Configuration > Monitoring Connector Manager** menu.

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
dnf install centreon-plugin-Network-Aruba-Orchestrator-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Aruba-Orchestrator-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-aruba-orchestrator-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Aruba-Orchestrator-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Aruba-Orchestrator-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                              | Default value     | Mandatory   |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIACCESSTOKEN  | API token                                                                                                                                |                   | X           |
| APIPROTO        | Specify https if needed (default: 'https')                                                                                               | https             |             |
| APIPORT         | Port used (default: 443)                                                                                                                 | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Macro                    | Description                                                                                                                                         | Default value                     | Mandatory   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| FILTERHOSTNAME           | Filter alarms by hostname (can be a regexp)                                                                                                         |                                   |             |
| TIMEZONE                 | Set timezone for creation time (default is 'UTC')                                                                                                   |                                   |             |
| WARNINGSEVERITYWARNING   | Thresholds                                                                                                                                          |                                   |             |
| CRITICALSEVERITYWARNING  | Thresholds                                                                                                                                          |                                   |             |
| WARNINGSEVERITYCRITICAL  | Thresholds                                                                                                                                          |                                   |             |
| CRITICALSEVERITYCRITICAL | Thresholds                                                                                                                                          |                                   |             |
| WARNINGSEVERITYMAJOR     | Thresholds                                                                                                                                          |                                   |             |
| CRITICALSEVERITYMAJOR    | Thresholds                                                                                                                                          |                                   |             |
| WARNINGSEVERITYMINOR     | Thresholds                                                                                                                                          |                                   |             |
| CRITICALSEVERITYMINOR    | Thresholds                                                                                                                                          |                                   |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING. You can use the following variables: %{severity}, %{hostname}, %{name}, %{timeraised}  | %{severity} =~ /minor\|warning/i  |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{severity}, %{hostname}, %{name}, %{timeraised} | %{severity} =~ /major\|critical/i |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).              | --verbose                         |             |

</TabItem>
<TabItem value="Appliances" label="Appliances">

| Macro                      | Description                                                                                                                            | Default value                                           | Mandatory   |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS              | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{hostname}                | %{state} =~ /unknown\|unreachable/i                     |             |
| FILTERHOSTNAME             | Filter appliances by hostname                                                                                                          |                                                         |             |
| FILTERGROUP                | Filter appliances by group                                                                                                             |                                                         |             |
| WARNINGAPPLIANCESDETECTED  | Thresholds                                                                                                                             |                                                         |             |
| CRITICALAPPLIANCESDETECTED | Thresholds                                                                                                                             |                                                         |             |
| WARNINGSTATUS              | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{hostname}                | %{state} =~ /unsupportedVersion\|outOfSynchronization/i |             |
| CRITICALSTATUS             | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{hostname}               |                                                         |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                                               |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_aruba_orchestrator_restapi.pl \
	--plugin=network::aruba::orchestrator::restapi::plugin \
	--mode=appliances \
	--hostname='10.0.0.1' \
	--port='443' \
	--proto='https' \
	--access-token=''  \
	--filter-hostname='' \
	--filter-group='' \
	--unknown-status='%{state} =~ /unknown|unreachable/i' \
	--warning-status='%{state} =~ /unsupportedVersion|outOfSynchronization/i' \
	--critical-status='' \
	--warning-appliances-detected='' \
	--critical-appliances-detected='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: appliances detected: 2 - All appliances are ok | 'appliances.detected.count'=2;;;0;
appliance 'EU-FRA-IDF-PARIS-ARCHIVES-SP2' [group: Network > France > Paris] state: normal
appliance 'EU-FRA-IDF-SPATHUS-ARCHIVES-SP2' [group: Network > France > Saint-Pathus] state: normal
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
/usr/lib/centreon/plugins/centreon_aruba_orchestrator_restapi.pl \
	--plugin=network::aruba::orchestrator::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                     | Linked service template                          |
|:-----------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| alarms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/aruba/orchestrator/restapi/mode/alarms.pm)]         | Net-Aruba-Orchestrator-Alarms-Restapi-custom     |
| appliances [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/aruba/orchestrator/restapi/mode/appliances.pm)] | Net-Aruba-Orchestrator-Appliances-Restapi-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/aruba/orchestrator/restapi/mode/discovery.pm)]   | Used for host discovery                          |

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
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Aruba Orchestrator Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --access-token                             | API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --timeout                                  | Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Option                   | Description                                                                                                                                                                                          |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-hostname        | Filter alarms by hostname (can be a regexp).                                                                                                                                                         |
| --timezone               | Set timezone for creation time (default is 'UTC').                                                                                                                                                   |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: '%{severity} =~ /minor\|warning/i') You can use the following variables: %{severity}, %{hostname}, %{name}, %{timeraised}      |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{severity} =~ /major\|critical/i'). You can use the following variables: %{severity}, %{hostname}, %{name}, %{timeraised}   |
| --warning-* --critical-* | Thresholds. Can be: 'severity-minor', 'severity-warning', 'severity-major', 'severity-critical'.                                                                                                     |

</TabItem>
<TabItem value="Appliances" label="Appliances">

| Option                   | Description                                                                                                                                                                                    |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                                                           |
| --filter-hostname        | Filter appliances by hostname.                                                                                                                                                                 |
| --filter-group           | Filter appliances by group.                                                                                                                                                                    |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (default: '%{state} =~ /unknown\|unreachable/i'). You can use the following variables: %{state}, %{hostname}                       |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: '%{state} =~ /unsupportedVersion\|outOfSynchronization/i'). You can use the following variables: %{state}, %{hostname}   |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{hostname}                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'appliances-detected'.                                                                                                                                                     |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aruba_orchestrator_restapi.pl \
	--plugin=network::aruba::orchestrator::restapi::plugin \
	--mode=appliances \
	--help
```
