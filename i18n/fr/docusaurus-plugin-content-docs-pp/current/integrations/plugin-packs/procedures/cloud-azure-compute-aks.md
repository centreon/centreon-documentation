---
id: cloud-azure-compute-aks
title: Azure Kubernetes Service
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Azure Kubernetes Service (AKS) simplifie le déploiement d’un cluster Kubernetes managé en déléguant la charge opérationnelle à Azure. En tant que service Kubernetes hébergé, Azure gère des tâches critiques telles que l’analyse de l’intégrité et la maintenance.

Le connecteur de supervision Centreon *Azure Kubernetes Service* peut s'appuyer sur l'API d'Azure ou bien Azure CLI pour collecter les métriques relatives à AKS.

## Contenu du pack

### Modèles

Le connecteur de supervision **Azure Kubernetes Service** apporte un modèle d'hôte :

* **Cloud-Azure-Compute-Aks-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Compute-Aks-custom" label="Cloud-Azure-Compute-Aks-custom">

| Alias                 | Modèle de service                                        | Description                                                                     |
|:----------------------|:---------------------------------------------------------|:--------------------------------------------------------------------------------|
| Allocatable-resources | Cloud-Azure-Compute-Aks-Allocatable-Resources-Api-custom | Contrôle de la mémoire et des coeurs CPU allouables restants sur le Cluster AKS |
| Cpu-Usage             | Cloud-Azure-Compute-Aks-Cpu-Usage-Api-custom             | Contrôle le CPU du cluster AKS                                                  |
| Health                | Cloud-Azure-Compute-Aks-Health-Api-custom                | Contrôle le statut du cluster AKS                                               |
| Memory                | Cloud-Azure-Compute-Aks-Memory-Api-custom                | Contrôle le taux d'utilisation mémoire du cluster AKS                           |
| Node-State            | Cloud-Azure-Compute-Aks-Node-State-Api-custom            | Contrôle l'état des noeuds du cluster AKS                                       |
| Pod-State             | Cloud-Azure-Compute-Aks-Pod-State-Api-custom             | Contrôle l'état des Pods du cluster AKS                                         |
| Storage               | Cloud-Azure-Compute-Aks-Storage-Api-custom               | Contrôle les statistiques de stockage du cluster AKS                            |
| Traffic               | Cloud-Azure-Compute-Aks-Traffic-Api-custom               | Contrôle l'utilisation du réseau du cluster AKS                                 |
| Unneeded-nodes        | Cloud-Azure-Compute-Aks-Unneeded-Nodes-Api-custom        | Contrôle du nombre de noeuds inutiles sur le cluster AKS                        |
| Unschedulable-Pods    | Cloud-Azure-Compute-Aks-Unschedulable-Pods-Api-custom    | Contrôle la présence de Pods non déployables du cluster AKS                     |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-Compute-Aks-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

Le connecteur de supervision Centreon **Azure Kubernetes Service** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure Kubernetes Service**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée et de les ajouter à la liste des hôtes supervisés.

> Cette découverte n'est compatible qu'avec le [mode **api**. Le mode **azcli**](../getting-started/how-to-guides/azure-credential-configuration.md) n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la documentation dédiée pour en savoir plus sur la [découverte automatique d'hôtes](/docs/monitoring/discovery/hosts-discovery).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Allocatable-resources" label="Allocatable-resources">

| Métrique                          | Unité |
|:----------------------------------|:------|
| aks.node.allocatable.cpu.cores    | N/A   |
| aks.node.allocatable.memory.bytes | B     |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Métrique                            | Unité |
|:------------------------------------|:------|
| aks.node.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Health" label="Health">

| Métrique    | Unité |
|:------------|:------|
| status      | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| aks.node.memory.rss.bytes              | B     |
| aks.node.memory.rss.percentage         | %     |
| aks.node.memory.working.set.bytes      | B     |
| aks.node.memory.working.set.percentage | %     |

</TabItem>
<TabItem value="Node-State" label="Node-State">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| aks.kube.node.status.condition.count | count |

</TabItem>
<TabItem value="Pod-State" label="Pod-State">

| Métrique                        | Unité |
|:--------------------------------|:------|
| aks.kube.pod.status.ready.count | count |
| aks.kube.pod.status.phase.count | count |

</TabItem>
<TabItem value="Storage" label="Storage">

| Métrique                       | Unité |
|:-------------------------------|:------|
| aks.node.disk.usage.bytes      | B     |
| aks.node.disk.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Métrique                   | Unité |
|:---------------------------|:------|
| aks.node.traffic.out.bytes | B     |
| aks.node.traffic.in.bytes  | B     |

</TabItem>
<TabItem value="Unneeded-nodes" label="Unneeded-nodes">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| aks.cluster.autoscaler.unneeded.nodes | N/A   |

</TabItem>
<TabItem value="Unschedulable-Pods" label="Unschedulable-Pods">

| Métrique                                        | Unité |
|:------------------------------------------------|:------|
| aks.cluster.autoscaler.unschedulable.pods.count | count |

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
dnf install centreon-pack-cloud-azure-compute-aks
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-compute-aks
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-azure-compute-aks
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-compute-aks
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Azure Kubernetes Service**
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
dnf install centreon-plugin-Cloud-Azure-Compute-Aks-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Compute-Aks-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-azure-compute-aks-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Compute-Aks-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-Compute-Aks-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
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
<TabItem value="Allocatable-resources" label="Allocatable-resources">

| Macro                       | Description                                                                                                                                                          | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                                              | 900               |             |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                                       | PT5M              |             |
| FILTERMETRIC                | Filter metrics (available metrics: 'Allocatable CPU Cores', 'Allocatable Memory Bytes') (can be a regexp).           |                   |             |
| WARNINGALLOCATABLECPUCORES  | Set warning threshold for number of remaining allocatable CPU Cores. It is a range, set 10: to get WARNING if there are less than 10 CPU cores allocatable remaining |                   |             |
| CRITICALALLOCATABLECPUCORES | Set critical threshold for number of remaining allocatable CPU Cores. It is a range, set 5: to get CRITICAL if there are less than 5 CPU cores allocatable remaining |                   |             |
| WARNINGALLOCATABLEMEMORY    | Set warning threshold for remaining allocatable memory in bytes. It is a range, set 16GB: to get WARNING if there are less than 16GB allocatable left                |                   |             |
| CRITICALALLOCATABLEMEMORY   | Set critical threshold for remaining allocatable memory in bytes. It is a range, set 8GB: to get CRITICAL if there are less than 8GB allocatable left                |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                   |                   |             |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME        | Set timeframe in seconds (i.e. 3600 to check last hour).                                           | 900               |             |
| INTERVAL         | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).    | PT5M              |             |
| FILTERMETRIC     | Filter metrics (available metrics: 'CPU percent') (can be a regexp).           |                   |             |
| WARNINGCPUUSAGE  | Set warning threshold for CPU utilization percentage                                               |                   |             |
| CRITICALCPUUSAGE | Set critical threshold for CPU utilization percentage                                              |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Health" label="Health">

| Macro          | Description                                                                                                                                                         | Valeur par défaut            | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| STATUSOK       | Define the conditions to match for the status to be OK (default: '%\{status\} =~ /^Available$/').  You can use the following variables: %\{status\}, %\{summary\}         | %\{status\} =~ /^Available$/   |             |
| STATUSUNKNOWN  | Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /^Unknown$/').  You can use the following variables: %\{status\}, %\{summary\}      | %\{status\} =~ /^Unknown$/     |             |
| STATUSCRITICAL | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /^Unavailable$/').  You can use the following variables: %\{status\}, %\{summary\} | %\{status\} =~ /^Unavailable$/ |             |
| STATUSWARNING  | Define the conditions to match for the status to be WARNING (default: '').  You can use the following variables: %\{status\}, %\{summary\}                              |                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                  |                              |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                    | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGMEMORYPERCENT     | Warning threshold in percent.                                                                       |                   |             |
| CRITICALMEMORYPERCENT    | Critical threshold in percent.                                                                      |                   |             |
| WARNINGMEMORYRSSPERCENT  | Warning threshold in percent.                                                        |                   |             |
| CRITICALMEMORYRSSPERCENT | Critical threshold in percent.                                                                |                   |             |
| WARNINGMEMORYRSSUSAGE    | Warning threshold in Bytes.                                                         |                   |             |
| CRITICALMEMORYRSSUSAGE   | Critical threshold in Bytes.                                                          |                   |             |
| WARNINGMEMORYUSAGE       | Warning threshold in Bytes.                                                                         |                   |             |
| CRITICALMEMORYUSAGE      | Critical threshold in Bytes                                                                        |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Node-State" label="Node-State">

| Macro                      | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGNODESTATECONDITION  | Set warning threshold for number of condition nodes                                                |                   |             |
| CRITICALNODESTATECONDITION | Set critical threshold for number of condition nodes                                               |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Pod-State" label="Pod-State">

| Macro                 | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPODSTATEPHASE  | Set warning threshold for number of Pods State Phase                                               |                   |             |
| CRITICALPODSTATEPHASE | Set critical threshold for number of Pods State Phase                                              |                   |             |
| WARNINGPODSTATEREADY  | Set warning threshold for number of Pods State Ready                                               |                   |             |
| CRITICALPODSTATEREADY | Set critical threshold for number of Pods State Ready                                              |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour).                                           | 900               |             |
| INTERVAL               | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).    | PT5M              |             |
| FILTERMETRIC           | Filter metrics (available metrics: 'Storage Used', 'Storage Percent') (can be a regexp).           |                   |             |
| WARNINGSTORAGEPERCENT  | Warning threshold in percent                                                                       |                   |             |
| CRITICALSTORAGEPERCENT | Critical threshold in percent                                                                      |                   |             |
| WARNINGSTORAGEUSED     | Warning threshold in Bytes                                                                         |                   |             |
| CRITICALSTORAGEUSED    | Critical threshold in Bytes                                                                        |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Macro              | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME          | Set timeframe in seconds (i.e. 3600 to check last hour).                                           | 900               |             |
| INTERVAL           | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).   | PT5M              |             |
| FILTERMETRIC       | Filter metrics (available metrics: 'Network In', 'Network Out') (can be a regexp).                             |                   |             |
| WARNINGTRAFFICIN   | Warning threshold where '*'                                                                        |                   |             |
| CRITICALTRAFFICIN  | Critical threshold where '*'                                                                       |                   |             |
| WARNINGTRAFFICOUT  | Warning threshold where '*'                                                                        |                   |             |
| CRITICALTRAFFICOUT | Critical threshold where '*'                                                                       |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Unneeded-nodes" label="Unneeded-nodes">

| Macro                 | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour).                                           | 900               |             |
| INTERVAL               | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).    | PT5M              |             |
| FILTERMETRIC           | Filter metrics (available metrics: 'Cluster Autoscaler Unneeded Nodes') (can be a regexp).           |                   |             |
| WARNINGUNNEEDEDNODES  | Set warning threshold for number of unneeded nodes                                                 |                   |             |
| CRITICALUNNEEDEDNODES | Set critical threshold for number of unneeded nodes                                                |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Unschedulable-Pods" label="Unschedulable-Pods">

| Macro                     | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUNSCHEDULABLEPODS  | Set warning threshold for number of unschedulable pods                                             |                   |             |
| CRITICALUNSCHEDULABLEPODS | Set critical threshold for number of unschedulable pods                                            |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_azure_compute_aks_api.pl \
	--plugin=cloud::azure::compute::aks::plugin \
	--mode=unschedulable-pods \
	--custommode='api' \
	--resource='' \
	--resource-group='' \
	--subscription='' \
	--tenant='' \
	--client-id='' \
	--client-secret='' \
	--proxyurl=''  \
	--warning-unschedulable-pods='' \
	--critical-unschedulable-pods='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Cluster Autoscaler Unschedulable Pods: 8 | 'aks.cluster.autoscaler.unschedulable.pods.count'=8;;;0;
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
/usr/lib/centreon/plugins/centreon_azure_compute_aks_api.pl \
	--plugin=cloud::azure::compute::aks::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                               | Modèle de service associé                                |
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|
| allocatable-resources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/allocatableresources.pm)] | Cloud-Azure-Compute-Aks-Allocatable-Resources-Api-custom |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/cpu.pm)]                                    | Cloud-Azure-Compute-Aks-Cpu-Usage-Api-custom             |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/discovery.pm)]                        | Used for host discovery                                  |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/health.pm)]                              | Cloud-Azure-Compute-Aks-Health-Api-custom                |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/memory.pm)]                              | Cloud-Azure-Compute-Aks-Memory-Api-custom                |
| node-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/nodestate.pm)]                       | Cloud-Azure-Compute-Aks-Node-State-Api-custom            |
| pod-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/podstate.pm)]                         | Cloud-Azure-Compute-Aks-Pod-State-Api-custom             |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/storage.pm)]                            | Cloud-Azure-Compute-Aks-Storage-Api-custom               |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/traffic.pm)]                            | Cloud-Azure-Compute-Aks-Traffic-Api-custom               |
| unneeded-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/unneedednodes.pm)]               | Cloud-Azure-Compute-Aks-Unneeded-Nodes-Api-custom        |
| unschedulable-pods [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/aks/mode/unschedulablepods.pm)]       | Cloud-Azure-Compute-Aks-Unschedulable-Pods-Api-custom    |

### Custom modes disponibles

Ce connecteur offre plusieurs méthodes pour se connecter à la ressource (CLI, bibliothèque, etc.), appelées **custom modes**.
Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_aks_api.pl \
	--plugin=cloud::azure::compute::aks::plugin \
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
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
<TabItem value="Allocatable-resources" label="Allocatable-resources">

| Option                              | Description                                                                                                                                                              |
|:------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                          | Set resource name or ID (required).                                                                                                                                      |
| --resource-group                    | Set resource group (required if resource's name is used).                                                                                                                |
| --warning-allocatable-memory-bytes  | Set warning threshold for remaining allocatable memory in bytes. It is a range, set 16GB: to get WARNING if there are less than 16GB allocatable left.                   |
| --critical-allocatable-memory-bytes | Set critical threshold for remaining allocatable memory in bytes. It is a range, set 8GB: to get CRITICAL if there are less than 8GB allocatable left.                   |
| --warning-allocatable-cpu-cores     | Set warning threshold for number of remaining allocatable CPU Cores. It is a range, set 10: to get WARNING if there are less than 10 CPU cores allocatable remaining.    |
| --critical-allocatable-cpu-cores    | Set critical threshold for number of remaining allocatable CPU Cores. It is a range, set 5: to get CRITICAL if there are less than 5 CPU cores allocatable remaining.    |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Option               | Description                                                 |
|:---------------------|:------------------------------------------------------------|
| --resource           | Set resource name or ID (required).                         |
| --resource-group     | Set resource group (required if resource's name is used).   |
| --warning-cpu-usage  | Set warning threshold for CPU utilization percentage.       |
| --critical-cpu-usage | Set critical threshold for CPU utilization percentage.      |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                                                           |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource        | Set resource name or ID (required).                                                                                                                                   |
| --resource-group  | Set resource group (required if resource's name is used).                                                                                                             |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '').  You can use the following variables: %\{status\}, %\{summary\}                                |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /^Unavailable$/').  You can use the following variables: %\{status\}, %\{summary\}   |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /^Unknown$/').  You can use the following variables: %\{status\}, %\{summary\}        |
| --ok-status       | Define the conditions to match for the status to be OK (default: '%\{status\} =~ /^Available$/').  You can use the following variables: %\{status\}, %\{summary\}           |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                        | Description                                                 |
|:------------------------------|:------------------------------------------------------------|
| --resource                    | Set resource name or ID (required).                         |
| --resource-group              | Set resource group (required if resource's name is used).   |
| --warning-memory-usage        | Warning threshold in Bytes.                                 |
| --critical-memory-usage       | Critical threshold in Bytes.                                |
| --warning-memory-percent      | Warning threshold in percent.                               |
| --critical-memory-percent     | Critical threshold in percent.                              |
| --warning-rss-memory-usage    | Warning threshold in Bytes.                                 |
| --critical-rss-memory-usage   | Critical threshold in Bytes.                                |
| --warning-rss-memory-percent  | Warning threshold in percent.                               |
| --critical-rss-memory-percent | Critical threshold in percent.                              |

</TabItem>
<TabItem value="Node-State" label="Node-State">

| Option                          | Description                                                 |
|:--------------------------------|:------------------------------------------------------------|
| --resource                      | Set resource name or ID (required).                         |
| --resource-group                | Set resource group (required if resource's name is used).   |
| --warning-node-state-condition  | Set warning threshold for number of condition nodes.        |
| --critical-node-state-condition | Set critical threshold for number of condition nodes.       |

</TabItem>
<TabItem value="Pod-State" label="Pod-State">

| Option                     | Description                                                 |
|:---------------------------|:------------------------------------------------------------|
| --resource                 | Set resource name or ID (required).                         |
| --resource-group           | Set resource group (required if resource's name is used).   |
| --warning-pod-state-ready  | Set warning threshold for number of Pods State Ready.       |
| --critical-pod-state-ready | Set critical threshold for number of Pods State Ready.      |
| --warning-pod-state-phase  | Set warning threshold for number of Pods State Phase.       |
| --critical-pod-state-phase | Set critical threshold for number of Pods State Phase.      |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                     | Description                                                 |
|:---------------------------|:------------------------------------------------------------|
| --resource                 | Set resource name or ID (required).                         |
| --resource-group           | Set resource group (required if resource's name is used).   |
| --warning-storage-used     | Warning threshold in Bytes.                                 |
| --critical-storage-used    | Critical threshold in Bytes.                                |
| --warning-storage-percent  | Warning threshold in percent.                               |
| --critical-storage-percent | Critical threshold in percent.                              |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Option           | Description                                                          |
|:-----------------|:---------------------------------------------------------------------|
| --resource       | Set resource name or ID (required).                                  |
| --resource-group | Set resource group (required if resource's name is used).            |
| --warning-*      | Warning threshold where '*' can be: 'traffic-out', 'traffic-in'.     |
| --critical-*     | Critical threshold where '*' can be: 'traffic-out', 'traffic-in'.    |

</TabItem>
<TabItem value="Unneeded-nodes" label="Unneeded-nodes">

| Option                    | Description                                                 |
|:--------------------------|:------------------------------------------------------------|
| --resource                | Set resource name or ID (required).                         |
| --resource-group          | Set resource group (required if resource's name is used).   |
| --warning-unneeded-nodes  | Set warning threshold for number of unneeded nodes.         |
| --critical-unneeded-nodes | Set critical threshold for number of unneeded nodes.        |

</TabItem>
<TabItem value="Unschedulable-Pods" label="Unschedulable-Pods">

| Option                        | Description                                                 |
|:------------------------------|:------------------------------------------------------------|
| --resource                    | Set resource name or ID (required).                         |
| --resource-group              | Set resource group (required if resource's name is used).   |
| --warning-unschedulable-pods  | Set warning threshold for number of unschedulable pods.     |
| --critical-unschedulable-pods | Set critical threshold for number of unschedulable pods.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_aks_api.pl \
	--plugin=cloud::azure::compute::aks::plugin \
	--mode=unschedulable-pods \
	--custommode='azcli' \
	--help
```
