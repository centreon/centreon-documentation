---
id: cloud-gcp-cloudsql-mysql
title: Google CloudSQL MySQL
description: "Supervisez Google Cloud SQL pour MySQL via l'API GCP : CPU, InnoDB, réseau, requêtes et stockage."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Google CloudSQL MySQL**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Google CloudSQL MySQL** apporte un modèle d'hôte :

* **Cloud-Gcp-CloudSQL-MySQL-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Gcp-CloudSQL-MySQL-custom" label="Cloud-Gcp-CloudSQL-MySQL-custom">

| Alias   | Modèle de service                           | Description                        |
|:--------|:--------------------------------------------|:-----------------------------------|
| Cpu     | Cloud-Gcp-CloudSQL-MySQL-Cpu-Api-custom     | Contrôle l'utilisation CPU   |
| Innodb  | Cloud-Gcp-CloudSQL-MySQL-Innodb-Api-custom  | Contrôle les métriques InnoDB      |
| Network | Cloud-Gcp-CloudSQL-MySQL-Network-Api-custom | Contrôle l'utilisation réseau      |
| Queries | Cloud-Gcp-CloudSQL-MySQL-Queries-Api-custom | Contrôle le nombre de requêtes     |
| Storage | Cloud-Gcp-CloudSQL-MySQL-Storage-Api-custom | Contrôle l'utilisation des disques |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Gcp-CloudSQL-MySQL-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle       | Description                     |
|:----------------------|:--------------------------------|
| Google CloudSQL MySQL | Discover Google MySQL instances |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Nom                                 | Unité |
|:------------------------------------|:------|
| database.cpu.utilization.percentage | %     |
| database.cpu.reserved_cores.count   | count |

</TabItem>
<TabItem value="Innodb" label="Innodb">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| database.mysql.innodb.data_fsyncs.count   | count |
| database.mysql.innodb.os_log_fsyncs.count | count |
| database.mysql.innodb.pages_read.count    | count |
| database.mysql.innodb.pages_written.count | count |

</TabItem>
<TabItem value="Network" label="Network">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| database.network.connections.count     | count |
| database.network.received.volume.bytes | B     |
| database.network.sent.volume.bytes     | B     |

</TabItem>
<TabItem value="Queries" label="Queries">

| Nom                            | Unité |
|:-------------------------------|:------|
| database.mysql.questions.count | count |
| database.mysql.queries.count   | count |

</TabItem>
<TabItem value="Storage" label="Storage">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| database.space.usage.bytes              | B     |
| database.disk.read.io.operations.count  | count |
| database.disk.write.io.operations.count | count |

</TabItem>
</Tabs>

## Prérequis

### Privilèges Google Cloud

Créer une *clé de compte de service* (télécharger sa clé privée sous la forme d'un fichier JSON) avec les privilèges suivants:

| Google Scope                                     | Description                                                     |
| :----------------------------------------------- | :-------------------------------------------------------------- |
| https://www.googleapis.com/auth/cloud-platform   | View and manage your data across Google Cloud Platform services |

Comment créer une clé de compte de service: https://developers.google.com/identity/protocols/oauth2/service-account

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
dnf install centreon-pack-cloud-gcp-cloudsql-mysql
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-gcp-cloudsql-mysql
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-gcp-cloudsql-mysql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-gcp-cloudsql-mysql
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Google CloudSQL MySQL**
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
dnf install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-gcp-cloudsql-mysql-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Gcp-CloudSQL-MySQL-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                                                                          | Valeur par défaut                              | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------|:-----------------------------------------------|:-----------:|
| GCPDIMENSIONNAME     | Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'      | resource.labels.database\_id                   |             |
| GCPDIMENSIONOPERATOR | Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts')                          | equals                                         |             |
| GCPDIMENSIONVALUE    | Set dimension value (required)                                                                       |                                                |             |
| GCPKEYFILEPATH       | Set GCP key file path                                                                                |                                                | X           |
| GCPSCOPEENDPOINT     | Set GCP scope endpoint URL (default: 'https://www.googleapis.com/auth/cloud-platform')               | https://www.googleapis.com/auth/cloud-platform |             |
| PROXYURL             | Proxy URL. Example: http://my.proxy:3128                                                             |                                                |             |
| GCPEXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                                |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro                 | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME             | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| AGGREGATION           | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| FILTERMETRIC          | Filter metrics (can be: 'database/cpu/utilization', 'database/cpu/reserved\_cores') (can be a regexp)                                              |                   |             |
| WARNINGCORESRESERVED  | Threshold                                                                                                                                          |                   |             |
| CRITICALCORESRESERVED | Threshold                                                                                                                                          |                   |             |
| WARNINGUTILIZATION    | Threshold                                                                                                                                          |                   |             |
| CRITICALUTILIZATION   | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 | --verbose         |             |

</TabItem>
<TabItem value="Innodb" label="Innodb">

| Macro                     | Description                                                                                                                                                                                             | Valeur par défaut | Obligatoire |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                                                                                 | 900               |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times                                                      | average           |             |
| FILTERMETRIC              | Filter metrics (can be: 'database/mysql/innodb\_data\_fsyncs', 'database/mysql/innodb\_os\_log\_fsyncs', 'database/mysql/innodb\_pages\_read', 'database/mysql/innodb\_pages\_write') (can be a regexp) |                   |             |
| WARNINGFSYNCCALLSLOGFILE  | Threshold                                                                                                                                                                                               |                   |             |
| CRITICALFSYNCCALLSLOGFILE | Threshold                                                                                                                                                                                               |                   |             |
| WARNINGFSYNCSCALLS        | Threshold                                                                                                                                                                                               |                   |             |
| CRITICALFSYNCSCALLS       | Threshold                                                                                                                                                                                               |                   |             |
| WARNINGPAGESREAD          | Threshold                                                                                                                                                                                               |                   |             |
| CRITICALPAGESREAD         | Threshold                                                                                                                                                                                               |                   |             |
| WARNINGPAGESWRITTEN       | Threshold                                                                                                                                                                                               |                   |             |
| CRITICALPAGESWRITTEN      | Threshold                                                                                                                                                                                               |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                      | --verbose         |             |

</TabItem>
<TabItem value="Network" label="Network">

| Macro                  | Description                                                                                                                                                 | Valeur par défaut | Obligatoire |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                                     | 900               |             |
| AGGREGATION            | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times          | average           |             |
| FILTERMETRIC           | Filter metrics (can be: 'database/network/received\_bytes\_count', 'database/network/sent\_bytes\_count', 'database/network/connections') (can be a regexp) |                   |             |
| WARNINGCONNECTIONS     | Threshold                                                                                                                                                   |                   |             |
| CRITICALCONNECTIONS    | Threshold                                                                                                                                                   |                   |             |
| WARNINGRECEIVEDVOLUME  | Threshold                                                                                                                                                   |                   |             |
| CRITICALRECEIVEDVOLUME | Threshold                                                                                                                                                   |                   |             |
| WARNINGSENTVOLUME      | Threshold                                                                                                                                                   |                   |             |
| CRITICALSENTVOLUME     | Threshold                                                                                                                                                   |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                          | --verbose         |             |

</TabItem>
<TabItem value="Queries" label="Queries">

| Macro             | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME         | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| AGGREGATION       | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| FILTERMETRIC      | Filter metrics (can be: 'database/mysql/questions', 'database/mysql/queries') (Can be a regexp)                                                    |                   |             |
| WARNINGQUERIES    | Threshold                                                                                                                                          |                   |             |
| CRITICALQUERIES   | Threshold                                                                                                                                          |                   |             |
| WARNINGQUESTIONS  | Threshold                                                                                                                                          |                   |             |
| CRITICALQUESTIONS | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 | --verbose         |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro                   | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME               | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| AGGREGATION             | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| FILTERMETRIC            | Filter metrics (can be: 'database/disk/bytes\_used', 'database/disk/read\_ops\_count', 'databse/disk/write\_ops\_count') (can be a regexp)         |                   |             |
| WARNINGREADOPERATIONS   | Threshold                                                                                                                                          |                   |             |
| CRITICALREADOPERATIONS  | Threshold                                                                                                                                          |                   |             |
| WARNINGSPACEUSAGE       | Threshold                                                                                                                                          |                   |             |
| CRITICALSPACEUSAGE      | Threshold                                                                                                                                          |                   |             |
| WARNINGWRITEOPERATIONS  | Threshold                                                                                                                                          |                   |             |
| CRITICALWRITEOPERATIONS | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une instance GCP en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \
	--plugin=cloud::google::gcp::cloudsql::mysql::plugin \
	--mode=storage \
	--proxyurl='' \
	--key-file='/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json' \
	--scope-endpoint='https://www.googleapis.com/auth/cloud-platform' \
	--dimension-name='resource.labels.database\_id' \
	--dimension-operator='equals' \
	--dimension-value=''  \
	--filter-metric='' \
	--timeframe='900' \
	--aggregation='average' \
	--warning-space-usage='' \
	--critical-space-usage='' \
	--warning-read-operations='' \
	--critical-read-operations='' \
	--warning-write-operations='' \
	--critical-write-operations='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: disk space usage: 4290 disk read IO operations: 73070 disk write IO operations: 18229 | 'database.space.usage.bytes'=4290B;;;; 'database.disk.read.io.operations.count'=73070;;;; 'database.disk.write.io.operations.count'=18229;;;;
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
/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \
	--plugin=cloud::google::gcp::cloudsql::mysql::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                | Modèle de service associé                   |
|:------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/common/mode/cpu.pm)]            | Cloud-Gcp-CloudSQL-MySQL-Cpu-Api-custom     |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/mysql/mode/discovery.pm)] | Used for host discovery                     |
| innodb [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/mysql/mode/innodb.pm)]       | Cloud-Gcp-CloudSQL-MySQL-Innodb-Api-custom  |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/common/mode/network.pm)]    | Cloud-Gcp-CloudSQL-MySQL-Network-Api-custom |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/mysql/mode/queries.pm)]     | Cloud-Gcp-CloudSQL-MySQL-Queries-Api-custom |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/google/gcp/cloudsql/common/mode/storage.pm)]    | Cloud-Gcp-CloudSQL-MySQL-Storage-Api-custom |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --memcached                                |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --redis-server                             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --redis-attribute                          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --redis-db                                 |   Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --failback-file                            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --memexpiration                            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-dir                            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-suffix                         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-concat-cwd                     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --statefile-format                         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-key                            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-cipher                         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --key-file                                 |   Set GCP key file path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --authorization-endpoint                   |   Set GCP authorization endpoint URL (default: 'https://www.googleapis.com/oauth2/v4/token')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --monitoring-endpoint                      |   Set GCP monitoring endpoint URL (default: 'https://monitoring.googleapis.com/v3')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --scope-endpoint                           |   Set GCP scope endpoint URL (default: 'https://www.googleapis.com/auth/cloud-platform')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --zeroed                                   |   Set metrics value to 0 if none. Useful when Stackdriver does not return value when not defined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                             |
| --dimension-name         |   Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'.                                                      |
| --dimension-operator     |   Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts').                                                                          |
| --dimension-value        |   Set dimension value (required).                                                                                                                       |
| --filter-metric          |   Filter metrics (can be: 'database/cpu/utilization', 'database/cpu/reserved\_cores') (can be a regexp).                                                |
| --timeframe              |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                              |
| --aggregation            |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.   |
| --warning-* --critical-* |   Thresholds (can be: 'utilization', 'cores-reserved').                                                                                                 |

</TabItem>
<TabItem value="Innodb" label="Innodb">

| Option                   | Description                                                                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --dimension-name         |   Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'.                                                                                                           |
| --dimension-operator     |   Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts').                                                                                                                               |
| --dimension-value        |   Set dimension value (required).                                                                                                                                                                            |
| --filter-metric          |   Filter metrics (can be: 'database/mysql/innodb\_data\_fsyncs', 'database/mysql/innodb\_os\_log\_fsyncs', 'database/mysql/innodb\_pages\_read', 'database/mysql/innodb\_pages\_write') (can be a regexp).   |
| --timeframe              |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                   |
| --aggregation            |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                        |
| --warning-* --critical-* |   Thresholds (can be: 'fsyncs-calls', 'fsync-calls-logfile', 'pages-read', 'pages-written').                                                                                                                 |
| --per-second             |   Change the data to be unit/sec.                                                                                                                                                                            |

</TabItem>
<TabItem value="Network" label="Network">

| Option                   | Description                                                                                                                                                      |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --dimension-name         |   Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'.                                                               |
| --dimension-operator     |   Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts').                                                                                   |
| --dimension-value        |   Set dimension value (required).                                                                                                                                |
| --filter-metric          |   Filter metrics (can be: 'database/network/received\_bytes\_count', 'database/network/sent\_bytes\_count', 'database/network/connections') (can be a regexp).   |
| --timeframe              |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                       |
| --aggregation            |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.            |
| --warning-* --critical-* |   Thresholds (can be: 'received-volume', 'sent-volume', 'connections').                                                                                          |
| --per-second             |   Change the data to be unit/sec.                                                                                                                                |

</TabItem>
<TabItem value="Queries" label="Queries">

| Option                   | Description                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| --dimension-name         |   Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'.                                                      |
| --dimension-operator     |   Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts').                                                                          |
| --dimension-value        |   Set dimension value (required).                                                                                                                       |
| --filter-metric          |   Filter metrics (can be: 'database/mysql/questions', 'database/mysql/queries') (Can be a regexp).                                                      |
| --timeframe              |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                              |
| --aggregation            |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.   |
| --warning-* --critical-* |   Thresholds (can be: 'queries', 'questions').                                                                                                          |
| --per-second             |   Change the data to be unit/sec.                                                                                                                       |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                   | Description                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| --dimension-name         |   Set dimension name (default: 'resource.labels.database\_id'). Can be: 'resources.labels.region'.                                                      |
| --dimension-operator     |   Set dimension operator (default: 'equals'. Can also be: 'regexp', 'starts').                                                                          |
| --dimension-value        |   Set dimension value (required).                                                                                                                       |
| --filter-metric          |   Filter metrics (can be: 'database/disk/bytes\_used', 'database/disk/read\_ops\_count', 'databse/disk/write\_ops\_count') (can be a regexp).           |
| --timeframe              |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                              |
| --aggregation            |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.   |
| --warning-* --critical-* |   Thresholds (can be: 'space-usage', 'read-operations', 'write-operations').                                                                            |
| --per-second             |   Change the data to be unit/sec.                                                                                                                       |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \
	--plugin=cloud::google::gcp::cloudsql::mysql::plugin \
	--mode=storage \
	--help
```
