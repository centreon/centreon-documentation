---
id: cloud-aws-elasticache
title: Amazon ElastiCache
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Amazon ElastiCache** apporte 3 modèles d'hôte différents :

* Cloud-Aws-ElastiCache-custom
* Cloud-Aws-ElastiCache-Memcached-custom
* Cloud-Aws-ElastiCache-Redis-custom

Il apporte les modèles de service suivants :

| Alias                   | Modèle de service                            | Description                                      | Défaut |
|:------------------------|:---------------------------------------------|:-------------------------------------------------|:-------|
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Memcached-Api | Contrôle les performances du cache Memcached     | X      |
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Redis-Api     | Contrôle les performances du cache Redis         | X      |
| ElastiCache-Connections | Cloud-Aws-ElastiCache-Connections-Api        | Contrôle le nombre de connexions                  | X      |
| ElastiCache-Cpu         | Cloud-Aws-ElastiCache-Cpu-Api                | Contrôle l'utilisation CPU                       | X      |
| ElastiCache-Evictions   | Cloud-Aws-ElastiCache-Evictions-Api          | Contrôle le nombre d'évictions                   | X      |
| ElastiCache-Items       | Cloud-Aws-ElastiCache-Items-Api              | Contrôle le nombre d'items                       | X      |
| ElastiCache-Network     | Cloud-Aws-ElastiCache-Network-Api            | Contrôle l'utilisation du réseau                 | X      |
| ElastiCache-Replication | Cloud-Aws-ElastiCache-Replication-Api        | Contrôle les performances de la réplication      | X      |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Memcached-Api | Contrôle les performances du cache Memcached     | X      |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Redis-Api     | Contrôle les performances du cache Redis         | X      |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Memcached-Api    | Contrôle l'espace utilisé par le cache Memcached | X      |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Redis-Api        | Contrôle l'espace utilisé par le cache Redis     | X      |

### Règles de découverte

Ce pack propose une règle de découverte d'hôtes permettant de découvrir automatiquement des ressources Elasticache.


Vous trouverez plus d'informations sur la découverte d'hôtes et son fonctionnement sur la documentation du module : [Découverte des hôtes](/onprem/monitoring/discovery/hosts-discovery).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="ElastiCache-Commands" label="ElastiCache-Commands">

| Metric name      | Description                       | Unit                                                     |
| :--------------- | :---------------------------------|:---------------------------------------------------- |
| CPUUtilization   | The percentage of CPU utilization.| Percent                                       |

</TabItem>
<TabItem value="ElastiCache-Connections" label="ElastiCache-Connections">

| Metric name      | Description   | Unit                                                                         |
| :--------------- | :-------------|:------------------------------------------------------------------------ |
| CurrConnections  | A count of the number of connections connected to the cache at an instant in time. ElastiCache uses two to three of the connections to monitor the cluster. In addition to the above, memcached creates a number of internal connections equal to twice the number of threads used for the node type. The thread count for the various node types can be seen in the Nodetype Specific Parameters of the applicable Parameter Group. | Count                                                                               |
| NewConnections   | The number of new connections the cache has received. This is derived from the memcached total_connections statistic by recording the change in total_connections across a period of time. This will always be at least 1, due to a connection reserved for ElastiCache. | Count                                            |

</TabItem>
<TabItem value="ElastiCache-Cpu" label="ElastiCache-Cpu">

| Metric name      | Description                       |      Unit                                               |
| :--------------- | :---------------------------------|:---------------------------------------------------- |
| CPUUtilization   | The percentage of CPU utilization.| Percent                                       |

</TabItem>
<TabItem value="ElastiCache-Evictions" label="ElastiCache-Evictions">

| Metric name      | Description        | Unit                                                                    |
| :--------------- | :------------------|:------------------------------------------------------------------- |
| Evictions   | The number of non-expired items the cache evicted to allow space for new writes.	|  Count                                       |
| Reclaimed   | The number of expired items the cache evicted to allow space for new writes.		|Count                                       |


</TabItem>
<TabItem value="ElastiCache-Items" label="ElastiCache-Items">

| Metric name      | Description   |          Unit                                                               |
| :--------------- | :-------------|:------------------------------------------------------------------------ |
| CurrItems   | A count of the number of items currently stored in the cache.			 | Count                                      |
| NewItems   | The number of new items the cache has stored. This is derived from the memcached total_items statistic by recording the change in total_items across a period of time.	 | Count      

</TabItem>
<TabItem value="ElastiCache-Network" label="ElastiCache-Network">

| Metric name      | Description   | Unit                                                                         |
| :--------------- | :-------------|:------------------------------------------------------------------------ |
| NetworkBytesIn   | The number of bytes the host has read from the network.			 | Bytes         |
| NetworkBytesIn   | 	The number of bytes sent out on all network interfaces by the instance.   |Bytes                                                                                  |

</TabItem>
<TabItem value="ElastiCache-Replication" label="ElastiCache-Replication">

| Metric name      | Description     | Unit                                                                       |
| :--------------- | :---------------|:---------------------------------------------------------------------- |
| ReplicationBytes | For nodes in a replicated configuration, ReplicationBytes reports the number of bytes that the primary is sending to all of its replicas. This metric is representative of the write load on the replication group. 			| Bytes         |
| ReplicationLag   | This metric is only applicable for a node running as a read replica. It represents how far behind, in seconds, the replica is in applying changes from the primary node. For Redis engine version 5.0.6 onwards, the lag can be measured in milliseconds.  | Seconds                   |

</TabItem>
<TabItem value="ElastiCache-Requests" label="ElastiCache-Requests">

| Metric name      | Description     | Unit                                                                       |
| :--------------- | :---------------|:---------------------------------------------------------------------- |
| CasHits |The number of Cas requests the cache has received where the requested key was found and the Cas value matched.			 |Count         |
| CasMisses   | The number of Cas requests the cache has received where the key requested was not found.  | Count                   |
| DecrHits   | The number of decrement requests the cache has received where the requested key was found.   | Count                   |
| DecrMisses   | The number of decrement requests the cache has received where the requested key was not found.   | Count                   |
| DeleteHits   | The number of delete requests the cache has received where the requested key was found.   | Count                   |
| DeleteMisses  |The number of delete requests the cache has received where the requested key was not found.  | Count                   |
| GetHits  |The number of get requests the cache has received where the key requested was found.  | Count                   |
| GetMisses  |The number of get requests the cache has received where the key requested was not found.   | Count                   |
| IncrHits  |The number of increment requests the cache has received where the key requested was found.  | Count                   |
| IncrMisses  |The number of increment requests the cache has received where the key requested was not found.   | Count                   |
| TouchHits  |The number of keys that have been touched and were given a new expiration time.  | Count                   |
| TouchMisses  |The number of items that have been touched, but were not found.   | Count                   |
| CacheHits | The number of successful read-only key lookups in the main dictionary.  | Count                   |
| CacheMisses  | The number of unsuccessful read-only key lookups in the main dictionary.    | Count            |
</TabItem>
<TabItem value="ElastiCache-Usage" label="ElastiCache-Usage">

| Metric name      | Description      | Unit                                                                      |
| :--------------- | :----------------|:--------------------------------------------------------------------- |
| BytesUsedForCacheItems |The number of bytes used to store cache items.			| Bytes         |
| BytesUsedForCache   | Dimension: Tier=Memory for Redis clusters using Data tiering: The total number of bytes used for cache by memory. This is the value of used_memory statistic at Redis  | Bytes                   |

</TabItem>
</Tabs>

## Prérequis

### Privilèges AWS

Pour pouvoir utiliser le monitoring AWS/EC2, configurez un compte (combinaison de access key et secret key) et attribuez-lui les privilèges suivants :

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| elasticache:describeCacheClusters         | Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.                                                     |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EC2 namespace on Cloudwatch.           |

### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire *awscli* fourni par Amazon, soit le SDK Perl *paws*. Le SDK est recommandé car plus performant.

> **Attention** il n'est pas possible d'utiliser *paws* si la connexion s'effectue au travers d'un proxy.

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

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-aws-elasticache
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-elasticache
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-aws-elasticache
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Amazon ElastiCache**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/onprem/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Aws-Elasticache-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Elasticache-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-aws-elasticache-api
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Elasticache**.
* Appliquez le modèle d'hôte **Cloud-Aws-ElastiCache-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro           | Description                                                                            |
|:------------|:----------------|:---------------------------------------------------------------------------------------|
|             | AWSACCESSKEY    |                                                                                        |
|             | AWSASSUMEROLE   |                                                                                        |
|             | AWSCUSTOMMODE   |                                                                                        |
|             | AWSINSTANCENAME |                                                                                        |
|             | AWSNODEID       |                                                                                        |
|             | AWSREGION       |                                                                                        |
|             | AWSSECRETKEY    |                                                                                        |
|             | EXTRAOPTIONS    | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|             | PROXYURL        |                                                                                        |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_aws_elasticache_api.pl \
    --plugin=cloud::aws::elasticache::plugin \
    --mode=cpu \
    --custommode='' \
    --aws-secret-key='' \
    --aws-access-key='' \
    --aws-role-arn='' \
    --region='' \
    --name='' \
    --node-id='' \
    --proxyurl='' \
    --statistic='average' \
    --timeframe='600' \
    --period='60' \
    --warning-cpuutilization-average='' \
    --critical-cpuutilization-average='' \
    --per-sec \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_aws_elasticache_api.pl \
    --plugin=cloud::aws::elasticache::plugin \
    --mode=cpu \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_aws_elasticache_api.pl \
    --plugin=cloud::aws::elasticache::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.