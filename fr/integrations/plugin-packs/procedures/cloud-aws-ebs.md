---
id: cloud-aws-ebs
title: Amazon EBS
---

## Vue d'ensemble

Amazon Elastic Block Store (EBS) est un service de stockage par bloc hautes performances et simple d'utilisation conçu en vue d'une utilisation avec Amazon Elastic Compute Cloud (EC2) 
pour les charges de travail exigeantes en débit et en transactions à n'importe quelle échelle.
Des charges de travail variées, telles que des bases de données relationnelles et non relationnelles, des applications d'entreprise, des applications conteneurisées, des moteurs d'analyse Big Data, 
des systèmes de fichiers et des workflows multimédias, sont largement déployées sur Amazon EBS.

Le Plugin Centreon Amazon EBS utilise l'API Amazon Cloudwatch pour collecter les métriques associées.

## Contenu du Plugin-Pack

### Objets supervisés

* Volumes EBS: standard, gp2, st1, sc1 & io1

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

| Rule name                       | Description                   |
| :------------------------------ | :---------------------------- |
| Cloud-Aws-Ebs-Api-HostDiscovery | Découverte de vos volumes EBS |

<!--Services-->

Aucune règle de découverte de service n'est associée à ce Plugin-Pack. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques supervisées

Les métriques présentées ci-après sont également détaillées dans la documentation officielle du service EBS:
https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/using_cloudwatch_ebs.html

<!--DOCUSAURUS_CODE_TABS-->

<!--Ebs-Volume-Io-->

| Metric name      | Description                                                                             |
| :--------------- | :-------------------------------------------------------------------------------------- |
| VolumeReadBytes  | Provides information on the read operations in a specified period of time. Unit: Bytes  |
| VolumeWriteBytes | Provides information on the write operations in a specified period of time. Unit: Bytes |

<!--Ebs-Iops-->

| Metric name                | Description                                                                                                                           |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| VolumeReadOps              | The total number of read operations in a specified period of time. Unit: Count                                                        |
| VolumeWriteOps             | The total number of write operations in a specified period of time. Unit: Count                                                       |
| VolumeThroughputPercentage | The percentage of I/O operations per second (IOPS) delivered of the total IOPS provisioned for an Amazon EBS volume. Unit: Percent    |
| VolumeConsumedReadWriteOps | The total amount of read and write operations (normalized to 256K capacity units) consumed in a specified period of time. Unit: Count |
| VolumeQueueLength          | The number of read and write operation requests waiting to be completed in a specified period of time. Unit: Count                    |

<!--Ebs-Time-->

| Metric name          | Description                                                                                                              |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| VolumeTotalReadTime  | The total number of seconds spent by all read operations that completed in a specified period of time. Unit: Seconds     |
| VolumeTotalWriteTime | The total number of seconds spent by all write operations that completed in a specified period of time. Unit: Seconds    |
| VolumeIdleTime       | The total number of seconds in a specified period of time when no read or write operations were submitted. Unit: Seconds |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges AWS

Voici la liste des droits nécessaires au travers des *access/secret keys* utilisées pour pouvoir implémenter la supervision des ressources Amazon EBS: 

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| ec2:DescribeVolumes            | Describes the specified EBS volumes or all of your EBS volumes  |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EBS namespace on Cloudwatch            |

### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire *awscli* fourni par Amazon, soit le SDK Perl *paws*. 
Le SDK est recommandé car plus performant. 

Installez le binaire choisi en lançant l'une des commandes suivantes:

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

> **Attention** il n'est actuellement **pas** possible d'utiliser *paws* dans les cas suivants:
> * si la connexion s'effectue au travers d'un proxy.
> * utilisation de la fonctionnalité de *Découverte d'Hôte* dans Centreon.

## Installation 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Amazon EBS:

```bash
yum install centreon-plugin-Cloud-Aws-Ebs-Api
```

2. Dans l'interface Centreon, installer le Plugin-Pack 'Amazon EBS' depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Amazon EBS:

```bash
yum install centreon-plugin-Cloud-Aws-Ebs-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin-Pack 'Amazon EBS':

```bash
yum install centreon-pack-cloud-aws-ebs.noarch
```

3. Dans l'interface Web de Centreon, installer le Plugin-Pack 'Amazon EBS' depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Lorsque vous ajoutez un Hôte à Centreon, choisissez le modèle *Cloud-Aws-Ebs-Custom*. Une fois celui-ci appliqué, certaines Macros liées
à l'Hôte doivent être renseignées:

| Mandatory   | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
| X           | AWSVOLUMEID     | EBS Volume ID                                                                               |
|             | PROXYURL        | Configure proxy URL                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it unless you know what you are doing              |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

<!--END_DOCUSAURUS_CODE_TABS-->

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine* 
(certaines options comme ```volume-id``` ou ```proxyurl``` doivent être ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins//centreon_aws_ebs_api.pl \
	--plugin=cloud::aws::ebs::plugin \
	--mode=volumeio \
	--custommode='awscli' \
	--aws-secret-key='***' \
	--aws-access-key='***' \
	--region='eu-west-1' \
	--proxyurl='http://myproxy.mycompany.org:8080' \
	--volume-id='vol-1234abcd' \
	--statistic='average' \
	--timeframe='600' \
	--period='60' \
	--warning-volume-write-bytes='60000000' \
	--critical-volume-write-bytes='90000000' \
	-- verbose
```

La commande retourne le message de sortie ci-dessous:

```bash 	
OK: 'vol-1234abcd' Statistic 'Average' Metrics Volume Read Bytes: 28.40 KB, Volume Write Bytes: 54.61 MB | 
'vol-1234abcd~average#ebs.volume.bytes.read.bytes'=29081.60B;;;; 'vol-1234abcd~average#ebs.volume.bytes.write.bytes'=57261465.60B;0:60000000;0:90000000;;
AWS EBS Volume'vol-1234abcd'
    Statistic 'Average' Metrics Volume Read Bytes: 28.40 KB, Volume Write Bytes: 54.61 MB
```

Cette commande supervise les IOs d'un volume EBS (```--mode=volumeio```) rattaché à la région *eu-west-1* d'AWS (```--region='eu-west-1'```)
et ayant pour ID *vol-1234abcd* (```--volume-id='vol-1234abcd'```).

La métrique obtenue est une moyenne de valeurs (```--statistic='average'```) sur un intervalle de 10 minutes / 600 secondes  (```--timeframe='600'```) avec un point par minute / 60 secondes (```--period='60'```).

Une alerte WARNING sera déclenchée si la moyenne des écriture sur le volume pour la période donnée est supérieure à 60MB, et CRITICAL si elle est supérieure à 90MB. 
(```--warning-volume-write-bytes='60000000' --critical-volume-write-bytes='90000000'```).

Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aws_ebs_api.pl --plugin=cloud::aws::ebs::plugin --mode=volumeio --help
```

### J'obtiens le message d'erreur suivant:  

#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'Amazon Cloudwatch n'a pas consolidé de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro **EXTRAOPTIONS** du *Service* en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.

#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]```

Cette erreur signifie que le rôle IAM associé au combo access-key/secret-key n'a pas les droits suffisants pour réaliser une opération donnée.

#### ```UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]```

Le plus souvent, cette erreur est le résultat d'une erreur dans le nom de l'élément supervisé (option ```--volume-id```).
