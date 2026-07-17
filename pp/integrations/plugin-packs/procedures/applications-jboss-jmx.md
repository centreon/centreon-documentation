---
id: applications-jboss-jmx
title: JBoss Server
description: "Monitor JBoss Server via JMX/Jolokia: Java heap and non-heap memory, memory pools, class count, threads, and datasource usage."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **JBoss Server** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **JBoss Server** brings a host template:

* **App-Jboss-JMX-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Jboss-JMX-custom" label="App-Jboss-JMX-custom">

| Service Alias         | Service Template                     | Service Description                      |
|:----------------------|:-------------------------------------|:-----------------------------------------|
| Jboss-Class-Count     | App-Jboss-Class-Count-JMX-custom     | Check Java Class usage                   |
| Jboss-Memory          | App-Jboss-Memory-JMX-custom          | Check Java Heap and NonHeap Memory usage |
| Jboss-Memory-Detailed | App-Jboss-Memory-Detailed-JMX-custom | Check Java Memory Pools                  |
| Jboss-Threads         | App-Jboss-Threads-JMX-custom         | Check threads                            |

> The services listed above are created automatically when the **App-Jboss-JMX-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias    | Service Template                      | Service Description     |
|:-----------------|:--------------------------------------|:------------------------|
| Datasource-Usage | App-Jboss-Datasource-Usage-JMX-custom | Check datasources usage |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                | Description                                  |
|:-------------------------|:---------------------------------------------|
| App-Jboss-Jmx-Datasource | Discover datasources and monitor their usage |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Datasource-Usage" label="Datasource-Usage">

| Name                                                | Unit  |
|:----------------------------------------------------|:------|
| *datasource*#datasource.connections.active.count    | count |
| *datasource*#datasource.connections.available.count | count |
| *datasource*#datasource.connections.inuse.count     | count |
| *datasource*#datasource.connections.created.count   | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Jboss-Class-Count" label="Jboss-Class-Count">

| Name                       | Unit  |
|:---------------------------|:------|
| class.loaded.current.count | count |
| class.loaded.count         | count |
| class.unloaded.count       | count |

</TabItem>
<TabItem value="Jboss-Memory" label="Jboss-Memory">

| Name                       | Unit  |
|:---------------------------|:------|
| memory.heap.usage.bytes    | B     |
| memory.nonheap.usage.bytes | B     |

</TabItem>
<TabItem value="Jboss-Memory-Detailed" label="Jboss-Memory-Detailed">

| Name                               | Unit  |
|:-----------------------------------|:------|
| *mem*#memory.eden.usage.bytes      | B     |
| *mem*#memory.tenured.usage.bytes   | B     |
| *mem*#memory.survivor.usage.bytes  | B     |
| *mem*#memory.permanent.usage.bytes | B     |
| *mem*#memory.code.usage.bytes      | B     |

</TabItem>
<TabItem value="Jboss-Threads" label="Jboss-Threads">

| Name                  | Unit  |
|:----------------------|:------|
| threads.active.count  | count |
| threads.started.count | count |
| threads.daemon.count  | count |

</TabItem>
</Tabs>

## Prerequisites

Please [install the Jolokia agent on your JVM](https://jolokia.org/download). Ask to your admin to deploy it and give you the URL.

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
dnf install centreon-pack-applications-jboss-jmx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-jboss-jmx
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-jboss-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-jboss-jmx
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **JBoss Server** connector through
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
dnf install centreon-plugin-Applications-Jboss-Jmx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Jboss-Jmx
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-jboss-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Jboss-Jmx
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Jboss-JMX-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                          | Default value     | Mandatory   |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| JOLOKIAUSERNAME       | Credentials to use for the HTTP request                                                              |                   | X            |
| JOLOKIATARGETUSERNAME | Credentials to use for the target                                                                    |                   | X            |
| JOLOKIAPASSWORD       | Credentials to use for the HTTP request                                                              |                   | X            |
| JOLOKIATARGETPASSWORD | Credentials to use for the target                                                                    |                   | X            |
| JOLOKIATARGETURL      | Target to use (if you use jolokia agent as a proxy in --url option)                                  |                   |             |
| JOLOKIAURL            | Url where the jolokia agent is deployed (required). Example: http://localhost:8080/jolokia           |                   | X            |
| JOLOKIAEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Datasource-Usage" label="Datasource-Usage">

| Macro                | Description                                                                                        | Default value     | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME           | Filter datasource name (can be a regexp)                                                           |                   |             |
| WARNINGACTIVECON     | Threshold                                                                                          |                   |             |
| CRITICALACTIVECON    | Threshold                                                                                          |                   |             |
| WARNINGAVAILABLECON  | Threshold                                                                                          |                   |             |
| CRITICALAVAILABLECON | Threshold                                                                                          |                   |             |
| WARNINGCREATEDCON    | Threshold                                                                                          |                   |             |
| CRITICALCREATEDCON   | Threshold                                                                                          |                   |             |
| WARNINGINUSECON      | Threshold                                                                                          |                   |             |
| CRITICALINUSECON     | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Jboss-Class-Count" label="Jboss-Class-Count">

| Macro           | Description | Default value     | Mandatory   |
|:----------------|:------------|:------------------|:-----------:|
| WARNINGCURRENT  | Threshold   |                   |             |
| CRITICALCURRENT | Threshold   |                   |             |
| WARNINGLOADED   | Threshold   |                   |             |
| CRITICALLOADED  | Threshold   |                   |             |

</TabItem>
<TabItem value="Jboss-Memory" label="Jboss-Memory">

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGHEAP     | Warning threshold of Heap memory usage                                                             |                   |             |
| CRITICALHEAP    | Critical threshold of Heap memory usage                                                            |                   |             |
| WARNINGNONHEAP  | Warning threshold of NonHeap memory usage                                                          |                   |             |
| CRITICALNONHEAP | Critical threshold of NonHeap memory usage                                                         |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Jboss-Memory-Detailed" label="Jboss-Memory-Detailed">

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
<TabItem value="Jboss-Threads" label="Jboss-Threads">

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
/usr/lib/centreon/plugins/centreon_jboss_jmx.pl \
	--plugin=apps::java::jboss::jmx::plugin \
	--mode=threads \
	--custommode=jolokia \
	--url='xxxxxx' \
	--username='xxxxxx' \
	--password='xxxxxx' \
	--target-url='' \
	--target-username='xxxxxx' \
	--target-password='xxxxxx'  \
	--warning-active='' \
	--critical-active=''  \
	--warning-started='' \
	--critical-started=''  \
	--warning-daemon='' \
	--critical-daemon=''
```

The expected command output is shown below:

```bash
OK: active: 64401 started: 71064 daemon: 84375 | 'threads.active.count'=64401;;;0; 'threads.started.count'=71064;;;0; 'threads.daemon.count'=84375;;;0;
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
/usr/lib/centreon/plugins/centreon_jboss_jmx.pl \
	--plugin=apps::java::jboss::jmx::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                 | Linked service template               |
|:-------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| class-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/classcount.pm)]           | App-Jboss-Class-Count-JMX-custom      |
| datasource-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jboss/jmx/mode/datasourceusage.pm)] | App-Jboss-Datasource-Usage-JMX-custom |
| list-datasources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jboss/jmx/mode/listdatasources.pm)] | Not used in this Monitoring Connector |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/memory.pm)]                    | App-Jboss-Memory-JMX-custom           |
| memory-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/memorydetailed.pm)]   | App-Jboss-Memory-Detailed-JMX-custom  |
| threads [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/threads.pm)]                  | App-Jboss-Threads-JMX-custom          |

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
<TabItem value="Datasource-Usage" label="Datasource-Usage">

| Option            | Description                                                                                  |
|:------------------|:---------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='num-active'   |
| --filter-name     |   Filter datasource name (can be a regexp).                                                  |
| --warning-*       |   Warning threshold. Can be: 'active-con', 'available-con', 'created-con', 'in-use-con'.     |
| --critical-*      |   Critical threshold. Can be: 'active-con', 'available-con', 'created-con', 'in-use-con'.    |

</TabItem>
<TabItem value="Jboss-Class-Count" label="Jboss-Class-Count">

| Option                   | Description                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='current'   |
| --warning-* --critical-* |   Thresholds. Can be: 'unloaded', 'loaded', 'current'.                                    |

</TabItem>
<TabItem value="Jboss-Memory" label="Jboss-Memory">

| Option             | Description                                         |
|:-------------------|:----------------------------------------------------|
| --warning-heap     |   Warning threshold of Heap memory usage            |
| --critical-heap    |   Critical threshold of Heap memory usage           |
| --warning-nonheap  |   Warning threshold of NonHeap memory usage         |
| --critical-nonheap |   Critical threshold of NonHeap memory usage        |
| --units            |   Units of thresholds (default: '%') ('%', 'B').    |

</TabItem>
<TabItem value="Jboss-Memory-Detailed" label="Jboss-Memory-Detailed">

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
<TabItem value="Jboss-Threads" label="Jboss-Threads">

| Option       | Description                                                     |
|:-------------|:----------------------------------------------------------------|
| --warning-*  |   Warning threshold. Can be: 'active', 'started', 'daemon'.     |
| --critical-* |   Critical threshold. Can be: 'active', 'started', 'daemon'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_jboss_jmx.pl \
	--plugin=apps::java::jboss::jmx::plugin \
	--mode=threads \
	--help
```
