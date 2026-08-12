---
id: applications-databases-postgresql
title: PostgreSQL
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **PostgreSQL** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **PostgreSQL** apporte un modèle d'hôte :

* **App-DB-Postgres-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-Postgres-custom" label="App-DB-Postgres-custom">

| Alias             | Modèle de service                        | Description                                                                             |
|:------------------|:-----------------------------------------|:----------------------------------------------------------------------------------------|
| Cache-Hitratio    | App-DB-Postgres-Cache-Hitratio-custom    | Contrôle permettant de vérifier le "buffer cache hitratio" du serveur Postgres          |
| Connection        | App-DB-Postgres-Connection-custom        | Contrôle permettant de vérifier la connexions au serveur Postgres                       |
| Connection-Number | App-DB-Postgres-Connection-Number-custom | Contrôle permettant de vérifier le nombre de connexions au serveur Postgres             |
| Locks             | App-DB-Postgres-Locks-custom             | Contrôle permettant de vérifier les types de "locks" d'un serveur Postgres              |
| Query-Time        | App-DB-Postgres-Query-Time-custom        | Contrôle permettant de vérifier le temps d'exécution des requêtes d'un serveur Postgres |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-Postgres-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                      | Description                                                                                   | Découverte |
|:----------------|:---------------------------------------|:----------------------------------------------------------------------------------------------|:----------:|
| Bloat           | App-DB-Postgres-Bloat-custom           | Contrôle l'espace libre des tables et btrees                                                  |            |
| Database-Size   | App-DB-Postgres-Database-Size-custom   | Contrôle la taille des bases de données                                                       | X          |
| Sql-Statement   | App-DB-Postgres-Sql-Statement-custom   | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une donnée numérique   |            |
| Statistics      | App-DB-Postgres-Statistics-custom      | Contrôle permettant de vérifier les types de requêtes                                         |            |
| Tablespace-Size | App-DB-Postgres-Tablespace-Size-custom | Contrôle permettant de vérifier la différence de temps entre le poller et le serveur Postgres |            |
| Time-Sync       | App-DB-Postgres-Time-Sync-custom       | Contrôle permettant de vérifier la différence de temps entre le poller et le serveur Postgres |            |
| Vacuum          | App-DB-Postgres-Vacuum-custom          | Contrôle l'exécution du Vacuum sur une BD depuis un nombre de jours donné                     |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                | Description                                                  |
|:-------------------------------|:-------------------------------------------------------------|
| App-DB-Postgres-Databases-Size | Découvrir les bases de données pour en superviser la taille. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Bloat" label="Bloat">

| Nom                                                 | Unité |
|:----------------------------------------------------|:------|
| *databases*~*tables*#table.space.usage.bytes        | B     |
| *databases*~*tables*#table.space.free.bytes         | B     |
| *databases*~*tables*#table.dead_tuple.bytes         | B     |
| *databases*~*indexes*#index.space.usage.bytes       | B     |
| *databases*~*indexes*#index.leaf_density.percentage | %     |

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Nom                                             | Unité |
|:------------------------------------------------|:------|
| *hitratio*#database.hitratio.delta.percentage   | %     |
| *hitratio*#database.hitratio.average.percentage | %     |

</TabItem>
<TabItem value="Connection" label="Connection">

| Métrique                     | Unité |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |
</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| instance.connected.count                 | count |
| instance.connected.percentage            | %     |
| *backends*#database.connected.count      | count |
| *backends*#database.connected.percentage | %     |
| *roles*#role.connected.count             | count |
| *roles*#role.connected.percentage        | %     |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| *databases*#database.space.usage.bytes | B     |

</TabItem>
<TabItem value="Locks" label="Locks">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| *locks*#database.locks.total.count   | count |
| *locks*#database.locks.waiting.count | count |
</TabItem>
<TabItem value="Query-Time" label="Query-Time">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| *longqueries*#database.longqueries.count | count |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Nom                               | Unité |
|:----------------------------------|:------|
| value                             | N/A   |
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Nom                               | Unité |
|:----------------------------------|:------|
| queries.commit.count              | count |
| queries.rollback.count            | count |
| queries.insert.count              | count |
| queries.update.count              | count |
| queries.delete.count              | count |
| *database*#queries.commit.count   | count |
| *database*#queries.rollback.count | count |
| *database*#queries.insert.count   | count |
| *database*#queries.update.count   | count |
| *database*#queries.delete.count   | count |

</TabItem>
<TabItem value="Tablespace-Size" label="Tablespace-Size">

| Nom                                        | Unité |
|:-------------------------------------------|:------|
| *tablespaces*#tablespace.space.usage.bytes | B     |

</TabItem>
<TabItem value="Time-Sync" label="Time-Sync">

| Nom                 | Unité |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Vacuum" label="Vacuum">

| Nom                           | Unité |
|:------------------------------|:------|
| vacuum.last.execution.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Pour superviser votre serveur PostgreSQL, créez un utilisateur dédié en lecture seule :

```
CREATE USER centreonro WITH PASSWORD 'test';
GRANT CONNECT ON DATABASE postgres TO centreonro;
GRANT USAGE ON SCHEMA public TO centreonro;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO centreonro;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO centreonro;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO centreonro;
```

Pour utiliser le service **Tablespace-Size**, un utilisateur avec les droits de administrateurs est nécessaire.

Pour utiliser le service **Bloat**, veuillez installer l'extension **pgstattuple** (https://docs.postgresql.fr/13/pgstattuple.html) et ajoutez les privilèges :

```
GRANT EXECUTE ON FUNCTION pgstattuple(regclass) TO centreonro;
GRANT EXECUTE ON FUNCTION pgstatindex(regclass) TO centreonro;
```

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
dnf install centreon-pack-applications-databases-postgresql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-postgresql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-postgresql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-postgresql
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **PostgreSQL**
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
dnf install centreon-plugin-Applications-Databases-Postgresql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Postgresql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-postgresql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Postgresql
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-DB-Postgres-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| POSTGRESUSERNAME     | User name used to connect to the database                                                                                                          |                   |      X      |
| POSTGRESPASSWORD     | Password for the defined user name                                                                                                                 |                   |      X      |
| POSTGRESPORT         | Database server port                                                                                                                               | 5432              |             |
| POSTGRESDATABASE     | Database name                                                                                                                                      | postgres          |             |
| POSTGRESEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Bloat" label="Bloat">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTABLE              | Filter tables by name (can be a regexp)                                                                                                          |                   |             |
| FILTERINDEX              | Filter indexes by name (can be a regexp)                                                                                                         |                   |             |
| FILTERSIZE               | Filter tables and indexes by size (in bytes) keeping only sizes greater than the given value                                                     |                   |             |
| WARNINGINDEXLEAFDENSITY  | Threshold                                                                                                                                        |                   |             |
| CRITICALINDEXLEAFDENSITY | Threshold                                                                                                                                        |                   |             |
| WARNINGINDEXUSAGE        | Threshold                                                                                                                                        |                   |             |
| CRITICALINDEXUSAGE       | Threshold                                                                                                                                        |                   |             |
| WARNINGTABLEDEADTUPLE    | Threshold                                                                                                                                        |                   |             |
| CRITICALTABLEDEADTUPLE   | Threshold                                                                                                                                        |                   |             |
| WARNINGTABLEFREE         | Threshold                                                                                                                                        |                   |             |
| CRITICALTABLEFREE        | Threshold                                                                                                                                        |                   |             |
| WARNINGTABLEUSAGE        | Threshold                                                                                                                                        |                   |             |
| CRITICALTABLEUSAGE       | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Macro            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXCLUDE_DATABASE | Exclude databases using a regular expression                                                                                                     |                   |             |
| INCLUDE_DATABASE | Filter databases using a regular expression                                                                                                      |                   |             |
| WARNING          | Warning threshold                                                                                                                                |                   |             |
| CRITICAL         | Critical threshold                                                                                                                               |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Connection" label="Connection">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in milliseconds                                                                                                                |                   |             |
| CRITICAL     | Critical threshold in milliseconds                                                                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Macro                | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CHECK                | What to check Can be: 'database', 'role', 'all'                                                                                                  | database          |             |
| EXCLUDE_DATABASE     | Exclude databases using a regular expression                                                                                                     |                   |             |
| INCLUDE_DATABASE     | Filter databases using a regular expression                                                                                                      |                   |             |
| INCLUDE_ROLE         | Filter roles using a regular expression                                                                                                          |                   |             |
| EXCLUDE_ROLE         | Exclude roles using a regular expression                                                                                                         |                   |             |
| WARNING              | Threshold                                                                                                                                        | 90                |             |
| CRITICAL             | Threshold                                                                                                                                        | 95                |             |
| WARNINGDATABASE      | Threshold                                                                                                                                        |                   |             |
| CRITICALDATABASE     | Threshold                                                                                                                                        |                   |             |
| WARNINGDATABASEPCT   | Threshold in percentage                                                                                                                          |                   |             |
| CRITICALDATABASEPCT  | Threshold in percentage                                                                                                                          |                   |             |
| WARNINGINSTANCEPRCT  | Threshold                                                                                                                                        |                   |             |
| CRITICALINSTANCEPRCT | Threshold                                                                                                                                        |                   |             |
| WARNINGROLE          | Threshold                                                                                                                                        |                   |             |
| CRITICALROLE         | Threshold                                                                                                                                        |                   |             |
| WARNINGROLEPRCT      | Threshold in percentage                                                                                                                          |                   |             |
| CRITICALROLEPRCT     | Threshold in percentage                                                                                                                          |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Macro          | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERDATABASE | Filter the databases to monitor with a regular expression                                                                                        | .*                |             |
| WARNINGSIZE    | Warning threshold in bytes, maximum size allowed                                                                                                 |                   |             |
| CRITICALSIZE   | Critical threshold in bytes, maximum size allowed                                                                                                |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Locks" label="Locks">

| Macro            | Description                                                                                                                                      | Valeur par défaut                | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| INCLUDE_LOCKTYPE | Filter lock type by `pg\_locks.locktype` column.                                                                                                 | relation                         |             |
| EXCLUDE_DATABASE | Exclude databases using a regular expression                                                                                                     |                                  |             |
| INCLUDE_DATABASE | Filter databases using a regular expression                                                                                                      |                                  |             |
| EXCLUDE_LOCKTYPE | Filter lock type by `pg\_locks.locktype` column                                                                                                  |                                  |             |
| WARNING          | Warning threshold. (example: "total=250,waiting=5,exclusive=20") 'total', 'waiting', or the name of a lock type used by PostgreSQL               | total=200                        |             |
| CRITICAL         | Critical threshold. (example: "total=250,waiting=5,exclusive=20") 'total', 'waiting', or the name of a lock type used by PostgreSQL              | total=250,waiting=5,exclusive=20 |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                        |             |

</TabItem>
<TabItem value="Query-Time" label="Query-Time">

| Macro            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXCLUDE_DATABASE | Exclude databases using a regular expression                                                                                                     |                   |             |
| INCLUDE_DATABASE | Filter databases using a regular expression                                                                                                      |                   |             |
| EXCLUDE_USER     | Exclude users a regular expression                                                                                                               |                   |             |
| INCLUDE_USER     | Filter users a regular expression                                                                                                                |                   |             |
| CRITICAL         | Critical threshold in seconds                                                                                                                    | 60                |             |
| WARNING          | Warning threshold in seconds                                                                                                                     | 30                |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLSTATEMENT | SQL statement that returns a number                                                                                                              |                   | X           |
| WARNING      |                                                                                                                                                  |                   |             |
| CRITICAL     |                                                                                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Macro               | Description                                                                                                                                      | Valeur par défaut                      | Obligatoire |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| FILTER              | Filter database (can be a regexp)                                                                                                                | ^(?!(postgres\|template1\|template0)$) |             |
| WARNINGTOTALCOMMIT  | Threshold                                                                                                                                        |                                        |             |
| CRITICALTOTALCOMMIT | Threshold                                                                                                                                        |                                        |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                              |             |

</TabItem>
<TabItem value="Tablespace-Size" label="Tablespace-Size">

| Macro         | Description                                                            | Valeur par défaut | Obligatoire |
|:--------------|:-----------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSQLNAME | Filter tablespace name directly in sql query (LIKE sql syntax used)    |                   |             |
| FILTERNAME    | Filter tablespace name after getting all tablespaces (can be a regexp) |                   |             |
| TABLESPACE    | Filter tablespace name after getting all tablespaces (can be a regexp) |                   |             |
| WARNING       | Threshold                                                              |                   |             |
| CRITICAL      | Threshold                                                              |                   |             |

</TabItem>
<TabItem value="Time-Sync" label="Time-Sync">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      |                                                                                                                                                  | -1.0:1.0          |             |
| CRITICAL     |                                                                                                                                                  | -3.0:3.0          |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Vacuum" label="Vacuum">

| Macro            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| POSTGRESDATABASE | Database Name.                                                                                                                                   | postgres          |             |
| WARNING          |                                                                                                                                                  |                   |             |
| CRITICAL         |                                                                                                                                                  |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_postgresql.pl \
	--plugin=database::postgres::plugin \
	--mode=vacuum \
	--host=10.0.0.1 \
	--username='username' \
	--password='password' \
	--port='5432' \
	--database='postgres'  \
	--warning='' \
	--critical='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Most recent vacuum dates back from 75721 seconds | 'vacuum.last.execution.seconds'=75721s;;;0; 
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
/usr/lib/centreon/plugins/centreon_postgresql.pl \
	--plugin=database::postgres::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                | Modèle de service associé                     |
|:------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
| backends [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/backends.pm)]                 | App-DB-Postgres-Connection-Number-custom      |
| bloat [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/bloat.pm)]                       | App-DB-Postgres-Bloat-custom                  |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)] | Non utilisé dans ce connecteur de supervision |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/connectiontime.pm)]    | App-DB-Postgres-Connection-custom             |
| database-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/databasesize.pm)]        | App-DB-Postgres-Database-Size-custom          |
| hitratio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/hitratio.pm)]                 | App-DB-Postgres-Cache-Hitratio-custom         |
| list-databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/listdatabases.pm)]      | Utilisé pour la découverte de services        |
| locks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/locks.pm)]                       | App-DB-Postgres-Locks-custom                  |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/db_name.pm)]                                             | Non utilisé dans ce connecteur de supervision |
| query-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/querytime.pm)]              | App-DB-Postgres-Query-Time-custom             |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]               | App-DB-Postgres-Sql-Statement-custom          |
| sql-string [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sqlstring.pm)]  | Non utilisé dans ce connecteur de supervision |
| statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/statistics.pm)]             | App-DB-Postgres-Statistics-custom             |
| tablespace [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/tablespace.pm)]             | App-DB-Postgres-Tablespace-Size-custom        |
| timesync [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/timesync.pm)]                 | App-DB-Postgres-Time-Sync-custom              |
| vacuum [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/postgres/mode/vacuum.pm)]                     | App-DB-Postgres-Vacuum-custom                 |

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
| --sqlmode                                  | This plugin offers several ways to query the database (default: DBI). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --list-sqlmode                             | List all available SQL modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --multiple                                 | Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --show-password                            | By default, sensitive information in command lines is hidden in debug output and replaced with `***` (however, debug logs may still display sensitive information). Using the C option will display the passwords in plain text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
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
| --database                                 | Database Name. (default: postgres)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Bloat" label="Bloat">

| Option                   | Description                                                                                               |
|:-------------------------|:----------------------------------------------------------------------------------------------------------|
| --filter-table           | Filter tables by name (can be a regexp).                                                                  |
| --filter-index           | Filter indexes by name (can be a regexp).                                                                 |
| --filter-size            | Filter tables and indexes by size (in bytes) keeping only sizes greater than the given value.             |
| --warning-* --critical-* | Thresholds. Can be: 'table-usage', 'table-free', 'table-dead-tuple', 'index-usage', 'index-leaf-density'. |

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Option             | Description                                                                           |
|:-------------------|:--------------------------------------------------------------------------------------|
| --warning          | Warning threshold.                                                                    |
| --critical         | Critical threshold.                                                                   |
| --lookback         | Threshold isn't on the percent calculated from the difference ('xxx\_hitratio\_now'). |
| --include-database | Filter databases using a regular expression.                                          |
| --exclude-database | Exclude databases using a regular expression.                                         |

</TabItem>
<TabItem value="Connection" label="Connection">

| Option     | Description                         |
|:-----------|:------------------------------------|
| --warning  | Warning threshold in milliseconds.  |
| --critical | Critical threshold in milliseconds. |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Option                   | Description                                                            |
|:-------------------------|:-----------------------------------------------------------------------|
| --check                  | What to check (default: 'database') Can be: 'database', 'role', 'all'. |
| --include-database       | Filter databases using a regular expression.                           |
| --exclude-database       | Exclude databases using a regular expression.                          |
| --include-role           | Filter roles using a regular expression.                               |
| --exclude-role           | Exclude roles using a regular expression.                              |
| --noidle                 | Idle connections are not counted.                                      |
| --warning-database       | Threshold.                                                             |
| --critical-database      | Threshold.                                                             |
| --warning-database-pct   | Threshold in percentage.                                               |
| --critical-database-pct  | Threshold in percentage.                                               |
| --warning-instance       | Threshold.                                                             |
| --critical-instance      | Threshold.                                                             |
| --warning-instance-prct  | Threshold.                                                             |
| --critical-instance-prct | Threshold.                                                             |
| --warning-role           | Threshold.                                                             |
| --critical-role          | Threshold.                                                             |
| --warning-role-prct      | Threshold in percentage.                                               |
| --critical-role-prct     | Threshold in percentage.                                               |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Option            | Description                                                |
|:------------------|:-----------------------------------------------------------|
| --filter-database | Filter the databases to monitor with a regular expression. |
| --warning-size    | Warning threshold in bytes, maximum size allowed.          |
| --critical-size   | Critical threshold in bytes, maximum size allowed.         |

</TabItem>
<TabItem value="Locks" label="Locks">

| Option             | Description                                                                                                                          |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| --warning          | Warning threshold. (example: "total=250,waiting=5,exclusive=20") 'total', 'waiting', or the name of a lock type used by PostgreSQL.  |
| --critical         | Critical threshold. (example: "total=250,waiting=5,exclusive=20") 'total', 'waiting', or the name of a lock type used by PostgreSQL. |
| --include-database | Filter databases using a regular expression.                                                                                         |
| --exclude-database | Exclude databases using a regular expression.                                                                                        |
| --include-locktype | Filter lock type by `pg\_locks.locktype` column. (default: 'relation').                                                              |
| --exclude-locktype | Filter lock type by `pg\_locks.locktype` column.                                                                                     |

</TabItem>
<TabItem value="Query-Time" label="Query-Time">

| Option             | Description                                   |
|:-------------------|:----------------------------------------------|
| --warning          | Warning threshold in seconds.                 |
| --critical         | Critical threshold in seconds.                |
| --include-database | Filter databases using a regular expression.  |
| --exclude-database | Exclude databases using a regular expression. |
| --include-user     | Filter users a regular expression.            |
| --exclude-user     | Exclude users a regular expression.           |
| --idle             | Idle queries are counted.                     |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Option                   | Description                                            |
|:-------------------------|:-------------------------------------------------------|
| --sql-statement          | SQL statement that returns a number.                   |
| --format                 | Output format (default: 'SQL statement result : %i.'). |
| --perfdata-unit          | Perfdata unit in perfdata output (default: '')         |
| --perfdata-name          | Perfdata name in perfdata output (default: 'value')    |
| --perfdata-min           | Minimum value to add in perfdata output (default: '')  |
| --perfdata-max           | Maximum value to add in perfdata output (default: '')  |
| --warning-* --critical-* | Thresholds. Can be: 'value', 'execution-time'.         |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Option            | Description                                                                                                                                                       |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*       | Warning threshold. Can be: 'commit', 'rollback', 'insert', 'delete', 'update', 'total-commit', 'total-rollback', 'total-insert', 'total-delete', 'total-update'.  |
| --critical-*      | Critical threshold. Can be: 'commit', 'rollback', 'insert', 'delete', 'update', 'total-commit', 'total-rollback', 'total-insert', 'total-delete', 'total-update'. |
| --filter-database | Filter database (can be a regexp).                                                                                                                                |

</TabItem>
<TabItem value="Tablespace-Size" label="Tablespace-Size">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --filter-sql-name        | Filter tablespace name directly in sql query (LIKE sql syntax used).    |
| --filter-name            | Filter tablespace name after getting all tablespaces (can be a regexp). |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B).                                  |

</TabItem>
<TabItem value="Time-Sync" label="Time-Sync">

| Option            | Description                                                          |
|:------------------|:---------------------------------------------------------------------|
| --warning-offset  | Warning threshold in seconds. (use a range. it can be -0.3 or +0.3)  |
| --critical-offset | Critical threshold in seconds. (use a range. it can be -0.3 or +0.3) |

</TabItem>
<TabItem value="Vacuum" label="Vacuum">

| Option            | Description                                                             |
|:------------------|:------------------------------------------------------------------------|
| --warning-vacuum  | Warning threshold in seconds, maximum time interval since last vacuum.  |
| --critical-vacuum | Critical threshold in seconds, maximum time interval since last vacuum. |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_postgresql.pl \
	--plugin=database::postgres::plugin \
	--mode=vacuum \
	--help
```
