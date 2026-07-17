---
id: cloud-azure-classicstorage-storageaccount
title: Azure Classic Storage
description: Supervisez les comptes de stockage Azure Classic Storage via l'API REST ou Azure CLI : capacité, transactions, latence et disponibilité.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Azure Classic Storage** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Azure Classic Storage** apporte 5 modèles d'hôte :

* **Cloud-Azure-ClassicStorage-StorageAccount-Account-custom**
* **Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom**
* **Cloud-Azure-ClassicStorage-StorageAccount-File-custom**
* **Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom**
* **Cloud-Azure-ClassicStorage-StorageAccount-Table-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Account-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Account-custom">

| Alias                             | Modèle de service                                                                      | Description                                                                        |
|:----------------------------------|:---------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------|
| Account-Transactions-Availability | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Availability-Api-custom | Contrôle le taux de disponibilité du stockage                                      |
| Account-Transactions-Count        | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Count-Api-custom        | Contrôle le nombre de transactions sur le stockage                                 |
| Account-Transactions-Latency      | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Latency-Api-custom      | Contrôle la latence et le temps de traitement des requêtes réussies sur le stockage |
| Account-Transactions-Throughput   | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Throughput-Api-custom   | Contrôle le volume de données entrantes et sortantes sur le stockage                   |
| Account-Used-Capacity             | Cloud-Azure-ClassicStorage-StorageAccount-Account-Used-Capacity-Api-custom             | Contrôle le volume utilisé sur le stockage                                         |
| Health                            | Cloud-Azure-ClassicStorage-StorageAccount-Health-Api-custom                            | Contrôle le statut de l'instance de stockage                                       |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-ClassicStorage-StorageAccount-Account-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom">

| Alias                          | Modèle de service                                                                   | Description                                                                        |
|:-------------------------------|:------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------|
| Blob-Capacity                  | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Capacity-Api-custom                  | Contrôle les volumes de type Blob utilisé sur le stockage                            |
| Blob-Container-Count           | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Container-Count-Api-custom           | Contrôle le nombre de containers Blob sur le stockage                               |
| Blob-Count                     | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Count-Api-custom                     | Contrôle le nombre d'objets sur le stockage                                        |
| Blob-Transactions-Availability | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Availability-Api-custom | Contrôle le taux de disponibilité du stockage                                      |
| Blob-Transactions-Count        | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Count-Api-custom        | Contrôle le nombre de transactions sur le stockage                                 |
| Blob-Transactions-Latency      | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Latency-Api-custom      | Contrôle la latence et le temps de traitement des requêtes réussies sur le stockage |
| Blob-Transactions-Throughput   | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Throughput-Api-custom   | Contrôle le volume de données entrantes et sortantes sur le stockage                   |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-File-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-File-custom">

| Alias                          | Modèle de service                                                                   | Description                                                                        | Découverte |
|:-------------------------------|:------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------|:----------:|
| File-Capacity                  | Cloud-Azure-ClassicStorage-StorageAccount-File-Capacity-Api-custom                  | Contrôle les volumes de type File utilisé sur le stockage                            |            |
| File-Count                     | Cloud-Azure-ClassicStorage-StorageAccount-File-Count-Api-custom                     | Contrôle le nombre de fichiers sur le stockage                                     |            |
| File-Share-Count               | Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Count-Api-custom               | Contrôle le nombre de partage sur le stockage                                      |            |
| File-Share-Quota               | Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Quota-Api-custom               | Contrôle le nombre de partages sur le stockage                                      | X          |
| File-Transactions-Availability | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Availability-Api-custom | Contrôle le taux de disponibilité du stockage                                      |            |
| File-Transactions-Count        | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Count-Api-custom        | Contrôle le nombre de transactions sur le stockage                                 |            |
| File-Transactions-Latency      | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Latency-Api-custom      | Contrôle la latence et le temps de traitement des requêtes réussies sur le stockage |            |
| File-Transactions-Throughput   | Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Throughput-Api-custom   | Contrôle le volume de données entrantes et sortantes sur le stockage                   |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-ClassicStorage-StorageAccount-File-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom">

| Alias                           | Modèle de service                                                                    | Description                                                                        |
|:--------------------------------|:-------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------|
| Queue-Capacity                  | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Capacity-Api-custom                  | Contrôle les volumes de type Queue utilisé sur le stockage                           |
| Queue-Count                     | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Count-Api-custom                     | Contrôle le nombre de files d'attente sur le stockage                               |
| Queue-Message-Count             | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Message-Count-Api-custom             | Contrôle le nombre de messages dans la file d'attente sur le stockage               |
| Queue-Transactions-Availability | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Availability-Api-custom | Contrôle le taux de disponibilité du stockage                                      |
| Queue-Transactions-Count        | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Count-Api-custom        | Contrôle le nombre de transactions sur le stockage                                 |
| Queue-Transactions-Latency      | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Latency-Api-custom      | Contrôle la latence et le temps de traitement des requêtes réussies sur le stockage |
| Queue-Transactions-Throughput   | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Throughput-Api-custom   | Contrôle le volume de données entrantes et sortantes sur le stockage                   |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Table-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Table-custom">

| Alias                           | Modèle de service                                                                    | Description                                                                        |
|:--------------------------------|:-------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------|
| Table-Capacity                  | Cloud-Azure-ClassicStorage-StorageAccount-Table-Capacity-Api-custom                  | Contrôle les volumes de type Table utilisé sur le stockage                           |
| Table-Count                     | Cloud-Azure-ClassicStorage-StorageAccount-Table-Count-Api-custom                     | Contrôle le nombre de tables sur le stockage                                        |
| Table-Entity-Count              | Cloud-Azure-ClassicStorage-StorageAccount-Table-Entity-Count-Api-custom              | Contrôle le nombre d'entrées dans les tables sur le stockage                        |
| Table-Transactions-Availability | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Availability-Api-custom | Contrôle le taux de disponibilité du stockage                                      |
| Table-Transactions-Count        | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Count-Api-custom        | Contrôle le nombre de transactions sur le stockage                                 |
| Table-Transactions-Latency      | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Latency-Api-custom      | Contrôle la latence et le temps de traitement des requêtes réussies sur le stockage |
| Table-Transactions-Throughput   | Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Throughput-Api-custom   | Contrôle le volume de données entrantes et sortantes sur le stockage                   |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-ClassicStorage-StorageAccount-Table-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

Le connecteur de supervision Centreon **Azure Classic Storage** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure Classic Storage Account**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée et de les ajouter à la liste des hôtes supervisés.

> Cette découverte n'est compatible qu'avec le [mode **api**. Le mode **azcli**](../getting-started/how-to-guides/azure-credential-configuration.md) n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la documentation dédiée pour en savoir plus sur la [découverte automatique d'hôtes](/docs/monitoring/discovery/hosts-discovery).

#### Découverte de services

| Nom de la règle                                                | Description                                                                         |
|:---------------------------------------------------------------|:------------------------------------------------------------------------------------|
| Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Quota-Api | Découvre les partitions du disque en utilisant son nom et supervise l'espace occupé |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Account-Transactions-Availability" label="Account-Transactions-Availability">

| Métrique           | Unité |
|:-------------------|:------|
| usedcapacity_total | B     |

</TabItem>
<TabItem value="Account-Transactions-Count" label="Account-Transactions-Count">

| Métrique           | Unité |
|:-------------------|:------|
| transactions_total | B     |

</TabItem>
<TabItem value="Account-Transactions-Latency" label="Account-Transactions-Latency">

| Métrique                     | Unité |
|:-----------------------------|:------|
| successserverlatency_average | ms    |
| successe2elatency_average    | ms    |

</TabItem>
<TabItem value="Account-Transactions-Throughput" label="Account-Transactions-Throughput">

| Métrique      | Unité |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

</TabItem>
<TabItem value="Account-Used-Capacity" label="Account-Used-Capacity">

| Métrique           | Unité |
|:-------------------|:------|
| usedcapacity_total | B     |

</TabItem>
<TabItem value="Blob-Capacity" label="Blob-Capacity">

| Métrique           | Unité |
|:-------------------|:------|
| blobcapacity_total | B     |

</TabItem>
<TabItem value="Blob-Container-Count" label="Blob-Container-Count">

| Métrique               | Unité |
|:-----------------------|:------|
| containercount_average | count |

</TabItem>
<TabItem value="Blob-Count" label="Blob-Count">

| Métrique        | Unité |
|:----------------|:------|
| blobcount_total | count |

</TabItem>
<TabItem value="Blob-Transactions-Availability" label="Blob-Transactions-Availability">

| Métrique             | Unité |
|:---------------------|:------|
| availability_average | %     |

</TabItem>
<TabItem value="Blob-Transactions-Count" label="Blob-Transactions-Count">

| Métrique           | Unité |
|:-------------------|:------|
| transactions_total | B     |

</TabItem>
<TabItem value="Blob-Transactions-Latency" label="Blob-Transactions-Latency">

| Métrique                     | Unité |
|:-----------------------------|:------|
| successserverlatency_average | ms    |
| successe2elatency_average    | ms    |

</TabItem>
<TabItem value="Blob-Transactions-Throughput" label="Blob-Transactions-Throughput">

| Métrique      | Unité |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

</TabItem>
<TabItem value="File-Capacity" label="File-Capacity">

| Métrique             | Unité |
|:---------------------|:------|
| filecapacity_average | B     |

</TabItem>
<TabItem value="File-Count" label="File-Count">

| Métrique          | Unité |
|:------------------|:------|
| filecount_average | count |

</TabItem>
<TabItem value="File-Share-Count" label="File-Share-Count">

| Métrique               | Unité |
|:-----------------------|:------|
| filesharecount_average | count |

</TabItem>
<TabItem value="File-Share-Quota" label="File-Share-Quota">

| Métrique                         | Unité |
|:-------------------------------|:------|
| filesharecapacityquota_average | B     |

</TabItem>
<TabItem value="File-Transactions-Availability" label="File-Transactions-Availability">

| Métrique             | Unité |
|:---------------------|:------|
| availability_average | %     |

</TabItem>
<TabItem value="File-Transactions-Count" label="File-Transactions-Count">

| Métrique           | Unité |
|:-------------------|:------|
| transactions_total | B     |

</TabItem>
<TabItem value="File-Transactions-Latency" label="File-Transactions-Latency">

| Métrique                     | Unité |
|:-----------------------------|:------|
| successserverlatency_average | ms    |
| successe2elatency_average    | ms    |

</TabItem>
<TabItem value="File-Transactions-Throughput" label="File-Transactions-Throughput">

| Métrique      | Unité |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

</TabItem>
<TabItem value="Health" label="Health">

| Métrique | Unité |
|:---------|:------|
| Status   | N/A   |

</TabItem>
<TabItem value="Queue-Capacity" label="Queue-Capacity">

| Métrique      | Unité |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

</TabItem>
<TabItem value="Queue-Count" label="Queue-Count">

| Métrique           | Unité |
|:-------------------|:------|
| queuecount_average | count |

</TabItem>
<TabItem value="Queue-Message-Count" label="Queue-Message-Count">

| Métrique                  | Unité |
|:--------------------------|:------|
| queuemessagecount_average | count |

</TabItem>
<TabItem value="Queue-Transactions-Availability" label="Queue-Transactions-Availability">

| Métrique             | Unité |
|:---------------------|:------|
| availability_average | %     |

</TabItem>
<TabItem value="Queue-Transactions-Count" label="Queue-Transactions-Count">

| Métrique           | Unité |
|:-------------------|:------|
| transactions_total | B     |

</TabItem>
<TabItem value="Queue-Transactions-Latency" label="Queue-Transactions-Latency">

| Métrique                     | Unité |
|:-----------------------------|:------|
| successserverlatency_average | ms    |
| successe2elatency_average    | ms    |

</TabItem>
<TabItem value="Queue-Transactions-Throughput" label="Queue-Transactions-Throughput">

| Métrique      | Unité |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

</TabItem>
<TabItem value="Table-Capacity" label="Table-Capacity">

| Métrique              | Unité |
|:----------------------|:------|
| tablecapacity_average | B     |

</TabItem>
<TabItem value="Table-Count" label="Table-Count">

| Métrique           | Unité |
|:-------------------|:------|
| tablecount_average | B     |

</TabItem>
<TabItem value="Table-Entity-Count" label="Table-Entity-Count">

| Métrique                 | Unité |
|:-------------------------|:------|
| tableentitycount_average | count |

</TabItem>
<TabItem value="Table-Transactions-Availability" label="Table-Transactions-Availability">

| Métrique             | Unité |
|:---------------------|:------|
| availability_average | %     |

</TabItem>
<TabItem value="Table-Transactions-Count" label="Table-Transactions-Count">

| Métrique           | Unité |
|:-------------------|:------|
| transactions_total | B     |

</TabItem>
<TabItem value="Table-Transactions-Latency" label="Table-Transactions-Latency">

| Métrique                     | Unité |
|:-----------------------------|:------|
| successserverlatency_average | ms    |
| successe2elatency_average    | ms    |

</TabItem>
<TabItem value="Table-Transactions-Throughput" label="Table-Transactions-Throughput">

| Métrique      | Unité |
|:--------------|:------|
| ingress_total | B     |
| egress_total  | B     |

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
dnf install centreon-pack-cloud-azure-classicstorage-storageaccount
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-classicstorage-storageaccount
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-azure-classicstorage-storageaccount
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-classicstorage-storageaccount
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Azure Classic Storage**
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
dnf install centreon-plugin-Cloud-Azure-ClassicStorage-StorageAccount-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-ClassicStorage-StorageAccount-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-azure-classicstorage-storageaccount-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-ClassicStorage-StorageAccount-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Account-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Account-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-ClassicStorage-StorageAccount-Account-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'api.

| Macro              | Description                                                                                                                                        | Valeur par défaut              | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID (required for api custom mode)                                                                                                 |                                |      X      |
| AZURECLIENTSECRET  | Set Azure client secret (required for api custom mode)                                                                                             |                                |      X      |
| AZURECUSTOMMODE    | When a plugin offers several ways (api or azcli) to get information the desired one must be defined with this option                               | api                            |             |
| AZURERESOURCE      | Set resource name or ID                                                                                                                            |                                |      X      |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                           |                                |             |
| AZURESUBSCRIPTION  | Set Azure subscription ID (required for api custom mode)                                                                                           |                                |      X      |
| AZURETENANT        | Set Azure tenant ID     (required for api custom mode)                                                                                             |                                |      X      |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                           |                                |             |
| RESOURCENAMESPACE  | Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.                                                             | Microsoft.ClassicStorage       |             |
| STATUSCRITICAL     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{summary\}                       | %\{status\} =~ /^Unavailable$/ |             |
| STATUSOK           | Define the conditions to match for the status to be OK. You can use the following variables: %\{status\}, %\{summary\}                             | %\{status\} =~ /^Available$/   |             |
| STATUSUNKNOWN      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{summary\}                        | %\{status\} =~ /^Unknown$/     |             |
| STATUSWARNING      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{summary\}                        |                                |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                |             |

> Deux méthodes peuvent être utilisées pour définir l'authentification :
>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro **AZURERESOURCE**.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-ClassicStorage-StorageAccount-Blob-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'api.

| Macro              | Description                                                                                                                                        | Valeur par défaut        | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID (required for api custom mode)                                                                                                 |                          |      X      |
| AZURECLIENTSECRET  | Set Azure client secret (required for api custom mode)                                                                                             |                          |      X      |
| AZURECUSTOMMODE    | When a plugin offers several ways (api or azcli) to get information the desired one must be defined with this option                               | api                      |             |
| AZURERESOURCE      | Set resource name or ID                                                                                                                            |                          |      X      |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                           |                          |             |
| AZURESUBSCRIPTION  | Set Azure subscription ID (required for api custom mode)                                                                                           |                          |      X      |
| AZURETENANT        | Set Azure tenant ID     (required for api custom mode)                                                                                             |                          |      X      |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                           |                          |             |
| RESOURCENAMESPACE  | Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.                                                             | Microsoft.ClassicStorage |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                          |             |

> Deux méthodes peuvent être utilisées pour définir l'authentification :
>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro **AZURERESOURCE**.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-File-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-File-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-ClassicStorage-StorageAccount-File-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'api.

| Macro              | Description                                                                                                                                        | Valeur par défaut        | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID (required for api custom mode)                                                                                                 |                          |      X      |
| AZURECLIENTSECRET  | Set Azure client secret (required for api custom mode)                                                                                             |                          |      X      |
| AZURECUSTOMMODE    | When a plugin offers several ways (api or azcli) to get information the desired one must be defined with this option                               | api                      |             |
| AZURERESOURCE      | Set resource name or ID                                                                                                                            |                          |      X      |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                           |                          |             |
| AZURESUBSCRIPTION  | Set Azure subscription ID (required for api custom mode)                                                                                           |                          |      X      |
| AZURETENANT        | Set Azure tenant ID     (required for api custom mode)                                                                                             |                          |      X      |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                           |                          |             |
| RESOURCENAMESPACE  | Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.                                                             | Microsoft.ClassicStorage |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                          |             |

> Deux méthodes peuvent être utilisées pour définir l'authentification :
>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro **AZURERESOURCE**.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-ClassicStorage-StorageAccount-Queue-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'api.

| Macro              | Description                                                                                                                                        | Valeur par défaut        | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID (required for api custom mode)                                                                                                 |                          |      X      |
| AZURECLIENTSECRET  | Set Azure client secret (required for api custom mode)                                                                                             |                          |      X      |
| AZURECUSTOMMODE    | When a plugin offers several ways (api or azcli) to get information the desired one must be defined with this option                               | api                      |             |
| AZURERESOURCE      | Set resource name or ID                                                                                                                            |                          |      X      |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                           |                          |             |
| AZURESUBSCRIPTION  | Set Azure subscription ID (required for api custom mode)                                                                                           |                          |      X      |
| AZURETENANT        | Set Azure tenant ID     (required for api custom mode)                                                                                             |                          |      X      |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                           |                          |             |
| RESOURCENAMESPACE  | Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.                                                             | Microsoft.ClassicStorage |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                          |             |

> Deux méthodes peuvent être utilisées pour définir l'authentification :
>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro **AZURERESOURCE**.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Azure-ClassicStorage-StorageAccount-Table-custom" label="Cloud-Azure-ClassicStorage-StorageAccount-Table-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-ClassicStorage-StorageAccount-Table-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'api.

| Macro              | Description                                                                                                                                        | Valeur par défaut        | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID (required for api custom mode)                                                                                                 |                          |      X      |
| AZURECLIENTSECRET  | Set Azure client secret (required for api custom mode)                                                                                             |                          |      X      |
| AZURECUSTOMMODE    | When a plugin offers several ways (api or azcli) to get information the desired one must be defined with this option                               | api                      |             |
| AZURERESOURCE      | Set resource name or ID                                                                                                                            |                          |      X      |
| AZURERESOURCEGROUP | Set resource group (required if resource's name is used)                                                                                           |                          |             |
| AZURESUBSCRIPTION  | Set Azure subscription ID (required for api custom mode)                                                                                           |                          |      X      |
| AZURETENANT        | Set Azure tenant ID     (required for api custom mode)                                                                                             |                          |      X      |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                           |                          |             |
| RESOURCENAMESPACE  | Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.                                                             | Microsoft.ClassicStorage |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                          |             |

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
<TabItem value="Account-Transactions-Availability" label="Account-Transactions-Availability">

| Macro                       | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGETYPE                 | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Account           |             |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800              |             |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M             |             |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGAVAILABILITYAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALAVAILABILITYAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Account-Transactions-Count" label="Account-Transactions-Count">

| Macro                     | Description                                                                                                                                        | Valeur par défaut   | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STORAGETYPE               | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Account             |             |
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800                |             |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M               |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |             |
| WARNINGTRANSACTIONSTOTAL  | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALTRANSACTIONSTOTAL | Critical thresholds                                                                                                                                |                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --per-sec --verbose |             |

</TabItem>
<TabItem value="Account-Transactions-Latency" label="Account-Transactions-Latency">

| Macro                        | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGETYPE                  | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Account           |             |
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGSUCCESSE2ELATENCY     | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALSUCCESSE2ELATENCY    | Critical thresholds                                                                                                                                |                   |             |
| WARNINGSUCCESSSERVERLATENCY  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALSUCCESSSERVERLATENCY | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Account-Transactions-Throughput" label="Account-Transactions-Throughput">

| Macro                | Description                                                                                                                                        | Valeur par défaut   | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STORAGETYPE          | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Account             |             |
| TIMEFRAME            | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900                 |             |
| INTERVAL             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M                |             |
| AGGREGATION          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |             |
| WARNINGEGRESSTOTAL   | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALEGRESSTOTAL  | Critical thresholds                                                                                                                                |                     |             |
| WARNINGINGRESSTOTAL  | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALINGRESSTOTAL | Critical thresholds                                                                                                                                |                     |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --per-sec --verbose |             |

</TabItem>
<TabItem value="Account-Used-Capacity" label="Account-Used-Capacity">

| Macro                     | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 3600              |             |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total             |             |
| WARNINGUSEDCAPACITYTOTAL  | Warning threshold                                                                                                                                  |                   |             |
| CRITICALUSEDCAPACITYTOTAL | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Blob-Capacity" label="Blob-Capacity">

| Macro                     | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total             |             |
| WARNINGUSEDCAPACITYTOTAL  | Warning threshold                                                                                                                                  |                   |             |
| CRITICALUSEDCAPACITYTOTAL | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Blob-Container-Count" label="Blob-Container-Count">

| Macro                         | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                     | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL                      | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION                   | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGCONTAINERCOUNTAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALCONTAINERCOUNTAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Blob-Count" label="Blob-Count">

| Macro                  | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL               | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION            | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total             |             |
| WARNINGUSEDCOUNTTOTAL  | Warning threshold                                                                                                                                  |                   |             |
| CRITICALUSEDCOUNTTOTAL | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Blob-Transactions-Availability" label="Blob-Transactions-Availability">

| Macro                       | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGETYPE                 | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Blob              |             |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800              |             |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M             |             |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGAVAILABILITYAVERAGE  | Warning threshold                                                                                                                                  |                   |             |
| CRITICALAVAILABILITYAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Blob-Transactions-Count" label="Blob-Transactions-Count">

| Macro                     | Description                                                                                                                                        | Valeur par défaut   | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STORAGETYPE               | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Blob                |             |
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800                |             |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M               |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |             |
| WARNINGTRANSACTIONSTOTAL  | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALTRANSACTIONSTOTAL | Critical thresholds                                                                                                                                |                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --per-sec --verbose |             |

</TabItem>
<TabItem value="Blob-Transactions-Latency" label="Blob-Transactions-Latency">

| Macro                        | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGETYPE                  | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Blob              |             |
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGSUCCESSE2ELATENCY     | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALSUCCESSE2ELATENCY    | Critical thresholds                                                                                                                                |                   |             |
| WARNINGSUCCESSSERVERLATENCY  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALSUCCESSSERVERLATENCY | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Blob-Transactions-Throughput" label="Blob-Transactions-Throughput">

| Macro                | Description                                                                                                                                        | Valeur par défaut   | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STORAGETYPE          | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Blob                |             |
| TIMEFRAME            | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900                 |             |
| INTERVAL             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M                |             |
| AGGREGATION          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |             |
| WARNINGEGRESSTOTAL   | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALEGRESSTOTAL  | Critical thresholds                                                                                                                                |                     |             |
| WARNINGINGRESSTOTAL  | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALINGRESSTOTAL | Critical thresholds                                                                                                                                |                     |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --per-sec --verbose |             |

</TabItem>
<TabItem value="File-Capacity" label="File-Capacity">

| Macro                       | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total             |             |
| WARNINGFILECAPACITYAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALFILECAPACITYAVERAGE | Critical thresholds                                                                                                                               |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="File-Count" label="File-Count">

| Macro                    | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL                 | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION              | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total             |             |
| WARNINGFILECOUNTAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALFILECOUNTAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="File-Share-Count" label="File-Share-Count">

| Macro                         | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                     | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL                      | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION                   | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGFILESHARECOUNTAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALFILESHARECOUNTAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="File-Share-Quota" label="File-Share-Quota">

| Macro                         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGFILESHARECOUNTAVERAGE  | Warning thresholds                                                                                                                               |                   |             |
| CRITICALFILESHARECOUNTAVERAGE | Critical thresholds                                                                                                                              |                   |             |
| WARNINGFILESHARECOUNTTOTAL    | Warning thresholds                                                                                                                               |                   |             |
| CRITICALFILESHARECOUNTTOTAL   | Critical thresholds                                                                                                                              |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="File-Transactions-Availability" label="File-Transactions-Availability">

| Macro                       | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGETYPE                 | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | File              |             |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800              |             |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M             |             |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGAVAILABILITYAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALAVAILABILITYAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="File-Transactions-Count" label="File-Transactions-Count">

| Macro                     | Description                                                                                                                                        | Valeur par défaut   | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STORAGETYPE               | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | File                |             |
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800                |             |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M               |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |             |
| WARNINGTRANSACTIONSTOTAL  | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALTRANSACTIONSTOTAL | Critical thresholds                                                                                                                                |                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --per-sec --verbose |             |

</TabItem>
<TabItem value="File-Transactions-Latency" label="File-Transactions-Latency">

| Macro                        | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGETYPE                  | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | File              |             |
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGSUCCESSE2ELATENCY     | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALSUCCESSE2ELATENCY    | Critical thresholds                                                                                                                                |                   |             |
| WARNINGSUCCESSSERVERLATENCY  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALSUCCESSSERVERLATENCY | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="File-Transactions-Throughput" label="File-Transactions-Throughput">

| Macro                | Description                                                                                                                                        | Valeur par défaut   | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STORAGETYPE          | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | File                |             |
| TIMEFRAME            | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900                 |             |
| INTERVAL             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M                |             |
| AGGREGATION          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |             |
| WARNINGEGRESSTOTAL   | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALEGRESSTOTAL  | Critical thresholds                                                                                                                                |                     |             |
| WARNINGINGRESSTOTAL  | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALINGRESSTOTAL | Critical thresholds                                                                                                                                |                     |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --per-sec --verbose |             |

</TabItem>
<TabItem value="Queue-Capacity" label="Queue-Capacity">

| Macro                        | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total             |             |
| WARNINGQUEUECAPACITYAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALQUEUECAPACITYAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Queue-Count" label="Queue-Count">

| Macro                     | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total             |             |
| WARNINGQUEUECOUNTAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALQUEUECOUNTAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Queue-Message-Count" label="Queue-Message-Count">

| Macro                            | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                        | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL                         | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION                      | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGQUEUEMESSAGECOUNTAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALQUEUEMESSAGECOUNTAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Queue-Transactions-Availability" label="Queue-Transactions-Availability">

| Macro                       | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGETYPE                 | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Queue             |             |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800              |             |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M             |             |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGAVAILABILITYAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALAVAILABILITYAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Queue-Transactions-Count" label="Queue-Transactions-Count">

| Macro                     | Description                                                                                                                                        | Valeur par défaut   | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STORAGETYPE               | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Queue               |             |
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800                |             |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M               |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |             |
| WARNINGTRANSACTIONSTOTAL  | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALTRANSACTIONSTOTAL | Critical thresholds                                                                                                                                |                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                 | --per-sec --verbose |             |

</TabItem>
<TabItem value="Queue-Transactions-Latency" label="Queue-Transactions-Latency">

| Macro                        | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGETYPE                  | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Queue             |             |
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGSUCCESSE2ELATENCY     | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALSUCCESSE2ELATENCY    | Critical thresholds                                                                                                                                |                   |             |
| WARNINGSUCCESSSERVERLATENCY  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALSUCCESSSERVERLATENCY | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Queue-Transactions-Throughput" label="Queue-Transactions-Throughput">

| Macro                | Description                                                                                                                                        | Valeur par défaut   | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STORAGETYPE          | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Queue               |             |
| TIMEFRAME            | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900                 |             |
| INTERVAL             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M                |             |
| AGGREGATION          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |             |
| WARNINGEGRESSTOTAL   | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALEGRESSTOTAL  | Critical thresholds                                                                                                                                |                     |             |
| WARNINGINGRESSTOTAL  | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALINGRESSTOTAL | Critical thresholds                                                                                                                                |                     |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --per-sec --verbose |             |

</TabItem>
<TabItem value="Table-Capacity" label="Table-Capacity">

| Macro                        | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total             |             |
| WARNINGTABLECAPACITYAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALTABLECAPACITYAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Table-Count" label="Table-Count">

| Macro                     | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total             |             |
| WARNINGTABLECOUNTAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALTABLECOUNTAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Table-Entity-Count" label="Table-Entity-Count">

| Macro                           | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                       | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 7200              |             |
| INTERVAL                        | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT1H              |             |
| AGGREGATION                     | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGTABLEENTITYCOUNTAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALTABLEENTITYCOUNTAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Table-Transactions-Availability" label="Table-Transactions-Availability">

| Macro                       | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGETYPE                 | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Table             |             |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800              |             |
| INTERVAL                    | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M             |             |
| AGGREGATION                 | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGAVAILABILITYAVERAGE  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALAVAILABILITYAVERAGE | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Table-Transactions-Count" label="Table-Transactions-Count">

| Macro                     | Description                                                                                                                                        | Valeur par défaut   | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STORAGETYPE               | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Table               |             |
| TIMEFRAME                 | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 1800                |             |
| INTERVAL                  | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT15M               |             |
| AGGREGATION               | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |             |
| WARNINGTRANSACTIONSTOTAL  | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALTRANSACTIONSTOTAL | Critical thresholds                                                                                                                                |                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --per-sec --verbose |             |

</TabItem>
<TabItem value="Table-Transactions-Latency" label="Table-Transactions-Latency">

| Macro                        | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGETYPE                  | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Table             |             |
| TIMEFRAME                    | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900               |             |
| INTERVAL                     | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M              |             |
| AGGREGATION                  | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGSUCCESSE2ELATENCY     | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALSUCCESSE2ELATENCY    | Critical thresholds                                                                                                                                |                   |             |
| WARNINGSUCCESSSERVERLATENCY  | Warning thresholds                                                                                                                                 |                   |             |
| CRITICALSUCCESSSERVERLATENCY | Critical thresholds                                                                                                                                |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --verbose         |             |

</TabItem>
<TabItem value="Table-Transactions-Throughput" label="Table-Transactions-Throughput">

| Macro                | Description                                                                                                                                        | Valeur par défaut   | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STORAGETYPE          | Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue')                                                                             | Table               |             |
| TIMEFRAME            | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                                            | 900                 |             |
| INTERVAL             | Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                                                     | PT5M                |             |
| AGGREGATION          | Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | total               |             |
| WARNINGEGRESSTOTAL   | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALEGRESSTOTAL  | Critical thresholds                                                                                                                                |                     |             |
| WARNINGINGRESSTOTAL  | Warning thresholds                                                                                                                                 |                     |             |
| CRITICALINGRESSTOTAL | Critical thresholds                                                                                                                                |                     |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   | --per-sec --verbose |             |

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
/usr/lib/centreon/plugins/centreon_azure_classicstorage_storageaccount_api.pl \
	--plugin=cloud::azure::classicstorage::storageaccount::plugin \
	--mode=transactions-latency \
	--custommode='api' \
	--resource='Ressource_name' \
	--resource-group='Ressource_group' \
	--resource-namespace='Microsoft.ClassicStorage' \
	--subscription='XXXX' \
	--tenant='XXXX' \
	--client-id='XXXX' \
	--client-secret='XXXX' \
	--proxyurl=''  \
	--storage-type='Account' \
	--timeframe='900' \
	--interval='PT5M' \
	--aggregation='average' \
	--warning-successserverlatency-average='' \
	--critical-successserverlatency-average='' \
	--warning-successe2elatency-average='' \
	--critical-successe2elatency-average='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Resource 'storageaccountdev' (Account) average SuccessServerLatency: 10.00 ms, SuccessE2ELatency: 10.17 ms | 'successserverlatency_average'=10.00ms;;;0; 'successe2elatency_average'=10.17ms;;;0;
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
/usr/lib/centreon/plugins/centreon_azure_classicstorage_storageaccount_api.pl \
	--plugin=cloud::azure::classicstorage::storageaccount::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                            | Modèle de service associé                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| account-used-capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/accountusedcapacity.pm)]          | Cloud-Azure-ClassicStorage-StorageAccount-Account-Used-Capacity-Api-custom                                                                                                                                                                                                                                                                                                                                                                                   |
| blob-capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/blobcapacity.pm)]                         | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Capacity-Api-custom                                                                                                                                                                                                                                                                                                                                                                                           |
| blob-container-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/blobcontainercount.pm)]            | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Container-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                    |
| blob-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/blobcount.pm)]                               | Cloud-Azure-ClassicStorage-StorageAccount-Blob-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                              |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/classicstorage/storageaccount/mode/discovery.pm)]                   | Used for host discovery                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| file-capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/filecapacity.pm)]                         | Cloud-Azure-ClassicStorage-StorageAccount-File-Capacity-Api-custom                                                                                                                                                                                                                                                                                                                                                                                           |
| file-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/filecount.pm)]                               | Cloud-Azure-ClassicStorage-StorageAccount-File-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                              |
| file-share-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/filesharecount.pm)]                    | Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                        |
| file-share-quota [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/filesharecount.pm)]                    | Cloud-Azure-ClassicStorage-StorageAccount-File-Share-Quota-Api-custom                                                                                                                                                                                                                                                                                                                                                                                        |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/health.pm)]                                      | Cloud-Azure-ClassicStorage-StorageAccount-Health-Api-custom                                                                                                                                                                                                                                                                                                                                                                                                  |
| list-fileshares [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/listfileshares.pm)]                     | Used for service discovery                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| list-resources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/classicstorage/storageaccount/mode/listresources.pm)]          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                        |
| queue-capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/queuecapacity.pm)]                       | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Capacity-Api-custom                                                                                                                                                                                                                                                                                                                                                                                          |
| queue-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/queuecount.pm)]                             | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                             |
| queue-message-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/queuemessagecount.pm)]              | Cloud-Azure-ClassicStorage-StorageAccount-Queue-Message-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                     |
| table-capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/tablecapacity.pm)]                       | Cloud-Azure-ClassicStorage-StorageAccount-Table-Capacity-Api-custom                                                                                                                                                                                                                                                                                                                                                                                          |
| table-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/tablecount.pm)]                             | Cloud-Azure-ClassicStorage-StorageAccount-Table-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                             |
| table-entity-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/tableentitycount.pm)]                | Cloud-Azure-ClassicStorage-StorageAccount-Table-Entity-Count-Api-custom                                                                                                                                                                                                                                                                                                                                                                                      |
| transactions-availability [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/transactionsavailability.pm)] | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Availability-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Availability-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Availability-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Availability-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Availability-Api-custom |
| transactions-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/transactionscount.pm)]               | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Count-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Count-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Count-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Count-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Count-Api-custom                                    |
| transactions-latency [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/transactionslatency.pm)]           | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Latency-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Latency-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Latency-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Latency-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Latency-Api-custom                          |
| transactions-throughput [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/common/storageaccount/transactionsthroughput.pm)]     | Cloud-Azure-ClassicStorage-StorageAccount-Account-Transactions-Throughput-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Blob-Transactions-Throughput-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-File-Transactions-Throughput-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Queue-Transactions-Throughput-Api-custom<br />Cloud-Azure-ClassicStorage-StorageAccount-Table-Transactions-Throughput-Api-custom           |

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
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMétriques format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMétriques options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --subscription                             |   Set Azure subscription ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --timeframe                                |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --interval                                 |   Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --aggregation                              |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --zeroed                                   |   Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --sudo                                     |   Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --command                                  |   Command to get information (default: 'az'). Can be changed if you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --command-path                             |   Command path (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          |   Command options (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --memcached                                |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 |   Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --memexpiration                            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --tenant                                   |   Set Azure tenant ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --client-id                                |   Set Azure client ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --client-secret                            |   Set Azure client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --login-endpoint                           |   Set Azure login endpoint URL (default: 'https://login.microsoftonline.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --management-endpoint                      |   Set Azure management endpoint URL (default: 'https://management.azure.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Account-Transactions-Availability" label="Account-Transactions-Availability">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type            |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-availability-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average').                                                         |
| --critical-availability-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average').                                                        |

</TabItem>
<TabItem value="Account-Transactions-Count" label="Account-Transactions-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type                |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-transactions-total  |   Warning thresholds.                                                                                                     |
| --critical-transactions-total |   Critical thresholds.                                                                                                    |
| --per-sec                     |   Change the data to be unit/sec.                                                                                         |

</TabItem>
<TabItem value="Account-Transactions-Latency" label="Account-Transactions-Latency">

| Option                            | Description                                                                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                                                    |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                                              |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                  |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                                                |
| --filter-metric                   |   Filter metrics (can be: 'SuccessServerLatency', 'SuccessE2ELatency') (Can be a regexp).                                                                |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').     |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |

</TabItem>
<TabItem value="Account-Transactions-Throughput" label="Account-Transactions-Throughput">

| Option                            | Description                                                                                                                     |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                           |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                     |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.         |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                       |
| --filter-metric                   |   Filter metrics (can be: 'Ingress', 'Egress') (Can be a regexp).                                                               |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').   |
| --per-sec                         |   Change the data to be unit/sec.                                                                                               |

</TabItem>
<TabItem value="Account-Used-Capacity" label="Account-Used-Capacity">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-usedcapacity-total  |   Warning threshold.                                                                                                      |
| --critical-usedcapacity-total |   Critical thresholds.                                                                                                    |

</TabItem>
<TabItem value="Blob-Capacity" label="Blob-Capacity">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-blobcapacity-total  |   Warning threshold.                                                                                                      |
| --critical-blobcapacity-total |   Critical thresholds.                                                                                                    |

</TabItem>
<TabItem value="Blob-Container-Count" label="Blob-Container-Count">

| Option                      | Description                                                                                                               |
|:----------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                  |   Set resource name or ID (required).                                                                                     |
| --resource-group            |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace        |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-containercount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-containercount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Blob-Count" label="Blob-Count">

| Option                     | Description                                                                                                               |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                 |   Set resource name or ID (required).                                                                                     |
| --resource-group           |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace       |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-blobcount-total  |   Warning threshold.                                                                                                      |
| --critical-blobcount-total |   Critical thresholds.                                                                                                    |

</TabItem>
<TabItem value="Blob-Transactions-Availability" label="Blob-Transactions-Availability">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type            |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-availability-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average').                                                         |
| --critical-availability-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average').                                                        |

</TabItem>
<TabItem value="Blob-Transactions-Count" label="Blob-Transactions-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type                |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-transactions-total  |   Warning thresholds.                                                                                                     |
| --critical-transactions-total |   Critical thresholds.                                                                                                    |
| --per-sec                     |   Change the data to be unit/sec.                                                                                         |

</TabItem>
<TabItem value="Blob-Transactions-Latency" label="Blob-Transactions-Latency">

| Option                            | Description                                                                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                                                    |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                                              |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                  |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                                                |
| --filter-metric                   |   Filter metrics (can be: 'SuccessServerLatency', 'SuccessE2ELatency') (Can be a regexp).                                                                |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').     |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |

</TabItem>
<TabItem value="Blob-Transactions-Throughput" label="Blob-Transactions-Throughput">

| Option                            | Description                                                                                                                     |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                           |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                     |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.         |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                       |
| --filter-metric                   |   Filter metrics (can be: 'Ingress', 'Egress') (Can be a regexp).                                                               |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').   |
| --per-sec                         |   Change the data to be unit/sec.                                                                                               |

</TabItem>
<TabItem value="File-Capacity" label="File-Capacity">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-filecapacity-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-filecapacity-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="File-Count" label="File-Count">

| Option                 | Description                                                                                                               |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource             |   Set resource name or ID (required).                                                                                     |
| --resource-group       |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace   |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-filecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-filecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="File-Share-Count" label="File-Share-Count">

| Option                      | Description                                                                                                               |
|:----------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                  |   Set resource name or ID (required).                                                                                     |
| --resource-group            |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace        |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-filesharecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-filesharecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="File-Share-Quota" label="File-Share-Quota">

| Option                      | Description                                                                                                               |
|:----------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                  |   Set resource name or ID (required).                                                                                     |
| --resource-group            |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace        |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-filesharecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-filesharecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="File-Transactions-Availability" label="File-Transactions-Availability">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type            |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-availability-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average').                                                         |
| --critical-availability-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average').                                                        |

</TabItem>
<TabItem value="File-Transactions-Count" label="File-Transactions-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type                |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-transactions-total  |   Warning thresholds.                                                                                                     |
| --critical-transactions-total |   Critical thresholds.                                                                                                    |
| --per-sec                     |   Change the data to be unit/sec.                                                                                         |

</TabItem>
<TabItem value="File-Transactions-Latency" label="File-Transactions-Latency">

| Option                            | Description                                                                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                                                    |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                                              |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                  |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                                                |
| --filter-metric                   |   Filter metrics (can be: 'SuccessServerLatency', 'SuccessE2ELatency') (Can be a regexp).                                                                |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').     |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |

</TabItem>
<TabItem value="File-Transactions-Throughput" label="File-Transactions-Throughput">

| Option                            | Description                                                                                                                     |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                           |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                     |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.         |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                       |
| --filter-metric                   |   Filter metrics (can be: 'Ingress', 'Egress') (Can be a regexp).                                                               |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').   |
| --per-sec                         |   Change the data to be unit/sec.                                                                                               |

</TabItem>
<TabItem value="Health" label="Health">

| Option               | Description                                                                                                                                                                  |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource           |   Set resource name or ID (required).                                                                                                                                        |
| --resource-group     |   Set resource group (required if resource's name is used).                                                                                                                  |
| --resource-namespace |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                                      |
| --resource-type      |   Set resource type (required if resource's name is used).                                                                                                                   |
| --warning-status     |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{summary\}                                  |
| --critical-status    |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /^Unavailable$/'). You can use the following variables: %\{status\}, %\{summary\}   |
| --unknown-status     |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /^Unknown$/'). You can use the following variables: %\{status\}, %\{summary\}        |
| --ok-status          |   Define the conditions to match for the status to be OK (default: '%\{status\} =~ /^Available$/'). You can use the following variables: %\{status\}, %\{summary\}           |

</TabItem>
<TabItem value="Queue-Capacity" label="Queue-Capacity">

| Option                     | Description                                                                                                               |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                 |   Set resource name or ID (required).                                                                                     |
| --resource-group           |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace       |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-queuecapacity-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-queuecapacity-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Queue-Count" label="Queue-Count">

| Option                  | Description                                                                                                               |
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource              |   Set resource name or ID (required).                                                                                     |
| --resource-group        |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace    |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-queuecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-queuecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Queue-Message-Count" label="Queue-Message-Count">

| Option                         | Description                                                                                                               |
|:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                     |   Set resource name or ID (required).                                                                                     |
| --resource-group               |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace           |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-queuemessagecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-queuemessagecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Queue-Transactions-Availability" label="Queue-Transactions-Availability">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type            |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-availability-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average').                                                         |
| --critical-availability-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average').                                                        |

</TabItem>
<TabItem value="Queue-Transactions-Count" label="Queue-Transactions-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type                |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-transactions-total  |   Warning thresholds.                                                                                                     |
| --critical-transactions-total |   Critical thresholds.                                                                                                    |
| --per-sec                     |   Change the data to be unit/sec.                                                                                         |

</TabItem>
<TabItem value="Queue-Transactions-Latency" label="Queue-Transactions-Latency">

| Option                            | Description                                                                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                                                    |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                                              |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                  |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                                                |
| --filter-metric                   |   Filter metrics (can be: 'SuccessServerLatency', 'SuccessE2ELatency') (Can be a regexp).                                                                |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').     |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |

</TabItem>
<TabItem value="Queue-Transactions-Throughput" label="Queue-Transactions-Throughput">

| Option                            | Description                                                                                                                     |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                           |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                     |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.         |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                       |
| --filter-metric                   |   Filter metrics (can be: 'Ingress', 'Egress') (Can be a regexp).                                                               |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').   |
| --per-sec                         |   Change the data to be unit/sec.                                                                                               |

</TabItem>
<TabItem value="Table-Capacity" label="Table-Capacity">

| Option                     | Description                                                                                                               |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                 |   Set resource name or ID (required).                                                                                     |
| --resource-group           |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace       |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-tablecapacity-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-tablecapacity-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Table-Count" label="Table-Count">

| Option                  | Description                                                                                                               |
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource              |   Set resource name or ID (required).                                                                                     |
| --resource-group        |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace    |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-tablecount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-tablecount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Table-Entity-Count" label="Table-Entity-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --warning-tableentitycount-*  |   Warning thresholds (* can be: 'average', 'total').                                                                      |
| --critical-tableentitycount-* |   Critical thresholds (* can be: 'average', 'total').                                                                     |

</TabItem>
<TabItem value="Table-Transactions-Availability" label="Table-Transactions-Availability">

| Option                    | Description                                                                                                               |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                |   Set resource name or ID (required).                                                                                     |
| --resource-group          |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace      |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type            |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-availability-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average').                                                         |
| --critical-availability-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average').                                                        |

</TabItem>
<TabItem value="Table-Transactions-Count" label="Table-Transactions-Count">

| Option                        | Description                                                                                                               |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --resource                    |   Set resource name or ID (required).                                                                                     |
| --resource-group              |   Set resource group (required if resource's name is used).                                                               |
| --resource-namespace          |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.   |
| --storage-type                |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                 |
| --warning-transactions-total  |   Warning thresholds.                                                                                                     |
| --critical-transactions-total |   Critical thresholds.                                                                                                    |
| --per-sec                     |   Change the data to be unit/sec.                                                                                         |

</TabItem>
<TabItem value="Table-Transactions-Latency" label="Table-Transactions-Latency">

| Option                            | Description                                                                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                                                    |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                                              |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.                                  |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                                                |
| --filter-metric                   |   Filter metrics (can be: 'SuccessServerLatency', 'SuccessE2ELatency') (Can be a regexp).                                                                |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').     |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'successserverlatency', 'successe2elatency', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |

</TabItem>
<TabItem value="Table-Transactions-Throughput" label="Table-Transactions-Throughput">

| Option                            | Description                                                                                                                     |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --resource                        |   Set resource name or ID (required).                                                                                           |
| --resource-group                  |   Set resource group (required if resource's name is used).                                                                     |
| --resource-namespace              |   Specify resource namespace. Can be: 'Microsoft.Storage' or 'Microsoft.ClassicStorage'.  Default: 'Microsoft.Storage'.         |
| --storage-type                    |   Set storage type (can be: 'Account', 'Blob', 'File', 'Table', 'Queue').                                                       |
| --filter-metric                   |   Filter metrics (can be: 'Ingress', 'Egress') (Can be a regexp).                                                               |
| --warning-$metric$-$aggregation$  |   Warning thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').    |
| --critical-$metric$-$aggregation$ |   Critical thresholds ($metric$ can be: 'ingress', 'egress', $aggregation$ can be: 'minimum', 'maximum', 'average', 'total').   |
| --per-sec                         |   Change the data to be unit/sec.                                                                                               |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_classicstorage_storageaccount_api.pl \
	--plugin=cloud::azure::classicstorage::storageaccount::plugin \
	--mode=transactions-latency \
	--help
```
