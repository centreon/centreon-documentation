---
id: applications-databases-influxdb
title: InfluxDB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **InfluxDB** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **InfluxDB** apporte un modèle d'hôte :

* **App-DB-Influxdb-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-Influxdb-custom" label="App-DB-Influxdb-custom">

| Alias                  | Modèle de service                             | Description                                    | Découverte |
|:-----------------------|:----------------------------------------------|:-----------------------------------------------|:----------:|
| Connection-Time        | App-DB-Influxdb-Connection-Time-custom        | Contrôle le temps de connexion à l'instance    |            |
| Database-Statistics    | App-DB-Influxdb-Database-Statistics-custom    | Contrôle les statistiques des bases de données | X          |
| Http-Server-Statistics | App-DB-Influxdb-Http-Server-Statistics-custom | Contrôle les statistiques du serveur HTTP      |            |
| Write-Statistics       | App-DB-Influxdb-Write-Statistics-custom       | Contrôle les statistiques d'écriture           |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-Influxdb-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias | Modèle de service            | Description                                                                                             |
|:------|:-----------------------------|:--------------------------------------------------------------------------------------------------------|
| Query | App-DB-Influxdb-Query-custom | Contrôle permettant d'exécuter des requêtes et d'utiliser le résultat pour définir des seuils d'alarmes |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                     | Description                                                        |
|:------------------------------------|:-------------------------------------------------------------------|
| App-DB-Influxdb-Database-Statistics | Découvrir les bases de données pour en superviser les statistiques |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Connection-Time" label="Connection-Time">

| Nom                          | Unité |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| *databases*#database.measurements.count | count |
| *databases*#database.series.count       | count |

</TabItem>
<TabItem value="Http-Server-Statistics" label="Http-Server-Statistics">

| Nom                          | Unité |
|:-----------------------------|:------|
| requests-query-count         | N/A   |
| requests-write-count         | N/A   |
| requests-ping-count          | N/A   |
| requests-status-count        | N/A   |
| requests.active.count        | count |
| requests.write.active.count  | count |
| requests.response.data.bytes | B/s   |
| requests.write.data.bytes    | B/s   |
| errors-server                | N/A   |
| errors-client                | N/A   |

</TabItem>
<TabItem value="Query" label="Query">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Write-Statistics" label="Write-Statistics">

| Nom            | Unité |
|:---------------|:------|
| points-written | N/A   |
| writes-ok      | N/A   |
| writes-error   | N/A   |
| writes-drop    | N/A   |
| writes-timeout | N/A   |

</TabItem>
</Tabs>

## Prérequis

Pour pouvoir accéder aux données d'une base InfluxDB, il faut généralement disposer d'un login/mot de passe ou d'un token.

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
dnf install centreon-pack-applications-databases-influxdb
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-influxdb
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-influxdb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-influxdb
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **InfluxDB**
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
dnf install centreon-plugin-Applications-Databases-Influxdb
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Influxdb
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-influxdb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Influxdb
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-DB-Influxdb-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INFLUXDBUSERNAME     | Specify the username for authentication                                                                                                            |                   |             |
| INFLUXDBPASSWORD     | Specify the password for authentication                                                                                                            |                   |             |
| INFLUXDBPROTO        | Specify https if needed                                                                                                                            | http              |             |
| INFLUXDBPORT         | Port used                                                                                                                                          | 8086              |             |
| INFLUXDBEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Connection-Time" label="Connection-Time">

| Macro                  | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONTIME  | Warning threshold in milliseconds                                                                                                                |                   |             |
| CRITICALCONNECTIONTIME | Critical threshold in milliseconds                                                                                                               |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Macro                | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERDATABASE       | Filter database name (can use regexp)                                                                                                            |                   |             |
| WARNINGMEASUREMENTS  | Threshold                                                                                                                                        |                   |             |
| CRITICALMEASUREMENTS | Threshold                                                                                                                                        |                   |             |
| WARNINGSERIES        | Threshold                                                                                                                                        |                   |             |
| CRITICALSERIES       | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Http-Server-Statistics" label="Http-Server-Statistics">

| Macro                        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGERRORSCLIENT          | Threshold                                                                                                                                        |                   |             |
| WARNINGERRORSSERVER          | Threshold                                                                                                                                        |                   |             |
| CRITICALERRORSSERVER         | Threshold                                                                                                                                        |                   |             |
| CRITICALERRRORSCLIENT        | Threshold                                                                                                                                        |                   |             |
| WARNINGREQUESTSACTIVE        | Threshold                                                                                                                                        |                   |             |
| CRITICALREQUESTSACTIVE       | Threshold                                                                                                                                        |                   |             |
| WARNINGREQUESTSPINGCOUNT     | Threshold                                                                                                                                        |                   |             |
| CRITICALREQUESTSPINGCOUNT    | Threshold                                                                                                                                        |                   |             |
| WARNINGREQUESTSQUERYCOUNT    | Threshold                                                                                                                                        |                   |             |
| CRITICALREQUESTSQUERYCOUNT   | Threshold                                                                                                                                        |                   |             |
| WARNINGREQUESTSRESPONSEDATA  | Threshold                                                                                                                                        |                   |             |
| CRITICALREQUESTSRESPONSEDATA | Threshold                                                                                                                                        |                   |             |
| WARNINGREQUESTSSTATUSCOUNT   | Threshold                                                                                                                                        |                   |             |
| CRITICALREQUESTSSTATUSCOUNT  | Threshold                                                                                                                                        |                   |             |
| WARNINGREQUESTSWRITEACTIVE   | Threshold                                                                                                                                        |                   |             |
| CRITICALREQUESTSWRITEACTIVE  | Threshold                                                                                                                                        |                   |             |
| WARNINGREQUESTSWRITECOUNT    | Threshold                                                                                                                                        |                   |             |
| CRITICALREQUESTSWRITECOUNT   | Threshold                                                                                                                                        |                   |             |
| WARNINGREQUESTSWRITEDATA     | Threshold                                                                                                                                        |                   |             |
| CRITICALREQUESTSWRITEDATA    | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Query" label="Query">

| Macro          | Description                                                                                                                                                                                                                                                                                                  | Valeur par défaut | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| QUERIES        | Set a InfluxQL query. Query option must be like --query='label,query'.  Query must contain an "AS" keyword to rename the column of the selected data, and must match the label.  (example: --query='mymetric,SELECT the\_data AS "mymetric"  FROM "database"."retention"."measurement" GROUP BY "instance"') |                   | X           |
| INSTANCE       | Set the instance label on which the results should be calculate for (example: --instance='name').  The instance label must be the same label as the "GROUP BY" keyword                                                                                                                                       |                   | X           |
| OUTPUT         | Set the output for each instances (example: --output='Object %\{instance\} value is \{label\}')                                                                                                                                                                                                              |                   | X           |
| MULTIPLEOUTPUT | Set the global output in case everything is fine for multiple instances (example: --multiple-output='All instance values are ok')                                                                                                                                                                            |                   |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING.  Can use special variables like %\{instance\} and any other labels you set through --query                                                                                                                                                      |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL.  Can use special variables like %\{instance\} and any other labels you set through --query                                                                                                                                                     |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                             |                   |             |

</TabItem>
<TabItem value="Write-Statistics" label="Write-Statistics">

| Macro                 | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPOINTSWRITTEN  | Threshold                                                                                                                                        |                   |             |
| CRITICALPOINTSWRITTEN | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITESDROP     | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITESDROP    | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITESERROR    | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITESERROR   | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITESOK       | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITESOK      | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITESTIMEOUT  | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITESTIMEOUT | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_influxdb.pl \
	--plugin=database::influxdb::plugin \
	--mode=write-statistics \
	--hostname=10.0.0.1 \
	--port=8086 \
	--proto=http \
	--username='username' \
	--password='password'  \
	--warning-points-written='' \
	--critical-points-written='' \
	--warning-writes-ok='' \
	--critical-writes-ok='' \
	--warning-writes-error='' \
	--critical-writes-error='' \
	--warning-writes-drop='' \
	--critical-writes-drop='' \
	--warning-writes-timeout='' \
	--critical-writes-timeout='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: 
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
/usr/lib/centreon/plugins/centreon_influxdb.pl \
	--plugin=database::influxdb::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                          | Modèle de service associé                     |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/connectiontime.pm)]              | App-DB-Influxdb-Connection-Time-custom        |
| database-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/databasestatistics.pm)]      | App-DB-Influxdb-Database-Statistics-custom    |
| http-server-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/httpserverstatistics.pm)] | App-DB-Influxdb-Http-Server-Statistics-custom |
| list-databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/listdatabases.pm)]                | Utilisé pour la découverte de services        |
| query [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/query.pm)]                                 | App-DB-Influxdb-Query-custom                  |
| write-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/influxdb/mode/writestatistics.pm)]            | App-DB-Influxdb-Write-Statistics-custom       |

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
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
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
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --hostname                                 | Remote hostname or IP address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --port                                     | Port used (default: 8086)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proto                                    | Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --username                                 | Specify the username for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --password                                 | Specify the password for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeout                                  | Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --unknown-http-status                      | Threshold unknown for http response code. (default: '%\{http\_code\} \< 200 or %\{http\_code\} \>= 300')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --warning-http-status                      | Warning threshold for http response code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --critical-http-status                     | Critical threshold for http response code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Connection-Time" label="Connection-Time">

| Option                     | Description                         |
|:---------------------------|:------------------------------------|
| --warning-connection-time  | Warning threshold in milliseconds.  |
| --critical-connection-time | Critical threshold in milliseconds. |

</TabItem>
<TabItem value="Database-Statistics" label="Database-Statistics">

| Option            | Description                                          |
|:------------------|:-----------------------------------------------------|
| --filter-database | Filter database name (can use regexp).               |
| --warning-*       | Warning threshold. Can be: 'measurements', 'series'. |
| --critical-*      | Warning threshold. Can be: 'measurements', 'series'. |

</TabItem>
<TabItem value="Http-Server-Statistics" label="Http-Server-Statistics">

| Option       | Description                                                                                                                                                                                                                                                 |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'requests-query-count', 'requests-write-count', 'requests-ping-count', 'requests-status-count', 'requests-active', 'requests-write-active', 'requests-response-data', 'requests-write-data',  'errors-server', 'errors-client'.  |
| --critical-* | Critical threshold. Can be: 'requests-query-count', 'requests-write-count', 'requests-ping-count', 'requests-status-count', 'requests-active', 'requests-write-active', 'requests-response-data', 'requests-write-data',  'errors-server', 'errors-client'. |

</TabItem>
<TabItem value="Query" label="Query">

| Option            | Description                                                                                                                                                                                                                                                                                                  |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --query           | Set a InfluxQL query. Query option must be like --query='label,query'.  Query must contain an "AS" keyword to rename the column of the selected data, and must match the label.  (example: --query='mymetric,SELECT the\_data AS "mymetric"  FROM "database"."retention"."measurement" GROUP BY "instance"') |
| --instance        | Set the instance label on which the results should be calculate for (example: --instance='name').  The instance label must be the same label as the "GROUP BY" keyword.                                                                                                                                      |
| --output          | Set the output for each instances (example: --output='Object %\{instance\} value is \{label\}').                                                                                                                                                                                                             |
| --multiple-output | Set the global output in case everything is fine for multiple instances (example: --multiple-output='All instance values are ok').                                                                                                                                                                           |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '').  Can use special variables like %\{instance\} and any other labels you set through --query.                                                                                                                                       |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '').  Can use special variables like %\{instance\} and any other labels you set through --query.                                                                                                                                      |
| --aggregation     | Set the aggregation on metric values (can be: 'average', 'min', 'max', 'sum') (default: 'average').                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Write-Statistics" label="Write-Statistics">

| Option       | Description                                                                                                 |
|:-------------|:------------------------------------------------------------------------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'points-written', 'writes-ok', 'writes-error', 'writes-drop', 'writes-timeout'.  |
| --critical-* | Critical threshold. Can be: 'points-written', 'writes-ok', 'writes-error', 'writes-drop', 'writes-timeout'. |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_influxdb.pl \
	--plugin=database::influxdb::plugin \
	--mode=write-statistics \
	--help
```
