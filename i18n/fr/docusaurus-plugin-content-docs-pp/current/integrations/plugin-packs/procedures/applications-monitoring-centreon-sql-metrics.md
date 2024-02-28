---
id: applications-monitoring-centreon-sql-metrics
title: Centreon SQL Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce connecteur de supervision construit des métriques sur la base d'informations récupérées dans la base de données temps réel de Centreon. Un article sur la plateforme the Watch vous offre une vue d'ensemble de ses capacités autour des [courbes virtuelles](https://thewatch.centreon.com/product-how-to-21/get-to-know-app-centreon-sql-metric-pack-and-start-building-some-virtual-curves-296).

## Contenu du pack

### Modèles

Le connecteur de supervision **Centreon SQL Metrics** apporte un modèle d'hôte :

* **App-Monitoring-Centreon-SQL-Metrics-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Centreon-SQL-Metrics-custom" label="App-Monitoring-Centreon-SQL-Metrics-custom">

| Alias                | Modèle de service                                       | Description                                                                              |
|:---------------------|:--------------------------------------------------------|:-----------------------------------------------------------------------------------------|
| Notifications-Count  | App-Monitoring-Centreon-SQL-Notifications-Count-custom  | Contrôle le nombre de nouvelles notifications                                            |
| Poller-Delay         | App-Monitoring-Centreon-SQL-Poller-Delay-custom         | Contrôle le temps de la dernière communication entre le collecteur et le serveur central |
| Problems-Count       | App-Monitoring-Centreon-SQL-Problems-Count-custom       | Contrôle le nombre de nouveaux problèmes                                                 |
| Resources-Count      | App-Monitoring-Centreon-SQL-Resources-Count-custom      | Contrôle le nombre de services                                                           |
| Storage-Partitioning | App-Monitoring-Centreon-SQL-Storage-Partitioning-custom | Contrôle l'état des partitions MySQL/MariaDB                                             |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Monitoring-Centreon-SQL-Metrics-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                                  | Description                                                          |
|:----------------|:---------------------------------------------------|:---------------------------------------------------------------------|
| DSMQueue-Count  | App-Monitoring-Centreon-SQL-DSMQueue-Count-custom  | Contrôle l'utilisation de la queue du daemon DSM                     |
| Execution-Time  | App-Monitoring-Centreon-SQL-Execution-Time-custom  | Contrôle le nombre de services dépassant le temps d'exécution défini |
| Virtual-Service | App-Monitoring-Centreon-SQL-Virtual-Service-custom | Contrôle des métriques personnalisables Centreon                     |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="DSMQueue-Count" label="DSMQueue-Count">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| centreon.dsm.queue.cache.count             | count |
| centreon.dsm.queue.lock.count              | count |
| *host*#centreon.dsm.host.queue.cache.count | count |

</TabItem>
<TabItem value="Execution-Time" label="Execution-Time">

| Métrique                        | Unité |
|:--------------------------------|:------|
| services.execution.exceed.count | count |
| *services*#list                 | N/A   |

</TabItem>
<TabItem value="Notifications-Count" label="Notifications-Count">

| Métrique                 | Unité |
|:-------------------------|:------|
| notifications.sent.count | count |
| notifications.sent.count | count |

</TabItem>
<TabItem value="Poller-Delay" label="Poller-Delay">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| *poller*#centreon.poller.delay.seconds | s     |

</TabItem>
<TabItem value="Problems-Count" label="Problems-Count">

| Métrique              | Unité |
|:----------------------|:------|
| total.outage.count    | count |
| hosts.outage.count    | count |
| services.outage.count | count |

</TabItem>
<TabItem value="Resources-Count" label="Resources-Count">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| *pollers*~centreon.hosts.count             | count |
| *pollers*~centreon.hosts.up.count          | count |
| *pollers*~centreon.hosts.down.count        | count |
| *pollers*~centreon.hosts.unreachable.count | count |
| *pollers*~centreon.hosts.pending.count     | count |
| *pollers*~centreon.services.count          | count |
| *pollers*~centreon.services.ok.count       | count |
| *pollers*~centreon.services.warning.count  | count |
| *pollers*~centreon.services.critical.count | count |
| *pollers*~centreon.services.unknown.count  | count |
| *pollers*~centreon.services.pending.count  | count |

</TabItem>
<TabItem value="Storage-Partitioning" label="Storage-Partitioning">

Pas de métriques pour ce service.

</TabItem>
<TabItem value="Virtual-Service" label="Virtual-Service">

Les métriques dépendent de la configuration du service. Voir l'article sur [The Watch](https://thewatch.centreon.com/product-how-to-21/get-to-know-app-centreon-sql-metric-pack-and-start-building-some-virtual-curves-296).
</TabItem>
</Tabs>

## Prérequis

Le collecteur exécutant le contrôle doit pouvoir se connecter au serveur de base de données Centreon via le port
3306/TCP grâce aux valeurs fournies par les options **--username** et **--password**.

L'utilisateur doit avoir le droit de réaliser un 'SELECT' sur les tables **index_data**, **metrics** et **instances** de la base **centreon_storage**.

Pour le service **Virtual-Service**, le fichier de configuration associé doit pouvoir être lu par l'utilisateur **centreon-engine**.

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
dnf install centreon-pack-applications-monitoring-centreon-sql-metrics
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-centreon-sql-metrics
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-centreon-sql-metrics
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-centreon-sql-metrics
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Centreon SQL Metrics**
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
dnf install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-monitoring-centreon-sql-metrics
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Monitoring-Centreon-SQL-Metrics-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                    | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CENTREONDATABASEUSER     | User name used to connect to the database                                                            | centreon          |             |
| CENTREONDATABASEPASSWORD | Password for the defined user name                                                                   | PASSWORD          |             |
| CENTREONDATABASE         |                                                                                                      | centreon          |             |
| CENTREONSTORAGEDATABASE  | Centreon storage database name (default: 'centreon\_storage')                                        | centreon\_storage |             |
| EXTRAOPTIONS             | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="DSMQueue-Count" label="DSMQueue-Count">

| Macro                   | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS          | Only display some counters (regexp can be used). Example: --filter-counters='^total-queue-cache$'  |                   |             |
| FILTERHOSTQUEUE         | Filter by host and pool prefix name (regexp can be used). Example: host1.queue1                    |                   |             |
| WARNINGHOSTQUEUECACHE   | Warning threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                   |                   |             |
| CRITICALHOSTQUEUECACHE  | Critical threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                  |                   |             |
| WARNINGTOTALQUEUECACHE  | Warning threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                   |                   |             |
| CRITICALTOTALQUEUECACHE | Critical threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                  |                   |             |
| WARNINGTOTALQUEUELOCK   | Warning threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                   |                   |             |
| CRITICALTOTALQUEUELOCK  | Critical threshold. : 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'                  |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Execution-Time" label="Execution-Time">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXECUTIONTIME | Set the number of seconds which defines the limit of execution time (default: '20')                | 20                |             |
| FILTERPOLLER  | Filter by poller name (regexp can be used)                                                         |                   |             |
| WARNINGCOUNT  | Thresholds on the number of services exceeding defined execution time                              |                   |             |
| CRITICALCOUNT | Thresholds on the number of services exceeding defined execution time                              |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Notifications-Count" label="Notifications-Count">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Poller-Delay" label="Poller-Delay">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERPOLLER  | Filter by poller name (can be a regexp)                                                            | .*                |             |
| WARNINGDELAY  | Warning threshold in seconds                                                                       | 180               |             |
| CRITICALDELAY | Critical threshold in seconds                                                                      | 300               |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Problems-Count" label="Problems-Count">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Resources-Count" label="Resources-Count">

| Macro                        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS               | Only display some counters (regexp can be used). Example: --filter-counters='service'              |                   |             |
| FILTERPOLLER                 | Filter by poller name (regexp can be used)                                                         |                   |             |
| WARNINGHOSTDOWNCOUNT         | Thresholds                                                                                         |                   |             |
| CRITICALHOSTDOWNCOUNT        | Thresholds                                                                                         |                   |             |
| WARNINGHOSTUNREACHABLECOUNT  | Thresholds                                                                                         |                   |             |
| CRITICALHOSTUNREACHABLECOUNT | Thresholds                                                                                         |                   |             |
| WARNINGSVCWARNINGCOUNT       | Thresholds                                                                                         |                   |             |
| WARNINGSVCCRITICALCOUNT      | Thresholds                                                                                         |                   |             |
| CRITICALSVCWARNINGCOUNT      | Thresholds                                                                                         |                   |             |
| CRITICALSVCCRITICALCOUNT     | Thresholds                                                                                         |                   |             |
| WARNINGSVCUNKNOWNCOUNT       | Thresholds                                                                                         |                   |             |
| CRITICALSVCUNKNOWNCOUNT      | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Storage-Partitioning" label="Storage-Partitioning">

| Macro        | Description                                                                                        | Valeur par défaut                       | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:----------------------------------------|:-----------:|
| TABLENAME1   | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin                   | centreon\_storage.data\_bin             | X           |
| TABLENAME2   | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin                   | centreon\_storage.logs                  | X           |
| TABLENAME3   | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin                   | centreon\_storage.log\_archive\_host    | X           |
| TABLENAME4   | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin                   | centreon\_storage.log\_archive\_service | X           |
| WARNING      | Warning threshold (number of retention forward days)                                               | 10:                                     |             |
| CRITICAL     | Critical threshold (number of retention forward days)                                              | 5:                                      |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                         |             |

</TabItem>
<TabItem value="Virtual-Service" label="Virtual-Service">

| Macro          | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CONFIG         |                                                                                                    |                   |             |
| WARNINGGLOBAL  | Warning threshold (can be 'unique' or 'global') (Override config\_file if set)                     |                   |             |
| CRITICALGLOBAL | Critical threshold (can be 'unique' or 'global') (Override config\_file if set)                    |                   |             |
| WARNINGMETRIC  |                                                                                                    |                   |             |
| CRITICALMETRIC |                                                                                                    |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \
	--plugin=database::mysql::plugin \
	--dyn-mode=apps::centreon::sql::mode::countservices \
	--host='10.0.0.1' \
	--username='centreon' \
	--password='PASSWORD' \
	--filter-counters='' \
	--centreon-storage-database='centreon_storage' \
	--filter-poller='' \
	--warning-services-warning='' \
	--warning-services-critical='' \
	--warning-services-unknown='' \
	--warning-hosts-down='' \
	--warning-hosts-unreachable='' \
	--critical-services-warning='' \
	--critical-services-critical='' \
	--critical-services-unknown='' \
	--critical-hosts-down='' \
	--critical-hosts-unreachable=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: total: 50 up: 6 down: 51 unreachable: 7 pending: 10 total: 9 ok: 22 warning: 52 critical: 94 unknown: 98 pending: 68 | '*pollers*~centreon.hosts.count'=50;;;0;'*pollers*~centreon.hosts.up.count'=6;;;0;'*pollers*~centreon.hosts.down.count'=51;;;0;'*pollers*~centreon.hosts.unreachable.count'=7;;;0;'*pollers*~centreon.hosts.pending.count'=10;;;0;'*pollers*~centreon.services.count'=9;;;0;'*pollers*~centreon.services.ok.count'=22;;;0;'*pollers*~centreon.services.warning.count'=52;;;0;'*pollers*~centreon.services.critical.count'=94;;;0;'*pollers*~centreon.services.unknown.count'=98;;;0;'*pollers*~centreon.services.pending.count'=68;;;0;
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
/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \
	--plugin=database::mysql::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                             | Modèle de service associé                               |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|
| backup [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/backup.pm)]                                     | Not used in this Monitoring Connector                   |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]              | Not used in this Monitoring Connector                   |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)]     | Not used in this Monitoring Connector                   |
| countnotifications [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/countnotifications.pm)]          | App-Monitoring-Centreon-SQL-Notifications-Count-custom  |
| countproblems [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/countproblems.pm)]                    | App-Monitoring-Centreon-SQL-Problems-Count-custom       |
| countservices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/countservices.pm)]                    | App-Monitoring-Centreon-SQL-Resources-Count-custom      |
| databases-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/databasessize.pm)]                      | Not used in this Monitoring Connector                   |
| dsmqueue [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/dsmqueue.pm)]                              | App-Monitoring-Centreon-SQL-DSMQueue-Count-custom       |
| executiontime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/executiontime.pm)]                    | App-Monitoring-Centreon-SQL-Execution-Time-custom       |
| innodb-bufferpool-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/innodbbufferpoolhitrate.pm)] | Not used in this Monitoring Connector                   |
| long-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/longqueries.pm)]                          | Not used in this Monitoring Connector                   |
| myisam-keycache-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/myisamkeycachehitrate.pm)]     | Not used in this Monitoring Connector                   |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/db_socket.pm)]                                                        | Not used in this Monitoring Connector                   |
| open-files [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/openfiles.pm)]                              | Not used in this Monitoring Connector                   |
| open-tables [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/opentables.pm)]                            | Not used in this Monitoring Connector                   |
| partitioning [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/partitioning.pm)]                      | App-Monitoring-Centreon-SQL-Storage-Partitioning-custom |
| password-expiration [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/passwordexpiration.pm)]            | Not used in this Monitoring Connector                   |
| pollerdelay [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/pollerdelay.pm)]                        | App-Monitoring-Centreon-SQL-Poller-Delay-custom         |
| qcache-hitrate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/qcachehitrate.pm)]                      | Not used in this Monitoring Connector                   |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/queries.pm)]                                   | Not used in this Monitoring Connector                   |
| replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/replication.pm)]                           | Not used in this Monitoring Connector                   |
| slow-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/slowqueries.pm)]                          | Not used in this Monitoring Connector                   |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                            | Not used in this Monitoring Connector                   |
| sql-string [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sqlstring.pm)]               | Not used in this Monitoring Connector                   |
| threads-connected [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/threadsconnected.pm)]                | Not used in this Monitoring Connector                   |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/mysql/mode/uptime.pm)]                                     | Not used in this Monitoring Connector                   |
| virtualservice [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/sql/mode/virtualservice.pm)]                  | App-Monitoring-Centreon-SQL-Virtual-Service-custom      |

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
| --sqlmode                                  | This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-sqlmode                             | List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --multiple                                 | Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on an "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale"Mbps",mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
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
| --datasource                               | Database server information, mandatory if the server's address and port are not defined in the corresponding options. The syntax depends on the database type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --username                                 | User name used to connect to the database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --password                                 | Password for the defined user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --connect-options                          | Add connection options for the DBI connect method. Format: name=value,name2=value2,...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --connect-query                            | Execute a query just after the connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --sql-errors-exit                          | Expected status in case of DB error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeout                                  | Timeout in seconds for connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --exec-timeout                             | Timeout in seconds for query execution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="DSMQueue-Count" label="DSMQueue-Count">

| Option                      | Description                                                                                         |
|:----------------------------|:----------------------------------------------------------------------------------------------------|
| --centreon-storage-database | Centreon storage database name (default: 'centreon\_storage').                                      |
| --centreon-database         | Centreon storage database name (default: 'centreon').                                               |
| --filter-counters           | Only display some counters (regexp can be used). Example: --filter-counters='^total-queue-cache$'   |
| --warning-*                 | Warning threshold. Can be: Can be: 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'.     |
| --critical-*                | Critical threshold. Can be: Can be: 'total-queue-cache', 'total-queue-lock', 'host-queue-cache'.    |
| --filter-host-queue         | Filter by host and pool prefix name (regexp can be used). Example: host1.queue1                     |

</TabItem>
<TabItem value="Execution-Time" label="Execution-Time">

| Option                           | Description                                                                            |
|:---------------------------------|:---------------------------------------------------------------------------------------|
| --execution-time                 | Set the number of seconds which defines the limit of execution time (default: '20').   |
| --centreon-storage-database      | Centreon storage database name (default: 'centreon\_storage').                         |
| --filter-poller                  | Filter by poller name (regexp can be used).                                            |
| --warning-count --critical-count | Thresholds on the number of services exceeding defined execution time.                 |

</TabItem>
<TabItem value="Notifications-Count" label="Notifications-Count">

| Option                      | Description                                                                                                                                                                                                                                   |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                 | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server              | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute           | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                  | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file             | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration             | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir             | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix          | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd      | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format          | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key             | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher          | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --centreon-storage-database | Centreon storage database name (default: 'centreon\_storage').                                                                                                                                                                                |
| --warning                   | Warning threshold.                                                                                                                                                                                                                            |
| --critical                  | Critical threshold.                                                                                                                                                                                                                           |

</TabItem>
<TabItem value="Poller-Delay" label="Poller-Delay">

| Option           | Description                                |
|:-----------------|:-------------------------------------------|
| --filter-name    | Filter by poller name (can be a regexp).   |
| --warning-delay  | Warning threshold in seconds.              |
| --critical-delay | Critical threshold in seconds.             |

</TabItem>
<TabItem value="Problems-Count" label="Problems-Count">

| Option                      | Description                                                                                                                                                                                                                                   |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                 | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server              | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute           | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                  | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file             | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration             | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir             | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix          | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd      | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format          | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key             | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher          | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --centreon-storage-database | Centreon storage database name (default: 'centreon\_storage').                                                                                                                                                                                |
| --warning                   | Warning threshold.                                                                                                                                                                                                                            |
| --critical                  | Critical threshold.                                                                                                                                                                                                                           |

</TabItem>
<TabItem value="Resources-Count" label="Resources-Count">

| Option                      | Description                                                                                                                                                                                               |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters           | Only display some counters (regexp can be used). Example: --filter-counters='service'                                                                                                                     |
| --centreon-storage-database | Centreon storage database name (default: 'centreon\_storage').                                                                                                                                            |
| --filter-poller             | Filter by poller name (regexp can be used).                                                                                                                                                               |
| --warning-* --critical-*    | Thresholds. Can be: 'service', 'services-ok', 'services-warning', 'services-critical', 'services-unknown', 'services-pending', 'host', 'hosts-up', 'hosts-down', 'hosts-unreachable', 'hosts-pending'.    |

</TabItem>
<TabItem value="Storage-Partitioning" label="Storage-Partitioning">

| Option      | Description                                                                             |
|:------------|:----------------------------------------------------------------------------------------|
| --tablename | This option is mandatory (can be multiple). Example: centreon\_storage.data\_bin        |
| --warning   | Warning threshold (number of retention forward days)                                    |
| --critical  | Critical threshold (number of retention forward days)                                   |
| --timezone  | Timezone use for partitioning (if not set, we use current server execution timezone)    |

</TabItem>
<TabItem value="Virtual-Service" label="Virtual-Service">

| Option            | Description                                                                                                            |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------|
| --database        | Specify the database (default: 'centreon\_storage')                                                                    |
| --config-file     | Specify the full path to a json config file                                                                            |
| --json-data       | Specify the full path to a json config file                                                                            |
| --filter-counters | Filter some counter (can be 'unique' or 'global') Useless, if you use selection/filter but not global/virtual curves   |
| --warning-*       | Warning threshold (can be 'unique' or 'global') (Override config\_file if set)                                         |
| --critical-*      | Critical threshold (can be 'unique' or 'global') (Override config\_file if set)                                        |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \
	--plugin=database::mysql::plugin \
	--dyn-mode=apps::centreon::sql::mode::countservices \
	--help
```
