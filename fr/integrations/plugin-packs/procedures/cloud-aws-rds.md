---
id: cloud-aws-rds
title: Amazon RDS
---

## Vue d'ensemble

Amazon Relational Database Service (Amazon RDS) est un service web qui facilite la configuration, l'exploitation et la mise à l'échelle d'une base de données relationnelle dans le Cloud AWS. Il fournit des capacités redimensionnables, à faible coût, pour les bases de données relationnelles classiques, et gère les tâches courantes d'administration de base de données.

## Contenu du pack de supervision

### Objets supervisés

* Instances (MySQL, MariaDB, Oracle ...)
* Clusters (Aurora, ...)

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

| Rule name                       | Description                                                   |
| :------------------------------ | :------------------------------------------------------------ |
| Cloud-Aws-Rds-Api-HostDiscovery | Discover Instances and Clusters from your Cloudwatch endpoint |

<!--Services-->

No services discovery rule available on this pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci après sur la documentation officiel du service RDS: https://docs.aws.amazon.com/rds/index.html

<!--DOCUSAURUS_CODE_TABS-->
<!--Connections-->

| Metric name         | Description                             | Unit:  |
| :------------------ | :-------------------------------------- |:------ |
| DatabaseConnections | Number of connections to the database.  | Count  |

<!--Cpu-->

| Metric name      | Description                                                | Unit                    |                   
| :--------------- | :--------------------------------------------------------- |:----------------------- |
| CPUCreditBalance | Balance of allocated CPU credit to this type of instance.  | Credits (vCPU-minutes)  |
| CPUCreditUsage   | Number of CPU credit consumed.                             | Credits (vCPU-minutes)  |
| CPUUtilization   | The percentage of CPU utilization.                         | Percentage              |

<!--Disk-IO-->

| Metric name     | Description                                                                     | Unit         |
| :-------------- | :------------------------------------------------------------------------------ |:------------ |
| ReadIOPS        | The average number of disk read I/O operations per second.                      | Count/Second |
| WriteIOPS       | The average number of disk write I/O operations per second.                     | Count/Second |
| ReadThroughput  | The average number of bytes read from disk per second.                          | Bytes/Second |
| WriteThroughput | The average number of bytes write to disk per second.                           | Bytes/Second |
| ReadLatency     | The average amount of time taken per disk I/O read operation.                   | Seconds      |
| WriteLatency    | The average amount of time taken per disk I/O write operation.                  | Seconds      |
| DiskQueueDepth  | The number of outstanding IOs (read/write requests) waiting to access the disk. | Count        |

<!--Network-->

| Metric name               | Description                                                                                                                          | Unit          |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |:------------- |
| NetworkReceiveThroughput  | The incoming traffic on the DB instance, including both customer db traffic and AWS/RDS traffic used for monitoring and replication. | Bytes/Second  |
| NetworkTransmitThroughput | The outgoing traffic on the DB instance, including both customer db traffic and AWS/RDS traffic used for monitoring and replication. | Bytes/Second  |

<!--Storage-->

| Metric name      | Description                                   | Unit          |
| :--------------- | :---------------------------------------------|:------------- |
| FreeStorageSpace | The amount of available storage space.        | Bytes/Second  |
| FreeableMemory   | The amount of available random access memory. | Bytes/Second  |

<!--Queries-->

| Metric name      | Description                                                                                             |
| :--------------- | :------------------------------------------------------------------------------------------------------ |
| Queries          | The average number of queries executed per second **(Only available on Aurora MySQL)**                  |
| InsertThroughput | The average number of insert queries per second **(Only available on Aurora MySQL)**                    |
| SelectThroughput | The average number of select queries per second **(Only available on Aurora MySQL)**                    |
| DeleteThroughput | The average number of delete queries per second **(Only available on Aurora MySQL)**                    |
| UpdateThroughput | The average number of update queries per second **(Only available on Aurora MySQL)**                    |
| DDLThroughput    | The average number of DataDefinitionLanguage requests per second **(Only available on Aurora MySQL)**   |
| DMLThroughput    | The average number of DataModificationLanguage requests per second **(Only available on Aurora MySQL)** |

<!--Transactions-->

| Metric name         | Description                                                                                                                                                                                                                  |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ActiveTransactions  | The average number of current transactions executing on an Aurora database instance per second. **(Only available on Aurora MySQL) Set innodb\_monitor\_enable='all' in the DB parameter group for a specific DB instance.** |
| BlockedTransactions | The average number of transactions in the database that are blocked per second **(Only available on Aurora MySQL)**                                                                                                          |
| CommitLatency       | The amount of latency for commit operations, in milliseconds **(Only available on Aurora MySQL and Postgres)**                                                                                                               |
| CommitThroughput    | The average number of commit operations per second **(Only available on Aurora MySQL and Postgres)**                                                                                                                         |

<!--Volume-->

| Metric name     | Description                                                                                                                                                    |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VolumeBytesUsed | The amount of storage used by your Aurora DB instance, in bytes and then affecting the cost of your instance **(Only available on Aurora MySQL and Postgres)** |
| VolumeReadIOPs  | The number of billed read I/O operations from a cluster volume, reported at 5-minute intervals. **(Only available on Aurora MySQL and Postgres)**              |
| VolumeWriteIOPs | The number of write disk I/O operations to the cluster volume, reported at 5-minute intervals. **(Only available on Aurora MySQL and Postgres)**               |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisistes

### AWS Configuration

Voici la liste des droits nécessaires au travers des access/secret key utilisées pour pouvoir utiliser le monitoring AWS/RDS: 

| AWS Privilege                  | Description                                                        |
| :----------------------------- | :----------------------------------------------------------------- |
| rds:DescribeDBInstances        | Display RDS instances & cluster descriptions                       |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/RDS namespace on Cloudwatch               |

### Plugin dependencies

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire awscli, soit le SDK perl Paws. Le SDK est recommandé car plus performant. **Attention** il n'est pas possible d'utiliser perl-Paws si vous passez pas un proxy !

<!--DOCUSAURUS_CODE_TABS-->

<!--perl-Paws-installation-->

```bash
yum install perl-Paws
```

<!--aws-cli-installation-->

```bash
yum install awscli
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources RDS:

```bash
yum install centreon-plugin-Cloud-Aws-Rds-Api
```

2. Installer le pack depuis la page "Configuration > Plugin packs > Manager":

<!--Offline IMP License-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources RDS:

```bash
yum install centreon-plugin-Cloud-Aws-Rds-Api
```

2. Installer le RPM contenant les modèles de supervision

```bash
yum install centreon-pack-cloud-aws-rds.noarch
```

3. Installer le pack depuis la page "Configuration > Plugin packs > Manager":

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

En fonction du type d'instance et de la base de données supervisée, choisissez le modèle d'hôte correspondant dans ceux commençant par "Cloud-Aws-Rds-". Une fois le modèle d'hôte appliqué, il est possible de définir l'ensemble des macros nécessaires au fonctionnement des contrôles:

| Obligatoire | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
| X           | AWSINSTANCENAME | Name of the instance you want to monitor                                                    |
| X           | AWSINSTANCETYPE | Instance type checked ('instance' or 'cluster')                                             |
|             | PROXYURL        | Configure proxy URL informations                                                            |
|             | EXTRAOPTIONS    | Any extraoptions you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

## FAQ

### Comment tester en ligne de commande et quelles significations portent les options principales ?

A partir du moment ou la sonde est installée, vous pouvez tester directement depuis votre poller de supervision avec l'utilisateur centreon-engine:

```bash
/usr/lib/centreon/plugins//centreon_aws_rds_api.pl \
    --plugin=cloud::aws::rds::plugin \
    --mode=connections \
    --custommode='awscli' \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --type='cluster' \
    --name='dev-cluster' \
    --environment='HTTPS_PROXY=http://proxy.int.company.com:3128/' \
    --filter-metric='' \
    --statistic='average' \
    --timeframe='600' \
    --period='60' \
    --warning-databaseconnections-average='25' \
    --critical-databaseconnections-average='50' \
    --verbose

OK: Cluster 'dev-cluster' average DatabaseConnections: 3 | 'dev-cluster#databaseconnections_average'=3;25;50;0;
Cluster 'dev-cluster' average DatabaseConnections: 3

```

La commande ci-dessus interroge le nombre de connections (```--mode=connections``` sur un cluster de base de données (```--type='cluster'```) dont le nom est dev-cluster (```--name='dev-cluster'```). Ce cluster est herbergé sur la zone/région eu-west-1 d'AWS (```--region='eu-west-1'```). La valeur de la métrique sera une moyenne (```--statistic='average'```) sur une période de 600 secondes / 10 min (```--timeframe='600'```) et échantilloné à un point par minute (```--period='60'```).

Une alerte WARNING sera déclenchée si la valeur dépasse 25, et CRITICAL si elle dépasse 50 (```--warning-databaseconnections-average='25' --critical-databaseconnections-average='50'```).

Toutes les options des différents modes sont consultables via le help:

```/usr/lib/centreon/plugins//centreon_aws_rds_api.pl --plugin=cloud::aws::rds::plugin --mode=<modename> --help```

### UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. Cela signifie qu'Amazon Cloudwatch n'a pas consolidé de données sur la période.

Vous pouvez ajouter ' --zeroed' à la macro EXTRAOPTIONS du **service** en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNWON.