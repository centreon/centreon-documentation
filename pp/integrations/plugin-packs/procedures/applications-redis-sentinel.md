---
id: applications-redis-sentinel
title: Redis Sentinel
description: "Monitor Redis Sentinel via redis-cli: track cluster quorum status, replica detection, and ping latency for Redis and Sentinel nodes."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Redis Sentinel** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Redis Sentinel** brings a host template:

* **App-Redis-Sentinel-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Redis-Sentinel-custom" label="App-Redis-Sentinel-custom">

| Service Alias     | Service Template                            | Service Description                  | Discovery |
|:------------------|:--------------------------------------------|:-------------------------------------|:---------:|
| Redis-Clusters    | App-Redis-Sentinel-Redis-Clusters-custom    | Check redis clusters informations    |     X     |
| Sentinel-Clusters | App-Redis-Sentinel-Sentinel-Clusters-custom | Check sentinel clusters informations |     X     |

> The services listed above are created automatically when the **App-Redis-Sentinel-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                | Description                                        |
|:-----------------------------------------|:---------------------------------------------------|
| App-Redis-Sentinel-Redis-Cluster-Name    | Discover clusters and monitor redis utilization    |
| App-Redis-Sentinel-Sentinel-Cluster-Name | Discover clusters and monitor sentinel utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Redis-Clusters" label="Redis-Clusters">

| Name                                                              | Unit  |
|:------------------------------------------------------------------|:------|
| *clusters*~cluster.redis.slaves.detected.count                    | count |
| *clusters*~cluster.redis.subjectively_down.count                  | count |
| *clusters*~cluster.redis.objectively_down.count                   | count |
| *clusters*~cluster.redis.slave_replication_offset.stddev.count    | count |
| status                                                            | N/A   |
| *clusters*~*instances*#cluster.redis.ping_ok.latency.milliseconds | ms    |

</TabItem>
<TabItem value="Sentinel-Clusters" label="Sentinel-Clusters">

| Name                                                                 | Unit  |
|:---------------------------------------------------------------------|:------|
| *clusters*~cluster.sentinels.detected.count                          | count |
| *clusters*~cluster.sentinels.subjectively_down.count                 | count |
| *clusters*~cluster.sentinels.objectively_down.count                  | count |
| quorum-status                                                        | N/A   |
| status                                                               | N/A   |
| *clusters*~*instances*#cluster.sentinel.ping_ok.latency.milliseconds | ms    |

</TabItem>
</Tabs>

## Prerequisites

To control your Redis Sentinel, the Poller should be able to perform ```redis-cli``` requests over the TCP/26379 port (by default).
The following commands are used:
* sentinel ckquorum \<cluster_name\>
* sentinel masters
* sentinel replicas \<cluster_name\>
* sentinel sentinels \<cluster_name\>

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-redis-sentinel
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-redis-sentinel
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-redis-sentinel
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-redis-sentinel
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Redis Sentinel** connector through
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
dnf install centreon-plugin-Applications-Redis-Sentinel
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Redis-Sentinel
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-redis-sentinel
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Redis-Sentinel
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Redis-Sentinel-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                                                                                                              | Default value | Mandatory |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| SENTINELUSERNAME     | Sentinel username (redis-cli \>= 6.x mandatory)                                                                                          |               |           |
| SENTINELPASSWORD     | Sentinel password                                                                                                                        |               |     X     |
| SENTINELPORT         | Sentinel port                                                                                                                            | 26379         |           |
| SENTINELEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Redis-Clusters" label="Redis-Clusters">

| Macro                         | Description                                                                                                                                                            | Default value                                                  | Mandatory   |
|:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|:-----------:|
| FILTERCLUSTERNAME             | Filter clusters by name (can be a regexp)                                                                                                                              |                                                                |             |
| WARNINGREDISODOWN             | Threshold                                                                                                                                                              |                                                                |             |
| CRITICALREDISODOWN            | Threshold                                                                                                                                                              |                                                                |             |
| WARNINGREDISPINGOKLATENCY     | Threshold                                                                                                                                                              |                                                                |             |
| CRITICALREDISPINGOKLATENCY    | Threshold                                                                                                                                                              |                                                                |             |
| WARNINGREDISSDOWN             | Threshold                                                                                                                                                              |                                                                |             |
| CRITICALREDISSDOWN            | Threshold                                                                                                                                                              |                                                                |             |
| WARNINGSLAVEREPLOFFSETSTDDEV  | Threshold                                                                                                                                                              |                                                                |             |
| CRITICALSLAVEREPLOFFSETSTDDEV | Threshold                                                                                                                                                              |                                                                |             |
| WARNINGSLAVESDETECTED         | Threshold                                                                                                                                                              |                                                                |             |
| CRITICALSLAVESDETECTED        | Threshold                                                                                                                                                              |                                                                |             |
| CRITICALSTATUS                | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{role\}, %\{address\}, %\{port\}, %\{cluster\_name\} | %\{status\} =~ /o\_down\|s\_down\|master\_down\|disconnected/i |             |
| WARNINGSTATUS                 | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{role\}, %\{address\}, %\{port\}, %\{cluster\_name\}  |                                                                |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                 | --verbose                                                      |             |

</TabItem>
<TabItem value="Sentinel-Clusters" label="Sentinel-Clusters">

| Macro                         | Description                                                                                                                                                 | Default value                                                  | Mandatory   |
|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|:-----------:|
| FILTERCLUSTERNAME             | Filter clusters by name (can be a regexp)                                                                                                                   |                                                                |             |
| CRITICALQUORUMSTATUS          | Set critical threshold for quorum status. You can use the following variables: %\{status\}, %\{cluster\_name\}                                              | %\{status\} =~ /noQuorum/                                      |             |
| WARNINGQUORUMSTATUS           | Set warning threshold for quorum status. You can use the following variables: %\{status\}, %\{address\}, %\{port\}, %\{cluster\_name\}                      |                                                                |             |
| WARNINGSENTINELPINGOKLATENCY  | Threshold                                                                                                                                                   |                                                                |             |
| CRITICALSENTINELPINGOKLATENCY | Threshold                                                                                                                                                   |                                                                |             |
| WARNINGSENTINELSDETECTED      | Threshold                                                                                                                                                   |                                                                |             |
| CRITICALSENTINELSDETECTED     | Threshold                                                                                                                                                   |                                                                |             |
| WARNINGSENTINELSODOWN         | Threshold                                                                                                                                                   |                                                                |             |
| CRITICALSENTINELSODOWN        | Threshold                                                                                                                                                   |                                                                |             |
| WARNINGSENTINELSSDOWN         | Threshold                                                                                                                                                   |                                                                |             |
| CRITICALSENTINELSSDOWN        | Threshold                                                                                                                                                   |                                                                |             |
| CRITICALSTATUS                | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{address\}, %\{port\}, %\{cluster\_name\} | %\{status\} =~ /o\_down\|s\_down\|master\_down\|disconnected/i |             |
| WARNINGSTATUS                 | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{address\}, %\{port\}, %\{cluster\_name\}  |                                                                |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                      | --verbose                                                      |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \
	--plugin=apps::redis::sentinel::plugin \
	--server='10.0.0.1' \
	--port='26379' \
	--username='' \
	--username='SENTINELUSERNAME' \
	--password='SENTINELPASSWORD'  \
	--mode=redis-clusters \
	--filter-cluster-name='' \
	--warning-status='' \
	--critical-status='%\{status\} =~ /o\_down|s\_down|master\_down|disconnected/i' \
	--warning-redis-ping-ok-latency='' \
	--critical-redis-ping-ok-latency='' \
	--warning-slaves-detected='' \
	--critical-slaves-detected='' \
	--warning-redis-sdown='' \
	--critical-redis-sdown='' \
	--warning-redis-odown='' \
	--critical-redis-odown='' \
	--warning-slave-repl-offset-stddev='' \
	--critical-slave-repl-offset-stddev='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: cluster 'mymaster' number of detected slaves: 2, subjectively down instances: 0, objectively down instances: 0 - slave replication offset standard deviation: 843.00 - All redis instances are ok | 'mymaster#cluster.redis.slaves.detected.count'=2;;;0; 'mymaster#cluster.redis.subjectively_down.count'=0;;;0; 'mymaster#cluster.redis.objectively_down.count'=0;;;0; 'cluster.redis.slave_replication_offset.stddev.count'=843.00;;;; 'mymaster~10.25.52.107:6379#cluster.redis.ping_ok.latency.milliseconds'=1024s;;;0; 'mymaster~10.25.52.90:6379#cluster.redis.ping_ok.latency.milliseconds'=185s;;;0; 'mymaster~10.25.52.98:6379#cluster.redis.ping_ok.latency.milliseconds'=355s;;;0;
checking cluster 'mymaster'
    number of detected slaves: 2, subjectively down instances: 0, objectively down instances: 0
    slave replication offset standard deviation: 843.00
    instance '10.25.52.107:6379' status: master [role: master], last ok ping: 1024 ms
    instance '10.25.52.90:6379' status: slave [role: slave], last ok ping: 185 ms
    instance '10.25.52.98:6379' status: slave [role: slave], last ok ping: 355 ms

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
/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \
	--plugin=apps::redis::sentinel::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                   | Linked service template                     |
|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| list-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/redis/sentinel/mode/listclusters.pm)]         | Used for service discovery                  |
| redis-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/redis/sentinel/mode/redisclusters.pm)]       | App-Redis-Sentinel-Redis-Clusters-custom    |
| sentinel-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/redis/sentinel/mode/sentinelclusters.pm)] | App-Redis-Sentinel-Sentinel-Clusters-custom |

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
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --ssh-backend                              |   Define the backend you want to use. It can be: C\<sshcli\> (default), C\<plink\> and C\<libssh\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ssh-username                             |   Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             |   Define the password associated with the user name. Cannot be used with the C\<sshcli\> backend. Warning: using a password is not recommended. Use C\<--ssh-priv-key\> instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-port                                 |   Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             |   Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --server                                   |   Sentinel server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --port                                     |   Sentinel port (default: 26379).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --tls                                      |   Establish a secure TLS connection (redis-cli \>= 6.x mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --cacert                                   |   CA Certificate file to verify with (redis-cli \>= 6.x mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --insecure                                 |   Allow insecure TLS connection by skipping cert validation (since redis-cli 6.2.0).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --username                                 |   Sentinel username (redis-cli \>= 6.x mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --password                                 |   Sentinel password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-hostname                             |   Remote ssh redis-cli execution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --timeout                                  |   Timeout in seconds for the command (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Redis-Clusters" label="Redis-Clusters">

| Option                   | Description                                                                                                                                                                                                                                            |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster-name    |   Filter clusters by name (can be a regexp).                                                                                                                                                                                                           |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{role\}, %\{address\}, %\{port\}, %\{cluster\_name\}                                                                                |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{role\}, %\{address\}, %\{port\}, %\{cluster\_name\}                                                                                |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /o\_down\|s\_down\|master\_down\|disconnected/i'). You can use the following variables: %\{status\}, %\{role\}, %\{address\}, %\{port\}, %\{cluster\_name\}   |
| --warning-* --critical-* |   Thresholds. Can be:  'redis-ping-ok-latency', 'redis-sdown', 'redis-odown',  'slave-repl-offset-stddev', 'slaves-detected'.                                                                                                                          |

</TabItem>
<TabItem value="Sentinel-Clusters" label="Sentinel-Clusters">

| Option                   | Description                                                                                                                                                                                                                                 |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster-name    |   Filter clusters by name (can be a regexp).                                                                                                                                                                                                |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{address\}, %\{port\}, %\{cluster\_name\}                                                                                |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{address\}, %\{port\}, %\{cluster\_name\}                                                                                |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /o\_down\|s\_down\|master\_down\|disconnected/i'). You can use the following variables: %\{status\}, %\{address\}, %\{port\}, %\{cluster\_name\}   |
| --warning-quorum-status  |   Set warning threshold for quorum status. You can use the following variables: %\{status\}, %\{address\}, %\{port\}, %\{cluster\_name\}                                                                                                    |
| --critical-quorum-status |   Set critical threshold for quorum status (default: '%\{status\} =~ /noQuorum/'). You can use the following variables: %\{status\}, %\{cluster\_name\}                                                                                     |
| --warning-* --critical-* |   Thresholds. Can be:  'sentinel-ping-ok-latency', 'sentinels-sdown', 'sentinels-odown', 'sentinels-detected'.                                                                                                                              |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \
	--plugin=apps::redis::sentinel::plugin \
	--server='10.0.0.1' \
	--help
```
