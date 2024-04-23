---
id: applications-databases-elasticsearch
title: Elasticsearch
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Elasticsearch est un moteur de recherche et d'analyse distribué et open source pour tout type de données, y compris les données textuelles, numériques, géospatiales, structurées et non structurées.

## Contenu du pack

### Modèles

Le connecteur de supervision **Elasticsearch** apporte un modèle d'hôte :

* **App-DB-Elasticsearch-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-Elasticsearch-custom" label="App-DB-Elasticsearch-custom">

| Alias              | Modèle de service                              | Description                                                        | Découverte |
|:-------------------|:-----------------------------------------------|:-------------------------------------------------------------------|:----------:|
| Cluster-Statistics | App-DB-Elasticsearch-Cluster-Statistics-custom | Contrôle de l'état d'un cluster Elasticsearch                      |            |
| Indice-Statistics  | App-DB-Elasticsearch-Indice-Statistics-custom  | Contrôle les statistiques des index d'un cluster Elasticsearch     | X          |
| License            | App-DB-Elasticsearch-License-custom            | Contrôle le statut de la licence                                   |            |
| Node-Statistics    | App-DB-Elasticsearch-Node-Statistics-custom    | Contrôle les statistiques des noeuds dans un cluster Elasticsearch | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-Elasticsearch-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                        | Description |
|:---------------------------------------|:------------|
| App-DB-Elasticsearch-Indice-Statistics | Contrôle les statistiques des indices d'un cluster Elasticsearch.            |
| App-DB-Elasticsearch-Node-Statistics   | Contrôle les statistiques des noeuds dans un cluster Elasticsearch.            |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cluster-Statistics" label="Cluster-Statistics">

| Métrique                  | Unité |
|:--------------------------|:------|
| status                    | N/A   |
| nodes.total.count         | count |
| nodes.data.count          | count |
| nodes.coordinating.count  | count |
| nodes.master.count        | count |
| nodes.ingest.count        | count |
| indices.total.count       | count |
| shards.total.count        | count |
| shards.active.count       | count |
| shards.active.percentage  | %     |
| shards.unassigned.count   | count |
| shards.relocating.count   | count |
| shards.initializing.count | count |
| tasks.pending.count       | count |
| documents.total.count     | count |
| data.size.bytes           | B     |

</TabItem>
<TabItem value="Indice-Statistics" label="Indice-Statistics">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| *indices*#status                           | N/A   |
| *indices*#indice.documents.total.count     | count |
| *indices*#indice.data.primaries.size.bytes | B     |
| *indices*#indice.data.total.size.bytes     | B     |
| *indices*#shards.active.count              | count |
| *indices*#shards.unassigned.count          | count |

</TabItem>
<TabItem value="License" label="License">

| Métrique    | Unité |
|:------------|:------|
| status      | N/A   |

</TabItem>
<TabItem value="Node-Statistics" label="Node-Statistics">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| *nodes*#node.jvm.heap.usage.percentage | %     |
| *nodes*#node.jvm.heap.usage.bytes      | B     |
| *nodes*#node.disk.free.bytes           | B     |
| *nodes*#node.documents.total.count     | count |
| *nodes*#node.data.size.bytes           | B     |

</TabItem>
</Tabs>

## Prérequis

Afin de superviser un cluster Elasticsearch, celui-ci doit être configuré comme indiqué dans la [documentation officielle Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/monitor-elasticsearch-cluster.html).

Pour pouvoir communiquer avec le collecteur Centreon, l'API du noeud Elasticsearch doit utiliser le protocole HTTP et le port 9200.

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
dnf install centreon-pack-applications-databases-elasticsearch
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-elasticsearch
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-databases-elasticsearch
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-elasticsearch
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Elasticsearch**
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
dnf install centreon-plugin-Applications-Databases-Elasticsearch
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Elasticsearch
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-databases-elasticsearch
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Elasticsearch
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-DB-Elasticsearch-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                     | Description                                                                                          | Valeur par défaut | Obligatoire |
|:--------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ELASTICSEARCHUSERNAME     | Elasticsearch username                                                                               |                   |             |
| ELASTICSEARCHPASSWORD     | Elasticsearch password                                                                               |                   |             |
| ELASTICSEARCHPROTO        | Specify https if needed (default: 'http')                                                            | http              |             |
| ELASTICSEARCHPORT         | Port used (default: 9200)                                                                            | 9200              |             |
| ELASTICSEARCHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cluster-Statistics" label="Cluster-Statistics">

| Macro                      | Description                                                                                                                                    | Valeur par défaut      | Obligatoire |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| WARNINGDATASIZE            | Warning threshold                                                                                                                              |                        |             |
| CRITICALDATASIZE           | Critical threshold                                                                                                                             |                        |             |
| WARNINGDOCUMENTSTOTAL      | Warning threshold                                                                                                                              |                        |             |
| CRITICALDOCUMENTSTOTAL     | Critical threshold                                                                                                                             |                        |             |
| WARNINGINDICESTOTAL        | Warning threshold                                                                                                                              |                        |             |
| CRITICALINDICESTOTAL       | Critical threshold                                                                                                                             |                        |             |
| WARNINGNODESCOORDINATING   | Warning threshold                                                                                                                              |                        |             |
| CRITICALNODESCOORDINATING  | Critical threshold                                                                                                                             |                        |             |
| WARNINGNODESDATA           | Warning threshold                                                                                                                              |                        |             |
| CRITICALNODESDATA          | Critical threshold                                                                                                                             |                        |             |
| WARNINGNODESINGEST         | Warning threshold                                                                                                                              |                        |             |
| CRITICALNODESINGEST        | Critical threshold                                                                                                                             |                        |             |
| WARNINGNODESMASTER         | Warning threshold                                                                                                                              |                        |             |
| CRITICALNODESMASTER        | Critical threshold                                                                                                                             |                        |             |
| WARNINGNODESTOTAL          | Warning threshold                                                                                                                              |                        |             |
| CRITICALNODESTOTAL         | Critical threshold                                                                                                                             |                        |             |
| WARNINGSHARDSACTIVE        | Warning threshold                                                                                                                              |                        |             |
| CRITICALSHARDSACTIVE       | Critical threshold                                                                                                                             |                        |             |
| WARNINGSHARDSINITIALIZING  | Warning threshold                                                                                                                              |                        |             |
| CRITICALSHARDSINITIALIZING | Critical threshold                                                                                                                             |                        |             |
| WARNINGSHARDSRELOCATING    | Warning threshold                                                                                                                              |                        |             |
| CRITICALSHARDSRELOCATING   | Critical threshold                                                                                                                             |                        |             |
| WARNINGSHARDSTOTAL         | Warning threshold                                                                                                                              |                        |             |
| CRITICALSHARDSTOTAL        | Critical threshold                                                                                                                             |                        |             |
| WARNINGSHARDSUNASSIGNED    | Warning threshold                                                                                                                              |                        |             |
| CRITICALSHARDSUNASSIGNED   | Critical threshold                                                                                                                             |                        |             |
| WARNINGSTATUS              | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /yellow/i') You can use the following variables: %{status} | %{status} =~ /yellow/i |             |
| CRITICALSTATUS             | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /red/i'). You can use the following variables: %{status}  | %{status} =~ /red/i    |             |
| WARNINGTASKSPENDING        | Warning threshold                                                                                                                              |                        |             |
| CRITICALTASKSPENDING       | Critical threshold                                                                                                                             |                        |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                             |                        |             |

</TabItem>
<TabItem value="Indice-Statistics" label="Indice-Statistics">

| Macro                     | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                | Filter name (can be a regexp)                                                                      |                   |             |
| WARNINGDATAPRIMARIESFREE  | Warning threshold                                                                                  |                   |             |
| CRITICALDATAPRIMARIESFREE | Critical threshold                                                                                 |                   |             |
| WARNINGDATASIZETOTAL      | Warning threshold                                                                                  |                   |             |
| CRITICALDATASIZETOTAL     | Critical threshold                                                                                 |                   |             |
| WARNINGDOCUMENTSTOTAL     | Warning threshold                                                                                  |                   |             |
| CRITICALDOCUMENTSTOTAL    | Critical threshold                                                                                 |                   |             |
| WARNINGSHARDSACTIVE       | Warning threshold                                                                                  |                   |             |
| CRITICALSHARDSACTIVE      | Critical threshold                                                                                 |                   |             |
| WARNINGSHARDSUNASSIGNED   | Warning threshold                                                                                  |                   |             |
| CRITICALSHARDSUNASSIGNED  | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="License" label="License">

| Macro          | Description                                                                                                                                                                                            | Valeur par défaut      | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /active/i'). You can use the following variables: %{status}, %{type}, %{issued\_to}, %{expiry\_date\_in\_seconds} | %{status} !~ /active/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{type}, %{issued\_to}, %{expiry\_date\_in\_seconds}                                      |                        |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                     |                        |             |

</TabItem>
<TabItem value="Node-Statistics" label="Node-Statistics">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             | Filter name (can be a regexp)                                                                      |                   |             |
| WARNINGDATASIZE        | Warning threshold                                                                                  |                   |             |
| CRITICALDATASIZE       | Critical threshold                                                                                 |                   |             |
| WARNINGDISKFREE        | Warning threshold                                                                                  |                   |             |
| CRITICALDISKFREE       | Critical threshold                                                                                 |                   |             |
| WARNINGDOCUMENTSTOTAL  | Warning threshold                                                                                  |                   |             |
| CRITICALDOCUMENTSTOTAL | Critical threshold                                                                                 |                   |             |
| WARNINGJVMHEAPUSAGE    | Warning threshold                                                                                  |                   |             |
| CRITICALJVMHEAPUSAGE   | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \
	--plugin=database::elasticsearch::restapi::plugin \
	--mode=node-statistics \
	--hostname=10.0.0.1 \
	--port='9200' \
	--proto='http' \
	--username='' \
	--password=''  \
	--filter-name='' \
	--warning-jvm-heap-usage='' \
	--critical-jvm-heap-usage='' \
	--warning-disk-free='' \
	--critical-disk-free='' \
	--warning-documents-total='' \
	--critical-documents-total='' \
	--warning-data-size='' \
	--critical-data-size=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All nodes are ok | '*nodes*#node.jvm.heap.usage.percentage'=20%;;;0;100'*nodes*#node.jvm.heap.usage.bytes'=36380302240B;;;0;137151119360;heap_max_in_bytes'*nodes*#node.disk.free.bytes'=1710072680448B;;;0;total_in_bytes'*nodes*#node.documents.total.count'=4362761044;;;0;'*nodes*#node.data.size.bytes'=1386278479651B;;;0;
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
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \
	--plugin=database::elasticsearch::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                | Modèle de service associé                      |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------|
| cluster-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/clusterstatistics.pm)] | App-DB-Elasticsearch-Cluster-Statistics-custom |
| indice-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/indicestatistics.pm)]   | App-DB-Elasticsearch-Indice-Statistics-custom  |
| license [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/license.pm)]                      | App-DB-Elasticsearch-License-custom            |
| list-indices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/listindices.pm)]             | Used for service discovery                     |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/listnodes.pm)]                 | Used for service discovery                     |
| node-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/elasticsearch/restapi/mode/nodestatistics.pm)]       | App-DB-Elasticsearch-Node-Statistics-custom    |

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
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --hostname                                 | Elasticsearch hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --port                                     | Port used (default: 9200)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    | Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --username                                 | Elasticsearch username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --password                                 | Elasticsearch password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --timeout                                  | Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cluster-Statistics" label="Cluster-Statistics">

| Option            | Description                                                                                                                                                                                                                                                                                                            |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='^status$'                                                                                                                                                                                                                                 |
| --warning-*       | Warning threshold. Can be: 'nodes-total', 'nodes-data', 'nodes-coordinating', 'nodes-master', 'nodes-ingest', 'indices-total', 'shards-total', 'shards-active-count', 'shards-active-percentage', 'shards-unassigned', 'shards-relocating', 'shards-initializing', 'tasks-pending', 'documents-total', 'data-size'.    |
| --critical-*      | Critical threshold. Can be: 'nodes-total', 'nodes-data', 'nodes-coordinating', 'nodes-master', 'nodes-ingest', 'indices-total', 'shards-total', 'shards-active-count', 'shards-active-percentage', 'shards-unassigned', 'shards-relocating', 'shards-initializing', 'tasks-pending', 'documents-total', 'data-size'.   |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /yellow/i') You can use the following variables: %{status}.                                                                                                                                                                        |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /red/i'). You can use the following variables: %{status}.                                                                                                                                                                         |

</TabItem>
<TabItem value="Indice-Statistics" label="Indice-Statistics">

| Option            | Description                                                                                                                                                   |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter name (can be a regexp).                                                                                                                                |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='^status$'                                                                        |
| --warning-*       | Warning threshold. Can be: 'documents-total', 'data-size-primaries', 'data-size-total', 'shards-active', 'shards-unassigned'.                                 |
| --critical-*      | Critical threshold. Can be: 'documents-total', 'data-size-primaries', 'data-size-total', 'shards-active', 'shards-unassigned'.                                |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /yellow/i') You can use the following variables: %{display}, %{status}.   |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /red/i'). You can use the following variables: %{display}, %{status}.    |

</TabItem>
<TabItem value="License" label="License">

| Option            | Description                                                                                                                                                                                                |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{type}, %{issued\_to}, %{expiry\_date\_in\_seconds}.                                         |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /active/i'). You can use the following variables: %{status}, %{type}, %{issued\_to}, %{expiry\_date\_in\_seconds}.    |

</TabItem>
<TabItem value="Node-Statistics" label="Node-Statistics">

| Option            | Description                                                                                                                  |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter name (can be a regexp).                                                                                               |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='heap'                                           |
| --warning-*       | Warning threshold. Can be: 'data-size', 'disk-free', 'documents-total', 'jvm-heap-usage' (in %), 'jvm-heap-usage-bytes'.     |
| --critical-*      | Critical threshold. Can be: 'data-size', 'disk-free', 'documents-total', 'jvm-heap-usage' (in %), 'jvm-heap-usage-bytes'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \
	--plugin=database::elasticsearch::restapi::plugin \
	--mode=node-statistics \
	--help
```
