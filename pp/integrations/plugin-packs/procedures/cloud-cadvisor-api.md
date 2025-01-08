---
id: cloud-cadvisor-api
title: cAdvisor API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

cAdvisor (Container Advisor) provides container users an understanding of the resource usage and 
performance characteristics of their running containers. 

It is a running daemon that collects, aggregates, processes, and exports information about running containers.

## Pack assets

### Templates

The Monitoring Connector **cAdvisor API** brings a host template:

* **Cloud-cAdvisor-Api-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-cAdvisor-Api-custom" label="Cloud-cAdvisor-Api-custom">

| Service Alias | Service Template                      | Service Description                      |
|:--------------|:--------------------------------------|:-----------------------------------------|
| Node-Status   | Cloud-cAdvisor-Node-Status-Api-custom | Check cAdvisor node metrics and statuses |

> The services listed above are created automatically when the **Cloud-cAdvisor-Api-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias     | Service Template                            | Service Description           | Discovery  |
|:------------------|:--------------------------------------------|:------------------------------|:----------:|
| Container-Disk-IO | Cloud-cAdvisor-Container-Disk-IO-Api-custom | Check container disk I/O.    | X          |
| Container-Traffic | Cloud-cAdvisor-Container-Traffic-Api-custom | Check container network usage | X          |
| Container-Usage   | Cloud-cAdvisor-Container-Usage-Api-custom   | Check container usage         | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                            | Description                                                   |
|:-------------------------------------|:--------------------------------------------------------------|
| Cloud-cAdvisor-API-Container-Disk-IO | Discover the disk partitions and monitor space occupation     |
| Cloud-cAdvisor-API-Container-Traffic | Discover network interfaces and monitor bandwidth utilization |
| Cloud-cAdvisor-API-Container-Usage   | Discover containers and monitor their resource usage          |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Container-Disk-IO" label="Container-Disk-IO">

| Metric name                                      | Unit  |
|:-------------------------------------------------|:------|
| *containers_diskio*#disk.io.read.bytespersecond  | B/s   |
| *containers_diskio*#disk.io.write.bytespersecond | B/s   |

</TabItem>
<TabItem value="Container-Traffic" label="Container-Traffic">

| Metric name                                              | Unit  |
|:---------------------------------------------------------|:------|
| *containers_traffic*#container.traffic.in.bitspersecond  | b/s   |
| *containers_traffic*#container.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Container-Usage" label="Container-Usage">

| Metric name                                              | Unit  |
|:---------------------------------------------------------|:------|
| *containers*#container.cpu.count                         | count |
| *containers*#container.cpu.utilization.percentage        | %     |
| *containers*#container.cpu.user.utilization.percentage   | %     |
| *containers*#container.cpu.system.utilization.percentage | %     |
| *containers*#container.memory.usage.bytes                | B     |
| *containers*#container.memory.cache.usage.bytes          | B     |
| *containers*#container.memory.rss.usage.bytes            | B     |
| *containers*#container.swap.usage.bytes                  | B     |

</TabItem>
<TabItem value="Node-Status" label="Node-Status">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| *node*#node.containers.running.count | count |
| *node*#node.core.count               | count |
| *node*#node.memory.bytes             | B     |
| *node*#node.cpu.frequency.hertz      | Hz    |

</TabItem>
</Tabs>

## Prerequisites

### cAdvisor

A running cAdvisor container should be available. You can refer to the official
[quick start](https://github.com/google/cadvisor#quick-start-running-cadvisor-in-a-docker-container).

### Network flow

The Poller should be able to reach the cAdvisor Host over the TCP/8080 port. Note that the port 
may be different on your setup. 

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
dnf install centreon-pack-cloud-cadvisor-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-cadvisor-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-cadvisor-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-cadvisor-api
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **cAdvisor API** connector through
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
dnf install centreon-plugin-Cloud-cAdvisor-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-cAdvisor-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-cadvisor-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-cAdvisor-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-cAdvisor-Api-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                   | Description                                                                                           | Default value       | Mandatory   |
|:------------------------|:------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| CADVISORAPIPROTO        | Specify https if needed (Default: 'http')                                                             | http                |             |
| CADVISORAPIPORT         | Port used (Default: 8080)                                                                             | 8080                |             |
| CADVISORAPIPATH         | Path used (Default: '/containers/docker')                                                             | /containers/docker/ |             |
| PROXYURL                | Proxy URL. Eg: http://my.proxy:3128                                                                   |                     |             |
| CADVISORAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                     |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Container-Disk-IO" label="Container-Disk-IO">

| Macro               | Description                                                                                         | Default value        | Mandatory   |
|:--------------------|:----------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| CONTAINERID         | Exact container ID                                                                                  |                      |             |
| CONTAINERNAME       | Exact container name (if multiple names: names separated by ':')                                    |                      |             |
| FILTERCONTAINERNAME | Filter by container name (can be a regexp)                                                          |                      |             |
| WARNINGDISKIOREAD   | Warning threshold                                                                                   |                      |             |
| CRITICALDISKIOREAD  | Critical threshold                                                                                  |                      |             |
| WARNINGDISKIOWRITE  | Warning threshold                                                                                   |                      |             |
| CRITICALDISKIOWRITE | Critical threshold                                                                                  |                      |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --use-name |             |

</TabItem>
<TabItem value="Container-Traffic" label="Container-Traffic">

| Macro               | Description                                                                                         | Default value        | Mandatory   |
|:--------------------|:----------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| CONTAINERID         | Exact container ID                                                                                  |                      |             |
| CONTAINERNAME       | Exact container name (if multiple names: names separated by ':')                                    |                      |             |
| FILTERCONTAINERNAME | Filter by container name (can be a regexp)                                                          |                      |             |
| WARNINGTRAFFICIN    | Warning threshold                                                                                   |                      |             |
| CRITICALTRAFFICIN   | Critical threshold                                                                                  |                      |             |
| WARNINGTRAFFICOUT   | Warning threshold                                                                                   |                      |             |
| CRITICALTRAFFICOUT  | Critical threshold                                                                                  |                      |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --use-name |             |

</TabItem>
<TabItem value="Container-Usage" label="Container-Usage">

| Macro               | Description                                                                                         | Default value        | Mandatory   |
|:--------------------|:----------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| CONTAINERID         | Exact container ID                                                                                  |                      |             |
| CONTAINERNAME       | Exact container name (if multiple names: names separated by ':')                                    |                      |             |
| FILTERCONTAINERNAME | Filter by container name (can be a regexp)                                                          |                      |             |
| WARNINGCPUNUMBER    | Warning threshold                                                                                   |                      |             |
| CRITICALCPUNUMBER   | Critical threshold                                                                                  |                      |             |
| WARNINGCPUSYSTEM    | Warning threshold                                                                                   |                      |             |
| CRITICALCPUSYSTEM   | Critical threshold                                                                                  |                      |             |
| WARNINGCPUTOTAL     | Warning threshold                                                                                   |                      |             |
| CRITICALCPUTOTAL    | Critical threshold                                                                                  |                      |             |
| WARNINGCPUUSER      | Warning threshold                                                                                   |                      |             |
| CRITICALCPUUSER     | Critical threshold                                                                                  |                      |             |
| WARNINGMEMORY       | Warning threshold                                                                                   |                      |             |
| CRITICALMEMORY      | Critical threshold                                                                                  |                      |             |
| WARNINGMEMORYCACHE  | Warning threshold                                                                                   |                      |             |
| CRITICALMEMORYCACHE | Critical threshold                                                                                  |                      |             |
| WARNINGMEMORYRSS    | Warning threshold                                                                                   |                      |             |
| CRITICALMEMORYRSS   | Critical threshold                                                                                  |                      |             |
| WARNINGSWAP         | Warning threshold                                                                                   |                      |             |
| CRITICALSWAP        | Critical threshold                                                                                  |                      |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --use-name |             |

</TabItem>
<TabItem value="Node-Status" label="Node-Status">

| Macro                     | Description                                                                                         | Default value     | Mandatory   |
|:--------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONTAINERSRUNNING  | Thresholds                                                                                          |                   |             |
| CRITICALCONTAINERSRUNNING | Thresholds                                                                                          |                   |             |
| WARNINGCPUFREQUENCY       | Thresholds                                                                                          |                   |             |
| CRITICALCPUFREQUENCY      | Thresholds                                                                                          |                   |             |
| WARNINGMEMORYCAPACITY     | Thresholds                                                                                          |                   |             |
| CRITICALMEMORYCAPACITY    | Thresholds                                                                                          |                   |             |
| WARNINGNUMCORES           | Thresholds                                                                                          |                   |             |
| CRITICALNUMCORES          | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_cadvisor_api.pl \
	--plugin=cloud::cadvisor::restapi::plugin \
	--mode=node-status \
	--hostname=10.0.0.1 \
	--port='8080' \
	--proto='http' \
	--api-path='/containers/docker/' \
	--proxyurl=''  \
	--warning-containers-running='' \
	--critical-containers-running='' \
	--warning-num-cores='' \
	--critical-num-cores='' \
	--warning-memory-capacity='' \
	--critical-memory-capacity='' \
	--warning-cpu-frequency='' \
	--critical-cpu-frequency='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All node informations are ok | '*node*#node.containers.running.count'=;;;0;'*node*#node.core.count'=;;;0;'*node*#node.memory.bytes'=B;;;0;'*node*#node.cpu.frequency.hertz'=Hz;;;0;
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
/usr/lib/centreon/plugins/centreon_cadvisor_api.pl \
	--plugin=cloud::cadvisor::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                  | Linked service template                     |
|:--------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| container-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cadvisor/restapi/mode/containerusage.pm)] | Cloud-cAdvisor-Container-Usage-Api-custom   |
| disk-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cadvisor/restapi/mode/diskio.pm)]                 | Cloud-cAdvisor-Container-Disk-IO-Api-custom |
| list-containers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cadvisor/restapi/mode/listcontainers.pm)] | Used for service discovery                  |
| node-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cadvisor/restapi/mode/nodestatus.pm)]         | Cloud-cAdvisor-Node-Status-Api-custom       |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cadvisor/restapi/mode/traffic.pm)]                | Cloud-cAdvisor-Container-Traffic-Api-custom |

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
| --hostname                                 | IP Addr/FQDN of the cadvisor node (can be multiple).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --port                                     | Port used (Default: 8080)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    | Specify https if needed (Default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-path                                 | Path used (Default: '/containers/docker')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --credentials                              | Specify this option if you access webpage over basic authentification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --username                                 | Specify username for basic authentification (Mandatory if --credentials is specidied)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --password                                 | Specify password for basic authentification (Mandatory if --credentials is specidied)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timeout                                  | Threshold for HTTP timeout (Default: 10)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --cert-file                                | Specify certificate to send to the webserver                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --key-file                                 | Specify key to send to the webserver                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --cacert-file                              | Specify root certificate to send to the webserver                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --cert-pwd                                 | Specify certificate's password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --cert-pkcs12                              | Specify type of certificate (PKCS12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Container-Disk-IO" label="Container-Disk-IO">

| Option            | Description                                                                                   |
|:------------------|:----------------------------------------------------------------------------------------------|
| --container-id    | Exact container ID.                                                                           |
| --container-name  | Exact container name (if multiple names: names separated by ':').                             |
| --use-name        | Use name for perfdata and display.                                                            |
| --filter-name     | Filter by container name (can be a regexp).                                                   |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='^diskio-read$'   |
| --warning-*       | Warning threshold. Can be: 'diskio-read', 'diskio-write'.                                     |
| --critical-*      | Critical threshold. Can be: 'diskio-read', 'diskio-write'.                                    |

</TabItem>
<TabItem value="Container-Traffic" label="Container-Traffic">

| Option            | Description                                                                                  |
|:------------------|:---------------------------------------------------------------------------------------------|
| --container-id    | Exact container ID.                                                                          |
| --container-name  | Exact container name (if multiple names: names separated by ':').                            |
| --use-name        | Use docker name for perfdata and display.                                                    |
| --filter-name     | Filter by container name (can be a regexp).                                                  |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='^traffic-in$'   |
| --warning-*       | Warning threshold. Can be: 'traffic-in', 'traffic-out'.                                      |
| --critical-*      | Critical threshold. Can be: 'traffic-in', 'traffic-out'.                                     |

</TabItem>
<TabItem value="Container-Usage" label="Container-Usage">

| Option            | Description                                                                                                     |
|:------------------|:----------------------------------------------------------------------------------------------------------------|
| --container-id    | Exact container ID.                                                                                             |
| --container-name  | Exact container name (if multiple names: names separated by ':').                                               |
| --use-name        | Use name for perfdata and display.                                                                              |
| --filter-name     | Filter by container name (can be a regexp).                                                                     |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='cpu'                               |
| --warning-*       | Warning threshold. Can be: 'read-iops', 'write-iops', 'traffic-in', 'traffic-out', 'cpu' (%), 'memory' (%).     |
| --critical-*      | Critical threshold. Can be: 'read-iops', 'write-iops', 'traffic-in', 'traffic-out', 'cpu' (%), 'memory' (%).    |

</TabItem>
<TabItem value="Node-Status" label="Node-Status">

| Option                   | Description                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'containers-running', 'num-cores', 'memory-capacity', 'cpu-frequency'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cadvisor_api.pl \
	--plugin=cloud::cadvisor::restapi::plugin \
	--mode=node-status \
	--help
```
