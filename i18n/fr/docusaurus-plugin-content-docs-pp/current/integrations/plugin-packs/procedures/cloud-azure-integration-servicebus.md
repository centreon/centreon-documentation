---
id: cloud-azure-integration-servicebus
title: Azure ServiceBus
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Azure ServiceBus** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Azure ServiceBus** apporte un modèle d'hôte :

* **Cloud-Azure-Integration-ServiceBus-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Integration-ServiceBus-custom" label="Cloud-Azure-Integration-ServiceBus-custom">

| Alias       | Modèle de service                                         | Description                                                          |
|:------------|:----------------------------------------------------------|:---------------------------------------------------------------------|
| Connections | Cloud-Azure-Integration-ServiceBus-Connections-Api-custom | Contrôle les connexions aux espaces de nom Azure ServiceBus          |
| Messages    | Cloud-Azure-Integration-ServiceBus-Messages-Api-custom    | Contrôle les messages des espaces de nom Azure ServiceBus            |
| Namespaces  | Cloud-Azure-Integration-ServiceBus-Namespaces-Api-custom  | Contrôle les ressources allouées aux espaces de nom Azure ServiceBus |
| Requests    | Cloud-Azure-Integration-ServiceBus-Requests-Api-custom    | Contrôle les requêtes des espaces de nom Azure ServiceBus            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-Integration-ServiceBus-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

Le connecteur de supervision Centreon **Azure ServiceBus** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure ServiceBus**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée et de les ajouter à la liste des hôtes supervisés.

> Cette découverte n'est compatible qu'avec le [mode **api**. Le mode **azcli**](../getting-started/how-to-guides/azure-credential-configuration.md) n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la documentation dédiée pour en savoir plus sur la [découverte automatique d'hôtes](/docs/monitoring/discovery/hosts-discovery).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Nom                                           | Unité |
|:----------------------------------------------|:------|
| servicebus.namespace.connections.active.count | count |
| servicebus.namespace.connections.closed.count | count |
| servicebus.namespace.connections.opened.count | count |

</TabItem>
<TabItem value="Messages" label="Messages">

| Nom                                              | Unité |
|:-------------------------------------------------|:------|
| servicebus.namespace.messages.active.count       | count |
| servicebus.namespace.messages.deadlettered.count | count |
| servicebus.namespace.messages.incoming.count     | count |
| servicebus.namespace.messages.total.count        | count |
| servicebus.namespace.messages.outgoing.count     | count |
| servicebus.namespace.messages.scheduled.count    | count |

</TabItem>
<TabItem value="Namespaces" label="Namespaces">

| Nom                                          | Unité |
|:---------------------------------------------|:------|
| servicebus.namespace.cpu.usage.percentage    | %     |
| servicebus.namespace.memory.usage.percentage | %     |
| servicebus.namespace.incoming.bytes          | B     |
| servicebus.namespace.outgoing.bytes          | B     |

</TabItem>
<TabItem value="Requests" label="Requests">

| Nom                                            | Unité |
|:-----------------------------------------------|:------|
| servicebus.namespace.requests.incoming.count   | count |
| servicebus.namespace.requests.successful.count | count |
| servicebus.namespace.requests.throttled.count  | count |

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
dnf install centreon-pack-cloud-azure-integration-servicebus
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-integration-servicebus
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-azure-integration-servicebus
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-integration-servicebus
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Azure ServiceBus**
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
dnf install centreon-plugin-Cloud-Azure-Integration-ServiceBus-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Integration-ServiceBus-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-azure-integration-servicebus-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Integration-ServiceBus-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-Integration-ServiceBus-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'api.

<Tabs groupId="sync">
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Macro              | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                         | api               |             |
| AZURERESOURCE      | Set resource name or ID (required)                                                                                                                 |                   |             |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                           |                   |             |
| AZURESUBSCRIPTION  | Set Azure subscription ID                                                                                                                          |                   | X           |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                           |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Macro              | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID                                                                                                                                |                   | X           |
| AZURECLIENTSECRET  | Set Azure client secret                                                                                                                            |                   | X           |
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                         | api               |             |
| AZURERESOURCE      | Set resource name or ID (required)                                                                                                                 |                   |             |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                           |                   |             |
| AZURESUBSCRIPTION  | Set Azure subscription ID                                                                                                                          |                   | X           |
| AZURETENANT        | Set Azure tenant ID                                                                                                                                |                   | X           |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                           |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

> Paramétrez les options suivantes dans la macro EXTRAOPTIONS si vous supervisez des ressources Microsoft Azure gérées par 21Vianet (Azure China):
--management-endpoint='https://management.chinacloudapi.cn' --login-endpoint='https://login.partner.microsoftonline.cn'.

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
<TabItem value="Connections" label="Connections">

| Macro                     | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average           |             |
| FILTERMETRIC              | Filter metrics                                                                                                                                     |                   |             |
| FILTERDIMENSION           | Specify the metric dimension (required for some specific metrics) Syntax example: `--filter-dimension="$metricname eq '$metricvalue'"`             |                   |             |
| WARNINGACTIVECONNECTIONS  | Threshold                                                                                                                                          |                   |             |
| CRITICALACTIVECONNECTIONS | Threshold                                                                                                                                          |                   |             |
| WARNINGCLOSEDCONNECTIONS  | Threshold                                                                                                                                          |                   |             |
| CRITICALCLOSEDCONNECTIONS | Threshold                                                                                                                                          |                   |             |
| WARNINGOPENEDCONNECTIONS  | Threshold                                                                                                                                          |                   |             |
| CRITICALOPENEDCONNECTIONS | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   |                   |             |

</TabItem>
<TabItem value="Messages" label="Messages">

| Macro                        | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Average           |             |
| FILTERMETRIC                 | Filter metrics                                                                                                                                     |                   |             |
| FILTERDIMENSION              | Specify the metric dimension (required for some specific metrics) Syntax example: `--filter-dimension="$metricname eq '$metricvalue'"`             |                   |             |
| WARNINGACTIVEMESSAGES        | Threshold                                                                                                                                          |                   |             |
| CRITICALACTIVEMESSAGES       | Threshold                                                                                                                                          |                   |             |
| WARNINGDEADLETTEREDMESSAGES  | Threshold                                                                                                                                          |                   |             |
| CRITICALDEADLETTEREDMESSAGES | Threshold                                                                                                                                          |                   |             |
| WARNINGINCOMINGMESSAGES      | Threshold                                                                                                                                          |                   |             |
| CRITICALINCOMINGMESSAGES     | Threshold                                                                                                                                          |                   |             |
| WARNINGOUTGOINGMESSAGES      | Threshold                                                                                                                                          |                   |             |
| CRITICALOUTGOINGMESSAGES     | Threshold                                                                                                                                          |                   |             |
| WARNINGSCHEDULEDMESSAGES     | Threshold                                                                                                                                          |                   |             |
| CRITICALSCHEDULEDMESSAGES    | Threshold                                                                                                                                          |                   |             |
| WARNINGTOTALMESSAGES         | Threshold                                                                                                                                          |                   |             |
| CRITICALTOTALMESSAGES        | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   |                   |             |

</TabItem>
<TabItem value="Namespaces" label="Namespaces">

| Macro                         | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                     | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                      | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                   | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Maximum           |             |
| FILTERMETRIC                  | Filter metrics                                                                                                                                     |                   |             |
| FILTERDIMENSION               | Specify the metric dimension (required for some specific metrics) Syntax example: `--filter-dimension="$metricname eq '$metricvalue'"`             |                   |             |
| WARNINGCPUUSAGEPERCENTAGE     | Threshold                                                                                                                                          |                   |             |
| CRITICALCPUUSAGEPERCENTAGE    | Threshold                                                                                                                                          |                   |             |
| WARNINGMEMORYUSAGEPERCENTAGE  | Threshold                                                                                                                                          |                   |             |
| CRITICALMEMORYUSAGEPERCENTAGE | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   |                   |             |

</TabItem>
<TabItem value="Requests" label="Requests">

| Macro                      | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                  | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                   | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | Total             |             |
| FILTERMETRIC               | Filter metrics                                                                                                                                     |                   |             |
| FILTERDIMENSION            | Specify the metric dimension (required for some specific metrics) Syntax example: `--filter-dimension="$metricname eq '$metricvalue'"`             |                   |             |
| WARNINGINCOMINGREQUESTS    | Threshold                                                                                                                                          |                   |             |
| CRITICALINCOMINGREQUESTS   | Threshold                                                                                                                                          |                   |             |
| WARNINGSUCCESSFULREQUESTS  | Threshold                                                                                                                                          |                   |             |
| CRITICALSUCCESSFULREQUESTS | Threshold                                                                                                                                          |                   |             |
| WARNINGTHROTTLEDREQUESTS   | Threshold                                                                                                                                          |                   |             |
| CRITICALTHROTTLEDREQUESTS  | Threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   |                   |             |

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
/usr/lib/centreon/plugins/centreon_azure_integration_servicebus_api.pl \
	--plugin=cloud::azure::integration::servicebus::plugin \
	--mode=requests \
	--custommode='api' \
	--resource='resource' \
	--resource-group='resource-group' \
	--subscription='subscription' \
	--tenant='tenant' \
	--client-id='client-id' \
	--client-secret='client-secret' \
	--proxyurl=''  \
	--filter-metric='' \
	--filter-dimension='' \
	--timeframe='900' \
	--interval='PT5M' \
	--aggregation='maximum' \
	--warning-incoming-requests='' \
	--critical-incoming-requests='' \
	--warning-throttled-requests='' \
	--critical-throttled-requests='' \
	--warning-successful-requests='' \
	--critical-successful-requests='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Instance 'resource' Statistic 'maximum' Metrics Incoming Requests: 1227.00, Successful Requests: 1221.00 Throttled Requests: 6.00 |
'SVC001ABCD~maximum#servicebus.namespace.requests.incoming.count'=1221;;;0; 'SVC001ABCD~maximum#servicebus.namespace.requests.successful.count'=1221;;;0;
'SVC001ABCD~maximum#servicebus.namespace.requests.throttled.count'=6;800;900;0;
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
/usr/lib/centreon/plugins/centreon_azure_integration_servicebus_api.pl \
	--plugin=cloud::azure::integration::servicebus::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                       | Modèle de service associé                                 |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/integration/servicebus/mode/connections.pm)] | Cloud-Azure-Integration-ServiceBus-Connections-Api-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/integration/servicebus/mode/discovery.pm)]     | Utilisé pour la découverte d'hôtes                        |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/integration/servicebus/mode/health.pm)]           | Non utilisé dans ce connecteur de supervision             |
| messages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/integration/servicebus/mode/messages.pm)]       | Cloud-Azure-Integration-ServiceBus-Messages-Api-custom    |
| namespaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/integration/servicebus/mode/namespaces.pm)]   | Cloud-Azure-Integration-ServiceBus-Namespaces-Api-custom  |
| requests [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/integration/servicebus/mode/requests.pm)]       | Cloud-Azure-Integration-ServiceBus-Requests-Api-custom    |

### Custom modes disponibles

Ce connecteur offre plusieurs méthodes pour se connecter à la ressource (CLI, bibliothèque, etc.), appelées **custom modes**.
Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_integration_servicebus_api.pl \
	--plugin=cloud::azure::integration::servicebus::plugin \
	--list-custommode
```

Le plugin apporte les custom modes suivants :

* azcli
* api

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
| --filter-dimension                         | Specify the metric dimension (required for some specific metrics) Syntax example: `--filter-dimension="$metricname eq '$metricvalue'"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --per-sec                                  | Display the statistics based on a per-second period.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des custom modes

Les options spécifiques aux **custom modes** sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="azcli" label="azcli">

| Option            | Description                                                                                                                                         |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --subscription    | Set Azure subscription (required if logged to several subscriptions).                                                                               |
| --timeframe       | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                            |
| --interval        | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                     |
| --aggregation     | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times. |
| --zeroed          | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                 |
| --timeout         | Set timeout in seconds (default: 50).                                                                                                               |
| --sudo            | Use 'sudo' to execute the command.                                                                                                                  |
| --command         | Command to get information (default: 'az'). Can be changed if you have output in a file.                                                            |
| --command-path    | Command path (default: none).                                                                                                                       |
| --command-options | Command options (default: none).                                                                                                                    |
| --proxyurl        | Proxy URL if any                                                                                                                                    |
</TabItem>
<TabItem value="api" label="api">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr       | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                         |
| --proxyurl             | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                    |
| --proxypac             | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                              |
| --insecure             | Accept insecure SSL connections.                                                                                                                                                                                                            |
| --http-backend         | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                     |
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
| --subscription         | Set Azure subscription ID.                                                                                                                                                                                                                  |
| --tenant               | Set Azure tenant ID.                                                                                                                                                                                                                        |
| --client-id            | Set Azure client ID.                                                                                                                                                                                                                        |
| --client-secret        | Set Azure client secret.                                                                                                                                                                                                                    |
| --login-endpoint       | Set Azure login endpoint URL (default: 'https://login.microsoftonline.com')                                                                                                                                                                 |
| --management-endpoint  | Set Azure management endpoint URL (default: 'https://management.azure.com')                                                                                                                                                                 |
| --timeframe            | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                    |
| --interval             | Set interval of the metric query (can be : `PT1M`, `PT5M`, `PT15M`, `PT30M`, `PT1H`, `PT6H`, `PT12H`, `PT24H`).                                                                                                                             |
| --aggregation          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                         |
| --zeroed               | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                         |
| --timeout              | Set timeout in seconds (default: 10).                                                                                                                                                                                                       |
</TabItem>
</Tabs>

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Option            | Description                                                                                                               |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --resource        | Set resource name or ID (required).                                                                                       |
| --resource-group  | Set resource group (required if resource's name is used).                                                                 |
| --warning-*       | Warning threshold where '*' can be: 'closed-connections', 'active-connections', 'opened-connections'.                     |
| --critical-*      | Critical threshold where '*' can be: 'closed-connections', 'active-connections', 'opened-connections'.                    |

</TabItem>
<TabItem value="Messages" label="Messages">

| Option           | Description                                                                                                                                                        |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                                                                                                                |
| --resource-group | Set resource group (required if resource's name is used).                                                                                                          |
| --warning-*      | Warning threshold where '*' can be: 'active-messages', 'deadlettered-messages', 'total-messages', 'incoming-messages', 'outgoing-messages', 'scheduled-messages'.  |
| --critical-*     | Critical threshold where '*' can be: 'active-messages', 'deadlettered-messages', 'total-messages', 'incoming-messages', 'outgoing-messages', 'scheduled-messages'. |

</TabItem>
<TabItem value="Namespaces" label="Namespaces">

| Option                 | Description                                                                                                                 |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------|
| --resource             | Set the resource name or ID (required).                                                                                     |
| --resource-group       | Set the resource group (required if the resource name is used).                                                             |
| --skip-premium-metrics | Skip Azure Service Bus premium tier metrics.                                                                                |
| --warning-*            | Warning threshold where '*' can be: 'cpu-usage-percentage', 'memory-usage-percentage', 'incoming-bytes', 'outgoing-bytes'.  |
| --critical-*           | Critical threshold where '*' can be: 'cpu-usage-percentage', 'memory-usage-percentage', 'incoming-bytes', 'outgoing-bytes'. |

</TabItem>
<TabItem value="Requests" label="Requests">

| Option           | Description                                                                                            |
|:-----------------|:-------------------------------------------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                                                    |
| --resource-group | Set resource group (required if resource's name is used).                                              |
| --warning-*      | Warning threshold where '*' can be: 'incoming-requests', 'throttled-requests', 'successful-requests'.  |
| --critical-*     | Critical threshold where '*' can be: 'incoming-requests', 'throttled-requests', 'successful-requests'. |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_integration_servicebus_api.pl \
	--plugin=cloud::azure::integration::servicebus::plugin \
	--mode=requests \
	--help
```
