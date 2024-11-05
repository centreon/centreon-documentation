---
id: cloud-aws-elasticache
title: Amazon ElastiCache
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du Connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Amazon ElastiCache** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Amazon ElastiCache** apporte 3 modèles d'hôte :

* **Cloud-Aws-ElastiCache-custom**
* **Cloud-Aws-ElastiCache-Memcached-custom**
* **Cloud-Aws-ElastiCache-Redis-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-ElastiCache-custom" label="Cloud-Aws-ElastiCache-custom">

| Alias                   | Modèle de service                            | Description                      |
|:------------------------|:---------------------------------------------|:---------------------------------|
| ElastiCache-Connections | Cloud-Aws-ElastiCache-Connections-Api-custom | Contrôle le nombre de connexions  |
| ElastiCache-Cpu         | Cloud-Aws-ElastiCache-Cpu-Api-custom         | Contrôle l'utilisation CPU       |
| ElastiCache-Evictions   | Cloud-Aws-ElastiCache-Evictions-Api-custom   | Contrôle le nombre d'évictions   |
| ElastiCache-Items       | Cloud-Aws-ElastiCache-Items-Api-custom       | Contrôle le nombre d'items       |
| ElastiCache-Network     | Cloud-Aws-ElastiCache-Network-Api-custom     | Contrôle l'utilisation du réseau |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-ElastiCache-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Aws-ElastiCache-Memcached-custom" label="Cloud-Aws-ElastiCache-Memcached-custom">

| Alias                   | Modèle de service                                   | Description                                      |
|:------------------------|:----------------------------------------------------|:-------------------------------------------------|
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Memcached-Api-custom | Contrôle les performances du cache Memcached     |
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Redis-Api-custom     | Contrôle les performances du cache Redis         |
| ElastiCache-Connections | Cloud-Aws-ElastiCache-Connections-Api-custom        | Contrôle le nombre de connexions                 |
| ElastiCache-Cpu         | Cloud-Aws-ElastiCache-Cpu-Api-custom                | Contrôle l'utilisation CPU                       |
| ElastiCache-Evictions   | Cloud-Aws-ElastiCache-Evictions-Api-custom          | Contrôle le nombre d'évictions                   |
| ElastiCache-Items       | Cloud-Aws-ElastiCache-Items-Api-custom              | Contrôle le nombre d'items                       |
| ElastiCache-Network     | Cloud-Aws-ElastiCache-Network-Api-custom            | Contrôle l'utilisation du réseau                 |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Memcached-Api-custom | Contrôle les performances du cache Memcached     |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Redis-Api-custom     | Contrôle les performances du cache Redis         |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Memcached-Api-custom    | Contrôle l'espace utilisé par le cache Memcached |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Redis-Api-custom        | Contrôle l'espace utilisé par le cache Redis     |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-ElastiCache-Memcached-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Aws-ElastiCache-Redis-custom" label="Cloud-Aws-ElastiCache-Redis-custom">

| Alias                   | Modèle de service                                   | Description                                      |
|:------------------------|:----------------------------------------------------|:-------------------------------------------------|
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Memcached-Api-custom | Contrôle les performances du cache Memcached     |
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Redis-Api-custom     | Contrôle les performances du cache Redis         |
| ElastiCache-Connections | Cloud-Aws-ElastiCache-Connections-Api-custom        | Contrôle le nombre de connexions                  |
| ElastiCache-Cpu         | Cloud-Aws-ElastiCache-Cpu-Api-custom                | Contrôle l'utilisation CPU                       |
| ElastiCache-Evictions   | Cloud-Aws-ElastiCache-Evictions-Api-custom          | Contrôle le nombre d'évictions                   |
| ElastiCache-Items       | Cloud-Aws-ElastiCache-Items-Api-custom              | Contrôle le nombre d'items                       |
| ElastiCache-Network     | Cloud-Aws-ElastiCache-Network-Api-custom            | Contrôle l'utilisation du réseau                 |
| ElastiCache-Replication | Cloud-Aws-ElastiCache-Replication-Api-custom        | Contrôle les performances de la réplication      |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Memcached-Api-custom | Contrôle les performances du cache Memcached     |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Redis-Api-custom     | Contrôle les performances du cache Redis         |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Memcached-Api-custom    | Contrôle l'espace utilisé par le cache Memcached |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Redis-Api-custom        | Contrôle l'espace utilisé par le cache Redis     |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-ElastiCache-Redis-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle                | Description                        |
|:-------------------------------|:-----------------------------------|
| Amazon Web Service Elasticache | Découvre les hôtes AWS Elasticache |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="ElastiCache-Commands" label="ElastiCache-Commands">

| Métrique       | Unité |
|:---------------|:------|
| CPUUtilization | %     |

</TabItem>
<TabItem value="ElastiCache-Connections" label="ElastiCache-Connections">

| Métrique        | Unité |
|:----------------|-------|
| CurrConnections | count |

</TabItem>
<TabItem value="ElastiCache-Cpu" label="ElastiCache-Cpu">

| Métrique       | Unité |
|:---------------|-------|
| CPUUtilization | %     |

</TabItem>
<TabItem value="ElastiCache-Evictions" label="ElastiCache-Evictions">

| Métrique  | Unité |
|:----------|:------|
| Evictions | count |
| Reclaimed | count |

</TabItem>
<TabItem value="ElastiCache-Items" label="ElastiCache-Items">

| Métrique  | Unité  |
|:----------|:-------|
| CurrItems | count  |
| NewItems  | count  |

</TabItem>
<TabItem value="ElastiCache-Network" label="ElastiCache-Network">

| Métrique       | Unité |
|:---------------|:------|
| NetworkBytesIn | B     |

</TabItem>
<TabItem value="ElastiCache-Replication" label="ElastiCache-Replication">

| Métrique          | Unité |
|:------------------|:------|
| ReplicationBytes  | B     |

</TabItem>
<TabItem value="ElastiCache-Requests" label="ElastiCache-Requests">

| Métrique      | Unité |
|:--------------|:------|
| CasHits       | count |
| CasMisses     | count |
| DecrHits      | count |
| DecrMisses    | count |
| DeleteHits    | count |
| DeleteMisses  | count |
| GetHits       | count |
| GetMisses     | count |
| IncrHits      | count |
| IncrMisses    | count |
| TouchHits     | count |
| TouchMisses   | count |

</TabItem>
<TabItem value="ElastiCache-Usage" label="ElastiCache-Usage">

| Métrique               | Unité |
|:-----------------------|:------|
| BytesUsedForCacheItems | B     |
| BytesUsedForCache      | B     |

</TabItem>
</Tabs>

## Prérequis

### Privilèges AWS

Configurez un compte de service (via une combinaison d'access key et secret key) et affectez-lui les privilèges suivants :
* cloudwatch:getMetricStatistics
* elasticache:describeCacheClusters

### Dépendances du plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire *awscli* fourni par Amazon, soit le SDK Perl *paws*. Le SDK est recommandé car plus performant.

> **Attention**, il n'est pas possible d'utiliser *paws* si la connexion s'effectue au travers d'un proxy.

<Tabs groupId="sync">
<TabItem value="perl-Paws-installation" label="perl-Paws-installation">

```bash
yum install perl-Paws
```

</TabItem>
<TabItem value="aws-cli-installation" label="aws-cli-installation">

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

</TabItem>
</Tabs>

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
dnf install centreon-pack-cloud-aws-elasticache
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-elasticache
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-aws-elasticache
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-elasticache
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Amazon ElastiCache**
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
dnf install centreon-plugin-Cloud-Aws-Elasticache-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Elasticache-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-aws-elasticache-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Elasticache-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-ElastiCache-custom" label="Cloud-Aws-ElastiCache-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-ElastiCache-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                                                 |                   |             |
| AWSASSUMEROLE   | Set Amazon Resource Name of the role to be assumed                                                                                                 |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                         |                   |             |
| AWSINSTANCENAME | Set the cluster name (required) (can be defined multiple times)                                                                                    |                   | X           |
| AWSNODEID       | Set the node ID (optional)                                                                                                                         |                   |             |
| AWSREGION       | Set the region name (required)                                                                                                                     |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                                                 |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                                                   |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Aws-ElastiCache-Memcached-custom" label="Cloud-Aws-ElastiCache-Memcached-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-ElastiCache-Memcached-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                                                 |                   |             |
| AWSASSUMEROLE   | Set Amazon Resource Name of the role to be assumed                                                                                                 |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                         | paws              |             |
| AWSINSTANCENAME | Set the cluster name (required) (can be defined multiple times)                                                                                    |                   | X           |
| AWSNODEID       | Set the node ID (optional)                                                                                                                         |                   |             |
| AWSREGION       | Set the region name (required)                                                                                                                     |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                                                 |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                                                   |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Aws-ElastiCache-Redis-custom" label="Cloud-Aws-ElastiCache-Redis-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-ElastiCache-Redis-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                                                 |                   | X           |
| AWSASSUMEROLE   | Set Amazon Resource Name of the role to be assumed                                                                                                 |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                         | paws              |             |
| AWSINSTANCENAME | Set the cluster name (required) (can be defined multiple times)                                                                                    |                   | X           |
| AWSNODEID       | Set the node ID (optional)                                                                                                                         |                   |             |
| AWSREGION       | Set the region name (required)                                                                                                                     |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                                                 |                   | X           |
| PROXYURL        | Proxy URL if any                                                                                                                                   |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="ElastiCache-Commands" label="ElastiCache-Commands">

| Macro                               | Description                                                                                                                                                                                                 | Valeur par défaut   | Obligatoire |
|:------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                           | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                                                                                  | average             |             |
| TIMEFRAME                           | Set timeframe in seconds                                                                                                                                                                                    | 600                 |             |
| PERIOD                              | Set period in seconds                                                                                                                                                                                       | 60                  |             |
| FILTERMETRIC                        | Filter metrics (can be: 'GetTypeCmds', 'HashBasedCmds', 'KeyBasedCmds', 'ListBasedCmds', 'SetBasedCmds', 'SetTypeCmds', 'SortedSetBasedCmds', 'StringBasedCmds', 'HyperLogLogBasedCmds')  (can be a regexp) |                     |             |
| WARNINGGETTYPECMDSAVERAGE           | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALGETTYPECMDSAVERAGE          | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGHASHBASEDCMDSAVERAGE         | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALHASHBASEDCMDSAVERAGE        | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGHYPERLOGLOGBASEDCMDSAVERAGE  | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALHYPERLOGLOGBASEDCMDSAVERAGE | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGKEYBASEDCMDSAVERAGE          | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALKEYBASEDCMDSAVERAGE         | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGLISTBASEDCMDSAVERAGE         | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALLISTBASEDCMDSAVERAGE        | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGSETBASEDCMDSAVERAGE          | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALSETBASEDCMDSAVERAGE         | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGSETTYPECMDSAVERAGE           | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALSETTYPECMDSAVERAGE          | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGSORTEDSETBASEDCMDSAVERAGE    | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALSORTEDSETBASEDCMDSAVERAGE   | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGSTRINGBASEDCMDSAVERAGE       | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALSTRINGBASEDCMDSAVERAGE      | Threshold                                                                                                                                                                                                   |                     |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                            | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Connections" label="ElastiCache-Connections">

| Macro                          | Description                                                                                                                                      | Valeur par défaut   | Obligatoire |
|:-------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                      | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                       | average             |             |
| TIMEFRAME                      | Set timeframe in seconds                                                                                                                         | 600                 |             |
| PERIOD                         | Set period in seconds                                                                                                                            | 60                  |             |
| FILTERMETRIC                   | Filter metrics (can be: 'CurrConnections', 'NewConnections')  (can be a regexp)                                                                  |                     |             |
| WARNINGCURRCONNECTIONSAVERAGE  | Threshold                                                                                                                                        |                     |             |
| CRITICALCURRCONNECTIONSAVERAGE | Threshold                                                                                                                                        |                     |             |
| WARNINGNEWCONNECTIONSAVERAGE   | Threshold                                                                                                                                        |                     |             |
| CRITICALNEWCONNECTIONSAVERAGE  | Threshold                                                                                                                                        |                     |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Cpu" label="ElastiCache-Cpu">

| Macro                         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                     | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                       | average           |             |
| TIMEFRAME                     | Set timeframe in seconds                                                                                                                         | 600               |             |
| PERIOD                        | Set period in seconds                                                                                                                            | 60                |             |
| WARNINGCPUUTILIZATIONAVERAGE  | Threshold                                                                                                                                        | 80                |             |
| CRITICALCPUUTILIZATIONAVERAGE | Threshold                                                                                                                                        | 90                |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="ElastiCache-Evictions" label="ElastiCache-Evictions">

| Macro                    | Description                                                                                                                                      | Valeur par défaut   | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                       | average             |             |
| TIMEFRAME                | Set timeframe in seconds                                                                                                                         | 600                 |             |
| PERIOD                   | Set period in seconds                                                                                                                            | 60                  |             |
| FILTERMETRIC             | Filter metrics (can be: 'Evictions', 'Reclaimed')  (can be a regexp)                                                                             |                     |             |
| WARNINGEVICTIONSAVERAGE  | Threshold                                                                                                                                        |                     |             |
| CRITICALEVICTIONSAVERAGE | Threshold                                                                                                                                        |                     |             |
| WARNINGRECLAIMEDAVERAGE  | Threshold                                                                                                                                        |                     |             |
| CRITICALRECLAIMEDAVERAGE | Threshold                                                                                                                                        |                     |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Items" label="ElastiCache-Items">

| Macro                    | Description                                                                                                                                      | Valeur par défaut   | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                       | average             |             |
| TIMEFRAME                | Set timeframe in seconds                                                                                                                         | 600                 |             |
| PERIOD                   | Set period in seconds                                                                                                                            | 60                  |             |
| FILTERMETRIC             | Filter metrics (can be: 'CurrItems', 'NewItems')  (can be a regexp)                                                                              |                     |             |
| WARNINGCURRITEMSAVERAGE  | Threshold                                                                                                                                        |                     |             |
| CRITICALCURRITEMSAVERAGE | Threshold                                                                                                                                        |                     |             |
| WARNINGNEWITEMSAVERAGE   | Threshold                                                                                                                                        |                     |             |
| CRITICALNEWITEMSAVERAGE  | Threshold                                                                                                                                        |                     |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Network" label="ElastiCache-Network">

| Macro                          | Description                                                                                                                                      | Valeur par défaut   | Obligatoire |
|:-------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                      | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                       | average             |             |
| TIMEFRAME                      | Set timeframe in seconds                                                                                                                         | 600                 |             |
| PERIOD                         | Set period in seconds                                                                                                                            | 60                  |             |
| FILTERMETRIC                   | Filter metrics (can be: 'NetworkBytesIn', 'NetworkBytesOut')  (can be a regexp)                                                                  |                     |             |
| WARNINGNETWORKBYTESINAVERAGE   | Threshold                                                                                                                                        |                     |             |
| CRITICALNETWORKBYTESINAVERAGE  | Threshold                                                                                                                                        |                     |             |
| WARNINGNETWORKBYTESOUTAVERAGE  | Threshold                                                                                                                                        |                     |             |
| CRITICALNETWORKBYTESOUTAVERAGE | Threshold                                                                                                                                        |                     |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Replication" label="ElastiCache-Replication">

| Macro                           | Description                                                                                                                                      | Valeur par défaut   | Obligatoire |
|:--------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                       | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                       | average             |             |
| TIMEFRAME                       | Set timeframe in seconds                                                                                                                         | 600                 |             |
| PERIOD                          | Set period in seconds                                                                                                                            | 60                  |             |
| FILTERMETRIC                    | Filter metrics (can be: 'ReplicationBytes', 'ReplicationLag')  (can be a regexp)                                                                 |                     |             |
| WARNINGREPLICATIONBYTESAVERAGE  | Threshold                                                                                                                                        |                     |             |
| CRITICALREPLICATIONBYTESAVERAGE | Threshold                                                                                                                                        |                     |             |
| WARNINGREPLICATIONLAGAVERAGE    | Threshold                                                                                                                                        |                     |             |
| CRITICALREPLICATIONLAGAVERAGE   | Threshold                                                                                                                                        |                     |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Requests" label="ElastiCache-Requests">

| Macro                      | Description                                                                                                                                      | Valeur par défaut   | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                  | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                       | average             |             |
| TIMEFRAME                  | Set timeframe in seconds                                                                                                                         | 600                 |             |
| PERIOD                     | Set period in seconds                                                                                                                            | 60                  |             |
| FILTERMETRIC               | Filter metrics (can be: 'CacheHits', 'CacheMisses')  (can be a regexp)                                                                           |                     |             |
| WARNINGCACHEHITSAVERAGE    | Threshold                                                                                                                                        |                     |             |
| CRITICALCACHEHITSAVERAGE   | Threshold                                                                                                                                        |                     |             |
| WARNINGCACHEMISSESAVERAGE  | Threshold                                                                                                                                        |                     |             |
| CRITICALCACHEMISSESAVERAGE | Threshold                                                                                                                                        |                     |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Usage" label="ElastiCache-Usage">

| Macro                            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                        | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                       | average           |             |
| TIMEFRAME                        | Set timeframe in seconds                                                                                                                         | 600               |             |
| PERIOD                           | Set period in seconds                                                                                                                            | 60                |             |
| WARNINGBYTESUSEDFORCACHEAVERAGE  | Threshold                                                                                                                                        |                   |             |
| CRITICALBYTESUSEDFORCACHEAVERAGE | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une instance AWS en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_aws_elasticache_api.pl \
	--plugin=cloud::aws::elasticache::plugin \
	--mode=cpu \
	--custommode='' \
	--aws-secret-key='XXXX' \
	--aws-access-key='XXXX' \
	--aws-role-arn='' \
	--region='eu-west-1' \
	--name='' \
	--node-id='' \
	--proxyurl=''  \
	--statistic='average' \
	--timeframe='600' \
	--period='60' \
	--warning-cpuutilization-average='80' \
	--critical-cpuutilization-average='90' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: | 

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
/usr/lib/centreon/plugins/centreon_aws_elasticache_api.pl \
	--plugin=cloud::aws::elasticache::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                       | Modèle de service associé                           |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| commands-memcached [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/commandsmemcached.pm)] | Cloud-Aws-ElastiCache-Commands-Memcached-Api-custom |
| commands-redis [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/commandsredis.pm)]         | Cloud-Aws-ElastiCache-Commands-Redis-Api-custom     |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/connections.pm)]              | Cloud-Aws-ElastiCache-Connections-Api-custom        |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/cpu.pm)]                              | Cloud-Aws-ElastiCache-Cpu-Api-custom                |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/discovery.pm)]                  | Used for host discovery                             |
| evictions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/evictions.pm)]                  | Cloud-Aws-ElastiCache-Evictions-Api-custom          |
| items [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/items.pm)]                          | Cloud-Aws-ElastiCache-Items-Api-custom              |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/network.pm)]                      | Cloud-Aws-ElastiCache-Network-Api-custom            |
| replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/replication.pm)]              | Cloud-Aws-ElastiCache-Replication-Api-custom        |
| requests-memcached [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/requestsmemcached.pm)] | Cloud-Aws-ElastiCache-Requests-Memcached-Api-custom |
| requests-redis [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/requestsredis.pm)]         | Cloud-Aws-ElastiCache-Requests-Redis-Api-custom     |
| usage-memcached [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/usagememcached.pm)]       | Cloud-Aws-ElastiCache-Usage-Memcached-Api-custom    |
| usage-redis [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/usageredis.pm)]               | Cloud-Aws-ElastiCache-Usage-Redis-Api-custom        |

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
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --aws-secret-key                           |   Set AWS secret key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --aws-access-key                           |   Set AWS access key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --aws-session-token                        |   Set AWS session token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --aws-role-arn                             |   Set Amazon Resource Name of the role to be assumed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --region                                   |   Set the region name (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --period                                   |   Set period in seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeframe                                |   Set timeframe in seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statistic                                |   Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --zeroed                                   |   Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --proxyurl                                 |   Proxy URL if any                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --aws-profile                              |   Set AWS profile.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --endpoint-url                             |   Override AWS service endpoint URL if necessary.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --sudo                                     |   Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --command                                  |   Command to get information (default: 'aws'). Can be changed if you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --command-path                             |   Command path (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-options                          |   Command options (default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --skip-ssl-check                           |   Avoid certificate issuer verification. Useful when AWS resources are hosted by a third party.   Note that it strips all stderr from the command result. Debug will only display CLI instead of everything.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="ElastiCache-Commands" label="ElastiCache-Commands">

| Option                          | Description                                                                                                                                                                                                                                                            |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                            |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                                                                                                                                                                     |
| --node-id                       |   Set the node ID (optional).                                                                                                                                                                                                                                          |
| --filter-metric                 |   Filter metrics (can be: 'GetTypeCmds', 'HashBasedCmds', 'KeyBasedCmds', 'ListBasedCmds', 'SetBasedCmds', 'SetTypeCmds', 'SortedSetBasedCmds', 'StringBasedCmds', 'HyperLogLogBasedCmds')  (can be a regexp).                                                         |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'gettypecmds', 'hashbasedcmds', 'keybasedcmds', 'listbasedcmds', 'setbasedcmds', 'settypecmds', 'sortedsetbasedcmds', 'stringbasedcmds', 'hyperloglogbasedcmds', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'gettypecmds', 'hashbasedcmds', 'keybasedcmds', 'listbasedcmds', 'setbasedcmds', 'settypecmds', 'sortedsetbasedcmds', 'stringbasedcmds' 'hyperloglogbasedcmds', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                                                                                                                                                      |

</TabItem>
<TabItem value="ElastiCache-Connections" label="ElastiCache-Connections">

| Option                          | Description                                                                                                                                 |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                 |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                                          |
| --node-id                       |   Set the node ID (optional).                                                                                                               |
| --filter-metric                 |   Filter metrics (can be: 'CurrConnections', 'NewConnections')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'currconnections', 'newconnections', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'currconnections', 'newconnections', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                           |

</TabItem>
<TabItem value="ElastiCache-Cpu" label="ElastiCache-Cpu">

| Option                      | Description                                                                                                                   |
|:----------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters           |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --name                      |   Set the cluster name (required) (can be defined multiple times).                                                            |
| --node-id                   |   Set the node ID (optional).                                                                                                 |
| --warning-cpuutilization-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average', 'sum').                                                      |
| --critical-cpuutilization-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average', 'sum').                                                     |

</TabItem>
<TabItem value="ElastiCache-Evictions" label="ElastiCache-Evictions">

| Option                          | Description                                                                                                                      |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'      |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                               |
| --node-id                       |   Set the node ID (optional).                                                                                                    |
| --filter-metric                 |   Filter metrics (can be: 'Evictions', 'Reclaimed')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'evictions', 'reclaimed', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'evictions', 'reclaimed', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                |

</TabItem>
<TabItem value="ElastiCache-Items" label="ElastiCache-Items">

| Option                          | Description                                                                                                                     |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'     |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                              |
| --node-id                       |   Set the node ID (optional).                                                                                                   |
| --filter-metric                 |   Filter metrics (can be: 'CurrItems', 'NewItems')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'curritems', 'newitems', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'curritems', 'newitems', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                               |

</TabItem>
<TabItem value="ElastiCache-Network" label="ElastiCache-Network">

| Option                          | Description                                                                                                                                 |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                 |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                                          |
| --node-id                       |   Set the node ID (optional).                                                                                                               |
| --filter-metric                 |   Filter metrics (can be: 'NetworkBytesIn', 'NetworkBytesOut')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'networkbytesin', 'networkbytesout', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'networkbytesin', 'networkbytesout', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                           |

</TabItem>
<TabItem value="ElastiCache-Replication" label="ElastiCache-Replication">

| Option                          | Description                                                                                                                                  |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                  |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                                           |
| --node-id                       |   Set the node ID (optional).                                                                                                                |
| --filter-metric                 |   Filter metrics (can be: 'ReplicationBytes', 'ReplicationLag')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'replicationbytes', 'replicationlag', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'replicationbytes', 'replicationlag', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                            |

</TabItem>
<TabItem value="ElastiCache-Requests" label="ElastiCache-Requests">

| Option                          | Description                                                                                                                        |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'        |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                                 |
| --node-id                       |   Set the node ID (optional).                                                                                                      |
| --filter-metric                 |   Filter metrics (can be: 'CacheHits', 'CacheMisses')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'cachehits', 'cachemisses', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'cachehits', 'cachemisses', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                  |

</TabItem>
<TabItem value="ElastiCache-Usage" label="ElastiCache-Usage">

| Option                          | Description                                                                                                                   |
|:--------------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                            |
| --node-id                       |   Set the node ID (optional).                                                                                                 |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'bytesusedforcache', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').      |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'bytesusedforcache', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aws_elasticache_api.pl \
	--plugin=cloud::aws::elasticache::plugin \
	--mode=cpu \
	--help
```
