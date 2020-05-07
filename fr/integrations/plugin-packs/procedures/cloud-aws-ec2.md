---
id: cloud-aws-ec2
title: Amazon EC2
---

## Vue d'ensemble

Amazon Elastic Compute Cloud (Amazon EC2) offre une capacité de calcul évolutive dans le cloud Amazon Web Services (AWS). L'utilisation d'Amazon EC2 vous dispense d'investir à l'avance dans du matériel et, par conséquent, vous pouvez développer et déployer les applications plus rapidement. Vous pouvez utiliser Amazon EC2 pour lancer autant de serveurs virtuels que nécessaire, configurer la sécurité et la mise en réseau, et gérer le stockage.

## Contenu du Plugin-Pack

### Objets supervisés

* Instances EC2
* Groupes Auto Scaling EC2
* Requêtes Spot Fleet EC2

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

| Rule name                           | Description                                 |
| :---------------------------------- | :------------------------------------------ |
| Cloud-Aws-Ec2-Api-HostDiscovery-Ec2 | Découverte de vos instances EC2 Instances   |
| Cloud-Aws-Ec2-Api-HostDiscovery-Asg | Découverte de vos Groupes Auto Scaling EC2  |

<!--Services-->

Aucune règle de découverte de service n'est associée à ce Plugin-Pack. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques supervisées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officielle du service EC2:
https://docs.aws.amazon.com/fr_fr/autoscaling/ec2/userguide/as-monitoring-features.html

Au delà des modes et métriques détaillées ci-après, les indicateurs supplémentaires suivants sont également disponibles:

 * Instance-Types: Nombre d'instances pour chaque famille d'instance AWS/EC2 et types associés.
 * Instance-Status: Statuts unitaires et globaux de vos instances EC2 en cours d'exécution (ainsi que le nombre total)

<!--DOCUSAURUS_CODE_TABS-->

<!--Ec2-Cpu-Credit-->

Ce contrôle est associé aux Modèles d'Hôtes suivants: 'Cloud-Aws-Ec2-Asg' et 'Cloud-Aws-Ec2-Instance'.

| Metric name                  | Description                                                                                                                                        |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| CPUCreditBalance             | The number of earned CPU credits that an instance has accrued since it was launched or started. Unit: Credit vCPU-minutes)                         |
| CPUCreditUsage               | Number of CPU credit consumed. Unit: Credits (vCPU-minutes)                                                                                        |
| CPUSurplusCreditBalance      | The number of surplus credits that have been spent by an unlimited instance when its CPUCreditBalance value is zero. Credits (vCPU-minutes)        |
| CPUSurplusCreditsCharged     | The number of spent surplus credits that are not paid down by earned CPU credits, and which thus incur an additional charge. Unit: Credits(vCPU-minutes)|

<!--Ec2-Cpu-Usage-->

Ce contrôle est associé aux Modèles d'Hôtes suivants: 'Cloud-Aws-Ec2-Asg' et 'Cloud-Aws-Ec2-Instance'.

| Metric name      | Description                                                                            |
| :--------------- | :------------------------------------------------------------------------------------- |
| CPUUtilization   | The percentage of CPU utilization. Unit: Percent                                       |

<!--Ec2-Diskio-->

Ce contrôle est associé aux Modèles d'Hôtes suivants: 'Cloud-Aws-Ec2-Asg' et 'Cloud-Aws-Ec2-Instance'.

| Metric name     | Description                                                                                  |
| :-------------- | :------------------------------------------------------------------------------------------- |
| ReadIOPS        | The average number of disk read I/O operations per second. Unit: Count/Second                |
| WriteIOPS       | The average number of disk write I/O operations per second. Unit: Count/Second               |
| ReadThroughput  | The average number of bytes read from disk per second. Unit: Bytes/Second                    |
| WriteThroughput | The average number of bytes write to disk per second. Unit: Bytes/Second                     |
| ReadLatency     | The average amount of time taken per disk I/O read operation. Unit: Seconds                  |
| WriteLatency    | The average amount of time taken per disk I/O write operation. Unit: Seconds                 |
| DiskQueueDepth  | The number of outstanding IOs (read/write requests) waiting to access the disk. Unit: Count  |

> **Remarque** Ces métriques sont généralement nulles lorsque collectées sur un groupe d'AutoScaling.

<!--Ec2-Network-->

Ce contrôle est associé aux Modèles d'Hôtes suivants: 'Cloud-Aws-Ec2-Asg' et 'Cloud-Aws-Ec2-Instance'.

| Metric name       | Description                                                                                                                                              |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NetworkIn         | The number of bytes received on all network interfaces by the instance. This metric identifies the volume of incoming network traffic to a single instance. Unit: Bytes/Second  |
| NetworkOut        | The number of bytes sent out on all network interfaces by the instance. This metric identifies the volume of outgoing network traffic from a single instance. Unit: Bytes/Second  |
| NetworkPacketsIn  | The number of packets received on all network interfaces by the instance. This metric identifies the volume of incoming traffic in terms of the number of packets on a single instance. This metric is available for basic monitoring only. Unit: Packets/Second  |
| NetworkPacketsOut | The number of packets sent out on all network interfaces by the instance. This metric identifies the volume of outgoing traffic in terms of the number of packets on a single instance. This metric is available for basic monitoring only. Unit: Packets/Second  |

<!--EC2Spot-Active-Instances-->

Ce contrôle est associé aux Modèles d'Hôtes suivants: 'Cloud-Aws-Ec2-Asg' et 'Cloud-Aws-Ec2-Instance'.

| Metric name         | Description                                                                   |
| :------------------ | :---------------------------------------------------------------------------- |
| ActiveInstances     | Number of active instances for a give EC2Spot fleet request. Unit: Count.     |
| HealthyInstances    | Number of healthy instances for a give EC2Spot fleet request. Unit: Count.    |
| UnhealthyInstances  | Number of unhealthy instances for a give EC2Spot fleet request. Unit: Count.  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges AWS

Voici la liste des droits nécessaires au travers des access/secret key utilisées pour pouvoir utiliser le monitoring AWS/EC2: 

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| ec2:DescribeInstances          | Display EC2 instances & ASG details                             |
| ec2:DescribeSpotFleetRequests  | Display EC2 Spot Fleet Requests details                         |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EC2 namespace on Cloudwatch            |

### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire *awscli* fourni par Amazon, soit le SDK Perl *paws*. Le SDK est recommandé car plus performant. 

> **Attention** il n'est pas possible d'utiliser *paws* si la connexion s'effectue au travers d'un proxy.

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

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources AWS/EC2:

```bash
yum install centreon-plugin-Cloud-Aws-Ec2-Api
```

2. Dans l'interface Centreon, installer le Plugin-Pack 'Amazon EC2' depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources AWS/EC2:

```bash
yum install centreon-plugin-Cloud-Aws-Ec2-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin-Pack 'Amazon EC2':

```bash
yum install centreon-pack-cloud-aws-ec2.noarch
```

3. Dans l'interface Web de Centreon, installer le Plugin-Pack 'Amazon EC2' depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Lorsque vous ajoutez un Hôte à Centreon, choisissez le modèle de votre choix. Tous les modèles liés à la supervision du 
service AWS/EC2 commencent par "Cloud-Aws-EC2*".

Tous les Modèles d'Hôtes partagent certaines macros à renseigner:

| Mandatory   | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
|             | PROXYURL        | Configure proxy URL                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

Selon le Modèle d'Hôte utilisé, il est nécessaire de paramétrer des macros supplémentaires:

<!--DOCUSAURUS_CODE_TABS-->

<!--Cloud-Aws-Ec2-Asg-&-Cloud-Aws-Ec2-Instance-->

| Mandatory   | Nom             | Description                                                |
| :---------- | :-------------- | :--------------------------------------------------------- |
| X           | AWSINSTANCENAME | Name of the instance you want to monitor                   |
| X           | AWSINSTANCETYPE | Type of instance to check ('instance' or 'cluster')        |

<!--Cloud-Aws-Ec2-Spot-Fleet-Request-->

| Mandatory   | Nom                | Description                                             |
| :---------- | :----------------- | :------------------------------------------------------ |
| X           | SPOTFLEETREQUESTID | Spot Fleet Request identifier. (e.g: sfr-abcd1234)      |

<!--END_DOCUSAURUS_CODE_TABS-->

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

A partir du moment ou le Plugin est installé, vous pouvez tester celui-ci directement depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:
(Certaines options, comme par exemple ```--name``` doivent être ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins//centreon_aws_ec2_api.pl
	--plugin=cloud::aws::ec2::plugin
	--mode=cpu
	--custommode='awscli'
	--aws-secret-key='***'
	--aws-access-key='AKIA5EDPTASPNBK5EMTM'
	--region='eu-west-1'
	--type='asg'
	--name='centreon-front'
	--filter-metric='Utilization'
	--statistic='average'
	--timeframe='600'
	--period='60'
	--warning-cpu-utilization='80'
	--critical-cpu-utilization='90'
```

La commande produit le message de sortie ci-dessous:

```bash 	
OK: Asg 'centreon-front' Statistic 'Average' Metrics CPU Utilization: 35.81 | 'centreon-front~average#ec2.cpu.utilization.percentage'=35.81;80;90;;
```

Cette commande supervise la consommation CPU (```--mode=cpu```) sur le groupe d'Auto Scaling *centreon-front* (```--name='centreon-front' --type='asg'```). 
Ce groupe est rattaché à la région *eu-west-1* d'AWS (```--region='eu-west-1'```).

La métrique obtenue est une moyenne de valeurs (```--statistic='average'```) sur un intervalle de 10 minutes / 600 secondes  (```--timeframe='600'```) avec un point par minute / 60 secondes (```--period='60'```).

Une alerte WARNING sera déclenchée lorsque la consommation CPU sera supérieure à 80M, et CRITICAL si elle est supérieure à 90%.

Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aws_ec2_api.pl --plugin=cloud::aws::ec2::plugin --mode=cpu --help
```

### J'obtiens le message d'erreur suivant:  ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'Amazon Cloudwatch n'a pas consolidé de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro EXTRAOPTIONS du **service** en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.

### UNKNOWN: Command error:  - An error occurred (AuthFailure) [...] 

Cette erreur signifie que le rôle IAM associé au combo access-key/secret-key n'a pas les droits suffisants pour réaliser une opération donnée.

### UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]

Le plus souvent, cette erreur est le résultat d'une erreur dans le nom de l'élément supervisé (option ```--name```).
