---
id: applications-monitoring-centreon-map-engine-actuator
title: Centreon Map Engine
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Centreon Map Engine is one of [Centreon Map's](https://docs.centreon.com/docs/graph-views/introduction-map/) components.

## Pack assets

### Templates

The Monitoring Connector **Centreon Map Engine** brings a host template:

* **App-Jvm-Centreon-Map-Engine-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Jvm-Centreon-Map-Engine-custom" label="App-Jvm-Centreon-Map-Engine-custom">

| Service Alias   | Service Template                                   | Service Description                            |
|:----------------|:---------------------------------------------------|:-----------------------------------------------|
| Class-Count     | App-Jvm-Class-Count-Centreon-Map-Engine-custom     | Check Java class usage                         |
| Cpu-Load        | App-Jvm-Cpu-Load-Centreon-Map-Engine-custom        | Check JVM SystemCpuLoad and ProcessCpuLoad     |
| Fd-Usage        | App-Jvm-Fd-Usage-Centreon-Map-Engine-custom        | Check number/percentage of file descriptors    |
| Load-Average    | App-Jvm-Load-Average-Centreon-Map-Engine-custom    | Check the system load average of the JVM       |
| Memory          | App-Jvm-Memory-Centreon-Map-Engine-custom          | Check Heap and NonHeap Memory usage of the JVM |
| Memory-Detailed | App-Jvm-Memory-Detailed-Centreon-Map-Engine-custom | Check Java memory pools                        |
| Threads         | App-Jvm-Threads-Centreon-Map-Engine-custom         | Check threads                                  |

> The services listed above are created automatically when the **App-Jvm-Centreon-Map-Engine-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Class-Count" label="Class-Count">

| Metric name                | Unit  |
|:---------------------------|:------|
| class.loaded.current.count | count |
| class.unloaded.count       | count |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Metric name                 | Unit  |
|:----------------------------|:------|
| system.cpu.load.percentage  | %     |
| process.cpu.load.percentage | %     |

</TabItem>
<TabItem value="Fd-Usage" label="Fd-Usage">

| Metric name                | Unit  |
|:---------------------------|:------|
| fd.opened.usage.count      | count |
| fd.opened.free.count       | count |
| fd.opened.usage.percentage | %     |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Metric name          | Unit  |
|:---------------------|:------|
| system.load.1m.count | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                | Unit  |
|:---------------------------|:------|
| memory.heap.usage.bytes    | B     |
| memory.nonheap.usage.bytes | B     |

</TabItem>
<TabItem value="Memory-Detailed" label="Memory-Detailed">

| Metric name                        | Unit  |
|:-----------------------------------|:------|
| *mem*#memory.eden.usage.bytes      | B     |
| *mem*#memory.tenured.usage.bytes   | B     |
| *mem*#memory.survivor.usage.bytes  | B     |
| *mem*#memory.permanent.usage.bytes | B     |
| *mem*#memory.code.usage.bytes      | B     |

</TabItem>
<TabItem value="Threads" label="Threads">

| Metric name          | Unit  |
|:---------------------|:------|
| threads.active.count | count |
| threads.daemon.count | count |

</TabItem>
</Tabs>

## Prerequisites

You must have installed [Centreon Map](https://docs.centreon.com/docs/graph-views/introduction-map/) and especially [Centreon Map Engine server](https://docs.centreon.com/docs/graph-views/map-web-install/#step-3-install-map-engine-server).

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
dnf install centreon-pack-applications-monitoring-centreon-map-engine-actuator
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-centreon-map-engine-actuator
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-centreon-map-engine-actuator
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-centreon-map-engine-actuator
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Centreon Map Engine** connector through
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
dnf install centreon-plugin-Applications-Jvm-Actuator
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Jvm-Actuator
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-jvm-actuator
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Jvm-Actuator
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Jvm-Centreon-Map-Engine-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro                   | Description                                                                                                                | Default value          | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| ACTUATORAPIUSERNAME     | Set API username                                                                                                           |                        | X           |
| ACTUATORAPIPASSWORD     | Set API password                                                                                                           |                        | X           |
| ACTUATORAPIPROTO        | Specify https if needed (default: 'http')                                                                                  | http                   |             |
| ACTUATORAPIPORT         | API port (default: 8080)                                                                                                   | 8081                   |             |
| ACTUATORAPIURLPATH      | API url path (default: '/centreon-studio/api/beta')                                                                        | /centreon-map/api/beta |             |
| ACTUATORCUSTOMMODE      | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | centreonmap            |             |
| ACTUATORAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                       |                        |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Class-Count" label="Class-Count">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCURRENT   | Thresholds                                                                                         |                   |             |
| CRITICALCURRENT  | Thresholds                                                                                         |                   |             |
| WARNINGUNLOADED  | Thresholds                                                                                         |                   |             |
| CRITICALUNLOADED | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPROCESS  | Warning threshold of process CPU load                                                              |                   |             |
| CRITICALPROCESS | Critical threshold of process CPU load                                                             |                   |             |
| WARNINGSYSTEM   | Warning threshold of system CPU load                                                               |                   |             |
| CRITICALSYSTEM  | Critical threshold of system CPU load                                                              |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Fd-Usage" label="Fd-Usage">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGE      | Thresholds                                                                                         |                   |             |
| CRITICALUSAGE     | Thresholds                                                                                         |                   |             |
| WARNINGUSAGEFREE  | Thresholds                                                                                         |                   |             |
| CRITICALUSAGEFREE | Thresholds                                                                                         |                   |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                         |                   |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Macro         | Description                                                                                        | Default value     | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGLOAD1  | Warning threshold for loadaverage                                                                  |                   |             |
| CRITICALLOAD1 | Critical threshold for loadaverage                                                                 |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS           | Units of thresholds (default: '%') ('%', 'B')                                                      | %                 |             |
| WARNINGHEAP     | Warning threshold of Heap memory usage                                                             |                   |             |
| CRITICALHEAP    | Critical threshold of Heap memory usage                                                            |                   |             |
| WARNINGNONHEAP  | Warning threshold of NonHeap memory usage                                                          |                   |             |
| CRITICALNONHEAP | Critical threshold of NonHeap memory usage                                                         |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Memory-Detailed" label="Memory-Detailed">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGEDEN       | Warning threshold of Heap 'Eden Space' memory usage                                                |                   |             |
| CRITICALEDEN      | Critical threshold of Heap 'Survivor Space' memory usage                                           |                   |             |
| WARNINGPERMANENT  | Warning threshold of NonHeap 'Permanent Generation' memory usage                                   |                   |             |
| CRITICALPERMANENT | Critical threshold of NonHeap 'Permanent Generation' memory usage                                  |                   |             |
| WARNINGSURVIVOR   | Warning threshold of Heap 'Survivor Space' memory usage                                            |                   |             |
| CRITICALSURVIVOR  | Critical threshold of Heap 'Survivor Space' memory usage                                           |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Threads" label="Threads">

| Macro          | Description                                                                                        | Default value     | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGACTIVE  | Warning threshold                                                                                  |                   |             |
| CRITICALACTIVE | Critical threshold                                                                                 |                   |             |
| WARNINGDAEMON  | Warning threshold                                                                                  |                   |             |
| CRITICALDAEMON | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
	--plugin=apps::java::jvm::actuator::plugin \
	--mode=threads \
	--custommode='centreonmap' \
	--hostname='10.0.0.1' \
	--api-username='' \
	--api-password='' \
	--port='8081' \
	--proto='http' \
	--url-path='/centreon-map/api/beta'  \
	--warning-active='' \
	--critical-active='' \
	--warning-daemon='' \
	--critical-daemon='' 
```

The expected command output is shown below:

```bash
OK: active: 18 daemon: 42 | 'threads.active.count'=18;;;0;'threads.daemon.count'=42;;;0;
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
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
	--plugin=apps::java::jvm::actuator::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                  | Linked service template                            |
|:--------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| class-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/classcount.pm)]         | App-Jvm-Class-Count-Centreon-Map-Engine-custom     |
| cpu-load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/cpuload.pm)]               | App-Jvm-Cpu-Load-Centreon-Map-Engine-custom        |
| fd-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/fdusage.pm)]               | App-Jvm-Fd-Usage-Centreon-Map-Engine-custom        |
| load-average [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/loadaverage.pm)]       | App-Jvm-Load-Average-Centreon-Map-Engine-custom    |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/memory.pm)]                  | App-Jvm-Memory-Centreon-Map-Engine-custom          |
| memory-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/memorydetailed.pm)] | App-Jvm-Memory-Detailed-Centreon-Map-Engine-custom |
| threads [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/threads.pm)]                | App-Jvm-Threads-Centreon-Map-Engine-custom         |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
	--plugin=apps::java::jvm::actuator::plugin \
	--list-custommode
```

The plugin brings the following custom modes:

* centreonmap
* standard

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | API hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --url-path                                 | API url path (default: '/centreon-studio/api/beta')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --port                                     | API port (default: 8080)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-username                             | Set API username                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --api-password                             | Set API password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --timeout                                  | Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
<TabItem value="Class-Count" label="Class-Count">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --client-version         | Set the client version (default: '21.04.0')                                                                                                                                                                                                   |
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='current'                                                                                                                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'unloaded', 'current'.                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Option             | Description                                |
|:-------------------|:-------------------------------------------|
| --warning-system   | Warning threshold of system CPU load.      |
| --critical-system  | Critical threshold of system CPU load.     |
| --warning-process  | Warning threshold of process CPU load.     |
| --critical-process | Critical threshold of process CPU load.    |

</TabItem>
<TabItem value="Fd-Usage" label="Fd-Usage">

| Option                   | Description                                                     |
|:-------------------------|:----------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'usage', 'usage-free', 'usage-prct' (%).    |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Option           | Description                           |
|:-----------------|:--------------------------------------|
| --warning-load1  | Warning threshold for loadaverage     |
| --critical-load1 | Critical threshold for loadaverage    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option             | Description                                      |
|:-------------------|:-------------------------------------------------|
| --warning-heap     | Warning threshold of Heap memory usage           |
| --critical-heap    | Critical threshold of Heap memory usage          |
| --warning-nonheap  | Warning threshold of NonHeap memory usage        |
| --critical-nonheap | Critical threshold of NonHeap memory usage       |
| --units            | Units of thresholds (default: '%') ('%', 'B').   |

</TabItem>
<TabItem value="Memory-Detailed" label="Memory-Detailed">

| Option               | Description                                                         |
|:---------------------|:--------------------------------------------------------------------|
| --warning-eden       | Warning threshold of Heap 'Eden Space' memory usage                 |
| --critical-eden      | Critical threshold of Heap 'Survivor Space' memory usage            |
| --warning-tenured    | Warning threshold of Heap 'Tenured Generation' memory usage         |
| --critical-tenured   | Critical threshold of Heap 'Tenured Generation' memory usage        |
| --warning-survivor   | Warning threshold of Heap 'Survivor Space' memory usage             |
| --critical-survivor  | Critical threshold of Heap 'Survivor Space' memory usage            |
| --warning-permanent  | Warning threshold of NonHeap 'Permanent Generation' memory usage    |
| --critical-permanent | Critical threshold of NonHeap 'Permanent Generation' memory usage   |
| --warning-code       | Warning threshold of NonHeap 'Code Cache' memory usage              |
| --critical-code      | Critical threshold of NonHeap 'Code Cache' memory usage             |
| --units              | Units of thresholds (default: '%') ('%', 'B').                      |

</TabItem>
<TabItem value="Threads" label="Threads">

| Option       | Description                                        |
|:-------------|:---------------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'active', 'daemon'.     |
| --critical-* | Critical threshold. Can be: 'active', 'daemon'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
	--plugin=apps::java::jvm::actuator::plugin \
	--mode=threads \
	--custommode='standard' \
	--help
```
