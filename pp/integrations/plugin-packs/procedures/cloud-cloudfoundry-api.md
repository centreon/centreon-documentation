---
id: cloud-cloudfoundry-api
title: Cloud Foundry API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Cloud Foundry API** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Cloud Foundry API** brings a host template:

* **Cloud-Cloudfoundry-Api-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Cloudfoundry-Api-custom" label="Cloud-Cloudfoundry-Api-custom">

| Service Alias   | Service Template                              | Service Description      |
|:----------------|:----------------------------------------------|:-------------------------|
| Apps-State      | Cloud-Cloudfoundry-Apps-State-Api-custom      | Check the state of applications |
| Instances-State | Cloud-Cloudfoundry-Instances-State-Api-custom | Check the state of instances |

> The services listed above are created automatically when the **Cloud-Cloudfoundry-Api-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Apps-State" label="Apps-State">

| Name                       | Unit  |
|:---------------------------|:------|
| applications.started.count | count |
| applications.stopped.count | count |
| state                      | N/A   |
| state                      | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Instances-State" label="Instances-State">

| Name                    | Unit  |
|:------------------------|:------|
| app-state               | N/A   |
| instances.running.count | count |
| instances.stopped.count | count |
| instances.crashed.count | count |
| instance-state          | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

* Your Centreon poller must be able to access your Cloud Foundry instance (have its hosting URL ready).
* You must have a Cloud Foundry user account with the necessary permissions to access the data monitored via the API (applications, etc.).
* Ensure that the Centreon server can communicate with the Cloud Foundry API over the network.
* Allow outbound access to the API URL (https://api./<domain/>) through the required ports (typically 443 for HTTPS).
* Check that the Cloud Foundry API's SSL certificate is valid and, if necessary, add it to the trusted certificates of the Centreon poller.
* For more information, refer to the [official Cloud Foundry documentation](https://docs.cloudfoundry.org/)

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
dnf install centreon-pack-cloud-cloudfoundry-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-cloudfoundry-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-cloudfoundry-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-cloudfoundry-api
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Cloud Foundry** connector through
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
dnf install centreon-plugin-Cloud-Cloudfoundry-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Cloudfoundry-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-cloudfoundry-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Cloudfoundry-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Cloudfoundry-Api-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                   | Description                                                                                                                | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CLOUDFOUNDRYAPIHOSTNAME | Cloud Foundry API hostname                                                                                                 |                   |             |
| CLOUDFOUNDRYAPIUSERNAME | Cloud Foundry API username                                                                                                 |                   |             |
| CLOUDFOUNDRYAPIPASSWORD | Cloud Foundry API password                                                                                                 |                   |             |
| CLOUDFOUNDRYAPIPROTO    | Specify https if needed                                                                                                    | https             |             |
| CLOUDFOUNDRYAPIPORT     | Cloud Foundry API port                                                                                                     | 443               |             |
| CLOUDFOUNDRYAPIPATH     | Cloud Foundry API url path                                                                                                 | /v2               |             |
| CLOUDFOUNDRYCUSTOMMODE  | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | restapi           |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Apps-State" label="Apps-State">

| Macro            | Description                                                                                                                            | Default value          | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| ORGANIZATIONGUID | Only looks for apps from an organization                                                                                               | .*                     |             |
| SPACEGUID        | Only looks for apps from a space                                                                                                       | .*                     |             |
| FILTERNAME       | Filter apps name (can be a regexp)                                                                                                     | .*                     |             |
| WARNINGSTARTED   | Threshold                                                                                                                              |                        |             |
| CRITICALSTARTED  | Threshold                                                                                                                              |                        |             |
| CRITICALSTATE    | Threshold                                                                                                                              | %\{state\} !~ /STARTED/i |             |
| WARNINGSTATE     | Threshold                                                                                                                              |                        |             |
| WARNINGSTOPPED   | Threshold                                                                                                                              |                        |             |
| CRITICALSTOPPED  | Threshold                                                                                                                              |                        |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose              |             |

</TabItem>
<TabItem value="Instances-State" label="Instances-State">

| Macro                 | Description                                                                                                                            | Default value          | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| APPGUID               | App guid to look for                                                                                                                   | .*                     |             |
| CRITICALAPPSTATE      | Critical threshold for app state                                                                                                       | %\{state\} !~ /STARTED/i |             |
| WARNINGAPPSTATE       | Warning threshold for app state                                                                                                        |                        |             |
| WARNINGCRASHED        | Threshold                                                                                                                              |                        |             |
| CRITICALCRASHED       | Threshold                                                                                                                              |                        |             |
| CRITICALINSTANCESTATE | Critical threshold for instances state                                                                                                 | %\{state\} !~ /RUNNING/i |             |
| WARNINGINSTANCESTATE  | Warning threshold for instances state                                                                                                  |                        |             |
| WARNINGRUNNING        | Threshold                                                                                                                              |                        |             |
| CRITICALRUNNING       | Threshold                                                                                                                              |                        |             |
| WARNINGSTOPPED        | Threshold                                                                                                                              |                        |             |
| CRITICALSTOPPED       | Threshold                                                                                                                              |                        |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose              |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_cloudfoundry_restapi.pl \
	--plugin=cloud::cloudfoundry::restapi::plugin \
	--mode=apps-state \
	--custommode='restapi' \
	--hostname='10.0.0.1' \
	--api-path='/v2' \
	--api-username='XXXX' \
	--api-password='XXXX' \
	--port='443' \
	--proto='https' \
	--organization-guid='.*' \
	--space-guid='.*' \
	--filter-name='.*' \
	--warning-state='' \
	--critical-state='%\{state\} !~ /STARTED/i' \
	--warning-started='' \
	--critical-started='' \
	--warning-stopped='' \
	--critical-stopped='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: Started : 51099 Stopped : 45913 All apps state are ok | 'applications.started.count'=51099;;;0; 'applications.stopped.count'=45913;;;0; 
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
/usr/lib/centreon/plugins/centreon_cloudfoundry_restapi.pl \
	--plugin=cloud::cloudfoundry::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                            | Linked service template                       |
|:------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
| apps-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cloudfoundry/restapi/mode/appsstate.pm)]                 | Cloud-Cloudfoundry-Apps-State-Api-custom      |
| instances-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cloudfoundry/restapi/mode/instancesstate.pm)]       | Cloud-Cloudfoundry-Instances-State-Api-custom |
| list-apps [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cloudfoundry/restapi/mode/listapps.pm)]                   | Not used in this Monitoring Connector         |
| list-organizations [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cloudfoundry/restapi/mode/listorganizations.pm)] | Not used in this Monitoring Connector         |
| list-spaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cloudfoundry/restapi/mode/listspaces.pm)]               | Not used in this Monitoring Connector         |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --hostname                                 |   Cloud Foundry API hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-path                                 |   Cloud Foundry API url path (default: '/v2')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-username                             |   Cloud Foundry API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-password                             |   Cloud Foundry API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --port                                     |   Cloud Foundry API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --username                                 |   Authorization endpoint username (default: 'cf')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --password                                 |   Authorization endpoint password (default: '')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Apps-State" label="Apps-State">

| Option              | Description                                                                            |
|:--------------------|:---------------------------------------------------------------------------------------|
| --organization-guid |   Only looks for apps from an organization.                                            |
| --space-guid        |   Only looks for apps from a space.                                                    |
| --filter-name       |   Filter apps name (can be a regexp).                                                  |
| --warning-*         |   Warning threshold for apps count based  on state (can be: 'started', 'stopped')      |
| --critical-*        |   Critical threshold for apps count based  on state (can be: 'started', 'stopped').    |

</TabItem>
<TabItem value="Instances-State" label="Instances-State">

| Option                    | Description                                                                                            |
|:--------------------------|:-------------------------------------------------------------------------------------------------------|
| --app-guid                |   App guid to look for.                                                                                |
| --warning-app-state       |   Warning threshold for app state.                                                                     |
| --critical-app-state      |   Critical threshold for app state (default: '%\{state\} !~ /STARTED/i').                                |
| --warning-instance-state  |   Warning threshold for instances state.                                                               |
| --critical-instance-state |   Critical threshold for instances state (default: '%\{state\} !~ /RUNNING/i').                          |
| --warning-*               |   Warning threshold for instances count based  on state (can be: 'running', 'stopped', 'crashed')      |
| --critical-*              |   Critical threshold for instances count based  on state (can be: 'running', 'stopped', 'crashed').    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cloudfoundry_restapi.pl \
	--plugin=cloud::cloudfoundry::restapi::plugin \
	--mode=apps-state \
	--help
```
