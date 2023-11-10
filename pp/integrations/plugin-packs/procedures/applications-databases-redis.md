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

To control your Redis database, the poller can execute _INFO_ command (Eg: https://redis.io/commands/INFO)

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
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-DB-Redis-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro             | Description                                                                                   | Default value     | Mandatory   |
|:------------------|:----------------------------------------------------------------------------------------------|:------------------|:-----------:|
| REDISUSERNAME     |                                                                                               |                   | X           |
| REDISPASSWORD     |                                                                                               |                   | X           |
| REDISPORT         |                                                                                               | 6379              |             |
| REDISSENTINELPORT |                                                                                               |                   |             |
| REDISCUSTOMMODE   |                                                                                               | perlmod           |             |
| REDISSENTINEL     |                                                                                               |                   | X           |
| REDISSERVICE      |                                                                                               |                   | X           |
| REDISEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Macro                           | Description                                                                                 | Default value     | Mandatory   |
|:--------------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBLOCKEDCLIENTS           |                                                                                             |                   |             |
| CRITICALBLOCKEDCLIENTS          |                                                                                             |                   |             |
| WARNINGCLIENTBIGGESTINPUTBUF    |                                                                                             |                   |             |
| CRITICALCLIENTBIGGESTINPUTBUF   |                                                                                             |                   |             |
| WARNINGCLIENTLONGESTOUTPUTLIST  |                                                                                             |                   |             |
| CRITICALCLIENTLONGESTOUTPUTLIST |                                                                                             |                   |             |
| WARNINGCONNECTEDCLIENTS         |                                                                                             |                   |             |
| CRITICALCONNECTEDCLIENTS        |                                                                                             |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Commands" label="Commands">

| Macro                     | Description                                                                                 | Default value     | Mandatory   |
|:--------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGOPSPERSEC          |                                                                                             |                   |             |
| CRITICALOPSPERSEC         |                                                                                             |                   |             |
| WARNINGPROCESSEDCOMMANDS  |                                                                                             |                   |             |
| CRITICALPROCESSEDCOMMANDS |                                                                                             |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Connections" label="Connections">

| Macro                       | Description                                                                                 | Default value     | Mandatory   |
|:----------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRECEIVEDCONNECTIONS  |                                                                                             |                   |             |
| CRITICALRECEIVEDCONNECTIONS |                                                                                             |                   |             |
| WARNINGREJECTEDCONNECTIONS  |                                                                                             |                   |             |
| CRITICALREJECTEDCONNECTIONS |                                                                                             |                   |             |
| WARNINGTRAFFICIN            |                                                                                             |                   |             |
| CRITICALTRAFFICIN           |                                                                                             |                   |             |
| WARNINGTRAFFICOUT           |                                                                                             |                   |             |
| CRITICALTRAFFICOUT          |                                                                                             |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro                | Description                                                                                 | Default value     | Mandatory   |
|:---------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSYS           |                                                                                             |                   |             |
| CRITICALSYS          |                                                                                             |                   |             |
| WARNINGSYSCHILDREN   |                                                                                             |                   |             |
| CRITICALSYSCHILDREN  |                                                                                             |                   |             |
| WARNINGUSER          |                                                                                             |                   |             |
| CRITICALUSER         |                                                                                             |                   |             |
| WARNINGUSERCHILDREN  |                                                                                             |                   |             |
| CRITICALUSERCHILDREN |                                                                                             |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                          | Description                                                                                 | Default value     | Mandatory   |
|:-------------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS                          |                                                                                             | %                 |             |
| WARNINGDATASET                 |                                                                                             |                   |             |
| CRITICALDATASET                |                                                                                             |                   |             |
| WARNINGDEFRAGRUNNING           |                                                                                             |                   |             |
| CRITICALDEFRAGRUNNING          |                                                                                             |                   |             |
| WARNINGFRAGMENTATIONRATIO      |                                                                                             |                   |             |
| CRITICALFRAGMENTATIONRATIO     |                                                                                             |                   |             |
| WARNINGLAZYFREEPENDINGOBJECTS  |                                                                                             |                   |             |
| CRITICALLAZYFREEPENDINGOBJECTS |                                                                                             |                   |             |
| WARNINGLUA                     |                                                                                             |                   |             |
| CRITICALLUA                    |                                                                                             |                   |             |
| WARNINGOVERHEAD                |                                                                                             |                   |             |
| CRITICALOVERHEAD               |                                                                                             |                   |             |
| WARNINGPEAK                    |                                                                                             |                   |             |
| CRITICALPEAK                   |                                                                                             |                   |             |
| WARNINGRSS                     |                                                                                             |                   |             |
| CRITICALRSS                    |                                                                                             |                   |             |
| WARNINGSTARTUP                 |                                                                                             |                   |             |
| CRITICALSTARTUP                |                                                                                             |                   |             |
| WARNINGUSED                    |                                                                                             |                   |             |
| CRITICALUSED                   |                                                                                             |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Persistence" label="Persistence">

| Macro                       | Description                                                                                 | Default value                     | Mandatory   |
|:----------------------------|:--------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| WARNINGCHANGES              |                                                                                             |                                   |             |
| CRITICALCHANGES             |                                                                                             |                                   |             |
| WARNINGCURRENTSAVEDURATION  |                                                                                             |                                   |             |
| CRITICALCURRENTSAVEDURATION |                                                                                             |                                   |             |
| WARNINGLASTSAVE             |                                                                                             |                                   |             |
| CRITICALLASTSAVE            |                                                                                             |                                   |             |
| WARNINGLASTSAVEDURATION     |                                                                                             |                                   |             |
| CRITICALLASTSAVEDURATION    |                                                                                             |                                   |             |
| WARNINGSAVESIZE             |                                                                                             |                                   |             |
| CRITICALSAVESIZE            |                                                                                             |                                   |             |
| WARNINGSTATUS               |                                                                                             | %{sync\_status} =~ /in progress/i |             |
| CRITICALSTATUS              |                                                                                             | %{link\_status} =~ /down/i        |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                                   |             |

</TabItem>
<TabItem value="Replication" label="Replication">

| Macro                    | Description                                                                                 | Default value                     | Mandatory   |
|:-------------------------|:--------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| WARNINGCONNECTEDSLAVES   |                                                                                             |                                   |             |
| CRITICALCONNECTEDSLAVES  |                                                                                             |                                   |             |
| WARNINGMASTERLASTIO      |                                                                                             |                                   |             |
| CRITICALMASTERLASTIO     |                                                                                             |                                   |             |
| WARNINGMASTERREPLOFFSET  |                                                                                             |                                   |             |
| CRITICALMASTERREPLOFFSET |                                                                                             |                                   |             |
| WARNINGSLAVEPRIORITY     |                                                                                             |                                   |             |
| CRITICALSLAVEPRIORITY    |                                                                                             |                                   |             |
| WARNINGSLAVEREADONLY     |                                                                                             |                                   |             |
| CRITICALSLAVEREADONLY    |                                                                                             |                                   |             |
| WARNINGSLAVEREPLOFFSET   |                                                                                             |                                   |             |
| CRITICALSLAVEREPLOFFSET  |                                                                                             |                                   |             |
| WARNINGSTATUS            |                                                                                             | %{sync\_status} =~ /in progress/i |             |
| CRITICALSTATUS           |                                                                                             | %{link\_status} =~ /down/i        |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

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
OK: system: 69 % user: 79 % system children: 62 % user children: 26 % | 'cpu.system.usage.percentage'=69%;;;0;100'cpu.user.usage.percentage'=79%;;;0;100'cpu.system.children.usage.percentage'=62%;;;0;100'cpu.user.children.usage.percentage'=26%;;;0;100
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

| Option | Description |
|:-------|:------------|

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

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Commands" label="Commands">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Connections" label="Connections">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Memory" label="Memory">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Persistence" label="Persistence">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Replication" label="Replication">

| Option | Description |
|:-------|:------------|

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
