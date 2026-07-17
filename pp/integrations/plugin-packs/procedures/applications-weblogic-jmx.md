---
id: applications-weblogic-jmx
title: Weblogic Server
description: Monitor WebLogic Server via JMX/Jolokia, tracking Java heap and non-heap memory, class counts, threads, and work managers.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Weblogic Server** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Weblogic Server** brings a host template:

* **App-Weblogic-JMX-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Weblogic-JMX-custom" label="App-Weblogic-JMX-custom">

| Service Alias                | Service Template                            | Service Description                      |
|:-----------------------------|:--------------------------------------------|:-----------------------------------------|
| Weblogic-Class-Count         | App-Weblogic-Class-Count-JMX-custom         | Check Java Class usage                   |
| Weblogic-Memory              | App-Weblogic-Memory-JMX-custom              | Check Java Heap and NonHeap Memory usage |
| Weblogic-Memory-Detailed     | App-Weblogic-Memory-Detailed-JMX-custom     | Check Java Memory Pools                  |
| Weblogic-Threads             | App-Weblogic-Threads-JMX-custom             | Check threads                            |
| Weblogic-Work-Manager-Global | App-Weblogic-Work-Manager-Global-JMX-custom | Check Java 'workManagers'                |

> The services listed above are created automatically when the **App-Weblogic-JMX-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Weblogic-Class-Count" label="Weblogic-Class-Count">

| Name                       | Unit  |
|:---------------------------|:------|
| class.loaded.current.count | count |
| class.loaded.count         | count |
| class.unloaded.count       | count |

</TabItem>
<TabItem value="Weblogic-Memory" label="Weblogic-Memory">

| Name                       | Unit  |
|:---------------------------|:------|
| memory.heap.usage.bytes    | B     |
| memory.nonheap.usage.bytes | B     |

</TabItem>
<TabItem value="Weblogic-Memory-Detailed" label="Weblogic-Memory-Detailed">

| Name                               | Unit  |
|:-----------------------------------|:------|
| *mem*#memory.eden.usage.bytes      | B     |
| *mem*#memory.tenured.usage.bytes   | B     |
| *mem*#memory.survivor.usage.bytes  | B     |
| *mem*#memory.permanent.usage.bytes | B     |
| *mem*#memory.code.usage.bytes      | B     |

</TabItem>
<TabItem value="Weblogic-Threads" label="Weblogic-Threads">

| Name                  | Unit  |
|:----------------------|:------|
| threads.active.count  | count |
| threads.started.count | count |
| threads.daemon.count  | count |

</TabItem>
<TabItem value="Weblogic-Work-Manager-Global" label="Weblogic-Work-Manager-Global">

| Name              | Unit  |
|:------------------|:------|
| status            | N/A   |
| status            | N/A   |
| request-completed | N/A   |
| request-completed | N/A   |
| request-pending   | N/A   |
| request-pending   | N/A   |
| thread-stuck      | N/A   |
| thread-stuck      | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

The Weblogic Server monitoring connector requires network access to the Weblogic server, a properly deployed and configured Jolokia agent, and login credentials if required.

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
dnf install centreon-pack-applications-weblogic-jmx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-weblogic-jmx
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-weblogic-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-weblogic-jmx
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Weblogic Server** connector through
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
dnf install centreon-plugin-Applications-Weblogic-Jmx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Weblogic-Jmx
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-weblogic-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Weblogic-Jmx
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Weblogic-JMX-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro               | Description                                                                                          | Default value     | Mandatory   |
|:--------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| JOLOKIAUSERNAME     | Credentials to use for the HTTP request                                                              |                   |             |
| JOLOKIAPASSWORD     | Credentials to use for the HTTP request                                                              |                   |             |
| JOLOKIAURL          | Url where the jolokia agent is deployed (required). Example: http://localhost:8080/jolokia           |                   |             |
| JOLOKIAEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Weblogic-Class-Count" label="Weblogic-Class-Count">

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICALCURRENT | Threshold                                                                                          |                   |             |
| WARNINGCURRENT  | Threshold                                                                                          |                   |             |
| CRITICALLOADED  | Threshold                                                                                          |                   |             |
| WARNINGLOADED   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Weblogic-Memory" label="Weblogic-Memory">

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICALHEAP    | Critical threshold of Heap memory usage                                                            |                   |             |
| WARNINGHEAP     | Warning threshold of Heap memory usage                                                             |                   |             |
| CRITICALNONHEAP | Critical threshold of NonHeap memory usage                                                         |                   |             |
| WARNINGNONHEAP  | Warning threshold of NonHeap memory usage                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Weblogic-Memory-Detailed" label="Weblogic-Memory-Detailed">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICALEDEN      | Critical threshold of Heap 'Survivor Space' memory usage                                           |                   |             |
| WARNINGEDEN       | Warning threshold of Heap 'Eden Space' memory usage                                                |                   |             |
| CRITICALPERMANENT | Critical threshold of NonHeap 'Permanent Generation' memory usage                                  |                   |             |
| WARNINGPERMANENT  | Warning threshold of NonHeap 'Permanent Generation' memory usage                                   |                   |             |
| CRITICALSURVIVOR  | Critical threshold of Heap 'Survivor Space' memory usage                                           |                   |             |
| WARNINGSURVIVOR   | Warning threshold of Heap 'Survivor Space' memory usage                                            |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Weblogic-Threads" label="Weblogic-Threads">

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICALACTIVE  | Threshold                                                                                          |                   |             |
| WARNINGACTIVE   | Threshold                                                                                          |                   |             |
| CRITICALDAEMON  | Threshold                                                                                          |                   |             |
| WARNINGDAEMON   | Threshold                                                                                          |                   |             |
| CRITICALSTARTED | Threshold                                                                                          |                   |             |
| WARNINGSTARTED  | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Weblogic-Work-Manager-Global" label="Weblogic-Work-Manager-Global">

| Macro                    | Description                                                                                        | Default value                                    | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:-------------------------------------------------|:-----------:|
| FILTERAPPLICATION        | Filter by application runtime                                                                      |                                                  |             |
| FILTERNAME               | Filter by name (regexp can be used)                                                                |                                                  |             |
| FILTERRUNTIME            | Filter by server runtime                                                                           |                                                  |             |
| CRITICALREQUESTCOMPLETED | Threshold                                                                                          |                                                  |             |
| WARNINGREQUESTCOMPLETED  | Threshold                                                                                          |                                                  |             |
| CRITICALREQUESTPENDING   | Threshold                                                                                          |                                                  |             |
| WARNINGREQUESTPENDING    | Threshold                                                                                          |                                                  |             |
| CRITICALTHREADSTUCK      | Threshold                                                                                          |                                                  |             |
| WARNINGTHREADSTUCK       | Threshold                                                                                          |                                                  |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose --filter-perfdata='request\_completed' |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_weblogic_jmx.pl \
	--plugin=apps::java::weblogic::jmx::plugin \
	--mode=work-manager \
	--custommode=jolokia \
	--url='' \
	--username='' \
	--password=''  \
	--filter-application='' \
	--filter-name='' \
	--filter-runtime='' \
	--warning-thread-stuck='' \
	--critical-thread-stuck=''  \
	--warning-request-completed='' \
	--critical-request-completed=''  \
	--warning-request-pending='' \
	--critical-request-pending='' \
	--verbose \
	--filter-perfdata='request\_completed'
```

The expected command output is shown below:

```bash
OK: All WorkerManagers are ok | 'wm1#request-completed'=81720;;;0; 'wm2#request-completed'=17375;;;0; 'wm1#request-pending'=36003;;;0; 'wm2#request-pending'=4613;;;0; 'wm1#thread-stuck'=66073;;;0; 'wm2#thread-stuck'=44559;;;0;
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
/usr/lib/centreon/plugins/centreon_weblogic_jmx.pl \
	--plugin=apps::java::weblogic::jmx::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                               | Linked service template                     |
|:-----------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| class-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/classcount.pm)]         | App-Weblogic-Class-Count-JMX-custom         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/memory.pm)]                  | App-Weblogic-Memory-JMX-custom              |
| memory-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/memorydetailed.pm)] | App-Weblogic-Memory-Detailed-JMX-custom     |
| threads [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/threads.pm)]                | App-Weblogic-Threads-JMX-custom             |
| work-manager [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/weblogic/jmx/mode/workmanager.pm)]    | App-Weblogic-Work-Manager-Global-JMX-custom |

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
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --url                                      |   Url where the jolokia agent is deployed (required). Example: http://localhost:8080/jolokia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  |     Timeout in seconds for HTTP requests (default: 30 seconds)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --username                                 |   Credentials to use for the HTTP request                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --password                                 |   Credentials to use for the HTTP request                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proxy-url                                |   Optional HTTP proxy to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proxy-username                           |   Credentials to use for the proxy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --proxy-password                           |   Credentials to use for the proxy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --target-url                               |   Target to use (if you use jolokia agent as a proxy in --url option).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --target-username                          |   Credentials to use for the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --target-password                          |   Credentials to use for the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Weblogic-Class-Count" label="Weblogic-Class-Count">

| Option                   | Description                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='current'   |
| --warning-* --critical-* |   Thresholds. Can be: 'unloaded', 'loaded', 'current'.                                    |

</TabItem>
<TabItem value="Weblogic-Memory" label="Weblogic-Memory">

| Option             | Description                                         |
|:-------------------|:----------------------------------------------------|
| --warning-heap     |   Warning threshold of Heap memory usage            |
| --critical-heap    |   Critical threshold of Heap memory usage           |
| --warning-nonheap  |   Warning threshold of NonHeap memory usage         |
| --critical-nonheap |   Critical threshold of NonHeap memory usage        |
| --units            |   Units of thresholds (default: '%') ('%', 'B').    |

</TabItem>
<TabItem value="Weblogic-Memory-Detailed" label="Weblogic-Memory-Detailed">

| Option               | Description                                                           |
|:---------------------|:----------------------------------------------------------------------|
| --warning-eden       |   Warning threshold of Heap 'Eden Space' memory usage                 |
| --critical-eden      |   Critical threshold of Heap 'Survivor Space' memory usage            |
| --warning-tenured    |   Warning threshold of Heap 'Tenured Generation'  memory usage        |
| --critical-tenured   |   Critical threshold of Heap 'Tenured Generation'  memory usage       |
| --warning-survivor   |   Warning threshold of Heap 'Survivor Space' memory usage             |
| --critical-survivor  |   Critical threshold of Heap 'Survivor Space' memory usage            |
| --warning-permanent  |   Warning threshold of NonHeap 'Permanent Generation' memory usage    |
| --critical-permanent |   Critical threshold of NonHeap 'Permanent Generation' memory usage   |
| --warning-code       |   Warning threshold of NonHeap 'Code Cache' memory usage              |
| --critical-code      |   Critical threshold of NonHeap 'Code Cache' memory usage             |
| --units              |   Units of thresholds (default: '%') ('%', 'B').                      |

</TabItem>
<TabItem value="Weblogic-Threads" label="Weblogic-Threads">

| Option       | Description                                                     |
|:-------------|:----------------------------------------------------------------|
| --warning-*  |   Warning threshold. Can be: 'active', 'started', 'daemon'.     |
| --critical-* |   Critical threshold. Can be: 'active', 'started', 'daemon'.    |

</TabItem>
<TabItem value="Weblogic-Work-Manager-Global" label="Weblogic-Work-Manager-Global">

| Option               | Description                                                                                                                                                                                                                |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*          |   Warning threshold. Can be: 'thread-stuck', 'request-completed', 'request-pending'.                                                                                                                                       |
| --critical-*         |   Critical threshold. Can be: 'thread-stuck', 'request-completed', 'request-pending'.                                                                                                                                      |
| --filter-application |   Filter by application runtime.                                                                                                                                                                                           |
| --filter-name        |   Filter by name (regexp can be used).                                                                                                                                                                                     |
| --filter-runtime     |   Filter by server runtime.                                                                                                                                                                                                |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,status,regexp). Example: --threshold-overload='health,CRITICAL,^(?!(HEALTH\_OK)$)'     |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_weblogic_jmx.pl \
	--plugin=apps::java::weblogic::jmx::plugin \
	--mode=work-manager \
	--help
```
