---
id: applications-databases-redis
title: Redis Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Redis Database** brings a host template:

* **App-DB-Redis-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-DB-Redis-custom" label="App-DB-Redis-custom">

| Service Alias | Service Template                | Service Description                 |
|:--------------|:--------------------------------|:------------------------------------|
| Clients       | App-DB-Redis-Clients-custom     | Check client connections            |
| Commands      | App-DB-Redis-Commands-custom    | Check number of commands            |
| Connections   | App-DB-Redis-Connections-custom | Check connections and network usage |
| Cpu           | App-DB-Redis-Cpu-custom         | Check cpu utilization               |
| Memory        | App-DB-Redis-Memory-custom      | Check memory utilization            |
| Persistence   | App-DB-Redis-Persistence-custom | Check RDB                           |
| Replication   | App-DB-Redis-Replication-custom | Check replication                   |

> The services listed above are created automatically when the **App-DB-Redis-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Metric name                        | Unit  |
|:-----------------------------------|:------|
| clients.connected.count            | count |
| clients.blocked.count              | count |
| clients.longest_output_list.count  | count |
| clients.biggest_input_buffer.count | count |

</TabItem>
<TabItem value="Commands" label="Commands">

| Metric name                  | Unit  |
|:-----------------------------|:------|
| commands.processed.count     | count |
| commands.processed.persecond | N/A   |

</TabItem>
<TabItem value="Connections" label="Connections">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| connections.received.count        | count |
| connections.rejected.count        | count |
| network.traffic.in.bitspersecond  | b/s   |
| network.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| cpu.system.usage.percentage          | %     |
| cpu.user.usage.percentage            | %     |
| cpu.system.children.usage.percentage | %     |
| cpu.user.children.usage.percentage   | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| memory.usage.bytes                   | B     |
| memory.rss.usage.bytes               | B     |
| memory.peak.usage.bytes              | B     |
| memory.overhead.usage.bytes          | B     |
| memory.startup.usage.bytes           | B     |
| memory.dataset.usage.bytes           | B     |
| memory.lua.usage.bytes               | B     |
| memory.fragmentation.ratio.count     | count |
| memory.defragmentation.running.count | count |
| memory.lazy_pending_objects.count    | count |

</TabItem>
<TabItem value="Persistence" label="Persistence">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| status                            | N/A   |
| rdb.changes.since_last_save.count | count |
| rdb.last_successful_save.seconds  | s     |
| rdb.last_save.size.bytes          | B     |
| rdb.last_save.duration.seconds    | s     |
| rdb.current_save.duration.seconds | s     |

</TabItem>
<TabItem value="Replication" label="Replication">

| Metric name                                 | Unit  |
|:--------------------------------------------|:------|
| status                                      | N/A   |
| replication.slaves.connected.count          | count |
| replication.master.offset.count             | count |
| replication.master.last_interaction.seconds | s     |
| replication.slave.offset.count              | count |
| replication.slave.priority.count            | count |
| replication.slave.readonly.count            | count |

</TabItem>
</Tabs>

## Prerequisites

To control your Redis database, the poller must be able to execute the _INFO_ command (see https://redis.io/commands/INFO).

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
dnf install centreon-pack-applications-databases-redis
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-redis
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-databases-redis
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-redis
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Redis Database** connector through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/onprem/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Databases-Redis
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Redis
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-databases-redis
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Redis
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-DB-Redis-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro             | Description                                                                                                                | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| REDISUSERNAME     | Redis username (redis-cli \>= 6.x mandatory)                                                                               |                   | X           |
| REDISPASSWORD     | Redis password                                                                                                             |                   | X           |
| REDISPORT         | Redis port (default: 6379)                                                                                                 | 6379              |             |
| REDISSENTINELPORT | Sentinel port (default: 26379)                                                                                             |                   |             |
| REDISCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | perlmod           |             |
| REDISSENTINEL     | Sentinel server. Alternative of server option. service option is required                                                  |                   | X           |
| REDISSERVICE      | Service parameter                                                                                                          |                   | X           |
| REDISEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                       |                   |             |

5. [Deploy the configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/onprem/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Macro                           | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBLOCKEDCLIENTS           | Warning threshold for number of blocked clients                                                    |                   |             |
| CRITICALBLOCKEDCLIENTS          | Critical threshold for number of blocked clients                                                   |                   |             |
| WARNINGCLIENTBIGGESTINPUTBUF    | Warning threshold for biggest input buffer among current client connections                        |                   |             |
| CRITICALCLIENTBIGGESTINPUTBUF   | Critical threshold for biggest input buffer among current client connections                       |                   |             |
| WARNINGCLIENTLONGESTOUTPUTLIST  | Warning threshold for longest output list among current client connections                         |                   |             |
| CRITICALCLIENTLONGESTOUTPUTLIST | Critical threshold for longest output list among current client connections                        |                   |             |
| WARNINGCONNECTEDCLIENTS         | Warning threshold for number of connected clients                                                  |                   |             |
| CRITICALCONNECTEDCLIENTS        | Critical threshold for number of connected clients                                                 |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Commands" label="Commands">

| Macro                     | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGOPSPERSEC          | Warning threshold for number of commands processed per second                                      |                   |             |
| CRITICALOPSPERSEC         | Critical threshold for number of commands processed per second                                     |                   |             |
| WARNINGPROCESSEDCOMMANDS  | Warning threshold for number of commands processed by the server                                   |                   |             |
| CRITICALPROCESSEDCOMMANDS | Critical threshold for number of commands processed by the server                                  |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Connections" label="Connections">

| Macro                       | Description                                                                                        | Default value     | Mandatory   |
|:----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRECEIVEDCONNECTIONS  | Warning threshold for received connections                                                         |                   |             |
| CRITICALRECEIVEDCONNECTIONS | Critical threshold for received connections                                                        |                   |             |
| WARNINGREJECTEDCONNECTIONS  | Warning threshold for rejected connections                                                         |                   |             |
| CRITICALREJECTEDCONNECTIONS | Critical threshold for rejected connections                                                        |                   |             |
| WARNINGTRAFFICIN            | Warning threshold for inbound traffic (b/s)                                                        |                   |             |
| CRITICALTRAFFICIN           | Critical threshold for inbound traffic (b/s)                                                       |                   |             |
| WARNINGTRAFFICOUT           | Warning threshold for outbound traffic (b/s)                                                       |                   |             |
| CRITICALTRAFFICOUT          | Critical thresholdfor outbound traffic (b/s)                                                       |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro                | Description                                                                                        | Default value     | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSYS           | Warning threshold for Sys CPU utilization                                                          |                   |             |
| CRITICALSYS          | Critical threshold for Sys CPU utilization                                                         |                   |             |
| WARNINGSYSCHILDREN   | Warning threshold for Sys Children CPU utilization                                                 |                   |             |
| CRITICALSYSCHILDREN  | Critical threshold for Sys Children CPU utilization                                                |                   |             |
| WARNINGUSER          | Warning threshold for User CPU utilization                                                         |                   |             |
| CRITICALUSER         | Critical threshold for User CPU utilization                                                        |                   |             |
| WARNINGUSERCHILDREN  | Warning threshold for User Children CPU utilization                                                |                   |             |
| CRITICALUSERCHILDREN | Critical threshold for User Children CPU utilization                                               |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                          | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS                          | Units of thresholds (default: '%') ('%', 'B')                                                      | %                 |             |
| WARNINGDATASET                 | Warning threshold for Dataset memory utilization                                                   |                   |             |
| CRITICALDATASET                | Critical threshold for Dataset memory utilization                                                  |                   |             |
| WARNINGDEFRAGRUNNING           | Warning threshold for Running Defragmentation                                                      |                   |             |
| CRITICALDEFRAGRUNNING          | Critical threshold for Running Defragmentation                                                     |                   |             |
| WARNINGFRAGMENTATIONRATIO      | Warning threshold for Fragmentation Ratio                                                          |                   |             |
| CRITICALFRAGMENTATIONRATIO     | Critical threshold for Fragmentation Ratio                                                         |                   |             |
| WARNINGLAZYFREEPENDINGOBJECTS  | Warning threshold for Lazyfree Pending Objects                                                     |                   |             |
| CRITICALLAZYFREEPENDINGOBJECTS | Critical threshold for Lazyfree Pending Objects                                                    |                   |             |
| WARNINGLUA                     | Warning threshold for Lua memory utilization                                                       |                   |             |
| CRITICALLUA                    | Critical threshold for Lua memory utilization                                                      |                   |             |
| WARNINGOVERHEAD                | Warning threshold for Overhead memory utilization                                                  |                   |             |
| CRITICALOVERHEAD               | Critical threshold for Overhead memory utilization                                                 |                   |             |
| WARNINGPEAK                    | Warning threshold for Peak memory utilization                                                      |                   |             |
| CRITICALPEAK                   | Critical threshold for Peak memory utilization                                                     |                   |             |
| WARNINGRSS                     | Warning threshold for Rss memory utilization                                                       |                   |             |
| CRITICALRSS                    | Critical threshold for Rss memory utilization                                                      |                   |             |
| WARNINGSTARTUP                 | Warning threshold for Startup memory utilization                                                   |                   |             |
| CRITICALSTARTUP                | Critical threshold for Startup memory utilization                                                  |                   |             |
| WARNINGUSED                    | Warning threshold for Used memory utilization                                                      |                   |             |
| CRITICALUSED                   | Critical threshold for Used memory utilization                                                     |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Persistence" label="Persistence">

| Macro                       | Description                                                                                                                                                                         | Default value                     | Mandatory   |
|:----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| WARNINGCHANGES              | Warning threshold                                                                                                                                                                   |                                   |             |
| CRITICALCHANGES             | Critical threshold                                                                                                                                                                  |                                   |             |
| WARNINGCURRENTSAVEDURATION  | Warning threshold                                                                                                                                                                   |                                   |             |
| CRITICALCURRENTSAVEDURATION | Critical threshold                                                                                                                                                                  |                                   |             |
| WARNINGLASTSAVE             | Warning threshold                                                                                                                                                                   |                                   |             |
| CRITICALLASTSAVE            | Critical threshold                                                                                                                                                                  |                                   |             |
| WARNINGLASTSAVEDURATION     | Warning threshold                                                                                                                                                                   |                                   |             |
| CRITICALLASTSAVEDURATION    | Critical threshold                                                                                                                                                                  |                                   |             |
| WARNINGSAVESIZE             | Warning threshold                                                                                                                                                                   |                                   |             |
| CRITICALSAVESIZE            | Critical threshold                                                                                                                                                                  |                                   |             |
| WARNINGSTATUS               | Define the conditions to match for the status to be WARNING (default: '%{progress\_status} =~ /in progress/i'). You can use the following variables: %{progress\_status}, %{status} | %{sync\_status} =~ /in progress/i |             |
| CRITICALSTATUS              | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /fail/i'). You can use the following variables: %{progress\_status}, %{status}                 | %{link\_status} =~ /down/i        |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                  |                                   |             |

</TabItem>
<TabItem value="Replication" label="Replication">

| Macro                    | Description                                                                                                                                                                                          | Default value                     | Mandatory   |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| WARNINGCONNECTEDSLAVES   | Warning threshold                                                                                                                                                                                    |                                   |             |
| CRITICALCONNECTEDSLAVES  | Critical threshold                                                                                                                                                                                   |                                   |             |
| WARNINGMASTERLASTIO      | Warning threshold                                                                                                                                                                                    |                                   |             |
| CRITICALMASTERLASTIO     | Critical threshold                                                                                                                                                                                   |                                   |             |
| WARNINGMASTERREPLOFFSET  | Warning threshold                                                                                                                                                                                    |                                   |             |
| CRITICALMASTERREPLOFFSET | Critical threshold                                                                                                                                                                                   |                                   |             |
| WARNINGSLAVEPRIORITY     | Warning threshold                                                                                                                                                                                    |                                   |             |
| CRITICALSLAVEPRIORITY    | Critical threshold                                                                                                                                                                                   |                                   |             |
| WARNINGSLAVEREADONLY     | Warning threshold                                                                                                                                                                                    |                                   |             |
| CRITICALSLAVEREADONLY    | Critical threshold                                                                                                                                                                                   |                                   |             |
| WARNINGSLAVEREPLOFFSET   |                                                                                                                                                                                                      |                                   |             |
| CRITICALSLAVEREPLOFFSET  |                                                                                                                                                                                                      |                                   |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING (default: '%{sync\_status} =~ /in progress/i'). You can use the following variables: %{sync\_status}, %{link\_status}, %{cluster\_state} | %{sync\_status} =~ /in progress/i |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL (default: '%{link\_status} =~ /down/i'). You can use the following variables: %{sync\_status}, %{link\_status}, %{cluster\_state}       | %{link\_status} =~ /down/i        |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                   |                                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_database_redis.pl \
	--plugin=database::redis::plugin \
	--custommode='perlmod' \
	--server='10.0.0.1' \
	--port='6379' \
	--username='' \
	--password='' \
	--sentinel='' \
	--sentinel-port='' \
	--service=''  \
	--mode=cpu \
	--warning-sys='' \
	--critical-sys='' \
	--warning-user='' \
	--critical-user='' \
	--warning-sys-children='' \
	--critical-sys-children='' \
	--warning-user-children='' \
	--critical-user-children='' 
```

The expected command output is shown below:

```bash
OK: system: 7 % user: 73 % system children: 93 % user children: 80 % | 'cpu.system.usage.percentage'=7%;;;0;100'cpu.user.usage.percentage'=73%;;;0;100'cpu.system.children.usage.percentage'=93%;;;0;100'cpu.user.children.usage.percentage'=80%;;;0;100
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
/usr/lib/centreon/plugins/centreon_database_redis.pl \
	--plugin=database::redis::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                   | Linked service template         |
|:-----------------------------------------------------------------------------------------------------------------------|:--------------------------------|
| clients [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/clients.pm)]         | App-DB-Redis-Clients-custom     |
| commands [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/commands.pm)]       | App-DB-Redis-Commands-custom    |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/connections.pm)] | App-DB-Redis-Connections-custom |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/cpu.pm)]                 | App-DB-Redis-Cpu-custom         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/memory.pm)]           | App-DB-Redis-Memory-custom      |
| persistence [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/persistence.pm)] | App-DB-Redis-Persistence-custom |
| replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/replication.pm)] | App-DB-Redis-Replication-custom |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_database_redis.pl \
	--plugin=database::redis::plugin \
	--list-custommode
```

The plugin brings the following custom modes:

* cli
* perlmod

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
| --server                                   | Redis server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | Redis port (default: 6379).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --password                                 | Redis password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --sentinel                                 | Sentinel server. Alternative of server option. service option is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --sentinel-port                            | Sentinel port (default: 26379).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --service                                  | Service parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="cli" label="cli">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="perlmod" label="perlmod">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Option                                | Description                                                                                                                                                            |
|:--------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --cacert                              | CA Certificate file to verify with (redis-cli \>= 6.x mandatory).                                                                                                      |
| --insecure                            | Allow insecure TLS connection by skipping cert validation (since redis-cli 6.2.0).                                                                                     |
| --username                            | Redis username (redis-cli \>= 6.x mandatory).                                                                                                                          |
| --ssh-hostname                        | Remote ssh redis-cli execution.                                                                                                                                        |
| --timeout                             | Timeout in seconds for the command (default: 10).                                                                                                                      |
| --ssh-backend                         | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                     |
| --ssh-username                        | Define the user name to log in to the host.                                                                                                                            |
| --ssh-password                        | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.   |
| --ssh-port                            | Define the TCP port on which SSH is listening.                                                                                                                         |
| --ssh-priv-key                        | Define the private key file to use for user authentication.                                                                                                            |
| --sshcli-command                      | ssh command (default: 'ssh').                                                                                                                                          |
| --sshcli-path                         | ssh command path (default: none)                                                                                                                                       |
| --sshcli-option                       | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                      |
| --plink-command                       | plink command (default: 'plink').                                                                                                                                      |
| --plink-path                          | plink command path (default: none)                                                                                                                                     |
| --plink-option                        | Specify plink options (example: --plink-option='-T').                                                                                                                  |
| --libssh-strict-connect               | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                    |
| --warning-connected-clients           | Warning threshold for number of connected clients                                                                                                                      |
| --critical-connected-clients          | Critical threshold for number of connected clients                                                                                                                     |
| --warning-blocked-clients             | Warning threshold for number of blocked clients                                                                                                                        |
| --critical-blocked-clients            | Critical threshold for number of blocked clients                                                                                                                       |
| --warning-client-longest-output-list  | Warning threshold for longest output list among current client connections                                                                                             |
| --critical-client-longest-output-list | Critical threshold for longest output list among current client connections                                                                                            |
| --warning-client-biggest-input-buf    | Warning threshold for biggest input buffer among current client connections                                                                                            |
| --critical-client-biggest-input-buf   | Critical threshold for biggest input buffer among current client connections                                                                                           |

</TabItem>
<TabItem value="Commands" label="Commands">

| Option                        | Description                                                                                                                                                                                                                                   |
|:------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                   | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server                | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute             | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                    | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file               | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration               | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir               | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix            | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd        | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format            | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key               | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher            | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-processed-commands  | Warning threshold for number of commands processed by the server                                                                                                                                                                              |
| --critical-processed-commands | Critical threshold for number of commands processed by the server                                                                                                                                                                             |
| --warning-ops-per-sec         | Warning threshold for number of commands processed per second                                                                                                                                                                                 |
| --critical-ops-per-sec        | Critical threshold for number of commands processed per second                                                                                                                                                                                |

</TabItem>
<TabItem value="Connections" label="Connections">

| Option                          | Description                                                                                                                                                                                                                                   |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                     | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                      | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file                 | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration                 | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix              | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher              | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-received-connections  | Warning threshold for received connections                                                                                                                                                                                                    |
| --critical-received-connections | Critical threshold for received connections                                                                                                                                                                                                   |
| --warning-rejected-connections  | Warning threshold for rejected connections                                                                                                                                                                                                    |
| --critical-rejected-connections | Critical threshold for rejected connections                                                                                                                                                                                                   |
| --warning-traffic-in            | Warning threshold for inbound traffic (b/s)                                                                                                                                                                                                   |
| --critical-traffic-in           | Critical threshold for inbound traffic (b/s)                                                                                                                                                                                                  |
| --warning-traffic-out           | Warning threshold for outbound traffic (b/s)                                                                                                                                                                                                  |
| --critical-traffic-out          | Critical thresholdfor outbound traffic (b/s)                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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
| --warning-sys            | Warning threshold for Sys CPU utilization                                                                                                                                                                                                     |
| --critical-sys           | Critical threshold for Sys CPU utilization                                                                                                                                                                                                    |
| --warning-user           | Warning threshold for User CPU utilization                                                                                                                                                                                                    |
| --critical-user          | Critical threshold for User CPU utilization                                                                                                                                                                                                   |
| --warning-sys-children   | Warning threshold for Sys Children CPU utilization                                                                                                                                                                                            |
| --critical-sys-children  | Critical threshold for Sys Children CPU utilization                                                                                                                                                                                           |
| --warning-user-children  | Warning threshold for User Children CPU utilization                                                                                                                                                                                           |
| --critical-user-children | Critical threshold for User Children CPU utilization                                                                                                                                                                                          |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                              | Description                                          |
|:------------------------------------|:-----------------------------------------------------|
| --units                             | Units of thresholds (default: '%') ('%', 'B').       |
| --free                              | Thresholds are on free space left.                   |
| --warning-used                      | Warning threshold for Used memory utilization        |
| --critical-used                     | Critical threshold for Used memory utilization       |
| --warning-rss                       | Warning threshold for Rss memory utilization         |
| --critical-rss                      | Critical threshold for Rss memory utilization        |
| --warning-peak                      | Warning threshold for Peak memory utilization        |
| --critical-peak                     | Critical threshold for Peak memory utilization       |
| --warning-overhead                  | Warning threshold for Overhead memory utilization    |
| --critical-overhead                 | Critical threshold for Overhead memory utilization   |
| --warning-startup                   | Warning threshold for Startup memory utilization     |
| --critical-startup                  | Critical threshold for Startup memory utilization    |
| --warning-dataset                   | Warning threshold for Dataset memory utilization     |
| --critical-dataset                  | Critical threshold for Dataset memory utilization    |
| --warning-lua                       | Warning threshold for Lua memory utilization         |
| --critical-lua                      | Critical threshold for Lua memory utilization        |
| --warning-fragmentation-ratio       | Warning threshold for Fragmentation Ratio            |
| --critical-fragmentation-ratio      | Critical threshold for Fragmentation Ratio           |
| --warning-defrag-running            | Warning threshold for Running Defragmentation        |
| --critical-defrag-running           | Critical threshold for Running Defragmentation       |
| --warning-lazyfree-pending-objects  | Warning threshold for Lazyfree Pending Objects       |
| --critical-lazyfree-pending-objects | Critical threshold for Lazyfree Pending Objects      |

</TabItem>
<TabItem value="Persistence" label="Persistence">

| Option            | Description                                                                                                                                                                           |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '%{progress\_status} =~ /in progress/i'). You can use the following variables: %{progress\_status}, %{status}   |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /fail/i'). You can use the following variables: %{progress\_status}, %{status}                   |
| --warning-*       | Warning threshold. Can be: 'changes', 'last-save', 'save-size', 'last-save-duration', 'current-save-duration'.                                                                        |
| --critical-*      | Critical threshold. Can be: 'changes', 'last-save', 'save-size', 'last-save-duration', 'current-save-duration'.                                                                       |

</TabItem>
<TabItem value="Replication" label="Replication">

| Option            | Description                                                                                                                                                                                            |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '%{sync\_status} =~ /in progress/i'). You can use the following variables: %{sync\_status}, %{link\_status}, %{cluster\_state}   |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{link\_status} =~ /down/i'). You can use the following variables: %{sync\_status}, %{link\_status}, %{cluster\_state}         |
| --warning-*       | Warning threshold. Can be: 'connected-slaves', 'master-repl-offset', 'master-last-io', 'slave-priority', 'slave-read-only'.                                                                            |
| --critical-*      | Critical threshold. Can be: 'connected-slaves', 'master-repl-offset', 'master-last-io', 'slave-priority', 'slave-read-only'.                                                                           |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_database_redis.pl \
	--plugin=database::redis::plugin \
	--custommode='perlmod' \
	--custommode='perlmod' \
	--help
```
