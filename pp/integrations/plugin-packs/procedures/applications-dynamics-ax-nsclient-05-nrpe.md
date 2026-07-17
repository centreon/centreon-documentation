---
id: applications-dynamics-ax-nsclient-05-nrpe
title: Dynamics AX NSClient 0.5 NRPE
description: Monitor Dynamics AX via NSClient++ and NRPE, tracking RIS import file processing and the RecurringIntegrationsScheduler service.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This Monitoring Connector collects metrics and statuses using the NSClient++ 
monitoring agent and its embedded NRPE Server. The connector allows you to monitor:
* Windows Server OS from 2003 SP2 version
* Windows workstations from the XP version

## Pack assets

### Templates

The Monitoring Connector **Dynamics AX NSClient 0.5 NRPE** brings a host template:

* **App-Dynamics-AX-NRPE-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Dynamics-AX-NRPE-custom" label="App-Dynamics-AX-NRPE-custom">

| Service Alias               | Service Template                                        | Service Description                                       |
|:----------------------------|:--------------------------------------------------------|:----------------------------------------------------------|
| RIS-Import-Input            | App-Dynamics-AX-RIS-Import-Input-NRPE-custom            | Check import files presence                               | 
| RIS-Import-ProcessingErrors | App-Dynamics-AX-RIS-Import-ProcessingErrors-NRPE-custom | Check files importation failure                           |
| Service-RIS                 | App-Dynamics-AX-Service-RIS-NRPE-custom                 | Check state of the RecurringIntegrationsScheduler service |

> The services listed above are created automatically when the **App-Dynamics-AX-NRPE-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

| Name  | Unit  |
|:------|:------|
| count | count |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Name  | Unit |
|:------|:----- |
| count | count |

</TabItem>
<TabItem value="Service-RIS" label="Service-RIS">

No metric for this service.

</TabItem>
</Tabs>

## Prerequisites

### Centreon NSClient++

To monitor a Dynamics AX server through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) 
and make sure that the **NRPE Server** configuration is correct.

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-dynamics-ax-nsclient-05-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-dynamics-ax-nsclient-05-nrpe
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-dynamics-ax-nsclient-05-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-dynamics-ax-nsclient-05-nrpe
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Windows NSClient API** connector through
the **Configuration > Monitoring Connectors Manager** menu.

### Plugin

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-windows-restapi
apt install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
yum install centreon-nrpe3-plugin
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Dynamics-AX-NRPE-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro            | Description                                                                                                                      | Default value | Mandatory |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| NRPECLIENT       | Name of the plugin to use to talk with the NRPE3 daemon                                                                          | check_nrpe    |           |
| NRPEPORT         | TCP port the NRPE3 daemon is listening on                                                                                        | 5666          |           |
| NRPETIMEOUT      | Command timeout                                                                                                                  | 30            |           |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) | -u -2 -P 8192 |           |
| EXTRAOPTIONS     | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

| Macro        | Description                                                                                                                    | Default value                                                    | Mandatory |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|:---------:|
| PATHS        | The path to search for files under                                                                                             | C:/RIS/Import/RIS General Ledger/Input                           |           |
| PATTERN      | The pattern of files to search for (works like a filter but is faster and can be combined with a filter)                       | *.xlsx                                                           |           |
| TOPSYNTAX    | The top level syntax string                                                                                                    | $\{status}: $\{problem_count}/$\{count} files ($\{problem_list}) |           |
| DETAILSYNTAX | Detail level syntax                                                                                                            | $\{name}                                                         |           |
| FILTER       | Filter which marks interesting items.                                                                                          | none                                                             |           |
| WARNING      | Filter which marks items which generates a warning state.                                                                      | count > 5                                                        |           |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                     | age > -1d or count > 20                                          |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | "empty-state=ok" show-all                                        |           |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Macro        | Description                                                                                                                    | Default value                                                    | Mandatory |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|:---------:|
| PATHS        | The path to search for files under                                                                                             | C:/RIS/Import/RIS General Ledger/ProcessingErrors                |           |
| PATTERN      | The pattern of files to search for (works like a filter but is faster and can be combined with a filter)                       | *.xlsx                                                           |           |
| TOPSYNTAX    | The top level syntax string                                                                                                    | $\{status}: $\{problem_count}/$\{count} files ($\{problem_list}) |           |
| DETAILSYNTAX | Detail level syntax                                                                                                            | $\{name}                                                         |           |
| FILTER       | Filter which marks interesting items.                                                                                          | none                                                             |           |
| WARNING      | Filter which marks items which generates a warning state.                                                                      | count > 5                                                        |           |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                     | age > -1d or count > 20                                          |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | "empty-state=ok" show-all                                        |           |

</TabItem>
<TabItem value="Service-RIS" label="Service-RIS">

| Macro        | Description                                                                                                                    | Default value                       | Mandatory |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|:---------:|
| EXCLUDE      | A list of services to ignore (mainly useful in combination with service=*)                                                     |                                     |           |
| OK           | Filter which marks items which generates an ok state                                                                           | state_is_ok()                       |           |
| SERVICE      | The service to check, set this to * to check all services                                                                      | RecurringIntegrationsScheduler      |           |
| TOPSYNTAX    | The top level syntax string                                                                                                    | $\{problem_list}                    |           |
| DETAILSYNTAX | Detail level syntax                                                                                                            | $\{name}=$\{state} ($\{start_type}) |           |
| FILTER       | Filter which marks interesting items.                                                                                          | none                                |           |
| WARNING      | Filter which marks items which generates a warning state.                                                                      | none                                |           |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                     | not state_is_ok()                   |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | 'perf-config=none'                  |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks) if you cannot find the solution to your issue below.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib64/nagios/plugins//check_nrpe -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::windows::local::plugin' 'query'  ' \
	--list-mode
	
```

The plugin brings the following modes:

| Mode                                                                                                                                | Linked service template                                                                                                                                |
|:------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/certificates.pm)]          | Not used in this Monitoring Connector                                                                                                                  |
| cmd-return [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/cmdreturn.pm)]               | Not used in this Monitoring Connector                                                                                                                  |
| list-certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/listcertificates.pm)] | Not used in this Monitoring Connector                                                                                                                  |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/liststorages.pm)]         | Not used in this Monitoring Connector                                                                                                                  |
| pending-reboot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/pendingreboot.pm)]       | Not used in this Monitoring Connector                                                                                                                  |
| query [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/nsclient/restapi/mode/query.pm)]                   | App-Dynamics-AX-RIS-Import-Input-NRPE-custom<br />App-Dynamics-AX-RIS-Import-ProcessingErrors-NRPE-custom<br />App-Dynamics-AX-Service-RIS-NRPE-custom |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/sessions.pm)]                  | Not used in this Monitoring Connector                                                                                                                  |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/ntp.pm)]                           | Not used in this Monitoring Connector                                                                                                                  |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/updates.pm)]                    | Not used in this Monitoring Connector                                                                                                                  |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Service-RIS" label="Service-RIS">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib64/nagios/plugins//check_nrpe -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::windows::local::plugin' 'query'  ' \
	--help
```