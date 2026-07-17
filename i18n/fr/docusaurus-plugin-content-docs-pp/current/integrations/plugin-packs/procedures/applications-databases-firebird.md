---
id: applications-databases-firebird
title: Firebird
description: Supervisez les bases de données Firebird via SQL : temps de connexion, mémoire, statistiques des pages et des requêtes, utilisateurs connectés.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Firebird**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Firebird** apporte un modèle d'hôte :

* **App-DB-Firebird-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-Firebird-custom" label="App-DB-Firebird-custom">

| Alias           | Modèle de service                      | Description                                                      |
|:----------------|:---------------------------------------|:-----------------------------------------------------------------|
| Connection-Time | App-DB-Firebird-Connection-Time-custom | Contrôle permettant de vérifier la durée de connexion au serveur |
| Memory          | App-DB-Firebird-Memory-custom          | Contrôle permettant de vérifier l'utilisation mémoire            |
| Pages           | App-DB-Firebird-Pages-custom           | Contrôle permettant de vérifier les statistiques du paging       |
| Queries         | App-DB-Firebird-Queries-custom         | Contrôle permettant de vérifier les statistiques des requêtes    |
| Users           | App-DB-Firebird-Users-custom           | Contrôle permettant de vérifier les utilisateurs connectés       |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-Firebird-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias        | Modèle de service                   | Description                                                             |
|:-------------|:------------------------------------|:------------------------------------------------------------------------|
| Long-Queries | App-DB-Firebird-Long-Queries-custom | Contrôle permettant de vérifier le nombre de requêtes longues courantes |
| Sql-Generic  | App-DB-Firebird-Sql-Generic-custom  | Contrôle permettant d'utiliser une requête SQL personnalisée            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Connection-Time" label="Connection-Time">

| Nom                          | Unité |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Nom               | Unité |
|:------------------|:------|
| longqueries.count | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                     | Unité |
|:------------------------|:------|
| database.usage.bytes    | B     |
| attachment.usage.bytes  | B     |
| transaction.usage.bytes | B     |
| statement.usage.bytes   | B     |
| call.usage.bytes        | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Pages" label="Pages">

| Nom                     | Unité |
|:------------------------|:------|
| pages.reads.persecond   | /s    |
| pages.writes.persecond  | /s    |
| pages.fetches.persecond | /s    |
| pages.marks.persecond   | /s    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Queries" label="Queries">

| Nom                               | Unité |
|:----------------------------------|:------|
| queries.total.persecond           | /s    |
| queries.sequentialreads.persecond | /s    |
| queries.insert.persecond          | /s    |
| queries.updates.persecond         | /s    |
| queries.deletes.persecond         | /s    |
| queries.backout.persecond         | /s    |
| queries.purges.persecond          | /s    |
| queries.expunges.persecond        | /s    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Sql-Generic" label="Sql-Generic">

| Nom                               | Unité |
|:----------------------------------|:------|
| value                             | N/A   |
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Users" label="Users">

| Nom         | Unité |
|:------------|:------|
| users.count | count |

</TabItem>
</Tabs>

## Prérequis

Le serveur Firebird doit être installé, en cours d’exécution et accessible depuis le collecteur Centreon.
Assurez-vous que la base de données est accessible avec un utilisateur disposant des droits suffisants pour exécuter les requêtes nécessaires à la supervision.

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
dnf install centreon-pack-applications-databases-firebird
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-firebird
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-firebird
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-firebird
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Firebird**
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
dnf install centreon-plugin-Applications-Databases-Firebird
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Firebird
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-firebird
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Firebird
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-DB-Firebird-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                                                                          | Valeur par défaut                            | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------|:---------------------------------------------|:-----------:|
| FIREBIRDUSERNAME     | Firebird username                                                                                                     | USERNAME                                     |             |
| FIREBIRDPASSWORD     | Firebird password                                                                                                     | PASSWORD                                     |             |
| FIREBIRDPORT         | Firebird port                                                                                                     | 3051                                         |             |
| SYFIREBIRDPORT       | Database Server Port                                                                                 |                                              |             |
| FIREBIRDDATABASE     | Path to Database. (example: /opt/firebird/examples/empbuild/employee.fdb)                            | /opt/firebird/examples/empbuild/employee.fdb |             |
| FIREBIRDEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                              |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Connection-Time" label="Connection-Time">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in milliseconds                                                                  |                   |             |
| CRITICAL     | Critical threshold in milliseconds                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSTATE  | Filter by state (can be a regexp. Default: '^(?!(0)$)')                                            | ^(?!(0)$)         |             |
| SECONDS      | Filter queries over X seconds (default: 60)                                                        | 60                |             |
| FILTERUSER   | Filter by user (can be a regexp)                                                                   |                   |             |
| WARNING      | Warning threshold (number of long queries)                                                         |                   |             |
| CRITICAL     | Critical threshold (number of long queries)                                                        |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro               | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGATTACHMENT   | Threshold                                                                                          |                   |             |
| CRITICALATTACHMENT  | Threshold                                                                                          |                   |             |
| WARNINGCALL         | Threshold                                                                                          |                   |             |
| CRITICALCALL        | Threshold                                                                                          |                   |             |
| WARNINGSTATEMENT    | Threshold                                                                                          |                   |             |
| CRITICALSTATEMENT   | Threshold                                                                                          |                   |             |
| WARNINGTRANSACTION  | Threshold                                                                                          |                   |             |
| CRITICALTRANSACTION | Threshold                                                                                          |                   |             |
| WARNINGUSED         | Threshold                                                                                          |                   |             |
| CRITICALUSED        | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Pages" label="Pages">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGFETCHES  | Threshold                                                                                          |                   |             |
| CRITICALFETCHES | Threshold                                                                                          |                   |             |
| WARNINGMARKS    | Threshold                                                                                          |                   |             |
| CRITICALMARKS   | Threshold                                                                                          |                   |             |
| WARNINGREADS    | Threshold                                                                                          |                   |             |
| CRITICALREADS   | Threshold                                                                                          |                   |             |
| WARNINGWRITES   | Threshold                                                                                          |                   |             |
| CRITICALWRITES  | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Queries" label="Queries">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBACKOUTS  | Threshold                                                                                          |                   |             |
| CRITICALBACKOUTS | Threshold                                                                                          |                   |             |
| WARNINGDELETES   | Threshold                                                                                          |                   |             |
| CRITICALDELETES  | Threshold                                                                                          |                   |             |
| WARNINGEXPUNGES  | Threshold                                                                                          |                   |             |
| CRITICALEXPUNGES | Threshold                                                                                          |                   |             |
| WARNINGINSERTS   | Threshold                                                                                          |                   |             |
| CRITICALINSERTS  | Threshold                                                                                          |                   |             |
| WARNINGPURGES    | Threshold                                                                                          |                   |             |
| CRITICALPURGES   | Threshold                                                                                          |                   |             |
| WARNINGSEQREADS  | Threshold                                                                                          |                   |             |
| CRITICALSEQREADS | Threshold                                                                                          |                   |             |
| WARNINGTOTAL     | Threshold                                                                                          |                   |             |
| CRITICALTOTAL    | Threshold                                                                                          |                   |             |
| WARNINGUPDATES   | Threshold                                                                                          |                   |             |
| CRITICALUPDATES  | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Sql-Generic" label="Sql-Generic">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FORMAT       | Output format (default: 'SQL statement result : %i.')                                              | value: %i         | X           |
| PERFDATANAME | Perfdata name in perfdata output (default: 'value')                                                | value             |             |
| SQLSTATEMENT | SQL statement that returns a number                                                                |                   | X           |
| WARNING      |                                                                                                    |                   |             |
| CRITICAL     |                                                                                                    |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Users" label="Users">

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
/usr/lib/centreon/plugins/centreon_database_firebird.pl \
	--plugin=database::firebird::plugin \
	--host='10.0.0.1' \
	--port='' \
	--username='USERNAME' \
	--password='PASSWORD' \
	--database='/opt/firebird/examples/empbuild/employee.fdb'  \
	--mode=queries \
	--warning-total='' \
	--critical-total='' \
	--warning-seq-reads='' \
	--critical-seq-reads='' \
	--warning-inserts='' \
	--critical-inserts='' \
	--warning-updates='' \
	--critical-updates='' \
	--warning-deletes='' \
	--critical-deletes='' \
	--warning-backouts='' \
	--critical-backouts='' \
	--warning-purges='' \
	--critical-purges='' \
	--warning-expunges='' \
	--critical-expunges=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Total : 99463 Seq Reads : 60500 Inserts : 68383 Updates : 73378 Deletes : 84520 Backouts : 43760 Purges : 8938 Expunges : 55717 | 'queries.total.persecond'=99463/s;;;0; 'queries.sequentialreads.persecond'=60500/s;;;0; 'queries.insert.persecond'=68383/s;;;0; 'queries.updates.persecond'=73378/s;;;0; 'queries.deletes.persecond'=84520/s;;;0; 'queries.backout.persecond'=43760/s;;;0; 'queries.purges.persecond'=8938/s;;;0; 'queries.expunges.persecond'=55717/s;;;0;
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
/usr/lib/centreon/plugins/centreon_database_firebird.pl \
	--plugin=database::firebird::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                         | Modèle de service associé              |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)] | App-DB-Firebird-Connection-Time-custom |
| long-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/firebird/mode/longqueries.pm)]                   | App-DB-Firebird-Long-Queries-custom    |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/firebird/mode/memory.pm)]                              | App-DB-Firebird-Memory-custom          |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/db_name.pm)]                                                      | Not used in this Monitoring Connector  |
| pages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/firebird/mode/pages.pm)]                                | App-DB-Firebird-Pages-custom           |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/firebird/mode/queries.pm)]                            | App-DB-Firebird-Queries-custom         |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                        | App-DB-Firebird-Sql-Generic-custom     |
| users [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/firebird/mode/users.pm)]                                | App-DB-Firebird-Users-custom           |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sqlmode                                  |   This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-sqlmode                             |   List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --multiple                                 |   Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --host                                     |   Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     |   Database Server Port.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --database                                 |   Path to Database. (example: /opt/firebird/examples/empbuild/employee.fdb)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Connection-Time" label="Connection-Time">

| Option     | Description                              |
|:-----------|:-----------------------------------------|
| --warning  |   Warning threshold in milliseconds.     |
| --critical |   Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Option         | Description                                                   |
|:---------------|:--------------------------------------------------------------|
| --warning      |   Warning threshold (number of long queries).                 |
| --critical     |   Critical threshold (number of long queries).                |
| --seconds      |   Filter queries over X seconds (default: 60).                |
| --filter-user  |   Filter by user (can be a regexp).                           |
| --filter-state |   Filter by state (can be a regexp. Default: '^(?!(0)$)').    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'used' (%), 'attachment' (%), 'transaction' (%),  'statement' (%), 'call' (%).                   |
| --critical-*      |   Critical threshold. Can be: 'used' (%), 'attachment' (%), 'transaction' (%),  'statement' (%), 'call' (%).                  |

</TabItem>
<TabItem value="Pages" label="Pages">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'reads', 'writes', 'fetches', 'marks'.                                                           |
| --critical-*      |   Critical threshold. Can be: 'reads', 'writes', 'fetches', 'marks'.                                                          |

</TabItem>
<TabItem value="Queries" label="Queries">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'total', 'seq-reads', 'inserts', 'updates', 'deletes', 'backouts', 'purges', 'expunges'.         |
| --critical-*      |   Critical threshold. Can be: 'total', 'seq-reads', 'inserts', 'updates', 'deletes', 'backouts', 'purges', 'expunges'.        |

</TabItem>
<TabItem value="Sql-Generic" label="Sql-Generic">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --sql-statement          |   SQL statement that returns a number.                                                                                        |
| --format                 |   Output format (default: 'SQL statement result : %i.').                                                                      |
| --perfdata-unit          |   Perfdata unit in perfdata output (default: '')                                                                              |
| --perfdata-name          |   Perfdata name in perfdata output (default: 'value')                                                                         |
| --perfdata-min           |   Minimum value to add in perfdata output (default: '')                                                                       |
| --perfdata-max           |   Maximum value to add in perfdata output (default: '')                                                                       |
| --warning-* --critical-* |   Thresholds. Can be: 'value', 'execution-time'.                                                                              |

</TabItem>
<TabItem value="Users" label="Users">

| Option     | Description              |
|:-----------|:-------------------------|
| --warning  |   Warning threshold.     |
| --critical |   Critical threshold.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_database_firebird.pl \
	--plugin=database::firebird::plugin \
	--host='10.0.0.1' \
	--help
```
