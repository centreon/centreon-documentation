---
id: cloud-gcp-compute-computeengine
title: Google Compute Engine
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Google Compute Engine** brings a host template:

* **Cloud-Gcp-Compute-ComputeEngine-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Gcp-Compute-ComputeEngine-custom" label="Cloud-Gcp-Compute-ComputeEngine-custom">

| Service Alias | Service Template                                   | Service Description |
|:--------------|:---------------------------------------------------|:--------------------|
| Cpu           | Cloud-Gcp-Compute-ComputeEngine-Cpu-Api-custom     | Check CPU usage     |
| Diskio        | Cloud-Gcp-Compute-ComputeEngine-Diskio-Api-custom  | Check disks I       |
| Network       | Cloud-Gcp-Compute-ComputeEngine-Network-Api-custom | Check network usage |

> The services listed above are created automatically when the **Cloud-Gcp-Compute-ComputeEngine-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name             | Description                              |
|:----------------------|:-----------------------------------------|
| Google Compute Engine | Discover Google Compute Engine instances |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| computeengine.cpu.utilization.percentage | %     |
| computeengine.cpu.reserved_cores.count   | count |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Metric name                                     | Unit  |
|:------------------------------------------------|:------|
| computeengine.disk.read.volume.bytes            | B     |
| computeengine.disk.throttled.read.volume.bytes  | B     |
| computeengine.disk.write.volume.bytes           | B     |
| computeengine.disk.throttled.write.volume.bytes | B     |
| computeengine.disk.read.ops.count               | count |
| computeengine.disk.write.ops.count              | count |

</TabItem>
<TabItem value="Network" label="Network">

| Metric name                                  | Unit    |
|:---------------------------------------------|:--------|
| computeengine.network.received.volume.bytes  | B       |
| computeengine.network.sent.volume.bytes      | B       |
| computeengine.network.received.packets.count | packets |
| computeengine.network.sent.packets.count     | packets |

</TabItem>
</Tabs>

## Prerequisites

### Google Cloud Configuration

Configure a service account key (download its private key as a JSON file) for which the following privileges have to be granted:

| Google Scope                                     | Description                                                     |
| :----------------------------------------------- | :-------------------------------------------------------------- |
| https://www.googleapis.com/auth/cloud-platform   | View and manage your data across Google Cloud Platform services |

How to create a service account key: https://developers.google.com/identity/protocols/oauth2/service-account

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-gcp-compute-computeengine
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-gcp-compute-computeengine
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-gcp-compute-computeengine
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-gcp-compute-computeengine
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Google Compute Engine** connector through
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
dnf install centreon-plugin-Cloud-Gcp-Compute-ComputeEngine-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Gcp-Compute-ComputeEngine-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-gcp-compute-computeengine-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Gcp-Compute-ComputeEngine-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Gcp-Compute-ComputeEngine-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                                                                           | Default value                                  | Mandatory   |
|:---------------------|:------------------------------------------------------------------------------------------------------|:-----------------------------------------------|:-----------:|
| GCPDIMENSIONNAME     | Set dimension name (Default: 'metric.labels.instance\_name')                                          | resource.labels.instance\_id                   |             |
| GCPDIMENSIONOPERATOR | Set dimension operator (Default: 'equals'. Can also be: 'regexp', 'starts')                           | equals                                         |             |
| GCPDIMENSIONVALUE    | Set dimension value (Required)                                                                        |                                                |             |
| GCPKEYFILEPATH       | Set GCP key file path                                                                                 |                                                | X           |
| GCPSCOPEENDPOINT     | Set GCP scope endpoint URL (Default: 'https://www.googleapis.com/auth/cloud-platform')                | https://www.googleapis.com/auth/cloud-platform |             |
| PROXYURL             | Proxy URL. Eg: http://my.proxy:3128                                                                   |                                                |             |
| GCPEXTRAOPTIONS      | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                                                |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro                 | Description                                                                                                            | Default value     | Mandatory   |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME             | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                | 900               |             |
| AGGREGATION           | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| FILTERMETRIC          | Filter metrics (Can be: 'instance/cpu/utilization', 'instance/cpu/reserved\_cores') (Can be a regexp)                  |                   |             |
| WARNINGCORESRESERVED  | Thresholds (                                                                                                           |                   |             |
| CRITICALCORESRESERVED | Thresholds (                                                                                                           |                   |             |
| WARNINGUTILIZATION    | Thresholds (                                                                                                           |                   |             |
| CRITICALUTILIZATION   | Thresholds (                                                                                                           |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                    | --verbose         |             |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Macro                        | Description                                                                                                                                                                                                                                                                            | Default value     | Mandatory   |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                                                                                                                                                                | 900               |             |
| AGGREGATION                  | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times                                                                                                                                                                 | average           |             |
| FILTERMETRIC                 | Filter metrics (Can be: 'instance/disk/read\_bytes\_count', 'instance/disk/throttled\_read\_bytes\_count', 'instance/disk/write\_bytes\_count', 'instance/disk/throttled\_write\_bytes\_count', 'instance/disk/read\_ops\_count', 'instance/disk/write\_ops\_count') (Can be a regexp) |                   |             |
| WARNINGREADOPS               | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| CRITICALREADOPS              | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| WARNINGREADVOLUME            | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| CRITICALREADVOLUME           | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| WARNINGTHROTTLEDREADVOLUME   | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| CRITICALTHROTTLEDREADVOLUME  | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| WARNINGTHROTTLEDWRITEVOLUME  | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| CRITICALTHROTTLEDWRITEVOLUME | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| WARNINGWRITEOPS              | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| CRITICALWRITEOPS             | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| WARNINGWRITEVOLUME           | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| CRITICALWRITEVOLUME          | Thresholds (                                                                                                                                                                                                                                                                           |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                                                    | --verbose         |             |

</TabItem>
<TabItem value="Network" label="Network">

| Macro                   | Description                                                                                                                                                                                                       | Default value     | Mandatory   |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME               | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                                                                                           | 900               |             |
| AGGREGATION             | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times                                                                                            | average           |             |
| FILTERMETRIC            | Filter metrics (Can be: 'instance/network/received\_bytes\_count', 'instance/network/sent\_bytes\_count', 'instance/network/received\_packets\_count', 'instance/network/sent\_packets\_count') (Can be a regexp) |                   |             |
| WARNINGRECEIVEDPACKETS  | Thresholds (                                                                                                                                                                                                      |                   |             |
| CRITICALRECEIVEDPACKETS | Thresholds (                                                                                                                                                                                                      |                   |             |
| WARNINGRECEIVEDVOLUME   | Thresholds (                                                                                                                                                                                                      |                   |             |
| CRITICALRECEIVEDVOLUME  | Thresholds (                                                                                                                                                                                                      |                   |             |
| WARNINGSENTPACKETS      | Thresholds (                                                                                                                                                                                                      |                   |             |
| CRITICALSENTPACKETS     | Thresholds (                                                                                                                                                                                                      |                   |             |
| WARNINGSENTVOLUME       | Thresholds (                                                                                                                                                                                                      |                   |             |
| CRITICALSENTVOLUME      | Thresholds (                                                                                                                                                                                                      |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                               | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a GCP Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_gcp_compute_computeengine_api.pl \
	--plugin=cloud::google::gcp::compute::computeengine::plugin \
	--mode=network \
	--proxyurl='' \
	--key-file='' \
	--scope-endpoint='https://www.googleapis.com/auth/cloud-platform' \
	--dimension-name='resource.labels.instance_id' \
	--dimension-operator='equals' \
	--dimension-value=''   \
	--filter-metric='' \
	--timeframe='900' \
	--aggregation='average' \
	--warning-sent-packets='' \
	--critical-sent-packets='' \
	--warning-sent-volume='' \
	--critical-sent-volume='' \
	--warning-received-volume='' \
	--critical-received-volume='' \
	--warning-received-packets='' \
	--critical-received-packets='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: received: 92 sent: 32 received packets: 44 sent packets: 48 | 'computeengine.network.received.volume.bytes'=92B;;;; 'computeengine.network.sent.volume.bytes'=32B;;;; 'computeengine.network.received.packets.count'=44packets;;;; 'computeengine.network.sent.packets.count'=48packets;;;; 
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
/usr/lib/centreon/plugins/centreon_gcp_compute_computeengine_api.pl \
	--plugin=cloud::google::gcp::compute::computeengine::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                       | Linked service template                            |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/compute/computeengine/mode/cpu.pm)]             | Cloud-Gcp-Compute-ComputeEngine-Cpu-Api-custom     |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/compute/computeengine/mode/discovery.pm)] | Used for host discovery                            |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/compute/computeengine/mode/diskio.pm)]       | Cloud-Gcp-Compute-ComputeEngine-Diskio-Api-custom  |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/compute/computeengine/mode/network.pm)]     | Cloud-Gcp-Compute-ComputeEngine-Network-Api-custom |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Google Cloud Platform Rest API      To connect to the GCP Rest API, you need to create an API key.      Follow the 'How-to guide' at     https://cloud.google.com/video-intelligence/docs/common/auth                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --key-file                                 | Set GCP key file path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --authorization-endpoint                   | Set GCP authorization endpoint URL (Default: 'https://www.googleapis.com/oauth2/v4/token')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --monitoring-endpoint                      | Set GCP monitoring endpoint URL (Default: 'https://monitoring.googleapis.com/v3')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --scope-endpoint                           | Set GCP scope endpoint URL (Default: 'https://www.googleapis.com/auth/cloud-platform')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --zeroed                                   | Set metrics value to 0 if none. Useful when Stackdriver does not return value when not defined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --timeout                                  | Set timeout in seconds (Default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --dimension-name         | Set dimension name (Default: 'metric.labels.instance\_name').                                                             |
| --dimension-operator     | Set dimension operator (Default: 'equals'. Can also be: 'regexp', 'starts').                                              |
| --dimension-value        | Set dimension value (Required).                                                                                           |
| --filter-metric          | Filter metrics (Can be: 'instance/cpu/utilization', 'instance/cpu/reserved\_cores') (Can be a regexp).                    |
| --timeframe              | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                  |
| --aggregation            | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.   |
| --warning-* --critical-* | Thresholds (Can be: 'utilization', 'cores-reserved').                                                                     |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Option                   | Description                                                                                                                                                                                                                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --dimension-name         | Set dimension name (Default: 'metric.labels.instance\_name').                                                                                                                                                                                                                             |
| --dimension-operator     | Set dimension operator (Default: 'equals'. Can also be: 'regexp', 'starts').                                                                                                                                                                                                              |
| --dimension-value        | Set dimension value (Required).                                                                                                                                                                                                                                                           |
| --filter-metric          | Filter metrics (Can be: 'instance/disk/read\_bytes\_count', 'instance/disk/throttled\_read\_bytes\_count', 'instance/disk/write\_bytes\_count', 'instance/disk/throttled\_write\_bytes\_count', 'instance/disk/read\_ops\_count', 'instance/disk/write\_ops\_count') (Can be a regexp).   |
| --timeframe              | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                  |
| --aggregation            | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                                                                                                   |
| --warning-* --critical-* | Thresholds (Can be: 'read-volume', 'throttled-read-volume', 'write-volume', 'throttled-write-volume', 'read-ops', 'write-ops').                                                                                                                                                           |
| --per-second             | Change the data to be unit/sec.                                                                                                                                                                                                                                                           |

</TabItem>
<TabItem value="Network" label="Network">

| Option                   | Description                                                                                                                                                                                                          |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --dimension-name         | Set dimension name (Default: 'metric.labels.instance\_name').                                                                                                                                                        |
| --dimension-operator     | Set dimension operator (Default: 'equals'. Can also be: 'regexp', 'starts').                                                                                                                                         |
| --dimension-value        | Set dimension value (Required).                                                                                                                                                                                      |
| --filter-metric          | Filter metrics (Can be: 'instance/network/received\_bytes\_count', 'instance/network/sent\_bytes\_count', 'instance/network/received\_packets\_count', 'instance/network/sent\_packets\_count') (Can be a regexp).   |
| --timeframe              | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                             |
| --aggregation            | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                              |
| --warning-* --critical-* | Thresholds (Can be: 'received-volume', 'sent-volume', 'received-packets', 'sent-packets').                                                                                                                           |
| --per-second             | Change the data to be unit/sec.                                                                                                                                                                                      |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_gcp_compute_computeengine_api.pl \
	--plugin=cloud::google::gcp::compute::computeengine::plugin \
	--mode=network \
	--help
```
