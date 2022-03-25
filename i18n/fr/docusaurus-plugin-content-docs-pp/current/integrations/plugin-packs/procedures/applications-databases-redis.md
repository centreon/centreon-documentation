---
id: applications-databases-redis
title: Redis Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Objets supervisés

Le Pack Redis collecte les données pour:
* Clients
* Commands
* Connections
* Cpu
* Memory
* Persistence
* Replication

### Métriques collectées

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

## Prérequis

Afin de contrôler votre base de données Redis, le collecteur doit pouvoir exécuter la commande _INFO_ (cf: https://redis.io/commands/INFO).

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Databases-Redis
```

2. Sur l'interface Web de Centreon, installer le Pack *Redis Database* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Databases-Redis
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-applications-databases-redis
```

3. Sur l'interface Web de Centreon, installer le Pack *Redis Database* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

Ce Pack est conçu de manière à avoir dans Centreon un hôte par base de données Redis.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-DB-Redis-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="cli" label="cli">

Avec cette configuration, le Plugin utilise l'exécutable _redis-cli_.
_tls_ est supporté à partir de la version 6.x.

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

Avec cette configuration, le Plugin utilise le module Perl _Redis_ (cf: https://metacpan.org/pod/Redis).
_tls_ n'est pas supporté.

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

## Comment installer _redis-cli_ 6.x ?

Pour le support _tls_ et des utilisateurs ACLs, une version 6.x minimum de _redis-cli_ est nécessaire.

<Tabs groupId="sync">
<TabItem value="Centos 7" label="Centos 7">

```bash
yum install epel-release
yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm 
yum --enablerepo=remi install redis
```

</TabItem>
</Tabs>

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_database_redis.pl \
    --plugin=database::redis::plugin \
    --custommode=perlmod \
    --mode=clients \
    --server='10.30.2.79' \
    --port='6379' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Clients connected: 1, blocked: 0 | 'clients.connected.count'=1;;;0; 'clients.blocked.count'=0;;;0;
```

Cette commande contrôle les connexions clientes (```--mode=clients```).

La commande se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _6379_ (```--port='6379'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peuvent être affichés
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_database_redis.pl \
    --plugin=database::redis::plugin \
    --custommode=perlmod \
    --mode=clients \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins.md)
