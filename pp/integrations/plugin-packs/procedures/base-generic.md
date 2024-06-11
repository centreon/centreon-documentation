---
id: base-generic
title: Base Pack
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Base-Generic pack is used by all the other packs. It provides host and service templates for both active and passive monitoring, as well as the Ping service.

## Pack Assets

### Templates

The Monitoring Connector **base-generic** brings 4 host templates:

* generic-active-host
* generic-passive-host
* generic-dummy-host
* Generic-Active-Cloud-Host

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="generic-active-host-custom" label="generic-active-host-custom">

| Service Alias  | Service Template                    | Service Description          |
|:---------------|:------------------------------------|:-----------------------------|
| Ping     | Base-Ping-LAN     | Check host response time                           |

</TabItem>
<TabItem value="generic-passive-host-custom" label="generic-passive-host-custom">
  
This host template is not linked to any service template.
</TabItem>
<TabItem value="generic-dummy-host-custom" label="generic-dummy-host-custom">

This host template is not linked to any service template.
</TabItem>
<TabItem value="Generic-Active-Cloud-Host-custom" label="Generic-Active-Cloud-Host-custom">

This host template is not linked to any service template.
</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias         | Service Template                           | Service Description                          |
|:----------------------|:------------------------------------------|:---------------------------------------------|
| generic-active-service | generic-active-service | Check service availability and status proactively |
| generic-passive-service     | generic-passive-service     | Check service status reactively based on received data|

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Base-Ping-LAN" label="Base-Ping-LAN">

| Metric name                             | Unit |
|:-------------------------------------|:------|
| rta        | ms     |
| pl        | %     |
| rtmax        | ms     |
| rtmin        | ms     |

</TabItem>
</Tabs>

## Prerequisites

This Monitoring Connector has no specific prerequisites except the Nagios ICMP plugin, which is installed by default on Centreon servers.

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="generic-dummy-host" label="generic-dummy-host">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Apply the **generic-dummy-host** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.

| Macro               | Description                      |
|:------------------|:---------------------------------|
| DUMMYSTATUS   | Host state. Default is OK, do not modify it unless you know what you are doing                   |
| DUMMYOUTPUT   | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed                |

</TabItem>
<TabItem value="generic-passive-host" label="generic-passive-host">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Apply the **generic-passive-host** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.

| Macro               | Description                      |
|:------------------|:---------------------------------|
| DUMMYSTATUS   | Host state. Default is OK, do not modify it unless you know what you are doing                   |
| DUMMYOUTPUT   | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed                |

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/onprem/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Ping" label="Ping">

| Macro        | Description        | Default Value |
| :----------- | :----------------- | :------------ |
| PACKETNUMBER | Number of packets   | 5             |
| WARNING      | Warning threshold  | 200,20%       |
| CRITICAL     | Critical Threshold | 400,50%       |

</TabItem>
<TabItem value="generic-passive-service" label="generic-passive-service">

| Macro        | Description        | Default Value |
| :----------- | :----------------- | :------------ |
| DUMMYSTATUS | Service state. Default is OK, do not modify it unless you know what you are doing       | OK             |
| DUMMYOUTPUT      |  Service check output. Default is 'Service is OK'. Customize it with your own if needed  | Service is OK       |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/nagios/plugins/check_icmp -H 10.0.0.1 -n 5 -w 200,20% -c 400,50%
```

The expected command output is shown below:

```bash
Ping rta=0,032ms;200,000;400,000;0; pl=0%;20;50;; rtmax=0,047ms;;;; rtmin=0,023ms;;;;
```

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
<TabItem value="Base-Ping-LAN" label="Base-Ping-LAN">

| Option              | Description                                                                                      |
|:--------------------|:-------------------------------------------------------------------------------------------------|
| -h, --help    | Print detailed help screen                                                                             |
| -V, --version    | Print version information                                                                           |
| -v, --verbose | Show details for command-line debugging (Nagios may truncate output)                                   |
| -s, --serverip=IPADDRESS     | IP address of DHCP server that we must hear from                                        |
| -r, --requestedip=IPADDRESS            | IP address that should be offered by at least one DHCP server                 |
| -t, --timeout=INTEGER            | Seconds to wait for DHCPOFFER before timeout occurs                                 |
| -i, --interface=STRING         | Interface to to use for listening (i.e. eth0)                                         |
| -m, --mac=STRING         | MAC address to use in the DHCP request                                                      |
| -u, --unicast            | Unicast testing: mimic a DHCP relay, requires -s                                            |

</TabItem>
</Tabs>
