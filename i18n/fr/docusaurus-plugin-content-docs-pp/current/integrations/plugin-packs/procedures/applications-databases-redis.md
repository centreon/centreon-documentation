---
id: applications-databases-redis
title: Redis Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Redis Database** apporte un modèle d'hôte :

* **App-DB-Redis-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-Redis-custom" label="App-DB-Redis-custom">

| Alias       | Modèle de service               | Description                                                            |
|:------------|:--------------------------------|:-----------------------------------------------------------------------|
| Clients     | App-DB-Redis-Clients-custom     | Contrôle permettant de vérifier les connexions clientes                |
| Commands    | App-DB-Redis-Commands-custom    | Contrôle permettant de vérifier le nombre de commandes                 |
| Connections | App-DB-Redis-Connections-custom | Contrôle permettant de vérifier les connexions et l'utilisation réseau |
| Cpu         | App-DB-Redis-Cpu-custom         | Contrôle permettant de vérifier l'utilisation processeur               |
| Memory      | App-DB-Redis-Memory-custom      | Contrôle permettant de vérifier l'utilisation mémoire                  |
| Persistence | App-DB-Redis-Persistence-custom | Contrôle permettant de vérifier RDB                                    |
| Replication | App-DB-Redis-Replication-custom | Contrôle permettant de vérifier la réplication                         |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-Redis-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| clients.connected.count            | count |
| clients.blocked.count              | count |
| clients.longest_output_list.count  | count |
| clients.biggest_input_buffer.count | count |

</TabItem>
<TabItem value="Commands" label="Commands">

| Métrique                     | Unité |
|:-----------------------------|:------|
| commands.processed.count     | count |
| commands.processed.persecond | N/A   |

</TabItem>
<TabItem value="Connections" label="Connections">

| Métrique                          | Unité |
|:----------------------------------|:------|
| connections.received.count        | count |
| connections.rejected.count        | count |
| network.traffic.in.bitspersecond  | b/s   |
| network.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| cpu.system.usage.percentage          | %     |
| cpu.user.usage.percentage            | %     |
| cpu.system.children.usage.percentage | %     |
| cpu.user.children.usage.percentage   | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                             | Unité |
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

| Métrique                          | Unité |
|:----------------------------------|:------|
| status                            | N/A   |
| rdb.changes.since_last_save.count | count |
| rdb.last_successful_save.seconds  | s     |
| rdb.last_save.size.bytes          | B     |
| rdb.last_save.duration.seconds    | s     |
| rdb.current_save.duration.seconds | s     |

</TabItem>
<TabItem value="Replication" label="Replication">

| Métrique                                    | Unité |
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

## Prérequis

Afin de contrôler votre base de données Redis, le collecteur doit pouvoir exécuter la commande _INFO_ (cf: https://redis.io/commands/INFO).

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

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

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Redis Database**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

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

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-DB-Redis-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro             | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| REDISUSERNAME     | Redis username (redis-cli \>= 6.x mandatory)                                                                               |                   | X           |
| REDISPASSWORD     | Redis password                                                                                                             |                   | X           |
| REDISPORT         | Redis port (default: 6379)                                                                                                 | 6379              |             |
| REDISSENTINELPORT | Sentinel port (default: 26379)                                                                                             |                   |             |
| REDISCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | perlmod           |             |
| REDISSENTINEL     | Sentinel server. Alternative of server option. service option is required                                                  |                   | X           |
| REDISSERVICE      | Service parameter                                                                                                          |                   | X           |
| REDISEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Macro                           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBLOCKEDCLIENTS           | Warning threshold for number of blocked clients                                                    |                   |             |
| CRITICALBLOCKEDCLIENTS          | Critical threshold for number of blocked clients                                                   |                   |             |
| WARNINGCLIENTBIGGESTINPUTBUF    | Warning threshold for biggest input buffer among current client connections                        |                   |             |
| CRITICALCLIENTBIGGESTINPUTBUF   | Critical threshold for biggest input buffer among current client connections                       |                   |             |
| WARNINGCLIENTLONGESTOUTPUTLIST  | Warning threshold for longest output list among current client connections                         |                   |             |
| CRITICALCLIENTLONGESTOUTPUTLIST | Critical threshold for longest output list among current client connections                        |                   |             |
| WARNINGCONNECTEDCLIENTS         | Warning threshold for number of connected clients                                                  |                   |             |
| CRITICALCONNECTEDCLIENTS        | Critical threshold for number of connected clients                                                 |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Commands" label="Commands">

| Macro                     | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGOPSPERSEC          | Warning threshold for number of commands processed per second                                      |                   |             |
| CRITICALOPSPERSEC         | Critical threshold for number of commands processed per second                                     |                   |             |
| WARNINGPROCESSEDCOMMANDS  | Warning threshold for number of commands processed by the server                                   |                   |             |
| CRITICALPROCESSEDCOMMANDS | Critical threshold for number of commands processed by the server                                  |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Connections" label="Connections">

| Macro                       | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRECEIVEDCONNECTIONS  | Warning threshold for received connections                                                         |                   |             |
| CRITICALRECEIVEDCONNECTIONS | Critical threshold for received connections                                                        |                   |             |
| WARNINGREJECTEDCONNECTIONS  | Warning threshold for rejected connections                                                         |                   |             |
| CRITICALREJECTEDCONNECTIONS | Critical threshold for rejected connections                                                        |                   |             |
| WARNINGTRAFFICIN            | Warning threshold for inbound traffic (b/s)                                                        |                   |             |
| CRITICALTRAFFICIN           | Critical threshold for inbound traffic (b/s)                                                       |                   |             |
| WARNINGTRAFFICOUT           | Warning threshold for outbound traffic (b/s)                                                       |                   |             |
| CRITICALTRAFFICOUT          | Critical thresholdfor outbound traffic (b/s)                                                       |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro                | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSYS           | Warning threshold for Sys CPU utilization                                                          |                   |             |
| CRITICALSYS          | Critical threshold for Sys CPU utilization                                                         |                   |             |
| WARNINGSYSCHILDREN   | Warning threshold for Sys Children CPU utilization                                                 |                   |             |
| CRITICALSYSCHILDREN  | Critical threshold for Sys Children CPU utilization                                                |                   |             |
| WARNINGUSER          | Warning threshold for User CPU utilization                                                         |                   |             |
| CRITICALUSER         | Critical threshold for User CPU utilization                                                        |                   |             |
| WARNINGUSERCHILDREN  | Warning threshold for User Children CPU utilization                                                |                   |             |
| CRITICALUSERCHILDREN | Critical threshold for User Children CPU utilization                                               |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                          | Description                                                                                        | Valeur par défaut | Obligatoire |
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
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Persistence" label="Persistence">

| Macro                       | Description                                                                                                                                                                         | Valeur par défaut                 | Obligatoire |
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
| WARNINGSTATUS               | Define the conditions to match for the status to be WARNING (default: '%\{progress_status\} =~ /in progress/i'). You can use the following variables: %\{progress_status\}, %\{status\} | %\{sync_status\} =~ /in progress/i |             |
| CRITICALSTATUS              | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /fail/i'). You can use the following variables: %\{progress_status\}, %\{status\}                 | %\{link_status\} =~ /down/i        |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                  |                                   |             |

</TabItem>
<TabItem value="Replication" label="Replication">

| Macro                    | Description                                                                                                                                                                                          | Valeur par défaut                 | Obligatoire |
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
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING (default: '%\{sync_status\} =~ /in progress/i'). You can use the following variables: %\{sync_status\}, %\{link_status\}, %\{cluster_state\} | %\{sync_status\} =~ /in progress/i |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL (default: '%\{link_status\} =~ /down/i'). You can use the following variables: %\{sync_status\}, %\{link_status\}, %\{cluster_state\}       | %\{link_status\} =~ /down/i        |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                   |                                   |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

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

La commande devrait retourner un message de sortie similaire à :

```bash
OK: system: 7 % user: 73 % system children: 93 % user children: 80 % | 'cpu.system.usage.percentage'=7%;;;0;100'cpu.user.usage.percentage'=73%;;;0;100'cpu.system.children.usage.percentage'=93%;;;0;100'cpu.user.children.usage.percentage'=80%;;;0;100
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_database_redis.pl \
	--plugin=database::redis::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                   | Modèle de service associé       |
|:-----------------------------------------------------------------------------------------------------------------------|:--------------------------------|
| clients [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/clients.pm)]         | App-DB-Redis-Clients-custom     |
| commands [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/commands.pm)]       | App-DB-Redis-Commands-custom    |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/connections.pm)] | App-DB-Redis-Connections-custom |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/cpu.pm)]                 | App-DB-Redis-Cpu-custom         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/memory.pm)]           | App-DB-Redis-Memory-custom      |
| persistence [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/persistence.pm)] | App-DB-Redis-Persistence-custom |
| replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/redis/mode/replication.pm)] | App-DB-Redis-Replication-custom |

### Custom modes disponibles

Ce connecteur offre plusieurs méthodes pour se connecter à la ressource (CLI, bibliothèque, etc.), appelées **custom modes**.
Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_database_redis.pl \
	--plugin=database::redis::plugin \
	--list-custommode
```

Le plugin apporte les custom modes suivants :

* cli
* perlmod

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

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
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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

#### Options des custom modes

Les options spécifiques aux **custom modes** sont listées ci-dessous :

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

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

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
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '%\{progress_status\} =~ /in progress/i'). You can use the following variables: %\{progress_status\}, %\{status\}   |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /fail/i'). You can use the following variables: %\{progress_status\}, %\{status\}                   |
| --warning-*       | Warning threshold. Can be: 'changes', 'last-save', 'save-size', 'last-save-duration', 'current-save-duration'.                                                                        |
| --critical-*      | Critical threshold. Can be: 'changes', 'last-save', 'save-size', 'last-save-duration', 'current-save-duration'.                                                                       |

</TabItem>
<TabItem value="Replication" label="Replication">

| Option            | Description                                                                                                                                                                                            |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '%\{sync_status\} =~ /in progress/i'). You can use the following variables: %\{sync_status\}, %\{link_status\}, %\{cluster_state\}   |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{link_status\} =~ /down/i'). You can use the following variables: %\{sync_status\}, %\{link_status\}, %\{cluster_state\}         |
| --warning-*       | Warning threshold. Can be: 'connected-slaves', 'master-repl-offset', 'master-last-io', 'slave-priority', 'slave-read-only'.                                                                            |
| --critical-*      | Critical threshold. Can be: 'connected-slaves', 'master-repl-offset', 'master-last-io', 'slave-priority', 'slave-read-only'.                                                                           |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_database_redis.pl \
	--plugin=database::redis::plugin \
	--custommode='perlmod' \
	--custommode='perlmod' \
	--help
```
