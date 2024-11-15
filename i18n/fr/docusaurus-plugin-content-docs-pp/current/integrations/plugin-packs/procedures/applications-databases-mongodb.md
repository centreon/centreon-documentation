---
id: applications-databases-mongodb
title: MongoDB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **MongoDB** apporte un modèle d'hôte :

* **App-DB-Mongodb-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-Mongodb-custom" label="App-DB-Mongodb-custom">

| Alias                 | Modèle de service                           | Description                                                     | Découverte |
|:----------------------|:--------------------------------------------|:----------------------------------------------------------------|:----------:|
| Collection-Statistics | App-DB-Mongodb-Collection-Statistics-custom | Contrôle les statistiques des collections, par base de données | X          |
| Connection-Time       | App-DB-Mongodb-Connection-Time-custom       | Contrôle le temps de connexion à l'instance                     |            |
| Connections           | App-DB-Mongodb-Connections-custom           | Contrôle le nombre de connexions                                |            |
| Database-Statistics   | App-DB-Mongodb-Database-Statistics-custom   | Contrôle les statistiques des bases de données                  | X          |
| Queries               | App-DB-Mongodb-Queries-custom               | Contrôle le nombre de requêtes par secondes                     |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-Mongodb-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias              | Modèle de service                        | Description                                                                       |
|:-------------------|:-----------------------------------------|:----------------------------------------------------------------------------------|
| Replication-Status | App-DB-Mongodb-Replication-Status-custom | Contrôle le statut de la réplication entre les différents membres d'un replicaset |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                      | Description                                                              |
|:-------------------------------------|:-------------------------------------------------------------------------|
| App-DB-Mongodb-Collection-Statistics | Découvre les bases de données et supervise l'utilisation des collections |
| App-DB-Mongodb-Database-Statistics   | Découvre les bases de données et supervise l'utilisation                 |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Collection-Statistics" label="Collection-Statistics">

| Métrique                                                           | Unité |
|:-------------------------------------------------------------------|:------|
| *db_name~collection_name*#collection.size.storage.bytes            | B     |
| *db_name~collection_name*#collection.size.index.bytes              | B     |
| *db_name~collection_name*#collection.documents.count               |       |
| *db_name~collection_name*#collection.indexes.count                 |       |
| *db_name~collection_name~shard_name*#collection.size.storage.bytes | B     |
| *db_name~collection_name~shard_name*#collection.size.index.bytes   | B     |
| *db_name~collection_name~shard_name*#collection.documents.count    |       |
| *db_name~collection_name~shard_name*##collection.indexes.count     |       |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Métrique                     | Unité |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Connections" label="Connections">

| Métrique                      | Unité |
|:------------------------------|:------|
| connections.active.count      |       |
| connections.current.count     |       |
| connections.usage.percentage  | %     |
| connections.created.persecond |       |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| *db_name*#database.size.storage.bytes            | B     |
| *db_name*#database.size.data.bytes               | B     |
| *db_name*#database.size.index.bytes              | B     |
| *db_name*#database.collections.count             |       |
| *db_name*#database.views.count                   |       |
| *db_name*#database.documents.count               |       |
| *db_name*#database.indexes.count                 |       |
| *db_name~shard_name*#database.size.storage.bytes | B     |
| *db_name~shard_name*#database.size.data.bytes    | B     |
| *db_name~shard_name*#database.size.index.bytes   | B     |
| *db_name~shard_name*#database.collections.count  |       |
| *db_name~shard_name*#database.views.count        |       |
| *db_name~shard_name*#database.documents.count    |       |
| *db_name~shard_name*#database.indexes.count      |       |

</TabItem>
<TabItem value="Queries" label="Queries">

| Métrique                  | Unité |
|:--------------------------|:------|
| queries.total.persecond   |       |
| queries.insert.persecond  |       |
| queries.insert.count      |       |
| queries.query.persecond   |       |
| queries.query.count       |       |
| queries.update.persecond  |       |
| queries.update.count      |       |
| queries.delete.persecond  |       |
| queries.delete.count      |       |
| queries.getmore.persecond |       |
| queries.getmore.count     |       |
| queries.command.persecond |       |
| queries.command.count     |       |

</TabItem>
<TabItem value="Replication-Status" label="Replication-Status">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| member status                         |       |
| members.primary.count                 |       |
| members.secondary.count               |       |
| members.arbiter.count                 |       |
| *member_name*#replication.lag.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Voici la liste des privilèges utilisateur nécessaires par service :

| Service               | Privilèges                                         | Base de données  |
|:----------------------|:---------------------------------------------------|:-----------------|
| Collection-Statistics | ping, listDatabases, listCollections, collStats    | admin            |
| Connection-Time       | ping                                               | admin            |
| Connections           | ping, serverStatus                                 | admin            |
| Database-Statistics   | ping, listDatabases, dbStats                       | admin            |
| Queries               | ping, serverStatus                                 | admin            |
| Replication-Status    | ping, ismaster, replSetGetConfig, replSetGetStatus | admin            |

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
dnf install centreon-pack-applications-databases-mongodb
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-mongodb
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-mongodb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-mongodb
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **MongoDB**
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
dnf install centreon-plugin-Applications-Databases-Mongodb
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Mongodb
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-mongodb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Mongodb
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-DB-Mongodb-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                           | Valeur par défaut | Obligatoire |
|:----------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MONGODBUSERNAME | MongoDB username                                                                                      |                   | X           |
| MONGODBPASSWORD | MongoDB password                                                                                      |                   | X           |
| MONGODBPROTOCOL | Protocol used (Default: mongodb) DNS Seedlist Connection Format can be specified, i.e. 'mongodb+srv'  | mongodb           |             |
| MONGODBPORT     | Port used by MongoDB                                                                                  | 27017             |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Collection-Statistics" label="Collection-Statistics">

| Macro                         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERDATABASE                | Filter databases by name (Can use regexp)                                                           |                   |             |
| FILTERCOUNTERS                |                                                                                                     |                   |             |
| WARNINGCOLLECTIONDOCUMENTS    | Thresholds                                                                                          |                   |             |
| CRITICALCOLLECTIONDOCUMENTS   | Thresholds                                                                                          |                   |             |
| WARNINGCOLLECTIONINDEXES      | Thresholds                                                                                          |                   |             |
| CRITICALCOLLECTIONINDEXES     | Thresholds                                                                                          |                   |             |
| WARNINGCOLLECTIONSIZEINDEX    | Thresholds                                                                                          |                   |             |
| CRITICALCOLLECTIONSIZEINDEX   | Thresholds                                                                                          |                   |             |
| WARNINGCOLLECTIONSIZESTORAGE  | Thresholds                                                                                          |                   |             |
| CRITICALCOLLECTIONSIZESTORAGE | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro                  | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONTIME  | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONTIME | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Connections" label="Connections">

| Macro                        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS               |                                                                                                     |                   |             |
| WARNINGACTIVE                | Thresholds                                                                                          |                   |             |
| CRITICALACTIVE               | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONSPERSECOND  | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONSPERSECOND | Thresholds                                                                                          |                   |             |
| WARNINGCURRENT               | Thresholds                                                                                          |                   |             |
| CRITICALCURRENT              | Thresholds                                                                                          |                   |             |
| WARNINGUSAGE                 | Thresholds                                                                                          |                   |             |
| CRITICALUSAGE                | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Macro                       | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERDATABASE              | Filter databases by name (Can use regexp)                                                           |                   |             |
| FILTERCOUNTERS              |                                                                                                     |                   |             |
| WARNINGDATABASECOLLECTIONS  | Thresholds                                                                                          |                   |             |
| CRITICALDATABASECOLLECTIONS | Thresholds                                                                                          |                   |             |
| WARNINGDATABASEDOCUMENTS    | Thresholds                                                                                          |                   |             |
| CRITICALDATABASEDOCUMENTS   | Thresholds                                                                                          |                   |             |
| WARNINGDATABASEINDEXES      | Thresholds                                                                                          |                   |             |
| CRITICALDATABASEINDEXES     | Thresholds                                                                                          |                   |             |
| WARNINGDATABASESIZEDATA     | Thresholds                                                                                          |                   |             |
| CRITICALDATABASESIZEDATA    | Thresholds                                                                                          |                   |             |
| WARNINGDATABASESIZEINDEX    | Thresholds                                                                                          |                   |             |
| CRITICALDATABASESIZEINDEX   | Thresholds                                                                                          |                   |             |
| WARNINGDATABASESIZESTORAGE  | Thresholds                                                                                          |                   |             |
| CRITICALDATABASESIZESTORAGE | Thresholds                                                                                          |                   |             |
| WARNINGDATABASEVIEWS        | Thresholds                                                                                          |                   |             |
| CRITICALDATABASEVIEWS       | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Queries" label="Queries">

| Macro           | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCOMMAND  | Thresholds                                                                                          |                   |             |
| CRITICALCOMMAND | Thresholds                                                                                          |                   |             |
| WARNINGDELETE   | Thresholds                                                                                          |                   |             |
| CRITICALDELETE  | Thresholds                                                                                          |                   |             |
| WARNINGGETMORE  | Thresholds                                                                                          |                   |             |
| CRITICALGETMORE | Thresholds                                                                                          |                   |             |
| WARNINGINSERT   | Thresholds                                                                                          |                   |             |
| CRITICALINSERT  | Thresholds                                                                                          |                   |             |
| WARNINGQUERY    | Thresholds                                                                                          |                   |             |
| CRITICALQUERY   | Thresholds                                                                                          |                   |             |
| WARNINGTOTAL    | Thresholds                                                                                          |                   |             |
| CRITICALTOTAL   | Thresholds                                                                                          |                   |             |
| WARNINGUPDATE   | Thresholds                                                                                          |                   |             |
| CRITICALUPDATE  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Replication-Status" label="Replication-Status">

| Macro                  | Description                                                                                                                                                                                                | Valeur par défaut                | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| WARNINGMEMBERSTATUS    | Define the conditions to match for the status to be WARNING (default: '%{state} !~ /PRIMARY\|SECONDARY/'). You can use the following variables: %{name}, %{state}, %{health}, %{slave\_delay}, %{priority} | %{state} !~ /PRIMARY\|SECONDARY/ |             |
| CRITICALMEMBERSTATUS   | Define the conditions to match for the status to be CRITICAL (default: '%{health} !~ /up/'). You can use the following variables: %{name}, %{state}, %{health}, %{slave\_delay}, %{priority}               | %{health} !~ /up/                |             |
| WARNINGREPLICATIONLAG  | Thresholds                                                                                                                                                                                                 |                                  |             |
| CRITICALREPLICATIONLAG | Thresholds                                                                                                                                                                                                 |                                  |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{sync\_host}                                                                                  |                                  |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{sync\_host}                                                                                 |                                  |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                        |                                  |             |

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
/usr/lib/centreon/plugins/centreon_mongodb.pl \
	--plugin=database::mongodb::plugin \
	--mode=replication-status \
	--hostname=10.0.0.1 \
	--username='myuser' \
	--password='******' \
	--port='27017' \
	--protocol='mongodb'  \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: current member state is 'PRIMARY' - All members statistics are ok | 'members.primary.count'=1;;;0; 'members.secondary.count'=2;;;0; 'members.arbiter.count'=0;;;0; 'perconamongo5db01-v.dbprep.centreon.com:27017#replication.lag.seconds'=10s;;;0; 'perconamongo5db03-v.dbprep.centreon.com:27017#replication.lag.seconds'=0s;;;0;
Member 'perconamongo5db01-v.dbprep.centreon.com:27017' state is 'SECONDARY' and health is 'up' [slave delay: 0] [priority: 1], replication lag: 10 s
Member 'perconamongo5db02-v.dbprep.centreon.com:27017' state is 'PRIMARY' and health is 'up' [slave delay: 0] [priority: 2]
Member 'perconamongo5db03-v.dbprep.centreon.com:27017' state is 'SECONDARY' and health is 'up' [slave delay: 0] [priority: 1], replication lag: 0 s
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
/usr/lib/centreon/plugins/centreon_mongodb.pl \
	--plugin=database::mongodb::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                        | Modèle de service associé                   |
|:--------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| collection-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/collectionstatistics.pm)] | App-DB-Mongodb-Collection-Statistics-custom |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/connectiontime.pm)]             | App-DB-Mongodb-Connection-Time-custom       |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/connections.pm)]                    | App-DB-Mongodb-Connections-custom           |
| database-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/databasestatistics.pm)]     | App-DB-Mongodb-Database-Statistics-custom   |
| list-databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/listdatabases.pm)]               | Used for service discovery                  |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/queries.pm)]                            | App-DB-Mongodb-Queries-custom               |
| replication-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mongodb/mode/replicationstatus.pm)]       | App-DB-Mongodb-Replication-Status-custom    |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      MongoDB driver                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --hostname                                 | MongoDB server hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --port                                     | Port used by MongoDB.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --protocol                                 | Protocol used (Default: mongodb) DNS Seedlist Connection Format can be specified, i.e. 'mongodb+srv'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --username                                 | MongoDB username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --password                                 | MongoDB password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --timeout                                  | Set timeout in seconds (Default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> 'TLSv1'" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --no-ssl                                   | Don't use ssl connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Collection-Statistics" label="Collection-Statistics">

| Option                   | Description                                                                                                                                                |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-database        | Filter databases by name (Can use regexp).                                                                                                                 |
| --filter-shard           | Filter shards by name (Can use regexp).                                                                                                                    |
| --add-shards             | Add collection statistics by shards.                                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'storage-size', 'index-size', 'documents', 'indexes', 'shard-storage-size', 'shard-index-size', 'shard-documents', 'shard-indexes'.    |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option                     | Description                            |
|:---------------------------|:---------------------------------------|
| --warning-connection-time  | Warning threshold in milliseconds.     |
| --critical-connection-time | Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Connections" label="Connections">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'active', 'current', 'usage', 'total-created'.                                                                                                                                                                            |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Option                   | Description                                                                                                                                                                                                                                            |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-database        | Filter databases by name (Can use regexp).                                                                                                                                                                                                             |
| --filter-shard           | Filter shards by name (Can use regexp).                                                                                                                                                                                                                |
| --add-shards             | Add database statistics by shards.                                                                                                                                                                                                                     |
| --warning-* --critical-* | Thresholds. Can be: 'storage-size', 'data-size', 'index-size', 'collections', 'views', 'documents', 'indexes', 'shard-storage-size', 'shard-data-size', 'shard-index-size', 'shard-collections', 'shard-views', 'shard-documents', 'shard-indexes'.    |

</TabItem>
<TabItem value="Queries" label="Queries">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'insert', 'query', 'update', 'delete', 'getmore', 'command', 'insert-count', 'query-count', 'update-count', 'delete-count', 'getmore-count', 'command-count'.                                                    |

</TabItem>
<TabItem value="Replication-Status" label="Replication-Status">

| Option                   | Description                                                                                                                                                                                                   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{sync\_host}.                                                                                    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{sync\_host}.                                                                                   |
| --warning-member-status  | Define the conditions to match for the status to be WARNING (default: '%{state} !~ /PRIMARY\|SECONDARY/'). You can use the following variables: %{name}, %{state}, %{health}, %{slave\_delay}, %{priority}.   |
| --critical-member-status | Define the conditions to match for the status to be CRITICAL (default: '%{health} !~ /up/'). You can use the following variables: %{name}, %{state}, %{health}, %{slave\_delay}, %{priority}.                 |
| --warning-* --critical-* | Thresholds. Can be: 'members-primary', 'members-secondary', 'members-arbiter', 'replication-lag'.                                                                                                             |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_mongodb.pl \
	--plugin=database::mongodb::plugin \
	--mode=replication-status \
	--help
```
