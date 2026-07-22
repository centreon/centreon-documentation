---
id: cloud-azure-network-appgateway
title: Azure Application Gateway
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Azure Application Gateway**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Azure Application Gateway** apporte 2 modèles d'hôte :

* **Cloud-Azure-Network-AppGateway-V1-custom**
* **Cloud-Azure-Network-AppGateway-V2-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Network-AppGateway-V1-custom" label="Cloud-Azure-Network-AppGateway-V1-custom">

| Alias          | Modèle de service                                        | Description                                                               |
|:---------------|:---------------------------------------------------------|:--------------------------------------------------------------------------|
| Backend-Health | Cloud-Azure-Network-AppGateway-Backend-Health-Api-custom | Contrôle la disponibilité des backends des hôtes Azure Application Gateway v1 |
| Connections    | Cloud-Azure-Network-AppGateway-Connections-Api-custom    | Contrôle les connexions aux ressources Azure Application Gateway          |
| Health         | Cloud-Azure-Network-AppGateway-Health-Api-custom         | Contrôle la santé des ressources Azure Application Gateway                |
| Requests       | Cloud-Azure-Network-AppGateway-Requests-Api-custom       | Contrôle les requêtes des ressources Azure Application Gateway            |
| Throughput     | Cloud-Azure-Network-AppGateway-Throughput-Api-custom     | Contrôle le transit des ressources Azure Application Gateway              |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-Network-AppGateway-V1-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Azure-Network-AppGateway-V2-custom" label="Cloud-Azure-Network-AppGateway-V2-custom">

| Alias           | Modèle de service                                         | Description                                                           |
|:----------------|:----------------------------------------------------------|:----------------------------------------------------------------------|
| Backend-Status  | Cloud-Azure-Network-AppGateway-Backend-Status-Api-custom  | Contrôle le statut des backends Azure Application Gateway             |
| Backend-Time    | Cloud-Azure-Network-AppGateway-Backend-Time-Api-custom    | Contrôle le temps de réponse des backends Azure Application Gateway   |
| Clients-Traffic | Cloud-Azure-Network-AppGateway-Clients-Traffic-Api-custom | Contrôle le trafic client des ressources Azure Application Gateway    |
| Connections     | Cloud-Azure-Network-AppGateway-Connections-Api-custom     | Contrôle les connexions aux ressources Azure Application Gateway      |
| Gateway-Time    | Cloud-Azure-Network-AppGateway-Gateway-Time-Api-custom    | Contrôle le temps de réponse des ressources Azure Application Gateway |
| Health          | Cloud-Azure-Network-AppGateway-Health-Api-custom          | Contrôle la santé des ressources Azure Application Gateway            |
| Requests        | Cloud-Azure-Network-AppGateway-Requests-Api-custom        | Contrôle les requêtes des ressources Azure Application Gateway        |
| Throughput      | Cloud-Azure-Network-AppGateway-Throughput-Api-custom      | Contrôle le transit des ressources Azure Application Gateway          |
| Units           | Cloud-Azure-Network-AppGateway-Units-Api-custom           | Contrôle les unités des ressources Azure Application Gateway          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-Network-AppGateway-V2-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

Le connecteur de supervision Centreon **Azure Application Gateway** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure Application Gateway**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée et de les ajouter à la liste des hôtes supervisés.

> Cette découverte n'est compatible qu'avec le [mode **api**. Le mode **azcli**](../getting-started/how-to-guides/azure-credential-configuration.md) n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la documentation dédiée pour en savoir plus sur la [découverte automatique d'hôtes](/docs/monitoring/discovery/hosts-discovery).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Backend-Health" label="Backend-Health">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| appgateway.backend.unhealthy.host.count | count |
| appgateway.backend.healthy.host.count   | count |

</TabItem>
<TabItem value="Backend-Status" label="Backend-Status">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| appgateway.backend.response.status.count | count |

</TabItem>
<TabItem value="Backend-Time" label="Backend-Time">

| Nom                                                    | Unité |
|:-------------------------------------------------------|:------|
| appgateway.backend.connect.time.milliseconds           | ms    |
| appgateway.backend.firstbyte.responsetime.milliseconds | ms    |
| appgateway.backend.lastbyte.responsetime.milliseconds  | ms    |

</TabItem>
<TabItem value="Clients-Traffic" label="Clients-Traffic">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| appgateway.traffic.clients.received.bytes | B     |
| appgateway.traffic.clients.sent.bytes     | B     |

</TabItem>
<TabItem value="Connections" label="Connections">

| Nom                                          | Unité |
|:---------------------------------------------|:------|
| appgateway.backend.connections.current.count | count |

</TabItem>
<TabItem value="Gateway-Time" label="Gateway-Time">

| Nom                                | Unité |
|:-----------------------------------|:------|
| appgateway.time.total.milliseconds | ms    |

</TabItem>
<TabItem value="Health" label="Health">

| Status Name | Description                 |
|:------------|:----------------------------|
| status      | Current operational status  |
| summary     | Last related status message |

</TabItem>
<TabItem value="Requests" label="Requests">

| Nom                              | Unité |
|:---------------------------------|:------|
| appgateway.requests.failed.count | count |
| appgateway.requests.total.count  | count |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Nom                                  | Unité |
|:-------------------------------------|:------|
| appgateway.throughput.bytespersecond | B/s   |

</TabItem>
<TabItem value="Units" label="Units">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| appgateway.capacity.units.count         | count |
| appgateway.compute.units.count          | count |
| appgateway.billed.units.estimated.count | count |
| appgateway.billable.units.fixed.count   | count |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir
les prérequis nécessaires pour interroger les API d'Azure.

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
dnf install centreon-pack-cloud-azure-network-appgateway
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-network-appgateway
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-azure-network-appgateway
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-network-appgateway
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Azure Application Gateway**
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
dnf install centreon-plugin-Cloud-Azure-Network-AppGateway-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Network-AppGateway-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-azure-network-appgateway-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Network-AppGateway-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Network-AppGateway-V1-custom" label="Cloud-Azure-Network-AppGateway-V1-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-Network-AppGateway-V1-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'API.

| Macro              | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID                                                                                                        |                   | X           |
| AZURECLIENTSECRET  | Set Azure client secret                                                                                                    |                   | X           |
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| AZURERESOURCE      | Set resource name or ID (required)                                                                                         |                   |             |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                   |                   |             |
| AZURERESOURCETYPE  | Set resource type (required if resource's name is used)                                                                    |                   |             |
| AZURESUBSCRIPTION  | Set Azure subscription ID                                                                                                  |                   | X           |
| AZURETENANT        | Set Azure tenant ID                                                                                                        |                   | X           |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                   |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       |                   |             |

> Deux méthodes peuvent être utilisées pour définir l'authentification :
>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro **AZURERESOURCE**.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Azure-Network-AppGateway-V2-custom" label="Cloud-Azure-Network-AppGateway-V2-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-Network-AppGateway-V2-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'api.

| Macro              | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID                                                                                                        |                   | X           |
| AZURECLIENTSECRET  | Set Azure client secret                                                                                                    |                   | X           |
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| AZURERESOURCE      | Set resource name or ID (required)                                                                                         |                   |             |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                   |                   |             |
| AZURERESOURCETYPE  | Set resource type (required if resource's name is used)                                                                    |                   |             |
| AZURESUBSCRIPTION  | Set Azure subscription ID                                                                                                  |                   | X           |
| AZURETENANT        | Set Azure tenant ID                                                                                                        |                   | X           |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                   |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       |                   |             |

> Deux méthodes peuvent être utilisées pour définir l'authentification :
>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro **AZURERESOURCE**.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Backend-Health" label="Backend-Health">

| Macro                      | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                  | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                   | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average           |             |
| FILTERMETRIC               | Filter metrics                                                                                                                                                   |                   |             |
| FILTERDIMENSION            | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"               |                   |             |
| WARNINGHEALTHYHOSTCOUNT    | Threshold                                                                                                                                                   |                   |             |
| CRITICALHEALTHYHOSTCOUNT   | Threshold                                                                                                                                                   |                   |             |
| WARNINGUNHEALTHYHOSTCOUNT  | Threshold                                                                                                                                                   |                   |             |
| CRITICALUNHEALTHYHOSTCOUNT | Threshold                                                                                                                                                   |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 |                   |             |

</TabItem>
<TabItem value="Backend-Status" label="Backend-Status">

| Macro                  | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL               | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION            | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Total             |             |
| FILTERMETRIC           | Filter metrics                                                                                                                                                   |                   |             |
| FILTERDIMENSION        | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"               |                   |             |
| WARNINGRESPONSESTATUS  | Warning threshold                                                                                                                                  |                   |             |
| CRITICALRESPONSESTATUS | Critical threshold                                                                                                                                 |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 |                   |             |

</TabItem>
<TabItem value="Backend-Time" label="Backend-Time">

| Macro                         | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                     | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                      | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                   | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average           |             |
| FILTERMETRIC                  | Filter metrics                                                                                                                                                   |                   |             |
| FILTERDIMENSION               | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"               |                   |             |
| WARNINGCONNECTTIME            | Threshold                                                                                                                                          |                   |             |
| CRITICALCONNECTTIME           | Threshold                                                                                                                                          |                   |             |
| WARNINGFIRSTBYTERESPONSETIME  | Threshold                                                                                                                                          |                   |             |
| CRITICALFIRSTBYTERESPONSETIME | Threshold                                                                                                                                          |                   |             |
| WARNINGLASTBYTERESPONSETIME   | Threshold                                                                                                                                          |                   |             |
| CRITICALLASTBYTERESPONSETIME  | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 |                   |             |

</TabItem>
<TabItem value="Clients-Traffic" label="Clients-Traffic">

| Macro                        | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Total             |             |
| FILTERMETRIC                 | Filter metrics                                                                                                                                                   |                   |             |
| FILTERDIMENSION              | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"               |                   |             |
| WARNINGCLIENTSBYTESRECEIVED  | Threshold                                                                                                                                          |                   |             |
| CRITICALCLIENTSBYTESRECEIVED | Threshold                                                                                                                                          |                   |             |
| WARNINGCLIENTSBYTESSENT      | Threshold                                                                                                                                          |                   |             |
| CRITICALCLIENTSBYTESSENT     | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 |                   |             |

</TabItem>
<TabItem value="Connections" label="Connections">

| Macro                      | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                  | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                   | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average           |             |
| FILTERMETRIC               | Filter metrics                                                                                                                                                   |                   |             |
| FILTERDIMENSION            | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"               |                   |             |
| WARNINGCURRENTCONNECTIONS  | Warning threshold                                                                                                                                  |                   |             |
| CRITICALCURRENTCONNECTIONS | Critical threshold                                                                                                                                 |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 |                   |             |

</TabItem>
<TabItem value="Gateway-Time" label="Gateway-Time">

| Macro             | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME         | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL          | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION       | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average           |             |
| FILTERMETRIC      | Filter metrics                                                                                                                                                   |                   |             |
| FILTERDIMENSION   | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"               |                   |             |
| WARNINGTOTALTIME  | Warning threshold                                                                                                                                  |                   |             |
| CRITICALTOTALTIME | Critical threshold                                                                                                                                 |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 |                   |             |

</TabItem>
<TabItem value="Health" label="Health">

| Macro          | Description                                                                                                                                                              | Valeur par défaut              | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:-----------:|
| OKSTATUS       | Define the conditions to match for the status to be OK (default: '%\{status\} =~ /^Available$/'). You can use the following variables: %\{status\}, %\{summary\}         | %\{status\} =~ /^Available$/   |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /^Unknown$/'). You can use the following variables: %\{status\}, %\{summary\}      | %\{status\} =~ /^Unknown$/     |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /^Unavailable$/'). You can use the following variables: %\{status\}, %\{summary\} | %\{status\} =~ /^Unavailable$/ |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{summary\}                                |                                |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                       |                                |             |

</TabItem>
<TabItem value="Requests" label="Requests">

| Macro                  | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL               | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION            | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Total             |             |
| FILTERMETRIC           | Filter metrics                                                                                                                                                   |                   |             |
| FILTERDIMENSION        | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"               |                   |             |
| WARNINGFAILEDREQUESTS  | Threshold                                                                                                                                          |                   |             |
| CRITICALFAILEDREQUESTS | Threshold                                                                                                                                          |                   |             |
| WARNINGTOTALREQUESTS   | Threshold                                                                                                                                          |                   |             |
| CRITICALTOTALREQUESTS  | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 |                   |             |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Macro              | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME          | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL           | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION        | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average           |             |
| FILTERMETRIC       | Filter metrics                                                                                                                                                   |                   |             |
| FILTERDIMENSION    | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"               |                   |             |
| WARNINGTHROUGHPUT  | Warning threshold                                                                                                                                  |                   |             |
| CRITICALTHROUGHPUT | Critical threshold                                                                                                                                 |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 |                   |             |

</TabItem>
<TabItem value="Units" label="Units">

| Macro                        | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average           |             |
| FILTERMETRIC                 | Filter metrics                                                                                                                                                   |                   |             |
| FILTERDIMENSION              | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"               |                   |             |
| WARNINGCAPACITYUNITS         | Threshold                                                                                                                                          |                   |             |
| CRITICALCAPACITYUNITS        | Threshold                                                                                                                                          |                   |             |
| WARNINGCOMPUTEUNITS          | Threshold                                                                                                                                          |                   |             |
| CRITICALCOMPUTEUNITS         | Threshold                                                                                                                                          |                   |             |
| WARNINGESTIMATEDBILLEDUNITS  | Threshold                                                                                                                                          |                   |             |
| CRITICALESTIMATEDBILLEDUNITS | Threshold                                                                                                                                          |                   |             |
| WARNINGFIXEDBILLABLEUNITS    | Threshold                                                                                                                                          |                   |             |
| CRITICALFIXEDBILLABLEUNITS   | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 |                   |             |

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
/usr/lib/centreon/plugins/centreon_azure_network_appgateway_api.pl \
	--plugin=cloud::azure::network::appgateway::plugin \
	--mode=requests \
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
	--warning-failed-requests='' \
	--critical-failed-requests='' \
	--warning-total-requests='' \
	--critical-total-requests=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Instance 'APP001ABCD' Statistic 'total' Metrics Failed Requests: 0.00, Total Requests: 523.00 |
'APP001ABCD~total#appgateway.requests.failed.count'=0.00;0:80;0:90;0; 'APP001ABCD~total#appgateway.requests.total.count'=523.00;;;0;

```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_network_appgateway_api.pl \
	--plugin=cloud::azure::network::appgateway::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                          | Modèle de service associé                                 |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|
| backend-health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/network/appgateway/mode/backendhealth.pm)]   | Cloud-Azure-Network-AppGateway-Backend-Health-Api-custom  |
| backend-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/network/appgateway/mode/backendstatus.pm)]   | Cloud-Azure-Network-AppGateway-Backend-Status-Api-custom  |
| backend-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/network/appgateway/mode/backendtime.pm)]       | Cloud-Azure-Network-AppGateway-Backend-Time-Api-custom    |
| clients-traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/network/appgateway/mode/clientstraffic.pm)] | Cloud-Azure-Network-AppGateway-Clients-Traffic-Api-custom |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/network/appgateway/mode/connections.pm)]        | Cloud-Azure-Network-AppGateway-Connections-Api-custom     |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/network/appgateway/mode/discovery.pm)]            | Used for host discovery                                   |
| gateway-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/network/appgateway/mode/gatewaytime.pm)]       | Cloud-Azure-Network-AppGateway-Gateway-Time-Api-custom    |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/network/appgateway/mode/health.pm)]                  | Cloud-Azure-Network-AppGateway-Health-Api-custom          |
| requests [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/network/appgateway/mode/requests.pm)]              | Cloud-Azure-Network-AppGateway-Requests-Api-custom        |
| throughput [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/network/appgateway/mode/throughput.pm)]          | Cloud-Azure-Network-AppGateway-Throughput-Api-custom      |
| units [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/network/appgateway/mode/units.pm)]                    | Cloud-Azure-Network-AppGateway-Units-Api-custom           |

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
| --subscription                             |   Set Azure subscription ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeframe                                |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --interval                                 |   Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --aggregation                              |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --zeroed                                   |   Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --sudo                                     |   Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --command                                  |   Command to get information (default: 'az'). Can be changed if you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --command-path                             |   Command path (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-options                          |   Command options (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
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
| --tenant                                   |   Set Azure tenant ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --client-id                                |   Set Azure client ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --client-secret                            |   Set Azure client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --login-endpoint                           |   Set Azure login endpoint URL (default: 'https://login.microsoftonline.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --management-endpoint                      |   Set Azure management endpoint URL (default: 'https://management.azure.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Backend-Health" label="Backend-Health">

| Option             | Description                                                                                                                              |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-dimension |   Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec          |   Display the statistics based on a per-second period.                                                                                   |
| --filter-counters  |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'              |
| --resource         |   Set resource name or ID (required).                                                                                                    |
| --resource-group   |   Set resource group (required if resource's name is used).                                                                              |
| --warning-*        |   Warning threshold where '*' can be: 'healthyhostcount', 'unhealthyhostcount'.                                                          |
| --critical-*       |   Critical threshold where '*' can be: 'healthyhostcount', 'unhealthyhostcount'.                                                         |

</TabItem>
<TabItem value="Backend-Status" label="Backend-Status">

| Option                     | Description                                                                                                                              |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-dimension         |   Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec                  |   Display the statistics based on a per-second period.                                                                                   |
| --resource                 |   Set resource name or ID (required).                                                                                                    |
| --resource-group           |   Set resource group (required if resource's name is used).                                                                              |
| --warning-response-status  |   Warning threshold.                                                                                                                     |
| --critical-response-status |   Critical threshold.                                                                                                                    |

</TabItem>
<TabItem value="Backend-Time" label="Backend-Time">

| Option             | Description                                                                                                                              |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-dimension |   Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec          |   Display the statistics based on a per-second period.                                                                                   |
| --resource         |   Set resource name or ID (required).                                                                                                    |
| --resource-group   |   Set resource group (required if resource's name is used).                                                                              |
| --warning-*        |   Warning threshold where '*' can be: 'connect-time', 'lastbyte-response-time', 'firstbyte-response-time'.                               |
| --critical-*       |   Critical threshold where '*' can be: 'connect-time', 'lastbyte-response-time', 'firstbyte-response-time'.                              |

</TabItem>
<TabItem value="Clients-Traffic" label="Clients-Traffic">

| Option             | Description                                                                                                                              |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-dimension |   Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec          |   Display the statistics based on a per-second period.                                                                                   |
| --resource         |   Set resource name or ID (required).                                                                                                    |
| --resource-group   |   Set resource group (required if resource's name is used).                                                                              |
| --warning-*        |   Warning threshold where '*' can be: 'clients-bytes-received', 'clients-bytes-sent'.                                                    |
| --critical-*       |   Critical threshold where '*' can be: 'clients-bytes-received', 'clients-bytes-sent'.                                                   |

</TabItem>
<TabItem value="Connections" label="Connections">

| Option                         | Description                                                                                                                              |
|:-------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-dimension             |   Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec                      |   Display the statistics based on a per-second period.                                                                                   |
| --resource                     |   Set resource name or ID (required).                                                                                                    |
| --resource-group               |   Set resource group (required if resource's name is used).                                                                              |
| --warning-current-connections  |   Warning threshold.                                                                                                                     |
| --critical-current-connections |   Critical threshold.                                                                                                                    |

</TabItem>
<TabItem value="Gateway-Time" label="Gateway-Time">

| Option                | Description                                                                                                                              |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-dimension    |   Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec             |   Display the statistics based on a per-second period.                                                                                   |
| --resource            |   Set resource name or ID (required).                                                                                                    |
| --resource-group      |   Set resource group (required if resource's name is used).                                                                              |
| --warning-total-time  |   Warning threshold.                                                                                                                     |
| --critical-total-time |   Critical threshold.                                                                                                                    |

</TabItem>
<TabItem value="Health" label="Health">

| Option               | Description                                                                                                                                                                  |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters    |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                  |
| --resource           |   Set resource name or ID (required).                                                                                                                                        |
| --resource-group     |   Set resource group (required if resource's name is used).                                                                                                                  |
| --resource-namespace |   Set resource namespace (required if resource's name is used).                                                                                                              |
| --resource-type      |   Set resource type (required if resource's name is used).                                                                                                                   |
| --warning-status     |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{summary\}                                  |
| --critical-status    |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /^Unavailable$/'). You can use the following variables: %\{status\}, %\{summary\}   |
| --unknown-status     |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /^Unknown$/'). You can use the following variables: %\{status\}, %\{summary\}        |
| --ok-status          |   Define the conditions to match for the status to be OK (default: '%\{status\} =~ /^Available$/'). You can use the following variables: %\{status\}, %\{summary\}           |

</TabItem>
<TabItem value="Requests" label="Requests">

| Option             | Description                                                                                                                              |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-dimension |   Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec          |   Display the statistics based on a per-second period.                                                                                   |
| --resource         |   Set resource name or ID (required).                                                                                                    |
| --resource-group   |   Set resource group (required if resource's name is used).                                                                              |
| --warning-*        |   Warning threshold where '*' can be: 'failed-requests', 'total-requests'.                                                               |
| --critical-*       |   Critical threshold where '*' can be: 'failed-requests', 'total-requests'.                                                              |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Option                | Description                                                                                                                              |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-dimension    |   Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec             |   Display the statistics based on a per-second period.                                                                                   |
| --resource            |   Set resource name or ID (required).                                                                                                    |
| --resource-group      |   Set resource group (required if resource's name is used).                                                                              |
| --warning-throughput  |   Warning threshold.                                                                                                                     |
| --critical-throughput |   Critical threshold.                                                                                                                    |

</TabItem>
<TabItem value="Units" label="Units">

| Option             | Description                                                                                                                              |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-dimension |   Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec          |   Display the statistics based on a per-second period.                                                                                   |
| --resource         |   Set resource name or ID (required).                                                                                                    |
| --resource-group   |   Set resource group (required if resource's name is used).                                                                              |
| --warning-*        |   Warning threshold where '*' can be: 'estimated-billed-units', 'fixed-billable-units', 'compute-units', 'capacity-units'.               |
| --critical-*       |   Critical threshold where '*' can be: 'estimated-billed-units', 'fixed-billable-units', 'compute-units', 'capacity-units'.              |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_network_appgateway_api.pl \
	--plugin=cloud::azure::network::appgateway::plugin \
	--mode=requests \
	--help
```
