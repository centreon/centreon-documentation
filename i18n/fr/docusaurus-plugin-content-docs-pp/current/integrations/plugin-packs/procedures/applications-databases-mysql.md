---
id: applications-databases-mysql
slug: /applications-databases-mysql
title: MySQL/MariaDB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **MySQL/MariaDB** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **MySQL/MariaDB** apporte un modèle d'hôte :

* **App-DB-MySQL-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-MySQL-custom" label="App-DB-MySQL-custom">

| Alias              | Modèle de service                      | Description                                                                                                                     |
|:-------------------|:---------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| Connection-Time    | App-DB-MySQL-Connection-Time-custom    | Contrôle permettant de vérifier la durée de connexion au serveur. Ce temps est donné en secondes                                |
| Connections-Number | App-DB-MySQL-Connections-Number-custom | Contrôle permettant de vérifier le nombre de connexions ouvertes                                                                |
| Database-Size      | App-DB-MySQL-Database-Size-custom      | Contrôle permettant de vérifier la taille des bases de données. Aucune alerte par défaut                                      |
| Myisam-Keycache    | App-DB-MySQL-Myisam-Keycache-custom    | Contrôle permettant de vérifier le taux de succès des tables MyISAM                                                             |
| Open-Files         | App-DB-MySQL-Open-Files-custom         | Contrôle permettant de vérifier le nombre de fichiers ouverts                                                                   |
| Queries            | App-DB-MySQL-Queries-custom            | Contrôle permettant de vérifier le nombre moyen de requêtes exécutées par seconde                                               |
| Slowqueries        | App-DB-MySQL-Slowqueries-custom        | Contrôle permettant de vérifier le nombre de requêtes lentes depuis la dernière vérification. Renvoie le taux moyen par seconde |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-MySQL-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                | Modèle de service                                | Description                                                                                                                        |
|:---------------------|:-------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| Backup               | App-DB-MySQL-Backup-custom                       | Contrôle permettant de vérifier les sauvegardes                                                                                    |
| Innodb-Bufferpool    | App-DB-MySQL-Innodb-Bufferpool-custom            | Contrôle permettant de vérifier le taux de succès du tampon InnoDB                                                                 |
| Long-Queries         | App-DB-MySQL-Long-Queries-custom                 | Contrôle permettant de vérifier les requêtes courantes longues                                                                     |
| MariaDB-Replication  | App-DB-MySQL-MariaDB-Replication-custom          | Contrôle permettant de vérifier l'état de la réplication entre deux bases de données                                                |
| Password-Expiration  | App-DB-MySQL-Password-Expiration-custom          | Contrôle permettant de vérifier l'expiration des mots de passe utilisateur                                                       |
| Qcache-Hitrate       | App-DB-MySQL-Qcache-Hitrate-custom               | Contrôle permettant de vérifier le taux d'utilisation du 'query cache'                                                             |
| Sql-Statement        | App-DB-MySQL-Sql-Statement-Generic-custom        | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une donnée numérique                                        |
| Sql-Statement-String | App-DB-MySQL-Sql-Statement-String-Generic-custom | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une chaîne de caractères                                    |
| Uptime               | App-DB-MySQL-Uptime-custom                       | Contrôle permettant d'indiquer le temps de fonctionnement du serveur depuis son dernier démarrage. Ce temps est exprimé en minutes |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Nom                                          | Unité |
|:---------------------------------------------|:------|
| status                                       | N/A   |
| *backups*#backup.time.last.execution.seconds | s     |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Nom                          | Unité |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Nom                                          | Unité |
|:---------------------------------------------|:------|
| threads.connected.count                      | count |
| threads.connected.percentage                 | %     |
| *databases*#database.threads.connected.count | count |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Nom                                               | Unité |
|:--------------------------------------------------|:------|
| databases.space.usage.bytes                       | B     |
| databases.space.free.bytes                        | B     |
| *database*~database.space.usage.bytes             | B     |
| *database*~database.space.free.bytes              | B     |
| *database*~*table*#table.space.usage.bytes        | B     |
| *database*~*table*#table.space.free.bytes         | B     |
| *database*~*table*#table.fragmentation.percentage | %     |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| database.bufferpool.hitrate.average.percentage | %     |
| database.bufferpool.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Nom                        | Unité |
|:---------------------------|:------|
| database.longqueries.count | count |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| instance.slaves.running.count            | count |
| connection-status                        | N/A   |
| thread-sql-status                        | N/A   |
| thread-io-status                         | N/A   |
| *servers*~instance.slave.latency.seconds | s     |
| replication-status                       | N/A   |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| database.keycache.hitrate.average.percentage | %     |
| database.keycache.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Nom                       | Unité |
|:--------------------------|:------|
| database.open.files.count | count |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| database.qcache.hitrate.average.percentage | %     |
| database.qcache.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Queries" label="Queries">

| Nom                        | Unité |
|:---------------------------|:------|
| queries.total.persecond    | /s    |
| queries.update.persecond   | /s    |
| queries.delete.persecond   | /s    |
| queries.insert.persecond   | /s    |
| queries.truncate.persecond | /s    |
| queries.select.persecond   | /s    |
| queries.commit.persecond   | /s    |
| queries.begin.persecond    | /s    |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Nom                              | Unité |
|:---------------------------------|:------|
| database.slowqueries.delta.count | count |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Nom                               | Unité |
|:----------------------------------|:------|
| value                             | N/A   |
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Nom    | Unité |
|:-------|:------|
| string | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Nom                     | Unité |
|:------------------------|:------|
| database.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Voici la liste des privilèges utilisateur nécessaires par service :

| Service             | Privilèges                  | Base de données  |
|:--------------------|:----------------------------|:-----------------|
| Backup              | SELECT                      | mysql            |
| Connection-Time     | USAGE                       |                  |
| Connections-Number  | USAGE                       |                  |
| Database-Size       | SELECT                      |                  |
| Innodb-Bufferpool   | USAGE                       |                  |
| Long-Queries        | PROCESS                     |                  |
| MariaDB-Replication | PROCESS, REPLICATION CLIENT |                  |
| Myisam-Keycache     | USAGE                       |                  |
| Password-Expiration | SELECT                      | mysql            |
| Qcache-Hitrate      | USAGE                       |                  |
| Queries             | USAGE                       |                  |
| Slowqueries         | USAGE                       |                  |
| Uptime              | USAGE                       |                  |

## Installer le connecteur de supervision

### Pack

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-databases-mysql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-mysql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-mysql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-mysql
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **MySQL/MariaDB**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

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
dnf install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-mysql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-DB-MySQL-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro             | Description                                                                                          | Valeur par défaut | Obligatoire |
|:------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MYSQLUSERNAME     | User name used to connect to the database                                                            | USERNAME          |             |
| MYSQLPASSWORD     | Password for the defined user                                                                        | PASSWORD          |             |
| MYSQLPORT         | Database Server Port                                                                                 |                   |             |
| MYSQLEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Macro                     | Description                                                                                                                                                                                                                                                                     | Valeur par défaut                                                                               | Obligatoire |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------|:-----------:|
| FILTERTYPE                | Filter backups by type (regexp can be used)                                                                                                                                                                                                                                     |                                                                                                 |             |
| CRITICALSTATUS            | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{has\_backup\}, %\{last\_error\}, %\{exit\_state\}, %\{type\} | %\{has\_backup\} eq "yes" and %\{exit\_state\} ne "SUCCESS" and %\{last\_error\} ne "NO\_ERROR" |             |
| WARNINGSTATUS             | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{has\_backup\}, %\{last\_error\}, %\{exit\_state\}, %\{type\}                                                                                                               |                                                                                                 |             |
| WARNINGTIMELASTEXECUTION  | Threshold                                                                                                                                                                                                                                                                       |                                                                                                 |             |
| CRITICALTIMELASTEXECUTION | Threshold                                                                                                                                                                                                                                                                       |                                                                                                 |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                                              | --verbose                                                                                       |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in milliseconds                                                                  |                   |             |
| CRITICAL     | Critical threshold in milliseconds                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING           | Threshold                                                                                          |                   |             |
| CRITICAL          | Threshold                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Macro              | Description                                                                                                                                            | Valeur par défaut                                     | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| FILTERDATABASE     | Filter by database name (can be a regexp)                                                                                        | ^(?!(information\_schema\|performance\_schema\|test)) |             |
| FILTERPERFDATA     | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data | database                                              |             |
| WARNINGDBFREE      | Threshold                                                                                                                                              |                                                       |             |
| CRITICALDBFREE     | Threshold                                                                                                                                              |                                                       |             |
| WARNINGDBUSAGE     | Threshold                                                                                                                                              |                                                       |             |
| CRITICALDBUSAGE    | Threshold                                                                                                                                              |                                                       |             |
| WARNINGTABLEFRAG   | Threshold                                                                                                                                              |                                                       |             |
| CRITICALTABLEFRAG  | Threshold                                                                                                                                              |                                                       |             |
| WARNINGTABLEFREE   | Threshold                                                                                                                                              |                                                       |             |
| CRITICALTABLEFREE  | Threshold                                                                                                                                              |                                                       |             |
| WARNINGTABLEUSAGE  | Threshold                                                                                                                                              |                                                       |             |
| CRITICALTABLEUSAGE | Threshold                                                                                                                                              |                                                       |             |
| WARNINGTOTALFREE   | Threshold                                                                                                                                              |                                                       |             |
| CRITICALTOTALFREE  | Threshold                                                                                                                                              |                                                       |             |
| WARNINGTOTALUSAGE  | Threshold                                                                                                                                              |                                                       |             |
| CRITICALTOTALUSAGE | Threshold                                                                                                                                              |                                                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                     | --verbose                                             |             |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SECONDS       | The minimum execution time in seconds for a long query                             | 60                |             |
| FILTERCOMMAND | Filter by command (can be a regexp.                                     | ^(?!(sleep)$)     |             |
| FILTERUSER    | Filter by user (can be a regexp)                                                                   |                   |             |
| WARNING       | Warning threshold (number of long queries)                                                         |                   |             |
| CRITICAL      | Critical threshold (number of long queries)                                                        |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Macro                     | Description                                                                                                                                                                                                | Valeur par défaut                                   | Obligatoire |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| PEERPORT                  | Database Server Port                                                                                                                                                                                       | 3306                                                |             |
| PEERUSERNAME              |  Peer username                                                                                                                                                                                                            | USERNAME                                            |             |
| PEERPASSWORD              |  Peer password                                                                                                                                                                                                            | PASSWORD                                            |             |
| UNKNOWNREPLICATIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{replication\_status\}, %\{display\}    | %\{replication\_status\} =~ /configurationIssue/i   |             |
| PEERHOST                  | Hostname to query                                                                                                                                                                                          |                                                     |             |
| UNKNOWNCONNECTIONSTATUS   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables:  %\{status\}, %\{error\_message\}, %\{display\}                                                          |                                                     |             |
| CRITICALCONNECTIONSTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{error\_message\}, %\{display\}                         | %\{status\} ne "ok"                                 |             |
| WARNINGCONNECTIONSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables:  %\{status\}, %\{error\_message\}, %\{display\}                                                          |                                                     |             |
| WARNINGREPLICATIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{replication\_status\}, %\{display\}            | %\{replication\_status\} =~ /inProgress/i           |             |
| CRITICALREPLICATIONSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{replication\_status\}, %\{display\} | %\{replication\_status\} =~ /connectIssueToMaster/i |             |
| WARNINGSLAVELATENCY       | Threshold                                                                                                                                                                                                  |                                                     |             |
| CRITICALSLAVELATENCY      | Threshold                                                                                                                                                                                                  |                                                     |             |
| CRITICALSLAVESRUNNING     | Threshold                                                                                                                                                                                                  | 1:1                                                 |             |
| WARNINGSLAVESRUNNING      | Threshold                                                                                                                                                                                                  |                                                     |             |
| WARNINGTHREADIOSTATUS     | Threshold                                                                                                                                                                                                            |                                                     |             |
| CRITICALTHREADIOSTATUS    |  Threshold                                                                                                                                                                                                           |                                                     |             |
| WARNINGTHREADSQLSTATUS    | Threshold                                                                                                                                                                                                            |                                                     |             |
| CRITICALTHREADSQLSTATUS   | Threshold                                                                                                                                                                                                            |                                                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                         | --verbose                                           |             |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                       |                   |             |
| CRITICAL     | Critical threshold in percent                                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Macro          | Description                                                                                                                                                                                                 | Valeur par défaut                                 | Obligatoire |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{user\}, %\{expire\}, %\{expire\_time\} | %\{expire\} ne "never" and %\{expire\_time\} == 0 |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{user\}, %\{expire\}, %\{expire\_time\}                                                                 |                                                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                          | --verbose                                         |             |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Queries" label="Queries">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold                                                                                          |                   |             |
| CRITICAL     | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning number for slow queries since last check                                                   |                   |             |
| CRITICAL     | Critical number for slow queries since last check                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLSTATEMENT | SQL statement that returns a number                                                                |                   | X           |
| WARNING      | Threshold                                                                                                   |                   |             |
| CRITICAL     | Threshold                                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Macro        | Description                                                                                                                                                                                           | Valeur par défaut | Obligatoire |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLSTATEMENT | SQL statement that returns a string                                                                                                                                                                   |                   | X           |
| VALUE        | Value column (must be one of the selected field). MANDATORY                                                                                                                                           |                   |             |
| WARNING      | Define the conditions to match for the status to be WARNING (can be %\{key\_field\}, %\{value\_field\}). Example: --warning-string '%\{key\_field\} eq 'Central' && %\{value\_field\} =~ /127.0.0.1/' |                   |             |
| CRITICAL     | Define the conditions to match for the status to be CRITICAL (can be %\{key\_field\} or %\{value\_field\})                                                                                            |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                    |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin \
	--host=10.0.0.1 \
	--username='XXXX' \
	--password='XXXX' \
	--port='3306'  \
	--mode=uptime \
	--warning='' \
	--critical='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: database is up since 53 days (Start time = 2025/04/11 12:37:57) | 'database.uptime.seconds'=4661146s;;;0;
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
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                             | Modèle de service associé                        |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| backup [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/backup.pm)]                                     | App-DB-MySQL-Backup-custom                       |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]              | Pas utilisé dans ce connecteur de supervision   |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)]     | App-DB-MySQL-Connection-Time-custom              |
| databases-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/databasessize.pm)]                      | App-DB-MySQL-Database-Size-custom                |
| innodb-bufferpool-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/innodbbufferpoolhitrate.pm)] | App-DB-MySQL-Innodb-Bufferpool-custom            |
| long-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/longqueries.pm)]                          | App-DB-MySQL-Long-Queries-custom                 |
| myisam-keycache-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/myisamkeycachehitrate.pm)]     | App-DB-MySQL-Myisam-Keycache-custom              |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/db_socket.pm)]                                                        | Pas utilisé dans ce connecteur de supervision   |
| open-files [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/openfiles.pm)]                              | App-DB-MySQL-Open-Files-custom                   |
| open-tables [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/opentables.pm)]                            | Pas utilisé dans ce connecteur de supervision   |
| password-expiration [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/passwordexpiration.pm)]            | App-DB-MySQL-Password-Expiration-custom          |
| qcache-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/qcachehitrate.pm)]                      | App-DB-MySQL-Qcache-Hitrate-custom               |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/queries.pm)]                                   | App-DB-MySQL-Queries-custom                      |
| replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/replication.pm)]                           | App-DB-MySQL-MariaDB-Replication-custom          |
| slow-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/slowqueries.pm)]                          | App-DB-MySQL-Slowqueries-custom                  |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                            | App-DB-MySQL-Sql-Statement-Generic-custom        |
| sql-string [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sqlstring.pm)]               | App-DB-MySQL-Sql-Statement-String-Generic-custom |
| threads-connected [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/threadsconnected.pm)]                | App-DB-MySQL-Connections-Number-custom           |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/uptime.pm)]                                     | App-DB-MySQL-Uptime-custom                       |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --sqlmode                                  | This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --list-sqlmode                             | List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --multiple                                 | Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --host                                     | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --port                                     | Database Server Port.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Option                   | Description                                                                                                                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                       |
| --filter-type            | Filter backups by type (regexp can be used).                                                                                                                                                                                                                                    |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{has\_backup\}, %\{last\_error\}, %\{exit\_state\}, %\{type\}                                                                                                               |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{has\_backup\}, %\{last\_error\}, %\{exit\_state\}, %\{type\}                                                                                                               |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{has\_backup\} eq "yes" and %\{exit\_state\} ne "SUCCESS" and %\{last\_error\} ne "NO\_ERROR"'). You can use the following variables: %\{has\_backup\}, %\{last\_error\}, %\{exit\_state\}, %\{type\} |
| --warning-* --critical-* | Thresholds. Can be: 'time-last-execution'.                                                                                                                                                                                                                                      |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option     | Description                         |
|:-----------|:------------------------------------|
| --warning  | Warning threshold in milliseconds.  |
| --critical | Critical threshold in milliseconds. |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Option                   | Description                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --add-databases          | Add threads by databases.                                                                                                 |
| --warning-* --critical-* | Thresholds. Can be: 'usage', 'usage-prct' (%), 'database-threads-connected'.                                              |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Option                   | Description                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --filter-database        | Filter the databases to monitor with a regular expression.                                                                |
| --filter-table           | Filter tables by name (can be a regexp).                                                                                  |
| --warning-* --critical-* | Thresholds (can be: 'total-usage', 'total-free', 'db-usage', 'db-free', 'table-usage', 'table-free', 'table-frag').       |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning              | Warning threshold.                                                                                                                                                                                                                          |
| --critical             | Critical threshold.                                                                                                                                                                                                                         |
| --lookback             | Threshold isn't on the percent calculated from the difference ('bufferpool\_hitrate\_now').                                                                                                                                                 |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Option           | Description                                                           |
|:-----------------|:----------------------------------------------------------------------|
| --warning        | Warning threshold (number of long queries).                           |
| --critical       | Critical threshold (number of long queries).                          |
| --seconds        | The minimum execution time in seconds for a long query (default: 60). |
| --filter-user    | Filter by user (can be a regexp).                                     |
| --filter-command | Filter by command (can be a regexp. Default: '^(?!(sleep)$)').        |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Option                        | Description                                                                                                                                                                                                |
|:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters             | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                  |
| --unknown-connection-status   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables:  %\{status\}, %\{error\_message\}, %\{display\}                                                          |
| --warning-connection-status   | Define the conditions to match for the status to be WARNING. You can use the following variables:  %\{status\}, %\{error\_message\}, %\{display\}                                                          |
| --critical-connection-status  | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} ne "ok"'). You can use the following variables: %\{status\}, %\{error\_message\}, %\{display\}                         |
| --unknown-replication-status  | Define the conditions to match for the status to be UNKNOWN (default: '%\{replication\_status\} =~ /configurationIssue/i'). You can use the following variables: %\{replication\_status\}, %\{display\}    |
| --warning-replication-status  | Define the conditions to match for the status to be WARNING (default: '%\{replication\_status\} =~ /inProgress/i'). You can use the following variables: %\{replication\_status\}, %\{display\}            |
| --critical-replication-status | Define the conditions to match for the status to be CRITICAL (default: '%\{replication\_status\} =~ /connectIssueToMaster/i'). You can use the following variables: %\{replication\_status\}, %\{display\} |
| --warning-* --critical-*      | Thresholds. Can be: 'slaves-running', 'slave-latency' (s).                                                                                                                                                 |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning              | Warning threshold.                                                                                                                                                                                                                          |
| --critical             | Critical threshold.                                                                                                                                                                                                                         |
| --lookback             | Threshold isn't on the percent calculated from the difference ('keycache\_hitrate\_now').                                                                                                                                                   |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Option     | Description                    |
|:-----------|:-------------------------------|
| --warning  | Warning threshold in percent.  |
| --critical | Critical threshold in percent. |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                   |
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{user\}, %\{expire\}, %\{expire\_time\}                                                                                                 |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%\{expire\} ne "never" and %\{expire\_time\} == 0'). You can use the following variables: %\{user\}, %\{expire\}, %\{expire\_time\}                                 |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning              | Warning threshold.                                                                                                                                                                                                                          |
| --critical             | Critical threshold.                                                                                                                                                                                                                         |
| --lookback             | Threshold isn't on the percent calculated from the difference ('qcache\_hitrate\_now').                                                                                                                                                     |

</TabItem>
<TabItem value="Queries" label="Queries">

| Option            | Description                                                                                                               |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --warning-*       | Warning threshold. Can be: 'total', 'update', 'insert', 'delete', 'truncate', 'select', 'begin', 'commit'.                |
| --critical-*      | Critical threshold. Can be: 'total', 'update', 'insert', 'delete', 'truncate', 'select', 'begin', 'commit'.               |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning              | Warning number for slow queries since last check.                                                                                                                                                                                           |
| --critical             | Critical number for slow queries since last check.                                                                                                                                                                                          |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Option                   | Description                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --sql-statement          | SQL statement that returns a number.                                                                                      |
| --format                 | Output format (default: 'SQL statement result : %i.').                                                                    |
| --perfdata-unit          | Perfdata unit in perfdata output (default: '')                                                                            |
| --perfdata-name          | Perfdata name in perfdata output (default: 'value')                                                                       |
| --perfdata-min           | Minimum value to add in perfdata output (default: '')                                                                     |
| --perfdata-max           | Maximum value to add in perfdata output (default: '')                                                                     |
| --warning-* --critical-* | Thresholds. Can be: 'value', 'execution-time'.                                                                            |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Option             | Description                                                                                                                                                                                           |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters  | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                             |
| --sql-statement    | SQL statement that returns a string.                                                                                                                                                                  |
| --key-column       | Key column (must be one of the selected field). NOT mandatory if you select only one field                                                                                                            |
| --value-column     | Value column (must be one of the selected field). MANDATORY                                                                                                                                           |
| --printf-format    | Specify a custom output message relying on printf formatting. If this option is set --printf-value is mandatory.                                                                                      |
| --printf-value     | Specify variable used to replace in printf. If this option is set --printf-format is mandatory. Can be: %\{key\_field\} (default value) or %\{value\_field\}                                          |
| --warning-string   | Define the conditions to match for the status to be WARNING (can be %\{key\_field\}, %\{value\_field\}). Example: --warning-string '%\{key\_field\} eq 'Central' && %\{value\_field\} =~ /127.0.0.1/' |
| --critical-string  | Define the conditions to match for the status to be CRITICAL (can be %\{key\_field\} or %\{value\_field\})                                                                                            |
| --dual-table       | Set this option to ensure compatibility with dual table and Oracle.                                                                                                                                   |
| --empty-sql-string | Set this option to change the output message when the sql statement result is empty. (default: 'No row returned or --key-column/--value-column do not correctly match selected field')                |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option     | Description                |
|:-----------|:---------------------------|
| --warning  | Warning threshold.         |
| --critical | Critical threshold.        |
| --seconds  | Display uptime in seconds. |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin \
	--mode=uptime \
	--help
```
