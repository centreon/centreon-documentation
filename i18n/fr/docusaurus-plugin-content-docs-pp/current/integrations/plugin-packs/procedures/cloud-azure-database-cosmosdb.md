---
id: cloud-azure-database-cosmosdb
title: Azure Cosmos DB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Vue d'ensemble

Azure Cosmos DB est une base de données NoSQL complètement managée pour le développement d’applications modernes. Les temps de
réponse inférieurs à dix millisecondes et la scalabilité automatique et instantanée garantissent une vitesse, quelle que soit l’échelle.

Le connecteur de supervision Centreon *Azure Cosmos DB* s'appuie sur les API Azure Monitor afin de récuperer les métriques relatives au service
Cosmos DB. Il est possible d'utiliser les 2 modes proposés par Microsoft: RestAPI ou Azure CLI.

## Contenu du pack

### Modèles

Le connecteur de supervision **Azure Cosmos DB** apporte un modèle d'hôte :

* **Cloud-Azure-Database-CosmosDb-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Database-CosmosDb-custom" label="Cloud-Azure-Database-CosmosDb-custom">

| Alias        | Modèle de service                                     | Description                                                                          |
|:-------------|:------------------------------------------------------|:-------------------------------------------------------------------------------------|
| Availability | Cloud-Azure-Database-CosmosDb-Availability-Api-custom | Contrôle les statistiques de disponibilité de l'instance Azure Cosmos DB Account     |
| Cache        | Cloud-Azure-Database-CosmosDb-Cache-Api-custom        | Contrôle les statistiques de cache de l'instance Azure Cosmos DB Account             |
| Document     | Cloud-Azure-Database-CosmosDb-Document-Api-custom     | Contrôle les statistiques de document de l'instance Azure Cosmos DB Account          |
| Health       | Cloud-Azure-Database-CosmosDb-Health-Api-custom       | Contrôle la santé des ressources Azure Cosmos DB Account                             |
| Latency      | Cloud-Azure-Database-CosmosDb-Latency-Api-custom      | Contrôle les statistiques de latence de l'instance Azure Cosmos DB Account           |
| Throughput   | Cloud-Azure-Database-CosmosDb-Throughput-Api-custom   | Contrôle les statistiques de données de l'instance Azure Cosmos DB Account           |
| Units        | Cloud-Azure-Database-CosmosDb-Units-Api-custom        | Contrôle les statistiques d'unités de requêtes de l'instance Azure Cosmos DB Account |
| Usage        | Cloud-Azure-Database-CosmosDb-Usage-Api-custom        | Contrôle les statistiques d'utilisation de l'instance Azure Cosmos DB Account        |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-Database-CosmosDb-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

Le connecteur de supervision Centreon **Azure Cosmos DB** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure Cosmos DB Account**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée et de les ajouter à la liste des hôtes supervisés.

> Cette découverte n'est compatible qu'avec le [mode **api**. Le mode **azcli**](../getting-started/how-to-guides/azure-credential-configuration.md) n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la documentation dédiée pour en savoir plus sur la [découverte automatique d'hôtes](/docs/monitoring/discovery/hosts-discovery).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Availability" label="Availability">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| cosmosdb.account.service.availability.percentage | %     |

</TabItem>
<TabItem value="Cache" label="Cache">

| Métrique                                             | Unité |
|:-----------------------------------------------------|:------|
| cosmosdb.account.integratedcache.evicted.size.bytes  | B     |
| cosmosdb.account.integratedcache.hitrate.percentage  | %     |
| cosmosdb.account.integratedcache.size.bytes          | B     |
| cosmosdb.account.integratedcache.ttlexpiration.count | count |

</TabItem>
<TabItem value="Document" label="Document">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| cosmosdb.account.document.count       | count |
| cosmosdb.account.document.quota.bytes | B     |

</TabItem>
<TabItem value="Health" label="Health">

| Métrique    | Unité |
|:------------|:------|
| status      | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Latency" label="Latency">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| cosmosdb.account.latency.replication.milliseconds | ms    |
| cosmosdb.account.latency.serverside.milliseconds  | ms    |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| cosmosdb.account.troughput.autoscale.count   | count |
| cosmosdb.account.troughput.provisioned.count | count |

</TabItem>
<TabItem value="Units" label="Units">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| cosmosdb.account.requestunits.total.count | count |

</TabItem>
<TabItem value="Usage" label="Usage">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| cosmosdb.account.data.usage.bytes  | B     |
| cosmosdb.account.index.usage.bytes | B     |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir
les prérequis nécessaires pour interroger les API d'Azure.

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
dnf install centreon-pack-cloud-azure-database-cosmosdb
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-database-cosmosdb
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-azure-database-cosmosdb
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-database-cosmosdb
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Azure Cosmos DB**
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
dnf install centreon-plugin-Cloud-Azure-Database-CosmosDb-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Database-CosmosDb-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-azure-database-cosmosdb-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Database-CosmosDb-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-Database-CosmosDb-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'api.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Macro              | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID                                                                                                        |                   | X           |
| AZURECLIENTSECRET  | Set Azure client secret                                                                                                    |                   | X           |
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| AZURERESOURCE      | Set resource name or ID (required)                                                                                         |                   |             |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                   |                   | X           |
| AZURESUBSCRIPTION  | Set Azure subscription (required if logged to several subscriptions)                                                       |                   | X           |
| AZURETENANT        | Set Azure tenant ID                                                                                                        |                   | X           |
| PROXYURL           | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       |                   |             |

> Paramétrez les options suivantes dans la macro EXTRAOPTIONS si vous superviser des ressources Microsoft Azure géré par 21Vianet (Azure China):
--management-endpoint='https://management.chinacloudapi.cn' --login-endpoint='https://login.partner.microsoftonline.cn'.

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Macro              | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| AZURERESOURCE      | Set resource name or ID (required)                                                                                         |                   |             |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                   |                   | X           |
| AZURESUBSCRIPTION  | Set Azure subscription (required if logged to several subscriptions)                                                       |                   | X           |
| PROXYURL           | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       |                   |             |

</TabItem>
</Tabs>

> Deux méthodes peuvent être utilisées pour définir l'authentification :
>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro **AZURERESOURCE**.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Availability" label="Availability">

| Macro                                 | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                             | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 3600              |             |
| INTERVAL                              | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION                           | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average           |             |
| FILTERMETRIC                          | Filter on a specific metric.                                                                                                                                                   |                   |             |
| FILTERDIMENSION                       | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"               |                   |             |
| WARNINGSERVICEAVAILABILITYPERCENTAGE  | Warning threshold                                                                                                                                  |                   |             |
| CRITICALSERVICEAVAILABILITYPERCENTAGE | Critical threshold                                                                                                                                 |                   |             |
| EXTRAOPTIONS                          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 |                   |             |

</TabItem>
<TabItem value="Cache" label="Cache">

| Macro                          | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                      | Set timeframe in seconds                                                                                                   | 900               |             |
| INTERVAL                       | Set interval of the metric query                                                                                                   | PT5M              |             |
| AGGREGATION                    | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', and 'total'.                                                                                                   | Average           |             |
| FILTERMETRIC                   | Filter on a specific metric.                                                                                                   |                   |             |
| FILTERDIMENSION                | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                    |                   |             |
| WARNINGCACHEEVICTEDSIZE        | Warning threshold where '*'                                                                        |                   |             |
| CRITICALCACHEEVICTEDSIZE       | Critical threshold where '*'                                                                       |                   |             |
| WARNINGCACHEHITRATEPERCENTAGE  | Warning threshold where '*'                                                                        |                   |             |
| CRITICALCACHEHITRATEPERCENTAGE | Critical threshold where '*'                                                                       |                   |             |
| WARNINGCACHESIZE               | Warning threshold where '*'                                                                        |                   |             |
| CRITICALCACHESIZE              | Critical threshold where '*'                                                                       |                   |             |
| WARNINGCACHETTLEXPIRATION      | Warning threshold where '*'                                                                        |                   |             |
| CRITICALCACHETTLEXPIRATION     | Critical threshold where '*'                                                                       |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Document" label="Document">

| Macro                 | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME             | Set timeframe in seconds                                                                                                   | 900               |             |
| INTERVAL              | Set interval of the metric query                                                                                                   | PT5M              |             |
| AGGREGATION           | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', and 'total'.                                                                                                   | Total             |             |
| FILTERMETRIC          | Filter on a specific metric.                                                                                                   |                   |             |
| FILTERDIMENSION       | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                    |                   |             |
| WARNINGDOCUMENTCOUNT  | Warning threshold where '*'                                                                        |                   |             |
| CRITICALDOCUMENTCOUNT | Critical threshold where '*'                                                                       |                   |             |
| WARNINGDOCUMENTQUOTA  | Warning threshold where '*'                                                                        |                   |             |
| CRITICALDOCUMENTQUOTA | Critical threshold where '*'                                                                       |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Health" label="Health">

| Macro          | Description                                                                                                                                                        | Valeur par défaut            | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| OKSTATUS       | Define the conditions to match for the status to be OK (default: '%{status} =~ /^Available$/'). You can use the following variables: %{status}, %{summary}         | %{status} =~ /^Available$/   |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (default: '%{status} =~ /^Unknown$/'). You can use the following variables: %{status}, %{summary}      | %{status} =~ /^Unknown$/     |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /^Unavailable$/'). You can use the following variables: %{status}, %{summary} | %{status} =~ /^Unavailable$/ |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{summary}                              |                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                 |                              |             |

</TabItem>
<TabItem value="Latency" label="Latency">

| Macro                      | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                  | Set timeframe in seconds                                                                                                   | 900               |             |
| INTERVAL                   | Set interval of the metric query                                                                                                   | PT1M              |             |
| AGGREGATION                | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', and 'total'.                                                                                                   | Average           |             |
| FILTERMETRIC               | Filter on a specific metric.                                                                                                   |                   |             |
| FILTERDIMENSION            | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                    |                   |             |
| WARNINGREPLICATIONLATENCY  | Warning threshold where '*'                                                                        |                   |             |
| CRITICALREPLICATIONLATENCY | Critical threshold where '*'                                                                       |                   |             |
| WARNINGSERVERSIDELATENCY   | Warning threshold where '*'                                                                        |                   |             |
| CRITICALSERVERSIDELATENCY  | Critical threshold where '*'                                                                       |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Macro                          | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                      | Set timeframe in seconds                                                                                                   | 900               |             |
| INTERVAL                       | Set interval of the metric query                                                                                                   | PT5M              |             |
| AGGREGATION                    | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', and 'total'.                                                                                                   | Maximum           |             |
| FILTERMETRIC                   | Filter on a specific metric.                                                                                                   |                   |             |
| FILTERDIMENSION                | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                    |                   |             |
| WARNINGAUTOSCALEMAXTHROUGHPUT  | Warning threshold where '*'                                                                        |                   |             |
| CRITICALAUTOSCALEMAXTHROUGHPUT | Critical threshold where '*'                                                                       |                   |             |
| WARNINGPROVISIONEDTHROUGHPUT   | Warning threshold where '*'                                                                        |                   |             |
| CRITICALPROVISIONEDTHROUGHPUT  | Critical threshold where '*'                                                                       |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Units" label="Units">

| Macro                     | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                 | Set timeframe in seconds                                                                                                   | 900               |             |
| INTERVAL                  | Set interval of the metric query                                                                                                   | PT5M              |             |
| AGGREGATION               | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', and 'total'.                                                                                                   | Total             |             |
| FILTERMETRIC              | Filter on a specific metric.                                                                                                   |                   |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                    |                   |             |
| WARNINGTOTALREQUESTUNITS  | Warning threshold                                                                                  |                   |             |
| CRITICALTOTALREQUESTUNITS | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Usage" label="Usage">

| Macro              | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME          | Set timeframe in seconds                                                                                                   | 900               |             |
| INTERVAL           | Set interval of the metric query                                                                                                   | PT5M              |             |
| AGGREGATION        | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', and 'total'.                                                                                                   | Total             |             |
| FILTERMETRIC       | Filter on a specific metric.                                                                                                   |                   |             |
| FILTERDIMENSION    | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                    |                   |             |
| WARNINGDATAUSAGE   | Warning threshold where '*'                                                                        |                   |             |
| CRITICALDATAUSAGE  | Critical threshold where '*'                                                                       |                   |             |
| WARNINGINDEXUSAGE  | Warning threshold where '*'                                                                        |                   |             |
| CRITICALINDEXUSAGE | Critical threshold where '*'                                                                       |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une instance Azure en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_azure_database_cosmosdb_api.pl \
	--plugin=cloud::azure::database::cosmosdb::plugin \
	--mode=usage \
	--custommode='api' \
	--resource='' \
	--resource-group='' \
	--subscription='xxxxxxxxx' \
	--tenant='xxxxxxxxx' \
	--client-id='xxxxxxxxx' \
	--client-secret='xxxxxxxxx' \
	--proxyurl=''  \
	--filter-metric='' \
	--filter-dimension='' \
	--timeframe='900' \
	--interval='PT5M' \
	--aggregation='Total' \
	--warning-index-usage='' \
	--critical-index-usage='' \
	--warning-data-usage='' \
	--critical-data-usage=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Data Usage: 23 B Index Usage: 53 B | 'cosmosdb.account.data.usage.bytes'=23B;;;0;'cosmosdb.account.index.usage.bytes'=53B;;;0;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_database_cosmosdb_api.pl \
	--plugin=cloud::azure::database::cosmosdb::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                    | Modèle de service associé                             |
|:----------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| availability [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/cosmosdb/mode/availability.pm)] | Cloud-Azure-Database-CosmosDb-Availability-Api-custom |
| cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/cosmosdb/mode/cache.pm)]               | Cloud-Azure-Database-CosmosDb-Cache-Api-custom        |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/cosmosdb/mode/discovery.pm)]       | Used for host discovery                               |
| document [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/cosmosdb/mode/document.pm)]         | Cloud-Azure-Database-CosmosDb-Document-Api-custom     |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/cosmosdb/mode/health.pm)]             | Cloud-Azure-Database-CosmosDb-Health-Api-custom       |
| latency [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/cosmosdb/mode/latency.pm)]           | Cloud-Azure-Database-CosmosDb-Latency-Api-custom      |
| throughput [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/cosmosdb/mode/throughput.pm)]     | Cloud-Azure-Database-CosmosDb-Throughput-Api-custom   |
| units [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/cosmosdb/mode/units.pm)]               | Cloud-Azure-Database-CosmosDb-Units-Api-custom        |
| usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/database/cosmosdb/mode/usage.pm)]               | Cloud-Azure-Database-CosmosDb-Usage-Api-custom        |

### Custom modes disponibles

Ce connecteur offre plusieurs méthodes pour se connecter à la ressource (CLI, bibliothèque, etc.), appelées **custom modes**.
Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_database_cosmosdb_api.pl \
	--plugin=cloud::azure::database::cosmosdb::plugin \
	--list-custommode
```

Le plugin apporte les custom modes suivants :

* api
* azcli

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

#### Options des custom modes

Les options spécifiques aux **custom modes** sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --subscription         | Set Azure subscription ID.                                                                                                                                                                                                                    |
| --tenant               | Set Azure tenant ID.                                                                                                                                                                                                                          |
| --client-id            | Set Azure client ID.                                                                                                                                                                                                                          |
| --client-secret        | Set Azure client secret.                                                                                                                                                                                                                      |
| --login-endpoint       | Set Azure login endpoint URL (default: 'https://login.microsoftonline.com')                                                                                                                                                                   |
| --management-endpoint  | Set Azure management endpoint URL (default: 'https://management.azure.com')                                                                                                                                                                   |
| --timeframe            | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                      |
| --interval             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                               |
| --aggregation          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                           |
| --zeroed               | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                           |
| --timeout              | Set timeout in seconds (default: 10).                                                                                                                                                                                                         |
| --http-peer-addr       | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                           |
| --proxyurl             | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                      |
| --proxypac             | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                |
| --insecure             | Accept insecure SSL connections.                                                                                                                                                                                                              |
| --http-backend         | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                       |
| --ssl-opt              | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                     |
| --curl-opt             | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                              |
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-dimension     | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                          |
| --per-sec              | Display the statistics based on a per-second period.                                                                                                                                                                                          |

</TabItem>
<TabItem value="azcli" label="azcli">

| Option             | Description                                                                                                                                           |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| --subscription     | Set Azure subscription (required if logged to several subscriptions).                                                                                 |
| --timeframe        | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                              |
| --interval         | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                       |
| --aggregation      | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.   |
| --zeroed           | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                   |
| --timeout          | Set timeout in seconds (default: 50).                                                                                                                 |
| --sudo             | Use 'sudo' to execute the command.                                                                                                                    |
| --command          | Command to get information (default: 'az'). Can be changed if you have output in a file.                                                              |
| --command-path     | Command path (default: none).                                                                                                                         |
| --command-options  | Command options (default: none).                                                                                                                      |
| --proxyurl         | Proxy URL if any                                                                                                                                      |
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                  |
| --per-sec          | Display the statistics based on a per-second period.                                                                                                  |

</TabItem>
</Tabs>

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Availability" label="Availability">

| Option                                     | Description                                                 |
|:-------------------------------------------|:------------------------------------------------------------|
| --resource                                 | Set resource name or ID (required).                         |
| --resource-group                           | Set resource group (required if resource's name is used).   |
| --warning-service-availability-percentage  | Warning threshold.                                          |
| --critical-service-availability-percentage | Critical threshold.                                         |

</TabItem>
<TabItem value="Cache" label="Cache">

| Option           | Description                                                                                                                     |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                                                                             |
| --resource-group | Set resource group (required if resource's name is used).                                                                       |
| --warning-*      | Warning threshold where '*' can be: 'cache-hitrate-percentage', 'cache-size', 'cache-ttl-expiration', 'cache-evicted-size'.     |
| --critical-*     | Critical threshold where '*' can be: 'cache-hitrate-percentage', 'cache-size', 'cache-ttl-expiration', 'cache-evicted-size'.    |

</TabItem>
<TabItem value="Document" label="Document">

| Option           | Description                                                                 |
|:-----------------|:----------------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                         |
| --resource-group | Set resource group (required if resource's name is used).                   |
| --warning-*      | Warning threshold where '*' can be: 'document-count', 'document-quota'.     |
| --critical-*     | Critical threshold where '*' can be: 'document-count', 'document-quota'.    |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                                                          |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource        | Set resource name or ID (required).                                                                                                                                  |
| --resource-group  | Set resource group (required if resource's name is used).                                                                                                            |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{summary}                                |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /^Unavailable$/'). You can use the following variables: %{status}, %{summary}   |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN (default: '%{status} =~ /^Unknown$/'). You can use the following variables: %{status}, %{summary}        |
| --ok-status       | Define the conditions to match for the status to be OK (default: '%{status} =~ /^Available$/'). You can use the following variables: %{status}, %{summary}           |

</TabItem>
<TabItem value="Latency" label="Latency">

| Option           | Description                                                                          |
|:-----------------|:-------------------------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                                  |
| --resource-group | Set resource group (required if resource's name is used).                            |
| --warning-*      | Warning threshold where '*' can be: 'serverside-latency', 'replication-latency'.     |
| --critical-*     | Critical threshold where '*' can be: 'serverside-latency', 'replication-latency'.    |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Option           | Description                                                                                   |
|:-----------------|:----------------------------------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                                           |
| --resource-group | Set resource group (required if resource's name is used).                                     |
| --warning-*      | Warning threshold where '*' can be: 'provisioned-throughput', 'autoscale-max-throughput'.     |
| --critical-*     | Critical threshold where '*' can be: 'provisioned-throughput', 'autoscale-max-throughput'.    |

</TabItem>
<TabItem value="Units" label="Units">

| Option                         | Description                                                 |
|:-------------------------------|:------------------------------------------------------------|
| --resource                     | Set resource name or ID (required).                         |
| --resource-group               | Set resource group (required if resource's name is used).   |
| --warning-total-request-units  | Warning threshold.                                          |
| --critical-total-request-units | Critical threshold.                                         |

</TabItem>
<TabItem value="Usage" label="Usage">

| Option           | Description                                                          |
|:-----------------|:---------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                  |
| --resource-group | Set resource group (required if resource's name is used).            |
| --warning-*      | Warning threshold where '*' can be: 'data-usage', 'index-usage'.     |
| --critical-*     | Critical threshold where '*' can be: 'data-usage', 'index-usage'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_database_cosmosdb_api.pl \
	--plugin=cloud::azure::database::cosmosdb::plugin \
	--mode=usage \
	--custommode='azcli' \
	--help
```
