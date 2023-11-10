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

| Macro             | Description                                                                                   | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------|:------------------|:-----------:|
| REDISUSERNAME     |                                                                                               |                   | X           |
| REDISPASSWORD     |                                                                                               |                   | X           |
| REDISPORT         |                                                                                               | 6379              |             |
| REDISSENTINELPORT |                                                                                               |                   |             |
| REDISCUSTOMMODE   |                                                                                               | perlmod           |             |
| REDISSENTINEL     |                                                                                               |                   | X           |
| REDISSERVICE      |                                                                                               |                   | X           |
| REDISEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Macro                           | Description                                                                                 | Valeur par défaut | Obligatoire |
|:--------------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBLOCKEDCLIENTS           |                                                                                             |                   |             |
| CRITICALBLOCKEDCLIENTS          |                                                                                             |                   |             |
| WARNINGCLIENTBIGGESTINPUTBUF    |                                                                                             |                   |             |
| CRITICALCLIENTBIGGESTINPUTBUF   |                                                                                             |                   |             |
| WARNINGCLIENTLONGESTOUTPUTLIST  |                                                                                             |                   |             |
| CRITICALCLIENTLONGESTOUTPUTLIST |                                                                                             |                   |             |
| WARNINGCONNECTEDCLIENTS         |                                                                                             |                   |             |
| CRITICALCONNECTEDCLIENTS        |                                                                                             |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Commands" label="Commands">

| Macro                     | Description                                                                                 | Valeur par défaut | Obligatoire |
|:--------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGOPSPERSEC          |                                                                                             |                   |             |
| CRITICALOPSPERSEC         |                                                                                             |                   |             |
| WARNINGPROCESSEDCOMMANDS  |                                                                                             |                   |             |
| CRITICALPROCESSEDCOMMANDS |                                                                                             |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Connections" label="Connections">

| Macro                       | Description                                                                                 | Valeur par défaut | Obligatoire |
|:----------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRECEIVEDCONNECTIONS  |                                                                                             |                   |             |
| CRITICALRECEIVEDCONNECTIONS |                                                                                             |                   |             |
| WARNINGREJECTEDCONNECTIONS  |                                                                                             |                   |             |
| CRITICALREJECTEDCONNECTIONS |                                                                                             |                   |             |
| WARNINGTRAFFICIN            |                                                                                             |                   |             |
| CRITICALTRAFFICIN           |                                                                                             |                   |             |
| WARNINGTRAFFICOUT           |                                                                                             |                   |             |
| CRITICALTRAFFICOUT          |                                                                                             |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro                | Description                                                                                 | Valeur par défaut | Obligatoire |
|:---------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSYS           |                                                                                             |                   |             |
| CRITICALSYS          |                                                                                             |                   |             |
| WARNINGSYSCHILDREN   |                                                                                             |                   |             |
| CRITICALSYSCHILDREN  |                                                                                             |                   |             |
| WARNINGUSER          |                                                                                             |                   |             |
| CRITICALUSER         |                                                                                             |                   |             |
| WARNINGUSERCHILDREN  |                                                                                             |                   |             |
| CRITICALUSERCHILDREN |                                                                                             |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                          | Description                                                                                 | Valeur par défaut | Obligatoire |
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
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Persistence" label="Persistence">

| Macro                       | Description                                                                                 | Valeur par défaut                 | Obligatoire |
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
| EXTRAOPTIONS                | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                                   |             |

</TabItem>
<TabItem value="Replication" label="Replication">

| Macro                    | Description                                                                                 | Valeur par défaut                 | Obligatoire |
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
| EXTRAOPTIONS             | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                                   |             |

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
OK: system: 69 % user: 79 % system children: 62 % user children: 26 % | 'cpu.system.usage.percentage'=69%;;;0;100'cpu.user.usage.percentage'=79%;;;0;100'cpu.system.children.usage.percentage'=62%;;;0;100'cpu.user.children.usage.percentage'=26%;;;0;100
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

| Option | Description |
|:-------|:------------|

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

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_database_redis.pl \
	--plugin=database::redis::plugin \
	--custommode='perlmod' \
	--custommode='perlmod' \
	--help
```
