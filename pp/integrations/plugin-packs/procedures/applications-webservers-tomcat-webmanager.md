---
id: applications-webservers-tomcat-webmanager
title: Tomcat Webmanager
description: "Monitor Apache Tomcat via the Tomcat Manager web app over HTTP/HTTPS: application status, connector traffic/threads, and memory usage."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Tomcat Webmanager** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Tomcat Webmanager** brings 2 host templates:

* **App-Webserver-Tomcat6-Webmanager-custom**
* **App-Webserver-Tomcat7-Webmanager-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Webserver-Tomcat6-Webmanager-custom" label="App-Webserver-Tomcat6-Webmanager-custom">

| Service Alias              | Service Template                                | Service Description                                   |
|:---------------------------|:------------------------------------------------|:------------------------------------------------------|
| Tomcat-Applications-Global | App-Webserver-Tomcat-Applications-Global-custom | Check status of Tomcat applications                   |
| Tomcat-Connectors-Global   | App-Webserver-Tomcat-Connectors-Global-custom   | Check Tomcat metrics (request count, error count,...) |
| Tomcat-Memory              | App-Webserver-Tomcat-Memory-custom              | Check Tomcat memory                                   |

> The services listed above are created automatically when the **App-Webserver-Tomcat6-Webmanager-custom** host template is used.

</TabItem>
<TabItem value="App-Webserver-Tomcat7-Webmanager-custom" label="App-Webserver-Tomcat7-Webmanager-custom">

| Service Alias              | Service Template                                | Service Description                                   |
|:---------------------------|:------------------------------------------------|:------------------------------------------------------|
| Tomcat-Applications-Global | App-Webserver-Tomcat-Applications-Global-custom | Check status of Tomcat applications                   |
| Tomcat-Connectors-Global   | App-Webserver-Tomcat-Connectors-Global-custom   | Check Tomcat metrics (request count, error count,...) |
| Tomcat-Memory              | App-Webserver-Tomcat-Memory-custom              | Check Tomcat memory                                   |

> The services listed above are created automatically when the **App-Webserver-Tomcat7-Webmanager-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Tomcat-Applications-Global" label="Tomcat-Applications-Global">

| Name                                            | Unit  |
|:------------------------------------------------|:------|
| status                                          | N/A   |
| *application*#application.sessions.active.count | count |

</TabItem>
<TabItem value="Tomcat-Connectors-Global" label="Tomcat-Connectors-Global">

| Name                                                              | Unit  |
|:------------------------------------------------------------------|:------|
| *connector1*#connector.threads.current.count                      | count |
| *connector2*#connector.threads.current.count                      | count |
| *connector1*#connector.threads.busy.count                         | count |
| *connector2*#connector.threads.busy.count                         | count |
| *connector1*#connector.traffic.in.bitspersecond                   | b/s   |
| *connector2*#connector.traffic.in.bitspersecond                   | b/s   |
| *connector1*#connector.traffic.in.percent                         | %     |
| *connector2*#connector.traffic.in.percent                         | %     |
| *connector1*#connector.traffic.out.bitspersecond                  | b/s   |
| *connector2*#connector.traffic.out.bitspersecond                  | b/s   |
| *connector1*#connector.traffic.out.percent                        | %     |
| *connector2*#connector.traffic.out.percent                        | %     |
| *connector1*#connector.requests.processingtime.total.milliseconds | ms    |
| *connector2*#connector.requests.processingtime.total.milliseconds | ms    |
| *connector1*#connector.requests.errors.count                      | count |
| *connector2*#connector.requests.errors.count                      | count |
| *connector1*#connector.requests.total.count                       | count |
| *connector2*#connector.requests.total.count                       | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Tomcat-Memory" label="Tomcat-Memory">

| Name                    | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

The Tomcat Manager application must be installed, running, and accessible from the Centreon poller using the defined protocol, port, and URL.

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
dnf install centreon-pack-applications-webservers-tomcat-webmanager
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-webservers-tomcat-webmanager
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-webservers-tomcat-webmanager
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-webservers-tomcat-webmanager
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Tomcat Webmanager** connector through
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
dnf install centreon-plugin-Applications-Webservers-Tomcat-Webmanager
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Webservers-Tomcat-Webmanager
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-webservers-tomcat-webmanager
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Webservers-Tomcat-Webmanager
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="App-Webserver-Tomcat6-Webmanager-custom" label="App-Webserver-Tomcat6-Webmanager-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Webserver-Tomcat6-Webmanager-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                                                                          | Default value            | Mandatory   |
|:---------------------|:-----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| TOMCATPROTOCOL       | Protocol used http or https                                                                          | http                     |             |
| TOMCATPORT           | Port used by Tomcat                                                                                  | 8080                     |             |
| URLPATHMANAGERLIST   | Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                 | /manager/list            |             |
| URLPATHMANAGERSTATUS | Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                 | /manager/status?XML=true |             |
| TOMCATEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                          |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="App-Webserver-Tomcat7-Webmanager-custom" label="App-Webserver-Tomcat7-Webmanager-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Webserver-Tomcat7-Webmanager-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                                                                          | Default value            | Mandatory   |
|:---------------------|:-----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| TOMCATPROTOCOL       | Protocol used http or https                                                                          | http                     |             |
| TOMCATPORT           | Port used by Tomcat                                                                                  | 8080                     |             |
| URLPATHMANAGERLIST   | Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                 | /manager/text/list       |             |
| URLPATHMANAGERSTATUS | Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                 | /manager/status?XML=true |             |
| TOMCATEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                          |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Tomcat-Applications-Global" label="Tomcat-Applications-Global">

| Macro                  | Description                                                                                                                                                      | Default value           | Mandatory   |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (default: '%\{state\} ne "running"'). You can use the following variables: %\{state\}, %\{display\}  | %\{state\} ne "running" |             |
| FILTERNAME             | Filter context name (regexp can be used)                                                                                                                         |                         |             |
| WARNINGSESSIONSACTIVE  | Threshold                                                                                                                                                        |                         |             |
| CRITICALSESSIONSACTIVE | Threshold                                                                                                                                                        |                         |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} eq "stopped"'). You can use the following variables: %\{state\}, %\{display\} | %\{state\} eq "stopped" |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{display\}                         |                         |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                               | --verbose               |             |

</TabItem>
<TabItem value="Tomcat-Connectors-Global" label="Tomcat-Connectors-Global">

| Macro                               | Description                                                                                        | Default value     | Mandatory   |
|:------------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                              | Filter by connector name (can be a regexp)                                                         |                   |             |
| WARNINGREQUESTSERRORS               | Threshold                                                                                          |                   |             |
| CRITICALREQUESTSERRORS              | Threshold                                                                                          |                   |             |
| WARNINGREQUESTSPROCESSINGTIMETOTAL  | Threshold                                                                                          |                   |             |
| CRITICALREQUESTSPROCESSINGTIMETOTAL | Threshold                                                                                          |                   |             |
| WARNINGREQUESTSTOTAL                | Threshold                                                                                          |                   |             |
| CRITICALREQUESTSTOTAL               | Threshold                                                                                          |                   |             |
| WARNINGTHREADSBUSY                  | Threshold                                                                                          |                   |             |
| CRITICALTHREADSBUSY                 | Threshold                                                                                          |                   |             |
| WARNINGTHREADSCURRENT               | Threshold                                                                                          |                   |             |
| CRITICALTHREADSCURRENT              | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICIN                    | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICIN                   | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICINPRCT                | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICINPRCT               | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICOUT                   | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICOUT                  | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICOUTPRCT               | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICOUTPRCT              | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Tomcat-Memory" label="Tomcat-Memory">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGE      | Threshold                                                                                          |                   |             |
| CRITICALUSAGE     | Threshold                                                                                          |                   |             |
| WARNINGUSAGEFREE  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEFREE | Threshold                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_tomcat_webmanager.pl \
	--plugin=apps::tomcat::web::plugin \
	--mode=connectors \
	--hostname=10.0.0.1 \
	--proto=http \
	--port=8080  \
	--urlpath='/manager/status?XML=true'  \
	--filter-name='' \
	--warning-threads-current='' \
	--critical-threads-current='' \
	--warning-threads-busy='' \
	--critical-threads-busy='' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-traffic-in-prct='' \
	--critical-traffic-in-prct='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--warning-traffic-out-prct='' \
	--critical-traffic-out-prct='' \
	--warning-requests-processingtime-total='' \
	--critical-requests-processingtime-total='' \
	--warning-requests-errors='' \
	--critical-requests-errors='' \
	--warning-requests-total='' \
	--critical-requests-total='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All connectors are ok | 'connector1#connector.threads.current.count'=99239;;;0;maxThreads 'connector2#connector.threads.current.count'=88646;;;0;maxThreads 'connector1#connector.threads.busy.count'=49356;;;0;maxThreads 'connector2#connector.threads.busy.count'=46076;;;0;maxThreads 'connector1#connector.traffic.in.bitspersecond'=88513b/s;;;0;speed 'connector2#connector.traffic.in.bitspersecond'=37427b/s;;;0;speed 'connector1#connector.traffic.in.percent'=22944%;;;0;100 'connector2#connector.traffic.in.percent'=40955%;;;0;100 'connector1#connector.traffic.out.bitspersecond'=28547b/s;;;0;speed 'connector2#connector.traffic.out.bitspersecond'=69608b/s;;;0;speed 'connector1#connector.traffic.out.percent'=42673%;;;0;100 'connector2#connector.traffic.out.percent'=83700%;;;0;100 'connector1#connector.requests.processingtime.total.milliseconds'=76540ms;;;0; 'connector2#connector.requests.processingtime.total.milliseconds'=65416ms;;;0; 'connector1#connector.requests.errors.count'=78599;;;0; 'connector2#connector.requests.errors.count'=41132;;;0; 'connector1#connector.requests.total.count'=76791;;;0; 'connector2#connector.requests.total.count'=14773;;;0;
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
/usr/lib/centreon/plugins/centreon_tomcat_webmanager.pl \
	--plugin=apps::tomcat::web::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                             | Linked service template                         |
|:---------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| applications [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/web/mode/applications.pm)]        | App-Webserver-Tomcat-Applications-Global-custom |
| connectors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/web/mode/connectors.pm)]            | App-Webserver-Tomcat-Connectors-Global-custom   |
| list-application [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/web/mode/listapplication.pm)] | Not used in this Monitoring Connector           |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/web/mode/memory.pm)]                    | App-Webserver-Tomcat-Memory-custom              |

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
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
<TabItem value="Tomcat-Applications-Global" label="Tomcat-Applications-Global">

| Option                   | Description                                                                                                                                                                                                                                                                                                           |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname               |   IP Address or FQDN of the Tomcat Application Server                                                                                                                                                                                                                                                                 |
| --port                   |   Port used by Tomcat                                                                                                                                                                                                                                                                                                 |
| --proto                  |   Protocol used http or https                                                                                                                                                                                                                                                                                         |
| --credentials            |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username               |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password               |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic                  |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout                |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --urlpath                |   Path to the Tomcat Manager List (default: Tomcat 7 '/manager/text/list') Tomcat 6: '/manager/list' Tomcat 7: '/manager/text/list'                                                                                                                                                                                   |
| --filter-name            |   Filter context name (regexp can be used)                                                                                                                                                                                                                                                                            |
| --filter-path            |   Filter Context Path (regexp can be used). Can be for example: '/STORAGE/context/test1'.                                                                                                                                                                                                                             |
| --unknown-http-status    |   Threshold unknown for http response code (default: '%\{http\_code\} \< 200 or %\{http\_code\} \>= 300')                                                                                                                                                                                                             |
| --warning-http-status    |   Warning threshold for http response code                                                                                                                                                                                                                                                                            |
| --critical-http-status   |   Critical threshold for http response code                                                                                                                                                                                                                                                                           |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN (default: '%\{state\} ne "running"'). You can use the following variables: %\{state\}, %\{display\}                                                                                                                                                     |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{display\}                                                                                                                                                                            |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{state\} eq "stopped"'). You can use the following variables: %\{state\}, %\{display\}                                                                                                                                                    |
| --warning-* --critical-* |   Thresholds. Can be: 'sessions-active'.                                                                                                                                                                                                                                                                              |

</TabItem>
<TabItem value="Tomcat-Connectors-Global" label="Tomcat-Connectors-Global">

| Option                   | Description                                                                                                                                                                                                                                                                                                           |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname               |   IP Address or FQDN of the Tomcat Application Server                                                                                                                                                                                                                                                                 |
| --port                   |   Port used by Tomcat                                                                                                                                                                                                                                                                                                 |
| --proto                  |   Protocol used http or https                                                                                                                                                                                                                                                                                         |
| --credentials            |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username               |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password               |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic                  |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout                |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --urlpath                |   Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                                                                                                                                                                                                                                |
| --filter-name            |   Filter by connector name (can be a regexp).                                                                                                                                                                                                                                                                         |
| --warning-* --critical-* |   Thresholds. Can be: 'traffic-in' (b), 'traffic-in-prct' (%), 'traffic-out' (b), 'traffic-out-prct' (%), 'threads-current', 'threads-busy', 'requests-processingtime-total' (ms), 'requests-errors', 'requests-total'.                                                                                               |
| --speed-in               |   Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                   |
| --speed-out              |   Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Tomcat-Memory" label="Tomcat-Memory">

| Option                   | Description                                                                                                                                                                                                                                                                                                           |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname               |   IP Address or FQDN of the Tomcat Application Server                                                                                                                                                                                                                                                                 |
| --port                   |   Port used by Tomcat                                                                                                                                                                                                                                                                                                 |
| --proto                  |   Protocol used http or https                                                                                                                                                                                                                                                                                         |
| --credentials            |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username               |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password               |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic                  |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout                |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --urlpath                |   Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                                                                                                                                                                                                                                |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                                                                                                                                                                                                |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_tomcat_webmanager.pl \
	--plugin=apps::tomcat::web::plugin \
	--mode=connectors \
	--help
```
