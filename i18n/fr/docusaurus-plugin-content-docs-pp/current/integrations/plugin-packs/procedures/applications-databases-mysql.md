---
id: applications-databases-mysql
title: MySQL/MariaDB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **MySQL/MariaDB** apporte un modèle d'hôte :

* **App-DB-MySQL**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-MySQL" label="App-DB-MySQL">

| Alias              | Modèle de service               | Description                                                                                                                     |
|:-------------------|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| Connection-Time    | App-DB-MySQL-Connection-Time    | Contrôle permettant de vérifier la durée de connexion au serveur. Ce temps est donné en secondes                                |
| Connections-Number | App-DB-MySQL-Connections-Number | Contrôle permettant de vérifier le nombre de connexions ouvertes                                                                |
| Database-Size      | App-DB-MySQL-Database-Size      | Contrôle permettant de vérifier la taille des bases de données. Aucune alerte par défaut                                      |
| Myisam-Keycache    | App-DB-MySQL-Myisam-Keycache    | Contrôle permettant de vérifier le taux de succès des tables MyISAM                                                             |
| Open-Files         | App-DB-MySQL-Open-Files         | Contrôle permettant de vérifier le nombre de fichiers ouverts                                                                   |
| Queries            | App-DB-MySQL-Queries            | Contrôle permettant de vérifier le nombre moyen de requêtes exécutées par seconde                                               |
| Slowqueries        | App-DB-MySQL-Slowqueries        | Contrôle permettant de vérifier le nombre de requêtes lentes depuis la dernière vérification. Renvoie le taux moyen par seconde |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-MySQL** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                | Modèle de service                         | Description                                                                                                                        |
|:---------------------|:------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| Backup               | App-DB-MySQL-Backup                       | Contrôle permettant de vérifier les sauvegardes                                                                                    |
| Collection           | App-DB-MySQL-Collection                   | Contrôle permettant d'indiquer le temps de fonctionnement du serveur depuis son dernier démarrage. Ce temps est exprimé en minutes |
| Innodb-Bufferpool    | App-DB-MySQL-Innodb-Bufferpool            | Contrôle permettant de vérifier le taux de succès du tampon InnoDB                                                                 |
| Long-Queries         | App-DB-MySQL-Long-Queries                 | Contrôle permettant de vérifier les requêtes courantes longues                                                                     |
| Replication          | App-DB-MySQL-MariaDB-Replication          | Collecte et calcule des données SQL                                                                                                |
| Password-Expiration  | App-DB-MySQL-Password-Expiration          | Contrôle permettant de vérifier l'expiration des mots de passe utilisateur                                                        |
| Qcache-Hitrate       | App-DB-MySQL-Qcache-Hitrate               | Contrôle permettant de vérifier le taux d'utilisation du 'query cache'                                                             |
| Sql-Statement        | App-DB-MySQL-Sql-Statement-Generic        | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une donnée numérique                                        |
| Sql-Statement-String | App-DB-MySQL-Sql-Statement-String-Generic | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une chaîne de caractères                                    |
| Uptime               | App-DB-MySQL-Uptime                       | Contrôle permettant d'indiquer le temps de fonctionnement du serveur depuis son dernier démarrage. Ce temps est exprimé en minutes |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| backup status                                    |       |
| *backup_name*#backup.time.last.execution.seconds | s     |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Métrique                     | Unité |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| threads.connected.count                           |       |
| threads.connected.percentage                      | %     |
| *databases_name*#database.threads.connected.count |       |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Métrique                                                  | Unité |
|:----------------------------------------------------------|:------|
| databases.space.usage.bytes                               | B     |
| databases.space.free.bytes                                | B     |
| *database_name*#database.space.usage.bytes                | B     |
| *database_name*#database.space.free.bytes                 | B     |
| *database_name~table_name*#table.space.usage.bytes        | B     |
| *database_name~table_name*#table.space.free.bytes         | B     |
| *database_name~table_name*#table.fragmentation.percentage | %     |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| database.bufferpool.hitrate.average.percentage | %     |
| database.bufferpool.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Métrique                   | Unité |
|:---------------------------|:------|
| database.longqueries.count |       |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| instance.slaves.running.count                  |       |
| connection status                              |       |
| thread sql status                              |       |
| thread io status                               |       |
| *hostname~port*#instance.slave.latency.seconds | s     |
| replication status                             |       |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| database.keycache.hitrate.average.percentage | %     |
| database.keycache.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Métrique                  | Unité |
|:--------------------------|:------|
| database.open.files.count |       |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Métrique                        | Unité |
|:--------------------------------|:------|
| user password expiration status | N/A   |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| database.qcache.hitrate.average.percentage | %     |
| database.qcache.hitrate.delta.percentage   | %     |

</TabItem>
<TabItem value="Queries" label="Queries">

| Métrique                   | Unité |
|:---------------------------|:------|
| queries.total.persecond    |       |
| queries.update.persecond   |       |
| queries.update.count       |       |
| queries.delete.persecond   |       |
| queries.delete.count       |       |
| queries.insert.persecond   |       |
| queries.insert.count       |       |
| queries.truncate.persecond |       |
| queries.truncate.count     |       |
| queries.select.persecond   |       |
| queries.select.count       |       |
| queries.commit.persecond   |       |
| queries.commit.count       |       |
| queries.begin.persecond    |       |
| queries.begin.count        |       |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Métrique                         | Unité |
|:---------------------------------|:------|
| database.slowqueries.delta.count |       |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Métrique                          | Unité |
|:----------------------------------|:------|
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique                | Unité |
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

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
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
<TabItem value="Debian 11" label="Debian 11">

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
dnf install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Mysql
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

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

| Macro             | Description                                                                                           | Valeur par défaut | Obligatoire |
|:------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| MYSQLPASSWORD     | Password for the defined user name                                                                    | PASSWORD          |             |
| MYSQLPORT         |                                                                                                       |                   |             |
| MYSQLUSERNAME     | User name used to connect to the database                                                             | USERNAME          |             |
| MYSQLEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Macro                     | Description                                                                                                                                                                                                                            | Valeur par défaut                                                                     | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------|:------------|
| FILTERTYPE                | Filter backups by type (regexp can be used)                                                                                                                                                                                            |                                                                                       |             |
| CRITICALSTATUS            | Set critical threshold for status (Default: '%{has\_backup} eq "yes" and %{exit\_state} ne "SUCCESS" and %{last\_error} ne "NO\_ERROR"'). You can use the following variables: %{has\_backup}, %{last\_error}, %{exit\_state}, %{type} | %{has_backup} eq "yes" and %{exit_state} ne "SUCCESS" and %{last_error} ne "NO_ERROR" |             |
| WARNINGSTATUS             | Set warning threshold for status. You can use the following variables: %{has\_backup}, %{last\_error}, %{exit\_state}, %{type}                                                                                                         |                                                                                       |             |
| WARNINGTIMELASTEXECUTION  | Thresholds                                                                                                                                                                                                                             |                                                                                       |             |
| CRITICALTIMELASTEXECUTION | Thresholds                                                                                                                                                                                                                             |                                                                                       |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                                                                                    | --verbose                                                                             |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Warning threshold in milliseconds                                                                   |                   |             |
| CRITICAL     | Threshold critical in milliseconds                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING           | Thresholds                                                                                          |                   |             |
| CRITICAL          | Thresholds                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Macro              | Description                                                                                         | Valeur par défaut                                 | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------|:--------------------------------------------------|:------------|
| FILTERDATABASE     | Filter database to checks (Can be a regexp)                                                         | ^(?!(information_schema|performance_schema|test)) |             |
| FILTERPERFDATA     |                                                                                                     | database                                          |             |
| WARNINGDBFREE      | Thresholds (                                                                                        |                                                   |             |
| CRITICALDBFREE     | Thresholds (                                                                                        |                                                   |             |
| WARNINGDBUSAGE     | Thresholds (                                                                                        |                                                   |             |
| CRITICALDBUSAGE    | Thresholds (                                                                                        |                                                   |             |
| WARNINGTABLEFRAG   | Thresholds (                                                                                        |                                                   |             |
| CRITICALTABLEFRAG  | Thresholds (                                                                                        |                                                   |             |
| WARNINGTABLEFREE   | Thresholds (                                                                                        |                                                   |             |
| CRITICALTABLEFREE  | Thresholds (                                                                                        |                                                   |             |
| WARNINGTABLEUSAGE  | Thresholds (                                                                                        |                                                   |             |
| CRITICALTABLEUSAGE | Thresholds (                                                                                        |                                                   |             |
| WARNINGTOTALFREE   | Thresholds (                                                                                        |                                                   |             |
| CRITICALTOTALFREE  | Thresholds (                                                                                        |                                                   |             |
| WARNINGTOTALUSAGE  | Thresholds (                                                                                        |                                                   |             |
| CRITICALTOTALUSAGE | Thresholds (                                                                                        |                                                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose                                         |             |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning                                                                                   |                   |             |
| CRITICAL     | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Macro         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| SECONDS       | The minimum execution time in seconds for a long query (Default: 60)                                | 60                |             |
| FILTERCOMMAND | Filter by command (can be a regexp. Default: '^(?!(sleep)$)')                                       | ^(?!(sleep)$)     |             |
| FILTERUSER    | Filter by user (can be a regexp)                                                                    |                   |             |
| WARNING       | Threshold warning (number of long queries)                                                          |                   |             |
| CRITICAL      | Threshold critical (number of long queries)                                                         |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Macro                     | Description                                                                                                                                                               | Valeur par défaut                                | Obligatoire |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|:------------|
| PEERPORT                  |                                                                                                                                                                           | 3306                                             |             |
| PEERUSERNAME              |                                                                                                                                                                           | USERNAME                                         |             |
| PEERPASSWORD              |                                                                                                                                                                           | PASSWORD                                         |             |
| UNKNOWNREPLICATIONSTATUS  | Set unknown threshold for status (Default: '%{replication\_status} =~ /configurationIssue/i'). You can use the following variables: %{replication\_status}, %{display}    | %{replication_status} =~ /configurationIssue/i   |             |
| PEERHOST                  |                                                                                                                                                                           |                                                  |             |
| UNKNOWNCONNECTIONSTATUS   | Set unknown threshold for status. You can use the following variables: %{status}, %{error\_message}, %{display}                                                           |                                                  |             |
| CRITICALCONNECTIONSTATUS  | Set critical threshold for status (Default: '%{status} ne "ok"'). You can use the following variables: %{status}, %{error\_message}, %{display}                           | %{status} ne "ok"                                |             |
| WARNINGCONNECTIONSTATUS   | Set warning threshold for status. You can use the following variables: %{status}, %{error\_message}, %{display}                                                           |                                                  |             |
| WARNINGREPLICATIONSTATUS  | Set warning threshold for status (Default: '%{replication\_status} =~ /inProgress/i'). You can use the following variables: %{replication\_status}, %{display}            | %{replication_status} =~ /inProgress/i           |             |
| CRITICALREPLICATIONSTATUS | Set critical threshold for status (Default: '%{replication\_status} =~ /connectIssueToMaster/i'). You can use the following variables: %{replication\_status}, %{display} | %{replication_status} =~ /connectIssueToMaster/i |             |
| WARNINGSLAVELATENCY       | Thresholds                                                                                                                                                                |                                                  |             |
| CRITICALSLAVELATENCY      | Thresholds                                                                                                                                                                |                                                  |             |
| CRITICALSLAVESRUNNING     | Thresholds                                                                                                                                                                | 1:1                                              |             |
| WARNINGSLAVESRUNNING      | Thresholds                                                                                                                                                                |                                                  |             |
| WARNINGTHREADIOSTATUS     |                                                                                                                                                                           |                                                  |             |
| CRITICALTHREADIOSTATUS    |                                                                                                                                                                           |                                                  |             |
| WARNINGTHREADSQLSTATUS    |                                                                                                                                                                           |                                                  |             |
| CRITICALTHREADSQLSTATUS   |                                                                                                                                                                           |                                                  |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                       | --verbose                                        |             |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning                                                                                   |                   |             |
| CRITICAL     | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning in percent                                                                        |                   |             |
| CRITICAL     | Threshold critical in percent                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Macro          | Description                                                                                                                                                            | Valeur par défaut                            | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|:------------|
| CRITICALSTATUS | Set critical threshold for status (Default: '%{expire} ne "never" and %{expire\_time} == 0'). You can use the following variables: %{user}, %{expire}, %{expire\_time} | %{expire} ne "never" and %{expire_time} == 0 |             |
| WARNINGSTATUS  | Set warning threshold for status. You can use the following variables: %{user}, %{expire}, %{expire\_time}                                                             |                                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                    | --verbose                                    |             |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning                                                                                   |                   |             |
| CRITICAL     | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Queries" label="Queries">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning                                                                                   |                   |             |
| CRITICAL     | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Warning number for slow queries since last check                                                    |                   |             |
| CRITICAL     | Critical number for slow queries since last check                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      |                                                                                                     |                   |             |
| CRITICAL     |                                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Macro        | Description                                                                                                                                                                                     | Valeur par défaut | Obligatoire |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| VALUE        | Value column (must be one of the selected field). MANDATORY                                                                                                                                     |                   |             |
| WARNING      | Set warning condition (if statement syntax) for status evaluation. (Can be: %{key\_field}, %{value\_field}) e.g --warning-string '%{key\_field} eq 'Central' && %{value\_field} =~ /127.0.0.1/' |                   |             |
| CRITICAL     | Set critical condition (if statement syntax) for status evaluation. (Can be: %{key\_field} or %{value\_field})                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                                             |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning                                                                                   |                   |             |
| CRITICAL     | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparait dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser un serveur en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
	--host=10.0.0.1 \
	--username='myuser' \
	--password='mypass' \
	--port='3306'  \
	--mode=connection-time \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Connection established in 0.038s. | 'connection.time.milliseconds'=38ms;;;0;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode                      | Modèle de service associé                 |
|:--------------------------|:------------------------------------------|
| backup                    | App-DB-MySQL-Backup                       |
| collection                | Not used in this Monitoring Connector     |
| connection-time           | App-DB-MySQL-Connection-Time              |
| databases-size            | App-DB-MySQL-Database-Size                |
| innodb-bufferpool-hitrate | App-DB-MySQL-Innodb-Bufferpool            |
| long-queries              | App-DB-MySQL-Long-Queries                 |
| myisam-keycache-hitrate   | App-DB-MySQL-Myisam-Keycache              |
| open-files                | App-DB-MySQL-Open-Files                   |
| password-expiration       | App-DB-MySQL-Password-Expiration          |
| qcache-hitrate            | App-DB-MySQL-Qcache-Hitrate               |
| queries                   | App-DB-MySQL-Queries                      |
| replication               | App-DB-MySQL-MariaDB-Replication          |
| slow-queries              | App-DB-MySQL-Slowqueries                  |
| sql                       | App-DB-MySQL-Sql-Statement-Generic        |
| sql-string                | App-DB-MySQL-Sql-Statement-String-Generic |
| threads-connected         | App-DB-MySQL-Connections-Number           |
| uptime                    | App-DB-MySQL-Uptime                       |

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --sqlmode                                  | This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --list-sqlmode                             | List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --multiple                                 | Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Global |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --datasource                               | Database server information, mandatory if the server's address and port are not defined in the corresponding options. The syntax depends on the database type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Dbi    |
| --username                                 | User name used to connect to the database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Dbi    |
| --password                                 | Password for the defined user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Dbi    |
| --connect-options                          | Add connection options for the DBI connect method. Format: name=value,name2=value2,...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Dbi    |
| --connect-query                            | Execute a query just after the connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Dbi    |
| --sql-errors-exit                          | Expected status in case of DB error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Dbi    |
| --timeout                                  | Timeout in seconds for connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Dbi    |
| --exec-timeout                             | Timeout in seconds for query execution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Dbi    |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Backup" label="Backup">

| Option                   | Description                                                                                                                                                                                                                              | Type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-type            | Filter backups by type (regexp can be used).                                                                                                                                                                                             | Mode |
| --unknown-status         | Set unknown threshold for status. You can use the following variables: %{has\_backup}, %{last\_error}, %{exit\_state}, %{type}                                                                                                           | Mode |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{has\_backup}, %{last\_error}, %{exit\_state}, %{type}                                                                                                           | Mode |
| --critical-status        | Set critical threshold for status (Default: '%{has\_backup} eq "yes" and %{exit\_state} ne "SUCCESS" and %{last\_error} ne "NO\_ERROR"'). You can use the following variables: %{has\_backup}, %{last\_error}, %{exit\_state}, %{type}   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'time-last-execution'.                                                                                                                                                                                               | Mode |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option     | Description                            | Type |
|:-----------|:---------------------------------------|:-----|
| --warning  | Threshold warning in milliseconds.     | Mode |
| --critical | Threshold critical in milliseconds.    | Mode |

</TabItem>
<TabItem value="Connections-Number" label="Connections-Number">

| Option                   | Description                                                                     | Type |
|:-------------------------|:--------------------------------------------------------------------------------|:-----|
| --add-databases          | Add threads by databases.                                                       | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'usage', 'usage-prct' (%), 'database-threads-connected'.    | Mode |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Option                   | Description                                                                                                            | Type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-database        | Filter database to checks (Can be a regexp).                                                                           | Mode |
| --filter-table           | Filter table name (can be a regexp).                                                                                   | Mode |
| --warning-* --critical-* | Thresholds (Can be: 'total-usage', 'total-free', 'db-usage', 'db-free', 'table-usage', 'table-free', 'table-frag').    | Mode |

</TabItem>
<TabItem value="Innodb-Bufferpool" label="Innodb-Bufferpool">

| Option                 | Description                                                                                                  | Type      |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                   | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                              | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                      | Retention |
| --redis-db             | Set Redis database index.                                                                                    | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                         | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                               | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                          | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                           | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.   | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                           | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                    | Retention |
| --warning              | Threshold warning.                                                                                           | Mode      |
| --critical             | Threshold critical.                                                                                          | Mode      |
| --lookback             | Threshold isn't on the percent calculated from the difference ('bufferpool\_hitrate\_now').                  | Mode      |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Option           | Description                                                             | Type |
|:-----------------|:------------------------------------------------------------------------|:-----|
| --warning        | Threshold warning (number of long queries).                             | Mode |
| --critical       | Threshold critical (number of long queries).                            | Mode |
| --seconds        | The minimum execution time in seconds for a long query (Default: 60).   | Mode |
| --filter-user    | Filter by user (can be a regexp).                                       | Mode |
| --filter-command | Filter by command (can be a regexp. Default: '^(?!(sleep)$)').          | Mode |

</TabItem>
<TabItem value="MariaDB-Replication" label="MariaDB-Replication">

| Option                        | Description                                                                                                                                                                 | Type |
|:------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-connection-status   | Set unknown threshold for status. You can use the following variables: %{status}, %{error\_message}, %{display}                                                             | Mode |
| --warning-connection-status   | Set warning threshold for status. You can use the following variables: %{status}, %{error\_message}, %{display}                                                             | Mode |
| --critical-connection-status  | Set critical threshold for status (Default: '%{status} ne "ok"'). You can use the following variables: %{status}, %{error\_message}, %{display}                             | Mode |
| --unknown-replication-status  | Set unknown threshold for status (Default: '%{replication\_status} =~ /configurationIssue/i'). You can use the following variables: %{replication\_status}, %{display}      | Mode |
| --warning-replication-status  | Set warning threshold for status (Default: '%{replication\_status} =~ /inProgress/i'). You can use the following variables: %{replication\_status}, %{display}              | Mode |
| --critical-replication-status | Set critical threshold for status (Default: '%{replication\_status} =~ /connectIssueToMaster/i'). You can use the following variables: %{replication\_status}, %{display}   | Mode |
| --warning-* --critical-*      | Thresholds. Can be: 'slaves-running', 'slave-latency' (s).                                                                                                                  | Mode |

</TabItem>
<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Option                 | Description                                                                                                  | Type      |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                   | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                              | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                      | Retention |
| --redis-db             | Set Redis database index.                                                                                    | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                         | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                               | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                          | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                           | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.   | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                           | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                    | Retention |
| --warning              | Threshold warning.                                                                                           | Mode      |
| --critical             | Threshold critical.                                                                                          | Mode      |
| --lookback             | Threshold isn't on the percent calculated from the difference ('keycache\_hitrate\_now').                    | Mode      |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Option     | Description                       | Type |
|:-----------|:----------------------------------|:-----|
| --warning  | Threshold warning in percent.     | Mode |
| --critical | Threshold critical in percent.    | Mode |

</TabItem>
<TabItem value="Password-Expiration" label="Password-Expiration">

| Option            | Description                                                                                                                                                               | Type |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-status  | Set warning threshold for status. You can use the following variables: %{user}, %{expire}, %{expire\_time}                                                                | Mode |
| --critical-status | Set critical threshold for status (Default: '%{expire} ne "never" and %{expire\_time} == 0'). You can use the following variables: %{user}, %{expire}, %{expire\_time}    | Mode |

</TabItem>
<TabItem value="Qcache-Hitrate" label="Qcache-Hitrate">

| Option                 | Description                                                                                                  | Type      |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                   | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                              | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                      | Retention |
| --redis-db             | Set Redis database index.                                                                                    | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                         | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                               | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                          | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                           | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.   | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                           | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                    | Retention |
| --warning              | Threshold warning.                                                                                           | Mode      |
| --critical             | Threshold critical.                                                                                          | Mode      |
| --lookback             | Threshold isn't on the percent calculated from the difference ('qcache\_hitrate\_now').                      | Mode      |

</TabItem>
<TabItem value="Queries" label="Queries">

| Option                 | Description                                                                                                    | Type      |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                     | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                        | Retention |
| --redis-db             | Set Redis database index.                                                                                      | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                           | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                 | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                            | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                             | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.     | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                             | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                  | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                      | Retention |
| --warning-*            | Threshold warning. Can be: 'total', 'update', 'insert', 'delete', 'truncate', 'select', 'begin', 'commit'.     | Mode      |
| --critical-*           | Threshold critical. Can be: 'total', 'update', 'insert', 'delete', 'truncate', 'select', 'begin', 'commit'.    | Mode      |

</TabItem>
<TabItem value="Slowqueries" label="Slowqueries">

| Option                 | Description                                                                                                  | Type      |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                   | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                              | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                      | Retention |
| --redis-db             | Set Redis database index.                                                                                    | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                         | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                               | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                          | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                           | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.   | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                           | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                    | Retention |
| --warning              | Warning number for slow queries since last check.                                                            | Mode      |
| --critical             | Critical number for slow queries since last check.                                                           | Mode      |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Option                   | Description                                              | Type |
|:-------------------------|:---------------------------------------------------------|:-----|
| --sql-statement          | SQL statement that returns a number.                     | Mode |
| --format                 | Output format (Default: 'SQL statement result : %i.').   | Mode |
| --perfdata-unit          | Perfdata unit in perfdata output (Default: '')           | Mode |
| --perfdata-name          | Perfdata name in perfdata output (Default: 'value')      | Mode |
| --perfdata-min           | Minimum value to add in perfdata output (Default: '')    | Mode |
| --perfdata-max           | Maximum value to add in perfdata output (Default: '')    | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'value', 'execution-time'.           | Mode |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Option             | Description                                                                                                                                                                                       | Type |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --sql-statement    | SQL statement that returns a string.                                                                                                                                                              | Mode |
| --key-column       | Key column (must be one of the selected field). NOT mandatory if you select only one field                                                                                                        | Mode |
| --value-column     | Value column (must be one of the selected field). MANDATORY                                                                                                                                       | Mode |
| --printf-format    | Specify a custom output message relying on printf formatting                                                                                                                                      | Mode |
| --printf-value     | Specify scalar used to replace in printf (Can be: $self-\>{result\_values}-\>{key\_field}, $self-\>{result\_values}-\>{value\_field})                                                             | Mode |
| --warning-string   | Set warning condition (if statement syntax) for status evaluation. (Can be: %{key\_field}, %{value\_field}) e.g --warning-string '%{key\_field} eq 'Central' && %{value\_field} =~ /127.0.0.1/'   | Mode |
| --critical-string  | Set critical condition (if statement syntax) for status evaluation. (Can be: %{key\_field} or %{value\_field})                                                                                    | Mode |
| --dual-table       | Set this option to ensure compatibility with dual table and Oracle.                                                                                                                               | Mode |
| --empty-sql-string | Set this option to change the output message when the sql statement result is empty. (Default: 'No row returned or --key-column/--value-column do not correctly match selected field')            | Mode |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option     | Description                   | Type |
|:-----------|:------------------------------|:-----|
| --warning  | Threshold warning.            | Mode |
| --critical | Threshold critical.           | Mode |
| --seconds  | Display uptime in seconds.    | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
	--host=10.0.0.1 \
    --help
```
