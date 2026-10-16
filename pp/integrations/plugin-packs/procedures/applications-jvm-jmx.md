---
id: applications-jvm-jmx
title: JVM JMX
description: "Monitor Java Virtual Machines via JMX and the Jolokia agent: CPU load, memory, garbage collection, threads, and class counts."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **JVM JMX** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **JVM JMX** brings a host template:

* **App-Jvm-JMX-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Jvm-JMX-custom" label="App-Jvm-JMX-custom">

| Service Alias   | Service Template                   | Service Description                         |
|:----------------|:-----------------------------------|:--------------------------------------------|
| Class-Count     | App-Jvm-Class-Count-JMX-custom     | Check Java Class usage                      |
| Cpu-Load        | App-Jvm-Cpu-Load-JMX-custom        | Check JVM SystemCpuLoad and ProcessCpuLoad  |
| Fd-Usage        | App-Jvm-Fd-Usage-JMX-custom        | Check number/percentage of file descriptors |
| Gc-Usage        | App-Jvm-Gc-Usage-JMX-custom        | Check garbage collectors usage              |
| Load-Average    | App-Jvm-Load-Average-JMX-custom    | Check system load average                   |
| Memory          | App-Jvm-Memory-JMX-custom          | Check Java Heap and NonHeap Memory usage    |
| Memory-Detailed | App-Jvm-Memory-Detailed-JMX-custom | Check Java Memory Pools                     |
| Threads         | App-Jvm-Threads-JMX-custom         | Check threads                               |

> The services listed above are created automatically when the **App-Jvm-JMX-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Class-Count" label="Class-Count">

| Name                       | Unit  |
|:---------------------------|:------|
| class.loaded.current.count | count |
| class.loaded.count         | count |
| class.unloaded.count       | count |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Name                        | Unit  |
|:----------------------------|:------|
| system.cpu.load.percentage  | %     |
| process.cpu.load.percentage | %     |

</TabItem>
<TabItem value="Fd-Usage" label="Fd-Usage">

| Name                       | Unit  |
|:---------------------------|:------|
| fd.opened.usage.count      | count |
| fd.opened.free.count       | count |
| fd.opened.usage.percentage | %     |

</TabItem>
<TabItem value="Gc-Usage" label="Gc-Usage">

| Name                                         | Unit  |
|:---------------------------------------------|:------|
| *gc*#gc.collection.time.elapsed.milliseconds | ms    |
| *gc*#gc.collection.count                     | count |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Name                 | Unit  |
|:---------------------|:------|
| system.load.1m.count | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Name                       | Unit  |
|:---------------------------|:------|
| memory.heap.usage.bytes    | B     |
| memory.nonheap.usage.bytes | B     |

</TabItem>
<TabItem value="Memory-Detailed" label="Memory-Detailed">

| Name                               | Unit  |
|:-----------------------------------|:------|
| *mem*#memory.eden.usage.bytes      | B     |
| *mem*#memory.tenured.usage.bytes   | B     |
| *mem*#memory.survivor.usage.bytes  | B     |
| *mem*#memory.permanent.usage.bytes | B     |
| *mem*#memory.code.usage.bytes      | B     |

</TabItem>
<TabItem value="Threads" label="Threads">

| Name                  | Unit  |
|:----------------------|:------|
| threads.active.count  | count |
| threads.started.count | count |
| threads.daemon.count  | count |

</TabItem>
</Tabs>

## Prerequisites

Please [install the Jolokia agent on your JVM](https://jolokia.org/download). Ask your admin to deploy it and give you the URL.

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
dnf install centreon-pack-applications-jvm-jmx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-jvm-jmx
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-jvm-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-jvm-jmx
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **JVM JMX** connector through
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
dnf install centreon-plugin-Applications-Jvm-Jmx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Jvm-Jmx
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-jvm-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Jvm-Jmx
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Jvm-JMX-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                          | Default value     | Mandatory   |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| JOLOKIAUSERNAME       | Credentials to use for the HTTP request                                                              |                   |             |
| JOLOKIATARGETUSERNAME | Credentials to use for the target                                                                    |                   |             |
| JOLOKIAPASSWORD       | Credentials to use for the HTTP request                                                              |                   |             |
| JOLOKIATARGETPASSWORD | Credentials to use for the target                                                                    |                   |             |
| JOLOKIATARGETURL      | Target to use (if you use jolokia agent as a proxy in --url option)                                  |                   | X            |
| JOLOKIAURL            | Url where the jolokia agent is deployed (required). Example: http://localhost:8080/jolokia           |                   |             |
| JOLOKIAEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Class-Count" label="Class-Count">

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCURRENT  | Threshold                                                                                          |                   |             |
| CRITICALCURRENT | Threshold                                                                                          |                   |             |
| WARNINGLOADED   | Threshold                                                                                          |                   |             |
| CRITICALLOADED  | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

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
| WARNINGUSAGE      | Threshold                                                                                          |                   |             |
| CRITICALUSAGE     | Threshold                                                                                          |                   |             |
| WARNINGUSAGEFREE  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEFREE | Threshold                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Gc-Usage" label="Gc-Usage">

| Macro         | Description                                                                                        | Default value     | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCOUNT  | Threshold                                                                                          |                   |             |
| CRITICALCOUNT | Threshold                                                                                          |                   |             |
| WARNINGTIME   | Threshold                                                                                          |                   |             |
| CRITICALTIME  | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

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

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGACTIVE   | Threshold                                                                                          |                   |             |
| CRITICALACTIVE  | Threshold                                                                                          |                   |             |
| WARNINGDAEMON   | Threshold                                                                                          |                   |             |
| CRITICALDAEMON  | Threshold                                                                                          |                   |             |
| WARNINGSTARTED  | Threshold                                                                                          |                   |             |
| CRITICALSTARTED | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_jvm_jmx.pl \
	--plugin=apps::java::jvm::jmx::plugin \
	--mode=class-count \
	--url='xxxxxx' \
	--username='xxxxxx' \
	--password='xxxxxx' \
	--target-url='' \
	--target-username='' \
	--target-password=''  \
	--warning-loaded='' \
	--critical-loaded='' \
	--warning-current='' \
	--critical-current=''
```

The expected command output is shown below:

```bash
OK: Class current: 3009, loaded: 0, unloaded: 0 | 'class.loaded.current.count'=3009;;;0; 'class.loaded.count'=0;;;0; 'class.unloaded.count'=0;;;0;

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
/usr/lib/centreon/plugins/centreon_jvm_jmx.pl \
	--plugin=apps::java::jvm::jmx::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                               | Linked service template            |
|:-----------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| class-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/classcount.pm)]         | App-Jvm-Class-Count-JMX-custom     |
| cpu-load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/cpuload.pm)]               | App-Jvm-Cpu-Load-JMX-custom        |
| fd-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/fdusage.pm)]               | App-Jvm-Fd-Usage-JMX-custom        |
| gc-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/gcusage.pm)]               | App-Jvm-Gc-Usage-JMX-custom        |
| load-average [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/loadaverage.pm)]       | App-Jvm-Load-Average-JMX-custom    |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/memory.pm)]                  | App-Jvm-Memory-JMX-custom          |
| memory-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/memorydetailed.pm)] | App-Jvm-Memory-Detailed-JMX-custom |
| threads [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/threads.pm)]                | App-Jvm-Threads-JMX-custom         |

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
| --url                                      |   Url where the jolokia agent is deployed (required). Example: http://localhost:8080/jolokia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --timeout                                  |     Timeout in seconds for HTTP requests (default: 30 seconds)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --username                                 |   Credentials to use for the HTTP request                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --password                                 |   Credentials to use for the HTTP request                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proxy-url                                |   Optional HTTP proxy to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --proxy-username                           |   Credentials to use for the proxy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --proxy-password                           |   Credentials to use for the proxy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --target-url                               |   Target to use (if you use jolokia agent as a proxy in --url option).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --target-username                          |   Credentials to use for the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --target-password                          |   Credentials to use for the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Class-Count" label="Class-Count">

| Option                   | Description                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='current'   |
| --warning-* --critical-* |   Thresholds. Can be: 'unloaded', 'loaded', 'current'.                                    |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Option             | Description                                  |
|:-------------------|:---------------------------------------------|
| --warning-system   |   Warning threshold of system CPU load.      |
| --critical-system  |   Critical threshold of system CPU load.     |
| --warning-process  |   Warning threshold of process CPU load.     |
| --critical-process |   Critical threshold of process CPU load.    |

</TabItem>
<TabItem value="Fd-Usage" label="Fd-Usage">

| Option                   | Description                                                       |
|:-------------------------|:------------------------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'usage', 'usage-free', 'usage-prct' (%).    |

</TabItem>
<TabItem value="Gc-Usage" label="Gc-Usage">

| Option            | Description                                                                               |
|:------------------|:------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^count$'   |
| --filter-name     |   Filter garbage collector name (can be a regexp).                                        |
| --warning-*       |   Warning threshold. Can be: 'count', 'time' (ms).                                        |
| --critical-*      |   Critical threshold. Can be: 'count', 'time' (ms).                                       |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Option           | Description                             |
|:-----------------|:----------------------------------------|
| --warning-load1  |   Warning threshold for loadaverage     |
| --critical-load1 |   Critical threshold for loadaverage    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option             | Description                                         |
|:-------------------|:----------------------------------------------------|
| --warning-heap     |   Warning threshold of Heap memory usage            |
| --critical-heap    |   Critical threshold of Heap memory usage           |
| --warning-nonheap  |   Warning threshold of NonHeap memory usage         |
| --critical-nonheap |   Critical threshold of NonHeap memory usage        |
| --units            |   Units of thresholds (default: '%') ('%', 'B').    |

</TabItem>
<TabItem value="Memory-Detailed" label="Memory-Detailed">

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
<TabItem value="Threads" label="Threads">

| Option       | Description                                                     |
|:-------------|:----------------------------------------------------------------|
| --warning-*  |   Warning threshold. Can be: 'active', 'started', 'daemon'.     |
| --critical-* |   Critical threshold. Can be: 'active', 'started', 'daemon'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_jvm_jmx.pl \
	--plugin=apps::java::jvm::jmx::plugin \
	--mode=class-count \
	--help
```
