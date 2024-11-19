---
id: applications-ipfabric-api
title: IP Fabric API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **IP Fabric API** brings a host template:

* **App-Ipfabric-Api-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Ipfabric-Api-custom" label="App-Ipfabric-Api-custom">

| Service Alias     | Service Template                          | Service Description |
|:------------------|:------------------------------------------|:--------------------|
| Path-Verification | App-Ipfabric-Path-Verification-Api-custom | Check paths' status |

> The services listed above are created automatically when the **App-Ipfabric-Api-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name                 | Description                                    |
|:--------------------------|:-----------------------------------------------|
| IP Fabric network devices | Discover network devices through IP Fabric API |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Path-Verification" label="Path-Verification">

| Metric name             | Unit  |
|:------------------------|:------|
| paths.detected.count    | count |
| paths.mismatch.count    | count |
| paths.state.all.count   | count |
| paths.state.part.count  | count |
| paths.state.none.count  | count |
| paths.state.error.count | count |
| paths#status            | N/A   |

</TabItem>
</Tabs>

## Prerequisites

Ensure you have an IP Fabric API Key with required privileges and IP Fabric's API address.

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
dnf install centreon-pack-applications-ipfabric-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-ipfabric-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-ipfabric-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-ipfabric-api
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **IP Fabric API** connector through
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
dnf install centreon-plugin-Applications-Ipfabric-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Ipfabric-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-ipfabric-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Ipfabric-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Ipfabric-Api-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                           | Default value     | Mandatory   |
|:----------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIHOSTNAME     | Set hostname, it is mandatory                                                                         |                   | X           |
| APIKEY          | Set API key to request IP Fabric API                                                                  |                   | X           |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Path-Verification" label="Path-Verification">

| Macro                   | Description                                                                                                                                                                                                                                                                                                          | Default value                  | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:-----------:|
| FILTERSRCIP             | Filter paths by source ip (regexp can be used)                                                                                                                                                                                                                                                                       |                                |             |
| FILTERSRCPORT           | Filter paths by source port (regexp can be used)                                                                                                                                                                                                                                                                     |                                |             |
| FILTERDSTIP             | Filter paths by destionation ip (regexp can be used)                                                                                                                                                                                                                                                                 |                                |             |
| FILTERDSTPORT           | Filter paths by destionation port (regexp can be used)                                                                                                                                                                                                                                                               |                                |             |
| WARNINGPATHSDETECTED    | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| CRITICALPATHSDETECTED   | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| WARNINGPATHSMISMATCH    | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| CRITICALPATHSMISMATCH   | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| WARNINGPATHSSTATEALL    | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| CRITICALPATHSSTATEALL   | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| WARNINGPATHSSTATEERROR  | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| CRITICALPATHSSTATEERROR | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| WARNINGPATHSSTATENONE   | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| CRITICALPATHSSTATENONE  | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| WARNINGPATHSSTATEPART   | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| CRITICALPATHSSTATEPART  | Thresholds                                                                                                                                                                                                                                                                                                           |                                |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL. (Default: '%\{expected_state\} ne %\{state\}'). Can use special variables like: %\{state\}, %\{expected_state\}  For example, if you want a critical alert when the path state is in 'error' then the option would be: --critical-status="%\{state\} eq 'all'" | %\{expected_state\} ne %\{state\} |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING. Can use special variables like: %\{state\}, %\{expected_state\}  For example, if you want a warning alert when the path state is in 'error' then the option would be: --warning-status="%\{state\} eq 'all'"                                                 |                                |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                                                                                  | --http-backend=curl            |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_ipfabric_api.pl \
    --plugin=apps::ipfabric::plugin \
    --mode=path-verification \
    --api-key='****' \
    --hostname='demo1.eu.ipfabric.io' \
    --verbose
```

The expected command output is shown below:

```bash
CRITICAL: source 10.35.119.172:- destination 10.193.0.132:- [protocol: icmp] state: none [expected state: all] - source 10.72.126.112:1024-65535 destination 10.66.121.110:80,443 [protocol: tcp] state: none [expected state: all] - source 10.66.126.112:10000 destination 10.38.115.190:443 [protocol: tcp] state: none [expected state: all] | 'paths.detected.count'=6;;;0; 'paths.mismatch.count'=3;;;0; 'paths.state.all.count'=0;;;0; 'paths.state.part.count'=0;;;0; 'paths.state.none.count'=6;;;0; 'paths.state.error.count'=0;;;0;
source 10.35.119.172:- destination 10.193.0.132:- [protocol: icmp] state: none [expected state: all]
source 10.35.119.172/26:1024-65535 destination 10.193.0.132:1-60000 [protocol: tcp] state: none [expected state: none]
source 10.35.119.172/24:1024-65535 destination 10.193.0.132:80 [protocol: tcp] state: none [expected state: none]
source 10.72.126.112:1024-65535 destination 10.66.121.110:80,443 [protocol: tcp] state: none [expected state: all]
source 10.66.126.112:10000 destination 10.38.115.190:443 [protocol: tcp] state: none [expected state: all]
source 10.35.119.172/28:1024-65535 destination 10.193.0.132/28:1-60000 [protocol: tcp] state: none [expected state: none]
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_ipfabric_api.pl \
	--plugin=apps::ipfabric::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode                       | Linked service template               |
|:---------------------------|:--------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/discovery.pm)]                                  | Used for host discovery                   |
| path-verification [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ipfabric/mode/pathverification.pm)]                                | App-Ipfabric-Path-Verification-Api-custom |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_ipfabric_api.pl \
	--plugin=apps::ipfabric::plugin \
    --list-custommode
```

The plugin brings the following custom modes:

* api

### Available options

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option           | Description                                                                                                                        | Type         |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --hostname       | Set hostname, it is mandatory.                                                                                                     | Api          |
| --snapshot-id    | Specify snapshot id from which you want to base monitoring.  If no snapshot id is specified, the last one is set by default.       | Api          |
| --port           | Port used (Default: 443)                                                                                                           | Api          |
| --proto          | Specify http if needed (Default: 'https')                                                                                          | Api          |
| --api-key        | Set API key to request IP Fabric API.                                                                                              | Api          |
| --timeout        | Set timeout in seconds (Default: 10).                                                                                              | Api          |
| --http-peer-addr | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                | Http global  |
| --proxyurl       | Proxy URL. Eg: http://my.proxy:3128                                                                                                | Http global  |
| --proxypac       | Proxy pac file (can be a URL or a local file).                                                                                     | Http global  |
| --insecure       | Accept insecure SSL connections.                                                                                                   | Http global  |
| --http-backend   | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                            | Http global  |
| --ssl-opt        | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                          | Backend lwp  |
| --curl-opt       | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).   | Backend curl |

</TabItem>
</Tabs>


#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Path-Verification" label="Path-Verification">

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      IP Fabric API module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --hostname                                 | Set hostname, it is mandatory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snapshot-id                              | Specify snapshot id from which you want to base monitoring.  If no snapshot id is specified, the last one is set by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify http if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-key                                  | Set API key to request IP Fabric API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timeout                                  | Set timeout in seconds (Default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-src-ip                            | Filter paths by source ip (regexp can be used).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --filter-src-port                          | Filter paths by source port (regexp can be used).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --filter-dst-ip                            | Filter paths by destionation ip (regexp can be used).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-dst-port                          | Filter paths by destionation port (regexp can be used).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --warning-status                           | Define the conditions to match for the status to be WARNING. Can use special variables like: %\{state\}, %\{expected_state\}  For example, if you want a warning alert when the path state is in 'error' then the option would be: --warning-status="%\{state\} eq 'all'"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --critical-status                          | Define the conditions to match for the status to be CRITICAL. (Default: '%\{expected_state\} ne %\{state\}'). Can use special variables like: %\{state\}, %\{expected_state\}  For example, if you want a critical alert when the path state is in 'error' then the option would be: --critical-status="%\{state\} eq 'all'"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --warning-* --critical-*                   | Thresholds. Can be: 'paths-detected', 'paths-mismatch', 'paths-state-all', 'paths-state-part', 'paths-state-none', 'paths-state-error'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ipfabric_api.pl \
	--plugin=apps::ipfabric::plugin \
	--mode=path-verification \
	--help
```
