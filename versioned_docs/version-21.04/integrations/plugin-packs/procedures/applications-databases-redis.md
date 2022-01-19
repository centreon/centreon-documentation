---
id: applications-databases-redis
title: Redis Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Monitored Objects

The Pack Redis collects metrics for:
* Clients
* Commands
* Connections
* Cpu
* Memory
* Persistence
* Replication

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Metric name                        | Description                                                  | Unit  |
| :--------------------------------- | :----------------------------------------------------------- | :---- |
| clients.connected.count            | Number of client connections (excluding replica connections) |       |
| clients.blocked.count              | Number of clients pending on a blocking call                 |       |
| clients.longest_output_list.count  | Longest output list among current client connections         |       |
| clients.biggest_input_buffer.count | Biggest input buffer among current client connections        |       |

</TabItem>
<TabItem value="Commands" label="Commands">

| Metric name                  | Description                                      | Unit  |
| :--------------------------- | :----------------------------------------------- | :---- |
| commands.processed.count     | Total number of commands processed by the server |       |
| commands.processed.persecond | Number of commands processed per second          |       |

</TabItem>
<TabItem value="Connections" label="Connections">

| Metric name                       | Description                                                | Unit  |
| :-------------------------------- | :--------------------------------------------------------- | :---- |
| connections.received.count        | Number of connections accepted by the server               |       |
| connections.rejected.count        | Number of connections rejected because of maxclients limit |       |
| network.traffic.in.bitspersecond  | Incoming traffic going through from the network            | b/s   |
| network.traffic.out.bitspersecond | Outgoing traffic going through from the network            | b/s   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                          | Description                                     | Unit  |
| :----------------------------------- | :---------------------------------------------- | :---- |
| cpu.system.usage.percentage          | System CPU consumed by the Redis server         | %     |
| cpu.user.usage.percentage            | User CPU consumed by the Redis server           | %     |
| cpu.system.children.usage.percentage | System CPU consumed by the background processes | %     |
| cpu.user.children.usage.percentage   | User CPU consumed by the background processes   | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                          | Description                                                                                           | Unit  |
| :----------------------------------- | :---------------------------------------------------------------------------------------------------- | :---- |
| memory.usage.bytes                   | Number of bytes allocated by Redis using its allocator                                                | B     |
| memory.rss.usage.bytes               | Number of bytes that Redis allocated as seen by the operating system                                  | B     |
| memory.peak.usage.bytes              | Peak memory consumed by Redis                                                                         | B     |
| memory.overhead.usage.bytes          | The sum in bytes of all overheads that the server allocated for managing its internal data structures | B     |
| memory.startup.usage.bytes           | Initial amount of memory consumed by Redis at startup in bytes                                        | B     |
| memory.dataset.usage.bytes           | The size in bytes of the dataset                                                                      | B     |
| memory.lua.usage.bytes               | Number of bytes used by the Lua engine                                                                | B     |
| memory.fragmentation.ratio.count     | Ratio between used_memory_rss and used_memory                                                         |       |
| memory.defragmentation.running.count | Indicates whether defragmentation is currently active                                                 |       |
| memory.lazy_pending_objects.count    | The number of objects waiting to be freed                                                             |       |

</TabItem>
<TabItem value="Persistence" label="Persistence">

| Metric name                       | Description                                                       | Unit  |
| :-------------------------------- | :---------------------------------------------------------------- | :---- |
| RDB status                        | Status of the last RDB save operation and if RDB save is on-going |       |
| rdb.changes.since_last_save.count | Number of changes since the last dump                             |       |
| rdb.last_successful_save.seconds  | Time since last successful save                                   | s     |
| rdb.last_save.size.bytes          | Size of copy-on-write memory during the last RDB save operation   | B     |
| rdb.last_save.duration.seconds    | Duration of the last RDB save operation                           | s     |
| rdb.current_save.duration.seconds | NDuration of the on-going RDB save operation                      | s     |

</TabItem>
<TabItem value="Replication" label="Replication">

| Metric name                                 | Description                                                 | Unit  |
| :------------------------------------------ | :---------------------------------------------------------- | :---- |
| replication status                          | Status of the link with the master and if master is syncing |       |
| replication.slaves.connected.count          | Number of connected replicas                                |       |
| replication.master.offset.count             | The server's current replication offset                     |       |
| replication.master.last_interaction.seconds | Number of seconds since the last interaction with master    | s     |
| replication.slave.offset.count              | The replication offset of the replica instance              |       |
| replication.slave.priority.count            | The priority of the instance as a candidate for failover    |       |
| replication.slave.readonly.count            | Flag indicating if the replica is read-only                 |       |

</TabItem>
</Tabs>

## Prerequisites

To control your Redis database, the poller can execute _INFO_ command (Eg: https://redis.io/commands/INFO)

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Databases-Redis
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Redis Database* Pack

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Databases-Redis
```

2. On the Centreon Central server, install the Pack from the RPM:

```bash
yum install centreon-pack-applications-databases-redis
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Redis Database* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and apply the *App-DB-Redis-custom* Host Template

> Once the template applied, some Macros have to be configured.

<Tabs groupId="sync">
<TabItem value="cli" label="cli">

With that configuration, the Plugin uses _redis-cli_ executable. _tls_ is supported (redis-cli >= 6.x mandatory).

| Mandatory | Name              | Description                                                                  |
| :-------- | :---------------- | :--------------------------------------------------------------------------- |
| X         | REDISCUSTOMMODE   | Name of the backend: ```cli```                                               |
|           | REDISPORT         | Port used (Default: 6379)                                                    |
|           | REDISUSERNAME     | Redis username (redis-cli >= 6.x mandatory)                                  |
|           | REDISPASSWORD     | Redis password                                                               |
|           | REDISSENTINEL     | Sentinel server                                                              |
|           | REDISSENTINELORT  | Sentinel port (Default: 26379)                                               |
|           | REDISSERVICE      | Service parameter (mandatory if _REDISENTINEL_ macro used)                   |
|           | REDISEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --tls --insecure) |

</TabItem>
<TabItem value="perlmod (default)" label="perlmod (default)">

With that configuration, the Plugin uses Perl _Redis_ module (eg: https://metacpan.org/pod/Redis). _tls_ is unsupported.

| Mandatory | Name              | Description                                                |
| :-------- | :---------------- | :--------------------------------------------------------- |
| X         | REDISCUSTOMMODE   | Name of the backend: ```perlmod```                         |
|           | REDISPORT         | Port used (Default: 6379)                                  |
|           | REDISPASSWORD     | Redis password                                             |
|           | REDISSENTINEL     | Sentinel server                                            |
|           | REDISSENTINELORT  | Sentinel port (Default: 26379)                             |
|           | REDISSERVICE      | Service parameter (mandatory if _REDISENTINEL_ macro used) |
|           | REDISEXTRAOPTIONS | Any extra option you may want to add to the command        |

</TabItem>
</Tabs>

## How to install _redis-cli_ 6.x ?

To use _tls_ and/or ACL users, you need _redis-cli_ >= 6.x.

<Tabs groupId="sync">
<TabItem value="Centos 7" label="Centos 7">

```bash
yum install epel-release
yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm 
yum --enablerepo=remi install redis
```

</TabItem>
</Tabs>

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_database_redis.pl \
    --plugin=database::redis::plugin \
    --custommode=perlmod \
    --mode=clients \
    --server='10.30.2.79' \
    --port='6379' \
    --verbose
```

Expected command output is shown below:

```bash
OK: Clients connected: 1, blocked: 0 | 'clients.connected.count'=1;;;0; 'clients.blocked.count'=0;;;0;
```

The command above monitors client connections (```--mode=clients```).

It connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```) on the port 6379 (```--port='6379'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_database_redis.pl \
    --plugin=database::redis::plugin \
    --custommode=perlmod \
    --mode=clients \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins)