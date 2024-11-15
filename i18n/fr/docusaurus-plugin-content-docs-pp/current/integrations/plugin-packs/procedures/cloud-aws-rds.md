---
id: cloud-aws-rds
title: Amazon RDS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Amazon Relational Database Service (Amazon RDS) est un service web qui facilite la configuration, l'exploitation et la mise à l'échelle d'une base de données relationnelle dans le Cloud AWS. Il fournit des capacités redimensionnables, à faible coût, pour les bases de données relationnelles classiques, et gère les tâches courantes d'administration de base de données.

## Contenu du pack

### Modèles

Le connecteur de supervision **Amazon RDS** apporte 7 modèles d'hôte :

* **Cloud-Aws-Rds-Cluster-custom**
* **Cloud-Aws-Rds-Instance-Aurora-custom**
* **Cloud-Aws-Rds-Instance-MSSQL-custom**
* **Cloud-Aws-Rds-Instance-MariaDB-custom**
* **Cloud-Aws-Rds-Instance-MySQL-custom**
* **Cloud-Aws-Rds-Instance-Oracle-custom**
* **Cloud-Aws-Rds-Instance-PostgreSQL-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Rds-Cluster-custom" label="Cloud-Aws-Rds-Cluster-custom">

| Alias            | Modèle de service                     | Description                                                   |
|:-----------------|:--------------------------------------|:--------------------------------------------------------------|
| Rds-Connections  | Cloud-Aws-Rds-Connections-Api-custom  | Contrôle le nombre de connexions à l'instance                  |
| Rds-Cpu-Credit   | Cloud-Aws-Rds-Cpu-Credit-Api-custom   | Contrôle permettant de vérifier l'utilisation des crédits CPU |
| Rds-Cpu-Usage    | Cloud-Aws-Rds-Cpu-Usage-Api-custom    | Contrôle permettant de vérifier l'utilisation CPU             |
| Rds-Network      | Cloud-Aws-Rds-Network-Api-custom      | Contrôle l'utilisation du réseau                              |
| Rds-Queries      | Cloud-Aws-Rds-Queries-Api-custom      | Contrôle le nombre de requêtes effectuées sur l'instance      |
| Rds-Transactions | Cloud-Aws-Rds-Transactions-Api-custom | Contrôle le nombre de transactions effectuées sur l'instance   |
| Rds-Volume-Iops  | Cloud-Aws-Rds-Volume-Iops-Api-custom  | Contrôle l'utilisation des écritures                          |
| Rds-Volume-Usage | Cloud-Aws-Rds-Volume-Usage-Api-custom | Contrôle l'utilisation des volumes                            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Rds-Cluster-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-Aurora-custom" label="Cloud-Aws-Rds-Instance-Aurora-custom">

| Alias            | Modèle de service                     | Description                                                   |
|:-----------------|:--------------------------------------|:--------------------------------------------------------------|
| Rds-Connections  | Cloud-Aws-Rds-Connections-Api-custom  | Contrôle le nombre de connexions à l'instance                  |
| Rds-Cpu-Credit   | Cloud-Aws-Rds-Cpu-Credit-Api-custom   | Contrôle permettant de vérifier l'utilisation des crédits CPU |
| Rds-Cpu-Usage    | Cloud-Aws-Rds-Cpu-Usage-Api-custom    | Contrôle permettant de vérifier l'utilisation CPU             |
| Rds-Network      | Cloud-Aws-Rds-Network-Api-custom      | Contrôle l'utilisation du réseau                              |
| Rds-Queries      | Cloud-Aws-Rds-Queries-Api-custom      | Contrôle le nombre de requêtes effectuées sur l'instance      |
| Rds-Transactions | Cloud-Aws-Rds-Transactions-Api-custom | Contrôle le nombre de transactions effectuées sur l'instance   |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Rds-Instance-Aurora-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MSSQL-custom" label="Cloud-Aws-Rds-Instance-MSSQL-custom">

| Alias           | Modèle de service                    | Description                                                   |
|:----------------|:-------------------------------------|:--------------------------------------------------------------|
| Rds-Connections | Cloud-Aws-Rds-Connections-Api-custom | Contrôle le nombre de connexions à l'instance                  |
| Rds-Cpu-Credit  | Cloud-Aws-Rds-Cpu-Credit-Api-custom  | Contrôle permettant de vérifier l'utilisation des crédits CPU |
| Rds-Cpu-Usage   | Cloud-Aws-Rds-Cpu-Usage-Api-custom   | Contrôle permettant de vérifier l'utilisation CPU             |
| Rds-Network     | Cloud-Aws-Rds-Network-Api-custom     | Contrôle l'utilisation du réseau                              |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Rds-Instance-MSSQL-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MariaDB-custom" label="Cloud-Aws-Rds-Instance-MariaDB-custom">

| Alias           | Modèle de service                    | Description                                                   |
|:----------------|:-------------------------------------|:--------------------------------------------------------------|
| Rds-Connections | Cloud-Aws-Rds-Connections-Api-custom | Contrôle le nombre de connexions à l'instance                  |
| Rds-Cpu-Credit  | Cloud-Aws-Rds-Cpu-Credit-Api-custom  | Contrôle permettant de vérifier l'utilisation des crédits CPU |
| Rds-Cpu-Usage   | Cloud-Aws-Rds-Cpu-Usage-Api-custom   | Contrôle permettant de vérifier l'utilisation CPU             |
| Rds-Diskio      | Cloud-Aws-Rds-Diskio-Api-custom      | Contrôle l'utilisation des écritures                          |
| Rds-Network     | Cloud-Aws-Rds-Network-Api-custom     | Contrôle l'utilisation du réseau                              |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Rds-Instance-MariaDB-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MySQL-custom" label="Cloud-Aws-Rds-Instance-MySQL-custom">

| Alias           | Modèle de service                    | Description                                                   |
|:----------------|:-------------------------------------|:--------------------------------------------------------------|
| Rds-Connections | Cloud-Aws-Rds-Connections-Api-custom | Contrôle le nombre de connexions à l'instance                  |
| Rds-Cpu-Credit  | Cloud-Aws-Rds-Cpu-Credit-Api-custom  | Contrôle permettant de vérifier l'utilisation des crédits CPU |
| Rds-Cpu-Usage   | Cloud-Aws-Rds-Cpu-Usage-Api-custom   | Contrôle permettant de vérifier l'utilisation CPU             |
| Rds-Diskio      | Cloud-Aws-Rds-Diskio-Api-custom      | Contrôle l'utilisation des écritures                          |
| Rds-Network     | Cloud-Aws-Rds-Network-Api-custom     | Contrôle l'utilisation du réseau                              |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Rds-Instance-MySQL-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-Oracle-custom" label="Cloud-Aws-Rds-Instance-Oracle-custom">

| Alias           | Modèle de service                    | Description                                                   |
|:----------------|:-------------------------------------|:--------------------------------------------------------------|
| Rds-Connections | Cloud-Aws-Rds-Connections-Api-custom | Contrôle le nombre de connexions à l'instance                  |
| Rds-Cpu-Credit  | Cloud-Aws-Rds-Cpu-Credit-Api-custom  | Contrôle permettant de vérifier l'utilisation des crédits CPU |
| Rds-Cpu-Usage   | Cloud-Aws-Rds-Cpu-Usage-Api-custom   | Contrôle permettant de vérifier l'utilisation CPU             |
| Rds-Network     | Cloud-Aws-Rds-Network-Api-custom     | Contrôle l'utilisation du réseau                              |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Rds-Instance-Oracle-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-PostgreSQL-custom" label="Cloud-Aws-Rds-Instance-PostgreSQL-custom">

| Alias           | Modèle de service                    | Description                                                   |
|:----------------|:-------------------------------------|:--------------------------------------------------------------|
| Rds-Connections | Cloud-Aws-Rds-Connections-Api-custom | Contrôle le nombre de connexions à l'instance                  |
| Rds-Cpu-Credit  | Cloud-Aws-Rds-Cpu-Credit-Api-custom  | Contrôle permettant de vérifier l'utilisation des crédits CPU |
| Rds-Cpu-Usage   | Cloud-Aws-Rds-Cpu-Usage-Api-custom   | Contrôle permettant de vérifier l'utilisation CPU             |
| Rds-Network     | Cloud-Aws-Rds-Network-Api-custom     | Contrôle l'utilisation du réseau                              |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Rds-Instance-PostgreSQL-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias               | Modèle de service                        | Description                                                 |
|:--------------------|:-----------------------------------------|:------------------------------------------------------------|
| Rds-Instance-Status | Cloud-Aws-Rds-Instance-Status-Api-custom | Contrôle permettant de vérifier le statut des instances RDS |
| Rds-Storage         | Cloud-Aws-Rds-Storage-Api-custom         | Contrôle l'utilisation du stockage                          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                       |
|:----------------|:----------------------------------|
| Amazon AWS RDS  | Discover Amazon AWS RDS instances |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Rds-Connections" label="Rds-Connections">

| Métrique            | Description                             | Unité  |
| :------------------ | :-------------------------------------- |:------ |
| DatabaseConnections | Number of connections to the database.  | Count  |

</TabItem>
<TabItem value="Rds-Cpu-Credit" label="Rds-Cpu-Credit">

| Métrique         | Description                                                | Unité                   |                   
| :--------------- | :--------------------------------------------------------- |:----------------------- |
| CPUCreditBalance | Balance of allocated CPU credit for this type of instance.  | Credits (vCPU-minutes)  |
| CPUCreditUsage   | Number of CPU credits consumed.                             | Credits (vCPU-minutes)  |

</TabItem>
<TabItem value="Rds-Cpu-Usage" label="Rds-Cpu-Usage">

| Métrique         | Description                                                | Unité                   |                   
| :--------------- | :--------------------------------------------------------- |:----------------------- |
| CPUUtilization   | The percentage of CPU utilization.                         | Percentage              |

</TabItem>
<TabItem value="Rds-Diskio" label="Rds-Diskio">

| Métrique        | Description                                                                     | Unité        |
| :-------------- | :------------------------------------------------------------------------------ |:------------ |
| ReadIOPS        | The average number of disk read I/O operations per second.                      | Count/Second |
| WriteIOPS       | The average number of disk write I/O operations per second.                     | Count/Second |
| ReadThroughput  | The average number of bytes read from disk per second.                          | Bytes/Second |
| WriteThroughput | The average number of bytes write to disk per second.                           | Bytes/Second |
| ReadLatency     | The average amount of time taken per disk I/O read operation.                   | Seconds      |
| WriteLatency    | The average amount of time taken per disk I/O write operation.                  | Seconds      |
| DiskQueueDepth  | The number of outstanding I/Os (read/write requests) waiting to access the disk. | Count        |

</TabItem>
<TabItem value="Rds-Instance-Status" label="Rds-Instance-Status">

| Métrique               | Unité |
|:-----------------------|:------|
| total-available        | N/A   |
| total-failed           | N/A   |
| total-backing-up       | N/A   |
| total-maintenance      | N/A   |
| total-stopped          | N/A   |
| total-storage-full     | N/A   |
| *aws_instances*#status | N/A   |

</TabItem>
<TabItem value="Rds-Network" label="Rds-Network">

| Métrique                  | Description                                                                                                                          | Unité         |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |:------------- |
| NetworkReceiveThroughput  | The incoming traffic on the DB instance, including both customer DB traffic and AWS/RDS traffic used for monitoring and replication. | Bytes/Second  |
| NetworkTransmitThroughput | The outgoing traffic on the DB instance, including both customer DB traffic and AWS/RDS traffic used for monitoring and replication. | Bytes/Second  |

</TabItem>
<TabItem value="Rds-Queries" label="Rds-Queries">

| Métrique         | Description                                                                                             |
| :--------------- | :------------------------------------------------------------------------------------------------------ |
| Queries          | The average number of queries executed per second. **(Only available on Aurora MySQL)**                  |
| InsertThroughput | The average number of insert queries per second. **(Only available on Aurora MySQL)**                    |
| SelectThroughput | The average number of select queries per second **(Only available on Aurora MySQL)**                    |
| DeleteThroughput | The average number of delete queries per second **(Only available on Aurora MySQL)**                    |
| UpdateThroughput | The average number of update queries per second **(Only available on Aurora MySQL)**                    |
| DDLThroughput    | The average number of DataDefinitionLanguage requests per second **(Only available on Aurora MySQL)**   |
| DMLThroughput    | The average number of DataModificationLanguage requests per second. **(Only available on Aurora MySQL)** |

</TabItem>
<TabItem value="Rds-Storage" label="Rds-Storage">

| Métrique                       | Unité |
|:-------------------------------|:------|
| storage.space.free.bytes       | B     |
| storage.space.usage.percentage | %     |
| memory.free.bytes              | B     |

</TabItem>
<TabItem value="Rds-Transactions" label="Rds-Transactions">

| Métrique            | Description                                                                                                                                                                                                                  |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ActiveTransactions  | The average number of current transactions executing on an Aurora database instance per second. **(Only available on Aurora MySQL.) Set innodb\_monitor\_enable='all' in the DB parameter group for a specific DB instance.** |
| BlockedTransactions | The average number of transactions in the database that are blocked per second. **(Only available on Aurora MySQL)**                                                                                                          |
| CommitLatency       | The amount of latency for commit operations, in milliseconds. **(Only available on Aurora MySQL and Postgres)**                                                                                                               |
| CommitThroughput    | The average number of commit operations per second. **(Only available on Aurora MySQL and Postgres)**                                                                                                                         |

</TabItem>
<TabItem value="Rds-Volume-Iops" label="Rds-Volume-Iops">

| Métrique        | Description                                                                                                                                                    |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VolumeReadIOPs  | The number of billed read I/O operations from a cluster volume, reported at 5-minute intervals. **(Only available on Aurora MySQL and Postgres)**              |
| VolumeWriteIOPs | The number of write disk I/O operations to the cluster volume, reported at 5-minute intervals. **(Only available on Aurora MySQL and Postgres)**               |

</TabItem>
<TabItem value="Rds-Volume-Usage" label="Rds-Volume-Usage">

| Métrique        | Description                                                                                                                                                    |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VolumeBytesUsed | The amount of storage used by your Aurora DB instance, in bytes and then affecting the cost of your instance. **(Only available on Aurora MySQL and Postgres)** |

</TabItem>
</Tabs>

## Prérequis

### Privilèges AWS

Configurez un compte de service (via une combinaison d'access et secret key) et affectez-lui les privilèges suivants :

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| XXXXX:XXXXXXXXXXXXXXXX         | Get XXXXX.                                                      |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EC2 namespace on Cloudwatch.           |

### Dépendances du Plugin

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
dnf install centreon-pack-cloud-aws-rds
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-rds
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-aws-rds
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-rds
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Amazon RDS**
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
dnf install centreon-plugin-Cloud-Aws-Rds-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Rds-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-aws-rds-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Rds-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Rds-Cluster-custom" label="Cloud-Aws-Rds-Cluster-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Rds-Cluster-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro           | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster')                                                                       | cluster           | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-Aurora-custom" label="Cloud-Aws-Rds-Instance-Aurora-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Rds-Instance-Aurora-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro           | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MSSQL-custom" label="Cloud-Aws-Rds-Instance-MSSQL-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Rds-Instance-MSSQL-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro           | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MariaDB-custom" label="Cloud-Aws-Rds-Instance-MariaDB-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Rds-Instance-MariaDB-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro           | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MySQL-custom" label="Cloud-Aws-Rds-Instance-MySQL-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Rds-Instance-MySQL-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro           | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-Oracle-custom" label="Cloud-Aws-Rds-Instance-Oracle-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Rds-Instance-Oracle-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro           | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-PostgreSQL-custom" label="Cloud-Aws-Rds-Instance-PostgreSQL-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Rds-Instance-PostgreSQL-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro           | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Rds-Connections" label="Rds-Connections">

| Macro                              | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                          | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum')                          | average           |             |
| TIMEFRAME                          | Set timeframe in seconds                                                                            | 600               |             |
| PERIOD                             | Set period in seconds                                                                               | 60                |             |
| FILTERMETRIC                       | Filter metrics (Can be: 'DatabaseConnections') (Can be a regexp)                                    |                   |             |
| WARNINGDATABASECONNECTIONSAVERAGE  |                                                                                                     |                   |             |
| CRITICALDATABASECONNECTIONSAVERAGE |                                                                                                     |                   |             |
| EXTRAOPTIONS                       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Rds-Cpu-Credit" label="Rds-Cpu-Credit">

| Macro                               | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMETRIC                        | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', CPUUtilization') (Can be a regexp)    | Credit            |             |
| STATISTIC                           |                                                                                                     | average           |             |
| TIMEFRAME                           |                                                                                                     | 600               |             |
| PERIOD                              |                                                                                                     | 60                |             |
| WARNINGCPUCREDITBALANCEAVERAGE      |                                                                                                     |                   |             |
| CRITICALCPUCREDITBALANCEAVERAGE     |                                                                                                     |                   |             |
| WARNINGCPUCREDITUSAGEAVERAGE        |                                                                                                     |                   |             |
| CRITICALCPUCREDITUSAGEAVERAGE       |                                                                                                     |                   |             |
| WARNINGCPUCREDITUTILIZATIONAVERAGE  |                                                                                                     |                   |             |
| CRITICALCPUCREDITUTILIZATIONAVERAGE |                                                                                                     |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Rds-Cpu-Usage" label="Rds-Cpu-Usage">

| Macro                               | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMETRIC                        | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', CPUUtilization') (Can be a regexp)    | Utilization       |             |
| STATISTIC                           |                                                                                                     | average           |             |
| TIMEFRAME                           |                                                                                                     | 600               |             |
| PERIOD                              |                                                                                                     | 60                |             |
| WARNINGCPUCREDITBALANCEAVERAGE      |                                                                                                     |                   |             |
| CRITICALCPUCREDITBALANCEAVERAGE     |                                                                                                     |                   |             |
| WARNINGCPUCREDITUSAGEAVERAGE        |                                                                                                     |                   |             |
| CRITICALCPUCREDITUSAGEAVERAGE       |                                                                                                     |                   |             |
| WARNINGCPUCREDITUTILIZATIONAVERAGE  |                                                                                                     | 80                |             |
| CRITICALCPUCREDITUTILIZATIONAVERAGE |                                                                                                     | 90                |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Rds-Diskio" label="Rds-Diskio">

| Macro                          | Description                                                                                                                                              | Valeur par défaut | Obligatoire |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                      |                                                                                                                                                          | average           |             |
| TIMEFRAME                      |                                                                                                                                                          | 600               |             |
| PERIOD                         |                                                                                                                                                          | 60                |             |
| FILTERMETRIC                   | Filter metrics (Can be: 'ReadThroughput', 'WriteThroughput', 'ReadIOPS', 'WriteIOPS', 'ReadLatency', 'WriteLatency', 'DiskQueueDepth') (Can be a regexp) |                   |             |
| CRITICREADTHROUGHPUTALAVERAGE  |                                                                                                                                                          |                   |             |
| CRITICWRITETHROUGHPUTALAVERAGE |                                                                                                                                                          |                   |             |
| CRITICREADLATENCYALAVERAGE     |                                                                                                                                                          |                   |             |
| CRITICWRITELATENCYALAVERAGE    |                                                                                                                                                          |                   |             |
| CRITICDISKQUEUEDEPTHALAVERAGE  |                                                                                                                                                          |                   |             |
| WARNINGDISKQUEUEDEPTHAVERAGE   |                                                                                                                                                          |                   |             |
| WARNINGREADIOPSAVERAGE         |                                                                                                                                                          |                   |             |
| CRITICALREADIOPSAVERAGE        |                                                                                                                                                          |                   |             |
| WARNINGREADLATENCYAVERAGE      |                                                                                                                                                          |                   |             |
| WARNINGREADTHROUGHPUTAVERAGE   |                                                                                                                                                          |                   |             |
| WARNINGWRITEIOPSAVERAGE        |                                                                                                                                                          |                   |             |
| CRITICALWRITEIOPSAVERAGE       |                                                                                                                                                          |                   |             |
| WARNINGWRITELATENCYAVERAGE     |                                                                                                                                                          |                   |             |
| WARNINGWRITETHROUGHPUTAVERAGE  |                                                                                                                                                          |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                      | --verbose         |             |

</TabItem>
<TabItem value="Rds-Instance-Status" label="Rds-Instance-Status">

| Macro                    | Description                                                                                                                           | Valeur par défaut | Obligatoire |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSCUSTOMMODE            |                                                                                                                                       | awscli            |             |
| AWSREGION                |                                                                                                                                       |                   | X           |
| FILTERINSTANCEID         | Filter by instance id (can be a regexp)                                                                                               |                   |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{state}, %{display}  |                   |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{state}, %{display} |                   |             |
| WARNINGTOTALAVAILABLE    | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALAVAILABLE   | Critical threshold                                                                                                                    |                   |             |
| WARNINGTOTALBACKINGUP    | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALBACKINGUP   | Critical threshold                                                                                                                    |                   |             |
| WARNINGTOTALFAILED       | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALFAILED      | Critical threshold                                                                                                                    |                   |             |
| WARNINGTOTALMAINTENANCE  | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALMAINTENANCE | Critical threshold                                                                                                                    |                   |             |
| WARNINGTOTALSTOPPED      | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALSTOPPED     | Critical threshold                                                                                                                    |                   |             |
| WARNINGTOTALSTORAGEFULL  | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALSTORAGEFULL | Critical threshold                                                                                                                    |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                   | --verbose         |             |

</TabItem>
<TabItem value="Rds-Network" label="Rds-Network">

| Macro                                    | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                                |                                                                                                     | average           |             |
| TIMEFRAME                                |                                                                                                     | 600               |             |
| PERIOD                                   |                                                                                                     | 60                |             |
| FILTERMETRIC                             | Filter metrics (Can be: 'NetworkReceiveThroughput', 'NetworkTransmitThroughput') (Can be a regexp)  |                   |             |
| WARNINGNETWORKRECEIVETHROUGHPUTAVERAGE   |                                                                                                     |                   |             |
| CRITICALNETWORKRECEIVETHROUGHPUTAVERAGE  |                                                                                                     |                   |             |
| WARNINGNETWORKTRANSMITTHROUGHPUTAVERAGE  |                                                                                                     |                   |             |
| CRITICALNETWORKTRANSMITTHROUGHPUTAVERAGE |                                                                                                     |                   |             |
| EXTRAOPTIONS                             | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Rds-Queries" label="Rds-Queries">

| Macro                           | Description                                                                                                                                                                                                                                                            | Valeur par défaut | Obligatoire |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                       |                                                                                                                                                                                                                                                                        | average           |             |
| TIMEFRAME                       |                                                                                                                                                                                                                                                                        | 600               |             |
| PERIOD                          |                                                                                                                                                                                                                                                                        | 60                |             |
| FILTERMETRIC                    | Filter metrics (Can be: 'Queries', 'InsertThroughput', 'DeleteThroughput', 'SelectThroughput', 'UpdateThroughput', 'DMLThroughput', 'DDLThroughput', 'InsertLatency', 'DeleteLatency', 'SelectLatency', 'UpdateLatency', 'DMLLatency', 'DDLLatency') (Can be a regexp) |                   |             |
| WARNINGDDLLATENCYAVERAGE        |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDDLLATENCYAVERAGE       |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGDDLTHROUGHPUTAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDDLTHROUGHPUTAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGDELETELATENCYAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDELETELATENCYAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGDELETETHROUGHPUTAVERAGE  |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDELETETHROUGHPUTAVERAGE |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGDMLLATENCYAVERAGE        |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDMLLATENCYAVERAGE       |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGDMLTHROUGHPUTAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDMLTHROUGHPUTAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGINSERTLATENCYAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALINSERTLATENCYAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGINSERTTHROUGHPUTAVERAGE  |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALINSERTTHROUGHPUTAVERAGE |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGQUERIESAVERAGE           |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALQUERIESAVERAGE          |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGSELECTLATENCYAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALSELECTLATENCYAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGSELECTTHROUGHPUTAVERAGE  |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALSELECTTHROUGHPUTAVERAGE |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGUPDATELATENCYAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALUPDATELATENCYAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGUPDATETHROUGHPUTAVERAGE  |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALUPDATETHROUGHPUTAVERAGE |                                                                                                                                                                                                                                                                        |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                                    | --verbose         |             |

</TabItem>
<TabItem value="Rds-Storage" label="Rds-Storage">

| Macro                         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                     |                                                                                                     | average           |             |
| TIMEFRAME                     |                                                                                                     | 600               |             |
| PERIOD                        |                                                                                                     | 60                |             |
| FILTERMETRIC                  | Filter on a specific metric. Can be: FreeStorageSpace, FreeableMemory                               |                   |             |
| WARNINGMEMORYFREE             |                                                                                                     |                   |             |
| CRITICALMEMORYFREE            |                                                                                                     |                   |             |
| WARNINGSTORAGESPACEFREE       |                                                                                                     |                   |             |
| CRITICALSTORAGESPACEFREE      |                                                                                                     |                   |             |
| WARNINGSTORAGESPACEUSAGEPRCT  |                                                                                                     |                   |             |
| CRITICALSTORAGESPACEUSAGEPRCT |                                                                                                     |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Rds-Transactions" label="Rds-Transactions">

| Macro                              | Description                                                                                                                 | Valeur par défaut | Obligatoire |
|:-----------------------------------|:----------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                          |                                                                                                                             | average           |             |
| TIMEFRAME                          |                                                                                                                             | 600               |             |
| PERIOD                             |                                                                                                                             | 60                |             |
| FILTERMETRIC                       | Filter metrics (Can be: 'ActiveTransactions', 'BlockedTransactions', 'CommitThroughput', 'CommitLatency') (Can be a regexp) |                   |             |
| WARNINGACTIVETRANSACTIONSAVERAGE   |                                                                                                                             |                   |             |
| CRITICALACTIVETRANSACTIONSAVERAGE  |                                                                                                                             |                   |             |
| WARNINGBLOCKEDTRANSACTIONSAVERAGE  |                                                                                                                             |                   |             |
| CRITICALBLOCKEDTRANSACTIONSAVERAGE |                                                                                                                             |                   |             |
| WARNINGCOMMITLATENCYAVERAGE        |                                                                                                                             |                   |             |
| CRITICALCOMMITLATENCYAVERAGE       |                                                                                                                             |                   |             |
| WARNINGCOMMITTHROUGHPUTAVERAGE     |                                                                                                                             |                   |             |
| CRITICALCOMMITTHROUGHPUTAVERAGE    |                                                                                                                             |                   |             |
| EXTRAOPTIONS                       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                         | --verbose         |             |

</TabItem>
<TabItem value="Rds-Volume-Iops" label="Rds-Volume-Iops">

| Macro                          | Description                                                                                         | Valeur par défaut   | Obligatoire |
|:-------------------------------|:----------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| FILTERMETRIC                   | Filter metrics (Can be: 'VolumeBytesUsed', 'VolumeReadIOPs', 'VolumeWriteIOPs') (Can be a regexp)   | IOPs                |             |
| STATISTIC                      |                                                                                                     | average             |             |
| TIMEFRAME                      |                                                                                                     | 600                 |             |
| PERIOD                         |                                                                                                     | 60                  |             |
| WARNINGVOLUMEBYTESUSEDAVERAGE  |                                                                                                     |                     |             |
| CRITICALVOLUMEBYTESUSEDAVERAGE |                                                                                                     |                     |             |
| WARNINGVOLUMEREADIOPSAVERAGE   |                                                                                                     |                     |             |
| CRITICALVOLUMEREADIOPSAVERAGE  |                                                                                                     |                     |             |
| WARNINGVOLUMEWRITEIOPSAVERAGE  |                                                                                                     |                     |             |
| CRITICALVOLUMEWRITEIOPSAVERAGE |                                                                                                     |                     |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --per-sec --verbose |             |

</TabItem>
<TabItem value="Rds-Volume-Usage" label="Rds-Volume-Usage">

| Macro                          | Description                                                                                         | Valeur par défaut   | Obligatoire |
|:-------------------------------|:----------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| FILTERMETRIC                   | Filter metrics (Can be: 'VolumeBytesUsed', 'VolumeReadIOPs', 'VolumeWriteIOPs') (Can be a regexp)   | VolumeBytesUsed     |             |
| STATISTIC                      |                                                                                                     | average             |             |
| TIMEFRAME                      |                                                                                                     | 600                 |             |
| PERIOD                         |                                                                                                     | 60                  |             |
| WARNINGVOLUMEBYTESUSEDAVERAGE  |                                                                                                     |                     |             |
| CRITICALVOLUMEBYTESUSEDAVERAGE |                                                                                                     |                     |             |
| WARNINGVOLUMEREADIOPSAVERAGE   |                                                                                                     |                     |             |
| CRITICALVOLUMEREADIOPSAVERAGE  |                                                                                                     |                     |             |
| WARNINGVOLUMEWRITEIOPSAVERAGE  |                                                                                                     |                     |             |
| CRITICALVOLUMEWRITEIOPSAVERAGE |                                                                                                     |                     |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --per-sec --verbose |             |

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
/usr/lib/centreon/plugins/centreon_aws_rds_api.pl \
	--plugin=cloud::aws::rds::plugin \
	--mode=storage \
	--custommode='' \
	--aws-secret-key='' \
	--aws-access-key='' \
	--aws-role-arn='' \
	--region='' \
	--type='' \
	--name='' \
	--proxyurl=''  \
	--filter-metric='' \
	--statistic='average' \
	--timeframe='600' \
	--period='60' \
	--warning-memory-free='' \
	--critical-memory-free='' \
	--warning-storage-space-free='' \
	--critical-storage-space-free='' \
	--warning-storage-space-usage-prct='' \
	--critical-storage-space-usage-prct='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: storage space free: 12 B storage space usage: 80 % memory free: 78 B | 'storage.space.free.bytes'=12B;;;;'storage.space.usage.percentage'=80%;;;;'memory.free.bytes'=78B;;;;
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
/usr/lib/centreon/plugins/centreon_aws_rds_api.pl \
	--plugin=cloud::aws::rds::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                         | Modèle de service associé                                                       |
|:-----------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/connections.pm)]        | Cloud-Aws-Rds-Connections-Api-custom                                            |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/cpu.pm)]                        | Cloud-Aws-Rds-Cpu-Credit-Api-custom<br />Cloud-Aws-Rds-Cpu-Usage-Api-custom     |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/discovery.pm)]            | Used for host discovery                                                         |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/diskio.pm)]                  | Cloud-Aws-Rds-Diskio-Api-custom                                                 |
| instance-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/instancestatus.pm)] | Cloud-Aws-Rds-Instance-Status-Api-custom                                        |
| list-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/listclusters.pm)]     | Not used in this Monitoring Connector                                           |
| list-instances [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/listinstances.pm)]   | Not used in this Monitoring Connector                                           |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/network.pm)]                | Cloud-Aws-Rds-Network-Api-custom                                                |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/queries.pm)]                | Cloud-Aws-Rds-Queries-Api-custom                                                |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/storage.pm)]                | Cloud-Aws-Rds-Storage-Api-custom                                                |
| transactions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/transactions.pm)]      | Cloud-Aws-Rds-Transactions-Api-custom                                           |
| volume [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/volume.pm)]                  | Cloud-Aws-Rds-Volume-Iops-Api-custom<br />Cloud-Aws-Rds-Volume-Usage-Api-custom |

### Custom modes disponibles

Ce connecteur offre plusieurs méthodes pour se connecter à la ressource (CLI, bibliothèque, etc.), appelées **custom modes**.
Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aws_rds_api.pl \
	--plugin=cloud::aws::rds::plugin \
	--list-custommode
```

Le plugin apporte les custom modes suivants :

* awscli
* paws

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
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
<TabItem value="awscli" label="awscli">

| Option              | Description                                                                                                                                                                                                                           |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --aws-secret-key    | Set AWS secret key.                                                                                                                                                                                                                   |
| --aws-access-key    | Set AWS access key.                                                                                                                                                                                                                   |
| --aws-session-token | Set AWS session token.                                                                                                                                                                                                                |
| --aws-role-arn      | Set arn of the role to be assumed.                                                                                                                                                                                                    |
| --aws-profile       | Set AWS profile.                                                                                                                                                                                                                      |
| --endpoint-url      | Override AWS service endpoint URL if necessary.                                                                                                                                                                                       |
| --region            | Set the region name (Required).                                                                                                                                                                                                       |
| --period            | Set period in seconds.                                                                                                                                                                                                                |
| --timeframe         | Set timeframe in seconds.                                                                                                                                                                                                             |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                                                                                                                                                           |
| --zeroed            | Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.                                                                                                                                        |
| --timeout           | Set timeout in seconds (Default: 50).                                                                                                                                                                                                 |
| --sudo              | Use 'sudo' to execute the command.                                                                                                                                                                                                    |
| --command           | Command to get information (Default: 'aws'). Can be changed if you have output in a file.                                                                                                                                             |
| --command-path      | Command path (Default: none).                                                                                                                                                                                                         |
| --command-options   | Command options (Default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                          |
| --proxyurl          | Proxy URL if any                                                                                                                                                                                                                      |
| --skip-ssl-check    | Avoid certificate issuer verification. Useful when AWS resources are hosted by a third-party.  Note that it strips all stderr from the command result. Will be enhanced someday. Debug will only display CLI instead of evreything.   |

</TabItem>
<TabItem value="paws" label="paws">

| Option              | Description                                                                                      |
|:--------------------|:-------------------------------------------------------------------------------------------------|
| --aws-secret-key    | Set AWS secret key.                                                                              |
| --aws-access-key    | Set AWS access key.                                                                              |
| --aws-session-token | Set AWS session token.                                                                           |
| --aws-role-arn      | Set arn of the role to be assumed.                                                               |
| --region            | Set the region name (Required).                                                                  |
| --period            | Set period in seconds.                                                                           |
| --timeframe         | Set timeframe in seconds.                                                                        |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                      |
| --zeroed            | Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.   |
| --proxyurl          | Proxy URL if any                                                                                 |

</TabItem>
</Tabs>

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Rds-Connections" label="Rds-Connections">

| Option                          | Description                                                                                                                |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                           |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                           |
| --filter-metric                 | Filter metrics (Can be: 'DatabaseConnections') (Can be a regexp).                                                          |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'databaseconnections' $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ | Thresholds warning ($metric$ can be: 'databaseconnections' $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Cpu-Credit" label="Rds-Cpu-Credit">

| Option                          | Description                                                                                                                                                   |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                              |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                              |
| --filter-metric                 | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', CPUUtilization') (Can be a regexp).                                                             |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'cpucreditusage', 'cpucreditbalance', 'cpuutilization', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'cpucreditusage', 'cpucreditbalance', 'cpuutilization', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Cpu-Usage" label="Rds-Cpu-Usage">

| Option                          | Description                                                                                                                                                   |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                              |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                              |
| --filter-metric                 | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', CPUUtilization') (Can be a regexp).                                                             |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'cpucreditusage', 'cpucreditbalance', 'cpuutilization', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'cpucreditusage', 'cpucreditbalance', 'cpuutilization', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Diskio" label="Rds-Diskio">

| Option                          | Description                                                                                                                                                                                                          |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                                                                                     |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                                                                                     |
| --filter-metric                 | Filter metrics (Can be: 'ReadThroughput', 'WriteThroughput', 'ReadIOPS', 'WriteIOPS', 'ReadLatency', 'WriteLatency', 'DiskQueueDepth') (Can be a regexp).                                                            |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'readthroughput', 'writethroughput', 'readiops', 'writeiops', 'readlatency', 'writelatency', 'diskqueuedepth', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'readthroughput', 'writethroughput', 'readiops', 'writeiops', 'readlatency', 'writelatency', 'diskqueuedepth', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Instance-Status" label="Rds-Instance-Status">

| Option              | Description                                                                                                                                       |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters   | Only display some counters (regexp can be used). Example: --filter-counters='^total-available$'                                                   |
| --filter-instanceid | Filter by instance id (can be a regexp).                                                                                                          |
| --warning-status    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{state}, %{display}              |
| --critical-status   | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{state}, %{display}             |
| --warning-*         | Warning threshold. Can be: 'total-available', 'total-backing-up', 'total-failed', 'total-maintenance', 'total-stopped', 'total-storage-full'.     |
| --critical-*        | Critical threshold. Can be: 'total-available', 'total-backing-up', 'total-failed', 'total-maintenance', 'total-stopped', 'total-storage-full'.    |

</TabItem>
<TabItem value="Rds-Network" label="Rds-Network">

| Option                          | Description                                                                                                                                                   |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                              |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                              |
| --filter-metric                 | Filter metrics (Can be: 'NetworkReceiveThroughput', 'NetworkTransmitThroughput') (Can be a regexp).                                                           |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'networkreceivethroughput', 'networktransmitthroughput', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ | Thresholds warning ($metric$ can be: 'networkreceivethroughput', 'networktransmitthroughput', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Queries" label="Rds-Queries">

| Option                          | Description                                                                                                                                                                                                                                                                                                                        |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                                                                                                                                                                                                   |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                                                                                                                                                                                                   |
| --filter-metric                 | Filter metrics (Can be: 'Queries', 'InsertThroughput', 'DeleteThroughput', 'SelectThroughput', 'UpdateThroughput', 'DMLThroughput', 'DDLThroughput', 'InsertLatency', 'DeleteLatency', 'SelectLatency', 'UpdateLatency', 'DMLLatency', 'DDLLatency') (Can be a regexp).                                                            |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'queries', 'insertthroughput', 'deletethroughput', 'selectthroughput', 'updatethroughput', 'dmlthroughput', 'ddlthroughput', 'insertlatency', 'deletelatency', 'selectlatency', 'updatelatency', 'dmllatency', 'ddllatency', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'queries', 'insertthroughput', 'deletethroughput', 'selectthroughput', 'updatethroughput', 'dmlthroughput', 'ddlthroughput', 'insertlatency', 'deletelatency', 'selectlatency', 'updatelatency', 'dmllatency', 'ddllatency', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Storage" label="Rds-Storage">

| Option                                 | Description                                                                                       |
|:---------------------------------------|:--------------------------------------------------------------------------------------------------|
| --type                                 | Set the instance type (Required) (Can be: 'cluster','instance').                                  |
| --name                                 | Set the instance name (Required) (can be defined multipletimes).                                  |
| --filter-metric                        | Filter on a specific metric. Can be: FreeStorageSpace, FreeableMemory.                            |
| --add-space-usage-percent              | Check storage usage space percentage (need privileges to describe rds).                           |
| --warning-$metric$ --critical-$metric$ | Thresholds ($metric$ can be: 'storage-space-free', 'storage-space-usage-prct', 'memory-free').    |

</TabItem>
<TabItem value="Rds-Transactions" label="Rds-Transactions">

| Option                          | Description                                                                                                                                                                             |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                                                        |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                                                        |
| --filter-metric                 | Filter metrics (Can be: 'ActiveTransactions', 'BlockedTransactions', 'CommitThroughput', 'CommitLatency') (Can be a regexp).                                                            |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'activetransactions', 'blockedtransactions', 'committhroughput', 'commitlatency', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'activetransactions', 'blockedtransactions', 'committhroughput', 'commitlatency', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Volume-Iops" label="Rds-Volume-Iops">

| Option                          | Description                                                                                                                                                   |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster').                                                                                                         |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                              |
| --filter-metric                 | Filter metrics (Can be: 'VolumeBytesUsed', 'VolumeReadIOPs', 'VolumeWriteIOPs') (Can be a regexp).                                                            |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'volumebytesused', 'volumereadiops', 'volumewriteiops', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'volumebytesused', 'volumereadiops', 'volumewriteiops', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Volume-Usage" label="Rds-Volume-Usage">

| Option                          | Description                                                                                                                                                   |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster').                                                                                                         |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                              |
| --filter-metric                 | Filter metrics (Can be: 'VolumeBytesUsed', 'VolumeReadIOPs', 'VolumeWriteIOPs') (Can be a regexp).                                                            |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'volumebytesused', 'volumereadiops', 'volumewriteiops', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'volumebytesused', 'volumereadiops', 'volumewriteiops', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aws_rds_api.pl \
	--plugin=cloud::aws::rds::plugin \
	--mode=storage \
	--custommode='paws' \
	--help
```
