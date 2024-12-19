---
id: cloud-prometheus-cadvisor-api
title: cAdvisor
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **cAdvisor** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **cAdvisor** brings a host template:

* **Cloud-Prometheus-cAdvisor-Api-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Prometheus-cAdvisor-Api-custom" label="Cloud-Prometheus-cAdvisor-Api-custom">

| Service Alias        | Service Template                                | Service Description           |
|:---------------------|:------------------------------------------------|:------------------------------|
| Container-Cpu        | Cloud-Prometheus-cAdvisor-Cpu-Api-custom        | Check container CPU usage     |
| Container-Load       | Cloud-Prometheus-cAdvisor-Load-Api-custom       | Check container load          |
| Container-Memory     | Cloud-Prometheus-cAdvisor-Memory-Api-custom     | Check container memory usage  |
| Container-Storage    | Cloud-Prometheus-cAdvisor-Storage-Api-custom    | Check container storage usage |
| Container-Task-State | Cloud-Prometheus-cAdvisor-Task-State-Api-custom | Check container tasks state   |

> The services listed above are created automatically when the **Cloud-Prometheus-cAdvisor-Api-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Container-Cpu" label="Container-Cpu">

| Name                                              | Unit  |
|:--------------------------------------------------|:------|
| *containers*#container.cpu.utilization.percentage | %     |
| *containers*#container.cpu.throttled.percentage   | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Container-Load" label="Container-Load">

| Name                              | Unit  |
|:----------------------------------|:------|
| *containers*#container.load.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Container-Memory" label="Container-Memory">

| Name                           | Unit  |
|:-------------------------------|:------|
| *containers*#memory..bytes     | B     |
| *containers*#memory..bytes     | B     |
| *containers*#cache.usage.bytes | B     |
| *containers*#rss.usage.bytes   | B     |
| *containers*#swap.usage.bytes  | B     |

</TabItem>
<TabItem value="Container-Storage" label="Container-Storage">

| Name                                               | Unit  |
|:---------------------------------------------------|:------|
| *containers*~*disk_name*#storage.space.usage.bytes | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Container-Task-State" label="Container-Task-State">

| Name                                      | Unit  |
|:------------------------------------------|:------|
| *containers1*#tasks.sleeping.count        | count |
| *containers2*#tasks.sleeping.count        | count |
| *containers1*#tasks.running.count         | count |
| *containers2*#tasks.running.count         | count |
| *containers1*#tasks.stopped.count         | count |
| *containers2*#tasks.stopped.count         | count |
| *containers1*#tasks.uninterruptible.count | count |
| *containers2*#tasks.uninterruptible.count | count |
| *containers1*#tasks.iowaiting.count       | count |
| *containers2*#tasks.iowaiting.count       | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

It is essential to have Docker, a Prometheus configuration file, and appropriate Docker volumes to use Prometheus with cAdvisor.

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
dnf install centreon-pack-cloud-prometheus-cadvisor-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-prometheus-cadvisor-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-prometheus-cadvisor-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-prometheus-cadvisor-api
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **cAdvisor** connector through
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
dnf install centreon-plugin-Cloud-Prometheus-cAdvisor-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Prometheus-cAdvisor-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-prometheus-cadvisor-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Prometheus-cAdvisor-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Prometheus-cAdvisor-Api-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                          | Default value     | Mandatory   |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROMETHEUSAPIHOSTNAME | Prometheus hostname                                                                                  |                   |             |
| PROMETHEUSAPIPROTO    | Specify https if needed (default: 'http')                                                            | http              |             |
| PROMETHEUSAPIPORT     | API port (default: 9090)                                                                             | 9090              |             |
| PROMETHEUSAPIURL      | API url path (default: '/api/v1')                                                                    | /api/v1           |             |
| EXTRAOPTIONS          | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Container-Cpu" label="Container-Cpu">

| Macro             | Description                                                                                        | Default value              | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CONTAINER         | Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')    | container\_name!~".*POD.*" |             |
| POD               | Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                     | pod\_name=~".*"            |             |
| WARNINGTHROTTLED  | Threshold                                                                                          | 10                         |             |
| CRITICALTHROTTLED | Threshold                                                                                          | 20                         |             |
| WARNINGUSAGE      | Threshold                                                                                          | 80                         |             |
| CRITICALUSAGE     | Threshold                                                                                          | 90                         |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                  |             |

</TabItem>
<TabItem value="Container-Load" label="Container-Load">

| Macro        | Description                                                                                        | Default value              | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CONTAINER    | Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')    | container\_name!~".*POD.*" |             |
| POD          | Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                     | pod\_name=~".*"            |             |
| WARNINGLOAD  | Warning threshold                                                                                  |                            |             |
| CRITICALLOAD | Critical threshold                                                                                 |                            |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                  |             |

</TabItem>
<TabItem value="Container-Memory" label="Container-Memory">

| Macro           | Description                                                                                        | Default value              | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CONTAINER       | Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')    | container\_name!~".*POD.*" |             |
| POD             | Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                     | pod\_name=~".*"            |             |
| WARNINGCACHE    | Threshold                                                                                          |                            |             |
| CRITICALCACHE   | Threshold                                                                                          |                            |             |
| WARNINGRSS      | Threshold                                                                                          |                            |             |
| CRITICALRSS     | Threshold                                                                                          |                            |             |
| WARNINGSWAP     | Threshold                                                                                          |                            |             |
| CRITICALSWAP    | Threshold                                                                                          |                            |             |
| WARNINGUSAGE    | Threshold                                                                                          | 80                         |             |
| CRITICALUSAGE   | Threshold                                                                                          | 90                         |             |
| WARNINGWORKING  | Threshold                                                                                          |                            |             |
| CRITICALWORKING | Threshold                                                                                          |                            |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                  |             |

</TabItem>
<TabItem value="Container-Storage" label="Container-Storage">

| Macro         | Description                                                                                        | Default value              | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CONTAINER     | Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')    | container\_name!~".*POD.*" |             |
| POD           | Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                     | pod\_name=~".*"            |             |
| DEVICE        | Filter on a specific device (must be a PromQL filter, Default: 'device=~".*"')                     | device=~".*"               |             |
| UNITS         | Units of thresholds (default: '%') ('%', 'B')                                                      | %                          |             |
| WARNINGUSAGE  | Warning threshold                                                                                  | 80                         |             |
| CRITICALUSAGE | Critical threshold                                                                                 | 90                         |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                  |             |

</TabItem>
<TabItem value="Container-Task-State" label="Container-Task-State">

| Macro                   | Description                                                                                        | Default value              | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CONTAINER               | Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')    | container\_name!~".*POD.*" |             |
| POD                     | Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                     | pod\_name=~".*"            |             |
| STATE                   | Filter on a specific state (must be a PromQL filter, Default: 'state=~".*"')                       | state=~".*"                |             |
| WARNINGIOWAITING        | Threshold                                                                                          |                            |             |
| CRITICALIOWAITING       | Threshold                                                                                          |                            |             |
| WARNINGRUNNING          | Threshold                                                                                          |                            |             |
| CRITICALRUNNING         | Threshold                                                                                          |                            |             |
| WARNINGSLEEPING         | Threshold                                                                                          |                            |             |
| CRITICALSLEEPING        | Threshold                                                                                          |                            |             |
| WARNINGSTOPPED          | Threshold                                                                                          |                            |             |
| CRITICALSTOPPED         | Threshold                                                                                          |                            |             |
| WARNINGUNINTERRUPTIBLE  | Threshold                                                                                          |                            |             |
| CRITICALUNINTERRUPTIBLE | Threshold                                                                                          |                            |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                  |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_prometheus_cadvisor_api.pl \
	--plugin=cloud::prometheus::exporters::cadvisor::plugin \
	--mode=task-state \
	--hostname=10.0.0.1 \
	--url-path='/api/v1' \
	--port='9090' \
	--proto='http'  \
	--container='container\_name!~".*POD.*"' \
	--pod='pod\_name=~".*"' \
	--state='state=~".*"' \
	--warning-sleeping='' \
	--critical-sleeping='' \
	--warning-running='' \
	--critical-running='' \
	--warning-stopped='' \
	--critical-stopped='' \
	--warning-uninterruptible='' \
	--critical-uninterruptible='' \
	--warning-iowaiting='' \
	--critical-iowaiting='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All containers tasks states are ok | 'containers1#tasks.sleeping.count'=5212;;;0; 'containers2#tasks.sleeping.count'=72866;;;0; 'containers1#tasks.running.count'=3393;;;0; 'containers2#tasks.running.count'=4483;;;0; 'containers1#tasks.stopped.count'=1588;;;0; 'containers2#tasks.stopped.count'=97744;;;0; 'containers1#tasks.uninterruptible.count'=18752;;;0; 'containers2#tasks.uninterruptible.count'=54196;;;0; 'containers1#tasks.iowaiting.count'=74768;;;0; 'containers2#tasks.iowaiting.count'=34206;;;0;
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
/usr/lib/centreon/plugins/centreon_prometheus_cadvisor_api.pl \
	--plugin=cloud::prometheus::exporters::cadvisor::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                               | Linked service template                         |
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/cpu.pm)]                        | Cloud-Prometheus-cAdvisor-Cpu-Api-custom        |
| list-containers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/listcontainers.pm)] | Not used in this Monitoring Connector           |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/load.pm)]                      | Cloud-Prometheus-cAdvisor-Load-Api-custom       |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/memory.pm)]                  | Cloud-Prometheus-cAdvisor-Memory-Api-custom     |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/storage.pm)]                | Cloud-Prometheus-cAdvisor-Storage-Api-custom    |
| task-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/taskstate.pm)]           | Cloud-Prometheus-cAdvisor-Task-State-Api-custom |

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
| --timeframe                                |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --step                                     |   Set the step of the metric query (examples: '30s', '1m', '15m', '1h').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --hostname                                 |   Prometheus hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --url-path                                 |   API url path (default: '/api/v1')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --port                                     |   API port (default: 9090)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --credentials                              |   Specify this option if you access the API with authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --username                                 |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --password                                 |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --basic                                    |   Specify this option if you access the API over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access the API over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --header                                   |   Set HTTP header (can be multiple, example: --header='Authorization:Bearer ABCD')  Useful to access Prometheus API hosted in a specific environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Container-Cpu" label="Container-Cpu">

| Option            | Description                                                                                                                                                                                                                                                     |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --cpu-attribute   |   Set the CPU attribute to match element (must be a PromQL filter, Default: 'cpu="total"')                                                                                                                                                                      |
| --container       |   Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')                                                                                                                                                               |
| --pod             |   Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                                                                                                                                                                                |
| --warning-*       |   Warning threshold. Can be: 'usage', 'throttled'.                                                                                                                                                                                                              |
| --critical-*      |   Critical threshold. Can be: 'usage', 'throttled'.                                                                                                                                                                                                             |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                                                            |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - throttled: ^container\_cpu\_cfs\_throttled\_seconds\_total.*     - usage: ^container\_cpu\_usage\_seconds\_total.*   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='throttled'                                                                                                                                                                       |

</TabItem>
<TabItem value="Container-Load" label="Container-Load">

| Option            | Description                                                                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --container       |   Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')                                                                                        |
| --pod             |   Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                                                                                                         |
| --warning-load    |   Warning threshold.                                                                                                                                                                     |
| --critical-load   |   Critical threshold.                                                                                                                                                                    |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                     |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - load: ^container\_cpu\_load\_average\_10s$    |

</TabItem>
<TabItem value="Container-Memory" label="Container-Memory">

| Option            | Description                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --container       |   Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')                                                                                                                                                                                                                                                                                                                           |
| --pod             |   Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                                                                                                                                                                                                                                                                                                                                            |
| --warning-*       |   Warning threshold. Can be: 'usage', 'working', 'cache' (B), 'rss' (B), 'swap' (B).                                                                                                                                                                                                                                                                                                                                        |
| --critical-*      |   Critical threshold. Can be: 'usage', 'working', 'cache' (B), 'rss' (B), 'swap' (B).                                                                                                                                                                                                                                                                                                                                       |
| --units           |   Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                                                                                                                                                                                                                            |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                                                                                                                                                                                                                        |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - limits: ^container\_spec\_memory\_limit\_bytes.*     - usage: ^container\_memory\_usage\_bytes.*     - working: ^container\_memory\_working\_set\_bytes.*     - cache: ^container\_memory\_cache.*     - rss: ^container\_memory\_rss.*     - swap: ^container\_memory\_swap.*   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='usage'                                                                                                                                                                                                                                                                                                                                       |

</TabItem>
<TabItem value="Container-Storage" label="Container-Storage">

| Option            | Description                                                                                                                                                                                                                    |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --container       |   Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')                                                                                                                              |
| --pod             |   Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                                                                                                                                               |
| --device          |   Filter on a specific device (must be a PromQL filter, Default: 'device=~".*"')                                                                                                                                               |
| --units           |   Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                               |
| --free            |   Thresholds are on free space left.                                                                                                                                                                                           |
| --warning-usage   |   Warning threshold.                                                                                                                                                                                                           |
| --critical-usage  |   Critical threshold.                                                                                                                                                                                                          |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                           |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - used: ^container\_fs\_usage\_bytes.*     - limit: ^container\_fs\_limit\_bytes.*    |

</TabItem>
<TabItem value="Container-Task-State" label="Container-Task-State">

| Option            | Description                                                                                                                                                                           |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --container       |   Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')                                                                                     |
| --pod             |   Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                                                                                                      |
| --state           |   Filter on a specific state (must be a PromQL filter, Default: 'state=~".*"')                                                                                                        |
| --warning-*       |   Warning threshold. Can be: 'sleeping', 'running', 'stopped', 'uninterruptible', 'iowaiting'.                                                                                        |
| --critical-*      |   Critical threshold. Can be: 'sleeping', 'running', 'stopped', 'uninterruptible', 'iowaiting'.                                                                                       |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                  |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - tasks\_state: ^container\_tasks\_state$    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_prometheus_cadvisor_api.pl \
	--plugin=cloud::prometheus::exporters::cadvisor::plugin \
	--mode=task-state \
	--help
```
