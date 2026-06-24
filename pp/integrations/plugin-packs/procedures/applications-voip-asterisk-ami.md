---
id: applications-voip-asterisk-ami
slug: /applications-voip-asterisk-ami
title: Asterisk VoIP AMI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Asterisk VoIP AMI** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Asterisk VoIP AMI** brings a host template:

* **App-VoIP-Asterisk-AMI-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-VoIP-Asterisk-AMI-custom" label="App-VoIP-Asterisk-AMI-custom">

| Service Alias   | Service Template                             | Service Description                |
|:----------------|:---------------------------------------------|:-----------------------------------|
| Channel-Usage   | App-Voip-Asterisk-AMI-Channel-Usage-custom   | Check number of calls and channels |
| Sip-Peers-Usage | App-Voip-Asterisk-AMI-Sip-Peers-Usage-custom | Check SIP peers usage              |

> The services listed above are created automatically when the **App-VoIP-Asterisk-AMI-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                          | Service Description         |
|:--------------|:------------------------------------------|:----------------------------|
| Dahdi-Status  | App-Voip-Asterisk-AMI-Dahdi-Status-custom | Check status of dahdi lines |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Channel-Usage" label="Channel-Usage">

| Name                  | Unit  |
|:----------------------|:------|
| channels.active.count | count |
| calls.active.count    | count |
| extcalls.active.count | count |
| calls.processed.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Dahdi-Status" label="Dahdi-Status">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Sip-Peers-Usage" label="Sip-Peers-Usage">

| Name                              | Unit  |
|:----------------------------------|:------|
| sip.peers.total.count             | count |
| sip.peers.monitor.online.count    | count |
| sip.peers.monitor.offline.count   | count |
| sip.peers.unmonitor.online.count  | count |
| sip.peers.unmonitor.offline.count | count |
| status                            | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

### Asterisk Manager Interface (AMI)

In order to collect the necessary metrics and status, a user account with the
"read" permission needs to be configured in the **/etc/asterisk/manager.conf** file.
More information in the [official documentation](https://wiki.asterisk.org/wiki/pages/viewpage.action?pageId=4817239).

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
dnf install centreon-pack-applications-voip-asterisk-ami
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-voip-asterisk-ami
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-voip-asterisk-ami
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-voip-asterisk-ami
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Asterisk VoIP AMI** connector through
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
dnf install centreon-plugin-Applications-Voip-Asterisk-Ami
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Voip-Asterisk-Ami
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-voip-asterisk-ami
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Voip-Asterisk-Ami
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-VoIP-Asterisk-AMI-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                   | Description                                                                                          | Default value     | Mandatory   |
|:------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ASTERISKAMIUSERNAME     | AMI username                                                                                         |                   | X           |
| ASTERISKAMIPASSWORD     | AMI password                                                                                         |                   | X           |
| ASTERISKAMIPORT         | AMI port (default: 5038)                                                                             |                   |             |
| ASTERISKAMIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Channel-Usage" label="Channel-Usage">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCALLSACTIVE     | Threshold                                                                                          |                   |             |
| CRITICALCALLSACTIVE    | Threshold                                                                                          |                   |             |
| WARNINGCALLSCOUNT      | Threshold                                                                                          |                   |             |
| CRITICALCALLSCOUNT     | Threshold                                                                                          |                   |             |
| WARNINGCHANNELSACTIVE  | Threshold                                                                                          |                   |             |
| CRITICALCHANNELSACTIVE | Threshold                                                                                          |                   |             |
| WARNINGEXTCALLSACTIVE  | Threshold                                                                                          |                   |             |
| CRITICALEXTCALLSACTIVE | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Dahdi-Status" label="Dahdi-Status">

| Macro             | Description                                                                                                                                                                           | Default value                            | Mandatory   |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|:-----------:|
| FILTERDESCRIPTION | Filter dahdi description (can be a regexp)                                                                                                                                            |                                          |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /UNCONFIGURED\|YEL\|BLU/i'). You can use the following variables: %\{description\}, %\{status\} | %\{status\} =~ /UNCONFIGURED\|YEL\|BLU/i |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /RED/i'). You can use the following variables: %\{description\}, %\{status\}                   | %\{status\} =~ /RED/i                    |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                    | --verbose                                |             |

</TabItem>
<TabItem value="Sip-Peers-Usage" label="Sip-Peers-Usage">

| Macro                         | Description                                                                                                                                                             | Default value                     | Mandatory   |
|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| FILTERNAME                    | Filter sip peer name (can be a regexp)                                                                                                                                  |                                   |             |
| WARNINGMONITOROFFLINEPEERS    | Threshold                                                                                                                                                               |                                   |             |
| CRITICALMONITOROFFLINEPEERS   | Threshold                                                                                                                                                               |                                   |             |
| WARNINGMONITORONLINEPEERS     | Threshold                                                                                                                                                               |                                   |             |
| CRITICALMONITORONLINEPEERS    | Threshold                                                                                                                                                               |                                   |             |
| WARNINGSTATUS                 | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /LAGGED\|UNKNOWN/i'). You can use the following variables: %\{name\}, %\{status\} | %\{status\} =~ /LAGGED\|UNKNOWN/i |             |
| CRITICALSTATUS                | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /UNREACHABLE/i'). You can use the following variables: %\{name\}, %\{status\}    | %\{status\} =~ /UNREACHABLE/i     |             |
| WARNINGTOTALPEERS             | Threshold                                                                                                                                                               |                                   |             |
| CRITICALTOTALPEERS            | Threshold                                                                                                                                                               |                                   |             |
| WARNINGUNMONITOROFFLINEPEERS  | Threshold                                                                                                                                                               |                                   |             |
| CRITICALUNMONITOROFFLINEPEERS | Threshold                                                                                                                                                               |                                   |             |
| WARNINGUNMONITORONLINEPEERS   | Threshold                                                                                                                                                               |                                   |             |
| CRITICALUNMONITORONLINEPEERS  | Threshold                                                                                                                                                               |                                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                      | --verbose                         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_asterisk_ami.pl \
	--plugin=apps::voip::asterisk::ami::plugin  \
	--mode=channel-usage \
	--ami-hostname='10.0.0.1' \
	--ami-port='' \
	--ami-username='xxxxxx' \
	--ami-password='xxxxxx'  \
	--warning-channels-active='' \
	--critical-channels-active='' \
	--warning-calls-active='' \
	--critical-calls-active='' \
	--warning-calls-count='' \
	--critical-calls-count='' \
	--warning-extcalls-active='' \
	--critical-extcalls-active=''
```

The expected command output is shown below:

```bash
OK: channels active: 54 calls active: 73 external calls active: 5 calls count: 746 | 'channels.active.count'=54;;;0; 'calls.active.count'=73;0:100;0:200;0; 'extcalls.active.count'=5;;;0; 'calls.processed.count'=746;;;0;

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
/usr/lib/centreon/plugins/centreon_asterisk_ami.pl \
	--plugin=apps::voip::asterisk::ami::plugin  \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                 | Linked service template                      |
|:-------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| channel-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/voip/asterisk/ami/mode/channelusage.pm)]    | App-Voip-Asterisk-AMI-Channel-Usage-custom   |
| dahdi-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/voip/asterisk/ami/mode/dahdistatus.pm)]      | App-Voip-Asterisk-AMI-Dahdi-Status-custom    |
| sip-peers-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/voip/asterisk/ami/mode/sippeersusage.pm)] | App-Voip-Asterisk-AMI-Sip-Peers-Usage-custom |

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
| --ami-hostname                             |   AMI hostname (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --ami-port                                 |   AMI port (default: 5038).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --ami-username                             |   AMI username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --ami-password                             |   AMI password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  |   Set TCP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Channel-Usage" label="Channel-Usage">

| Option       | Description                                                                                            |
|:-------------|:-------------------------------------------------------------------------------------------------------|
| --warning-*  |   Warning threshold. Can be: 'channels-active', 'calls-active', 'extcalls-active',  'calls-count'.     |
| --critical-* |   Critical threshold. Can be: 'channels-active', 'calls-active', 'extcalls-active',  'calls-count'.    |

</TabItem>
<TabItem value="Dahdi-Status" label="Dahdi-Status">

| Option               | Description                                                                                                                                                                               |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-description |   Filter dahdi description (can be a regexp).                                                                                                                                             |
| --warning-status     |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /UNCONFIGURED\|YEL\|BLU/i'). You can use the following variables: %\{description\}, %\{status\}   |
| --critical-status    |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /RED/i'). You can use the following variables: %\{description\}, %\{status\}                     |

</TabItem>
<TabItem value="Sip-Peers-Usage" label="Sip-Peers-Usage">

| Option            | Description                                                                                                                                                                 |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     |   Filter sip peer name (can be a regexp).                                                                                                                                   |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /LAGGED\|UNKNOWN/i'). You can use the following variables: %\{name\}, %\{status\}   |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /UNREACHABLE/i'). You can use the following variables: %\{name\}, %\{status\}      |
| --warning-*       |   Warning threshold. Can be: 'total-peers', 'monitor-online-peers', 'monitor-offline-peers',  'unmonitor-online-peers', 'unmonitor-offline-peers'.                          |
| --critical-*      |   Critical threshold. Can be: 'total-peers', 'monitor-online-peers', 'monitor-offline-peers',  'unmonitor-online-peers', 'unmonitor-offline-peers'.                         |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_asterisk_ami.pl \
	--plugin=apps::voip::asterisk::ami::plugin  \
	--mode=channel-usage \
	--help
```
