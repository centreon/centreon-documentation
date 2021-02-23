---
id: cloud-aws-efs
title: Amazon EFS
---

## Vue d'ensemble

Amazon Elastic File System (Amazon EFS) est un système de stockage de fichiers NFS simple, évolutif, souple qui s’utilise avec AWS Cloud Services et les ressources sur site. Il prend en charge plusieurs pétaoctets de données à la demande sans interrompre les applications, ajustant automatiquement sa capacité à la hausse ou à la baisse en fonction de l'ajout ou de la suppression de fichiers. De cette manière, il n’est plus nécessaire d’allouer et de gérer la capacité en fonction de la croissance.

## Contenu du Plugin-Pack

### Objets supervisés

* Filesystems

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

| Rule name                             | Description                                                   |
| :------------------------------------ | :------------------------------------------------------------ |
| Cloud-Aws-Efs-Api-HostDiscovery       | Discover File Systems from your Cloudwatch endpoint           |

<!--Services-->

Pas de règles de découverte de service pour ce pack 

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officiel du service EFS: https://docs.aws.amazon.com/efs/latest/ug/monitoring-cloudwatch.html

<!--DOCUSAURUS_CODE_TABS-->
<!--Connections-->

| Metric name         | Description                                                     |
| :------------------ | :-------------------------------------------------------------- |
| ClientConnections   | The number of client connections to a file system. Unit: Count  |

<!--Data Usage-->

| Metric name        | Description                                                                                                                                                                                |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DataReadIOBytes    | The number of bytes for each file system read operation. Unit: Bytes                                                                                                                       |
| DataWriteIOBytes   | The number of bytes for each file write operation. Unit: Bytes                                                                                                                             |
| MetadataIOBytes    | The number of bytes for each metadata operation. Unit: Bytes                                                                                                                               |
| TotalIOBytes       | The number of bytes for each file system operation, including data read, data write, and metadata operations. Unit: Bytes                                                                  |
| BurstCreditBalance | The number of burst credits that a file system has. Burst credits allow a file system to burst to throughput levels above a file system’s baseline level for periods of time. Unit: Bytes  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges AWS

Voici la liste des droits nécessaires au travers des access/secret key utilisées pour pouvoir utiliser le monitoring AWS/EFS: 

| AWS Privilege                         | Description                                          |
| :------------------------------------ | :--------------------------------------------------- |
| elasticfilesystem:DescribeFileSystems | List all EFS Filesystems IDs                         |
| cloudwatch:listMetrics                | List all metrics from Cloudwatch AWS/EFS namespace   |
| cloudwatch:getMetricStatistics        | Get metrics values from Cloudwatch AWS/EFS namespace |

### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire *awscli*, soit le SDK perl Paws. Le SDK est recommandé car plus performant. **Attention** il n'est pas possible d'utiliser perl-Paws si vous passez pas un proxy.

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

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources AWS/EFS:

```bash
yum install centreon-plugin-Cloud-Aws-Efs-Api
```

2. Dans l'interface Centreon, installer le Plugin-Pack 'Amazon EFS' depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources AWS/EFS:

```bash
yum install centreon-plugin-Cloud-Aws-Efs-Api
```

2. Installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-cloud-aws-efs.noarch
```

3. Dans l'interface Web de Centreon, installer le Plugin-Pack 'Amazon EFS' depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle "Cloud-Aws-EFS-custom". Une fois celui-ci configuré, certaines macros doivent être renseignées: 

| Obligatoire | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
| X           | AWSFILESYSTEMID | Name of the FileSystem to be monitored                                                      |
|             | PROXYURL        | Configure proxy URL information                                                             |
|             | EXTRAOPTIONS    | Any extraoptions you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

## FAQ

### Comment tester un contrôle en ligne de commande et que signifient les options principales ?

A partir du moment ou le Plugin est installé, vous pouvez tester celui-ci directement depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_aws_efs_api.pl \
    --plugin=cloud::aws::efs::plugin \
    --mode=connections \
    --custommode='awscli' \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --name='fs-1234abcd' \
    --proxyurl='http://myproxy.mycompany.org:8080'
    --filter-metric='' \
    --statistic='average' \
    --timeframe='600' \
    --period='60' \
    --warning-client-connections='25' \
    --critical-client-connections='50' \
    --verbose

OK: 'fs-1234abcd' Statistic 'Sum' Metrics ClientConnections: 19.00 | 'client-connections_sum'=19;;;;
EFS FileSystemId'fs-1234abcd'
Statistic 'Sum' Metrics ClientConnections: 19.00

```

La commande ci-dessus contrôle le nombre de connexions (```--mode=connections```) sur le système de fichier *fs-1234abcd* (```--name='fs-1234abcd'```). Ce système de fichier est rattaché à une ressource hébergée dans la région AWS *eu-west-1* (```--region='eu-west-1'```). La métrique obtenue est une somme de valeurs (```--statistic='sum'```) sur un intervalle de 10 minutes / 600 secondes  (```--timeframe='600'```) avec un point par minute / 60 secondes (```--period='60'```).

Cette commande déclenche un WARNING si le nombre de connexions est supérieur à 25 et un CRITICAL s'il est supérieur à 50.

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```/usr/lib/centreon/plugins//centreon_aws_efs_api.pl --plugin=cloud::aws::efs::plugin --mode=connections --help```

### UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'Amazon Cloudwatch n'a pas consolidé de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro EXTRAOPTIONS du **service** en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNWON.
